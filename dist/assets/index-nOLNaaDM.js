(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const v of h)if(v.type==="childList")for(const A of v.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&o(A)}).observe(document,{childList:!0,subtree:!0});function c(h){const v={};return h.integrity&&(v.integrity=h.integrity),h.referrerPolicy&&(v.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?v.credentials="include":h.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function o(h){if(h.ep)return;h.ep=!0;const v=c(h);fetch(h.href,v)}})();const sg="modulepreload",dg=function(l){return"/"+l},zp={},hg=function(i,c,o){let h=Promise.resolve();if(c&&c.length>0){let A=function(m){return Promise.all(m.map(O=>Promise.resolve(O).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const D=document.querySelector("meta[property=csp-nonce]"),x=D?.nonce||D?.getAttribute("nonce");h=A(c.map(m=>{if(m=dg(m),m in zp)return;zp[m]=!0;const O=m.endsWith(".css"),S=O?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${S}`))return;const C=document.createElement("link");if(C.rel=O?"stylesheet":sg,O||(C.as="script"),C.crossOrigin="",C.href=m,x&&C.setAttribute("nonce",x),document.head.appendChild(C),O)return new Promise((Z,P)=>{C.addEventListener("load",Z),C.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${m}`)))})}))}function v(A){const D=new Event("vite:preloadError",{cancelable:!0});if(D.payload=A,window.dispatchEvent(D),!D.defaultPrevented)throw A}return h.then(A=>{for(const D of A||[])D.status==="rejected"&&v(D.reason);return i().catch(v)})};var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var pf={exports:{}},ur={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function pg(){if(Mp)return ur;Mp=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(o,h,v){var A=null;if(v!==void 0&&(A=""+v),h.key!==void 0&&(A=""+h.key),"key"in h){v={};for(var D in h)D!=="key"&&(v[D]=h[D])}else v=h;return h=v.ref,{$$typeof:l,type:o,key:A,ref:h!==void 0?h:null,props:v}}return ur.Fragment=i,ur.jsx=c,ur.jsxs=c,ur}var Np;function vg(){return Np||(Np=1,pf.exports=pg()),pf.exports}var ge=vg(),vf={exports:{}},zt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function mg(){if(Cp)return zt;Cp=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),A=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),S=Symbol.iterator;function C(b){return b===null||typeof b!="object"?null:(b=S&&b[S]||b["@@iterator"],typeof b=="function"?b:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,ft={};function at(b,k,ut){this.props=b,this.context=k,this.refs=ft,this.updater=ut||Z}at.prototype.isReactComponent={},at.prototype.setState=function(b,k){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,k,"setState")},at.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function it(){}it.prototype=at.prototype;function J(b,k,ut){this.props=b,this.context=k,this.refs=ft,this.updater=ut||Z}var lt=J.prototype=new it;lt.constructor=J,P(lt,at.prototype),lt.isPureReactComponent=!0;var st=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function X(b,k,ut,G,nt,ht){return ut=ht.ref,{$$typeof:l,type:b,key:k,ref:ut!==void 0?ut:null,props:ht}}function pt(b,k){return X(b.type,k,void 0,void 0,void 0,b.props)}function Et(b){return typeof b=="object"&&b!==null&&b.$$typeof===l}function Lt(b){var k={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(ut){return k[ut]})}var Mt=/\/+/g;function bt(b,k){return typeof b=="object"&&b!==null&&b.key!=null?Lt(""+b.key):k.toString(36)}function kt(){}function Qt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(kt,kt):(b.status="pending",b.then(function(k){b.status==="pending"&&(b.status="fulfilled",b.value=k)},function(k){b.status==="pending"&&(b.status="rejected",b.reason=k)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Ot(b,k,ut,G,nt){var ht=typeof b;(ht==="undefined"||ht==="boolean")&&(b=null);var ct=!1;if(b===null)ct=!0;else switch(ht){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(b.$$typeof){case l:case i:ct=!0;break;case O:return ct=b._init,Ot(ct(b._payload),k,ut,G,nt)}}if(ct)return nt=nt(b),ct=G===""?"."+bt(b,0):G,st(nt)?(ut="",ct!=null&&(ut=ct.replace(Mt,"$&/")+"/"),Ot(nt,k,ut,"",function(W){return W})):nt!=null&&(Et(nt)&&(nt=pt(nt,ut+(nt.key==null||b&&b.key===nt.key?"":(""+nt.key).replace(Mt,"$&/")+"/")+ct)),k.push(nt)),1;ct=0;var St=G===""?".":G+":";if(st(b))for(var Dt=0;Dt<b.length;Dt++)G=b[Dt],ht=St+bt(G,Dt),ct+=Ot(G,k,ut,ht,nt);else if(Dt=C(b),typeof Dt=="function")for(b=Dt.call(b),Dt=0;!(G=b.next()).done;)G=G.value,ht=St+bt(G,Dt++),ct+=Ot(G,k,ut,ht,nt);else if(ht==="object"){if(typeof b.then=="function")return Ot(Qt(b),k,ut,G,nt);throw k=String(b),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return ct}function H(b,k,ut){if(b==null)return b;var G=[],nt=0;return Ot(b,G,"","",function(ht){return k.call(ut,ht,nt++)}),G}function tt(b){if(b._status===-1){var k=b._result;k=k(),k.then(function(ut){(b._status===0||b._status===-1)&&(b._status=1,b._result=ut)},function(ut){(b._status===0||b._status===-1)&&(b._status=2,b._result=ut)}),b._status===-1&&(b._status=0,b._result=k)}if(b._status===1)return b._result.default;throw b._result}var rt=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function gt(){}return zt.Children={map:H,forEach:function(b,k,ut){H(b,function(){k.apply(this,arguments)},ut)},count:function(b){var k=0;return H(b,function(){k++}),k},toArray:function(b){return H(b,function(k){return k})||[]},only:function(b){if(!Et(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},zt.Component=at,zt.Fragment=c,zt.Profiler=h,zt.PureComponent=J,zt.StrictMode=o,zt.Suspense=x,zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,zt.__COMPILER_RUNTIME={__proto__:null,c:function(b){return N.H.useMemoCache(b)}},zt.cache=function(b){return function(){return b.apply(null,arguments)}},zt.cloneElement=function(b,k,ut){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var G=P({},b.props),nt=b.key,ht=void 0;if(k!=null)for(ct in k.ref!==void 0&&(ht=void 0),k.key!==void 0&&(nt=""+k.key),k)!V.call(k,ct)||ct==="key"||ct==="__self"||ct==="__source"||ct==="ref"&&k.ref===void 0||(G[ct]=k[ct]);var ct=arguments.length-2;if(ct===1)G.children=ut;else if(1<ct){for(var St=Array(ct),Dt=0;Dt<ct;Dt++)St[Dt]=arguments[Dt+2];G.children=St}return X(b.type,nt,void 0,void 0,ht,G)},zt.createContext=function(b){return b={$$typeof:A,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:v,_context:b},b},zt.createElement=function(b,k,ut){var G,nt={},ht=null;if(k!=null)for(G in k.key!==void 0&&(ht=""+k.key),k)V.call(k,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(nt[G]=k[G]);var ct=arguments.length-2;if(ct===1)nt.children=ut;else if(1<ct){for(var St=Array(ct),Dt=0;Dt<ct;Dt++)St[Dt]=arguments[Dt+2];nt.children=St}if(b&&b.defaultProps)for(G in ct=b.defaultProps,ct)nt[G]===void 0&&(nt[G]=ct[G]);return X(b,ht,void 0,void 0,null,nt)},zt.createRef=function(){return{current:null}},zt.forwardRef=function(b){return{$$typeof:D,render:b}},zt.isValidElement=Et,zt.lazy=function(b){return{$$typeof:O,_payload:{_status:-1,_result:b},_init:tt}},zt.memo=function(b,k){return{$$typeof:m,type:b,compare:k===void 0?null:k}},zt.startTransition=function(b){var k=N.T,ut={};N.T=ut;try{var G=b(),nt=N.S;nt!==null&&nt(ut,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(gt,rt)}catch(ht){rt(ht)}finally{N.T=k}},zt.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},zt.use=function(b){return N.H.use(b)},zt.useActionState=function(b,k,ut){return N.H.useActionState(b,k,ut)},zt.useCallback=function(b,k){return N.H.useCallback(b,k)},zt.useContext=function(b){return N.H.useContext(b)},zt.useDebugValue=function(){},zt.useDeferredValue=function(b,k){return N.H.useDeferredValue(b,k)},zt.useEffect=function(b,k,ut){var G=N.H;if(typeof ut=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(b,k)},zt.useId=function(){return N.H.useId()},zt.useImperativeHandle=function(b,k,ut){return N.H.useImperativeHandle(b,k,ut)},zt.useInsertionEffect=function(b,k){return N.H.useInsertionEffect(b,k)},zt.useLayoutEffect=function(b,k){return N.H.useLayoutEffect(b,k)},zt.useMemo=function(b,k){return N.H.useMemo(b,k)},zt.useOptimistic=function(b,k){return N.H.useOptimistic(b,k)},zt.useReducer=function(b,k,ut){return N.H.useReducer(b,k,ut)},zt.useRef=function(b){return N.H.useRef(b)},zt.useState=function(b){return N.H.useState(b)},zt.useSyncExternalStore=function(b,k,ut){return N.H.useSyncExternalStore(b,k,ut)},zt.useTransition=function(){return N.H.useTransition()},zt.version="19.1.0",zt}var Bp;function jf(){return Bp||(Bp=1,vf.exports=mg()),vf.exports}var L=jf();const $=Gf(L);var mf={exports:{}},rr={},gf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function gg(){return Up||(Up=1,function(l){function i(H,tt){var rt=H.length;H.push(tt);t:for(;0<rt;){var gt=rt-1>>>1,b=H[gt];if(0<h(b,tt))H[gt]=tt,H[rt]=b,rt=gt;else break t}}function c(H){return H.length===0?null:H[0]}function o(H){if(H.length===0)return null;var tt=H[0],rt=H.pop();if(rt!==tt){H[0]=rt;t:for(var gt=0,b=H.length,k=b>>>1;gt<k;){var ut=2*(gt+1)-1,G=H[ut],nt=ut+1,ht=H[nt];if(0>h(G,rt))nt<b&&0>h(ht,G)?(H[gt]=ht,H[nt]=rt,gt=nt):(H[gt]=G,H[ut]=rt,gt=ut);else if(nt<b&&0>h(ht,rt))H[gt]=ht,H[nt]=rt,gt=nt;else break t}}return tt}function h(H,tt){var rt=H.sortIndex-tt.sortIndex;return rt!==0?rt:H.id-tt.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;l.unstable_now=function(){return v.now()}}else{var A=Date,D=A.now();l.unstable_now=function(){return A.now()-D}}var x=[],m=[],O=1,S=null,C=3,Z=!1,P=!1,ft=!1,at=!1,it=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,lt=typeof setImmediate<"u"?setImmediate:null;function st(H){for(var tt=c(m);tt!==null;){if(tt.callback===null)o(m);else if(tt.startTime<=H)o(m),tt.sortIndex=tt.expirationTime,i(x,tt);else break;tt=c(m)}}function N(H){if(ft=!1,st(H),!P)if(c(x)!==null)P=!0,V||(V=!0,bt());else{var tt=c(m);tt!==null&&Ot(N,tt.startTime-H)}}var V=!1,X=-1,pt=5,Et=-1;function Lt(){return at?!0:!(l.unstable_now()-Et<pt)}function Mt(){if(at=!1,V){var H=l.unstable_now();Et=H;var tt=!0;try{t:{P=!1,ft&&(ft=!1,J(X),X=-1),Z=!0;var rt=C;try{e:{for(st(H),S=c(x);S!==null&&!(S.expirationTime>H&&Lt());){var gt=S.callback;if(typeof gt=="function"){S.callback=null,C=S.priorityLevel;var b=gt(S.expirationTime<=H);if(H=l.unstable_now(),typeof b=="function"){S.callback=b,st(H),tt=!0;break e}S===c(x)&&o(x),st(H)}else o(x);S=c(x)}if(S!==null)tt=!0;else{var k=c(m);k!==null&&Ot(N,k.startTime-H),tt=!1}}break t}finally{S=null,C=rt,Z=!1}tt=void 0}}finally{tt?bt():V=!1}}}var bt;if(typeof lt=="function")bt=function(){lt(Mt)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,Qt=kt.port2;kt.port1.onmessage=Mt,bt=function(){Qt.postMessage(null)}}else bt=function(){it(Mt,0)};function Ot(H,tt){X=it(function(){H(l.unstable_now())},tt)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(H){H.callback=null},l.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pt=0<H?Math.floor(1e3/H):5},l.unstable_getCurrentPriorityLevel=function(){return C},l.unstable_next=function(H){switch(C){case 1:case 2:case 3:var tt=3;break;default:tt=C}var rt=C;C=tt;try{return H()}finally{C=rt}},l.unstable_requestPaint=function(){at=!0},l.unstable_runWithPriority=function(H,tt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var rt=C;C=H;try{return tt()}finally{C=rt}},l.unstable_scheduleCallback=function(H,tt,rt){var gt=l.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?gt+rt:gt):rt=gt,H){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=rt+b,H={id:O++,callback:tt,priorityLevel:H,startTime:rt,expirationTime:b,sortIndex:-1},rt>gt?(H.sortIndex=rt,i(m,H),c(x)===null&&H===c(m)&&(ft?(J(X),X=-1):ft=!0,Ot(N,rt-gt))):(H.sortIndex=b,i(x,H),P||Z||(P=!0,V||(V=!0,bt()))),H},l.unstable_shouldYield=Lt,l.unstable_wrapCallback=function(H){var tt=C;return function(){var rt=C;C=tt;try{return H.apply(this,arguments)}finally{C=rt}}}}(yf)),yf}var $p;function yg(){return $p||($p=1,gf.exports=gg()),gf.exports}var bf={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function bg(){if(Hp)return $e;Hp=1;var l=jf();function i(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)m+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},h=Symbol.for("react.portal");function v(x,m,O){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:S==null?null:""+S,children:x,containerInfo:m,implementation:O}}var A=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,$e.createPortal=function(x,m){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return v(x,m,null,O)},$e.flushSync=function(x){var m=A.T,O=o.p;try{if(A.T=null,o.p=2,x)return x()}finally{A.T=m,o.p=O,o.d.f()}},$e.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(x,m))},$e.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},$e.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var O=m.as,S=D(O,m.crossOrigin),C=typeof m.integrity=="string"?m.integrity:void 0,Z=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;O==="style"?o.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:C,fetchPriority:Z}):O==="script"&&o.d.X(x,{crossOrigin:S,integrity:C,fetchPriority:Z,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},$e.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var O=D(m.as,m.crossOrigin);o.d.M(x,{crossOrigin:O,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(x)},$e.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var O=m.as,S=D(O,m.crossOrigin);o.d.L(x,O,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},$e.preloadModule=function(x,m){if(typeof x=="string")if(m){var O=D(m.as,m.crossOrigin);o.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:O,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(x)},$e.requestFormReset=function(x){o.d.r(x)},$e.unstable_batchedUpdates=function(x,m){return x(m)},$e.useFormState=function(x,m,O){return A.H.useFormState(x,m,O)},$e.useFormStatus=function(){return A.H.useHostTransitionStatus()},$e.version="19.1.0",$e}var Lp;function yv(){if(Lp)return bf.exports;Lp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),bf.exports=bg(),bf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function Ag(){if(kp)return rr;kp=1;var l=yg(),i=jf(),c=yv();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function v(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function A(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D(t){if(v(t)!==t)throw Error(o(188))}function x(t){var e=t.alternate;if(!e){if(e=v(t),e===null)throw Error(o(188));return e!==t?null:t}for(var a=t,n=e;;){var u=a.return;if(u===null)break;var r=u.alternate;if(r===null){if(n=u.return,n!==null){a=n;continue}break}if(u.child===r.child){for(r=u.child;r;){if(r===a)return D(u),t;if(r===n)return D(u),e;r=r.sibling}throw Error(o(188))}if(a.return!==n.return)a=u,n=r;else{for(var f=!1,s=u.child;s;){if(s===a){f=!0,a=u,n=r;break}if(s===n){f=!0,n=u,a=r;break}s=s.sibling}if(!f){for(s=r.child;s;){if(s===a){f=!0,a=r,n=u;break}if(s===n){f=!0,n=r,a=u;break}s=s.sibling}if(!f)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var O=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),ft=Symbol.for("react.strict_mode"),at=Symbol.for("react.profiler"),it=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Lt=Symbol.for("react.memo_cache_sentinel"),Mt=Symbol.iterator;function bt(t){return t===null||typeof t!="object"?null:(t=Mt&&t[Mt]||t["@@iterator"],typeof t=="function"?t:null)}var kt=Symbol.for("react.client.reference");function Qt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===kt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case at:return"Profiler";case ft:return"StrictMode";case N:return"Suspense";case V:return"SuspenseList";case Et:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Z:return"Portal";case lt:return(t.displayName||"Context")+".Provider";case J:return(t._context.displayName||"Context")+".Consumer";case st:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return e=t.displayName||null,e!==null?e:Qt(t.type)||"Memo";case pt:e=t._payload,t=t._init;try{return Qt(t(e))}catch{}}return null}var Ot=Array.isArray,H=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},gt=[],b=-1;function k(t){return{current:t}}function ut(t){0>b||(t.current=gt[b],gt[b]=null,b--)}function G(t,e){b++,gt[b]=t.current,t.current=e}var nt=k(null),ht=k(null),ct=k(null),St=k(null);function Dt(t,e){switch(G(ct,e),G(ht,t),G(nt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?lp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=lp(e),t=up(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ut(nt),G(nt,t)}function W(){ut(nt),ut(ht),ut(ct)}function wt(t){t.memoizedState!==null&&G(St,t);var e=nt.current,a=up(e,t.type);e!==a&&(G(ht,t),G(nt,a))}function Rt(t){ht.current===t&&(ut(nt),ut(ht)),St.current===t&&(ut(St),tr._currentValue=rt)}var Bt=Object.prototype.hasOwnProperty,Vt=l.unstable_scheduleCallback,ue=l.unstable_cancelCallback,Zt=l.unstable_shouldYield,Me=l.unstable_requestPaint,re=l.unstable_now,Qe=l.unstable_getCurrentPriorityLevel,Le=l.unstable_ImmediatePriority,ba=l.unstable_UserBlockingPriority,ea=l.unstable_NormalPriority,Aa=l.unstable_LowPriority,Ia=l.unstable_IdlePriority,au=l.log,mr=l.unstable_setDisableYieldValue,Wa=null,Ne=null;function fa(t){if(typeof au=="function"&&mr(t),Ne&&typeof Ne.setStrictMode=="function")try{Ne.setStrictMode(Wa,t)}catch{}}var Ce=Math.clz32?Math.clz32:br,gr=Math.log,yr=Math.LN2;function br(t){return t>>>=0,t===0?32:31-(gr(t)/yr|0)|0}var Bn=256,Fa=4194304;function za(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function sl(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var u=0,r=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var s=n&134217727;return s!==0?(n=s&~r,n!==0?u=za(n):(f&=s,f!==0?u=za(f):a||(a=s&~t,a!==0&&(u=za(a))))):(s=n&~r,s!==0?u=za(s):f!==0?u=za(f):a||(a=n&~t,a!==0&&(u=za(a)))),u===0?0:e!==0&&e!==u&&(e&r)===0&&(r=u&-u,a=e&-e,r>=a||r===32&&(a&4194048)!==0)?e:u}function Ma(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ar(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sr(){var t=Bn;return Bn<<=1,(Bn&4194048)===0&&(Bn=256),t}function sa(){var t=Fa;return Fa<<=1,(Fa&62914560)===0&&(Fa=4194304),t}function nu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Un(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xr(t,e,a,n,u,r){var f=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var s=t.entanglements,g=t.expirationTimes,M=t.hiddenUpdates;for(a=f&~a;0<a;){var Y=31-Ce(a),j=1<<Y;s[Y]=0,g[Y]=-1;var B=M[Y];if(B!==null)for(M[Y]=null,Y=0;Y<B.length;Y++){var U=B[Y];U!==null&&(U.lane&=-536870913)}a&=~j}n!==0&&Er(t,n,0),r!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=r&~(f&~e))}function Er(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Ce(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function Tr(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-Ce(a),u=1<<n;u&e|t[n]&e&&(t[n]|=e),a&=~u}}function lu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function uu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wr(){var t=tt.p;return t!==0?t:(t=window.event,t===void 0?32:Tp(t.type))}function oo(t,e){var a=tt.p;try{return tt.p=t,e()}finally{tt.p=a}}var Sa=Math.random().toString(36).slice(2),Se="__reactFiber$"+Sa,Be="__reactProps$"+Sa,Pa="__reactContainer$"+Sa,dl="__reactEvents$"+Sa,co="__reactListeners$"+Sa,fo="__reactHandles$"+Sa,Dr="__reactResources$"+Sa,$n="__reactMarker$"+Sa;function ru(t){delete t[Se],delete t[Be],delete t[dl],delete t[co],delete t[fo]}function tn(t){var e=t[Se];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Pa]||a[Se]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=cp(t);t!==null;){if(a=t[Se])return a;t=cp(t)}return e}t=a,a=t.parentNode}return null}function en(t){if(t=t[Se]||t[Pa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Hn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function an(t){var e=t[Dr];return e||(e=t[Dr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function pe(t){t[$n]=!0}var _r=new Set,Rr={};function Na(t,e){nn(t,e),nn(t+"Capture",e)}function nn(t,e){for(Rr[t]=e,t=0;t<e.length;t++)_r.add(e[t])}var so=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),iu={},ln={};function Or(t){return Bt.call(ln,t)?!0:Bt.call(iu,t)?!1:so.test(t)?ln[t]=!0:(iu[t]=!0,!1)}function da(t,e,a){if(Or(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function hl(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function qe(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var Ln,zr;function un(t){if(Ln===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Ln=e&&e[1]||"",zr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ln+t+zr}var kn=!1;function ou(t,e){if(!t||kn)return"";kn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(U){var B=U}Reflect.construct(t,[],j)}else{try{j.call()}catch(U){B=U}t.call(j.prototype)}}else{try{throw Error()}catch(U){B=U}(j=t())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(U){if(U&&B&&typeof U.stack=="string")return[U.stack,B.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),f=r[0],s=r[1];if(f&&s){var g=f.split(`
`),M=s.split(`
`);for(u=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;u<M.length&&!M[u].includes("DetermineComponentFrameRoot");)u++;if(n===g.length||u===M.length)for(n=g.length-1,u=M.length-1;1<=n&&0<=u&&g[n]!==M[u];)u--;for(;1<=n&&0<=u;n--,u--)if(g[n]!==M[u]){if(n!==1||u!==1)do if(n--,u--,0>u||g[n]!==M[u]){var Y=`
`+g[n].replace(" at new "," at ");return t.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",t.displayName)),Y}while(1<=n&&0<=u);break}}}finally{kn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?un(a):""}function ho(t){switch(t.tag){case 26:case 27:case 5:return un(t.type);case 16:return un("Lazy");case 13:return un("Suspense");case 19:return un("SuspenseList");case 0:case 15:return ou(t.type,!1);case 11:return ou(t.type.render,!1);case 1:return ou(t.type,!0);case 31:return un("Activity");default:return""}}function d(t){try{var e="";do e+=ho(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function y(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function w(t){var e=p(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,r=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(f){n=""+f,r.call(this,f)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function R(t){t._valueTracker||(t._valueTracker=w(t))}function T(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=p(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function Q(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var I=/[\n"\\]/g;function K(t){return t.replace(I,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function et(t,e,a,n,u,r,f,s){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+y(e)):t.value!==""+y(e)&&(t.value=""+y(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?vt(t,f,y(e)):a!=null?vt(t,f,y(a)):n!=null&&t.removeAttribute("value"),u==null&&r!=null&&(t.defaultChecked=!!r),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+y(s):t.removeAttribute("name")}function ot(t,e,a,n,u,r,f,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;a=a!=null?""+y(a):"",e=e!=null?""+y(e):a,s||e===t.value||(t.value=e),t.defaultValue=e}n=n??u,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=s?t.checked:!!n,t.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function vt(t,e,a){e==="number"&&Q(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _t(t,e,a,n){if(t=t.options,e){e={};for(var u=0;u<a.length;u++)e["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=e.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&n&&(t[a].defaultSelected=!0)}else{for(a=""+y(a),e=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,n&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function qt(t,e,a){if(e!=null&&(e=""+y(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+y(a):""}function Gt(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(o(92));if(Ot(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=y(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function te(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var ie=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ke(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||ie.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function rn(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var u in e)n=e[u],e.hasOwnProperty(u)&&a[u]!==n&&ke(t,u,n)}else for(var r in e)e.hasOwnProperty(r)&&ke(t,r,e[r])}function Yn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var po=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fu(t){return cu.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var su=null;function du(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ca=null,pl=null;function rs(t){var e=en(t);if(e&&(t=e.stateNode)){var a=t[Be]||null;t:switch(t=e.stateNode,e.type){case"input":if(et(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+K(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var u=n[Be]||null;if(!u)throw Error(o(90));et(n,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&T(n)}break t;case"textarea":qt(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&_t(t,!!a.multiple,e,!1)}}}var vo=!1;function is(t,e,a){if(vo)return t(e,a);vo=!0;try{var n=t(e);return n}finally{if(vo=!1,(Ca!==null||pl!==null)&&(vi(),Ca&&(e=Ca,t=pl,pl=Ca=null,rs(e),t)))for(e=0;e<t.length;e++)rs(t[e])}}function hu(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Be]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}var Ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mo=!1;if(Ba)try{var pu={};Object.defineProperty(pu,"passive",{get:function(){mo=!0}}),window.addEventListener("test",pu,pu),window.removeEventListener("test",pu,pu)}catch{mo=!1}var on=null,go=null,Mr=null;function os(){if(Mr)return Mr;var t,e=go,a=e.length,n,u="value"in on?on.value:on.textContent,r=u.length;for(t=0;t<a&&e[t]===u[t];t++);var f=a-t;for(n=1;n<=f&&e[a-n]===u[r-n];n++);return Mr=u.slice(t,1<n?1-n:void 0)}function Nr(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cr(){return!0}function cs(){return!1}function Ge(t){function e(a,n,u,r,f){this._reactName=a,this._targetInst=u,this.type=n,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(a=t[s],this[s]=a?a(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Cr:cs,this.isPropagationStopped=cs,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),e}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Br=Ge(Qn),vu=O({},Qn,{view:0,detail:0}),s0=Ge(vu),yo,bo,mu,Ur=O({},vu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mu&&(mu&&t.type==="mousemove"?(yo=t.screenX-mu.screenX,bo=t.screenY-mu.screenY):bo=yo=0,mu=t),yo)},movementY:function(t){return"movementY"in t?t.movementY:bo}}),fs=Ge(Ur),d0=O({},Ur,{dataTransfer:0}),h0=Ge(d0),p0=O({},vu,{relatedTarget:0}),Ao=Ge(p0),v0=O({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=Ge(v0),g0=O({},Qn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),y0=Ge(g0),b0=O({},Qn,{data:0}),ss=Ge(b0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=x0[t])?!!e[t]:!1}function So(){return E0}var T0=O({},vu,{key:function(t){if(t.key){var e=A0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?S0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(t){return t.type==="keypress"?Nr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w0=Ge(T0),D0=O({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ds=Ge(D0),_0=O({},vu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),R0=Ge(_0),O0=O({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),z0=Ge(O0),M0=O({},Ur,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=Ge(M0),C0=O({},Qn,{newState:0,oldState:0}),B0=Ge(C0),U0=[9,13,27,32],xo=Ba&&"CompositionEvent"in window,gu=null;Ba&&"documentMode"in document&&(gu=document.documentMode);var $0=Ba&&"TextEvent"in window&&!gu,hs=Ba&&(!xo||gu&&8<gu&&11>=gu),ps=" ",vs=!1;function ms(t,e){switch(t){case"keyup":return U0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vl=!1;function H0(t,e){switch(t){case"compositionend":return gs(e);case"keypress":return e.which!==32?null:(vs=!0,ps);case"textInput":return t=e.data,t===ps&&vs?null:t;default:return null}}function L0(t,e){if(vl)return t==="compositionend"||!xo&&ms(t,e)?(t=os(),Mr=go=on=null,vl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hs&&e.locale!=="ko"?null:e.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ys(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!k0[t.type]:e==="textarea"}function bs(t,e,a,n){Ca?pl?pl.push(n):pl=[n]:Ca=n,e=Si(e,"onChange"),0<e.length&&(a=new Br("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var yu=null,bu=null;function Y0(t){Ph(t,0)}function $r(t){var e=Hn(t);if(T(e))return t}function As(t,e){if(t==="change")return e}var Ss=!1;if(Ba){var Eo;if(Ba){var To="oninput"in document;if(!To){var xs=document.createElement("div");xs.setAttribute("oninput","return;"),To=typeof xs.oninput=="function"}Eo=To}else Eo=!1;Ss=Eo&&(!document.documentMode||9<document.documentMode)}function Es(){yu&&(yu.detachEvent("onpropertychange",Ts),bu=yu=null)}function Ts(t){if(t.propertyName==="value"&&$r(bu)){var e=[];bs(e,bu,t,du(t)),is(Y0,e)}}function Q0(t,e,a){t==="focusin"?(Es(),yu=e,bu=a,yu.attachEvent("onpropertychange",Ts)):t==="focusout"&&Es()}function q0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $r(bu)}function G0(t,e){if(t==="click")return $r(e)}function j0(t,e){if(t==="input"||t==="change")return $r(e)}function X0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ze=typeof Object.is=="function"?Object.is:X0;function Au(t,e){if(Ze(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var u=a[n];if(!Bt.call(e,u)||!Ze(t[u],e[u]))return!1}return!0}function ws(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ds(t,e){var a=ws(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ws(a)}}function _s(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_s(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Q(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Q(t.document)}return e}function wo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var V0=Ba&&"documentMode"in document&&11>=document.documentMode,ml=null,Do=null,Su=null,_o=!1;function Os(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_o||ml==null||ml!==Q(n)||(n=ml,"selectionStart"in n&&wo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Su&&Au(Su,n)||(Su=n,n=Si(Do,"onSelect"),0<n.length&&(e=new Br("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=ml)))}function qn(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var gl={animationend:qn("Animation","AnimationEnd"),animationiteration:qn("Animation","AnimationIteration"),animationstart:qn("Animation","AnimationStart"),transitionrun:qn("Transition","TransitionRun"),transitionstart:qn("Transition","TransitionStart"),transitioncancel:qn("Transition","TransitionCancel"),transitionend:qn("Transition","TransitionEnd")},Ro={},zs={};Ba&&(zs=document.createElement("div").style,"AnimationEvent"in window||(delete gl.animationend.animation,delete gl.animationiteration.animation,delete gl.animationstart.animation),"TransitionEvent"in window||delete gl.transitionend.transition);function Gn(t){if(Ro[t])return Ro[t];if(!gl[t])return t;var e=gl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in zs)return Ro[t]=e[a];return t}var Ms=Gn("animationend"),Ns=Gn("animationiteration"),Cs=Gn("animationstart"),Z0=Gn("transitionrun"),K0=Gn("transitionstart"),J0=Gn("transitioncancel"),Bs=Gn("transitionend"),Us=new Map,Oo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Oo.push("scrollEnd");function ha(t,e){Us.set(t,e),Na(e,[t])}var $s=new WeakMap;function aa(t,e){if(typeof t=="object"&&t!==null){var a=$s.get(t);return a!==void 0?a:(e={value:t,source:e,stack:d(e)},$s.set(t,e),e)}return{value:t,source:e,stack:d(e)}}var na=[],yl=0,zo=0;function Hr(){for(var t=yl,e=zo=yl=0;e<t;){var a=na[e];na[e++]=null;var n=na[e];na[e++]=null;var u=na[e];na[e++]=null;var r=na[e];if(na[e++]=null,n!==null&&u!==null){var f=n.pending;f===null?u.next=u:(u.next=f.next,f.next=u),n.pending=u}r!==0&&Hs(a,u,r)}}function Lr(t,e,a,n){na[yl++]=t,na[yl++]=e,na[yl++]=a,na[yl++]=n,zo|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Mo(t,e,a,n){return Lr(t,e,a,n),kr(t)}function bl(t,e){return Lr(t,null,null,e),kr(t)}function Hs(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var u=!1,r=t.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(u=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,u&&e!==null&&(u=31-Ce(a),t=r.hiddenUpdates,n=t[u],n===null?t[u]=[e]:n.push(e),e.lane=a|536870912),r):null}function kr(t){if(50<Vu)throw Vu=0,Hc=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Al={};function I0(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,a,n){return new I0(t,e,a,n)}function No(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ua(t,e){var a=t.alternate;return a===null?(a=Ke(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ls(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Yr(t,e,a,n,u,r){var f=0;if(n=t,typeof t=="function")No(t)&&(f=1);else if(typeof t=="string")f=Fm(t,a,nt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Et:return t=Ke(31,a,e,u),t.elementType=Et,t.lanes=r,t;case P:return jn(a.children,u,r,e);case ft:f=8,u|=24;break;case at:return t=Ke(12,a,e,u|2),t.elementType=at,t.lanes=r,t;case N:return t=Ke(13,a,e,u),t.elementType=N,t.lanes=r,t;case V:return t=Ke(19,a,e,u),t.elementType=V,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case it:case lt:f=10;break t;case J:f=9;break t;case st:f=11;break t;case X:f=14;break t;case pt:f=16,n=null;break t}f=29,a=Error(o(130,t===null?"null":typeof t,"")),n=null}return e=Ke(f,a,e,u),e.elementType=t,e.type=n,e.lanes=r,e}function jn(t,e,a,n){return t=Ke(7,t,n,e),t.lanes=a,t}function Co(t,e,a){return t=Ke(6,t,null,e),t.lanes=a,t}function Bo(t,e,a){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Sl=[],xl=0,Qr=null,qr=0,la=[],ua=0,Xn=null,$a=1,Ha="";function Vn(t,e){Sl[xl++]=qr,Sl[xl++]=Qr,Qr=t,qr=e}function ks(t,e,a){la[ua++]=$a,la[ua++]=Ha,la[ua++]=Xn,Xn=t;var n=$a;t=Ha;var u=32-Ce(n)-1;n&=~(1<<u),a+=1;var r=32-Ce(e)+u;if(30<r){var f=u-u%5;r=(n&(1<<f)-1).toString(32),n>>=f,u-=f,$a=1<<32-Ce(e)+u|a<<u|n,Ha=r+t}else $a=1<<r|a<<u|n,Ha=t}function Uo(t){t.return!==null&&(Vn(t,1),ks(t,1,0))}function $o(t){for(;t===Qr;)Qr=Sl[--xl],Sl[xl]=null,qr=Sl[--xl],Sl[xl]=null;for(;t===Xn;)Xn=la[--ua],la[ua]=null,Ha=la[--ua],la[ua]=null,$a=la[--ua],la[ua]=null}var Ye=null,ce=null,Xt=!1,Zn=null,xa=!1,Ho=Error(o(519));function Kn(t){var e=Error(o(418,""));throw Tu(aa(e,t)),Ho}function Ys(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[Se]=t,e[Be]=n,a){case"dialog":Ht("cancel",e),Ht("close",e);break;case"iframe":case"object":case"embed":Ht("load",e);break;case"video":case"audio":for(a=0;a<Ku.length;a++)Ht(Ku[a],e);break;case"source":Ht("error",e);break;case"img":case"image":case"link":Ht("error",e),Ht("load",e);break;case"details":Ht("toggle",e);break;case"input":Ht("invalid",e),ot(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),R(e);break;case"select":Ht("invalid",e);break;case"textarea":Ht("invalid",e),Gt(e,n.value,n.defaultValue,n.children),R(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||np(e.textContent,a)?(n.popover!=null&&(Ht("beforetoggle",e),Ht("toggle",e)),n.onScroll!=null&&Ht("scroll",e),n.onScrollEnd!=null&&Ht("scrollend",e),n.onClick!=null&&(e.onclick=xi),e=!0):e=!1,e||Kn(t)}function Qs(t){for(Ye=t.return;Ye;)switch(Ye.tag){case 5:case 13:xa=!1;return;case 27:case 3:xa=!0;return;default:Ye=Ye.return}}function xu(t){if(t!==Ye)return!1;if(!Xt)return Qs(t),Xt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pc(t.type,t.memoizedProps)),a=!a),a&&ce&&Kn(t),Qs(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){ce=va(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}ce=null}}else e===27?(e=ce,Tn(t.type)?(t=nf,nf=null,ce=t):ce=e):ce=Ye?va(t.stateNode.nextSibling):null;return!0}function Eu(){ce=Ye=null,Xt=!1}function qs(){var t=Zn;return t!==null&&(Ve===null?Ve=t:Ve.push.apply(Ve,t),Zn=null),t}function Tu(t){Zn===null?Zn=[t]:Zn.push(t)}var Lo=k(null),Jn=null,La=null;function cn(t,e,a){G(Lo,e._currentValue),e._currentValue=a}function ka(t){t._currentValue=Lo.current,ut(Lo)}function ko(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Yo(t,e,a,n){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var r=u.dependencies;if(r!==null){var f=u.child;r=r.firstContext;t:for(;r!==null;){var s=r;r=u;for(var g=0;g<e.length;g++)if(s.context===e[g]){r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),ko(r.return,a,t),n||(f=null);break t}r=s.next}}else if(u.tag===18){if(f=u.return,f===null)throw Error(o(341));f.lanes|=a,r=f.alternate,r!==null&&(r.lanes|=a),ko(f,a,t),f=null}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===t){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}}function wu(t,e,a,n){t=null;for(var u=e,r=!1;u!==null;){if(!r){if((u.flags&524288)!==0)r=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var f=u.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var s=u.type;Ze(u.pendingProps.value,f.value)||(t!==null?t.push(s):t=[s])}}else if(u===St.current){if(f=u.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(tr):t=[tr])}u=u.return}t!==null&&Yo(e,t,a,n),e.flags|=262144}function Gr(t){for(t=t.firstContext;t!==null;){if(!Ze(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function In(t){Jn=t,La=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ue(t){return Gs(Jn,t)}function jr(t,e){return Jn===null&&In(t),Gs(t,e)}function Gs(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},La===null){if(t===null)throw Error(o(308));La=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else La=La.next=e;return a}var W0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},F0=l.unstable_scheduleCallback,P0=l.unstable_NormalPriority,be={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qo(){return{controller:new W0,data:new Map,refCount:0}}function Du(t){t.refCount--,t.refCount===0&&F0(P0,function(){t.controller.abort()})}var _u=null,qo=0,El=0,Tl=null;function tm(t,e){if(_u===null){var a=_u=[];qo=0,El=jc(),Tl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return qo++,e.then(js,js),e}function js(){if(--qo===0&&_u!==null){Tl!==null&&(Tl.status="fulfilled");var t=_u;_u=null,El=0,Tl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function em(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var u=0;u<a.length;u++)(0,a[u])(e)},function(u){for(n.status="rejected",n.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),n}var Xs=H.S;H.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&tm(t,e),Xs!==null&&Xs(t,e)};var Wn=k(null);function Go(){var t=Wn.current;return t!==null?t:ae.pooledCache}function Xr(t,e){e===null?G(Wn,Wn.current):G(Wn,e.pool)}function Vs(){var t=Go();return t===null?null:{parent:be._currentValue,pool:t}}var Ru=Error(o(460)),Zs=Error(o(474)),Vr=Error(o(542)),jo={then:function(){}};function Ks(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zr(){}function Js(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Zr,Zr),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ws(t),t;default:if(typeof e.status=="string")e.then(Zr,Zr);else{if(t=ae,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=n}},function(n){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ws(t),t}throw Ou=e,Ru}}var Ou=null;function Is(){if(Ou===null)throw Error(o(459));var t=Ou;return Ou=null,t}function Ws(t){if(t===Ru||t===Vr)throw Error(o(483))}var fn=!1;function Xo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function sn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function dn(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(Jt&2)!==0){var u=n.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),n.pending=e,e=kr(t),Hs(t,null,a),e}return Lr(t,n,e,a),kr(t)}function zu(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Tr(t,a)}}function Zo(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var u=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?u=r=f:r=r.next=f,a=a.next}while(a!==null);r===null?u=r=e:r=r.next=e}else u=r=e;a={baseState:n.baseState,firstBaseUpdate:u,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Ko=!1;function Mu(){if(Ko){var t=Tl;if(t!==null)throw t}}function Nu(t,e,a,n){Ko=!1;var u=t.updateQueue;fn=!1;var r=u.firstBaseUpdate,f=u.lastBaseUpdate,s=u.shared.pending;if(s!==null){u.shared.pending=null;var g=s,M=g.next;g.next=null,f===null?r=M:f.next=M,f=g;var Y=t.alternate;Y!==null&&(Y=Y.updateQueue,s=Y.lastBaseUpdate,s!==f&&(s===null?Y.firstBaseUpdate=M:s.next=M,Y.lastBaseUpdate=g))}if(r!==null){var j=u.baseState;f=0,Y=M=g=null,s=r;do{var B=s.lane&-536870913,U=B!==s.lane;if(U?(Yt&B)===B:(n&B)===B){B!==0&&B===El&&(Ko=!0),Y!==null&&(Y=Y.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var Tt=t,At=s;B=e;var Pt=a;switch(At.tag){case 1:if(Tt=At.payload,typeof Tt=="function"){j=Tt.call(Pt,j,B);break t}j=Tt;break t;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=At.payload,B=typeof Tt=="function"?Tt.call(Pt,j,B):Tt,B==null)break t;j=O({},j,B);break t;case 2:fn=!0}}B=s.callback,B!==null&&(t.flags|=64,U&&(t.flags|=8192),U=u.callbacks,U===null?u.callbacks=[B]:U.push(B))}else U={lane:B,tag:s.tag,payload:s.payload,callback:s.callback,next:null},Y===null?(M=Y=U,g=j):Y=Y.next=U,f|=B;if(s=s.next,s===null){if(s=u.shared.pending,s===null)break;U=s,s=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);Y===null&&(g=j),u.baseState=g,u.firstBaseUpdate=M,u.lastBaseUpdate=Y,r===null&&(u.shared.lanes=0),An|=f,t.lanes=f,t.memoizedState=j}}function Fs(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Ps(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Fs(a[t],e)}var wl=k(null),Kr=k(0);function td(t,e){t=Va,G(Kr,t),G(wl,e),Va=t|e.baseLanes}function Jo(){G(Kr,Va),G(wl,wl.current)}function Io(){Va=Kr.current,ut(wl),ut(Kr)}var hn=0,Ct=null,Wt=null,ve=null,Jr=!1,Dl=!1,Fn=!1,Ir=0,Cu=0,_l=null,am=0;function de(){throw Error(o(321))}function Wo(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ze(t[a],e[a]))return!1;return!0}function Fo(t,e,a,n,u,r){return hn=r,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,H.H=t===null||t.memoizedState===null?Hd:Ld,Fn=!1,r=a(n,u),Fn=!1,Dl&&(r=ad(e,a,n,u)),ed(t),r}function ed(t){H.H=ai;var e=Wt!==null&&Wt.next!==null;if(hn=0,ve=Wt=Ct=null,Jr=!1,Cu=0,_l=null,e)throw Error(o(300));t===null||xe||(t=t.dependencies,t!==null&&Gr(t)&&(xe=!0))}function ad(t,e,a,n){Ct=t;var u=0;do{if(Dl&&(_l=null),Cu=0,Dl=!1,25<=u)throw Error(o(301));if(u+=1,ve=Wt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}H.H=cm,r=e(a,n)}while(Dl);return r}function nm(){var t=H.H,e=t.useState()[0];return e=typeof e.then=="function"?Bu(e):e,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(Ct.flags|=1024),e}function Po(){var t=Ir!==0;return Ir=0,t}function tc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function ec(t){if(Jr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Jr=!1}hn=0,ve=Wt=Ct=null,Dl=!1,Cu=Ir=0,_l=null}function je(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?Ct.memoizedState=ve=t:ve=ve.next=t,ve}function me(){if(Wt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var e=ve===null?Ct.memoizedState:ve.next;if(e!==null)ve=e,Wt=t;else{if(t===null)throw Ct.alternate===null?Error(o(467)):Error(o(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},ve===null?Ct.memoizedState=ve=t:ve=ve.next=t}return ve}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bu(t){var e=Cu;return Cu+=1,_l===null&&(_l=[]),t=Js(_l,t,e),e=Ct,(ve===null?e.memoizedState:ve.next)===null&&(e=e.alternate,H.H=e===null||e.memoizedState===null?Hd:Ld),t}function Wr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bu(t);if(t.$$typeof===lt)return Ue(t)}throw Error(o(438,String(t)))}function nc(t){var e=null,a=Ct.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=Ct.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=ac(),Ct.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=Lt;return e.index++,a}function Ya(t,e){return typeof e=="function"?e(t):e}function Fr(t){var e=me();return lc(e,Wt,t)}function lc(t,e,a){var n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var u=t.baseQueue,r=n.pending;if(r!==null){if(u!==null){var f=u.next;u.next=r.next,r.next=f}e.baseQueue=u=r,n.pending=null}if(r=t.baseState,u===null)t.memoizedState=r;else{e=u.next;var s=f=null,g=null,M=e,Y=!1;do{var j=M.lane&-536870913;if(j!==M.lane?(Yt&j)===j:(hn&j)===j){var B=M.revertLane;if(B===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),j===El&&(Y=!0);else if((hn&B)===B){M=M.next,B===El&&(Y=!0);continue}else j={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},g===null?(s=g=j,f=r):g=g.next=j,Ct.lanes|=B,An|=B;j=M.action,Fn&&a(r,j),r=M.hasEagerState?M.eagerState:a(r,j)}else B={lane:j,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},g===null?(s=g=B,f=r):g=g.next=B,Ct.lanes|=j,An|=j;M=M.next}while(M!==null&&M!==e);if(g===null?f=r:g.next=s,!Ze(r,t.memoizedState)&&(xe=!0,Y&&(a=Tl,a!==null)))throw a;t.memoizedState=r,t.baseState=f,t.baseQueue=g,n.lastRenderedState=r}return u===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function uc(t){var e=me(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var n=a.dispatch,u=a.pending,r=e.memoizedState;if(u!==null){a.pending=null;var f=u=u.next;do r=t(r,f.action),f=f.next;while(f!==u);Ze(r,e.memoizedState)||(xe=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),a.lastRenderedState=r}return[r,n]}function nd(t,e,a){var n=Ct,u=me(),r=Xt;if(r){if(a===void 0)throw Error(o(407));a=a()}else a=e();var f=!Ze((Wt||u).memoizedState,a);f&&(u.memoizedState=a,xe=!0),u=u.queue;var s=rd.bind(null,n,u,t);if(Uu(2048,8,s,[t]),u.getSnapshot!==e||f||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Rl(9,Pr(),ud.bind(null,n,u,a,e),null),ae===null)throw Error(o(349));r||(hn&124)!==0||ld(n,e,a)}return a}function ld(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Ct.updateQueue,e===null?(e=ac(),Ct.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function ud(t,e,a,n){e.value=a,e.getSnapshot=n,id(e)&&od(t)}function rd(t,e,a){return a(function(){id(e)&&od(t)})}function id(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ze(t,a)}catch{return!0}}function od(t){var e=bl(t,2);e!==null&&Pe(e,t,2)}function rc(t){var e=je();if(typeof t=="function"){var a=t;if(t=a(),Fn){fa(!0);try{a()}finally{fa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:t},e}function cd(t,e,a,n){return t.baseState=a,lc(t,Wt,typeof n=="function"?n:Ya)}function lm(t,e,a,n,u){if(ei(t))throw Error(o(485));if(t=e.action,t!==null){var r={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};H.T!==null?a(!0):r.isTransition=!1,n(r),a=e.pending,a===null?(r.next=e.pending=r,fd(e,r)):(r.next=a.next,e.pending=a.next=r)}}function fd(t,e){var a=e.action,n=e.payload,u=t.state;if(e.isTransition){var r=H.T,f={};H.T=f;try{var s=a(u,n),g=H.S;g!==null&&g(f,s),sd(t,e,s)}catch(M){ic(t,e,M)}finally{H.T=r}}else try{r=a(u,n),sd(t,e,r)}catch(M){ic(t,e,M)}}function sd(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){dd(t,e,n)},function(n){return ic(t,e,n)}):dd(t,e,a)}function dd(t,e,a){e.status="fulfilled",e.value=a,hd(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,fd(t,a)))}function ic(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,hd(e),e=e.next;while(e!==n)}t.action=null}function hd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function pd(t,e){return e}function vd(t,e){if(Xt){var a=ae.formState;if(a!==null){t:{var n=Ct;if(Xt){if(ce){e:{for(var u=ce,r=xa;u.nodeType!==8;){if(!r){u=null;break e}if(u=va(u.nextSibling),u===null){u=null;break e}}r=u.data,u=r==="F!"||r==="F"?u:null}if(u){ce=va(u.nextSibling),n=u.data==="F!";break t}}Kn(n)}n=!1}n&&(e=a[0])}}return a=je(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pd,lastRenderedState:e},a.queue=n,a=Bd.bind(null,Ct,n),n.dispatch=a,n=rc(!1),r=dc.bind(null,Ct,!1,n.queue),n=je(),u={state:e,dispatch:null,action:t,pending:null},n.queue=u,a=lm.bind(null,Ct,u,r,a),u.dispatch=a,n.memoizedState=t,[e,a,!1]}function md(t){var e=me();return gd(e,Wt,t)}function gd(t,e,a){if(e=lc(t,e,pd)[0],t=Fr(Ya)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Bu(e)}catch(f){throw f===Ru?Vr:f}else n=e;e=me();var u=e.queue,r=u.dispatch;return a!==e.memoizedState&&(Ct.flags|=2048,Rl(9,Pr(),um.bind(null,u,a),null)),[n,r,t]}function um(t,e){t.action=e}function yd(t){var e=me(),a=Wt;if(a!==null)return gd(e,a,t);me(),e=e.memoizedState,a=me();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Rl(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=Ct.updateQueue,e===null&&(e=ac(),Ct.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Pr(){return{destroy:void 0,resource:void 0}}function bd(){return me().memoizedState}function ti(t,e,a,n){var u=je();n=n===void 0?null:n,Ct.flags|=t,u.memoizedState=Rl(1|e,Pr(),a,n)}function Uu(t,e,a,n){var u=me();n=n===void 0?null:n;var r=u.memoizedState.inst;Wt!==null&&n!==null&&Wo(n,Wt.memoizedState.deps)?u.memoizedState=Rl(e,r,a,n):(Ct.flags|=t,u.memoizedState=Rl(1|e,r,a,n))}function Ad(t,e){ti(8390656,8,t,e)}function Sd(t,e){Uu(2048,8,t,e)}function xd(t,e){return Uu(4,2,t,e)}function Ed(t,e){return Uu(4,4,t,e)}function Td(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wd(t,e,a){a=a!=null?a.concat([t]):null,Uu(4,4,Td.bind(null,e,t),a)}function oc(){}function Dd(t,e){var a=me();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Wo(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function _d(t,e){var a=me();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Wo(e,n[1]))return n[0];if(n=t(),Fn){fa(!0);try{t()}finally{fa(!1)}}return a.memoizedState=[n,e],n}function cc(t,e,a){return a===void 0||(hn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=zh(),Ct.lanes|=t,An|=t,a)}function Rd(t,e,a,n){return Ze(a,e)?a:wl.current!==null?(t=cc(t,a,n),Ze(t,e)||(xe=!0),t):(hn&42)===0?(xe=!0,t.memoizedState=a):(t=zh(),Ct.lanes|=t,An|=t,e)}function Od(t,e,a,n,u){var r=tt.p;tt.p=r!==0&&8>r?r:8;var f=H.T,s={};H.T=s,dc(t,!1,e,a);try{var g=u(),M=H.S;if(M!==null&&M(s,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var Y=em(g,n);$u(t,e,Y,Fe(t))}else $u(t,e,n,Fe(t))}catch(j){$u(t,e,{then:function(){},status:"rejected",reason:j},Fe())}finally{tt.p=r,H.T=f}}function rm(){}function fc(t,e,a,n){if(t.tag!==5)throw Error(o(476));var u=zd(t).queue;Od(t,u,e,rt,a===null?rm:function(){return Md(t),a(n)})}function zd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:rt},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Md(t){var e=zd(t).next.queue;$u(t,e,{},Fe())}function sc(){return Ue(tr)}function Nd(){return me().memoizedState}function Cd(){return me().memoizedState}function im(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Fe();t=sn(a);var n=dn(e,t,a);n!==null&&(Pe(n,e,a),zu(n,e,a)),e={cache:Qo()},t.payload=e;return}e=e.return}}function om(t,e,a){var n=Fe();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ei(t)?Ud(e,a):(a=Mo(t,e,a,n),a!==null&&(Pe(a,t,n),$d(a,e,n)))}function Bd(t,e,a){var n=Fe();$u(t,e,a,n)}function $u(t,e,a,n){var u={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ei(t))Ud(e,u);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var f=e.lastRenderedState,s=r(f,a);if(u.hasEagerState=!0,u.eagerState=s,Ze(s,f))return Lr(t,e,u,0),ae===null&&Hr(),!1}catch{}finally{}if(a=Mo(t,e,u,n),a!==null)return Pe(a,t,n),$d(a,e,n),!0}return!1}function dc(t,e,a,n){if(n={lane:2,revertLane:jc(),action:n,hasEagerState:!1,eagerState:null,next:null},ei(t)){if(e)throw Error(o(479))}else e=Mo(t,a,n,2),e!==null&&Pe(e,t,2)}function ei(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function Ud(t,e){Dl=Jr=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function $d(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Tr(t,a)}}var ai={readContext:Ue,use:Wr,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de},Hd={readContext:Ue,use:Wr,useCallback:function(t,e){return je().memoizedState=[t,e===void 0?null:e],t},useContext:Ue,useEffect:Ad,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,ti(4194308,4,Td.bind(null,e,t),a)},useLayoutEffect:function(t,e){return ti(4194308,4,t,e)},useInsertionEffect:function(t,e){ti(4,2,t,e)},useMemo:function(t,e){var a=je();e=e===void 0?null:e;var n=t();if(Fn){fa(!0);try{t()}finally{fa(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=je();if(a!==void 0){var u=a(e);if(Fn){fa(!0);try{a(e)}finally{fa(!1)}}}else u=e;return n.memoizedState=n.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},n.queue=t,t=t.dispatch=om.bind(null,Ct,t),[n.memoizedState,t]},useRef:function(t){var e=je();return t={current:t},e.memoizedState=t},useState:function(t){t=rc(t);var e=t.queue,a=Bd.bind(null,Ct,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:oc,useDeferredValue:function(t,e){var a=je();return cc(a,t,e)},useTransition:function(){var t=rc(!1);return t=Od.bind(null,Ct,t.queue,!0,!1),je().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=Ct,u=je();if(Xt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=e(),ae===null)throw Error(o(349));(Yt&124)!==0||ld(n,e,a)}u.memoizedState=a;var r={value:a,getSnapshot:e};return u.queue=r,Ad(rd.bind(null,n,r,t),[t]),n.flags|=2048,Rl(9,Pr(),ud.bind(null,n,r,a,e),null),a},useId:function(){var t=je(),e=ae.identifierPrefix;if(Xt){var a=Ha,n=$a;a=(n&~(1<<32-Ce(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=Ir++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=am++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:sc,useFormState:vd,useActionState:vd,useOptimistic:function(t){var e=je();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=dc.bind(null,Ct,!0,a),a.dispatch=e,[t,e]},useMemoCache:nc,useCacheRefresh:function(){return je().memoizedState=im.bind(null,Ct)}},Ld={readContext:Ue,use:Wr,useCallback:Dd,useContext:Ue,useEffect:Sd,useImperativeHandle:wd,useInsertionEffect:xd,useLayoutEffect:Ed,useMemo:_d,useReducer:Fr,useRef:bd,useState:function(){return Fr(Ya)},useDebugValue:oc,useDeferredValue:function(t,e){var a=me();return Rd(a,Wt.memoizedState,t,e)},useTransition:function(){var t=Fr(Ya)[0],e=me().memoizedState;return[typeof t=="boolean"?t:Bu(t),e]},useSyncExternalStore:nd,useId:Nd,useHostTransitionStatus:sc,useFormState:md,useActionState:md,useOptimistic:function(t,e){var a=me();return cd(a,Wt,t,e)},useMemoCache:nc,useCacheRefresh:Cd},cm={readContext:Ue,use:Wr,useCallback:Dd,useContext:Ue,useEffect:Sd,useImperativeHandle:wd,useInsertionEffect:xd,useLayoutEffect:Ed,useMemo:_d,useReducer:uc,useRef:bd,useState:function(){return uc(Ya)},useDebugValue:oc,useDeferredValue:function(t,e){var a=me();return Wt===null?cc(a,t,e):Rd(a,Wt.memoizedState,t,e)},useTransition:function(){var t=uc(Ya)[0],e=me().memoizedState;return[typeof t=="boolean"?t:Bu(t),e]},useSyncExternalStore:nd,useId:Nd,useHostTransitionStatus:sc,useFormState:yd,useActionState:yd,useOptimistic:function(t,e){var a=me();return Wt!==null?cd(a,Wt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:nc,useCacheRefresh:Cd},Ol=null,Hu=0;function ni(t){var e=Hu;return Hu+=1,Ol===null&&(Ol=[]),Js(Ol,t,e)}function Lu(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function li(t,e){throw e.$$typeof===S?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function kd(t){var e=t._init;return e(t._payload)}function Yd(t){function e(_,E){if(t){var z=_.deletions;z===null?(_.deletions=[E],_.flags|=16):z.push(E)}}function a(_,E){if(!t)return null;for(;E!==null;)e(_,E),E=E.sibling;return null}function n(_){for(var E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function u(_,E){return _=Ua(_,E),_.index=0,_.sibling=null,_}function r(_,E,z){return _.index=z,t?(z=_.alternate,z!==null?(z=z.index,z<E?(_.flags|=67108866,E):z):(_.flags|=67108866,E)):(_.flags|=1048576,E)}function f(_){return t&&_.alternate===null&&(_.flags|=67108866),_}function s(_,E,z,q){return E===null||E.tag!==6?(E=Co(z,_.mode,q),E.return=_,E):(E=u(E,z),E.return=_,E)}function g(_,E,z,q){var mt=z.type;return mt===P?Y(_,E,z.props.children,q,z.key):E!==null&&(E.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===pt&&kd(mt)===E.type)?(E=u(E,z.props),Lu(E,z),E.return=_,E):(E=Yr(z.type,z.key,z.props,null,_.mode,q),Lu(E,z),E.return=_,E)}function M(_,E,z,q){return E===null||E.tag!==4||E.stateNode.containerInfo!==z.containerInfo||E.stateNode.implementation!==z.implementation?(E=Bo(z,_.mode,q),E.return=_,E):(E=u(E,z.children||[]),E.return=_,E)}function Y(_,E,z,q,mt){return E===null||E.tag!==7?(E=jn(z,_.mode,q,mt),E.return=_,E):(E=u(E,z),E.return=_,E)}function j(_,E,z){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Co(""+E,_.mode,z),E.return=_,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case C:return z=Yr(E.type,E.key,E.props,null,_.mode,z),Lu(z,E),z.return=_,z;case Z:return E=Bo(E,_.mode,z),E.return=_,E;case pt:var q=E._init;return E=q(E._payload),j(_,E,z)}if(Ot(E)||bt(E))return E=jn(E,_.mode,z,null),E.return=_,E;if(typeof E.then=="function")return j(_,ni(E),z);if(E.$$typeof===lt)return j(_,jr(_,E),z);li(_,E)}return null}function B(_,E,z,q){var mt=E!==null?E.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return mt!==null?null:s(_,E,""+z,q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case C:return z.key===mt?g(_,E,z,q):null;case Z:return z.key===mt?M(_,E,z,q):null;case pt:return mt=z._init,z=mt(z._payload),B(_,E,z,q)}if(Ot(z)||bt(z))return mt!==null?null:Y(_,E,z,q,null);if(typeof z.then=="function")return B(_,E,ni(z),q);if(z.$$typeof===lt)return B(_,E,jr(_,z),q);li(_,z)}return null}function U(_,E,z,q,mt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return _=_.get(z)||null,s(E,_,""+q,mt);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case C:return _=_.get(q.key===null?z:q.key)||null,g(E,_,q,mt);case Z:return _=_.get(q.key===null?z:q.key)||null,M(E,_,q,mt);case pt:var Ut=q._init;return q=Ut(q._payload),U(_,E,z,q,mt)}if(Ot(q)||bt(q))return _=_.get(z)||null,Y(E,_,q,mt,null);if(typeof q.then=="function")return U(_,E,z,ni(q),mt);if(q.$$typeof===lt)return U(_,E,z,jr(E,q),mt);li(E,q)}return null}function Tt(_,E,z,q){for(var mt=null,Ut=null,yt=E,xt=E=0,Te=null;yt!==null&&xt<z.length;xt++){yt.index>xt?(Te=yt,yt=null):Te=yt.sibling;var jt=B(_,yt,z[xt],q);if(jt===null){yt===null&&(yt=Te);break}t&&yt&&jt.alternate===null&&e(_,yt),E=r(jt,E,xt),Ut===null?mt=jt:Ut.sibling=jt,Ut=jt,yt=Te}if(xt===z.length)return a(_,yt),Xt&&Vn(_,xt),mt;if(yt===null){for(;xt<z.length;xt++)yt=j(_,z[xt],q),yt!==null&&(E=r(yt,E,xt),Ut===null?mt=yt:Ut.sibling=yt,Ut=yt);return Xt&&Vn(_,xt),mt}for(yt=n(yt);xt<z.length;xt++)Te=U(yt,_,xt,z[xt],q),Te!==null&&(t&&Te.alternate!==null&&yt.delete(Te.key===null?xt:Te.key),E=r(Te,E,xt),Ut===null?mt=Te:Ut.sibling=Te,Ut=Te);return t&&yt.forEach(function(On){return e(_,On)}),Xt&&Vn(_,xt),mt}function At(_,E,z,q){if(z==null)throw Error(o(151));for(var mt=null,Ut=null,yt=E,xt=E=0,Te=null,jt=z.next();yt!==null&&!jt.done;xt++,jt=z.next()){yt.index>xt?(Te=yt,yt=null):Te=yt.sibling;var On=B(_,yt,jt.value,q);if(On===null){yt===null&&(yt=Te);break}t&&yt&&On.alternate===null&&e(_,yt),E=r(On,E,xt),Ut===null?mt=On:Ut.sibling=On,Ut=On,yt=Te}if(jt.done)return a(_,yt),Xt&&Vn(_,xt),mt;if(yt===null){for(;!jt.done;xt++,jt=z.next())jt=j(_,jt.value,q),jt!==null&&(E=r(jt,E,xt),Ut===null?mt=jt:Ut.sibling=jt,Ut=jt);return Xt&&Vn(_,xt),mt}for(yt=n(yt);!jt.done;xt++,jt=z.next())jt=U(yt,_,xt,jt.value,q),jt!==null&&(t&&jt.alternate!==null&&yt.delete(jt.key===null?xt:jt.key),E=r(jt,E,xt),Ut===null?mt=jt:Ut.sibling=jt,Ut=jt);return t&&yt.forEach(function(fg){return e(_,fg)}),Xt&&Vn(_,xt),mt}function Pt(_,E,z,q){if(typeof z=="object"&&z!==null&&z.type===P&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case C:t:{for(var mt=z.key;E!==null;){if(E.key===mt){if(mt=z.type,mt===P){if(E.tag===7){a(_,E.sibling),q=u(E,z.props.children),q.return=_,_=q;break t}}else if(E.elementType===mt||typeof mt=="object"&&mt!==null&&mt.$$typeof===pt&&kd(mt)===E.type){a(_,E.sibling),q=u(E,z.props),Lu(q,z),q.return=_,_=q;break t}a(_,E);break}else e(_,E);E=E.sibling}z.type===P?(q=jn(z.props.children,_.mode,q,z.key),q.return=_,_=q):(q=Yr(z.type,z.key,z.props,null,_.mode,q),Lu(q,z),q.return=_,_=q)}return f(_);case Z:t:{for(mt=z.key;E!==null;){if(E.key===mt)if(E.tag===4&&E.stateNode.containerInfo===z.containerInfo&&E.stateNode.implementation===z.implementation){a(_,E.sibling),q=u(E,z.children||[]),q.return=_,_=q;break t}else{a(_,E);break}else e(_,E);E=E.sibling}q=Bo(z,_.mode,q),q.return=_,_=q}return f(_);case pt:return mt=z._init,z=mt(z._payload),Pt(_,E,z,q)}if(Ot(z))return Tt(_,E,z,q);if(bt(z)){if(mt=bt(z),typeof mt!="function")throw Error(o(150));return z=mt.call(z),At(_,E,z,q)}if(typeof z.then=="function")return Pt(_,E,ni(z),q);if(z.$$typeof===lt)return Pt(_,E,jr(_,z),q);li(_,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,E!==null&&E.tag===6?(a(_,E.sibling),q=u(E,z),q.return=_,_=q):(a(_,E),q=Co(z,_.mode,q),q.return=_,_=q),f(_)):a(_,E)}return function(_,E,z,q){try{Hu=0;var mt=Pt(_,E,z,q);return Ol=null,mt}catch(yt){if(yt===Ru||yt===Vr)throw yt;var Ut=Ke(29,yt,null,_.mode);return Ut.lanes=q,Ut.return=_,Ut}finally{}}}var zl=Yd(!0),Qd=Yd(!1),ra=k(null),Ea=null;function pn(t){var e=t.alternate;G(Ae,Ae.current&1),G(ra,t),Ea===null&&(e===null||wl.current!==null||e.memoizedState!==null)&&(Ea=t)}function qd(t){if(t.tag===22){if(G(Ae,Ae.current),G(ra,t),Ea===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ea=t)}}else vn()}function vn(){G(Ae,Ae.current),G(ra,ra.current)}function Qa(t){ut(ra),Ea===t&&(Ea=null),ut(Ae)}var Ae=k(0);function ui(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||af(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function hc(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:O({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pc={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=Fe(),u=sn(n);u.payload=e,a!=null&&(u.callback=a),e=dn(t,u,n),e!==null&&(Pe(e,t,n),zu(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=Fe(),u=sn(n);u.tag=1,u.payload=e,a!=null&&(u.callback=a),e=dn(t,u,n),e!==null&&(Pe(e,t,n),zu(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Fe(),n=sn(a);n.tag=2,e!=null&&(n.callback=e),e=dn(t,n,a),e!==null&&(Pe(e,t,a),zu(e,t,a))}};function Gd(t,e,a,n,u,r,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,r,f):e.prototype&&e.prototype.isPureReactComponent?!Au(a,n)||!Au(u,r):!0}function jd(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function Pn(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=O({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var ri=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Xd(t){ri(t)}function Vd(t){console.error(t)}function Zd(t){ri(t)}function ii(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function Kd(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vc(t,e,a){return a=sn(a),a.tag=3,a.payload={element:null},a.callback=function(){ii(t,e)},a}function Jd(t){return t=sn(t),t.tag=3,t}function Id(t,e,a,n){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var r=n.value;t.payload=function(){return u(r)},t.callback=function(){Kd(e,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){Kd(e,a,n),typeof u!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function fm(t,e,a,n,u){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&wu(e,a,u,!0),a=ra.current,a!==null){switch(a.tag){case 13:return Ea===null?kc():a.alternate===null&&fe===0&&(fe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,n===jo?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Qc(t,n,u)),!1;case 22:return a.flags|=65536,n===jo?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Qc(t,n,u)),!1}throw Error(o(435,a.tag))}return Qc(t,n,u),kc(),!1}if(Xt)return e=ra.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,n!==Ho&&(t=Error(o(422),{cause:n}),Tu(aa(t,a)))):(n!==Ho&&(e=Error(o(423),{cause:n}),Tu(aa(e,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,n=aa(n,a),u=vc(t.stateNode,n,u),Zo(t,u),fe!==4&&(fe=2)),!1;var r=Error(o(520),{cause:n});if(r=aa(r,a),Xu===null?Xu=[r]:Xu.push(r),fe!==4&&(fe=2),e===null)return!0;n=aa(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=vc(a.stateNode,n,t),Zo(a,t),!1;case 1:if(e=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Jd(u),Id(u,t,a,n),Zo(a,u),!1}a=a.return}while(a!==null);return!1}var Wd=Error(o(461)),xe=!1;function _e(t,e,a,n){e.child=t===null?Qd(e,null,a,n):zl(e,t.child,a,n)}function Fd(t,e,a,n,u){a=a.render;var r=e.ref;if("ref"in n){var f={};for(var s in n)s!=="ref"&&(f[s]=n[s])}else f=n;return In(e),n=Fo(t,e,a,f,r,u),s=Po(),t!==null&&!xe?(tc(t,e,u),qa(t,e,u)):(Xt&&s&&Uo(e),e.flags|=1,_e(t,e,n,u),e.child)}function Pd(t,e,a,n,u){if(t===null){var r=a.type;return typeof r=="function"&&!No(r)&&r.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=r,th(t,e,r,n,u)):(t=Yr(a.type,null,n,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!Ec(t,u)){var f=r.memoizedProps;if(a=a.compare,a=a!==null?a:Au,a(f,n)&&t.ref===e.ref)return qa(t,e,u)}return e.flags|=1,t=Ua(r,n),t.ref=e.ref,t.return=e,e.child=t}function th(t,e,a,n,u){if(t!==null){var r=t.memoizedProps;if(Au(r,n)&&t.ref===e.ref)if(xe=!1,e.pendingProps=n=r,Ec(t,u))(t.flags&131072)!==0&&(xe=!0);else return e.lanes=t.lanes,qa(t,e,u)}return mc(t,e,a,n,u)}function eh(t,e,a){var n=e.pendingProps,u=n.children,r=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,t!==null){for(u=e.child=t.child,r=0;u!==null;)r=r|u.lanes|u.childLanes,u=u.sibling;e.childLanes=r&~n}else e.childLanes=0,e.child=null;return ah(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Xr(e,r!==null?r.cachePool:null),r!==null?td(e,r):Jo(),qd(e);else return e.lanes=e.childLanes=536870912,ah(t,e,r!==null?r.baseLanes|a:a,a)}else r!==null?(Xr(e,r.cachePool),td(e,r),vn(),e.memoizedState=null):(t!==null&&Xr(e,null),Jo(),vn());return _e(t,e,u,a),e.child}function ah(t,e,a,n){var u=Go();return u=u===null?null:{parent:be._currentValue,pool:u},e.memoizedState={baseLanes:a,cachePool:u},t!==null&&Xr(e,null),Jo(),qd(e),t!==null&&wu(t,e,n,!0),null}function oi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function mc(t,e,a,n,u){return In(e),a=Fo(t,e,a,n,void 0,u),n=Po(),t!==null&&!xe?(tc(t,e,u),qa(t,e,u)):(Xt&&n&&Uo(e),e.flags|=1,_e(t,e,a,u),e.child)}function nh(t,e,a,n,u,r){return In(e),e.updateQueue=null,a=ad(e,n,a,u),ed(t),n=Po(),t!==null&&!xe?(tc(t,e,r),qa(t,e,r)):(Xt&&n&&Uo(e),e.flags|=1,_e(t,e,a,r),e.child)}function lh(t,e,a,n,u){if(In(e),e.stateNode===null){var r=Al,f=a.contextType;typeof f=="object"&&f!==null&&(r=Ue(f)),r=new a(n,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=pc,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=n,r.state=e.memoizedState,r.refs={},Xo(e),f=a.contextType,r.context=typeof f=="object"&&f!==null?Ue(f):Al,r.state=e.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(hc(e,a,f,n),r.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&pc.enqueueReplaceState(r,r.state,null),Nu(e,n,r,u),Mu(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){r=e.stateNode;var s=e.memoizedProps,g=Pn(a,s);r.props=g;var M=r.context,Y=a.contextType;f=Al,typeof Y=="object"&&Y!==null&&(f=Ue(Y));var j=a.getDerivedStateFromProps;Y=typeof j=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,Y||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||M!==f)&&jd(e,r,n,f),fn=!1;var B=e.memoizedState;r.state=B,Nu(e,n,r,u),Mu(),M=e.memoizedState,s||B!==M||fn?(typeof j=="function"&&(hc(e,a,j,n),M=e.memoizedState),(g=fn||Gd(e,a,g,n,B,M,f))?(Y||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=M),r.props=n,r.state=M,r.context=f,n=g):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{r=e.stateNode,Vo(t,e),f=e.memoizedProps,Y=Pn(a,f),r.props=Y,j=e.pendingProps,B=r.context,M=a.contextType,g=Al,typeof M=="object"&&M!==null&&(g=Ue(M)),s=a.getDerivedStateFromProps,(M=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==j||B!==g)&&jd(e,r,n,g),fn=!1,B=e.memoizedState,r.state=B,Nu(e,n,r,u),Mu();var U=e.memoizedState;f!==j||B!==U||fn||t!==null&&t.dependencies!==null&&Gr(t.dependencies)?(typeof s=="function"&&(hc(e,a,s,n),U=e.memoizedState),(Y=fn||Gd(e,a,Y,n,B,U,g)||t!==null&&t.dependencies!==null&&Gr(t.dependencies))?(M||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,U,g),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,U,g)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===t.memoizedProps&&B===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&B===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=U),r.props=n,r.state=U,r.context=g,n=Y):(typeof r.componentDidUpdate!="function"||f===t.memoizedProps&&B===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&B===t.memoizedState||(e.flags|=1024),n=!1)}return r=n,oi(t,e),n=(e.flags&128)!==0,r||n?(r=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&n?(e.child=zl(e,t.child,null,u),e.child=zl(e,null,a,u)):_e(t,e,a,u),e.memoizedState=r.state,t=e.child):t=qa(t,e,u),t}function uh(t,e,a,n){return Eu(),e.flags|=256,_e(t,e,a,n),e.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(t){return{baseLanes:t,cachePool:Vs()}}function bc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=ia),t}function rh(t,e,a){var n=e.pendingProps,u=!1,r=(e.flags&128)!==0,f;if((f=r)||(f=t!==null&&t.memoizedState===null?!1:(Ae.current&2)!==0),f&&(u=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(Xt){if(u?pn(e):vn(),Xt){var s=ce,g;if(g=s){t:{for(g=s,s=xa;g.nodeType!==8;){if(!s){s=null;break t}if(g=va(g.nextSibling),g===null){s=null;break t}}s=g}s!==null?(e.memoizedState={dehydrated:s,treeContext:Xn!==null?{id:$a,overflow:Ha}:null,retryLane:536870912,hydrationErrors:null},g=Ke(18,null,null,0),g.stateNode=s,g.return=e,e.child=g,Ye=e,ce=null,g=!0):g=!1}g||Kn(e)}if(s=e.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return af(s)?e.lanes=32:e.lanes=536870912,null;Qa(e)}return s=n.children,n=n.fallback,u?(vn(),u=e.mode,s=ci({mode:"hidden",children:s},u),n=jn(n,u,a,null),s.return=e,n.return=e,s.sibling=n,e.child=s,u=e.child,u.memoizedState=yc(a),u.childLanes=bc(t,f,a),e.memoizedState=gc,n):(pn(e),Ac(e,s))}if(g=t.memoizedState,g!==null&&(s=g.dehydrated,s!==null)){if(r)e.flags&256?(pn(e),e.flags&=-257,e=Sc(t,e,a)):e.memoizedState!==null?(vn(),e.child=t.child,e.flags|=128,e=null):(vn(),u=n.fallback,s=e.mode,n=ci({mode:"visible",children:n.children},s),u=jn(u,s,a,null),u.flags|=2,n.return=e,u.return=e,n.sibling=u,e.child=n,zl(e,t.child,null,a),n=e.child,n.memoizedState=yc(a),n.childLanes=bc(t,f,a),e.memoizedState=gc,e=u);else if(pn(e),af(s)){if(f=s.nextSibling&&s.nextSibling.dataset,f)var M=f.dgst;f=M,n=Error(o(419)),n.stack="",n.digest=f,Tu({value:n,source:null,stack:null}),e=Sc(t,e,a)}else if(xe||wu(t,e,a,!1),f=(a&t.childLanes)!==0,xe||f){if(f=ae,f!==null&&(n=a&-a,n=(n&42)!==0?1:lu(n),n=(n&(f.suspendedLanes|a))!==0?0:n,n!==0&&n!==g.retryLane))throw g.retryLane=n,bl(t,n),Pe(f,t,n),Wd;s.data==="$?"||kc(),e=Sc(t,e,a)}else s.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=g.treeContext,ce=va(s.nextSibling),Ye=e,Xt=!0,Zn=null,xa=!1,t!==null&&(la[ua++]=$a,la[ua++]=Ha,la[ua++]=Xn,$a=t.id,Ha=t.overflow,Xn=e),e=Ac(e,n.children),e.flags|=4096);return e}return u?(vn(),u=n.fallback,s=e.mode,g=t.child,M=g.sibling,n=Ua(g,{mode:"hidden",children:n.children}),n.subtreeFlags=g.subtreeFlags&65011712,M!==null?u=Ua(M,u):(u=jn(u,s,a,null),u.flags|=2),u.return=e,n.return=e,n.sibling=u,e.child=n,n=u,u=e.child,s=t.child.memoizedState,s===null?s=yc(a):(g=s.cachePool,g!==null?(M=be._currentValue,g=g.parent!==M?{parent:M,pool:M}:g):g=Vs(),s={baseLanes:s.baseLanes|a,cachePool:g}),u.memoizedState=s,u.childLanes=bc(t,f,a),e.memoizedState=gc,n):(pn(e),a=t.child,t=a.sibling,a=Ua(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=a,e.memoizedState=null,a)}function Ac(t,e){return e=ci({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ci(t,e){return t=Ke(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Sc(t,e,a){return zl(e,t.child,null,a),t=Ac(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ih(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),ko(t.return,e,a)}function xc(t,e,a,n,u){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:u}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=u)}function oh(t,e,a){var n=e.pendingProps,u=n.revealOrder,r=n.tail;if(_e(t,e,n.children,a),n=Ae.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ih(t,a,e);else if(t.tag===19)ih(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(G(Ae,n),u){case"forwards":for(a=e.child,u=null;a!==null;)t=a.alternate,t!==null&&ui(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=e.child,e.child=null):(u=a.sibling,a.sibling=null),xc(e,!1,u,a,r);break;case"backwards":for(a=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&ui(t)===null){e.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}xc(e,!0,a,null,r);break;case"together":xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qa(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),An|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(wu(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=Ua(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ua(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Ec(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Gr(t)))}function sm(t,e,a){switch(e.tag){case 3:Dt(e,e.stateNode.containerInfo),cn(e,be,t.memoizedState.cache),Eu();break;case 27:case 5:wt(e);break;case 4:Dt(e,e.stateNode.containerInfo);break;case 10:cn(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(pn(e),e.flags|=128,null):(a&e.child.childLanes)!==0?rh(t,e,a):(pn(e),t=qa(t,e,a),t!==null?t.sibling:null);pn(e);break;case 19:var u=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(wu(t,e,a,!1),n=(a&e.childLanes)!==0),u){if(n)return oh(t,e,a);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),G(Ae,Ae.current),n)break;return null;case 22:case 23:return e.lanes=0,eh(t,e,a);case 24:cn(e,be,t.memoizedState.cache)}return qa(t,e,a)}function ch(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)xe=!0;else{if(!Ec(t,a)&&(e.flags&128)===0)return xe=!1,sm(t,e,a);xe=(t.flags&131072)!==0}else xe=!1,Xt&&(e.flags&1048576)!==0&&ks(e,qr,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,u=n._init;if(n=u(n._payload),e.type=n,typeof n=="function")No(n)?(t=Pn(n,t),e.tag=1,e=lh(null,e,n,t,a)):(e.tag=0,e=mc(null,e,n,t,a));else{if(n!=null){if(u=n.$$typeof,u===st){e.tag=11,e=Fd(null,e,n,t,a);break t}else if(u===X){e.tag=14,e=Pd(null,e,n,t,a);break t}}throw e=Qt(n)||n,Error(o(306,e,""))}}return e;case 0:return mc(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,u=Pn(n,e.pendingProps),lh(t,e,n,u,a);case 3:t:{if(Dt(e,e.stateNode.containerInfo),t===null)throw Error(o(387));n=e.pendingProps;var r=e.memoizedState;u=r.element,Vo(t,e),Nu(e,n,null,a);var f=e.memoizedState;if(n=f.cache,cn(e,be,n),n!==r.cache&&Yo(e,[be],a,!0),Mu(),n=f.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=uh(t,e,n,a);break t}else if(n!==u){u=aa(Error(o(424)),e),Tu(u),e=uh(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ce=va(t.firstChild),Ye=e,Xt=!0,Zn=null,xa=!0,a=Qd(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Eu(),n===u){e=qa(t,e,a);break t}_e(t,e,n,a)}e=e.child}return e;case 26:return oi(t,e),t===null?(a=hp(e.type,null,e.pendingProps,null))?e.memoizedState=a:Xt||(a=e.type,t=e.pendingProps,n=Ei(ct.current).createElement(a),n[Se]=e,n[Be]=t,Oe(n,a,t),pe(n),e.stateNode=n):e.memoizedState=hp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return wt(e),t===null&&Xt&&(n=e.stateNode=fp(e.type,e.pendingProps,ct.current),Ye=e,xa=!0,u=ce,Tn(e.type)?(nf=u,ce=va(n.firstChild)):ce=u),_e(t,e,e.pendingProps.children,a),oi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Xt&&((u=n=ce)&&(n=km(n,e.type,e.pendingProps,xa),n!==null?(e.stateNode=n,Ye=e,ce=va(n.firstChild),xa=!1,u=!0):u=!1),u||Kn(e)),wt(e),u=e.type,r=e.pendingProps,f=t!==null?t.memoizedProps:null,n=r.children,Pc(u,r)?n=null:f!==null&&Pc(u,f)&&(e.flags|=32),e.memoizedState!==null&&(u=Fo(t,e,nm,null,null,a),tr._currentValue=u),oi(t,e),_e(t,e,n,a),e.child;case 6:return t===null&&Xt&&((t=a=ce)&&(a=Ym(a,e.pendingProps,xa),a!==null?(e.stateNode=a,Ye=e,ce=null,t=!0):t=!1),t||Kn(e)),null;case 13:return rh(t,e,a);case 4:return Dt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=zl(e,null,n,a):_e(t,e,n,a),e.child;case 11:return Fd(t,e,e.type,e.pendingProps,a);case 7:return _e(t,e,e.pendingProps,a),e.child;case 8:return _e(t,e,e.pendingProps.children,a),e.child;case 12:return _e(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,cn(e,e.type,n.value),_e(t,e,n.children,a),e.child;case 9:return u=e.type._context,n=e.pendingProps.children,In(e),u=Ue(u),n=n(u),e.flags|=1,_e(t,e,n,a),e.child;case 14:return Pd(t,e,e.type,e.pendingProps,a);case 15:return th(t,e,e.type,e.pendingProps,a);case 19:return oh(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=ci(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=Ua(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return eh(t,e,a);case 24:return In(e),n=Ue(be),t===null?(u=Go(),u===null&&(u=ae,r=Qo(),u.pooledCache=r,r.refCount++,r!==null&&(u.pooledCacheLanes|=a),u=r),e.memoizedState={parent:n,cache:u},Xo(e),cn(e,be,u)):((t.lanes&a)!==0&&(Vo(t,e),Nu(e,null,null,a),Mu()),u=t.memoizedState,r=e.memoizedState,u.parent!==n?(u={parent:n,cache:n},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),cn(e,be,n)):(n=r.cache,cn(e,be,n),n!==u.cache&&Yo(e,[be],a,!0))),_e(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Ga(t){t.flags|=4}function fh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!yp(e)){if(e=ra.current,e!==null&&((Yt&4194048)===Yt?Ea!==null:(Yt&62914560)!==Yt&&(Yt&536870912)===0||e!==Ea))throw Ou=jo,Zs;t.flags|=8192}}function fi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?sa():536870912,t.lanes|=e,Bl|=e)}function ku(t,e){if(!Xt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,n|=u.subtreeFlags&65011712,n|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,n|=u.subtreeFlags,n|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function dm(t,e,a){var n=e.pendingProps;switch($o(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(e),null;case 1:return oe(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ka(be),W(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(xu(e)?Ga(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qs())),oe(e),null;case 26:return a=e.memoizedState,t===null?(Ga(e),a!==null?(oe(e),fh(e,a)):(oe(e),e.flags&=-16777217)):a?a!==t.memoizedState?(Ga(e),oe(e),fh(e,a)):(oe(e),e.flags&=-16777217):(t.memoizedProps!==n&&Ga(e),oe(e),e.flags&=-16777217),null;case 27:Rt(e),a=ct.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Ga(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return oe(e),null}t=nt.current,xu(e)?Ys(e):(t=fp(u,n,a),e.stateNode=t,Ga(e))}return oe(e),null;case 5:if(Rt(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Ga(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return oe(e),null}if(t=nt.current,xu(e))Ys(e);else{switch(u=Ei(ct.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?u.createElement("select",{is:n.is}):u.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?u.createElement(a,{is:n.is}):u.createElement(a)}}t[Se]=e,t[Be]=n;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(Oe(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ga(e)}}return oe(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Ga(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(o(166));if(t=ct.current,xu(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,u=Ye,u!==null)switch(u.tag){case 27:case 5:n=u.memoizedProps}t[Se]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||np(t.nodeValue,a)),t||Kn(e)}else t=Ei(t).createTextNode(n),t[Se]=e,e.stateNode=t}return oe(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=xu(e),n!==null&&n.dehydrated!==null){if(t===null){if(!u)throw Error(o(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[Se]=e}else Eu(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;oe(e),u=!1}else u=qs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(Qa(e),e):(Qa(e),null)}if(Qa(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,u=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(u=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==u&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),fi(e,e.updateQueue),oe(e),null;case 4:return W(),t===null&&Kc(e.stateNode.containerInfo),oe(e),null;case 10:return ka(e.type),oe(e),null;case 19:if(ut(Ae),u=e.memoizedState,u===null)return oe(e),null;if(n=(e.flags&128)!==0,r=u.rendering,r===null)if(n)ku(u,!1);else{if(fe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(r=ui(t),r!==null){for(e.flags|=128,ku(u,!1),t=r.updateQueue,e.updateQueue=t,fi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Ls(a,t),a=a.sibling;return G(Ae,Ae.current&1|2),e.child}t=t.sibling}u.tail!==null&&re()>hi&&(e.flags|=128,n=!0,ku(u,!1),e.lanes=4194304)}else{if(!n)if(t=ui(r),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,fi(e,t),ku(u,!0),u.tail===null&&u.tailMode==="hidden"&&!r.alternate&&!Xt)return oe(e),null}else 2*re()-u.renderingStartTime>hi&&a!==536870912&&(e.flags|=128,n=!0,ku(u,!1),e.lanes=4194304);u.isBackwards?(r.sibling=e.child,e.child=r):(t=u.last,t!==null?t.sibling=r:e.child=r,u.last=r)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=re(),e.sibling=null,t=Ae.current,G(Ae,n?t&1|2:t&1),e):(oe(e),null);case 22:case 23:return Qa(e),Io(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(oe(e),e.subtreeFlags&6&&(e.flags|=8192)):oe(e),a=e.updateQueue,a!==null&&fi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&ut(Wn),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ka(be),oe(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function hm(t,e){switch($o(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ka(be),W(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Rt(e),null;case 13:if(Qa(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Eu()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(Ae),null;case 4:return W(),null;case 10:return ka(e.type),null;case 22:case 23:return Qa(e),Io(),t!==null&&ut(Wn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ka(be),null;case 25:return null;default:return null}}function sh(t,e){switch($o(e),e.tag){case 3:ka(be),W();break;case 26:case 27:case 5:Rt(e);break;case 4:W();break;case 13:Qa(e);break;case 19:ut(Ae);break;case 10:ka(e.type);break;case 22:case 23:Qa(e),Io(),t!==null&&ut(Wn);break;case 24:ka(be)}}function Yu(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&t)===t){n=void 0;var r=a.create,f=a.inst;n=r(),f.destroy=n}a=a.next}while(a!==u)}}catch(s){ee(e,e.return,s)}}function mn(t,e,a){try{var n=e.updateQueue,u=n!==null?n.lastEffect:null;if(u!==null){var r=u.next;n=r;do{if((n.tag&t)===t){var f=n.inst,s=f.destroy;if(s!==void 0){f.destroy=void 0,u=e;var g=a,M=s;try{M()}catch(Y){ee(u,g,Y)}}}n=n.next}while(n!==r)}}catch(Y){ee(e,e.return,Y)}}function dh(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Ps(e,a)}catch(n){ee(t,t.return,n)}}}function hh(t,e,a){a.props=Pn(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){ee(t,e,n)}}function Qu(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(u){ee(t,e,u)}}function Ta(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(u){ee(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ee(t,e,u)}else a.current=null}function ph(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(u){ee(t,t.return,u)}}function Tc(t,e,a){try{var n=t.stateNode;Bm(n,t.type,a,e),n[Be]=e}catch(u){ee(t,t.return,u)}}function vh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Tn(t.type)||t.tag===4}function wc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||vh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Tn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dc(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=xi));else if(n!==4&&(n===27&&Tn(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Dc(t,e,a),t=t.sibling;t!==null;)Dc(t,e,a),t=t.sibling}function si(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&Tn(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(si(t,e,a),t=t.sibling;t!==null;)si(t,e,a),t=t.sibling}function mh(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);Oe(e,n,a),e[Se]=t,e[Be]=a}catch(r){ee(t,t.return,r)}}var ja=!1,he=!1,_c=!1,gh=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function pm(t,e){if(t=t.containerInfo,Wc=Oi,t=Rs(t),wo(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var u=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break t}var f=0,s=-1,g=-1,M=0,Y=0,j=t,B=null;e:for(;;){for(var U;j!==a||u!==0&&j.nodeType!==3||(s=f+u),j!==r||n!==0&&j.nodeType!==3||(g=f+n),j.nodeType===3&&(f+=j.nodeValue.length),(U=j.firstChild)!==null;)B=j,j=U;for(;;){if(j===t)break e;if(B===a&&++M===u&&(s=f),B===r&&++Y===n&&(g=f),(U=j.nextSibling)!==null)break;j=B,B=j.parentNode}j=U}a=s===-1||g===-1?null:{start:s,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:t,selectionRange:a},Oi=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){switch(e=Ee,r=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&r!==null){t=void 0,a=e,u=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var Tt=Pn(a.type,u,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(Tt,r),n.__reactInternalSnapshotBeforeUpdate=t}catch(At){ee(a,a.return,At)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)ef(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ef(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function yh(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:gn(t,a),n&4&&Yu(5,a);break;case 1:if(gn(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(f){ee(a,a.return,f)}else{var u=Pn(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){ee(a,a.return,f)}}n&64&&dh(a),n&512&&Qu(a,a.return);break;case 3:if(gn(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Ps(t,e)}catch(f){ee(a,a.return,f)}}break;case 27:e===null&&n&4&&mh(a);case 26:case 5:gn(t,a),e===null&&n&4&&ph(a),n&512&&Qu(a,a.return);break;case 12:gn(t,a);break;case 13:gn(t,a),n&4&&Sh(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Em.bind(null,a),Qm(t,a))));break;case 22:if(n=a.memoizedState!==null||ja,!n){e=e!==null&&e.memoizedState!==null||he,u=ja;var r=he;ja=n,(he=e)&&!r?yn(t,a,(a.subtreeFlags&8772)!==0):gn(t,a),ja=u,he=r}break;case 30:break;default:gn(t,a)}}function bh(t){var e=t.alternate;e!==null&&(t.alternate=null,bh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ru(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var le=null,Xe=!1;function Xa(t,e,a){for(a=a.child;a!==null;)Ah(t,e,a),a=a.sibling}function Ah(t,e,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(Wa,a)}catch{}switch(a.tag){case 26:he||Ta(a,e),Xa(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:he||Ta(a,e);var n=le,u=Xe;Tn(a.type)&&(le=a.stateNode,Xe=!1),Xa(t,e,a),Iu(a.stateNode),le=n,Xe=u;break;case 5:he||Ta(a,e);case 6:if(n=le,u=Xe,le=null,Xa(t,e,a),le=n,Xe=u,le!==null)if(Xe)try{(le.nodeType===9?le.body:le.nodeName==="HTML"?le.ownerDocument.body:le).removeChild(a.stateNode)}catch(r){ee(a,e,r)}else try{le.removeChild(a.stateNode)}catch(r){ee(a,e,r)}break;case 18:le!==null&&(Xe?(t=le,op(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),lr(t)):op(le,a.stateNode));break;case 4:n=le,u=Xe,le=a.stateNode.containerInfo,Xe=!0,Xa(t,e,a),le=n,Xe=u;break;case 0:case 11:case 14:case 15:he||mn(2,a,e),he||mn(4,a,e),Xa(t,e,a);break;case 1:he||(Ta(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&hh(a,e,n)),Xa(t,e,a);break;case 21:Xa(t,e,a);break;case 22:he=(n=he)||a.memoizedState!==null,Xa(t,e,a),he=n;break;default:Xa(t,e,a)}}function Sh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{lr(t)}catch(a){ee(e,e.return,a)}}function vm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new gh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new gh),e;default:throw Error(o(435,t.tag))}}function Rc(t,e){var a=vm(t);e.forEach(function(n){var u=Tm.bind(null,t,n);a.has(n)||(a.add(n),n.then(u,u))})}function Je(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var u=a[n],r=t,f=e,s=f;t:for(;s!==null;){switch(s.tag){case 27:if(Tn(s.type)){le=s.stateNode,Xe=!1;break t}break;case 5:le=s.stateNode,Xe=!1;break t;case 3:case 4:le=s.stateNode.containerInfo,Xe=!0;break t}s=s.return}if(le===null)throw Error(o(160));Ah(r,f,u),le=null,Xe=!1,r=u.alternate,r!==null&&(r.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)xh(e,t),e=e.sibling}var pa=null;function xh(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Je(e,t),Ie(t),n&4&&(mn(3,t,t.return),Yu(3,t),mn(5,t,t.return));break;case 1:Je(e,t),Ie(t),n&512&&(he||a===null||Ta(a,a.return)),n&64&&ja&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var u=pa;if(Je(e,t),Ie(t),n&512&&(he||a===null||Ta(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[$n]||r[Se]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Oe(r,n,a),r[Se]=t,pe(r),n=r;break t;case"link":var f=mp("link","href",u).get(n+(a.href||""));if(f){for(var s=0;s<f.length;s++)if(r=f[s],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(s,1);break e}}r=u.createElement(n),Oe(r,n,a),u.head.appendChild(r);break;case"meta":if(f=mp("meta","content",u).get(n+(a.content||""))){for(s=0;s<f.length;s++)if(r=f[s],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(s,1);break e}}r=u.createElement(n),Oe(r,n,a),u.head.appendChild(r);break;default:throw Error(o(468,n))}r[Se]=t,pe(r),n=r}t.stateNode=n}else gp(u,t.type,t.stateNode);else t.stateNode=vp(u,n,t.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?gp(u,t.type,t.stateNode):vp(u,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Tc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Je(e,t),Ie(t),n&512&&(he||a===null||Ta(a,a.return)),a!==null&&n&4&&Tc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Je(e,t),Ie(t),n&512&&(he||a===null||Ta(a,a.return)),t.flags&32){u=t.stateNode;try{te(u,"")}catch(U){ee(t,t.return,U)}}n&4&&t.stateNode!=null&&(u=t.memoizedProps,Tc(t,u,a!==null?a.memoizedProps:u)),n&1024&&(_c=!0);break;case 6:if(Je(e,t),Ie(t),n&4){if(t.stateNode===null)throw Error(o(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(U){ee(t,t.return,U)}}break;case 3:if(Di=null,u=pa,pa=Ti(e.containerInfo),Je(e,t),pa=u,Ie(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{lr(e.containerInfo)}catch(U){ee(t,t.return,U)}_c&&(_c=!1,Eh(t));break;case 4:n=pa,pa=Ti(t.stateNode.containerInfo),Je(e,t),Ie(t),pa=n;break;case 12:Je(e,t),Ie(t);break;case 13:Je(e,t),Ie(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bc=re()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Rc(t,n)));break;case 22:u=t.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,M=ja,Y=he;if(ja=M||u,he=Y||g,Je(e,t),he=Y,ja=M,Ie(t),n&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(a===null||g||ja||he||tl(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){g=a=e;try{if(r=g.stateNode,u)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{s=g.stateNode;var j=g.memoizedProps.style,B=j!=null&&j.hasOwnProperty("display")?j.display:null;s.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(U){ee(g,g.return,U)}}}else if(e.tag===6){if(a===null){g=e;try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(U){ee(g,g.return,U)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Rc(t,a))));break;case 19:Je(e,t),Ie(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Rc(t,n)));break;case 30:break;case 21:break;default:Je(e,t),Ie(t)}}function Ie(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(vh(n)){a=n;break}n=n.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var u=a.stateNode,r=wc(t);si(t,r,u);break;case 5:var f=a.stateNode;a.flags&32&&(te(f,""),a.flags&=-33);var s=wc(t);si(t,s,f);break;case 3:case 4:var g=a.stateNode.containerInfo,M=wc(t);Dc(t,M,g);break;default:throw Error(o(161))}}catch(Y){ee(t,t.return,Y)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Eh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Eh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function gn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)yh(t,e.alternate,e),e=e.sibling}function tl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:mn(4,e,e.return),tl(e);break;case 1:Ta(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&hh(e,e.return,a),tl(e);break;case 27:Iu(e.stateNode);case 26:case 5:Ta(e,e.return),tl(e);break;case 22:e.memoizedState===null&&tl(e);break;case 30:tl(e);break;default:tl(e)}t=t.sibling}}function yn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,u=t,r=e,f=r.flags;switch(r.tag){case 0:case 11:case 15:yn(u,r,a),Yu(4,r);break;case 1:if(yn(u,r,a),n=r,u=n.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(M){ee(n,n.return,M)}if(n=r,u=n.updateQueue,u!==null){var s=n.stateNode;try{var g=u.shared.hiddenCallbacks;if(g!==null)for(u.shared.hiddenCallbacks=null,u=0;u<g.length;u++)Fs(g[u],s)}catch(M){ee(n,n.return,M)}}a&&f&64&&dh(r),Qu(r,r.return);break;case 27:mh(r);case 26:case 5:yn(u,r,a),a&&n===null&&f&4&&ph(r),Qu(r,r.return);break;case 12:yn(u,r,a);break;case 13:yn(u,r,a),a&&f&4&&Sh(u,r);break;case 22:r.memoizedState===null&&yn(u,r,a),Qu(r,r.return);break;case 30:break;default:yn(u,r,a)}e=e.sibling}}function Oc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Du(a))}function zc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Du(t))}function wa(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Th(t,e,a,n),e=e.sibling}function Th(t,e,a,n){var u=e.flags;switch(e.tag){case 0:case 11:case 15:wa(t,e,a,n),u&2048&&Yu(9,e);break;case 1:wa(t,e,a,n);break;case 3:wa(t,e,a,n),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Du(t)));break;case 12:if(u&2048){wa(t,e,a,n),t=e.stateNode;try{var r=e.memoizedProps,f=r.id,s=r.onPostCommit;typeof s=="function"&&s(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){ee(e,e.return,g)}}else wa(t,e,a,n);break;case 13:wa(t,e,a,n);break;case 23:break;case 22:r=e.stateNode,f=e.alternate,e.memoizedState!==null?r._visibility&2?wa(t,e,a,n):qu(t,e):r._visibility&2?wa(t,e,a,n):(r._visibility|=2,Ml(t,e,a,n,(e.subtreeFlags&10256)!==0)),u&2048&&Oc(f,e);break;case 24:wa(t,e,a,n),u&2048&&zc(e.alternate,e);break;default:wa(t,e,a,n)}}function Ml(t,e,a,n,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=t,f=e,s=a,g=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Ml(r,f,s,g,u),Yu(8,f);break;case 23:break;case 22:var Y=f.stateNode;f.memoizedState!==null?Y._visibility&2?Ml(r,f,s,g,u):qu(r,f):(Y._visibility|=2,Ml(r,f,s,g,u)),u&&M&2048&&Oc(f.alternate,f);break;case 24:Ml(r,f,s,g,u),u&&M&2048&&zc(f.alternate,f);break;default:Ml(r,f,s,g,u)}e=e.sibling}}function qu(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,u=n.flags;switch(n.tag){case 22:qu(a,n),u&2048&&Oc(n.alternate,n);break;case 24:qu(a,n),u&2048&&zc(n.alternate,n);break;default:qu(a,n)}e=e.sibling}}var Gu=8192;function Nl(t){if(t.subtreeFlags&Gu)for(t=t.child;t!==null;)wh(t),t=t.sibling}function wh(t){switch(t.tag){case 26:Nl(t),t.flags&Gu&&t.memoizedState!==null&&tg(pa,t.memoizedState,t.memoizedProps);break;case 5:Nl(t);break;case 3:case 4:var e=pa;pa=Ti(t.stateNode.containerInfo),Nl(t),pa=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Gu,Gu=16777216,Nl(t),Gu=e):Nl(t));break;default:Nl(t)}}function Dh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ju(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Ee=n,Rh(n,t)}Dh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_h(t),t=t.sibling}function _h(t){switch(t.tag){case 0:case 11:case 15:ju(t),t.flags&2048&&mn(9,t,t.return);break;case 3:ju(t);break;case 12:ju(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,di(t)):ju(t);break;default:ju(t)}}function di(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];Ee=n,Rh(n,t)}Dh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:mn(8,e,e.return),di(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,di(e));break;default:di(e)}t=t.sibling}}function Rh(t,e){for(;Ee!==null;){var a=Ee;switch(a.tag){case 0:case 11:case 15:mn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Du(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ee=n;else t:for(a=t;Ee!==null;){n=Ee;var u=n.sibling,r=n.return;if(bh(n),n===a){Ee=null;break t}if(u!==null){u.return=r,Ee=u;break t}Ee=r}}}var mm={getCacheForType:function(t){var e=Ue(be),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},gm=typeof WeakMap=="function"?WeakMap:Map,Jt=0,ae=null,$t=null,Yt=0,It=0,We=null,bn=!1,Cl=!1,Mc=!1,Va=0,fe=0,An=0,el=0,Nc=0,ia=0,Bl=0,Xu=null,Ve=null,Cc=!1,Bc=0,hi=1/0,pi=null,Sn=null,Re=0,xn=null,Ul=null,$l=0,Uc=0,$c=null,Oh=null,Vu=0,Hc=null;function Fe(){if((Jt&2)!==0&&Yt!==0)return Yt&-Yt;if(H.T!==null){var t=El;return t!==0?t:jc()}return wr()}function zh(){ia===0&&(ia=(Yt&536870912)===0||Xt?Sr():536870912);var t=ra.current;return t!==null&&(t.flags|=32),ia}function Pe(t,e,a){(t===ae&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(Hl(t,0),En(t,Yt,ia,!1)),Un(t,a),((Jt&2)===0||t!==ae)&&(t===ae&&((Jt&2)===0&&(el|=a),fe===4&&En(t,Yt,ia,!1)),Da(t))}function Mh(t,e,a){if((Jt&6)!==0)throw Error(o(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||Ma(t,e),u=n?Am(t,e):Yc(t,e,!0),r=n;do{if(u===0){Cl&&!n&&En(t,e,0,!1);break}else{if(a=t.current.alternate,r&&!ym(a)){u=Yc(t,e,!1),r=!1;continue}if(u===2){if(r=e,t.errorRecoveryDisabledLanes&r)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var s=t;u=Xu;var g=s.current.memoizedState.isDehydrated;if(g&&(Hl(s,f).flags|=256),f=Yc(s,f,!1),f!==2){if(Mc&&!g){s.errorRecoveryDisabledLanes|=r,el|=r,u=4;break t}r=Ve,Ve=u,r!==null&&(Ve===null?Ve=r:Ve.push.apply(Ve,r))}u=f}if(r=!1,u!==2)continue}}if(u===1){Hl(t,0),En(t,e,0,!0);break}t:{switch(n=t,r=u,r){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:En(n,e,ia,!bn);break t;case 2:Ve=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(u=Bc+300-re(),10<u)){if(En(n,e,ia,!bn),sl(n,0,!0)!==0)break t;n.timeoutHandle=rp(Nh.bind(null,n,a,Ve,pi,Cc,e,ia,el,Bl,bn,r,2,-0,0),u);break t}Nh(n,a,Ve,pi,Cc,e,ia,el,Bl,bn,r,0,-0,0)}}break}while(!0);Da(t)}function Nh(t,e,a,n,u,r,f,s,g,M,Y,j,B,U){if(t.timeoutHandle=-1,j=e.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(Pu={stylesheets:null,count:0,unsuspend:Pm},wh(e),j=eg(),j!==null)){t.cancelPendingCommit=j(kh.bind(null,t,e,r,a,n,u,f,s,g,Y,1,B,U)),En(t,r,f,!M);return}kh(t,e,r,a,n,u,f,s,g)}function ym(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var u=a[n],r=u.getSnapshot;u=u.value;try{if(!Ze(r(),u))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function En(t,e,a,n){e&=~Nc,e&=~el,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var u=e;0<u;){var r=31-Ce(u),f=1<<r;n[r]=-1,u&=~f}a!==0&&Er(t,a,e)}function vi(){return(Jt&6)===0?(Zu(0),!1):!0}function Lc(){if($t!==null){if(It===0)var t=$t.return;else t=$t,La=Jn=null,ec(t),Ol=null,Hu=0,t=$t;for(;t!==null;)sh(t.alternate,t),t=t.return;$t=null}}function Hl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$m(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Lc(),ae=t,$t=a=Ua(t.current,null),Yt=e,It=0,We=null,bn=!1,Cl=Ma(t,e),Mc=!1,Bl=ia=Nc=el=An=fe=0,Ve=Xu=null,Cc=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var u=31-Ce(n),r=1<<u;e|=t[u],n&=~r}return Va=e,Hr(),a}function Ch(t,e){Ct=null,H.H=ai,e===Ru||e===Vr?(e=Is(),It=3):e===Zs?(e=Is(),It=4):It=e===Wd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,We=e,$t===null&&(fe=1,ii(t,aa(e,t.current)))}function Bh(){var t=H.H;return H.H=ai,t===null?ai:t}function Uh(){var t=H.A;return H.A=mm,t}function kc(){fe=4,bn||(Yt&4194048)!==Yt&&ra.current!==null||(Cl=!0),(An&134217727)===0&&(el&134217727)===0||ae===null||En(ae,Yt,ia,!1)}function Yc(t,e,a){var n=Jt;Jt|=2;var u=Bh(),r=Uh();(ae!==t||Yt!==e)&&(pi=null,Hl(t,e)),e=!1;var f=fe;t:do try{if(It!==0&&$t!==null){var s=$t,g=We;switch(It){case 8:Lc(),f=6;break t;case 3:case 2:case 9:case 6:ra.current===null&&(e=!0);var M=It;if(It=0,We=null,Ll(t,s,g,M),a&&Cl){f=0;break t}break;default:M=It,It=0,We=null,Ll(t,s,g,M)}}bm(),f=fe;break}catch(Y){Ch(t,Y)}while(!0);return e&&t.shellSuspendCounter++,La=Jn=null,Jt=n,H.H=u,H.A=r,$t===null&&(ae=null,Yt=0,Hr()),f}function bm(){for(;$t!==null;)$h($t)}function Am(t,e){var a=Jt;Jt|=2;var n=Bh(),u=Uh();ae!==t||Yt!==e?(pi=null,hi=re()+500,Hl(t,e)):Cl=Ma(t,e);t:do try{if(It!==0&&$t!==null){e=$t;var r=We;e:switch(It){case 1:It=0,We=null,Ll(t,e,r,1);break;case 2:case 9:if(Ks(r)){It=0,We=null,Hh(e);break}e=function(){It!==2&&It!==9||ae!==t||(It=7),Da(t)},r.then(e,e);break t;case 3:It=7;break t;case 4:It=5;break t;case 7:Ks(r)?(It=0,We=null,Hh(e)):(It=0,We=null,Ll(t,e,r,7));break;case 5:var f=null;switch($t.tag){case 26:f=$t.memoizedState;case 5:case 27:var s=$t;if(!f||yp(f)){It=0,We=null;var g=s.sibling;if(g!==null)$t=g;else{var M=s.return;M!==null?($t=M,mi(M)):$t=null}break e}}It=0,We=null,Ll(t,e,r,5);break;case 6:It=0,We=null,Ll(t,e,r,6);break;case 8:Lc(),fe=6;break t;default:throw Error(o(462))}}Sm();break}catch(Y){Ch(t,Y)}while(!0);return La=Jn=null,H.H=n,H.A=u,Jt=a,$t!==null?0:(ae=null,Yt=0,Hr(),fe)}function Sm(){for(;$t!==null&&!Zt();)$h($t)}function $h(t){var e=ch(t.alternate,t,Va);t.memoizedProps=t.pendingProps,e===null?mi(t):$t=e}function Hh(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=nh(a,e,e.pendingProps,e.type,void 0,Yt);break;case 11:e=nh(a,e,e.pendingProps,e.type.render,e.ref,Yt);break;case 5:ec(e);default:sh(a,e),e=$t=Ls(e,Va),e=ch(a,e,Va)}t.memoizedProps=t.pendingProps,e===null?mi(t):$t=e}function Ll(t,e,a,n){La=Jn=null,ec(e),Ol=null,Hu=0;var u=e.return;try{if(fm(t,u,e,a,Yt)){fe=1,ii(t,aa(a,t.current)),$t=null;return}}catch(r){if(u!==null)throw $t=u,r;fe=1,ii(t,aa(a,t.current)),$t=null;return}e.flags&32768?(Xt||n===1?t=!0:Cl||(Yt&536870912)!==0?t=!1:(bn=t=!0,(n===2||n===9||n===3||n===6)&&(n=ra.current,n!==null&&n.tag===13&&(n.flags|=16384))),Lh(e,t)):mi(e)}function mi(t){var e=t;do{if((e.flags&32768)!==0){Lh(e,bn);return}t=e.return;var a=dm(e.alternate,e,Va);if(a!==null){$t=a;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=t}while(e!==null);fe===0&&(fe=5)}function Lh(t,e){do{var a=hm(t.alternate,t);if(a!==null){a.flags&=32767,$t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){$t=t;return}$t=t=a}while(t!==null);fe=6,$t=null}function kh(t,e,a,n,u,r,f,s,g){t.cancelPendingCommit=null;do gi();while(Re!==0);if((Jt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(r=e.lanes|e.childLanes,r|=zo,xr(t,a,r,f,s,g),t===ae&&($t=ae=null,Yt=0),Ul=e,xn=t,$l=a,Uc=r,$c=u,Oh=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,wm(ea,function(){return jh(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=H.T,H.T=null,u=tt.p,tt.p=2,f=Jt,Jt|=4;try{pm(t,e,a)}finally{Jt=f,tt.p=u,H.T=n}}Re=1,Yh(),Qh(),qh()}}function Yh(){if(Re===1){Re=0;var t=xn,e=Ul,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var n=tt.p;tt.p=2;var u=Jt;Jt|=4;try{xh(e,t);var r=Fc,f=Rs(t.containerInfo),s=r.focusedElem,g=r.selectionRange;if(f!==s&&s&&s.ownerDocument&&_s(s.ownerDocument.documentElement,s)){if(g!==null&&wo(s)){var M=g.start,Y=g.end;if(Y===void 0&&(Y=M),"selectionStart"in s)s.selectionStart=M,s.selectionEnd=Math.min(Y,s.value.length);else{var j=s.ownerDocument||document,B=j&&j.defaultView||window;if(B.getSelection){var U=B.getSelection(),Tt=s.textContent.length,At=Math.min(g.start,Tt),Pt=g.end===void 0?At:Math.min(g.end,Tt);!U.extend&&At>Pt&&(f=Pt,Pt=At,At=f);var _=Ds(s,At),E=Ds(s,Pt);if(_&&E&&(U.rangeCount!==1||U.anchorNode!==_.node||U.anchorOffset!==_.offset||U.focusNode!==E.node||U.focusOffset!==E.offset)){var z=j.createRange();z.setStart(_.node,_.offset),U.removeAllRanges(),At>Pt?(U.addRange(z),U.extend(E.node,E.offset)):(z.setEnd(E.node,E.offset),U.addRange(z))}}}}for(j=[],U=s;U=U.parentNode;)U.nodeType===1&&j.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<j.length;s++){var q=j[s];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Oi=!!Wc,Fc=Wc=null}finally{Jt=u,tt.p=n,H.T=a}}t.current=e,Re=2}}function Qh(){if(Re===2){Re=0;var t=xn,e=Ul,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var n=tt.p;tt.p=2;var u=Jt;Jt|=4;try{yh(t,e.alternate,e)}finally{Jt=u,tt.p=n,H.T=a}}Re=3}}function qh(){if(Re===4||Re===3){Re=0,Me();var t=xn,e=Ul,a=$l,n=Oh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Re=5:(Re=0,Ul=xn=null,Gh(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Sn=null),uu(a),e=e.stateNode,Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(Wa,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=H.T,u=tt.p,tt.p=2,H.T=null;try{for(var r=t.onRecoverableError,f=0;f<n.length;f++){var s=n[f];r(s.value,{componentStack:s.stack})}}finally{H.T=e,tt.p=u}}($l&3)!==0&&gi(),Da(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Hc?Vu++:(Vu=0,Hc=t):Vu=0,Zu(0)}}function Gh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Du(e)))}function gi(t){return Yh(),Qh(),qh(),jh()}function jh(){if(Re!==5)return!1;var t=xn,e=Uc;Uc=0;var a=uu($l),n=H.T,u=tt.p;try{tt.p=32>a?32:a,H.T=null,a=$c,$c=null;var r=xn,f=$l;if(Re=0,Ul=xn=null,$l=0,(Jt&6)!==0)throw Error(o(331));var s=Jt;if(Jt|=4,_h(r.current),Th(r,r.current,f,a),Jt=s,Zu(0,!1),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(Wa,r)}catch{}return!0}finally{tt.p=u,H.T=n,Gh(t,e)}}function Xh(t,e,a){e=aa(a,e),e=vc(t.stateNode,e,2),t=dn(t,e,2),t!==null&&(Un(t,2),Da(t))}function ee(t,e,a){if(t.tag===3)Xh(t,t,a);else for(;e!==null;){if(e.tag===3){Xh(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Sn===null||!Sn.has(n))){t=aa(a,t),a=Jd(2),n=dn(e,a,2),n!==null&&(Id(a,n,e,t),Un(n,2),Da(n));break}}e=e.return}}function Qc(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new gm;var u=new Set;n.set(e,u)}else u=n.get(e),u===void 0&&(u=new Set,n.set(e,u));u.has(a)||(Mc=!0,u.add(a),t=xm.bind(null,t,e,a),e.then(t,t))}function xm(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ae===t&&(Yt&a)===a&&(fe===4||fe===3&&(Yt&62914560)===Yt&&300>re()-Bc?(Jt&2)===0&&Hl(t,0):Nc|=a,Bl===Yt&&(Bl=0)),Da(t)}function Vh(t,e){e===0&&(e=sa()),t=bl(t,e),t!==null&&(Un(t,e),Da(t))}function Em(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Vh(t,a)}function Tm(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(e),Vh(t,a)}function wm(t,e){return Vt(t,e)}var yi=null,kl=null,qc=!1,bi=!1,Gc=!1,al=0;function Da(t){t!==kl&&t.next===null&&(kl===null?yi=kl=t:kl=kl.next=t),bi=!0,qc||(qc=!0,_m())}function Zu(t,e){if(!Gc&&bi){Gc=!0;do for(var a=!1,n=yi;n!==null;){if(t!==0){var u=n.pendingLanes;if(u===0)var r=0;else{var f=n.suspendedLanes,s=n.pingedLanes;r=(1<<31-Ce(42|t)+1)-1,r&=u&~(f&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Ih(n,r))}else r=Yt,r=sl(n,n===ae?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Ma(n,r)||(a=!0,Ih(n,r));n=n.next}while(a);Gc=!1}}function Dm(){Zh()}function Zh(){bi=qc=!1;var t=0;al!==0&&(Um()&&(t=al),al=0);for(var e=re(),a=null,n=yi;n!==null;){var u=n.next,r=Kh(n,e);r===0?(n.next=null,a===null?yi=u:a.next=u,u===null&&(kl=a)):(a=n,(t!==0||(r&3)!==0)&&(bi=!0)),n=u}Zu(t)}function Kh(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,u=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var f=31-Ce(r),s=1<<f,g=u[f];g===-1?((s&a)===0||(s&n)!==0)&&(u[f]=Ar(s,e)):g<=e&&(t.expiredLanes|=s),r&=~s}if(e=ae,a=Yt,a=sl(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(It===2||It===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&ue(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ma(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&ue(n),uu(a)){case 2:case 8:a=ba;break;case 32:a=ea;break;case 268435456:a=Ia;break;default:a=ea}return n=Jh.bind(null,t),a=Vt(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&ue(n),t.callbackPriority=2,t.callbackNode=null,2}function Jh(t,e){if(Re!==0&&Re!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(gi()&&t.callbackNode!==a)return null;var n=Yt;return n=sl(t,t===ae?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Mh(t,n,e),Kh(t,re()),t.callbackNode!=null&&t.callbackNode===a?Jh.bind(null,t):null)}function Ih(t,e){if(gi())return null;Mh(t,e,!0)}function _m(){Hm(function(){(Jt&6)!==0?Vt(Le,Dm):Zh()})}function jc(){return al===0&&(al=Sr()),al}function Wh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fu(""+t)}function Fh(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Rm(t,e,a,n,u){if(e==="submit"&&a&&a.stateNode===u){var r=Wh((u[Be]||null).action),f=n.submitter;f&&(e=(e=f[Be]||null)?Wh(e.formAction):f.getAttribute("formAction"),e!==null&&(r=e,f=null));var s=new Br("action","action",null,n,u);t.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(al!==0){var g=f?Fh(u,f):new FormData(u);fc(a,{pending:!0,data:g,method:u.method,action:r},null,g)}}else typeof r=="function"&&(s.preventDefault(),g=f?Fh(u,f):new FormData(u),fc(a,{pending:!0,data:g,method:u.method,action:r},r,g))},currentTarget:u}]})}}for(var Xc=0;Xc<Oo.length;Xc++){var Vc=Oo[Xc],Om=Vc.toLowerCase(),zm=Vc[0].toUpperCase()+Vc.slice(1);ha(Om,"on"+zm)}ha(Ms,"onAnimationEnd"),ha(Ns,"onAnimationIteration"),ha(Cs,"onAnimationStart"),ha("dblclick","onDoubleClick"),ha("focusin","onFocus"),ha("focusout","onBlur"),ha(Z0,"onTransitionRun"),ha(K0,"onTransitionStart"),ha(J0,"onTransitionCancel"),ha(Bs,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),Na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Na("onBeforeInput",["compositionend","keypress","textInput","paste"]),Na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ku));function Ph(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],u=n.event;n=n.listeners;t:{var r=void 0;if(e)for(var f=n.length-1;0<=f;f--){var s=n[f],g=s.instance,M=s.currentTarget;if(s=s.listener,g!==r&&u.isPropagationStopped())break t;r=s,u.currentTarget=M;try{r(u)}catch(Y){ri(Y)}u.currentTarget=null,r=g}else for(f=0;f<n.length;f++){if(s=n[f],g=s.instance,M=s.currentTarget,s=s.listener,g!==r&&u.isPropagationStopped())break t;r=s,u.currentTarget=M;try{r(u)}catch(Y){ri(Y)}u.currentTarget=null,r=g}}}}function Ht(t,e){var a=e[dl];a===void 0&&(a=e[dl]=new Set);var n=t+"__bubble";a.has(n)||(tp(e,t,2,!1),a.add(n))}function Zc(t,e,a){var n=0;e&&(n|=4),tp(a,t,n,e)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Kc(t){if(!t[Ai]){t[Ai]=!0,_r.forEach(function(a){a!=="selectionchange"&&(Mm.has(a)||Zc(a,!1,t),Zc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ai]||(e[Ai]=!0,Zc("selectionchange",!1,e))}}function tp(t,e,a,n){switch(Tp(e)){case 2:var u=lg;break;case 8:u=ug;break;default:u=cf}a=u.bind(null,e,a,t),u=void 0,!mo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),n?u!==void 0?t.addEventListener(e,a,{capture:!0,passive:u}):t.addEventListener(e,a,!0):u!==void 0?t.addEventListener(e,a,{passive:u}):t.addEventListener(e,a,!1)}function Jc(t,e,a,n,u){var r=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var s=n.stateNode.containerInfo;if(s===u)break;if(f===4)for(f=n.return;f!==null;){var g=f.tag;if((g===3||g===4)&&f.stateNode.containerInfo===u)return;f=f.return}for(;s!==null;){if(f=tn(s),f===null)return;if(g=f.tag,g===5||g===6||g===26||g===27){n=r=f;continue t}s=s.parentNode}}n=n.return}is(function(){var M=r,Y=du(a),j=[];t:{var B=Us.get(t);if(B!==void 0){var U=Br,Tt=t;switch(t){case"keypress":if(Nr(a)===0)break t;case"keydown":case"keyup":U=w0;break;case"focusin":Tt="focus",U=Ao;break;case"focusout":Tt="blur",U=Ao;break;case"beforeblur":case"afterblur":U=Ao;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=h0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=R0;break;case Ms:case Ns:case Cs:U=m0;break;case Bs:U=z0;break;case"scroll":case"scrollend":U=s0;break;case"wheel":U=N0;break;case"copy":case"cut":case"paste":U=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=ds;break;case"toggle":case"beforetoggle":U=B0}var At=(e&4)!==0,Pt=!At&&(t==="scroll"||t==="scrollend"),_=At?B!==null?B+"Capture":null:B;At=[];for(var E=M,z;E!==null;){var q=E;if(z=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||z===null||_===null||(q=hu(E,_),q!=null&&At.push(Ju(E,q,z))),Pt)break;E=E.return}0<At.length&&(B=new U(B,Tt,null,a,Y),j.push({event:B,listeners:At}))}}if((e&7)===0){t:{if(B=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",B&&a!==su&&(Tt=a.relatedTarget||a.fromElement)&&(tn(Tt)||Tt[Pa]))break t;if((U||B)&&(B=Y.window===Y?Y:(B=Y.ownerDocument)?B.defaultView||B.parentWindow:window,U?(Tt=a.relatedTarget||a.toElement,U=M,Tt=Tt?tn(Tt):null,Tt!==null&&(Pt=v(Tt),At=Tt.tag,Tt!==Pt||At!==5&&At!==27&&At!==6)&&(Tt=null)):(U=null,Tt=M),U!==Tt)){if(At=fs,q="onMouseLeave",_="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(At=ds,q="onPointerLeave",_="onPointerEnter",E="pointer"),Pt=U==null?B:Hn(U),z=Tt==null?B:Hn(Tt),B=new At(q,E+"leave",U,a,Y),B.target=Pt,B.relatedTarget=z,q=null,tn(Y)===M&&(At=new At(_,E+"enter",Tt,a,Y),At.target=z,At.relatedTarget=Pt,q=At),Pt=q,U&&Tt)e:{for(At=U,_=Tt,E=0,z=At;z;z=Yl(z))E++;for(z=0,q=_;q;q=Yl(q))z++;for(;0<E-z;)At=Yl(At),E--;for(;0<z-E;)_=Yl(_),z--;for(;E--;){if(At===_||_!==null&&At===_.alternate)break e;At=Yl(At),_=Yl(_)}At=null}else At=null;U!==null&&ep(j,B,U,At,!1),Tt!==null&&Pt!==null&&ep(j,Pt,Tt,At,!0)}}t:{if(B=M?Hn(M):window,U=B.nodeName&&B.nodeName.toLowerCase(),U==="select"||U==="input"&&B.type==="file")var mt=As;else if(ys(B))if(Ss)mt=j0;else{mt=q0;var Ut=Q0}else U=B.nodeName,!U||U.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?M&&Yn(M.elementType)&&(mt=As):mt=G0;if(mt&&(mt=mt(t,M))){bs(j,mt,a,Y);break t}Ut&&Ut(t,B,M),t==="focusout"&&M&&B.type==="number"&&M.memoizedProps.value!=null&&vt(B,"number",B.value)}switch(Ut=M?Hn(M):window,t){case"focusin":(ys(Ut)||Ut.contentEditable==="true")&&(ml=Ut,Do=M,Su=null);break;case"focusout":Su=Do=ml=null;break;case"mousedown":_o=!0;break;case"contextmenu":case"mouseup":case"dragend":_o=!1,Os(j,a,Y);break;case"selectionchange":if(V0)break;case"keydown":case"keyup":Os(j,a,Y)}var yt;if(xo)t:{switch(t){case"compositionstart":var xt="onCompositionStart";break t;case"compositionend":xt="onCompositionEnd";break t;case"compositionupdate":xt="onCompositionUpdate";break t}xt=void 0}else vl?ms(t,a)&&(xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(hs&&a.locale!=="ko"&&(vl||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&vl&&(yt=os()):(on=Y,go="value"in on?on.value:on.textContent,vl=!0)),Ut=Si(M,xt),0<Ut.length&&(xt=new ss(xt,t,null,a,Y),j.push({event:xt,listeners:Ut}),yt?xt.data=yt:(yt=gs(a),yt!==null&&(xt.data=yt)))),(yt=$0?H0(t,a):L0(t,a))&&(xt=Si(M,"onBeforeInput"),0<xt.length&&(Ut=new ss("onBeforeInput","beforeinput",null,a,Y),j.push({event:Ut,listeners:xt}),Ut.data=yt)),Rm(j,t,M,a,Y)}Ph(j,e)})}function Ju(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Si(t,e){for(var a=e+"Capture",n=[];t!==null;){var u=t,r=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||r===null||(u=hu(t,a),u!=null&&n.unshift(Ju(t,u,r)),u=hu(t,e),u!=null&&n.push(Ju(t,u,r))),t.tag===3)return n;t=t.return}return[]}function Yl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ep(t,e,a,n,u){for(var r=e._reactName,f=[];a!==null&&a!==n;){var s=a,g=s.alternate,M=s.stateNode;if(s=s.tag,g!==null&&g===n)break;s!==5&&s!==26&&s!==27||M===null||(g=M,u?(M=hu(a,r),M!=null&&f.unshift(Ju(a,M,g))):u||(M=hu(a,r),M!=null&&f.push(Ju(a,M,g)))),a=a.return}f.length!==0&&t.push({event:e,listeners:f})}var Nm=/\r\n?/g,Cm=/\u0000|\uFFFD/g;function ap(t){return(typeof t=="string"?t:""+t).replace(Nm,`
`).replace(Cm,"")}function np(t,e){return e=ap(e),ap(t)===e}function xi(){}function Ft(t,e,a,n,u,r){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||te(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&te(t,""+n);break;case"className":hl(t,"class",n);break;case"tabIndex":hl(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":hl(t,a,n);break;case"style":rn(t,n,r);break;case"data":if(e!=="object"){hl(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=fu(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(e!=="input"&&Ft(t,e,"name",u.name,u,null),Ft(t,e,"formEncType",u.formEncType,u,null),Ft(t,e,"formMethod",u.formMethod,u,null),Ft(t,e,"formTarget",u.formTarget,u,null)):(Ft(t,e,"encType",u.encType,u,null),Ft(t,e,"method",u.method,u,null),Ft(t,e,"target",u.target,u,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=fu(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=xi);break;case"onScroll":n!=null&&Ht("scroll",t);break;case"onScrollEnd":n!=null&&Ht("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=fu(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":Ht("beforetoggle",t),Ht("toggle",t),da(t,"popover",n);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":da(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=po.get(a)||a,da(t,a,n))}}function Ic(t,e,a,n,u,r){switch(a){case"style":rn(t,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(u.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof n=="string"?te(t,n):(typeof n=="number"||typeof n=="bigint")&&te(t,""+n);break;case"onScroll":n!=null&&Ht("scroll",t);break;case"onScrollEnd":n!=null&&Ht("scrollend",t);break;case"onClick":n!=null&&(t.onclick=xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rr.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),e=a.slice(2,u?a.length-7:void 0),r=t[Be]||null,r=r!=null?r[a]:null,typeof r=="function"&&t.removeEventListener(e,r,u),typeof n=="function")){typeof r!="function"&&r!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,u);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):da(t,a,n)}}}function Oe(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ht("error",t),Ht("load",t);var n=!1,u=!1,r;for(r in a)if(a.hasOwnProperty(r)){var f=a[r];if(f!=null)switch(r){case"src":n=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ft(t,e,r,f,a,null)}}u&&Ft(t,e,"srcSet",a.srcSet,a,null),n&&Ft(t,e,"src",a.src,a,null);return;case"input":Ht("invalid",t);var s=r=f=u=null,g=null,M=null;for(n in a)if(a.hasOwnProperty(n)){var Y=a[n];if(Y!=null)switch(n){case"name":u=Y;break;case"type":f=Y;break;case"checked":g=Y;break;case"defaultChecked":M=Y;break;case"value":r=Y;break;case"defaultValue":s=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,e));break;default:Ft(t,e,n,Y,a,null)}}ot(t,r,s,g,M,f,u,!1),R(t);return;case"select":Ht("invalid",t),n=f=r=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":r=s;break;case"defaultValue":f=s;break;case"multiple":n=s;default:Ft(t,e,u,s,a,null)}e=r,a=f,t.multiple=!!n,e!=null?_t(t,!!n,e,!1):a!=null&&_t(t,!!n,a,!0);return;case"textarea":Ht("invalid",t),r=u=n=null;for(f in a)if(a.hasOwnProperty(f)&&(s=a[f],s!=null))switch(f){case"value":n=s;break;case"defaultValue":u=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:Ft(t,e,f,s,a,null)}Gt(t,n,u,r),R(t);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ft(t,e,g,n,a,null)}return;case"dialog":Ht("beforetoggle",t),Ht("toggle",t),Ht("cancel",t),Ht("close",t);break;case"iframe":case"object":Ht("load",t);break;case"video":case"audio":for(n=0;n<Ku.length;n++)Ht(Ku[n],t);break;case"image":Ht("error",t),Ht("load",t);break;case"details":Ht("toggle",t);break;case"embed":case"source":case"link":Ht("error",t),Ht("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(n=a[M],n!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ft(t,e,M,n,a,null)}return;default:if(Yn(e)){for(Y in a)a.hasOwnProperty(Y)&&(n=a[Y],n!==void 0&&Ic(t,e,Y,n,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(n=a[s],n!=null&&Ft(t,e,s,n,a,null))}function Bm(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,r=null,f=null,s=null,g=null,M=null,Y=null;for(U in a){var j=a[U];if(a.hasOwnProperty(U)&&j!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":g=j;default:n.hasOwnProperty(U)||Ft(t,e,U,null,n,j)}}for(var B in n){var U=n[B];if(j=a[B],n.hasOwnProperty(B)&&(U!=null||j!=null))switch(B){case"type":r=U;break;case"name":u=U;break;case"checked":M=U;break;case"defaultChecked":Y=U;break;case"value":f=U;break;case"defaultValue":s=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,e));break;default:U!==j&&Ft(t,e,B,U,n,j)}}et(t,f,s,g,M,Y,r,u);return;case"select":U=f=s=B=null;for(r in a)if(g=a[r],a.hasOwnProperty(r)&&g!=null)switch(r){case"value":break;case"multiple":U=g;default:n.hasOwnProperty(r)||Ft(t,e,r,null,n,g)}for(u in n)if(r=n[u],g=a[u],n.hasOwnProperty(u)&&(r!=null||g!=null))switch(u){case"value":B=r;break;case"defaultValue":s=r;break;case"multiple":f=r;default:r!==g&&Ft(t,e,u,r,n,g)}e=s,a=f,n=U,B!=null?_t(t,!!a,B,!1):!!n!=!!a&&(e!=null?_t(t,!!a,e,!0):_t(t,!!a,a?[]:"",!1));return;case"textarea":U=B=null;for(s in a)if(u=a[s],a.hasOwnProperty(s)&&u!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Ft(t,e,s,null,n,u)}for(f in n)if(u=n[f],r=a[f],n.hasOwnProperty(f)&&(u!=null||r!=null))switch(f){case"value":B=u;break;case"defaultValue":U=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==r&&Ft(t,e,f,u,n,r)}qt(t,B,U);return;case"option":for(var Tt in a)if(B=a[Tt],a.hasOwnProperty(Tt)&&B!=null&&!n.hasOwnProperty(Tt))switch(Tt){case"selected":t.selected=!1;break;default:Ft(t,e,Tt,null,n,B)}for(g in n)if(B=n[g],U=a[g],n.hasOwnProperty(g)&&B!==U&&(B!=null||U!=null))switch(g){case"selected":t.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ft(t,e,g,B,n,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var At in a)B=a[At],a.hasOwnProperty(At)&&B!=null&&!n.hasOwnProperty(At)&&Ft(t,e,At,null,n,B);for(M in n)if(B=n[M],U=a[M],n.hasOwnProperty(M)&&B!==U&&(B!=null||U!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,e));break;default:Ft(t,e,M,B,n,U)}return;default:if(Yn(e)){for(var Pt in a)B=a[Pt],a.hasOwnProperty(Pt)&&B!==void 0&&!n.hasOwnProperty(Pt)&&Ic(t,e,Pt,void 0,n,B);for(Y in n)B=n[Y],U=a[Y],!n.hasOwnProperty(Y)||B===U||B===void 0&&U===void 0||Ic(t,e,Y,B,n,U);return}}for(var _ in a)B=a[_],a.hasOwnProperty(_)&&B!=null&&!n.hasOwnProperty(_)&&Ft(t,e,_,null,n,B);for(j in n)B=n[j],U=a[j],!n.hasOwnProperty(j)||B===U||B==null&&U==null||Ft(t,e,j,B,n,U)}var Wc=null,Fc=null;function Ei(t){return t.nodeType===9?t:t.ownerDocument}function lp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function up(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Pc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tf=null;function Um(){var t=window.event;return t&&t.type==="popstate"?t===tf?!1:(tf=t,!0):(tf=null,!1)}var rp=typeof setTimeout=="function"?setTimeout:void 0,$m=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,Hm=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(t){return ip.resolve(null).then(t).catch(Lm)}:rp;function Lm(t){setTimeout(function(){throw t})}function Tn(t){return t==="head"}function op(t,e){var a=e,n=0,u=0;do{var r=a.nextSibling;if(t.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var f=t.ownerDocument;if(a&1&&Iu(f.documentElement),a&2&&Iu(f.body),a&4)for(a=f.head,Iu(a),f=a.firstChild;f;){var s=f.nextSibling,g=f.nodeName;f[$n]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=s}}if(u===0){t.removeChild(r),lr(e);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);lr(e)}function ef(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ef(a),ru(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function km(t,e,a,n){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[$n])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=va(t.nextSibling),t===null)break}return null}function Ym(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=va(t.nextSibling),t===null))return null;return t}function af(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Qm(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function va(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var nf=null;function cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function fp(t,e,a){switch(e=Ei(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Iu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ru(t)}var oa=new Map,sp=new Set;function Ti(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Za=tt.d;tt.d={f:qm,r:Gm,D:jm,C:Xm,L:Vm,m:Zm,X:Jm,S:Km,M:Im};function qm(){var t=Za.f(),e=vi();return t||e}function Gm(t){var e=en(t);e!==null&&e.tag===5&&e.type==="form"?Md(e):Za.r(t)}var Ql=typeof document>"u"?null:document;function dp(t,e,a){var n=Ql;if(n&&typeof e=="string"&&e){var u=K(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),sp.has(u)||(sp.add(u),t={rel:t,crossOrigin:a,href:e},n.querySelector(u)===null&&(e=n.createElement("link"),Oe(e,"link",t),pe(e),n.head.appendChild(e)))}}function jm(t){Za.D(t),dp("dns-prefetch",t,null)}function Xm(t,e){Za.C(t,e),dp("preconnect",t,e)}function Vm(t,e,a){Za.L(t,e,a);var n=Ql;if(n&&t&&e){var u='link[rel="preload"][as="'+K(e)+'"]';e==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+K(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+K(a.imageSizes)+'"]')):u+='[href="'+K(t)+'"]';var r=u;switch(e){case"style":r=ql(t);break;case"script":r=Gl(t)}oa.has(r)||(t=O({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),oa.set(r,t),n.querySelector(u)!==null||e==="style"&&n.querySelector(Wu(r))||e==="script"&&n.querySelector(Fu(r))||(e=n.createElement("link"),Oe(e,"link",t),pe(e),n.head.appendChild(e)))}}function Zm(t,e){Za.m(t,e);var a=Ql;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+K(n)+'"][href="'+K(t)+'"]',r=u;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Gl(t)}if(!oa.has(r)&&(t=O({rel:"modulepreload",href:t},e),oa.set(r,t),a.querySelector(u)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fu(r)))return}n=a.createElement("link"),Oe(n,"link",t),pe(n),a.head.appendChild(n)}}}function Km(t,e,a){Za.S(t,e,a);var n=Ql;if(n&&t){var u=an(n).hoistableStyles,r=ql(t);e=e||"default";var f=u.get(r);if(!f){var s={loading:0,preload:null};if(f=n.querySelector(Wu(r)))s.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},a),(a=oa.get(r))&&lf(t,a);var g=f=n.createElement("link");pe(g),Oe(g,"link",t),g._p=new Promise(function(M,Y){g.onload=M,g.onerror=Y}),g.addEventListener("load",function(){s.loading|=1}),g.addEventListener("error",function(){s.loading|=2}),s.loading|=4,wi(f,e,n)}f={type:"stylesheet",instance:f,count:1,state:s},u.set(r,f)}}}function Jm(t,e){Za.X(t,e);var a=Ql;if(a&&t){var n=an(a).hoistableScripts,u=Gl(t),r=n.get(u);r||(r=a.querySelector(Fu(u)),r||(t=O({src:t,async:!0},e),(e=oa.get(u))&&uf(t,e),r=a.createElement("script"),pe(r),Oe(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(u,r))}}function Im(t,e){Za.M(t,e);var a=Ql;if(a&&t){var n=an(a).hoistableScripts,u=Gl(t),r=n.get(u);r||(r=a.querySelector(Fu(u)),r||(t=O({src:t,async:!0,type:"module"},e),(e=oa.get(u))&&uf(t,e),r=a.createElement("script"),pe(r),Oe(r,"link",t),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(u,r))}}function hp(t,e,a,n){var u=(u=ct.current)?Ti(u):null;if(!u)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=ql(a.href),a=an(u).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ql(a.href);var r=an(u).hoistableStyles,f=r.get(t);if(f||(u=u.ownerDocument||u,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,f),(r=u.querySelector(Wu(t)))&&!r._p&&(f.instance=r,f.state.loading=5),oa.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oa.set(t,a),r||Wm(u,t,a,f.state))),e&&n===null)throw Error(o(528,""));return f}if(e&&n!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Gl(a),a=an(u).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function ql(t){return'href="'+K(t)+'"'}function Wu(t){return'link[rel="stylesheet"]['+t+"]"}function pp(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function Wm(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Oe(e,"link",a),pe(e),t.head.appendChild(e))}function Gl(t){return'[src="'+K(t)+'"]'}function Fu(t){return"script[async]"+t}function vp(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+K(a.href)+'"]');if(n)return e.instance=n,pe(n),n;var u=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),pe(n),Oe(n,"style",u),wi(n,a.precedence,t),e.instance=n;case"stylesheet":u=ql(a.href);var r=t.querySelector(Wu(u));if(r)return e.state.loading|=4,e.instance=r,pe(r),r;n=pp(a),(u=oa.get(u))&&lf(n,u),r=(t.ownerDocument||t).createElement("link"),pe(r);var f=r;return f._p=new Promise(function(s,g){f.onload=s,f.onerror=g}),Oe(r,"link",n),e.state.loading|=4,wi(r,a.precedence,t),e.instance=r;case"script":return r=Gl(a.src),(u=t.querySelector(Fu(r)))?(e.instance=u,pe(u),u):(n=a,(u=oa.get(r))&&(n=O({},a),uf(n,u)),t=t.ownerDocument||t,u=t.createElement("script"),pe(u),Oe(u,"link",n),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,wi(n,a.precedence,t));return e.instance}function wi(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=n.length?n[n.length-1]:null,r=u,f=0;f<n.length;f++){var s=n[f];if(s.dataset.precedence===e)r=s;else if(r!==u)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function lf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function uf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Di=null;function mp(t,e,a){if(Di===null){var n=new Map,u=Di=new Map;u.set(a,n)}else u=Di,n=u.get(a),n||(n=new Map,u.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var r=a[u];if(!(r[$n]||r[Se]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(e)||"";f=t+f;var s=n.get(f);s?s.push(r):n.set(f,[r])}}return n}function gp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Fm(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function yp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Pu=null;function Pm(){}function tg(t,e,a){if(Pu===null)throw Error(o(475));var n=Pu;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=ql(a.href),r=t.querySelector(Wu(u));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=_i.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=r,pe(r);return}r=t.ownerDocument||t,a=pp(a),(u=oa.get(u))&&lf(a,u),r=r.createElement("link"),pe(r);var f=r;f._p=new Promise(function(s,g){f.onload=s,f.onerror=g}),Oe(r,"link",a),e.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=_i.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function eg(){if(Pu===null)throw Error(o(475));var t=Pu;return t.stylesheets&&t.count===0&&rf(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&rf(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function _i(){if(this.count--,this.count===0){if(this.stylesheets)rf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ri=null;function rf(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ri=new Map,e.forEach(ag,t),Ri=null,_i.call(t))}function ag(t,e){if(!(e.state.loading&4)){var a=Ri.get(t);if(a)var n=a.get(null);else{a=new Map,Ri.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<u.length;r++){var f=u[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}u=e.instance,f=u.getAttribute("data-precedence"),r=a.get(f)||n,r===n&&a.set(null,u),a.set(f,u),this.count++,n=_i.bind(this),u.addEventListener("load",n),u.addEventListener("error",n),r?r.parentNode.insertBefore(u,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var tr={$$typeof:lt,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function ng(t,e,a,n,u,r,f,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nu(0),this.hiddenUpdates=nu(null),this.identifierPrefix=n,this.onUncaughtError=u,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function bp(t,e,a,n,u,r,f,s,g,M,Y,j){return t=new ng(t,e,a,f,s,g,M,j),e=1,r===!0&&(e|=24),r=Ke(3,null,null,e),t.current=r,r.stateNode=t,e=Qo(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:e},Xo(r),t}function Ap(t){return t?(t=Al,t):Al}function Sp(t,e,a,n,u,r){u=Ap(u),n.context===null?n.context=u:n.pendingContext=u,n=sn(e),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=dn(t,n,e),a!==null&&(Pe(a,t,e),zu(a,t,e))}function xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function of(t,e){xp(t,e),(t=t.alternate)&&xp(t,e)}function Ep(t){if(t.tag===13){var e=bl(t,67108864);e!==null&&Pe(e,t,67108864),of(t,67108864)}}var Oi=!0;function lg(t,e,a,n){var u=H.T;H.T=null;var r=tt.p;try{tt.p=2,cf(t,e,a,n)}finally{tt.p=r,H.T=u}}function ug(t,e,a,n){var u=H.T;H.T=null;var r=tt.p;try{tt.p=8,cf(t,e,a,n)}finally{tt.p=r,H.T=u}}function cf(t,e,a,n){if(Oi){var u=ff(n);if(u===null)Jc(t,e,n,zi,a),wp(t,n);else if(ig(u,t,e,a,n))n.stopPropagation();else if(wp(t,n),e&4&&-1<rg.indexOf(t)){for(;u!==null;){var r=en(u);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=za(r.pendingLanes);if(f!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;f;){var g=1<<31-Ce(f);s.entanglements[1]|=g,f&=~g}Da(r),(Jt&6)===0&&(hi=re()+500,Zu(0))}}break;case 13:s=bl(r,2),s!==null&&Pe(s,r,2),vi(),of(r,2)}if(r=ff(n),r===null&&Jc(t,e,n,zi,a),r===u)break;u=r}u!==null&&n.stopPropagation()}else Jc(t,e,n,null,a)}}function ff(t){return t=du(t),sf(t)}var zi=null;function sf(t){if(zi=null,t=tn(t),t!==null){var e=v(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=A(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return zi=t,null}function Tp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case Le:return 2;case ba:return 8;case ea:case Aa:return 32;case Ia:return 268435456;default:return 32}default:return 32}}var df=!1,wn=null,Dn=null,_n=null,er=new Map,ar=new Map,Rn=[],rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wp(t,e){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":er.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(e.pointerId)}}function nr(t,e,a,n,u,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[u]},e!==null&&(e=en(e),e!==null&&Ep(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function ig(t,e,a,n,u){switch(e){case"focusin":return wn=nr(wn,t,e,a,n,u),!0;case"dragenter":return Dn=nr(Dn,t,e,a,n,u),!0;case"mouseover":return _n=nr(_n,t,e,a,n,u),!0;case"pointerover":var r=u.pointerId;return er.set(r,nr(er.get(r)||null,t,e,a,n,u)),!0;case"gotpointercapture":return r=u.pointerId,ar.set(r,nr(ar.get(r)||null,t,e,a,n,u)),!0}return!1}function Dp(t){var e=tn(t.target);if(e!==null){var a=v(e);if(a!==null){if(e=a.tag,e===13){if(e=A(a),e!==null){t.blockedOn=e,oo(t.priority,function(){if(a.tag===13){var n=Fe();n=lu(n);var u=bl(a,n);u!==null&&Pe(u,a,n),of(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=ff(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);su=n,a.target.dispatchEvent(n),su=null}else return e=en(a),e!==null&&Ep(e),t.blockedOn=a,!1;e.shift()}return!0}function _p(t,e,a){Mi(t)&&a.delete(e)}function og(){df=!1,wn!==null&&Mi(wn)&&(wn=null),Dn!==null&&Mi(Dn)&&(Dn=null),_n!==null&&Mi(_n)&&(_n=null),er.forEach(_p),ar.forEach(_p)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,df||(df=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,og)))}var Ci=null;function Rp(t){Ci!==t&&(Ci=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Ci===t&&(Ci=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],u=t[e+2];if(typeof n!="function"){if(sf(n||a)===null)continue;break}var r=en(a);r!==null&&(t.splice(e,3),e-=3,fc(r,{pending:!0,data:u,method:a.method,action:n},n,u))}}))}function lr(t){function e(g){return Ni(g,t)}wn!==null&&Ni(wn,t),Dn!==null&&Ni(Dn,t),_n!==null&&Ni(_n,t),er.forEach(e),ar.forEach(e);for(var a=0;a<Rn.length;a++){var n=Rn[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Rn.length&&(a=Rn[0],a.blockedOn===null);)Dp(a),a.blockedOn===null&&Rn.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var u=a[n],r=a[n+1],f=u[Be]||null;if(typeof r=="function")f||Rp(a);else if(f){var s=null;if(r&&r.hasAttribute("formAction")){if(u=r,f=r[Be]||null)s=f.formAction;else if(sf(u)!==null)continue}else s=f.action;typeof s=="function"?a[n+1]=s:(a.splice(n,3),n-=3),Rp(a)}}}function hf(t){this._internalRoot=t}Bi.prototype.render=hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var a=e.current,n=Fe();Sp(a,n,t,e,null,null)},Bi.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Sp(t.current,2,null,t,null,null),vi(),e[Pa]=null}};function Bi(t){this._internalRoot=t}Bi.prototype.unstable_scheduleHydration=function(t){if(t){var e=wr();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Rn.length&&e!==0&&e<Rn[a].priority;a++);Rn.splice(a,0,t),a===0&&Dp(t)}};var Op=i.version;if(Op!=="19.1.0")throw Error(o(527,Op,"19.1.0"));tt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=x(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var cg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{Wa=Ui.inject(cg),Ne=Ui}catch{}}return rr.createRoot=function(t,e){if(!h(t))throw Error(o(299));var a=!1,n="",u=Xd,r=Vd,f=Zd,s=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks)),e=bp(t,1,!1,null,null,a,n,u,r,f,s,null),t[Pa]=e.current,Kc(t),new hf(e)},rr.hydrateRoot=function(t,e,a){if(!h(t))throw Error(o(299));var n=!1,u="",r=Xd,f=Vd,s=Zd,g=null,M=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(M=a.formState)),e=bp(t,1,!0,e,a??null,n,u,r,f,s,g,M),e.context=Ap(null),a=e.current,n=Fe(),n=lu(n),u=sn(n),u.callback=null,dn(a,u,n),a=n,e.current.lanes=a,Un(e,a),Da(e),t[Pa]=e.current,Kc(t),new Bi(e)},rr.version="19.1.0",rr}var Yp;function Sg(){if(Yp)return mf.exports;Yp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),mf.exports=Ag(),mf.exports}var xg=Sg(),De=function(){return De=Object.assign||function(i){for(var c,o=1,h=arguments.length;o<h;o++){c=arguments[o];for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&(i[v]=c[v])}return i},De.apply(this,arguments)};function sr(l,i,c){if(c||arguments.length===2)for(var o=0,h=i.length,v;o<h;o++)(v||!(o in i))&&(v||(v=Array.prototype.slice.call(i,0,o)),v[o]=i[o]);return l.concat(v||Array.prototype.slice.call(i))}var ne="-ms-",fr="-moz-",Kt="-webkit-",bv="comm",to="rule",Xf="decl",Eg="@import",Av="@keyframes",Tg="@layer",Sv=Math.abs,Vf=String.fromCharCode,Rf=Object.assign;function wg(l,i){return we(l,0)^45?(((i<<2^we(l,0))<<2^we(l,1))<<2^we(l,2))<<2^we(l,3):0}function xv(l){return l.trim()}function Ja(l,i){return(l=i.exec(l))?l[0]:l}function Nt(l,i,c){return l.replace(i,c)}function Gi(l,i,c){return l.indexOf(i,c)}function we(l,i){return l.charCodeAt(i)|0}function Il(l,i,c){return l.slice(i,c)}function _a(l){return l.length}function Ev(l){return l.length}function cr(l,i){return i.push(l),l}function Dg(l,i){return l.map(i).join("")}function Qp(l,i){return l.filter(function(c){return!Ja(c,i)})}var eo=1,Wl=1,Tv=0,ca=0,ye=0,eu="";function ao(l,i,c,o,h,v,A,D){return{value:l,root:i,parent:c,type:o,props:h,children:v,line:eo,column:Wl,length:A,return:"",siblings:D}}function zn(l,i){return Rf(ao("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},i)}function jl(l){for(;l.root;)l=zn(l.root,{children:[l]});cr(l,l.siblings)}function _g(){return ye}function Rg(){return ye=ca>0?we(eu,--ca):0,Wl--,ye===10&&(Wl=1,eo--),ye}function ma(){return ye=ca<Tv?we(eu,ca++):0,Wl++,ye===10&&(Wl=1,eo++),ye}function rl(){return we(eu,ca)}function ji(){return ca}function no(l,i){return Il(eu,l,i)}function Of(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Og(l){return eo=Wl=1,Tv=_a(eu=l),ca=0,[]}function zg(l){return eu="",l}function Af(l){return xv(no(ca-1,zf(l===91?l+2:l===40?l+1:l)))}function Mg(l){for(;(ye=rl())&&ye<33;)ma();return Of(l)>2||Of(ye)>3?"":" "}function Ng(l,i){for(;--i&&ma()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return no(l,ji()+(i<6&&rl()==32&&ma()==32))}function zf(l){for(;ma();)switch(ye){case l:return ca;case 34:case 39:l!==34&&l!==39&&zf(ye);break;case 40:l===41&&zf(l);break;case 92:ma();break}return ca}function Cg(l,i){for(;ma()&&l+ye!==57;)if(l+ye===84&&rl()===47)break;return"/*"+no(i,ca-1)+"*"+Vf(l===47?l:ma())}function Bg(l){for(;!Of(rl());)ma();return no(l,ca)}function Ug(l){return zg(Xi("",null,null,null,[""],l=Og(l),0,[0],l))}function Xi(l,i,c,o,h,v,A,D,x){for(var m=0,O=0,S=A,C=0,Z=0,P=0,ft=1,at=1,it=1,J=0,lt="",st=h,N=v,V=o,X=lt;at;)switch(P=J,J=ma()){case 40:if(P!=108&&we(X,S-1)==58){Gi(X+=Nt(Af(J),"&","&\f"),"&\f",Sv(m?D[m-1]:0))!=-1&&(it=-1);break}case 34:case 39:case 91:X+=Af(J);break;case 9:case 10:case 13:case 32:X+=Mg(P);break;case 92:X+=Ng(ji()-1,7);continue;case 47:switch(rl()){case 42:case 47:cr($g(Cg(ma(),ji()),i,c,x),x);break;default:X+="/"}break;case 123*ft:D[m++]=_a(X)*it;case 125*ft:case 59:case 0:switch(J){case 0:case 125:at=0;case 59+O:it==-1&&(X=Nt(X,/\f/g,"")),Z>0&&_a(X)-S&&cr(Z>32?Gp(X+";",o,c,S-1,x):Gp(Nt(X," ","")+";",o,c,S-2,x),x);break;case 59:X+=";";default:if(cr(V=qp(X,i,c,m,O,h,D,lt,st=[],N=[],S,v),v),J===123)if(O===0)Xi(X,i,V,V,st,v,S,D,N);else switch(C===99&&we(X,3)===110?100:C){case 100:case 108:case 109:case 115:Xi(l,V,V,o&&cr(qp(l,V,V,0,0,h,D,lt,h,st=[],S,N),N),h,N,S,D,o?st:N);break;default:Xi(X,V,V,V,[""],N,0,D,N)}}m=O=Z=0,ft=it=1,lt=X="",S=A;break;case 58:S=1+_a(X),Z=P;default:if(ft<1){if(J==123)--ft;else if(J==125&&ft++==0&&Rg()==125)continue}switch(X+=Vf(J),J*ft){case 38:it=O>0?1:(X+="\f",-1);break;case 44:D[m++]=(_a(X)-1)*it,it=1;break;case 64:rl()===45&&(X+=Af(ma())),C=rl(),O=S=_a(lt=X+=Bg(ji())),J++;break;case 45:P===45&&_a(X)==2&&(ft=0)}}return v}function qp(l,i,c,o,h,v,A,D,x,m,O,S){for(var C=h-1,Z=h===0?v:[""],P=Ev(Z),ft=0,at=0,it=0;ft<o;++ft)for(var J=0,lt=Il(l,C+1,C=Sv(at=A[ft])),st=l;J<P;++J)(st=xv(at>0?Z[J]+" "+lt:Nt(lt,/&\f/g,Z[J])))&&(x[it++]=st);return ao(l,i,c,h===0?to:D,x,m,O,S)}function $g(l,i,c,o){return ao(l,i,c,bv,Vf(_g()),Il(l,2,-2),0,o)}function Gp(l,i,c,o,h){return ao(l,i,c,Xf,Il(l,0,o),Il(l,o+1,-1),o,h)}function wv(l,i,c){switch(wg(l,i)){case 5103:return Kt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Kt+l+l;case 4789:return fr+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return Kt+l+fr+l+ne+l+l;case 5936:switch(we(l,i+11)){case 114:return Kt+l+ne+Nt(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return Kt+l+ne+Nt(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return Kt+l+ne+Nt(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return Kt+l+ne+l+l;case 6165:return Kt+l+ne+"flex-"+l+l;case 5187:return Kt+l+Nt(l,/(\w+).+(:[^]+)/,Kt+"box-$1$2"+ne+"flex-$1$2")+l;case 5443:return Kt+l+ne+"flex-item-"+Nt(l,/flex-|-self/g,"")+(Ja(l,/flex-|baseline/)?"":ne+"grid-row-"+Nt(l,/flex-|-self/g,""))+l;case 4675:return Kt+l+ne+"flex-line-pack"+Nt(l,/align-content|flex-|-self/g,"")+l;case 5548:return Kt+l+ne+Nt(l,"shrink","negative")+l;case 5292:return Kt+l+ne+Nt(l,"basis","preferred-size")+l;case 6060:return Kt+"box-"+Nt(l,"-grow","")+Kt+l+ne+Nt(l,"grow","positive")+l;case 4554:return Kt+Nt(l,/([^-])(transform)/g,"$1"+Kt+"$2")+l;case 6187:return Nt(Nt(Nt(l,/(zoom-|grab)/,Kt+"$1"),/(image-set)/,Kt+"$1"),l,"")+l;case 5495:case 3959:return Nt(l,/(image-set\([^]*)/,Kt+"$1$`$1");case 4968:return Nt(Nt(l,/(.+:)(flex-)?(.*)/,Kt+"box-pack:$3"+ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Kt+l+l;case 4200:if(!Ja(l,/flex-|baseline/))return ne+"grid-column-align"+Il(l,i)+l;break;case 2592:case 3360:return ne+Nt(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(o,h){return i=h,Ja(o.props,/grid-\w+-end/)})?~Gi(l+(c=c[i].value),"span",0)?l:ne+Nt(l,"-start","")+l+ne+"grid-row-span:"+(~Gi(c,"span",0)?Ja(c,/\d+/):+Ja(c,/\d+/)-+Ja(l,/\d+/))+";":ne+Nt(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(o){return Ja(o.props,/grid-\w+-start/)})?l:ne+Nt(Nt(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return Nt(l,/(.+)-inline(.+)/,Kt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_a(l)-1-i>6)switch(we(l,i+1)){case 109:if(we(l,i+4)!==45)break;case 102:return Nt(l,/(.+:)(.+)-([^]+)/,"$1"+Kt+"$2-$3$1"+fr+(we(l,i+3)==108?"$3":"$2-$3"))+l;case 115:return~Gi(l,"stretch",0)?wv(Nt(l,"stretch","fill-available"),i,c)+l:l}break;case 5152:case 5920:return Nt(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,h,v,A,D,x,m){return ne+h+":"+v+m+(A?ne+h+"-span:"+(D?x:+x-+v)+m:"")+l});case 4949:if(we(l,i+6)===121)return Nt(l,":",":"+Kt)+l;break;case 6444:switch(we(l,we(l,14)===45?18:11)){case 120:return Nt(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Kt+(we(l,14)===45?"inline-":"")+"box$3$1"+Kt+"$2$3$1"+ne+"$2box$3")+l;case 100:return Nt(l,":",":"+ne)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Nt(l,"scroll-","scroll-snap-")+l}return l}function Ji(l,i){for(var c="",o=0;o<l.length;o++)c+=i(l[o],o,l,i)||"";return c}function Hg(l,i,c,o){switch(l.type){case Tg:if(l.children.length)break;case Eg:case Xf:return l.return=l.return||l.value;case bv:return"";case Av:return l.return=l.value+"{"+Ji(l.children,o)+"}";case to:if(!_a(l.value=l.props.join(",")))return""}return _a(c=Ji(l.children,o))?l.return=l.value+"{"+c+"}":""}function Lg(l){var i=Ev(l);return function(c,o,h,v){for(var A="",D=0;D<i;D++)A+=l[D](c,o,h,v)||"";return A}}function kg(l){return function(i){i.root||(i=i.return)&&l(i)}}function Yg(l,i,c,o){if(l.length>-1&&!l.return)switch(l.type){case Xf:l.return=wv(l.value,l.length,c);return;case Av:return Ji([zn(l,{value:Nt(l.value,"@","@"+Kt)})],o);case to:if(l.length)return Dg(c=l.props,function(h){switch(Ja(h,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jl(zn(l,{props:[Nt(h,/:(read-\w+)/,":"+fr+"$1")]})),jl(zn(l,{props:[h]})),Rf(l,{props:Qp(c,o)});break;case"::placeholder":jl(zn(l,{props:[Nt(h,/:(plac\w+)/,":"+Kt+"input-$1")]})),jl(zn(l,{props:[Nt(h,/:(plac\w+)/,":"+fr+"$1")]})),jl(zn(l,{props:[Nt(h,/:(plac\w+)/,ne+"input-$1")]})),jl(zn(l,{props:[h]})),Rf(l,{props:Qp(c,o)});break}return""})}}var Qg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ta={},Fl=typeof process<"u"&&ta!==void 0&&(ta.REACT_APP_SC_ATTR||ta.SC_ATTR)||"data-styled",Dv="active",_v="data-styled-version",lo="6.1.19",Zf=`/*!sc*/
`,Ii=typeof window<"u"&&typeof document<"u",qg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ta!==void 0&&ta.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ta.REACT_APP_SC_DISABLE_SPEEDY!==""?ta.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ta.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ta!==void 0&&ta.SC_DISABLE_SPEEDY!==void 0&&ta.SC_DISABLE_SPEEDY!==""&&ta.SC_DISABLE_SPEEDY!=="false"&&ta.SC_DISABLE_SPEEDY),Gg={},uo=Object.freeze([]),Pl=Object.freeze({});function Rv(l,i,c){return c===void 0&&(c=Pl),l.theme!==c.theme&&l.theme||i||c.theme}var Ov=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xg=/(^-|-$)/g;function jp(l){return l.replace(jg,"-").replace(Xg,"")}var Vg=/(a)(d)/gi,Hi=52,Xp=function(l){return String.fromCharCode(l+(l>25?39:97))};function Mf(l){var i,c="";for(i=Math.abs(l);i>Hi;i=i/Hi|0)c=Xp(i%Hi)+c;return(Xp(i%Hi)+c).replace(Vg,"$1-$2")}var Sf,zv=5381,Zl=function(l,i){for(var c=i.length;c;)l=33*l^i.charCodeAt(--c);return l},Mv=function(l){return Zl(zv,l)};function Nv(l){return Mf(Mv(l)>>>0)}function Zg(l){return l.displayName||l.name||"Component"}function xf(l){return typeof l=="string"&&!0}var Cv=typeof Symbol=="function"&&Symbol.for,Bv=Cv?Symbol.for("react.memo"):60115,Kg=Cv?Symbol.for("react.forward_ref"):60112,Jg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ig={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Uv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wg=((Sf={})[Kg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Sf[Bv]=Uv,Sf);function Vp(l){return("type"in(i=l)&&i.type.$$typeof)===Bv?Uv:"$$typeof"in l?Wg[l.$$typeof]:Jg;var i}var Fg=Object.defineProperty,Pg=Object.getOwnPropertyNames,Zp=Object.getOwnPropertySymbols,ty=Object.getOwnPropertyDescriptor,ey=Object.getPrototypeOf,Kp=Object.prototype;function $v(l,i,c){if(typeof i!="string"){if(Kp){var o=ey(i);o&&o!==Kp&&$v(l,o,c)}var h=Pg(i);Zp&&(h=h.concat(Zp(i)));for(var v=Vp(l),A=Vp(i),D=0;D<h.length;++D){var x=h[D];if(!(x in Ig||c&&c[x]||A&&x in A||v&&x in v)){var m=ty(i,x);try{Fg(l,x,m)}catch{}}}}return l}function il(l){return typeof l=="function"}function Kf(l){return typeof l=="object"&&"styledComponentId"in l}function ll(l,i){return l&&i?"".concat(l," ").concat(i):l||i||""}function Nf(l,i){if(l.length===0)return"";for(var c=l[0],o=1;o<l.length;o++)c+=l[o];return c}function dr(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Cf(l,i,c){if(c===void 0&&(c=!1),!c&&!dr(l)&&!Array.isArray(l))return i;if(Array.isArray(i))for(var o=0;o<i.length;o++)l[o]=Cf(l[o],i[o]);else if(dr(i))for(var o in i)l[o]=Cf(l[o],i[o]);return l}function Jf(l,i){Object.defineProperty(l,"toString",{value:i})}function ol(l){for(var i=[],c=1;c<arguments.length;c++)i[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var ay=function(){function l(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return l.prototype.indexOfGroup=function(i){for(var c=0,o=0;o<i;o++)c+=this.groupSizes[o];return c},l.prototype.insertRules=function(i,c){if(i>=this.groupSizes.length){for(var o=this.groupSizes,h=o.length,v=h;i>=v;)if((v<<=1)<0)throw ol(16,"".concat(i));this.groupSizes=new Uint32Array(v),this.groupSizes.set(o),this.length=v;for(var A=h;A<v;A++)this.groupSizes[A]=0}for(var D=this.indexOfGroup(i+1),x=(A=0,c.length);A<x;A++)this.tag.insertRule(D,c[A])&&(this.groupSizes[i]++,D++)},l.prototype.clearGroup=function(i){if(i<this.length){var c=this.groupSizes[i],o=this.indexOfGroup(i),h=o+c;this.groupSizes[i]=0;for(var v=o;v<h;v++)this.tag.deleteRule(o)}},l.prototype.getGroup=function(i){var c="";if(i>=this.length||this.groupSizes[i]===0)return c;for(var o=this.groupSizes[i],h=this.indexOfGroup(i),v=h+o,A=h;A<v;A++)c+="".concat(this.tag.getRule(A)).concat(Zf);return c},l}(),Vi=new Map,Wi=new Map,Zi=1,Li=function(l){if(Vi.has(l))return Vi.get(l);for(;Wi.has(Zi);)Zi++;var i=Zi++;return Vi.set(l,i),Wi.set(i,l),i},ny=function(l,i){Zi=i+1,Vi.set(l,i),Wi.set(i,l)},ly="style[".concat(Fl,"][").concat(_v,'="').concat(lo,'"]'),uy=new RegExp("^".concat(Fl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ry=function(l,i,c){for(var o,h=c.split(","),v=0,A=h.length;v<A;v++)(o=h[v])&&l.registerName(i,o)},iy=function(l,i){for(var c,o=((c=i.textContent)!==null&&c!==void 0?c:"").split(Zf),h=[],v=0,A=o.length;v<A;v++){var D=o[v].trim();if(D){var x=D.match(uy);if(x){var m=0|parseInt(x[1],10),O=x[2];m!==0&&(ny(O,m),ry(l,O,x[3]),l.getTag().insertRules(m,h)),h.length=0}else h.push(D)}}},Jp=function(l){for(var i=document.querySelectorAll(ly),c=0,o=i.length;c<o;c++){var h=i[c];h&&h.getAttribute(Fl)!==Dv&&(iy(l,h),h.parentNode&&h.parentNode.removeChild(h))}};function oy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hv=function(l){var i=document.head,c=l||i,o=document.createElement("style"),h=function(D){var x=Array.from(D.querySelectorAll("style[".concat(Fl,"]")));return x[x.length-1]}(c),v=h!==void 0?h.nextSibling:null;o.setAttribute(Fl,Dv),o.setAttribute(_v,lo);var A=oy();return A&&o.setAttribute("nonce",A),c.insertBefore(o,v),o},cy=function(){function l(i){this.element=Hv(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var o=document.styleSheets,h=0,v=o.length;h<v;h++){var A=o[h];if(A.ownerNode===c)return A}throw ol(17)}(this.element),this.length=0}return l.prototype.insertRule=function(i,c){try{return this.sheet.insertRule(c,i),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},l.prototype.getRule=function(i){var c=this.sheet.cssRules[i];return c&&c.cssText?c.cssText:""},l}(),fy=function(){function l(i){this.element=Hv(i),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(i,c){if(i<=this.length&&i>=0){var o=document.createTextNode(c);return this.element.insertBefore(o,this.nodes[i]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},l.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},l}(),sy=function(){function l(i){this.rules=[],this.length=0}return l.prototype.insertRule=function(i,c){return i<=this.length&&(this.rules.splice(i,0,c),this.length++,!0)},l.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},l.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},l}(),Ip=Ii,dy={isServer:!Ii,useCSSOMInjection:!qg},Fi=function(){function l(i,c,o){i===void 0&&(i=Pl),c===void 0&&(c={});var h=this;this.options=De(De({},dy),i),this.gs=c,this.names=new Map(o),this.server=!!i.isServer,!this.server&&Ii&&Ip&&(Ip=!1,Jp(this)),Jf(this,function(){return function(v){for(var A=v.getTag(),D=A.length,x="",m=function(S){var C=function(it){return Wi.get(it)}(S);if(C===void 0)return"continue";var Z=v.names.get(C),P=A.getGroup(S);if(Z===void 0||!Z.size||P.length===0)return"continue";var ft="".concat(Fl,".g").concat(S,'[id="').concat(C,'"]'),at="";Z!==void 0&&Z.forEach(function(it){it.length>0&&(at+="".concat(it,","))}),x+="".concat(P).concat(ft,'{content:"').concat(at,'"}').concat(Zf)},O=0;O<D;O++)m(O);return x}(h)})}return l.registerId=function(i){return Li(i)},l.prototype.rehydrate=function(){!this.server&&Ii&&Jp(this)},l.prototype.reconstructWithOptions=function(i,c){return c===void 0&&(c=!0),new l(De(De({},this.options),i),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(i=function(c){var o=c.useCSSOMInjection,h=c.target;return c.isServer?new sy(h):o?new cy(h):new fy(h)}(this.options),new ay(i)));var i},l.prototype.hasNameForId=function(i,c){return this.names.has(i)&&this.names.get(i).has(c)},l.prototype.registerName=function(i,c){if(Li(i),this.names.has(i))this.names.get(i).add(c);else{var o=new Set;o.add(c),this.names.set(i,o)}},l.prototype.insertRules=function(i,c,o){this.registerName(i,c),this.getTag().insertRules(Li(i),o)},l.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},l.prototype.clearRules=function(i){this.getTag().clearGroup(Li(i)),this.clearNames(i)},l.prototype.clearTag=function(){this.tag=void 0},l}(),hy=/&/g,py=/^\s*\/\/.*$/gm;function Lv(l,i){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(i," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(i," ")),c.props=c.props.map(function(o){return"".concat(i," ").concat(o)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Lv(c.children,i)),c})}function vy(l){var i,c,o,h=Pl,v=h.options,A=v===void 0?Pl:v,D=h.plugins,x=D===void 0?uo:D,m=function(C,Z,P){return P.startsWith(c)&&P.endsWith(c)&&P.replaceAll(c,"").length>0?".".concat(i):C},O=x.slice();O.push(function(C){C.type===to&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(hy,c).replace(o,m))}),A.prefix&&O.push(Yg),O.push(Hg);var S=function(C,Z,P,ft){Z===void 0&&(Z=""),P===void 0&&(P=""),ft===void 0&&(ft="&"),i=ft,c=Z,o=new RegExp("\\".concat(c,"\\b"),"g");var at=C.replace(py,""),it=Ug(P||Z?"".concat(P," ").concat(Z," { ").concat(at," }"):at);A.namespace&&(it=Lv(it,A.namespace));var J=[];return Ji(it,Lg(O.concat(kg(function(lt){return J.push(lt)})))),J};return S.hash=x.length?x.reduce(function(C,Z){return Z.name||ol(15),Zl(C,Z.name)},zv).toString():"",S}var my=new Fi,Bf=vy(),kv=$.createContext({shouldForwardProp:void 0,styleSheet:my,stylis:Bf});kv.Consumer;$.createContext(void 0);function Uf(){return L.useContext(kv)}var gy=function(){function l(i,c){var o=this;this.inject=function(h,v){v===void 0&&(v=Bf);var A=o.name+v.hash;h.hasNameForId(o.id,A)||h.insertRules(o.id,A,v(o.rules,A,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=c,Jf(this,function(){throw ol(12,String(o.name))})}return l.prototype.getName=function(i){return i===void 0&&(i=Bf),this.name+i.hash},l}(),yy=function(l){return l>="A"&&l<="Z"};function Wp(l){for(var i="",c=0;c<l.length;c++){var o=l[c];if(c===1&&o==="-"&&l[0]==="-")return l;yy(o)?i+="-"+o.toLowerCase():i+=o}return i.startsWith("ms-")?"-"+i:i}var Yv=function(l){return l==null||l===!1||l===""},Qv=function(l){var i,c,o=[];for(var h in l){var v=l[h];l.hasOwnProperty(h)&&!Yv(v)&&(Array.isArray(v)&&v.isCss||il(v)?o.push("".concat(Wp(h),":"),v,";"):dr(v)?o.push.apply(o,sr(sr(["".concat(h," {")],Qv(v),!1),["}"],!1)):o.push("".concat(Wp(h),": ").concat((i=h,(c=v)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||i in Qg||i.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return o};function Mn(l,i,c,o){if(Yv(l))return[];if(Kf(l))return[".".concat(l.styledComponentId)];if(il(l)){if(!il(v=l)||v.prototype&&v.prototype.isReactComponent||!i)return[l];var h=l(i);return Mn(h,i,c,o)}var v;return l instanceof gy?c?(l.inject(c,o),[l.getName(o)]):[l]:dr(l)?Qv(l):Array.isArray(l)?Array.prototype.concat.apply(uo,l.map(function(A){return Mn(A,i,c,o)})):[l.toString()]}function qv(l){for(var i=0;i<l.length;i+=1){var c=l[i];if(il(c)&&!Kf(c))return!1}return!0}var by=Mv(lo),Ay=function(){function l(i,c,o){this.rules=i,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&qv(i),this.componentId=c,this.baseHash=Zl(by,c),this.baseStyle=o,Fi.registerId(c)}return l.prototype.generateAndInjectStyles=function(i,c,o){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,c,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))h=ll(h,this.staticRulesId);else{var v=Nf(Mn(this.rules,i,c,o)),A=Mf(Zl(this.baseHash,v)>>>0);if(!c.hasNameForId(this.componentId,A)){var D=o(v,".".concat(A),void 0,this.componentId);c.insertRules(this.componentId,A,D)}h=ll(h,A),this.staticRulesId=A}else{for(var x=Zl(this.baseHash,o.hash),m="",O=0;O<this.rules.length;O++){var S=this.rules[O];if(typeof S=="string")m+=S;else if(S){var C=Nf(Mn(S,i,c,o));x=Zl(x,C+O),m+=C}}if(m){var Z=Mf(x>>>0);c.hasNameForId(this.componentId,Z)||c.insertRules(this.componentId,Z,o(m,".".concat(Z),void 0,this.componentId)),h=ll(h,Z)}}return h},l}(),hr=$.createContext(void 0);hr.Consumer;function Sy(l){var i=$.useContext(hr),c=L.useMemo(function(){return function(o,h){if(!o)throw ol(14);if(il(o)){var v=o(h);return v}if(Array.isArray(o)||typeof o!="object")throw ol(8);return h?De(De({},h),o):o}(l.theme,i)},[l.theme,i]);return l.children?$.createElement(hr.Provider,{value:c},l.children):null}var Ef={};function xy(l,i,c){var o=Kf(l),h=l,v=!xf(l),A=i.attrs,D=A===void 0?uo:A,x=i.componentId,m=x===void 0?function(st,N){var V=typeof st!="string"?"sc":jp(st);Ef[V]=(Ef[V]||0)+1;var X="".concat(V,"-").concat(Nv(lo+V+Ef[V]));return N?"".concat(N,"-").concat(X):X}(i.displayName,i.parentComponentId):x,O=i.displayName,S=O===void 0?function(st){return xf(st)?"styled.".concat(st):"Styled(".concat(Zg(st),")")}(l):O,C=i.displayName&&i.componentId?"".concat(jp(i.displayName),"-").concat(i.componentId):i.componentId||m,Z=o&&h.attrs?h.attrs.concat(D).filter(Boolean):D,P=i.shouldForwardProp;if(o&&h.shouldForwardProp){var ft=h.shouldForwardProp;if(i.shouldForwardProp){var at=i.shouldForwardProp;P=function(st,N){return ft(st,N)&&at(st,N)}}else P=ft}var it=new Ay(c,C,o?h.componentStyle:void 0);function J(st,N){return function(V,X,pt){var Et=V.attrs,Lt=V.componentStyle,Mt=V.defaultProps,bt=V.foldedComponentIds,kt=V.styledComponentId,Qt=V.target,Ot=$.useContext(hr),H=Uf(),tt=V.shouldForwardProp||H.shouldForwardProp,rt=Rv(X,Ot,Mt)||Pl,gt=function(ht,ct,St){for(var Dt,W=De(De({},ct),{className:void 0,theme:St}),wt=0;wt<ht.length;wt+=1){var Rt=il(Dt=ht[wt])?Dt(W):Dt;for(var Bt in Rt)W[Bt]=Bt==="className"?ll(W[Bt],Rt[Bt]):Bt==="style"?De(De({},W[Bt]),Rt[Bt]):Rt[Bt]}return ct.className&&(W.className=ll(W.className,ct.className)),W}(Et,X,rt),b=gt.as||Qt,k={};for(var ut in gt)gt[ut]===void 0||ut[0]==="$"||ut==="as"||ut==="theme"&&gt.theme===rt||(ut==="forwardedAs"?k.as=gt.forwardedAs:tt&&!tt(ut,b)||(k[ut]=gt[ut]));var G=function(ht,ct){var St=Uf(),Dt=ht.generateAndInjectStyles(ct,St.styleSheet,St.stylis);return Dt}(Lt,gt),nt=ll(bt,kt);return G&&(nt+=" "+G),gt.className&&(nt+=" "+gt.className),k[xf(b)&&!Ov.has(b)?"class":"className"]=nt,pt&&(k.ref=pt),L.createElement(b,k)}(lt,st,N)}J.displayName=S;var lt=$.forwardRef(J);return lt.attrs=Z,lt.componentStyle=it,lt.displayName=S,lt.shouldForwardProp=P,lt.foldedComponentIds=o?ll(h.foldedComponentIds,h.styledComponentId):"",lt.styledComponentId=C,lt.target=o?h.target:l,Object.defineProperty(lt,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(st){this._foldedDefaultProps=o?function(N){for(var V=[],X=1;X<arguments.length;X++)V[X-1]=arguments[X];for(var pt=0,Et=V;pt<Et.length;pt++)Cf(N,Et[pt],!0);return N}({},h.defaultProps,st):st}}),Jf(lt,function(){return".".concat(lt.styledComponentId)}),v&&$v(lt,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),lt}function Fp(l,i){for(var c=[l[0]],o=0,h=i.length;o<h;o+=1)c.push(i[o],l[o+1]);return c}var Pp=function(l){return Object.assign(l,{isCss:!0})};function dt(l){for(var i=[],c=1;c<arguments.length;c++)i[c-1]=arguments[c];if(il(l)||dr(l))return Pp(Mn(Fp(uo,sr([l],i,!0))));var o=l;return i.length===0&&o.length===1&&typeof o[0]=="string"?Mn(o):Pp(Mn(Fp(o,i)))}function $f(l,i,c){if(c===void 0&&(c=Pl),!i)throw ol(1,i);var o=function(h){for(var v=[],A=1;A<arguments.length;A++)v[A-1]=arguments[A];return l(i,c,dt.apply(void 0,sr([h],v,!1)))};return o.attrs=function(h){return $f(l,i,De(De({},c),{attrs:Array.prototype.concat(c.attrs,h).filter(Boolean)}))},o.withConfig=function(h){return $f(l,i,De(De({},c),h))},o}var Gv=function(l){return $f(xy,l)},F=Gv;Ov.forEach(function(l){F[l]=Gv(l)});var Ey=function(){function l(i,c){this.rules=i,this.componentId=c,this.isStatic=qv(i),Fi.registerId(this.componentId+1)}return l.prototype.createStyles=function(i,c,o,h){var v=h(Nf(Mn(this.rules,c,o,h)),""),A=this.componentId+i;o.insertRules(A,A,v)},l.prototype.removeStyles=function(i,c){c.clearRules(this.componentId+i)},l.prototype.renderStyles=function(i,c,o,h){i>2&&Fi.registerId(this.componentId+i),this.removeStyles(i,o),this.createStyles(i,c,o,h)},l}();function Ty(l){for(var i=[],c=1;c<arguments.length;c++)i[c-1]=arguments[c];var o=dt.apply(void 0,sr([l],i,!1)),h="sc-global-".concat(Nv(JSON.stringify(o))),v=new Ey(o,h),A=function(x){var m=Uf(),O=$.useContext(hr),S=$.useRef(m.styleSheet.allocateGSInstance(h)).current;return m.styleSheet.server&&D(S,x,m.styleSheet,O,m.stylis),$.useLayoutEffect(function(){if(!m.styleSheet.server)return D(S,x,m.styleSheet,O,m.stylis),function(){return v.removeStyles(S,m.styleSheet)}},[S,x,m.styleSheet,O,m.stylis]),null};function D(x,m,O,S,C){if(v.isStatic)v.renderStyles(x,Gg,O,C);else{var Z=De(De({},m),{theme:Rv(m,S,A.defaultProps)});v.renderStyles(x,Z,O,C)}}return $.memo(A)}var wy=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const If="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Wf="inset 2px 2px 3px rgba(0,0,0,0.2)",ga=()=>dt`
  -webkit-text-fill-color: ${({theme:l})=>l.materialTextDisabled};
  color: ${({theme:l})=>l.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:l})=>l.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,ya=({background:l="material",color:i="materialText"}={})=>dt`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:c})=>c[l]};
  color: ${({theme:c})=>c[i]};
`,vr=({mainColor:l="black",secondaryColor:i="transparent",pixelSize:c=2})=>dt`
  background-image: ${[`linear-gradient(
      45deg,
      ${l} 25%,
      transparent 25%,
      transparent 75%,
      ${l} 75%
    )`,`linear-gradient(
      45deg,
      ${l} 25%,
      transparent 25%,
      transparent 75%,
      ${l} 75%
    )`].join(",")};
  background-color: ${i};
  background-size: ${`${c*2}px ${c*2}px`};
  background-position: 0 0, ${`${c}px ${c}px`};
`,cl=()=>dt`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:l})=>l.materialText};
  background: ${({$disabled:l,theme:i})=>l?i.flatLight:i.canvas};
  border: 2px solid ${({theme:l})=>l.canvas};
  outline: 2px solid ${({theme:l})=>l.flatDark};
  outline-offset: -4px;
`,Xl={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Dy=({theme:l,topLeftInner:i,bottomRightInner:c,hasShadow:o=!1,hasInsetShadow:h=!1})=>[o?If:!1,h?Wf:!1,i!==null?`inset 1px 1px 0px 1px ${l[i]}`:!1,c!==null?`inset -1px -1px 0 1px ${l[c]}`:!1].filter(Boolean).join(", "),se=({invert:l=!1,style:i="button"}={})=>{const c={topLeftOuter:l?"bottomRightOuter":"topLeftOuter",topLeftInner:l?"bottomRightInner":"topLeftInner",bottomRightInner:l?"topLeftInner":"bottomRightInner",bottomRightOuter:l?"topLeftOuter":"bottomRightOuter"};return dt`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:o})=>o[Xl[i][c.topLeftOuter]]};
    border-top-color: ${({theme:o})=>o[Xl[i][c.topLeftOuter]]};
    border-right-color: ${({theme:o})=>o[Xl[i][c.bottomRightOuter]]};
    border-bottom-color: ${({theme:o})=>o[Xl[i][c.bottomRightOuter]]};
    box-shadow: ${({theme:o,shadow:h})=>Dy({theme:o,topLeftInner:Xl[i][c.topLeftInner],bottomRightInner:Xl[i][c.bottomRightInner],hasShadow:h})};
  `},tu=()=>dt`
  outline: 2px dotted ${({theme:l})=>l.materialText};
`,_y=l=>Buffer.from(l).toString("base64"),Ry=typeof btoa<"u"?btoa:_y,ki=(l,i=0)=>{const c=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${i} 13 13)">
      <polygon fill="${l}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Ry(c)})`},Ff=(l="default")=>dt`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:i})=>vr({mainColor:l==="flat"?i.flatLight:i.material,secondaryColor:l==="flat"?i.canvas:i.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${ya()}
    ${l==="flat"?cl():se({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:i})=>i.material};
  }
  ::-webkit-scrollbar-button {
    ${ya()}
    ${l==="flat"?cl():se({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${l==="default"?se({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:i})=>ki(i.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:i})=>ki(i.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:i})=>ki(i.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:i})=>ki(i.materialText,0)};
  }
`,Oy=F.a`
  color: ${({theme:l})=>l.anchor};
  font-size: inherit;
  text-decoration: ${({underline:l})=>l?"underline":"none"};
  &:visited {
    color: ${({theme:l})=>l.anchorVisited};
  }
`,zy=L.forwardRef(({children:l,underline:i=!0,...c},o)=>$.createElement(Oy,{ref:o,underline:i,...c},l));zy.displayName="Anchor";const My=F.header`
  ${se()};
  ${ya()};

  position: ${l=>{var i;return(i=l.position)!==null&&i!==void 0?i:l.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ny=L.forwardRef(({children:l,fixed:i=!0,position:c="fixed",...o},h)=>$.createElement(My,{fixed:i,position:i!==!1?c:void 0,ref:h,...o},l));Ny.displayName="AppBar";const fl=()=>{};function ul(l,i,c){return c!==null&&l>c?c:i!==null&&l<i?i:l}function Cy(l){if(Math.abs(l)<1){const c=l.toExponential().split("e-"),o=c[0].split(".")[1];return(o?o.length:0)+parseInt(c[1],10)}const i=l.toString().split(".")[1];return i?i.length:0}function tv(l,i,c){const o=Math.round((l-c)/i)*i+c;return Number(o.toFixed(Cy(i)))}function Nn(l){return typeof l=="number"?`${l}px`:l}const By=F.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:l})=>`
    height: ${l};
    width: ${l};
    `}
  border-radius: ${({square:l})=>l?0:"50%"};
  overflow: hidden;
  ${({noBorder:l,theme:i})=>!l&&`
    border-top: 2px solid ${i.borderDark};
    border-left: 2px solid ${i.borderDark};
    border-bottom: 2px solid ${i.borderLightest};
    border-right: 2px solid ${i.borderLightest};
    background: ${i.material};
  `}
  ${({src:l})=>!l&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Uy=F.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,$y=L.forwardRef(({alt:l="",children:i,noBorder:c=!1,size:o=35,square:h=!1,src:v,...A},D)=>$.createElement(By,{noBorder:c,ref:D,size:Nn(o),square:h,src:v,...A},v?$.createElement(Uy,{src:v,alt:l}):i));$y.displayName="Avatar";const ze={sm:"28px",md:"36px",lg:"44px"},Hy=dt`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:l="md"})=>ze[l]};
  width: ${({fullWidth:l,size:i="md",square:c})=>l?"100%":c?ze[i]:"auto"};
  padding: ${({square:l})=>l?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:l})=>!l&&"2px"};
  }
  padding-top: ${({active:l,disabled:i})=>l&&!i&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,ro=F.button`
  ${({active:l,disabled:i,primary:c,theme:o,variant:h})=>h==="flat"?dt`
          ${cl()}
          ${c?`
          border: 2px solid ${o.checkmark};
            outline: 2px solid ${o.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${o.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!l&&!i&&tu}
            outline-offset: -4px;
          }
        `:h==="menu"||h==="thin"?dt`
          ${ya()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!i&&!l&&se({style:"buttonThin"})}
          }
          &:active {
            ${!i&&se({style:"buttonThinPressed"})}
          }
          ${l&&se({style:"buttonThinPressed"})}
          ${i&&ga()}
        `:dt`
          ${ya()};
          border: none;
          ${i&&ga()}
          ${l?vr({mainColor:o.material,secondaryColor:o.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${c?dt`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${o.borderDarkest};
                `:dt`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${se(l?{style:h==="raised"?"window":"button",invert:!0}:{style:h==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!i&&se({style:h==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!l&&!i&&tu}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${l?"0":"1px"};
          }
        `}
  ${Hy}
`,pr=L.forwardRef(({onClick:l,disabled:i=!1,children:c,type:o="button",fullWidth:h=!1,size:v="md",square:A=!1,active:D=!1,onTouchStart:x=fl,primary:m=!1,variant:O="default",...S},C)=>$.createElement(ro,{active:D,disabled:i,$disabled:i,fullWidth:h,onClick:i?void 0:l,onTouchStart:x,primary:m,ref:C,size:v,square:A,type:o,variant:O,...S},c));pr.displayName="Button";function Cn({defaultValue:l,onChange:i,onChangePropName:c="onChange",readOnly:o,value:h,valuePropName:v="value"}){const A=h!==void 0,[D,x]=L.useState(l),m=L.useCallback(O=>{A||x(O)},[A]);if(A&&typeof i!="function"&&!o){const O=`Warning: You provided a \`${v}\` prop to a component without an \`${c}\` handler.${v==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${c}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${c}\` function that updates \`${v}\`.`}`;console.warn(O)}return[A?h:D,m]}const Hf=F.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${l=>ze[l.size]};
  width: ${l=>l.square?ze[l.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${l=>l.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${l=>ze[l.size]};
  color: ${({theme:l})=>l.materialText};
  pointer-events: ${({$disabled:l})=>l?"none":"auto"};
  font-weight: ${({primary:l})=>l?"bold":"normal"};
  &:hover {
    ${({theme:l,$disabled:i})=>!i&&`
        color: ${l.materialTextInvert};
        background: ${l.hoverBackground};
      `}

    cursor: default;
  }
  ${l=>l.$disabled&&ga()}
`,Ly=L.forwardRef(({size:l="lg",disabled:i,square:c,children:o,onClick:h,primary:v,...A},D)=>$.createElement(Hf,{$disabled:i,size:l,square:c,onClick:i?void 0:h,primary:v,role:"menuitem",ref:D,"aria-disabled":i,...A},o));Ly.displayName="MenuListItem";const ky=F.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${l=>l.fullWidth?"100%":"auto"};
  padding: 4px;
  ${se({style:"window"})}
  ${ya()}
  ${l=>l.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;ky.displayName="MenuList";const Ra=20,Pi=F.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Ra}px;
  height: ${Ra}px;
  opacity: 0;
  z-index: -1;
`,Pf=F.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:l})=>l?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:l})=>l.materialText};
  ${l=>l.$disabled&&ga()}

  ${Hf} & {
    margin: 0;
    height: 100%;
  }
  ${Hf}:hover & {
    ${({$disabled:l,theme:i})=>!l&&dt`
        color: ${i.materialTextInvert};
      `};
  }
`,ts=F.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Pi}:focus ~ & {
    ${tu}
  }
  ${Pi}:not(:disabled) ~ &:active {
    ${tu}
  }
`,Oa=F.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:l})=>l.borderDark};
  border-top-color: ${({theme:l})=>l.borderDark};
  border-right-color: ${({theme:l})=>l.borderLightest};
  border-bottom-color: ${({theme:l})=>l.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:l})=>l.borderDarkest};
    border-top-color: ${({theme:l})=>l.borderDarkest};
    border-right-color: ${({theme:l})=>l.borderLight};
    border-bottom-color: ${({theme:l})=>l.borderLight};

    pointer-events: none;
    ${l=>l.shadow&&`box-shadow:${Wf};`}
  }
`,Yy=F.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Ff()}
`,jv=L.forwardRef(({children:l,shadow:i=!0,...c},o)=>$.createElement(Oa,{ref:o,shadow:i,...c},$.createElement(Yy,null,l)));jv.displayName="ScrollView";const Xv=dt`
  width: ${Ra}px;
  height: ${Ra}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Qy=F(Oa)`
  ${Xv}
  width: ${Ra}px;
  height: ${Ra}px;
  background: ${({$disabled:l,theme:i})=>l?i.material:i.canvas};
  &:before {
    box-shadow: none;
  }
`,qy=F.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:l,theme:i})=>l?i.flatLight:i.canvas};
  ${Xv}
  width: ${Ra-4}px;
  height: ${Ra-4}px;
  outline: none;
  border: 2px solid ${({theme:l})=>l.flatDark};
  background: ${({$disabled:l,theme:i})=>l?i.flatLight:i.canvas};
`,Gy=F.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:l,theme:i})=>l?i.checkmarkDisabled:i.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${l=>l.$disabled?l.theme.checkmarkDisabled:l.theme.checkmark};
  }
`,jy=F.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:l,theme:i})=>vr({mainColor:l?i.checkmarkDisabled:i.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Xy={flat:qy,default:Qy},Vy=L.forwardRef(({checked:l,className:i="",defaultChecked:c=!1,disabled:o=!1,indeterminate:h=!1,label:v="",onChange:A=fl,style:D={},value:x,variant:m="default",...O},S)=>{var C;const[Z,P]=Cn({defaultValue:c,onChange:A,readOnly:(C=O.readOnly)!==null&&C!==void 0?C:o,value:l}),ft=L.useCallback(J=>{const lt=J.target.checked;P(lt),A(J)},[A,P]),at=Xy[m];let it=null;return h?it=jy:Z&&(it=Gy),$.createElement(Pf,{$disabled:o,className:i,style:D},$.createElement(Pi,{disabled:o,onChange:o?void 0:ft,readOnly:o,type:"checkbox",value:x,checked:Z,"data-indeterminate":h,ref:S,...O}),$.createElement(at,{$disabled:o,role:"presentation"},it&&$.createElement(it,{$disabled:o,variant:m})),v&&$.createElement(ts,null,v))});Vy.displayName="Checkbox";const Vv=F.div`
  ${({orientation:l,theme:i,size:c="100%"})=>l==="vertical"?`
    height: ${Nn(c)};
    border-left: 2px solid ${i.borderDark};
    border-right: 2px solid ${i.borderLightest};
    margin: 0;
    `:`
    width: ${Nn(c)};
    border-bottom: 2px solid ${i.borderLightest};
    border-top: 2px solid ${i.borderDark};
    margin: 0;
    `}
`;Vv.displayName="Separator";const Zy=F(ro)`
  padding-left: 8px;
`,Ky=F(Vv)`
  height: 21px;
  position: relative;
  top: 0;
`,Zv=F.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Jy=F.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:l})=>l};

  ${({$disabled:l})=>l?dt`
          border: 2px solid ${({theme:i})=>i.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:i})=>i.materialTextDisabledShadow}
          );
        `:dt`
          border: 2px solid ${({theme:i})=>i.materialText};
        `}
  ${Zv}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${tu}
    outline-offset: -8px;
  }
`,Iy=F.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:l})=>l?dt`
          border-top: 6px solid ${({theme:i})=>i.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:i})=>i.materialTextDisabledShadow}
          );
        `:dt`
          border-top: 6px solid ${({theme:i})=>i.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:l})=>l==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Wy=L.forwardRef(({value:l,defaultValue:i,onChange:c=fl,disabled:o=!1,variant:h="default",...v},A)=>{var D;const[x,m]=Cn({defaultValue:i,onChange:c,readOnly:(D=v.readOnly)!==null&&D!==void 0?D:o,value:l}),O=S=>{const C=S.target.value;m(C),c(S)};return $.createElement(Zy,{disabled:o,as:"div",variant:h,size:"md"},$.createElement(Zv,{onChange:O,readOnly:o,disabled:o,value:x??"#008080",type:"color",ref:A,...v}),$.createElement(Jy,{$disabled:o,color:x??"#008080",role:"presentation"}),h==="default"&&$.createElement(Ky,{orientation:"vertical"}),$.createElement(Iy,{$disabled:o,variant:h}))});Wy.displayName="ColorInput";const Fy=F.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:l})=>dt`
    width: ${11*l}px;
    height: ${21*l}px;
    margin: ${l}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${vr({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:l})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-bg-color);
      border-right: ${l}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-primary-color);
      border-right: ${l}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${l}px;
      width: ${9*l}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${l}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${l*2}px);
      top: ${2*l}px;
      left: ${l}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-bg-color);
      border-right: ${l}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${l}px solid var(--react95-digit-primary-color);
      border-right: ${l}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${l}px;
      width: ${9*l}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${l}px;
    }
    span.center:after {
      bottom: ${l}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${l}px;
      border-top: ${l}px solid var(--react95-digit-bg-color);
      border-bottom: ${l}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*l}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${l}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${l*2}px);
      top: ${l}px;
      left: ${l*2}px;
    }
  `}
`,ev=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Py=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function tb({digit:l=0,pixelSize:i=2,...c}){const o=Py[Number(l)].map((h,v)=>h?`${ev[v]} active`:ev[v]);return $.createElement(Fy,{pixelSize:i,...c},o.map((h,v)=>$.createElement("span",{className:h,key:v})))}const eb=F.div`
  ${se({style:"status"})}
  display: inline-flex;
  background: #000000;
`,ab={sm:1,md:2,lg:3,xl:4},nb=L.forwardRef(({value:l=0,minLength:i=3,size:c="md",...o},h)=>{const v=L.useMemo(()=>l.toString().padStart(i,"0").split(""),[i,l]);return $.createElement(eb,{ref:h,...o},v.map((A,D)=>$.createElement(tb,{digit:A,pixelSize:ab[c],key:D})))});nb.displayName="Counter";const Kv=dt`
  display: flex;
  align-items: center;
  width: ${({fullWidth:l})=>l?"100%":"auto"};
  min-height: ${ze.md};
`,lb=F(Oa).attrs({"data-testid":"variant-default"})`
  ${Kv}
  background: ${({$disabled:l,theme:i})=>l?i.material:i.canvas};
`,ub=F.div.attrs({"data-testid":"variant-flat"})`
  ${cl()}
  ${Kv}
  position: relative;
`,Jv=dt`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:l})=>l.canvasText};
  ${({disabled:l,variant:i})=>i!=="flat"&&l&&ga()}
`,rb=F.input`
  ${Jv}
  padding: 0 8px;
`,ib=F.textarea`
  ${Jv}
  padding: 8px;
  resize: none;
  ${({variant:l})=>Ff(l)}
`,es=L.forwardRef(({className:l,disabled:i=!1,fullWidth:c,onChange:o=fl,shadow:h=!0,style:v,variant:A="default",...D},x)=>{const m=A==="flat"?ub:lb,O=L.useMemo(()=>{var S;return D.multiline?$.createElement(ib,{disabled:i,onChange:i?void 0:o,readOnly:i,ref:x,variant:A,...D}):$.createElement(rb,{disabled:i,onChange:i?void 0:o,readOnly:i,ref:x,type:(S=D.type)!==null&&S!==void 0?S:"text",variant:A,...D})},[i,o,D,x,A]);return $.createElement(m,{className:l,fullWidth:c,$disabled:i,shadow:h,style:v},O)});es.displayName="TextInput";const ob=F.div`
  display: inline-flex;
  align-items: center;
`,Lf=F(pr)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:l})=>l==="flat"?dt`
          height: calc(50% - 1px);
        `:dt`
          height: 50%;
        `}
`,cb=F.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:l})=>l==="flat"?dt`
          height: calc(${ze.md} - 4px);
        `:dt`
          height: ${ze.md};
          margin-left: 2px;
        `}
`,av=F.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:l})=>l?dt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:i})=>i.materialText};
        `:dt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:i})=>i.materialText};
        `}
  ${Lf}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:l})=>l.materialTextDisabledShadow}
    );
    ${({invert:l})=>l?dt`
            border-bottom-color: ${({theme:i})=>i.materialTextDisabled};
          `:dt`
            border-top-color: ${({theme:i})=>i.materialTextDisabled};
          `}
  }
`,Iv=L.forwardRef(({className:l,defaultValue:i,disabled:c=!1,max:o,min:h,onChange:v,readOnly:A,step:D=1,style:x,value:m,variant:O="default",width:S,...C},Z)=>{const[P,ft]=Cn({defaultValue:i,onChange:v,readOnly:A,value:m}),at=L.useCallback(V=>{const X=parseFloat(V.target.value);ft(X)},[ft]),it=L.useCallback(V=>{const X=ul(parseFloat(((P??0)+V).toFixed(2)),h??null,o??null);ft(X),v?.(X)},[o,h,v,ft,P]),J=L.useCallback(()=>{P!==void 0&&v?.(P)},[v,P]),lt=L.useCallback(()=>{it(D)},[it,D]),st=L.useCallback(()=>{it(-D)},[it,D]),N=O==="flat"?"flat":"raised";return $.createElement(ob,{className:l,style:{...x,width:S!==void 0?Nn(S):"auto"},...C},$.createElement(es,{value:P,variant:O,onChange:at,disabled:c,type:"number",readOnly:A,ref:Z,fullWidth:!0,onBlur:J}),$.createElement(cb,{variant:O},$.createElement(Lf,{"data-testid":"increment",variant:N,disabled:c||A,onClick:lt},$.createElement(av,{invert:!0})),$.createElement(Lf,{"data-testid":"decrement",variant:N,disabled:c||A,onClick:st},$.createElement(av,null))))});Iv.displayName="NumberInput";function fb(){const l="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let i="";for(let c=0;c<10;c+=1)i+=l[Math.floor(Math.random()*l.length)];return i}const Wv=l=>L.useMemo(()=>fb(),[l]),Fv=dt`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Pv=dt`
  background: ${({theme:l})=>l.hoverBackground};
  color: ${({theme:l})=>l.canvasTextInvert};
`,as=F.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,sb=F.div`
  ${Fv}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${as}:focus & {
    ${Pv}
    border: 2px dotted ${({theme:l})=>l.focusSecondary};
  }
`,t0=dt`
  height: ${ze.md};
  display: inline-block;
  color: ${({$disabled:l=!1,theme:i})=>l?ga():i.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:l})=>l?"default":"pointer"};
`,db=F(Oa)`
  ${t0}
  background: ${({$disabled:l=!1,theme:i})=>l?i.material:i.canvas};
  &:focus {
    outline: 0;
  }
`,hb=F.div`
  ${cl()}
  ${t0}
  background: ${({$disabled:l=!1,theme:i})=>l?i.flatLight:i.canvas};
`,pb=F.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Fv}
  cursor: pointer;
  &:disabled {
    ${ga()};
    background: ${({theme:l})=>l.material};
    cursor: default;
  }
`,e0=F(ro).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:l="default"})=>l==="flat"?dt`
          height: 100%;
          margin-right: 0;
        `:dt`
          height: 100%;
        `}
  ${({native:l=!1,variant:i="default"})=>l&&(i==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:l=!1,native:i=!1})=>l||i?"none":"auto"}
`,vb=F.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:l=!1,theme:i})=>l?i.materialTextDisabled:i.materialText};
  ${({$disabled:l=!1,theme:i})=>l&&`
    filter: drop-shadow(1px 1px 0px ${i.materialTextDisabledShadow});
    border-top-color: ${i.materialTextDisabled};
    `}
  ${e0}:active & {
    margin-top: 2px;
  }
`,mb=F.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:l})=>l.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${If};
  ${({variant:l="default"})=>l==="flat"?dt`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:i})=>i.flatDark};
        `:dt`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:i})=>i.borderDarkest};
        `}
  ${({variant:l="default"})=>Ff(l)}
`,gb=F.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${ze.md} - 4px);
  line-height: calc(${ze.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:l})=>l.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:l})=>l?Pv:""}
  user-select: none;
`,yb=[],a0=({className:l,defaultValue:i,disabled:c,native:o,onChange:h,options:v=yb,readOnly:A,style:D,value:x,variant:m,width:O})=>{var S;const C=L.useMemo(()=>v.filter(Boolean),[v]),[Z,P]=Cn({defaultValue:i??((S=C?.[0])===null||S===void 0?void 0:S.value),onChange:h,readOnly:A,value:x}),ft=!(c||A),at=L.useMemo(()=>({className:l,style:{...D,width:O}}),[l,D,O]),it=L.useMemo(()=>$.createElement(e0,{as:"div","data-testid":"select-button",$disabled:c,native:o,tabIndex:-1,variant:m==="flat"?"flat":"raised"},$.createElement(vb,{"data-testid":"select-icon",$disabled:c})),[c,o,m]),J=L.useMemo(()=>m==="flat"?hb:db,[m]);return L.useMemo(()=>({isEnabled:ft,options:C,value:Z,setValue:P,wrapperProps:at,DropdownButton:it,Wrapper:J}),[it,J,ft,C,P,Z,at])},bb={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Ab=1e3,Sb=({onBlur:l,onChange:i,onClose:c,onFocus:o,onKeyDown:h,onMouseDown:v,onOpen:A,open:D,options:x,readOnly:m,value:O,selectRef:S,setValue:C,wrapperRef:Z})=>{const P=L.useRef(null),ft=L.useRef([]),at=L.useRef(0),it=L.useRef(0),J=L.useRef(),lt=L.useRef("search"),st=L.useRef(""),N=L.useRef(),[V,X]=Cn({defaultValue:!1,onChange:A,onChangePropName:"onOpen",readOnly:m,value:D,valuePropName:"open"}),pt=L.useMemo(()=>{const W=x.findIndex(wt=>wt.value===O);return at.current=ul(W,0,null),x[W]},[x,O]),[Et,Lt]=L.useState(x[0]),Mt=L.useCallback(W=>{const wt=P.current,Rt=ft.current[W];if(!Rt||!wt){J.current=W;return}J.current=void 0;const Bt=wt.clientHeight,Vt=wt.scrollTop,ue=wt.scrollTop+Bt,Zt=Rt.offsetTop,Me=Rt.offsetHeight,re=Rt.offsetTop+Rt.offsetHeight;Zt<Vt&&wt.scrollTo(0,Zt),re>ue&&wt.scrollTo(0,Zt-Bt+Me),Rt.focus({preventScroll:!0})},[P]),bt=L.useCallback((W,{scroll:wt}={})=>{var Rt;const Bt=x.length-1;let Vt;switch(W){case"first":{Vt=0;break}case"last":{Vt=Bt;break}case"next":{Vt=ul(it.current+1,0,Bt);break}case"previous":{Vt=ul(it.current-1,0,Bt);break}case"selected":{Vt=ul((Rt=at.current)!==null&&Rt!==void 0?Rt:0,0,Bt);break}default:Vt=W}it.current=Vt,Lt(x[Vt]),wt&&Mt(Vt)},[it,x,Mt]),kt=L.useCallback(({fromEvent:W})=>{X(!0),bt("selected",{scroll:!0}),A?.({fromEvent:W})},[bt,A,X]),Qt=L.useCallback(()=>{lt.current="search",st.current="",clearTimeout(N.current)},[]),Ot=L.useCallback(({focusSelect:W,fromEvent:wt})=>{var Rt;c?.({fromEvent:wt}),X(!1),Lt(x[0]),Qt(),J.current=void 0,W&&((Rt=S.current)===null||Rt===void 0||Rt.focus())},[Qt,c,x,S,X]),H=L.useCallback(({fromEvent:W})=>{V?Ot({focusSelect:!1,fromEvent:W}):kt({fromEvent:W})},[Ot,kt,V]),tt=L.useCallback((W,{fromEvent:wt})=>{at.current!==W&&(at.current=W,C(x[W].value),i?.(x[W],{fromEvent:wt}))},[i,x,C]),rt=L.useCallback(({focusSelect:W,fromEvent:wt})=>{tt(it.current,{fromEvent:wt}),Ot({focusSelect:W,fromEvent:wt})},[Ot,tt]),gt=L.useCallback((W,{fromEvent:wt,select:Rt})=>{var Bt;switch(lt.current==="cycleFirstLetter"&&W!==st.current&&(lt.current="search"),W===st.current?lt.current="cycleFirstLetter":st.current+=W,lt.current){case"search":{let Vt=x.findIndex(ue=>{var Zt;return((Zt=ue.label)===null||Zt===void 0?void 0:Zt.toLocaleUpperCase().indexOf(st.current))===0});Vt<0&&(Vt=x.findIndex(ue=>{var Zt;return((Zt=ue.label)===null||Zt===void 0?void 0:Zt.toLocaleUpperCase().indexOf(W))===0}),st.current=W),Vt>=0&&(Rt?tt(Vt,{fromEvent:wt}):bt(Vt,{scroll:!0}));break}case"cycleFirstLetter":{const Vt=Rt?(Bt=at.current)!==null&&Bt!==void 0?Bt:-1:it.current;let ue=x.findIndex((Zt,Me)=>{var re;return Me>Vt&&((re=Zt.label)===null||re===void 0?void 0:re.toLocaleUpperCase().indexOf(W))===0});ue<0&&(ue=x.findIndex(Zt=>{var Me;return((Me=Zt.label)===null||Me===void 0?void 0:Me.toLocaleUpperCase().indexOf(W))===0})),ue>=0&&(Rt?tt(ue,{fromEvent:wt}):bt(ue,{scroll:!0}));break}}clearTimeout(N.current),N.current=setTimeout(()=>{lt.current==="search"&&(st.current="")},Ab)},[bt,x,tt]),b=L.useCallback(W=>{var wt;W.button===0&&(W.preventDefault(),(wt=S.current)===null||wt===void 0||wt.focus(),H({fromEvent:W}),v?.(W))},[v,S,H]),k=L.useCallback(W=>{rt({focusSelect:!0,fromEvent:W})},[rt]),ut=L.useCallback(W=>{const{altKey:wt,code:Rt,ctrlKey:Bt,metaKey:Vt,shiftKey:ue}=W,{ARROW_DOWN:Zt,ARROW_UP:Me,END:re,ENTER:Qe,ESC:Le,HOME:ba,SPACE:ea,TAB:Aa}=bb,Ia=wt||Bt||Vt||ue;if(!(Rt===Aa&&(wt||Bt||Vt)||Rt!==Aa&&Ia))switch(Rt){case Zt:{if(W.preventDefault(),!V){kt({fromEvent:W});return}bt("next",{scroll:!0});break}case Me:{if(W.preventDefault(),!V){kt({fromEvent:W});return}bt("previous",{scroll:!0});break}case re:{if(W.preventDefault(),!V){kt({fromEvent:W});return}bt("last",{scroll:!0});break}case Qe:{if(!V)return;W.preventDefault(),rt({focusSelect:!0,fromEvent:W});break}case Le:{if(!V)return;W.preventDefault(),Ot({focusSelect:!0,fromEvent:W});break}case ba:{if(W.preventDefault(),!V){kt({fromEvent:W});return}bt("first",{scroll:!0});break}case ea:{W.preventDefault(),V?rt({focusSelect:!0,fromEvent:W}):kt({fromEvent:W});break}case Aa:{if(!V)return;ue||W.preventDefault(),rt({focusSelect:!ue,fromEvent:W});break}default:!Ia&&Rt.match(/^Key/)&&(W.preventDefault(),W.stopPropagation(),gt(Rt.replace(/^Key/,""),{select:!V,fromEvent:W}))}},[bt,Ot,V,kt,gt,rt]),G=L.useCallback(W=>{ut(W),h?.(W)},[ut,h]),nt=L.useCallback(W=>{bt(W)},[bt]),ht=L.useCallback(W=>{V||(Qt(),l?.(W))},[Qt,l,V]),ct=L.useCallback(W=>{Qt(),o?.(W)},[Qt,o]),St=L.useCallback(W=>{P.current=W,J.current!==void 0&&Mt(J.current)},[Mt]),Dt=L.useCallback((W,wt)=>{ft.current[wt]=W,J.current===wt&&Mt(J.current)},[Mt]);return L.useEffect(()=>{if(!V)return()=>{};const W=wt=>{var Rt;const Bt=wt.target;!((Rt=Z.current)===null||Rt===void 0)&&Rt.contains(Bt)||(wt.preventDefault(),Ot({focusSelect:!1,fromEvent:wt}))};return document.addEventListener("mousedown",W),()=>{document.removeEventListener("mousedown",W)}},[Ot,V,Z]),L.useMemo(()=>({activeOption:Et,handleActivateOptionIndex:nt,handleBlur:ht,handleButtonKeyDown:G,handleDropdownKeyDown:ut,handleFocus:ct,handleMouseDown:b,handleOptionClick:k,handleSetDropdownRef:St,handleSetOptionRef:Dt,open:V,selectedOption:pt}),[Et,nt,ht,G,ct,ut,b,k,St,Dt,V,pt])},xb=L.forwardRef(({className:l,defaultValue:i,disabled:c,onChange:o,options:h,readOnly:v,style:A,value:D,variant:x,width:m,...O},S)=>{const{isEnabled:C,options:Z,setValue:P,value:ft,DropdownButton:at,Wrapper:it}=a0({defaultValue:i,disabled:c,native:!0,onChange:o,options:h,readOnly:v,value:D,variant:x}),J=L.useCallback(lt=>{const st=Z.find(N=>N.value===lt.target.value);st&&(P(st.value),o?.(st,{fromEvent:lt}))},[o,Z,P]);return $.createElement(it,{className:l,style:{...A,width:m}},$.createElement(as,null,$.createElement(pb,{...O,disabled:c,onChange:C?J:fl,ref:S,value:ft},Z.map((lt,st)=>{var N;return $.createElement("option",{key:`${lt.value}-${st}`,value:lt.value},(N=lt.label)!==null&&N!==void 0?N:lt.value)})),at))});xb.displayName="SelectNative";function Eb({activateOptionIndex:l,active:i,index:c,onClick:o,option:h,selected:v,setRef:A}){const D=L.useCallback(()=>{l(c)},[l,c]),x=L.useCallback(O=>{A(O,c)},[c,A]),m=Wv();return $.createElement(gb,{active:i,"aria-selected":v?"true":void 0,"data-value":h.value,id:m,onClick:o,onMouseEnter:D,ref:x,role:"option",tabIndex:0},h.label)}function Tb({"aria-label":l,"aria-labelledby":i,className:c,defaultValue:o,disabled:h=!1,formatDisplay:v,inputProps:A,labelId:D,menuMaxHeight:x,name:m,onBlur:O,onChange:S,onClose:C,onFocus:Z,onKeyDown:P,onMouseDown:ft,onOpen:at,open:it,options:J,readOnly:lt,shadow:st=!0,style:N,variant:V="default",value:X,width:pt="auto",...Et},Lt){const{isEnabled:Mt,options:bt,setValue:kt,value:Qt,wrapperProps:Ot,DropdownButton:H,Wrapper:tt}=a0({className:c,defaultValue:o,disabled:h,native:!1,onChange:S,options:J,style:N,readOnly:lt,value:X,variant:V,width:pt}),rt=L.useRef(null),gt=L.useRef(null),b=L.useRef(null),{activeOption:k,handleActivateOptionIndex:ut,handleBlur:G,handleButtonKeyDown:nt,handleDropdownKeyDown:ht,handleFocus:ct,handleMouseDown:St,handleOptionClick:Dt,handleSetDropdownRef:W,handleSetOptionRef:wt,open:Rt,selectedOption:Bt}=Sb({onBlur:O,onChange:S,onClose:C,onFocus:Z,onKeyDown:P,onMouseDown:ft,onOpen:at,open:it,options:bt,value:Qt,selectRef:gt,setValue:kt,wrapperRef:b});L.useImperativeHandle(Lt,()=>({focus:Qe=>{var Le;(Le=gt.current)===null||Le===void 0||Le.focus(Qe)},node:rt.current,value:String(Qt)}),[Qt]);const Vt=L.useMemo(()=>Bt?typeof v=="function"?v(Bt):Bt.label:"",[v,Bt]),ue=Mt?1:void 0,Zt=L.useMemo(()=>x?{overflow:"auto",maxHeight:x}:void 0,[x]),Me=Wv(),re=L.useMemo(()=>bt.map((Qe,Le)=>{const ba=`${Qt}-${Le}`,ea=Qe===k,Aa=Qe===Bt;return $.createElement(Eb,{activateOptionIndex:ut,active:ea,index:Le,key:ba,onClick:Dt,option:Qe,selected:Aa,setRef:wt})}),[k,ut,Dt,wt,bt,Bt,Qt]);return $.createElement(tt,{...Ot,$disabled:h,ref:b,shadow:st,style:{...N,width:pt}},$.createElement("input",{name:m,ref:rt,type:"hidden",value:String(Qt),...A}),$.createElement(as,{"aria-disabled":h,"aria-expanded":Rt,"aria-haspopup":"listbox","aria-label":l,"aria-labelledby":i??D,"aria-owns":Mt&&Rt?Me:void 0,onBlur:G,onFocus:ct,onKeyDown:nt,onMouseDown:Mt?St:ft,ref:gt,role:"button",tabIndex:ue,...Et},$.createElement(sb,null,Vt),H),Mt&&Rt&&$.createElement(mb,{id:Me,onKeyDown:ht,ref:W,role:"listbox",style:Zt,tabIndex:0,variant:V},re))}const n0=L.forwardRef(Tb);n0.displayName="Select";const wb=F.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${l=>l.noPadding?"0":"4px"};
`,kf=L.forwardRef(function({children:i,noPadding:c=!1,...o},h){return $.createElement(wb,{noPadding:c,ref:h,...o},i)});kf.displayName="Toolbar";const Db=F.div`
  padding: 16px;
`,ns=L.forwardRef(function({children:i,...c},o){return $.createElement(Db,{ref:o,...c},i)});ns.displayName="WindowContent";const _b=F.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:l})=>l.material};
  ${({active:l})=>l===!1?dt`
          background: ${({theme:i})=>i.headerNotActiveBackground};
          color: ${({theme:i})=>i.headerNotActiveText};
        `:dt`
          background: ${({theme:i})=>i.headerBackground};
          color: ${({theme:i})=>i.headerText};
        `}

  ${ro} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,ls=L.forwardRef(function({active:i=!0,children:c,...o},h){return $.createElement(_b,{active:i,ref:h,...o},c)});ls.displayName="WindowHeader";const Rb=F.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${se({style:"window"})}
  ${ya()}
`,Ob=F.span`
  ${({theme:l})=>dt`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${l.borderLightest} 16.67%,
      ${l.material} 16.67%,
      ${l.material} 33.33%,
      ${l.borderDark} 33.33%,
      ${l.borderDark} 50%,
      ${l.borderLightest} 50%,
      ${l.borderLightest} 66.67%,
      ${l.material} 66.67%,
      ${l.material} 83.33%,
      ${l.borderDark} 83.33%,
      ${l.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,us=L.forwardRef(({children:l,resizable:i=!1,resizeRef:c,shadow:o=!0,...h},v)=>$.createElement(Rb,{ref:v,shadow:o,...h},l,i&&$.createElement(Ob,{"data-testid":"resizeHandle",ref:c})));us.displayName="Window";const zb=F(jv)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:l})=>l.canvas};
`,Mb=F.div`
  display: flex;
  background: ${({theme:l})=>l.materialDark};
  color: #dfe0e3;
`,Nb=F.div`
  display: flex;
  flex-wrap: wrap;
`,Ka=F.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Cb=F.span`
  cursor: pointer;

  background: ${({active:l,theme:i})=>l?i.hoverBackground:"transparent"};
  color: ${({active:l,theme:i})=>l?i.canvasTextInvert:i.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:l,active:i})=>i?"none":l.materialDark};
  }
`,Bb=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Ub(l,i){return new Date(l,i+1,0).getDate()}function $b(l,i,c){return new Date(l,i,c).getDay()}function Hb(l){const i=new Date(Date.parse(l)),c=i.getUTCDate(),o=i.getUTCMonth(),h=i.getUTCFullYear();return{day:c,month:o,year:h}}const Lb=L.forwardRef(({className:l,date:i=new Date().toISOString(),onAccept:c,onCancel:o,shadow:h=!0},v)=>{const[A,D]=L.useState(()=>Hb(i)),{year:x,month:m,day:O}=A,S=L.useCallback(({value:at})=>{D(it=>({...it,month:at}))},[]),C=L.useCallback(at=>{D(it=>({...it,year:at}))},[]),Z=L.useCallback(at=>{D(it=>({...it,day:at}))},[]),P=L.useCallback(()=>{const at=[A.year,A.month+1,A.day].map(it=>String(it).padStart(2,"0")).join("-");c?.(at)},[A.day,A.month,A.year,c]),ft=L.useMemo(()=>{const at=Array.from({length:42}),it=$b(x,m,1);let J=O;const lt=Ub(x,m);return J=J<lt?J:lt,at.forEach((st,N)=>{if(N>=it&&N<lt+it){const V=N-it+1;at[N]=$.createElement(Ka,{key:N,onClick:()=>{Z(V)}},$.createElement(Cb,{active:V===J},V))}else at[N]=$.createElement(Ka,{key:N})}),at},[O,Z,m,x]);return $.createElement(us,{className:l,ref:v,shadow:h,style:{margin:20}},$.createElement(ls,null,$.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),$.createElement(ns,null,$.createElement(kf,{noPadding:!0,style:{justifyContent:"space-between"}},$.createElement(n0,{options:Bb,value:m,onChange:S,width:128,menuMaxHeight:200}),$.createElement(Iv,{value:x,onChange:C,width:100})),$.createElement(zb,null,$.createElement(Mb,null,$.createElement(Ka,null,"S"),$.createElement(Ka,null,"M"),$.createElement(Ka,null,"T"),$.createElement(Ka,null,"W"),$.createElement(Ka,null,"T"),$.createElement(Ka,null,"F"),$.createElement(Ka,null,"S")),$.createElement(Nb,null,ft)),$.createElement(kf,{noPadding:!0,style:{justifyContent:"space-between"}},$.createElement(pr,{fullWidth:!0,onClick:o,disabled:!o},"Cancel"),$.createElement(pr,{fullWidth:!0,onClick:c?P:void 0,disabled:!c},"OK"))))});Lb.displayName="DatePicker";const kb=l=>{switch(l){case"status":case"well":return dt`
        ${se({style:"status"})}
      `;case"window":case"outside":return dt`
        ${se({style:"window"})}
      `;case"field":return dt`
        ${se({style:"field"})}
      `;default:return dt`
        ${se()}
      `}},Yb=F.div`
  position: relative;
  font-size: 1rem;
  ${({variant:l})=>kb(l)}
  ${({variant:l})=>ya(l==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,l0=L.forwardRef(({children:l,shadow:i=!1,variant:c="window",...o},h)=>$.createElement(Yb,{ref:h,shadow:i,variant:c,...o},l));l0.displayName="Frame";const Qb=F.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:l,variant:i})=>i==="flat"?l.flatDark:l.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:l})=>l.materialText};
  ${({variant:l})=>l!=="flat"&&dt`
      box-shadow: -1px -1px 0 1px ${({theme:i})=>i.borderDark},
        inset -1px -1px 0 1px ${({theme:i})=>i.borderDark};
    `}
  ${l=>l.$disabled&&ga()}
`,qb=F.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:l,variant:i})=>i==="flat"?l.canvas:l.material};
`,Gb=L.forwardRef(({label:l,disabled:i=!1,variant:c="default",children:o,...h},v)=>$.createElement(Qb,{"aria-disabled":i,$disabled:i,variant:c,ref:v,...h},l&&$.createElement(qb,{variant:c},l),o));Gb.displayName="GroupBox";const jb=F.div`
  ${({theme:l,size:i="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Nn(i)};
  width: 5px;
  border-top: 2px solid ${l.borderLightest};
  border-left: 2px solid ${l.borderLightest};
  border-bottom: 2px solid ${l.borderDark};
  border-right: 2px solid ${l.borderDark};
  background: ${l.material};
`}
`;jb.displayName="Handle";const Xb="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Vb=F.div`
  display: inline-block;
  height: ${({size:l})=>Nn(l)};
  width: ${({size:l})=>Nn(l)};
`,Zb=F.span`
  display: block;
  background: ${Xb};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Kb=L.forwardRef(({size:l=30,...i},c)=>$.createElement(Vb,{size:l,ref:c,...i},$.createElement(Zb,null)));Kb.displayName="Hourglass";const Jb=F.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Ib=F.div`
  position: relative;
`,Wb=F.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:l})=>l.material};
  border-top: 4px solid ${({theme:l})=>l.borderLightest};
  border-left: 4px solid ${({theme:l})=>l.borderLightest};
  border-bottom: 4px solid ${({theme:l})=>l.borderDark};
  border-right: 4px solid ${({theme:l})=>l.borderDark};

  outline: 1px dotted ${({theme:l})=>l.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:l})=>l.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:l})=>l.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Fb=F(Oa).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Pb=F.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:l})=>l.material};
  border-left: 2px solid ${({theme:l})=>l.borderLightest};
  border-bottom: 2px solid ${({theme:l})=>l.borderDarkest};
  border-right: 2px solid ${({theme:l})=>l.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:l})=>l.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:l})=>l.material};
    border-left: 2px solid ${({theme:l})=>l.borderLightest};
    border-right: 2px solid ${({theme:l})=>l.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:l})=>l.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:l})=>l.material};
    border: 2px solid ${({theme:l})=>l.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:l})=>l.borderLightest},
      1px 1px 0 1px ${({theme:l})=>l.borderDarkest};
  }
