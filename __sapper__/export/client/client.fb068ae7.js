function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=a(e,n,r,c);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return v(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function x(t){S=t}function R(){if(!S)throw new Error("Function called outside component initialization");return S}const P=[],A=[],j=[],L=[],C=Promise.resolve();let k=!1;function N(t){j.push(t)}let O=!1;const q=new Set;function U(){if(!O){O=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];x(e),D(e.$$)}for(P.length=0;A.length;)A.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];q.has(e)||(q.add(e),e())}j.length=0}while(P.length);for(;L.length;)L.pop()();k=!1,O=!1,q.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const I=new Set;let T;function H(){T={r:0,c:[],p:T}}function B(){T.r||o(T.c),T=T.p}function J(t,e){t&&t.i&&(I.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),T.c.push(()=>{I.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function M(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function z(t,e){t&&t.l(e)}function F(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),N(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(N)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(P.push(t),k||(k=!0,C.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,s,c,a,i,l=[-1]){const u=S;x(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&W(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&J(e.$$.fragment),F(e,n.target,n.anchor),U()}x(u)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z=[];function tt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const et={};function nt(t){let e,n;const r=t[2].default,o=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(r,t,t[1],null);return{c(){e=d("main"),o&&o.c(),this.h()},l(t){e=b(t,"MAIN",{class:!0});var n=y(e);o&&o.l(n),n.forEach(f),this.h()},h(){$(e,"class","svelte-1uhnsl8")},m(t,r){u(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&2&e&&i(o,r,t,t[1],e,null,null)},i(t){n||(J(o,t),n=!0)},o(t){K(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function rt(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class ot extends Q{constructor(t){super(),X(this,t,rt,nt,c,{segment:0})}}function st(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=h(r)},l(t){e=b(t,"PRE",{});var o=y(e);n=v(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function ct(e){let n,r,o,s,c,a,i,p,S,x=e[1].message+"";document.title=n=e[0];let R=e[2]&&e[1].stack&&st(e);return{c(){r=m(),o=d("h1"),s=h(e[0]),c=m(),a=d("p"),i=h(x),p=m(),R&&R.c(),S=g(),this.h()},l(t){w('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),o=b(t,"H1",{class:!0});var n=y(o);s=v(n,e[0]),n.forEach(f),c=_(t),a=b(t,"P",{class:!0});var l=y(a);i=v(l,x),l.forEach(f),p=_(t),R&&R.l(t),S=g(),this.h()},h(){$(o,"class","svelte-8od9u6"),$(a,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,a,e),l(a,i),u(t,p,e),R&&R.m(t,e),u(t,S,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&x!==(x=t[1].message+"")&&E(i,x),t[2]&&t[1].stack?R?R.p(t,e):(R=st(t),R.c(),R.m(S.parentNode,S)):R&&(R.d(1),R=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(c),t&&f(a),t&&f(p),R&&R.d(t),t&&f(S)}}}function at(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class it extends Q{constructor(t){super(),X(this,t,at,ct,c,{status:0,error:1})}}function lt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Y(n.$$.fragment),r=g()},l(t){n&&z(n.$$.fragment,t),r=g()},m(t,e){n&&F(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?M(s,[V(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){H();const t=n;K(t.$$.fragment,1,0,()=>{G(t,1)}),B()}c?(n=new c(a()),Y(n.$$.fragment),J(n.$$.fragment,1),F(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&J(n.$$.fragment,t),o=!0)},o(t){n&&K(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&G(n,t)}}}function ut(t){let e,n;return e=new it({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function ft(t){let e,n,r,o;const s=[ut,lt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(H(),K(c[i],1,1,()=>{c[i]=null}),B(),n=c[e],n||(n=c[e]=s[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){o||(J(n),o=!0)},o(t){K(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function pt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ft]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ot({props:s}),{c(){Y(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,e){F(n,t,e),r=!0},p(t,[e]){const r=12&e?M(o,[4&e&&{segment:t[2][0]},8&e&&V(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(J(n.$$.fragment,t),r=!0)},o(t){K(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function dt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=et,p=r,R().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class ht extends Q{constructor(t){super(),X(this,t,dt,pt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const mt=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],gt=[{js:()=>import("./index.764c8808.js"),css:["index.764c8808.css","client.fb068ae7.css"]},{js:()=>import("./about.95f06699.js"),css:["client.fb068ae7.css"]},{js:()=>import("./index.35aec21e.js"),css:["index.35aec21e.css","client.fb068ae7.css"]},{js:()=>import("./[slug].88fe90e6.js"),css:["[slug].88fe90e6.css","client.fb068ae7.css"]}],$t=(yt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:yt(t[1])})}]}]);var yt;const bt="undefined"!=typeof __SAPPER__&&__SAPPER__;let vt,_t,Et,wt=!1,St=[],xt="{}";const Rt={page:function(t){const e=tt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:tt(null),session:tt(bt&&bt.session)};let Pt,At;Rt.session.subscribe(async t=>{if(Pt=t,!wt)return;At=!0;const e=Ut(new URL(location.href)),n=_t={},{redirect:r,props:o,branch:s}=await Ht(e);n===_t&&await Tt(r,s,o,e.page)});let jt,Lt=null;let Ct,kt=1;const Nt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ot={};function qt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ut(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(bt.baseUrl))return null;let e=t.pathname.slice(bt.baseUrl.length);if(""===e&&(e="/"),!mt.some(t=>t.test(e)))for(let n=0;n<$t.length;n+=1){const r=$t[n],o=r.pattern.exec(e);if(o){const n=qt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Dt(){return{x:pageXOffset,y:pageYOffset}}async function It(t,e,n,r){if(e)Ct=e;else{const t=Dt();Ot[Ct]=t,e=Ct=++kt,Ot[Ct]=n?t:{x:0,y:0}}Ct=e,vt&&Rt.preloading.set(!0);const o=Lt&&Lt.href===t.href?Lt.promise:Ht(t);Lt=null;const s=_t={},{redirect:c,props:a,branch:i}=await o;if(s===_t&&(await Tt(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ot[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Ot[Ct]=t,t&&scrollTo(t.x,t.y)}}async function Tt(t,e,n,r){if(t)return function(t,e={noscroll:!1,replaceState:!1}){const n=Ut(new URL(t,document.baseURI));return n?(Nt[e.replaceState?"replaceState":"pushState"]({id:Ct},"",t),It(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});Rt.page.set(r),Rt.preloading.set(!1),vt?vt.$set(n):(n.stores={page:{subscribe:Rt.page.subscribe},preloading:{subscribe:Rt.preloading.subscribe},session:Rt.session},n.level0={props:await Et},n.notify=Rt.page.notify,vt=new ht({target:jt,props:n,hydrate:!0})),St=e,xt=JSON.stringify(r.query),wt=!0,At=!1}async function Ht(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Et){const t=()=>{};Et=bt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Pt)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==xt)return!0;const o=St[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!At&&!u&&St[a]&&St[a].part===e.i)return St[a];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Bt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(gt[e.i]);let m;return m=wt||!bt.preloaded[a+1]?h?await h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Pt):{}:bt.preloaded[a+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function Bt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Jt(t){const e=Ut(new URL(t,document.baseURI));if(e)return Lt&&t===Lt.href||function(t,e){Lt={href:t,promise:e}}(t,Ht(e)),Lt.promise}let Kt;function Mt(t){clearTimeout(Kt),Kt=setTimeout(()=>{Vt(t)},20)}function Vt(t){const e=zt(t.target);e&&"prefetch"===e.rel&&Jt(e.href)}function Yt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=zt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ut(o);if(s){It(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Nt.pushState({id:Ct},"",o.href)}}function zt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ft(t){if(Ot[Ct]=Dt(),t.state){const e=Ut(new URL(location.href));e?It(e,t.state.id):location.href=location.href}else kt=kt+1,function(t){Ct=t}(kt),Nt.replaceState({id:Ct},"",location.href)}var Gt;Gt={target:document.querySelector("#sapper")},"scrollRestoration"in Nt&&(Nt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Nt.scrollRestoration="auto"}),addEventListener("load",()=>{Nt.scrollRestoration="manual"}),function(t){jt=t}(Gt.target),addEventListener("click",Yt),addEventListener("popstate",Ft),addEventListener("touchstart",Vt),addEventListener("mousemove",Mt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Nt.replaceState({id:kt},"",e);const n=new URL(location.href);if(bt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=bt;Et||(Et=s&&s[0]),Tt(null,[],{error:a,status:c,session:o,level0:{props:Et},level1:{props:{status:c,error:a},component:it},segments:s},{host:e,path:n,query:qt(r),params:{}})}();const r=Ut(n);return r?It(r,kt,!0,t):void 0});export{Q as S,m as a,b,_ as c,f as d,d as e,y as f,v as g,$ as h,X as i,u as j,l as k,E as l,p as m,t as n,w as q,c as s,h as t};
