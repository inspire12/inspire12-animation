(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const w of p.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function f(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(m){if(m.ep)return;m.ep=!0;const p=f(m);fetch(m.href,p)}})();function Gd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var vc={exports:{}},Rn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function Ah(){if(Ad)return Rn;Ad=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(u,m,p){var w=null;if(p!==void 0&&(w=""+p),m.key!==void 0&&(w=""+m.key),"key"in m){p={};for(var R in m)R!=="key"&&(p[R]=m[R])}else p=m;return m=p.ref,{$$typeof:r,type:u,key:w,ref:m!==void 0?m:null,props:p}}return Rn.Fragment=d,Rn.jsx=f,Rn.jsxs=f,Rn}var Rd;function Rh(){return Rd||(Rd=1,vc.exports=Ah()),vc.exports}var i=Rh(),gc={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function zh(){if(zd)return te;zd=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),w=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),U=Symbol.iterator;function H(v){return v===null||typeof v!="object"?null:(v=U&&v[U]||v["@@iterator"],typeof v=="function"?v:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,O={};function B(v,Y,G){this.props=v,this.context=Y,this.refs=O,this.updater=G||M}B.prototype.isReactComponent={},B.prototype.setState=function(v,Y){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,Y,"setState")},B.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function Z(){}Z.prototype=B.prototype;function L(v,Y,G){this.props=v,this.context=Y,this.refs=O,this.updater=G||M}var K=L.prototype=new Z;K.constructor=L,_(K,B.prototype),K.isPureReactComponent=!0;var ge=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},Te=Object.prototype.hasOwnProperty;function Me(v,Y,G,X,J,re){return G=re.ref,{$$typeof:r,type:v,key:Y,ref:G!==void 0?G:null,props:re}}function _e(v,Y){return Me(v.type,Y,void 0,void 0,void 0,v.props)}function Se(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function et(v){var Y={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(G){return Y[G]})}var ft=/\/+/g;function Le(v,Y){return typeof v=="object"&&v!==null&&v.key!=null?et(""+v.key):Y.toString(36)}function Na(){}function Sa(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Na,Na):(v.status="pending",v.then(function(Y){v.status==="pending"&&(v.status="fulfilled",v.value=Y)},function(Y){v.status==="pending"&&(v.status="rejected",v.reason=Y)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function Ze(v,Y,G,X,J){var re=typeof v;(re==="undefined"||re==="boolean")&&(v=null);var ee=!1;if(v===null)ee=!0;else switch(re){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(v.$$typeof){case r:case d:ee=!0;break;case N:return ee=v._init,Ze(ee(v._payload),Y,G,X,J)}}if(ee)return J=J(v),ee=X===""?"."+Le(v,0):X,ge(J)?(G="",ee!=null&&(G=ee.replace(ft,"$&/")+"/"),Ze(J,Y,G,"",function(Wt){return Wt})):J!=null&&(Se(J)&&(J=_e(J,G+(J.key==null||v&&v.key===J.key?"":(""+J.key).replace(ft,"$&/")+"/")+ee)),Y.push(J)),1;ee=0;var tt=X===""?".":X+":";if(ge(v))for(var ye=0;ye<v.length;ye++)X=v[ye],re=tt+Le(X,ye),ee+=Ze(X,Y,G,re,J);else if(ye=H(v),typeof ye=="function")for(v=ye.call(v),ye=0;!(X=v.next()).done;)X=X.value,re=tt+Le(X,ye++),ee+=Ze(X,Y,G,re,J);else if(re==="object"){if(typeof v.then=="function")return Ze(Sa(v),Y,G,X,J);throw Y=String(v),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ee}function D(v,Y,G){if(v==null)return v;var X=[],J=0;return Ze(v,X,"","",function(re){return Y.call(G,re,J++)}),X}function q(v){if(v._status===-1){var Y=v._result;Y=Y(),Y.then(function(G){(v._status===0||v._status===-1)&&(v._status=1,v._result=G)},function(G){(v._status===0||v._status===-1)&&(v._status=2,v._result=G)}),v._status===-1&&(v._status=0,v._result=Y)}if(v._status===1)return v._result.default;throw v._result}var F=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function pe(){}return te.Children={map:D,forEach:function(v,Y,G){D(v,function(){Y.apply(this,arguments)},G)},count:function(v){var Y=0;return D(v,function(){Y++}),Y},toArray:function(v){return D(v,function(Y){return Y})||[]},only:function(v){if(!Se(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},te.Component=B,te.Fragment=f,te.Profiler=m,te.PureComponent=L,te.StrictMode=u,te.Suspense=b,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,te.__COMPILER_RUNTIME={__proto__:null,c:function(v){return I.H.useMemoCache(v)}},te.cache=function(v){return function(){return v.apply(null,arguments)}},te.cloneElement=function(v,Y,G){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var X=_({},v.props),J=v.key,re=void 0;if(Y!=null)for(ee in Y.ref!==void 0&&(re=void 0),Y.key!==void 0&&(J=""+Y.key),Y)!Te.call(Y,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&Y.ref===void 0||(X[ee]=Y[ee]);var ee=arguments.length-2;if(ee===1)X.children=G;else if(1<ee){for(var tt=Array(ee),ye=0;ye<ee;ye++)tt[ye]=arguments[ye+2];X.children=tt}return Me(v.type,J,void 0,void 0,re,X)},te.createContext=function(v){return v={$$typeof:w,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:p,_context:v},v},te.createElement=function(v,Y,G){var X,J={},re=null;if(Y!=null)for(X in Y.key!==void 0&&(re=""+Y.key),Y)Te.call(Y,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(J[X]=Y[X]);var ee=arguments.length-2;if(ee===1)J.children=G;else if(1<ee){for(var tt=Array(ee),ye=0;ye<ee;ye++)tt[ye]=arguments[ye+2];J.children=tt}if(v&&v.defaultProps)for(X in ee=v.defaultProps,ee)J[X]===void 0&&(J[X]=ee[X]);return Me(v,re,void 0,void 0,null,J)},te.createRef=function(){return{current:null}},te.forwardRef=function(v){return{$$typeof:R,render:v}},te.isValidElement=Se,te.lazy=function(v){return{$$typeof:N,_payload:{_status:-1,_result:v},_init:q}},te.memo=function(v,Y){return{$$typeof:x,type:v,compare:Y===void 0?null:Y}},te.startTransition=function(v){var Y=I.T,G={};I.T=G;try{var X=v(),J=I.S;J!==null&&J(G,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(pe,F)}catch(re){F(re)}finally{I.T=Y}},te.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},te.use=function(v){return I.H.use(v)},te.useActionState=function(v,Y,G){return I.H.useActionState(v,Y,G)},te.useCallback=function(v,Y){return I.H.useCallback(v,Y)},te.useContext=function(v){return I.H.useContext(v)},te.useDebugValue=function(){},te.useDeferredValue=function(v,Y){return I.H.useDeferredValue(v,Y)},te.useEffect=function(v,Y,G){var X=I.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(v,Y)},te.useId=function(){return I.H.useId()},te.useImperativeHandle=function(v,Y,G){return I.H.useImperativeHandle(v,Y,G)},te.useInsertionEffect=function(v,Y){return I.H.useInsertionEffect(v,Y)},te.useLayoutEffect=function(v,Y){return I.H.useLayoutEffect(v,Y)},te.useMemo=function(v,Y){return I.H.useMemo(v,Y)},te.useOptimistic=function(v,Y){return I.H.useOptimistic(v,Y)},te.useReducer=function(v,Y,G){return I.H.useReducer(v,Y,G)},te.useRef=function(v){return I.H.useRef(v)},te.useState=function(v){return I.H.useState(v)},te.useSyncExternalStore=function(v,Y,G){return I.H.useSyncExternalStore(v,Y,G)},te.useTransition=function(){return I.H.useTransition()},te.version="19.1.1",te}var Dd;function Ac(){return Dd||(Dd=1,gc.exports=zh()),gc.exports}var A=Ac();const Dh=Gd(A);var yc={exports:{}},zn={},bc={exports:{}},jc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function kh(){return kd||(kd=1,(function(r){function d(D,q){var F=D.length;D.push(q);e:for(;0<F;){var pe=F-1>>>1,v=D[pe];if(0<m(v,q))D[pe]=q,D[F]=v,F=pe;else break e}}function f(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var q=D[0],F=D.pop();if(F!==q){D[0]=F;e:for(var pe=0,v=D.length,Y=v>>>1;pe<Y;){var G=2*(pe+1)-1,X=D[G],J=G+1,re=D[J];if(0>m(X,F))J<v&&0>m(re,X)?(D[pe]=re,D[J]=F,pe=J):(D[pe]=X,D[G]=F,pe=G);else if(J<v&&0>m(re,F))D[pe]=re,D[J]=F,pe=J;else break e}}return q}function m(D,q){var F=D.sortIndex-q.sortIndex;return F!==0?F:D.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var w=Date,R=w.now();r.unstable_now=function(){return w.now()-R}}var b=[],x=[],N=1,U=null,H=3,M=!1,_=!1,O=!1,B=!1,Z=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function ge(D){for(var q=f(x);q!==null;){if(q.callback===null)u(x);else if(q.startTime<=D)u(x),q.sortIndex=q.expirationTime,d(b,q);else break;q=f(x)}}function I(D){if(O=!1,ge(D),!_)if(f(b)!==null)_=!0,Te||(Te=!0,Le());else{var q=f(x);q!==null&&Ze(I,q.startTime-D)}}var Te=!1,Me=-1,_e=5,Se=-1;function et(){return B?!0:!(r.unstable_now()-Se<_e)}function ft(){if(B=!1,Te){var D=r.unstable_now();Se=D;var q=!0;try{e:{_=!1,O&&(O=!1,L(Me),Me=-1),M=!0;var F=H;try{t:{for(ge(D),U=f(b);U!==null&&!(U.expirationTime>D&&et());){var pe=U.callback;if(typeof pe=="function"){U.callback=null,H=U.priorityLevel;var v=pe(U.expirationTime<=D);if(D=r.unstable_now(),typeof v=="function"){U.callback=v,ge(D),q=!0;break t}U===f(b)&&u(b),ge(D)}else u(b);U=f(b)}if(U!==null)q=!0;else{var Y=f(x);Y!==null&&Ze(I,Y.startTime-D),q=!1}}break e}finally{U=null,H=F,M=!1}q=void 0}}finally{q?Le():Te=!1}}}var Le;if(typeof K=="function")Le=function(){K(ft)};else if(typeof MessageChannel<"u"){var Na=new MessageChannel,Sa=Na.port2;Na.port1.onmessage=ft,Le=function(){Sa.postMessage(null)}}else Le=function(){Z(ft,0)};function Ze(D,q){Me=Z(function(){D(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return H},r.unstable_next=function(D){switch(H){case 1:case 2:case 3:var q=3;break;default:q=H}var F=H;H=q;try{return D()}finally{H=F}},r.unstable_requestPaint=function(){B=!0},r.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=H;H=D;try{return q()}finally{H=F}},r.unstable_scheduleCallback=function(D,q,F){var pe=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,D){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=F+v,D={id:N++,callback:q,priorityLevel:D,startTime:F,expirationTime:v,sortIndex:-1},F>pe?(D.sortIndex=F,d(x,D),f(b)===null&&D===f(x)&&(O?(L(Me),Me=-1):O=!0,Ze(I,F-pe))):(D.sortIndex=v,d(b,D),_||M||(_=!0,Te||(Te=!0,Le()))),D},r.unstable_shouldYield=et,r.unstable_wrapCallback=function(D){var q=H;return function(){var F=H;H=q;try{return D.apply(this,arguments)}finally{H=F}}}})(jc)),jc}var Md;function Mh(){return Md||(Md=1,bc.exports=kh()),bc.exports}var Nc={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function Ch(){if(Cd)return Ke;Cd=1;var r=Ac();function d(b){var x="https://react.dev/errors/"+b;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)x+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+b+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(b,x,N){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:U==null?null:""+U,children:b,containerInfo:x,implementation:N}}var w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(b,x){if(b==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ke.createPortal=function(b,x){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(d(299));return p(b,x,null,N)},Ke.flushSync=function(b){var x=w.T,N=u.p;try{if(w.T=null,u.p=2,b)return b()}finally{w.T=x,u.p=N,u.d.f()}},Ke.preconnect=function(b,x){typeof b=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,u.d.C(b,x))},Ke.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},Ke.preinit=function(b,x){if(typeof b=="string"&&x&&typeof x.as=="string"){var N=x.as,U=R(N,x.crossOrigin),H=typeof x.integrity=="string"?x.integrity:void 0,M=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;N==="style"?u.d.S(b,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:U,integrity:H,fetchPriority:M}):N==="script"&&u.d.X(b,{crossOrigin:U,integrity:H,fetchPriority:M,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Ke.preinitModule=function(b,x){if(typeof b=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var N=R(x.as,x.crossOrigin);u.d.M(b,{crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&u.d.M(b)},Ke.preload=function(b,x){if(typeof b=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var N=x.as,U=R(N,x.crossOrigin);u.d.L(b,N,{crossOrigin:U,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Ke.preloadModule=function(b,x){if(typeof b=="string")if(x){var N=R(x.as,x.crossOrigin);u.d.m(b,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else u.d.m(b)},Ke.requestFormReset=function(b){u.d.r(b)},Ke.unstable_batchedUpdates=function(b,x){return b(x)},Ke.useFormState=function(b,x,N){return w.H.useFormState(b,x,N)},Ke.useFormStatus=function(){return w.H.useHostTransitionStatus()},Ke.version="19.1.1",Ke}var Od;function Oh(){if(Od)return Nc.exports;Od=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),Nc.exports=Ch(),Nc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function _h(){if(_d)return zn;_d=1;var r=Mh(),d=Ac(),f=Oh();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(p(e)!==e)throw Error(u(188))}function b(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var s=n.alternate;if(s===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===a)return R(n),e;if(s===l)return R(n),t;s=s.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=s;else{for(var c=!1,o=n.child;o;){if(o===a){c=!0,a=n,l=s;break}if(o===l){c=!0,l=n,a=s;break}o=o.sibling}if(!c){for(o=s.child;o;){if(o===a){c=!0,a=s,l=n;break}if(o===l){c=!0,l=s,a=n;break}o=o.sibling}if(!c)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,U=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),K=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var Na=Symbol.for("react.client.reference");function Sa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Na?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case B:return"Profiler";case O:return"StrictMode";case I:return"Suspense";case Te:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case K:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case ge:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Me:return t=e.displayName||null,t!==null?t:Sa(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return Sa(e(t))}catch{}}return null}var Ze=Array.isArray,D=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],v=-1;function Y(e){return{current:e}}function G(e){0>v||(e.current=pe[v],pe[v]=null,v--)}function X(e,t){v++,pe[v]=e.current,e.current=t}var J=Y(null),re=Y(null),ee=Y(null),tt=Y(null);function ye(e,t){switch(X(ee,t),X(re,e),X(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?td(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=td(t),e=ad(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(J),X(J,e)}function Wt(){G(J),G(re),G(ee)}function as(e){e.memoizedState!==null&&X(tt,e);var t=J.current,a=ad(t,e.type);t!==a&&(X(re,e),X(J,a))}function _n(e){re.current===e&&(G(J),G(re)),tt.current===e&&(G(tt),Sn._currentValue=F)}var ls=Object.prototype.hasOwnProperty,ns=r.unstable_scheduleCallback,is=r.unstable_cancelCallback,i0=r.unstable_shouldYield,s0=r.unstable_requestPaint,Et=r.unstable_now,r0=r.unstable_getCurrentPriorityLevel,Cc=r.unstable_ImmediatePriority,Oc=r.unstable_UserBlockingPriority,Yn=r.unstable_NormalPriority,c0=r.unstable_LowPriority,_c=r.unstable_IdlePriority,o0=r.log,u0=r.unstable_setDisableYieldValue,Dl=null,at=null;function Ft(e){if(typeof o0=="function"&&u0(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(Dl,e)}catch{}}var lt=Math.clz32?Math.clz32:m0,f0=Math.log,d0=Math.LN2;function m0(e){return e>>>=0,e===0?32:31-(f0(e)/d0|0)|0}var Un=256,Hn=4194304;function wa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,s=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~s,l!==0?n=wa(l):(c&=o,c!==0?n=wa(c):a||(a=o&~e,a!==0&&(n=wa(a))))):(o=l&~s,o!==0?n=wa(o):c!==0?n=wa(c):a||(a=l&~e,a!==0&&(n=wa(a)))),n===0?0:t!==0&&t!==n&&(t&s)===0&&(s=n&-n,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:n}function kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function h0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yc(){var e=Un;return Un<<=1,(Un&4194048)===0&&(Un=256),e}function Uc(){var e=Hn;return Hn<<=1,(Hn&62914560)===0&&(Hn=4194304),e}function ss(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ml(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function p0(e,t,a,l,n,s){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,h=e.expirationTimes,S=e.hiddenUpdates;for(a=c&~a;0<a;){var z=31-lt(a),C=1<<z;o[z]=0,h[z]=-1;var E=S[z];if(E!==null)for(S[z]=null,z=0;z<E.length;z++){var T=E[z];T!==null&&(T.lane&=-536870913)}a&=~C}l!==0&&Hc(e,l,0),s!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=s&~(c&~t))}function Hc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-lt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Bc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-lt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function rs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:jd(e.type))}function x0(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var Pt=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Pt,$e="__reactProps$"+Pt,La="__reactContainer$"+Pt,os="__reactEvents$"+Pt,v0="__reactListeners$"+Pt,g0="__reactHandles$"+Pt,qc="__reactResources$"+Pt,Cl="__reactMarker$"+Pt;function us(e){delete e[Qe],delete e[$e],delete e[os],delete e[v0],delete e[g0]}function Za(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[La]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=sd(e);e!==null;){if(a=e[Qe])return a;e=sd(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[Qe]||e[La]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ol(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Va(e){var t=e[qc];return t||(t=e[qc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Cl]=!0}var Gc=new Set,Lc={};function Ea(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Lc[e]=t,e=0;e<t.length;e++)Gc.add(t[e])}var y0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zc={},Qc={};function b0(e){return ls.call(Qc,e)?!0:ls.call(Zc,e)?!1:y0.test(e)?Qc[e]=!0:(Zc[e]=!0,!1)}function Xn(e,t,a){if(b0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function qn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Mt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var fs,Vc;function Ja(e){if(fs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fs=t&&t[1]||"",Vc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fs+e+Vc}var ds=!1;function ms(e,t){if(!e||ds)return"";ds=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(T){var E=T}Reflect.construct(e,[],C)}else{try{C.call()}catch(T){E=T}e.call(C.prototype)}}else{try{throw Error()}catch(T){E=T}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(T){if(T&&E&&typeof T.stack=="string")return[T.stack,E.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),c=s[0],o=s[1];if(c&&o){var h=c.split(`
`),S=o.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===S.length)for(l=h.length-1,n=S.length-1;1<=l&&0<=n&&h[l]!==S[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==S[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==S[n]){var z=`
`+h[l].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=l&&0<=n);break}}}finally{ds=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ja(a):""}function j0(e){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return ms(e.type,!1);case 11:return ms(e.type.render,!1);case 1:return ms(e.type,!0);case 31:return Ja("Activity");default:return""}}function Kc(e){try{var t="";do t+=j0(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function N0(e){var t=Jc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gn(e){e._valueTracker||(e._valueTracker=N0(e))}function $c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Jc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var S0=/[\n"\\]/g;function mt(e){return e.replace(S0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hs(e,t,a,l,n,s,c,o){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?ps(e,c,dt(t)):a!=null?ps(e,c,dt(a)):l!=null&&e.removeAttribute("value"),n==null&&s!=null&&(e.defaultChecked=!!s),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+dt(o):e.removeAttribute("name")}function Wc(e,t,a,l,n,s,c,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function ps(e,t,a){t==="number"&&Ln(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Fc(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function Pc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(Ze(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var w0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ic(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||w0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function eo(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Ic(e,n,l)}else for(var s in t)t.hasOwnProperty(s)&&Ic(e,s,t[s])}function xs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),T0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(e){return T0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vs=null;function gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Pa=null;function to(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(hs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[$e]||null;if(!n)throw Error(u(90));hs(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&$c(l)}break e;case"textarea":Fc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var ys=!1;function ao(e,t,a){if(ys)return e(t,a);ys=!0;try{var l=e(t);return l}finally{if(ys=!1,(Fa!==null||Pa!==null)&&(zi(),Fa&&(t=Fa,e=Pa,Pa=Fa=null,to(t),e)))for(t=0;t<e.length;t++)to(e[t])}}function _l(e,t){var a=e.stateNode;if(a===null)return null;var l=a[$e]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bs=!1;if(Ct)try{var Yl={};Object.defineProperty(Yl,"passive",{get:function(){bs=!0}}),window.addEventListener("test",Yl,Yl),window.removeEventListener("test",Yl,Yl)}catch{bs=!1}var It=null,js=null,Qn=null;function lo(){if(Qn)return Qn;var e,t=js,a=t.length,l,n="value"in It?It.value:It.textContent,s=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[s-l];l++);return Qn=n.slice(e,1<l?1-l:void 0)}function Vn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kn(){return!0}function no(){return!1}function We(e){function t(a,l,n,s,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Kn:no,this.isPropagationStopped=no,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=We(Ta),Ul=N({},Ta,{view:0,detail:0}),A0=We(Ul),Ns,Ss,Hl,$n=N({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hl&&(Hl&&e.type==="mousemove"?(Ns=e.screenX-Hl.screenX,Ss=e.screenY-Hl.screenY):Ss=Ns=0,Hl=e),Ns)},movementY:function(e){return"movementY"in e?e.movementY:Ss}}),io=We($n),R0=N({},$n,{dataTransfer:0}),z0=We(R0),D0=N({},Ul,{relatedTarget:0}),ws=We(D0),k0=N({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=We(k0),C0=N({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O0=We(C0),_0=N({},Ta,{data:0}),so=We(_0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=H0[e])?!!t[e]:!1}function Es(){return B0}var X0=N({},Ul,{key:function(e){if(e.key){var t=Y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Es,charCode:function(e){return e.type==="keypress"?Vn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q0=We(X0),G0=N({},$n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ro=We(G0),L0=N({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Es}),Z0=We(L0),Q0=N({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=We(Q0),K0=N({},$n,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=We(K0),$0=N({},Ta,{newState:0,oldState:0}),W0=We($0),F0=[9,13,27,32],Ts=Ct&&"CompositionEvent"in window,Bl=null;Ct&&"documentMode"in document&&(Bl=document.documentMode);var P0=Ct&&"TextEvent"in window&&!Bl,co=Ct&&(!Ts||Bl&&8<Bl&&11>=Bl),oo=" ",uo=!1;function fo(e,t){switch(e){case"keyup":return F0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function I0(e,t){switch(e){case"compositionend":return mo(t);case"keypress":return t.which!==32?null:(uo=!0,oo);case"textInput":return e=t.data,e===oo&&uo?null:e;default:return null}}function em(e,t){if(Ia)return e==="compositionend"||!Ts&&fo(e,t)?(e=lo(),Qn=js=It=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return co&&t.locale!=="ko"?null:t.data;default:return null}}var tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tm[e.type]:t==="textarea"}function po(e,t,a,l){Fa?Pa?Pa.push(l):Pa=[l]:Fa=l,t=_i(t,"onChange"),0<t.length&&(a=new Jn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Xl=null,ql=null;function am(e){Wf(e,0)}function Wn(e){var t=Ol(e);if($c(t))return e}function xo(e,t){if(e==="change")return t}var vo=!1;if(Ct){var As;if(Ct){var Rs="oninput"in document;if(!Rs){var go=document.createElement("div");go.setAttribute("oninput","return;"),Rs=typeof go.oninput=="function"}As=Rs}else As=!1;vo=As&&(!document.documentMode||9<document.documentMode)}function yo(){Xl&&(Xl.detachEvent("onpropertychange",bo),ql=Xl=null)}function bo(e){if(e.propertyName==="value"&&Wn(ql)){var t=[];po(t,ql,e,gs(e)),ao(am,t)}}function lm(e,t,a){e==="focusin"?(yo(),Xl=t,ql=a,Xl.attachEvent("onpropertychange",bo)):e==="focusout"&&yo()}function nm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wn(ql)}function im(e,t){if(e==="click")return Wn(t)}function sm(e,t){if(e==="input"||e==="change")return Wn(t)}function rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:rm;function Gl(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!ls.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function jo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function No(e,t){var a=jo(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jo(a)}}function So(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?So(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ln(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ln(e.document)}return t}function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var cm=Ct&&"documentMode"in document&&11>=document.documentMode,el=null,Ds=null,Ll=null,ks=!1;function Eo(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ks||el==null||el!==Ln(l)||(l=el,"selectionStart"in l&&zs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ll&&Gl(Ll,l)||(Ll=l,l=_i(Ds,"onSelect"),0<l.length&&(t=new Jn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function Aa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},Ms={},To={};Ct&&(To=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Ra(e){if(Ms[e])return Ms[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in To)return Ms[e]=t[a];return e}var Ao=Ra("animationend"),Ro=Ra("animationiteration"),zo=Ra("animationstart"),om=Ra("transitionrun"),um=Ra("transitionstart"),fm=Ra("transitioncancel"),Do=Ra("transitionend"),ko=new Map,Cs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cs.push("scrollEnd");function jt(e,t){ko.set(e,t),Ea(t,[e])}var Mo=new WeakMap;function ht(e,t){if(typeof e=="object"&&e!==null){var a=Mo.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Kc(t)},Mo.set(e,t),t)}return{value:e,source:t,stack:Kc(t)}}var pt=[],al=0,Os=0;function Fn(){for(var e=al,t=Os=al=0;t<e;){var a=pt[t];pt[t++]=null;var l=pt[t];pt[t++]=null;var n=pt[t];pt[t++]=null;var s=pt[t];if(pt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}s!==0&&Co(a,n,s)}}function Pn(e,t,a,l){pt[al++]=e,pt[al++]=t,pt[al++]=a,pt[al++]=l,Os|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function _s(e,t,a,l){return Pn(e,t,a,l),In(e)}function ll(e,t){return Pn(e,null,null,t),In(e)}function Co(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,s=e.return;s!==null;)s.childLanes|=a,l=s.alternate,l!==null&&(l.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(n=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,n&&t!==null&&(n=31-lt(a),e=s.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),s):null}function In(e){if(50<pn)throw pn=0,qr=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function dm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,l){return new dm(e,t,a,l)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ot(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Oo(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ei(e,t,a,l,n,s){var c=0;if(l=e,typeof e=="function")Ys(e)&&(c=1);else if(typeof e=="string")c=hh(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=it(31,a,t,n),e.elementType=Se,e.lanes=s,e;case _:return za(a.children,n,s,t);case O:c=8,n|=24;break;case B:return e=it(12,a,t,n|2),e.elementType=B,e.lanes=s,e;case I:return e=it(13,a,t,n),e.elementType=I,e.lanes=s,e;case Te:return e=it(19,a,t,n),e.elementType=Te,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:case K:c=10;break e;case L:c=9;break e;case ge:c=11;break e;case Me:c=14;break e;case _e:c=16,l=null;break e}c=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=it(c,a,t,n),t.elementType=e,t.type=l,t.lanes=s,t}function za(e,t,a,l){return e=it(7,e,l,t),e.lanes=a,e}function Us(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function Hs(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var il=[],sl=0,ti=null,ai=0,xt=[],vt=0,Da=null,_t=1,Yt="";function ka(e,t){il[sl++]=ai,il[sl++]=ti,ti=e,ai=t}function _o(e,t,a){xt[vt++]=_t,xt[vt++]=Yt,xt[vt++]=Da,Da=e;var l=_t;e=Yt;var n=32-lt(l)-1;l&=~(1<<n),a+=1;var s=32-lt(t)+n;if(30<s){var c=n-n%5;s=(l&(1<<c)-1).toString(32),l>>=c,n-=c,_t=1<<32-lt(t)+n|a<<n|l,Yt=s+e}else _t=1<<s|a<<n|l,Yt=e}function Bs(e){e.return!==null&&(ka(e,1),_o(e,1,0))}function Xs(e){for(;e===ti;)ti=il[--sl],il[sl]=null,ai=il[--sl],il[sl]=null;for(;e===Da;)Da=xt[--vt],xt[vt]=null,Yt=xt[--vt],xt[vt]=null,_t=xt[--vt],xt[vt]=null}var Je=null,we=null,oe=!1,Ma=null,Tt=!1,qs=Error(u(519));function Ca(e){var t=Error(u(418,""));throw Vl(ht(t,e)),qs}function Yo(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Qe]=e,t[$e]=l,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<vn.length;a++)ie(vn[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),Wc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Gn(t);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),Pc(t,l.value,l.defaultValue,l.children),Gn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||ed(t.textContent,a)?(l.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),l.onScroll!=null&&ie("scroll",t),l.onScrollEnd!=null&&ie("scrollend",t),l.onClick!=null&&(t.onclick=Yi),t=!0):t=!1,t||Ca(e)}function Uo(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Je=Je.return}}function Zl(e){if(e!==Je)return!1;if(!oe)return Uo(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lc(e.type,e.memoizedProps)),a=!a),a&&we&&Ca(e),Uo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){we=St(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}we=null}}else t===27?(t=we,pa(e.type)?(e=rc,rc=null,we=e):we=t):we=Je?St(e.stateNode.nextSibling):null;return!0}function Ql(){we=Je=null,oe=!1}function Ho(){var e=Ma;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),Ma=null),e}function Vl(e){Ma===null?Ma=[e]:Ma.push(e)}var Gs=Y(null),Oa=null,Ut=null;function ea(e,t,a){X(Gs,t._currentValue),t._currentValue=a}function Ht(e){e._currentValue=Gs.current,G(Gs)}function Ls(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Zs(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var s=n.dependencies;if(s!==null){var c=n.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=n;for(var h=0;h<t.length;h++)if(o.context===t[h]){s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),Ls(s.return,a,e),l||(c=null);break e}s=o.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(u(341));c.lanes|=a,s=c.alternate,s!==null&&(s.lanes|=a),Ls(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function Kl(e,t,a,l){e=null;for(var n=t,s=!1;n!==null;){if(!s){if((n.flags&524288)!==0)s=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var o=n.type;nt(n.pendingProps.value,c.value)||(e!==null?e.push(o):e=[o])}}else if(n===tt.current){if(c=n.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Sn):e=[Sn])}n=n.return}e!==null&&Zs(t,e,a,l),t.flags|=262144}function li(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _a(e){Oa=e,Ut=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Bo(Oa,e)}function ni(e,t){return Oa===null&&_a(e),Bo(e,t)}function Bo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ut===null){if(e===null)throw Error(u(308));Ut=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ut=Ut.next=t;return a}var mm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},hm=r.unstable_scheduleCallback,pm=r.unstable_NormalPriority,Ce={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qs(){return{controller:new mm,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&hm(pm,function(){e.controller.abort()})}var $l=null,Vs=0,rl=0,cl=null;function xm(e,t){if($l===null){var a=$l=[];Vs=0,rl=Jr(),cl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Vs++,t.then(Xo,Xo),t}function Xo(){if(--Vs===0&&$l!==null){cl!==null&&(cl.status="fulfilled");var e=$l;$l=null,rl=0,cl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var qo=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&xm(e,t),qo!==null&&qo(e,t)};var Ya=Y(null);function Ks(){var e=Ya.current;return e!==null?e:ve.pooledCache}function ii(e,t){t===null?X(Ya,Ya.current):X(Ya,t.pool)}function Go(){var e=Ks();return e===null?null:{parent:Ce._currentValue,pool:e}}var Wl=Error(u(460)),Lo=Error(u(474)),si=Error(u(542)),Js={then:function(){}};function Zo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ri(){}function Qo(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ri,ri),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ko(e),e;default:if(typeof t.status=="string")t.then(ri,ri);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ko(e),e}throw Fl=t,Wl}}var Fl=null;function Vo(){if(Fl===null)throw Error(u(459));var e=Fl;return Fl=null,e}function Ko(e){if(e===Wl||e===si)throw Error(u(483))}var ta=!1;function $s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ws(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ue&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=In(e),Co(e,null,a),t}return Pn(e,l,t,a),In(e)}function Pl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Bc(e,a)}}function Fs(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?n=s=c:s=s.next=c,a=a.next}while(a!==null);s===null?n=s=t:s=s.next=t}else n=s=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ps=!1;function Il(){if(Ps){var e=cl;if(e!==null)throw e}}function en(e,t,a,l){Ps=!1;var n=e.updateQueue;ta=!1;var s=n.firstBaseUpdate,c=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var h=o,S=h.next;h.next=null,c===null?s=S:c.next=S,c=h;var z=e.alternate;z!==null&&(z=z.updateQueue,o=z.lastBaseUpdate,o!==c&&(o===null?z.firstBaseUpdate=S:o.next=S,z.lastBaseUpdate=h))}if(s!==null){var C=n.baseState;c=0,z=S=h=null,o=s;do{var E=o.lane&-536870913,T=E!==o.lane;if(T?(se&E)===E:(l&E)===E){E!==0&&E===rl&&(Ps=!0),z!==null&&(z=z.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var P=e,$=o;E=t;var he=a;switch($.tag){case 1:if(P=$.payload,typeof P=="function"){C=P.call(he,C,E);break e}C=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=$.payload,E=typeof P=="function"?P.call(he,C,E):P,E==null)break e;C=N({},C,E);break e;case 2:ta=!0}}E=o.callback,E!==null&&(e.flags|=64,T&&(e.flags|=8192),T=n.callbacks,T===null?n.callbacks=[E]:T.push(E))}else T={lane:E,tag:o.tag,payload:o.payload,callback:o.callback,next:null},z===null?(S=z=T,h=C):z=z.next=T,c|=E;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;T=o,o=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);z===null&&(h=C),n.baseState=h,n.firstBaseUpdate=S,n.lastBaseUpdate=z,s===null&&(n.shared.lanes=0),fa|=c,e.lanes=c,e.memoizedState=C}}function Jo(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function $o(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jo(a[e],t)}var ol=Y(null),ci=Y(0);function Wo(e,t){e=Qt,X(ci,e),X(ol,t),Qt=e|t.baseLanes}function Is(){X(ci,Qt),X(ol,ol.current)}function er(){Qt=ci.current,G(ol),G(ci)}var na=0,ae=null,de=null,De=null,oi=!1,ul=!1,Ua=!1,ui=0,tn=0,fl=null,gm=0;function Ae(){throw Error(u(321))}function tr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function ar(e,t,a,l,n,s){return na=s,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Cu:Ou,Ua=!1,s=a(l,n),Ua=!1,ul&&(s=Po(t,a,l,n)),Fo(e),s}function Fo(e){D.H=xi;var t=de!==null&&de.next!==null;if(na=0,De=de=ae=null,oi=!1,tn=0,fl=null,t)throw Error(u(300));e===null||Ue||(e=e.dependencies,e!==null&&li(e)&&(Ue=!0))}function Po(e,t,a,l){ae=e;var n=0;do{if(ul&&(fl=null),tn=0,ul=!1,25<=n)throw Error(u(301));if(n+=1,De=de=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=Em,s=t(a,l)}while(ul);return s}function ym(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?an(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(ae.flags|=1024),t}function lr(){var e=ui!==0;return ui=0,e}function nr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ir(e){if(oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oi=!1}na=0,De=de=ae=null,ul=!1,tn=ui=0,fl=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ae.memoizedState=De=e:De=De.next=e,De}function ke(){if(de===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=De===null?ae.memoizedState:De.next;if(t!==null)De=t,de=e;else{if(e===null)throw ae.alternate===null?Error(u(467)):Error(u(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},De===null?ae.memoizedState=De=e:De=De.next=e}return De}function sr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function an(e){var t=tn;return tn+=1,fl===null&&(fl=[]),e=Qo(fl,e,t),t=ae,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Cu:Ou),e}function fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return an(e);if(e.$$typeof===K)return Ve(e)}throw Error(u(438,String(e)))}function rr(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=sr(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=et;return t.index++,a}function Bt(e,t){return typeof t=="function"?t(e):t}function di(e){var t=ke();return cr(t,de,e)}function cr(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,s=l.pending;if(s!==null){if(n!==null){var c=n.next;n.next=s.next,s.next=c}t.baseQueue=n=s,l.pending=null}if(s=e.baseState,n===null)e.memoizedState=s;else{t=n.next;var o=c=null,h=null,S=t,z=!1;do{var C=S.lane&-536870913;if(C!==S.lane?(se&C)===C:(na&C)===C){var E=S.revertLane;if(E===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),C===rl&&(z=!0);else if((na&E)===E){S=S.next,E===rl&&(z=!0);continue}else C={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(o=h=C,c=s):h=h.next=C,ae.lanes|=E,fa|=E;C=S.action,Ua&&a(s,C),s=S.hasEagerState?S.eagerState:a(s,C)}else E={lane:C,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},h===null?(o=h=E,c=s):h=h.next=E,ae.lanes|=C,fa|=C;S=S.next}while(S!==null&&S!==t);if(h===null?c=s:h.next=o,!nt(s,e.memoizedState)&&(Ue=!0,z&&(a=cl,a!==null)))throw a;e.memoizedState=s,e.baseState=c,e.baseQueue=h,l.lastRenderedState=s}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function or(e){var t=ke(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,s=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do s=e(s,c.action),c=c.next;while(c!==n);nt(s,t.memoizedState)||(Ue=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,l]}function Io(e,t,a){var l=ae,n=ke(),s=oe;if(s){if(a===void 0)throw Error(u(407));a=a()}else a=t();var c=!nt((de||n).memoizedState,a);c&&(n.memoizedState=a,Ue=!0),n=n.queue;var o=au.bind(null,l,n,e);if(ln(2048,8,o,[e]),n.getSnapshot!==t||c||De!==null&&De.memoizedState.tag&1){if(l.flags|=2048,dl(9,mi(),tu.bind(null,l,n,a,t),null),ve===null)throw Error(u(349));s||(na&124)!==0||eu(l,t,a)}return a}function eu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=sr(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function tu(e,t,a,l){t.value=a,t.getSnapshot=l,lu(t)&&nu(e)}function au(e,t,a){return a(function(){lu(t)&&nu(e)})}function lu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function nu(e){var t=ll(e,2);t!==null&&ut(t,e,2)}function ur(e){var t=Fe();if(typeof e=="function"){var a=e;if(e=a(),Ua){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:e},t}function iu(e,t,a,l){return e.baseState=a,cr(e,de,typeof l=="function"?l:Bt)}function bm(e,t,a,l,n){if(pi(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){s.listeners.push(c)}};D.T!==null?a(!0):s.isTransition=!1,l(s),a=t.pending,a===null?(s.next=t.pending=s,su(t,s)):(s.next=a.next,t.pending=a.next=s)}}function su(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var s=D.T,c={};D.T=c;try{var o=a(n,l),h=D.S;h!==null&&h(c,o),ru(e,t,o)}catch(S){fr(e,t,S)}finally{D.T=s}}else try{s=a(n,l),ru(e,t,s)}catch(S){fr(e,t,S)}}function ru(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){cu(e,t,l)},function(l){return fr(e,t,l)}):cu(e,t,a)}function cu(e,t,a){t.status="fulfilled",t.value=a,ou(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,su(e,a)))}function fr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ou(t),t=t.next;while(t!==l)}e.action=null}function ou(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uu(e,t){return t}function fu(e,t){if(oe){var a=ve.formState;if(a!==null){e:{var l=ae;if(oe){if(we){t:{for(var n=we,s=Tt;n.nodeType!==8;){if(!s){n=null;break t}if(n=St(n.nextSibling),n===null){n=null;break t}}s=n.data,n=s==="F!"||s==="F"?n:null}if(n){we=St(n.nextSibling),l=n.data==="F!";break e}}Ca(l)}l=!1}l&&(t=a[0])}}return a=Fe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uu,lastRenderedState:t},a.queue=l,a=Du.bind(null,ae,l),l.dispatch=a,l=ur(!1),s=xr.bind(null,ae,!1,l.queue),l=Fe(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=bm.bind(null,ae,n,s,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function du(e){var t=ke();return mu(t,de,e)}function mu(e,t,a){if(t=cr(e,t,uu)[0],e=di(Bt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=an(t)}catch(c){throw c===Wl?si:c}else l=t;t=ke();var n=t.queue,s=n.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,dl(9,mi(),jm.bind(null,n,a),null)),[l,s,e]}function jm(e,t){e.action=t}function hu(e){var t=ke(),a=de;if(a!==null)return mu(t,a,e);ke(),t=t.memoizedState,a=ke();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=sr(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function mi(){return{destroy:void 0,resource:void 0}}function pu(){return ke().memoizedState}function hi(e,t,a,l){var n=Fe();l=l===void 0?null:l,ae.flags|=e,n.memoizedState=dl(1|t,mi(),a,l)}function ln(e,t,a,l){var n=ke();l=l===void 0?null:l;var s=n.memoizedState.inst;de!==null&&l!==null&&tr(l,de.memoizedState.deps)?n.memoizedState=dl(t,s,a,l):(ae.flags|=e,n.memoizedState=dl(1|t,s,a,l))}function xu(e,t){hi(8390656,8,e,t)}function vu(e,t){ln(2048,8,e,t)}function gu(e,t){return ln(4,2,e,t)}function yu(e,t){return ln(4,4,e,t)}function bu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ju(e,t,a){a=a!=null?a.concat([e]):null,ln(4,4,bu.bind(null,t,e),a)}function dr(){}function Nu(e,t){var a=ke();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&tr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Su(e,t){var a=ke();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&tr(t,l[1]))return l[0];if(l=e(),Ua){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l}function mr(e,t,a){return a===void 0||(na&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Af(),ae.lanes|=e,fa|=e,a)}function wu(e,t,a,l){return nt(a,t)?a:ol.current!==null?(e=mr(e,a,l),nt(e,t)||(Ue=!0),e):(na&42)===0?(Ue=!0,e.memoizedState=a):(e=Af(),ae.lanes|=e,fa|=e,t)}function Eu(e,t,a,l,n){var s=q.p;q.p=s!==0&&8>s?s:8;var c=D.T,o={};D.T=o,xr(e,!1,t,a);try{var h=n(),S=D.S;if(S!==null&&S(o,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var z=vm(h,l);nn(e,t,z,ot(e))}else nn(e,t,l,ot(e))}catch(C){nn(e,t,{then:function(){},status:"rejected",reason:C},ot())}finally{q.p=s,D.T=c}}function Nm(){}function hr(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=Tu(e).queue;Eu(e,n,t,F,a===null?Nm:function(){return Au(e),a(l)})}function Tu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Au(e){var t=Tu(e).next.queue;nn(e,t,{},ot())}function pr(){return Ve(Sn)}function Ru(){return ke().memoizedState}function zu(){return ke().memoizedState}function Sm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ot();e=aa(a);var l=la(t,e,a);l!==null&&(ut(l,t,a),Pl(l,t,a)),t={cache:Qs()},e.payload=t;return}t=t.return}}function wm(e,t,a){var l=ot();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pi(e)?ku(t,a):(a=_s(e,t,a,l),a!==null&&(ut(a,e,l),Mu(a,t,l)))}function Du(e,t,a){var l=ot();nn(e,t,a,l)}function nn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pi(e))ku(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,o=s(c,a);if(n.hasEagerState=!0,n.eagerState=o,nt(o,c))return Pn(e,t,n,0),ve===null&&Fn(),!1}catch{}finally{}if(a=_s(e,t,n,l),a!==null)return ut(a,e,l),Mu(a,t,l),!0}return!1}function xr(e,t,a,l){if(l={lane:2,revertLane:Jr(),action:l,hasEagerState:!1,eagerState:null,next:null},pi(e)){if(t)throw Error(u(479))}else t=_s(e,a,l,2),t!==null&&ut(t,e,2)}function pi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function ku(e,t){ul=oi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Mu(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Bc(e,a)}}var xi={readContext:Ve,use:fi,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae},Cu={readContext:Ve,use:fi,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:xu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,hi(4194308,4,bu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){hi(4,2,e,t)},useMemo:function(e,t){var a=Fe();t=t===void 0?null:t;var l=e();if(Ua){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Fe();if(a!==void 0){var n=a(t);if(Ua){Ft(!0);try{a(t)}finally{Ft(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=wm.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=ur(e);var t=e.queue,a=Du.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:dr,useDeferredValue:function(e,t){var a=Fe();return mr(a,e,t)},useTransition:function(){var e=ur(!1);return e=Eu.bind(null,ae,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,n=Fe();if(oe){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),ve===null)throw Error(u(349));(se&124)!==0||eu(l,t,a)}n.memoizedState=a;var s={value:a,getSnapshot:t};return n.queue=s,xu(au.bind(null,l,s,e),[e]),l.flags|=2048,dl(9,mi(),tu.bind(null,l,s,a,t),null),a},useId:function(){var e=Fe(),t=ve.identifierPrefix;if(oe){var a=Yt,l=_t;a=(l&~(1<<32-lt(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=ui++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=gm++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:pr,useFormState:fu,useActionState:fu,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=xr.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:rr,useCacheRefresh:function(){return Fe().memoizedState=Sm.bind(null,ae)}},Ou={readContext:Ve,use:fi,useCallback:Nu,useContext:Ve,useEffect:vu,useImperativeHandle:ju,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:Su,useReducer:di,useRef:pu,useState:function(){return di(Bt)},useDebugValue:dr,useDeferredValue:function(e,t){var a=ke();return wu(a,de.memoizedState,e,t)},useTransition:function(){var e=di(Bt)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Io,useId:Ru,useHostTransitionStatus:pr,useFormState:du,useActionState:du,useOptimistic:function(e,t){var a=ke();return iu(a,de,e,t)},useMemoCache:rr,useCacheRefresh:zu},Em={readContext:Ve,use:fi,useCallback:Nu,useContext:Ve,useEffect:vu,useImperativeHandle:ju,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:Su,useReducer:or,useRef:pu,useState:function(){return or(Bt)},useDebugValue:dr,useDeferredValue:function(e,t){var a=ke();return de===null?mr(a,e,t):wu(a,de.memoizedState,e,t)},useTransition:function(){var e=or(Bt)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Io,useId:Ru,useHostTransitionStatus:pr,useFormState:hu,useActionState:hu,useOptimistic:function(e,t){var a=ke();return de!==null?iu(a,de,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rr,useCacheRefresh:zu},ml=null,sn=0;function vi(e){var t=sn;return sn+=1,ml===null&&(ml=[]),Qo(ml,e,t)}function rn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gi(e,t){throw t.$$typeof===U?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _u(e){var t=e._init;return t(e._payload)}function Yu(e){function t(y,g){if(e){var j=y.deletions;j===null?(y.deletions=[g],y.flags|=16):j.push(g)}}function a(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function l(y){for(var g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function n(y,g){return y=Ot(y,g),y.index=0,y.sibling=null,y}function s(y,g,j){return y.index=j,e?(j=y.alternate,j!==null?(j=j.index,j<g?(y.flags|=67108866,g):j):(y.flags|=67108866,g)):(y.flags|=1048576,g)}function c(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function o(y,g,j,k){return g===null||g.tag!==6?(g=Us(j,y.mode,k),g.return=y,g):(g=n(g,j),g.return=y,g)}function h(y,g,j,k){var Q=j.type;return Q===_?z(y,g,j.props.children,k,j.key):g!==null&&(g.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===_e&&_u(Q)===g.type)?(g=n(g,j.props),rn(g,j),g.return=y,g):(g=ei(j.type,j.key,j.props,null,y.mode,k),rn(g,j),g.return=y,g)}function S(y,g,j,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==j.containerInfo||g.stateNode.implementation!==j.implementation?(g=Hs(j,y.mode,k),g.return=y,g):(g=n(g,j.children||[]),g.return=y,g)}function z(y,g,j,k,Q){return g===null||g.tag!==7?(g=za(j,y.mode,k,Q),g.return=y,g):(g=n(g,j),g.return=y,g)}function C(y,g,j){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Us(""+g,y.mode,j),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case H:return j=ei(g.type,g.key,g.props,null,y.mode,j),rn(j,g),j.return=y,j;case M:return g=Hs(g,y.mode,j),g.return=y,g;case _e:var k=g._init;return g=k(g._payload),C(y,g,j)}if(Ze(g)||Le(g))return g=za(g,y.mode,j,null),g.return=y,g;if(typeof g.then=="function")return C(y,vi(g),j);if(g.$$typeof===K)return C(y,ni(y,g),j);gi(y,g)}return null}function E(y,g,j,k){var Q=g!==null?g.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return Q!==null?null:o(y,g,""+j,k);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case H:return j.key===Q?h(y,g,j,k):null;case M:return j.key===Q?S(y,g,j,k):null;case _e:return Q=j._init,j=Q(j._payload),E(y,g,j,k)}if(Ze(j)||Le(j))return Q!==null?null:z(y,g,j,k,null);if(typeof j.then=="function")return E(y,g,vi(j),k);if(j.$$typeof===K)return E(y,g,ni(y,j),k);gi(y,j)}return null}function T(y,g,j,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return y=y.get(j)||null,o(g,y,""+k,Q);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case H:return y=y.get(k.key===null?j:k.key)||null,h(g,y,k,Q);case M:return y=y.get(k.key===null?j:k.key)||null,S(g,y,k,Q);case _e:var le=k._init;return k=le(k._payload),T(y,g,j,k,Q)}if(Ze(k)||Le(k))return y=y.get(j)||null,z(g,y,k,Q,null);if(typeof k.then=="function")return T(y,g,j,vi(k),Q);if(k.$$typeof===K)return T(y,g,j,ni(g,k),Q);gi(g,k)}return null}function P(y,g,j,k){for(var Q=null,le=null,V=g,W=g=0,Be=null;V!==null&&W<j.length;W++){V.index>W?(Be=V,V=null):Be=V.sibling;var ce=E(y,V,j[W],k);if(ce===null){V===null&&(V=Be);break}e&&V&&ce.alternate===null&&t(y,V),g=s(ce,g,W),le===null?Q=ce:le.sibling=ce,le=ce,V=Be}if(W===j.length)return a(y,V),oe&&ka(y,W),Q;if(V===null){for(;W<j.length;W++)V=C(y,j[W],k),V!==null&&(g=s(V,g,W),le===null?Q=V:le.sibling=V,le=V);return oe&&ka(y,W),Q}for(V=l(V);W<j.length;W++)Be=T(V,y,W,j[W],k),Be!==null&&(e&&Be.alternate!==null&&V.delete(Be.key===null?W:Be.key),g=s(Be,g,W),le===null?Q=Be:le.sibling=Be,le=Be);return e&&V.forEach(function(ba){return t(y,ba)}),oe&&ka(y,W),Q}function $(y,g,j,k){if(j==null)throw Error(u(151));for(var Q=null,le=null,V=g,W=g=0,Be=null,ce=j.next();V!==null&&!ce.done;W++,ce=j.next()){V.index>W?(Be=V,V=null):Be=V.sibling;var ba=E(y,V,ce.value,k);if(ba===null){V===null&&(V=Be);break}e&&V&&ba.alternate===null&&t(y,V),g=s(ba,g,W),le===null?Q=ba:le.sibling=ba,le=ba,V=Be}if(ce.done)return a(y,V),oe&&ka(y,W),Q;if(V===null){for(;!ce.done;W++,ce=j.next())ce=C(y,ce.value,k),ce!==null&&(g=s(ce,g,W),le===null?Q=ce:le.sibling=ce,le=ce);return oe&&ka(y,W),Q}for(V=l(V);!ce.done;W++,ce=j.next())ce=T(V,y,W,ce.value,k),ce!==null&&(e&&ce.alternate!==null&&V.delete(ce.key===null?W:ce.key),g=s(ce,g,W),le===null?Q=ce:le.sibling=ce,le=ce);return e&&V.forEach(function(Th){return t(y,Th)}),oe&&ka(y,W),Q}function he(y,g,j,k){if(typeof j=="object"&&j!==null&&j.type===_&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case H:e:{for(var Q=j.key;g!==null;){if(g.key===Q){if(Q=j.type,Q===_){if(g.tag===7){a(y,g.sibling),k=n(g,j.props.children),k.return=y,y=k;break e}}else if(g.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===_e&&_u(Q)===g.type){a(y,g.sibling),k=n(g,j.props),rn(k,j),k.return=y,y=k;break e}a(y,g);break}else t(y,g);g=g.sibling}j.type===_?(k=za(j.props.children,y.mode,k,j.key),k.return=y,y=k):(k=ei(j.type,j.key,j.props,null,y.mode,k),rn(k,j),k.return=y,y=k)}return c(y);case M:e:{for(Q=j.key;g!==null;){if(g.key===Q)if(g.tag===4&&g.stateNode.containerInfo===j.containerInfo&&g.stateNode.implementation===j.implementation){a(y,g.sibling),k=n(g,j.children||[]),k.return=y,y=k;break e}else{a(y,g);break}else t(y,g);g=g.sibling}k=Hs(j,y.mode,k),k.return=y,y=k}return c(y);case _e:return Q=j._init,j=Q(j._payload),he(y,g,j,k)}if(Ze(j))return P(y,g,j,k);if(Le(j)){if(Q=Le(j),typeof Q!="function")throw Error(u(150));return j=Q.call(j),$(y,g,j,k)}if(typeof j.then=="function")return he(y,g,vi(j),k);if(j.$$typeof===K)return he(y,g,ni(y,j),k);gi(y,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,g!==null&&g.tag===6?(a(y,g.sibling),k=n(g,j),k.return=y,y=k):(a(y,g),k=Us(j,y.mode,k),k.return=y,y=k),c(y)):a(y,g)}return function(y,g,j,k){try{sn=0;var Q=he(y,g,j,k);return ml=null,Q}catch(V){if(V===Wl||V===si)throw V;var le=it(29,V,null,y.mode);return le.lanes=k,le.return=y,le}finally{}}}var hl=Yu(!0),Uu=Yu(!1),gt=Y(null),At=null;function ia(e){var t=e.alternate;X(Oe,Oe.current&1),X(gt,e),At===null&&(t===null||ol.current!==null||t.memoizedState!==null)&&(At=e)}function Hu(e){if(e.tag===22){if(X(Oe,Oe.current),X(gt,e),At===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(At=e)}}else sa()}function sa(){X(Oe,Oe.current),X(gt,gt.current)}function Xt(e){G(gt),At===e&&(At=null),G(Oe)}var Oe=Y(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||sc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function vr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ot(),n=aa(l);n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ut(t,e,l),Pl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ot(),n=aa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ut(t,e,l),Pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ot(),l=aa(a);l.tag=2,t!=null&&(l.callback=t),t=la(e,l,a),t!==null&&(ut(t,e,a),Pl(t,e,a))}};function Bu(e,t,a,l,n,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,c):t.prototype&&t.prototype.isPureReactComponent?!Gl(a,l)||!Gl(n,s):!0}function Xu(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&gr.enqueueReplaceState(t,t.state,null)}function Ha(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qu(e){bi(e)}function Gu(e){console.error(e)}function Lu(e){bi(e)}function ji(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Zu(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function yr(e,t,a){return a=aa(a),a.tag=3,a.payload={element:null},a.callback=function(){ji(e,t)},a}function Qu(e){return e=aa(e),e.tag=3,e}function Vu(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var s=l.value;e.payload=function(){return n(s)},e.callback=function(){Zu(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Zu(t,a,l),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Tm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Kl(t,a,n,!0),a=gt.current,a!==null){switch(a.tag){case 13:return At===null?Lr():a.alternate===null&&Ee===0&&(Ee=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Js?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Qr(e,l,n)),!1;case 22:return a.flags|=65536,l===Js?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Qr(e,l,n)),!1}throw Error(u(435,a.tag))}return Qr(e,l,n),Lr(),!1}if(oe)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==qs&&(e=Error(u(422),{cause:l}),Vl(ht(e,a)))):(l!==qs&&(t=Error(u(423),{cause:l}),Vl(ht(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ht(l,a),n=yr(e.stateNode,l,n),Fs(e,n),Ee!==4&&(Ee=2)),!1;var s=Error(u(520),{cause:l});if(s=ht(s,a),hn===null?hn=[s]:hn.push(s),Ee!==4&&(Ee=2),t===null)return!0;l=ht(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=yr(a.stateNode,l,e),Fs(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(da===null||!da.has(s))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Qu(n),Vu(n,e,a,l),Fs(a,n),!1}a=a.return}while(a!==null);return!1}var Ku=Error(u(461)),Ue=!1;function Xe(e,t,a,l){t.child=e===null?Uu(t,null,a,l):hl(t,e.child,a,l)}function Ju(e,t,a,l,n){a=a.render;var s=t.ref;if("ref"in l){var c={};for(var o in l)o!=="ref"&&(c[o]=l[o])}else c=l;return _a(t),l=ar(e,t,a,c,s,n),o=lr(),e!==null&&!Ue?(nr(e,t,n),qt(e,t,n)):(oe&&o&&Bs(t),t.flags|=1,Xe(e,t,l,n),t.child)}function $u(e,t,a,l,n){if(e===null){var s=a.type;return typeof s=="function"&&!Ys(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Wu(e,t,s,l,n)):(e=ei(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Ar(e,n)){var c=s.memoizedProps;if(a=a.compare,a=a!==null?a:Gl,a(c,l)&&e.ref===t.ref)return qt(e,t,n)}return t.flags|=1,e=Ot(s,l),e.ref=t.ref,e.return=t,t.child=e}function Wu(e,t,a,l,n){if(e!==null){var s=e.memoizedProps;if(Gl(s,l)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=l=s,Ar(e,n))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,qt(e,t,n)}return br(e,t,a,l,n)}function Fu(e,t,a){var l=t.pendingProps,n=l.children,s=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=s!==null?s.baseLanes|a:a,e!==null){for(n=t.child=e.child,s=0;n!==null;)s=s|n.lanes|n.childLanes,n=n.sibling;t.childLanes=s&~l}else t.childLanes=0,t.child=null;return Pu(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,s!==null?s.cachePool:null),s!==null?Wo(t,s):Is(),Hu(t);else return t.lanes=t.childLanes=536870912,Pu(e,t,s!==null?s.baseLanes|a:a,a)}else s!==null?(ii(t,s.cachePool),Wo(t,s),sa(),t.memoizedState=null):(e!==null&&ii(t,null),Is(),sa());return Xe(e,t,n,a),t.child}function Pu(e,t,a,l){var n=Ks();return n=n===null?null:{parent:Ce._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ii(t,null),Is(),Hu(t),e!==null&&Kl(e,t,l,!0),null}function Ni(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function br(e,t,a,l,n){return _a(t),a=ar(e,t,a,l,void 0,n),l=lr(),e!==null&&!Ue?(nr(e,t,n),qt(e,t,n)):(oe&&l&&Bs(t),t.flags|=1,Xe(e,t,a,n),t.child)}function Iu(e,t,a,l,n,s){return _a(t),t.updateQueue=null,a=Po(t,l,a,n),Fo(e),l=lr(),e!==null&&!Ue?(nr(e,t,s),qt(e,t,s)):(oe&&l&&Bs(t),t.flags|=1,Xe(e,t,a,s),t.child)}function ef(e,t,a,l,n){if(_a(t),t.stateNode===null){var s=nl,c=a.contextType;typeof c=="object"&&c!==null&&(s=Ve(c)),s=new a(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=gr,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},$s(t),c=a.contextType,s.context=typeof c=="object"&&c!==null?Ve(c):nl,s.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(vr(t,a,c,l),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(c=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),c!==s.state&&gr.enqueueReplaceState(s,s.state,null),en(t,l,s,n),Il(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,h=Ha(a,o);s.props=h;var S=s.context,z=a.contextType;c=nl,typeof z=="object"&&z!==null&&(c=Ve(z));var C=a.getDerivedStateFromProps;z=typeof C=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,z||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||S!==c)&&Xu(t,s,l,c),ta=!1;var E=t.memoizedState;s.state=E,en(t,l,s,n),Il(),S=t.memoizedState,o||E!==S||ta?(typeof C=="function"&&(vr(t,a,C,l),S=t.memoizedState),(h=ta||Bu(t,a,h,l,E,S,c))?(z||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=S),s.props=l,s.state=S,s.context=c,l=h):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,Ws(e,t),c=t.memoizedProps,z=Ha(a,c),s.props=z,C=t.pendingProps,E=s.context,S=a.contextType,h=nl,typeof S=="object"&&S!==null&&(h=Ve(S)),o=a.getDerivedStateFromProps,(S=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==C||E!==h)&&Xu(t,s,l,h),ta=!1,E=t.memoizedState,s.state=E,en(t,l,s,n),Il();var T=t.memoizedState;c!==C||E!==T||ta||e!==null&&e.dependencies!==null&&li(e.dependencies)?(typeof o=="function"&&(vr(t,a,o,l),T=t.memoizedState),(z=ta||Bu(t,a,z,l,E,T,h)||e!==null&&e.dependencies!==null&&li(e.dependencies))?(S||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,T,h),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,T,h)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=T),s.props=l,s.state=T,s.context=h,l=z):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,Ni(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=hl(t,e.child,null,n),t.child=hl(t,null,a,n)):Xe(e,t,a,n),t.memoizedState=s.state,e=t.child):e=qt(e,t,n),e}function tf(e,t,a,l){return Ql(),t.flags|=256,Xe(e,t,a,l),t.child}var jr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nr(e){return{baseLanes:e,cachePool:Go()}}function Sr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=yt),e}function af(e,t,a){var l=t.pendingProps,n=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?ia(t):sa(),oe){var o=we,h;if(h=o){e:{for(h=o,o=Tt;h.nodeType!==8;){if(!o){o=null;break e}if(h=St(h.nextSibling),h===null){o=null;break e}}o=h}o!==null?(t.memoizedState={dehydrated:o,treeContext:Da!==null?{id:_t,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},h=it(18,null,null,0),h.stateNode=o,h.return=t,t.child=h,Je=t,we=null,h=!0):h=!1}h||Ca(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return sc(o)?t.lanes=32:t.lanes=536870912,null;Xt(t)}return o=l.children,l=l.fallback,n?(sa(),n=t.mode,o=Si({mode:"hidden",children:o},n),l=za(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,n=t.child,n.memoizedState=Nr(a),n.childLanes=Sr(e,c,a),t.memoizedState=jr,l):(ia(t),wr(t,o))}if(h=e.memoizedState,h!==null&&(o=h.dehydrated,o!==null)){if(s)t.flags&256?(ia(t),t.flags&=-257,t=Er(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),n=l.fallback,o=t.mode,l=Si({mode:"visible",children:l.children},o),n=za(n,o,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,hl(t,e.child,null,a),l=t.child,l.memoizedState=Nr(a),l.childLanes=Sr(e,c,a),t.memoizedState=jr,t=n);else if(ia(t),sc(o)){if(c=o.nextSibling&&o.nextSibling.dataset,c)var S=c.dgst;c=S,l=Error(u(419)),l.stack="",l.digest=c,Vl({value:l,source:null,stack:null}),t=Er(e,t,a)}else if(Ue||Kl(e,t,a,!1),c=(a&e.childLanes)!==0,Ue||c){if(c=ve,c!==null&&(l=a&-a,l=(l&42)!==0?1:rs(l),l=(l&(c.suspendedLanes|a))!==0?0:l,l!==0&&l!==h.retryLane))throw h.retryLane=l,ll(e,l),ut(c,e,l),Ku;o.data==="$?"||Lr(),t=Er(e,t,a)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,we=St(o.nextSibling),Je=t,oe=!0,Ma=null,Tt=!1,e!==null&&(xt[vt++]=_t,xt[vt++]=Yt,xt[vt++]=Da,_t=e.id,Yt=e.overflow,Da=t),t=wr(t,l.children),t.flags|=4096);return t}return n?(sa(),n=l.fallback,o=t.mode,h=e.child,S=h.sibling,l=Ot(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,S!==null?n=Ot(S,n):(n=za(n,o,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,o=e.child.memoizedState,o===null?o=Nr(a):(h=o.cachePool,h!==null?(S=Ce._currentValue,h=h.parent!==S?{parent:S,pool:S}:h):h=Go(),o={baseLanes:o.baseLanes|a,cachePool:h}),n.memoizedState=o,n.childLanes=Sr(e,c,a),t.memoizedState=jr,l):(ia(t),a=e.child,e=a.sibling,a=Ot(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function wr(e,t){return t=Si({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Si(e,t){return e=it(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Er(e,t,a){return hl(t,e.child,null,a),e=wr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ls(e.return,t,a)}function Tr(e,t,a,l,n){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=a,s.tailMode=n)}function nf(e,t,a){var l=t.pendingProps,n=l.revealOrder,s=l.tail;if(Xe(e,t,l.children,a),l=Oe.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lf(e,a,t);else if(e.tag===19)lf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(X(Oe,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&yi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Tr(t,!1,n,a,s);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&yi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Tr(t,!0,a,null,s);break;case"together":Tr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Ot(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ot(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ar(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&li(e)))}function Am(e,t,a){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ea(t,Ce,e.memoizedState.cache),Ql();break;case 27:case 5:as(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?af(e,t,a):(ia(t),e=qt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Kl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return nf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),X(Oe,Oe.current),l)break;return null;case 22:case 23:return t.lanes=0,Fu(e,t,a);case 24:ea(t,Ce,e.memoizedState.cache)}return qt(e,t,a)}function sf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Ar(e,a)&&(t.flags&128)===0)return Ue=!1,Am(e,t,a);Ue=(e.flags&131072)!==0}else Ue=!1,oe&&(t.flags&1048576)!==0&&_o(t,ai,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")Ys(l)?(e=Ha(l,e),t.tag=1,t=ef(null,t,l,e,a)):(t.tag=0,t=br(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===ge){t.tag=11,t=Ju(null,t,l,e,a);break e}else if(n===Me){t.tag=14,t=$u(null,t,l,e,a);break e}}throw t=Sa(l)||l,Error(u(306,t,""))}}return t;case 0:return br(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ha(l,t.pendingProps),ef(e,t,l,n,a);case 3:e:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var s=t.memoizedState;n=s.element,Ws(e,t),en(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ea(t,Ce,l),l!==s.cache&&Zs(t,[Ce],a,!0),Il(),l=c.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=tf(e,t,l,a);break e}else if(l!==n){n=ht(Error(u(424)),t),Vl(n),t=tf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=St(e.firstChild),Je=t,oe=!0,Ma=null,Tt=!0,a=Uu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ql(),l===n){t=qt(e,t,a);break e}Xe(e,t,l,a)}t=t.child}return t;case 26:return Ni(e,t),e===null?(a=ud(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=Ui(ee.current).createElement(a),l[Qe]=t,l[$e]=e,Ge(l,a,e),Ye(l),t.stateNode=l):t.memoizedState=ud(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return as(t),e===null&&oe&&(l=t.stateNode=rd(t.type,t.pendingProps,ee.current),Je=t,Tt=!0,n=we,pa(t.type)?(rc=n,we=St(l.firstChild)):we=n),Xe(e,t,t.pendingProps.children,a),Ni(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=we)&&(l=th(l,t.type,t.pendingProps,Tt),l!==null?(t.stateNode=l,Je=t,we=St(l.firstChild),Tt=!1,n=!0):n=!1),n||Ca(t)),as(t),n=t.type,s=t.pendingProps,c=e!==null?e.memoizedProps:null,l=s.children,lc(n,s)?l=null:c!==null&&lc(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=ar(e,t,ym,null,null,a),Sn._currentValue=n),Ni(e,t),Xe(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=we)&&(a=ah(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,Je=t,we=null,e=!0):e=!1),e||Ca(t)),null;case 13:return af(e,t,a);case 4:return ye(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=hl(t,null,l,a):Xe(e,t,l,a),t.child;case 11:return Ju(e,t,t.type,t.pendingProps,a);case 7:return Xe(e,t,t.pendingProps,a),t.child;case 8:return Xe(e,t,t.pendingProps.children,a),t.child;case 12:return Xe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ea(t,t.type,l.value),Xe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,_a(t),n=Ve(n),l=l(n),t.flags|=1,Xe(e,t,l,a),t.child;case 14:return $u(e,t,t.type,t.pendingProps,a);case 15:return Wu(e,t,t.type,t.pendingProps,a);case 19:return nf(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Si(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ot(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Fu(e,t,a);case 24:return _a(t),l=Ve(Ce),e===null?(n=Ks(),n===null&&(n=ve,s=Qs(),n.pooledCache=s,s.refCount++,s!==null&&(n.pooledCacheLanes|=a),n=s),t.memoizedState={parent:l,cache:n},$s(t),ea(t,Ce,n)):((e.lanes&a)!==0&&(Ws(e,t),en(t,null,null,a),Il()),n=e.memoizedState,s=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ea(t,Ce,l)):(l=s.cache,ea(t,Ce,l),l!==n.cache&&Zs(t,[Ce],a,!0))),Xe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Gt(e){e.flags|=4}function rf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pd(t)){if(t=gt.current,t!==null&&((se&4194048)===se?At!==null:(se&62914560)!==se&&(se&536870912)===0||t!==At))throw Fl=Js,Lo;e.flags|=8192}}function wi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Uc():536870912,e.lanes|=t,gl|=t)}function cn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Rm(e,t,a){var l=t.pendingProps;switch(Xs(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ht(Ce),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zl(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ho())),je(t),null;case 26:return a=t.memoizedState,e===null?(Gt(t),a!==null?(je(t),rf(t,a)):(je(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Gt(t),je(t),rf(t,a)):(je(t),t.flags&=-16777217):(e.memoizedProps!==l&&Gt(t),je(t),t.flags&=-16777217),null;case 27:_n(t),a=ee.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return je(t),null}e=J.current,Zl(t)?Yo(t):(e=rd(n,l,a),t.stateNode=e,Gt(t))}return je(t),null;case 5:if(_n(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return je(t),null}if(e=J.current,Zl(t))Yo(t);else{switch(n=Ui(ee.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Qe]=t,e[$e]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Ge(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Gt(t)}}return je(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Gt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ee.current,Zl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Je,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ed(e.nodeValue,a)),e||Ca(t)}else e=Ui(e).createTextNode(l),e[Qe]=t,t.stateNode=e}return je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Zl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[Qe]=t}else Ql(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=Ho(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Xt(t),t):(Xt(t),null)}if(Xt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var s=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),wi(t,t.updateQueue),je(t),null;case 4:return Wt(),e===null&&Pr(t.stateNode.containerInfo),je(t),null;case 10:return Ht(t.type),je(t),null;case 19:if(G(Oe),n=t.memoizedState,n===null)return je(t),null;if(l=(t.flags&128)!==0,s=n.rendering,s===null)if(l)cn(n,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=yi(e),s!==null){for(t.flags|=128,cn(n,!1),e=s.updateQueue,t.updateQueue=e,wi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Oo(a,e),a=a.sibling;return X(Oe,Oe.current&1|2),t.child}e=e.sibling}n.tail!==null&&Et()>Ai&&(t.flags|=128,l=!0,cn(n,!1),t.lanes=4194304)}else{if(!l)if(e=yi(s),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,wi(t,e),cn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!oe)return je(t),null}else 2*Et()-n.renderingStartTime>Ai&&a!==536870912&&(t.flags|=128,l=!0,cn(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Et(),t.sibling=null,e=Oe.current,X(Oe,l?e&1|2:e&1),t):(je(t),null);case 22:case 23:return Xt(t),er(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),a=t.updateQueue,a!==null&&wi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&G(Ya),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ht(Ce),je(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function zm(e,t){switch(Xs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ht(Ce),Wt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _n(t),null;case 13:if(Xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ql()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Oe),null;case 4:return Wt(),null;case 10:return Ht(t.type),null;case 22:case 23:return Xt(t),er(),e!==null&&G(Ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ht(Ce),null;case 25:return null;default:return null}}function cf(e,t){switch(Xs(t),t.tag){case 3:Ht(Ce),Wt();break;case 26:case 27:case 5:_n(t);break;case 4:Wt();break;case 13:Xt(t);break;case 19:G(Oe);break;case 10:Ht(t.type);break;case 22:case 23:Xt(t),er(),e!==null&&G(Ya);break;case 24:Ht(Ce)}}function on(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var s=a.create,c=a.inst;l=s(),c.destroy=l}a=a.next}while(a!==n)}}catch(o){xe(t,t.return,o)}}function ra(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var s=n.next;l=s;do{if((l.tag&e)===e){var c=l.inst,o=c.destroy;if(o!==void 0){c.destroy=void 0,n=t;var h=a,S=o;try{S()}catch(z){xe(n,h,z)}}}l=l.next}while(l!==s)}}catch(z){xe(t,t.return,z)}}function of(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{$o(t,a)}catch(l){xe(e,e.return,l)}}}function uf(e,t,a){a.props=Ha(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){xe(e,t,l)}}function un(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){xe(e,t,n)}}function Rt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){xe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){xe(e,t,n)}else a.current=null}function ff(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){xe(e,e.return,n)}}function Rr(e,t,a){try{var l=e.stateNode;Wm(l,e.type,a,t),l[$e]=t}catch(n){xe(e,e.return,n)}}function df(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function zr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Yi));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Dr(e,t,a),e=e.sibling;e!==null;)Dr(e,t,a),e=e.sibling}function Ei(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ei(e,t,a),e=e.sibling;e!==null;)Ei(e,t,a),e=e.sibling}function mf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ge(t,l,a),t[Qe]=e,t[$e]=a}catch(s){xe(e,e.return,s)}}var Lt=!1,Re=!1,kr=!1,hf=typeof WeakSet=="function"?WeakSet:Set,He=null;function Dm(e,t){if(e=e.containerInfo,tc=Li,e=wo(e),zs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var c=0,o=-1,h=-1,S=0,z=0,C=e,E=null;t:for(;;){for(var T;C!==a||n!==0&&C.nodeType!==3||(o=c+n),C!==s||l!==0&&C.nodeType!==3||(h=c+l),C.nodeType===3&&(c+=C.nodeValue.length),(T=C.firstChild)!==null;)E=C,C=T;for(;;){if(C===e)break t;if(E===a&&++S===n&&(o=c),E===s&&++z===l&&(h=c),(T=C.nextSibling)!==null)break;C=E,E=C.parentNode}C=T}a=o===-1||h===-1?null:{start:o,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(ac={focusedElem:e,selectionRange:a},Li=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,n=s.memoizedProps,s=s.memoizedState,l=a.stateNode;try{var P=Ha(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(P,s),l.__reactInternalSnapshotBeforeUpdate=e}catch($){xe(a,a.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ic(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ic(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function pf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),l&4&&on(5,a);break;case 1:if(ca(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){xe(a,a.return,c)}else{var n=Ha(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){xe(a,a.return,c)}}l&64&&of(a),l&512&&un(a,a.return);break;case 3:if(ca(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{$o(e,t)}catch(c){xe(a,a.return,c)}}break;case 27:t===null&&l&4&&mf(a);case 26:case 5:ca(e,a),t===null&&l&4&&ff(a),l&512&&un(a,a.return);break;case 12:ca(e,a);break;case 13:ca(e,a),l&4&&gf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bm.bind(null,a),lh(e,a))));break;case 22:if(l=a.memoizedState!==null||Lt,!l){t=t!==null&&t.memoizedState!==null||Re,n=Lt;var s=Re;Lt=l,(Re=t)&&!s?oa(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),Lt=n,Re=s}break;case 30:break;default:ca(e,a)}}function xf(e){var t=e.alternate;t!==null&&(e.alternate=null,xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&us(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Pe=!1;function Zt(e,t,a){for(a=a.child;a!==null;)vf(e,t,a),a=a.sibling}function vf(e,t,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:Re||Rt(a,t),Zt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Re||Rt(a,t);var l=be,n=Pe;pa(a.type)&&(be=a.stateNode,Pe=!1),Zt(e,t,a),yn(a.stateNode),be=l,Pe=n;break;case 5:Re||Rt(a,t);case 6:if(l=be,n=Pe,be=null,Zt(e,t,a),be=l,Pe=n,be!==null)if(Pe)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(a.stateNode)}catch(s){xe(a,t,s)}else try{be.removeChild(a.stateNode)}catch(s){xe(a,t,s)}break;case 18:be!==null&&(Pe?(e=be,id(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),An(e)):id(be,a.stateNode));break;case 4:l=be,n=Pe,be=a.stateNode.containerInfo,Pe=!0,Zt(e,t,a),be=l,Pe=n;break;case 0:case 11:case 14:case 15:Re||ra(2,a,t),Re||ra(4,a,t),Zt(e,t,a);break;case 1:Re||(Rt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&uf(a,t,l)),Zt(e,t,a);break;case 21:Zt(e,t,a);break;case 22:Re=(l=Re)||a.memoizedState!==null,Zt(e,t,a),Re=l;break;default:Zt(e,t,a)}}function gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{An(e)}catch(a){xe(t,t.return,a)}}function km(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hf),t;default:throw Error(u(435,e.tag))}}function Mr(e,t){var a=km(e);t.forEach(function(l){var n=Xm.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function st(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],s=e,c=t,o=c;e:for(;o!==null;){switch(o.tag){case 27:if(pa(o.type)){be=o.stateNode,Pe=!1;break e}break;case 5:be=o.stateNode,Pe=!1;break e;case 3:case 4:be=o.stateNode.containerInfo,Pe=!0;break e}o=o.return}if(be===null)throw Error(u(160));vf(s,c,n),be=null,Pe=!1,s=n.alternate,s!==null&&(s.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}var Nt=null;function yf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(t,e),rt(e),l&4&&(ra(3,e,e.return),on(3,e),ra(5,e,e.return));break;case 1:st(t,e),rt(e),l&512&&(Re||a===null||Rt(a,a.return)),l&64&&Lt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Nt;if(st(t,e),rt(e),l&512&&(Re||a===null||Rt(a,a.return)),l&4){var s=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":s=n.getElementsByTagName("title")[0],(!s||s[Cl]||s[Qe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=n.createElement(l),n.head.insertBefore(s,n.querySelector("head > title"))),Ge(s,l,a),s[Qe]=e,Ye(s),l=s;break e;case"link":var c=md("link","href",n).get(l+(a.href||""));if(c){for(var o=0;o<c.length;o++)if(s=c[o],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(o,1);break t}}s=n.createElement(l),Ge(s,l,a),n.head.appendChild(s);break;case"meta":if(c=md("meta","content",n).get(l+(a.content||""))){for(o=0;o<c.length;o++)if(s=c[o],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(o,1);break t}}s=n.createElement(l),Ge(s,l,a),n.head.appendChild(s);break;default:throw Error(u(468,l))}s[Qe]=e,Ye(s),l=s}e.stateNode=l}else hd(n,e.type,e.stateNode);else e.stateNode=dd(n,l,e.memoizedProps);else s!==l?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,l===null?hd(n,e.type,e.stateNode):dd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Rr(e,e.memoizedProps,a.memoizedProps)}break;case 27:st(t,e),rt(e),l&512&&(Re||a===null||Rt(a,a.return)),a!==null&&l&4&&Rr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(st(t,e),rt(e),l&512&&(Re||a===null||Rt(a,a.return)),e.flags&32){n=e.stateNode;try{Wa(n,"")}catch(T){xe(e,e.return,T)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Rr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(kr=!0);break;case 6:if(st(t,e),rt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(T){xe(e,e.return,T)}}break;case 3:if(Xi=null,n=Nt,Nt=Hi(t.containerInfo),st(t,e),Nt=n,rt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{An(t.containerInfo)}catch(T){xe(e,e.return,T)}kr&&(kr=!1,bf(e));break;case 4:l=Nt,Nt=Hi(e.stateNode.containerInfo),st(t,e),rt(e),Nt=l;break;case 12:st(t,e),rt(e);break;case 13:st(t,e),rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hr=Et()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mr(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,S=Lt,z=Re;if(Lt=S||n,Re=z||h,st(t,e),Re=z,Lt=S,rt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||Lt||Re||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(s=h.stateNode,n)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{o=h.stateNode;var C=h.memoizedProps.style,E=C!=null&&C.hasOwnProperty("display")?C.display:null;o.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(T){xe(h,h.return,T)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(T){xe(h,h.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Mr(e,a))));break;case 19:st(t,e),rt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mr(e,l)));break;case 30:break;case 21:break;default:st(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(df(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,s=zr(e);Ei(e,s,n);break;case 5:var c=a.stateNode;a.flags&32&&(Wa(c,""),a.flags&=-33);var o=zr(e);Ei(e,o,c);break;case 3:case 4:var h=a.stateNode.containerInfo,S=zr(e);Dr(e,S,h);break;default:throw Error(u(161))}}catch(z){xe(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pf(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),Ba(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&uf(t,t.return,a),Ba(t);break;case 27:yn(t.stateNode);case 26:case 5:Rt(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function oa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,s=t,c=s.flags;switch(s.tag){case 0:case 11:case 15:oa(n,s,a),on(4,s);break;case 1:if(oa(n,s,a),l=s,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){xe(l,l.return,S)}if(l=s,n=l.updateQueue,n!==null){var o=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)Jo(h[n],o)}catch(S){xe(l,l.return,S)}}a&&c&64&&of(s),un(s,s.return);break;case 27:mf(s);case 26:case 5:oa(n,s,a),a&&l===null&&c&4&&ff(s),un(s,s.return);break;case 12:oa(n,s,a);break;case 13:oa(n,s,a),a&&c&4&&gf(n,s);break;case 22:s.memoizedState===null&&oa(n,s,a),un(s,s.return);break;case 30:break;default:oa(n,s,a)}t=t.sibling}}function Cr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jl(a))}function Or(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function zt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jf(e,t,a,l),t=t.sibling}function jf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,a,l),n&2048&&on(9,t);break;case 1:zt(e,t,a,l);break;case 3:zt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e)));break;case 12:if(n&2048){zt(e,t,a,l),e=t.stateNode;try{var s=t.memoizedProps,c=s.id,o=s.onPostCommit;typeof o=="function"&&o(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){xe(t,t.return,h)}}else zt(e,t,a,l);break;case 13:zt(e,t,a,l);break;case 23:break;case 22:s=t.stateNode,c=t.alternate,t.memoizedState!==null?s._visibility&2?zt(e,t,a,l):fn(e,t):s._visibility&2?zt(e,t,a,l):(s._visibility|=2,pl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&Cr(c,t);break;case 24:zt(e,t,a,l),n&2048&&Or(t.alternate,t);break;default:zt(e,t,a,l)}}function pl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,c=t,o=a,h=l,S=c.flags;switch(c.tag){case 0:case 11:case 15:pl(s,c,o,h,n),on(8,c);break;case 23:break;case 22:var z=c.stateNode;c.memoizedState!==null?z._visibility&2?pl(s,c,o,h,n):fn(s,c):(z._visibility|=2,pl(s,c,o,h,n)),n&&S&2048&&Cr(c.alternate,c);break;case 24:pl(s,c,o,h,n),n&&S&2048&&Or(c.alternate,c);break;default:pl(s,c,o,h,n)}t=t.sibling}}function fn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:fn(a,l),n&2048&&Cr(l.alternate,l);break;case 24:fn(a,l),n&2048&&Or(l.alternate,l);break;default:fn(a,l)}t=t.sibling}}var dn=8192;function xl(e){if(e.subtreeFlags&dn)for(e=e.child;e!==null;)Nf(e),e=e.sibling}function Nf(e){switch(e.tag){case 26:xl(e),e.flags&dn&&e.memoizedState!==null&&xh(Nt,e.memoizedState,e.memoizedProps);break;case 5:xl(e);break;case 3:case 4:var t=Nt;Nt=Hi(e.stateNode.containerInfo),xl(e),Nt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=dn,dn=16777216,xl(e),dn=t):xl(e));break;default:xl(e)}}function Sf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];He=l,Ef(l,e)}Sf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wf(e),e=e.sibling}function wf(e){switch(e.tag){case 0:case 11:case 15:mn(e),e.flags&2048&&ra(9,e,e.return);break;case 3:mn(e);break;case 12:mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ti(e)):mn(e);break;default:mn(e)}}function Ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];He=l,Ef(l,e)}Sf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),Ti(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ti(t));break;default:Ti(t)}e=e.sibling}}function Ef(e,t){for(;He!==null;){var a=He;switch(a.tag){case 0:case 11:case 15:ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,He=l;else e:for(a=e;He!==null;){l=He;var n=l.sibling,s=l.return;if(xf(l),l===a){He=null;break e}if(n!==null){n.return=s,He=n;break e}He=s}}}var Mm={getCacheForType:function(e){var t=Ve(Ce),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Cm=typeof WeakMap=="function"?WeakMap:Map,ue=0,ve=null,ne=null,se=0,fe=0,ct=null,ua=!1,vl=!1,_r=!1,Qt=0,Ee=0,fa=0,Xa=0,Yr=0,yt=0,gl=0,hn=null,Ie=null,Ur=!1,Hr=0,Ai=1/0,Ri=null,da=null,qe=0,ma=null,yl=null,bl=0,Br=0,Xr=null,Tf=null,pn=0,qr=null;function ot(){if((ue&2)!==0&&se!==0)return se&-se;if(D.T!==null){var e=rl;return e!==0?e:Jr()}return Xc()}function Af(){yt===0&&(yt=(se&536870912)===0||oe?Yc():536870912);var e=gt.current;return e!==null&&(e.flags|=32),yt}function ut(e,t,a){(e===ve&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(jl(e,0),ha(e,se,yt,!1)),Ml(e,a),((ue&2)===0||e!==ve)&&(e===ve&&((ue&2)===0&&(Xa|=a),Ee===4&&ha(e,se,yt,!1)),Dt(e))}function Rf(e,t,a){if((ue&6)!==0)throw Error(u(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||kl(e,t),n=l?Ym(e,t):Zr(e,t,!0),s=l;do{if(n===0){vl&&!l&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!Om(a)){n=Zr(e,t,!1),s=!1;continue}if(n===2){if(s=t,e.errorRecoveryDisabledLanes&s)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var o=e;n=hn;var h=o.current.memoizedState.isDehydrated;if(h&&(jl(o,c).flags|=256),c=Zr(o,c,!1),c!==2){if(_r&&!h){o.errorRecoveryDisabledLanes|=s,Xa|=s,n=4;break e}s=Ie,Ie=n,s!==null&&(Ie===null?Ie=s:Ie.push.apply(Ie,s))}n=c}if(s=!1,n!==2)continue}}if(n===1){jl(e,0),ha(e,t,0,!0);break}e:{switch(l=e,s=n,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ha(l,t,yt,!ua);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=Hr+300-Et(),10<n)){if(ha(l,t,yt,!ua),Bn(l,0,!0)!==0)break e;l.timeoutHandle=ld(zf.bind(null,l,a,Ie,Ri,Ur,t,yt,Xa,gl,ua,s,2,-0,0),n);break e}zf(l,a,Ie,Ri,Ur,t,yt,Xa,gl,ua,s,0,-0,0)}}break}while(!0);Dt(e)}function zf(e,t,a,l,n,s,c,o,h,S,z,C,E,T){if(e.timeoutHandle=-1,C=t.subtreeFlags,(C&8192||(C&16785408)===16785408)&&(Nn={stylesheets:null,count:0,unsuspend:ph},Nf(t),C=vh(),C!==null)){e.cancelPendingCommit=C(Yf.bind(null,e,t,s,a,l,n,c,o,h,z,1,E,T)),ha(e,s,c,!S);return}Yf(e,t,s,a,l,n,c,o,h)}function Om(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],s=n.getSnapshot;n=n.value;try{if(!nt(s(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,l){t&=~Yr,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var s=31-lt(n),c=1<<s;l[s]=-1,n&=~c}a!==0&&Hc(e,a,t)}function zi(){return(ue&6)===0?(xn(0),!1):!0}function Gr(){if(ne!==null){if(fe===0)var e=ne.return;else e=ne,Ut=Oa=null,ir(e),ml=null,sn=0,e=ne;for(;e!==null;)cf(e.alternate,e),e=e.return;ne=null}}function jl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Pm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Gr(),ve=e,ne=a=Ot(e.current,null),se=t,fe=0,ct=null,ua=!1,vl=kl(e,t),_r=!1,gl=yt=Yr=Xa=fa=Ee=0,Ie=hn=null,Ur=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-lt(l),s=1<<n;t|=e[n],l&=~s}return Qt=t,Fn(),a}function Df(e,t){ae=null,D.H=xi,t===Wl||t===si?(t=Vo(),fe=3):t===Lo?(t=Vo(),fe=4):fe=t===Ku?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,ne===null&&(Ee=1,ji(e,ht(t,e.current)))}function kf(){var e=D.H;return D.H=xi,e===null?xi:e}function Mf(){var e=D.A;return D.A=Mm,e}function Lr(){Ee=4,ua||(se&4194048)!==se&&gt.current!==null||(vl=!0),(fa&134217727)===0&&(Xa&134217727)===0||ve===null||ha(ve,se,yt,!1)}function Zr(e,t,a){var l=ue;ue|=2;var n=kf(),s=Mf();(ve!==e||se!==t)&&(Ri=null,jl(e,t)),t=!1;var c=Ee;e:do try{if(fe!==0&&ne!==null){var o=ne,h=ct;switch(fe){case 8:Gr(),c=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var S=fe;if(fe=0,ct=null,Nl(e,o,h,S),a&&vl){c=0;break e}break;default:S=fe,fe=0,ct=null,Nl(e,o,h,S)}}_m(),c=Ee;break}catch(z){Df(e,z)}while(!0);return t&&e.shellSuspendCounter++,Ut=Oa=null,ue=l,D.H=n,D.A=s,ne===null&&(ve=null,se=0,Fn()),c}function _m(){for(;ne!==null;)Cf(ne)}function Ym(e,t){var a=ue;ue|=2;var l=kf(),n=Mf();ve!==e||se!==t?(Ri=null,Ai=Et()+500,jl(e,t)):vl=kl(e,t);e:do try{if(fe!==0&&ne!==null){t=ne;var s=ct;t:switch(fe){case 1:fe=0,ct=null,Nl(e,t,s,1);break;case 2:case 9:if(Zo(s)){fe=0,ct=null,Of(t);break}t=function(){fe!==2&&fe!==9||ve!==e||(fe=7),Dt(e)},s.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Zo(s)?(fe=0,ct=null,Of(t)):(fe=0,ct=null,Nl(e,t,s,7));break;case 5:var c=null;switch(ne.tag){case 26:c=ne.memoizedState;case 5:case 27:var o=ne;if(!c||pd(c)){fe=0,ct=null;var h=o.sibling;if(h!==null)ne=h;else{var S=o.return;S!==null?(ne=S,Di(S)):ne=null}break t}}fe=0,ct=null,Nl(e,t,s,5);break;case 6:fe=0,ct=null,Nl(e,t,s,6);break;case 8:Gr(),Ee=6;break e;default:throw Error(u(462))}}Um();break}catch(z){Df(e,z)}while(!0);return Ut=Oa=null,D.H=l,D.A=n,ue=a,ne!==null?0:(ve=null,se=0,Fn(),Ee)}function Um(){for(;ne!==null&&!i0();)Cf(ne)}function Cf(e){var t=sf(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?Di(e):ne=t}function Of(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Iu(a,t,t.pendingProps,t.type,void 0,se);break;case 11:t=Iu(a,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:ir(t);default:cf(a,t),t=ne=Oo(t,Qt),t=sf(a,t,Qt)}e.memoizedProps=e.pendingProps,t===null?Di(e):ne=t}function Nl(e,t,a,l){Ut=Oa=null,ir(t),ml=null,sn=0;var n=t.return;try{if(Tm(e,n,t,a,se)){Ee=1,ji(e,ht(a,e.current)),ne=null;return}}catch(s){if(n!==null)throw ne=n,s;Ee=1,ji(e,ht(a,e.current)),ne=null;return}t.flags&32768?(oe||l===1?e=!0:vl||(se&536870912)!==0?e=!1:(ua=e=!0,(l===2||l===9||l===3||l===6)&&(l=gt.current,l!==null&&l.tag===13&&(l.flags|=16384))),_f(t,e)):Di(t)}function Di(e){var t=e;do{if((t.flags&32768)!==0){_f(t,ua);return}e=t.return;var a=Rm(t.alternate,t,Qt);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Ee===0&&(Ee=5)}function _f(e,t){do{var a=zm(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);Ee=6,ne=null}function Yf(e,t,a,l,n,s,c,o,h){e.cancelPendingCommit=null;do ki();while(qe!==0);if((ue&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Os,p0(e,a,s,c,o,h),e===ve&&(ne=ve=null,se=0),yl=t,ma=e,bl=a,Br=s,Xr=n,Tf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qm(Yn,function(){return qf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,n=q.p,q.p=2,c=ue,ue|=4;try{Dm(e,t,a)}finally{ue=c,q.p=n,D.T=l}}qe=1,Uf(),Hf(),Bf()}}function Uf(){if(qe===1){qe=0;var e=ma,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=q.p;q.p=2;var n=ue;ue|=4;try{yf(t,e);var s=ac,c=wo(e.containerInfo),o=s.focusedElem,h=s.selectionRange;if(c!==o&&o&&o.ownerDocument&&So(o.ownerDocument.documentElement,o)){if(h!==null&&zs(o)){var S=h.start,z=h.end;if(z===void 0&&(z=S),"selectionStart"in o)o.selectionStart=S,o.selectionEnd=Math.min(z,o.value.length);else{var C=o.ownerDocument||document,E=C&&C.defaultView||window;if(E.getSelection){var T=E.getSelection(),P=o.textContent.length,$=Math.min(h.start,P),he=h.end===void 0?$:Math.min(h.end,P);!T.extend&&$>he&&(c=he,he=$,$=c);var y=No(o,$),g=No(o,he);if(y&&g&&(T.rangeCount!==1||T.anchorNode!==y.node||T.anchorOffset!==y.offset||T.focusNode!==g.node||T.focusOffset!==g.offset)){var j=C.createRange();j.setStart(y.node,y.offset),T.removeAllRanges(),$>he?(T.addRange(j),T.extend(g.node,g.offset)):(j.setEnd(g.node,g.offset),T.addRange(j))}}}}for(C=[],T=o;T=T.parentNode;)T.nodeType===1&&C.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<C.length;o++){var k=C[o];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}Li=!!tc,ac=tc=null}finally{ue=n,q.p=l,D.T=a}}e.current=t,qe=2}}function Hf(){if(qe===2){qe=0;var e=ma,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=q.p;q.p=2;var n=ue;ue|=4;try{pf(e,t.alternate,t)}finally{ue=n,q.p=l,D.T=a}}qe=3}}function Bf(){if(qe===4||qe===3){qe=0,s0();var e=ma,t=yl,a=bl,l=Tf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,yl=ma=null,Xf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(da=null),cs(a),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,n=q.p,q.p=2,D.T=null;try{for(var s=e.onRecoverableError,c=0;c<l.length;c++){var o=l[c];s(o.value,{componentStack:o.stack})}}finally{D.T=t,q.p=n}}(bl&3)!==0&&ki(),Dt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===qr?pn++:(pn=0,qr=e):pn=0,xn(0)}}function Xf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function ki(e){return Uf(),Hf(),Bf(),qf()}function qf(){if(qe!==5)return!1;var e=ma,t=Br;Br=0;var a=cs(bl),l=D.T,n=q.p;try{q.p=32>a?32:a,D.T=null,a=Xr,Xr=null;var s=ma,c=bl;if(qe=0,yl=ma=null,bl=0,(ue&6)!==0)throw Error(u(331));var o=ue;if(ue|=4,wf(s.current),jf(s,s.current,c,a),ue=o,xn(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Dl,s)}catch{}return!0}finally{q.p=n,D.T=l,Xf(e,t)}}function Gf(e,t,a){t=ht(a,t),t=yr(e.stateNode,t,2),e=la(e,t,2),e!==null&&(Ml(e,2),Dt(e))}function xe(e,t,a){if(e.tag===3)Gf(e,e,a);else for(;t!==null;){if(t.tag===3){Gf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))){e=ht(a,e),a=Qu(2),l=la(t,a,2),l!==null&&(Vu(a,l,t,e),Ml(l,2),Dt(l));break}}t=t.return}}function Qr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Cm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(_r=!0,n.add(a),e=Hm.bind(null,e,t,a),t.then(e,e))}function Hm(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ve===e&&(se&a)===a&&(Ee===4||Ee===3&&(se&62914560)===se&&300>Et()-Hr?(ue&2)===0&&jl(e,0):Yr|=a,gl===se&&(gl=0)),Dt(e)}function Lf(e,t){t===0&&(t=Uc()),e=ll(e,t),e!==null&&(Ml(e,t),Dt(e))}function Bm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Lf(e,a)}function Xm(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Lf(e,a)}function qm(e,t){return ns(e,t)}var Mi=null,Sl=null,Vr=!1,Ci=!1,Kr=!1,qa=0;function Dt(e){e!==Sl&&e.next===null&&(Sl===null?Mi=Sl=e:Sl=Sl.next=e),Ci=!0,Vr||(Vr=!0,Lm())}function xn(e,t){if(!Kr&&Ci){Kr=!0;do for(var a=!1,l=Mi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var s=0;else{var c=l.suspendedLanes,o=l.pingedLanes;s=(1<<31-lt(42|e)+1)-1,s&=n&~(c&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Kf(l,s))}else s=se,s=Bn(l,l===ve?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||kl(l,s)||(a=!0,Kf(l,s));l=l.next}while(a);Kr=!1}}function Gm(){Zf()}function Zf(){Ci=Vr=!1;var e=0;qa!==0&&(Fm()&&(e=qa),qa=0);for(var t=Et(),a=null,l=Mi;l!==null;){var n=l.next,s=Qf(l,t);s===0?(l.next=null,a===null?Mi=n:a.next=n,n===null&&(Sl=a)):(a=l,(e!==0||(s&3)!==0)&&(Ci=!0)),l=n}xn(e)}function Qf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var c=31-lt(s),o=1<<c,h=n[c];h===-1?((o&a)===0||(o&l)!==0)&&(n[c]=h0(o,t)):h<=t&&(e.expiredLanes|=o),s&=~o}if(t=ve,a=se,a=Bn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&is(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&is(l),cs(a)){case 2:case 8:a=Oc;break;case 32:a=Yn;break;case 268435456:a=_c;break;default:a=Yn}return l=Vf.bind(null,e),a=ns(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&is(l),e.callbackPriority=2,e.callbackNode=null,2}function Vf(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ki()&&e.callbackNode!==a)return null;var l=se;return l=Bn(e,e===ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Rf(e,l,t),Qf(e,Et()),e.callbackNode!=null&&e.callbackNode===a?Vf.bind(null,e):null)}function Kf(e,t){if(ki())return null;Rf(e,t,!0)}function Lm(){Im(function(){(ue&6)!==0?ns(Cc,Gm):Zf()})}function Jr(){return qa===0&&(qa=Yc()),qa}function Jf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zn(""+e)}function $f(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Zm(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var s=Jf((n[$e]||null).action),c=l.submitter;c&&(t=(t=c[$e]||null)?Jf(t.formAction):c.getAttribute("formAction"),t!==null&&(s=t,c=null));var o=new Jn("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qa!==0){var h=c?$f(n,c):new FormData(n);hr(a,{pending:!0,data:h,method:n.method,action:s},null,h)}}else typeof s=="function"&&(o.preventDefault(),h=c?$f(n,c):new FormData(n),hr(a,{pending:!0,data:h,method:n.method,action:s},s,h))},currentTarget:n}]})}}for(var $r=0;$r<Cs.length;$r++){var Wr=Cs[$r],Qm=Wr.toLowerCase(),Vm=Wr[0].toUpperCase()+Wr.slice(1);jt(Qm,"on"+Vm)}jt(Ao,"onAnimationEnd"),jt(Ro,"onAnimationIteration"),jt(zo,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(om,"onTransitionRun"),jt(um,"onTransitionStart"),jt(fm,"onTransitionCancel"),jt(Do,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn));function Wf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var c=l.length-1;0<=c;c--){var o=l[c],h=o.instance,S=o.currentTarget;if(o=o.listener,h!==s&&n.isPropagationStopped())break e;s=o,n.currentTarget=S;try{s(n)}catch(z){bi(z)}n.currentTarget=null,s=h}else for(c=0;c<l.length;c++){if(o=l[c],h=o.instance,S=o.currentTarget,o=o.listener,h!==s&&n.isPropagationStopped())break e;s=o,n.currentTarget=S;try{s(n)}catch(z){bi(z)}n.currentTarget=null,s=h}}}}function ie(e,t){var a=t[os];a===void 0&&(a=t[os]=new Set);var l=e+"__bubble";a.has(l)||(Ff(t,e,2,!1),a.add(l))}function Fr(e,t,a){var l=0;t&&(l|=4),Ff(a,e,l,t)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[Oi]){e[Oi]=!0,Gc.forEach(function(a){a!=="selectionchange"&&(Km.has(a)||Fr(a,!1,e),Fr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oi]||(t[Oi]=!0,Fr("selectionchange",!1,t))}}function Ff(e,t,a,l){switch(jd(t)){case 2:var n=bh;break;case 8:n=jh;break;default:n=dc}a=n.bind(null,t,a,e),n=void 0,!bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Ir(e,t,a,l,n){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var o=l.stateNode.containerInfo;if(o===n)break;if(c===4)for(c=l.return;c!==null;){var h=c.tag;if((h===3||h===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;o!==null;){if(c=Za(o),c===null)return;if(h=c.tag,h===5||h===6||h===26||h===27){l=s=c;continue e}o=o.parentNode}}l=l.return}ao(function(){var S=s,z=gs(a),C=[];e:{var E=ko.get(e);if(E!==void 0){var T=Jn,P=e;switch(e){case"keypress":if(Vn(a)===0)break e;case"keydown":case"keyup":T=q0;break;case"focusin":P="focus",T=ws;break;case"focusout":P="blur",T=ws;break;case"beforeblur":case"afterblur":T=ws;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=io;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Z0;break;case Ao:case Ro:case zo:T=M0;break;case Do:T=V0;break;case"scroll":case"scrollend":T=A0;break;case"wheel":T=J0;break;case"copy":case"cut":case"paste":T=O0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=ro;break;case"toggle":case"beforetoggle":T=W0}var $=(t&4)!==0,he=!$&&(e==="scroll"||e==="scrollend"),y=$?E!==null?E+"Capture":null:E;$=[];for(var g=S,j;g!==null;){var k=g;if(j=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||j===null||y===null||(k=_l(g,y),k!=null&&$.push(gn(g,k,j))),he)break;g=g.return}0<$.length&&(E=new T(E,P,null,a,z),C.push({event:E,listeners:$}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",E&&a!==vs&&(P=a.relatedTarget||a.fromElement)&&(Za(P)||P[La]))break e;if((T||E)&&(E=z.window===z?z:(E=z.ownerDocument)?E.defaultView||E.parentWindow:window,T?(P=a.relatedTarget||a.toElement,T=S,P=P?Za(P):null,P!==null&&(he=p(P),$=P.tag,P!==he||$!==5&&$!==27&&$!==6)&&(P=null)):(T=null,P=S),T!==P)){if($=io,k="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&($=ro,k="onPointerLeave",y="onPointerEnter",g="pointer"),he=T==null?E:Ol(T),j=P==null?E:Ol(P),E=new $(k,g+"leave",T,a,z),E.target=he,E.relatedTarget=j,k=null,Za(z)===S&&($=new $(y,g+"enter",P,a,z),$.target=j,$.relatedTarget=he,k=$),he=k,T&&P)t:{for($=T,y=P,g=0,j=$;j;j=wl(j))g++;for(j=0,k=y;k;k=wl(k))j++;for(;0<g-j;)$=wl($),g--;for(;0<j-g;)y=wl(y),j--;for(;g--;){if($===y||y!==null&&$===y.alternate)break t;$=wl($),y=wl(y)}$=null}else $=null;T!==null&&Pf(C,E,T,$,!1),P!==null&&he!==null&&Pf(C,he,P,$,!0)}}e:{if(E=S?Ol(S):window,T=E.nodeName&&E.nodeName.toLowerCase(),T==="select"||T==="input"&&E.type==="file")var Q=xo;else if(ho(E))if(vo)Q=sm;else{Q=nm;var le=lm}else T=E.nodeName,!T||T.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?S&&xs(S.elementType)&&(Q=xo):Q=im;if(Q&&(Q=Q(e,S))){po(C,Q,a,z);break e}le&&le(e,E,S),e==="focusout"&&S&&E.type==="number"&&S.memoizedProps.value!=null&&ps(E,"number",E.value)}switch(le=S?Ol(S):window,e){case"focusin":(ho(le)||le.contentEditable==="true")&&(el=le,Ds=S,Ll=null);break;case"focusout":Ll=Ds=el=null;break;case"mousedown":ks=!0;break;case"contextmenu":case"mouseup":case"dragend":ks=!1,Eo(C,a,z);break;case"selectionchange":if(cm)break;case"keydown":case"keyup":Eo(C,a,z)}var V;if(Ts)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Ia?fo(e,a)&&(W="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(co&&a.locale!=="ko"&&(Ia||W!=="onCompositionStart"?W==="onCompositionEnd"&&Ia&&(V=lo()):(It=z,js="value"in It?It.value:It.textContent,Ia=!0)),le=_i(S,W),0<le.length&&(W=new so(W,e,null,a,z),C.push({event:W,listeners:le}),V?W.data=V:(V=mo(a),V!==null&&(W.data=V)))),(V=P0?I0(e,a):em(e,a))&&(W=_i(S,"onBeforeInput"),0<W.length&&(le=new so("onBeforeInput","beforeinput",null,a,z),C.push({event:le,listeners:W}),le.data=V)),Zm(C,e,S,a,z)}Wf(C,t)})}function gn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function _i(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,s=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||s===null||(n=_l(e,a),n!=null&&l.unshift(gn(e,n,s)),n=_l(e,t),n!=null&&l.push(gn(e,n,s))),e.tag===3)return l;e=e.return}return[]}function wl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pf(e,t,a,l,n){for(var s=t._reactName,c=[];a!==null&&a!==l;){var o=a,h=o.alternate,S=o.stateNode;if(o=o.tag,h!==null&&h===l)break;o!==5&&o!==26&&o!==27||S===null||(h=S,n?(S=_l(a,s),S!=null&&c.unshift(gn(a,S,h))):n||(S=_l(a,s),S!=null&&c.push(gn(a,S,h)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var Jm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function If(e){return(typeof e=="string"?e:""+e).replace(Jm,`
`).replace($m,"")}function ed(e,t){return t=If(t),If(e)===t}function Yi(){}function me(e,t,a,l,n,s){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":qn(e,"class",l);break;case"tabIndex":qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qn(e,a,l);break;case"style":eo(e,l,s);break;case"data":if(t!=="object"){qn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",n.name,n,null),me(e,t,"formEncType",n.formEncType,n,null),me(e,t,"formMethod",n.formMethod,n,null),me(e,t,"formTarget",n.formTarget,n,null)):(me(e,t,"encType",n.encType,n,null),me(e,t,"method",n.method,n,null),me(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Yi);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Zn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Xn(e,"popover",l);break;case"xlinkActuate":Mt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Mt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Mt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Mt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Mt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Mt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Mt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Xn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=E0.get(a)||a,Xn(e,a,l))}}function ec(e,t,a,l,n,s){switch(a){case"style":eo(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),s=e[$e]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,n),typeof l=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Xn(e,a,l)}}}function Ge(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,n=!1,s;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];if(c!=null)switch(s){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:me(e,t,s,c,a,null)}}n&&me(e,t,"srcSet",a.srcSet,a,null),l&&me(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var o=s=c=n=null,h=null,S=null;for(l in a)if(a.hasOwnProperty(l)){var z=a[l];if(z!=null)switch(l){case"name":n=z;break;case"type":c=z;break;case"checked":h=z;break;case"defaultChecked":S=z;break;case"value":s=z;break;case"defaultValue":o=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,t));break;default:me(e,t,l,z,a,null)}}Wc(e,s,o,h,S,c,n,!1),Gn(e);return;case"select":ie("invalid",e),l=c=s=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":s=o;break;case"defaultValue":c=o;break;case"multiple":l=o;default:me(e,t,n,o,a,null)}t=s,a=c,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):a!=null&&$a(e,!!l,a,!0);return;case"textarea":ie("invalid",e),s=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(o=a[c],o!=null))switch(c){case"value":l=o;break;case"defaultValue":n=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:me(e,t,c,o,a,null)}Pc(e,l,n,s),Gn(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(l=a[h],l!=null))switch(h){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:me(e,t,h,l,a,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<vn.length;l++)ie(vn[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:me(e,t,S,l,a,null)}return;default:if(xs(t)){for(z in a)a.hasOwnProperty(z)&&(l=a[z],l!==void 0&&ec(e,t,z,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&me(e,t,o,l,a,null))}function Wm(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,s=null,c=null,o=null,h=null,S=null,z=null;for(T in a){var C=a[T];if(a.hasOwnProperty(T)&&C!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":h=C;default:l.hasOwnProperty(T)||me(e,t,T,null,l,C)}}for(var E in l){var T=l[E];if(C=a[E],l.hasOwnProperty(E)&&(T!=null||C!=null))switch(E){case"type":s=T;break;case"name":n=T;break;case"checked":S=T;break;case"defaultChecked":z=T;break;case"value":c=T;break;case"defaultValue":o=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:T!==C&&me(e,t,E,T,l,C)}}hs(e,c,o,h,S,z,s,n);return;case"select":T=c=o=E=null;for(s in a)if(h=a[s],a.hasOwnProperty(s)&&h!=null)switch(s){case"value":break;case"multiple":T=h;default:l.hasOwnProperty(s)||me(e,t,s,null,l,h)}for(n in l)if(s=l[n],h=a[n],l.hasOwnProperty(n)&&(s!=null||h!=null))switch(n){case"value":E=s;break;case"defaultValue":o=s;break;case"multiple":c=s;default:s!==h&&me(e,t,n,s,l,h)}t=o,a=c,l=T,E!=null?$a(e,!!a,E,!1):!!l!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":T=E=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:me(e,t,o,null,l,n)}for(c in l)if(n=l[c],s=a[c],l.hasOwnProperty(c)&&(n!=null||s!=null))switch(c){case"value":E=n;break;case"defaultValue":T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==s&&me(e,t,c,n,l,s)}Fc(e,E,T);return;case"option":for(var P in a)if(E=a[P],a.hasOwnProperty(P)&&E!=null&&!l.hasOwnProperty(P))switch(P){case"selected":e.selected=!1;break;default:me(e,t,P,null,l,E)}for(h in l)if(E=l[h],T=a[h],l.hasOwnProperty(h)&&E!==T&&(E!=null||T!=null))switch(h){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:me(e,t,h,E,l,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)E=a[$],a.hasOwnProperty($)&&E!=null&&!l.hasOwnProperty($)&&me(e,t,$,null,l,E);for(S in l)if(E=l[S],T=a[S],l.hasOwnProperty(S)&&E!==T&&(E!=null||T!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,t));break;default:me(e,t,S,E,l,T)}return;default:if(xs(t)){for(var he in a)E=a[he],a.hasOwnProperty(he)&&E!==void 0&&!l.hasOwnProperty(he)&&ec(e,t,he,void 0,l,E);for(z in l)E=l[z],T=a[z],!l.hasOwnProperty(z)||E===T||E===void 0&&T===void 0||ec(e,t,z,E,l,T);return}}for(var y in a)E=a[y],a.hasOwnProperty(y)&&E!=null&&!l.hasOwnProperty(y)&&me(e,t,y,null,l,E);for(C in l)E=l[C],T=a[C],!l.hasOwnProperty(C)||E===T||E==null&&T==null||me(e,t,C,E,l,T)}var tc=null,ac=null;function Ui(e){return e.nodeType===9?e:e.ownerDocument}function td(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nc=null;function Fm(){var e=window.event;return e&&e.type==="popstate"?e===nc?!1:(nc=e,!0):(nc=null,!1)}var ld=typeof setTimeout=="function"?setTimeout:void 0,Pm=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,Im=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(e){return nd.resolve(null).then(e).catch(eh)}:ld;function eh(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function id(e,t){var a=t,l=0,n=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(0<l&&8>l){a=l;var c=e.ownerDocument;if(a&1&&yn(c.documentElement),a&2&&yn(c.body),a&4)for(a=c.head,yn(a),c=a.firstChild;c;){var o=c.nextSibling,h=c.nodeName;c[Cl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=o}}if(n===0){e.removeChild(s),An(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=s}while(a);An(t)}function ic(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ic(a),us(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function th(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function ah(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=St(e.nextSibling),e===null))return null;return e}function sc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function lh(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var rc=null;function sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function rd(e,t,a){switch(t=Ui(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function yn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);us(e)}var bt=new Map,cd=new Set;function Hi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vt=q.d;q.d={f:nh,r:ih,D:sh,C:rh,L:ch,m:oh,X:fh,S:uh,M:dh};function nh(){var e=Vt.f(),t=zi();return e||t}function ih(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?Au(t):Vt.r(e)}var El=typeof document>"u"?null:document;function od(e,t,a){var l=El;if(l&&typeof t=="string"&&t){var n=mt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),cd.has(n)||(cd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ge(t,"link",e),Ye(t),l.head.appendChild(t)))}}function sh(e){Vt.D(e),od("dns-prefetch",e,null)}function rh(e,t){Vt.C(e,t),od("preconnect",e,t)}function ch(e,t,a){Vt.L(e,t,a);var l=El;if(l&&e&&t){var n='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+mt(a.imageSizes)+'"]')):n+='[href="'+mt(e)+'"]';var s=n;switch(t){case"style":s=Tl(e);break;case"script":s=Al(e)}bt.has(s)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),bt.set(s,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(bn(s))||t==="script"&&l.querySelector(jn(s))||(t=l.createElement("link"),Ge(t,"link",e),Ye(t),l.head.appendChild(t)))}}function oh(e,t){Vt.m(e,t);var a=El;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+mt(l)+'"][href="'+mt(e)+'"]',s=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Al(e)}if(!bt.has(s)&&(e=N({rel:"modulepreload",href:e},t),bt.set(s,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jn(s)))return}l=a.createElement("link"),Ge(l,"link",e),Ye(l),a.head.appendChild(l)}}}function uh(e,t,a){Vt.S(e,t,a);var l=El;if(l&&e){var n=Va(l).hoistableStyles,s=Tl(e);t=t||"default";var c=n.get(s);if(!c){var o={loading:0,preload:null};if(c=l.querySelector(bn(s)))o.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=bt.get(s))&&cc(e,a);var h=c=l.createElement("link");Ye(h),Ge(h,"link",e),h._p=new Promise(function(S,z){h.onload=S,h.onerror=z}),h.addEventListener("load",function(){o.loading|=1}),h.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Bi(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:o},n.set(s,c)}}}function fh(e,t){Vt.X(e,t);var a=El;if(a&&e){var l=Va(a).hoistableScripts,n=Al(e),s=l.get(n);s||(s=a.querySelector(jn(n)),s||(e=N({src:e,async:!0},t),(t=bt.get(n))&&oc(e,t),s=a.createElement("script"),Ye(s),Ge(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function dh(e,t){Vt.M(e,t);var a=El;if(a&&e){var l=Va(a).hoistableScripts,n=Al(e),s=l.get(n);s||(s=a.querySelector(jn(n)),s||(e=N({src:e,async:!0,type:"module"},t),(t=bt.get(n))&&oc(e,t),s=a.createElement("script"),Ye(s),Ge(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function ud(e,t,a,l){var n=(n=ee.current)?Hi(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Va(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var s=Va(n).hoistableStyles,c=s.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,c),(s=n.querySelector(bn(e)))&&!s._p&&(c.instance=s,c.state.loading=5),bt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bt.set(e,a),s||mh(n,e,a,c.state))),t&&l===null)throw Error(u(528,""));return c}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Al(a),a=Va(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Tl(e){return'href="'+mt(e)+'"'}function bn(e){return'link[rel="stylesheet"]['+e+"]"}function fd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function mh(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ge(t,"link",a),Ye(t),e.head.appendChild(t))}function Al(e){return'[src="'+mt(e)+'"]'}function jn(e){return"script[async]"+e}function dd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+mt(a.href)+'"]');if(l)return t.instance=l,Ye(l),l;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ye(l),Ge(l,"style",n),Bi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var s=e.querySelector(bn(n));if(s)return t.state.loading|=4,t.instance=s,Ye(s),s;l=fd(a),(n=bt.get(n))&&cc(l,n),s=(e.ownerDocument||e).createElement("link"),Ye(s);var c=s;return c._p=new Promise(function(o,h){c.onload=o,c.onerror=h}),Ge(s,"link",l),t.state.loading|=4,Bi(s,a.precedence,e),t.instance=s;case"script":return s=Al(a.src),(n=e.querySelector(jn(s)))?(t.instance=n,Ye(n),n):(l=a,(n=bt.get(s))&&(l=N({},a),oc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ye(n),Ge(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Bi(l,a.precedence,e));return t.instance}function Bi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,s=n,c=0;c<l.length;c++){var o=l[c];if(o.dataset.precedence===t)s=o;else if(s!==n)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function cc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xi=null;function md(e,t,a){if(Xi===null){var l=new Map,n=Xi=new Map;n.set(a,l)}else n=Xi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var s=a[n];if(!(s[Cl]||s[Qe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var c=s.getAttribute(t)||"";c=e+c;var o=l.get(c);o?o.push(s):l.set(c,[s])}}return l}function hd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function hh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Nn=null;function ph(){}function xh(e,t,a){if(Nn===null)throw Error(u(475));var l=Nn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Tl(a.href),s=e.querySelector(bn(n));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=qi.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=s,Ye(s);return}s=e.ownerDocument||e,a=fd(a),(n=bt.get(n))&&cc(a,n),s=s.createElement("link"),Ye(s);var c=s;c._p=new Promise(function(o,h){c.onload=o,c.onerror=h}),Ge(s,"link",a),t.instance=s}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=qi.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function vh(){if(Nn===null)throw Error(u(475));var e=Nn;return e.stylesheets&&e.count===0&&uc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function qi(){if(this.count--,this.count===0){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gi=null;function uc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gi=new Map,t.forEach(gh,e),Gi=null,qi.call(e))}function gh(e,t){if(!(t.state.loading&4)){var a=Gi.get(e);if(a)var l=a.get(null);else{a=new Map,Gi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<n.length;s++){var c=n[s];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),s=a.get(c)||l,s===l&&a.set(null,n),a.set(c,n),this.count++,l=qi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),s?s.parentNode.insertBefore(n,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Sn={$$typeof:K,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function yh(e,t,a,l,n,s,c,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ss(0),this.hiddenUpdates=ss(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=s,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function xd(e,t,a,l,n,s,c,o,h,S,z,C){return e=new yh(e,t,a,c,o,h,S,C),t=1,s===!0&&(t|=24),s=it(3,null,null,t),e.current=s,s.stateNode=e,t=Qs(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:a,cache:t},$s(s),e}function vd(e){return e?(e=nl,e):nl}function gd(e,t,a,l,n,s){n=vd(n),l.context===null?l.context=n:l.pendingContext=n,l=aa(t),l.payload={element:a},s=s===void 0?null:s,s!==null&&(l.callback=s),a=la(e,l,t),a!==null&&(ut(a,e,t),Pl(a,e,t))}function yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function fc(e,t){yd(e,t),(e=e.alternate)&&yd(e,t)}function bd(e){if(e.tag===13){var t=ll(e,67108864);t!==null&&ut(t,e,67108864),fc(e,67108864)}}var Li=!0;function bh(e,t,a,l){var n=D.T;D.T=null;var s=q.p;try{q.p=2,dc(e,t,a,l)}finally{q.p=s,D.T=n}}function jh(e,t,a,l){var n=D.T;D.T=null;var s=q.p;try{q.p=8,dc(e,t,a,l)}finally{q.p=s,D.T=n}}function dc(e,t,a,l){if(Li){var n=mc(l);if(n===null)Ir(e,t,l,Zi,a),Nd(e,l);else if(Sh(n,e,t,a,l))l.stopPropagation();else if(Nd(e,l),t&4&&-1<Nh.indexOf(e)){for(;n!==null;){var s=Qa(n);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var c=wa(s.pendingLanes);if(c!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;c;){var h=1<<31-lt(c);o.entanglements[1]|=h,c&=~h}Dt(s),(ue&6)===0&&(Ai=Et()+500,xn(0))}}break;case 13:o=ll(s,2),o!==null&&ut(o,s,2),zi(),fc(s,2)}if(s=mc(l),s===null&&Ir(e,t,l,Zi,a),s===n)break;n=s}n!==null&&l.stopPropagation()}else Ir(e,t,l,null,a)}}function mc(e){return e=gs(e),hc(e)}var Zi=null;function hc(e){if(Zi=null,e=Za(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=w(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zi=e,null}function jd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(r0()){case Cc:return 2;case Oc:return 8;case Yn:case c0:return 32;case _c:return 268435456;default:return 32}default:return 32}}var pc=!1,xa=null,va=null,ga=null,wn=new Map,En=new Map,ya=[],Nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nd(e,t){switch(e){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(t.pointerId)}}function Tn(e,t,a,l,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:s,targetContainers:[n]},t!==null&&(t=Qa(t),t!==null&&bd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Sh(e,t,a,l,n){switch(t){case"focusin":return xa=Tn(xa,e,t,a,l,n),!0;case"dragenter":return va=Tn(va,e,t,a,l,n),!0;case"mouseover":return ga=Tn(ga,e,t,a,l,n),!0;case"pointerover":var s=n.pointerId;return wn.set(s,Tn(wn.get(s)||null,e,t,a,l,n)),!0;case"gotpointercapture":return s=n.pointerId,En.set(s,Tn(En.get(s)||null,e,t,a,l,n)),!0}return!1}function Sd(e){var t=Za(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=w(a),t!==null){e.blockedOn=t,x0(e.priority,function(){if(a.tag===13){var l=ot();l=rs(l);var n=ll(a,l);n!==null&&ut(n,a,l),fc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=mc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);vs=l,a.target.dispatchEvent(l),vs=null}else return t=Qa(a),t!==null&&bd(t),e.blockedOn=a,!1;t.shift()}return!0}function wd(e,t,a){Qi(e)&&a.delete(t)}function wh(){pc=!1,xa!==null&&Qi(xa)&&(xa=null),va!==null&&Qi(va)&&(va=null),ga!==null&&Qi(ga)&&(ga=null),wn.forEach(wd),En.forEach(wd)}function Vi(e,t){e.blockedOn===t&&(e.blockedOn=null,pc||(pc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,wh)))}var Ki=null;function Ed(e){Ki!==e&&(Ki=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ki===e&&(Ki=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(hc(l||a)===null)continue;break}var s=Qa(a);s!==null&&(e.splice(t,3),t-=3,hr(s,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function An(e){function t(h){return Vi(h,e)}xa!==null&&Vi(xa,e),va!==null&&Vi(va,e),ga!==null&&Vi(ga,e),wn.forEach(t),En.forEach(t);for(var a=0;a<ya.length;a++){var l=ya[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)Sd(a),a.blockedOn===null&&ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],s=a[l+1],c=n[$e]||null;if(typeof s=="function")c||Ed(a);else if(c){var o=null;if(s&&s.hasAttribute("formAction")){if(n=s,c=s[$e]||null)o=c.formAction;else if(hc(n)!==null)continue}else o=c.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),Ed(a)}}}function xc(e){this._internalRoot=e}Ji.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=ot();gd(a,l,e,t,null,null)},Ji.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gd(e.current,2,null,e,null,null),zi(),t[La]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ya.length&&t!==0&&t<ya[a].priority;a++);ya.splice(a,0,e),a===0&&Sd(e)}};var Td=d.version;if(Td!=="19.1.1")throw Error(u(527,Td,"19.1.1"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=b(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Eh={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Dl=$i.inject(Eh),at=$i}catch{}}return zn.createRoot=function(e,t){if(!m(e))throw Error(u(299));var a=!1,l="",n=qu,s=Gu,c=Lu,o=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=xd(e,1,!1,null,null,a,l,n,s,c,o,null),e[La]=t.current,Pr(e),new xc(t)},zn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(u(299));var l=!1,n="",s=qu,c=Gu,o=Lu,h=null,S=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(S=a.formState)),t=xd(e,1,!0,t,a??null,l,n,s,c,o,h,S),t.context=vd(null),a=t.current,l=ot(),l=rs(l),n=aa(l),n.callback=null,la(a,n,l),a=l,t.current.lanes=a,Ml(t,a),Dt(t),e[La]=t.current,Pr(e),new Ji(t)},zn.version="19.1.1",zn}var Yd;function Yh(){if(Yd)return yc.exports;Yd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),yc.exports=_h(),yc.exports}var Uh=Yh();const Hh=Gd(Uh);/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ud="popstate";function Bh(r={}){function d(m,p){let{pathname:w="/",search:R="",hash:b=""}=Ga(m.location.hash.substring(1));return!w.startsWith("/")&&!w.startsWith(".")&&(w="/"+w),Ec("",{pathname:w,search:R,hash:b},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function f(m,p){let w=m.document.querySelector("base"),R="";if(w&&w.getAttribute("href")){let b=m.location.href,x=b.indexOf("#");R=x===-1?b:b.slice(0,x)}return R+"#"+(typeof p=="string"?p:kn(p))}function u(m,p){wt(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return qh(d,f,u,r)}function Ne(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function wt(r,d){if(!r){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Xh(){return Math.random().toString(36).substring(2,10)}function Hd(r,d){return{usr:r.state,key:r.key,idx:d}}function Ec(r,d,f=null,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof d=="string"?Ga(d):d,state:f,key:d&&d.key||u||Xh()}}function kn({pathname:r="/",search:d="",hash:f=""}){return d&&d!=="?"&&(r+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(r+=f.charAt(0)==="#"?f:"#"+f),r}function Ga(r){let d={};if(r){let f=r.indexOf("#");f>=0&&(d.hash=r.substring(f),r=r.substring(0,f));let u=r.indexOf("?");u>=0&&(d.search=r.substring(u),r=r.substring(0,u)),r&&(d.pathname=r)}return d}function qh(r,d,f,u={}){let{window:m=document.defaultView,v5Compat:p=!1}=u,w=m.history,R="POP",b=null,x=N();x==null&&(x=0,w.replaceState({...w.state,idx:x},""));function N(){return(w.state||{idx:null}).idx}function U(){R="POP";let B=N(),Z=B==null?null:B-x;x=B,b&&b({action:R,location:O.location,delta:Z})}function H(B,Z){R="PUSH";let L=Ec(O.location,B,Z);f&&f(L,B),x=N()+1;let K=Hd(L,x),ge=O.createHref(L);try{w.pushState(K,"",ge)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;m.location.assign(ge)}p&&b&&b({action:R,location:O.location,delta:1})}function M(B,Z){R="REPLACE";let L=Ec(O.location,B,Z);f&&f(L,B),x=N();let K=Hd(L,x),ge=O.createHref(L);w.replaceState(K,"",ge),p&&b&&b({action:R,location:O.location,delta:0})}function _(B){return Gh(B)}let O={get action(){return R},get location(){return r(m,w)},listen(B){if(b)throw new Error("A history only accepts one active listener");return m.addEventListener(Ud,U),b=B,()=>{m.removeEventListener(Ud,U),b=null}},createHref(B){return d(m,B)},createURL:_,encodeLocation(B){let Z=_(B);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:H,replace:M,go(B){return w.go(B)}};return O}function Gh(r,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(f,"No window.location.(origin|href) available to create URL");let u=typeof r=="string"?r:kn(r);return u=u.replace(/ $/,"%20"),!d&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function Ld(r,d,f="/"){return Lh(r,d,f,!1)}function Lh(r,d,f,u){let m=typeof d=="string"?Ga(d):d,p=Jt(m.pathname||"/",f);if(p==null)return null;let w=Zd(r);Zh(w);let R=null;for(let b=0;R==null&&b<w.length;++b){let x=tp(p);R=Ih(w[b],x,u)}return R}function Zd(r,d=[],f=[],u="",m=!1){let p=(w,R,b=m,x)=>{let N={relativePath:x===void 0?w.path||"":x,caseSensitive:w.caseSensitive===!0,childrenIndex:R,route:w};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(u)&&b)return;Ne(N.relativePath.startsWith(u),`Absolute route path "${N.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(u.length)}let U=Kt([u,N.relativePath]),H=f.concat(N);w.children&&w.children.length>0&&(Ne(w.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${U}".`),Zd(w.children,d,H,U,b)),!(w.path==null&&!w.index)&&d.push({path:U,score:Fh(U,w.index),routesMeta:H})};return r.forEach((w,R)=>{if(w.path===""||!w.path?.includes("?"))p(w,R);else for(let b of Qd(w.path))p(w,R,!0,b)}),d}function Qd(r){let d=r.split("/");if(d.length===0)return[];let[f,...u]=d,m=f.endsWith("?"),p=f.replace(/\?$/,"");if(u.length===0)return m?[p,""]:[p];let w=Qd(u.join("/")),R=[];return R.push(...w.map(b=>b===""?p:[p,b].join("/"))),m&&R.push(...w),R.map(b=>r.startsWith("/")&&b===""?"/":b)}function Zh(r){r.sort((d,f)=>d.score!==f.score?f.score-d.score:Ph(d.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var Qh=/^:[\w-]+$/,Vh=3,Kh=2,Jh=1,$h=10,Wh=-2,Bd=r=>r==="*";function Fh(r,d){let f=r.split("/"),u=f.length;return f.some(Bd)&&(u+=Wh),d&&(u+=Kh),f.filter(m=>!Bd(m)).reduce((m,p)=>m+(Qh.test(p)?Vh:p===""?Jh:$h),u)}function Ph(r,d){return r.length===d.length&&r.slice(0,-1).every((u,m)=>u===d[m])?r[r.length-1]-d[d.length-1]:0}function Ih(r,d,f=!1){let{routesMeta:u}=r,m={},p="/",w=[];for(let R=0;R<u.length;++R){let b=u[R],x=R===u.length-1,N=p==="/"?d:d.slice(p.length)||"/",U=Ii({path:b.relativePath,caseSensitive:b.caseSensitive,end:x},N),H=b.route;if(!U&&x&&f&&!u[u.length-1].route.index&&(U=Ii({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},N)),!U)return null;Object.assign(m,U.params),w.push({params:m,pathname:Kt([p,U.pathname]),pathnameBase:ip(Kt([p,U.pathnameBase])),route:H}),U.pathnameBase!=="/"&&(p=Kt([p,U.pathnameBase]))}return w}function Ii(r,d){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[f,u]=ep(r.path,r.caseSensitive,r.end),m=d.match(f);if(!m)return null;let p=m[0],w=p.replace(/(.)\/+$/,"$1"),R=m.slice(1);return{params:u.reduce((x,{paramName:N,isOptional:U},H)=>{if(N==="*"){let _=R[H]||"";w=p.slice(0,p.length-_.length).replace(/(.)\/+$/,"$1")}const M=R[H];return U&&!M?x[N]=void 0:x[N]=(M||"").replace(/%2F/g,"/"),x},{}),pathname:p,pathnameBase:w,pattern:r}}function ep(r,d=!1,f=!0){wt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(w,R,b)=>(u.push({paramName:R,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(u.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),u]}function tp(r){try{return r.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return wt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),r}}function Jt(r,d){if(d==="/")return r;if(!r.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,u=r.charAt(f);return u&&u!=="/"?null:r.slice(f)||"/"}function ap(r,d="/"){let{pathname:f,search:u="",hash:m=""}=typeof r=="string"?Ga(r):r;return{pathname:f?f.startsWith("/")?f:lp(f,d):d,search:sp(u),hash:rp(m)}}function lp(r,d){let f=d.replace(/\/+$/,"").split("/");return r.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Sc(r,d,f,u){return`Cannot include a '${r}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function np(r){return r.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function Vd(r){let d=np(r);return d.map((f,u)=>u===d.length-1?f.pathname:f.pathnameBase)}function Kd(r,d,f,u=!1){let m;typeof r=="string"?m=Ga(r):(m={...r},Ne(!m.pathname||!m.pathname.includes("?"),Sc("?","pathname","search",m)),Ne(!m.pathname||!m.pathname.includes("#"),Sc("#","pathname","hash",m)),Ne(!m.search||!m.search.includes("#"),Sc("#","search","hash",m)));let p=r===""||m.pathname==="",w=p?"/":m.pathname,R;if(w==null)R=f;else{let U=d.length-1;if(!u&&w.startsWith("..")){let H=w.split("/");for(;H[0]==="..";)H.shift(),U-=1;m.pathname=H.join("/")}R=U>=0?d[U]:"/"}let b=ap(m,R),x=w&&w!=="/"&&w.endsWith("/"),N=(p||w===".")&&f.endsWith("/");return!b.pathname.endsWith("/")&&(x||N)&&(b.pathname+="/"),b}var Kt=r=>r.join("/").replace(/\/\/+/g,"/"),ip=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),sp=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,rp=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function cp(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Jd=["POST","PUT","PATCH","DELETE"];new Set(Jd);var op=["GET",...Jd];new Set(op);var zl=A.createContext(null);zl.displayName="DataRouter";var es=A.createContext(null);es.displayName="DataRouterState";A.createContext(!1);var $d=A.createContext({isTransitioning:!1});$d.displayName="ViewTransition";var up=A.createContext(new Map);up.displayName="Fetchers";var fp=A.createContext(null);fp.displayName="Await";var kt=A.createContext(null);kt.displayName="Navigation";var Mn=A.createContext(null);Mn.displayName="Location";var $t=A.createContext({outlet:null,matches:[],isDataRoute:!1});$t.displayName="Route";var Rc=A.createContext(null);Rc.displayName="RouteError";function dp(r,{relative:d}={}){Ne(Cn(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=A.useContext(kt),{hash:m,pathname:p,search:w}=On(r,{relative:d}),R=p;return f!=="/"&&(R=p==="/"?f:Kt([f,p])),u.createHref({pathname:R,search:w,hash:m})}function Cn(){return A.useContext(Mn)!=null}function ja(){return Ne(Cn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Mn).location}var Wd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fd(r){A.useContext(kt).static||A.useLayoutEffect(r)}function mp(){let{isDataRoute:r}=A.useContext($t);return r?Tp():hp()}function hp(){Ne(Cn(),"useNavigate() may be used only in the context of a <Router> component.");let r=A.useContext(zl),{basename:d,navigator:f}=A.useContext(kt),{matches:u}=A.useContext($t),{pathname:m}=ja(),p=JSON.stringify(Vd(u)),w=A.useRef(!1);return Fd(()=>{w.current=!0}),A.useCallback((b,x={})=>{if(wt(w.current,Wd),!w.current)return;if(typeof b=="number"){f.go(b);return}let N=Kd(b,JSON.parse(p),m,x.relative==="path");r==null&&d!=="/"&&(N.pathname=N.pathname==="/"?d:Kt([d,N.pathname])),(x.replace?f.replace:f.push)(N,x.state,x)},[d,f,p,m,r])}A.createContext(null);function On(r,{relative:d}={}){let{matches:f}=A.useContext($t),{pathname:u}=ja(),m=JSON.stringify(Vd(f));return A.useMemo(()=>Kd(r,JSON.parse(m),u,d==="path"),[r,m,u,d])}function pp(r,d){return Pd(r,d)}function Pd(r,d,f,u,m){Ne(Cn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=A.useContext(kt),{matches:w}=A.useContext($t),R=w[w.length-1],b=R?R.params:{},x=R?R.pathname:"/",N=R?R.pathnameBase:"/",U=R&&R.route;{let L=U&&U.path||"";Id(x,!U||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let H=ja(),M;if(d){let L=typeof d=="string"?Ga(d):d;Ne(N==="/"||L.pathname?.startsWith(N),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${L.pathname}" was given in the \`location\` prop.`),M=L}else M=H;let _=M.pathname||"/",O=_;if(N!=="/"){let L=N.replace(/^\//,"").split("/");O="/"+_.replace(/^\//,"").split("/").slice(L.length).join("/")}let B=Ld(r,{pathname:O});wt(U||B!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),wt(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=bp(B&&B.map(L=>Object.assign({},L,{params:Object.assign({},b,L.params),pathname:Kt([N,p.encodeLocation?p.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?N:Kt([N,p.encodeLocation?p.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),w,f,u,m);return d&&Z?A.createElement(Mn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},Z):Z}function xp(){let r=Ep(),d=cp(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),f=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},w=null;return console.error("Error handled by React Router default ErrorBoundary:",r),w=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:p},"ErrorBoundary")," or"," ",A.createElement("code",{style:p},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},d),f?A.createElement("pre",{style:m},f):null,w)}var vp=A.createElement(xp,null),gp=class extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,d){return d.location!==r.location||d.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:d.error,location:d.location,revalidation:r.revalidation||d.revalidation}}componentDidCatch(r,d){this.props.unstable_onError?this.props.unstable_onError(r,d):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?A.createElement($t.Provider,{value:this.props.routeContext},A.createElement(Rc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function yp({routeContext:r,match:d,children:f}){let u=A.useContext(zl);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),A.createElement($t.Provider,{value:r},f)}function bp(r,d=[],f=null,u=null,m=null){if(r==null){if(!f)return null;if(f.errors)r=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)r=f.matches;else return null}let p=r,w=f?.errors;if(w!=null){let x=p.findIndex(N=>N.route.id&&w?.[N.route.id]!==void 0);Ne(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`),p=p.slice(0,Math.min(p.length,x+1))}let R=!1,b=-1;if(f)for(let x=0;x<p.length;x++){let N=p[x];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(b=x),N.route.id){let{loaderData:U,errors:H}=f,M=N.route.loader&&!U.hasOwnProperty(N.route.id)&&(!H||H[N.route.id]===void 0);if(N.route.lazy||M){R=!0,b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}return p.reduceRight((x,N,U)=>{let H,M=!1,_=null,O=null;f&&(H=w&&N.route.id?w[N.route.id]:void 0,_=N.route.errorElement||vp,R&&(b<0&&U===0?(Id("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,O=null):b===U&&(M=!0,O=N.route.hydrateFallbackElement||null)));let B=d.concat(p.slice(0,U+1)),Z=()=>{let L;return H?L=_:M?L=O:N.route.Component?L=A.createElement(N.route.Component,null):N.route.element?L=N.route.element:L=x,A.createElement(yp,{match:N,routeContext:{outlet:x,matches:B,isDataRoute:f!=null},children:L})};return f&&(N.route.ErrorBoundary||N.route.errorElement||U===0)?A.createElement(gp,{location:f.location,revalidation:f.revalidation,component:_,error:H,children:Z(),routeContext:{outlet:null,matches:B,isDataRoute:!0},unstable_onError:u}):Z()},null)}function zc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jp(r){let d=A.useContext(zl);return Ne(d,zc(r)),d}function Np(r){let d=A.useContext(es);return Ne(d,zc(r)),d}function Sp(r){let d=A.useContext($t);return Ne(d,zc(r)),d}function Dc(r){let d=Sp(r),f=d.matches[d.matches.length-1];return Ne(f.route.id,`${r} can only be used on routes that contain a unique "id"`),f.route.id}function wp(){return Dc("useRouteId")}function Ep(){let r=A.useContext(Rc),d=Np("useRouteError"),f=Dc("useRouteError");return r!==void 0?r:d.errors?.[f]}function Tp(){let{router:r}=jp("useNavigate"),d=Dc("useNavigate"),f=A.useRef(!1);return Fd(()=>{f.current=!0}),A.useCallback(async(m,p={})=>{wt(f.current,Wd),f.current&&(typeof m=="number"?r.navigate(m):await r.navigate(m,{fromRouteId:d,...p}))},[r,d])}var Xd={};function Id(r,d,f){!d&&!Xd[r]&&(Xd[r]=!0,wt(!1,f))}A.memo(Ap);function Ap({routes:r,future:d,state:f,unstable_onError:u}){return Pd(r,void 0,f,u,d)}function ze(r){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Rp({basename:r="/",children:d=null,location:f,navigationType:u="POP",navigator:m,static:p=!1}){Ne(!Cn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let w=r.replace(/^\/*/,"/"),R=A.useMemo(()=>({basename:w,navigator:m,static:p,future:{}}),[w,m,p]);typeof f=="string"&&(f=Ga(f));let{pathname:b="/",search:x="",hash:N="",state:U=null,key:H="default"}=f,M=A.useMemo(()=>{let _=Jt(b,w);return _==null?null:{location:{pathname:_,search:x,hash:N,state:U,key:H},navigationType:u}},[w,b,x,N,U,H,u]);return wt(M!=null,`<Router basename="${w}"> is not able to match the URL "${b}${x}${N}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:A.createElement(kt.Provider,{value:R},A.createElement(Mn.Provider,{children:d,value:M}))}function zp({children:r,location:d}){return pp(Tc(r),d)}function Tc(r,d=[]){let f=[];return A.Children.forEach(r,(u,m)=>{if(!A.isValidElement(u))return;let p=[...d,m];if(u.type===A.Fragment){f.push.apply(f,Tc(u.props.children,p));return}Ne(u.type===ze,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!u.props.index||!u.props.children,"An index route cannot have child routes.");let w={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(w.children=Tc(u.props.children,p)),f.push(w)}),f}var Fi="get",Pi="application/x-www-form-urlencoded";function ts(r){return r!=null&&typeof r.tagName=="string"}function Dp(r){return ts(r)&&r.tagName.toLowerCase()==="button"}function kp(r){return ts(r)&&r.tagName.toLowerCase()==="form"}function Mp(r){return ts(r)&&r.tagName.toLowerCase()==="input"}function Cp(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Op(r,d){return r.button===0&&(!d||d==="_self")&&!Cp(r)}var Wi=null;function _p(){if(Wi===null)try{new FormData(document.createElement("form"),0),Wi=!1}catch{Wi=!0}return Wi}var Yp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wc(r){return r!=null&&!Yp.has(r)?(wt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pi}"`),null):r}function Up(r,d){let f,u,m,p,w;if(kp(r)){let R=r.getAttribute("action");u=R?Jt(R,d):null,f=r.getAttribute("method")||Fi,m=wc(r.getAttribute("enctype"))||Pi,p=new FormData(r)}else if(Dp(r)||Mp(r)&&(r.type==="submit"||r.type==="image")){let R=r.form;if(R==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=r.getAttribute("formaction")||R.getAttribute("action");if(u=b?Jt(b,d):null,f=r.getAttribute("formmethod")||R.getAttribute("method")||Fi,m=wc(r.getAttribute("formenctype"))||wc(R.getAttribute("enctype"))||Pi,p=new FormData(R,r),!_p()){let{name:x,type:N,value:U}=r;if(N==="image"){let H=x?`${x}.`:"";p.append(`${H}x`,"0"),p.append(`${H}y`,"0")}else x&&p.append(x,U)}}else{if(ts(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=Fi,u=null,m=Pi,w=r}return p&&m==="text/plain"&&(w=p,p=void 0),{action:u,method:f.toLowerCase(),encType:m,formData:p,body:w}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kc(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function Hp(r,d,f){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname=`_root.${f}`:d&&Jt(u.pathname,d)==="/"?u.pathname=`${d.replace(/\/$/,"")}/_root.${f}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${f}`,u}async function Bp(r,d){if(r.id in d)return d[r.id];try{let f=await import(r.module);return d[r.id]=f,f}catch(f){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xp(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function qp(r,d,f){let u=await Promise.all(r.map(async m=>{let p=d.routes[m.route.id];if(p){let w=await Bp(p,f);return w.links?w.links():[]}return[]}));return Qp(u.flat(1).filter(Xp).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function qd(r,d,f,u,m,p){let w=(b,x)=>f[x]?b.route.id!==f[x].route.id:!0,R=(b,x)=>f[x].pathname!==b.pathname||f[x].route.path?.endsWith("*")&&f[x].params["*"]!==b.params["*"];return p==="assets"?d.filter((b,x)=>w(b,x)||R(b,x)):p==="data"?d.filter((b,x)=>{let N=u.routes[b.route.id];if(!N||!N.hasLoader)return!1;if(w(b,x)||R(b,x))return!0;if(b.route.shouldRevalidate){let U=b.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof U=="boolean")return U}return!0}):[]}function Gp(r,d,{includeHydrateFallback:f}={}){return Lp(r.map(u=>{let m=d.routes[u.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function Lp(r){return[...new Set(r)]}function Zp(r){let d={},f=Object.keys(r).sort();for(let u of f)d[u]=r[u];return d}function Qp(r,d){let f=new Set;return new Set(d),r.reduce((u,m)=>{let p=JSON.stringify(Zp(m));return f.has(p)||(f.add(p),u.push({key:p,link:m})),u},[])}function e0(){let r=A.useContext(zl);return kc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Vp(){let r=A.useContext(es);return kc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Mc=A.createContext(void 0);Mc.displayName="FrameworkContext";function t0(){let r=A.useContext(Mc);return kc(r,"You must render this element inside a <HydratedRouter> element"),r}function Kp(r,d){let f=A.useContext(Mc),[u,m]=A.useState(!1),[p,w]=A.useState(!1),{onFocus:R,onBlur:b,onMouseEnter:x,onMouseLeave:N,onTouchStart:U}=d,H=A.useRef(null);A.useEffect(()=>{if(r==="render"&&w(!0),r==="viewport"){let O=Z=>{Z.forEach(L=>{w(L.isIntersecting)})},B=new IntersectionObserver(O,{threshold:.5});return H.current&&B.observe(H.current),()=>{B.disconnect()}}},[r]),A.useEffect(()=>{if(u){let O=setTimeout(()=>{w(!0)},100);return()=>{clearTimeout(O)}}},[u]);let M=()=>{m(!0)},_=()=>{m(!1),w(!1)};return f?r!=="intent"?[p,H,{}]:[p,H,{onFocus:Dn(R,M),onBlur:Dn(b,_),onMouseEnter:Dn(x,M),onMouseLeave:Dn(N,_),onTouchStart:Dn(U,M)}]:[!1,H,{}]}function Dn(r,d){return f=>{r&&r(f),f.defaultPrevented||d(f)}}function Jp({page:r,...d}){let{router:f}=e0(),u=A.useMemo(()=>Ld(f.routes,r,f.basename),[f.routes,r,f.basename]);return u?A.createElement(Wp,{page:r,matches:u,...d}):null}function $p(r){let{manifest:d,routeModules:f}=t0(),[u,m]=A.useState([]);return A.useEffect(()=>{let p=!1;return qp(r,d,f).then(w=>{p||m(w)}),()=>{p=!0}},[r,d,f]),u}function Wp({page:r,matches:d,...f}){let u=ja(),{manifest:m,routeModules:p}=t0(),{basename:w}=e0(),{loaderData:R,matches:b}=Vp(),x=A.useMemo(()=>qd(r,d,b,m,u,"data"),[r,d,b,m,u]),N=A.useMemo(()=>qd(r,d,b,m,u,"assets"),[r,d,b,m,u]),U=A.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let _=new Set,O=!1;if(d.forEach(Z=>{let L=m.routes[Z.route.id];!L||!L.hasLoader||(!x.some(K=>K.route.id===Z.route.id)&&Z.route.id in R&&p[Z.route.id]?.shouldRevalidate||L.hasClientLoader?O=!0:_.add(Z.route.id))}),_.size===0)return[];let B=Hp(r,w,"data");return O&&_.size>0&&B.searchParams.set("_routes",d.filter(Z=>_.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[B.pathname+B.search]},[w,R,u,m,x,d,r,p]),H=A.useMemo(()=>Gp(N,m),[N,m]),M=$p(N);return A.createElement(A.Fragment,null,U.map(_=>A.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...f})),H.map(_=>A.createElement("link",{key:_,rel:"modulepreload",href:_,...f})),M.map(({key:_,link:O})=>A.createElement("link",{key:_,nonce:f.nonce,...O})))}function Fp(...r){return d=>{r.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var a0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{a0&&(window.__reactRouterVersion="7.9.3")}catch{}function Pp({basename:r,children:d,window:f}){let u=A.useRef();u.current==null&&(u.current=Bh({window:f,v5Compat:!0}));let m=u.current,[p,w]=A.useState({action:m.action,location:m.location}),R=A.useCallback(b=>{A.startTransition(()=>w(b))},[w]);return A.useLayoutEffect(()=>m.listen(R),[m,R]),A.createElement(Rp,{basename:r,children:d,location:p.location,navigationType:p.action,navigator:m})}var l0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rl=A.forwardRef(function({onClick:d,discover:f="render",prefetch:u="none",relative:m,reloadDocument:p,replace:w,state:R,target:b,to:x,preventScrollReset:N,viewTransition:U,...H},M){let{basename:_}=A.useContext(kt),O=typeof x=="string"&&l0.test(x),B,Z=!1;if(typeof x=="string"&&O&&(B=x,a0))try{let Se=new URL(window.location.href),et=x.startsWith("//")?new URL(Se.protocol+x):new URL(x),ft=Jt(et.pathname,_);et.origin===Se.origin&&ft!=null?x=ft+et.search+et.hash:Z=!0}catch{wt(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=dp(x,{relative:m}),[K,ge,I]=Kp(u,H),Te=ax(x,{replace:w,state:R,target:b,preventScrollReset:N,relative:m,viewTransition:U});function Me(Se){d&&d(Se),Se.defaultPrevented||Te(Se)}let _e=A.createElement("a",{...H,...I,href:B||L,onClick:Z||p?d:Me,ref:Fp(M,ge),target:b,"data-discover":!O&&f==="render"?"true":void 0});return K&&!O?A.createElement(A.Fragment,null,_e,A.createElement(Jp,{page:L})):_e});Rl.displayName="Link";var Ip=A.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:u="",end:m=!1,style:p,to:w,viewTransition:R,children:b,...x},N){let U=On(w,{relative:x.relative}),H=ja(),M=A.useContext(es),{navigator:_,basename:O}=A.useContext(kt),B=M!=null&&rx(U)&&R===!0,Z=_.encodeLocation?_.encodeLocation(U).pathname:U.pathname,L=H.pathname,K=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;f||(L=L.toLowerCase(),K=K?K.toLowerCase():null,Z=Z.toLowerCase()),K&&O&&(K=Jt(K,O)||K);const ge=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let I=L===Z||!m&&L.startsWith(Z)&&L.charAt(ge)==="/",Te=K!=null&&(K===Z||!m&&K.startsWith(Z)&&K.charAt(Z.length)==="/"),Me={isActive:I,isPending:Te,isTransitioning:B},_e=I?d:void 0,Se;typeof u=="function"?Se=u(Me):Se=[u,I?"active":null,Te?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let et=typeof p=="function"?p(Me):p;return A.createElement(Rl,{...x,"aria-current":_e,className:Se,ref:N,style:et,to:w,viewTransition:R},typeof b=="function"?b(Me):b)});Ip.displayName="NavLink";var ex=A.forwardRef(({discover:r="render",fetcherKey:d,navigate:f,reloadDocument:u,replace:m,state:p,method:w=Fi,action:R,onSubmit:b,relative:x,preventScrollReset:N,viewTransition:U,...H},M)=>{let _=ix(),O=sx(R,{relative:x}),B=w.toLowerCase()==="get"?"get":"post",Z=typeof R=="string"&&l0.test(R),L=K=>{if(b&&b(K),K.defaultPrevented)return;K.preventDefault();let ge=K.nativeEvent.submitter,I=ge?.getAttribute("formmethod")||w;_(ge||K.currentTarget,{fetcherKey:d,method:I,navigate:f,replace:m,state:p,relative:x,preventScrollReset:N,viewTransition:U})};return A.createElement("form",{ref:M,method:B,action:O,onSubmit:u?b:L,...H,"data-discover":!Z&&r==="render"?"true":void 0})});ex.displayName="Form";function tx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function n0(r){let d=A.useContext(zl);return Ne(d,tx(r)),d}function ax(r,{target:d,replace:f,state:u,preventScrollReset:m,relative:p,viewTransition:w}={}){let R=mp(),b=ja(),x=On(r,{relative:p});return A.useCallback(N=>{if(Op(N,d)){N.preventDefault();let U=f!==void 0?f:kn(b)===kn(x);R(r,{replace:U,state:u,preventScrollReset:m,relative:p,viewTransition:w})}},[b,R,x,f,u,d,r,m,p,w])}var lx=0,nx=()=>`__${String(++lx)}__`;function ix(){let{router:r}=n0("useSubmit"),{basename:d}=A.useContext(kt),f=wp();return A.useCallback(async(u,m={})=>{let{action:p,method:w,encType:R,formData:b,body:x}=Up(u,d);if(m.navigate===!1){let N=m.fetcherKey||nx();await r.fetch(N,f,m.action||p,{preventScrollReset:m.preventScrollReset,formData:b,body:x,formMethod:m.method||w,formEncType:m.encType||R,flushSync:m.flushSync})}else await r.navigate(m.action||p,{preventScrollReset:m.preventScrollReset,formData:b,body:x,formMethod:m.method||w,formEncType:m.encType||R,replace:m.replace,state:m.state,fromRouteId:f,flushSync:m.flushSync,viewTransition:m.viewTransition})},[r,d,f])}function sx(r,{relative:d}={}){let{basename:f}=A.useContext(kt),u=A.useContext($t);Ne(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),p={...On(r||".",{relative:d})},w=ja();if(r==null){p.search=w.search;let R=new URLSearchParams(p.search),b=R.getAll("index");if(b.some(N=>N==="")){R.delete("index"),b.filter(U=>U).forEach(U=>R.append("index",U));let N=R.toString();p.search=N?`?${N}`:""}}return(!r||r===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:Kt([f,p.pathname])),kn(p)}function rx(r,{relative:d}={}){let f=A.useContext($d);Ne(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=n0("useViewTransitionState"),m=On(r,{relative:d});if(!f.isTransitioning)return!1;let p=Jt(f.currentLocation.pathname,u)||f.currentLocation.pathname,w=Jt(f.nextLocation.pathname,u)||f.nextLocation.pathname;return Ii(m.pathname,w)!=null||Ii(m.pathname,p)!=null}const cx=()=>{const r=ja(),[d,f]=A.useState(!1),u=[{path:"/animation/fade",label:"Fade"},{path:"/animation/slide",label:"Slide"},{path:"/animation/rotate",label:"Rotate"},{path:"/animation/scale",label:"Scale"},{path:"/animation/bounce",label:"Bounce"},{path:"/animation/flip",label:"Flip"},{path:"/animation/shake",label:"Shake"},{path:"/animation/wave",label:"Wave"},{path:"/animation/typewriter",label:"Typewriter"},{path:"/animation/glow",label:"Glow"},{path:"/animation/loading",label:"Loading"},{path:"/animation/text-effects",label:"Text Effects"},{path:"/animation/glitch",label:"Glitch"},{path:"/animation/transform3d",label:"3D Transform"},{path:"/animation/hover-effects",label:"Hover Effects"},{path:"/animation/morph",label:"Morph"},{path:"/animation/particle",label:"Particle"},{path:"/animation/parallax",label:"Parallax"},{path:"/animation/celebration",label:"Celebration"}],m=u.some(p=>p.path===r.pathname);return i.jsx("nav",{className:"navigation",children:i.jsxs("div",{className:"nav-container",children:[i.jsx(Rl,{to:"/",className:"nav-logo",children:"Animation Gallery"}),i.jsxs("ul",{className:"nav-menu",children:[i.jsx("li",{className:"nav-item",children:i.jsx(Rl,{to:"/",className:`nav-link ${r.pathname==="/"?"active":""}`,children:"Gallery"})}),i.jsxs("li",{className:"nav-item dropdown",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[i.jsx("span",{className:`nav-link dropdown-trigger ${m?"active":""}`,onClick:()=>f(!d),children:"Animations ▼"}),i.jsx("ul",{className:`dropdown-menu ${d?"open":""}`,children:u.map(p=>i.jsx("li",{className:"dropdown-item",children:i.jsx(Rl,{to:p.path,className:`dropdown-link ${r.pathname===p.path?"active":""}`,children:p.label})},p.path))})]})]})]})})},ox=({children:r})=>i.jsxs("div",{className:"layout",children:[i.jsx(cx,{}),i.jsx("main",{className:"main-content",children:r})]}),ux=({title:r,description:d,path:f,preview:u})=>i.jsxs(Rl,{to:f,className:"animation-card",children:[i.jsx("div",{className:"card-preview",children:u}),i.jsxs("div",{className:"card-content",children:[i.jsx("h3",{className:"card-title",children:r}),i.jsx("p",{className:"card-description",children:d})]})]}),fx=()=>{const r=[{id:"fade",title:"Fade Animation",description:"부드러운 페이드 인/아웃 효과를 보여주는 애니메이션입니다.",path:"/animation/fade",preview:i.jsx("div",{className:"preview-element fade-preview"})},{id:"slide",title:"Slide Animation",description:"좌우 및 상하 슬라이드 효과를 보여주는 애니메이션입니다.",path:"/animation/slide",preview:i.jsx("div",{className:"preview-element slide-preview"})},{id:"rotate",title:"Rotate Animation",description:"회전 효과를 보여주는 다양한 애니메이션입니다.",path:"/animation/rotate",preview:i.jsx("div",{className:"preview-element rotate-preview"})},{id:"scale",title:"Scale Animation",description:"크기 변경 효과를 보여주는 애니메이션입니다.",path:"/animation/scale",preview:i.jsx("div",{className:"preview-element scale-preview"})},{id:"bounce",title:"Bounce Animation",description:"탄성 있는 바운스 효과를 보여주는 애니메이션입니다.",path:"/animation/bounce",preview:i.jsx("div",{className:"preview-element bounce-preview"})},{id:"flip",title:"Flip Animation",description:"3D 카드 뒤집기 효과를 보여주는 애니메이션입니다.",path:"/animation/flip",preview:i.jsx("div",{className:"preview-element flip-preview"})},{id:"shake",title:"Shake Animation",description:"진동과 흔들림 효과를 보여주는 애니메이션입니다.",path:"/animation/shake",preview:i.jsx("div",{className:"preview-element shake-preview"})},{id:"wave",title:"Wave Animation",description:"파도와 물결 효과를 보여주는 애니메이션입니다.",path:"/animation/wave",preview:i.jsx("div",{className:"preview-element wave-preview"})},{id:"typewriter",title:"Typewriter Animation",description:"타이핑 효과를 보여주는 애니메이션입니다.",path:"/animation/typewriter",preview:i.jsx("div",{className:"preview-element typewriter-preview"})},{id:"glow",title:"Glow Animation",description:"발광과 네온 효과를 보여주는 애니메이션입니다.",path:"/animation/glow",preview:i.jsx("div",{className:"preview-element glow-preview"})},{id:"loading",title:"Loading Animation",description:"다양한 로딩 스피너와 프로그레스 애니메이션입니다.",path:"/animation/loading",preview:i.jsx("div",{className:"preview-element loading-preview"})},{id:"text-effects",title:"Text Effects Animation",description:"다양한 텍스트 애니메이션 효과를 보여줍니다.",path:"/animation/text-effects",preview:i.jsx("div",{className:"preview-element text-effects-preview"})},{id:"glitch",title:"Glitch Animation",description:"디지털 글리치와 사이버펑크 효과 애니메이션입니다.",path:"/animation/glitch",preview:i.jsx("div",{className:"preview-element glitch-preview"})},{id:"transform3d",title:"3D Transform Animation",description:"3차원 변환과 원근감을 활용한 애니메이션입니다.",path:"/animation/transform3d",preview:i.jsx("div",{className:"preview-element transform3d-preview"})},{id:"hover-effects",title:"Hover Effects Animation",description:"마우스 호버 시 발생하는 인터랙티브 애니메이션입니다.",path:"/animation/hover-effects",preview:i.jsx("div",{className:"preview-element hover-effects-preview"})},{id:"morph",title:"Morph Animation",description:"도형과 아이콘의 변형 애니메이션입니다.",path:"/animation/morph",preview:i.jsx("div",{className:"preview-element morph-preview"})},{id:"particle",title:"Particle Animation",description:"다양한 파티클 시스템 효과 애니메이션입니다.",path:"/animation/particle",preview:i.jsx("div",{className:"preview-element particle-preview"})},{id:"parallax",title:"Parallax Animation",description:"스크롤 기반 시차 효과와 깊이감 애니메이션입니다.",path:"/animation/parallax",preview:i.jsx("div",{className:"preview-element parallax-preview"})},{id:"celebration",title:"Celebration Animation",description:"축하와 성공을 표현하는 다양한 애니메이션 효과입니다.",path:"/animation/celebration",preview:i.jsx("div",{className:"preview-element celebration-preview"})}];return i.jsxs("div",{className:"home",children:[i.jsxs("div",{className:"home-header",children:[i.jsx("h1",{className:"home-title",children:"Animation Gallery"}),i.jsx("p",{className:"home-description",children:"다양한 웹 애니메이션 효과들을 탐색해보세요. 각 카드를 클릭하면 상세한 애니메이션 데모를 볼 수 있습니다."})]}),i.jsx("div",{className:"animation-grid",children:r.map(d=>i.jsx(ux,{title:d.title,description:d.description,path:d.path,preview:d.preview},d.id))})]})},dx=()=>{const[r,d]=A.useState(!0);return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Fade Animation"}),i.jsx("p",{children:"페이드 인/아웃 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:i.jsx("button",{className:"demo-button",onClick:()=>d(!r),children:r?"Fade Out":"Fade In"})}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`fade-element ${r?"fade-in":"fade-out"}`,children:"Fade Effect"})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Fade Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Slow Fade"}),i.jsx("div",{className:"fade-element slow-fade",children:"Slow"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Fast Fade"}),i.jsx("div",{className:"fade-element fast-fade",children:"Fast"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Pulse Effect"}),i.jsx("div",{className:"fade-element pulse-fade",children:"Pulse"})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.fade-in {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.fade-out {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.slow-fade {
  animation: fadeInOut 4s infinite;
}

.fast-fade {
  animation: fadeInOut 1s infinite;
}

.pulse-fade {
  animation: pulse 2s infinite;
}

@keyframes fadeInOut {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}`})]})]})},mx=()=>{const[r,d]=A.useState("right");return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Slide Animation"}),i.jsx("p",{children:"다양한 방향의 슬라이드 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:["left","right","up","down"].map(f=>i.jsxs("button",{className:`demo-button ${r===f?"active":""}`,onClick:()=>d(f),children:["Slide ",f.charAt(0).toUpperCase()+f.slice(1)]},f))}),i.jsx("div",{className:"demo-area",children:i.jsxs("div",{className:`slide-element slide-${r}`,children:["Sliding ",r]})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Continuous Slide Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Horizontal Slide"}),i.jsx("div",{className:"slide-element horizontal-slide",children:"←→"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Vertical Slide"}),i.jsx("div",{className:"slide-element vertical-slide",children:"↑↓"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Diagonal Slide"}),i.jsx("div",{className:"slide-element diagonal-slide",children:"↗↙"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Slide & Fade"}),i.jsx("div",{className:"slide-element slide-fade",children:"Mix"})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.slide-right {
  animation: slideRight 0.5s ease-out;
}

.slide-left {
  animation: slideLeft 0.5s ease-out;
}

.horizontal-slide {
  animation: slideHorizontal 3s infinite;
}

.vertical-slide {
  animation: slideVertical 2s infinite;
}

@keyframes slideRight {
  from { transform: translateX(-100px); }
  to { transform: translateX(0); }
}

@keyframes slideLeft {
  from { transform: translateX(100px); }
  to { transform: translateX(0); }
}

@keyframes slideHorizontal {
  0%, 100% { transform: translateX(-20px); }
  50% { transform: translateX(20px); }
}

@keyframes slideVertical {
  0%, 100% { transform: translateY(-15px); }
  50% { transform: translateY(15px); }
}`})]})]})},hx=()=>{const[r,d]=A.useState(!1),[f,u]=A.useState(0),m=A.useRef(null),p=A.useRef(null),w=A.useRef(null);A.useEffect(()=>{if(r){w.current=Date.now();const b=()=>{const x=Date.now()-w.current,U=f+x/1e3*180;m.current&&(m.current.style.transform=`rotate(${U%360}deg)`),r&&(p.current=requestAnimationFrame(b))};p.current=requestAnimationFrame(b)}else{if(m.current){const x=window.getComputedStyle(m.current).transform;if(x!=="none"){const N=x.split("(")[1].split(")")[0].split(","),U=N[0],H=N[1],M=Math.round(Math.atan2(H,U)*(180/Math.PI));u(M<0?M+360:M)}}p.current&&cancelAnimationFrame(p.current)}return()=>{p.current&&cancelAnimationFrame(p.current)}},[r,f]);const R=()=>{d(!r)};return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Rotate Animation"}),i.jsx("p",{children:"다양한 회전 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsxs("div",{className:"demo-controls",children:[i.jsx("button",{className:"demo-button",onClick:R,children:r?"Stop Rotation":"Start Rotation"}),i.jsx("button",{className:"demo-button",onClick:()=>{u(0),m.current&&(m.current.style.transform="rotate(0deg)")},children:"Reset"})]}),i.jsxs("div",{className:"demo-area",children:[i.jsx("div",{ref:m,className:"rotate-element",style:{transform:`rotate(${f}deg)`},children:"⚡"}),i.jsxs("p",{style:{marginTop:"10px",fontSize:"0.9rem",color:"rgba(255,255,255,0.7)"},children:["Current angle: ",Math.round(f),"°"]})]})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Rotation Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Slow Spin"}),i.jsx("div",{className:"rotate-element slow-rotate",children:"🔄"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Fast Spin"}),i.jsx("div",{className:"rotate-element fast-rotate",children:"💫"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Wobble"}),i.jsx("div",{className:"rotate-element wobble-rotate",children:"🎯"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"3D Flip"}),i.jsx("div",{className:"rotate-element flip-rotate",children:"🎲"})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.rotating {
  animation: rotate360 2s linear infinite;
}

.slow-rotate {
  animation: rotate360 4s linear infinite;
}

.fast-rotate {
  animation: rotate360 0.5s linear infinite;
}

.wobble-rotate {
  animation: wobble 1s ease-in-out infinite;
}

.flip-rotate {
  animation: flip3D 2s ease-in-out infinite;
}

@keyframes rotate360 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes wobble {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  75% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
}

@keyframes flip3D {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
}`})]})]})},px=()=>{const[r,d]=A.useState(!1);return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Scale Animation"}),i.jsx("p",{children:"크기 변화 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:i.jsx("button",{className:"demo-button",onClick:()=>d(!r),children:r?"Scale Down":"Scale Up"})}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`scale-element ${r?"scaled":""}`,children:"📦"})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Scale Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Pulse"}),i.jsx("div",{className:"scale-element pulse-scale",children:"💗"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Elastic Scale"}),i.jsx("div",{className:"scale-element elastic-scale",children:"🎈"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Scale X Only"}),i.jsx("div",{className:"scale-element scale-x",children:"↔️"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Scale Y Only"}),i.jsx("div",{className:"scale-element scale-y",children:"↕️"})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.scaled {
  transform: scale(1.5);
  transition: transform 0.3s ease;
}

.pulse-scale {
  animation: pulse 1.5s ease-in-out infinite;
}

.elastic-scale {
  animation: elasticScale 2s ease-in-out infinite;
}

.scale-x {
  animation: scaleX 2s ease-in-out infinite;
}

.scale-y {
  animation: scaleY 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@keyframes elasticScale {
  0% { transform: scale(1); }
  30% { transform: scale(1.3); }
  60% { transform: scale(0.8); }
  100% { transform: scale(1); }
}

@keyframes scaleX {
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(1.5); }
}

@keyframes scaleY {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.5); }
}`})]})]})},xx=()=>{const[r,d]=A.useState(!1);return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Bounce Animation"}),i.jsx("p",{children:"탄성 있는 바운스 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:i.jsx("button",{className:"demo-button",onClick:()=>d(!r),children:r?"Stop Bounce":"Start Bounce"})}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`bounce-element ${r?"bouncing":""}`,children:"🏀"})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Bounce Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Gentle Bounce"}),i.jsx("div",{className:"bounce-element gentle-bounce",children:"🎾"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"High Bounce"}),i.jsx("div",{className:"bounce-element high-bounce",children:"⚽"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Rubber Ball"}),i.jsx("div",{className:"bounce-element rubber-bounce",children:"🔴"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Bounce In"}),i.jsx("div",{className:"bounce-element bounce-in",children:"✨"})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.bouncing {
  animation: bounce 1s ease-in-out infinite;
}

.gentle-bounce {
  animation: gentleBounce 2s ease-in-out infinite;
}

.high-bounce {
  animation: highBounce 1.5s ease-in-out infinite;
}

.rubber-bounce {
  animation: rubberBounce 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

.bounce-in {
  animation: bounceIn 2s ease-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-20px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-10px); }
}