`,t1=L.forwardRef(({backgroundStyles:l,children:i,...c},o)=>$.createElement(Jb,{ref:o,...c},$.createElement(Ib,null,$.createElement(Wb,null,$.createElement(Fb,{style:l},i)),$.createElement(Pb,null))));t1.displayName="Monitor";const e1=F.div`
  display: inline-block;
  height: ${ze.md};
  width: 100%;
`,a1=F(Oa)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,u0=dt`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,n1=F.div`
  position: relative;
  top: 4px;
  ${u0}
  background: ${({theme:l})=>l.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:l})=>l.materialText};
`,l1=F.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${u0}
  color: ${({theme:l})=>l.materialTextInvert};
  background: ${({theme:l})=>l.progress};
  clip-path: polygon(
    0 0,
    ${({value:l=0})=>l}% 0,
    ${({value:l=0})=>l}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,u1=F.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,r0=17,r1=F.span`
  display: inline-block;
  width: ${r0}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:l})=>l.progress};
  border-color: ${({theme:l})=>l.material};
  border-width: 0px 1px;
  border-style: solid;
`,i1=L.forwardRef(({hideValue:l=!1,shadow:i=!0,value:c,variant:o="default",...h},v)=>{const A=l?null:`${c}%`,D=L.useRef(null),[x,m]=L.useState([]),O=L.useCallback(()=>{if(!D.current||c===void 0)return;const S=D.current.getBoundingClientRect().width,C=Math.round(c/100*S/r0);m(Array.from({length:C}))},[c]);return L.useEffect(()=>(O(),window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)),[O]),$.createElement(e1,{"aria-valuenow":c!==void 0?Math.round(c):void 0,ref:v,role:"progressbar",variant:o,...h},$.createElement(a1,{variant:o,shadow:i},o==="default"?$.createElement($.Fragment,null,$.createElement(n1,{"data-testid":"defaultProgress1"},A),$.createElement(l1,{"data-testid":"defaultProgress2",value:c},A)):$.createElement(u1,{ref:D,"data-testid":"tileProgress"},x.map((S,C)=>$.createElement(r1,{key:C})))))});i1.displayName="ProgressBar";const i0=dt`
  width: ${Ra}px;
  height: ${Ra}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,o1=F(Oa)`
  ${i0}
  background: ${({$disabled:l,theme:i})=>l?i.material:i.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,c1=F.div`
  ${cl()}
  ${i0}
  outline: none;
  background: ${({$disabled:l,theme:i})=>l?i.flatLight:i.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:l})=>l.flatDark};
    border-radius: 50%;
  }
`,f1=F.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${l=>l.$disabled?l.theme.checkmarkDisabled:l.theme.checkmark};
`,s1={flat:c1,default:o1},d1=L.forwardRef(({checked:l,className:i="",disabled:c=!1,label:o="",onChange:h,style:v={},variant:A="default",...D},x)=>{const m=s1[A];return $.createElement(Pf,{$disabled:c,className:i,style:v},$.createElement(m,{$disabled:c,role:"presentation"},l&&$.createElement(f1,{$disabled:c,variant:A})),$.createElement(Pi,{disabled:c,onChange:c?void 0:h,readOnly:c,type:"radio",checked:l,ref:x,...D}),o&&$.createElement(ts,null,o))});d1.displayName="Radio";const h1=typeof window<"u"?L.useLayoutEffect:L.useEffect;function nl(l){const i=L.useRef(l);return h1(()=>{i.current=l}),L.useCallback((...c)=>(0,i.current)(...c),[])}function nv(l,i){typeof l=="function"?l(i):l&&(l.current=i)}function lv(l,i){return L.useMemo(()=>l==null&&i==null?null:c=>{nv(l,c),nv(i,c)},[l,i])}var p1=yv();let io=!0,Yf=!1,uv;const v1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function m1(l){if("type"in l){const{type:i,tagName:c}=l;if(c==="INPUT"&&v1[i]&&!l.readOnly||c==="TEXTAREA"&&!l.readOnly)return!0}return!!("isContentEditable"in l&&l.isContentEditable)}function g1(l){l.metaKey||l.altKey||l.ctrlKey||(io=!0)}function Tf(){io=!1}function y1(){this.visibilityState==="hidden"&&Yf&&(io=!0)}function b1(l){l.addEventListener("keydown",g1,!0),l.addEventListener("mousedown",Tf,!0),l.addEventListener("pointerdown",Tf,!0),l.addEventListener("touchstart",Tf,!0),l.addEventListener("visibilitychange",y1,!0)}function A1(l){const{target:i}=l;try{return i.matches(":focus-visible")}catch{}return io||m1(i)}function S1(){Yf=!0,window.clearTimeout(uv),uv=window.setTimeout(()=>{Yf=!1},100)}function x1(){const l=L.useCallback(i=>{const c=p1.findDOMNode(i);c!=null&&b1(c.ownerDocument)},[]);return{isFocusVisible:A1,onBlurVisible:S1,ref:l}}function E1(l,i,c){return(c-i)*l+i}function Yi(l,i){if(i!==void 0&&"changedTouches"in l){for(let c=0;c<l.changedTouches.length;c+=1){const o=l.changedTouches[c];if(o.identifier===i)return{x:o.clientX,y:o.clientY}}return!1}return"clientX"in l?{x:l.clientX,y:l.clientY}:!1}function Qi(l){return l&&l.ownerDocument||document}function T1(l,i){var c;const{index:o}=(c=l.reduce((h,v,A)=>{const D=Math.abs(i-v);return h===null||D<h.distance||D===h.distance?{distance:D,index:A}:h},null))!==null&&c!==void 0?c:{};return o??-1}const w1=F.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:l})=>l?"41px":"39px"};
    ${({isFocused:l,theme:i})=>l&&`
        outline: 2px dotted ${i.materialText};
        `}
  }

  ${({orientation:l,size:i})=>l==="vertical"?dt`
          height: ${i};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:c})=>c?"41px":"39px"};
          }
        `:dt`
          width: ${i};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:c})=>c?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:l})=>l?"none":"auto"};
