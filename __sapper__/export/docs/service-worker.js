!function(){"use strict";const e=["/client/about.8e9d7212.js","/client/[slug].396cbec4.js","/client/index.3147d4b8.js","/client/index.3f45132d.js","/client/client.b572ad60.js"].concat(["/service-worker-index.html","/favicon.png","/fonts/Rene-Bieder-Campton-Book.woff","/fonts/Rene-Bieder-Campton-Book.woff:Zone.Identifier","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/successkid.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1597073348690").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1597073348690"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1597073348690").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();