@keyframes gentleBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes highBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-40px); }
}

@keyframes bounceIn {
  0% { transform: scale(0.3) translateY(0); opacity: 0; }
  50% { transform: scale(1.05) translateY(-30px); opacity: 1; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}`})]})]})},vx=()=>{const[r,d]=A.useState(!1);return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Flip Animation"}),i.jsx("p",{children:"3D 카드 뒤집기 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:i.jsx("button",{className:"demo-button",onClick:()=>d(!r),children:r?"Flip Back":"Flip Card"})}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`flip-container ${r?"flipped":""}`,children:i.jsxs("div",{className:"flip-element",children:[i.jsx("div",{className:"flip-front",children:"🃏 Front"}),i.jsx("div",{className:"flip-back",children:"🎴 Back"})]})})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Flip Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Horizontal Flip"}),i.jsx("div",{className:"flip-container horizontal-flip",children:i.jsxs("div",{className:"flip-element",children:[i.jsx("div",{className:"flip-front",children:"📱"}),i.jsx("div",{className:"flip-back",children:"📲"})]})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Vertical Flip"}),i.jsx("div",{className:"flip-container vertical-flip",children:i.jsxs("div",{className:"flip-element",children:[i.jsx("div",{className:"flip-front",children:"📖"}),i.jsx("div",{className:"flip-back",children:"📕"})]})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Diagonal Flip"}),i.jsx("div",{className:"flip-container diagonal-flip",children:i.jsxs("div",{className:"flip-element",children:[i.jsx("div",{className:"flip-front",children:"🎲"}),i.jsx("div",{className:"flip-back",children:"🎯"})]})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Cube Flip"}),i.jsx("div",{className:"flip-container cube-flip",children:i.jsxs("div",{className:"flip-element",children:[i.jsx("div",{className:"flip-front",children:"🟦"}),i.jsx("div",{className:"flip-back",children:"🟨"})]})})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.flip-container {
  perspective: 1000px;
  width: 100px;
  height: 100px;
}

.flip-element {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flipped .flip-element {
  transform: rotateY(180deg);
}

.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #f0f0f0;
}

.flip-back {
  transform: rotateY(180deg);
  background: #e0e0e0;
}

.horizontal-flip .flip-element {
  animation: flipHorizontal 3s infinite;
}

.vertical-flip .flip-element {
  animation: flipVertical 3s infinite;
}

.diagonal-flip .flip-element {
  animation: flipDiagonal 3s infinite;
}

.cube-flip .flip-element {
  animation: flipCube 4s infinite;
}

@keyframes flipHorizontal {
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
}

@keyframes flipVertical {
  0%, 100% { transform: rotateX(0deg); }
  50% { transform: rotateX(180deg); }
}

@keyframes flipDiagonal {
  0%, 100% { transform: rotate3d(1, 1, 0, 0deg); }
  50% { transform: rotate3d(1, 1, 0, 180deg); }
}

@keyframes flipCube {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(90deg) rotateY(0deg); }
  50% { transform: rotateX(90deg) rotateY(90deg); }
  75% { transform: rotateX(0deg) rotateY(90deg); }
  100% { transform: rotateX(0deg) rotateY(0deg); }
}`})]})]})},gx=()=>{const[r,d]=A.useState(!1);return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Shake Animation"}),i.jsx("p",{children:"진동과 흔들림 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:i.jsx("button",{className:"demo-button",onClick:()=>{d(!0),setTimeout(()=>d(!1),1e3)},children:"Shake It!"})}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`shake-element ${r?"shaking":""}`,children:"📱"})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Shake Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Horizontal Shake"}),i.jsx("div",{className:"shake-element horizontal-shake",children:"🔔"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Vertical Shake"}),i.jsx("div",{className:"shake-element vertical-shake",children:"📞"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Crazy Shake"}),i.jsx("div",{className:"shake-element crazy-shake",children:"🎉"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Error Shake"}),i.jsx("div",{className:"shake-element error-shake",children:"❌"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Wobble"}),i.jsx("div",{className:"shake-element wobble-shake",children:"🎈"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Jello"}),i.jsx("div",{className:"shake-element jello-shake",children:"🍮"})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.shaking {
  animation: shake 0.8s ease-in-out;
}

