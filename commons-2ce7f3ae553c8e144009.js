(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{7290:function(e,t,n){"use strict";n.d(t,{H:function(){return k},b:function(){return ee},c:function(){return q},g:function(){return B},h:function(){return b},p:function(){return i},r:function(){return le}});let l,s,r=!1;const a="undefined"!=typeof window?window:{},$=a.document||{head:{}},o={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},i=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),m=(e,t,n,l)=>{n&&n.map((([n,l,s])=>{const r=d(e,n),a=u(t,s),$=h(n);o.ael(r,l,a,$),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>o.rel(r,l,a,$)))}))},u=(e,t)=>n=>{try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(l){ae(l)}},d=(e,t)=>4&t?$:8&t?a:e,h=e=>0!=(2&e),f="http://www.w3.org/1999/xlink",g=new WeakMap,p=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,l=t.$flags$,s=(t.$tagName$,()=>{}),r=((e,t,n,l)=>{let s=y(t),r=ie.get(s);if(e=11===e.nodeType?e:$,r)if("string"==typeof r){e=e.head||e;let t,n=g.get(e);n||g.set(e,n=new Set),n.has(s)||(t=$.createElement("style"),t.innerHTML=r,e.insertBefore(t,e.querySelector("link")),n&&n.add(s))}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return s})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=r,n.classList.add(r+"-h")),s()},y=(e,t)=>"sc-"+e.$tagName$,v={},w=e=>"object"===(e=typeof e)||"function"===e,b=(e,t,...n)=>{let l=null,s=null,r=!1,a=!1,$=[];const o=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?o(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!w(l))&&(l=String(l)),r&&a?$[$.length-1].$text$+=l:$.push(r?E(null,l):l),a=r)};if(o(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,$,L);const i=E(e,null);return i.$attrs$=t,$.length>0&&(i.$children$=$),i.$key$=s,i},E=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},k={},L={forEach:(e,t)=>e.map(R).forEach(t),map:(e,t)=>e.map(R).map(t).map(S)},R=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),S=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),b(e.vtag,t,...e.vchildren||[])}const t=E(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},N=(e,t,n,l,s,r)=>{if(n!==l){let i=re(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,s=x(n),r=x(l);t.remove(...s.filter((e=>e&&!r.includes(e)))),t.add(...r.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const a=w(l);if((i||a&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch($){}let o=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,o=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(o?e.removeAttributeNS(f,t):e.removeAttribute(t)):(!i||4&r||s)&&!a&&(l=!0===l?"":l,o?e.setAttributeNS(f,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):re(a,c)?c.slice(2):c[2]+t.slice(3),n&&o.rel(e,t,n,!1),l&&o.ael(e,t,l,!1)}},M=/\s/,x=e=>e?e.split(M):[],j=(e,t,n,l)=>{const s=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,r=e&&e.$attrs$||v,a=t.$attrs$||v;for(l in r)l in a||N(s,l,r[l],void 0,n,t.$flags$);for(l in a)N(s,l,r[l],a[l],n,t.$flags$)},C=(e,t,n,s)=>{let r,a,o=t.$children$[n],i=0;if(null!==o.$text$)r=o.$elm$=$.createTextNode(o.$text$);else if(r=o.$elm$=$.createElement(o.$tag$),j(null,o,false),null!=l&&r["s-si"]!==l&&r.classList.add(r["s-si"]=l),o.$children$)for(i=0;i<o.$children$.length;++i)a=C(e,o,i),a&&r.appendChild(a);return r},P=(e,t,n,l,r,a)=>{let $,o=e;for(o.shadowRoot&&o.tagName===s&&(o=o.shadowRoot);r<=a;++r)l[r]&&($=C(null,n,r),$&&(l[r].$elm$=$,o.insertBefore($,t)))},T=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.$elm$,A(l),s.remove())},O=(e,t)=>e.$tag$===t.$tag$&&e.$key$===t.$key$,I=(e,t)=>{const n=t.$elm$=e.$elm$,l=e.$children$,s=t.$children$,r=t.$tag$,a=t.$text$;null===a?("slot"===r||j(e,t,false),null!==l&&null!==s?((e,t,n,l)=>{let s,r,a=0,$=0,o=0,i=0,c=t.length-1,m=t[0],u=t[c],d=l.length-1,h=l[0],f=l[d];for(;a<=c&&$<=d;)if(null==m)m=t[++a];else if(null==u)u=t[--c];else if(null==h)h=l[++$];else if(null==f)f=l[--d];else if(O(m,h))I(m,h),m=t[++a],h=l[++$];else if(O(u,f))I(u,f),u=t[--c],f=l[--d];else if(O(m,f))I(m,f),e.insertBefore(m.$elm$,u.$elm$.nextSibling),m=t[++a],f=l[--d];else if(O(u,h))I(u,h),e.insertBefore(u.$elm$,m.$elm$),u=t[--c],h=l[++$];else{for(o=-1,i=a;i<=c;++i)if(t[i]&&null!==t[i].$key$&&t[i].$key$===h.$key$){o=i;break}o>=0?(r=t[o],r.$tag$!==h.$tag$?s=C(t&&t[$],n,o):(I(r,h),t[o]=void 0,s=r.$elm$),h=l[++$]):(s=C(t&&t[$],n,$),h=l[++$]),s&&m.$elm$.parentNode.insertBefore(s,m.$elm$)}a>c?P(e,null==l[d+1]?null:l[d+1].$elm$,n,l,$,d):$>d&&T(t,a,c)})(n,l,t,s):null!==s?(null!==e.$text$&&(n.textContent=""),P(n,null,t,s,0,s.length-1)):null!==l&&T(l,0,l.length-1)):e.$text$!==a&&(n.data=a)},A=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(A)},H=(e,t)=>{const n=e.$hostElement$,r=e.$cmpMeta$,a=e.$vnode$||E(null,null),$=(o=t)&&o.$tag$===k?t:b(null,null,t);var o;s=n.tagName,r.$attrsToReflect$&&($.$attrs$=$.$attrs$||{},r.$attrsToReflect$.map((([e,t])=>$.$attrs$[t]=n[e]))),$.$tag$=null,$.$flags$|=4,e.$vnode$=$,$.$elm$=a.$elm$=n.shadowRoot||n,l=n["s-sc"],I(a,$)},B=e=>ne(e).$hostElement$,q=(e,t,n)=>{const l=B(e);return{emit:e=>z(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},z=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},U=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},_=(e,t)=>{if(e.$flags$|=16,4&e.$flags$)return void(e.$flags$|=512);U(e,e.$ancestorComponent$);return ge((()=>D(e,t)))},D=(e,t)=>{const n=(e.$cmpMeta$.$tagName$,()=>{}),l=e.$lazyInstance$;let s;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>G(l,e,t))),e.$queuedListeners$=null),s=G(l,"componentWillLoad")),n(),Q(s,(()=>V(e,l,t)))},V=async(e,t,n)=>{const l=e.$hostElement$,s=(e.$cmpMeta$.$tagName$,()=>{}),r=l["s-rc"];n&&p(e);const a=(e.$cmpMeta$.$tagName$,()=>{});W(e,t),r&&(r.map((e=>e())),l["s-rc"]=void 0),a(),s();{const t=l["s-p"],n=()=>F(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}},W=(e,t,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,H(e,t)}catch(l){ae(l,e.$hostElement$)}return null},F=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,n=()=>{},l=e.$lazyInstance$,s=e.$ancestorComponent$;64&e.$flags$?(G(l,"componentDidUpdate"),n()):(e.$flags$|=64,J(t),G(l,"componentDidLoad"),n(),e.$onReadyResolve$(t),s||Z()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&fe((()=>_(e,!1))),e.$flags$&=-517},Z=e=>{J($.documentElement),fe((()=>z(a,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})))},G=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){ae(l)}},Q=(e,t)=>e&&e.then?e.then(t):t(),J=e=>e.classList.add("hydrated"),K=(e,t,n,l)=>{const s=ne(e),r=s.$hostElement$,a=s.$instanceValues$.get(t),$=s.$flags$,o=s.$lazyInstance$;var i,c;if(i=n,c=l.$members$[t][0],n=null==i||w(i)?i:4&c?"false"!==i&&(""===i||!!i):1&c?String(i):i,!(8&$&&void 0!==a||n===a)&&(s.$instanceValues$.set(t,n),o)){if(l.$watchers$&&128&$){const e=l.$watchers$[t];e&&e.map((e=>{try{o[e](n,a,t)}catch(l){ae(l,r)}}))}2==(18&$)&&_(s,!1)}},X=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const l=Object.entries(t.$members$),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return t=e,ne(this).$instanceValues$.get(t);var t},set(n){K(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=ne(this);return n.$onInstancePromise$.then((()=>n.$lazyInstance$[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){o.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.$attrsToReflect$.push([e,s]),s}))}}return e},Y=async(e,t,n,l,s)=>{if(0==(32&t.$flags$)){{if(t.$flags$|=32,(s=oe(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.$watchers$=s.watchers,X(s,n,2),s.isProxied=!0);const e=(n.$tagName$,()=>{});t.$flags$|=8;try{new s(t)}catch($){ae($)}t.$flags$&=-9,t.$flags$|=128,e()}if(s.style){let e=s.style;const t=y(n);if(!ie.has(t)){const l=(n.$tagName$,()=>{});((e,t,n)=>{let l=ie.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,ie.set(e,l)})(t,e,!!(1&n.$flags$)),l()}}}const r=t.$ancestorComponent$,a=()=>_(t,!0);r&&r["s-rc"]?r["s-rc"].push(a):a()},ee=(e,t={})=>{const n=()=>{},l=[],s=t.exclude||[],r=a.customElements,i=$.head,c=i.querySelector("meta[charset]"),u=$.createElement("style"),d=[];let h,f=!0;Object.assign(o,t),o.$resourcesUrl$=new URL(t.resourcesUrl||"./",$.baseURI).href,e.map((e=>{e[1].map((t=>{const n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};n.$members$=t[2],n.$listeners$=t[3],n.$attrsToReflect$=[],n.$watchers$={};const a=n.$tagName$,$=class extends HTMLElement{constructor(e){super(e),se(e=this,n),1&n.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),f?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.$flags$)){const t=ne(e),n=t.$cmpMeta$,l=(n.$tagName$,()=>{});if(1&t.$flags$)m(e,t,n.$listeners$);else{t.$flags$|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){U(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),Y(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(e=>{if(0==(1&o.$flags$)){const t=ne(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}})(this)))}componentOnReady(){return ne(this).$onReadyPromise$}};n.$lazyBundleId$=e[0],s.includes(a)||r.get(a)||(l.push(a),r.define(a,X($,n,1)))}))})),u.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles",""),i.insertBefore(u,c?c.nextSibling:i.firstChild),f=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>h=setTimeout(Z,30))),n()},te=new WeakMap,ne=e=>te.get(e),le=(e,t)=>te.set(t.$lazyInstance$=e,t),se=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((e=>n.$onInstanceResolve$=e)),n.$onReadyPromise$=new Promise((e=>n.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],m(e,n,t.$listeners$),te.set(e,n)},re=(e,t)=>t in e,ae=(e,t)=>(0,console.error)(e,t),$e=new Map,oe=(e,t,l)=>{const s=e.$tagName$.replace(/-/g,"_"),r=e.$lazyBundleId$,a=$e.get(r);return a?a[s]:n(9047)(`./${r}.entry.js`).then((e=>($e.set(r,e),e[s])),ae)},ie=new Map,ce=[],me=[],ue=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&o.$flags$?fe(he):o.raf(he))},de=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){ae(t)}e.length=0},he=()=>{de(ce),de(me),(r=ce.length>0)&&o.raf(he)},fe=e=>i().then(e),ge=ue(me,!0)},9047:function(e,t,n){var l={"./deckgo-highlight-code.entry.js":[5533,533]};function s(e){if(!n.o(l,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=l[e],s=t[0];return n.e(t[1]).then((function(){return n(s)}))}s.keys=function(){return Object.keys(l)},s.id=9047,e.exports=s},4292:function(e,t,n){"use strict";n.d(t,{Z:function(){return $}});var l=n(7294),s=n(1883),r=n(7290);const a=(e,t)=>"undefined"==typeof window?Promise.resolve():(0,r.p)().then((()=>(0,r.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"],[8,"copy","onCopyCleanZeroWidthSpaces"]]]]]],t)));!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}();var $=e=>{let{location:t,title:n,children:r}=e;a();t.pathname;return l.createElement("div",{className:"global-wrapper"},l.createElement("header",{className:"global-header"},l.createElement("h1",{className:"main-heading"},l.createElement(s.Link,{to:"/",className:"header-text"},n))),l.createElement("main",null,r),l.createElement("footer",null,"© ",l.createElement("a",{href:"https://github.com/hjhj97"},"Neon"),", Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,n){"use strict";var l=n(7294),s=n(1883);t.Z=e=>{var t,n,r;let{description:a,title:$,children:o}=e;const{site:i}=(0,s.useStaticQuery)("2841359383"),c=a||i.siteMetadata.description,m=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,m?$+" | "+m:$),l.createElement("meta",{name:"description",content:c}),l.createElement("meta",{property:"og:title",content:$}),l.createElement("meta",{property:"og:description",content:c}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(n=i.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""}),l.createElement("meta",{name:"twitter:title",content:$}),l.createElement("meta",{name:"twitter:description",content:c}),o)}}}]);
//# sourceMappingURL=commons-2ce7f3ae553c8e144009.js.map