`,o0=()=>dt`
  position: absolute;
  ${({orientation:l})=>l==="vertical"?dt`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:dt`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,D1=F(Oa)`
  ${o0()}
`,_1=F(Oa)`
  ${o0()}

  border-left-color: ${({theme:l})=>l.flatLight};
  border-top-color: ${({theme:l})=>l.flatLight};
  border-right-color: ${({theme:l})=>l.canvas};
  border-bottom-color: ${({theme:l})=>l.canvas};
  &:before {
    border-left-color: ${({theme:l})=>l.flatDark};
    border-top-color: ${({theme:l})=>l.flatDark};
    border-right-color: ${({theme:l})=>l.flatLight};
    border-bottom-color: ${({theme:l})=>l.flatLight};
  }
`,R1=F.span`
  position: relative;
  ${({orientation:l})=>l==="vertical"?dt`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:dt`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:l})=>l==="flat"?dt`
          ${cl()}
          outline: 2px solid ${({theme:i})=>i.flatDark};
          background: ${({theme:i})=>i.flatLight};
        `:dt`
          ${ya()}
          ${se()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:l,theme:i})=>l&&vr({mainColor:i.material,secondaryColor:i.borderLightest})}
`,Kl=6,O1=F.span`
  display: inline-block;
  position: absolute;

  ${({orientation:l})=>l==="vertical"?dt`
          right: ${-Kl-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Kl}px;
          border-bottom: 2px solid ${({theme:i})=>i.materialText};
        `:dt`
          bottom: ${-Kl}px;
          height: ${Kl}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:i})=>i.materialText};
          border-right: 1px solid ${({theme:i})=>i.materialText};
        `}

  color:  ${({theme:l})=>l.materialText};
  ${({$disabled:l,theme:i})=>l&&dt`
      ${ga()}
      box-shadow: 1px 1px 0px ${i.materialTextDisabledShadow};
      border-color: ${i.materialTextDisabled};
    `}