.horizontal-shake {
  animation: shakeHorizontal 2s infinite;
}

.vertical-shake {
  animation: shakeVertical 2s infinite;
}

.crazy-shake {
  animation: shakeCrazy 1s infinite;
}

.error-shake {
  animation: errorShake 0.5s ease-in-out infinite;
}

.wobble-shake {
  animation: wobble 2s ease-in-out infinite;
}

.jello-shake {
  animation: jello 1.5s infinite;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
  20%, 40%, 60%, 80% { transform: translateX(3px); }
}

@keyframes shakeHorizontal {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@keyframes shakeVertical {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-5px); }
  75% { transform: translateY(5px); }
}

@keyframes shakeCrazy {
  0% { transform: translate(0); }
  10% { transform: translate(-2px, -1px) rotate(1deg); }
  20% { transform: translate(-1px, 1px) rotate(-1deg); }
  30% { transform: translate(2px, 1px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 1px) rotate(-1deg); }
  60% { transform: translate(-2px, 0px) rotate(1deg); }
  70% { transform: translate(2px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 1px) rotate(0deg); }
  100% { transform: translate(0); }
}

@keyframes errorShake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

@keyframes wobble {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
}

@keyframes jello {
  0%, 100% { transform: skewX(0deg) skewY(0deg); }
  25% { transform: skewX(-5deg) skewY(-5deg); }
  50% { transform: skewX(5deg) skewY(5deg); }
  75% { transform: skewX(-3deg) skewY(-3deg); }
}`})]})]})},yx=()=>{const[r,d]=A.useState("sine");return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Wave Animation"}),i.jsx("p",{children:"파도와 물결 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:["sine","cosine","zigzag","pulse"].map(f=>i.jsxs("button",{className:`demo-button ${r===f?"active":""}`,onClick:()=>d(f),children:[f.charAt(0).toUpperCase()+f.slice(1)," Wave"]},f))}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`wave-element wave-${r}`,children:"🌊"})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Wave Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Ocean Wave"}),i.jsx("div",{className:"wave-container",children:i.jsx("div",{className:"wave-element ocean-wave",children:"🌊"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Text Wave"}),i.jsxs("div",{className:"text-wave",children:[i.jsx("span",{children:"W"}),i.jsx("span",{children:"A"}),i.jsx("span",{children:"V"}),i.jsx("span",{children:"E"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Floating Wave"}),i.jsx("div",{className:"wave-element floating-wave",children:"🎈"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Loading Wave"}),i.jsxs("div",{className:"loading-wave",children:[i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Ripple Effect"}),i.jsx("div",{className:"ripple-container",children:i.jsx("div",{className:"ripple-element",children:"💧"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Sound Wave"}),i.jsxs("div",{className:"sound-wave",children:[i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{})]})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.wave-sine {
  animation: waveSine 2s ease-in-out infinite;
}

.wave-cosine {
  animation: waveCosine 2s ease-in-out infinite;
}

.wave-zigzag {
  animation: waveZigzag 1.5s linear infinite;
}

.wave-pulse {
  animation: wavePulse 1s ease-in-out infinite;
}

.ocean-wave {
  animation: oceanWave 3s ease-in-out infinite;
}

.text-wave span {
  display: inline-block;
  animation: textWave 1.5s ease-in-out infinite;
}

.text-wave span:nth-child(2) { animation-delay: 0.1s; }
.text-wave span:nth-child(3) { animation-delay: 0.2s; }
.text-wave span:nth-child(4) { animation-delay: 0.3s; }

.floating-wave {
  animation: floatingWave 2.5s ease-in-out infinite;
}

.loading-wave div {
  display: inline-block;
  width: 8px;
  height: 20px;
  background: #007bff;
  margin: 0 2px;
  animation: loadingWave 1s ease-in-out infinite;
}

.loading-wave div:nth-child(2) { animation-delay: 0.1s; }
.loading-wave div:nth-child(3) { animation-delay: 0.2s; }
.loading-wave div:nth-child(4) { animation-delay: 0.3s; }
.loading-wave div:nth-child(5) { animation-delay: 0.4s; }

.ripple-element::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border: 2px solid #007bff;
  border-radius: 50%;
  animation: rippleWave 2s infinite;
}

.sound-wave div {
  display: inline-block;
  width: 4px;
  background: #28a745;
  margin: 0 2px;
  animation: soundWave 1s ease-in-out infinite;
}

.sound-wave div:nth-child(1) { height: 20px; animation-delay: 0s; }
.sound-wave div:nth-child(2) { height: 30px; animation-delay: 0.1s; }
.sound-wave div:nth-child(3) { height: 40px; animation-delay: 0.2s; }
.sound-wave div:nth-child(4) { height: 25px; animation-delay: 0.3s; }
.sound-wave div:nth-child(5) { height: 35px; animation-delay: 0.4s; }

@keyframes waveSine {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(5deg); }
  50% { transform: translateY(0) rotate(0deg); }
  75% { transform: translateY(10px) rotate(-5deg); }
}

@keyframes waveCosine {
  0% { transform: translateY(10px) rotate(-5deg); }
  25% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
  75% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(10px) rotate(-5deg); }
}

@keyframes waveZigzag {
  0%, 100% { transform: translateX(0) translateY(0); }
  25% { transform: translateX(10px) translateY(-10px); }
  50% { transform: translateX(0) translateY(0); }
  75% { transform: translateX(-10px) translateY(10px); }
}

@keyframes wavePulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
}

@keyframes oceanWave {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-8px) rotate(3deg); }
  66% { transform: translateY(5px) rotate(-2deg); }
}

@keyframes textWave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes floatingWave {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
}

@keyframes loadingWave {
  0%, 100% { height: 10px; background: #007bff; }
  50% { height: 30px; background: #0056b3; }
}

@keyframes rippleWave {
  0% { width: 0; height: 0; opacity: 1; }
  100% { width: 60px; height: 60px; opacity: 0; }
}

@keyframes soundWave {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.3); }
}`})]})]})},bx=()=>{const[r,d]=A.useState(""),[f,u]=A.useState(!1),[m,p]=A.useState(0),w=["Hello World!","안녕하세요!","Welcome to CSS Animation","Typewriter Effect"];return A.useEffect(()=>{if(f){const R=w[m];let b=0;const x=setInterval(()=>{d(R.slice(0,b+1)),b++,b>=R.length&&(clearInterval(x),setTimeout(()=>{p(N=>(N+1)%w.length),d("")},2e3))},100);return()=>clearInterval(x)}},[f,m]),i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Typewriter Animation"}),i.jsx("p",{children:"타이핑 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:i.jsx("button",{className:"demo-button",onClick:()=>u(!f),children:f?"Stop Typing":"Start Typing"})}),i.jsx("div",{className:"demo-area",children:i.jsxs("div",{className:"typewriter-element",children:[i.jsx("span",{className:"typed-text",children:r}),i.jsx("span",{className:"cursor",children:"|"})]})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Typewriter Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Classic Typewriter"}),i.jsx("div",{className:"typewriter-text classic-typewriter",children:"Hello World!"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Fast Typing"}),i.jsx("div",{className:"typewriter-text fast-typewriter",children:"Fast typing effect"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Code Typing"}),i.jsx("div",{className:"typewriter-text code-typewriter",children:"const hello = 'world';"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Slow Typing"}),i.jsx("div",{className:"typewriter-text slow-typewriter",children:"Slow and steady..."})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Blinking Cursor"}),i.jsxs("div",{className:"typewriter-text",children:["Text with cursor",i.jsx("span",{className:"cursor",children:"_"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Terminal Style"}),i.jsx("div",{className:"typewriter-text terminal-typewriter",children:"$ npm install"})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.typewriter-text {
  font-family: 'Courier New', monospace;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #007bff;
}

