import{s as Bc,n as Je,r as ps,c as qc,e as ta,x as Or}from"../chunks/scheduler.BeaK0CkN.js";import{S as jc,i as $c,e as K,t as $t,s as Rt,c as Q,a as J,b as zt,d as j,f as St,o as z,g as yt,h as B,y as Jt,z as ms,A as _e,m as Fr,B as ea,j as me}from"../chunks/index.BIVVEUZD.js";import{p as zc}from"../chunks/stores.BdKEbH-j.js";function Ze(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var Gc=Object.defineProperty,Hc=Object.defineProperties,Kc=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertySymbols,vl=Object.prototype.hasOwnProperty,El=Object.prototype.propertyIsEnumerable,Qc=Math.pow,na=(n,t,e)=>t in n?Gc(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Me=(n,t)=>{for(var e in t||(t={}))vl.call(t,e)&&na(n,e,t[e]);if(xr)for(var e of xr(t))El.call(t,e)&&na(n,e,t[e]);return n},gs=(n,t)=>Hc(n,Kc(t)),Wc=(n,t)=>{var e={};for(var r in n)vl.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&xr)for(var r of xr(n))t.indexOf(r)<0&&El.call(n,r)&&(e[r]=n[r]);return e},It=(n,t,e)=>new Promise((r,i)=>{var o=c=>{try{l(e.next(c))}catch(d){i(d)}},a=c=>{try{l(e.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(o,a);l((e=e.apply(n,t)).next())});function Xc(n,t){return n[13]=1,n[14]=t>>8,n[15]=t&255,n[16]=t>>8,n[17]=t&255,n}const wl=112,Tl=72,Il=89,Al=115;let xi;function Yc(){const n=new Int32Array(256);for(let t=0;t<256;t++){let e=t;for(let r=0;r<8;r++)e=e&1?3988292384^e>>>1:e>>>1;n[t]=e}return n}function Jc(n){let t=-1;xi||(xi=Yc());for(let e=0;e<n.length;e++)t=xi[(t^n[e])&255]^t>>>8;return t^-1}function Zc(n){const t=n.length-1;for(let e=t;e>=4;e--)if(n[e-4]===9&&n[e-3]===wl&&n[e-2]===Tl&&n[e-1]===Il&&n[e]===Al)return e-3;return 0}function th(n,t,e=!1){const r=new Uint8Array(13);t*=39.3701,r[0]=wl,r[1]=Tl,r[2]=Il,r[3]=Al,r[4]=t>>>24,r[5]=t>>>16,r[6]=t>>>8,r[7]=t&255,r[8]=r[4],r[9]=r[5],r[10]=r[6],r[11]=r[7],r[12]=1;const i=Jc(r),o=new Uint8Array(4);if(o[0]=i>>>24,o[1]=i>>>16,o[2]=i>>>8,o[3]=i&255,e){const a=Zc(n);return n.set(r,a),n.set(o,a+13),n}else{const a=new Uint8Array(4);a[0]=0,a[1]=0,a[2]=0,a[3]=9;const l=new Uint8Array(54);return l.set(n,0),l.set(a,33),l.set(r,37),l.set(o,50),l}}const eh="AAlwSFlz",nh="AAAJcEhZ",rh="AAAACXBI";function ih(n){let t=n.indexOf(eh);return t===-1&&(t=n.indexOf(nh)),t===-1&&(t=n.indexOf(rh)),t}const _s="[modern-screenshot]",Te=typeof window<"u",sh=Te&&"Worker"in window,oh=Te&&"atob"in window,ah=Te&&"btoa"in window;var ra;const ys=Te?(ra=window.navigator)==null?void 0:ra.userAgent:"",Rl=ys.includes("Chrome"),Lr=ys.includes("AppleWebKit")&&!Rl,vs=ys.includes("Firefox"),lh=n=>n&&"__CONTEXT__"in n,uh=n=>n.constructor.name==="CSSFontFaceRule",ch=n=>n.constructor.name==="CSSImportRule",ne=n=>n.nodeType===1,Jn=n=>typeof n.className=="object",Sl=n=>n.tagName==="image",hh=n=>n.tagName==="use",Un=n=>ne(n)&&typeof n.style<"u"&&!Jn(n),dh=n=>n.nodeType===8,fh=n=>n.nodeType===3,tn=n=>n.tagName==="IMG",Xr=n=>n.tagName==="VIDEO",ph=n=>n.tagName==="CANVAS",ia=n=>n.tagName==="TEXTAREA",mh=n=>n.tagName==="INPUT",gh=n=>n.tagName==="STYLE",_h=n=>n.tagName==="SCRIPT",yh=n=>n.tagName==="SELECT",vh=n=>n.tagName==="SLOT",Eh=n=>n.tagName==="IFRAME",Ut=(...n)=>console.warn(_s,...n),wh=n=>console.time(`${_s} ${n}`),Th=n=>console.timeEnd(`${_s} ${n}`),Ih=n=>{var t;const e=(t=n==null?void 0:n.createElement)==null?void 0:t.call(n,"canvas");return e&&(e.height=e.width=1),e&&"toDataURL"in e&&!!e.toDataURL("image/webp").includes("image/webp")},Qi=n=>n.startsWith("data:");function bl(n,t){if(n.match(/^[a-z]+:\/\//i))return n;if(Te&&n.match(/^\/\//))return window.location.protocol+n;if(n.match(/^[a-z]+:/i)||!Te)return n;const e=Yr().implementation.createHTMLDocument(),r=e.createElement("base"),i=e.createElement("a");return e.head.appendChild(r),e.body.appendChild(i),t&&(r.href=t),i.href=n,i.href}function Yr(n){var t;return(t=n&&ne(n)?n==null?void 0:n.ownerDocument:n)!=null?t:window.document}const Jr="http://www.w3.org/2000/svg";function Ah(n,t,e){const r=Yr(e).createElementNS(Jr,"svg");return r.setAttributeNS(null,"width",n.toString()),r.setAttributeNS(null,"height",t.toString()),r.setAttributeNS(null,"viewBox",`0 0 ${n} ${t}`),r}function Rh(n,t){let e=new XMLSerializer().serializeToString(n);return t&&(e=e.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/ug,"")),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`}function Sh(n,t){return new Promise((e,r)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=()=>r(i.error),i.onabort=()=>r(new Error(`Failed read blob to ${t}`)),i.readAsDataURL(n)})}const bh=n=>Sh(n,"dataUrl");function We(n,t){const e=Yr(t).createElement("img");return e.decoding="sync",e.loading="eager",e.src=n,e}function Bn(n,t){return new Promise(e=>{const{timeout:r,ownerDocument:i,onError:o}=t??{},a=typeof n=="string"?We(n,Yr(i)):n;let l=null,c=null;function d(){e(a),l&&clearTimeout(l),c==null||c()}if(r&&(l=setTimeout(d,r)),Xr(a)){const f=a.currentSrc||a.src;if(!f)return a.poster?Bn(a.poster,t).then(e):d();if(a.readyState>=2)return d();const y=d,v=R=>{Ut("Failed video load",f,R),o==null||o(R),d()};c=()=>{a.removeEventListener("loadeddata",y),a.removeEventListener("error",v)},a.addEventListener("loadeddata",y,{once:!0}),a.addEventListener("error",v,{once:!0})}else{const f=Sl(a)?a.href.baseVal:a.currentSrc||a.src;if(!f)return d();const y=()=>It(this,null,function*(){if(tn(a)&&"decode"in a)try{yield a.decode()}catch(R){Ut("Failed to decode image, trying to render anyway",a.dataset.originalSrc||f,R)}d()}),v=R=>{Ut("Failed image load",a.dataset.originalSrc||f,R),d()};if(tn(a)&&a.complete)return y();c=()=>{a.removeEventListener("load",y),a.removeEventListener("error",v)},a.addEventListener("load",y,{once:!0}),a.addEventListener("error",v,{once:!0})}})}function Ph(n,t){return It(this,null,function*(){Un(n)&&(tn(n)||Xr(n)?yield Bn(n,{timeout:t}):yield Promise.all(["img","video"].flatMap(e=>Array.from(n.querySelectorAll(e)).map(r=>Bn(r,{timeout:t})))))})}const Pl=function(){let n=0;const t=()=>`0000${(Math.random()*Qc(36,4)<<0).toString(36)}`.slice(-4);return()=>(n+=1,`u${t()}${n}`)}();function Cl(n){return n==null?void 0:n.split(",").map(t=>t.trim().replace(/"|'/g,"").toLowerCase()).filter(Boolean)}function Ch(n){return{time:t=>n&&wh(t),timeEnd:t=>n&&Th(t),warn:(...t)=>n&&Ut(...t)}}function Vh(n){return{cache:n?"no-cache":"force-cache"}}function Zr(n,t){return It(this,null,function*(){return lh(n)?n:Dh(n,gs(Me({},t),{autoDestruct:!0}))})}function Dh(n,t){return It(this,null,function*(){var e,r,i,o,a;const{scale:l=1,workerUrl:c,workerNumber:d=1}=t||{},f=!!(t!=null&&t.debug),y=(e=t==null?void 0:t.features)!=null?e:!0,v=(r=n.ownerDocument)!=null?r:Te?window.document:void 0,R=(o=(i=n.ownerDocument)==null?void 0:i.defaultView)!=null?o:Te?window:void 0,S=new Map,V=gs(Me({width:0,height:0,quality:1,type:"image/png",scale:l,backgroundColor:null,style:null,filter:null,maximumCanvasSize:0,timeout:3e4,progress:null,debug:f,fetch:Me({requestInit:Vh((a=t==null?void 0:t.fetch)==null?void 0:a.bypassingCache),placeholderImage:"data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",bypassingCache:!1},t==null?void 0:t.fetch),fetchFn:null,font:{},drawImageInterval:100,workerUrl:null,workerNumber:d,onCloneNode:null,onEmbedNode:null,onCreateForeignObjectSvg:null,includeStyleProperties:null,autoDestruct:!1},t),{__CONTEXT__:!0,log:Ch(f),node:n,ownerDocument:v,ownerWindow:R,dpi:l===1?null:96*l,svgStyleElement:Vl(v),svgDefsElement:v==null?void 0:v.createElementNS(Jr,"defs"),svgStyles:new Map,defaultComputedStyles:new Map,workers:[...new Array(sh&&c&&d?d:0)].map(()=>{try{const O=new Worker(c);return O.onmessage=M=>It(this,null,function*(){var q,et,W,T;const{url:m,result:_}=M.data;_?(et=(q=S.get(m))==null?void 0:q.resolve)==null||et.call(q,_):(T=(W=S.get(m))==null?void 0:W.reject)==null||T.call(W,new Error(`Error receiving message from worker: ${m}`))}),O.onmessageerror=M=>{var q,et;const{url:W}=M.data;(et=(q=S.get(W))==null?void 0:q.reject)==null||et.call(q,new Error(`Error receiving message from worker: ${W}`))},O}catch(O){return Ut("Failed to new Worker",O),null}}).filter(Boolean),fontFamilies:new Set,fontCssTexts:new Map,acceptOfImage:`${[Ih(v)&&"image/webp","image/svg+xml","image/*","*/*"].filter(Boolean).join(",")};q=0.8`,requests:S,drawImageCount:0,tasks:[],features:y,isEnable:O=>{var M,q;return O==="restoreScrollPosition"?typeof y=="boolean"?!1:(M=y[O])!=null?M:!1:typeof y=="boolean"?y:(q=y[O])!=null?q:!0}});V.log.time("wait until load"),yield Ph(n,V.timeout),V.log.timeEnd("wait until load");const{width:P,height:k}=Nh(n,V);return V.width=P,V.height=k,V})}function Vl(n){if(!n)return;const t=n.createElement("style"),e=t.ownerDocument.createTextNode(`
.______background-clip--text {
  background-clip: text;
  -webkit-background-clip: text;
}
`);return t.appendChild(e),t}function Nh(n,t){let{width:e,height:r}=t;if(ne(n)&&(!e||!r)){const i=n.getBoundingClientRect();e=e||i.width||Number(n.getAttribute("width"))||0,r=r||i.height||Number(n.getAttribute("height"))||0}return{width:e,height:r}}function kh(n,t){return It(this,null,function*(){const{log:e,timeout:r,drawImageCount:i,drawImageInterval:o}=t;e.time("image to canvas");const a=yield Bn(n,{timeout:r}),{canvas:l,context2d:c}=Mh(n.ownerDocument,t),d=()=>{try{c==null||c.drawImage(a,0,0,l.width,l.height)}catch(f){Ut("Failed to drawImage",f)}};if(d(),t.isEnable("fixSvgXmlDecode"))for(let f=0;f<i;f++)yield new Promise(y=>{setTimeout(()=>{d(),y()},f+o)});return t.drawImageCount=0,e.timeEnd("image to canvas"),l})}function Mh(n,t){const{width:e,height:r,scale:i,backgroundColor:o,maximumCanvasSize:a}=t,l=n.createElement("canvas");l.width=Math.floor(e*i),l.height=Math.floor(r*i),l.style.width=`${e}px`,l.style.height=`${r}px`,a&&(l.width>a||l.height>a)&&(l.width>a&&l.height>a?l.width>l.height?(l.height*=a/l.width,l.width=a):(l.width*=a/l.height,l.height=a):l.width>a?(l.height*=a/l.width,l.width=a):(l.width*=a/l.height,l.height=a));const c=l.getContext("2d");return c&&o&&(c.fillStyle=o,c.fillRect(0,0,l.width,l.height)),{canvas:l,context2d:c}}const Oh=["width","height","-webkit-text-fill-color"],Fh=["stroke","fill"];function Dl(n,t,e){var r;const{defaultComputedStyles:i,ownerDocument:o}=e,a=n.nodeName.toLowerCase(),l=Jn(n)&&a!=="svg",c=l?Fh.map(k=>[k,n.getAttribute(k)]).filter(([,k])=>k!==null):[],d=[l&&"svg",a,c.map((k,O)=>`${k}=${O}`).join(","),t].filter(Boolean).join(":");if(i.has(d))return i.get(d);let f=e.sandbox;if(!f)try{o&&(f=o.createElement("iframe"),f.id=`__SANDBOX__-${Pl()}`,f.width="0",f.height="0",f.style.visibility="hidden",f.style.position="fixed",o.body.appendChild(f),(r=f.contentWindow)==null||r.document.write('<!DOCTYPE html><meta charset="UTF-8"><title></title><body>'),e.sandbox=f)}catch(k){Ut("Failed to create iframe sandbox",k)}if(!f)return new Map;const y=f.contentWindow;if(!y)return new Map;const v=y.document;let R,S;l?(R=v.createElementNS(Jr,"svg"),S=R.ownerDocument.createElementNS(R.namespaceURI,a),c.forEach(([k,O])=>{S.setAttributeNS(null,k,O)}),R.appendChild(S)):R=S=v.createElement(a),S.textContent=" ",v.body.appendChild(R);const V=y.getComputedStyle(S,t),P=new Map;for(let k=V.length,O=0;O<k;O++){const M=V.item(O);Oh.includes(M)||P.set(M,V.getPropertyValue(M))}return v.body.removeChild(R),i.set(d,P),P}function Nl(n,t,e){var r;const i=new Map,o=[],a=new Map;if(e)for(const c of e)l(c);else for(let c=n.length,d=0;d<c;d++){const f=n.item(d);l(f)}for(let c=o.length,d=0;d<c;d++)(r=a.get(o[d]))==null||r.forEach((f,y)=>i.set(y,f));function l(c){const d=n.getPropertyValue(c),f=n.getPropertyPriority(c),y=c.lastIndexOf("-"),v=y>-1?c.substring(0,y):void 0;if(v){let R=a.get(v);R||(R=new Map,a.set(v,R)),R.set(c,[d,f])}t.get(c)===d&&!f||(v?o.push(v):i.set(c,[d,f]))}return i}const xh=[":before",":after"],Lh=[":-webkit-scrollbar",":-webkit-scrollbar-button",":-webkit-scrollbar-thumb",":-webkit-scrollbar-track",":-webkit-scrollbar-track-piece",":-webkit-scrollbar-corner",":-webkit-resizer"];function Uh(n,t,e,r){const{ownerWindow:i,svgStyleElement:o,svgStyles:a,currentNodeStyle:l}=r;if(!o||!i)return;function c(d){var f;const y=i.getComputedStyle(n,d);let v=y.getPropertyValue("content");if(!v||v==="none")return;v=v.replace(/(')|(")|(counter\(.+\))/g,"");const R=[Pl()],S=Dl(n,d,r);l==null||l.forEach((M,q)=>{S.delete(q)});const V=Nl(y,S,r.includeStyleProperties);V.delete("content"),V.delete("-webkit-locale"),((f=V.get("background-clip"))==null?void 0:f[0])==="text"&&t.classList.add("______background-clip--text");const P=[`content: '${v}';`];if(V.forEach(([M,q],et)=>{P.push(`${et}: ${M}${q?" !important":""};`)}),P.length===1)return;try{t.className=[t.className,...R].join(" ")}catch{return}const k=P.join(`
  `);let O=a.get(k);O||(O=[],a.set(k,O)),O.push(`.${R[0]}:${d}`)}xh.forEach(c),e&&Lh.forEach(c)}function Bh(n,t){ia(n)&&(t.innerHTML=n.value),(ia(n)||mh(n)||yh(n))&&t.setAttribute("value",n.value)}function qh(n,t,e,r){var i,o,a,l;const{ownerWindow:c,includeStyleProperties:d,currentParentNodeStyle:f}=r,y=t.style,v=c.getComputedStyle(n),R=Dl(n,null,r);f==null||f.forEach((V,P)=>{R.delete(P)});const S=Nl(v,R,d);return S.delete("transition-property"),S.delete("all"),S.delete("d"),S.delete("content"),e&&(S.delete("margin-top"),S.delete("margin-right"),S.delete("margin-bottom"),S.delete("margin-left"),S.delete("margin-block-start"),S.delete("margin-block-end"),S.delete("margin-inline-start"),S.delete("margin-inline-end"),S.set("box-sizing",["border-box",""])),((i=S.get("background-clip"))==null?void 0:i[0])==="text"&&t.classList.add("______background-clip--text"),Rl&&(S.has("font-kerning")||S.set("font-kerning",["normal",""]),(((o=S.get("overflow-x"))==null?void 0:o[0])==="hidden"||((a=S.get("overflow-y"))==null?void 0:a[0])==="hidden")&&((l=S.get("text-overflow"))==null?void 0:l[0])==="ellipsis"&&n.scrollWidth===n.clientWidth&&S.set("text-overflow",["clip",""])),S.forEach(([V,P],k)=>{y.setProperty(k,V,P)}),S}function jh(n,t){var e;try{if((e=n==null?void 0:n.contentDocument)!=null&&e.body)return Es(n.contentDocument.body,t)}catch(r){Ut("Failed to clone iframe",r)}return n.cloneNode(!1)}function kl(n){if(n.ownerDocument)try{const i=n.toDataURL();if(i!=="data:,")return We(i,n.ownerDocument)}catch{}const t=n.cloneNode(!1),e=n.getContext("2d"),r=t.getContext("2d");try{return e&&r&&r.putImageData(e.getImageData(0,0,n.width,n.height),0,0),t}catch(i){Ut("Failed to clone canvas",i)}return t}function $h(n){return It(this,null,function*(){if(n.ownerDocument&&!n.currentSrc&&n.poster)return We(n.poster,n.ownerDocument);const t=n.cloneNode(!1);t.crossOrigin="anonymous",n.currentSrc&&n.currentSrc!==n.src&&(t.src=n.currentSrc);const e=t.ownerDocument;if(e){let r=!0;if(yield Bn(t,{onError:()=>r=!1}),!r)return n.poster?We(n.poster,n.ownerDocument):t;t.currentTime=n.currentTime,yield new Promise(o=>{t.addEventListener("seeked",o,{once:!0})});const i=e.createElement("canvas");i.width=n.offsetWidth,i.height=n.offsetHeight;try{const o=i.getContext("2d");o&&o.drawImage(t,0,0,i.width,i.height)}catch(o){return Ut("Failed to clone video",o),n.poster?We(n.poster,n.ownerDocument):t}return kl(i)}return t})}function zh(n){const t=n.cloneNode(!1);return n.currentSrc&&n.currentSrc!==n.src&&(t.src=n.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager"),t}function Gh(n,t){return ph(n)?kl(n):Eh(n)?jh(n,t):tn(n)?zh(n):Xr(n)?$h(n):n.cloneNode(!1)}const sa=new Set(["symbol"]);function oa(n,t,e,r){return It(this,null,function*(){if(ne(e)&&(gh(e)||_h(e))||r.filter&&!r.filter(e))return;sa.has(t.nodeName)||sa.has(e.nodeName)?r.currentParentNodeStyle=void 0:r.currentParentNodeStyle=r.currentNodeStyle;const i=yield Es(e,r);r.isEnable("restoreScrollPosition")&&Hh(n,i),t.appendChild(i)})}function aa(n,t,e){return It(this,null,function*(){var r,i;const o=(i=ne(n)?(r=n.shadowRoot)==null?void 0:r.firstChild:void 0)!=null?i:n.firstChild;for(let a=o;a;a=a.nextSibling)if(!dh(a))if(ne(a)&&vh(a)&&typeof a.assignedNodes=="function"){const l=a.assignedNodes();for(let c=0;c<l.length;c++)yield oa(n,t,l[c],e)}else yield oa(n,t,a,e)})}function Hh(n,t){if(!Un(n)||!Un(t))return;const{scrollTop:e,scrollLeft:r}=n;if(!e&&!r)return;const{transform:i}=t.style,o=new DOMMatrix(i),{a,b:l,c,d}=o;o.a=1,o.b=0,o.c=0,o.d=1,o.translateSelf(-r,-e),o.a=a,o.b=l,o.c=c,o.d=d,t.style.transform=o.toString()}function Kh(n,t){const{backgroundColor:e,width:r,height:i,style:o}=t,a=n.style;if(e&&a.setProperty("background-color",e,"important"),r&&a.setProperty("width",`${r}px`,"important"),i&&a.setProperty("height",`${i}px`,"important"),o)for(const l in o)a[l]=o[l]}const Qh=/^[\w-:]+$/;function Es(n,t,e=!1){return It(this,null,function*(){var r,i,o,a;const{ownerDocument:l,ownerWindow:c,fontFamilies:d}=t;if(l&&fh(n))return l.createTextNode(n.data);if(l&&c&&ne(n)&&(Un(n)||Jn(n))){const y=yield Gh(n,t);if(t.isEnable("removeAbnormalAttributes")){const S=y.getAttributeNames();for(let V=S.length,P=0;P<V;P++){const k=S[P];Qh.test(k)||y.removeAttribute(k)}}const v=t.currentNodeStyle=qh(n,y,e,t);e&&Kh(y,t);let R=!1;if(t.isEnable("copyScrollbar")){const S=[(r=v.get("overflow-x"))==null?void 0:r[0],(i=v.get("overflow-y"))==null?void 0:i[1]];R=S.includes("scroll")||(S.includes("auto")||S.includes("overlay"))&&(n.scrollHeight>n.clientHeight||n.scrollWidth>n.clientWidth)}return Uh(n,y,R,t),Bh(n,y),(a=Cl((o=v.get("font-family"))==null?void 0:o[0]))==null||a.forEach(S=>d.add(S)),Xr(n)||(yield aa(n,y,t)),y}const f=n.cloneNode(!1);return yield aa(n,f,t),f})}function Wh(n){if(n.ownerDocument=void 0,n.ownerWindow=void 0,n.svgStyleElement=void 0,n.svgDefsElement=void 0,n.svgStyles.clear(),n.defaultComputedStyles.clear(),n.sandbox){try{n.sandbox.remove()}catch{}n.sandbox=void 0}n.workers=[],n.fontFamilies.clear(),n.fontCssTexts.clear(),n.requests.clear(),n.tasks=[]}function Xh(n){const t=n,{url:e,timeout:r,responseType:i}=t,o=Wc(t,["url","timeout","responseType"]),a=new AbortController,l=r?setTimeout(()=>a.abort(),r):void 0;return fetch(e,Me({signal:a.signal},o)).then(c=>{if(!c.ok)throw new Error("Failed fetch, not 2xx response",{cause:c});switch(i){case"dataUrl":return c.blob().then(bh);case"text":default:return c.text()}}).finally(()=>clearTimeout(l))}function qn(n,t){const{url:e,requestType:r="text",responseType:i="text",imageDom:o}=t;let a=e;const{timeout:l,acceptOfImage:c,requests:d,fetchFn:f,fetch:{requestInit:y,bypassingCache:v,placeholderImage:R},workers:S}=n;r==="image"&&(Lr||vs)&&n.drawImageCount++;let V=d.get(e);if(!V){v&&v instanceof RegExp&&v.test(a)&&(a+=(/\?/.test(a)?"&":"?")+new Date().getTime());const P=Me({url:a,timeout:l,responseType:i,headers:r==="image"?{accept:c}:void 0},y);V={type:r,resolve:void 0,reject:void 0,response:null},V.response=It(this,null,function*(){if(f&&r==="image"){const k=yield f(e);if(k)return k}return!Lr&&e.startsWith("http")&&S.length?new Promise((k,O)=>{S[d.size&S.length-1].postMessage(Me({rawUrl:e},P)),V.resolve=k,V.reject=O}):Xh(P)}).catch(k=>{if(d.delete(e),r==="image"&&R)return Ut("Failed to fetch image base64, trying to use placeholder image",a),typeof R=="string"?R:R(o);throw k}),d.set(e,V)}return V.response}function Ml(n,t,e,r){return It(this,null,function*(){if(!Ol(n))return n;for(const[i,o]of Yh(n,t))try{const a=yield qn(e,{url:o,requestType:r?"image":"text",responseType:"dataUrl"});n=n.replace(Jh(i),`$1${a}$3`)}catch(a){Ut("Failed to fetch css data url",i,a)}return n})}function Ol(n){return/url\((['"]?)([^'"]+?)\1\)/.test(n)}const Fl=/url\((['"]?)([^'"]+?)\1\)/g;function Yh(n,t){const e=[];return n.replace(Fl,(r,i,o)=>(e.push([o,bl(o,t)]),r)),e.filter(([r])=>!Qi(r))}function Jh(n){const t=n.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function Zh(n,t){return It(this,null,function*(){const{ownerDocument:e,svgStyleElement:r,fontFamilies:i,fontCssTexts:o,tasks:a,font:l}=t;if(!(!e||!r||!i.size))if(l&&l.cssText){const c=ua(l.cssText,t);r.appendChild(e.createTextNode(`${c}
`))}else{const c=Array.from(e.styleSheets).filter(d=>{try{return"cssRules"in d&&!!d.cssRules.length}catch(f){return Ut(`Error while reading CSS rules from ${d.href}`,f),!1}});yield Promise.all(c.flatMap(d=>Array.from(d.cssRules).map((f,y)=>It(this,null,function*(){if(ch(f)){let v=y+1;const R=f.href;let S="";try{S=yield qn(t,{url:R,requestType:"text",responseType:"text"})}catch(P){Ut(`Error fetch remote css import from ${R}`,P)}const V=S.replace(Fl,(P,k,O)=>P.replace(O,bl(O,R)));for(const P of ed(V))try{d.insertRule(P,P.startsWith("@import")?v+=1:d.cssRules.length)}catch(k){Ut("Error inserting rule from remote css import",{rule:P,error:k})}}})))),c.flatMap(d=>Array.from(d.cssRules)).filter(d=>{var f;return uh(d)&&Ol(d.style.getPropertyValue("src"))&&((f=Cl(d.style.getPropertyValue("font-family")))==null?void 0:f.some(y=>i.has(y)))}).forEach(d=>{const f=d,y=o.get(f.cssText);y?r.appendChild(e.createTextNode(`${y}
`)):a.push(Ml(f.cssText,f.parentStyleSheet?f.parentStyleSheet.href:null,t).then(v=>{v=ua(v,t),o.set(f.cssText,v),r.appendChild(e.createTextNode(`${v}
`))}))})}})}const td=/(\/\*[\s\S]*?\*\/)/gi,la=/((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi;function ed(n){if(n==null)return[];const t=[];let e=n.replace(td,"");for(;;){const o=la.exec(e);if(!o)break;t.push(o[0])}e=e.replace(la,"");const r=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let o=r.exec(e);if(o)i.lastIndex=r.lastIndex;else if(o=i.exec(e),o)r.lastIndex=i.lastIndex;else break;t.push(o[0])}return t}const nd=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,rd=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function ua(n,t){const{font:e}=t,r=e?e==null?void 0:e.preferredFormat:void 0;return r?n.replace(rd,i=>{for(;;){const[o,,a]=nd.exec(i)||[];if(!a)return"";if(a===r)return`src: ${o};`}}):n}function id(n,t){if(tn(n)){const e=n.currentSrc||n.src;if(!Qi(e))return[qn(t,{url:e,imageDom:n,requestType:"image",responseType:"dataUrl"}).then(r=>{r&&(n.srcset="",n.dataset.originalSrc=e,n.src=r||"")})];(Lr||vs)&&t.drawImageCount++}else if(Jn(n)&&!Qi(n.href.baseVal)){const e=n.href.baseVal;return[qn(t,{url:e,imageDom:n,requestType:"image",responseType:"dataUrl"}).then(r=>{r&&(n.dataset.originalSrc=e,n.href.baseVal=r||"")})]}return[]}const sd=["background-image","border-image-source","-webkit-border-image","-webkit-mask-image","list-style-image"];function od(n,t){return sd.map(e=>{const r=n.getPropertyValue(e);return!r||r==="none"?null:((Lr||vs)&&t.drawImageCount++,Ml(r,null,t,!0).then(i=>{!i||r===i||n.setProperty(e,i,n.getPropertyPriority(e))}))}).filter(Boolean)}function ad(n,t){var e;const{ownerDocument:r,svgDefsElement:i}=t,o=(e=n.getAttribute("href"))!=null?e:n.getAttribute("xlink:href");if(!o)return[];const[a,l]=o.split("#");if(l){const c=`#${l}`,d=r==null?void 0:r.querySelector(`svg ${c}`);if(a&&n.setAttribute("href",c),i!=null&&i.querySelector(c))return[];if(d)return i==null||i.appendChild(d.cloneNode(!0)),[];if(a)return[qn(t,{url:a,responseType:"text"}).then(f=>{i==null||i.insertAdjacentHTML("beforeend",f)})]}return[]}function xl(n,t){const{tasks:e}=t;ne(n)&&((tn(n)||Sl(n))&&e.push(...id(n,t)),hh(n)&&e.push(...ad(n,t))),Un(n)&&e.push(...od(n.style,t)),n.childNodes.forEach(r=>{xl(r,t)})}function ld(n,t){return It(this,null,function*(){const e=yield Zr(n,t);if(ne(e.node)&&Jn(e.node))return e.node;const{ownerDocument:r,log:i,tasks:o,svgStyleElement:a,svgDefsElement:l,svgStyles:c,font:d,progress:f,autoDestruct:y,onCloneNode:v,onEmbedNode:R,onCreateForeignObjectSvg:S}=e;i.time("clone node");const V=yield Es(e.node,e,!0);if(a&&r){let q="";c.forEach((et,W)=>{q+=`${et.join(`,
`)} {
  ${W}
}
`}),a.appendChild(r.createTextNode(q))}i.timeEnd("clone node"),v==null||v(V),d!==!1&&ne(V)&&(i.time("embed web font"),yield Zh(V,e),i.timeEnd("embed web font")),i.time("embed node"),xl(V,e);const P=o.length;let k=0;const O=()=>It(this,null,function*(){for(;;){const q=o.pop();if(!q)break;try{yield q}catch(et){Ut("Failed to run task",et)}f==null||f(++k,P)}});f==null||f(k,P),yield Promise.all([...Array(4)].map(O)),i.timeEnd("embed node"),R==null||R(V);const M=ud(V,e);return l&&M.insertBefore(l,M.children[0]),a&&M.insertBefore(a,M.children[0]),y&&Wh(e),S==null||S(M),M})}function ud(n,t){const{width:e,height:r}=t,i=Ah(e,r,n.ownerDocument),o=i.ownerDocument.createElementNS(i.namespaceURI,"foreignObject");return o.setAttributeNS(null,"x","0%"),o.setAttributeNS(null,"y","0%"),o.setAttributeNS(null,"width","100%"),o.setAttributeNS(null,"height","100%"),o.append(n),i.appendChild(o),i}function cd(n,t){return It(this,null,function*(){var e;const r=yield Zr(n,t),i=yield ld(r),o=Rh(i,r.isEnable("removeControlCharacter"));r.autoDestruct||(r.svgStyleElement=Vl(r.ownerDocument),r.svgDefsElement=(e=r.ownerDocument)==null?void 0:e.createElementNS(Jr,"defs"),r.svgStyles.clear());const a=We(o,i.ownerDocument);return yield kh(a,r)})}function hd(n,t){return It(this,null,function*(){const e=yield Zr(n,t),{log:r,quality:i,type:o,dpi:a}=e,l=yield cd(e);r.time("canvas to data url");let c=l.toDataURL(o,i);if(["image/png","image/jpeg"].includes(o)&&a&&oh&&ah){const[d,f]=c.split(",");let y=0,v=!1;if(o==="image/png"){const M=ih(f);M>=0?(y=Math.ceil((M+28)/3)*4,v=!0):y=33/3*4}else o==="image/jpeg"&&(y=18/3*4);const R=f.substring(0,y),S=f.substring(y),V=window.atob(R),P=new Uint8Array(V.length);for(let M=0;M<P.length;M++)P[M]=V.charCodeAt(M);const k=o==="image/png"?th(P,a,v):Xc(P,a),O=window.btoa(String.fromCharCode(...k));c=[d,",",O,S].join("")}return r.timeEnd("canvas to data url"),c})}function dd(n,t){return It(this,null,function*(){return hd(yield Zr(n,gs(Me({},t),{type:"image/png"})))})}var ca={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},fd=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],c=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,d=c?n[i+2]:0,f=o>>2,y=(o&3)<<4|l>>4;let v=(l&15)<<2|d>>6,R=d&63;c||(R=64,a||(v=64)),r.push(e[f],e[y],e[v],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ll(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):fd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const y=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||y==null)throw new pd;const v=o<<2|l>>4;if(r.push(v),d!==64){const R=l<<4&240|d>>2;if(r.push(R),y!==64){const S=d<<6&192|y;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const md=function(n){const t=Ll(n);return Ul.encodeByteArray(t,!0)},Ur=function(n){return md(n).replace(/\./g,"")},gd=function(n){try{return Ul.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=()=>_d().__FIREBASE_DEFAULTS__,vd=()=>{if(typeof process>"u"||typeof ca>"u")return;const n=ca.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ed=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&gd(n[1]);return t&&JSON.parse(t)},ws=()=>{try{return yd()||vd()||Ed()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wd=n=>{var t,e;return(e=(t=ws())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Td=n=>{const t=wd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Bl=()=>{var n;return(n=ws())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ur(JSON.stringify(e)),Ur(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sd(){var n;const t=(n=ws())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bd(){return!Sd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pd(){try{return typeof indexedDB=="object"}catch{return!1}}function Cd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="FirebaseError";class ln extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Vd,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ql.prototype.create)}}class ql{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Dd(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ln(i,l,r)}}function Dd(n,t){return n.replace(Nd,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Nd=/\{\$([^}]+)}/g;function Wi(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(ha(o)&&ha(a)){if(!Wi(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ha(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n){return n&&n._delegate?n._delegate:n}class jn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Id;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Od(t))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=De){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=De){return this.instances.has(t)}getOptions(t=De){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Md(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=De){return this.component?this.component.multipleInstances?t:De:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Md(n){return n===De?void 0:n}function Od(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new kd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const xd={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Ld=Z.INFO,Ud={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Bd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Ud[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class jl{constructor(t){this.name=t,this._logLevel=Ld,this._logHandler=Bd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const qd=(n,t)=>t.some(e=>n instanceof e);let da,fa;function jd(){return da||(da=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $d(){return fa||(fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $l=new WeakMap,Xi=new WeakMap,zl=new WeakMap,Li=new WeakMap,Ts=new WeakMap;function zd(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ye(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&$l.set(e,n)}).catch(()=>{}),Ts.set(t,n),t}function Gd(n){if(Xi.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Xi.set(n,t)}let Yi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Xi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||zl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ye(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Hd(n){Yi=n(Yi)}function Kd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ui(this),t,...e);return zl.set(r,t.sort?t.sort():[t]),ye(r)}:$d().includes(n)?function(...t){return n.apply(Ui(this),t),ye($l.get(this))}:function(...t){return ye(n.apply(Ui(this),t))}}function Qd(n){return typeof n=="function"?Kd(n):(n instanceof IDBTransaction&&Gd(n),qd(n,jd())?new Proxy(n,Yi):n)}function ye(n){if(n instanceof IDBRequest)return zd(n);if(Li.has(n))return Li.get(n);const t=Qd(n);return t!==n&&(Li.set(n,t),Ts.set(t,n)),t}const Ui=n=>Ts.get(n);function Wd(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=ye(a);return r&&a.addEventListener("upgradeneeded",c=>{r(ye(a.result),c.oldVersion,c.newVersion,ye(a.transaction),c)}),e&&a.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Xd=["get","getKey","getAll","getAllKeys","count"],Yd=["put","add","delete","clear"],Bi=new Map;function pa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Bi.get(t))return Bi.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Yd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Xd.includes(e)))return;const o=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&c.done]))[0]};return Bi.set(t,o),o}Hd(n=>({...n,get:(t,e,r)=>pa(t,e)||n.get(t,e,r),has:(t,e)=>!!pa(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Zd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Zd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ji="@firebase/app",ma="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new jl("@firebase/app"),tf="@firebase/app-compat",ef="@firebase/analytics-compat",nf="@firebase/analytics",rf="@firebase/app-check-compat",sf="@firebase/app-check",of="@firebase/auth",af="@firebase/auth-compat",lf="@firebase/database",uf="@firebase/database-compat",cf="@firebase/functions",hf="@firebase/functions-compat",df="@firebase/installations",ff="@firebase/installations-compat",pf="@firebase/messaging",mf="@firebase/messaging-compat",gf="@firebase/performance",_f="@firebase/performance-compat",yf="@firebase/remote-config",vf="@firebase/remote-config-compat",Ef="@firebase/storage",wf="@firebase/storage-compat",Tf="@firebase/firestore",If="@firebase/vertexai-preview",Af="@firebase/firestore-compat",Rf="firebase",Sf="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]",bf={[Ji]:"fire-core",[tf]:"fire-core-compat",[nf]:"fire-analytics",[ef]:"fire-analytics-compat",[sf]:"fire-app-check",[rf]:"fire-app-check-compat",[of]:"fire-auth",[af]:"fire-auth-compat",[lf]:"fire-rtdb",[uf]:"fire-rtdb-compat",[cf]:"fire-fn",[hf]:"fire-fn-compat",[df]:"fire-iid",[ff]:"fire-iid-compat",[pf]:"fire-fcm",[mf]:"fire-fcm-compat",[gf]:"fire-perf",[_f]:"fire-perf-compat",[yf]:"fire-rc",[vf]:"fire-rc-compat",[Ef]:"fire-gcs",[wf]:"fire-gcs-compat",[Tf]:"fire-fst",[Af]:"fire-fst-compat",[If]:"fire-vertex","fire-js":"fire-js",[Rf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Map,Pf=new Map,ts=new Map;function ga(n,t){try{n.container.addComponent(t)}catch(e){Oe.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function qr(n){const t=n.name;if(ts.has(t))return Oe.debug(`There were multiple attempts to register component ${t}.`),!1;ts.set(t,n);for(const e of Br.values())ga(e,n);for(const e of Pf.values())ga(e,n);return!0}function Cf(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ve=new ql("app","Firebase",Vf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=Sf;function Gl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Zi,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw ve.create("bad-app-name",{appName:String(i)});if(e||(e=Bl()),!e)throw ve.create("no-options");const o=Br.get(i);if(o){if(Wi(e,o.options)&&Wi(r,o.config))return o;throw ve.create("duplicate-app",{appName:i})}const a=new Fd(i);for(const c of ts.values())a.addComponent(c);const l=new Df(e,r,a);return Br.set(i,l),l}function kf(n=Zi){const t=Br.get(n);if(!t&&n===Zi&&Bl())return Gl();if(!t)throw ve.create("no-app",{appName:n});return t}function Xe(n,t,e){var r;let i=(r=bf[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Oe.warn(l.join(" "));return}qr(new jn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="firebase-heartbeat-database",Of=1,$n="firebase-heartbeat-store";let qi=null;function Hl(){return qi||(qi=Wd(Mf,Of,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore($n)}catch(e){console.warn(e)}}}}).catch(n=>{throw ve.create("idb-open",{originalErrorMessage:n.message})})),qi}async function Ff(n){try{const e=(await Hl()).transaction($n),r=await e.objectStore($n).get(Kl(n));return await e.done,r}catch(t){if(t instanceof ln)Oe.warn(t.message);else{const e=ve.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Oe.warn(e.message)}}}async function _a(n,t){try{const r=(await Hl()).transaction($n,"readwrite");await r.objectStore($n).put(t,Kl(n)),await r.done}catch(e){if(e instanceof ln)Oe.warn(e.message);else{const r=ve.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Oe.warn(r.message)}}}function Kl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=1024,Lf=30*24*60*60*1e3;class Uf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new qf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ya();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Lf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ya(),{heartbeatsToSend:r,unsentEntries:i}=Bf(this._heartbeatsCache.heartbeats),o=Ur(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function ya(){return new Date().toISOString().substring(0,10)}function Bf(n,t=xf){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),va(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),va(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class qf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pd()?Cd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ff(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return _a(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return _a(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function va(n){return Ur(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(n){qr(new jn("platform-logger",t=>new Jd(t),"PRIVATE")),qr(new jn("heartbeat",t=>new Uf(t),"PRIVATE")),Xe(Ji,ma,n),Xe(Ji,ma,"esm2017"),Xe("fire-js","")}jf("");var $f="firebase",zf="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe($f,zf,"app");var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ke,Ql;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(w,E,I){for(var g=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)g[ht-2]=arguments[ht];return m.prototype[E].apply(w,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,_){_||(_=0);var w=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)w[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)w[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var I=T.g[3],g=m+(I^_&(E^I))+w[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+w[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+w[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+w[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+w[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+w[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+w[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+w[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+w[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+w[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+w[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+w[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+w[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+w[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+w[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+w[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^I&(_^E))+w[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+w[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+w[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+w[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+w[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+w[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+w[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+w[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+w[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+w[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+w[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+w[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+w[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+w[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+w[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+w[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^I)+w[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+w[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+w[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+w[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+w[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+w[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+w[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+w[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+w[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+w[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+w[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+w[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+w[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+w[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+w[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+w[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~I))+w[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+w[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+w[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+w[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+w[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+w[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+w[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+w[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+w[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+w[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+w[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+w[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+w[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+w[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+w[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,w=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=_;)i(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(w[E++]=T.charCodeAt(I++),E==this.blockSize){i(this,w),E=0;break}}else for(;I<m;)if(w[E++]=T[I++],E==this.blockSize){i(this,w),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var w=0;32>w;w+=8)T[_++]=this.g[m]>>>w&255;return T};function o(T,m){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;for(var _=[],w=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;w&&I==m||(_[E]=I,w=!1)}this.g=_}var l={};function c(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(0>T)return P(d(-T));for(var m=[],_=1,w=0;T>=_;w++)m[w]=T/_|0,_*=4294967296;return new a(m,0)}function f(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return P(f(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),w=y,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+I),m);8>I?(I=d(Math.pow(m,I)),w=w.j(I).add(d(g))):(w=w.j(_),w=w.add(d(g)))}return w}var y=c(0),v=c(1),R=c(16777216);n=a.prototype,n.m=function(){if(V(this))return-P(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var w=this.i(_);T+=(0<=w?w:4294967296+w)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(V(this))return"-"+P(this).toString(T);for(var m=d(Math.pow(T,6)),_=this,w="";;){var E=q(_,m).g;_=k(_,E.j(m));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,S(_))return I+w;for(;6>I.length;)I="0"+I;w=I+w}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function V(T){return T.h==-1}n.l=function(T){return T=k(this,T),V(T)?-1:S(T)?0:1};function P(T){for(var m=T.g.length,_=[],w=0;w<m;w++)_[w]=~T.g[w];return new a(_,~T.h).add(v)}n.abs=function(){return V(this)?P(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],w=0,E=0;E<=m;E++){var I=w+(this.i(E)&65535)+(T.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);w=g>>>16,I&=65535,g&=65535,_[E]=g<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function k(T,m){return T.add(P(m))}n.j=function(T){if(S(this)||S(T))return y;if(V(this))return V(T)?P(this).j(P(T)):P(P(this).j(T));if(V(T))return P(this.j(P(T)));if(0>this.l(R)&&0>T.l(R))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],w=0;w<2*m;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var E=0;E<T.g.length;E++){var I=this.i(w)>>>16,g=this.i(w)&65535,ht=T.i(E)>>>16,ct=T.i(E)&65535;_[2*w+2*E]+=g*ct,O(_,2*w+2*E),_[2*w+2*E+1]+=I*ct,O(_,2*w+2*E+1),_[2*w+2*E+1]+=g*ht,O(_,2*w+2*E+1),_[2*w+2*E+2]+=I*ht,O(_,2*w+2*E+2)}for(w=0;w<m;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=m;w<2*m;w++)_[w]=0;return new a(_,0)};function O(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function M(T,m){this.g=T,this.h=m}function q(T,m){if(S(m))throw Error("division by zero");if(S(T))return new M(y,y);if(V(T))return m=q(P(T),m),new M(P(m.g),P(m.h));if(V(m))return m=q(T,P(m)),new M(P(m.g),m.h);if(30<T.g.length){if(V(T)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var _=v,w=m;0>=w.l(T);)_=et(_),w=et(w);var E=W(_,1),I=W(w,1);for(w=W(w,2),_=W(_,2);!S(w);){var g=I.add(w);0>=g.l(T)&&(E=E.add(_),I=g),w=W(w,1),_=W(_,1)}return m=k(T,E.j(m)),new M(E,m)}for(E=y;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),I=d(_),g=I.j(m);V(g)||0<g.l(T);)_-=w,I=d(_),g=I.j(m);S(I)&&(I=v),E=E.add(I),T=k(T,g)}return new M(E,T)}n.A=function(T){return q(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],w=0;w<m;w++)_[w]=this.i(w)&T.i(w);return new a(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],w=0;w<m;w++)_[w]=this.i(w)|T.i(w);return new a(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],w=0;w<m;w++)_[w]=this.i(w)^T.i(w);return new a(_,this.h^T.h)};function et(T){for(var m=T.g.length+1,_=[],w=0;w<m;w++)_[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(_,T.h)}function W(T,m){var _=m>>5;m%=32;for(var w=T.g.length-_,E=[],I=0;I<w;I++)E[I]=0<m?T.i(I+_)>>>m|T.i(I+_+1)<<32-m:T.i(I+_);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ql=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,ke=a}).apply(typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{});var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wl,Xl,Vn,Yl,Dr,es,Jl,Zl,tu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,h){return s==Array.prototype||s==Object.prototype||(s[u]=h.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ir=="object"&&Ir];for(var u=0;u<s.length;++u){var h=s[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function i(s,u){if(u)t:{var h=r;s=s.split(".");for(var p=0;p<s.length-1;p++){var A=s[p];if(!(A in h))break t;h=h[A]}s=s[s.length-1],p=h[s],u=u(p),u!=p&&u!=null&&t(h,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var h=0,p=!1,A={next:function(){if(!p&&h<s.length){var b=h++;return{value:u(b,s[b]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function f(s,u,h){return s.call.apply(s.bind,arguments)}function y(s,u,h){if(!s)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),s.apply(u,A)}}return function(){return s.apply(u,arguments)}}function v(s,u,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,v.apply(null,arguments)}function R(s,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),s.apply(this,p)}}function S(s,u){function h(){}h.prototype=u.prototype,s.aa=u.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(p,A,b){for(var N=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)N[lt-2]=arguments[lt];return u.prototype[A].apply(p,N)}}function V(s){const u=s.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=s[p];return h}return[]}function P(s,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const A=s.length||0,b=p.length||0;s.length=A+b;for(let N=0;N<b;N++)s[A+N]=p[N]}else s.push(p)}}class k{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function O(s){return/^[\s\xa0]*$/.test(s)}function M(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function q(s){return q[" "](s),s}q[" "]=function(){};var et=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function W(s,u,h){for(const p in s)u.call(h,s[p],p,s)}function T(s,u){for(const h in s)u.call(void 0,s[h],h,s)}function m(s){const u={};for(const h in s)u[h]=s[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(s,u){let h,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(h in p)s[h]=p[h];for(let b=0;b<_.length;b++)h=_[b],Object.prototype.hasOwnProperty.call(p,h)&&(s[h]=p[h])}}function E(s){var u=1;s=s.split(":");const h=[];for(;0<u&&s.length;)h.push(s.shift()),u--;return s.length&&h.push(s.join(":")),h}function I(s){l.setTimeout(()=>{throw s},0)}function g(){var s=nt;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,h){const p=ct.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var ct=new k(()=>new pt,s=>s.reset());class pt{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let L,it=!1,nt=new ht,gt=()=>{const s=l.Promise.resolve(void 0);L=()=>{s.then(ce)}};var ce=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(h){I(h)}var u=ct;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}it=!1};function Ht(){this.s=this.s,this.C=this.C}Ht.prototype.s=!1,Ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var st=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return s}();function at(s,u){if(x.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,p=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(et){t:{try{q(u.nodeName);var A=!0;break t}catch{}A=!1}A||(u=null)}}else h=="mouseover"?u=s.fromElement:h=="mouseout"&&(u=s.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:_t[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&at.aa.h.call(this)}}S(at,x);var _t={2:"touch",3:"pen",4:"mouse"};at.prototype.h=function(){at.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ar=0;function fi(s,u,h,p,A){this.listener=s,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=A,this.key=++ar,this.da=this.fa=!1}function se(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function he(s){this.src=s,this.g={},this.h=0}he.prototype.add=function(s,u,h,p,A){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var N=mi(s,u,p,A);return-1<N?(u=s[N],h||(u.fa=!1)):(u=new fi(u,this.src,b,!!p,A),u.fa=h,s.push(u)),u};function pi(s,u){var h=u.type;if(h in s.g){var p=s.g[h],A=Array.prototype.indexOf.call(p,u,void 0),b;(b=0<=A)&&Array.prototype.splice.call(p,A,1),b&&(se(u),s.g[h].length==0&&(delete s.g[h],s.h--))}}function mi(s,u,h,p){for(var A=0;A<s.length;++A){var b=s[A];if(!b.da&&b.listener==u&&b.capture==!!h&&b.ha==p)return A}return-1}var gi="closure_lm_"+(1e6*Math.random()|0),_i={};function to(s,u,h,p,A){if(Array.isArray(u)){for(var b=0;b<u.length;b++)to(s,u[b],h,p,A);return null}return h=ro(h),s&&s[te]?s.K(u,h,d(p)?!!p.capture:!!p,A):hc(s,u,h,!1,p,A)}function hc(s,u,h,p,A,b){if(!u)throw Error("Invalid event type");var N=d(A)?!!A.capture:!!A,lt=vi(s);if(lt||(s[gi]=lt=new he(s)),h=lt.add(u,h,p,N,b),h.proxy)return h;if(p=dc(),h.proxy=p,p.src=s,p.listener=h,s.addEventListener)st||(A=N),A===void 0&&(A=!1),s.addEventListener(u.toString(),p,A);else if(s.attachEvent)s.attachEvent(no(u.toString()),p);else if(s.addListener&&s.removeListener)s.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function dc(){function s(h){return u.call(s.src,s.listener,h)}const u=fc;return s}function eo(s,u,h,p,A){if(Array.isArray(u))for(var b=0;b<u.length;b++)eo(s,u[b],h,p,A);else p=d(p)?!!p.capture:!!p,h=ro(h),s&&s[te]?(s=s.i,u=String(u).toString(),u in s.g&&(b=s.g[u],h=mi(b,h,p,A),-1<h&&(se(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete s.g[u],s.h--)))):s&&(s=vi(s))&&(u=s.g[u.toString()],s=-1,u&&(s=mi(u,h,p,A)),(h=-1<s?u[s]:null)&&yi(h))}function yi(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[te])pi(u.i,s);else{var h=s.type,p=s.proxy;u.removeEventListener?u.removeEventListener(h,p,s.capture):u.detachEvent?u.detachEvent(no(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=vi(u))?(pi(h,s),h.h==0&&(h.src=null,u[gi]=null)):se(s)}}}function no(s){return s in _i?_i[s]:_i[s]="on"+s}function fc(s,u){if(s.da)s=!0;else{u=new at(u,this);var h=s.listener,p=s.ha||s.src;s.fa&&yi(s),s=h.call(p,u)}return s}function vi(s){return s=s[gi],s instanceof he?s:null}var Ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function ro(s){return typeof s=="function"?s:(s[Ei]||(s[Ei]=function(u){return s.handleEvent(u)}),s[Ei])}function kt(){Ht.call(this),this.i=new he(this),this.M=this,this.F=null}S(kt,Ht),kt.prototype[te]=!0,kt.prototype.removeEventListener=function(s,u,h,p){eo(this,s,u,h,p)};function qt(s,u){var h,p=s.F;if(p)for(h=[];p;p=p.F)h.push(p);if(s=s.M,p=u.type||u,typeof u=="string")u=new x(u,s);else if(u instanceof x)u.target=u.target||s;else{var A=u;u=new x(p,s),w(u,A)}if(A=!0,h)for(var b=h.length-1;0<=b;b--){var N=u.g=h[b];A=lr(N,p,!0,u)&&A}if(N=u.g=s,A=lr(N,p,!0,u)&&A,A=lr(N,p,!1,u)&&A,h)for(b=0;b<h.length;b++)N=u.g=h[b],A=lr(N,p,!1,u)&&A}kt.prototype.N=function(){if(kt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var h=s.g[u],p=0;p<h.length;p++)se(h[p]);delete s.g[u],s.h--}}this.F=null},kt.prototype.K=function(s,u,h,p){return this.i.add(String(s),u,!1,h,p)},kt.prototype.L=function(s,u,h,p){return this.i.add(String(s),u,!0,h,p)};function lr(s,u,h,p){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,b=0;b<u.length;++b){var N=u[b];if(N&&!N.da&&N.capture==h){var lt=N.listener,Ct=N.ha||N.src;N.fa&&pi(s.i,N),A=lt.call(Ct,p)!==!1&&A}}return A&&!p.defaultPrevented}function io(s,u,h){if(typeof s=="function")h&&(s=v(s,h));else if(s&&typeof s.handleEvent=="function")s=v(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(s,u||0)}function so(s){s.g=io(()=>{s.g=null,s.i&&(s.i=!1,so(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class pc extends Ht{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:so(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pn(s){Ht.call(this),this.h=s,this.g={}}S(pn,Ht);var oo=[];function ao(s){W(s.g,function(u,h){this.g.hasOwnProperty(h)&&yi(u)},s),s.g={}}pn.prototype.N=function(){pn.aa.N.call(this),ao(this)},pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wi=l.JSON.stringify,mc=l.JSON.parse,gc=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Ti(){}Ti.prototype.h=null;function lo(s){return s.h||(s.h=s.i())}function uo(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ii(){x.call(this,"d")}S(Ii,x);function Ai(){x.call(this,"c")}S(Ai,x);var Se={},co=null;function ur(){return co=co||new kt}Se.La="serverreachability";function ho(s){x.call(this,Se.La,s)}S(ho,x);function gn(s){const u=ur();qt(u,new ho(u))}Se.STAT_EVENT="statevent";function fo(s,u){x.call(this,Se.STAT_EVENT,s),this.stat=u}S(fo,x);function jt(s){const u=ur();qt(u,new fo(u,s))}Se.Ma="timingevent";function po(s,u){x.call(this,Se.Ma,s),this.size=u}S(po,x);function _n(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},u)}function yn(){this.g=!0}yn.prototype.xa=function(){this.g=!1};function _c(s,u,h,p,A,b){s.info(function(){if(s.g)if(b)for(var N="",lt=b.split("&"),Ct=0;Ct<lt.length;Ct++){var rt=lt[Ct].split("=");if(1<rt.length){var Mt=rt[0];rt=rt[1];var Ot=Mt.split("_");N=2<=Ot.length&&Ot[1]=="type"?N+(Mt+"="+rt+"&"):N+(Mt+"=redacted&")}}else N=null;else N=b;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+u+`
`+h+`
`+N})}function yc(s,u,h,p,A,b,N){s.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+u+`
`+h+`
`+b+" "+N})}function je(s,u,h,p){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ec(s,h)+(p?" "+p:"")})}function vc(s,u){s.info(function(){return"TIMEOUT: "+u})}yn.prototype.info=function(){};function Ec(s,u){if(!s.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var p=h[s];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var N=1;N<A.length;N++)A[N]=""}}}}return wi(h)}catch{return u}}var cr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ri;function hr(){}S(hr,Ti),hr.prototype.g=function(){return new XMLHttpRequest},hr.prototype.i=function(){return{}},Ri=new hr;function de(s,u,h,p){this.j=s,this.i=u,this.l=h,this.R=p||1,this.U=new pn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new go}function go(){this.i=null,this.g="",this.h=!1}var _o={},Si={};function bi(s,u,h){s.L=1,s.v=mr(oe(u)),s.m=h,s.P=!0,yo(s,null)}function yo(s,u){s.F=Date.now(),dr(s),s.A=oe(s.v);var h=s.A,p=s.R;Array.isArray(p)||(p=[String(p)]),No(h.i,"t",p),s.C=0,h=s.j.J,s.h=new go,s.g=Xo(s.j,h?u:null,!s.m),0<s.O&&(s.M=new pc(v(s.Y,s,s.g),s.O)),u=s.U,h=s.g,p=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(oo[0]=A.toString()),A=oo);for(var b=0;b<A.length;b++){var N=to(h,A[b],p||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),gn(),_c(s.i,s.u,s.A,s.l,s.R,s.m)}de.prototype.ca=function(s){s=s.target;const u=this.M;u&&ae(s)==3?u.j():this.Y(s)},de.prototype.Y=function(s){try{if(s==this.g)t:{const Ot=ae(this.g);var u=this.g.Ba();const Ge=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||Uo(this.g)))){this.J||Ot!=4||u==7||(u==8||0>=Ge?gn(3):gn(2)),Pi(this);var h=this.g.Z();this.X=h;e:if(vo(this)){var p=Uo(this.g);s="";var A=p.length,b=ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){be(this),vn(this);var N="";break e}this.h.i=new l.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,s+=this.h.i.decode(p[u],{stream:!(b&&u==A-1)});p.length=0,this.h.g+=s,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,yc(this.i,this.u,this.A,this.l,this.R,Ot,h),this.o){if(this.T&&!this.K){e:{if(this.g){var lt,Ct=this.g;if((lt=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(lt)){var rt=lt;break e}}rt=null}if(h=rt)je(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ci(this,h);else{this.o=!1,this.s=3,jt(12),be(this),vn(this);break t}}if(this.P){h=!0;let Yt;for(;!this.J&&this.C<N.length;)if(Yt=wc(this,N),Yt==Si){Ot==4&&(this.s=4,jt(14),h=!1),je(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==_o){this.s=4,jt(15),je(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else je(this.i,this.l,Yt,null),Ci(this,Yt);if(vo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||N.length!=0||this.h.h||(this.s=1,jt(16),h=!1),this.o=this.o&&h,!h)je(this.i,this.l,N,"[Invalid Chunked Response]"),be(this),vn(this);else if(0<N.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Oi(Mt),Mt.M=!0,jt(11))}}else je(this.i,this.l,N,null),Ci(this,N);Ot==4&&be(this),this.o&&!this.J&&(Ot==4?Ho(this.j,this):(this.o=!1,dr(this)))}else Lc(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),be(this),vn(this)}}}catch{}finally{}};function vo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function wc(s,u){var h=s.C,p=u.indexOf(`
`,h);return p==-1?Si:(h=Number(u.substring(h,p)),isNaN(h)?_o:(p+=1,p+h>u.length?Si:(u=u.slice(p,p+h),s.C=p+h,u)))}de.prototype.cancel=function(){this.J=!0,be(this)};function dr(s){s.S=Date.now()+s.I,Eo(s,s.I)}function Eo(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=_n(v(s.ba,s),u)}function Pi(s){s.B&&(l.clearTimeout(s.B),s.B=null)}de.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(vc(this.i,this.A),this.L!=2&&(gn(),jt(17)),be(this),this.s=2,vn(this)):Eo(this,this.S-s)};function vn(s){s.j.G==0||s.J||Ho(s.j,s)}function be(s){Pi(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,ao(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function Ci(s,u){try{var h=s.j;if(h.G!=0&&(h.g==s||Vi(h.h,s))){if(!s.K&&Vi(h.h,s)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)Er(h),yr(h);else break t;Mi(h),jt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=_n(v(h.Za,h),6e3));if(1>=Io(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ce(h,11)}else if((s.K||h.g==s)&&Er(h),!O(u))for(A=h.Da.g.parse(u),u=0;u<A.length;u++){let rt=A[u];if(h.T=rt[0],rt=rt[1],h.G==2)if(rt[0]=="c"){h.K=rt[1],h.ia=rt[2];const Mt=rt[3];Mt!=null&&(h.la=Mt,h.j.info("VER="+h.la));const Ot=rt[4];Ot!=null&&(h.Aa=Ot,h.j.info("SVER="+h.Aa));const Ge=rt[5];Ge!=null&&typeof Ge=="number"&&0<Ge&&(p=1.5*Ge,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Yt=s.g;if(Yt){const Tr=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tr){var b=p.h;b.g||Tr.indexOf("spdy")==-1&&Tr.indexOf("quic")==-1&&Tr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Di(b,b.h),b.h=null))}if(p.D){const Fi=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fi&&(p.ya=Fi,dt(p.I,p.D,Fi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var N=s;if(p.qa=Wo(p,p.J?p.ia:null,p.W),N.K){Ao(p.h,N);var lt=N,Ct=p.L;Ct&&(lt.I=Ct),lt.B&&(Pi(lt),dr(lt)),p.g=N}else zo(p);0<h.i.length&&vr(h)}else rt[0]!="stop"&&rt[0]!="close"||Ce(h,7);else h.G==3&&(rt[0]=="stop"||rt[0]=="close"?rt[0]=="stop"?Ce(h,7):ki(h):rt[0]!="noop"&&h.l&&h.l.ta(rt),h.v=0)}}gn(4)}catch{}}var Tc=class{constructor(s,u){this.g=s,this.map=u}};function wo(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function To(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Io(s){return s.h?1:s.g?s.g.size:0}function Vi(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function Di(s,u){s.g?s.g.add(u):s.h=u}function Ao(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}wo.prototype.cancel=function(){if(this.i=Ro(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ro(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const h of s.g.values())u=u.concat(h.D);return u}return V(s.i)}function Ic(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(c(s)){for(var u=[],h=s.length,p=0;p<h;p++)u.push(s[p]);return u}u=[],h=0;for(p in s)u[h++]=s[p];return u}function Ac(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(c(s)||typeof s=="string"){var u=[];s=s.length;for(var h=0;h<s;h++)u.push(h);return u}u=[],h=0;for(const p in s)u[h++]=p;return u}}}function So(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(c(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var h=Ac(s),p=Ic(s),A=p.length,b=0;b<A;b++)u.call(void 0,p[b],h&&h[b],s)}var bo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rc(s,u){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var p=s[h].indexOf("="),A=null;if(0<=p){var b=s[h].substring(0,p);A=s[h].substring(p+1)}else b=s[h];u(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Pe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Pe){this.h=s.h,fr(this,s.j),this.o=s.o,this.g=s.g,pr(this,s.s),this.l=s.l;var u=s.i,h=new Tn;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Po(this,h),this.m=s.m}else s&&(u=String(s).match(bo))?(this.h=!1,fr(this,u[1]||"",!0),this.o=En(u[2]||""),this.g=En(u[3]||"",!0),pr(this,u[4]),this.l=En(u[5]||"",!0),Po(this,u[6]||"",!0),this.m=En(u[7]||"")):(this.h=!1,this.i=new Tn(null,this.h))}Pe.prototype.toString=function(){var s=[],u=this.j;u&&s.push(wn(u,Co,!0),":");var h=this.g;return(h||u=="file")&&(s.push("//"),(u=this.o)&&s.push(wn(u,Co,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(wn(h,h.charAt(0)=="/"?Pc:bc,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",wn(h,Vc)),s.join("")};function oe(s){return new Pe(s)}function fr(s,u,h){s.j=h?En(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function pr(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function Po(s,u,h){u instanceof Tn?(s.i=u,Dc(s.i,s.h)):(h||(u=wn(u,Cc)),s.i=new Tn(u,s.h))}function dt(s,u,h){s.i.set(u,h)}function mr(s){return dt(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function En(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function wn(s,u,h){return typeof s=="string"?(s=encodeURI(s).replace(u,Sc),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Sc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Co=/[#\/\?@]/g,bc=/[#\?:]/g,Pc=/[#\?]/g,Cc=/[#\?@]/g,Vc=/#/g;function Tn(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function fe(s){s.g||(s.g=new Map,s.h=0,s.i&&Rc(s.i,function(u,h){s.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Tn.prototype,n.add=function(s,u){fe(this),this.i=null,s=$e(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(u),this.h+=1,this};function Vo(s,u){fe(s),u=$e(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function Do(s,u){return fe(s),u=$e(s,u),s.g.has(u)}n.forEach=function(s,u){fe(this),this.g.forEach(function(h,p){h.forEach(function(A){s.call(u,A,p,this)},this)},this)},n.na=function(){fe(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const A=s[p];for(let b=0;b<A.length;b++)h.push(u[p])}return h},n.V=function(s){fe(this);let u=[];if(typeof s=="string")Do(this,s)&&(u=u.concat(this.g.get($e(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)u=u.concat(s[h])}return u},n.set=function(s,u){return fe(this),this.i=null,s=$e(this,s),Do(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function No(s,u,h){Vo(s,u),0<h.length&&(s.i=null,s.g.set($e(s,u),V(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const b=encodeURIComponent(String(p)),N=this.V(p);for(p=0;p<N.length;p++){var A=b;N[p]!==""&&(A+="="+encodeURIComponent(String(N[p]))),s.push(A)}}return this.i=s.join("&")};function $e(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Dc(s,u){u&&!s.j&&(fe(s),s.i=null,s.g.forEach(function(h,p){var A=p.toLowerCase();p!=A&&(Vo(this,p),No(this,A,h))},s)),s.j=u}function Nc(s,u){const h=new yn;if(l.Image){const p=new Image;p.onload=R(pe,h,"TestLoadImage: loaded",!0,u,p),p.onerror=R(pe,h,"TestLoadImage: error",!1,u,p),p.onabort=R(pe,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=R(pe,h,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=s}else u(!1)}function kc(s,u){const h=new yn,p=new AbortController,A=setTimeout(()=>{p.abort(),pe(h,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:p.signal}).then(b=>{clearTimeout(A),b.ok?pe(h,"TestPingServer: ok",!0,u):pe(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),pe(h,"TestPingServer: error",!1,u)})}function pe(s,u,h,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(h)}catch{}}function Mc(){this.g=new gc}function Oc(s,u,h){const p=h||"";try{So(s,function(A,b){let N=A;d(A)&&(N=wi(A)),u.push(p+b+"="+encodeURIComponent(N))})}catch(A){throw u.push(p+"type="+encodeURIComponent("_badmap")),A}}function In(s){this.l=s.Ub||null,this.j=s.eb||!1}S(In,Ti),In.prototype.g=function(){return new gr(this.l,this.j)},In.prototype.i=function(s){return function(){return s}}({});function gr(s,u){kt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(gr,kt),n=gr.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,Rn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ko(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ko(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?An(this):Rn(this),this.readyState==3&&ko(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,An(this))},n.Qa=function(s){this.g&&(this.response=s,An(this))},n.ga=function(){this.g&&An(this)};function An(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Rn(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=u.next();return s.join(`\r
`)};function Rn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Mo(s){let u="";return W(s,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Ni(s,u,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Mo(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):dt(s,u,h))}function mt(s){kt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(mt,kt);var Fc=/^https?$/i,xc=["POST","PUT"];n=mt.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ri.g(),this.v=this.o?lo(this.o):lo(Ri),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(b){Oo(this,b);return}if(s=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)h.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const b of p.keys())h.set(b,p.get(b));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),A=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(xc,u,void 0))||p||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,N]of h)this.g.setRequestHeader(b,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lo(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){Oo(this,b)}};function Oo(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,Fo(s),_r(s)}function Fo(s){s.A||(s.A=!0,qt(s,"complete"),qt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,qt(this,"complete"),qt(this,"abort"),_r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),mt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xo(this):this.bb())},n.bb=function(){xo(this)};function xo(s){if(s.h&&typeof a<"u"&&(!s.v[1]||ae(s)!=4||s.Z()!=2)){if(s.u&&ae(s)==4)io(s.Ea,0,s);else if(qt(s,"readystatechange"),ae(s)==4){s.h=!1;try{const N=s.Z();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var h;if(!(h=u)){var p;if(p=N===0){var A=String(s.D).match(bo)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),p=!Fc.test(A?A.toLowerCase():"")}h=p}if(h)qt(s,"complete"),qt(s,"success");else{s.m=6;try{var b=2<ae(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",Fo(s)}}finally{_r(s)}}}}function _r(s,u){if(s.g){Lo(s);const h=s.g,p=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||qt(s,"ready");try{h.onreadystatechange=p}catch{}}}function Lo(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function ae(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<ae(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),mc(u)}};function Uo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Lc(s){const u={};s=(s.g&&2<=ae(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<s.length;p++){if(O(s[p]))continue;var h=E(s[p]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=u[A]||[];u[A]=b,b.push(h)}T(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sn(s,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||u}function Bo(s){this.Aa=0,this.i=[],this.j=new yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sn("baseRetryDelayMs",5e3,s),this.cb=Sn("retryDelaySeedMs",1e4,s),this.Wa=Sn("forwardChannelMaxRetries",2,s),this.wa=Sn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new wo(s&&s.concurrentRequestLimit),this.Da=new Mc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Bo.prototype,n.la=8,n.G=1,n.connect=function(s,u,h,p){jt(0),this.W=s,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Wo(this,null,this.W),vr(this)};function ki(s){if(qo(s),s.G==3){var u=s.U++,h=oe(s.I);if(dt(h,"SID",s.K),dt(h,"RID",u),dt(h,"TYPE","terminate"),bn(s,h),u=new de(s,s.j,u),u.L=2,u.v=mr(oe(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Xo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),dr(u)}Qo(s)}function yr(s){s.g&&(Oi(s),s.g.cancel(),s.g=null)}function qo(s){yr(s),s.u&&(l.clearTimeout(s.u),s.u=null),Er(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function vr(s){if(!To(s.h)&&!s.s){s.s=!0;var u=s.Ga;L||gt(),it||(L(),it=!0),nt.add(u,s),s.B=0}}function Uc(s,u){return Io(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=_n(v(s.Ga,s,u),Ko(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new de(this,this.j,s);let b=this.o;if(this.S&&(b?(b=m(b),w(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)t:{for(var u=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break t}if(u===4096||h===this.i.length-1){u=h+1;break t}}u=1e3}else u=1e3;u=$o(this,A,u),h=oe(this.I),dt(h,"RID",s),dt(h,"CVER",22),this.D&&dt(h,"X-HTTP-Session-Id",this.D),bn(this,h),b&&(this.O?u="headers="+encodeURIComponent(String(Mo(b)))+"&"+u:this.m&&Ni(h,this.m,b)),Di(this.h,A),this.Ua&&dt(h,"TYPE","init"),this.P?(dt(h,"$req",u),dt(h,"SID","null"),A.T=!0,bi(A,h,null)):bi(A,h,u),this.G=2}}else this.G==3&&(s?jo(this,s):this.i.length==0||To(this.h)||jo(this))};function jo(s,u){var h;u?h=u.l:h=s.U++;const p=oe(s.I);dt(p,"SID",s.K),dt(p,"RID",h),dt(p,"AID",s.T),bn(s,p),s.m&&s.o&&Ni(p,s.m,s.o),h=new de(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),u&&(s.i=u.D.concat(s.i)),u=$o(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Di(s.h,h),bi(h,p,u)}function bn(s,u){s.H&&W(s.H,function(h,p){dt(u,p,h)}),s.l&&So({},function(h,p){dt(u,p,h)})}function $o(s,u,h){h=Math.min(s.i.length,h);var p=s.l?v(s.l.Na,s.l,s):null;t:{var A=s.i;let b=-1;for(;;){const N=["count="+h];b==-1?0<h?(b=A[0].g,N.push("ofs="+b)):b=0:N.push("ofs="+b);let lt=!0;for(let Ct=0;Ct<h;Ct++){let rt=A[Ct].g;const Mt=A[Ct].map;if(rt-=b,0>rt)b=Math.max(0,A[Ct].g-100),lt=!1;else try{Oc(Mt,N,"req"+rt+"_")}catch{p&&p(Mt)}}if(lt){p=N.join("&");break t}}}return s=s.i.splice(0,h),u.D=s,p}function zo(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;L||gt(),it||(L(),it=!0),nt.add(u,s),s.v=0}}function Mi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=_n(v(s.Fa,s),Ko(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Go(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=_n(v(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),yr(this),Go(this))};function Oi(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Go(s){s.g=new de(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=oe(s.qa);dt(u,"RID","rpc"),dt(u,"SID",s.K),dt(u,"AID",s.T),dt(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&dt(u,"TO",s.ja),dt(u,"TYPE","xmlhttp"),bn(s,u),s.m&&s.o&&Ni(u,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=mr(oe(u)),h.m=null,h.P=!0,yo(h,s)}n.Za=function(){this.C!=null&&(this.C=null,yr(this),Mi(this),jt(19))};function Er(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Ho(s,u){var h=null;if(s.g==u){Er(s),Oi(s),s.g=null;var p=2}else if(Vi(s.h,u))h=u.D,Ao(s.h,u),p=1;else return;if(s.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var A=s.B;p=ur(),qt(p,new po(p,h)),vr(s)}else zo(s);else if(A=u.s,A==3||A==0&&0<u.X||!(p==1&&Uc(s,u)||p==2&&Mi(s)))switch(h&&0<h.length&&(u=s.h,u.i=u.i.concat(h)),A){case 1:Ce(s,5);break;case 4:Ce(s,10);break;case 3:Ce(s,6);break;default:Ce(s,2)}}}function Ko(s,u){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*u}function Ce(s,u){if(s.j.info("Error code "+u),u==2){var h=v(s.fb,s),p=s.Xa;const A=!p;p=new Pe(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fr(p,"https"),mr(p),A?Nc(p.toString(),h):kc(p.toString(),h)}else jt(2);s.G=0,s.l&&s.l.sa(u),Qo(s),qo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function Qo(s){if(s.G=0,s.ka=[],s.l){const u=Ro(s.h);(u.length!=0||s.i.length!=0)&&(P(s.ka,u),P(s.ka,s.i),s.h.i.length=0,V(s.i),s.i.length=0),s.l.ra()}}function Wo(s,u,h){var p=h instanceof Pe?oe(h):new Pe(h);if(p.g!="")u&&(p.g=u+"."+p.g),pr(p,p.s);else{var A=l.location;p=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var b=new Pe(null);p&&fr(b,p),u&&(b.g=u),A&&pr(b,A),h&&(b.l=h),p=b}return h=s.D,u=s.ya,h&&u&&dt(p,h,u),dt(p,"VER",s.la),bn(s,p),p}function Xo(s,u,h){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new mt(new In({eb:h})):new mt(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yo(){}n=Yo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function wr(){}wr.prototype.g=function(s,u){return new Kt(s,u)};function Kt(s,u){kt.call(this),this.g=new Bo(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!O(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!O(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new ze(this)}S(Kt,kt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){ki(this.g)},Kt.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=wi(s),s=h);u.i.push(new Tc(u.Ya++,s)),u.G==3&&vr(u)},Kt.prototype.N=function(){this.g.l=null,delete this.j,ki(this.g),delete this.g,Kt.aa.N.call(this)};function Jo(s){Ii.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const h in u){s=h;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}S(Jo,Ii);function Zo(){Ai.call(this),this.status=1}S(Zo,Ai);function ze(s){this.g=s}S(ze,Yo),ze.prototype.ua=function(){qt(this.g,"a")},ze.prototype.ta=function(s){qt(this.g,new Jo(s))},ze.prototype.sa=function(s){qt(this.g,new Zo)},ze.prototype.ra=function(){qt(this.g,"b")},wr.prototype.createWebChannel=wr.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,tu=function(){return new wr},Zl=function(){return ur()},Jl=Se,es={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},cr.NO_ERROR=0,cr.TIMEOUT=8,cr.HTTP_ERROR=6,Dr=cr,mo.COMPLETE="complete",Yl=mo,uo.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",kt.prototype.listen=kt.prototype.K,Vn=uo,Xl=In,mt.prototype.listenOnce=mt.prototype.L,mt.prototype.getLastError=mt.prototype.Ka,mt.prototype.getLastErrorCode=mt.prototype.Ba,mt.prototype.getStatus=mt.prototype.Z,mt.prototype.getResponseJson=mt.prototype.Oa,mt.prototype.getResponseText=mt.prototype.oa,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Ha,Wl=mt}).apply(typeof Ir<"u"?Ir:typeof self<"u"?self:typeof window<"u"?window:{});const wa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=new jl("@firebase/firestore");function Pn(){return Fe.logLevel}function U(n,...t){if(Fe.logLevel<=Z.DEBUG){const e=t.map(Is);Fe.debug(`Firestore (${un}): ${n}`,...e)}}function ue(n,...t){if(Fe.logLevel<=Z.ERROR){const e=t.map(Is);Fe.error(`Firestore (${un}): ${n}`,...e)}}function en(n,...t){if(Fe.logLevel<=Z.WARN){const e=t.map(Is);Fe.warn(`Firestore (${un}): ${n}`,...e)}}function Is(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n="Unexpected state"){const t=`FIRESTORE (${un}) INTERNAL ASSERTION FAILED: `+n;throw ue(t),new Error(t)}function ft(n,t){n||G()}function X(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends ln{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Gf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(xt.UNAUTHENTICATED))}shutdown(){}}class Hf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Kf{constructor(t){this.t=t,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let o=new Ee;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ee,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=o;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ee)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ft(typeof r.accessToken=="string"),new eu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ft(t===null||typeof t=="string"),new xt(t)}}class Qf{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Wf{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Qf(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yf{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ft(typeof e.token=="string"),this.R=e.token,new Xf(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Jf(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function ot(n,t){return n<t?-1:n>t?1:0}function nn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new F(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Pt.fromMillis(Date.now())}static fromDate(t){return Pt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Pt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ot(this.nanoseconds,t.nanoseconds):ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new Pt(0,0))}static max(){return new H(new Pt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,r){e===void 0?e=0:e>t.length&&G(),r===void 0?r=t.length-e:r>t.length-e&&G(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return zn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof zn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ut extends zn{construct(t,e,r){return new ut(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new F(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new ut(e)}static emptyPath(){return new ut([])}}const Zf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lt extends zn{construct(t,e,r){return new Lt(t,e,r)}static isValidIdentifier(t){return Zf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Lt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new F(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new F(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new F(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Lt(e)}static emptyPath(){return new Lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.path=t}static fromPath(t){return new $(ut.fromString(t))}static fromName(t){return new $(ut.fromString(t).popFirst(5))}static empty(){return new $(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ut.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ut.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $(new ut(t.slice()))}}function tp(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new Pt(e+1,0):new Pt(e,r));return new Ie(i,$.empty(),t)}function ep(n){return new Ie(n.readTime,n.key,-1)}class Ie{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ie(H.min(),$.empty(),-1)}static max(){return new Ie(H.max(),$.empty(),-1)}}function np(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=$.comparator(n.documentKey,t.documentKey),e!==0?e:ot(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ip{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==rp)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new D((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof D?e:D.resolve(e)}catch(e){return D.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):D.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):D.reject(e)}static resolve(t){return new D((e,r)=>{e(t)})}static reject(t){return new D((e,r)=>{r(t)})}static waitFor(t){return new D((e,r)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},c=>r(c))}),a=!0,o===i&&e()})}static or(t){let e=D.resolve(!1);for(const r of t)e=e.next(i=>i?D.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new D((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let c=0;c<o;c++){const d=c;e(t[d]).next(f=>{a[d]=f,++l,l===o&&r(a)},f=>i(f))}})}static doWhile(t,e){return new D((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function sp(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Zn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Rs.oe=-1;function tr(n){return n==null}function jr(n){return n===0&&1/n==-1/0}function op(n){return typeof n=="number"&&Number.isInteger(n)&&!jr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function cn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ru(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e){this.comparator=t,this.root=e||Dt.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ar(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ar(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ar(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ar(this.root,t,this.comparator,!0)}}class Ar{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Dt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??Dt.RED,this.left=i??Dt.EMPTY,this.right=o??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new Dt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const t=this.left.check();if(t!==this.right.check())throw G();return t+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,r,i,o){return this}insert(t,e,r){return new Dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ia(this.data.getIterator())}getIteratorFrom(t){return new Ia(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Nt(this.comparator);return e.data=t,e}}class Ia{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.fields=t,t.sort(Lt.comparator)}static empty(){return new Xt([])}unionWith(t){let e=new Nt(Lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return nn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new iu("Invalid base64 string: "+o):o}}(t);return new Bt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new Bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const ap=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ae(n){if(ft(!!n),typeof n=="string"){let t=0;const e=ap.exec(n);if(ft(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:wt(n.seconds),nanos:wt(n.nanos)}}function wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xe(n){return typeof n=="string"?Bt.fromBase64String(n):Bt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function bs(n){const t=n.mapValue.fields.__previous_value__;return Ss(t)?bs(t):t}function Gn(n){const t=Ae(n.mapValue.fields.__local_write_time__.timestampValue);return new Pt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(t,e,r,i,o,a,l,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}class Hn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Hn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Hn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ss(n)?4:up(n)?9007199254740991:10:G()}function ie(n,t){if(n===t)return!0;const e=Le(n);if(e!==Le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Gn(n).isEqual(Gn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Ae(i.timestampValue),l=Ae(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return xe(i.bytesValue).isEqual(xe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return wt(i.geoPointValue.latitude)===wt(o.geoPointValue.latitude)&&wt(i.geoPointValue.longitude)===wt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return wt(i.integerValue)===wt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=wt(i.doubleValue),l=wt(o.doubleValue);return a===l?jr(a)===jr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return nn(n.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Ta(a)!==Ta(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!ie(a[c],l[c])))return!1;return!0}(n,t);default:return G()}}function Kn(n,t){return(n.values||[]).find(e=>ie(e,t))!==void 0}function rn(n,t){if(n===t)return 0;const e=Le(n),r=Le(t);if(e!==r)return ot(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return ot(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=wt(o.integerValue||o.doubleValue),c=wt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,t);case 3:return Aa(n.timestampValue,t.timestampValue);case 4:return Aa(Gn(n),Gn(t));case 5:return ot(n.stringValue,t.stringValue);case 6:return function(o,a){const l=xe(o),c=xe(a);return l.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),c=a.split("/");for(let d=0;d<l.length&&d<c.length;d++){const f=ot(l[d],c[d]);if(f!==0)return f}return ot(l.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=ot(wt(o.latitude),wt(a.latitude));return l!==0?l:ot(wt(o.longitude),wt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const l=o.values||[],c=a.values||[];for(let d=0;d<l.length&&d<c.length;++d){const f=rn(l[d],c[d]);if(f)return f}return ot(l.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===Rr.mapValue&&a===Rr.mapValue)return 0;if(o===Rr.mapValue)return 1;if(a===Rr.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),d=a.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let y=0;y<c.length&&y<f.length;++y){const v=ot(c[y],f[y]);if(v!==0)return v;const R=rn(l[c[y]],d[f[y]]);if(R!==0)return R}return ot(c.length,f.length)}(n.mapValue,t.mapValue);default:throw G()}}function Aa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return ot(n,t);const e=Ae(n),r=Ae(t),i=ot(e.seconds,r.seconds);return i!==0?i:ot(e.nanos,r.nanos)}function sn(n){return ns(n)}function ns(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ae(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return xe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return $.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ns(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ns(e.fields[a])}`;return i+"}"}(n.mapValue):G()}function Ra(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function rs(n){return!!n&&"integerValue"in n}function Ps(n){return!!n&&"arrayValue"in n}function Sa(n){return!!n&&"nullValue"in n}function ba(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ji(n){return!!n&&"mapValue"in n}function Mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return cn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Mn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Mn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function up(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.value=t}static empty(){return new Gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ji(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mn(e)}setAll(t){let e=Lt.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const c=this.getFieldsMap(e);this.applyChanges(c,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=Mn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());ji(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ie(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ji(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){cn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Gt(Mn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new bt(t,0,H.min(),H.min(),H.min(),Gt.empty(),0)}static newFoundDocument(t,e,r,i){return new bt(t,1,e,H.min(),r,i,0)}static newNoDocument(t,e){return new bt(t,2,e,H.min(),H.min(),Gt.empty(),0)}static newUnknownDocument(t,e){return new bt(t,3,e,H.min(),H.min(),Gt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof bt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e){this.position=t,this.inclusive=e}}function Pa(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),e.key):r=rn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ca(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ie(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e="asc"){this.field=t,this.dir=e}}function cp(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{}class Tt extends su{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new dp(t,e,r):e==="array-contains"?new mp(t,r):e==="in"?new gp(t,r):e==="not-in"?new _p(t,r):e==="array-contains-any"?new yp(t,r):new Tt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new fp(t,r):new pp(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(rn(e,this.value)):e!==null&&Le(this.value)===Le(e)&&this.matchesComparison(rn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends su{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Zt(t,e)}matches(t){return ou(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ou(n){return n.op==="and"}function au(n){return hp(n)&&ou(n)}function hp(n){for(const t of n.filters)if(t instanceof Zt)return!1;return!0}function is(n){if(n instanceof Tt)return n.field.canonicalString()+n.op.toString()+sn(n.value);if(au(n))return n.filters.map(t=>is(t)).join(",");{const t=n.filters.map(e=>is(e)).join(",");return`${n.op}(${t})`}}function lu(n,t){return n instanceof Tt?function(r,i){return i instanceof Tt&&r.op===i.op&&r.field.isEqual(i.field)&&ie(r.value,i.value)}(n,t):n instanceof Zt?function(r,i){return i instanceof Zt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&lu(a,i.filters[l]),!0):!1}(n,t):void G()}function uu(n){return n instanceof Tt?function(e){return`${e.field.canonicalString()} ${e.op} ${sn(e.value)}`}(n):n instanceof Zt?function(e){return e.op.toString()+" {"+e.getFilters().map(uu).join(" ,")+"}"}(n):"Filter"}class dp extends Tt{constructor(t,e,r){super(t,e,r),this.key=$.fromName(r.referenceValue)}matches(t){const e=$.comparator(t.key,this.key);return this.matchesComparison(e)}}class fp extends Tt{constructor(t,e){super(t,"in",e),this.keys=cu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class pp extends Tt{constructor(t,e){super(t,"not-in",e),this.keys=cu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function cu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>$.fromName(r.referenceValue))}class mp extends Tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ps(e)&&Kn(e.arrayValue,this.value)}}class gp extends Tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Kn(this.value.arrayValue,e)}}class _p extends Tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Kn(this.value.arrayValue,e)}}class yp extends Tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ps(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Kn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function Va(n,t=null,e=[],r=[],i=null,o=null,a=null){return new vp(n,t,e,r,i,o,a)}function Cs(n){const t=X(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>is(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),tr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>sn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>sn(r)).join(",")),t.ue=e}return t.ue}function Vs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!cp(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!lu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ca(n.startAt,t.startAt)&&Ca(n.endAt,t.endAt)}function ss(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ep(n,t,e,r,i,o,a,l){return new hn(n,t,e,r,i,o,a,l)}function hu(n){return new hn(n)}function Da(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function du(n){return n.collectionGroup!==null}function On(n){const t=X(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Nt(Lt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Qn(o,r))}),e.has(Lt.keyField().canonicalString())||t.ce.push(new Qn(Lt.keyField(),r))}return t.ce}function ee(n){const t=X(n);return t.le||(t.le=wp(t,On(n))),t.le}function wp(n,t){if(n.limitType==="F")return Va(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Qn(i.field,o)});const e=n.endAt?new $r(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $r(n.startAt.position,n.startAt.inclusive):null;return Va(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function os(n,t){const e=n.filters.concat([t]);return new hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function as(n,t,e){return new hn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ti(n,t){return Vs(ee(n),ee(t))&&n.limitType===t.limitType}function fu(n){return`${Cs(ee(n))}|lt:${n.limitType}`}function He(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>uu(i)).join(", ")}]`),tr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>sn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>sn(i)).join(",")),`Target(${r})`}(ee(n))}; limitType=${n.limitType})`}function ei(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of On(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,c){const d=Pa(a,l,c);return a.inclusive?d<=0:d<0}(r.startAt,On(r),i)||r.endAt&&!function(a,l,c){const d=Pa(a,l,c);return a.inclusive?d>=0:d>0}(r.endAt,On(r),i))}(n,t)}function Tp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pu(n){return(t,e)=>{let r=!1;for(const i of On(n)){const o=Ip(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ip(n,t,e){const r=n.field.isKeyField()?$.comparator(t.key,e.key):function(o,a,l){const c=a.data.field(o),d=l.data.field(o);return c!==null&&d!==null?rn(c,d):G()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){cn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return ru(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=new vt($.comparator);function Re(){return Ap}const mu=new vt($.comparator);function Dn(...n){let t=mu;for(const e of n)t=t.insert(e.key,e);return t}function Rp(n){let t=mu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ne(){return Fn()}function gu(){return Fn()}function Fn(){return new dn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Sp=new Nt($.comparator);function tt(...n){let t=Sp;for(const e of n)t=t.add(e);return t}const bp=new Nt(ot);function Pp(){return bp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(t)?"-0":t}}function yu(n){return{integerValue:""+n}}function vu(n,t){return op(t)?yu(t):_u(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this._=void 0}}function Cp(n,t,e){return n instanceof zr?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ss(o)&&(o=bs(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Wn?Eu(n,t):n instanceof Xn?wu(n,t):function(i,o){const a=Dp(i,o),l=Na(a)+Na(i.Pe);return rs(a)&&rs(i.Pe)?yu(l):_u(i.serializer,l)}(n,t)}function Vp(n,t,e){return n instanceof Wn?Eu(n,t):n instanceof Xn?wu(n,t):e}function Dp(n,t){return n instanceof Yn?function(r){return rs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class zr extends ni{}class Wn extends ni{constructor(t){super(),this.elements=t}}function Eu(n,t){const e=Tu(t);for(const r of n.elements)e.some(i=>ie(i,r))||e.push(r);return{arrayValue:{values:e}}}class Xn extends ni{constructor(t){super(),this.elements=t}}function wu(n,t){let e=Tu(t);for(const r of n.elements)e=e.filter(i=>!ie(i,r));return{arrayValue:{values:e}}}class Yn extends ni{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Na(n){return wt(n.integerValue||n.doubleValue)}function Tu(n){return Ps(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(t,e){this.field=t,this.transform=e}}function kp(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Wn&&i instanceof Wn||r instanceof Xn&&i instanceof Xn?nn(r.elements,i.elements,ie):r instanceof Yn&&i instanceof Yn?ie(r.Pe,i.Pe):r instanceof zr&&i instanceof zr}(n.transform,t.transform)}class Wt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Wt}static exists(t){return new Wt(void 0,t)}static updateTime(t){return new Wt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ri{}function Iu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ds(n.key,Wt.none()):new er(n.key,n.data,Wt.none());{const e=n.data,r=Gt.empty();let i=new Nt(Lt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Be(n.key,r,new Xt(i.toArray()),Wt.none())}}function Mp(n,t,e){n instanceof er?function(i,o,a){const l=i.value.clone(),c=Ma(i.fieldTransforms,o,a.transformResults);l.setAll(c),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Be?function(i,o,a){if(!Nr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ma(i.fieldTransforms,o,a.transformResults),c=o.data;c.setAll(Au(i)),c.setAll(l),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function xn(n,t,e,r){return n instanceof er?function(o,a,l,c){if(!Nr(o.precondition,a))return l;const d=o.value.clone(),f=Oa(o.fieldTransforms,c,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Be?function(o,a,l,c){if(!Nr(o.precondition,a))return l;const d=Oa(o.fieldTransforms,c,a),f=a.data;return f.setAll(Au(o)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(o,a,l){return Nr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function ka(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&nn(r,i,(o,a)=>kp(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class er extends ri{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Be extends ri{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Au(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ma(n,t,e){const r=new Map;ft(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,Vp(a,l,e[i]))}return r}function Oa(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Cp(o,a,t))}return r}class Ds extends ri{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ru extends ri{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Mp(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=xn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=xn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=gu();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const c=Iu(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),tt())}isEqual(t){return this.batchId===t.batchId&&nn(this.mutations,t.mutations,(e,r)=>ka(e,r))&&nn(this.baseMutations,t.baseMutations,(e,r)=>ka(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et,Y;function Lp(n){switch(n){default:return G();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function Su(n){if(n===void 0)return ue("GRPC error has no .code"),C.UNKNOWN;switch(n){case Et.OK:return C.OK;case Et.CANCELLED:return C.CANCELLED;case Et.UNKNOWN:return C.UNKNOWN;case Et.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Et.INTERNAL:return C.INTERNAL;case Et.UNAVAILABLE:return C.UNAVAILABLE;case Et.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Et.NOT_FOUND:return C.NOT_FOUND;case Et.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Et.ABORTED:return C.ABORTED;case Et.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Et.DATA_LOSS:return C.DATA_LOSS;default:return G()}}(Y=Et||(Et={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=new ke([4294967295,4294967295],0);function Fa(n){const t=Up().encode(n),e=new Ql;return e.update(t),new Uint8Array(e.digest())}function xa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ke([e,r],0),new ke([i,o],0)]}class Ns{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Nn(`Invalid padding: ${e}`);if(r<0)throw new Nn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Nn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Nn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ke.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(ke.fromNumber(r)));return i.compare(Bp)===1&&(i=new ke([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Fa(t),[r,i]=xa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ns(o,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Fa(t),[r,i]=xa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,nr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ii(H.min(),i,new vt(ot),Re(),tt())}}class nr{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new nr(r,e,tt(),tt(),tt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class bu{constructor(t,e){this.targetId=t,this.me=e}}class Pu{constructor(t,e,r=Bt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class La{constructor(){this.fe=0,this.ge=Ba(),this.pe=Bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=tt(),e=tt(),r=tt();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:G()}}),new nr(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Ba()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ft(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qp{constructor(t){this.Le=t,this.Be=new Map,this.ke=Re(),this.qe=Ua(),this.Qe=new vt(ot)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:G()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(ss(o))if(r===0){const a=new $(o.path);this.Ue(e,a,bt.newNoDocument(a,H.min()))}else ft(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),c=l?this.Xe(l,t,a):1;if(c!==0){this.je(e);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=xe(r).toUint8Array()}catch(c){if(c instanceof iu)return en("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ns(a,i,o)}catch(c){return en(c instanceof Nn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&ss(l.target)){const c=new $(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,bt.newNoDocument(c,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=tt();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new ii(t,e,this.Qe,this.ke,r);return this.ke=Re(),this.qe=Ua(),this.Qe=new vt(ot),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new La,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Nt(ot),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new La),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ua(){return new vt($.comparator)}function Ba(){return new vt($.comparator)}const jp={asc:"ASCENDING",desc:"DESCENDING"},$p={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zp={and:"AND",or:"OR"};class Gp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ls(n,t){return n.useProto3Json||tr(t)?t:{value:t}}function Gr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Hp(n,t){return Gr(n,t.toTimestamp())}function le(n){return ft(!!n),H.fromTimestamp(function(e){const r=Ae(e);return new Pt(r.seconds,r.nanos)}(n))}function ks(n,t){return us(n,t).canonicalString()}function us(n,t){const e=function(i){return new ut(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Vu(n){const t=ut.fromString(n);return ft(Ou(t)),t}function Hr(n,t){return ks(n.databaseId,t.path)}function Ln(n,t){const e=Vu(t);if(e.get(1)!==n.databaseId.projectId)throw new F(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new F(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new $(Nu(e))}function Du(n,t){return ks(n.databaseId,t)}function Kp(n){const t=Vu(n);return t.length===4?ut.emptyPath():Nu(t)}function qa(n){return new ut(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nu(n){return ft(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ja(n,t,e){return{name:Hr(n,t),fields:e.value.mapValue.fields}}function Qp(n,t){return"found"in t?function(r,i){ft(!!i.found),i.found.name,i.found.updateTime;const o=Ln(r,i.found.name),a=le(i.found.updateTime),l=i.found.createTime?le(i.found.createTime):H.min(),c=new Gt({mapValue:{fields:i.found.fields}});return bt.newFoundDocument(o,a,l,c)}(n,t):"missing"in t?function(r,i){ft(!!i.missing),ft(!!i.readTime);const o=Ln(r,i.missing),a=le(i.readTime);return bt.newNoDocument(o,a)}(n,t):G()}function Wp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(ft(f===void 0||typeof f=="string"),Bt.fromBase64String(f||"")):(ft(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Bt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const f=d.code===void 0?C.UNKNOWN:Su(d.code);return new F(f,d.message||"")}(a);e=new Pu(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ln(n,r.document.name),o=le(r.document.updateTime),a=r.document.createTime?le(r.document.createTime):H.min(),l=new Gt({mapValue:{fields:r.document.fields}}),c=bt.newFoundDocument(i,o,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];e=new kr(d,f,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ln(n,r.document),o=r.readTime?le(r.readTime):H.min(),a=bt.newNoDocument(i,o),l=r.removedTargetIds||[];e=new kr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ln(n,r.document),o=r.removedTargetIds||[];e=new kr([],o,i,null)}else{if(!("filter"in t))return G();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new xp(i,o),l=r.targetId;e=new bu(l,a)}}return e}function Xp(n,t){let e;if(t instanceof er)e={update:ja(n,t.key,t.value)};else if(t instanceof Ds)e={delete:Hr(n,t.key)};else if(t instanceof Be)e={update:ja(n,t.key,t.data),updateMask:im(t.fieldMask)};else{if(!(t instanceof Ru))return G();e={verify:Hr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof zr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Wn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yn)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Hp(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G()}(n,t.precondition)),e}function Yp(n,t){return{documents:[Du(n,t.path)]}}function Jp(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Du(n,i);const o=function(d){if(d.length!==0)return Mu(Zt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(f=>function(v){return{field:Ke(v.field),direction:em(v.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=ls(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function Zp(n){let t=Kp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){ft(r===1);const f=e.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let o=[];e.where&&(o=function(y){const v=ku(y);return v instanceof Zt&&au(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(v=>function(S){return new Qn(Qe(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(v))}(e.orderBy));let l=null;e.limit&&(l=function(y){let v;return v=typeof y=="object"?y.value:y,tr(v)?null:v}(e.limit));let c=null;e.startAt&&(c=function(y){const v=!!y.before,R=y.values||[];return new $r(R,v)}(e.startAt));let d=null;return e.endAt&&(d=function(y){const v=!y.before,R=y.values||[];return new $r(R,v)}(e.endAt)),Ep(t,i,a,o,l,"F",c,d)}function tm(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ku(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Qe(e.unaryFilter.field);return Tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qe(e.unaryFilter.field);return Tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qe(e.unaryFilter.field);return Tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Qe(e.unaryFilter.field);return Tt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(e){return Tt.create(Qe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Zt.create(e.compositeFilter.filters.map(r=>ku(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(n):G()}function em(n){return jp[n]}function nm(n){return $p[n]}function rm(n){return zp[n]}function Ke(n){return{fieldPath:n.canonicalString()}}function Qe(n){return Lt.fromServerFormat(n.fieldPath)}function Mu(n){return n instanceof Tt?function(e){if(e.op==="=="){if(ba(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NAN"}};if(Sa(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ba(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NAN"}};if(Sa(e.value))return{unaryFilter:{field:Ke(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ke(e.field),op:nm(e.op),value:e.value}}}(n):n instanceof Zt?function(e){const r=e.getFilters().map(i=>Mu(i));return r.length===1?r[0]:{compositeFilter:{op:rm(e.op),filters:r}}}(n):G()}function im(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ou(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e,r,i,o=H.min(),a=H.min(),l=Bt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new ge(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ge(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t){this.ct=t}}function om(n){const t=Zp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?as(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this._n=new lm}addToCollectionParentIndex(t,e){return this._n.add(e),D.resolve()}getCollectionParents(t,e){return D.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return D.resolve()}deleteFieldIndex(t,e){return D.resolve()}deleteAllFieldIndexes(t){return D.resolve()}createTargetIndexes(t,e){return D.resolve()}getDocumentsMatchingTarget(t,e){return D.resolve(null)}getIndexType(t,e){return D.resolve(0)}getFieldIndexes(t,e){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,e){return D.resolve(Ie.min())}getMinOffsetFromCollectionGroup(t,e){return D.resolve(Ie.min())}updateCollectionGroup(t,e,r){return D.resolve()}updateIndexEntries(t,e){return D.resolve()}}class lm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Nt(ut.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Nt(ut.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new on(0)}static Ln(){return new on(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.changes=new dn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,bt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?D.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&xn(r.mutation,i,Xt.empty(),Pt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,tt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=tt()){const i=Ne();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=Dn();return o.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Ne();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,tt()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let o=Re();const a=Fn(),l=function(){return Fn()}();return e.forEach((c,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Be)?o=o.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),xn(f.mutation,d,f.mutation.getFieldMask(),Pt.now())):a.set(d.key,Xt.empty())}),this.recalculateAndSaveOverlays(t,o).next(c=>(c.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>{var y;return l.set(d,new cm(f,(y=a.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(t,e){const r=Fn();let i=new vt((a,l)=>a-l),o=tt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(c=>{const d=e.get(c);if(d===null)return;let f=r.get(c)||Xt.empty();f=l.applyToLocalView(d,f),r.set(c,f);const y=(i.get(l.batchId)||tt()).add(c);i=i.insert(l.batchId,y)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,f=c.value,y=gu();f.forEach(v=>{if(!o.has(v)){const R=Iu(e.get(v),r.get(v));R!==null&&y.set(v,R),o=o.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):du(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):D.resolve(Ne());let l=-1,c=o;return a.next(d=>D.forEach(d,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(f)?D.resolve():this.remoteDocumentCache.getEntry(t,f).next(v=>{c=c.insert(f,v)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,c,d,tt())).next(f=>({batchId:l,changes:Rp(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new $(e)).next(r=>{let i=Dn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=Dn();return this.indexManager.getCollectionParents(t,o).next(l=>D.forEach(l,c=>{const d=function(y,v){return new hn(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,c.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(f=>{f.forEach((y,v)=>{a=a.insert(y,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((c,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,bt.newInvalidDocument(f)))});let l=Dn();return a.forEach((c,d)=>{const f=o.get(c);f!==void 0&&xn(f.mutation,d,Xt.empty(),Pt.now()),ei(e,d)&&(l=l.insert(c,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return D.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:le(i.createTime)}}(e)),D.resolve()}getNamedQuery(t,e){return D.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:om(i.bundledQuery),readTime:le(i.readTime)}}(e)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.overlays=new vt($.comparator),this.hr=new Map}getOverlay(t,e){return D.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ne();return D.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),D.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),D.resolve()}getOverlaysForCollection(t,e,r){const i=Ne(),o=e.length+1,a=new $(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&c.largestBatchId>r&&i.set(c.getKey(),c)}return D.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new vt((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=Ne(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Ne(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return D.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Fp(e,r));let o=this.hr.get(e);o===void 0&&(o=tt(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.Pr=new Nt(At.Ir),this.Tr=new Nt(At.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new At(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new At(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new $(new ut([])),r=new At(e,t),i=new At(e,t+1),o=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new $(new ut([])),r=new At(e,t),i=new At(e,t+1);let o=tt();return this.Tr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new At(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class At{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return $.comparator(t.key,e.key)||ot(t.pr,e.pr)}static Er(t,e){return ot(t.pr,e.pr)||$.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Nt(At.Ir)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Op(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new At(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(t,e){return D.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new At(e,0),i=new At(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],a=>{const l=this.Sr(a.pr);o.push(l)}),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Nt(ot);return e.forEach(i=>{const o=new At(i,0),a=new At(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],l=>{r=r.add(l.pr)})}),D.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const a=new At(new $(o),0);let l=new Nt(ot);return this.wr.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(c.pr)),!0)},a),D.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){ft(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return D.forEach(e.mutations,i=>{const o=new At(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new At(e,0),i=this.wr.firstAfterOrEqual(r);return D.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(t){this.vr=t,this.docs=function(){return new vt($.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return D.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(e))}getEntries(t,e){let r=Re();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():bt.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Re();const a=e.path,l=new $(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||np(ep(f),r)<=0||(i.has(f.key)||ei(e,f))&&(o=o.insert(f.key,f.mutableCopy()))}return D.resolve(o)}getAllFromCollectionGroup(t,e,r,i){G()}Fr(t,e){return D.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new gm(this)}getSize(t){return D.resolve(this.size)}}class gm extends um{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),D.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t){this.persistence=t,this.Mr=new dn(e=>Cs(e),Vs),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ms,this.targetCount=0,this.Lr=on.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),D.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new on(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,D.resolve()}updateTargetData(t,e){return this.qn(e),D.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),D.waitFor(o).next(()=>i)}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return D.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),D.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),D.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),D.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return D.resolve(r)}containsKey(t,e){return D.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t,e){this.Br={},this.overlays={},this.kr=new Rs(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new _m(this),this.indexManager=new am,this.remoteDocumentCache=function(i){return new mm(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new sm(e),this.$r=new dm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new fm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new pm(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const i=new vm(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return D.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class vm extends ip{constructor(t){super(),this.currentSequenceNumber=t}}class Os{constructor(t){this.persistence=t,this.zr=new Ms,this.jr=null}static Hr(t){return new Os(t)}get Jr(){if(this.jr)return this.jr;throw G()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),D.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),D.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Jr,r=>{const i=$.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,H.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return D.or([()=>D.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=tt(),i=tt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Fs(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return bd()?8:sp(Rd())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Em;return this.Ji(t,e,a).next(l=>{if(o.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(Pn()<=Z.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),D.resolve()):(Pn()<=Z.DEBUG&&U("QueryEngine","Query:",He(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Pn()<=Z.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ee(e))):D.resolve())}ji(t,e){if(Da(e))return D.resolve(null);let r=ee(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=as(e,null,"F"),r=ee(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=tt(...o);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const d=this.Zi(e,l);return this.Xi(e,d,a,c.readTime)?this.ji(t,as(e,null,"F")):this.es(t,d,e,c)}))})))}Hi(t,e,r,i){return Da(e)||i.isEqual(H.min())?D.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,i)?D.resolve(null):(Pn()<=Z.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),He(e)),this.es(t,a,e,tp(i,-1)).next(l=>l))})}Zi(t,e){let r=new Nt(pu(t));return e.forEach((i,o)=>{ei(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return Pn()<=Z.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",He(e)),this.zi.getDocumentsMatchingQuery(t,e,Ie.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new vt(ot),this.rs=new dn(o=>Cs(o),Vs),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hm(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Im(n,t,e,r){return new Tm(n,t,e,r)}async function Fu(n,t){const e=X(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let c=tt();for(const d of i){a.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of o){l.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return e.localDocuments.getDocuments(r,c).next(d=>({us:d,removedBatchIds:a,addedBatchIds:l}))})})}function xu(n){const t=X(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Am(n,t){const e=X(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const l=[];t.targetChanges.forEach((f,y)=>{const v=i.get(y);if(!v)return;l.push(e.Qr.removeMatchingKeys(o,f.removedDocuments,y).next(()=>e.Qr.addMatchingKeys(o,f.addedDocuments,y)));let R=v.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?R=R.withResumeToken(Bt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(y,R),function(V,P,k){return V.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(v,R,f)&&l.push(e.Qr.updateTargetData(o,R))});let c=Re(),d=tt();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,f))}),l.push(Rm(o,a,t.documentUpdates).next(f=>{c=f.cs,d=f.ls})),!r.isEqual(H.min())){const f=e.Qr.getLastRemoteSnapshotVersion(o).next(y=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,c,d)).next(()=>c)}).then(o=>(e.ns=i,o))}function Rm(n,t,e){let r=tt(),i=tt();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Re();return e.forEach((l,c)=>{const d=o.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(H.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):U("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{cs:a,ls:i}})}function Sm(n,t){const e=X(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(o=>o?(i=o,D.resolve(i)):e.Qr.allocateTargetId(r).next(a=>(i=new ge(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function cs(n,t,e){const r=X(n),i=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Zn(a))throw a;U("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function $a(n,t,e){const r=X(n);let i=H.min(),o=tt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,f){const y=X(c),v=y.rs.get(f);return v!==void 0?D.resolve(y.ns.get(v)):y.Qr.getTargetData(d,f)}(r,a,ee(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{o=c})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?i:H.min(),e?o:tt())).next(l=>(bm(r,Tp(t),l),{documents:l,hs:o})))}function bm(n,t,e){let r=n.ss.get(t)||H.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class za{constructor(){this.activeTargetIds=Pp()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pm{constructor(){this.no=new za,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new za,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr=null;function $i(){return Sr===null?Sr=function(){return 268435456+Math.round(2147483648*Math.random())}():Sr++,"0x"+Sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class Nm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,a){const l=$i(),c=this.vo(e,r.toUriEncodedString());U("RestConnection",`Sending RPC '${e}' ${l}:`,c,i);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(e,c,d,i).then(f=>(U("RestConnection",`Received RPC '${e}' ${l}: `,f),f),f=>{throw en("RestConnection",`RPC '${e}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}xo(e,r,i,o,a,l){return this.Co(e,r,i,o,a)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+un}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const i=Vm[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=$i();return new Promise((a,l)=>{const c=new Wl;c.setWithCredentials(!0),c.listenOnce(Yl.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Dr.NO_ERROR:const f=c.getResponseJson();U(Ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(f)),a(f);break;case Dr.TIMEOUT:U(Ft,`RPC '${t}' ${o} timed out`),l(new F(C.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const y=c.getStatus();if(U(Ft,`RPC '${t}' ${o} failed with status:`,y,"response text:",c.getResponseText()),y>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v==null?void 0:v.error;if(R&&R.status&&R.message){const S=function(P){const k=P.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(k)>=0?k:C.UNKNOWN}(R.status);l(new F(S,R.message))}else l(new F(C.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new F(C.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{U(Ft,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);U(Ft,`RPC '${t}' ${o} sending request:`,i),c.send(e,"POST",d,r,15)})}Oo(t,e,r){const i=$i(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=tu(),l=Zl(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.xmlHttpFactory=new Xl({})),this.Fo(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const f=o.join("");U(Ft,`Creating RPC '${t}' stream ${i}: ${f}`,c);const y=a.createWebChannel(f,c);let v=!1,R=!1;const S=new Dm({lo:P=>{R?U(Ft,`Not sending because RPC '${t}' stream ${i} is closed:`,P):(v||(U(Ft,`Opening RPC '${t}' stream ${i} transport.`),y.open(),v=!0),U(Ft,`RPC '${t}' stream ${i} sending:`,P),y.send(P))},ho:()=>y.close()}),V=(P,k,O)=>{P.listen(k,M=>{try{O(M)}catch(q){setTimeout(()=>{throw q},0)}})};return V(y,Vn.EventType.OPEN,()=>{R||(U(Ft,`RPC '${t}' stream ${i} transport opened.`),S.mo())}),V(y,Vn.EventType.CLOSE,()=>{R||(R=!0,U(Ft,`RPC '${t}' stream ${i} transport closed`),S.po())}),V(y,Vn.EventType.ERROR,P=>{R||(R=!0,en(Ft,`RPC '${t}' stream ${i} transport errored:`,P),S.po(new F(C.UNAVAILABLE,"The operation could not be completed")))}),V(y,Vn.EventType.MESSAGE,P=>{var k;if(!R){const O=P.data[0];ft(!!O);const M=O,q=M.error||((k=M[0])===null||k===void 0?void 0:k.error);if(q){U(Ft,`RPC '${t}' stream ${i} received error:`,q);const et=q.status;let W=function(_){const w=Et[_];if(w!==void 0)return Su(w)}(et),T=q.message;W===void 0&&(W=C.INTERNAL,T="Unknown error status: "+et+" with message "+q.message),R=!0,S.po(new F(W,T)),y.close()}else U(Ft,`RPC '${t}' stream ${i} received:`,O),S.yo(O)}}),V(l,Jl.STAT_EVENT,P=>{P.stat===es.PROXY?U(Ft,`RPC '${t}' stream ${i} detected buffering proxy`):P.stat===es.NOPROXY&&U(Ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function zi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n){return new Gp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t,e,r,i,o,a,l,c){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new xs(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(ue(e.toString()),ue("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new F(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return U("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mm extends km{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=Wp(this.serializer,t),r=function(o){if(!("targetChange"in o))return H.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?le(a.readTime):H.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=qa(this.serializer),e.addTarget=function(o,a){let l;const c=a.target;if(l=ss(c)?{documents:Yp(o,c)}:{query:Jp(o,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Cu(o,a.resumeToken);const d=ls(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(H.min())>0){l.readTime=Gr(o,a.snapshotVersion.toTimestamp());const d=ls(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=tm(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=qa(this.serializer),e.removeTarget=t,this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new F(C.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,us(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(C.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,us(e,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(C.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Fm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ue(e),this.y_=!1):U("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{ir(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=X(c);d.M_.add(4),await rr(d),d.N_.set("Unknown"),d.M_.delete(4),await oi(d)}(this))})}),this.N_=new Fm(r,i)}}async function oi(n){if(ir(n))for(const t of n.x_)await t(!0)}async function rr(n){for(const t of n.x_)await t(!1)}function Lu(n,t){const e=X(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),qs(e)?Bs(e):fn(e).Xo()&&Us(e,t))}function Ls(n,t){const e=X(n),r=fn(e);e.F_.delete(t),r.Xo()&&Uu(e,t),e.F_.size===0&&(r.Xo()?r.n_():ir(e)&&e.N_.set("Unknown"))}function Us(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}fn(n).P_(t)}function Uu(n,t){n.L_.xe(t),fn(n).I_(t)}function Bs(n){n.L_=new qp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),fn(n).start(),n.N_.w_()}function qs(n){return ir(n)&&!fn(n).Zo()&&n.F_.size>0}function ir(n){return X(n).M_.size===0}function Bu(n){n.L_=void 0}async function Lm(n){n.N_.set("Online")}async function Um(n){n.F_.forEach((t,e)=>{Us(n,t)})}async function Bm(n,t){Bu(n),qs(n)?(n.N_.D_(t),Bs(n)):n.N_.set("Unknown")}async function qm(n,t,e){if(n.N_.set("Online"),t instanceof Pu&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(n,t)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ha(n,r)}else if(t instanceof kr?n.L_.Ke(t):t instanceof bu?n.L_.He(t):n.L_.We(t),!e.isEqual(H.min()))try{const r=await xu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.L_.rt(a);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=o.F_.get(d);f&&o.F_.set(d,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,d)=>{const f=o.F_.get(c);if(!f)return;o.F_.set(c,f.withResumeToken(Bt.EMPTY_BYTE_STRING,f.snapshotVersion)),Uu(o,c);const y=new ge(f.target,c,d,f.sequenceNumber);Us(o,y)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Ha(n,r)}}async function Ha(n,t,e){if(!Zn(t))throw t;n.M_.add(1),await rr(n),n.N_.set("Offline"),e||(e=()=>xu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await oi(n)})}async function Ka(n,t){const e=X(n);e.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=ir(e);e.M_.add(3),await rr(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await oi(e)}async function jm(n,t){const e=X(n);t?(e.M_.delete(2),await oi(e)):t||(e.M_.add(2),await rr(e),e.N_.set("Unknown"))}function fn(n){return n.B_||(n.B_=function(e,r,i){const o=X(e);return o.f_(),new Mm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:Lm.bind(null,n),To:Um.bind(null,n),Ao:Bm.bind(null,n),h_:qm.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),qs(n)?Bs(n):n.N_.set("Unknown")):(await n.B_.stop(),Bu(n))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new js(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(n,t){if(ue("AsyncQueue",`${t}: ${n}`),Zn(n))return new F(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.comparator=t?(e,r)=>t(e,r)||$.comparator(e.key,r.key):(e,r)=>$.comparator(e.key,r.key),this.keyedMap=Dn(),this.sortedSet=new vt(this.comparator)}static emptySet(t){return new Ye(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ye)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ye;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.q_=new vt($.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):G():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class an{constructor(t,e,r,i,o,a,l,c,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new an(t,e,Ye.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ti(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class zm{constructor(){this.queries=new dn(t=>fu(t),ti),this.onlineState="Unknown",this.z_=new Set}}async function Gm(n,t){const e=X(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(r=2):(o=new $m,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=qu(a,`Initialization of query '${He(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&$s(e)}async function Hm(n,t){const e=X(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Km(n,t){const e=X(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.U_)l.H_(i)&&(r=!0);a.K_=i}}r&&$s(e)}function Qm(n,t,e){const r=X(n),i=r.queries.get(t);if(i)for(const o of i.U_)o.onError(e);r.queries.delete(t)}function $s(n){n.z_.forEach(t=>{t.next()})}var hs,Wa;(Wa=hs||(hs={})).J_="default",Wa.Cache="cache";class Wm{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new an(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=an.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==hs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t){this.key=t}}class $u{constructor(t){this.key=t}}class Xm{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=tt(),this.mutatedKeys=tt(),this.Ia=pu(t),this.Ta=new Ye(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new Qa,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,y)=>{const v=i.get(f),R=ei(this.query,y)?y:null,S=!!v&&this.mutatedKeys.has(v.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;v&&R?v.data.isEqual(R.data)?S!==V&&(r.track({type:3,doc:R}),P=!0):this.Ra(v,R)||(r.track({type:2,doc:R}),P=!0,(c&&this.Ia(R,c)>0||d&&this.Ia(R,d)<0)&&(l=!0)):!v&&R?(r.track({type:0,doc:R}),P=!0):v&&!R&&(r.track({type:1,doc:v}),P=!0,(c||d)&&(l=!0)),P&&(R?(a=a.add(R),o=V?o.add(f):o.delete(f)):(a=a.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((f,y)=>function(R,S){const V=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return V(R)-V(S)}(f.type,y.type)||this.Ia(f.doc,y.doc)),this.Va(r),i=i!=null&&i;const l=e&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,d=c!==this.ha;return this.ha=c,a.length!==0||d?{snapshot:new an(this.query,t.Ta,o,a,t.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Qa,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=tt(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new $u(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new ju(r))}),e}pa(t){this.la=t.hs,this.Pa=tt();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return an.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Ym{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Jm{constructor(t){this.key=t,this.wa=!1}}class Zm{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new dn(l=>fu(l),ti),this.Da=new Map,this.Ca=new Set,this.va=new vt($.comparator),this.Fa=new Map,this.Ma=new Ms,this.xa={},this.Oa=new Map,this.Na=on.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function tg(n,t,e=!0){const r=Qu(n);let i;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await zu(r,t,e,!0),i}async function eg(n,t){const e=Qu(n);await zu(e,t,!0,!1)}async function zu(n,t,e,r){const i=await Sm(n.localStore,ee(t)),o=i.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await ng(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Lu(n.remoteStore,i),l}async function ng(n,t,e,r,i){n.Ba=(y,v,R)=>async function(V,P,k,O){let M=P.view.da(k);M.Xi&&(M=await $a(V.localStore,P.query,!1).then(({documents:T})=>P.view.da(T,M)));const q=O&&O.targetChanges.get(P.targetId),et=O&&O.targetMismatches.get(P.targetId)!=null,W=P.view.applyChanges(M,V.isPrimaryClient,q,et);return Ya(V,P.targetId,W.fa),W.snapshot}(n,y,v,R);const o=await $a(n.localStore,t,!0),a=new Xm(t,o.hs),l=a.da(o.documents),c=nr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,c);Ya(n,e,d.fa);const f=new Ym(t,e,a);return n.ba.set(t,f),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),d.snapshot}async function rg(n,t,e){const r=X(n),i=r.ba.get(t),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(a=>!ti(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await cs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Ls(r.remoteStore,i.targetId),ds(r,i.targetId)}).catch(As)):(ds(r,i.targetId),await cs(r.localStore,i.targetId,!0))}async function ig(n,t){const e=X(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ls(e.remoteStore,r.targetId))}async function Gu(n,t){const e=X(n);try{const r=await Am(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Fa.get(o);a&&(ft(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?ft(a.wa):i.removedDocuments.size>0&&(ft(a.wa),a.wa=!1))}),await Ku(e,r,t)}catch(r){await As(r)}}function Xa(n,t,e){const r=X(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,a)=>{const l=a.view.j_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=X(a);c.onlineState=l;let d=!1;c.queries.forEach((f,y)=>{for(const v of y.U_)v.j_(l)&&(d=!0)}),d&&$s(c)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function sg(n,t,e){const r=X(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),o=i&&i.key;if(o){let a=new vt($.comparator);a=a.insert(o,bt.newNoDocument(o,H.min()));const l=tt().add(o),c=new ii(H.min(),new Map,new vt(ot),a,l);await Gu(r,c),r.va=r.va.remove(o),r.Fa.delete(t),zs(r)}else await cs(r.localStore,t,!1).then(()=>ds(r,t,e)).catch(As)}function ds(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||Hu(n,r)})}function Hu(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Ls(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),zs(n))}function Ya(n,t,e){for(const r of e)r instanceof ju?(n.Ma.addReference(r.key,t),og(n,r)):r instanceof $u?(U("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||Hu(n,r.key)):G()}function og(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(U("SyncEngine","New document in limbo: "+e),n.Ca.add(r),zs(n))}function zs(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new $(ut.fromString(t)),r=n.Na.next();n.Fa.set(r,new Jm(e)),n.va=n.va.insert(e,r),Lu(n.remoteStore,new ge(ee(hu(e.path)),r,"TargetPurposeLimboResolution",Rs.oe))}}async function Ku(n,t,e){const r=X(n),i=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{a.push(r.Ba(c,t,e).then(d=>{if((d||e)&&r.isPrimaryClient){const f=d&&!d.fromCache;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(d){i.push(d);const f=Fs.Ki(c.targetId,d);o.push(f)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(c,d){const f=X(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>D.forEach(d,v=>D.forEach(v.qi,R=>f.persistence.referenceDelegate.addReference(y,v.targetId,R)).next(()=>D.forEach(v.Qi,R=>f.persistence.referenceDelegate.removeReference(y,v.targetId,R)))))}catch(y){if(!Zn(y))throw y;U("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const v=y.targetId;if(!y.fromCache){const R=f.ns.get(v),S=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(S);f.ns=f.ns.insert(v,V)}}}(r.localStore,o))}async function ag(n,t){const e=X(n);if(!e.currentUser.isEqual(t)){U("SyncEngine","User change. New user:",t.toKey());const r=await Fu(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(l=>{l.forEach(c=>{c.reject(new F(C.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ku(e,r.us)}}function lg(n,t){const e=X(n),r=e.Fa.get(t);if(r&&r.wa)return tt().add(r.key);{let i=tt();const o=e.Da.get(t);if(!o)return i;for(const a of o){const l=e.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function Qu(n){const t=X(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Gu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=sg.bind(null,t),t.Sa.h_=Km.bind(null,t.eventManager),t.Sa.ka=Qm.bind(null,t.eventManager),t}class Ja{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=si(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Im(this.persistence,new wm,t.initialUser,this.serializer)}createPersistence(t){return new ym(Os.Hr,this.serializer)}createSharedClientState(t){return new Pm}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ug{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ag.bind(null,this.syncEngine),await jm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zm}()}createDatastore(t){const e=si(t.databaseInfo.databaseId),r=function(o){return new Nm(o)}(t.databaseInfo);return function(o,a,l,c){return new Om(o,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,l){return new xm(r,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Xa(this.syncEngine,e,0),function(){return Ga.D()?new Ga:new Cm}())}createSyncEngine(t,e){return function(i,o,a,l,c,d,f){const y=new Zm(i,o,a,l,c,d);return f&&(y.La=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=X(r);U("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await rr(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):ue("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new F(C.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(i,o){const a=X(i),l={documents:o.map(y=>Hr(a.serializer,y))},c=await a.xo("BatchGetDocuments",a.serializer.databaseId,ut.emptyPath(),l,o.length),d=new Map;c.forEach(y=>{const v=Qp(a.serializer,y);d.set(v.key.toString(),v)});const f=[];return o.forEach(y=>{const v=d.get(y.toString());ft(!!v),f.push(v)}),f}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ds(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=$.fromPath(r);this.mutations.push(new Ru(i,this.precondition(i)))}),await async function(r,i){const o=X(r),a={writes:i.map(l=>Xp(o.serializer,l))};await o.Co("Commit",o.serializer.databaseId,ut.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw G();e=H.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new F(C.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(H.min())?Wt.exists(!1):Wt.updateTime(e):Wt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(H.min()))throw new F(C.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Wt.updateTime(e)}return Wt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t,e,r,i,o){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=o,this.Za=r.maxAttempts,this.Yo=new xs(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const t=new hg(this.datastore),e=this.tu(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(t){try{const e=this.updateFunction(t);return!tr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}nu(t){this.Za>0&&this.ru(t)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(t)}ru(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Lp(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=xt.UNAUTHENTICATED,this.clientId=nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=qu(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Gi(n,t){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Fu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Za(n,t){n.asyncQueue.verifyOperationInProgress();const e=await mg(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ka(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ka(t.remoteStore,i)),n._onlineComponents=t}function pg(n){return n.name==="FirebaseError"?n.code===C.FAILED_PRECONDITION||n.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function mg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!pg(e))throw e;en("Error using user provided cache. Falling back to memory cache: "+e),await Gi(n,new Ja)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Gi(n,new Ja);return n._offlineComponents}async function Wu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Za(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Za(n,new ug))),n._onlineComponents}function gg(n){return Wu(n).then(t=>t.datastore)}async function _g(n){const t=await Wu(n),e=t.eventManager;return e.onListen=tg.bind(null,t.syncEngine),e.onUnlisten=rg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=eg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ig.bind(null,t.syncEngine),e}function yg(n,t,e={}){const r=new Ee;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,c,d){const f=new cg({next:v=>{a.enqueueAndForget(()=>Hm(o,y)),v.fromCache&&c.source==="server"?d.reject(new F(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),y=new Wm(l,f,{includeMetadataChanges:!0,ra:!0});return Gm(o,y)}(await _g(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n,t,e){if(!e)throw new F(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function vg(n,t,e,r){if(t===!0&&r===!0)throw new F(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function el(n){if(!$.isDocumentKey(n))throw new F(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nl(n){if($.isDocumentKey(n))throw new F(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ai(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":G()}function Kr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new F(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ai(n);throw new F(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new F(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}vg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new F(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new F(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new F(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class li{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new F(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rl(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Gf;switch(r.type){case"firstParty":return new Wf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=tl.get(e);r&&(U("ComponentProvider","Removing Datastore"),tl.delete(e),r.terminate())}(this),Promise.resolve()}}function Eg(n,t,e,r={}){var i;const o=(n=Kr(n,li))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&en("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=xt.MOCK_USER;else{l=Ad(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new F(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new xt(d)}n._authCredentials=new Hf(new eu(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new qe(this.firestore,t,this._query)}}class Qt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new we(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qt(this.firestore,t,this._key)}}class we extends qe{constructor(t,e,r){super(t,e,hu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qt(this.firestore,null,new $(t))}withConverter(t){return new we(this.firestore,t,this._path)}}function Ve(n,t,...e){if(n=re(n),Yu("collection","path",t),n instanceof li){const r=ut.fromString(t,...e);return nl(r),new we(n,null,r)}{if(!(n instanceof Qt||n instanceof we))throw new F(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ut.fromString(t,...e));return nl(r),new we(n.firestore,null,r)}}function Hi(n,t,...e){if(n=re(n),arguments.length===1&&(t=nu.newId()),Yu("doc","path",t),n instanceof li){const r=ut.fromString(t,...e);return el(r),new Qt(n,null,new $(r))}{if(!(n instanceof Qt||n instanceof we))throw new F(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ut.fromString(t,...e));return el(r),new Qt(n.firestore,n instanceof we?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new xs(this,"async_queue_retry"),this.hu=()=>{const e=zi();e&&U("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=zi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=zi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Ee;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Zn(t))throw t;U("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw ue("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=js.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&G()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Gs extends li{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new wg}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zu(this),this._firestoreClient.terminate()}}function Tg(n,t){const e=typeof n=="object"?n:kf(),r=typeof n=="string"?n:"(default)",i=Cf(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Td("firestore");o&&Eg(i,...o)}return i}function Ju(n){return n._firestoreClient||Zu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Zu(n){var t,e,r;const i=n._freezeSettings(),o=function(l,c,d,f){return new lp(l,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Xu(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new fg(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ue(Bt.fromBase64String(t))}catch(e){throw new F(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ue(Bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new F(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function Ig(){return new sr("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ot(this._lat,t._lat)||ot(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=/^__.*__$/;class Rg{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Be(t,this.data,this.fieldMask,e,this.fieldTransforms):new er(t,this.data,e,this.fieldTransforms)}}class tc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Be(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ec(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Ks{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Ks(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Qr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(ec(this.fu)&&Ag.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Sg{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||si(t)}Fu(t,e,r,i=!1){return new Ks({fu:t,methodName:e,vu:r,path:Lt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nc(n){const t=n._freezeSettings(),e=si(n._databaseId);return new Sg(n._databaseId,!!t.ignoreUndefinedProperties,e)}function bg(n,t,e,r,i,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,i);Ws("Data must be an object, but it was:",a,r);const l=rc(r,a);let c,d;if(o.merge)c=new Xt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const f=[];for(const y of o.mergeFields){const v=fs(t,y,e);if(!a.contains(v))throw new F(C.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);sc(f,v)||f.push(v)}c=new Xt(f),d=a.fieldTransforms.filter(y=>c.covers(y.field))}else c=null,d=a.fieldTransforms;return new Rg(new Gt(l),c,d)}class ci extends ui{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ci}}class Qs extends ui{constructor(t,e){super(t),this.xu=e}_toFieldTransform(t){const e=new Yn(t.serializer,vu(t.serializer,this.xu));return new Np(t.path,e)}isEqual(t){return t instanceof Qs&&this.xu===t.xu}}function Pg(n,t,e,r){const i=n.Fu(1,t,e);Ws("Data must be an object, but it was:",i,r);const o=[],a=Gt.empty();cn(r,(c,d)=>{const f=Xs(t,c,e);d=re(d);const y=i.Su(f);if(d instanceof ci)o.push(f);else{const v=or(d,y);v!=null&&(o.push(f),a.set(f,v))}});const l=new Xt(o);return new tc(a,l,i.fieldTransforms)}function Cg(n,t,e,r,i,o){const a=n.Fu(1,t,e),l=[fs(t,r,e)],c=[i];if(o.length%2!=0)throw new F(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<o.length;v+=2)l.push(fs(t,o[v])),c.push(o[v+1]);const d=[],f=Gt.empty();for(let v=l.length-1;v>=0;--v)if(!sc(d,l[v])){const R=l[v];let S=c[v];S=re(S);const V=a.Su(R);if(S instanceof ci)d.push(R);else{const P=or(S,V);P!=null&&(d.push(R),f.set(R,P))}}const y=new Xt(d);return new tc(f,y,a.fieldTransforms)}function Vg(n,t,e,r=!1){return or(e,n.Fu(r?4:3,t))}function or(n,t){if(ic(n=re(n)))return Ws("Unsupported field value:",t,n),rc(n,t);if(n instanceof ui)return function(r,i){if(!ec(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let c=or(l,i.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vu(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Pt.fromDate(r);return{timestampValue:Gr(i.serializer,o)}}if(r instanceof Pt){const o=new Pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gr(i.serializer,o)}}if(r instanceof Hs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ue)return{bytesValue:Cu(i.serializer,r._byteString)};if(r instanceof Qt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ks(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${ai(r)}`)}(n,t)}function rc(n,t){const e={};return ru(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):cn(n,(r,i)=>{const o=or(i,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function ic(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Pt||n instanceof Hs||n instanceof Ue||n instanceof Qt||n instanceof ui)}function Ws(n,t,e){if(!ic(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=ai(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function fs(n,t,e){if((t=re(t))instanceof sr)return t._internalPath;if(typeof t=="string")return Xs(n,t);throw Qr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Dg=new RegExp("[~\\*/\\[\\]]");function Xs(n,t,e){if(t.search(Dg)>=0)throw Qr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new sr(...t.split("."))._internalPath}catch{throw Qr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Qr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(o||a)&&(c+=" (found",o&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new F(C.INVALID_ARGUMENT,l+n+c)}function sc(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ng(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(hi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ng extends Wr{data(){return super.data()}}function hi(n,t){return typeof t=="string"?Xs(n,t):t instanceof sr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ys{}class oc extends Ys{}function br(n,t,...e){let r=[];t instanceof Ys&&r.push(t),r=r.concat(e),function(o){const a=o.filter(c=>c instanceof Js).length,l=o.filter(c=>c instanceof di).length;if(a>1||a>0&&l>0)throw new F(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class di extends oc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new di(t,e,r)}_apply(t){const e=this._parse(t);return ac(t._query,e),new qe(t.firestore,t.converter,os(t._query,e))}_parse(t){const e=nc(t.firestore);return function(o,a,l,c,d,f,y){let v;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){al(y,f);const R=[];for(const S of y)R.push(ol(c,o,S));v={arrayValue:{values:R}}}else v=ol(c,o,y)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||al(y,f),v=Vg(l,a,y,f==="in"||f==="not-in");return Tt.create(d,f,v)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function il(n,t,e){const r=t,i=hi("where",n);return di._create(i,r,e)}class Js extends Ys{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Js(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Zt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const l=o.getFlattenedFilters();for(const c of l)ac(a,c),a=os(a,c)}(t._query,e),new qe(t.firestore,t.converter,os(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zs extends oc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Zs(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new F(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new F(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qn(o,a)}(t._query,this._field,this._direction);return new qe(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new hn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function sl(n,t="asc"){const e=t,r=hi("orderBy",n);return Zs._create(r,e)}function ol(n,t,e){if(typeof(e=re(e))=="string"){if(e==="")throw new F(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!du(t)&&e.indexOf("/")!==-1)throw new F(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ut.fromString(e));if(!$.isDocumentKey(r))throw new F(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ra(n,new $(r))}if(e instanceof Qt)return Ra(n,e._key);throw new F(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ai(e)}.`)}function al(n,t){if(!Array.isArray(n)||n.length===0)throw new F(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ac(n,t){const e=function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new F(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new F(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class lc{convertValue(t,e="none"){switch(Le(t)){case 0:return null;case 1:return t.booleanValue;case 2:return wt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(xe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw G()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return cn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Hs(wt(t.latitude),wt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=bs(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Gn(t));default:return null}}convertTimestamp(t){const e=Ae(t);return new Pt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ut.fromString(t);ft(Ou(r));const i=new Hn(r.get(1),r.get(3)),o=new $(r.popFirst(5));return i.isEqual(e)||ue(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Og extends lc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Qt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uc extends Wr{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(hi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Mr extends uc{data(t={}){return super.data(t)}}class Fg{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new kn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Mr(this._firestore,this._userDataWriter,r.key,r,new kn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new Mr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new kn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const c=new Mr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new kn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:xg(l.type),doc:c,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function xg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class cc extends lc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Qt(this.firestore,null,e)}}function Pr(n){n=Kr(n,qe);const t=Kr(n.firestore,Gs),e=Ju(t),r=new cc(t);return kg(n._query),yg(e,n._query).then(i=>new Fg(t,r,n,i))}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg={maxAttempts:5};function Cn(n,t){if((n=re(n)).firestore!==t)throw new F(C.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=nc(e)}get(e){const r=Cn(e,this._firestore),i=new Og(this._firestore);return this._transaction.lookup([r._key]).then(o=>{if(!o||o.length!==1)return G();const a=o[0];if(a.isFoundDocument())return new Wr(this._firestore,i,a.key,a,r.converter);if(a.isNoDocument())return new Wr(this._firestore,i,r._key,null,r.converter);throw G()})}set(e,r,i){const o=Cn(e,this._firestore),a=Mg(o.converter,r,i),l=bg(this._dataReader,"Transaction.set",o._key,a,o.converter!==null,i);return this._transaction.set(o._key,l),this}update(e,r,i,...o){const a=Cn(e,this._firestore);let l;return l=typeof(r=re(r))=="string"||r instanceof sr?Cg(this._dataReader,"Transaction.update",a._key,r,i,o):Pg(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,l),this}delete(e){const r=Cn(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Cn(t,this._firestore),r=new cc(this._firestore);return super.get(t).then(i=>new uc(this._firestore,r,e._key,i._document,new kn(!1,!1),e.converter))}}function Bg(n,t,e){n=Kr(n,Gs);const r=Object.assign(Object.assign({},Lg),e);return function(o){if(o.maxAttempts<1)throw new F(C.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,a,l){const c=new Ee;return o.asyncQueue.enqueueAndForget(async()=>{const d=await gg(o);new dg(o.asyncQueue,d,l,a,c).Xa()}),c.promise}(Ju(n),i=>t(new Ug(n,i)),r)}function qg(n){return new Qs("increment",n)}(function(t,e=!0){(function(i){un=i})(Nf),qr(new jn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Gs(new Kf(r.getProvider("auth-internal")),new Yf(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hn(d.options.projectId,f)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Xe(wa,"4.6.3",t),Xe(wa,"4.6.3","esm2017")})();var Vt=[];for(var Ki=0;Ki<256;++Ki)Vt.push((Ki+256).toString(16).slice(1));function jg(n,t=0){return(Vt[n[t+0]]+Vt[n[t+1]]+Vt[n[t+2]]+Vt[n[t+3]]+"-"+Vt[n[t+4]]+Vt[n[t+5]]+"-"+Vt[n[t+6]]+Vt[n[t+7]]+"-"+Vt[n[t+8]]+Vt[n[t+9]]+"-"+Vt[n[t+10]]+Vt[n[t+11]]+Vt[n[t+12]]+Vt[n[t+13]]+Vt[n[t+14]]+Vt[n[t+15]]).toLowerCase()}var Cr,$g=new Uint8Array(16);function zg(){if(!Cr&&(Cr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Cr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Cr($g)}var Gg=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const ll={randomUUID:Gg};function Hg(n,t,e){if(ll.randomUUID&&!t&&!n)return ll.randomUUID();n=n||{};var r=n.random||(n.rng||zg)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,jg(r)}var Kg={VITE_FIREBASE_APP_ID:"1:849275090860:web:047f05bf707503d7002c09",VITE_FIREBASE_AUTH_DOMAIN:"coc-app-a5424.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"coc-app-a5424",VITE_FIREBASE_STORAGE_BUCKET:"coc-app-a5424.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"849275090860",VITE_FIREBASE_MEASUREMENT_ID:"G-J2WTZT3GTL",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function ul(n,t,e){const r=n.slice();return r[36]=t[e],r}function cl(n,t,e){const r=n.slice();return r[39]=t[e],r[41]=e,r}function hl(n,t,e){const r=n.slice();return r[36]=t[e],r}function Qg(n){let t,e,r="Current Top 6: Most Favorite",i,o,a=new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})+"",l;return{c(){t=K("div"),e=K("h2"),e.textContent=r,i=Rt(),o=K("small"),l=$t(a),this.h()},l(c){t=Q(c,"DIV",{class:!0});var d=J(t);e=Q(d,"H2",{"data-svelte-h":!0}),_e(e)!=="svelte-bmlrxl"&&(e.textContent=r),i=St(d),o=Q(d,"SMALL",{});var f=J(o);l=zt(f,a),f.forEach(j),d.forEach(j),this.h()},h(){z(t,"class","leaderboard-title")},m(c,d){yt(c,t,d),B(t,e),B(t,i),B(t,o),B(o,l)},p:Je,d(c){c&&j(t)}}}function Wg(n){let t,e,r,i,o=new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})+"",a,l=n[5]&&dl(n);return{c(){t=K("div"),e=K("h2"),l&&l.c(),r=Rt(),i=K("small"),a=$t(o),this.h()},l(c){t=Q(c,"DIV",{class:!0});var d=J(t);e=Q(d,"H2",{});var f=J(e);l&&l.l(f),f.forEach(j),r=St(d),i=Q(d,"SMALL",{});var y=J(i);a=zt(y,o),y.forEach(j),d.forEach(j),this.h()},h(){z(t,"class","leaderboard-title")},m(c,d){yt(c,t,d),B(t,e),l&&l.m(e,null),B(t,r),B(t,i),B(i,a)},p(c,d){c[5]?l?l.p(c,d):(l=dl(c),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(c){c&&j(t),l&&l.d()}}}function Xg(n){let t,e,r,i;return{c(){t=K("div"),e=K("input"),this.h()},l(o){t=Q(o,"DIV",{class:!0});var a=J(t);e=Q(a,"INPUT",{type:!0,placeholder:!0}),a.forEach(j),this.h()},h(){z(e,"type","text"),e.disabled=n[8],e.autofocus=!0,z(e,"placeholder","Please enter your name"),z(t,"class","input-name")},m(o,a){yt(o,t,a),B(t,e),ea(e,n[5]),n[20](e),e.focus(),r||(i=Jt(e,"input",n[19]),r=!0)},p(o,a){a[0]&256&&(e.disabled=o[8]),a[0]&32&&e.value!==o[5]&&ea(e,o[5])},d(o){o&&j(t),n[20](null),r=!1,i()}}}function dl(n){let t,e;return{c(){t=$t(n[5]),e=$t("'s Favorite")},l(r){t=zt(r,n[5]),e=zt(r,"'s Favorite")},m(r,i){yt(r,t,i),yt(r,e,i)},p(r,i){i[0]&32&&me(t,r[5])},d(r){r&&(j(t),j(e))}}}function Yg(n){let t,e,r;return{c(){t=K("div"),e=K("div"),this.h()},l(i){t=Q(i,"DIV",{class:!0});var o=J(t);e=Q(o,"DIV",{}),J(e).forEach(j),o.forEach(j),this.h()},h(){z(t,"class",r="selected-item empty rank-"+n[36].rank)},m(i,o){yt(i,t,o),B(t,e)},p(i,o){o[0]&515&&r!==(r="selected-item empty rank-"+i[36].rank)&&z(t,"class",r)},d(i){i&&j(t)}}}function Jg(n){let t,e,r,i,o,a,l,c=n[36].name+"",d,f,y,v=n[36].university+"",R,S;return{c(){t=K("div"),e=K("div"),r=K("img"),a=Rt(),l=K("h4"),d=$t(c),f=Rt(),y=K("small"),R=$t(v),this.h()},l(V){t=Q(V,"DIV",{class:!0});var P=J(t);e=Q(P,"DIV",{});var k=J(e);r=Q(k,"IMG",{alt:!0,src:!0}),k.forEach(j),a=St(P),l=Q(P,"H4",{class:!0});var O=J(l);d=zt(O,c),O.forEach(j),f=St(P),y=Q(P,"SMALL",{class:!0});var M=J(y);R=zt(M,v),M.forEach(j),P.forEach(j),this.h()},h(){z(r,"alt",i=n[36].name),Or(r.src,o=n[36].image)||z(r,"src",o),z(l,"class","name"),z(y,"class","university"),z(t,"class",S="selected-item rank-"+(n[36].rank-1))},m(V,P){yt(V,t,P),B(t,e),B(e,r),B(t,a),B(t,l),B(l,d),B(t,f),B(t,y),B(y,R)},p(V,P){P[0]&515&&i!==(i=V[36].name)&&z(r,"alt",i),P[0]&515&&!Or(r.src,o=V[36].image)&&z(r,"src",o),P[0]&515&&c!==(c=V[36].name+"")&&me(d,c),P[0]&515&&v!==(v=V[36].university+"")&&me(R,v),P[0]&515&&S!==(S="selected-item rank-"+(V[36].rank-1))&&z(t,"class",S)},d(V){V&&j(t)}}}function fl(n){let t;function e(o,a){return o[36].docId?Jg:Yg}let r=e(n),i=r(n);return{c(){i.c(),t=Fr()},l(o){i.l(o),t=Fr()},m(o,a){i.m(o,a),yt(o,t,a)},p(o,a){r===(r=e(o))&&i?i.p(o,a):(i.d(1),i=r(o),i&&(i.c(),i.m(t.parentNode,t)))},d(o){o&&j(t),i.d(o)}}}function pl(n){let t,e=Ze(n[39]),r=[];for(let i=0;i<e.length;i+=1)r[i]=fl(hl(n,e,i));return{c(){t=K("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){t=Q(i,"DIV",{class:!0});var o=J(t);for(let a=0;a<r.length;a+=1)r[a].l(o);o.forEach(j),this.h()},h(){z(t,"class","selected-row row-"+n[41])},m(i,o){yt(i,t,o);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(t,null)},p(i,o){if(o[0]&515){e=Ze(i[39]);let a;for(a=0;a<e.length;a+=1){const l=hl(i,e,a);r[a]?r[a].p(l,o):(r[a]=fl(l),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},d(i){i&&j(t),ms(r,i)}}}function ml(n){let t,e,r="Make your own at ",i,o="https://s.id/dukungcoc",a,l;return{c(){t=K("div"),e=K("span"),e.textContent=r,i=K("span"),i.textContent=o,this.h()},l(c){t=Q(c,"DIV",{class:!0});var d=J(t);e=Q(d,"SPAN",{"data-svelte-h":!0}),_e(e)!=="svelte-atgzs8"&&(e.textContent=r),i=Q(d,"SPAN",{class:!0,"data-svelte-h":!0}),_e(i)!=="svelte-b5geqn"&&(i.textContent=o),d.forEach(j),this.h()},h(){z(i,"class","link"),z(t,"class","make-your-own")},m(c,d){yt(c,t,d),B(t,e),B(t,i),a||(l=Jt(i,"click",n[21]),a=!0)},p:Je,d(c){c&&j(t),a=!1,l()}}}function gl(n){let t;function e(o,a){return o[10]?Zg:t_}let r=e(n),i=r(n);return{c(){i.c(),t=Fr()},l(o){i.l(o),t=Fr()},m(o,a){i.m(o,a),yt(o,t,a)},p(o,a){r===(r=e(o))&&i?i.p(o,a):(i.d(1),i=r(o),i&&(i.c(),i.m(t.parentNode,t)))},d(o){o&&j(t),i.d(o)}}}function Zg(n){let t,e,r="Edit Your Favorite",i,o;return{c(){t=K("div"),e=K("a"),e.textContent=r,this.h()},l(a){t=Q(a,"DIV",{class:!0});var l=J(t);e=Q(l,"A",{href:!0,"data-svelte-h":!0}),_e(e)!=="svelte-1r8fji6"&&(e.textContent=r),l.forEach(j),this.h()},h(){z(e,"href","#edit"),z(t,"class","edit hide-in-screenshot")},m(a,l){yt(a,t,l),B(t,e),i||(o=Jt(e,"click",n[23]),i=!0)},p:Je,d(a){a&&j(t),i=!1,o()}}}function t_(n){let t,e,r="Reset",i,o=n[8]?"Saving":"Save",a,l,c;return{c(){t=K("div"),e=K("button"),e.textContent=r,i=K("button"),a=$t(o),this.h()},l(d){t=Q(d,"DIV",{class:!0});var f=J(t);e=Q(f,"BUTTON",{class:!0,"data-svelte-h":!0}),_e(e)!=="svelte-1557txf"&&(e.textContent=r),i=Q(f,"BUTTON",{});var y=J(i);a=zt(y,o),y.forEach(j),f.forEach(j),this.h()},h(){z(e,"class","secondary"),z(t,"class","submit")},m(d,f){yt(d,t,f),B(t,e),B(t,i),B(i,a),l||(c=[Jt(e,"click",n[17]),Jt(i,"click",n[22])],l=!0)},p(d,f){f[0]&256&&o!==(o=d[8]?"Saving":"Save")&&me(a,o)},d(d){d&&j(t),l=!1,ps(c)}}}function e_(n){let t,e,r,i,o,a=Ze(n[3]),l=[];for(let c=0;c<a.length;c+=1)l[c]=_l(ul(n,a,c));return{c(){t=K("input"),e=Rt(),r=K("ul");for(let c=0;c<l.length;c+=1)l[c].c();this.h()},l(c){t=Q(c,"INPUT",{type:!0,placeholder:!0}),e=St(c),r=Q(c,"UL",{});var d=J(r);for(let f=0;f<l.length;f+=1)l[f].l(d);d.forEach(j),this.h()},h(){z(t,"type","text"),z(t,"placeholder","Search champions")},m(c,d){yt(c,t,d),n[25](t),yt(c,e,d),yt(c,r,d);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(r,null);i||(o=Jt(t,"input",n[13]),i=!0)},p(c,d){if(d[0]&16396){a=Ze(c[3]);let f;for(f=0;f<a.length;f+=1){const y=ul(c,a,f);l[f]?l[f].p(y,d):(l[f]=_l(y),l[f].c(),l[f].m(r,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=a.length}},d(c){c&&(j(t),j(e),j(r)),n[25](null),ms(l,c),i=!1,o()}}}function n_(n){let t,e="Let friends know your favorites on social media",r,i,o,a="Share Link",l,c,d="Screenshot",f,y;return{c(){t=K("div"),t.textContent=e,r=Rt(),i=K("div"),o=K("button"),o.textContent=a,l=Rt(),c=K("button"),c.textContent=d,this.h()},l(v){t=Q(v,"DIV",{class:!0,"data-svelte-h":!0}),_e(t)!=="svelte-122sytg"&&(t.textContent=e),r=St(v),i=Q(v,"DIV",{class:!0});var R=J(i);o=Q(R,"BUTTON",{class:!0,"data-svelte-h":!0}),_e(o)!=="svelte-uvcho5"&&(o.textContent=a),l=St(R),c=Q(R,"BUTTON",{"data-svelte-h":!0}),_e(c)!=="svelte-1w0yorc"&&(c.textContent=d),R.forEach(j),this.h()},h(){z(t,"class","share-info"),z(o,"class","secondary"),z(i,"class","link-actions")},m(v,R){yt(v,t,R),yt(v,r,R),yt(v,i,R),B(i,o),B(i,l),B(i,c),f||(y=[Jt(o,"click",n[24]),Jt(c,"click",n[15])],f=!0)},p:Je,d(v){v&&(j(t),j(r),j(i)),f=!1,ps(y)}}}function _l(n){let t,e,r,i,o,a,l,c,d,f,y=n[36].name+"",v,R,S,V,P=n[36].GPA+"",k,O,M,q=n[36].major+"",et,W,T=n[36].university+"",m,_,w,E,I;function g(...ht){return n[26](n[36],...ht)}return{c(){t=K("li"),e=K("a"),r=K("img"),a=Rt(),l=K("span"),c=Rt(),d=K("div"),f=K("h4"),v=$t(y),R=Rt(),S=K("small"),V=$t("GPA "),k=$t(P),O=Rt(),M=K("small"),et=$t(q),W=$t(" . "),m=$t(T),_=Rt(),this.h()},l(ht){t=Q(ht,"LI",{class:!0});var ct=J(t);e=Q(ct,"A",{href:!0});var pt=J(e);r=Q(pt,"IMG",{alt:!0,src:!0}),a=St(pt),l=Q(pt,"SPAN",{class:!0}),J(l).forEach(j),c=St(pt),d=Q(pt,"DIV",{class:!0});var L=J(d);f=Q(L,"H4",{class:!0});var it=J(f);v=zt(it,y),R=St(it),S=Q(it,"SMALL",{});var nt=J(S);V=zt(nt,"GPA "),k=zt(nt,P),nt.forEach(j),it.forEach(j),O=St(L),M=Q(L,"SMALL",{class:!0});var gt=J(M);et=zt(gt,q),W=zt(gt," . "),m=zt(gt,T),gt.forEach(j),L.forEach(j),pt.forEach(j),_=St(ct),ct.forEach(j),this.h()},h(){z(r,"alt",i=n[36].name),Or(r.src,o=n[36].image)||z(r,"src",o),z(l,"class","voted-check"),z(f,"class","name"),z(M,"class","university"),z(d,"class","participant-detail"),z(e,"href","#ss"),z(t,"class",w=n[2][n[36].docId]?"voted":"")},m(ht,ct){yt(ht,t,ct),B(t,e),B(e,r),B(e,a),B(e,l),B(e,c),B(e,d),B(d,f),B(f,v),B(f,R),B(f,S),B(S,V),B(S,k),B(d,O),B(d,M),B(M,et),B(M,W),B(M,m),B(t,_),E||(I=Jt(e,"click",g),E=!0)},p(ht,ct){n=ht,ct[0]&8&&i!==(i=n[36].name)&&z(r,"alt",i),ct[0]&8&&!Or(r.src,o=n[36].image)&&z(r,"src",o),ct[0]&8&&y!==(y=n[36].name+"")&&me(v,y),ct[0]&8&&P!==(P=n[36].GPA+"")&&me(k,P),ct[0]&8&&q!==(q=n[36].major+"")&&me(et,q),ct[0]&8&&T!==(T=n[36].university+"")&&me(m,T),ct[0]&12&&w!==(w=n[2][n[36].docId]?"voted":"")&&z(t,"class",w)},d(ht){ht&&j(t),E=!1,I()}}}function r_(n){let t,e,r,i,o,a,l,c,d,f,y,v,R,S,V,P,k,O,M,q,et,W;function T(L,it){return L[9]==="favourite"&&!L[10]?Xg:L[9]==="favourite"&&L[10]?Wg:Qg}let m=T(n),_=m(n),w=Ze(n[9]==="favourite"?Vr(n[1]):Vr(n[0].slice(0,6))),E=[];for(let L=0;L<w.length;L+=1)E[L]=pl(cl(n,w,L));let I=(n[9]==="favourite"&&n[10]||n[9]==="top")&&ml(n),g=n[9]==="favourite"&&gl(n);function ht(L,it){return L[4]&&L[10]||L[9]==="top"?n_:e_}let ct=ht(n),pt=ct(n);return{c(){t=K("section"),e=K("div"),r=K("div"),i=K("div"),o=K("a"),a=$t("Your Favorite"),c=Rt(),d=K("a"),f=$t("Current Top 6 🔥"),v=Rt(),_.c(),R=Rt(),S=K("div");for(let L=0;L<E.length;L+=1)E[L].c();V=Rt(),I&&I.c(),k=Rt(),g&&g.c(),M=Rt(),q=K("div"),pt.c(),this.h()},l(L){t=Q(L,"SECTION",{class:!0});var it=J(t);e=Q(it,"DIV",{class:!0});var nt=J(e);r=Q(nt,"DIV",{class:!0});var gt=J(r);i=Q(gt,"DIV",{class:!0});var ce=J(i);o=Q(ce,"A",{href:!0,class:!0});var Ht=J(o);a=zt(Ht,"Your Favorite"),Ht.forEach(j),c=St(ce),d=Q(ce,"A",{href:!0,class:!0});var x=J(d);f=zt(x,"Current Top 6 🔥"),x.forEach(j),ce.forEach(j),v=St(gt),_.l(gt),R=St(gt),S=Q(gt,"DIV",{class:!0});var st=J(S);for(let _t=0;_t<E.length;_t+=1)E[_t].l(st);V=St(st),I&&I.l(st),st.forEach(j),k=St(gt),g&&g.l(gt),gt.forEach(j),M=St(nt),q=Q(nt,"DIV",{class:!0});var at=J(q);pt.l(at),at.forEach(j),nt.forEach(j),it.forEach(j),this.h()},h(){z(o,"href","#favourite"),z(o,"class",l=n[9]=="favourite"?"active":""),z(d,"href","#top"),z(d,"class",y=n[9]=="top"?"active":""),z(i,"class","tab"),z(S,"class",P="selected-container "+n[9]+" "+(n[10]?"voted":"")),z(r,"class",O="col selected "+(n[8]?"saving":"")),z(q,"class","col selection hide-in-screenshot"),z(e,"class","container"),z(t,"class","main")},m(L,it){yt(L,t,it),B(t,e),B(e,r),B(r,i),B(i,o),B(o,a),B(i,c),B(i,d),B(d,f),B(r,v),_.m(r,null),B(r,R),B(r,S);for(let nt=0;nt<E.length;nt+=1)E[nt]&&E[nt].m(S,null);B(S,V),I&&I.m(S,null),B(r,k),g&&g.m(r,null),B(e,M),B(e,q),pt.m(q,null),et||(W=[Jt(o,"click",n[16]),Jt(d,"click",n[16])],et=!0)},p(L,it){if(it[0]&512&&l!==(l=L[9]=="favourite"?"active":"")&&z(o,"class",l),it[0]&512&&y!==(y=L[9]=="top"?"active":"")&&z(d,"class",y),m===(m=T(L))&&_?_.p(L,it):(_.d(1),_=m(L),_&&(_.c(),_.m(r,R))),it[0]&515){w=Ze(L[9]==="favourite"?Vr(L[1]):Vr(L[0].slice(0,6)));let nt;for(nt=0;nt<w.length;nt+=1){const gt=cl(L,w,nt);E[nt]?E[nt].p(gt,it):(E[nt]=pl(gt),E[nt].c(),E[nt].m(S,V))}for(;nt<E.length;nt+=1)E[nt].d(1);E.length=w.length}L[9]==="favourite"&&L[10]||L[9]==="top"?I?I.p(L,it):(I=ml(L),I.c(),I.m(S,null)):I&&(I.d(1),I=null),it[0]&1536&&P!==(P="selected-container "+L[9]+" "+(L[10]?"voted":""))&&z(S,"class",P),L[9]==="favourite"?g?g.p(L,it):(g=gl(L),g.c(),g.m(r,null)):g&&(g.d(1),g=null),it[0]&256&&O!==(O="col selected "+(L[8]?"saving":""))&&z(r,"class",O),ct===(ct=ht(L))&&pt?pt.p(L,it):(pt.d(1),pt=ct(L),pt&&(pt.c(),pt.m(q,null)))},i:Je,o:Je,d(L){L&&j(t),_.d(),ms(E,L),I&&I.d(),g&&g.d(),pt.d(),et=!1,ps(W)}}}function Vr(n){let t=[],e=1;n.forEach((i,o)=>{o===e*(e+1)/2&&e++,t[e-1]||(t[e-1]=[]),t[e-1].push({...i,rank:o+1})});let r=n.length;for(;r<6;)r===e*(e+1)/2&&e++,t[e-1]||(t[e-1]=[]),t[e-1].push({rank:r}),r++;return t}function yl(n){navigator.clipboard.writeText(n),alert("Link copied to clipboard")}function i_(n,t,e){let r,i,o;qc(n,zc,x=>e(11,o=x));const a={apiKey:Kg.VITE_FIREBASE_API_KEY,authDomain:"coc-app-a5424.firebaseapp.com",projectId:"coc-app-a5424",storageBucket:"coc-app-a5424.appspot.com",messagingSenderId:"849275090860",appId:"1:849275090860:web:047f05bf707503d7002c09",measurementId:"G-J2WTZT3GTL"},l=Gl(a),c=Tg(l);let d=localStorage.getItem("sessionId")||Hg();localStorage.setItem("sessionId",d);let f=[],y=[],v=[],R={},S=[],V="",P,k,O,M=!1;async function q(){f=await g(),e(0,y=await I()),e(3,S=f);const x=o.url.searchParams.get("s")||d;x&&E(x).then(st=>{if(!st.participants.length){e(10,r=!1);return}e(5,P=st.name),e(1,v=st.participants),e(10,r=!0),e(4,V=x),v.forEach(at=>{e(2,R[at.docId]=!0,R)})})}(async()=>q())();function et(x){const st=x.target.value.toLowerCase();e(3,S=f.filter(({name:at,university:_t})=>at.toLowerCase().includes(st)||_t.toLowerCase().includes(st)))}function W(x){r||v.length>=6||v.some(st=>st.docId===x.docId)||(v.push(x),e(1,v),e(2,R[x.docId]=!0,R),T())}function T(){e(4,V=d)}function m(){dd(document.querySelector("#app"),{height:810,filter:x=>{var st;return!((st=x==null?void 0:x.className)!=null&&st.includes("hide-in-screenshot"))}}).then(x=>{const st=document.createElement("a");st.download="screenshot.png",st.href=x,st.click()})}function _(x){x.preventDefault(),e(9,i=x.target.hash.slice(1))}function w(){e(1,v=[]),e(2,R={}),T()}async function E(x){const st=br(Ve(c,"votes"),il("sessionId","==",x)),at=await Pr(st);if(at.empty)return{participants:[],name:"",sessionId:x};const _t=at.docs[0].data().participantIds,te=br(Ve(c,"participants"),il(Ig(),"in",_t)),fi=await(await Pr(te)).docs.map((se,he)=>({docId:se.id,...se.data(),rank:he+1}));return{participants:_t.map(se=>fi.find(he=>he.docId===se)),name:at.docs[0].data().name,sessionId:x,docId:at.docs[0].id}}async function I(){const x=br(Ve(c,"participants"),sl("voteScore","desc"));return(await Pr(x)).docs.map((at,_t)=>({docId:at.id,...at.data(),rank:_t+1}))}async function g(){const x=br(Ve(c,"participants"),sl("name","asc"));return(await Pr(x)).docs.map((at,_t)=>({docId:at.id,...at.data(),rank:_t+1}))}async function ht(){return await Bg(c,async x=>{const st=Ve(c,"votes"),at=await E(d);if(v.forEach(_t=>{const te=Hi(Ve(c,"participants"),_t.docId);at.participants.find(ar=>ar.docId===_t.docId)||x.update(te,{voteScore:qg(1),timestamp:Date.now()})}),at.participants.length>0){const _t=Hi(Ve(c,"votes"),at.docId);x.update(_t,{name:P,participantIds:v.map(te=>te.docId),timestamp:Date.now()})}else x.set(Hi(st),{sessionId:d,name:P,participantIds:v.map(_t=>_t.docId),timestamp:Date.now()})})}function ct(){P=this.value,e(5,P)}function pt(x){ta[x?"unshift":"push"](()=>{k=x,e(6,k)})}const L=()=>yl("https://s.id/dukungcoc"),it=()=>{(P==null?void 0:P.length)>0&&v.length>0?(e(8,M=!0),ht().then(async()=>{q().then(()=>{e(8,M=!1)})})):(alert("Pastikan kamu sudah mengisi nama dan memilih peserta favoritmu!"),k.focus())},nt=x=>{x.preventDefault(),e(10,r=!1)},gt=()=>yl(`${o.url.origin}?s=${V}`);function ce(x){ta[x?"unshift":"push"](()=>{O=x,e(7,O)})}const Ht=(x,st)=>{st.preventDefault(),W(x)};return e(10,r=!0),e(9,i="favourite"),[y,v,R,S,V,P,k,O,M,i,r,o,q,et,W,m,_,w,ht,ct,pt,L,it,nt,gt,ce,Ht]}class d_ extends jc{constructor(t){super(),$c(this,t,i_,r_,Bc,{},null,[-1,-1])}}export{d_ as component};