`,z1=F.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:l})=>l==="vertical"?dt`
          transform: translate(${Kl+2}px, ${Kl+1}px);
        `:dt`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,M1=L.forwardRef(({defaultValue:l,disabled:i=!1,marks:c=!1,max:o=100,min:h=0,name:v,onChange:A,onChangeCommitted:D,onMouseDown:x,orientation:m="horizontal",size:O="100%",step:S=1,value:C,variant:Z="default",...P},ft)=>{const at=Z==="flat"?_1:D1,it=m==="vertical",[J=h,lt]=Cn({defaultValue:l,onChange:A??D,value:C}),{isFocusVisible:st,onBlurVisible:N,ref:V}=x1(),[X,pt]=L.useState(!1),Et=L.useRef(),Lt=L.useRef(null),Mt=lv(V,Et),bt=lv(ft,Mt),kt=nl(G=>{st(G)&&pt(!0)}),Qt=nl(()=>{X!==!1&&(pt(!1),N())}),Ot=L.useRef(),H=L.useMemo(()=>c===!0&&Number.isFinite(S)?[...Array(Math.round((o-h)/S)+1)].map((G,nt)=>({label:void 0,value:h+S*nt})):Array.isArray(c)?c:[],[c,o,h,S]),tt=nl(G=>{const nt=(o-h)/10,ht=H.map(Dt=>Dt.value),ct=ht.indexOf(J);let St=0;switch(G.key){case"Home":St=h;break;case"End":St=o;break;case"PageUp":S&&(St=J+nt);break;case"PageDown":S&&(St=J-nt);break;case"ArrowRight":case"ArrowUp":S?St=J+S:St=ht[ct+1]||ht[ht.length-1];break;case"ArrowLeft":case"ArrowDown":S?St=J-S:St=ht[ct-1]||ht[0];break;default:return}G.preventDefault(),S&&(St=tv(St,S,h)),St=ul(St,h,o),lt(St),pt(!0),A?.(St),D?.(St)}),rt=L.useCallback(G=>{if(!Et.current)return 0;const nt=Et.current.getBoundingClientRect();let ht;it?ht=(nt.bottom-G.y)/nt.height:ht=(G.x-nt.left)/nt.width;let ct;if(ct=E1(ht,h,o),S)ct=tv(ct,S,h);else{const St=H.map(W=>W.value),Dt=T1(St,ct);ct=St[Dt]}return ct=ul(ct,h,o),ct},[H,o,h,S,it]),gt=nl(G=>{var nt;const ht=Yi(G,Ot.current);if(!ht)return;const ct=rt(ht);(nt=Lt.current)===null||nt===void 0||nt.focus(),lt(ct),pt(!0),A?.(ct)}),b=nl(G=>{const nt=Yi(G,Ot.current);if(!nt)return;const ht=rt(nt);D?.(ht),Ot.current=void 0;const ct=Qi(Et.current);ct.removeEventListener("mousemove",gt),ct.removeEventListener("mouseup",b),ct.removeEventListener("touchmove",gt),ct.removeEventListener("touchend",b)}),k=nl(G=>{var nt;x?.(G),G.preventDefault(),(nt=Lt.current)===null||nt===void 0||nt.focus(),pt(!0);const ht=Yi(G,Ot.current);if(ht){const St=rt(ht);lt(St),A?.(St)}const ct=Qi(Et.current);ct.addEventListener("mousemove",gt),ct.addEventListener("mouseup",b)}),ut=nl(G=>{var nt;G.preventDefault();const ht=G.changedTouches[0];ht!=null&&(Ot.current=ht.identifier),(nt=Lt.current)===null||nt===void 0||nt.focus(),pt(!0);const ct=Yi(G,Ot.current);if(ct){const Dt=rt(ct);lt(Dt),A?.(Dt)}const St=Qi(Et.current);St.addEventListener("touchmove",gt),St.addEventListener("touchend",b)});return L.useEffect(()=>{const{current:G}=Et;G?.addEventListener("touchstart",ut);const nt=Qi(G);return()=>{G?.removeEventListener("touchstart",ut),nt.removeEventListener("mousemove",gt),nt.removeEventListener("mouseup",b),nt.removeEventListener("touchmove",gt),nt.removeEventListener("touchend",b)}},[b,gt,ut]),$.createElement(w1,{$disabled:i,hasMarks:!!H.length,isFocused:X,onMouseDown:k,orientation:m,ref:bt,size:Nn(O),...P},$.createElement("input",{disabled:i,name:v,type:"hidden",value:J??0}),H&&H.map(G=>$.createElement(O1,{$disabled:i,"data-testid":"tick",key:G.value/(o-h)*100,orientation:m,style:{[it?"bottom":"left"]:`${(G.value-h)/(o-h)*100}%`}},G.label&&$.createElement(z1,{"aria-hidden":!0,"data-testid":"mark",orientation:m},G.label))),$.createElement(at,{orientation:m,variant:Z}),$.createElement(R1,{$disabled:i,"aria-disabled":i?!0:void 0,"aria-orientation":m,"aria-valuemax":o,"aria-valuemin":h,"aria-valuenow":J,onBlur:Qt,onFocus:kt,onKeyDown:tt,orientation:m,ref:Lt,role:"slider",style:{[it?"bottom":"left"]:`${(it?-100:0)+100*(J-h)/(o-h)}%`},tabIndex:i?void 0:0,variant:Z}))});M1.displayName="Slider";const N1=F.tbody`
  background: ${({theme:l})=>l.canvas};
  display: table-row-group;
  box-shadow: ${Wf};
  overflow-y: auto;
`,C1=L.forwardRef(function({children:i,...c},o){return $.createElement(N1,{ref:o,...c},i)});C1.displayName="TableBody";const B1=F.td`
  padding: 0 8px;
`,U1=L.forwardRef(function({children:i,...c},o){return $.createElement(B1,{ref:o,...c},i)});U1.displayName="TableDataCell";const $1=F.thead`
  display: table-header-group;
`,H1=L.forwardRef(function({children:i,...c},o){return $.createElement($1,{ref:o,...c},i)});H1.displayName="TableHead";const L1=F.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:l})=>l.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${se()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:l})=>!l&&dt`
      &:active {
        &:before {
          ${se({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:l})=>l.materialText};
  ${({$disabled:l})=>l&&ga()}
  &:hover {
    color: ${({theme:l})=>l.materialText};
    ${({$disabled:l})=>l&&ga()}
  }
`,k1=L.forwardRef(function({disabled:i=!1,children:c,onClick:o,onTouchStart:h=fl,sort:v,...A},D){const x=v==="asc"?"ascending":v==="desc"?"descending":void 0;return $.createElement(L1,{$disabled:i,"aria-disabled":i,"aria-sort":x,onClick:i?void 0:o,onTouchStart:i?void 0:h,ref:D,...A},$.createElement("div",null,c))});k1.displayName="TableHeadCell";const Y1=F.tr`
  color: inherit;
  display: table-row;
  height: calc(${ze.md} - 2px);
  line-height: calc(${ze.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:l})=>l.canvasText};
  &:hover {
    background: ${({theme:l})=>l.hoverBackground};
    color: ${({theme:l})=>l.canvasTextInvert};
  }
`,Q1=L.forwardRef(function({children:i,...c},o){return $.createElement(Y1,{ref:o,...c},i)});Q1.displayName="TableRow";const q1=F.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,G1=F(Oa)`
  &:before {
    box-shadow: none;
  }
`,j1=L.forwardRef(({children:l,...i},c)=>$.createElement(G1,null,$.createElement(q1,{ref:c,...i},l)));j1.displayName="Table";const X1=F.button`
  ${ya()}
  ${se()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${ze.md};
  line-height: ${ze.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:l})=>l.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${tu}
    outline-offset: -6px;
  }
  ${l=>l.selected&&`
    z-index: 1;
    height: calc(${ze.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:l})=>l.material};
    bottom: -4px;
    left: 2px;
  }