.classic-typewriter {
  width: 0;
  animation: typewriter 4s steps(12) infinite,
             blinkCursor 1s step-end infinite;
}

.fast-typewriter {
  width: 0;
  animation: typewriter 2s steps(17) infinite,
             blinkCursor 0.5s step-end infinite;
}

.code-typewriter {
  width: 0;
  background: #2d3748;
  color: #68d391;
  padding: 8px 12px;
  border-radius: 4px;
  animation: typewriter 3s steps(21) infinite,
             blinkCursor 1s step-end infinite;
}

.slow-typewriter {
  width: 0;
  animation: typewriter 6s steps(17) infinite,
             blinkCursor 1.5s step-end infinite;
}

.terminal-typewriter {
  background: #1a202c;
  color: #68d391;
  padding: 8px 12px;
  border-radius: 4px;
  width: 0;
  animation: typewriter 3s steps(13) infinite,
             blinkCursor 1s step-end infinite;
}

.cursor {
  opacity: 1;
  animation: blinkCursor 1s infinite;
}

.blinking-cursor {
  animation: blinkCursor 1s infinite;
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blinkCursor {
  0%, 50% { 
    border-color: transparent; 
    opacity: 1;
  }
  51%, 100% { 
    border-color: #007bff; 
    opacity: 0;
  }
}

/* Alternative blinking */
@keyframes blinkText {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Multi-line typewriter effect */
.multi-line-typewriter {
  overflow: hidden;
  white-space: nowrap;
  animation: 
    typewriter 3s steps(30) 1s both,
    blinkCursor 1s step-end infinite;
}

/* Typewriter with delete effect */
.delete-typewriter {
  animation: 
    typewriter 2s steps(10) forwards,
    deleteText 2s steps(10) 3s forwards,
    typewriter 2s steps(15) 5s forwards;
}

@keyframes deleteText {
  from { width: 100%; }
  to { width: 0; }
}`})]})]})},jx=()=>{const[r,d]=A.useState("pulse");return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Glow Animation"}),i.jsx("p",{children:"발광과 네온 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:["pulse","breathing","rainbow","neon"].map(f=>i.jsxs("button",{className:`demo-button ${r===f?"active":""}`,onClick:()=>d(f),children:[f.charAt(0).toUpperCase()+f.slice(1)," Glow"]},f))}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`glow-element glow-${r}`,children:"✨ GLOW ✨"})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Glow Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Soft Glow"}),i.jsx("div",{className:"glow-element soft-glow",children:"Soft"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Neon Sign"}),i.jsx("div",{className:"glow-element neon-sign",children:"NEON"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Electric Glow"}),i.jsx("div",{className:"glow-element electric-glow",children:"⚡"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Fire Glow"}),i.jsx("div",{className:"glow-element fire-glow",children:"🔥"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Ice Glow"}),i.jsx("div",{className:"glow-element ice-glow",children:"❄️"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Rainbow Glow"}),i.jsx("div",{className:"glow-element rainbow-glow",children:"🌈"})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.glow-pulse {
  animation: glowPulse 2s ease-in-out infinite;
  box-shadow: 0 0 20px #4ecdc4;
}

.glow-breathing {
  animation: glowBreathing 3s ease-in-out infinite;
  box-shadow: 0 0 30px #ff6b6b;
}

.glow-rainbow {
  animation: glowRainbow 3s linear infinite;
}

.glow-neon {
  animation: glowNeon 1.5s ease-in-out infinite;
  color: #00ff41;
  text-shadow: 0 0 5px #00ff41;
  border: 2px solid #00ff41;
  box-shadow: 
    0 0 5px #00ff41,
    0 0 10px #00ff41,
    0 0 15px #00ff41,
    0 0 20px #00ff41;
}

.soft-glow {
  box-shadow: 
    0 0 10px rgba(78, 205, 196, 0.5),
    0 0 20px rgba(78, 205, 196, 0.3),
    0 0 30px rgba(78, 205, 196, 0.1);
  animation: softGlow 4s ease-in-out infinite;
}

.neon-sign {
  background: #000;
  color: #ff006e;
  border: 2px solid #ff006e;
  text-shadow: 
    0 0 5px #ff006e,
    0 0 10px #ff006e,
    0 0 15px #ff006e;
  box-shadow: 
    0 0 5px #ff006e,
    0 0 10px #ff006e,
    0 0 15px #ff006e,
    inset 0 0 5px #ff006e;
  animation: neonFlicker 2s infinite;
}

.electric-glow {
  animation: electricGlow 0.5s infinite;
  color: #ffff00;
  text-shadow: 0 0 10px #ffff00;
  box-shadow: 
    0 0 10px #ffff00,
    0 0 20px #ffff00,
    0 0 30px #ffff00;
}

.fire-glow {
  animation: fireGlow 1s ease-in-out infinite;
  box-shadow: 
    0 0 10px #ff4500,
    0 0 20px #ff6500,
    0 0 30px #ff8500;
}

.ice-glow {
  animation: iceGlow 2s ease-in-out infinite;
  box-shadow: 
    0 0 10px #00bfff,
    0 0 20px #87ceeb,
    0 0 30px #b0e0e6;
}

.rainbow-glow {
  animation: rainbowGlow 3s linear infinite;
}

@keyframes glowPulse {
  0%, 100% { 
    box-shadow: 0 0 20px #4ecdc4, 0 0 30px #4ecdc4; 
  }
  50% { 
    box-shadow: 0 0 30px #4ecdc4, 0 0 40px #4ecdc4, 0 0 50px #4ecdc4; 
  }
}

@keyframes glowBreathing {
  0%, 100% { 
    box-shadow: 0 0 15px #ff6b6b; 
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 35px #ff6b6b, 0 0 45px #ff6b6b; 
    transform: scale(1.05);
  }
}

@keyframes glowRainbow {
  0% { box-shadow: 0 0 20px #ff0000; }
  16.66% { box-shadow: 0 0 20px #ff8000; }
  33.33% { box-shadow: 0 0 20px #ffff00; }
  50% { box-shadow: 0 0 20px #80ff00; }
  66.66% { box-shadow: 0 0 20px #0080ff; }
  83.33% { box-shadow: 0 0 20px #8000ff; }
  100% { box-shadow: 0 0 20px #ff0000; }
}

@keyframes glowNeon {
  0%, 100% { 
    box-shadow: 
      0 0 5px #00ff41,
      0 0 10px #00ff41,
      0 0 15px #00ff41,
      0 0 20px #00ff41;
  }
  50% { 
    box-shadow: 
      0 0 10px #00ff41,
      0 0 20px #00ff41,
      0 0 30px #00ff41,
      0 0 40px #00ff41;
  }
}

@keyframes softGlow {
  0%, 100% { 
    box-shadow: 
      0 0 10px rgba(78, 205, 196, 0.3),
      0 0 20px rgba(78, 205, 196, 0.2);
  }
  50% { 
    box-shadow: 
      0 0 20px rgba(78, 205, 196, 0.6),
      0 0 30px rgba(78, 205, 196, 0.4);
  }
}

@keyframes neonFlicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      0 0 5px #ff006e,
      0 0 10px #ff006e,
      0 0 15px #ff006e;
    box-shadow: 
      0 0 5px #ff006e,
      0 0 10px #ff006e,
      0 0 15px #ff006e;
  }
  20%, 24%, 55% {
    text-shadow: none;
    box-shadow: none;
  }
}

@keyframes electricGlow {
  0%, 100% { 
    box-shadow: 
      0 0 5px #ffff00,
      0 0 10px #ffff00;
  }
  50% { 
    box-shadow: 
      0 0 20px #ffff00,
      0 0 30px #ffff00,
      0 0 40px #ffff00;
  }
}

@keyframes fireGlow {
  0%, 100% { 
    box-shadow: 
      0 0 10px #ff4500,
      0 0 20px #ff6500;
  }
  25% { 
    box-shadow: 
      0 0 15px #ff6500,
      0 0 25px #ff8500,
      0 0 35px #ffa500;
  }
  50% { 
    box-shadow: 
      0 0 20px #ff8500,
      0 0 30px #ffa500,
      0 0 40px #ffb500;
  }
  75% { 
    box-shadow: 
      0 0 15px #ff6500,
      0 0 25px #ff7500;
  }
}

@keyframes iceGlow {
  0%, 100% { 
    box-shadow: 
      0 0 10px #00bfff,
      0 0 20px #87ceeb;
  }
  50% { 
    box-shadow: 
      0 0 20px #00bfff,
      0 0 30px #87ceeb,
      0 0 40px #b0e0e6;
  }
}

@keyframes rainbowGlow {
  0% { 
    box-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000;
  }
  14.28% { 
    box-shadow: 0 0 20px #ff8000, 0 0 30px #ff8000;
  }
  28.57% { 
    box-shadow: 0 0 20px #ffff00, 0 0 30px #ffff00;
  }
  42.85% { 
    box-shadow: 0 0 20px #80ff00, 0 0 30px #80ff00;
  }
  57.14% { 
    box-shadow: 0 0 20px #00ff80, 0 0 30px #00ff80;
  }
  71.42% { 
    box-shadow: 0 0 20px #0080ff, 0 0 30px #0080ff;
  }
  85.71% { 
    box-shadow: 0 0 20px #8000ff, 0 0 30px #8000ff;
  }
  100% { 
    box-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000;
  }
}`})]})]})},Nx=()=>{const[r,d]=A.useState(!0);return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Loading Animation"}),i.jsx("p",{children:"다양한 로딩 스피너와 프로그레스 애니메이션을 보여줍니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:i.jsx("button",{className:"demo-button",onClick:()=>d(!r),children:r?"Stop Loading":"Start Loading"})}),i.jsxs("div",{className:"demo-area",children:[r&&i.jsxs("div",{className:"loading-spinner-demo",children:[i.jsx("div",{className:"spinner-ring"}),i.jsx("p",{children:"Loading..."})]}),!r&&i.jsx("div",{className:"loading-complete",children:i.jsx("span",{children:"✅ Complete!"})})]})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Loading Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Spinning Ring"}),i.jsx("div",{className:"spinner-ring"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Pulsing Dots"}),i.jsxs("div",{className:"loading-dots",children:[i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Progress Bar"}),i.jsx("div",{className:"progress-bar",children:i.jsx("div",{className:"progress-fill"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Bouncing Balls"}),i.jsxs("div",{className:"bouncing-balls",children:[i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Rotating Square"}),i.jsx("div",{className:"rotating-square"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Wave Loader"}),i.jsxs("div",{className:"wave-loader",children:[i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Orbit Spinner"}),i.jsxs("div",{className:"orbit-spinner",children:[i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Skeleton Loading"}),i.jsxs("div",{className:"skeleton-loader",children:[i.jsx("div",{className:"skeleton-line"}),i.jsx("div",{className:"skeleton-line short"}),i.jsx("div",{className:"skeleton-line"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Circular Progress"}),i.jsx("div",{className:"circular-progress",children:i.jsxs("svg",{viewBox:"0 0 36 36",children:[i.jsx("path",{className:"circle-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),i.jsx("path",{className:"circle",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]})})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.spinner-ring {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(78, 205, 196, 0.3);
  border-top: 4px solid #4ecdc4;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

.loading-dots {
  display: flex;
  gap: 5px;
  justify-content: center;
}

.loading-dots div {
  width: 8px;
  height: 8px;
  background: #4ecdc4;
  border-radius: 50%;
  animation: dotPulse 1.4s ease-in-out infinite;
}

.loading-dots div:nth-child(2) { animation-delay: 0.2s; }
.loading-dots div:nth-child(3) { animation-delay: 0.4s; }

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(78, 205, 196, 0.3);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ecdc4, #ff6b6b);
  border-radius: 4px;
  animation: progressFill 2s ease-in-out infinite;
}

.bouncing-balls {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: end;
  height: 40px;
}

.bouncing-balls div {
  width: 10px;
  height: 10px;
  background: #ff6b6b;
  border-radius: 50%;
  animation: bounce 0.6s ease-in-out infinite alternate;
}

.bouncing-balls div:nth-child(2) { animation-delay: 0.2s; }
.bouncing-balls div:nth-child(3) { animation-delay: 0.4s; }

.rotating-square {
  width: 30px;
  height: 30px;
  background: #4ecdc4;
  margin: 0 auto;
  animation: rotateSquare 1.2s ease-in-out infinite;
}

.wave-loader {
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: end;
  height: 40px;
}

.wave-loader div {
  width: 4px;
  background: #ff6b6b;
  animation: waveLoad 1s ease-in-out infinite;
}

.wave-loader div:nth-child(1) { height: 20px; animation-delay: 0s; }
.wave-loader div:nth-child(2) { height: 15px; animation-delay: 0.1s; }
.wave-loader div:nth-child(3) { height: 25px; animation-delay: 0.2s; }
.wave-loader div:nth-child(4) { height: 15px; animation-delay: 0.3s; }
.wave-loader div:nth-child(5) { height: 20px; animation-delay: 0.4s; }

.orbit-spinner {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto;
}

.orbit-spinner div {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #4ecdc4;
  border-radius: 50%;
  animation: orbit 2s linear infinite;
}

.orbit-spinner div:nth-child(1) { animation-delay: 0s; }
.orbit-spinner div:nth-child(2) { animation-delay: 0.66s; }
.orbit-spinner div:nth-child(3) { animation-delay: 1.33s; }

.skeleton-loader {
  width: 100%;
}

.skeleton-line {
  height: 12px;
  background: linear-gradient(90deg, 
    rgba(78, 205, 196, 0.3) 0%, 
    rgba(78, 205, 196, 0.5) 50%, 
    rgba(78, 205, 196, 0.3) 100%);
  border-radius: 4px;
  margin-bottom: 8px;
  animation: skeletonWave 1.5s ease-in-out infinite;
}

.skeleton-line.short {
  width: 60%;
}

.circular-progress {
  width: 40px;
  height: 40px;
  margin: 0 auto;
}

.circular-progress svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.circle-bg {
  fill: none;
  stroke: rgba(78, 205, 196, 0.3);
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke: #4ecdc4;
  stroke-width: 3.8;
  stroke-linecap: round;
  stroke-dasharray: 75, 100;
  animation: circularProgress 2s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes dotPulse {
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

@keyframes progressFill {
  0% { width: 0%; }
  50% { width: 70%; }
  100% { width: 100%; }
}

@keyframes bounce {
  to { 
    height: 30px; 
    transform: translateY(-20px); 
  }
}

@keyframes rotateSquare {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(0.8); }
  100% { transform: rotate(360deg) scale(1); }
}

@keyframes waveLoad {
  0%, 40%, 100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1); }
}

@keyframes orbit {
  0% { 
    transform: rotate(0deg) translateX(20px) rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg) translateX(20px) rotate(-360deg); 
  }
}

@keyframes skeletonWave {
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
}

@keyframes circularProgress {
  0% { stroke-dasharray: 0, 100; }
  100% { stroke-dasharray: 75, 100; }
}`})]})]})},Sx=()=>{const[r,d]=A.useState("rainbow");return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Text Effects Animation"}),i.jsx("p",{children:"다양한 텍스트 애니메이션 효과를 보여줍니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:["rainbow","gradient","neon","glitch"].map(f=>i.jsx("button",{className:`demo-button ${r===f?"active":""}`,onClick:()=>d(f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`text-effect text-${r}`,"data-text":"AMAZING TEXT",children:"AMAZING TEXT"})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Text Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Typing Effect"}),i.jsx("div",{className:"text-typing",children:"Hello World!"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Wave Text"}),i.jsxs("div",{className:"text-wave-effect",children:[i.jsx("span",{children:"W"}),i.jsx("span",{children:"A"}),i.jsx("span",{children:"V"}),i.jsx("span",{children:"E"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Glowing Text"}),i.jsx("div",{className:"text-glow",children:"GLOW"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"3D Text"}),i.jsx("div",{className:"text-3d",children:"3D"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Flickering"}),i.jsx("div",{className:"text-flicker",children:"FLICKER"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Bounce Letters"}),i.jsxs("div",{className:"text-bounce",children:[i.jsx("span",{children:"B"}),i.jsx("span",{children:"O"}),i.jsx("span",{children:"U"}),i.jsx("span",{children:"N"}),i.jsx("span",{children:"C"}),i.jsx("span",{children:"E"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Matrix Effect"}),i.jsx("div",{className:"text-matrix",children:"MATRIX"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Gradient Flow"}),i.jsx("div",{className:"text-gradient-flow",children:"GRADIENT"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Split Color"}),i.jsx("div",{className:"text-split-color",children:"SPLIT"})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.text-rainbow {
  background: linear-gradient(45deg, 
    #ff0000, #ff8000, #ffff00, #80ff00, 
    #00ff80, #0080ff, #8000ff, #ff0080);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: rainbowText 3s ease-in-out infinite;
}

.text-gradient {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 2s ease-in-out infinite;
}

.text-neon {
  color: #00ff41;
  text-shadow: 
    0 0 5px #00ff41,
    0 0 10px #00ff41,
    0 0 15px #00ff41,
    0 0 20px #00ff41;
  animation: neonPulse 1.5s ease-in-out infinite;
}

.text-glitch {
  position: relative;
  color: #fff;
  animation: glitchText 2s infinite;
}

.text-glitch::before,
.text-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.text-glitch::before {
  animation: glitchTop 2s infinite;
  color: #ff0000;
  z-index: -1;
}

.text-glitch::after {
  animation: glitchBottom 1.5s infinite;
  color: #00ffff;
  z-index: -2;
}

.text-typing {
  font-family: 'Courier New', monospace;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  border-right: 2px solid #4ecdc4;
  animation: typing 3s steps(12) infinite,
             blinkCursor 1s step-end infinite;
}

.text-wave-effect {
  display: inline-flex;
}

.text-wave-effect span {
  display: inline-block;
  animation: textWaveEffect 2s ease-in-out infinite;
  color: #4ecdc4;
  font-weight: bold;
}

.text-wave-effect span:nth-child(2) { animation-delay: 0.1s; }
.text-wave-effect span:nth-child(3) { animation-delay: 0.2s; }
.text-wave-effect span:nth-child(4) { animation-delay: 0.3s; }

.text-glow {
  color: #fff;
  text-shadow: 0 0 10px #4ecdc4, 0 0 20px #4ecdc4, 0 0 30px #4ecdc4;
  animation: textGlowPulse 2s ease-in-out infinite;
}

.text-3d {
  color: #4ecdc4;
  text-shadow: 
    1px 1px 0 #ff6b6b,
    2px 2px 0 #ff6b6b,
    3px 3px 0 #ff6b6b,
    4px 4px 0 #ff6b6b,
    5px 5px 10px rgba(0,0,0,0.3);
  animation: text3DMove 3s ease-in-out infinite;
}

.text-flicker {
  animation: flicker 1.5s infinite;
}

.text-bounce {
  display: inline-flex;
}

.text-bounce span {
  display: inline-block;
  animation: bounceLetters 1s ease-in-out infinite;
  color: #ff6b6b;
  font-weight: bold;
}

.text-bounce span:nth-child(2) { animation-delay: 0.1s; }
.text-bounce span:nth-child(3) { animation-delay: 0.2s; }
.text-bounce span:nth-child(4) { animation-delay: 0.3s; }
.text-bounce span:nth-child(5) { animation-delay: 0.4s; }
.text-bounce span:nth-child(6) { animation-delay: 0.5s; }

.text-matrix {
  color: #00ff41;
  font-family: 'Courier New', monospace;
  animation: matrixEffect 2s infinite;
  text-shadow: 0 0 5px #00ff41;
}

.text-gradient-flow {
  background: linear-gradient(90deg, 
    #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientFlow 3s linear infinite;
}

.text-split-color {
  background: linear-gradient(90deg, 
    #ff6b6b 50%, #4ecdc4 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: splitColorShift 2s ease-in-out infinite;
}

@keyframes rainbowText {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes neonPulse {
  0%, 100% { 
    text-shadow: 
      0 0 5px #00ff41,
      0 0 10px #00ff41,
      0 0 15px #00ff41;
  }
  50% { 
    text-shadow: 
      0 0 10px #00ff41,
      0 0 20px #00ff41,
      0 0 30px #00ff41,
      0 0 40px #00ff41;
  }
}

@keyframes glitchText {
  0%, 99% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitchTop {
  0%, 99% { transform: translate(0); }
  20% { transform: translate(-2px, -2px); }
  40% { transform: translate(-2px, 2px); }
  60% { transform: translate(2px, -2px); }
  80% { transform: translate(2px, 2px); }
}

@keyframes glitchBottom {
  0%, 99% { transform: translate(0); }
  20% { transform: translate(2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, 2px); }
  80% { transform: translate(-2px, -2px); }
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes textWaveEffect {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes textGlowPulse {
  0%, 100% { 
    text-shadow: 0 0 10px #4ecdc4, 0 0 20px #4ecdc4;
  }
  50% { 
    text-shadow: 0 0 20px #4ecdc4, 0 0 30px #4ecdc4, 0 0 40px #4ecdc4;
  }
}

@keyframes text3DMove {
  0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(10deg) rotateY(10deg); }
  50% { transform: rotateX(0deg) rotateY(20deg); }
  75% { transform: rotateX(-10deg) rotateY(10deg); }
}

@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55% { opacity: 0.2; }
}

@keyframes bounceLetters {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes matrixEffect {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}

@keyframes splitColorShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 200% 50%; }
}`})]})]})},wx=()=>{const[r,d]=A.useState("digital");return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Glitch Animation"}),i.jsx("p",{children:"디지털 글리치와 사이버펑크 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:["digital","rgb","static","corrupt"].map(f=>i.jsxs("button",{className:`demo-button ${r===f?"active":""}`,onClick:()=>d(f),children:[f.charAt(0).toUpperCase()+f.slice(1)," Glitch"]},f))}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`glitch-element glitch-${r}`,"data-text":"GLITCH",children:"GLITCH"})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Glitch Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Text Glitch"}),i.jsx("div",{className:"glitch-text","data-text":"ERROR",children:"ERROR"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"RGB Split"}),i.jsx("div",{className:"glitch-rgb","data-text":"RGB",children:"RGB"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Scanlines"}),i.jsx("div",{className:"glitch-scanlines",children:i.jsx("div",{className:"glitch-content",children:"SCAN"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Data Corruption"}),i.jsx("div",{className:"glitch-corrupt","data-text":"DATA",children:"DATA"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Screen Tear"}),i.jsx("div",{className:"glitch-tear",children:"TEAR"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Digital Noise"}),i.jsx("div",{className:"glitch-noise",children:"NOISE"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Matrix Glitch"}),i.jsx("div",{className:"glitch-matrix",children:"MATRIX"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Cyber Punk"}),i.jsx("div",{className:"glitch-cyber","data-text":"CYBER",children:"CYBER"})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"VHS Distortion"}),i.jsx("div",{className:"glitch-vhs",children:"VHS"})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`.glitch-digital {
  position: relative;
  color: #fff;
  animation: digitalGlitch 2s infinite;
}

.glitch-digital::before,
.glitch-digital::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-digital::before {
  animation: glitchTop 1s infinite;
  color: #ff0000;
  z-index: -1;
}

.glitch-digital::after {
  animation: glitchBottom 1.5s infinite;
  color: #00ffff;
  z-index: -2;
}

.glitch-rgb {
  position: relative;
  color: #fff;
  animation: rgbGlitch 3s infinite;
}

.glitch-rgb::before,
.glitch-rgb::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-rgb::before {
  color: #ff0000;
  animation: rgbShift1 2s infinite;
  mix-blend-mode: multiply;
}

.glitch-rgb::after {
  color: #0000ff;
  animation: rgbShift2 2.5s infinite;
  mix-blend-mode: multiply;
}

.glitch-static {
  position: relative;
  animation: staticNoise 0.5s infinite;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
}

.glitch-corrupt {
  position: relative;
  animation: dataCorrupt 1.5s infinite;
}

.glitch-corrupt::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #ff00ff;
  animation: corruptShift 1s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
}

.glitch-text {
  position: relative;
  color: #00ff41;
  font-family: 'Courier New', monospace;
  animation: textGlitch 2s infinite;
}

.glitch-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #ff0041;
  animation: textShake 0.5s infinite;
}

.glitch-scanlines {
  position: relative;
  overflow: hidden;
}

.glitch-scanlines::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255,255,255,0.1) 2px,
    rgba(255,255,255,0.1) 4px
  );
  animation: scanlines 2s infinite;
}

