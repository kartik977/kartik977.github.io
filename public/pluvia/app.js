(() => {
  const cities = [
    { id: "tokyo", name: "Tokyo", country: "JAPAN", lat: 35.6762, lon: 139.6503, accent: "#98caff" },
    { id: "london", name: "London", country: "UNITED KINGDOM", lat: 51.5072, lon: -0.1276, accent: "#bdd5df" },
    { id: "mumbai", name: "Mumbai", country: "INDIA", lat: 19.076, lon: 72.8777, accent: "#8fe4df" },
    { id: "seattle", name: "Seattle", country: "UNITED STATES", lat: 47.6062, lon: -122.3321, accent: "#9bd8ff" },
    { id: "singapore", name: "Singapore", country: "SINGAPORE", lat: 1.3521, lon: 103.8198, accent: "#9fe8cc" },
    { id: "saopaulo", name: "São Paulo", country: "BRAZIL", lat: -23.5505, lon: -46.6333, accent: "#a5c6ff" }
  ];

  const weatherCache = new Map();
  let selectedId = "tokyo";
  let rainStrength = 0.72;
  let windAngle = 8;
  let fogStrength = 0.46;
  let audio = null;
  let toastTimer = null;

  const $ = (q) => document.querySelector(q);
  const $$ = (q) => [...document.querySelectorAll(q)];

  const els = {
    rainCanvas: $("#rainCanvas"),
    fogCanvas: $("#fogCanvas"),
    lightning: $("#lightning"),
    cityGrid: $("#cityGrid"),
    selectedCity: $("#selectedCity"),
    selectedTemp: $("#selectedTemp"),
    selectedCondition: $("#selectedCondition"),
    selectedRain: $("#selectedRain"),
    selectedWind: $("#selectedWind"),
    selectedTime: $("#selectedTime"),
    weatherIcon: $("#weatherIcon"),
    weatherLineFill: $("#weatherLineFill"),
    wetCitiesCount: $("#wetCitiesCount"),
    highestRain: $("#highestRain"),
    soundToggle: $("#soundToggle"),
    soundLabel: $("#soundLabel"),
    locateBtn: $("#locateBtn"),
    toast: $("#toast"),
    rainRange: $("#rainRange"),
    windRange: $("#windRange"),
    fogRange: $("#fogRange"),
    rainOutput: $("#rainOutput"),
    windOutput: $("#windOutput"),
    fogOutput: $("#fogOutput")
  };

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 3000);
  }

  function weatherLabel(code) {
    if (code === 0) return ["Clear sky", "○"];
    if ([1, 2].includes(code)) return ["Partly cloudy", "◌"];
    if (code === 3) return ["Overcast", "●"];
    if ([45, 48].includes(code)) return ["Fog in the air", "≈"];
    if ([51, 53, 55, 56, 57].includes(code)) return ["Drizzle", "☂"];
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return ["Rain", "☂"];
    if ([71, 73, 75, 77, 85, 86].includes(code)) return ["Snow", "✦"];
    if ([95, 96, 99].includes(code)) return ["Thunderstorm", "ϟ"];
    return ["Weather moving through", "☂"];
  }

  async function fetchWeather(city) {
    const params = new URLSearchParams({
      latitude: city.lat,
      longitude: city.lon,
      current: "temperature_2m,precipitation,rain,weather_code,wind_speed_10m",
      timezone: "auto"
    });
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!response.ok) throw new Error("Weather signal unavailable");
    const data = await response.json();
    const c = data.current;
    return {
      temp: Math.round(c.temperature_2m),
      precipitation: Number(c.precipitation || 0),
      rain: Number(c.rain || 0),
      code: Number(c.weather_code),
      wind: Math.round(c.wind_speed_10m || 0),
      time: c.time ? c.time.slice(11, 16) : "LIVE"
    };
  }

  function renderCityCards() {
    els.cityGrid.innerHTML = cities.map((city) => {
      const wx = weatherCache.get(city.id);
      if (!wx) return `<article class="city-card skeleton"></article>`;
      const [label, icon] = weatherLabel(wx.code);
      const wet = wx.rain > 0 || wx.precipitation > 0;
      return `
        <button class="city-card ${selectedId === city.id ? "active" : ""}" data-city="${city.id}" style="--card-accent:${city.accent}">
          <span class="city-country">${city.country}</span>
          <div class="city-title">
            <h3>${city.name}</h3>
            <strong>${wx.temp}°</strong>
          </div>
          <div class="city-rain">
            <span>${label}<b>${wet ? `${Math.max(wx.rain, wx.precipitation).toFixed(1)} mm rain` : "Dry right now"}</b></span>
            <i class="rain-glyph">${icon}</i>
          </div>
        </button>`;
    }).join("");

    $$(".city-card[data-city]").forEach((card) => {
      card.addEventListener("click", () => selectCity(card.dataset.city, true));
    });

    const all = cities.map((c) => weatherCache.get(c.id)).filter(Boolean);
    const wet = all.filter((wx) => wx.rain > 0 || wx.precipitation > 0);
    els.wetCitiesCount.textContent = String(wet.length);
    const strongest = all.length ? Math.max(...all.map((wx) => Math.max(wx.rain, wx.precipitation))) : 0;
    els.highestRain.textContent = strongest.toFixed(1);
  }

  function selectCity(id, shouldScroll = false) {
    const city = cities.find((c) => c.id === id);
    const wx = weatherCache.get(id);
    if (!city || !wx) return;
    selectedId = id;
    document.body.dataset.theme = city.id;
    els.selectedCity.textContent = city.name;
    els.selectedTemp.textContent = `${wx.temp}°`;
    const [label, icon] = weatherLabel(wx.code);
    els.selectedCondition.textContent = label;
    els.weatherIcon.textContent = icon;
    els.selectedRain.textContent = Math.max(wx.rain, wx.precipitation).toFixed(1);
    els.selectedWind.textContent = wx.wind;
    els.selectedTime.textContent = `${wx.time} LOCAL`;
    const rainVisual = Math.min(100, 14 + Math.max(wx.rain, wx.precipitation) * 32 + (wx.code >= 61 ? 20 : 0));
    els.weatherLineFill.style.width = `${rainVisual}%`;
    const targetIntensity = Math.max(30, Math.min(100, 38 + Math.max(wx.rain, wx.precipitation) * 18));
    els.rainRange.value = Math.round(targetIntensity);
    updateRainControl();
    renderCityCards();
    if (shouldScroll) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function loadCities() {
    const settled = await Promise.allSettled(cities.map(async (city) => {
      const wx = await fetchWeather(city);
      weatherCache.set(city.id, wx);
      renderCityCards();
      if (city.id === selectedId) selectCity(city.id);
    }));
    if (settled.every((r) => r.status === "rejected")) {
      els.cityGrid.innerHTML = `<p style="color:#9eb0bf">The live weather signal is unavailable right now. The atmosphere engine is still running.</p>`;
      showToast("Live weather could not be reached.");
    }
  }

  const rctx = els.rainCanvas.getContext("2d");
  let drops = [];
  let vw = innerWidth;
  let vh = innerHeight;
  let dpr = Math.min(devicePixelRatio || 1, matchMedia('(max-width:760px)').matches ? 1 : 1.5);
  let rainLast = 0;
  let fogLast = 0;

  class Drop {
    constructor(randomY = true) { this.reset(randomY); }
    reset(randomY = false) {
      this.x = Math.random() * vw * 1.3 - vw * 0.15;
      this.y = randomY ? Math.random() * vh : -40 - Math.random() * 200;
      this.len = 10 + Math.random() * 22;
      this.speed = 8 + Math.random() * 17;
      this.opacity = .08 + Math.random() * .24;
      this.depth = .45 + Math.random() * .9;
    }
    step() {
      this.y += this.speed * this.depth * (0.5 + rainStrength);
      this.x += windAngle * 0.06 * this.depth;
      if (this.y > vh + 35 || this.x > vw + 80 || this.x < -80) this.reset(false);
    }
  }

  function resizeCanvases() {
    vw = innerWidth; vh = innerHeight; dpr = Math.min(devicePixelRatio || 1, matchMedia('(max-width:760px)').matches ? 1 : 1.5);
    [els.rainCanvas, els.fogCanvas].forEach((canvas) => {
      canvas.width = Math.floor(vw * dpr);
      canvas.height = Math.floor(vh * dpr);
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
    });
    rctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    setupFog();
    buildDrops();
  }

  function buildDrops() {
    const mobile = matchMedia('(max-width:760px)').matches;
    const count = Math.round((mobile ? 48 : 68) + rainStrength * (mobile ? 105 : 155));
    drops = Array.from({ length: count }, () => new Drop(true));
  }

  function animateRain(ts = 0) {
    requestAnimationFrame(animateRain);
    if (document.hidden || ts - rainLast < 33) return;
    rainLast = ts;
    rctx.clearRect(0, 0, vw, vh);
    rctx.lineWidth = 1;
    for (const d of drops) {
      d.step();
      rctx.beginPath();
      const lean = windAngle * 0.085;
      rctx.moveTo(d.x, d.y);
      rctx.lineTo(d.x + lean * d.len, d.y + d.len);
      rctx.strokeStyle = `rgba(197,225,242,${d.opacity})`;
      rctx.stroke();
    }
  }

  const fctx = els.fogCanvas.getContext("2d");

  function setupFog() {
    fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    fctx.clearRect(0, 0, vw, vh);
    fctx.fillStyle = `rgba(207,225,236,${fogStrength * .13})`;
    fctx.fillRect(0, 0, vw, vh);
    for (let i = 0; i < Math.round(vw * vh / 9000); i++) {
      fctx.beginPath();
      fctx.arc(Math.random() * vw, Math.random() * vh, 1 + Math.random() * 2.3, 0, Math.PI * 2);
      fctx.fillStyle = `rgba(235,246,250,${.03 + Math.random() * .06})`;
      fctx.fill();
    }
  }

  function wipeFog(x, y) {
    fctx.save();
    fctx.globalCompositeOperation = "destination-out";
    const grad = fctx.createRadialGradient(x, y, 10, x, y, 72);
    grad.addColorStop(0, "rgba(0,0,0,.86)");
    grad.addColorStop(.55, "rgba(0,0,0,.45)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    fctx.fillStyle = grad;
    fctx.beginPath();
    fctx.arc(x, y, 72, 0, Math.PI * 2);
    fctx.fill();
    fctx.restore();
  }

  function refog(ts = 0) {
    requestAnimationFrame(refog);
    if (document.hidden || ts - fogLast < 100) return;
    fogLast = ts;
    if (fogStrength > 0.02) {
      fctx.save();
      fctx.globalCompositeOperation = "source-over";
      fctx.fillStyle = `rgba(205,224,234,${fogStrength * .0007})`;
      fctx.fillRect(0, 0, vw, vh);
      fctx.restore();
    }
  }

  window.addEventListener("pointermove", (e) => wipeFog(e.clientX, e.clientY), { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (e.touches[0]) wipeFog(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  function createRainAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    const ctx = new AudioContext();
    const seconds = 4;
    const buffer = ctx.createBuffer(2, ctx.sampleRate * seconds, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = buffer.getChannelData(ch);
      let last = 0;
      for (let i = 0; i < data.length; i++) {
        const white = Math.random() * 2 - 1;
        last = last * .82 + white * .18;
        data[i] = last * .55 + white * .09;
      }
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const high = ctx.createBiquadFilter();
    high.type = "highpass"; high.frequency.value = 500;
    const low = ctx.createBiquadFilter();
    low.type = "lowpass"; low.frequency.value = 7200;
    const gain = ctx.createGain();
    gain.gain.value = .075 * rainStrength;

    source.connect(high).connect(low).connect(gain).connect(ctx.destination);
    source.start();
    return { ctx, source, gain };
  }

  async function toggleSound() {
    const on = els.soundToggle.getAttribute("aria-pressed") === "true";
    if (!on) {
      if (!audio) audio = createRainAudio();
      if (!audio) return showToast("Audio is not supported in this browser.");
      await audio.ctx.resume();
      audio.gain.gain.setTargetAtTime(.075 * rainStrength, audio.ctx.currentTime, .12);
      els.soundToggle.setAttribute("aria-pressed", "true");
      els.soundLabel.textContent = "Sound on";
      showToast("Procedural rain audio enabled.");
    } else {
      audio.gain.gain.setTargetAtTime(0, audio.ctx.currentTime, .08);
      els.soundToggle.setAttribute("aria-pressed", "false");
      els.soundLabel.textContent = "Sound off";
    }
  }

  els.soundToggle.addEventListener("click", toggleSound);

  function updateRainControl() {
    rainStrength = Number(els.rainRange.value) / 100;
    els.rainOutput.value = `${els.rainRange.value}%`;
    buildDrops();
    if (audio && els.soundToggle.getAttribute("aria-pressed") === "true") {
      audio.gain.gain.setTargetAtTime(.075 * rainStrength, audio.ctx.currentTime, .08);
    }
  }
  function updateWindControl() {
    windAngle = Number(els.windRange.value);
    els.windOutput.value = `${windAngle}°`;
  }
  function updateFogControl() {
    fogStrength = Number(els.fogRange.value) / 100;
    els.fogOutput.value = `${els.fogRange.value}%`;
    setupFog();
  }
  els.rainRange.addEventListener("input", updateRainControl);
  els.windRange.addEventListener("input", updateWindControl);
  els.fogRange.addEventListener("input", updateFogControl);

  els.locateBtn.addEventListener("click", () => {
    if (!navigator.geolocation) return showToast("Location is not supported in this browser.");
    els.locateBtn.disabled = true;
    els.locateBtn.textContent = "Reading your sky…";
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      try {
        const localCity = { id: "local", name: "Your sky", country: "CURRENT LOCATION", lat: coords.latitude, lon: coords.longitude };
        const wx = await fetchWeather(localCity);
        document.body.dataset.theme = "local";
        els.selectedCity.textContent = localCity.name;
        els.selectedTemp.textContent = `${wx.temp}°`;
        const [label, icon] = weatherLabel(wx.code);
        els.selectedCondition.textContent = label;
        els.weatherIcon.textContent = icon;
        els.selectedRain.textContent = Math.max(wx.rain, wx.precipitation).toFixed(1);
        els.selectedWind.textContent = wx.wind;
        els.selectedTime.textContent = `${wx.time} LOCAL`;
        els.weatherLineFill.style.width = `${Math.min(100, 18 + Math.max(wx.rain, wx.precipitation) * 35)}%`;
        showToast("Your local atmosphere is now live.");
      } catch {
        showToast("I couldn't read the weather for your location.");
      } finally {
        els.locateBtn.disabled = false;
        els.locateBtn.innerHTML = '<span class="locator"></span> Use my sky';
      }
    }, () => {
      els.locateBtn.disabled = false;
      els.locateBtn.innerHTML = '<span class="locator"></span> Use my sky';
      showToast("Location access was not enabled.");
    }, { enableHighAccuracy: false, timeout: 8000 });
  });

  $$(".globe-dot").forEach((dot) => dot.addEventListener("click", () => selectCity(dot.dataset.city, true)));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  $$(".reveal").forEach((el) => observer.observe(el));

  function scheduleLightning() {
    const delay = 9000 + Math.random() * 18000;
    setTimeout(() => {
      if (rainStrength > .58 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        els.lightning.classList.remove("flash");
        void els.lightning.offsetWidth;
        els.lightning.classList.add("flash");
      }
      scheduleLightning();
    }, delay);
  }

  window.addEventListener("resize", resizeCanvases);
  resizeCanvases();
  updateRainControl();
  updateWindControl();
  updateFogControl();
  requestAnimationFrame(animateRain);
  requestAnimationFrame(refog);
  scheduleLightning();
  loadCities();
})();