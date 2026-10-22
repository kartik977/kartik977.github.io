"""Private, opt-in ExamAtlas admin email alerts. No public sign-up or address storage.

Required GitHub secrets (or environment vars):
  EA_SMTP_HOST, EA_SMTP_PORT (default 587), EA_SMTP_USER,
  EA_SMTP_PASSWORD, EA_ALERT_FROM, EA_ALERT_RECIPIENTS

Recipient list stays in GitHub Actions secrets and is never committed.
"""
from __future__ import annotations

from datetime import date, datetime
from email.message import EmailMessage
from pathlib import Path
from zoneinfo import ZoneInfo
import json
import os
import re
import smtplib
import sys

IST = ZoneInfo("Asia/Kolkata")
DAYS_TO_NOTIFY = {0, 1, 3, 7}
ROOT = Path(__file__).resolve().parent.parent
EMAIL_RE = re.compile(r"^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$")


def collect_alerts(records: list[dict], day: date) -> list[dict]:
    """Select only the manually verified, not-expired application windows."""
    selected = []
    for entry in records:
        if entry.get("status") != "verified-window" or not entry.get("end"):
            continue
        try:
            deadline = date.fromisoformat(entry["end"])
            start = date.fromisoformat(entry["start"]) if entry.get("start") else None
        except (ValueError, TypeError):
            continue
        days = (deadline - day).days
        if (start is None or start <= day) and days in DAYS_TO_NOTIFY:
            selected.append({**entry, "daysRemaining": days})
    return selected


def build_message(items: list[dict], today: date, sender: str, recipients: list[str]) -> EmailMessage:
    email = EmailMessage()
    email["From"] = sender
    email["To"] = sender
    email["Bcc"] = ", ".join(recipients)
    email["Subject"] = f"ExamAtlas: {len(items)} verified application deadline reminder(s) — {today.isoformat()}"
    lines = ["ExamAtlas India — private daily deadline reminder", "", "All dates are India Standard Time (IST).", ""]
    for e in items:
        when = "TODAY" if e["daysRemaining"] == 0 else f"in {e['daysRemaining']} days"
        lines.extend([f"{e['title']} — deadline {when}",
                      f"Apply by: {e['end']}", f"Official application portal: {e['applyUrl']}",
                      f"Official supporting document: {e['sourceUrl']}", ""])
    lines.extend(["Verify all dates and eligibility directly with the authority before applying.",
                  "These are editorially verified records, not a live application API.",
                  "To stop these alerts, remove EA_ALERT_RECIPIENTS in GitHub Actions secrets."])
    email.set_content("\n".join(lines))
    return email


def main() -> int:
    env = {k: os.environ.get(k, "").strip() for k in ["EA_SMTP_HOST", "EA_SMTP_USER", "EA_SMTP_PASSWORD", "EA_ALERT_FROM", "EA_ALERT_RECIPIENTS"]}
    if not all(env.values()):
        print("Email alerts NOT active: missing SMTP/recipient secrets. No email sent.")
        return 0
    recipients = [x.strip() for x in re.split(r"[,;]", env["EA_ALERT_RECIPIENTS"]) if x.strip()]
    if not recipients or any(not EMAIL_RE.fullmatch(x) for x in recipients) or not EMAIL_RE.fullmatch(env["EA_ALERT_FROM"]):
        print("Invalid sender or recipient address configuration.", file=sys.stderr)
        return 1
    try:
        port = int(os.environ.get("EA_SMTP_PORT") or "587")
        if not 1 <= port <= 65535:
            raise ValueError("Port out of range")
    except ValueError:
        print("Invalid SMTP port.", file=sys.stderr)
        return 1
    records = json.loads((ROOT / "opportunities.json").read_text(encoding="utf-8"))["entries"]
    today = datetime.now(IST).date()
    alerts = collect_alerts(records, today)
    if not alerts:
        print(f"No verified application deadlines due for reminders on {today} (IST).")
        return 0
    msg = build_message(alerts, today, env["EA_ALERT_FROM"], recipients)
    # SMTP STARTTLS only. Do not fall back to cleartext credential delivery.
    import ssl
    with smtplib.SMTP(env["EA_SMTP_HOST"], port, timeout=20) as smtp:
        smtp.ehlo()
        smtp.starttls(context=ssl.create_default_context())
        smtp.ehlo()
        smtp.login(env["EA_SMTP_USER"], env["EA_SMTP_PASSWORD"])
        smtp.send_message(msg)
    print(f"Sent {len(alerts)} verified deadline reminders to {len(recipients)} private recipient(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