.glitch-tear {
  position: relative;
  animation: screenTear 1s infinite;
  background: linear-gradient(90deg, #ff0000, #00ff00, #0000ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glitch-noise {
  position: relative;
  animation: digitalNoise 0.1s infinite;
  color: #fff;
  text-shadow: 0 0 10px #00ff41;
}

.glitch-matrix {
  color: #00ff41;
  font-family: 'Courier New', monospace;
  animation: matrixGlitch 1.5s infinite;
  text-shadow: 0 0 5px #00ff41;
}

.glitch-cyber {
  position: relative;
  color: #ff006e;
  text-shadow: 0 0 10px #ff006e;
  animation: cyberGlitch 2s infinite;
}

.glitch-cyber::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #00ffff;
  animation: cyberShift 1.5s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}

.glitch-vhs {
  position: relative;
  animation: vhsDistortion 3s infinite;
  color: #fff;
  background: linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes digitalGlitch {
  0%, 99% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitchTop {
  0%, 99% { transform: translate(0); }
  20% { transform: translate(-2px, -2px); }
  40% { transform: translate(-2px, 2px); }
  60% { transform: translate(2px, -2px); }
  80% { transform: translate(2px, 2px); }
}

@keyframes glitchBottom {
  0%, 99% { transform: translate(0); }
  20% { transform: translate(2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, 2px); }
  80% { transform: translate(-2px, -2px); }
}

@keyframes rgbGlitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(1px, -1px); }
  60% { transform: translate(-1px, -1px); }
  80% { transform: translate(1px, 1px); }
}