`,V1=L.forwardRef(({value:l,onClick:i,selected:c=!1,children:o,...h},v)=>$.createElement(X1,{"aria-selected":c,selected:c,onClick:A=>i?.(l,A),ref:v,role:"tab",...h},o));V1.displayName="Tab";const Z1=F.div`
  ${ya()}
  ${se()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,K1=L.forwardRef(({children:l,...i},c)=>$.createElement(Z1,{ref:c,...i},l));K1.displayName="TabBody";const J1=F.div`
  position: relative;
  ${({isMultiRow:l,theme:i})=>l&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${i.borderDark};
  }
  `}
`,I1=F.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:l})=>l.borderDarkest};
    border-left: 2px solid ${({theme:l})=>l.borderLightest};
  }
`;function W1(l,i){const c=[];for(let o=i;o>0;o-=1)c.push(l.splice(0,Math.ceil(l.length/o)));return c}const F1=L.forwardRef(({value:l,onChange:i=fl,children:c,rows:o=1,...h},v)=>{const A=L.useMemo(()=>{var D;const x=(D=$.Children.map(c,S=>{if(!$.isValidElement(S))return null;const C={selected:S.props.value===l,onClick:i};return $.cloneElement(S,C)}))!==null&&D!==void 0?D:[],m=W1(x,o).map((S,C)=>({key:C,tabs:S})),O=m.findIndex(S=>S.tabs.some(C=>C.props.selected));return m.push(m.splice(O,1)[0]),m},[c,i,o,l]);return $.createElement(J1,{...h,isMultiRow:o>1,role:"tablist",ref:v},A.map(D=>$.createElement(I1,{key:D.key},D.tabs)))});F1.displayName="Tabs";const P1=["blur","focus"],tA=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function rv(l){return"nativeEvent"in l&&P1.includes(l.type)}function iv(l){return"nativeEvent"in l&&tA.includes(l.type)}const eA={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},aA=F.span`
  position: absolute;

  z-index: 1;
  display: ${l=>l.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:l})=>l.borderDarkest};
  background: ${({theme:l})=>l.tooltip};
  box-shadow: ${If};
  text-align: center;
  font-size: 1rem;
  ${l=>eA[l.position]}
`,nA=F.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,lA=L.forwardRef(({className:l,children:i,disableFocusListener:c=!1,disableMouseListener:o=!1,enterDelay:h=1e3,leaveDelay:v=0,onBlur:A,onClose:D,onFocus:x,onMouseEnter:m,onMouseLeave:O,onOpen:S,style:C,text:Z,position:P="top",...ft},at)=>{const[it,J]=L.useState(!1),[lt,st]=L.useState(),[N,V]=L.useState(),X=!c,pt=!o,Et=rt=>{window.clearTimeout(lt),window.clearTimeout(N);const gt=window.setTimeout(()=>{J(!0),S?.(rt)},h);st(gt)},Lt=rt=>{rt.persist(),rv(rt)?x?.(rt):iv(rt)&&m?.(rt),Et(rt)},Mt=rt=>{window.clearTimeout(lt),window.clearTimeout(N);const gt=window.setTimeout(()=>{J(!1),D?.(rt)},v);V(gt)},bt=rt=>{rt.persist(),rv(rt)?A?.(rt):iv(rt)&&O?.(rt),Mt(rt)},kt=X?bt:void 0,Qt=X?Lt:void 0,Ot=pt?Lt:void 0,H=pt?bt:void 0,tt=X?0:void 0;return $.createElement(nA,{"data-testid":"tooltip-wrapper",onBlur:kt,onFocus:Qt,onMouseEnter:Ot,onMouseLeave:H,tabIndex:tt},$.createElement(aA,{className:l,"data-testid":"tooltip",position:P,ref:at,show:it,style:C,...ft},Z),i)});lA.displayName="Tooltip";const Qf=F(ts)`
  white-space: nowrap;
`,c0=dt`
  :focus {
    outline: none;
  }

  ${({$disabled:l})=>l?"cursor: default;":dt`
          cursor: pointer;

          :focus {
            ${Qf} {
              background: ${({theme:i})=>i.hoverBackground};
              color: ${({theme:i})=>i.materialTextInvert};
              outline: 2px dotted ${({theme:i})=>i.focusSecondary};
            }
          }
        `}
`,uA=F.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:l})=>l&&dt`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:i})=>i.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:l})=>l.borderDark};
      font-size: 12px;
    }
  }
`,rA=F.li`
  position: relative;
  padding-left: ${({hasItems:l})=>l?"0":"13px"};

  ${({isRootLevel:l})=>l?dt`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:i})=>i.material};
            }
          }
        `:dt`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:i})=>i.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:l})=>l.borderDark};
    }
  }
