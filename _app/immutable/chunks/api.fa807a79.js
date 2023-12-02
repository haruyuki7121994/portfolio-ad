import{t as Pt,a as Mt,S as Ft,i as Dt,h as gt}from"./index.3f7de009.js";import{K as jt,aa as Nt,ab as ct,s as Bt,f as Ht,g as Vt,r as Wt,j as It,i as zt,u as Ut,Z as Xt,d as Yt,M as q}from"./scheduler.5a6625e3.js";import{a as J}from"./store.e734779f.js";function Re(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function _e(t,e){t.d(1),e.delete(t.key)}function Ee(t,e){Pt(t,1,1,()=>{e.delete(t.key)})}function Se(t,e,o,n,i,s,r,c,l,a,d,m){let g=t.length,f=s.length,u=g;const h={};for(;u--;)h[t[u].key]=u;const w=[],p=new Map,x=new Map,b=[];for(u=f;u--;){const y=m(i,s,u),C=o(y);let O=r.get(C);O?n&&b.push(()=>O.p(y,e)):(O=a(C,y),O.c()),p.set(C,w[u]=O),C in h&&x.set(C,Math.abs(u-h[C]))}const A=new Set,v=new Set;function T(y){Mt(y,1),y.m(c,d),r.set(y.key,y),d=y.first,f--}for(;g&&f;){const y=w[f-1],C=t[g-1],O=y.key,k=C.key;y===C?(d=y.first,g--,f--):p.has(k)?!r.has(O)||A.has(O)?T(y):v.has(k)?g--:x.get(O)>x.get(k)?(v.add(O),T(y)):(A.add(k),g--):(l(C,r),g--)}for(;g--;){const y=t[g];p.has(y.key)||l(y,r)}for(;f;)T(w[f-1]);return jt(b),w}const I=Math.min,B=Math.max,et=Math.round,tt=Math.floor,j=t=>({x:t,y:t}),qt={left:"right",right:"left",bottom:"top",top:"bottom"},Jt={start:"end",end:"start"};function at(t,e,o){return B(t,I(e,o))}function G(t,e){return typeof t=="function"?t(e):t}function H(t){return t.split("-")[0]}function K(t){return t.split("-")[1]}function vt(t){return t==="x"?"y":"x"}function ft(t){return t==="y"?"height":"width"}function it(t){return["top","bottom"].includes(H(t))?"y":"x"}function ut(t){return vt(it(t))}function Gt(t,e,o){o===void 0&&(o=!1);const n=K(t),i=ut(t),s=ft(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=nt(r)),[r,nt(r)]}function Kt(t){const e=nt(t);return[lt(t),e,lt(e)]}function lt(t){return t.replace(/start|end/g,e=>Jt[e])}function Zt(t,e,o){const n=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?s:r;default:return[]}}function Qt(t,e,o,n){const i=K(t);let s=Zt(H(t),o==="start",n);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(lt)))),s}function nt(t){return t.replace(/left|right|bottom|top/g,e=>qt[e])}function te(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ct(t){return typeof t!="number"?te(t):{top:t,right:t,bottom:t,left:t}}function ot(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ht(t,e,o){let{reference:n,floating:i}=t;const s=it(e),r=ut(e),c=ft(r),l=H(e),a=s==="y",d=n.x+n.width/2-i.width/2,m=n.y+n.height/2-i.height/2,g=n[c]/2-i[c]/2;let f;switch(l){case"top":f={x:d,y:n.y-i.height};break;case"bottom":f={x:d,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:m};break;case"left":f={x:n.x-i.width,y:m};break;default:f={x:n.x,y:n.y}}switch(K(e)){case"start":f[r]-=g*(o&&a?-1:1);break;case"end":f[r]+=g*(o&&a?-1:1);break}return f}const ee=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:r}=o,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:m}=ht(a,n,l),g=n,f={},u=0;for(let h=0;h<c.length;h++){const{name:w,fn:p}=c[h],{x,y:b,data:A,reset:v}=await p({x:d,y:m,initialPlacement:n,placement:g,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});if(d=x??d,m=b??m,f={...f,[w]:{...f[w],...A}},v&&u<=50){u++,typeof v=="object"&&(v.placement&&(g=v.placement),v.rects&&(a=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:m}=ht(a,g,l)),h=-1;continue}}return{x:d,y:m,placement:g,strategy:i,middlewareData:f}};async function At(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:g=!1,padding:f=0}=G(e,t),u=Ct(f),w=c[g?m==="floating"?"reference":"floating":m],p=ot(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(w)))==null||o?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),x=m==="floating"?{...r.floating,x:n,y:i}:r.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),A=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},v=ot(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:b,strategy:l}):x);return{top:(p.top-v.top+u.top)/A.y,bottom:(v.bottom-p.bottom+u.bottom)/A.y,left:(p.left-v.left+u.left)/A.x,right:(v.right-p.right+u.right)/A.x}}const ke=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:a,padding:d=0}=G(t,e)||{};if(a==null)return{};const m=Ct(d),g={x:o,y:n},f=ut(i),u=ft(f),h=await r.getDimensions(a),w=f==="y",p=w?"top":"left",x=w?"bottom":"right",b=w?"clientHeight":"clientWidth",A=s.reference[u]+s.reference[f]-g[f]-s.floating[u],v=g[f]-s.reference[f],T=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let y=T?T[b]:0;(!y||!await(r.isElement==null?void 0:r.isElement(T)))&&(y=c.floating[b]||s.floating[u]);const C=A/2-v/2,O=y/2-h[u]/2-1,k=I(m[p],O),U=I(m[x],O),E=k,X=y-h[u]-U,R=y/2-h[u]/2+C,L=at(E,R,X),$=!l.arrow&&K(i)!=null&&R!=L&&s.reference[u]/2-(R<E?k:U)-h[u]/2<0,M=$?R<E?R-E:R-X:0;return{[f]:g[f]+M,data:{[f]:L,centerOffset:R-L-M,...$&&{alignmentOffset:M}},reset:$}}}),Le=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:h=!0,...w}=G(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const p=H(i),x=H(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(a.floating)),A=g||(x||!h?[nt(c)]:Kt(c));!g&&u!=="none"&&A.push(...Qt(c,h,u,b));const v=[c,...A],T=await At(e,w),y=[];let C=((n=s.flip)==null?void 0:n.overflows)||[];if(d&&y.push(T[p]),m){const E=Gt(i,r,b);y.push(T[E[0]],T[E[1]])}if(C=[...C,{placement:i,overflows:y}],!y.every(E=>E<=0)){var O,k;const E=(((O=s.flip)==null?void 0:O.index)||0)+1,X=v[E];if(X)return{data:{index:E,overflows:C},reset:{placement:X}};let R=(k=C.filter(L=>L.overflows[0]<=0).sort((L,$)=>L.overflows[1]-$.overflows[1])[0])==null?void 0:k.placement;if(!R)switch(f){case"bestFit":{var U;const L=(U=C.map($=>[$.placement,$.overflows.filter(M=>M>0).reduce((M,$t)=>M+$t,0)]).sort(($,M)=>$[1]-M[1])[0])==null?void 0:U[0];L&&(R=L);break}case"initialPlacement":R=c;break}if(i!==R)return{reset:{placement:R}}}return{}}}};async function ne(t,e){const{placement:o,platform:n,elements:i}=t,s=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=H(o),c=K(o),l=it(o)==="y",a=["left","top"].includes(r)?-1:1,d=s&&l?-1:1,m=G(e,t);let{mainAxis:g,crossAxis:f,alignmentAxis:u}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return c&&typeof u=="number"&&(f=c==="end"?u*-1:u),l?{x:f*d,y:g*a}:{x:g*a,y:f*d}}const $e=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:n}=e,i=await ne(e,t);return{x:o+i.x,y:n+i.y,data:i}}}},Pe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...l}=G(t,e),a={x:o,y:n},d=await At(e,l),m=it(H(i)),g=vt(m);let f=a[g],u=a[m];if(s){const w=g==="y"?"top":"left",p=g==="y"?"bottom":"right",x=f+d[w],b=f-d[p];f=at(x,f,b)}if(r){const w=m==="y"?"top":"left",p=m==="y"?"bottom":"right",x=u+d[w],b=u-d[p];u=at(x,u,b)}const h=c.fn({...e,[g]:f,[m]:u});return{...h,data:{x:h.x-o,y:h.y-n}}}}};function N(t){return Ot(t)?(t.nodeName||"").toLowerCase():"#document"}function _(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function D(t){var e;return(e=(Ot(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ot(t){return t instanceof Node||t instanceof _(t).Node}function F(t){return t instanceof Element||t instanceof _(t).Element}function P(t){return t instanceof HTMLElement||t instanceof _(t).HTMLElement}function wt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof _(t).ShadowRoot}function Z(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function oe(t){return["table","td","th"].includes(N(t))}function dt(t){const e=pt(),o=S(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function ie(t){let e=z(t);for(;P(e)&&!st(e);){if(dt(e))return e;e=z(e)}return null}function pt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function st(t){return["html","body","#document"].includes(N(t))}function S(t){return _(t).getComputedStyle(t)}function rt(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function z(t){if(N(t)==="html")return t;const e=t.assignedSlot||t.parentNode||wt(t)&&t.host||D(t);return wt(e)?e.host:e}function Tt(t){const e=z(t);return st(e)?t.ownerDocument?t.ownerDocument.body:t.body:P(e)&&Z(e)?e:Tt(e)}function Y(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Tt(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=_(i);return s?e.concat(r,r.visualViewport||[],Z(i)?i:[],r.frameElement&&o?Y(r.frameElement):[]):e.concat(i,Y(i,[],o))}function Rt(t){const e=S(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=P(t),s=i?t.offsetWidth:o,r=i?t.offsetHeight:n,c=et(o)!==s||et(n)!==r;return c&&(o=s,n=r),{width:o,height:n,$:c}}function mt(t){return F(t)?t:t.contextElement}function W(t){const e=mt(t);if(!P(e))return j(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:s}=Rt(e);let r=(s?et(o.width):o.width)/n,c=(s?et(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const se=j(0);function _t(t){const e=_(t);return!pt()||!e.visualViewport?se:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function re(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==_(t)?!1:e}function V(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),s=mt(t);let r=j(1);e&&(n?F(n)&&(r=W(n)):r=W(t));const c=re(s,o,n)?_t(s):j(0);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,d=i.width/r.x,m=i.height/r.y;if(s){const g=_(s),f=n&&F(n)?_(n):n;let u=g.frameElement;for(;u&&n&&f!==g;){const h=W(u),w=u.getBoundingClientRect(),p=S(u),x=w.left+(u.clientLeft+parseFloat(p.paddingLeft))*h.x,b=w.top+(u.clientTop+parseFloat(p.paddingTop))*h.y;l*=h.x,a*=h.y,d*=h.x,m*=h.y,l+=x,a+=b,u=_(u).frameElement}}return ot({width:d,height:m,x:l,y:a})}function ce(t){let{rect:e,offsetParent:o,strategy:n}=t;const i=P(o),s=D(o);if(o===s)return e;let r={scrollLeft:0,scrollTop:0},c=j(1);const l=j(0);if((i||!i&&n!=="fixed")&&((N(o)!=="body"||Z(s))&&(r=rt(o)),P(o))){const a=V(o);c=W(o),l.x=a.x+o.clientLeft,l.y=a.y+o.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-r.scrollLeft*c.x+l.x,y:e.y*c.y-r.scrollTop*c.y+l.y}}function ae(t){return Array.from(t.getClientRects())}function Et(t){return V(D(t)).left+rt(t).scrollLeft}function le(t){const e=D(t),o=rt(t),n=t.ownerDocument.body,i=B(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=B(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+Et(t);const c=-o.scrollTop;return S(n).direction==="rtl"&&(r+=B(e.clientWidth,n.clientWidth)-i),{width:i,height:s,x:r,y:c}}function fe(t,e){const o=_(t),n=D(t),i=o.visualViewport;let s=n.clientWidth,r=n.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=pt();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function ue(t,e){const o=V(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,s=P(t)?W(t):j(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=n*s.y;return{width:r,height:c,x:l,y:a}}function yt(t,e,o){let n;if(e==="viewport")n=fe(t,o);else if(e==="document")n=le(D(t));else if(F(e))n=ue(e,o);else{const i=_t(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return ot(n)}function St(t,e){const o=z(t);return o===e||!F(o)||st(o)?!1:S(o).position==="fixed"||St(o,e)}function de(t,e){const o=e.get(t);if(o)return o;let n=Y(t,[],!1).filter(c=>F(c)&&N(c)!=="body"),i=null;const s=S(t).position==="fixed";let r=s?z(t):t;for(;F(r)&&!st(r);){const c=S(r),l=dt(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Z(r)&&!l&&St(t,r))?n=n.filter(d=>d!==r):i=c,r=z(r)}return e.set(t,n),n}function pe(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const r=[...o==="clippingAncestors"?de(e,this._c):[].concat(o),n],c=r[0],l=r.reduce((a,d)=>{const m=yt(e,d,i);return a.top=B(m.top,a.top),a.right=I(m.right,a.right),a.bottom=I(m.bottom,a.bottom),a.left=B(m.left,a.left),a},yt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function me(t){return Rt(t)}function ge(t,e,o){const n=P(e),i=D(e),s=o==="fixed",r=V(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=j(0);if(n||!n&&!s)if((N(e)!=="body"||Z(i))&&(c=rt(e)),n){const a=V(e,!0,s,e);l.x=a.x+e.clientLeft,l.y=a.y+e.clientTop}else i&&(l.x=Et(i));return{x:r.left+c.scrollLeft-l.x,y:r.top+c.scrollTop-l.y,width:r.width,height:r.height}}function xt(t,e){return!P(t)||S(t).position==="fixed"?null:e?e(t):t.offsetParent}function kt(t,e){const o=_(t);if(!P(t))return o;let n=xt(t,e);for(;n&&oe(n)&&S(n).position==="static";)n=xt(n,e);return n&&(N(n)==="html"||N(n)==="body"&&S(n).position==="static"&&!dt(n))?o:n||ie(t)||o}const he=async function(t){let{reference:e,floating:o,strategy:n}=t;const i=this.getOffsetParent||kt,s=this.getDimensions;return{reference:ge(e,await i(o),n),floating:{x:0,y:0,...await s(o)}}};function we(t){return S(t).direction==="rtl"}const ye={convertOffsetParentRelativeRectToViewportRelativeRect:ce,getDocumentElement:D,getClippingRect:pe,getOffsetParent:kt,getElementRects:he,getClientRects:ae,getDimensions:me,getScale:W,isElement:F,isRTL:we};function xe(t,e){let o=null,n;const i=D(t);function s(){clearTimeout(n),o&&o.disconnect(),o=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:a,top:d,width:m,height:g}=t.getBoundingClientRect();if(c||e(),!m||!g)return;const f=tt(d),u=tt(i.clientWidth-(a+m)),h=tt(i.clientHeight-(d+g)),w=tt(a),x={rootMargin:-f+"px "+-u+"px "+-h+"px "+-w+"px",threshold:B(0,I(1,l))||1};let b=!0;function A(v){const T=v[0].intersectionRatio;if(T!==l){if(!b)return r();T?r(!1,T):n=setTimeout(()=>{r(!1,1e-7)},100)}b=!1}try{o=new IntersectionObserver(A,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(A,x)}o.observe(t)}return r(!0),s}function Me(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,a=mt(t),d=i||s?[...a?Y(a):[],...Y(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",o,{passive:!0}),s&&p.addEventListener("resize",o)});const m=a&&c?xe(a,o):null;let g=-1,f=null;r&&(f=new ResizeObserver(p=>{let[x]=p;x&&x.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{f&&f.observe(e)})),o()}),a&&!l&&f.observe(a),f.observe(e));let u,h=l?V(t):null;l&&w();function w(){const p=V(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&o(),h=p,u=requestAnimationFrame(w)}return o(),()=>{d.forEach(p=>{i&&p.removeEventListener("scroll",o),s&&p.removeEventListener("resize",o)}),m&&m(),f&&f.disconnect(),f=null,l&&cancelAnimationFrame(u)}}const Fe=(t,e,o)=>{const n=new Map,i={platform:ye,...o},s={...i.platform,_c:n};return ee(t,e,{...i,platform:s})};function be(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Lt(t){const e=t-1;return e*e*e+1}function De(t){const e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}function je(t,{delay:e=0,duration:o=400,easing:n=be,amount:i=5,opacity:s=0}={}){const r=getComputedStyle(t),c=+r.opacity,l=r.filter==="none"?"":r.filter,a=c*(1-s),[d,m]=ct(i);return{delay:e,duration:o,easing:n,css:(g,f)=>`opacity: ${c-a*f}; filter: ${l} blur(${f*d}${m});`}}function bt(t,{delay:e=0,duration:o=400,easing:n=Nt}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:n,css:s=>`opacity: ${s*i}`}}function Ne(t,{delay:e=0,duration:o=400,easing:n=Lt,x:i=0,y:s=0,opacity:r=0}={}){const c=getComputedStyle(t),l=+c.opacity,a=c.transform==="none"?"":c.transform,d=l*(1-r),[m,g]=ct(i),[f,u]=ct(s);return{delay:e,duration:o,easing:n,css:(h,w)=>`
			transform: ${a} translate(${(1-h)*m}${g}, ${(1-h)*f}${u});
			opacity: ${l-d*w}`}}function Be(t,{delay:e=0,duration:o=400,easing:n=Lt,axis:i="y"}={}){const s=getComputedStyle(t),r=+s.opacity,c=i==="y"?"height":"width",l=parseFloat(s[c]),a=i==="y"?["top","bottom"]:["left","right"],d=a.map(p=>`${p[0].toUpperCase()}${p.slice(1)}`),m=parseFloat(s[`padding${d[0]}`]),g=parseFloat(s[`padding${d[1]}`]),f=parseFloat(s[`margin${d[0]}`]),u=parseFloat(s[`margin${d[1]}`]),h=parseFloat(s[`border${d[0]}Width`]),w=parseFloat(s[`border${d[1]}Width`]);return{delay:e,duration:o,easing:n,css:p=>`overflow: hidden;opacity: ${Math.min(p*20,1)*r};${c}: ${p*l}px;padding-${a[0]}: ${p*m}px;padding-${a[1]}: ${p*g}px;margin-${a[0]}: ${p*f}px;margin-${a[1]}: ${p*u}px;border-${a[0]}-width: ${p*h}px;border-${a[1]}-width: ${p*w}px;`}}function ve(t){let e,o=`<h1>Loading data...
        <div class="loader svelte-uou97i"></div></h1>`,n,i;return{c(){e=Ht("div"),e.innerHTML=o,this.h()},l(s){e=Vt(s,"DIV",{class:!0,"data-svelte-h":!0}),Wt(e)!=="svelte-1rmgkww"&&(e.innerHTML=o),this.h()},h(){It(e,"class","wrapper svelte-uou97i")},m(s,r){zt(s,e,r),i=!0},p:Ut,i(s){i||(s&&Xt(()=>{i&&(n||(n=gt(e,bt,{},!0)),n.run(1))}),i=!0)},o(s){s&&(n||(n=gt(e,bt,{},!1)),n.run(0)),i=!1},d(s){s&&Yt(e),s&&n&&n.end()}}}class Ce extends Ft{constructor(e){super(),Dt(this,e,null,ve,Bt,{})}}const He=(t,e)=>{let o;e.subscribe(n=>{var i;n?o=new Ce({target:t,intro:!0}):o&&((i=o==null?void 0:o.$destroy)==null||i.call(o),o=void 0)})},Q={search:"%domain/api/template/search?page=%page",detail:"%domain/api/template/%slug/details",getByCodesReturnMap:"%domain/api/template/details/_by_codes?codes=%codes&attrs=%attrs&finalContent=%finalContent",updateHeader:"%domain/api/template/%slug/update/_header",updateContent:"%domain/api/template/%slug/update/_content",updateLinkTos:"%domain/api/template/%slug/update/_linkTos"};async function Ve(t,e){const o=Q.search.replace("%domain",q(J)).replace("%page",e??"0");let n=new Headers;n.append("Content-Type","application/json"),n.append("Accept","application/json"),n.append("Access-Control-Allow-Origin","*"),n.append("Access-Control-Allow-Credentials","true"),n.append("ngrok-skip-browser-warning","69420");let i={};return t&&(i={...t}),await fetch(o,{method:"POST",headers:n,body:JSON.stringify(i)}).then(s=>{if(s.ok)return s.json();throw new Error("Something went wrong")}).catch(s=>({content:[]}))}async function We(t){const e=Q.detail.replace("%domain",q(J)).replace("%slug",t);let o=new Headers;return o.append("Content-Type","application/json"),o.append("Accept","application/json"),o.append("Access-Control-Allow-Origin","*"),o.append("Access-Control-Allow-Credentials","true"),o.append("ngrok-skip-browser-warning","69420"),await(await fetch(e,{method:"GET",headers:o})).json()}async function Ie(t,e,o=!1){const n=Q.getByCodesReturnMap.replace("%domain",q(J)).replace("%codes",t).replace("%attrs",e).replace("%finalContent",o);let i=new Headers;return i.append("Content-Type","application/json"),i.append("Accept","application/json"),i.append("Access-Control-Allow-Origin","*"),i.append("Access-Control-Allow-Credentials","true"),i.append("ngrok-skip-browser-warning","69420"),await(await fetch(n,{method:"GET",headers:i})).json()}async function ze(t,e){const o=Q.updateContent.replace("%domain",q(J)).replace("%slug",t);let n=new Headers;return n.append("Content-Type","application/json"),n.append("Accept","application/json"),n.append("Access-Control-Allow-Origin","*"),n.append("Access-Control-Allow-Credentials","true"),n.append("ngrok-skip-browser-warning","69420"),{template:await(await fetch(o,{method:"POST",headers:n,body:JSON.stringify(e)})).json()}}async function Ue(t,e){const o=Q.updateLinkTos.replace("%domain",q(J)).replace("%slug",t);let n=new Headers;return n.append("Content-Type","application/json"),n.append("Accept","application/json"),n.append("Access-Control-Allow-Origin","*"),n.append("Access-Control-Allow-Credentials","true"),n.append("ngrok-skip-browser-warning","69420"),{template:await(await fetch(o,{method:"POST",headers:n,body:JSON.stringify(e)})).json()}}export{Ve as a,Me as b,Fe as c,Pe as d,Re as e,Le as f,Ie as g,ke as h,We as i,Ue as j,bt as k,He as l,Se as m,Ee as n,$e as o,_e as p,Ne as q,je as r,De as s,Be as t,ze as u};