@keyframes rgbShift1 {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

@keyframes rgbShift2 {
  0%, 100% { transform: translateX(0); }
  33% { transform: translateX(2px); }
  66% { transform: translateX(-2px); }
}

@keyframes staticNoise {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@keyframes dataCorrupt {
  0%, 90%, 100% { opacity: 1; }
  92%, 98% { opacity: 0.7; }
}

@keyframes corruptShift {
  0%, 100% { transform: translate(0); clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); }
  25% { transform: translate(-2px, 1px); clip-path: polygon(0 20%, 100% 20%, 100% 60%, 0 60%); }
  50% { transform: translate(1px, -1px); clip-path: polygon(0 40%, 100% 40%, 100% 80%, 0 80%); }
  75% { transform: translate(-1px, 2px); clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%); }
}

@keyframes textGlitch {
  0%, 99% { transform: translate(0); }
  10% { transform: translate(-1px, 1px); }
  20% { transform: translate(1px, -1px); }
  30% { transform: translate(-1px, -1px); }
  40% { transform: translate(1px, 1px); }
}

@keyframes textShake {
  0%, 100% { transform: translate(0); }
  25% { transform: translate(-1px, 0); }
  75% { transform: translate(1px, 0); }
}

@keyframes scanlines {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes screenTear {
  0%, 100% { transform: translateX(0) skew(0deg); }
  25% { transform: translateX(2px) skew(-2deg); }
  50% { transform: translateX(-1px) skew(1deg); }
  75% { transform: translateX(1px) skew(-1deg); }
}

@keyframes digitalNoise {
  0%, 100% { filter: brightness(1) contrast(1); }
  25% { filter: brightness(1.2) contrast(1.5); }
  50% { filter: brightness(0.8) contrast(1.2); }
  75% { filter: brightness(1.1) contrast(0.9); }
}

@keyframes matrixGlitch {
  0%, 100% { opacity: 1; transform: scale(1); }
  20% { opacity: 0.8; transform: scale(1.05); }
  40% { opacity: 0.9; transform: scale(0.95); }
  60% { opacity: 0.7; transform: scale(1.02); }
  80% { opacity: 1; transform: scale(0.98); }
}

@keyframes cyberGlitch {
  0%, 100% { 
    text-shadow: 0 0 10px #ff006e;
    filter: hue-rotate(0deg);
  }
  25% { 
    text-shadow: 2px 0 10px #ff006e, -2px 0 10px #00ffff;
    filter: hue-rotate(90deg);
  }
  50% { 
    text-shadow: 0 0 20px #ff006e;
    filter: hue-rotate(180deg);
  }
  75% { 
    text-shadow: -1px 0 10px #ff006e, 1px 0 10px #00ffff;
    filter: hue-rotate(270deg);
  }
}

@keyframes cyberShift {
  0%, 100% { transform: translateX(0); }
  33% { transform: translateX(-2px); }
  66% { transform: translateX(2px); }
}

@keyframes vhsDistortion {
  0%, 100% { 
    filter: hue-rotate(0deg) saturate(1);
    transform: scale(1);
  }
  25% { 
    filter: hue-rotate(90deg) saturate(1.5);
    transform: scale(1.02) translateX(1px);
  }
  50% { 
    filter: hue-rotate(180deg) saturate(0.8);
    transform: scale(0.98) translateX(-1px);
  }
  75% { 
    filter: hue-rotate(270deg) saturate(1.2);
    transform: scale(1.01) translateX(0.5px);
  }
}`})]})]})},Ex=()=>{const[r,d]=A.useState("cube");return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"3D Transform Animation"}),i.jsx("p",{children:"3차원 변환과 원근감을 활용한 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:["cube","card","pyramid","sphere"].map(f=>i.jsx("button",{className:`demo-button ${r===f?"active":""}`,onClick:()=>d(f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`transform3d-container transform3d-${r}`,children:i.jsxs("div",{className:"transform3d-element",children:[i.jsx("div",{className:"face front",children:"Front"}),i.jsx("div",{className:"face back",children:"Back"}),i.jsx("div",{className:"face right",children:"Right"}),i.jsx("div",{className:"face left",children:"Left"}),i.jsx("div",{className:"face top",children:"Top"}),i.jsx("div",{className:"face bottom",children:"Bottom"})]})})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different 3D Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Rotating Cube"}),i.jsx("div",{className:"cube-container",children:i.jsxs("div",{className:"cube rotating-cube",children:[i.jsx("div",{className:"cube-face front",children:"1"}),i.jsx("div",{className:"cube-face back",children:"2"}),i.jsx("div",{className:"cube-face right",children:"3"}),i.jsx("div",{className:"cube-face left",children:"4"}),i.jsx("div",{className:"cube-face top",children:"5"}),i.jsx("div",{className:"cube-face bottom",children:"6"})]})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Card Flip"}),i.jsxs("div",{className:"card-3d",children:[i.jsx("div",{className:"card-face card-front",children:"💳"}),i.jsx("div",{className:"card-face card-back",children:"🔒"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Perspective Box"}),i.jsx("div",{className:"perspective-box",children:i.jsx("div",{className:"box-face",children:"📦"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Floating Card"}),i.jsx("div",{className:"floating-card",children:i.jsx("div",{className:"card-content",children:"Float"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"3D Button"}),i.jsx("div",{className:"button-3d",children:i.jsx("span",{children:"CLICK"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Isometric Box"}),i.jsxs("div",{className:"isometric-box",children:[i.jsx("div",{className:"iso-face iso-front"}),i.jsx("div",{className:"iso-face iso-right"}),i.jsx("div",{className:"iso-face iso-top"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Prism Effect"}),i.jsx("div",{className:"prism-container",children:i.jsx("div",{className:"prism",children:"🔺"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Layered Depth"}),i.jsxs("div",{className:"layered-depth",children:[i.jsx("div",{className:"layer layer-1",children:"1"}),i.jsx("div",{className:"layer layer-2",children:"2"}),i.jsx("div",{className:"layer layer-3",children:"3"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Sphere Rotation"}),i.jsx("div",{className:"sphere-container",children:i.jsx("div",{className:"sphere",children:"🌍"})})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`/* 3D Container Setup */
.transform3d-container {
  perspective: 1000px;
  width: 120px;
  height: 120px;
  margin: 0 auto;
}

.transform3d-element {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate3D 6s linear infinite;
}

.face {
  position: absolute;
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: 2px solid rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  opacity: 0.9;
}

.front { transform: rotateY(0deg) translateZ(60px); }
.back { transform: rotateY(180deg) translateZ(60px); }
.right { transform: rotateY(90deg) translateZ(60px); }
.left { transform: rotateY(-90deg) translateZ(60px); }
.top { transform: rotateX(90deg) translateZ(60px); }
.bottom { transform: rotateX(-90deg) translateZ(60px); }

/* Cube Animation */
.cube-container {
  perspective: 800px;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.cube {
  position: relative;
  width: 80px;
  height: 80px;
  transform-style: preserve-3d;
}

.rotating-cube {
  animation: cubeRotate 4s linear infinite;
}

.cube-face {
  position: absolute;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  border: 1px solid rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}

.cube-face.front { transform: rotateY(0deg) translateZ(40px); }
.cube-face.back { transform: rotateY(180deg) translateZ(40px); }
.cube-face.right { transform: rotateY(90deg) translateZ(40px); }
.cube-face.left { transform: rotateY(-90deg) translateZ(40px); }
.cube-face.top { transform: rotateX(90deg) translateZ(40px); }
.cube-face.bottom { transform: rotateX(-90deg) translateZ(40px); }

/* Card 3D Flip */
.card-3d {
  perspective: 600px;
  width: 80px;
  height: 60px;
  margin: 0 auto;
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: transform 0.6s;
}

.card-3d {
  animation: cardFlip3D 3s ease-in-out infinite;
}

.card-back {
  transform: rotateY(180deg);
}

/* Perspective Box */
.perspective-box {
  perspective: 500px;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.box-face {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transform-origin: center;
  animation: perspectiveMove 3s ease-in-out infinite;
}

/* Floating Card */
.floating-card {
  perspective: 1000px;
  width: 80px;
  height: 60px;
  margin: 0 auto;
}

.card-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  transform-origin: center;
  animation: floatingCard 4s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

/* 3D Button */
.button-3d {
  perspective: 600px;
  width: 80px;
  height: 40px;
  margin: 0 auto;
  cursor: pointer;
}

.button-3d span {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  transition: transform 0.2s;
  animation: button3DPulse 2s ease-in-out infinite;
}

.button-3d:hover span {
  transform: translateZ(10px) rotateX(-10deg);
}

/* Isometric Box */
.isometric-box {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 20px auto;
}

.iso-face {
  position: absolute;
  width: 60px;
  height: 60px;
}

.iso-front {
  background: #4ecdc4;
  transform: rotateX(0deg) rotateY(0deg);
}

.iso-right {
  background: #45b7d1;
  transform: rotateY(90deg) translateZ(60px);
  transform-origin: right;
}

.iso-top {
  background: #ff6b6b;
  transform: rotateX(90deg) translateZ(60px);
  transform-origin: top;
}

.isometric-box {
  animation: isoRotate 5s linear infinite;
}

/* Prism Effect */
.prism-container {
  perspective: 800px;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.prism {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  animation: prismRotate 3s ease-in-out infinite;
  transform-origin: center;
}

/* Layered Depth */
.layered-depth {
  perspective: 1000px;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.layer {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}

.layer-1 {
  background: #ff6b6b;
  transform: translateZ(0px);
  animation: layerFloat1 3s ease-in-out infinite;
}

.layer-2 {
  background: #4ecdc4;
  transform: translateZ(20px);
  animation: layerFloat2 3s ease-in-out infinite 0.5s;
}

.layer-3 {
  background: #45b7d1;
  transform: translateZ(40px);
  animation: layerFloat3 3s ease-in-out infinite 1s;
}

/* Sphere Rotation */
.sphere-container {
  perspective: 800px;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.sphere {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #4ecdc4, #45b7d1, #2c3e50);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  animation: sphereRotate 4s linear infinite;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

/* Keyframes */
@keyframes rotate3D {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(90deg) rotateY(0deg); }
  50% { transform: rotateX(90deg) rotateY(90deg); }
  75% { transform: rotateX(0deg) rotateY(90deg); }
  100% { transform: rotateX(0deg) rotateY(360deg); }
}

@keyframes cubeRotate {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

@keyframes cardFlip3D {
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
}

@keyframes perspectiveMove {
  0%, 100% { transform: rotateX(0deg) rotateY(0deg) translateZ(0px); }
  25% { transform: rotateX(15deg) rotateY(15deg) translateZ(20px); }
  50% { transform: rotateX(0deg) rotateY(30deg) translateZ(0px); }
  75% { transform: rotateX(-15deg) rotateY(15deg) translateZ(20px); }
}

@keyframes floatingCard {
  0%, 100% { 
    transform: rotateX(0deg) rotateY(0deg) translateZ(0px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
  25% { 
    transform: rotateX(10deg) rotateY(10deg) translateZ(30px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.4);
  }
  50% { 
    transform: rotateX(0deg) rotateY(20deg) translateZ(10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.35);
  }
  75% { 
    transform: rotateX(-10deg) rotateY(10deg) translateZ(30px);
    box-shadow: 0 25px 60px rgba(0,0,0,0.5);
  }
}

@keyframes button3DPulse {
  0%, 100% { transform: translateZ(0px) rotateX(0deg); }
  50% { transform: translateZ(5px) rotateX(-5deg); }
}

@keyframes isoRotate {
  0%, 100% { transform: rotateX(60deg) rotateY(0deg); }
  25% { transform: rotateX(60deg) rotateY(90deg); }
  50% { transform: rotateX(60deg) rotateY(180deg); }
  75% { transform: rotateX(60deg) rotateY(270deg); }
}

@keyframes prismRotate {
  0%, 100% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
  33% { transform: rotateX(120deg) rotateY(120deg) rotateZ(0deg); }
  66% { transform: rotateX(240deg) rotateY(240deg) rotateZ(0deg); }
}

@keyframes layerFloat1 {
  0%, 100% { transform: translateZ(0px) rotateY(0deg); }
  50% { transform: translateZ(10px) rotateY(180deg); }
}

@keyframes layerFloat2 {
  0%, 100% { transform: translateZ(20px) rotateX(0deg); }
  50% { transform: translateZ(30px) rotateX(180deg); }
}

@keyframes layerFloat3 {
  0%, 100% { transform: translateZ(40px) rotateZ(0deg); }
  50% { transform: translateZ(50px) rotateZ(180deg); }
}

@keyframes sphereRotate {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}`})]})]})},Tx=()=>{const[r,d]=A.useState("grow");return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Hover Effects Animation"}),i.jsx("p",{children:"마우스 호버 시 발생하는 인터랙티브 애니메이션 효과들입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:["grow","tilt","glow","slide"].map(f=>i.jsx("button",{className:`demo-button ${r===f?"active":""}`,onClick:()=>d(f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`hover-element hover-${r}`,children:"Hover Me!"})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Hover Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Scale Up"}),i.jsx("div",{className:"hover-card hover-scale",children:i.jsx("span",{children:"Scale"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Lift & Shadow"}),i.jsx("div",{className:"hover-card hover-lift",children:i.jsx("span",{children:"Lift"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Tilt 3D"}),i.jsx("div",{className:"hover-card hover-tilt-3d",children:i.jsx("span",{children:"Tilt"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Glow Border"}),i.jsx("div",{className:"hover-card hover-glow-border",children:i.jsx("span",{children:"Glow"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Slide Overlay"}),i.jsxs("div",{className:"hover-card hover-slide-overlay",children:[i.jsx("span",{children:"Slide"}),i.jsx("div",{className:"overlay"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Flip Card"}),i.jsx("div",{className:"hover-flip-container",children:i.jsxs("div",{className:"hover-flip-card",children:[i.jsx("div",{className:"flip-front",children:"Front"}),i.jsx("div",{className:"flip-back",children:"Back"})]})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Zoom In"}),i.jsx("div",{className:"hover-card hover-zoom",children:i.jsx("span",{children:"Zoom"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Rotate"}),i.jsx("div",{className:"hover-card hover-rotate",children:i.jsx("span",{children:"Rotate"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Pulse"}),i.jsx("div",{className:"hover-card hover-pulse",children:i.jsx("span",{children:"Pulse"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Skew"}),i.jsx("div",{className:"hover-card hover-skew",children:i.jsx("span",{children:"Skew"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Color Shift"}),i.jsx("div",{className:"hover-card hover-color-shift",children:i.jsx("span",{children:"Color"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Border Expand"}),i.jsx("div",{className:"hover-card hover-border-expand",children:i.jsx("span",{children:"Border"})})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`/* Basic Hover Effects */
.hover-grow {
  transition: transform 0.3s ease;
}

.hover-grow:hover {
  transform: scale(1.1);
}

.hover-tilt {
  transition: transform 0.3s ease;
}

.hover-tilt:hover {
  transform: rotateZ(-5deg);
}

.hover-glow {
  transition: box-shadow 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(78, 205, 196, 0.6);
}

.hover-slide {
  transition: transform 0.3s ease;
}

.hover-slide:hover {
  transform: translateX(10px);
}

/* Advanced Hover Effects */
.hover-card {
  width: 80px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.hover-scale:hover {
  transform: scale(1.15);
}

.hover-lift {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.3);
}

.hover-tilt-3d {
  perspective: 1000px;
}

.hover-tilt-3d:hover {
  transform: rotateX(10deg) rotateY(-10deg);
}

.hover-glow-border {
  border: 2px solid transparent;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4) padding-box,
              linear-gradient(45deg, #ff6b6b, #4ecdc4) border-box;
}

.hover-glow-border:hover {
  box-shadow: 0 0 15px rgba(78, 205, 196, 0.8);
  animation: borderGlow 1s ease-in-out;
}

.hover-slide-overlay {
  position: relative;
}

.hover-slide-overlay .overlay {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.6s ease;
}

.hover-slide-overlay:hover .overlay {
  left: 100%;
}

/* Flip Card Effect */
.hover-flip-container {
  perspective: 1000px;
  width: 80px;
  height: 60px;
  margin: 0 auto;
}

.hover-flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.hover-flip-container:hover .hover-flip-card {
  transform: rotateY(180deg);
}

.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.flip-back {
  transform: rotateY(180deg);
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
}

.hover-zoom:hover {
  transform: scale(1.2);
}

.hover-rotate:hover {
  transform: rotate(180deg);
}

.hover-pulse:hover {
  animation: hoverPulse 0.6s ease-in-out;
}

.hover-skew:hover {
  transform: skew(-10deg, 5deg);
}

.hover-color-shift {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  transition: background 0.5s ease;
}

.hover-color-shift:hover {
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
}

.hover-border-expand {
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.hover-border-expand:hover {
  border-color: #4ecdc4;
  transform: scale(1.05);
}

/* Button Hover Effects */
.hover-button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.hover-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.6s ease;
}

.hover-button:hover::before {
  left: 100%;
}

.hover-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

/* Link Hover Effects */
.hover-link {
  color: #4ecdc4;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.hover-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4ecdc4;
  transition: width 0.3s ease;
}

.hover-link:hover {
  color: #ff6b6b;
}

.hover-link:hover::after {
  width: 100%;
}

/* Image Hover Effects */
.hover-image {
  width: 80px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.hover-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hover-image:hover::before {
  opacity: 1;
}

.hover-image:hover {
  transform: scale(1.05);
}

@keyframes borderGlow {
  0%, 100% { box-shadow: 0 0 15px rgba(78, 205, 196, 0.8); }
  50% { box-shadow: 0 0 25px rgba(78, 205, 196, 1); }
}

@keyframes hoverPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hover-card {
    width: 60px;
    height: 45px;
    font-size: 0.8rem;
  }
  
  .hover-flip-container {
    width: 60px;
    height: 45px;
  }
}`})]})]})},Ax=()=>{const[r,d]=A.useState("circle-square");return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Morph Animation"}),i.jsx("p",{children:"도형과 아이콘의 변형 애니메이션을 보여줍니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:["circle-square","star-heart","menu-close","play-pause"].map(f=>i.jsx("button",{className:`demo-button ${r===f?"active":""}`,onClick:()=>d(f),children:f.split("-").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" → ")},f))}),i.jsx("div",{className:"demo-area",children:i.jsx("div",{className:`morph-container morph-${r}`,children:i.jsx("div",{className:"morph-shape"})})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Morph Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Circle to Square"}),i.jsx("div",{className:"morph-example circle-to-square",children:i.jsx("div",{className:"morph-shape"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Star Morph"}),i.jsx("div",{className:"morph-example star-morph",children:i.jsx("div",{className:"star-shape",children:"★"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Heart Beat"}),i.jsx("div",{className:"morph-example heart-morph",children:i.jsx("div",{className:"heart-shape",children:"❤️"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Loading Dots"}),i.jsxs("div",{className:"morph-example loading-morph",children:[i.jsx("div",{className:"dot"}),i.jsx("div",{className:"dot"}),i.jsx("div",{className:"dot"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Button Morph"}),i.jsx("div",{className:"morph-button",children:i.jsx("span",{children:"Click Me"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Icon Transition"}),i.jsx("div",{className:"icon-morph",children:i.jsx("div",{className:"icon-shape",children:"☀️"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Text Morph"}),i.jsx("div",{className:"text-morph",children:i.jsx("span",{children:"HELLO"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Blob Morph"}),i.jsx("div",{className:"blob-morph",children:i.jsx("div",{className:"blob"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Arrow Rotate"}),i.jsx("div",{className:"arrow-morph",children:i.jsx("div",{className:"arrow",children:"→"})})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`/* Basic Morph Shapes */
.morph-container {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.morph-shape {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.morph-circle-square .morph-shape {
  border-radius: 50%;
  animation: circleToSquare 3s ease-in-out infinite;
}

.morph-star-heart .morph-shape {
  background: none;
  position: relative;
  animation: starToHeart 3s ease-in-out infinite;
}

.morph-star-heart .morph-shape::before {
  content: "★";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #ff6b6b;
  animation: iconMorph 3s ease-in-out infinite;
}

/* Circle to Square Morph */
.circle-to-square .morph-shape {
  border-radius: 50%;
  animation: morphCircleSquare 2s ease-in-out infinite;
}

.star-morph .star-shape {
  font-size: 2rem;
  animation: starPulse 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart-morph .heart-shape {
  font-size: 2rem;
  animation: heartBeat 1.5s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Loading Dots Morph */
.loading-morph {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.loading-morph .dot {
  width: 12px;
  height: 12px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
  animation: dotMorph 1.5s ease-in-out infinite;
}

.loading-morph .dot:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-morph .dot:nth-child(3) {
  animation-delay: 0.4s;
}

/* Button Morph */
.morph-button {
  padding: 12px 24px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.morph-button:hover {
  border-radius: 8px;
  transform: scale(1.05);
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
}

.morph-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  transition: all 0.6s ease;
  transform: translate(-50%, -50%);
}

.morph-button:hover::before {
  width: 200px;
  height: 200px;
}

/* Icon Morph */
.icon-morph .icon-shape {
  font-size: 2rem;
  animation: iconDayNight 4s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Text Morph */
.text-morph {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4ecdc4;
  position: relative;
  overflow: hidden;
}

.text-morph span {
  display: inline-block;
  animation: textWave 2s ease-in-out infinite;
}

/* Blob Morph */
.blob-morph {
  display: flex;
  align-items: center;
  justify-content: center;
}

.blob {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: blobMorph 3s ease-in-out infinite;
}

/* Arrow Morph */
.arrow-morph .arrow {
  font-size: 2rem;
  color: #4ecdc4;
  animation: arrowRotate 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Keyframes */
@keyframes circleToSquare {
  0%, 100% { border-radius: 50%; }
  50% { border-radius: 0%; }
}

@keyframes starToHeart {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(180deg); }
}

@keyframes iconMorph {
  0%, 100% { content: "★"; }
  50% { content: "❤️"; }
}

@keyframes morphCircleSquare {
  0%, 100% { 
    border-radius: 50%; 
    transform: rotate(0deg);
  }
  25% { 
    border-radius: 25%; 
    transform: rotate(45deg);
  }
  50% { 
    border-radius: 0%; 
    transform: rotate(90deg);
  }
  75% { 
    border-radius: 25%; 
    transform: rotate(135deg);
  }
}

@keyframes starPulse {
  0%, 100% { 
    transform: scale(1) rotate(0deg);
    color: #ff6b6b;
  }
  50% { 
    transform: scale(1.3) rotate(72deg);
    color: #4ecdc4;
  }
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
}

@keyframes dotMorph {
  0%, 100% { 
    transform: scale(1);
    border-radius: 50%;
  }
  50% { 
    transform: scale(1.5);
    border-radius: 0%;
  }
}

@keyframes iconDayNight {
  0%, 100% { 
    content: "☀️";
    transform: rotate(0deg);
  }
  50% { 
    content: "🌙";
    transform: rotate(180deg);
  }
}

@keyframes textWave {
  0%, 100% { 
    transform: translateY(0) scale(1);
    color: #4ecdc4;
  }
  50% { 
    transform: translateY(-10px) scale(1.2);
    color: #ff6b6b;
  }
}

@keyframes blobMorph {
  0%, 100% { 
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transform: rotate(0deg);
  }
  25% { 
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    transform: rotate(90deg);
  }
  50% { 
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    transform: rotate(180deg);
  }
  75% { 
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    transform: rotate(270deg);
  }
}

@keyframes arrowRotate {
  0% { transform: rotate(0deg); content: "→"; }
  25% { transform: rotate(90deg); content: "↓"; }
  50% { transform: rotate(180deg); content: "←"; }
  75% { transform: rotate(270deg); content: "↑"; }
  100% { transform: rotate(360deg); content: "→"; }
}

/* Menu to Close Icon */
.menu-to-close {
  position: relative;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.menu-to-close span {
  position: absolute;
  width: 100%;
  height: 3px;
  background: #4ecdc4;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.menu-to-close span:nth-child(1) { top: 0; }
.menu-to-close span:nth-child(2) { top: 50%; transform: translateY(-50%); }
.menu-to-close span:nth-child(3) { bottom: 0; }

.menu-to-close:hover span:nth-child(1) {
  transform: rotate(45deg);
  top: 50%;
  margin-top: -1.5px;
}

.menu-to-close:hover span:nth-child(2) {
  opacity: 0;
}

.menu-to-close:hover span:nth-child(3) {
  transform: rotate(-45deg);
  bottom: 50%;
  margin-bottom: -1.5px;
}`})]})]})},Rx=()=>{const[r,d]=A.useState("snow"),[f,u]=A.useState(!0),m=A.useRef(null);return A.useEffect(()=>{if(!f)return;const p=m.current;if(!p)return;p.innerHTML="";const w=()=>{const b=r==="explosion"?30:50;for(let x=0;x<b;x++){const N=document.createElement("div");N.className=`particle particle-${r}`;const U=Math.random()*100,H=Math.random()*100,M=Math.random()*2,_=2+Math.random()*3;if(N.style.left=`${U}%`,N.style.top=`${H}%`,N.style.animationDelay=`${M}s`,N.style.animationDuration=`${_}s`,r==="explosion"){const O=x/b*360;N.style.setProperty("--angle",`${O}deg`)}p.appendChild(N)}};w();const R=setInterval(()=>{(r==="fireworks"||r==="explosion")&&w()},3e3);return()=>{clearInterval(R)}},[r,f]),i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Particle Animation"}),i.jsx("p",{children:"다양한 파티클 시스템 효과를 보여주는 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsxs("div",{className:"demo-controls",children:[["snow","rain","stars","fireworks","explosion"].map(p=>i.jsx("button",{className:`demo-button ${r===p?"active":""}`,onClick:()=>d(p),children:p.charAt(0).toUpperCase()+p.slice(1)},p)),i.jsx("button",{className:"demo-button",onClick:()=>u(!f),children:f?"Stop":"Start"})]}),i.jsx("div",{className:"demo-area particle-demo",children:i.jsx("div",{ref:m,className:`particle-container particle-${r} ${f?"active":""}`})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Particle Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Floating Bubbles"}),i.jsxs("div",{className:"particle-example bubbles-effect",children:[i.jsx("div",{className:"bubble"}),i.jsx("div",{className:"bubble"}),i.jsx("div",{className:"bubble"}),i.jsx("div",{className:"bubble"}),i.jsx("div",{className:"bubble"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Twinkling Stars"}),i.jsxs("div",{className:"particle-example stars-effect",children:[i.jsx("div",{className:"star",children:"✨"}),i.jsx("div",{className:"star",children:"⭐"}),i.jsx("div",{className:"star",children:"✨"}),i.jsx("div",{className:"star",children:"⭐"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Confetti"}),i.jsxs("div",{className:"particle-example confetti-effect",children:[i.jsx("div",{className:"confetti"}),i.jsx("div",{className:"confetti"}),i.jsx("div",{className:"confetti"}),i.jsx("div",{className:"confetti"}),i.jsx("div",{className:"confetti"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Energy Orbs"}),i.jsxs("div",{className:"particle-example orbs-effect",children:[i.jsx("div",{className:"orb"}),i.jsx("div",{className:"orb"}),i.jsx("div",{className:"orb"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Dust Particles"}),i.jsxs("div",{className:"particle-example dust-effect",children:[i.jsx("div",{className:"dust"}),i.jsx("div",{className:"dust"}),i.jsx("div",{className:"dust"}),i.jsx("div",{className:"dust"}),i.jsx("div",{className:"dust"}),i.jsx("div",{className:"dust"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Lightning"}),i.jsx("div",{className:"particle-example lightning-effect",children:i.jsx("div",{className:"lightning",children:"⚡"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Leaves Fall"}),i.jsxs("div",{className:"particle-example leaves-effect",children:[i.jsx("div",{className:"leaf",children:"🍃"}),i.jsx("div",{className:"leaf",children:"🍂"}),i.jsx("div",{className:"leaf",children:"🍃"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Fire Sparks"}),i.jsxs("div",{className:"particle-example fire-effect",children:[i.jsx("div",{className:"spark"}),i.jsx("div",{className:"spark"}),i.jsx("div",{className:"spark"}),i.jsx("div",{className:"spark"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Magic Trail"}),i.jsxs("div",{className:"particle-example magic-effect",children:[i.jsx("div",{className:"magic-particle",children:"✨"}),i.jsx("div",{className:"magic-particle",children:"💫"}),i.jsx("div",{className:"magic-particle",children:"⭐"})]})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`/* Particle Container */
.particle-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  border-radius: 12px;
  overflow: hidden;
}

.particle-demo {
  min-height: 250px;
}

/* Basic Particle Styles */
.particle {
  position: absolute;
  pointer-events: none;
  user-select: none;
}

/* Snow Particles */
.particle-snow {
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  animation: snowfall linear infinite;
}

/* Rain Particles */
.particle-rain {
  width: 2px;
  height: 15px;
  background: linear-gradient(transparent, #87ceeb, transparent);
  animation: rainfall linear infinite;
}

/* Star Particles */
.particle-stars {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  animation: starTwinkle ease-in-out infinite;
  box-shadow: 0 0 6px #fff;
}

/* Fireworks Particles */
.particle-fireworks {
  width: 3px;
  height: 3px;
  background: #ff6b6b;
  border-radius: 50%;
  animation: fireworksExplode ease-out forwards;
}

/* Explosion Particles */
.particle-explosion {
  width: 4px;
  height: 4px;
  background: #ff4500;
  border-radius: 50%;
  animation: explode ease-out forwards;
  transform-origin: center;
}

/* Bubble Effects */
.bubbles-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  border-radius: 8px;
  overflow: hidden;
}

.bubble {
  position: absolute;
  bottom: -20px;
  width: 15px;
  height: 15px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  animation: bubbleFloat 4s linear infinite;
}

.bubble:nth-child(1) { left: 10%; animation-delay: 0s; }
.bubble:nth-child(2) { left: 25%; animation-delay: 1s; width: 10px; height: 10px; }
.bubble:nth-child(3) { left: 50%; animation-delay: 2s; width: 20px; height: 20px; }
.bubble:nth-child(4) { left: 75%; animation-delay: 0.5s; width: 12px; height: 12px; }
.bubble:nth-child(5) { left: 90%; animation-delay: 1.5s; width: 8px; height: 8px; }

/* Stars Effect */
.stars-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  border-radius: 8px;
  overflow: hidden;
}

.star {
  position: absolute;
  font-size: 1rem;
  animation: starFloat 3s ease-in-out infinite;
}

.star:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.star:nth-child(2) { top: 60%; left: 70%; animation-delay: 1s; }
.star:nth-child(3) { top: 30%; left: 50%; animation-delay: 2s; }
.star:nth-child(4) { top: 70%; left: 20%; animation-delay: 0.5s; }

/* Confetti Effect */
.confetti-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
  overflow: hidden;
}

.confetti {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ff6b6b;
  animation: confettiFall 3s linear infinite;
}

.confetti:nth-child(1) { left: 20%; background: #ff6b6b; animation-delay: 0s; }
.confetti:nth-child(2) { left: 40%; background: #4ecdc4; animation-delay: 0.5s; }
.confetti:nth-child(3) { left: 60%; background: #45b7d1; animation-delay: 1s; }
.confetti:nth-child(4) { left: 80%; background: #96ceb4; animation-delay: 1.5s; }
.confetti:nth-child(5) { left: 10%; background: #feca57; animation-delay: 2s; }

/* Energy Orbs */
.orbs-effect {
  position: relative;
  height: 80px;
  background: radial-gradient(circle, #1a1a2e, #16213e);
  border-radius: 8px;
  overflow: hidden;
}

.orb {
  position: absolute;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #00d4ff, #0066ff);
  border-radius: 50%;
  animation: orbFloat 4s ease-in-out infinite;
  box-shadow: 0 0 20px #00d4ff;
}

.orb:nth-child(1) { top: 30%; left: 20%; animation-delay: 0s; }
.orb:nth-child(2) { top: 50%; left: 50%; animation-delay: 1.5s; }
.orb:nth-child(3) { top: 20%; left: 80%; animation-delay: 3s; }

/* Dust Particles */
.dust-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #8b5a2b, #a0522d);
  border-radius: 8px;
  overflow: hidden;
}

.dust {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255,255,255,0.6);
  border-radius: 50%;
  animation: dustFloat 6s linear infinite;
}

.dust:nth-child(1) { left: 15%; animation-delay: 0s; }
.dust:nth-child(2) { left: 30%; animation-delay: 1s; }
.dust:nth-child(3) { left: 45%; animation-delay: 2s; }
.dust:nth-child(4) { left: 60%; animation-delay: 3s; }
.dust:nth-child(5) { left: 75%; animation-delay: 4s; }
.dust:nth-child(6) { left: 90%; animation-delay: 5s; }

/* Lightning Effect */
.lightning-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  border-radius: 8px;
  overflow: hidden;
}

.lightning {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #fff;
  animation: lightningFlash 2s ease-in-out infinite;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
}

/* Leaves Effect */
.leaves-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  border-radius: 8px;
  overflow: hidden;
}

.leaf {
  position: absolute;
  font-size: 1.2rem;
  animation: leafFall 4s linear infinite;
}

.leaf:nth-child(1) { left: 20%; animation-delay: 0s; }
.leaf:nth-child(2) { left: 50%; animation-delay: 1s; }
.leaf:nth-child(3) { left: 80%; animation-delay: 2s; }

/* Fire Sparks */
.fire-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #ff4500, #ff6347);
  border-radius: 8px;
  overflow: hidden;
}

.spark {
  position: absolute;
  bottom: 0;
  width: 3px;
  height: 3px;
  background: #ffff00;
  border-radius: 50%;
  animation: sparkFly 2s ease-out infinite;
  box-shadow: 0 0 6px #ffff00;
}

.spark:nth-child(1) { left: 25%; animation-delay: 0s; }
.spark:nth-child(2) { left: 45%; animation-delay: 0.5s; }
.spark:nth-child(3) { left: 65%; animation-delay: 1s; }
.spark:nth-child(4) { left: 85%; animation-delay: 1.5s; }

/* Magic Effect */
.magic-effect {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
  overflow: hidden;
}

.magic-particle {
  position: absolute;
  font-size: 1rem;
  animation: magicFloat 3s ease-in-out infinite;
}

.magic-particle:nth-child(1) { top: 20%; left: 30%; animation-delay: 0s; }
.magic-particle:nth-child(2) { top: 60%; left: 60%; animation-delay: 1s; }
.magic-particle:nth-child(3) { top: 40%; left: 80%; animation-delay: 2s; }

/* Keyframes */
@keyframes snowfall {
  0% { 
    transform: translateY(-20px) translateX(0px);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    transform: translateY(220px) translateX(50px);
    opacity: 0;
  }
}

@keyframes rainfall {
  0% { 
    transform: translateY(-20px);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    transform: translateY(220px);
    opacity: 0;
  }
}

@keyframes starTwinkle {
  0%, 100% { 
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% { 
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes fireworksExplode {
  0% { 
    transform: scale(0);
    opacity: 1;
  }
  50% { 
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% { 
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes explode {
  0% { 
    transform: scale(0) translate(0, 0);
    opacity: 1;
  }
  100% { 
    transform: scale(1) translate(calc(cos(var(--angle)) * 50px), calc(sin(var(--angle)) * 50px));
    opacity: 0;
  }
}

@keyframes bubbleFloat {
  0% { 
    bottom: -20px;
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    bottom: 100px;
    opacity: 0;
  }
}

@keyframes starFloat {
  0%, 100% { 
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  50% { 
    transform: translateY(-10px) scale(1.2);
    opacity: 1;
  }
}

@keyframes confettiFall {
  0% { 
    top: -10px;
    transform: rotate(0deg);
    opacity: 1;
  }
  100% { 
    top: 90px;
    transform: rotate(360deg);
    opacity: 0;
  }
}

@keyframes orbFloat {
  0%, 100% { 
    transform: translateY(0) scale(1);
  }
  50% { 
    transform: translateY(-20px) scale(1.1);
  }
}

@keyframes dustFloat {
  0% { 
    bottom: -5px;
    opacity: 0;
  }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { 
    bottom: 85px;
    opacity: 0;
  }
}

@keyframes lightningFlash {
  0%, 90%, 100% { opacity: 0; }
  5%, 85% { opacity: 1; }
}

@keyframes leafFall {
  0% { 
    top: -20px;
    transform: rotate(0deg);
  }
  100% { 
    top: 100px;
    transform: rotate(360deg);
  }
}

@keyframes sparkFly {
  0% { 
    bottom: 0;
    opacity: 1;
    transform: scale(1);
  }
  100% { 
    bottom: 80px;
    opacity: 0;
    transform: scale(0.5);
  }
}

@keyframes magicFloat {
  0%, 100% { 
    transform: translateY(0) rotate(0deg);
    opacity: 0.7;
  }
  50% { 
    transform: translateY(-15px) rotate(180deg);
    opacity: 1;
  }
}`})]})]})},zx=()=>{const[r,d]=A.useState(0),f=A.useRef(null);return A.useEffect(()=>{const u=()=>{if(f.current){const m=f.current.getBoundingClientRect(),p=Math.max(0,Math.min(1,(window.innerHeight-m.top)/(window.innerHeight+m.height)));d(p*100)}};return window.addEventListener("scroll",u),u(),()=>window.removeEventListener("scroll",u)},[]),i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Parallax Animation"}),i.jsx("p",{children:"스크롤 기반 시차 효과와 깊이감 애니메이션입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:i.jsx("p",{style:{color:"rgba(255,255,255,0.7)",fontSize:"0.9rem"},children:"페이지를 스크롤하여 패럴랙스 효과를 확인하세요"})}),i.jsxs("div",{ref:f,className:"parallax-demo",style:{height:"300px",position:"relative",overflow:"hidden"},children:[i.jsx("div",{className:"parallax-layer parallax-bg",style:{transform:`translateY(${r*.5}px)`},children:"Background"}),i.jsx("div",{className:"parallax-layer parallax-mid",style:{transform:`translateY(${r*.3}px)`},children:"Middle"}),i.jsx("div",{className:"parallax-layer parallax-front",style:{transform:`translateY(${r*.1}px)`},children:"Foreground"})]})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Parallax Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Layered Clouds"}),i.jsxs("div",{className:"parallax-example clouds-parallax",children:[i.jsx("div",{className:"cloud cloud-1",children:"☁️"}),i.jsx("div",{className:"cloud cloud-2",children:"☁️"}),i.jsx("div",{className:"cloud cloud-3",children:"☁️"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Mountain Layers"}),i.jsxs("div",{className:"parallax-example mountain-parallax",children:[i.jsx("div",{className:"mountain mountain-1",children:"🏔️"}),i.jsx("div",{className:"mountain mountain-2",children:"⛰️"}),i.jsx("div",{className:"mountain mountain-3",children:"🗻"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Space Depth"}),i.jsxs("div",{className:"parallax-example space-parallax",children:[i.jsx("div",{className:"star star-1",children:"⭐"}),i.jsx("div",{className:"star star-2",children:"✨"}),i.jsx("div",{className:"star star-3",children:"💫"}),i.jsx("div",{className:"planet",children:"🪐"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Ocean Waves"}),i.jsxs("div",{className:"parallax-example ocean-parallax",children:[i.jsx("div",{className:"wave wave-1",children:"🌊"}),i.jsx("div",{className:"wave wave-2",children:"🌊"}),i.jsx("div",{className:"wave wave-3",children:"🌊"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Forest Depth"}),i.jsxs("div",{className:"parallax-example forest-parallax",children:[i.jsx("div",{className:"tree tree-1",children:"🌲"}),i.jsx("div",{className:"tree tree-2",children:"🌳"}),i.jsx("div",{className:"tree tree-3",children:"🌲"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"City Skyline"}),i.jsxs("div",{className:"parallax-example city-parallax",children:[i.jsx("div",{className:"building building-1",children:"🏢"}),i.jsx("div",{className:"building building-2",children:"🏬"}),i.jsx("div",{className:"building building-3",children:"🏦"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Floating Cards"}),i.jsxs("div",{className:"parallax-example cards-parallax",children:[i.jsx("div",{className:"card card-1",children:"1"}),i.jsx("div",{className:"card card-2",children:"2"}),i.jsx("div",{className:"card card-3",children:"3"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Depth Layers"}),i.jsxs("div",{className:"parallax-example depth-parallax",children:[i.jsx("div",{className:"layer layer-1"}),i.jsx("div",{className:"layer layer-2"}),i.jsx("div",{className:"layer layer-3"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Text Depth"}),i.jsxs("div",{className:"parallax-example text-parallax",children:[i.jsx("div",{className:"text text-1",children:"BACK"}),i.jsx("div",{className:"text text-2",children:"MID"}),i.jsx("div",{className:"text text-3",children:"FRONT"})]})]})]})]}),i.jsx("div",{className:"spacer",style:{height:"100vh",background:"linear-gradient(180deg, #1a1a2e, #16213e)"},children:i.jsxs("div",{style:{padding:"50px",textAlign:"center"},children:[i.jsx("h2",{style:{color:"white"},children:"Scroll to see parallax effects above!"}),i.jsx("p",{style:{color:"rgba(255,255,255,0.7)"},children:"This extra space helps demonstrate the scroll-based parallax animations."})]})}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`/* Parallax Demo */
.parallax-demo {
  position: relative;
  height: 300px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  overflow: hidden;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.parallax-bg {
  background: rgba(255, 107, 107, 0.3);
  z-index: 1;
}

.parallax-mid {
  background: rgba(78, 205, 196, 0.3);
  z-index: 2;
}

.parallax-front {
  background: rgba(69, 183, 209, 0.3);
  z-index: 3;
}

/* Parallax Examples */
.parallax-example {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  border-radius: 8px;
  overflow: hidden;
}

/* Clouds Parallax */
.clouds-parallax {
  background: linear-gradient(135deg, #87ceeb, #4682b4);
}

.cloud {
  position: absolute;
  font-size: 1.2rem;
  animation: cloudFloat ease-in-out infinite;
}

.cloud-1 {
  top: 20%;
  left: 10%;
  animation-duration: 4s;
  animation-delay: 0s;
}

.cloud-2 {
  top: 50%;
  left: 50%;
  animation-duration: 6s;
  animation-delay: 1s;
  font-size: 1rem;
  opacity: 0.7;
}

.cloud-3 {
  top: 30%;
  left: 80%;
  animation-duration: 5s;
  animation-delay: 2s;
  font-size: 0.8rem;
  opacity: 0.5;
}

/* Mountain Parallax */
.mountain-parallax {
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
}

.mountain {
  position: absolute;
  bottom: 0;
  font-size: 1.5rem;
  animation: mountainSway ease-in-out infinite;
}

.mountain-1 {
  left: 10%;
  animation-duration: 6s;
  z-index: 3;
}

.mountain-2 {
  left: 40%;
  animation-duration: 8s;
  animation-delay: 1s;
  opacity: 0.8;
  z-index: 2;
}

.mountain-3 {
  left: 70%;
  animation-duration: 10s;
  animation-delay: 2s;
  opacity: 0.6;
  z-index: 1;
}

/* Space Parallax */
.space-parallax {
  background: linear-gradient(135deg, #2c3e50, #34495e);
}

.star {
  position: absolute;
  animation: starTwinkle ease-in-out infinite;
}

.star-1 {
  top: 20%;
  left: 20%;
  animation-duration: 2s;
}

.star-2 {
  top: 60%;
  left: 70%;
  animation-duration: 3s;
  animation-delay: 1s;
}

.star-3 {
  top: 40%;
  left: 85%;
  animation-duration: 4s;
  animation-delay: 2s;
}

.planet {
  position: absolute;
  top: 30%;
  left: 50%;
  font-size: 2rem;
  animation: planetOrbit 8s linear infinite;
}

/* Ocean Parallax */
.ocean-parallax {
  background: linear-gradient(135deg, #00b4db, #0083b0);
}

.wave {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  animation: waveMotion ease-in-out infinite;
}

.wave-1 {
  animation-duration: 3s;
  z-index: 3;
}

.wave-2 {
  animation-duration: 4s;
  animation-delay: 1s;
  opacity: 0.7;
  z-index: 2;
}

.wave-3 {
  animation-duration: 5s;
  animation-delay: 2s;
  opacity: 0.5;
  z-index: 1;
}

/* Forest Parallax */
.forest-parallax {
  background: linear-gradient(135deg, #56ab2f, #a8e6cf);
}

.tree {
  position: absolute;
  bottom: 0;
  animation: treeSwing ease-in-out infinite;
}

.tree-1 {
  left: 15%;
  animation-duration: 4s;
  z-index: 3;
}

.tree-2 {
  left: 50%;
  animation-duration: 6s;
  animation-delay: 1s;
  opacity: 0.8;
  z-index: 2;
}

.tree-3 {
  left: 80%;
  animation-duration: 5s;
  animation-delay: 2s;
  opacity: 0.6;
  z-index: 1;
}

/* City Parallax */
.city-parallax {
  background: linear-gradient(135deg, #4b79a1, #283e51);
}

.building {
  position: absolute;
  bottom: 0;
  animation: buildingGlow ease-in-out infinite;
}

.building-1 {
  left: 20%;
  animation-duration: 3s;
  z-index: 3;
}

.building-2 {
  left: 50%;
  animation-duration: 4s;
  animation-delay: 1s;
  opacity: 0.8;
  z-index: 2;
}

.building-3 {
  left: 80%;
  animation-duration: 5s;
  animation-delay: 2s;
  opacity: 0.6;
  z-index: 1;
}

/* Cards Parallax */
.cards-parallax {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.card {
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255,255,255,0.9);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
  animation: cardFloat ease-in-out infinite;
}

.card-1 {
  top: 20%;
  left: 20%;
  animation-duration: 3s;
  z-index: 3;
}

.card-2 {
  top: 50%;
  left: 50%;
  animation-duration: 4s;
  animation-delay: 1s;
  opacity: 0.8;
  z-index: 2;
}

.card-3 {
  top: 30%;
  left: 80%;
  animation-duration: 5s;
  animation-delay: 2s;
  opacity: 0.6;
  z-index: 1;
}

/* Depth Layers */
.depth-parallax {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
}

.layer {
  position: absolute;
  width: 60px;
  height: 40px;
  border-radius: 8px;
  animation: layerFloat ease-in-out infinite;
}

.layer-1 {
  top: 10%;
  left: 20%;
  background: rgba(255, 107, 107, 0.8);
  animation-duration: 3s;
  z-index: 3;
}

.layer-2 {
  top: 40%;
  left: 50%;
  background: rgba(78, 205, 196, 0.6);
  animation-duration: 4s;
  animation-delay: 1s;
  z-index: 2;
}

.layer-3 {
  top: 20%;
  left: 80%;
  background: rgba(69, 183, 209, 0.4);
  animation-duration: 5s;
  animation-delay: 2s;
  z-index: 1;
}

/* Text Parallax */
.text-parallax {
  background: linear-gradient(135deg, #ff9a9e, #fecfef);
}

.text {
  position: absolute;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: textFloat ease-in-out infinite;
}

.text-1 {
  top: 20%;
  left: 20%;
  font-size: 0.8rem;
  opacity: 0.6;
  animation-duration: 6s;
  z-index: 1;
}

.text-2 {
  top: 40%;
  left: 40%;
  font-size: 1rem;
  opacity: 0.8;
  animation-duration: 4s;
  animation-delay: 1s;
  z-index: 2;
}

.text-3 {
  top: 30%;
  left: 60%;
  font-size: 1.2rem;
  animation-duration: 3s;
  animation-delay: 2s;
  z-index: 3;
}

/* Keyframes */
@keyframes cloudFloat {
  0%, 100% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(10px) translateY(-5px); }
}

@keyframes mountainSway {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

@keyframes starTwinkle {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes planetOrbit {
  0% { transform: translateX(0) rotate(0deg); }
  100% { transform: translateX(20px) rotate(360deg); }
}

@keyframes waveMotion {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes treeSwing {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(2deg); }
}

@keyframes buildingGlow {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

@keyframes cardFloat {
  0%, 100% { 
    transform: translateY(0) rotate(0deg);
  }
  50% { 
    transform: translateY(-10px) rotate(5deg);
  }
}

@keyframes layerFloat {
  0%, 100% { 
    transform: translateY(0) scale(1);
  }
  50% { 
    transform: translateY(-8px) scale(1.05);
  }
}

@keyframes textFloat {
  0%, 100% { 
    transform: translateY(0);
  }
  50% { 
    transform: translateY(-8px);
  }
}

/* Scroll-based Parallax (requires JavaScript) */
.parallax-scroll {
  transform: translateY(var(--scroll-offset, 0));
  transition: transform 0.1s ease-out;
}`})]})]})},Dx=()=>{const[r,d]=A.useState("confetti"),[f,u]=A.useState(!1),m=A.useRef(null);A.useRef(null);const p=()=>{const M=m.current;if(M){M.querySelectorAll(".celebration-particle").forEach(_=>_.remove());for(let _=0;_<50;_++){const O=document.createElement("div");O.className="celebration-particle confetti-piece";const B=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3","#54a0ff"];O.style.background=B[Math.floor(Math.random()*B.length)],O.style.left=Math.random()*100+"%",O.style.animationDelay=Math.random()*1+"s",O.style.animationDuration=Math.random()*2+1+"s",M.appendChild(O),setTimeout(()=>O.remove(),3e3)}}},w=()=>{const M=m.current;if(M){M.querySelectorAll(".celebration-particle").forEach(_=>_.remove());for(let _=0;_<5;_++)setTimeout(()=>{const O=Math.random()*80+10,B=Math.random()*30+20,Z=document.createElement("div");Z.className="celebration-particle firework-rocket",Z.style.left=O+"%",Z.style.bottom="0px",Z.style.setProperty("--burst-height",B+"%"),M.appendChild(Z),setTimeout(()=>{Z.remove();for(let L=0;L<20;L++){const K=document.createElement("div");K.className="celebration-particle firework-spark";const ge=L/20*360,I=Math.random()*60+40;K.style.setProperty("--angle",ge+"deg"),K.style.setProperty("--distance",I+"px"),K.style.left=O+"%",K.style.bottom=B+"%";const Te=["#ff6b6b","#4ecdc4","#45b7d1","#ffd700","#ff9f43","#a29bfe"];K.style.background=Te[Math.floor(Math.random()*Te.length)],M.appendChild(K),setTimeout(()=>K.remove(),1500)}},800),setTimeout(()=>Z.remove(),2e3)},_*200)}},R=()=>{const M=m.current;if(M){M.querySelectorAll(".celebration-particle").forEach(_=>_.remove());for(let _=0;_<20;_++){const O=document.createElement("div");O.className="celebration-particle heart-particle",O.textContent="❤️",O.style.left=Math.random()*100+"%",O.style.animationDelay=Math.random()*1+"s",O.style.animationDuration=Math.random()*2+2+"s",M.appendChild(O),setTimeout(()=>O.remove(),4e3)}}},b=()=>{const M=m.current;if(M){M.querySelectorAll(".celebration-particle").forEach(_=>_.remove());for(let _=0;_<5;_++){const O=document.createElement("div");O.className="celebration-particle pulse-ring",O.style.left="50%",O.style.top="50%",O.style.animationDelay=_*.2+"s",M.appendChild(O),setTimeout(()=>O.remove(),2e3)}}},x=()=>{const M=m.current;if(M){M.querySelectorAll(".celebration-particle").forEach(_=>_.remove());for(let _=0;_<8;_++){const O=document.createElement("div");O.className="celebration-particle ripple-wave";const B=_/8*360;O.style.setProperty("--angle",B+"deg"),O.style.left="50%",O.style.top="50%",O.style.animationDelay=_*.1+"s",M.appendChild(O),setTimeout(()=>O.remove(),2500)}}},N=()=>{const M=m.current;if(M){M.querySelectorAll(".celebration-particle").forEach(_=>_.remove());for(let _=0;_<12;_++){const O=document.createElement("div");O.className="celebration-particle glow-orb";const B=Math.random()*100,Z=Math.random()*100;O.style.left=B+"%",O.style.top=Z+"%",O.style.animationDelay=Math.random()*1+"s",M.appendChild(O),setTimeout(()=>O.remove(),3e3)}}},U=()=>{const M=m.current;if(M){M.querySelectorAll(".celebration-particle").forEach(_=>_.remove());for(let _=0;_<20;_++){const O=document.createElement("div");O.className="celebration-particle spiral-particle",O.style.setProperty("--index",_),O.style.left="50%",O.style.top="50%",O.style.animationDelay=_*.05+"s",M.appendChild(O),setTimeout(()=>O.remove(),3e3)}}},H=()=>{const M=m.current;if(M){M.querySelectorAll(".celebration-particle").forEach(_=>_.remove());for(let _=0;_<16;_++){const O=document.createElement("div");O.className="celebration-particle burst-particle";const B=_/16*360,Z=80+Math.random()*40;O.style.setProperty("--angle",B+"deg"),O.style.setProperty("--distance",Z+"px"),O.style.left="50%",O.style.top="50%",O.style.animationDelay=Math.random()*.3+"s",M.appendChild(O),setTimeout(()=>O.remove(),2e3)}}};return i.jsxs("div",{className:"animation-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Celebration Animation"}),i.jsx("p",{children:"축하와 성공을 표현하는 다양한 애니메이션 효과들입니다."})]}),i.jsxs("div",{className:"demo-section",children:[i.jsx("h2",{children:"Interactive Demo"}),i.jsx("div",{className:"demo-controls",children:["confetti","fireworks","hearts","pulse","ripple","glow","spiral","burst"].map(M=>i.jsxs("button",{className:`demo-button ${r===M?"active":""} ${f&&r===M?"running":""}`,onClick:()=>{d(M),setTimeout(()=>{u(!0),M==="confetti"?p():M==="fireworks"?w():M==="hearts"?R():M==="pulse"?b():M==="ripple"?x():M==="glow"?N():M==="spiral"?U():M==="burst"&&H(),setTimeout(()=>u(!1),3e3)},10)},disabled:f,children:[M.charAt(0).toUpperCase()+M.slice(1),f&&r===M&&" 🎉"]},M))}),i.jsx("div",{className:"demo-area celebration-demo",children:i.jsx("div",{ref:m,className:`celebration-container celebration-${r} ${f?"active":""}`,children:i.jsx("div",{className:"celebration-message",children:f?`🎉 ${r.charAt(0).toUpperCase()+r.slice(1)} Celebration! 🎉`:"Click any button above!"})})})]}),i.jsxs("div",{className:"examples-section",children:[i.jsx("h2",{children:"Different Celebration Effects"}),i.jsxs("div",{className:"examples-grid",children:[i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Success Checkmark"}),i.jsx("div",{className:"celebration-example success-check",children:i.jsx("div",{className:"checkmark",children:i.jsx("svg",{viewBox:"0 0 50 50",children:i.jsx("path",{className:"check-path",d:"M 15 25 L 22 32 L 35 18"})})})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Trophy Award"}),i.jsx("div",{className:"celebration-example trophy-award",children:i.jsx("div",{className:"trophy",children:"🏆"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Star Burst"}),i.jsxs("div",{className:"celebration-example star-burst",children:[i.jsx("div",{className:"star",children:"⭐"}),i.jsx("div",{className:"star",children:"✨"}),i.jsx("div",{className:"star",children:"💫"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Balloon Float"}),i.jsxs("div",{className:"celebration-example balloon-float",children:[i.jsx("div",{className:"balloon",children:"🎈"}),i.jsx("div",{className:"balloon",children:"🎈"}),i.jsx("div",{className:"balloon",children:"🎈"})]})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Gift Box"}),i.jsx("div",{className:"celebration-example gift-box",children:i.jsx("div",{className:"gift",children:"🎁"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Medal Shine"}),i.jsx("div",{className:"celebration-example medal-shine",children:i.jsx("div",{className:"medal",children:"🥇"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Party Popper"}),i.jsx("div",{className:"celebration-example party-popper",children:i.jsx("div",{className:"popper",children:"🎊"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Clapping Hands"}),i.jsx("div",{className:"celebration-example clapping-hands",children:i.jsx("div",{className:"hands",children:"👏"})})]}),i.jsxs("div",{className:"example-item",children:[i.jsx("h3",{children:"Rainbow Arc"}),i.jsx("div",{className:"celebration-example rainbow-arc",children:i.jsx("div",{className:"rainbow",children:"🌈"})})]})]})]}),i.jsxs("div",{className:"code-section",children:[i.jsx("h2",{children:"CSS Code"}),i.jsx("pre",{className:"code-block",children:`/* Celebration Container */
.celebration-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.celebration-message {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  z-index: 10;
  position: relative;
}

.celebration-container.active .celebration-message {
  animation: celebrationPulse 1s ease-in-out;
}

/* Confetti Particles */
.confetti-piece {
  position: absolute;
  width: 8px;
  height: 8px;
  top: -10px;
  animation: confettiFall linear forwards;
}

/* Firework Sparks */
.firework-spark {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #ffff00;
  border-radius: 50%;
  animation: fireworkExplode ease-out forwards;
  transform-origin: center;
}

/* Heart Particles */
.heart-particle {
  position: absolute;
  font-size: 1.2rem;
  top: 100%;
  animation: heartFloat ease-out forwards;
}

/* Success Checkmark */
.success-check {
  background: linear-gradient(135deg, #4ecdc4, #44a08d);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkmark {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: checkmarkAppear 1s ease-out infinite;
}

.checkmark svg {
  width: 30px;
  height: 30px;
}

.check-path {
  fill: none;
  stroke: #4ecdc4;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  animation: drawCheck 2s ease-in-out infinite;
}

/* Trophy Award */
.trophy-award {
  background: linear-gradient(135deg, #f7971e, #ffd200);
  display: flex;
  align-items: center;
  justify-content: center;
}

.trophy {
  font-size: 2rem;
  animation: trophyBounce 2s ease-in-out infinite;
}

/* Star Burst */
.star-burst {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.star-burst .star {
  position: absolute;
  font-size: 1.2rem;
  animation: starBurst 3s ease-out infinite;
}

.star-burst .star:nth-child(1) { animation-delay: 0s; }
.star-burst .star:nth-child(2) { animation-delay: 0.5s; }
.star-burst .star:nth-child(3) { animation-delay: 1s; }

/* Balloon Float */
.balloon-float {
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.balloon {
  position: absolute;
  font-size: 1.5rem;
  animation: balloonRise 4s ease-out infinite;
}

.balloon:nth-child(1) { left: 20%; animation-delay: 0s; }
.balloon:nth-child(2) { left: 50%; animation-delay: 1s; }
.balloon:nth-child(3) { left: 80%; animation-delay: 2s; }

/* Gift Box */
.gift-box {
  background: linear-gradient(135deg, #ff9a9e, #fecfef);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gift {
  font-size: 2rem;
  animation: giftPop 2s ease-in-out infinite;
}

/* Medal Shine */
.medal-shine {
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.medal {
  font-size: 2rem;
  animation: medalSpin 3s linear infinite;
  position: relative;
}

.medal::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
  border-radius: 50%;
  animation: shineRotate 2s linear infinite;
}

/* Party Popper */
.party-popper {
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popper {
  font-size: 2rem;
  animation: popperExplode 2s ease-in-out infinite;
}

/* Clapping Hands */
.clapping-hands {
  background: linear-gradient(135deg, #feca57, #ff9ff3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hands {
  font-size: 2rem;
  animation: clap 1.5s ease-in-out infinite;
}

/* Rainbow Arc */
.rainbow-arc {
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.rainbow {
  font-size: 2rem;
  animation: rainbowSlide 3s ease-in-out infinite;
}

/* Keyframes */
@keyframes celebrationPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes confettiFall {
  0% { 
    top: -10px; 
    transform: rotate(0deg);
    opacity: 1;
  }
  100% { 
    top: 210px; 
    transform: rotate(360deg);
    opacity: 0;
  }
}

@keyframes fireworkExplode {
  0% { 
    transform: scale(0) translate(0, 0);
    opacity: 1;
  }
  100% { 
    transform: scale(1) translate(
      calc(cos(var(--angle)) * 60px), 
      calc(sin(var(--angle)) * 60px)
    );
    opacity: 0;
  }
}

@keyframes heartFloat {
  0% { 
    top: 100%;
    opacity: 1;
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% { 
    top: -20px;
    opacity: 0;
    transform: scale(0.8);
  }
}

@keyframes checkmarkAppear {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 0 0 rgba(78, 205, 196, 0.4);
  }
  50% { 
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(78, 205, 196, 0.6);
  }
}

@keyframes drawCheck {
  0% { stroke-dashoffset: 20; }
  50% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -20; }
}

@keyframes trophyBounce {
  0%, 100% { 
    transform: translateY(0) scale(1);
  }
  25% { 
    transform: translateY(-10px) scale(1.1);
  }
  50% { 
    transform: translateY(0) scale(1);
  }
  75% { 
    transform: translateY(-5px) scale(1.05);
  }
}

@keyframes starBurst {
  0% { 
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  20% { 
    opacity: 1;
  }
  50% { 
    transform: scale(1.5) rotate(180deg);
    opacity: 1;
  }
  100% { 
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
}

@keyframes balloonRise {
  0% { 
    bottom: -20px;
    opacity: 0;
  }
  20% { 
    opacity: 1;
  }
  80% { 
    opacity: 1;
  }
  100% { 
    bottom: 100px;
    opacity: 0;
  }
}

@keyframes giftPop {
  0%, 100% { 
    transform: scale(1) rotate(0deg);
  }
  25% { 
    transform: scale(1.2) rotate(-5deg);
  }
  50% { 
    transform: scale(1.1) rotate(0deg);
  }
  75% { 
    transform: scale(1.2) rotate(5deg);
  }
}

@keyframes medalSpin {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@keyframes shineRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes popperExplode {
  0%, 80%, 100% { 
    transform: scale(1) rotate(0deg);
  }
  10%, 30%, 50%, 70% { 
    transform: scale(1.1) rotate(-5deg);
  }
  20%, 40%, 60% { 
    transform: scale(1.1) rotate(5deg);
  }
}

@keyframes clap {
  0%, 100% { 
    transform: scale(1) rotate(0deg);
  }
  25% { 
    transform: scale(1.1) rotate(-10deg);
  }
  75% { 
    transform: scale(1.1) rotate(10deg);
  }
}

@keyframes rainbowSlide {
  0%, 100% { 
    transform: translateX(-20px);
  }
  50% { 
    transform: translateX(20px);
  }
}

/* Celebrate Button */
.celebrate-btn {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4) !important;
  animation: celebrateButtonPulse 2s ease-in-out infinite;
}

.celebrate-btn:disabled {
  opacity: 0.6;
  animation: none;
}

@keyframes celebrateButtonPulse {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 0 0 rgba(78, 205, 196, 0.4);
  }
  50% { 
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(78, 205, 196, 0.6);
  }
}`})]})]})};function kx(){return i.jsx(ox,{children:i.jsxs(zp,{children:[i.jsx(ze,{path:"/",element:i.jsx(fx,{})}),i.jsx(ze,{path:"/animation/fade",element:i.jsx(dx,{})}),i.jsx(ze,{path:"/animation/slide",element:i.jsx(mx,{})}),i.jsx(ze,{path:"/animation/rotate",element:i.jsx(hx,{})}),i.jsx(ze,{path:"/animation/scale",element:i.jsx(px,{})}),i.jsx(ze,{path:"/animation/bounce",element:i.jsx(xx,{})}),i.jsx(ze,{path:"/animation/flip",element:i.jsx(vx,{})}),i.jsx(ze,{path:"/animation/shake",element:i.jsx(gx,{})}),i.jsx(ze,{path:"/animation/wave",element:i.jsx(yx,{})}),i.jsx(ze,{path:"/animation/typewriter",element:i.jsx(bx,{})}),i.jsx(ze,{path:"/animation/glow",element:i.jsx(jx,{})}),i.jsx(ze,{path:"/animation/loading",element:i.jsx(Nx,{})}),i.jsx(ze,{path:"/animation/text-effects",element:i.jsx(Sx,{})}),i.jsx(ze,{path:"/animation/glitch",element:i.jsx(wx,{})}),i.jsx(ze,{path:"/animation/transform3d",element:i.jsx(Ex,{})}),i.jsx(ze,{path:"/animation/hover-effects",element:i.jsx(Tx,{})}),i.jsx(ze,{path:"/animation/morph",element:i.jsx(Ax,{})}),i.jsx(ze,{path:"/animation/particle",element:i.jsx(Rx,{})}),i.jsx(ze,{path:"/animation/parallax",element:i.jsx(zx,{})}),i.jsx(ze,{path:"/animation/celebration",element:i.jsx(Dx,{})})]})})}Hh.createRoot(document.getElementById("root")).render(i.jsx(Dh.StrictMode,{children:i.jsx(Pp,{children:i.jsx(kx,{})})}));
