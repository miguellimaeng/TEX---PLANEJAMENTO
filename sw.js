const V="obra360-v6";
const CORE=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./lib/xlsx.full.min.js","./lib/jspdf.umd.min.js","./lib/jspdf.plugin.autotable.min.js"];
self.addEventListener("install",e=>{ e.waitUntil(caches.open(V).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>{}))))); self.skipWaiting(); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch",e=>{ const r=e.request; if(r.method!=="GET") return; const u=new URL(r.url);
  if(r.mode==="navigate"){ e.respondWith(fetch(r,{cache:"no-store"}).then(res=>{ const cp=res.clone(); caches.open(V).then(c=>c.put("./index.html",cp)); return res; }).catch(()=>caches.match("./index.html"))); return; }
  if(u.origin===location.origin||/^(fonts\.gstatic\.com|fonts\.googleapis\.com|cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com|unpkg\.com)$/.test(u.hostname)){ e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{ if(res.ok){ const cp=res.clone(); caches.open(V).then(c=>c.put(r,cp)); } return res; }))); } });