`,iA=F.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,oA=F.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:l})=>l.materialText};
  user-select: none;
  padding-left: 18px;
  ${c0};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,ov=F(Pf)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${c0};
`,cA=F.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function cv(l,i){return l.includes(i)?l.filter(c=>c!==i):[...l,i]}function fv(l){l.preventDefault()}function f0({className:l,disabled:i,expanded:c,innerRef:o,level:h,select:v,selected:A,style:D,tree:x=[]}){const m=h===0,O=L.useCallback(S=>{var C,Z;const P=!!(S.items&&S.items.length>0),ft=c.includes(S.id),at=(C=i||S.disabled)!==null&&C!==void 0?C:!1,it=at?fv:N=>v(N,S),J=at?fv:N=>v(N,S),lt=A===S.id,st=$.createElement(cA,{"aria-hidden":!0},S.icon);return $.createElement(rA,{key:S.label,isRootLevel:m,role:"treeitem","aria-expanded":ft,"aria-selected":lt,hasItems:P},P?$.createElement(iA,{open:ft},$.createElement(oA,{onClick:it,$disabled:at},$.createElement(ov,{$disabled:at},st,$.createElement(Qf,null,S.label))),ft&&$.createElement(f0,{className:l,disabled:at,expanded:c,level:h+1,select:v,selected:A,style:D,tree:(Z=S.items)!==null&&Z!==void 0?Z:[]})):$.createElement(ov,{as:"button",$disabled:at,onClick:J},st,$.createElement(Qf,null,S.label)))},[l,i,c,m,h,v,A,D]);return $.createElement(uA,{className:m?l:void 0,style:m?D:void 0,ref:m?o:void 0,role:m?"tree":"group",isRootLevel:m},x.map(O))}function fA({className:l,defaultExpanded:i=[],defaultSelected:c,disabled:o=!1,expanded:h,onNodeSelect:v,onNodeToggle:A,selected:D,style:x,tree:m=[]},O){const[S,C]=Cn({defaultValue:i,onChange:A,onChangePropName:"onNodeToggle",value:h,valuePropName:"expanded"}),[Z,P]=Cn({defaultValue:c,onChange:v,onChangePropName:"onNodeSelect",value:D,valuePropName:"selected"}),ft=L.useCallback((J,lt)=>{if(A){const st=cv(S,lt);A(J,st)}C(st=>cv(st,lt))},[S,A,C]),at=L.useCallback((J,lt)=>{P(lt),v&&v(J,lt)},[v,P]),it=L.useCallback((J,lt)=>{J.preventDefault(),at(J,lt.id),lt.items&&lt.items.length&&ft(J,lt.id)},[at,ft]);return $.createElement(f0,{className:l,disabled:o,expanded:S,level:0,innerRef:O,select:it,selected:Z,style:x,tree:m})}const sA=L.forwardRef(fA);sA.displayName="TreeView";const sv=l0,dv=es;var wf,hv;function dA(){if(hv)return wf;hv=1;var l={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return wf=l,wf}var hA=dA();const pA=Gf(hA);function vA({onCreate:l,onLogin:i,initialMode:c="login"}){const[o,h]=L.useState(""),[v,A]=L.useState(""),[D,x]=L.useState(c),m=D==="login";return ge.jsxs(us,{style:{width:300,fontFamily:"'R95 Sans Serif 14pt', 'ms_sans_serif', 'Arial', sans-serif"},children:[ge.jsx(ls,{children:ge.jsx("span",{children:m?"Welcome":"Create New User"})}),ge.jsxs(ns,{children:[ge.jsxs("form",{onSubmit:O=>{O.preventDefault(),m?i?.(o,v):l?.(o,v)},children:[ge.jsx("div",{style:{marginBottom:10},children:ge.jsx(dv,{fullWidth:!0,placeholder:"Username",value:o,onChange:O=>h(O.target.value)})}),ge.jsx("div",{style:{marginBottom:10},children:ge.jsx(dv,{fullWidth:!0,placeholder:"Password",type:"password",value:v,onChange:O=>A(O.target.value)})}),ge.jsx(sv,{variant:"well",style:{marginBottom:10,padding:4,fontSize:12},children:m?"Enter your username and password.":"Please choose a username and password."}),ge.jsx(pr,{type:"submit",primary:!0,children:m?"Login":"Create Account"})]}),ge.jsx(sv,{variant:"well",style:{marginTop:12,padding:4,textAlign:"center",cursor:"pointer",fontSize:12},onClick:()=>x(m?"create":"login"),children:m?"New user? Create an account":"Already have an account? Log in"})]})]})}function qi(l){throw new Error('Could not dynamically require "'+l+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Df={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/var pv;function mA(){return pv||(pv=1,function(l,i){(function(c){l.exports=c()})(function(){return function c(o,h,v){function A(m,O){if(!h[m]){if(!o[m]){var S=typeof qi=="function"&&qi;if(!O&&S)return S(m,!0);if(D)return D(m,!0);var C=new Error("Cannot find module '"+m+"'");throw C.code="MODULE_NOT_FOUND",C}var Z=h[m]={exports:{}};o[m][0].call(Z.exports,function(P){var ft=o[m][1][P];return A(ft||P)},Z,Z.exports,c,o,h,v)}return h[m].exports}for(var D=typeof qi=="function"&&qi,x=0;x<v.length;x++)A(v[x]);return A}({1:[function(c,o,h){(function(v){var A=v.MutationObserver||v.WebKitMutationObserver,D;if(A){var x=0,m=new A(P),O=v.document.createTextNode("");m.observe(O,{characterData:!0}),D=function(){O.data=x=++x%2}}else if(!v.setImmediate&&typeof v.MessageChannel<"u"){var S=new v.MessageChannel;S.port1.onmessage=P,D=function(){S.port2.postMessage(0)}}else"document"in v&&"onreadystatechange"in v.document.createElement("script")?D=function(){var at=v.document.createElement("script");at.onreadystatechange=function(){P(),at.onreadystatechange=null,at.parentNode.removeChild(at),at=null},v.document.documentElement.appendChild(at)}:D=function(){setTimeout(P,0)};var C,Z=[];function P(){C=!0;for(var at,it,J=Z.length;J;){for(it=Z,Z=[],at=-1;++at<J;)it[at]();J=Z.length}C=!1}o.exports=ft;function ft(at){Z.push(at)===1&&!C&&D()}}).call(this,typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(c,o,h){var v=c(1);function A(){}var D={},x=["REJECTED"],m=["FULFILLED"],O=["PENDING"];o.exports=S;function S(N){if(typeof N!="function")throw new TypeError("resolver must be a function");this.state=O,this.queue=[],this.outcome=void 0,N!==A&&ft(this,N)}S.prototype.catch=function(N){return this.then(null,N)},S.prototype.then=function(N,V){if(typeof N!="function"&&this.state===m||typeof V!="function"&&this.state===x)return this;var X=new this.constructor(A);if(this.state!==O){var pt=this.state===m?N:V;Z(X,pt,this.outcome)}else this.queue.push(new C(X,N,V));return X};function C(N,V,X){this.promise=N,typeof V=="function"&&(this.onFulfilled=V,this.callFulfilled=this.otherCallFulfilled),typeof X=="function"&&(this.onRejected=X,this.callRejected=this.otherCallRejected)}C.prototype.callFulfilled=function(N){D.resolve(this.promise,N)},C.prototype.otherCallFulfilled=function(N){Z(this.promise,this.onFulfilled,N)},C.prototype.callRejected=function(N){D.reject(this.promise,N)},C.prototype.otherCallRejected=function(N){Z(this.promise,this.onRejected,N)};function Z(N,V,X){v(function(){var pt;try{pt=V(X)}catch(Et){return D.reject(N,Et)}pt===N?D.reject(N,new TypeError("Cannot resolve promise with itself")):D.resolve(N,pt)})}D.resolve=function(N,V){var X=at(P,V);if(X.status==="error")return D.reject(N,X.value);var pt=X.value;if(pt)ft(N,pt);else{N.state=m,N.outcome=V;for(var Et=-1,Lt=N.queue.length;++Et<Lt;)N.queue[Et].callFulfilled(V)}return N},D.reject=function(N,V){N.state=x,N.outcome=V;for(var X=-1,pt=N.queue.length;++X<pt;)N.queue[X].callRejected(V);return N};function P(N){var V=N&&N.then;if(N&&(typeof N=="object"||typeof N=="function")&&typeof V=="function")return function(){V.apply(N,arguments)}}function ft(N,V){var X=!1;function pt(bt){X||(X=!0,D.reject(N,bt))}function Et(bt){X||(X=!0,D.resolve(N,bt))}function Lt(){V(Et,pt)}var Mt=at(Lt);Mt.status==="error"&&pt(Mt.value)}function at(N,V){var X={};try{X.value=N(V),X.status="success"}catch(pt){X.status="error",X.value=pt}return X}S.resolve=it;function it(N){return N instanceof this?N:D.resolve(new this(A),N)}S.reject=J;function J(N){var V=new this(A);return D.reject(V,N)}S.all=lt;function lt(N){var V=this;if(Object.prototype.toString.call(N)!=="[object Array]")return this.reject(new TypeError("must be an array"));var X=N.length,pt=!1;if(!X)return this.resolve([]);for(var Et=new Array(X),Lt=0,Mt=-1,bt=new this(A);++Mt<X;)kt(N[Mt],Mt);return bt;function kt(Qt,Ot){V.resolve(Qt).then(H,function(tt){pt||(pt=!0,D.reject(bt,tt))});function H(tt){Et[Ot]=tt,++Lt===X&&!pt&&(pt=!0,D.resolve(bt,Et))}}}S.race=st;function st(N){var V=this;if(Object.prototype.toString.call(N)!=="[object Array]")return this.reject(new TypeError("must be an array"));var X=N.length,pt=!1;if(!X)return this.resolve([]);for(var Et=-1,Lt=new this(A);++Et<X;)Mt(N[Et]);return Lt;function Mt(bt){V.resolve(bt).then(function(kt){pt||(pt=!0,D.resolve(Lt,kt))},function(kt){pt||(pt=!0,D.reject(Lt,kt))})}}},{1:1}],3:[function(c,o,h){(function(v){typeof v.Promise!="function"&&(v.Promise=c(2))}).call(this,typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(c,o,h){var v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d};function A(d,y){if(!(d instanceof y))throw new TypeError("Cannot call a class as a function")}function D(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var x=D();function m(){try{if(!x||!x.open)return!1;var d=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),y=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!d||y)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function O(d,y){d=d||[],y=y||{};try{return new Blob(d,y)}catch(T){if(T.name!=="TypeError")throw T;for(var p=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,w=new p,R=0;R<d.length;R+=1)w.append(d[R]);return w.getBlob(y.type)}}typeof Promise>"u"&&c(3);var S=Promise;function C(d,y){y&&d.then(function(p){y(null,p)},function(p){y(p)})}function Z(d,y,p){typeof y=="function"&&d.then(y),typeof p=="function"&&d.catch(p)}function P(d){return typeof d!="string"&&(console.warn(d+" used as a key, but it is not a string."),d=String(d)),d}function ft(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var at="local-forage-detect-blob-support",it=void 0,J={},lt=Object.prototype.toString,st="readonly",N="readwrite";function V(d){for(var y=d.length,p=new ArrayBuffer(y),w=new Uint8Array(p),R=0;R<y;R++)w[R]=d.charCodeAt(R);return p}function X(d){return new S(function(y){var p=d.transaction(at,N),w=O([""]);p.objectStore(at).put(w,"key"),p.onabort=function(R){R.preventDefault(),R.stopPropagation(),y(!1)},p.oncomplete=function(){var R=navigator.userAgent.match(/Chrome\/(\d+)/),T=navigator.userAgent.match(/Edge\//);y(T||!R||parseInt(R[1],10)>=43)}}).catch(function(){return!1})}function pt(d){return typeof it=="boolean"?S.resolve(it):X(d).then(function(y){return it=y,it})}function Et(d){var y=J[d.name],p={};p.promise=new S(function(w,R){p.resolve=w,p.reject=R}),y.deferredOperations.push(p),y.dbReady?y.dbReady=y.dbReady.then(function(){return p.promise}):y.dbReady=p.promise}function Lt(d){var y=J[d.name],p=y.deferredOperations.pop();if(p)return p.resolve(),p.promise}function Mt(d,y){var p=J[d.name],w=p.deferredOperations.pop();if(w)return w.reject(y),w.promise}function bt(d,y){return new S(function(p,w){if(J[d.name]=J[d.name]||ut(),d.db)if(y)Et(d),d.db.close();else return p(d.db);var R=[d.name];y&&R.push(d.version);var T=x.open.apply(x,R);y&&(T.onupgradeneeded=function(Q){var I=T.result;try{I.createObjectStore(d.storeName),Q.oldVersion<=1&&I.createObjectStore(at)}catch(K){if(K.name==="ConstraintError")console.warn('The database "'+d.name+'" has been upgraded from version '+Q.oldVersion+" to version "+Q.newVersion+', but the storage "'+d.storeName+'" already exists.');else throw K}}),T.onerror=function(Q){Q.preventDefault(),w(T.error)},T.onsuccess=function(){var Q=T.result;Q.onversionchange=function(I){I.target.close()},p(Q),Lt(d)}})}function kt(d){return bt(d,!1)}function Qt(d){return bt(d,!0)}function Ot(d,y){if(!d.db)return!0;var p=!d.db.objectStoreNames.contains(d.storeName),w=d.version<d.db.version,R=d.version>d.db.version;if(w&&(d.version!==y&&console.warn('The database "'+d.name+`" can't be downgraded from version `+d.db.version+" to version "+d.version+"."),d.version=d.db.version),R||p){if(p){var T=d.db.version+1;T>d.version&&(d.version=T)}return!0}return!1}function H(d){return new S(function(y,p){var w=new FileReader;w.onerror=p,w.onloadend=function(R){var T=btoa(R.target.result||"");y({__local_forage_encoded_blob:!0,data:T,type:d.type})},w.readAsBinaryString(d)})}function tt(d){var y=V(atob(d.data));return O([y],{type:d.type})}function rt(d){return d&&d.__local_forage_encoded_blob}function gt(d){var y=this,p=y._initReady().then(function(){var w=J[y._dbInfo.name];if(w&&w.dbReady)return w.dbReady});return Z(p,d,d),p}function b(d){Et(d);for(var y=J[d.name],p=y.forages,w=0;w<p.length;w++){var R=p[w];R._dbInfo.db&&(R._dbInfo.db.close(),R._dbInfo.db=null)}return d.db=null,kt(d).then(function(T){return d.db=T,Ot(d)?Qt(d):T}).then(function(T){d.db=y.db=T;for(var Q=0;Q<p.length;Q++)p[Q]._dbInfo.db=T}).catch(function(T){throw Mt(d,T),T})}function k(d,y,p,w){w===void 0&&(w=1);try{var R=d.db.transaction(d.storeName,y);p(null,R)}catch(T){if(w>0&&(!d.db||T.name==="InvalidStateError"||T.name==="NotFoundError"))return S.resolve().then(function(){if(!d.db||T.name==="NotFoundError"&&!d.db.objectStoreNames.contains(d.storeName)&&d.version<=d.db.version)return d.db&&(d.version=d.db.version+1),Qt(d)}).then(function(){return b(d).then(function(){k(d,y,p,w-1)})}).catch(p);p(T)}}function ut(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function G(d){var y=this,p={db:null};if(d)for(var w in d)p[w]=d[w];var R=J[p.name];R||(R=ut(),J[p.name]=R),R.forages.push(y),y._initReady||(y._initReady=y.ready,y.ready=gt);var T=[];function Q(){return S.resolve()}for(var I=0;I<R.forages.length;I++){var K=R.forages[I];K!==y&&T.push(K._initReady().catch(Q))}var et=R.forages.slice(0);return S.all(T).then(function(){return p.db=R.db,kt(p)}).then(function(ot){return p.db=ot,Ot(p,y._defaultConfig.version)?Qt(p):ot}).then(function(ot){p.db=R.db=ot,y._dbInfo=p;for(var vt=0;vt<et.length;vt++){var _t=et[vt];_t!==y&&(_t._dbInfo.db=p.db,_t._dbInfo.version=p.version)}})}function nt(d,y){var p=this;d=P(d);var w=new S(function(R,T){p.ready().then(function(){k(p._dbInfo,st,function(Q,I){if(Q)return T(Q);try{var K=I.objectStore(p._dbInfo.storeName),et=K.get(d);et.onsuccess=function(){var ot=et.result;ot===void 0&&(ot=null),rt(ot)&&(ot=tt(ot)),R(ot)},et.onerror=function(){T(et.error)}}catch(ot){T(ot)}})}).catch(T)});return C(w,y),w}function ht(d,y){var p=this,w=new S(function(R,T){p.ready().then(function(){k(p._dbInfo,st,function(Q,I){if(Q)return T(Q);try{var K=I.objectStore(p._dbInfo.storeName),et=K.openCursor(),ot=1;et.onsuccess=function(){var vt=et.result;if(vt){var _t=vt.value;rt(_t)&&(_t=tt(_t));var qt=d(_t,vt.key,ot++);qt!==void 0?R(qt):vt.continue()}else R()},et.onerror=function(){T(et.error)}}catch(vt){T(vt)}})}).catch(T)});return C(w,y),w}function ct(d,y,p){var w=this;d=P(d);var R=new S(function(T,Q){var I;w.ready().then(function(){return I=w._dbInfo,lt.call(y)==="[object Blob]"?pt(I.db).then(function(K){return K?y:H(y)}):y}).then(function(K){k(w._dbInfo,N,function(et,ot){if(et)return Q(et);try{var vt=ot.objectStore(w._dbInfo.storeName);K===null&&(K=void 0);var _t=vt.put(K,d);ot.oncomplete=function(){K===void 0&&(K=null),T(K)},ot.onabort=ot.onerror=function(){var qt=_t.error?_t.error:_t.transaction.error;Q(qt)}}catch(qt){Q(qt)}})}).catch(Q)});return C(R,p),R}function St(d,y){var p=this;d=P(d);var w=new S(function(R,T){p.ready().then(function(){k(p._dbInfo,N,function(Q,I){if(Q)return T(Q);try{var K=I.objectStore(p._dbInfo.storeName),et=K.delete(d);I.oncomplete=function(){R()},I.onerror=function(){T(et.error)},I.onabort=function(){var ot=et.error?et.error:et.transaction.error;T(ot)}}catch(ot){T(ot)}})}).catch(T)});return C(w,y),w}function Dt(d){var y=this,p=new S(function(w,R){y.ready().then(function(){k(y._dbInfo,N,function(T,Q){if(T)return R(T);try{var I=Q.objectStore(y._dbInfo.storeName),K=I.clear();Q.oncomplete=function(){w()},Q.onabort=Q.onerror=function(){var et=K.error?K.error:K.transaction.error;R(et)}}catch(et){R(et)}})}).catch(R)});return C(p,d),p}function W(d){var y=this,p=new S(function(w,R){y.ready().then(function(){k(y._dbInfo,st,function(T,Q){if(T)return R(T);try{var I=Q.objectStore(y._dbInfo.storeName),K=I.count();K.onsuccess=function(){w(K.result)},K.onerror=function(){R(K.error)}}catch(et){R(et)}})}).catch(R)});return C(p,d),p}function wt(d,y){var p=this,w=new S(function(R,T){if(d<0){R(null);return}p.ready().then(function(){k(p._dbInfo,st,function(Q,I){if(Q)return T(Q);try{var K=I.objectStore(p._dbInfo.storeName),et=!1,ot=K.openKeyCursor();ot.onsuccess=function(){var vt=ot.result;if(!vt){R(null);return}d===0||et?R(vt.key):(et=!0,vt.advance(d))},ot.onerror=function(){T(ot.error)}}catch(vt){T(vt)}})}).catch(T)});return C(w,y),w}function Rt(d){var y=this,p=new S(function(w,R){y.ready().then(function(){k(y._dbInfo,st,function(T,Q){if(T)return R(T);try{var I=Q.objectStore(y._dbInfo.storeName),K=I.openKeyCursor(),et=[];K.onsuccess=function(){var ot=K.result;if(!ot){w(et);return}et.push(ot.key),ot.continue()},K.onerror=function(){R(K.error)}}catch(ot){R(ot)}})}).catch(R)});return C(p,d),p}function Bt(d,y){y=ft.apply(this,arguments);var p=this.config();d=typeof d!="function"&&d||{},d.name||(d.name=d.name||p.name,d.storeName=d.storeName||p.storeName);var w=this,R;if(!d.name)R=S.reject("Invalid arguments");else{var T=d.name===p.name&&w._dbInfo.db,Q=T?S.resolve(w._dbInfo.db):kt(d).then(function(I){var K=J[d.name],et=K.forages;K.db=I;for(var ot=0;ot<et.length;ot++)et[ot]._dbInfo.db=I;return I});d.storeName?R=Q.then(function(I){if(I.objectStoreNames.contains(d.storeName)){var K=I.version+1;Et(d);var et=J[d.name],ot=et.forages;I.close();for(var vt=0;vt<ot.length;vt++){var _t=ot[vt];_t._dbInfo.db=null,_t._dbInfo.version=K}var qt=new S(function(Gt,te){var ie=x.open(d.name,K);ie.onerror=function(ke){var rn=ie.result;rn.close(),te(ke)},ie.onupgradeneeded=function(){var ke=ie.result;ke.deleteObjectStore(d.storeName)},ie.onsuccess=function(){var ke=ie.result;ke.close(),Gt(ke)}});return qt.then(function(Gt){et.db=Gt;for(var te=0;te<ot.length;te++){var ie=ot[te];ie._dbInfo.db=Gt,Lt(ie._dbInfo)}}).catch(function(Gt){throw(Mt(d,Gt)||S.resolve()).catch(function(){}),Gt})}}):R=Q.then(function(I){Et(d);var K=J[d.name],et=K.forages;I.close();for(var ot=0;ot<et.length;ot++){var vt=et[ot];vt._dbInfo.db=null}var _t=new S(function(qt,Gt){var te=x.deleteDatabase(d.name);te.onerror=function(){var ie=te.result;ie&&ie.close(),Gt(te.error)},te.onblocked=function(){console.warn('dropInstance blocked for database "'+d.name+'" until all open connections are closed')},te.onsuccess=function(){var ie=te.result;ie&&ie.close(),qt(ie)}});return _t.then(function(qt){K.db=qt;for(var Gt=0;Gt<et.length;Gt++){var te=et[Gt];Lt(te._dbInfo)}}).catch(function(qt){throw(Mt(d,qt)||S.resolve()).catch(function(){}),qt})})}return C(R,y),R}var Vt={_driver:"asyncStorage",_initStorage:G,_support:m(),iterate:ht,getItem:nt,setItem:ct,removeItem:St,clear:Dt,length:W,key:wt,keys:Rt,dropInstance:Bt};function ue(){return typeof openDatabase=="function"}var Zt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Me="~~local_forage_type~",re=/^~~local_forage_type~([^~]+)~/,Qe="__lfsc__:",Le=Qe.length,ba="arbf",ea="blob",Aa="si08",Ia="ui08",au="uic8",mr="si16",Wa="si32",Ne="ur16",fa="ui32",Ce="fl32",gr="fl64",yr=Le+ba.length,br=Object.prototype.toString;function Bn(d){var y=d.length*.75,p=d.length,w,R=0,T,Q,I,K;d[d.length-1]==="="&&(y--,d[d.length-2]==="="&&y--);var et=new ArrayBuffer(y),ot=new Uint8Array(et);for(w=0;w<p;w+=4)T=Zt.indexOf(d[w]),Q=Zt.indexOf(d[w+1]),I=Zt.indexOf(d[w+2]),K=Zt.indexOf(d[w+3]),ot[R++]=T<<2|Q>>4,ot[R++]=(Q&15)<<4|I>>2,ot[R++]=(I&3)<<6|K&63;return et}function Fa(d){var y=new Uint8Array(d),p="",w;for(w=0;w<y.length;w+=3)p+=Zt[y[w]>>2],p+=Zt[(y[w]&3)<<4|y[w+1]>>4],p+=Zt[(y[w+1]&15)<<2|y[w+2]>>6],p+=Zt[y[w+2]&63];return y.length%3===2?p=p.substring(0,p.length-1)+"=":y.length%3===1&&(p=p.substring(0,p.length-2)+"=="),p}function za(d,y){var p="";if(d&&(p=br.call(d)),d&&(p==="[object ArrayBuffer]"||d.buffer&&br.call(d.buffer)==="[object ArrayBuffer]")){var w,R=Qe;d instanceof ArrayBuffer?(w=d,R+=ba):(w=d.buffer,p==="[object Int8Array]"?R+=Aa:p==="[object Uint8Array]"?R+=Ia:p==="[object Uint8ClampedArray]"?R+=au:p==="[object Int16Array]"?R+=mr:p==="[object Uint16Array]"?R+=Ne:p==="[object Int32Array]"?R+=Wa:p==="[object Uint32Array]"?R+=fa:p==="[object Float32Array]"?R+=Ce:p==="[object Float64Array]"?R+=gr:y(new Error("Failed to get type for BinaryArray"))),y(R+Fa(w))}else if(p==="[object Blob]"){var T=new FileReader;T.onload=function(){var Q=Me+d.type+"~"+Fa(this.result);y(Qe+ea+Q)},T.readAsArrayBuffer(d)}else try{y(JSON.stringify(d))}catch(Q){console.error("Couldn't convert value into a JSON string: ",d),y(null,Q)}}function sl(d){if(d.substring(0,Le)!==Qe)return JSON.parse(d);var y=d.substring(yr),p=d.substring(Le,yr),w;if(p===ea&&re.test(y)){var R=y.match(re);w=R[1],y=y.substring(R[0].length)}var T=Bn(y);switch(p){case ba:return T;case ea:return O([T],{type:w});case Aa:return new Int8Array(T);case Ia:return new Uint8Array(T);case au:return new Uint8ClampedArray(T);case mr:return new Int16Array(T);case Ne:return new Uint16Array(T);case Wa:return new Int32Array(T);case fa:return new Uint32Array(T);case Ce:return new Float32Array(T);case gr:return new Float64Array(T);default:throw new Error("Unkown type: "+p)}}var Ma={serialize:za,deserialize:sl,stringToBuffer:Bn,bufferToString:Fa};function Ar(d,y,p,w){d.executeSql("CREATE TABLE IF NOT EXISTS "+y.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],p,w)}function Sr(d){var y=this,p={db:null};if(d)for(var w in d)p[w]=typeof d[w]!="string"?d[w].toString():d[w];var R=new S(function(T,Q){try{p.db=openDatabase(p.name,String(p.version),p.description,p.size)}catch(I){return Q(I)}p.db.transaction(function(I){Ar(I,p,function(){y._dbInfo=p,T()},function(K,et){Q(et)})},Q)});return p.serializer=Ma,R}function sa(d,y,p,w,R,T){d.executeSql(p,w,R,function(Q,I){I.code===I.SYNTAX_ERR?Q.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[y.storeName],function(K,et){et.rows.length?T(K,I):Ar(K,y,function(){K.executeSql(p,w,R,T)},T)},T):T(Q,I)},T)}function nu(d,y){var p=this;d=P(d);var w=new S(function(R,T){p.ready().then(function(){var Q=p._dbInfo;Q.db.transaction(function(I){sa(I,Q,"SELECT * FROM "+Q.storeName+" WHERE key = ? LIMIT 1",[d],function(K,et){var ot=et.rows.length?et.rows.item(0).value:null;ot&&(ot=Q.serializer.deserialize(ot)),R(ot)},function(K,et){T(et)})})}).catch(T)});return C(w,y),w}function Un(d,y){var p=this,w=new S(function(R,T){p.ready().then(function(){var Q=p._dbInfo;Q.db.transaction(function(I){sa(I,Q,"SELECT * FROM "+Q.storeName,[],function(K,et){for(var ot=et.rows,vt=ot.length,_t=0;_t<vt;_t++){var qt=ot.item(_t),Gt=qt.value;if(Gt&&(Gt=Q.serializer.deserialize(Gt)),Gt=d(Gt,qt.key,_t+1),Gt!==void 0){R(Gt);return}}R()},function(K,et){T(et)})})}).catch(T)});return C(w,y),w}function xr(d,y,p,w){var R=this;d=P(d);var T=new S(function(Q,I){R.ready().then(function(){y===void 0&&(y=null);var K=y,et=R._dbInfo;et.serializer.serialize(y,function(ot,vt){vt?I(vt):et.db.transaction(function(_t){sa(_t,et,"INSERT OR REPLACE INTO "+et.storeName+" (key, value) VALUES (?, ?)",[d,ot],function(){Q(K)},function(qt,Gt){I(Gt)})},function(_t){if(_t.code===_t.QUOTA_ERR){if(w>0){Q(xr.apply(R,[d,K,p,w-1]));return}I(_t)}})})}).catch(I)});return C(T,p),T}function Er(d,y,p){return xr.apply(this,[d,y,p,1])}function Tr(d,y){var p=this;d=P(d);var w=new S(function(R,T){p.ready().then(function(){var Q=p._dbInfo;Q.db.transaction(function(I){sa(I,Q,"DELETE FROM "+Q.storeName+" WHERE key = ?",[d],function(){R()},function(K,et){T(et)})})}).catch(T)});return C(w,y),w}function lu(d){var y=this,p=new S(function(w,R){y.ready().then(function(){var T=y._dbInfo;T.db.transaction(function(Q){sa(Q,T,"DELETE FROM "+T.storeName,[],function(){w()},function(I,K){R(K)})})}).catch(R)});return C(p,d),p}function uu(d){var y=this,p=new S(function(w,R){y.ready().then(function(){var T=y._dbInfo;T.db.transaction(function(Q){sa(Q,T,"SELECT COUNT(key) as c FROM "+T.storeName,[],function(I,K){var et=K.rows.item(0).c;w(et)},function(I,K){R(K)})})}).catch(R)});return C(p,d),p}function wr(d,y){var p=this,w=new S(function(R,T){p.ready().then(function(){var Q=p._dbInfo;Q.db.transaction(function(I){sa(I,Q,"SELECT key FROM "+Q.storeName+" WHERE id = ? LIMIT 1",[d+1],function(K,et){var ot=et.rows.length?et.rows.item(0).key:null;R(ot)},function(K,et){T(et)})})}).catch(T)});return C(w,y),w}function oo(d){var y=this,p=new S(function(w,R){y.ready().then(function(){var T=y._dbInfo;T.db.transaction(function(Q){sa(Q,T,"SELECT key FROM "+T.storeName,[],function(I,K){for(var et=[],ot=0;ot<K.rows.length;ot++)et.push(K.rows.item(ot).key);w(et)},function(I,K){R(K)})})}).catch(R)});return C(p,d),p}function Sa(d){return new S(function(y,p){d.transaction(function(w){w.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(R,T){for(var Q=[],I=0;I<T.rows.length;I++)Q.push(T.rows.item(I).name);y({db:d,storeNames:Q})},function(R,T){p(T)})},function(w){p(w)})})}function Se(d,y){y=ft.apply(this,arguments);var p=this.config();d=typeof d!="function"&&d||{},d.name||(d.name=d.name||p.name,d.storeName=d.storeName||p.storeName);var w=this,R;return d.name?R=new S(function(T){var Q;d.name===p.name?Q=w._dbInfo.db:Q=openDatabase(d.name,"","",0),d.storeName?T({db:Q,storeNames:[d.storeName]}):T(Sa(Q))}).then(function(T){return new S(function(Q,I){T.db.transaction(function(K){function et(qt){return new S(function(Gt,te){K.executeSql("DROP TABLE IF EXISTS "+qt,[],function(){Gt()},function(ie,ke){te(ke)})})}for(var ot=[],vt=0,_t=T.storeNames.length;vt<_t;vt++)ot.push(et(T.storeNames[vt]));S.all(ot).then(function(){Q()}).catch(function(qt){I(qt)})},function(K){I(K)})})}):R=S.reject("Invalid arguments"),C(R,y),R}var Be={_driver:"webSQLStorage",_initStorage:Sr,_support:ue(),iterate:Un,getItem:nu,setItem:Er,removeItem:Tr,clear:lu,length:uu,key:wr,keys:oo,dropInstance:Se};function Pa(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function dl(d,y){var p=d.name+"/";return d.storeName!==y.storeName&&(p+=d.storeName+"/"),p}function co(){var d="_localforage_support_test";try{return localStorage.setItem(d,!0),localStorage.removeItem(d),!1}catch{return!0}}function fo(){return!co()||localStorage.length>0}function Dr(d){var y=this,p={};if(d)for(var w in d)p[w]=d[w];return p.keyPrefix=dl(d,y._defaultConfig),fo()?(y._dbInfo=p,p.serializer=Ma,S.resolve()):S.reject()}function $n(d){var y=this,p=y.ready().then(function(){for(var w=y._dbInfo.keyPrefix,R=localStorage.length-1;R>=0;R--){var T=localStorage.key(R);T.indexOf(w)===0&&localStorage.removeItem(T)}});return C(p,d),p}function ru(d,y){var p=this;d=P(d);var w=p.ready().then(function(){var R=p._dbInfo,T=localStorage.getItem(R.keyPrefix+d);return T&&(T=R.serializer.deserialize(T)),T});return C(w,y),w}function tn(d,y){var p=this,w=p.ready().then(function(){for(var R=p._dbInfo,T=R.keyPrefix,Q=T.length,I=localStorage.length,K=1,et=0;et<I;et++){var ot=localStorage.key(et);if(ot.indexOf(T)===0){var vt=localStorage.getItem(ot);if(vt&&(vt=R.serializer.deserialize(vt)),vt=d(vt,ot.substring(Q),K++),vt!==void 0)return vt}}});return C(w,y),w}function en(d,y){var p=this,w=p.ready().then(function(){var R=p._dbInfo,T;try{T=localStorage.key(d)}catch{T=null}return T&&(T=T.substring(R.keyPrefix.length)),T});return C(w,y),w}function Hn(d){var y=this,p=y.ready().then(function(){for(var w=y._dbInfo,R=localStorage.length,T=[],Q=0;Q<R;Q++){var I=localStorage.key(Q);I.indexOf(w.keyPrefix)===0&&T.push(I.substring(w.keyPrefix.length))}return T});return C(p,d),p}function an(d){var y=this,p=y.keys().then(function(w){return w.length});return C(p,d),p}function pe(d,y){var p=this;d=P(d);var w=p.ready().then(function(){var R=p._dbInfo;localStorage.removeItem(R.keyPrefix+d)});return C(w,y),w}function _r(d,y,p){var w=this;d=P(d);var R=w.ready().then(function(){y===void 0&&(y=null);var T=y;return new S(function(Q,I){var K=w._dbInfo;K.serializer.serialize(y,function(et,ot){if(ot)I(ot);else try{localStorage.setItem(K.keyPrefix+d,et),Q(T)}catch(vt){(vt.name==="QuotaExceededError"||vt.name==="NS_ERROR_DOM_QUOTA_REACHED")&&I(vt),I(vt)}})})});return C(R,p),R}function Rr(d,y){if(y=ft.apply(this,arguments),d=typeof d!="function"&&d||{},!d.name){var p=this.config();d.name=d.name||p.name,d.storeName=d.storeName||p.storeName}var w=this,R;return d.name?R=new S(function(T){d.storeName?T(dl(d,w._defaultConfig)):T(d.name+"/")}).then(function(T){for(var Q=localStorage.length-1;Q>=0;Q--){var I=localStorage.key(Q);I.indexOf(T)===0&&localStorage.removeItem(I)}}):R=S.reject("Invalid arguments"),C(R,y),R}var Na={_driver:"localStorageWrapper",_initStorage:Dr,_support:Pa(),iterate:tn,getItem:ru,setItem:_r,removeItem:pe,clear:$n,length:an,key:en,keys:Hn,dropInstance:Rr},nn=function(y,p){return y===p||typeof y=="number"&&typeof p=="number"&&isNaN(y)&&isNaN(p)},so=function(y,p){for(var w=y.length,R=0;R<w;){if(nn(y[R],p))return!0;R++}return!1},iu=Array.isArray||function(d){return Object.prototype.toString.call(d)==="[object Array]"},ln={},Or={},da={INDEXEDDB:Vt,WEBSQL:Be,LOCALSTORAGE:Na},hl=[da.INDEXEDDB._driver,da.WEBSQL._driver,da.LOCALSTORAGE._driver],qe=["dropInstance"],Ln=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(qe),zr={description:"",driver:hl.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function un(d,y){d[y]=function(){var p=arguments;return d.ready().then(function(){return d[y].apply(d,p)})}}function kn(){for(var d=1;d<arguments.length;d++){var y=arguments[d];if(y)for(var p in y)y.hasOwnProperty(p)&&(iu(y[p])?arguments[0][p]=y[p].slice():arguments[0][p]=y[p])}return arguments[0]}var ou=function(){function d(y){A(this,d);for(var p in da)if(da.hasOwnProperty(p)){var w=da[p],R=w._driver;this[p]=R,ln[R]||this.defineDriver(w)}this._defaultConfig=kn({},zr),this._config=kn({},this._defaultConfig,y),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return d.prototype.config=function(p){if((typeof p>"u"?"undefined":v(p))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var w in p){if(w==="storeName"&&(p[w]=p[w].replace(/\W/g,"_")),w==="version"&&typeof p[w]!="number")return new Error("Database version must be a number.");this._config[w]=p[w]}return"driver"in p&&p.driver?this.setDriver(this._config.driver):!0}else return typeof p=="string"?this._config[p]:this._config},d.prototype.defineDriver=function(p,w,R){var T=new S(function(Q,I){try{var K=p._driver,et=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!p._driver){I(et);return}for(var ot=Ln.concat("_initStorage"),vt=0,_t=ot.length;vt<_t;vt++){var qt=ot[vt],Gt=!so(qe,qt);if((Gt||p[qt])&&typeof p[qt]!="function"){I(et);return}}var te=function(){for(var rn=function(su){return function(){var du=new Error("Method "+su+" is not implemented by the current driver"),Ca=S.reject(du);return C(Ca,arguments[arguments.length-1]),Ca}},Yn=0,po=qe.length;Yn<po;Yn++){var cu=qe[Yn];p[cu]||(p[cu]=rn(cu))}};te();var ie=function(rn){ln[K]&&console.info("Redefining LocalForage driver: "+K),ln[K]=p,Or[K]=rn,Q()};"_support"in p?p._support&&typeof p._support=="function"?p._support().then(ie,I):ie(!!p._support):ie(!0)}catch(ke){I(ke)}});return Z(T,w,R),T},d.prototype.driver=function(){return this._driver||null},d.prototype.getDriver=function(p,w,R){var T=ln[p]?S.resolve(ln[p]):S.reject(new Error("Driver not found."));return Z(T,w,R),T},d.prototype.getSerializer=function(p){var w=S.resolve(Ma);return Z(w,p),w},d.prototype.ready=function(p){var w=this,R=w._driverSet.then(function(){return w._ready===null&&(w._ready=w._initDriver()),w._ready});return Z(R,p,p),R},d.prototype.setDriver=function(p,w,R){var T=this;iu(p)||(p=[p]);var Q=this._getSupportedDrivers(p);function I(){T._config.driver=T.driver()}function K(vt){return T._extend(vt),I(),T._ready=T._initStorage(T._config),T._ready}function et(vt){return function(){var _t=0;function qt(){for(;_t<vt.length;){var Gt=vt[_t];return _t++,T._dbInfo=null,T._ready=null,T.getDriver(Gt).then(K).catch(qt)}I();var te=new Error("No available storage method found.");return T._driverSet=S.reject(te),T._driverSet}return qt()}}var ot=this._driverSet!==null?this._driverSet.catch(function(){return S.resolve()}):S.resolve();return this._driverSet=ot.then(function(){var vt=Q[0];return T._dbInfo=null,T._ready=null,T.getDriver(vt).then(function(_t){T._driver=_t._driver,I(),T._wrapLibraryMethodsWithReady(),T._initDriver=et(Q)})}).catch(function(){I();var vt=new Error("No available storage method found.");return T._driverSet=S.reject(vt),T._driverSet}),Z(this._driverSet,w,R),this._driverSet},d.prototype.supports=function(p){return!!Or[p]},d.prototype._extend=function(p){kn(this,p)},d.prototype._getSupportedDrivers=function(p){for(var w=[],R=0,T=p.length;R<T;R++){var Q=p[R];this.supports(Q)&&w.push(Q)}return w},d.prototype._wrapLibraryMethodsWithReady=function(){for(var p=0,w=Ln.length;p<w;p++)un(this,Ln[p])},d.prototype.createInstance=function(p){return new d(p)},d}(),ho=new ou;o.exports=ho},{3:3}]},{},[4])(4)})}(Df)),Df.exports}var gA=mA();const He=Gf(gA);class Jl{path;type;owner;group;permissions;size;createdAt;modifiedAt;constructor(i){this.path=i.path,this.type=i.type,this.owner=i.owner,this.group=i.group,this.permissions=i.permissions,this.size=i.size;const c=Date.now();this.createdAt=i.createdAt??c,this.modifiedAt=i.modifiedAt??c}}class Ki{content;metadata;constructor(i,c){this.content=i,this.metadata=c}}function _f(l){return`file:${l}`}function ir(l){return`meta:${l}`}function or(l){return l.endsWith("/")?l:l+"/"}class yA{initialized=!1;async init(){this.initialized||(He.config({name:"relotel-fs",storeName:"files",description:"Relotel virtual filesystem"}),this.initialized=!0)}async writeFile(i,c,o){await this.init();let h,v,A;typeof i=="string"?(h=i,v=c,o&&(A=new Jl({path:h,type:"file",owner:o.owner||"root",group:o.group||"users",permissions:o.permissions||{owner:{read:!0,write:!0,execute:!1},group:{read:!0,write:!1,execute:!1},other:{read:!0,write:!1,execute:!1}},size:v.length,createdAt:o.createdAt??Date.now(),modifiedAt:o.modifiedAt??Date.now()}))):(h=i.metadata.path,v=i.content,A=i.metadata),await He.setItem(_f(h),v),A&&await He.setItem(ir(h),A);const D=this.getParentDir(h);if(D){let x=await He.getItem(or(D))||[];x.includes(this.basename(h))||(x.push(this.basename(h)),await He.setItem(or(D),x))}}async readFile(i,c="utf8"){await this.init();const o=await He.getItem(_f(i)),h=await this.readMetadata(i);if(!h)throw new Error("No metadata found for file: "+i);return new Ki(o??"",h)}async readMetadata(i){return await this.init(),await He.getItem(ir(i))||null}async readdir(i){return await this.init(),await He.getItem(or(i))||[]}async unlink(i){await this.init(),await He.removeItem(_f(i)),await He.removeItem(ir(i));const c=this.getParentDir(i);if(c){let o=await He.getItem(or(c))||[];o=o.filter(h=>h!==this.basename(i)),await He.setItem(or(c),o)}}async chown(i,c,o){await this.init();const h=await this.readMetadata(i);if(!h)throw new Error("No metadata found for file: "+i);const v=new Jl({...h});v.owner=c,o&&(v.group=o),await He.setItem(ir(i),v)}async chmod(i,c){await this.init();const o=await this.readMetadata(i);if(!o)throw new Error("No metadata found for file: "+i);const h=new Jl({...o});h.permissions=c,await He.setItem(ir(i),h)}getParentDir(i){const c=i.lastIndexOf("/");return c<=0?null:i.slice(0,c)||"/"}basename(i){const c=i.lastIndexOf("/");return c===-1?i:i.slice(c+1)}}const Vl=new yA;class vv{id;username;passwordHash;homeDir;groups;permissions;constructor(i){this.id=i.id||crypto.randomUUID(),this.username=i.username,this.passwordHash=i.passwordHash,this.homeDir=i.homeDir,this.groups=i.groups||[],this.permissions=i.permissions||{}}}const mv="user:",qf={async saveUser(l){await He.setItem(mv+l.username,l)},async getUser(l){return await He.getItem(mv+l)||null},async authenticate(l,i){const c=await this.getUser(l);return c?c.passwordHash===i:!1}},bA=Object.freeze(Object.defineProperty({__proto__:null,UserService:qf},Symbol.toStringTag,{value:"Module"}));async function AA({username:l,passwordHash:i}){try{await Vl.readdir("/home")}catch{await Vl.writeFile(new Ki("",new Jl({path:"/home",type:"directory",owner:"root",group:"users",permissions:{owner:{read:!0,write:!0,execute:!0},group:{read:!0,write:!0,execute:!0},other:{read:!0,write:!1,execute:!0}},size:0})))}const c=new vv({username:"root",passwordHash:"",homeDir:"/root",groups:["root","users"],permissions:{isAdmin:!0}}),o=new vv({username:l,passwordHash:i,homeDir:`/home/${l}`,groups:["users"],permissions:{}});try{await Vl.readdir(`/home/${l}`)}catch{await Vl.writeFile(new Ki("",new Jl({path:`/home/${l}`,type:"directory",owner:l,group:"users",permissions:{owner:{read:!0,write:!0,execute:!0},group:{read:!0,write:!1,execute:!0},other:{read:!0,write:!1,execute:!0}},size:0})))}return await Vl.writeFile(new Ki(`Welcome to your WebOS, ${l}!`,new Jl({path:`/home/${l}/welcome.txt`,type:"file",owner:l,group:"users",permissions:{owner:{read:!0,write:!0,execute:!1},group:{read:!0,write:!1,execute:!1},other:{read:!0,write:!1,execute:!1}},size:26+l.length}))),await qf.saveUser(c),await qf.saveUser(o),{rootUser:c,user:o}}const SA=Ty`
  ${wy}
  body {
    background: teal;
    font-family: 'R95 Sans Serif 14pt', 'ms_sans_serif', 'Arial', sans-serif;
  }
`;async function gv(l){const c=new TextEncoder().encode(l),o=await crypto.subtle.digest("SHA-256",c);return Array.from(new Uint8Array(o)).map(h=>h.toString(16).padStart(2,"0")).join("")}function xA(){return L.useEffect(()=>{Vl.init()},[]),ge.jsxs(ge.Fragment,{children:[ge.jsx(SA,{}),ge.jsx(Sy,{theme:pA,children:ge.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:ge.jsx("div",{children:ge.jsx(vA,{onCreate:async(l,i)=>{const c=await gv(i);await AA({username:l,passwordHash:c}),alert(`Created user: ${l}`)},onLogin:async(l,i)=>{const c=await gv(i),{UserService:o}=await hg(async()=>{const{UserService:v}=await Promise.resolve().then(()=>bA);return{UserService:v}},void 0),h=await o.authenticate(l,c);alert(h?`Welcome back, ${l}!`:"Invalid username or password")}})})})})]})}const EA=xg.createRoot(document.getElementById("root"));EA.render(ge.jsx(xA,{}));
