/* ExamAtlas V9: official Notice Intelligence; all detected changes require review. */
(()=>{'use strict';
const safe=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const key='examatlas-notice-watch-v9';
const names=['UPSC CSE','SSC CGL','SSC CHSL','RRB NTPC','RRB Group D','IBPS PO','SBI PO','CAT'];
let watched=[];try{const x=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(x))watched=x.filter(v=>names.includes(v));}catch(e){}
let feed=null,loading=false,started=false,q='',tab='all',board='all';
const infer=t=>names.filter(k=>({ 'UPSC CSE':/civil services|\bCSE\b/i,'SSC CGL':/CGL|combined graduate level/i,'SSC CHSL':/CHSL|higher secondary/i,'RRB NTPC':/NTPC|non technical popular/i,'RRB Group D':/group d|level 1/i,'IBPS PO':/\bCRP.?PO\b|probationary officer/i,'SBI PO':/SBI PO/i,'CAT':/CAT 20\d\d|common admission test/i})[k].test(t));
const trigger=/corrigendum|amendment|addendum|postpon|reschedul|revis|extend|extension|change in (?:exam|date|schedule|vacanc)/i;
const date=x=>x&&Date.parse(x)?new Intl.DateTimeFormat('en-IN',{dateStyle:'medium',timeZone:'Asia/Kolkata'}).format(new Date(x)):'Awaiting scan';
function load(){if(started)return;started=true;loading=true;
Promise.allSettled([fetch('notice-intelligence.json?cache='+Date.now(),{cache:'no-store'}).then(r=>{if(!r.ok)throw Error();return r.json();}),fetch('notices.json?cache='+Date.now(),{cache:'no-store'}).then(r=>{if(!r.ok)throw Error();return r.json();}),fetch('reviewed-changes.json?cache='+Date.now(),{cache:'no-store'}).then(r=>{if(!r.ok)throw Error();return r.json();})])
.then(([intel,notices,reviews])=>{const a=intel.status==='fulfilled'?intel.value:{events:[],monitors:[],reviewed:[],sourceCoverage:[]};const b=notices.status==='fulfilled'?notices.value:null;
const entries=b?.items?.filter(n=>trigger.test(n.title||'')&&!/deputation basis|tender|procurement/i.test(n.title||''))||[];
const old=new Set((a.events||[]).map(e=>e.url));
feed={...a,reviewed:reviews.status==='fulfilled'&&Array.isArray(reviews.value.records)?reviews.value.records:[],events:[...(a.events||[]),...entries.filter(x=>!old.has(x.url)).map(x=>({id:x.id,agency:x.agency,title:x.title,url:x.url,type:'related-notice',firstSeenAt:x.firstSeenAt,examTags:infer(x.title),summary:'Possible correction or revised notice; exact change not verified.',status:'needs-review'}))],sourceCoverage:a.sourceCoverage?.length?a.sourceCoverage:(b?.sources||[])};
}).catch(()=>{feed={events:[],monitors:[],reviewed:[],sourceCoverage:[]};}).finally(()=>{loading=false;refresh();});}
function matching(){
const records=tab==='reviewed'?(feed?.reviewed||[]):(feed?.events||[]);
return records.filter(x=>(tab!=='mine'||(x.examTags||infer(x.title)).some(t=>watched.includes(t)))&&
(tab==='reviewed'||tab!=='documents'||x.type==='document-text-change')&&
(tab==='reviewed'||tab!=='notices'||x.type!=='document-text-change')&&
(board==='all'||board===x.agency)&&[x.title,x.agency,...(x.examTags||[])].join(' ').toLowerCase().includes(q.toLowerCase())).slice(0,90);
}
function card(x){return tab==='reviewed'?window.EXAMATLAS_REVIEW_UI.reviewed(x):window.EXAMATLAS_REVIEW_UI.candidate(x);}
function render(){if(!started)load();const a=matching(),monitors=feed?.monitors||[],boards=[...new Set((feed?.events||[]).map(x=>x.agency))].sort();
return '<div class="ni"><section class="ni-hero"><span class="ni-kicker">NOTICE INTELLIGENCE · V9</span><h1>Know what changed.<br><em>Verify what matters.</em></h1><p>Potential amendments and official-source text revisions, without invented dates or eligibility conclusions.</p><div class="ni-hero-badges"><span>Original notices</span><span>Review-first alerts</span><span>Private exam watchlist</span></div></section>'+
'<section class="ni-callout"><strong>Detected ≠ confirmed.</strong> A headline suggesting a correction, or a changed official document fingerprint, does not verify any specific deadline, syllabus or rule. Always read the original notice and its amendment before acting.</section>'+
'<section class="ni-panel"><span class="ni-kicker">MY EXAM WATCHLIST</span><h2>Follow the exams you care about.</h2><p>Selections stay in your browser; this does not subscribe you to automatic alerts.</p><div class="ni-track">'+names.map(t=>'<button type="button" data-ni-track="'+safe(t)+'" aria-pressed="'+watched.includes(t)+'" class="'+(watched.includes(t)?'selected':'')+'">'+(watched.includes(t)?'✓ ':'+ ')+safe(t)+'</button>').join('')+'</div></section>'+
'<section class="ni-panel"><div class="ni-section-title"><div><span class="ni-kicker">OFFICIAL SOURCE DISCOVERY</span><h2>Notices to review</h2><p>Latest source check: '+date(feed?.generatedAt)+'</p></div><button data-ni-reload>Refresh ↻</button></div><div class="ni-tabs">'+[['all','All'],['mine','My exams'],['notices','Correction notices'],['documents','Document revisions'],['reviewed','Reviewed changes']].map(([id,title])=>'<button data-ni-tab="'+id+'" class="'+(tab===id?'selected':'')+'">'+title+'</button>').join('')+'</div><div class="ni-filter"><label>Search <input id="ni-search" placeholder="Search notices and exams" value="'+safe(q)+'" /></label><label>Board <select id="ni-board"><option value="all">All boards</option>'+boards.map(b=>'<option value="'+safe(b)+'" '+(board===b?'selected':'')+'>'+safe(b.toUpperCase())+'</option>').join('')+'</select></label></div><p class="ni-count">' +a.length+' '+(tab==='reviewed'?'source-reviewed comparisons':'possible changes')+'</p><div class="ni-results">'+(loading?'<p>Loading official notices...</p>':a.length?a.map(card).join(''):tab==='reviewed'?window.EXAMATLAS_REVIEW_UI.empty():'<p>No matching changes detected by the currently accessible sources. This is not evidence that no official notices changed.</p>')+'</div></section>'+
'<section class="ni-panel"><span class="ni-kicker">VERSION MONITOR</span><h2>Documents being watched</h2><p>First reads establish a baseline. Later text changes require a human review. Unavailable sources may be missed.</p><div class="ni-monitors">'+(monitors.length?monitors.map(m=>'<div class="ni-monitor"><div><strong>'+safe(m.title)+'</strong><small>'+safe(m.agency?.toUpperCase())+' · '+safe(m.status==='reading'?'Checked':'Pending or unavailable')+'</small></div><a href="'+safe(m.url)+'" target="_blank" rel="noopener noreferrer">Official source ↗</a></div>').join(''):'No source baselines reported yet.')+'</div><p class="ni-disclaimer">Independent service. Detection is not a regulatory decision. Source sites may block scanning or revise notices without replacing files.</p></section></div>';}
function refresh(){const root=document.querySelector('#page-view');if(root&&location.hash.slice(1)==='intelligence')root.innerHTML=render();}
document.addEventListener('click',e=>{const t=e.target.closest('[data-ni-track],[data-ni-tab],[data-ni-reload]');if(!t)return;
if(t.dataset.niTrack){const v=t.dataset.niTrack;watched=watched.includes(v)?watched.filter(x=>x!==v):[...watched,v];try{localStorage.setItem(key,JSON.stringify(watched));}catch(e){}refresh();}
if(t.dataset.niTab){tab=t.dataset.niTab;refresh();}
if(t.hasAttribute('data-ni-reload')){started=false;load();refresh();}});
document.addEventListener('change',e=>{if(e.target.id==='ni-board'){board=e.target.value;refresh();}});
document.addEventListener('input',e=>{if(e.target.id==='ni-search'){q=e.target.value;const list=document.querySelector('.ni-results');if(list)list.innerHTML=matching().map(card).join('')||'<p>No matching notices.</p>';const n=document.querySelector('.ni-count');if(n)n.textContent=matching().length+' '+(tab==='reviewed'?'source-reviewed comparisons':'possible changes');}});
window.EXAMATLAS_INTELLIGENCE={render,matching,allEvents:()=>feed?.events||[]};
})();