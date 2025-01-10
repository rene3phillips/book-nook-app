(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var od={exports:{}},ka={},ad={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function oE(){if(cg)return Pe;cg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.iterator;function D(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,q={};function F(x,W,ce){this.props=x,this.context=W,this.refs=q,this.updater=ce||j}F.prototype.isReactComponent={},F.prototype.setState=function(x,W){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,W,"setState")},F.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ie(){}ie.prototype=F.prototype;function se(x,W,ce){this.props=x,this.context=W,this.refs=q,this.updater=ce||j}var oe=se.prototype=new ie;oe.constructor=se,z(oe,F.prototype),oe.isPureReactComponent=!0;var ge=Array.isArray,Ae=Object.prototype.hasOwnProperty,ye={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function T(x,W,ce){var Re,Ce={},xe=null,Fe=null;if(W!=null)for(Re in W.ref!==void 0&&(Fe=W.ref),W.key!==void 0&&(xe=""+W.key),W)Ae.call(W,Re)&&!R.hasOwnProperty(Re)&&(Ce[Re]=W[Re]);var Ue=arguments.length-2;if(Ue===1)Ce.children=ce;else if(1<Ue){for(var qe=Array(Ue),_t=0;_t<Ue;_t++)qe[_t]=arguments[_t+2];Ce.children=qe}if(x&&x.defaultProps)for(Re in Ue=x.defaultProps,Ue)Ce[Re]===void 0&&(Ce[Re]=Ue[Re]);return{$$typeof:r,type:x,key:xe,ref:Fe,props:Ce,_owner:ye.current}}function I(x,W){return{$$typeof:r,type:x.type,key:W,ref:x.ref,props:x.props,_owner:x._owner}}function P(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function O(x){var W={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ce){return W[ce]})}var V=/\/+/g;function C(x,W){return typeof x=="object"&&x!==null&&x.key!=null?O(""+x.key):W.toString(36)}function nt(x,W,ce,Re,Ce){var xe=typeof x;(xe==="undefined"||xe==="boolean")&&(x=null);var Fe=!1;if(x===null)Fe=!0;else switch(xe){case"string":case"number":Fe=!0;break;case"object":switch(x.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=x,Ce=Ce(Fe),x=Re===""?"."+C(Fe,0):Re,ge(Ce)?(ce="",x!=null&&(ce=x.replace(V,"$&/")+"/"),nt(Ce,W,ce,"",function(_t){return _t})):Ce!=null&&(P(Ce)&&(Ce=I(Ce,ce+(!Ce.key||Fe&&Fe.key===Ce.key?"":(""+Ce.key).replace(V,"$&/")+"/")+x)),W.push(Ce)),1;if(Fe=0,Re=Re===""?".":Re+":",ge(x))for(var Ue=0;Ue<x.length;Ue++){xe=x[Ue];var qe=Re+C(xe,Ue);Fe+=nt(xe,W,ce,qe,Ce)}else if(qe=D(x),typeof qe=="function")for(x=qe.call(x),Ue=0;!(xe=x.next()).done;)xe=xe.value,qe=Re+C(xe,Ue++),Fe+=nt(xe,W,ce,qe,Ce);else if(xe==="object")throw W=String(x),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Fe}function Dt(x,W,ce){if(x==null)return x;var Re=[],Ce=0;return nt(x,Re,"","",function(xe){return W.call(ce,xe,Ce++)}),Re}function Ot(x){if(x._status===-1){var W=x._result;W=W(),W.then(function(ce){(x._status===0||x._status===-1)&&(x._status=1,x._result=ce)},function(ce){(x._status===0||x._status===-1)&&(x._status=2,x._result=ce)}),x._status===-1&&(x._status=0,x._result=W)}if(x._status===1)return x._result.default;throw x._result}var ze={current:null},Z={transition:null},he={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Z,ReactCurrentOwner:ye};function te(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Dt,forEach:function(x,W,ce){Dt(x,function(){W.apply(this,arguments)},ce)},count:function(x){var W=0;return Dt(x,function(){W++}),W},toArray:function(x){return Dt(x,function(W){return W})||[]},only:function(x){if(!P(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Pe.Component=F,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=se,Pe.StrictMode=i,Pe.Suspense=g,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Pe.act=te,Pe.cloneElement=function(x,W,ce){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Re=z({},x.props),Ce=x.key,xe=x.ref,Fe=x._owner;if(W!=null){if(W.ref!==void 0&&(xe=W.ref,Fe=ye.current),W.key!==void 0&&(Ce=""+W.key),x.type&&x.type.defaultProps)var Ue=x.type.defaultProps;for(qe in W)Ae.call(W,qe)&&!R.hasOwnProperty(qe)&&(Re[qe]=W[qe]===void 0&&Ue!==void 0?Ue[qe]:W[qe])}var qe=arguments.length-2;if(qe===1)Re.children=ce;else if(1<qe){Ue=Array(qe);for(var _t=0;_t<qe;_t++)Ue[_t]=arguments[_t+2];Re.children=Ue}return{$$typeof:r,type:x.type,key:Ce,ref:xe,props:Re,_owner:Fe}},Pe.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:l,_context:x},x.Consumer=x},Pe.createElement=T,Pe.createFactory=function(x){var W=T.bind(null,x);return W.type=x,W},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(x){return{$$typeof:f,render:x}},Pe.isValidElement=P,Pe.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:Ot}},Pe.memo=function(x,W){return{$$typeof:_,type:x,compare:W===void 0?null:W}},Pe.startTransition=function(x){var W=Z.transition;Z.transition={};try{x()}finally{Z.transition=W}},Pe.unstable_act=te,Pe.useCallback=function(x,W){return ze.current.useCallback(x,W)},Pe.useContext=function(x){return ze.current.useContext(x)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(x){return ze.current.useDeferredValue(x)},Pe.useEffect=function(x,W){return ze.current.useEffect(x,W)},Pe.useId=function(){return ze.current.useId()},Pe.useImperativeHandle=function(x,W,ce){return ze.current.useImperativeHandle(x,W,ce)},Pe.useInsertionEffect=function(x,W){return ze.current.useInsertionEffect(x,W)},Pe.useLayoutEffect=function(x,W){return ze.current.useLayoutEffect(x,W)},Pe.useMemo=function(x,W){return ze.current.useMemo(x,W)},Pe.useReducer=function(x,W,ce){return ze.current.useReducer(x,W,ce)},Pe.useRef=function(x){return ze.current.useRef(x)},Pe.useState=function(x){return ze.current.useState(x)},Pe.useSyncExternalStore=function(x,W,ce){return ze.current.useSyncExternalStore(x,W,ce)},Pe.useTransition=function(){return ze.current.useTransition()},Pe.version="18.3.1",Pe}var hg;function sf(){return hg||(hg=1,ad.exports=oE()),ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function aE(){if(dg)return ka;dg=1;var r=sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var w,S={},D=null,j=null;_!==void 0&&(D=""+_),g.key!==void 0&&(D=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)i.call(g,w)&&!l.hasOwnProperty(w)&&(S[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)S[w]===void 0&&(S[w]=g[w]);return{$$typeof:e,type:f,key:D,ref:j,props:S,_owner:o.current}}return ka.Fragment=t,ka.jsx=h,ka.jsxs=h,ka}var fg;function lE(){return fg||(fg=1,od.exports=aE()),od.exports}var Ee=lE(),sr=sf(),Iu={},ld={exports:{}},Zt={},ud={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function uE(){return pg||(pg=1,function(r){function e(Z,he){var te=Z.length;Z.push(he);e:for(;0<te;){var x=te-1>>>1,W=Z[x];if(0<o(W,he))Z[x]=he,Z[te]=W,te=x;else break e}}function t(Z){return Z.length===0?null:Z[0]}function i(Z){if(Z.length===0)return null;var he=Z[0],te=Z.pop();if(te!==he){Z[0]=te;e:for(var x=0,W=Z.length,ce=W>>>1;x<ce;){var Re=2*(x+1)-1,Ce=Z[Re],xe=Re+1,Fe=Z[xe];if(0>o(Ce,te))xe<W&&0>o(Fe,Ce)?(Z[x]=Fe,Z[xe]=te,x=xe):(Z[x]=Ce,Z[Re]=te,x=Re);else if(xe<W&&0>o(Fe,te))Z[x]=Fe,Z[xe]=te,x=xe;else break e}}return he}function o(Z,he){var te=Z.sortIndex-he.sortIndex;return te!==0?te:Z.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],w=1,S=null,D=3,j=!1,z=!1,q=!1,F=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(Z){for(var he=t(_);he!==null;){if(he.callback===null)i(_);else if(he.startTime<=Z)i(_),he.sortIndex=he.expirationTime,e(g,he);else break;he=t(_)}}function ge(Z){if(q=!1,oe(Z),!z)if(t(g)!==null)z=!0,Ot(Ae);else{var he=t(_);he!==null&&ze(ge,he.startTime-Z)}}function Ae(Z,he){z=!1,q&&(q=!1,ie(T),T=-1),j=!0;var te=D;try{for(oe(he),S=t(g);S!==null&&(!(S.expirationTime>he)||Z&&!O());){var x=S.callback;if(typeof x=="function"){S.callback=null,D=S.priorityLevel;var W=x(S.expirationTime<=he);he=r.unstable_now(),typeof W=="function"?S.callback=W:S===t(g)&&i(g),oe(he)}else i(g);S=t(g)}if(S!==null)var ce=!0;else{var Re=t(_);Re!==null&&ze(ge,Re.startTime-he),ce=!1}return ce}finally{S=null,D=te,j=!1}}var ye=!1,R=null,T=-1,I=5,P=-1;function O(){return!(r.unstable_now()-P<I)}function V(){if(R!==null){var Z=r.unstable_now();P=Z;var he=!0;try{he=R(!0,Z)}finally{he?C():(ye=!1,R=null)}}else ye=!1}var C;if(typeof se=="function")C=function(){se(V)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Dt=nt.port2;nt.port1.onmessage=V,C=function(){Dt.postMessage(null)}}else C=function(){F(V,0)};function Ot(Z){R=Z,ye||(ye=!0,C())}function ze(Z,he){T=F(function(){Z(r.unstable_now())},he)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){z||j||(z=!0,Ot(Ae))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(D){case 1:case 2:case 3:var he=3;break;default:he=D}var te=D;D=he;try{return Z()}finally{D=te}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,he){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=D;D=Z;try{return he()}finally{D=te}},r.unstable_scheduleCallback=function(Z,he,te){var x=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?x+te:x):te=x,Z){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=te+W,Z={id:w++,callback:he,priorityLevel:Z,startTime:te,expirationTime:W,sortIndex:-1},te>x?(Z.sortIndex=te,e(_,Z),t(g)===null&&Z===t(_)&&(q?(ie(T),T=-1):q=!0,ze(ge,te-x))):(Z.sortIndex=W,e(g,Z),z||j||(z=!0,Ot(Ae))),Z},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(Z){var he=D;return function(){var te=D;D=he;try{return Z.apply(this,arguments)}finally{D=te}}}}(cd)),cd}var mg;function cE(){return mg||(mg=1,ud.exports=uE()),ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function hE(){if(gg)return Zt;gg=1;var r=sf(),e=cE();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},S={};function D(n){return g.call(S,n)?!0:g.call(w,n)?!1:_.test(n)?S[n]=!0:(w[n]=!0,!1)}function j(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z(n,s,a,c){if(s===null||typeof s>"u"||j(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(n,s,a,c,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){F[n]=new q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];F[s]=new q(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){F[n]=new q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){F[n]=new q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){F[n]=new q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){F[n]=new q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){F[n]=new q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){F[n]=new q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){F[n]=new q(n,5,!1,n.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function se(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(ie,se);F[s]=new q(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(ie,se);F[s]=new q(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(ie,se);F[s]=new q(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){F[n]=new q(n,1,!1,n.toLowerCase(),null,!1,!1)}),F.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){F[n]=new q(n,1,!1,n.toLowerCase(),null,!0,!0)});function oe(n,s,a,c){var d=F.hasOwnProperty(s)?F[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(z(s,a,d,c)&&(a=null),c||d===null?D(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var ge=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ae=Symbol.for("react.element"),ye=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),Z=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,x;function W(n){if(x===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);x=s&&s[1]||""}return`
`+x+n}var ce=!1;function Re(n,s){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var c=U}Reflect.construct(n,[],s)}else{try{s.call()}catch(U){c=U}n.call(s.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,A=m.length-1;1<=v&&0<=A&&d[v]!==m[A];)A--;for(;1<=v&&0<=A;v--,A--)if(d[v]!==m[A]){if(v!==1||A!==1)do if(v--,A--,0>A||d[v]!==m[A]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=A);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Ce(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case ye:return"Portal";case I:return"Profiler";case T:return"StrictMode";case C:return"Suspense";case nt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case V:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dt:return s=n.displayName||null,s!==null?s:xe(n.type)||"Memo";case Ot:s=n._payload,n=n._init;try{return xe(n(s))}catch{}}return null}function Fe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function _t(n){var s=qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function fr(n){n._valueTracker||(n._valueTracker=_t(n))}function _s(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=qe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Br(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ai(n,s){var a=s.checked;return te({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function vs(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Lo(n,s){s=s.checked,s!=null&&oe(n,"checked",s,!1)}function bo(n,s){Lo(n,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?ws(n,s.type,a):s.hasOwnProperty("defaultValue")&&ws(n,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function ll(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ws(n,s,a){(s!=="number"||Br(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var pr=Array.isArray;function mr(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Mo(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Es(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(pr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Ue(a)}}function Ts(n,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Fo(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?ct(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var gr,Uo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n}(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=gr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function zr(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ci=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(n){Ci.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Ri[s]=Ri[n]})});function jo(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ri.hasOwnProperty(n)&&Ri[n]?(""+s).trim():s+"px"}function Bo(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=jo(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var zo=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(n,s){if(s){if(zo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function qo(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=null;function Is(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ss=null,pn=null,Kn=null;function As(n){if(n=pa(n)){if(typeof Ss!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Fl(s),Ss(n.stateNode,n.type,s))}}function Gn(n){pn?Kn?Kn.push(n):Kn=[n]:pn=n}function Ho(){if(pn){var n=pn,s=Kn;if(Kn=pn=null,As(n),s)for(n=0;n<s.length;n++)As(s[n])}}function ki(n,s){return n(s)}function Wo(){}var yr=!1;function Ko(n,s,a){if(yr)return n(s,a);yr=!0;try{return ki(n,s,a)}finally{yr=!1,(pn!==null||Kn!==null)&&(Wo(),Ho())}}function rt(n,s){var a=n.stateNode;if(a===null)return null;var c=Fl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Rs=!1;if(f)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Rs=!1}function Ni(n,s,a,c,d,m,v,A,k){var U=Array.prototype.slice.call(arguments,3);try{s.apply(a,U)}catch(G){this.onError(G)}}var Di=!1,Cs=null,Pn=!1,Go=null,Vc={onError:function(n){Di=!0,Cs=n}};function Ps(n,s,a,c,d,m,v,A,k){Di=!1,Cs=null,Ni.apply(Vc,arguments)}function ul(n,s,a,c,d,m,v,A,k){if(Ps.apply(this,arguments),Di){if(Di){var U=Cs;Di=!1,Cs=null}else throw Error(t(198));Pn||(Pn=!0,Go=U)}}function kn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,s.flags&4098&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Oi(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Nn(n){if(kn(n)!==n)throw Error(t(188))}function cl(n){var s=n.alternate;if(!s){if(s=kn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Nn(d),n;if(m===c)return Nn(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,A=d.child;A;){if(A===a){v=!0,a=d,c=m;break}if(A===c){v=!0,c=d,a=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===a){v=!0,a=m,c=d;break}if(A===c){v=!0,c=m,a=d;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Qo(n){return n=cl(n),n!==null?ks(n):null}function ks(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=ks(n);if(s!==null)return s;n=n.sibling}return null}var Ns=e.unstable_scheduleCallback,Jo=e.unstable_cancelCallback,hl=e.unstable_shouldYield,Lc=e.unstable_requestPaint,He=e.unstable_now,dl=e.unstable_getCurrentPriorityLevel,xi=e.unstable_ImmediatePriority,$r=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,Xo=e.unstable_LowPriority,fl=e.unstable_IdlePriority,Vi=null,rn=null;function pl(n){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Vi,n,void 0,(n.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:gl,Yo=Math.log,ml=Math.LN2;function gl(n){return n>>>=0,n===0?32:31-(Yo(n)/ml|0)|0}var Ds=64,Os=4194304;function qr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Li(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var A=v&~d;A!==0?c=qr(A):(m&=v,m!==0&&(c=qr(m)))}else v=a&~d,v!==0?c=qr(v):m!==0&&(c=qr(m));if(c===0)return 0;if(s!==0&&s!==c&&!(s&d)&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if(c&4&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-zt(s),d=1<<a,c|=n[a],s&=~d;return c}function bc(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-zt(m),A=1<<v,k=d[v];k===-1?(!(A&a)||A&c)&&(d[v]=bc(A,s)):k<=s&&(n.expiredLanes|=A),m&=~A}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bi(){var n=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),n}function Hr(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Wr(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-zt(s),n[s]=a}function $e(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-zt(a),m=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Kr(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-zt(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var De=0;function Gr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var yl,xs,_l,vl,wl,Zo=!1,Qn=[],St=null,Dn=null,On=null,Qr=new Map,gn=new Map,Jn=[],Mc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function El(n,s){switch(n){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Qr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(s.pointerId)}}function Wt(n,s,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=pa(s),s!==null&&xs(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function Fc(n,s,a,c,d){switch(s){case"focusin":return St=Wt(St,n,s,a,c,d),!0;case"dragenter":return Dn=Wt(Dn,n,s,a,c,d),!0;case"mouseover":return On=Wt(On,n,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Qr.set(m,Wt(Qr.get(m)||null,n,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,gn.set(m,Wt(gn.get(m)||null,n,s,a,c,d)),!0}return!1}function Tl(n){var s=Bi(n.target);if(s!==null){var a=kn(s);if(a!==null){if(s=a.tag,s===13){if(s=Oi(a),s!==null){n.blockedOn=s,wl(n.priority,function(){_l(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vr(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Vs(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pi=c,a.target.dispatchEvent(c),Pi=null}else return s=pa(a),s!==null&&xs(s),n.blockedOn=a,!1;s.shift()}return!0}function Mi(n,s,a){vr(n)&&a.delete(s)}function Il(){Zo=!1,St!==null&&vr(St)&&(St=null),Dn!==null&&vr(Dn)&&(Dn=null),On!==null&&vr(On)&&(On=null),Qr.forEach(Mi),gn.forEach(Mi)}function xn(n,s){n.blockedOn===s&&(n.blockedOn=null,Zo||(Zo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Il)))}function Vn(n){function s(d){return xn(d,n)}if(0<Qn.length){xn(Qn[0],n);for(var a=1;a<Qn.length;a++){var c=Qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(St!==null&&xn(St,n),Dn!==null&&xn(Dn,n),On!==null&&xn(On,n),Qr.forEach(s),gn.forEach(s),a=0;a<Jn.length;a++)c=Jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)Tl(a),a.blockedOn===null&&Jn.shift()}var wr=ge.ReactCurrentBatchConfig,Jr=!0;function Qe(n,s,a,c){var d=De,m=wr.transition;wr.transition=null;try{De=1,ea(n,s,a,c)}finally{De=d,wr.transition=m}}function Uc(n,s,a,c){var d=De,m=wr.transition;wr.transition=null;try{De=4,ea(n,s,a,c)}finally{De=d,wr.transition=m}}function ea(n,s,a,c){if(Jr){var d=Vs(n,s,a,c);if(d===null)Jc(n,s,c,Fi,a),El(n,c);else if(Fc(d,n,s,a,c))c.stopPropagation();else if(El(n,c),s&4&&-1<Mc.indexOf(n)){for(;d!==null;){var m=pa(d);if(m!==null&&yl(m),m=Vs(n,s,a,c),m===null&&Jc(n,s,c,Fi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Jc(n,s,c,null,a)}}var Fi=null;function Vs(n,s,a,c){if(Fi=null,n=Is(c),n=Bi(n),n!==null)if(s=kn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Oi(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Fi=n,null}function ta(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dl()){case xi:return 1;case $r:return 4;case mn:case Xo:return 16;case fl:return 536870912;default:return 16}default:return 16}}var on=null,Ls=null,Kt=null;function na(){if(Kt)return Kt;var n,s=Ls,a=s.length,c,d="value"in on?on.value:on.textContent,m=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[m-c];c++);return Kt=d.slice(n,1<c?1-c:void 0)}function bs(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Xn(){return!0}function ra(){return!1}function At(n){function s(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xn:ra,this.isPropagationStopped=ra,this}return te(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ms=At(Ln),Yn=te({},Ln,{view:0,detail:0}),jc=At(Yn),Fs,Er,Xr,Ui=te({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xr&&(Xr&&n.type==="mousemove"?(Fs=n.screenX-Xr.screenX,Er=n.screenY-Xr.screenY):Er=Fs=0,Xr=n),Fs)},movementY:function(n){return"movementY"in n?n.movementY:Er}}),Us=At(Ui),ia=te({},Ui,{dataTransfer:0}),Sl=At(ia),js=te({},Yn,{relatedTarget:0}),Bs=At(js),Al=te({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Tr=At(Al),Rl=te({},Ln,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Cl=At(Rl),Pl=te({},Ln,{data:0}),sa=At(Pl),zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nl(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=kl[n])?!!s[n]:!1}function Zn(){return Nl}var u=te({},Yn,{key:function(n){if(n.key){var s=zs[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=bs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zn,charCode:function(n){return n.type==="keypress"?bs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=At(u),y=te({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=At(y),L=te({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zn}),B=At(L),Y=te({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=At(Y),dt=te({},Ui,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=At(dt),vt=[9,13,27,32],ot=f&&"CompositionEvent"in window,yn=null;f&&"documentMode"in document&&(yn=document.documentMode);var an=f&&"TextEvent"in window&&!yn,ji=f&&(!ot||yn&&8<yn&&11>=yn),$s=" ",ip=!1;function sp(n,s){switch(n){case"keyup":return vt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qs=!1;function iw(n,s){switch(n){case"compositionend":return op(s);case"keypress":return s.which!==32?null:(ip=!0,$s);case"textInput":return n=s.data,n===$s&&ip?null:n;default:return null}}function sw(n,s){if(qs)return n==="compositionend"||!ot&&sp(n,s)?(n=na(),Kt=Ls=on=null,qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ji&&s.locale!=="ko"?null:s.data;default:return null}}var ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!ow[n.type]:s==="textarea"}function lp(n,s,a,c){Gn(c),s=Ll(s,"onChange"),0<s.length&&(a=new Ms("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var oa=null,aa=null;function aw(n){Rp(n,0)}function Dl(n){var s=Qs(n);if(_s(s))return n}function lw(n,s){if(n==="change")return s}var up=!1;if(f){var Bc;if(f){var zc="oninput"in document;if(!zc){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),zc=typeof cp.oninput=="function"}Bc=zc}else Bc=!1;up=Bc&&(!document.documentMode||9<document.documentMode)}function hp(){oa&&(oa.detachEvent("onpropertychange",dp),aa=oa=null)}function dp(n){if(n.propertyName==="value"&&Dl(aa)){var s=[];lp(s,aa,n,Is(n)),Ko(aw,s)}}function uw(n,s,a){n==="focusin"?(hp(),oa=s,aa=a,oa.attachEvent("onpropertychange",dp)):n==="focusout"&&hp()}function cw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dl(aa)}function hw(n,s){if(n==="click")return Dl(s)}function dw(n,s){if(n==="input"||n==="change")return Dl(s)}function fw(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var bn=typeof Object.is=="function"?Object.is:fw;function la(n,s){if(bn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!bn(n[d],s[d]))return!1}return!0}function fp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pp(n,s){var a=fp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fp(a)}}function mp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?mp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function gp(){for(var n=window,s=Br();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Br(n.document)}return s}function $c(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function pw(n){var s=gp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&mp(a.ownerDocument.documentElement,a)){if(c!==null&&$c(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=pp(a,m);var v=pp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mw=f&&"documentMode"in document&&11>=document.documentMode,Hs=null,qc=null,ua=null,Hc=!1;function yp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hc||Hs==null||Hs!==Br(c)||(c=Hs,"selectionStart"in c&&$c(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ua&&la(ua,c)||(ua=c,c=Ll(qc,"onSelect"),0<c.length&&(s=new Ms("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=Hs)))}function Ol(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var Ws={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},Wc={},_p={};f&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function xl(n){if(Wc[n])return Wc[n];if(!Ws[n])return n;var s=Ws[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in _p)return Wc[n]=s[a];return n}var vp=xl("animationend"),wp=xl("animationiteration"),Ep=xl("animationstart"),Tp=xl("transitionend"),Ip=new Map,Sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,s){Ip.set(n,s),l(s,[n])}for(var Kc=0;Kc<Sp.length;Kc++){var Gc=Sp[Kc],gw=Gc.toLowerCase(),yw=Gc[0].toUpperCase()+Gc.slice(1);Yr(gw,"on"+yw)}Yr(vp,"onAnimationEnd"),Yr(wp,"onAnimationIteration"),Yr(Ep,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Tp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_w=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Ap(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,ul(c,s,void 0,n),n.currentTarget=null}function Rp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var v=c.length-1;0<=v;v--){var A=c[v],k=A.instance,U=A.currentTarget;if(A=A.listener,k!==m&&d.isPropagationStopped())break e;Ap(d,A,U),m=k}else for(v=0;v<c.length;v++){if(A=c[v],k=A.instance,U=A.currentTarget,A=A.listener,k!==m&&d.isPropagationStopped())break e;Ap(d,A,U),m=k}}}if(Pn)throw n=Go,Pn=!1,Go=null,n}function Ke(n,s){var a=s[nh];a===void 0&&(a=s[nh]=new Set);var c=n+"__bubble";a.has(c)||(Cp(s,n,2,!1),a.add(c))}function Qc(n,s,a){var c=0;s&&(c|=4),Cp(a,n,c,s)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function ha(n){if(!n[Vl]){n[Vl]=!0,i.forEach(function(a){a!=="selectionchange"&&(_w.has(a)||Qc(a,!1,n),Qc(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Vl]||(s[Vl]=!0,Qc("selectionchange",!1,s))}}function Cp(n,s,a,c){switch(ta(s)){case 1:var d=Qe;break;case 4:d=Uc;break;default:d=ea}a=d.bind(null,s,a,n),d=void 0,!Rs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function Jc(n,s,a,c,d){var m=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;A!==null;){if(v=Bi(A),v===null)return;if(k=v.tag,k===5||k===6){c=m=v;continue e}A=A.parentNode}}c=c.return}Ko(function(){var U=m,G=Is(a),Q=[];e:{var K=Ip.get(n);if(K!==void 0){var ee=Ms,ae=n;switch(n){case"keypress":if(bs(a)===0)break e;case"keydown":case"keyup":ee=p;break;case"focusin":ae="focus",ee=Bs;break;case"focusout":ae="blur",ee=Bs;break;case"beforeblur":case"afterblur":ee=Bs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Sl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=B;break;case vp:case wp:case Ep:ee=Tr;break;case Tp:ee=Be;break;case"scroll":ee=jc;break;case"wheel":ee=Ve;break;case"copy":case"cut":case"paste":ee=Cl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=E}var le=(s&4)!==0,it=!le&&n==="scroll",b=le?K!==null?K+"Capture":null:K;le=[];for(var N=U,M;N!==null;){M=N;var X=M.stateNode;if(M.tag===5&&X!==null&&(M=X,b!==null&&(X=rt(N,b),X!=null&&le.push(da(N,X,M)))),it)break;N=N.return}0<le.length&&(K=new ee(K,ae,null,a,G),Q.push({event:K,listeners:le}))}}if(!(s&7)){e:{if(K=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",K&&a!==Pi&&(ae=a.relatedTarget||a.fromElement)&&(Bi(ae)||ae[Ir]))break e;if((ee||K)&&(K=G.window===G?G:(K=G.ownerDocument)?K.defaultView||K.parentWindow:window,ee?(ae=a.relatedTarget||a.toElement,ee=U,ae=ae?Bi(ae):null,ae!==null&&(it=kn(ae),ae!==it||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ee=null,ae=U),ee!==ae)){if(le=Us,X="onMouseLeave",b="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(le=E,X="onPointerLeave",b="onPointerEnter",N="pointer"),it=ee==null?K:Qs(ee),M=ae==null?K:Qs(ae),K=new le(X,N+"leave",ee,a,G),K.target=it,K.relatedTarget=M,X=null,Bi(G)===U&&(le=new le(b,N+"enter",ae,a,G),le.target=M,le.relatedTarget=it,X=le),it=X,ee&&ae)t:{for(le=ee,b=ae,N=0,M=le;M;M=Ks(M))N++;for(M=0,X=b;X;X=Ks(X))M++;for(;0<N-M;)le=Ks(le),N--;for(;0<M-N;)b=Ks(b),M--;for(;N--;){if(le===b||b!==null&&le===b.alternate)break t;le=Ks(le),b=Ks(b)}le=null}else le=null;ee!==null&&Pp(Q,K,ee,le,!1),ae!==null&&it!==null&&Pp(Q,it,ae,le,!0)}}e:{if(K=U?Qs(U):window,ee=K.nodeName&&K.nodeName.toLowerCase(),ee==="select"||ee==="input"&&K.type==="file")var ue=lw;else if(ap(K))if(up)ue=dw;else{ue=cw;var de=uw}else(ee=K.nodeName)&&ee.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ue=hw);if(ue&&(ue=ue(n,U))){lp(Q,ue,a,G);break e}de&&de(n,K,U),n==="focusout"&&(de=K._wrapperState)&&de.controlled&&K.type==="number"&&ws(K,"number",K.value)}switch(de=U?Qs(U):window,n){case"focusin":(ap(de)||de.contentEditable==="true")&&(Hs=de,qc=U,ua=null);break;case"focusout":ua=qc=Hs=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,yp(Q,a,G);break;case"selectionchange":if(mw)break;case"keydown":case"keyup":yp(Q,a,G)}var fe;if(ot)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else qs?sp(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(ji&&a.locale!=="ko"&&(qs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&qs&&(fe=na()):(on=G,Ls="value"in on?on.value:on.textContent,qs=!0)),de=Ll(U,_e),0<de.length&&(_e=new sa(_e,n,null,a,G),Q.push({event:_e,listeners:de}),fe?_e.data=fe:(fe=op(a),fe!==null&&(_e.data=fe)))),(fe=an?iw(n,a):sw(n,a))&&(U=Ll(U,"onBeforeInput"),0<U.length&&(G=new sa("onBeforeInput","beforeinput",null,a,G),Q.push({event:G,listeners:U}),G.data=fe))}Rp(Q,s)})}function da(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Ll(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=rt(n,a),m!=null&&c.unshift(da(n,m,d)),m=rt(n,s),m!=null&&c.push(da(n,m,d))),n=n.return}return c}function Ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Pp(n,s,a,c,d){for(var m=s._reactName,v=[];a!==null&&a!==c;){var A=a,k=A.alternate,U=A.stateNode;if(k!==null&&k===c)break;A.tag===5&&U!==null&&(A=U,d?(k=rt(a,m),k!=null&&v.unshift(da(a,k,A))):d||(k=rt(a,m),k!=null&&v.push(da(a,k,A)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var vw=/\r\n?/g,ww=/\u0000|\uFFFD/g;function kp(n){return(typeof n=="string"?n:""+n).replace(vw,`
`).replace(ww,"")}function bl(n,s,a){if(s=kp(s),kp(n)!==s&&a)throw Error(t(425))}function Ml(){}var Xc=null,Yc=null;function Zc(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,Ew=typeof clearTimeout=="function"?clearTimeout:void 0,Np=typeof Promise=="function"?Promise:void 0,Tw=typeof queueMicrotask=="function"?queueMicrotask:typeof Np<"u"?function(n){return Np.resolve(null).then(n).catch(Iw)}:eh;function Iw(n){setTimeout(function(){throw n})}function th(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Vn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Vn(s)}function Zr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Dp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),er="__reactFiber$"+Gs,fa="__reactProps$"+Gs,Ir="__reactContainer$"+Gs,nh="__reactEvents$"+Gs,Sw="__reactListeners$"+Gs,Aw="__reactHandles$"+Gs;function Bi(n){var s=n[er];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Ir]||a[er]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Dp(n);n!==null;){if(a=n[er])return a;n=Dp(n)}return s}n=a,a=n.parentNode}return null}function pa(n){return n=n[er]||n[Ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fl(n){return n[fa]||null}var rh=[],Js=-1;function ei(n){return{current:n}}function Ge(n){0>Js||(n.current=rh[Js],rh[Js]=null,Js--)}function We(n,s){Js++,rh[Js]=n.current,n.current=s}var ti={},xt=ei(ti),Gt=ei(!1),zi=ti;function Xs(n,s){var a=n.type.contextTypes;if(!a)return ti;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function Ul(){Ge(Gt),Ge(xt)}function Op(n,s,a){if(xt.current!==ti)throw Error(t(168));We(xt,s),We(Gt,a)}function xp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Fe(n)||"Unknown",d));return te({},a,c)}function jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ti,zi=xt.current,We(xt,n),We(Gt,Gt.current),!0}function Vp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=xp(n,s,zi),c.__reactInternalMemoizedMergedChildContext=n,Ge(Gt),Ge(xt),We(xt,n)):Ge(Gt),We(Gt,a)}var Sr=null,Bl=!1,ih=!1;function Lp(n){Sr===null?Sr=[n]:Sr.push(n)}function Rw(n){Bl=!0,Lp(n)}function ni(){if(!ih&&Sr!==null){ih=!0;var n=0,s=De;try{var a=Sr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Sr=null,Bl=!1}catch(d){throw Sr!==null&&(Sr=Sr.slice(n+1)),Ns(xi,ni),d}finally{De=s,ih=!1}}return null}var Ys=[],Zs=0,zl=null,$l=0,_n=[],vn=0,$i=null,Ar=1,Rr="";function qi(n,s){Ys[Zs++]=$l,Ys[Zs++]=zl,zl=n,$l=s}function bp(n,s,a){_n[vn++]=Ar,_n[vn++]=Rr,_n[vn++]=$i,$i=n;var c=Ar;n=Rr;var d=32-zt(c)-1;c&=~(1<<d),a+=1;var m=32-zt(s)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Ar=1<<32-zt(s)+d|a<<d|c,Rr=m+n}else Ar=1<<m|a<<d|c,Rr=n}function sh(n){n.return!==null&&(qi(n,1),bp(n,1,0))}function oh(n){for(;n===zl;)zl=Ys[--Zs],Ys[Zs]=null,$l=Ys[--Zs],Ys[Zs]=null;for(;n===$i;)$i=_n[--vn],_n[vn]=null,Rr=_n[--vn],_n[vn]=null,Ar=_n[--vn],_n[vn]=null}var ln=null,un=null,Je=!1,Mn=null;function Mp(n,s){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Fp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,ln=n,un=Zr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,ln=n,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=$i!==null?{id:Ar,overflow:Rr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,ln=n,un=null,!0):!1;default:return!1}}function ah(n){return(n.mode&1)!==0&&(n.flags&128)===0}function lh(n){if(Je){var s=un;if(s){var a=s;if(!Fp(n,s)){if(ah(n))throw Error(t(418));s=Zr(a.nextSibling);var c=ln;s&&Fp(n,s)?Mp(c,a):(n.flags=n.flags&-4097|2,Je=!1,ln=n)}}else{if(ah(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,ln=n}}}function Up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ln=n}function ql(n){if(n!==ln)return!1;if(!Je)return Up(n),Je=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Zc(n.type,n.memoizedProps)),s&&(s=un)){if(ah(n))throw jp(),Error(t(418));for(;s;)Mp(n,s),s=Zr(s.nextSibling)}if(Up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){un=Zr(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}un=null}}else un=ln?Zr(n.stateNode.nextSibling):null;return!0}function jp(){for(var n=un;n;)n=Zr(n.nextSibling)}function eo(){un=ln=null,Je=!1}function uh(n){Mn===null?Mn=[n]:Mn.push(n)}var Cw=ge.ReactCurrentBatchConfig;function ma(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var A=d.refs;v===null?delete A[m]:A[m]=v},s._stringRef=m,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Hl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Bp(n){var s=n._init;return s(n._payload)}function zp(n){function s(b,N){if(n){var M=b.deletions;M===null?(b.deletions=[N],b.flags|=16):M.push(N)}}function a(b,N){if(!n)return null;for(;N!==null;)s(b,N),N=N.sibling;return null}function c(b,N){for(b=new Map;N!==null;)N.key!==null?b.set(N.key,N):b.set(N.index,N),N=N.sibling;return b}function d(b,N){return b=ci(b,N),b.index=0,b.sibling=null,b}function m(b,N,M){return b.index=M,n?(M=b.alternate,M!==null?(M=M.index,M<N?(b.flags|=2,N):M):(b.flags|=2,N)):(b.flags|=1048576,N)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function A(b,N,M,X){return N===null||N.tag!==6?(N=ed(M,b.mode,X),N.return=b,N):(N=d(N,M),N.return=b,N)}function k(b,N,M,X){var ue=M.type;return ue===R?G(b,N,M.props.children,X,M.key):N!==null&&(N.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Ot&&Bp(ue)===N.type)?(X=d(N,M.props),X.ref=ma(b,N,M),X.return=b,X):(X=mu(M.type,M.key,M.props,null,b.mode,X),X.ref=ma(b,N,M),X.return=b,X)}function U(b,N,M,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==M.containerInfo||N.stateNode.implementation!==M.implementation?(N=td(M,b.mode,X),N.return=b,N):(N=d(N,M.children||[]),N.return=b,N)}function G(b,N,M,X,ue){return N===null||N.tag!==7?(N=Yi(M,b.mode,X,ue),N.return=b,N):(N=d(N,M),N.return=b,N)}function Q(b,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return N=ed(""+N,b.mode,M),N.return=b,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ae:return M=mu(N.type,N.key,N.props,null,b.mode,M),M.ref=ma(b,null,N),M.return=b,M;case ye:return N=td(N,b.mode,M),N.return=b,N;case Ot:var X=N._init;return Q(b,X(N._payload),M)}if(pr(N)||he(N))return N=Yi(N,b.mode,M,null),N.return=b,N;Hl(b,N)}return null}function K(b,N,M,X){var ue=N!==null?N.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return ue!==null?null:A(b,N,""+M,X);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ae:return M.key===ue?k(b,N,M,X):null;case ye:return M.key===ue?U(b,N,M,X):null;case Ot:return ue=M._init,K(b,N,ue(M._payload),X)}if(pr(M)||he(M))return ue!==null?null:G(b,N,M,X,null);Hl(b,M)}return null}function ee(b,N,M,X,ue){if(typeof X=="string"&&X!==""||typeof X=="number")return b=b.get(M)||null,A(N,b,""+X,ue);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ae:return b=b.get(X.key===null?M:X.key)||null,k(N,b,X,ue);case ye:return b=b.get(X.key===null?M:X.key)||null,U(N,b,X,ue);case Ot:var de=X._init;return ee(b,N,M,de(X._payload),ue)}if(pr(X)||he(X))return b=b.get(M)||null,G(N,b,X,ue,null);Hl(N,X)}return null}function ae(b,N,M,X){for(var ue=null,de=null,fe=N,_e=N=0,Tt=null;fe!==null&&_e<M.length;_e++){fe.index>_e?(Tt=fe,fe=null):Tt=fe.sibling;var Me=K(b,fe,M[_e],X);if(Me===null){fe===null&&(fe=Tt);break}n&&fe&&Me.alternate===null&&s(b,fe),N=m(Me,N,_e),de===null?ue=Me:de.sibling=Me,de=Me,fe=Tt}if(_e===M.length)return a(b,fe),Je&&qi(b,_e),ue;if(fe===null){for(;_e<M.length;_e++)fe=Q(b,M[_e],X),fe!==null&&(N=m(fe,N,_e),de===null?ue=fe:de.sibling=fe,de=fe);return Je&&qi(b,_e),ue}for(fe=c(b,fe);_e<M.length;_e++)Tt=ee(fe,b,_e,M[_e],X),Tt!==null&&(n&&Tt.alternate!==null&&fe.delete(Tt.key===null?_e:Tt.key),N=m(Tt,N,_e),de===null?ue=Tt:de.sibling=Tt,de=Tt);return n&&fe.forEach(function(hi){return s(b,hi)}),Je&&qi(b,_e),ue}function le(b,N,M,X){var ue=he(M);if(typeof ue!="function")throw Error(t(150));if(M=ue.call(M),M==null)throw Error(t(151));for(var de=ue=null,fe=N,_e=N=0,Tt=null,Me=M.next();fe!==null&&!Me.done;_e++,Me=M.next()){fe.index>_e?(Tt=fe,fe=null):Tt=fe.sibling;var hi=K(b,fe,Me.value,X);if(hi===null){fe===null&&(fe=Tt);break}n&&fe&&hi.alternate===null&&s(b,fe),N=m(hi,N,_e),de===null?ue=hi:de.sibling=hi,de=hi,fe=Tt}if(Me.done)return a(b,fe),Je&&qi(b,_e),ue;if(fe===null){for(;!Me.done;_e++,Me=M.next())Me=Q(b,Me.value,X),Me!==null&&(N=m(Me,N,_e),de===null?ue=Me:de.sibling=Me,de=Me);return Je&&qi(b,_e),ue}for(fe=c(b,fe);!Me.done;_e++,Me=M.next())Me=ee(fe,b,_e,Me.value,X),Me!==null&&(n&&Me.alternate!==null&&fe.delete(Me.key===null?_e:Me.key),N=m(Me,N,_e),de===null?ue=Me:de.sibling=Me,de=Me);return n&&fe.forEach(function(sE){return s(b,sE)}),Je&&qi(b,_e),ue}function it(b,N,M,X){if(typeof M=="object"&&M!==null&&M.type===R&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Ae:e:{for(var ue=M.key,de=N;de!==null;){if(de.key===ue){if(ue=M.type,ue===R){if(de.tag===7){a(b,de.sibling),N=d(de,M.props.children),N.return=b,b=N;break e}}else if(de.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Ot&&Bp(ue)===de.type){a(b,de.sibling),N=d(de,M.props),N.ref=ma(b,de,M),N.return=b,b=N;break e}a(b,de);break}else s(b,de);de=de.sibling}M.type===R?(N=Yi(M.props.children,b.mode,X,M.key),N.return=b,b=N):(X=mu(M.type,M.key,M.props,null,b.mode,X),X.ref=ma(b,N,M),X.return=b,b=X)}return v(b);case ye:e:{for(de=M.key;N!==null;){if(N.key===de)if(N.tag===4&&N.stateNode.containerInfo===M.containerInfo&&N.stateNode.implementation===M.implementation){a(b,N.sibling),N=d(N,M.children||[]),N.return=b,b=N;break e}else{a(b,N);break}else s(b,N);N=N.sibling}N=td(M,b.mode,X),N.return=b,b=N}return v(b);case Ot:return de=M._init,it(b,N,de(M._payload),X)}if(pr(M))return ae(b,N,M,X);if(he(M))return le(b,N,M,X);Hl(b,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,N!==null&&N.tag===6?(a(b,N.sibling),N=d(N,M),N.return=b,b=N):(a(b,N),N=ed(M,b.mode,X),N.return=b,b=N),v(b)):a(b,N)}return it}var to=zp(!0),$p=zp(!1),Wl=ei(null),Kl=null,no=null,ch=null;function hh(){ch=no=Kl=null}function dh(n){var s=Wl.current;Ge(Wl),n._currentValue=s}function fh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function ro(n,s){Kl=n,ch=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&s&&(Jt=!0),n.firstContext=null)}function wn(n){var s=n._currentValue;if(ch!==n)if(n={context:n,memoizedValue:s,next:null},no===null){if(Kl===null)throw Error(t(308));no=n,Kl.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return s}var Hi=null;function ph(n){Hi===null?Hi=[n]:Hi.push(n)}function qp(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,ph(s)):(a.next=d.next,d.next=a),s.interleaved=a,Cr(n,c)}function Cr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ri=!1;function mh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ii(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,be&2){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Cr(n,a)}return d=c.interleaved,d===null?(s.next=s,ph(c)):(s.next=d.next,d.next=s),c.interleaved=s,Cr(n,a)}function Gl(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Kr(n,a)}}function Wp(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function Ql(n,s,a,c){var d=n.updateQueue;ri=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var k=A,U=k.next;k.next=null,v===null?m=U:v.next=U,v=k;var G=n.alternate;G!==null&&(G=G.updateQueue,A=G.lastBaseUpdate,A!==v&&(A===null?G.firstBaseUpdate=U:A.next=U,G.lastBaseUpdate=k))}if(m!==null){var Q=d.baseState;v=0,G=U=k=null,A=m;do{var K=A.lane,ee=A.eventTime;if((c&K)===K){G!==null&&(G=G.next={eventTime:ee,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ae=n,le=A;switch(K=s,ee=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){Q=ae.call(ee,Q,K);break e}Q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,K=typeof ae=="function"?ae.call(ee,Q,K):ae,K==null)break e;Q=te({},Q,K);break e;case 2:ri=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[A]:K.push(A))}else ee={eventTime:ee,lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},G===null?(U=G=ee,k=Q):G=G.next=ee,v|=K;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;K=A,A=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(G===null&&(k=Q),d.baseState=k,d.firstBaseUpdate=U,d.lastBaseUpdate=G,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);Gi|=v,n.lanes=v,n.memoizedState=Q}}function Kp(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ga={},tr=ei(ga),ya=ei(ga),_a=ei(ga);function Wi(n){if(n===ga)throw Error(t(174));return n}function gh(n,s){switch(We(_a,s),We(ya,n),We(tr,ga),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ht(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=ht(s,n)}Ge(tr),We(tr,s)}function io(){Ge(tr),Ge(ya),Ge(_a)}function Gp(n){Wi(_a.current);var s=Wi(tr.current),a=ht(s,n.type);s!==a&&(We(ya,n),We(tr,a))}function yh(n){ya.current===n&&(Ge(tr),Ge(ya))}var Xe=ei(0);function Jl(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var _h=[];function vh(){for(var n=0;n<_h.length;n++)_h[n]._workInProgressVersionPrimary=null;_h.length=0}var Xl=ge.ReactCurrentDispatcher,wh=ge.ReactCurrentBatchConfig,Ki=0,Ye=null,ft=null,wt=null,Yl=!1,va=!1,wa=0,Pw=0;function Vt(){throw Error(t(321))}function Eh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!bn(n[a],s[a]))return!1;return!0}function Th(n,s,a,c,d,m){if(Ki=m,Ye=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Xl.current=n===null||n.memoizedState===null?Ow:xw,n=a(c,d),va){m=0;do{if(va=!1,wa=0,25<=m)throw Error(t(301));m+=1,wt=ft=null,s.updateQueue=null,Xl.current=Vw,n=a(c,d)}while(va)}if(Xl.current=tu,s=ft!==null&&ft.next!==null,Ki=0,wt=ft=Ye=null,Yl=!1,s)throw Error(t(300));return n}function Ih(){var n=wa!==0;return wa=0,n}function nr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ye.memoizedState=wt=n:wt=wt.next=n,wt}function En(){if(ft===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var s=wt===null?Ye.memoizedState:wt.next;if(s!==null)wt=s,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},wt===null?Ye.memoizedState=wt=n:wt=wt.next=n}return wt}function Ea(n,s){return typeof s=="function"?s(n):s}function Sh(n){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ft,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var A=v=null,k=null,U=m;do{var G=U.lane;if((Ki&G)===G)k!==null&&(k=k.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Q={lane:G,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};k===null?(A=k=Q,v=c):k=k.next=Q,Ye.lanes|=G,Gi|=G}U=U.next}while(U!==null&&U!==m);k===null?v=c:k.next=A,bn(c,s.memoizedState)||(Jt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ye.lanes|=m,Gi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Ah(n){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);bn(m,s.memoizedState)||(Jt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function Qp(){}function Jp(n,s){var a=Ye,c=En(),d=s(),m=!bn(c.memoizedState,d);if(m&&(c.memoizedState=d,Jt=!0),c=c.queue,Rh(Zp.bind(null,a,c,n),[n]),c.getSnapshot!==s||m||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,Ta(9,Yp.bind(null,a,c,d,s),void 0,null),Et===null)throw Error(t(349));Ki&30||Xp(a,s,d)}return d}function Xp(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=Ye.updateQueue,s===null?(s={lastEffect:null,stores:null},Ye.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function Yp(n,s,a,c){s.value=a,s.getSnapshot=c,em(s)&&tm(n)}function Zp(n,s,a){return a(function(){em(s)&&tm(n)})}function em(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!bn(n,a)}catch{return!0}}function tm(n){var s=Cr(n,1);s!==null&&Bn(s,n,1,-1)}function nm(n){var s=nr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},s.queue=n,n=n.dispatch=Dw.bind(null,Ye,n),[s.memoizedState,n]}function Ta(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=Ye.updateQueue,s===null?(s={lastEffect:null,stores:null},Ye.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function rm(){return En().memoizedState}function Zl(n,s,a,c){var d=nr();Ye.flags|=n,d.memoizedState=Ta(1|s,a,void 0,c===void 0?null:c)}function eu(n,s,a,c){var d=En();c=c===void 0?null:c;var m=void 0;if(ft!==null){var v=ft.memoizedState;if(m=v.destroy,c!==null&&Eh(c,v.deps)){d.memoizedState=Ta(s,a,m,c);return}}Ye.flags|=n,d.memoizedState=Ta(1|s,a,m,c)}function im(n,s){return Zl(8390656,8,n,s)}function Rh(n,s){return eu(2048,8,n,s)}function sm(n,s){return eu(4,2,n,s)}function om(n,s){return eu(4,4,n,s)}function am(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function lm(n,s,a){return a=a!=null?a.concat([n]):null,eu(4,4,am.bind(null,s,n),a)}function Ch(){}function um(n,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Eh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function cm(n,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Eh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function hm(n,s,a){return Ki&21?(bn(a,s)||(a=bi(),Ye.lanes|=a,Gi|=a,n.baseState=!0),s):(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a)}function kw(n,s){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=wh.transition;wh.transition={};try{n(!1),s()}finally{De=a,wh.transition=c}}function dm(){return En().memoizedState}function Nw(n,s,a){var c=li(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fm(n))pm(s,a);else if(a=qp(n,s,a,c),a!==null){var d=Ht();Bn(a,n,c,d),mm(a,s,c)}}function Dw(n,s,a){var c=li(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fm(n))pm(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,a);if(d.hasEagerState=!0,d.eagerState=A,bn(A,v)){var k=s.interleaved;k===null?(d.next=d,ph(s)):(d.next=k.next,k.next=d),s.interleaved=d;return}}catch{}finally{}a=qp(n,s,d,c),a!==null&&(d=Ht(),Bn(a,n,c,d),mm(a,s,c))}}function fm(n){var s=n.alternate;return n===Ye||s!==null&&s===Ye}function pm(n,s){va=Yl=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function mm(n,s,a){if(a&4194240){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Kr(n,a)}}var tu={readContext:wn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Ow={readContext:wn,useCallback:function(n,s){return nr().memoizedState=[n,s===void 0?null:s],n},useContext:wn,useEffect:im,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,Zl(4194308,4,am.bind(null,s,n),a)},useLayoutEffect:function(n,s){return Zl(4194308,4,n,s)},useInsertionEffect:function(n,s){return Zl(4,2,n,s)},useMemo:function(n,s){var a=nr();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=nr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=Nw.bind(null,Ye,n),[c.memoizedState,n]},useRef:function(n){var s=nr();return n={current:n},s.memoizedState=n},useState:nm,useDebugValue:Ch,useDeferredValue:function(n){return nr().memoizedState=n},useTransition:function(){var n=nm(!1),s=n[0];return n=kw.bind(null,n[1]),nr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=Ye,d=nr();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Et===null)throw Error(t(349));Ki&30||Xp(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,im(Zp.bind(null,c,m,n),[n]),c.flags|=2048,Ta(9,Yp.bind(null,c,m,a,s),void 0,null),a},useId:function(){var n=nr(),s=Et.identifierPrefix;if(Je){var a=Rr,c=Ar;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=wa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Pw++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},xw={readContext:wn,useCallback:um,useContext:wn,useEffect:Rh,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:cm,useReducer:Sh,useRef:rm,useState:function(){return Sh(Ea)},useDebugValue:Ch,useDeferredValue:function(n){var s=En();return hm(s,ft.memoizedState,n)},useTransition:function(){var n=Sh(Ea)[0],s=En().memoizedState;return[n,s]},useMutableSource:Qp,useSyncExternalStore:Jp,useId:dm,unstable_isNewReconciler:!1},Vw={readContext:wn,useCallback:um,useContext:wn,useEffect:Rh,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:cm,useReducer:Ah,useRef:rm,useState:function(){return Ah(Ea)},useDebugValue:Ch,useDeferredValue:function(n){var s=En();return ft===null?s.memoizedState=n:hm(s,ft.memoizedState,n)},useTransition:function(){var n=Ah(Ea)[0],s=En().memoizedState;return[n,s]},useMutableSource:Qp,useSyncExternalStore:Jp,useId:dm,unstable_isNewReconciler:!1};function Fn(n,s){if(n&&n.defaultProps){s=te({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Ph(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:te({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var nu={isMounted:function(n){return(n=n._reactInternals)?kn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Ht(),d=li(n),m=Pr(c,d);m.payload=s,a!=null&&(m.callback=a),s=ii(n,m,d),s!==null&&(Bn(s,n,d,c),Gl(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Ht(),d=li(n),m=Pr(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=ii(n,m,d),s!==null&&(Bn(s,n,d,c),Gl(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Ht(),c=li(n),d=Pr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ii(n,d,c),s!==null&&(Bn(s,n,c,a),Gl(s,n,c))}};function gm(n,s,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):s.prototype&&s.prototype.isPureReactComponent?!la(a,c)||!la(d,m):!0}function ym(n,s,a){var c=!1,d=ti,m=s.contextType;return typeof m=="object"&&m!==null?m=wn(m):(d=Qt(s)?zi:xt.current,c=s.contextTypes,m=(c=c!=null)?Xs(n,d):ti),s=new s(a,m),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=nu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),s}function _m(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&nu.enqueueReplaceState(s,s.state,null)}function kh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},mh(n);var m=s.contextType;typeof m=="object"&&m!==null?d.context=wn(m):(m=Qt(s)?zi:xt.current,d.context=Xs(n,m)),d.state=n.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Ph(n,s,m,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&nu.enqueueReplaceState(d,d.state,null),Ql(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function so(n,s){try{var a="",c=s;do a+=Ce(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:s,stack:d,digest:null}}function Nh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Dh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Lw=typeof WeakMap=="function"?WeakMap:Map;function vm(n,s,a){a=Pr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){uu||(uu=!0,Wh=c),Dh(n,s)},a}function wm(n,s,a){a=Pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Dh(n,s)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Dh(n,s),typeof c!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Em(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Lw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=Qw.bind(null,n,s,a),s.then(n,n))}function Tm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Im(n,s,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Pr(-1,1),s.tag=2,ii(a,s,1))),a.lanes|=1),n)}var bw=ge.ReactCurrentOwner,Jt=!1;function qt(n,s,a,c){s.child=n===null?$p(s,null,a,c):to(s,n.child,a,c)}function Sm(n,s,a,c,d){a=a.render;var m=s.ref;return ro(s,d),c=Th(n,s,a,c,m,d),a=Ih(),n!==null&&!Jt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,kr(n,s,d)):(Je&&a&&sh(s),s.flags|=1,qt(n,s,c,d),s.child)}function Am(n,s,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Zh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,Rm(n,s,m,c,d)):(n=mu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,!(n.lanes&d)){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(v,c)&&n.ref===s.ref)return kr(n,s,d)}return s.flags|=1,n=ci(m,c),n.ref=s.ref,n.return=s,s.child=n}function Rm(n,s,a,c,d){if(n!==null){var m=n.memoizedProps;if(la(m,c)&&n.ref===s.ref)if(Jt=!1,s.pendingProps=c=m,(n.lanes&d)!==0)n.flags&131072&&(Jt=!0);else return s.lanes=n.lanes,kr(n,s,d)}return Oh(n,s,a,c,d)}function Cm(n,s,a){var c=s.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(ao,cn),cn|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,We(ao,cn),cn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,We(ao,cn),cn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,We(ao,cn),cn|=c;return qt(n,s,d,a),s.child}function Pm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Oh(n,s,a,c,d){var m=Qt(a)?zi:xt.current;return m=Xs(s,m),ro(s,d),a=Th(n,s,a,c,m,d),c=Ih(),n!==null&&!Jt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,kr(n,s,d)):(Je&&c&&sh(s),s.flags|=1,qt(n,s,a,d),s.child)}function km(n,s,a,c,d){if(Qt(a)){var m=!0;jl(s)}else m=!1;if(ro(s,d),s.stateNode===null)iu(n,s),ym(s,a,c),kh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,A=s.memoizedProps;v.props=A;var k=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=wn(U):(U=Qt(a)?zi:xt.current,U=Xs(s,U));var G=a.getDerivedStateFromProps,Q=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||k!==U)&&_m(s,v,c,U),ri=!1;var K=s.memoizedState;v.state=K,Ql(s,c,v,d),k=s.memoizedState,A!==c||K!==k||Gt.current||ri?(typeof G=="function"&&(Ph(s,a,G,c),k=s.memoizedState),(A=ri||gm(s,a,A,c,K,k,U))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=k),v.props=c,v.state=k,v.context=U,c=A):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Hp(n,s),A=s.memoizedProps,U=s.type===s.elementType?A:Fn(s.type,A),v.props=U,Q=s.pendingProps,K=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=wn(k):(k=Qt(a)?zi:xt.current,k=Xs(s,k));var ee=a.getDerivedStateFromProps;(G=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==Q||K!==k)&&_m(s,v,c,k),ri=!1,K=s.memoizedState,v.state=K,Ql(s,c,v,d);var ae=s.memoizedState;A!==Q||K!==ae||Gt.current||ri?(typeof ee=="function"&&(Ph(s,a,ee,c),ae=s.memoizedState),(U=ri||gm(s,a,U,c,K,ae,k)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ae),v.props=c,v.state=ae,v.context=k,c=U):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),c=!1)}return xh(n,s,a,c,m,d)}function xh(n,s,a,c,d,m){Pm(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Vp(s,a,!1),kr(n,s,m);c=s.stateNode,bw.current=s;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=to(s,n.child,null,m),s.child=to(s,null,A,m)):qt(n,s,A,m),s.memoizedState=c.state,d&&Vp(s,a,!0),s.child}function Nm(n){var s=n.stateNode;s.pendingContext?Op(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Op(n,s.context,!1),gh(n,s.containerInfo)}function Dm(n,s,a,c,d){return eo(),uh(d),s.flags|=256,qt(n,s,a,c),s.child}var Vh={dehydrated:null,treeContext:null,retryLane:0};function Lh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Om(n,s,a){var c=s.pendingProps,d=Xe.current,m=!1,v=(s.flags&128)!==0,A;if((A=v)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(m=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Xe,d&1),n===null)return lh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(s.mode&1?n.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,n=c.fallback,m?(c=s.mode,m=s.child,v={mode:"hidden",children:v},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=v):m=gu(v,c,0,null),n=Yi(n,c,a,null),m.return=s,n.return=s,m.sibling=n,s.child=m,s.child.memoizedState=Lh(a),s.memoizedState=Vh,n):bh(s,v));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return Mw(n,s,v,c,A,d,a);if(m){m=c.fallback,v=s.mode,d=n.child,A=d.sibling;var k={mode:"hidden",children:c.children};return!(v&1)&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=ci(d,k),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?m=ci(A,m):(m=Yi(m,v,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,v=n.child.memoizedState,v=v===null?Lh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,s.memoizedState=Vh,c}return m=n.child,n=m.sibling,c=ci(m,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function bh(n,s){return s=gu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function ru(n,s,a,c){return c!==null&&uh(c),to(s,n.child,null,a),n=bh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function Mw(n,s,a,c,d,m,v){if(a)return s.flags&256?(s.flags&=-257,c=Nh(Error(t(422))),ru(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=gu({mode:"visible",children:c.children},d,0,null),m=Yi(m,d,v,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,s.mode&1&&to(s,n.child,null,v),s.child.memoizedState=Lh(v),s.memoizedState=Vh,m);if(!(s.mode&1))return ru(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,m=Error(t(419)),c=Nh(m,c,void 0),ru(n,s,v,c)}if(A=(v&n.childLanes)!==0,Jt||A){if(c=Et,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Cr(n,d),Bn(c,n,d,-1))}return Yh(),c=Nh(Error(t(421))),ru(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=Jw.bind(null,n),d._reactRetry=s,null):(n=m.treeContext,un=Zr(d.nextSibling),ln=s,Je=!0,Mn=null,n!==null&&(_n[vn++]=Ar,_n[vn++]=Rr,_n[vn++]=$i,Ar=n.id,Rr=n.overflow,$i=s),s=bh(s,c.children),s.flags|=4096,s)}function xm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),fh(n.return,s,a)}function Mh(n,s,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Vm(n,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(qt(n,s,c.children,a),c=Xe.current,c&2)c=c&1|2,s.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xm(n,a,s);else if(n.tag===19)xm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Xe,c),!(s.mode&1))s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&Jl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Mh(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&Jl(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Mh(s,!0,a,null,m);break;case"together":Mh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function iu(n,s){!(s.mode&1)&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function kr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),Gi|=s.lanes,!(a&s.childLanes))return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=ci(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=ci(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function Fw(n,s,a){switch(s.tag){case 3:Nm(s),eo();break;case 5:Gp(s);break;case 1:Qt(s.type)&&jl(s);break;case 4:gh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;We(Wl,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Xe,Xe.current&1),s.flags|=128,null):a&s.child.childLanes?Om(n,s,a):(We(Xe,Xe.current&1),n=kr(n,s,a),n!==null?n.sibling:null);We(Xe,Xe.current&1);break;case 19:if(c=(a&s.childLanes)!==0,n.flags&128){if(c)return Vm(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Xe,Xe.current),c)break;return null;case 22:case 23:return s.lanes=0,Cm(n,s,a)}return kr(n,s,a)}var Lm,Fh,bm,Mm;Lm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Fh=function(){},bm=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,Wi(tr.current);var m=null;switch(a){case"input":d=Ai(n,d),c=Ai(n,c),m=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),m=[];break;case"textarea":d=Mo(n,d),c=Mo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ml)}$o(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var A=d[U];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in c){var k=c[U];if(A=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&k!==A&&(k!=null||A!=null))if(U==="style")if(A){for(v in A)!A.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&A[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(m||(m=[]),m.push(U,a)),a=k;else U==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,A=A?A.__html:void 0,k!=null&&A!==k&&(m=m||[]).push(U,k)):U==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(U,""+k):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(k!=null&&U==="onScroll"&&Ke("scroll",n),m||A===k||(m=[])):(m=m||[]).push(U,k))}a&&(m=m||[]).push("style",a);var U=m;(s.updateQueue=U)&&(s.flags|=4)}},Mm=function(n,s,a,c){a!==c&&(s.flags|=4)};function Ia(n,s){if(!Je)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function Uw(n,s,a){var c=s.pendingProps;switch(oh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(s),null;case 1:return Qt(s.type)&&Ul(),Lt(s),null;case 3:return c=s.stateNode,io(),Ge(Gt),Ge(xt),vh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ql(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Mn!==null&&(Qh(Mn),Mn=null))),Fh(n,s),Lt(s),null;case 5:yh(s);var d=Wi(_a.current);if(a=s.type,n!==null&&s.stateNode!=null)bm(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Lt(s),null}if(n=Wi(tr.current),ql(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[er]=s,c[fa]=m,n=(s.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<ca.length;d++)Ke(ca[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":vs(c,m),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ke("invalid",c);break;case"textarea":Es(c,m),Ke("invalid",c)}$o(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var A=m[v];v==="children"?typeof A=="string"?c.textContent!==A&&(m.suppressHydrationWarning!==!0&&bl(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(m.suppressHydrationWarning!==!0&&bl(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":fr(c),ll(c,m,!0);break;case"textarea":fr(c),Fo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ml)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ct(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[er]=s,n[fa]=c,Lm(n,s,!1,!1),s.stateNode=n;e:{switch(v=qo(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<ca.length;d++)Ke(ca[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":vs(n,c),d=Ai(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Es(n,c),d=Mo(n,c),Ke("invalid",n);break;default:d=c}$o(a,d),A=d;for(m in A)if(A.hasOwnProperty(m)){var k=A[m];m==="style"?Bo(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Uo(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&zr(n,k):typeof k=="number"&&zr(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ke("scroll",n):k!=null&&oe(n,m,k,v))}switch(a){case"input":fr(n),ll(n,c,!1);break;case"textarea":fr(n),Fo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ue(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?mr(n,!!c.multiple,m,!1):c.defaultValue!=null&&mr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ml)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Lt(s),null;case 6:if(n&&s.stateNode!=null)Mm(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Wi(_a.current),Wi(tr.current),ql(s)){if(c=s.stateNode,a=s.memoizedProps,c[er]=s,(m=c.nodeValue!==a)&&(n=ln,n!==null))switch(n.tag){case 3:bl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bl(c.nodeValue,a,(n.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[er]=s,s.stateNode=c}return Lt(s),null;case 13:if(Ge(Xe),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&un!==null&&s.mode&1&&!(s.flags&128))jp(),eo(),s.flags|=98560,m=!1;else if(m=ql(s),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[er]=s}else eo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Lt(s),m=!1}else Mn!==null&&(Qh(Mn),Mn=null),m=!0;if(!m)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(n===null||Xe.current&1?pt===0&&(pt=3):Yh())),s.updateQueue!==null&&(s.flags|=4),Lt(s),null);case 4:return io(),Fh(n,s),n===null&&ha(s.stateNode.containerInfo),Lt(s),null;case 10:return dh(s.type._context),Lt(s),null;case 17:return Qt(s.type)&&Ul(),Lt(s),null;case 19:if(Ge(Xe),m=s.memoizedState,m===null)return Lt(s),null;if(c=(s.flags&128)!==0,v=m.rendering,v===null)if(c)Ia(m,!1);else{if(pt!==0||n!==null&&n.flags&128)for(n=s.child;n!==null;){if(v=Jl(n),v!==null){for(s.flags|=128,Ia(m,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Xe,Xe.current&1|2),s.child}n=n.sibling}m.tail!==null&&He()>lo&&(s.flags|=128,c=!0,Ia(m,!1),s.lanes=4194304)}else{if(!c)if(n=Jl(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ia(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Je)return Lt(s),null}else 2*He()-m.renderingStartTime>lo&&a!==1073741824&&(s.flags|=128,c=!0,Ia(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=He(),s.sibling=null,a=Xe.current,We(Xe,c?a&1|2:a&1),s):(Lt(s),null);case 22:case 23:return Xh(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?cn&1073741824&&(Lt(s),s.subtreeFlags&6&&(s.flags|=8192)):Lt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function jw(n,s){switch(oh(s),s.tag){case 1:return Qt(s.type)&&Ul(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return io(),Ge(Gt),Ge(xt),vh(),n=s.flags,n&65536&&!(n&128)?(s.flags=n&-65537|128,s):null;case 5:return yh(s),null;case 13:if(Ge(Xe),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));eo()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Ge(Xe),null;case 4:return io(),null;case 10:return dh(s.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var su=!1,bt=!1,Bw=typeof WeakSet=="function"?WeakSet:Set,re=null;function oo(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,s,c)}else a.current=null}function Uh(n,s,a){try{a()}catch(c){et(n,s,c)}}var Fm=!1;function zw(n,s){if(Xc=Jr,n=gp(),$c(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,A=-1,k=-1,U=0,G=0,Q=n,K=null;t:for(;;){for(var ee;Q!==a||d!==0&&Q.nodeType!==3||(A=v+d),Q!==m||c!==0&&Q.nodeType!==3||(k=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(ee=Q.firstChild)!==null;)K=Q,Q=ee;for(;;){if(Q===n)break t;if(K===a&&++U===d&&(A=v),K===m&&++G===c&&(k=v),(ee=Q.nextSibling)!==null)break;Q=K,K=Q.parentNode}Q=ee}a=A===-1||k===-1?null:{start:A,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:n,selectionRange:a},Jr=!1,re=s;re!==null;)if(s=re,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,re=n;else for(;re!==null;){s=re;try{var ae=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,it=ae.memoizedState,b=s.stateNode,N=b.getSnapshotBeforeUpdate(s.elementType===s.type?le:Fn(s.type,le),it);b.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var M=s.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){et(s,s.return,X)}if(n=s.sibling,n!==null){n.return=s.return,re=n;break}re=s.return}return ae=Fm,Fm=!1,ae}function Sa(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Uh(s,a,m)}d=d.next}while(d!==c)}}function ou(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function jh(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function Um(n){var s=n.alternate;s!==null&&(n.alternate=null,Um(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[er],delete s[fa],delete s[nh],delete s[Sw],delete s[Aw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jm(n){return n.tag===5||n.tag===3||n.tag===4}function Bm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Ml));else if(c!==4&&(n=n.child,n!==null))for(Bh(n,s,a),n=n.sibling;n!==null;)Bh(n,s,a),n=n.sibling}function zh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(zh(n,s,a),n=n.sibling;n!==null;)zh(n,s,a),n=n.sibling}var Rt=null,Un=!1;function si(n,s,a){for(a=a.child;a!==null;)zm(n,s,a),a=a.sibling}function zm(n,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Vi,a)}catch{}switch(a.tag){case 5:bt||oo(a,s);case 6:var c=Rt,d=Un;Rt=null,si(n,s,a),Rt=c,Un=d,Rt!==null&&(Un?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Un?(n=Rt,a=a.stateNode,n.nodeType===8?th(n.parentNode,a):n.nodeType===1&&th(n,a),Vn(n)):th(Rt,a.stateNode));break;case 4:c=Rt,d=Un,Rt=a.stateNode.containerInfo,Un=!0,si(n,s,a),Rt=c,Un=d;break;case 0:case 11:case 14:case 15:if(!bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&(m&2||m&4)&&Uh(a,s,v),d=d.next}while(d!==c)}si(n,s,a);break;case 1:if(!bt&&(oo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){et(a,s,A)}si(n,s,a);break;case 21:si(n,s,a);break;case 22:a.mode&1?(bt=(c=bt)||a.memoizedState!==null,si(n,s,a),bt=c):si(n,s,a);break;default:si(n,s,a)}}function $m(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Bw),s.forEach(function(c){var d=Xw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function jn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=s,A=v;e:for(;A!==null;){switch(A.tag){case 5:Rt=A.stateNode,Un=!1;break e;case 3:Rt=A.stateNode.containerInfo,Un=!0;break e;case 4:Rt=A.stateNode.containerInfo,Un=!0;break e}A=A.return}if(Rt===null)throw Error(t(160));zm(m,v,d),Rt=null,Un=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(U){et(d,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)qm(s,n),s=s.sibling}function qm(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(s,n),rr(n),c&4){try{Sa(3,n,n.return),ou(3,n)}catch(le){et(n,n.return,le)}try{Sa(5,n,n.return)}catch(le){et(n,n.return,le)}}break;case 1:jn(s,n),rr(n),c&512&&a!==null&&oo(a,a.return);break;case 5:if(jn(s,n),rr(n),c&512&&a!==null&&oo(a,a.return),n.flags&32){var d=n.stateNode;try{zr(d,"")}catch(le){et(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,A=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{A==="input"&&m.type==="radio"&&m.name!=null&&Lo(d,m),qo(A,v);var U=qo(A,m);for(v=0;v<k.length;v+=2){var G=k[v],Q=k[v+1];G==="style"?Bo(d,Q):G==="dangerouslySetInnerHTML"?Uo(d,Q):G==="children"?zr(d,Q):oe(d,G,Q,U)}switch(A){case"input":bo(d,m);break;case"textarea":Ts(d,m);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ee=m.value;ee!=null?mr(d,!!m.multiple,ee,!1):K!==!!m.multiple&&(m.defaultValue!=null?mr(d,!!m.multiple,m.defaultValue,!0):mr(d,!!m.multiple,m.multiple?[]:"",!1))}d[fa]=m}catch(le){et(n,n.return,le)}}break;case 6:if(jn(s,n),rr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(le){et(n,n.return,le)}}break;case 3:if(jn(s,n),rr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Vn(s.containerInfo)}catch(le){et(n,n.return,le)}break;case 4:jn(s,n),rr(n);break;case 13:jn(s,n),rr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Hh=He())),c&4&&$m(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(bt=(U=bt)||G,jn(s,n),bt=U):jn(s,n),rr(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!G&&n.mode&1)for(re=n,G=n.child;G!==null;){for(Q=re=G;re!==null;){switch(K=re,ee=K.child,K.tag){case 0:case 11:case 14:case 15:Sa(4,K,K.return);break;case 1:oo(K,K.return);var ae=K.stateNode;if(typeof ae.componentWillUnmount=="function"){c=K,a=K.return;try{s=c,ae.props=s.memoizedProps,ae.state=s.memoizedState,ae.componentWillUnmount()}catch(le){et(c,a,le)}}break;case 5:oo(K,K.return);break;case 22:if(K.memoizedState!==null){Km(Q);continue}}ee!==null?(ee.return=K,re=ee):Km(Q)}G=G.sibling}e:for(G=null,Q=n;;){if(Q.tag===5){if(G===null){G=Q;try{d=Q.stateNode,U?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(A=Q.stateNode,k=Q.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,A.style.display=jo("display",v))}catch(le){et(n,n.return,le)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(le){et(n,n.return,le)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:jn(s,n),rr(n),c&4&&$m(n);break;case 21:break;default:jn(s,n),rr(n)}}function rr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(jm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(zr(d,""),c.flags&=-33);var m=Bm(n);zh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,A=Bm(n);Bh(n,A,v);break;default:throw Error(t(161))}}catch(k){et(n,n.return,k)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function $w(n,s,a){re=n,Hm(n)}function Hm(n,s,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||su;if(!v){var A=d.alternate,k=A!==null&&A.memoizedState!==null||bt;A=su;var U=bt;if(su=v,(bt=k)&&!U)for(re=d;re!==null;)v=re,k=v.child,v.tag===22&&v.memoizedState!==null?Gm(d):k!==null?(k.return=v,re=k):Gm(d);for(;m!==null;)re=m,Hm(m),m=m.sibling;re=d,su=A,bt=U}Wm(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,re=m):Wm(n)}}function Wm(n){for(;re!==null;){var s=re;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:bt||ou(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!bt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&Kp(s,m,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Kp(s,v,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var G=U.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&Vn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||s.flags&512&&jh(s)}catch(K){et(s,s.return,K)}}if(s===n){re=null;break}if(a=s.sibling,a!==null){a.return=s.return,re=a;break}re=s.return}}function Km(n){for(;re!==null;){var s=re;if(s===n){re=null;break}var a=s.sibling;if(a!==null){a.return=s.return,re=a;break}re=s.return}}function Gm(n){for(;re!==null;){var s=re;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{ou(4,s)}catch(k){et(s,a,k)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(k){et(s,d,k)}}var m=s.return;try{jh(s)}catch(k){et(s,m,k)}break;case 5:var v=s.return;try{jh(s)}catch(k){et(s,v,k)}}}catch(k){et(s,s.return,k)}if(s===n){re=null;break}var A=s.sibling;if(A!==null){A.return=s.return,re=A;break}re=s.return}}var qw=Math.ceil,au=ge.ReactCurrentDispatcher,$h=ge.ReactCurrentOwner,Tn=ge.ReactCurrentBatchConfig,be=0,Et=null,at=null,Ct=0,cn=0,ao=ei(0),pt=0,Aa=null,Gi=0,lu=0,qh=0,Ra=null,Xt=null,Hh=0,lo=1/0,Nr=null,uu=!1,Wh=null,oi=null,cu=!1,ai=null,hu=0,Ca=0,Kh=null,du=-1,fu=0;function Ht(){return be&6?He():du!==-1?du:du=He()}function li(n){return n.mode&1?be&2&&Ct!==0?Ct&-Ct:Cw.transition!==null?(fu===0&&(fu=bi()),fu):(n=De,n!==0||(n=window.event,n=n===void 0?16:ta(n.type)),n):1}function Bn(n,s,a,c){if(50<Ca)throw Ca=0,Kh=null,Error(t(185));Wr(n,a,c),(!(be&2)||n!==Et)&&(n===Et&&(!(be&2)&&(lu|=a),pt===4&&ui(n,Ct)),Yt(n,c),a===1&&be===0&&!(s.mode&1)&&(lo=He()+500,Bl&&ni()))}function Yt(n,s){var a=n.callbackNode;_r(n,s);var c=Li(n,n===Et?Ct:0);if(c===0)a!==null&&Jo(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&Jo(a),s===1)n.tag===0?Rw(Jm.bind(null,n)):Lp(Jm.bind(null,n)),Tw(function(){!(be&6)&&ni()}),a=null;else{switch(Gr(c)){case 1:a=xi;break;case 4:a=$r;break;case 16:a=mn;break;case 536870912:a=fl;break;default:a=mn}a=ig(a,Qm.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function Qm(n,s){if(du=-1,fu=0,be&6)throw Error(t(327));var a=n.callbackNode;if(uo()&&n.callbackNode!==a)return null;var c=Li(n,n===Et?Ct:0);if(c===0)return null;if(c&30||c&n.expiredLanes||s)s=pu(n,c);else{s=c;var d=be;be|=2;var m=Ym();(Et!==n||Ct!==s)&&(Nr=null,lo=He()+500,Ji(n,s));do try{Kw();break}catch(A){Xm(n,A)}while(!0);hh(),au.current=m,be=d,at!==null?s=0:(Et=null,Ct=0,s=pt)}if(s!==0){if(s===2&&(d=sn(n),d!==0&&(c=d,s=Gh(n,d))),s===1)throw a=Aa,Ji(n,0),ui(n,c),Yt(n,He()),a;if(s===6)ui(n,c);else{if(d=n.current.alternate,!(c&30)&&!Hw(d)&&(s=pu(n,c),s===2&&(m=sn(n),m!==0&&(c=m,s=Gh(n,m))),s===1))throw a=Aa,Ji(n,0),ui(n,c),Yt(n,He()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:Xi(n,Xt,Nr);break;case 3:if(ui(n,c),(c&130023424)===c&&(s=Hh+500-He(),10<s)){if(Li(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=eh(Xi.bind(null,n,Xt,Nr),s);break}Xi(n,Xt,Nr);break;case 4:if(ui(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-zt(c);m=1<<v,v=s[v],v>d&&(d=v),c&=~m}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*qw(c/1960))-c,10<c){n.timeoutHandle=eh(Xi.bind(null,n,Xt,Nr),c);break}Xi(n,Xt,Nr);break;case 5:Xi(n,Xt,Nr);break;default:throw Error(t(329))}}}return Yt(n,He()),n.callbackNode===a?Qm.bind(null,n):null}function Gh(n,s){var a=Ra;return n.current.memoizedState.isDehydrated&&(Ji(n,s).flags|=256),n=pu(n,s),n!==2&&(s=Xt,Xt=a,s!==null&&Qh(s)),n}function Qh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function Hw(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!bn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ui(n,s){for(s&=~qh,s&=~lu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-zt(s),c=1<<a;n[a]=-1,s&=~c}}function Jm(n){if(be&6)throw Error(t(327));uo();var s=Li(n,0);if(!(s&1))return Yt(n,He()),null;var a=pu(n,s);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(s=c,a=Gh(n,c))}if(a===1)throw a=Aa,Ji(n,0),ui(n,s),Yt(n,He()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,Xi(n,Xt,Nr),Yt(n,He()),null}function Jh(n,s){var a=be;be|=1;try{return n(s)}finally{be=a,be===0&&(lo=He()+500,Bl&&ni())}}function Qi(n){ai!==null&&ai.tag===0&&!(be&6)&&uo();var s=be;be|=1;var a=Tn.transition,c=De;try{if(Tn.transition=null,De=1,n)return n()}finally{De=c,Tn.transition=a,be=s,!(be&6)&&ni()}}function Xh(){cn=ao.current,Ge(ao)}function Ji(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Ew(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(oh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ul();break;case 3:io(),Ge(Gt),Ge(xt),vh();break;case 5:yh(c);break;case 4:io();break;case 13:Ge(Xe);break;case 19:Ge(Xe);break;case 10:dh(c.type._context);break;case 22:case 23:Xh()}a=a.return}if(Et=n,at=n=ci(n.current,null),Ct=cn=s,pt=0,Aa=null,qh=lu=Gi=0,Xt=Ra=null,Hi!==null){for(s=0;s<Hi.length;s++)if(a=Hi[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Hi=null}return n}function Xm(n,s){do{var a=at;try{if(hh(),Xl.current=tu,Yl){for(var c=Ye.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Yl=!1}if(Ki=0,wt=ft=Ye=null,va=!1,wa=0,$h.current=null,a===null||a.return===null){pt=1,Aa=s,at=null;break}e:{var m=n,v=a.return,A=a,k=s;if(s=Ct,A.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var U=k,G=A,Q=G.tag;if(!(G.mode&1)&&(Q===0||Q===11||Q===15)){var K=G.alternate;K?(G.updateQueue=K.updateQueue,G.memoizedState=K.memoizedState,G.lanes=K.lanes):(G.updateQueue=null,G.memoizedState=null)}var ee=Tm(v);if(ee!==null){ee.flags&=-257,Im(ee,v,A,m,s),ee.mode&1&&Em(m,U,s),s=ee,k=U;var ae=s.updateQueue;if(ae===null){var le=new Set;le.add(k),s.updateQueue=le}else ae.add(k);break e}else{if(!(s&1)){Em(m,U,s),Yh();break e}k=Error(t(426))}}else if(Je&&A.mode&1){var it=Tm(v);if(it!==null){!(it.flags&65536)&&(it.flags|=256),Im(it,v,A,m,s),uh(so(k,A));break e}}m=k=so(k,A),pt!==4&&(pt=2),Ra===null?Ra=[m]:Ra.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var b=vm(m,k,s);Wp(m,b);break e;case 1:A=k;var N=m.type,M=m.stateNode;if(!(m.flags&128)&&(typeof N.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(oi===null||!oi.has(M)))){m.flags|=65536,s&=-s,m.lanes|=s;var X=wm(m,A,s);Wp(m,X);break e}}m=m.return}while(m!==null)}eg(a)}catch(ue){s=ue,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function Ym(){var n=au.current;return au.current=tu,n===null?tu:n}function Yh(){(pt===0||pt===3||pt===2)&&(pt=4),Et===null||!(Gi&268435455)&&!(lu&268435455)||ui(Et,Ct)}function pu(n,s){var a=be;be|=2;var c=Ym();(Et!==n||Ct!==s)&&(Nr=null,Ji(n,s));do try{Ww();break}catch(d){Xm(n,d)}while(!0);if(hh(),be=a,au.current=c,at!==null)throw Error(t(261));return Et=null,Ct=0,pt}function Ww(){for(;at!==null;)Zm(at)}function Kw(){for(;at!==null&&!hl();)Zm(at)}function Zm(n){var s=rg(n.alternate,n,cn);n.memoizedProps=n.pendingProps,s===null?eg(n):at=s,$h.current=null}function eg(n){var s=n;do{var a=s.alternate;if(n=s.return,s.flags&32768){if(a=jw(a,s),a!==null){a.flags&=32767,at=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,at=null;return}}else if(a=Uw(a,s,cn),a!==null){at=a;return}if(s=s.sibling,s!==null){at=s;return}at=s=n}while(s!==null);pt===0&&(pt=5)}function Xi(n,s,a){var c=De,d=Tn.transition;try{Tn.transition=null,De=1,Gw(n,s,a,c)}finally{Tn.transition=d,De=c}return null}function Gw(n,s,a,c){do uo();while(ai!==null);if(be&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if($e(n,m),n===Et&&(at=Et=null,Ct=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||cu||(cu=!0,ig(mn,function(){return uo(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=Tn.transition,Tn.transition=null;var v=De;De=1;var A=be;be|=4,$h.current=null,zw(n,a),qm(a,n),pw(Yc),Jr=!!Xc,Yc=Xc=null,n.current=a,$w(a),Lc(),be=A,De=v,Tn.transition=m}else n.current=a;if(cu&&(cu=!1,ai=n,hu=d),m=n.pendingLanes,m===0&&(oi=null),pl(a.stateNode),Yt(n,He()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(uu)throw uu=!1,n=Wh,Wh=null,n;return hu&1&&n.tag!==0&&uo(),m=n.pendingLanes,m&1?n===Kh?Ca++:(Ca=0,Kh=n):Ca=0,ni(),null}function uo(){if(ai!==null){var n=Gr(hu),s=Tn.transition,a=De;try{if(Tn.transition=null,De=16>n?16:n,ai===null)var c=!1;else{if(n=ai,ai=null,hu=0,be&6)throw Error(t(331));var d=be;for(be|=4,re=n.current;re!==null;){var m=re,v=m.child;if(re.flags&16){var A=m.deletions;if(A!==null){for(var k=0;k<A.length;k++){var U=A[k];for(re=U;re!==null;){var G=re;switch(G.tag){case 0:case 11:case 15:Sa(8,G,m)}var Q=G.child;if(Q!==null)Q.return=G,re=Q;else for(;re!==null;){G=re;var K=G.sibling,ee=G.return;if(Um(G),G===U){re=null;break}if(K!==null){K.return=ee,re=K;break}re=ee}}}var ae=m.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var it=le.sibling;le.sibling=null,le=it}while(le!==null)}}re=m}}if(m.subtreeFlags&2064&&v!==null)v.return=m,re=v;else e:for(;re!==null;){if(m=re,m.flags&2048)switch(m.tag){case 0:case 11:case 15:Sa(9,m,m.return)}var b=m.sibling;if(b!==null){b.return=m.return,re=b;break e}re=m.return}}var N=n.current;for(re=N;re!==null;){v=re;var M=v.child;if(v.subtreeFlags&2064&&M!==null)M.return=v,re=M;else e:for(v=N;re!==null;){if(A=re,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:ou(9,A)}}catch(ue){et(A,A.return,ue)}if(A===v){re=null;break e}var X=A.sibling;if(X!==null){X.return=A.return,re=X;break e}re=A.return}}if(be=d,ni(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Vi,n)}catch{}c=!0}return c}finally{De=a,Tn.transition=s}}return!1}function tg(n,s,a){s=so(a,s),s=vm(n,s,1),n=ii(n,s,1),s=Ht(),n!==null&&(Wr(n,1,s),Yt(n,s))}function et(n,s,a){if(n.tag===3)tg(n,n,a);else for(;s!==null;){if(s.tag===3){tg(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(oi===null||!oi.has(c))){n=so(a,n),n=wm(s,n,1),s=ii(s,n,1),n=Ht(),s!==null&&(Wr(s,1,n),Yt(s,n));break}}s=s.return}}function Qw(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Ht(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(Ct&a)===a&&(pt===4||pt===3&&(Ct&130023424)===Ct&&500>He()-Hh?Ji(n,0):qh|=a),Yt(n,s)}function ng(n,s){s===0&&(n.mode&1?(s=Os,Os<<=1,!(Os&130023424)&&(Os=4194304)):s=1);var a=Ht();n=Cr(n,s),n!==null&&(Wr(n,s,a),Yt(n,a))}function Jw(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),ng(n,a)}function Xw(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),ng(n,a)}var rg;rg=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Gt.current)Jt=!0;else{if(!(n.lanes&a)&&!(s.flags&128))return Jt=!1,Fw(n,s,a);Jt=!!(n.flags&131072)}else Jt=!1,Je&&s.flags&1048576&&bp(s,$l,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;iu(n,s),n=s.pendingProps;var d=Xs(s,xt.current);ro(s,a),d=Th(null,s,c,n,d,a);var m=Ih();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Qt(c)?(m=!0,jl(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,mh(s),d.updater=nu,s.stateNode=d,d._reactInternals=s,kh(s,c,n,a),s=xh(null,s,c,!0,m,a)):(s.tag=0,Je&&m&&sh(s),qt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(iu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=Zw(c),n=Fn(c,n),d){case 0:s=Oh(null,s,c,n,a);break e;case 1:s=km(null,s,c,n,a);break e;case 11:s=Sm(null,s,c,n,a);break e;case 14:s=Am(null,s,c,Fn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Oh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),km(n,s,c,d,a);case 3:e:{if(Nm(s),n===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,Hp(n,s),Ql(s,c,null,a);var v=s.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=so(Error(t(423)),s),s=Dm(n,s,c,a,d);break e}else if(c!==d){d=so(Error(t(424)),s),s=Dm(n,s,c,a,d);break e}else for(un=Zr(s.stateNode.containerInfo.firstChild),ln=s,Je=!0,Mn=null,a=$p(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(eo(),c===d){s=kr(n,s,a);break e}qt(n,s,c,a)}s=s.child}return s;case 5:return Gp(s),n===null&&lh(s),c=s.type,d=s.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,Zc(c,d)?v=null:m!==null&&Zc(c,m)&&(s.flags|=32),Pm(n,s),qt(n,s,v,a),s.child;case 6:return n===null&&lh(s),null;case 13:return Om(n,s,a);case 4:return gh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=to(s,null,c,a):qt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Sm(n,s,c,d,a);case 7:return qt(n,s,s.pendingProps,a),s.child;case 8:return qt(n,s,s.pendingProps.children,a),s.child;case 12:return qt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,We(Wl,c._currentValue),c._currentValue=v,m!==null)if(bn(m.value,v)){if(m.children===d.children&&!Gt.current){s=kr(n,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var A=m.dependencies;if(A!==null){v=m.child;for(var k=A.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=Pr(-1,a&-a),k.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var G=U.pending;G===null?k.next=k:(k.next=G.next,G.next=k),U.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),fh(m.return,a,s),A.lanes|=a;break}k=k.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),fh(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}qt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,ro(s,a),d=wn(d),c=c(d),s.flags|=1,qt(n,s,c,a),s.child;case 14:return c=s.type,d=Fn(c,s.pendingProps),d=Fn(c.type,d),Am(n,s,c,d,a);case 15:return Rm(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),iu(n,s),s.tag=1,Qt(c)?(n=!0,jl(s)):n=!1,ro(s,a),ym(s,c,d),kh(s,c,d,a),xh(null,s,c,!0,n,a);case 19:return Vm(n,s,a);case 22:return Cm(n,s,a)}throw Error(t(156,s.tag))};function ig(n,s){return Ns(n,s)}function Yw(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(n,s,a,c){return new Yw(n,s,a,c)}function Zh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Zw(n){if(typeof n=="function")return Zh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===Dt)return 14}return 2}function ci(n,s){var a=n.alternate;return a===null?(a=In(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function mu(n,s,a,c,d,m){var v=2;if(c=n,typeof n=="function")Zh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case R:return Yi(a.children,d,m,s);case T:v=8,d|=8;break;case I:return n=In(12,a,s,d|2),n.elementType=I,n.lanes=m,n;case C:return n=In(13,a,s,d),n.elementType=C,n.lanes=m,n;case nt:return n=In(19,a,s,d),n.elementType=nt,n.lanes=m,n;case ze:return gu(a,d,m,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case O:v=9;break e;case V:v=11;break e;case Dt:v=14;break e;case Ot:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=In(v,a,s,d),s.elementType=n,s.type=c,s.lanes=m,s}function Yi(n,s,a,c){return n=In(7,n,c,s),n.lanes=a,n}function gu(n,s,a,c){return n=In(22,n,c,s),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function ed(n,s,a){return n=In(6,n,null,s),n.lanes=a,n}function td(n,s,a){return s=In(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function eE(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hr(0),this.expirationTimes=Hr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function nd(n,s,a,c,d,m,v,A,k){return n=new eE(n,s,a,A,k),s===1?(s=1,m===!0&&(s|=8)):s=0,m=In(3,null,null,s),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(m),n}function tE(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function sg(n){if(!n)return ti;n=n._reactInternals;e:{if(kn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Qt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return xp(n,a,s)}return s}function og(n,s,a,c,d,m,v,A,k){return n=nd(a,c,!0,n,d,m,v,A,k),n.context=sg(null),a=n.current,c=Ht(),d=li(a),m=Pr(c,d),m.callback=s??null,ii(a,m,d),n.current.lanes=d,Wr(n,d,c),Yt(n,c),n}function yu(n,s,a,c){var d=s.current,m=Ht(),v=li(d);return a=sg(a),s.context===null?s.context=a:s.pendingContext=a,s=Pr(m,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ii(d,s,v),n!==null&&(Bn(n,d,v,m),Gl(n,d,v)),v}function _u(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ag(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function rd(n,s){ag(n,s),(n=n.alternate)&&ag(n,s)}var lg=typeof reportError=="function"?reportError:function(n){console.error(n)};function id(n){this._internalRoot=n}vu.prototype.render=id.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));yu(n,s,null,null)},vu.prototype.unmount=id.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;Qi(function(){yu(null,n,null,null)}),s[Ir]=null}};function vu(n){this._internalRoot=n}vu.prototype.unstable_scheduleHydration=function(n){if(n){var s=vl();n={blockedOn:null,target:n,priority:s};for(var a=0;a<Jn.length&&s!==0&&s<Jn[a].priority;a++);Jn.splice(a,0,n),a===0&&Tl(n)}};function sd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ug(){}function nE(n,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var U=_u(v);m.call(U)}}var v=og(s,c,n,0,null,!1,!1,"",ug);return n._reactRootContainer=v,n[Ir]=v.current,ha(n.nodeType===8?n.parentNode:n),Qi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var U=_u(k);A.call(U)}}var k=nd(n,0,!1,null,null,!1,!1,"",ug);return n._reactRootContainer=k,n[Ir]=k.current,ha(n.nodeType===8?n.parentNode:n),Qi(function(){yu(s,k,a,c)}),k}function Eu(n,s,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var A=d;d=function(){var k=_u(v);A.call(k)}}yu(s,v,n,d)}else v=nE(a,s,n,d,c);return _u(v)}yl=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=qr(s.pendingLanes);a!==0&&(Kr(s,a|1),Yt(s,He()),!(be&6)&&(lo=He()+500,ni()))}break;case 13:Qi(function(){var c=Cr(n,1);if(c!==null){var d=Ht();Bn(c,n,1,d)}}),rd(n,1)}},xs=function(n){if(n.tag===13){var s=Cr(n,134217728);if(s!==null){var a=Ht();Bn(s,n,134217728,a)}rd(n,134217728)}},_l=function(n){if(n.tag===13){var s=li(n),a=Cr(n,s);if(a!==null){var c=Ht();Bn(a,n,s,c)}rd(n,s)}},vl=function(){return De},wl=function(n,s){var a=De;try{return De=n,s()}finally{De=a}},Ss=function(n,s,a){switch(s){case"input":if(bo(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=Fl(c);if(!d)throw Error(t(90));_s(c),bo(c,d)}}}break;case"textarea":Ts(n,a);break;case"select":s=a.value,s!=null&&mr(n,!!a.multiple,s,!1)}},ki=Jh,Wo=Qi;var rE={usingClientEntryPoint:!1,Events:[pa,Qs,Fl,Gn,Ho,Jh]},Pa={findFiberByHostInstance:Bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iE={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qo(n),n===null?null:n.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{Vi=Tu.inject(iE),rn=Tu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rE,Zt.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sd(s))throw Error(t(200));return tE(n,s,null,a)},Zt.createRoot=function(n,s){if(!sd(n))throw Error(t(299));var a=!1,c="",d=lg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=nd(n,1,!1,null,null,a,!1,c,d),n[Ir]=s.current,ha(n.nodeType===8?n.parentNode:n),new id(s)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Qo(s),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return Qi(n)},Zt.hydrate=function(n,s,a){if(!wu(s))throw Error(t(200));return Eu(null,n,s,!0,a)},Zt.hydrateRoot=function(n,s,a){if(!sd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=lg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=og(s,null,n,1,a??null,d,!1,m,v),n[Ir]=s.current,ha(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new vu(s)},Zt.render=function(n,s,a){if(!wu(s))throw Error(t(200));return Eu(null,n,s,!1,a)},Zt.unmountComponentAtNode=function(n){if(!wu(n))throw Error(t(40));return n._reactRootContainer?(Qi(function(){Eu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ir]=null})}),!0):!1},Zt.unstable_batchedUpdates=Jh,Zt.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!wu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Eu(n,s,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var yg;function dE(){if(yg)return ld.exports;yg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ld.exports=hE(),ld.exports}var _g;function fE(){if(_g)return Iu;_g=1;var r=dE();return Iu.createRoot=r.createRoot,Iu.hydrateRoot=r.hydrateRoot,Iu}var pE=fE();function n_(r,e){return function(){return r.apply(e,arguments)}}const{toString:mE}=Object.prototype,{getPrototypeOf:of}=Object,uc=(r=>e=>{const t=mE.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Hn=r=>(r=r.toLowerCase(),e=>uc(e)===r),cc=r=>e=>typeof e===r,{isArray:Co}=Array,ja=cc("undefined");function gE(r){return r!==null&&!ja(r)&&r.constructor!==null&&!ja(r.constructor)&&hn(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const r_=Hn("ArrayBuffer");function yE(r){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r_(r.buffer),e}const _E=cc("string"),hn=cc("function"),i_=cc("number"),hc=r=>r!==null&&typeof r=="object",vE=r=>r===!0||r===!1,Nu=r=>{if(uc(r)!=="object")return!1;const e=of(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},wE=Hn("Date"),EE=Hn("File"),TE=Hn("Blob"),IE=Hn("FileList"),SE=r=>hc(r)&&hn(r.pipe),AE=r=>{let e;return r&&(typeof FormData=="function"&&r instanceof FormData||hn(r.append)&&((e=uc(r))==="formdata"||e==="object"&&hn(r.toString)&&r.toString()==="[object FormData]"))},RE=Hn("URLSearchParams"),[CE,PE,kE,NE]=["ReadableStream","Request","Response","Headers"].map(Hn),DE=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ya(r,e,{allOwnKeys:t=!1}={}){if(r===null||typeof r>"u")return;let i,o;if(typeof r!="object"&&(r=[r]),Co(r))for(i=0,o=r.length;i<o;i++)e.call(null,r[i],i,r);else{const l=t?Object.getOwnPropertyNames(r):Object.keys(r),h=l.length;let f;for(i=0;i<h;i++)f=l[i],e.call(null,r[f],f,r)}}function s_(r,e){e=e.toLowerCase();const t=Object.keys(r);let i=t.length,o;for(;i-- >0;)if(o=t[i],e===o.toLowerCase())return o;return null}const es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,o_=r=>!ja(r)&&r!==es;function kd(){const{caseless:r}=o_(this)&&this||{},e={},t=(i,o)=>{const l=r&&s_(e,o)||o;Nu(e[l])&&Nu(i)?e[l]=kd(e[l],i):Nu(i)?e[l]=kd({},i):Co(i)?e[l]=i.slice():e[l]=i};for(let i=0,o=arguments.length;i<o;i++)arguments[i]&&Ya(arguments[i],t);return e}const OE=(r,e,t,{allOwnKeys:i}={})=>(Ya(e,(o,l)=>{t&&hn(o)?r[l]=n_(o,t):r[l]=o},{allOwnKeys:i}),r),xE=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),VE=(r,e,t,i)=>{r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:e.prototype}),t&&Object.assign(r.prototype,t)},LE=(r,e,t,i)=>{let o,l,h;const f={};if(e=e||{},r==null)return e;do{for(o=Object.getOwnPropertyNames(r),l=o.length;l-- >0;)h=o[l],(!i||i(h,r,e))&&!f[h]&&(e[h]=r[h],f[h]=!0);r=t!==!1&&of(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e},bE=(r,e,t)=>{r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;const i=r.indexOf(e,t);return i!==-1&&i===t},ME=r=>{if(!r)return null;if(Co(r))return r;let e=r.length;if(!i_(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=r[e];return t},FE=(r=>e=>r&&e instanceof r)(typeof Uint8Array<"u"&&of(Uint8Array)),UE=(r,e)=>{const i=(r&&r[Symbol.iterator]).call(r);let o;for(;(o=i.next())&&!o.done;){const l=o.value;e.call(r,l[0],l[1])}},jE=(r,e)=>{let t;const i=[];for(;(t=r.exec(e))!==null;)i.push(t);return i},BE=Hn("HTMLFormElement"),zE=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,o){return i.toUpperCase()+o}),vg=(({hasOwnProperty:r})=>(e,t)=>r.call(e,t))(Object.prototype),$E=Hn("RegExp"),a_=(r,e)=>{const t=Object.getOwnPropertyDescriptors(r),i={};Ya(t,(o,l)=>{let h;(h=e(o,l,r))!==!1&&(i[l]=h||o)}),Object.defineProperties(r,i)},qE=r=>{a_(r,(e,t)=>{if(hn(r)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=r[t];if(hn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},HE=(r,e)=>{const t={},i=o=>{o.forEach(l=>{t[l]=!0})};return Co(r)?i(r):i(String(r).split(e)),t},WE=()=>{},KE=(r,e)=>r!=null&&Number.isFinite(r=+r)?r:e,hd="abcdefghijklmnopqrstuvwxyz",wg="0123456789",l_={DIGIT:wg,ALPHA:hd,ALPHA_DIGIT:hd+hd.toUpperCase()+wg},GE=(r=16,e=l_.ALPHA_DIGIT)=>{let t="";const{length:i}=e;for(;r--;)t+=e[Math.random()*i|0];return t};function QE(r){return!!(r&&hn(r.append)&&r[Symbol.toStringTag]==="FormData"&&r[Symbol.iterator])}const JE=r=>{const e=new Array(10),t=(i,o)=>{if(hc(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[o]=i;const l=Co(i)?[]:{};return Ya(i,(h,f)=>{const g=t(h,o+1);!ja(g)&&(l[f]=g)}),e[o]=void 0,l}}return i};return t(r,0)},XE=Hn("AsyncFunction"),YE=r=>r&&(hc(r)||hn(r))&&hn(r.then)&&hn(r.catch),u_=((r,e)=>r?setImmediate:e?((t,i)=>(es.addEventListener("message",({source:o,data:l})=>{o===es&&l===t&&i.length&&i.shift()()},!1),o=>{i.push(o),es.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",hn(es.postMessage)),ZE=typeof queueMicrotask<"u"?queueMicrotask.bind(es):typeof process<"u"&&process.nextTick||u_,$={isArray:Co,isArrayBuffer:r_,isBuffer:gE,isFormData:AE,isArrayBufferView:yE,isString:_E,isNumber:i_,isBoolean:vE,isObject:hc,isPlainObject:Nu,isReadableStream:CE,isRequest:PE,isResponse:kE,isHeaders:NE,isUndefined:ja,isDate:wE,isFile:EE,isBlob:TE,isRegExp:$E,isFunction:hn,isStream:SE,isURLSearchParams:RE,isTypedArray:FE,isFileList:IE,forEach:Ya,merge:kd,extend:OE,trim:DE,stripBOM:xE,inherits:VE,toFlatObject:LE,kindOf:uc,kindOfTest:Hn,endsWith:bE,toArray:ME,forEachEntry:UE,matchAll:jE,isHTMLForm:BE,hasOwnProperty:vg,hasOwnProp:vg,reduceDescriptors:a_,freezeMethods:qE,toObjectSet:HE,toCamelCase:zE,noop:WE,toFiniteNumber:KE,findKey:s_,global:es,isContextDefined:o_,ALPHABET:l_,generateString:GE,isSpecCompliantForm:QE,toJSONObject:JE,isAsyncFn:XE,isThenable:YE,setImmediate:u_,asap:ZE};function Se(r,e,t,i,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),o&&(this.response=o,this.status=o.status?o.status:null)}$.inherits(Se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.status}}});const c_=Se.prototype,h_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{h_[r]={value:r}});Object.defineProperties(Se,h_);Object.defineProperty(c_,"isAxiosError",{value:!0});Se.from=(r,e,t,i,o,l)=>{const h=Object.create(c_);return $.toFlatObject(r,h,function(g){return g!==Error.prototype},f=>f!=="isAxiosError"),Se.call(h,r.message,e,t,i,o),h.cause=r,h.name=r.name,l&&Object.assign(h,l),h};const eT=null;function Nd(r){return $.isPlainObject(r)||$.isArray(r)}function d_(r){return $.endsWith(r,"[]")?r.slice(0,-2):r}function Eg(r,e,t){return r?r.concat(e).map(function(o,l){return o=d_(o),!t&&l?"["+o+"]":o}).join(t?".":""):e}function tT(r){return $.isArray(r)&&!r.some(Nd)}const nT=$.toFlatObject($,{},null,function(e){return/^is[A-Z]/.test(e)});function dc(r,e,t){if(!$.isObject(r))throw new TypeError("target must be an object");e=e||new FormData,t=$.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(q,F){return!$.isUndefined(F[q])});const i=t.metaTokens,o=t.visitor||w,l=t.dots,h=t.indexes,g=(t.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(e);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function _(z){if(z===null)return"";if($.isDate(z))return z.toISOString();if(!g&&$.isBlob(z))throw new Se("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(z)||$.isTypedArray(z)?g&&typeof Blob=="function"?new Blob([z]):Buffer.from(z):z}function w(z,q,F){let ie=z;if(z&&!F&&typeof z=="object"){if($.endsWith(q,"{}"))q=i?q:q.slice(0,-2),z=JSON.stringify(z);else if($.isArray(z)&&tT(z)||($.isFileList(z)||$.endsWith(q,"[]"))&&(ie=$.toArray(z)))return q=d_(q),ie.forEach(function(oe,ge){!($.isUndefined(oe)||oe===null)&&e.append(h===!0?Eg([q],ge,l):h===null?q:q+"[]",_(oe))}),!1}return Nd(z)?!0:(e.append(Eg(F,q,l),_(z)),!1)}const S=[],D=Object.assign(nT,{defaultVisitor:w,convertValue:_,isVisitable:Nd});function j(z,q){if(!$.isUndefined(z)){if(S.indexOf(z)!==-1)throw Error("Circular reference detected in "+q.join("."));S.push(z),$.forEach(z,function(ie,se){(!($.isUndefined(ie)||ie===null)&&o.call(e,ie,$.isString(se)?se.trim():se,q,D))===!0&&j(ie,q?q.concat(se):[se])}),S.pop()}}if(!$.isObject(r))throw new TypeError("data must be an object");return j(r),e}function Tg(r){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function af(r,e){this._pairs=[],r&&dc(r,this,e)}const f_=af.prototype;f_.append=function(e,t){this._pairs.push([e,t])};f_.toString=function(e){const t=e?function(i){return e.call(this,i,Tg)}:Tg;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};function rT(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function p_(r,e,t){if(!e)return r;const i=t&&t.encode||rT;$.isFunction(t)&&(t={serialize:t});const o=t&&t.serialize;let l;if(o?l=o(e,t):l=$.isURLSearchParams(e)?e.toString():new af(e,t).toString(i),l){const h=r.indexOf("#");h!==-1&&(r=r.slice(0,h)),r+=(r.indexOf("?")===-1?"?":"&")+l}return r}class Ig{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){$.forEach(this.handlers,function(i){i!==null&&e(i)})}}const m_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iT=typeof URLSearchParams<"u"?URLSearchParams:af,sT=typeof FormData<"u"?FormData:null,oT=typeof Blob<"u"?Blob:null,aT={isBrowser:!0,classes:{URLSearchParams:iT,FormData:sT,Blob:oT},protocols:["http","https","file","blob","url","data"]},lf=typeof window<"u"&&typeof document<"u",Dd=typeof navigator=="object"&&navigator||void 0,lT=lf&&(!Dd||["ReactNative","NativeScript","NS"].indexOf(Dd.product)<0),uT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",cT=lf&&window.location.href||"http://localhost",hT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lf,hasStandardBrowserEnv:lT,hasStandardBrowserWebWorkerEnv:uT,navigator:Dd,origin:cT},Symbol.toStringTag,{value:"Module"})),jt={...hT,...aT};function dT(r,e){return dc(r,new jt.classes.URLSearchParams,Object.assign({visitor:function(t,i,o,l){return jt.isNode&&$.isBuffer(t)?(this.append(i,t.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},e))}function fT(r){return $.matchAll(/\w+|\[(\w*)]/g,r).map(e=>e[0]==="[]"?"":e[1]||e[0])}function pT(r){const e={},t=Object.keys(r);let i;const o=t.length;let l;for(i=0;i<o;i++)l=t[i],e[l]=r[l];return e}function g_(r){function e(t,i,o,l){let h=t[l++];if(h==="__proto__")return!0;const f=Number.isFinite(+h),g=l>=t.length;return h=!h&&$.isArray(o)?o.length:h,g?($.hasOwnProp(o,h)?o[h]=[o[h],i]:o[h]=i,!f):((!o[h]||!$.isObject(o[h]))&&(o[h]=[]),e(t,i,o[h],l)&&$.isArray(o[h])&&(o[h]=pT(o[h])),!f)}if($.isFormData(r)&&$.isFunction(r.entries)){const t={};return $.forEachEntry(r,(i,o)=>{e(fT(i),o,t,0)}),t}return null}function mT(r,e,t){if($.isString(r))try{return(e||JSON.parse)(r),$.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(0,JSON.stringify)(r)}const Za={transitional:m_,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",o=i.indexOf("application/json")>-1,l=$.isObject(e);if(l&&$.isHTMLForm(e)&&(e=new FormData(e)),$.isFormData(e))return o?JSON.stringify(g_(e)):e;if($.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e)||$.isReadableStream(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let f;if(l){if(i.indexOf("application/x-www-form-urlencoded")>-1)return dT(e,this.formSerializer).toString();if((f=$.isFileList(e))||i.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return dc(f?{"files[]":e}:e,g&&new g,this.formSerializer)}}return l||o?(t.setContentType("application/json",!1),mT(e)):e}],transformResponse:[function(e){const t=this.transitional||Za.transitional,i=t&&t.forcedJSONParsing,o=this.responseType==="json";if($.isResponse(e)||$.isReadableStream(e))return e;if(e&&$.isString(e)&&(i&&!this.responseType||o)){const h=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(f){if(h)throw f.name==="SyntaxError"?Se.from(f,Se.ERR_BAD_RESPONSE,this,null,this.response):f}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],r=>{Za.headers[r]={}});const gT=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),yT=r=>{const e={};let t,i,o;return r&&r.split(`
`).forEach(function(h){o=h.indexOf(":"),t=h.substring(0,o).trim().toLowerCase(),i=h.substring(o+1).trim(),!(!t||e[t]&&gT[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},Sg=Symbol("internals");function Na(r){return r&&String(r).trim().toLowerCase()}function Du(r){return r===!1||r==null?r:$.isArray(r)?r.map(Du):String(r)}function _T(r){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(r);)e[i[1]]=i[2];return e}const vT=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function dd(r,e,t,i,o){if($.isFunction(i))return i.call(this,e,t);if(o&&(e=t),!!$.isString(e)){if($.isString(i))return e.indexOf(i)!==-1;if($.isRegExp(i))return i.test(e)}}function wT(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function ET(r,e){const t=$.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(r,i+t,{value:function(o,l,h){return this[i].call(this,e,o,l,h)},configurable:!0})})}class tn{constructor(e){e&&this.set(e)}set(e,t,i){const o=this;function l(f,g,_){const w=Na(g);if(!w)throw new Error("header name must be a non-empty string");const S=$.findKey(o,w);(!S||o[S]===void 0||_===!0||_===void 0&&o[S]!==!1)&&(o[S||g]=Du(f))}const h=(f,g)=>$.forEach(f,(_,w)=>l(_,w,g));if($.isPlainObject(e)||e instanceof this.constructor)h(e,t);else if($.isString(e)&&(e=e.trim())&&!vT(e))h(yT(e),t);else if($.isHeaders(e))for(const[f,g]of e.entries())l(g,f,i);else e!=null&&l(t,e,i);return this}get(e,t){if(e=Na(e),e){const i=$.findKey(this,e);if(i){const o=this[i];if(!t)return o;if(t===!0)return _T(o);if($.isFunction(t))return t.call(this,o,i);if($.isRegExp(t))return t.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Na(e),e){const i=$.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||dd(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let o=!1;function l(h){if(h=Na(h),h){const f=$.findKey(i,h);f&&(!t||dd(i,i[f],f,t))&&(delete i[f],o=!0)}}return $.isArray(e)?e.forEach(l):l(e),o}clear(e){const t=Object.keys(this);let i=t.length,o=!1;for(;i--;){const l=t[i];(!e||dd(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const t=this,i={};return $.forEach(this,(o,l)=>{const h=$.findKey(i,l);if(h){t[h]=Du(o),delete t[l];return}const f=e?wT(l):String(l).trim();f!==l&&delete t[l],t[f]=Du(o),i[f]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return $.forEach(this,(i,o)=>{i!=null&&i!==!1&&(t[o]=e&&$.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(o=>i.set(o)),i}static accessor(e){const i=(this[Sg]=this[Sg]={accessors:{}}).accessors,o=this.prototype;function l(h){const f=Na(h);i[f]||(ET(o,h),i[f]=!0)}return $.isArray(e)?e.forEach(l):l(e),this}}tn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(tn.prototype,({value:r},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>r,set(i){this[t]=i}}});$.freezeMethods(tn);function fd(r,e){const t=this||Za,i=e||t,o=tn.from(i.headers);let l=i.data;return $.forEach(r,function(f){l=f.call(t,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function y_(r){return!!(r&&r.__CANCEL__)}function Po(r,e,t){Se.call(this,r??"canceled",Se.ERR_CANCELED,e,t),this.name="CanceledError"}$.inherits(Po,Se,{__CANCEL__:!0});function __(r,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?r(t):e(new Se("Request failed with status code "+t.status,[Se.ERR_BAD_REQUEST,Se.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function TT(r){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return e&&e[1]||""}function IT(r,e){r=r||10;const t=new Array(r),i=new Array(r);let o=0,l=0,h;return e=e!==void 0?e:1e3,function(g){const _=Date.now(),w=i[l];h||(h=_),t[o]=g,i[o]=_;let S=l,D=0;for(;S!==o;)D+=t[S++],S=S%r;if(o=(o+1)%r,o===l&&(l=(l+1)%r),_-h<e)return;const j=w&&_-w;return j?Math.round(D*1e3/j):void 0}}function ST(r,e){let t=0,i=1e3/e,o,l;const h=(_,w=Date.now())=>{t=w,o=null,l&&(clearTimeout(l),l=null),r.apply(null,_)};return[(..._)=>{const w=Date.now(),S=w-t;S>=i?h(_,w):(o=_,l||(l=setTimeout(()=>{l=null,h(o)},i-S)))},()=>o&&h(o)]}const zu=(r,e,t=3)=>{let i=0;const o=IT(50,250);return ST(l=>{const h=l.loaded,f=l.lengthComputable?l.total:void 0,g=h-i,_=o(g),w=h<=f;i=h;const S={loaded:h,total:f,progress:f?h/f:void 0,bytes:g,rate:_||void 0,estimated:_&&f&&w?(f-h)/_:void 0,event:l,lengthComputable:f!=null,[e?"download":"upload"]:!0};r(S)},t)},Ag=(r,e)=>{const t=r!=null;return[i=>e[0]({lengthComputable:t,total:r,loaded:i}),e[1]]},Rg=r=>(...e)=>$.asap(()=>r(...e)),AT=jt.hasStandardBrowserEnv?((r,e)=>t=>(t=new URL(t,jt.origin),r.protocol===t.protocol&&r.host===t.host&&(e||r.port===t.port)))(new URL(jt.origin),jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent)):()=>!0,RT=jt.hasStandardBrowserEnv?{write(r,e,t,i,o,l){const h=[r+"="+encodeURIComponent(e)];$.isNumber(t)&&h.push("expires="+new Date(t).toGMTString()),$.isString(i)&&h.push("path="+i),$.isString(o)&&h.push("domain="+o),l===!0&&h.push("secure"),document.cookie=h.join("; ")},read(r){const e=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function CT(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function PT(r,e){return e?r.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):r}function v_(r,e){return r&&!CT(e)?PT(r,e):e}const Cg=r=>r instanceof tn?{...r}:r;function as(r,e){e=e||{};const t={};function i(_,w,S,D){return $.isPlainObject(_)&&$.isPlainObject(w)?$.merge.call({caseless:D},_,w):$.isPlainObject(w)?$.merge({},w):$.isArray(w)?w.slice():w}function o(_,w,S,D){if($.isUndefined(w)){if(!$.isUndefined(_))return i(void 0,_,S,D)}else return i(_,w,S,D)}function l(_,w){if(!$.isUndefined(w))return i(void 0,w)}function h(_,w){if($.isUndefined(w)){if(!$.isUndefined(_))return i(void 0,_)}else return i(void 0,w)}function f(_,w,S){if(S in e)return i(_,w);if(S in r)return i(void 0,_)}const g={url:l,method:l,data:l,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:f,headers:(_,w,S)=>o(Cg(_),Cg(w),S,!0)};return $.forEach(Object.keys(Object.assign({},r,e)),function(w){const S=g[w]||o,D=S(r[w],e[w],w);$.isUndefined(D)&&S!==f||(t[w]=D)}),t}const w_=r=>{const e=as({},r);let{data:t,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:l,headers:h,auth:f}=e;e.headers=h=tn.from(h),e.url=p_(v_(e.baseURL,e.url),r.params,r.paramsSerializer),f&&h.set("Authorization","Basic "+btoa((f.username||"")+":"+(f.password?unescape(encodeURIComponent(f.password)):"")));let g;if($.isFormData(t)){if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((g=h.getContentType())!==!1){const[_,...w]=g?g.split(";").map(S=>S.trim()).filter(Boolean):[];h.setContentType([_||"multipart/form-data",...w].join("; "))}}if(jt.hasStandardBrowserEnv&&(i&&$.isFunction(i)&&(i=i(e)),i||i!==!1&&AT(e.url))){const _=o&&l&&RT.read(l);_&&h.set(o,_)}return e},kT=typeof XMLHttpRequest<"u",NT=kT&&function(r){return new Promise(function(t,i){const o=w_(r);let l=o.data;const h=tn.from(o.headers).normalize();let{responseType:f,onUploadProgress:g,onDownloadProgress:_}=o,w,S,D,j,z;function q(){j&&j(),z&&z(),o.cancelToken&&o.cancelToken.unsubscribe(w),o.signal&&o.signal.removeEventListener("abort",w)}let F=new XMLHttpRequest;F.open(o.method.toUpperCase(),o.url,!0),F.timeout=o.timeout;function ie(){if(!F)return;const oe=tn.from("getAllResponseHeaders"in F&&F.getAllResponseHeaders()),Ae={data:!f||f==="text"||f==="json"?F.responseText:F.response,status:F.status,statusText:F.statusText,headers:oe,config:r,request:F};__(function(R){t(R),q()},function(R){i(R),q()},Ae),F=null}"onloadend"in F?F.onloadend=ie:F.onreadystatechange=function(){!F||F.readyState!==4||F.status===0&&!(F.responseURL&&F.responseURL.indexOf("file:")===0)||setTimeout(ie)},F.onabort=function(){F&&(i(new Se("Request aborted",Se.ECONNABORTED,r,F)),F=null)},F.onerror=function(){i(new Se("Network Error",Se.ERR_NETWORK,r,F)),F=null},F.ontimeout=function(){let ge=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const Ae=o.transitional||m_;o.timeoutErrorMessage&&(ge=o.timeoutErrorMessage),i(new Se(ge,Ae.clarifyTimeoutError?Se.ETIMEDOUT:Se.ECONNABORTED,r,F)),F=null},l===void 0&&h.setContentType(null),"setRequestHeader"in F&&$.forEach(h.toJSON(),function(ge,Ae){F.setRequestHeader(Ae,ge)}),$.isUndefined(o.withCredentials)||(F.withCredentials=!!o.withCredentials),f&&f!=="json"&&(F.responseType=o.responseType),_&&([D,z]=zu(_,!0),F.addEventListener("progress",D)),g&&F.upload&&([S,j]=zu(g),F.upload.addEventListener("progress",S),F.upload.addEventListener("loadend",j)),(o.cancelToken||o.signal)&&(w=oe=>{F&&(i(!oe||oe.type?new Po(null,r,F):oe),F.abort(),F=null)},o.cancelToken&&o.cancelToken.subscribe(w),o.signal&&(o.signal.aborted?w():o.signal.addEventListener("abort",w)));const se=TT(o.url);if(se&&jt.protocols.indexOf(se)===-1){i(new Se("Unsupported protocol "+se+":",Se.ERR_BAD_REQUEST,r));return}F.send(l||null)})},DT=(r,e)=>{const{length:t}=r=r?r.filter(Boolean):[];if(e||t){let i=new AbortController,o;const l=function(_){if(!o){o=!0,f();const w=_ instanceof Error?_:this.reason;i.abort(w instanceof Se?w:new Po(w instanceof Error?w.message:w))}};let h=e&&setTimeout(()=>{h=null,l(new Se(`timeout ${e} of ms exceeded`,Se.ETIMEDOUT))},e);const f=()=>{r&&(h&&clearTimeout(h),h=null,r.forEach(_=>{_.unsubscribe?_.unsubscribe(l):_.removeEventListener("abort",l)}),r=null)};r.forEach(_=>_.addEventListener("abort",l));const{signal:g}=i;return g.unsubscribe=()=>$.asap(f),g}},OT=function*(r,e){let t=r.byteLength;if(t<e){yield r;return}let i=0,o;for(;i<t;)o=i+e,yield r.slice(i,o),i=o},xT=async function*(r,e){for await(const t of VT(r))yield*OT(t,e)},VT=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const e=r.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},Pg=(r,e,t,i)=>{const o=xT(r,e);let l=0,h,f=g=>{h||(h=!0,i&&i(g))};return new ReadableStream({async pull(g){try{const{done:_,value:w}=await o.next();if(_){f(),g.close();return}let S=w.byteLength;if(t){let D=l+=S;t(D)}g.enqueue(new Uint8Array(w))}catch(_){throw f(_),_}},cancel(g){return f(g),o.return()}},{highWaterMark:2})},fc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",E_=fc&&typeof ReadableStream=="function",LT=fc&&(typeof TextEncoder=="function"?(r=>e=>r.encode(e))(new TextEncoder):async r=>new Uint8Array(await new Response(r).arrayBuffer())),T_=(r,...e)=>{try{return!!r(...e)}catch{return!1}},bT=E_&&T_(()=>{let r=!1;const e=new Request(jt.origin,{body:new ReadableStream,method:"POST",get duplex(){return r=!0,"half"}}).headers.has("Content-Type");return r&&!e}),kg=64*1024,Od=E_&&T_(()=>$.isReadableStream(new Response("").body)),$u={stream:Od&&(r=>r.body)};fc&&(r=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!$u[e]&&($u[e]=$.isFunction(r[e])?t=>t[e]():(t,i)=>{throw new Se(`Response type '${e}' is not supported`,Se.ERR_NOT_SUPPORT,i)})})})(new Response);const MT=async r=>{if(r==null)return 0;if($.isBlob(r))return r.size;if($.isSpecCompliantForm(r))return(await new Request(jt.origin,{method:"POST",body:r}).arrayBuffer()).byteLength;if($.isArrayBufferView(r)||$.isArrayBuffer(r))return r.byteLength;if($.isURLSearchParams(r)&&(r=r+""),$.isString(r))return(await LT(r)).byteLength},FT=async(r,e)=>{const t=$.toFiniteNumber(r.getContentLength());return t??MT(e)},UT=fc&&(async r=>{let{url:e,method:t,data:i,signal:o,cancelToken:l,timeout:h,onDownloadProgress:f,onUploadProgress:g,responseType:_,headers:w,withCredentials:S="same-origin",fetchOptions:D}=w_(r);_=_?(_+"").toLowerCase():"text";let j=DT([o,l&&l.toAbortSignal()],h),z;const q=j&&j.unsubscribe&&(()=>{j.unsubscribe()});let F;try{if(g&&bT&&t!=="get"&&t!=="head"&&(F=await FT(w,i))!==0){let Ae=new Request(e,{method:"POST",body:i,duplex:"half"}),ye;if($.isFormData(i)&&(ye=Ae.headers.get("content-type"))&&w.setContentType(ye),Ae.body){const[R,T]=Ag(F,zu(Rg(g)));i=Pg(Ae.body,kg,R,T)}}$.isString(S)||(S=S?"include":"omit");const ie="credentials"in Request.prototype;z=new Request(e,{...D,signal:j,method:t.toUpperCase(),headers:w.normalize().toJSON(),body:i,duplex:"half",credentials:ie?S:void 0});let se=await fetch(z);const oe=Od&&(_==="stream"||_==="response");if(Od&&(f||oe&&q)){const Ae={};["status","statusText","headers"].forEach(I=>{Ae[I]=se[I]});const ye=$.toFiniteNumber(se.headers.get("content-length")),[R,T]=f&&Ag(ye,zu(Rg(f),!0))||[];se=new Response(Pg(se.body,kg,R,()=>{T&&T(),q&&q()}),Ae)}_=_||"text";let ge=await $u[$.findKey($u,_)||"text"](se,r);return!oe&&q&&q(),await new Promise((Ae,ye)=>{__(Ae,ye,{data:ge,headers:tn.from(se.headers),status:se.status,statusText:se.statusText,config:r,request:z})})}catch(ie){throw q&&q(),ie&&ie.name==="TypeError"&&/fetch/i.test(ie.message)?Object.assign(new Se("Network Error",Se.ERR_NETWORK,r,z),{cause:ie.cause||ie}):Se.from(ie,ie&&ie.code,r,z)}}),xd={http:eT,xhr:NT,fetch:UT};$.forEach(xd,(r,e)=>{if(r){try{Object.defineProperty(r,"name",{value:e})}catch{}Object.defineProperty(r,"adapterName",{value:e})}});const Ng=r=>`- ${r}`,jT=r=>$.isFunction(r)||r===null||r===!1,I_={getAdapter:r=>{r=$.isArray(r)?r:[r];const{length:e}=r;let t,i;const o={};for(let l=0;l<e;l++){t=r[l];let h;if(i=t,!jT(t)&&(i=xd[(h=String(t)).toLowerCase()],i===void 0))throw new Se(`Unknown adapter '${h}'`);if(i)break;o[h||"#"+l]=i}if(!i){const l=Object.entries(o).map(([f,g])=>`adapter ${f} `+(g===!1?"is not supported by the environment":"is not available in the build"));let h=e?l.length>1?`since :
`+l.map(Ng).join(`
`):" "+Ng(l[0]):"as no adapter specified";throw new Se("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return i},adapters:xd};function pd(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Po(null,r)}function Dg(r){return pd(r),r.headers=tn.from(r.headers),r.data=fd.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),I_.getAdapter(r.adapter||Za.adapter)(r).then(function(i){return pd(r),i.data=fd.call(r,r.transformResponse,i),i.headers=tn.from(i.headers),i},function(i){return y_(i)||(pd(r),i&&i.response&&(i.response.data=fd.call(r,r.transformResponse,i.response),i.response.headers=tn.from(i.response.headers))),Promise.reject(i)})}const S_="1.7.9",pc={};["object","boolean","number","function","string","symbol"].forEach((r,e)=>{pc[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});const Og={};pc.transitional=function(e,t,i){function o(l,h){return"[Axios v"+S_+"] Transitional option '"+l+"'"+h+(i?". "+i:"")}return(l,h,f)=>{if(e===!1)throw new Se(o(h," has been removed"+(t?" in "+t:"")),Se.ERR_DEPRECATED);return t&&!Og[h]&&(Og[h]=!0,console.warn(o(h," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(l,h,f):!0}};pc.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function BT(r,e,t){if(typeof r!="object")throw new Se("options must be an object",Se.ERR_BAD_OPTION_VALUE);const i=Object.keys(r);let o=i.length;for(;o-- >0;){const l=i[o],h=e[l];if(h){const f=r[l],g=f===void 0||h(f,l,r);if(g!==!0)throw new Se("option "+l+" must be "+g,Se.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Se("Unknown option "+l,Se.ERR_BAD_OPTION)}}const Ou={assertOptions:BT,validators:pc},ir=Ou.validators;class is{constructor(e){this.defaults=e,this.interceptors={request:new Ig,response:new Ig}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{i.stack?l&&!String(i.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+l):i.stack=l}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=as(this.defaults,t);const{transitional:i,paramsSerializer:o,headers:l}=t;i!==void 0&&Ou.assertOptions(i,{silentJSONParsing:ir.transitional(ir.boolean),forcedJSONParsing:ir.transitional(ir.boolean),clarifyTimeoutError:ir.transitional(ir.boolean)},!1),o!=null&&($.isFunction(o)?t.paramsSerializer={serialize:o}:Ou.assertOptions(o,{encode:ir.function,serialize:ir.function},!0)),Ou.assertOptions(t,{baseUrl:ir.spelling("baseURL"),withXsrfToken:ir.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let h=l&&$.merge(l.common,l[t.method]);l&&$.forEach(["delete","get","head","post","put","patch","common"],z=>{delete l[z]}),t.headers=tn.concat(h,l);const f=[];let g=!0;this.interceptors.request.forEach(function(q){typeof q.runWhen=="function"&&q.runWhen(t)===!1||(g=g&&q.synchronous,f.unshift(q.fulfilled,q.rejected))});const _=[];this.interceptors.response.forEach(function(q){_.push(q.fulfilled,q.rejected)});let w,S=0,D;if(!g){const z=[Dg.bind(this),void 0];for(z.unshift.apply(z,f),z.push.apply(z,_),D=z.length,w=Promise.resolve(t);S<D;)w=w.then(z[S++],z[S++]);return w}D=f.length;let j=t;for(S=0;S<D;){const z=f[S++],q=f[S++];try{j=z(j)}catch(F){q.call(this,F);break}}try{w=Dg.call(this,j)}catch(z){return Promise.reject(z)}for(S=0,D=_.length;S<D;)w=w.then(_[S++],_[S++]);return w}getUri(e){e=as(this.defaults,e);const t=v_(e.baseURL,e.url);return p_(t,e.params,e.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(e){is.prototype[e]=function(t,i){return this.request(as(i||{},{method:e,url:t,data:(i||{}).data}))}});$.forEach(["post","put","patch"],function(e){function t(i){return function(l,h,f){return this.request(as(f||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:l,data:h}))}}is.prototype[e]=t(),is.prototype[e+"Form"]=t(!0)});class uf{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(l){t=l});const i=this;this.promise.then(o=>{if(!i._listeners)return;let l=i._listeners.length;for(;l-- >0;)i._listeners[l](o);i._listeners=null}),this.promise.then=o=>{let l;const h=new Promise(f=>{i.subscribe(f),l=f}).then(o);return h.cancel=function(){i.unsubscribe(l)},h},e(function(l,h,f){i.reason||(i.reason=new Po(l,h,f),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new uf(function(o){e=o}),cancel:e}}}function zT(r){return function(t){return r.apply(null,t)}}function $T(r){return $.isObject(r)&&r.isAxiosError===!0}const Vd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vd).forEach(([r,e])=>{Vd[e]=r});function A_(r){const e=new is(r),t=n_(is.prototype.request,e);return $.extend(t,is.prototype,e,{allOwnKeys:!0}),$.extend(t,e,null,{allOwnKeys:!0}),t.create=function(o){return A_(as(r,o))},t}const ut=A_(Za);ut.Axios=is;ut.CanceledError=Po;ut.CancelToken=uf;ut.isCancel=y_;ut.VERSION=S_;ut.toFormData=dc;ut.AxiosError=Se;ut.Cancel=ut.CanceledError;ut.all=function(e){return Promise.all(e)};ut.spread=zT;ut.isAxiosError=$T;ut.mergeConfig=as;ut.AxiosHeaders=tn;ut.formToJSON=r=>g_($.isHTMLForm(r)?new FormData(r):r);ut.getAdapter=I_.getAdapter;ut.HttpStatusCode=Vd;ut.default=ut;var xg={};/**
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
 */const R_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},qT=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},C_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,S=(l&3)<<4|f>>4;let D=(f&15)<<2|_>>6,j=_&63;g||(j=64,h||(D=64)),i.push(t[w],t[S],t[D],t[j])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(R_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):qT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const S=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||S==null)throw new HT;const D=l<<2|f>>4;if(i.push(D),_!==64){const j=f<<4&240|_>>2;if(i.push(j),S!==64){const z=_<<6&192|S;i.push(z)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class HT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WT=function(r){const e=R_(r);return C_.encodeByteArray(e,!0)},qu=function(r){return WT(r).replace(/\./g,"")},P_=function(r){try{return C_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function KT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GT=()=>KT().__FIREBASE_DEFAULTS__,QT=()=>{if(typeof process>"u"||typeof xg>"u")return;const r=xg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},JT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&P_(r[1]);return e&&JSON.parse(e)},mc=()=>{try{return GT()||QT()||JT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},k_=r=>{var e,t;return(t=(e=mc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},XT=r=>{const e=k_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},N_=()=>{var r;return(r=mc())===null||r===void 0?void 0:r.config},D_=r=>{var e;return(e=mc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class YT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ZT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[qu(JSON.stringify(t)),qu(JSON.stringify(h)),""].join(".")}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function tI(){var r;const e=(r=mc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function O_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function rI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iI(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function sI(){return!tI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x_(){try{return typeof indexedDB=="object"}catch{return!1}}function V_(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function oI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const aI="FirebaseError";class Wn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=aI,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?lI(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Wn(o,f,i)}}function lI(r,e){return r.replace(uI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const uI=/\{\$([^}]+)}/g;function cI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ba(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(Vg(l)&&Vg(h)){if(!Ba(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Vg(r){return r!==null&&typeof r=="object"}/**
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
 */function el(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function hI(r,e){const t=new dI(r,e);return t.subscribe.bind(t)}class dI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");fI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=md),o.error===void 0&&(o.error=md),o.complete===void 0&&(o.complete=md);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function md(){}/**
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
 */const pI=1e3,mI=2,gI=4*60*60*1e3,yI=.5;function Lg(r,e=pI,t=mI){const i=e*Math.pow(t,r),o=Math.round(yI*i*(Math.random()-.5)*2);return Math.min(gI,i+o)}/**
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
 */function fn(r){return r&&r._delegate?r._delegate:r}class qn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zi="[DEFAULT]";/**
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
 */class _I{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new YT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wI(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:vI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vI(r){return r===Zi?void 0:r}function wI(r){return r.instantiationMode==="EAGER"}/**
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
 */class EI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _I(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ke||(ke={}));const TI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},II=ke.INFO,SI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},AI=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=SI[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=II,this._logHandler=AI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const RI=(r,e)=>e.some(t=>r instanceof t);let bg,Mg;function CI(){return bg||(bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PI(){return Mg||(Mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L_=new WeakMap,Ld=new WeakMap,b_=new WeakMap,gd=new WeakMap,cf=new WeakMap;function kI(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(yi(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&L_.set(t,r)}).catch(()=>{}),cf.set(e,r),e}function NI(r){if(Ld.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Ld.set(r,e)}let bd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ld.get(r);if(e==="objectStoreNames")return r.objectStoreNames||b_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function DI(r){bd=r(bd)}function OI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(yd(this),e,...t);return b_.set(i,e.sort?e.sort():[e]),yi(i)}:PI().includes(r)?function(...e){return r.apply(yd(this),e),yi(L_.get(this))}:function(...e){return yi(r.apply(yd(this),e))}}function xI(r){return typeof r=="function"?OI(r):(r instanceof IDBTransaction&&NI(r),RI(r,CI())?new Proxy(r,bd):r)}function yi(r){if(r instanceof IDBRequest)return kI(r);if(gd.has(r))return gd.get(r);const e=xI(r);return e!==r&&(gd.set(r,e),cf.set(e,r)),e}const yd=r=>cf.get(r);function M_(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=yi(h);return i&&h.addEventListener("upgradeneeded",g=>{i(yi(h.result),g.oldVersion,g.newVersion,yi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const VI=["get","getKey","getAll","getAllKeys","count"],LI=["put","add","delete","clear"],_d=new Map;function Fg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(_d.get(e))return _d.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=LI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||VI.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return _d.set(e,l),l}DI(r=>({...r,get:(e,t,i)=>Fg(e,t)||r.get(e,t,i),has:(e,t)=>!!Fg(e,t)||r.has(e,t)}));/**
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
 */class bI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(MI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function MI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Md="@firebase/app",Ug="0.10.17";/**
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
 */const Mr=new gc("@firebase/app"),FI="@firebase/app-compat",UI="@firebase/analytics-compat",jI="@firebase/analytics",BI="@firebase/app-check-compat",zI="@firebase/app-check",$I="@firebase/auth",qI="@firebase/auth-compat",HI="@firebase/database",WI="@firebase/data-connect",KI="@firebase/database-compat",GI="@firebase/functions",QI="@firebase/functions-compat",JI="@firebase/installations",XI="@firebase/installations-compat",YI="@firebase/messaging",ZI="@firebase/messaging-compat",eS="@firebase/performance",tS="@firebase/performance-compat",nS="@firebase/remote-config",rS="@firebase/remote-config-compat",iS="@firebase/storage",sS="@firebase/storage-compat",oS="@firebase/firestore",aS="@firebase/vertexai",lS="@firebase/firestore-compat",uS="firebase",cS="11.1.0";/**
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
 */const Fd="[DEFAULT]",hS={[Md]:"fire-core",[FI]:"fire-core-compat",[jI]:"fire-analytics",[UI]:"fire-analytics-compat",[zI]:"fire-app-check",[BI]:"fire-app-check-compat",[$I]:"fire-auth",[qI]:"fire-auth-compat",[HI]:"fire-rtdb",[WI]:"fire-data-connect",[KI]:"fire-rtdb-compat",[GI]:"fire-fn",[QI]:"fire-fn-compat",[JI]:"fire-iid",[XI]:"fire-iid-compat",[YI]:"fire-fcm",[ZI]:"fire-fcm-compat",[eS]:"fire-perf",[tS]:"fire-perf-compat",[nS]:"fire-rc",[rS]:"fire-rc-compat",[iS]:"fire-gcs",[sS]:"fire-gcs-compat",[oS]:"fire-fst",[lS]:"fire-fst-compat",[aS]:"fire-vertex","fire-js":"fire-js",[uS]:"fire-js-all"};/**
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
 */const Hu=new Map,dS=new Map,Ud=new Map;function jg(r,e){try{r.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ur(r){const e=r.name;if(Ud.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Ud.set(e,r);for(const t of Hu.values())jg(t,r);for(const t of dS.values())jg(t,r);return!0}function fs(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Or(r){return r.settings!==void 0}/**
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
 */const fS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new ds("app","Firebase",fS);/**
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
 */class pS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
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
 */const ko=cS;function F_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Fd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=N_()),!t)throw _i.create("no-options");const l=Hu.get(o);if(l){if(Ba(t,l.options)&&Ba(i,l.config))return l;throw _i.create("duplicate-app",{appName:o})}const h=new EI(o);for(const g of Ud.values())h.addComponent(g);const f=new pS(t,i,h);return Hu.set(o,f),f}function hf(r=Fd){const e=Hu.get(r);if(!e&&r===Fd&&N_())return F_();if(!e)throw _i.create("no-app",{appName:r});return e}function An(r,e,t){var i;let o=(i=hS[r])!==null&&i!==void 0?i:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(f.join(" "));return}ur(new qn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const mS="firebase-heartbeat-database",gS=1,za="firebase-heartbeat-store";let vd=null;function U_(){return vd||(vd=M_(mS,gS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(za)}catch(t){console.warn(t)}}}}).catch(r=>{throw _i.create("idb-open",{originalErrorMessage:r.message})})),vd}async function yS(r){try{const t=(await U_()).transaction(za),i=await t.objectStore(za).get(j_(r));return await t.done,i}catch(e){if(e instanceof Wn)Mr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(t.message)}}}async function Bg(r,e){try{const i=(await U_()).transaction(za,"readwrite");await i.objectStore(za).put(e,j_(r)),await i.done}catch(t){if(t instanceof Wn)Mr.warn(t.message);else{const i=_i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mr.warn(i.message)}}}function j_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const _S=1024,vS=30*24*60*60*1e3;class wS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new TS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=zg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=vS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Mr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zg(),{heartbeatsToSend:i,unsentEntries:o}=ES(this._heartbeatsCache.heartbeats),l=qu(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mr.warn(t),""}}}function zg(){return new Date().toISOString().substring(0,10)}function ES(r,e=_S){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),$g(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),$g(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class TS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x_()?V_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function $g(r){return qu(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function IS(r){ur(new qn("platform-logger",e=>new bI(e),"PRIVATE")),ur(new qn("heartbeat",e=>new wS(e),"PRIVATE")),An(Md,Ug,r),An(Md,Ug,"esm2017"),An("fire-js","")}IS("");var SS="firebase",AS="11.1.0";/**
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
 */An(SS,AS,"app");function df(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(r);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(r,i[o])&&(t[i[o]]=r[i[o]]);return t}function B_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RS=B_,z_=new ds("auth","Firebase",B_());/**
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
 */const Wu=new gc("@firebase/auth");function CS(r,...e){Wu.logLevel<=ke.WARN&&Wu.warn(`Auth (${ko}): ${r}`,...e)}function xu(r,...e){Wu.logLevel<=ke.ERROR&&Wu.error(`Auth (${ko}): ${r}`,...e)}/**
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
 */function cr(r,...e){throw pf(r,...e)}function $n(r,...e){return pf(r,...e)}function ff(r,e,t){const i=Object.assign(Object.assign({},RS()),{[e]:t});return new ds("auth","Firebase",i).create(e,{appName:r.name})}function ss(r){return ff(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function PS(r,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&cr(r,"argument-error"),ff(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pf(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return z_.create(r,...e)}function ve(r,e,...t){if(!r)throw pf(e,...t)}function xr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw xu(e),new Error(e)}function Fr(r,e){r||xr(e)}/**
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
 */function jd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function kS(){return qg()==="http:"||qg()==="https:"}function qg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function NS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kS()||O_()||"connection"in navigator)?navigator.onLine:!0}function DS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class tl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fr(t>e,"Short delay should be less than long delay!"),this.isMobile=eI()||rI()}get(){return NS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mf(r,e){Fr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class $_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xS=new tl(3e4,6e4);function gf(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function No(r,e,t,i,o={}){return q_(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=el(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return nI()||(_.referrerPolicy="no-referrer"),$_.fetch()(H_(r,r.config.apiHost,t,f),_)})}async function q_(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},OS),e);try{const o=new LS(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Su(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Su(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Su(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Su(r,"user-disabled",h);const w=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw ff(r,w,_);cr(r,w)}}catch(o){if(o instanceof Wn)throw o;cr(r,"network-request-failed",{message:String(o)})}}async function VS(r,e,t,i,o={}){const l=await No(r,e,t,i,o);return"mfaPendingCredential"in l&&cr(r,"multi-factor-auth-required",{_serverResponse:l}),l}function H_(r,e,t,i){const o=`${e}${t}?${i}`;return r.config.emulator?mf(r.config,o):`${r.config.apiScheme}://${o}`}class LS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i($n(this.auth,"network-request-failed")),xS.get())})}}function Su(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=$n(r,e,i);return o.customData._tokenResponse=t,o}/**
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
 */async function bS(r,e){return No(r,"POST","/v1/accounts:delete",e)}async function W_(r,e){return No(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Va(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MS(r,e=!1){const t=fn(r),i=await t.getIdToken(e),o=yf(i);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Va(wd(o.auth_time)),issuedAtTime:Va(wd(o.iat)),expirationTime:Va(wd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function wd(r){return Number(r)*1e3}function yf(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return xu("JWT malformed, contained fewer than 3 sections"),null;try{const o=P_(t);return o?JSON.parse(o):(xu("Failed to decode base64 JWT payload"),null)}catch(o){return xu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Hg(r){const e=yf(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $a(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Wn&&FS(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function FS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class US{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ku(r){var e;const t=r.auth,i=await r.getIdToken(),o=await $a(r,W_(t,{idToken:i}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?K_(l.providerUserInfo):[],f=BS(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),w=g?_:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Bd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,S)}async function jS(r){const e=fn(r);await Ku(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BS(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function K_(r){return r.map(e=>{var{providerId:t}=e,i=df(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function zS(r,e){const t=await q_(r,{},async()=>{const i=el({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=H_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",$_.fetch()(h,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $S(r,e){return No(r,"POST","/v2/accounts:revokeToken",gf(r,e))}/**
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
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=Hg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await zS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new mo;return i&&(ve(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
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
 */function di(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=df(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new US(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Bd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await $a(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return MS(this,e)}reload(){return jS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ku(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Or(this.auth.app))return Promise.reject(ss(this.auth));const e=await this.getIdToken();return await $a(this,bS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,g,_,w;const S=(i=t.displayName)!==null&&i!==void 0?i:void 0,D=(o=t.email)!==null&&o!==void 0?o:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,q=(f=t.tenantId)!==null&&f!==void 0?f:void 0,F=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ie=(_=t.createdAt)!==null&&_!==void 0?_:void 0,se=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:oe,emailVerified:ge,isAnonymous:Ae,providerData:ye,stsTokenManager:R}=t;ve(oe&&R,e,"internal-error");const T=mo.fromJSON(this.name,R);ve(typeof oe=="string",e,"internal-error"),di(S,e.name),di(D,e.name),ve(typeof ge=="boolean",e,"internal-error"),ve(typeof Ae=="boolean",e,"internal-error"),di(j,e.name),di(z,e.name),di(q,e.name),di(F,e.name),di(ie,e.name),di(se,e.name);const I=new Vr({uid:oe,auth:e,email:D,emailVerified:ge,displayName:S,isAnonymous:Ae,photoURL:z,phoneNumber:j,tenantId:q,stsTokenManager:T,createdAt:ie,lastLoginAt:se});return ye&&Array.isArray(ye)&&(I.providerData=ye.map(P=>Object.assign({},P))),F&&(I._redirectEventId=F),I}static async _fromIdTokenResponse(e,t,i=!1){const o=new mo;o.updateFromServerResponse(t);const l=new Vr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Ku(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?K_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new mo;f.updateFromIdToken(i);const g=new Vr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Bd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const Wg=new Map;function Lr(r){Fr(r instanceof Function,"Expected a class definition");let e=Wg.get(r);return e?(Fr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Wg.set(r,e),e)}/**
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
 */class G_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}G_.type="NONE";const Kg=G_;/**
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
 */function Vu(r,e,t){return`firebase:${r}:${e}:${t}`}class go{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Vu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Vu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new go(Lr(Kg),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Lr(Kg);const h=Vu(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const w=await _._get(h);if(w){const S=Vr._fromJSON(e,w);_!==l&&(f=S),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new go(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new go(l,e,i))}}/**
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
 */function Gg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ev(e))return"Blackberry";if(tv(e))return"Webos";if(J_(e))return"Safari";if((e.includes("chrome/")||X_(e))&&!e.includes("edge/"))return"Chrome";if(Z_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Q_(r=Bt()){return/firefox\//i.test(r)}function J_(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X_(r=Bt()){return/crios\//i.test(r)}function Y_(r=Bt()){return/iemobile/i.test(r)}function Z_(r=Bt()){return/android/i.test(r)}function ev(r=Bt()){return/blackberry/i.test(r)}function tv(r=Bt()){return/webos/i.test(r)}function _f(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function qS(r=Bt()){var e;return _f(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HS(){return iI()&&document.documentMode===10}function nv(r=Bt()){return _f(r)||Z_(r)||tv(r)||ev(r)||/windows phone/i.test(r)||Y_(r)}/**
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
 */function rv(r,e=[]){let t;switch(r){case"Browser":t=Gg(Bt());break;case"Worker":t=`${Gg(Bt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ko}/${i}`}/**
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
 */class WS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function KS(r,e={}){return No(r,"GET","/v2/passwordPolicy",gf(r,e))}/**
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
 */const GS=6;class QS{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:GS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class JS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qg(this),this.idTokenSubscription=new Qg(this),this.beforeStateQueue=new WS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await go.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await W_(this,{idToken:e}),i=await Vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Or(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ku(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Or(this.app))return Promise.reject(ss(this));const t=e?fn(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Or(this.app)?Promise.reject(ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Or(this.app)?Promise.reject(ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KS(this),t=new QS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await $S(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await go.create(this,[Lr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&CS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yc(r){return fn(r)}class Qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=hI(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XS(r){vf=r}function YS(r){return vf.loadJS(r)}function ZS(){return vf.gapiScript}function e1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function t1(r,e){const t=fs(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ba(l,e??{}))return o;cr(o,"already-initialized")}return t.initialize({options:e})}function n1(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Lr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function r1(r,e,t){const i=yc(r);ve(i._canInitEmulator,i,"emulator-config-failed"),ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=iv(e),{host:h,port:f}=i1(e),g=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${h}${g}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),s1()}function iv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function i1(r){const e=iv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Jg(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Jg(h)}}}function Jg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function s1(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class sv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,t){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}/**
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
 */async function yo(r,e){return VS(r,"POST","/v1/accounts:signInWithIdp",gf(r,e))}/**
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
 */const o1="http://localhost";class ls extends sv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=df(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new ls(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return yo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,yo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yo(e,t)}buildRequest(){const e={requestUri:o1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=el(t)}return e}}/**
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
 */class wf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nl extends wf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fi extends nl{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
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
 */class Dr extends nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ls._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Dr.credential(t,i)}catch{return null}}}Dr.GOOGLE_SIGN_IN_METHOD="google.com";Dr.PROVIDER_ID="google.com";/**
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
 */class pi extends nl{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.GITHUB_SIGN_IN_METHOD="github.com";pi.PROVIDER_ID="github.com";/**
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
 */class mi extends nl{constructor(){super("twitter.com")}static credential(e,t){return ls._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return mi.credential(t,i)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
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
 */class vo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Vr._fromIdTokenResponse(e,i,o),h=Xg(i);return new vo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Xg(i);return new vo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Xg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Gu extends Wn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Gu.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Gu(e,t,i,o)}}function ov(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Gu._fromErrorAndOperation(r,l,e,i):l})}async function a1(r,e,t=!1){const i=await $a(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return vo._forOperation(r,"link",i)}/**
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
 */async function l1(r,e,t=!1){const{auth:i}=r;if(Or(i.app))return Promise.reject(ss(i));const o="reauthenticate";try{const l=await $a(r,ov(i,o,e,r),t);ve(l.idToken,i,"internal-error");const h=yf(l.idToken);ve(h,i,"internal-error");const{sub:f}=h;return ve(r.uid===f,i,"user-mismatch"),vo._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&cr(i,"user-mismatch"),l}}/**
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
 */async function u1(r,e,t=!1){if(Or(r.app))return Promise.reject(ss(r));const i="signIn",o=await ov(r,i,e),l=await vo._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}function c1(r,e,t,i){return fn(r).onIdTokenChanged(e,t,i)}function h1(r,e,t){return fn(r).beforeAuthStateChanged(e,t)}function d1(r){return fn(r).signOut()}const Qu="__sak";/**
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
 */class av{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qu,"1"),this.storage.removeItem(Qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const f1=1e3,p1=10;class lv extends av{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);HS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,p1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},f1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lv.type="LOCAL";const m1=lv;/**
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
 */class uv extends av{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}uv.type="SESSION";const cv=uv;/**
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
 */function g1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new _c(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await g1(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
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
 */function Ef(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class y1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=Ef("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(S){const D=S;if(D.data.eventId===_)switch(D.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(D.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function or(){return window}function _1(r){or().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function hv(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function v1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function w1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function E1(){return hv()?self:null}/**
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
 */const dv="firebaseLocalStorageDb",T1=1,Ju="firebaseLocalStorage",fv="fbase_key";class rl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vc(r,e){return r.transaction([Ju],e?"readwrite":"readonly").objectStore(Ju)}function I1(){const r=indexedDB.deleteDatabase(dv);return new rl(r).toPromise()}function zd(){const r=indexedDB.open(dv,T1);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(Ju,{keyPath:fv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(Ju)?e(i):(i.close(),await I1(),e(await zd()))})})}async function Yg(r,e,t){const i=vc(r,!0).put({[fv]:e,value:t});return new rl(i).toPromise()}async function S1(r,e){const t=vc(r,!1).get(e),i=await new rl(t).toPromise();return i===void 0?null:i.value}function Zg(r,e){const t=vc(r,!0).delete(e);return new rl(t).toPromise()}const A1=800,R1=3;class pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>R1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(E1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await v1(),!this.activeServiceWorker)return;this.sender=new y1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||w1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zd();return await Yg(e,Qu,"1"),await Zg(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Yg(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>S1(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=vc(o,!1).getAll();return new rl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pv.type="LOCAL";const C1=pv;new tl(3e4,6e4);/**
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
 */function mv(r,e){return e?Lr(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Tf extends sv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function P1(r){return u1(r.auth,new Tf(r),r.bypassAuthState)}function k1(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),l1(t,new Tf(r),r.bypassAuthState)}async function N1(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),a1(t,new Tf(r),r.bypassAuthState)}/**
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
 */class gv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return P1;case"linkViaPopup":case"linkViaRedirect":return N1;case"reauthViaPopup":case"reauthViaRedirect":return k1;default:cr(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const D1=new tl(2e3,1e4);async function O1(r,e,t){if(Or(r.app))return Promise.reject($n(r,"operation-not-supported-in-this-environment"));const i=yc(r);PS(r,e,wf);const o=mv(i,t);return new ts(i,"signInViaPopup",e,o).executeNotNull()}class ts extends gv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=Ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,D1.get())};e()}}ts.currentPopupAction=null;/**
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
 */const x1="pendingRedirect",Lu=new Map;class V1 extends gv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Lu.get(this.auth._key());if(!e){try{const i=await L1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Lu.set(this.auth._key(),e)}return this.bypassAuthState||Lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L1(r,e){const t=F1(e),i=M1(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function b1(r,e){Lu.set(r._key(),e)}function M1(r){return Lr(r._redirectPersistence)}function F1(r){return Vu(x1,r.config.apiKey,r.name)}async function U1(r,e,t=!1){if(Or(r.app))return Promise.reject(ss(r));const i=yc(r),o=mv(i,e),h=await new V1(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const j1=10*60*1e3;class B1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!yv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError($n(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ey(e))}saveEventToCache(e){this.cachedEventUids.add(ey(e)),this.lastProcessedEventTime=Date.now()}}function ey(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function yv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yv(r);default:return!1}}/**
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
 */async function $1(r,e={}){return No(r,"GET","/v1/projects",e)}/**
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
 */const q1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H1=/^https?/;async function W1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await $1(r);for(const t of e)try{if(K1(t))return}catch{}cr(r,"unauthorized-domain")}function K1(r){const e=jd(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!H1.test(t))return!1;if(q1.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const G1=new tl(3e4,6e4);function ty(){const r=or().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Q1(r){return new Promise((e,t)=>{var i,o,l;function h(){ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ty(),t($n(r,"network-request-failed"))},timeout:G1.get()})}if(!((o=(i=or().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=or().gapi)===null||l===void 0)&&l.load)h();else{const f=e1("iframefcb");return or()[f]=()=>{gapi.load?h():t($n(r,"network-request-failed"))},YS(`${ZS()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw bu=null,e})}let bu=null;function J1(r){return bu=bu||Q1(r),bu}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const X1=new tl(5e3,15e3),Y1="__/auth/iframe",Z1="emulator/auth/iframe",eA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nA(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?mf(e,Z1):`https://${r.config.authDomain}/${Y1}`,i={apiKey:e.apiKey,appName:r.name,v:ko},o=tA.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${el(i).slice(1)}`}async function rA(r){const e=await J1(r),t=or().gapi;return ve(t,r,"internal-error"),e.open({where:document.body,url:nA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=$n(r,"network-request-failed"),f=or().setTimeout(()=>{l(h)},X1.get());function g(){or().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const iA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sA=500,oA=600,aA="_blank",lA="http://localhost";class ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uA(r,e,t,i=sA,o=oA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g=Object.assign(Object.assign({},iA),{width:i.toString(),height:o.toString(),top:l,left:h}),_=Bt().toLowerCase();t&&(f=X_(_)?aA:t),Q_(_)&&(e=e||lA,g.scrollbars="yes");const w=Object.entries(g).reduce((D,[j,z])=>`${D}${j}=${z},`,"");if(qS(_)&&f!=="_self")return cA(e||"",f),new ny(null);const S=window.open(e||"",f,w);ve(S,r,"popup-blocked");try{S.focus()}catch{}return new ny(S)}function cA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const hA="__/auth/handler",dA="emulator/auth/handler",fA=encodeURIComponent("fac");async function ry(r,e,t,i,o,l){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:ko,eventId:o};if(e instanceof wf){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",cI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,S]of Object.entries({}))h[w]=S}if(e instanceof nl){const w=e.getScopes().filter(S=>S!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await r._getAppCheckToken(),_=g?`#${fA}=${encodeURIComponent(g)}`:"";return`${pA(r)}?${el(f).slice(1)}${_}`}function pA({config:r}){return r.emulator?mf(r,dA):`https://${r.authDomain}/${hA}`}/**
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
 */const Ed="webStorageSupport";class mA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cv,this._completeRedirectFn=U1,this._overrideRedirectResult=b1}async _openPopup(e,t,i,o){var l;Fr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await ry(e,t,i,jd(),o);return uA(e,h,Ef())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await ry(e,t,i,jd(),o);return _1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Fr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await rA(e),i=new B1(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ed,{type:Ed},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Ed];h!==void 0&&t(!!h),cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=W1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nv()||J_()||_f()}}const gA=mA;var iy="@firebase/auth",sy="1.8.1";/**
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
 */class yA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _A(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vA(r){ur(new qn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rv(r)},_=new JS(i,o,l,g);return n1(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ur(new qn("auth-internal",e=>{const t=yc(e.getProvider("auth").getImmediate());return(i=>new yA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(iy,sy,_A(r)),An(iy,sy,"esm2017")}/**
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
 */const wA=5*60,EA=D_("authIdTokenMaxAge")||wA;let oy=null;const TA=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>EA)return;const o=t==null?void 0:t.token;oy!==o&&(oy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function IA(r=hf()){const e=fs(r,"auth");if(e.isInitialized())return e.getImmediate();const t=t1(r,{popupRedirectResolver:gA,persistence:[C1,m1,cv]}),i=D_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=TA(l.toString());h1(t,h,()=>h(t.currentUser)),c1(t,f=>h(f))}}const o=k_("auth");return o&&r1(t,`http://${o}`),t}function SA(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}XS({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=$n("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",SA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vA("Browser");var ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var os,_v;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,T){function I(){}I.prototype=T.prototype,R.D=T.prototype,R.prototype=new I,R.prototype.constructor=R,R.C=function(P,O,V){for(var C=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)C[nt-2]=arguments[nt];return T.prototype[O].apply(P,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,T,I){I||(I=0);var P=Array(16);if(typeof T=="string")for(var O=0;16>O;++O)P[O]=T.charCodeAt(I++)|T.charCodeAt(I++)<<8|T.charCodeAt(I++)<<16|T.charCodeAt(I++)<<24;else for(O=0;16>O;++O)P[O]=T[I++]|T[I++]<<8|T[I++]<<16|T[I++]<<24;T=R.g[0],I=R.g[1],O=R.g[2];var V=R.g[3],C=T+(V^I&(O^V))+P[0]+3614090360&4294967295;T=I+(C<<7&4294967295|C>>>25),C=V+(O^T&(I^O))+P[1]+3905402710&4294967295,V=T+(C<<12&4294967295|C>>>20),C=O+(I^V&(T^I))+P[2]+606105819&4294967295,O=V+(C<<17&4294967295|C>>>15),C=I+(T^O&(V^T))+P[3]+3250441966&4294967295,I=O+(C<<22&4294967295|C>>>10),C=T+(V^I&(O^V))+P[4]+4118548399&4294967295,T=I+(C<<7&4294967295|C>>>25),C=V+(O^T&(I^O))+P[5]+1200080426&4294967295,V=T+(C<<12&4294967295|C>>>20),C=O+(I^V&(T^I))+P[6]+2821735955&4294967295,O=V+(C<<17&4294967295|C>>>15),C=I+(T^O&(V^T))+P[7]+4249261313&4294967295,I=O+(C<<22&4294967295|C>>>10),C=T+(V^I&(O^V))+P[8]+1770035416&4294967295,T=I+(C<<7&4294967295|C>>>25),C=V+(O^T&(I^O))+P[9]+2336552879&4294967295,V=T+(C<<12&4294967295|C>>>20),C=O+(I^V&(T^I))+P[10]+4294925233&4294967295,O=V+(C<<17&4294967295|C>>>15),C=I+(T^O&(V^T))+P[11]+2304563134&4294967295,I=O+(C<<22&4294967295|C>>>10),C=T+(V^I&(O^V))+P[12]+1804603682&4294967295,T=I+(C<<7&4294967295|C>>>25),C=V+(O^T&(I^O))+P[13]+4254626195&4294967295,V=T+(C<<12&4294967295|C>>>20),C=O+(I^V&(T^I))+P[14]+2792965006&4294967295,O=V+(C<<17&4294967295|C>>>15),C=I+(T^O&(V^T))+P[15]+1236535329&4294967295,I=O+(C<<22&4294967295|C>>>10),C=T+(O^V&(I^O))+P[1]+4129170786&4294967295,T=I+(C<<5&4294967295|C>>>27),C=V+(I^O&(T^I))+P[6]+3225465664&4294967295,V=T+(C<<9&4294967295|C>>>23),C=O+(T^I&(V^T))+P[11]+643717713&4294967295,O=V+(C<<14&4294967295|C>>>18),C=I+(V^T&(O^V))+P[0]+3921069994&4294967295,I=O+(C<<20&4294967295|C>>>12),C=T+(O^V&(I^O))+P[5]+3593408605&4294967295,T=I+(C<<5&4294967295|C>>>27),C=V+(I^O&(T^I))+P[10]+38016083&4294967295,V=T+(C<<9&4294967295|C>>>23),C=O+(T^I&(V^T))+P[15]+3634488961&4294967295,O=V+(C<<14&4294967295|C>>>18),C=I+(V^T&(O^V))+P[4]+3889429448&4294967295,I=O+(C<<20&4294967295|C>>>12),C=T+(O^V&(I^O))+P[9]+568446438&4294967295,T=I+(C<<5&4294967295|C>>>27),C=V+(I^O&(T^I))+P[14]+3275163606&4294967295,V=T+(C<<9&4294967295|C>>>23),C=O+(T^I&(V^T))+P[3]+4107603335&4294967295,O=V+(C<<14&4294967295|C>>>18),C=I+(V^T&(O^V))+P[8]+1163531501&4294967295,I=O+(C<<20&4294967295|C>>>12),C=T+(O^V&(I^O))+P[13]+2850285829&4294967295,T=I+(C<<5&4294967295|C>>>27),C=V+(I^O&(T^I))+P[2]+4243563512&4294967295,V=T+(C<<9&4294967295|C>>>23),C=O+(T^I&(V^T))+P[7]+1735328473&4294967295,O=V+(C<<14&4294967295|C>>>18),C=I+(V^T&(O^V))+P[12]+2368359562&4294967295,I=O+(C<<20&4294967295|C>>>12),C=T+(I^O^V)+P[5]+4294588738&4294967295,T=I+(C<<4&4294967295|C>>>28),C=V+(T^I^O)+P[8]+2272392833&4294967295,V=T+(C<<11&4294967295|C>>>21),C=O+(V^T^I)+P[11]+1839030562&4294967295,O=V+(C<<16&4294967295|C>>>16),C=I+(O^V^T)+P[14]+4259657740&4294967295,I=O+(C<<23&4294967295|C>>>9),C=T+(I^O^V)+P[1]+2763975236&4294967295,T=I+(C<<4&4294967295|C>>>28),C=V+(T^I^O)+P[4]+1272893353&4294967295,V=T+(C<<11&4294967295|C>>>21),C=O+(V^T^I)+P[7]+4139469664&4294967295,O=V+(C<<16&4294967295|C>>>16),C=I+(O^V^T)+P[10]+3200236656&4294967295,I=O+(C<<23&4294967295|C>>>9),C=T+(I^O^V)+P[13]+681279174&4294967295,T=I+(C<<4&4294967295|C>>>28),C=V+(T^I^O)+P[0]+3936430074&4294967295,V=T+(C<<11&4294967295|C>>>21),C=O+(V^T^I)+P[3]+3572445317&4294967295,O=V+(C<<16&4294967295|C>>>16),C=I+(O^V^T)+P[6]+76029189&4294967295,I=O+(C<<23&4294967295|C>>>9),C=T+(I^O^V)+P[9]+3654602809&4294967295,T=I+(C<<4&4294967295|C>>>28),C=V+(T^I^O)+P[12]+3873151461&4294967295,V=T+(C<<11&4294967295|C>>>21),C=O+(V^T^I)+P[15]+530742520&4294967295,O=V+(C<<16&4294967295|C>>>16),C=I+(O^V^T)+P[2]+3299628645&4294967295,I=O+(C<<23&4294967295|C>>>9),C=T+(O^(I|~V))+P[0]+4096336452&4294967295,T=I+(C<<6&4294967295|C>>>26),C=V+(I^(T|~O))+P[7]+1126891415&4294967295,V=T+(C<<10&4294967295|C>>>22),C=O+(T^(V|~I))+P[14]+2878612391&4294967295,O=V+(C<<15&4294967295|C>>>17),C=I+(V^(O|~T))+P[5]+4237533241&4294967295,I=O+(C<<21&4294967295|C>>>11),C=T+(O^(I|~V))+P[12]+1700485571&4294967295,T=I+(C<<6&4294967295|C>>>26),C=V+(I^(T|~O))+P[3]+2399980690&4294967295,V=T+(C<<10&4294967295|C>>>22),C=O+(T^(V|~I))+P[10]+4293915773&4294967295,O=V+(C<<15&4294967295|C>>>17),C=I+(V^(O|~T))+P[1]+2240044497&4294967295,I=O+(C<<21&4294967295|C>>>11),C=T+(O^(I|~V))+P[8]+1873313359&4294967295,T=I+(C<<6&4294967295|C>>>26),C=V+(I^(T|~O))+P[15]+4264355552&4294967295,V=T+(C<<10&4294967295|C>>>22),C=O+(T^(V|~I))+P[6]+2734768916&4294967295,O=V+(C<<15&4294967295|C>>>17),C=I+(V^(O|~T))+P[13]+1309151649&4294967295,I=O+(C<<21&4294967295|C>>>11),C=T+(O^(I|~V))+P[4]+4149444226&4294967295,T=I+(C<<6&4294967295|C>>>26),C=V+(I^(T|~O))+P[11]+3174756917&4294967295,V=T+(C<<10&4294967295|C>>>22),C=O+(T^(V|~I))+P[2]+718787259&4294967295,O=V+(C<<15&4294967295|C>>>17),C=I+(V^(O|~T))+P[9]+3951481745&4294967295,R.g[0]=R.g[0]+T&4294967295,R.g[1]=R.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,R.g[2]=R.g[2]+O&4294967295,R.g[3]=R.g[3]+V&4294967295}i.prototype.u=function(R,T){T===void 0&&(T=R.length);for(var I=T-this.blockSize,P=this.B,O=this.h,V=0;V<T;){if(O==0)for(;V<=I;)o(this,R,V),V+=this.blockSize;if(typeof R=="string"){for(;V<T;)if(P[O++]=R.charCodeAt(V++),O==this.blockSize){o(this,P),O=0;break}}else for(;V<T;)if(P[O++]=R[V++],O==this.blockSize){o(this,P),O=0;break}}this.h=O,this.o+=T},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var T=1;T<R.length-8;++T)R[T]=0;var I=8*this.o;for(T=R.length-8;T<R.length;++T)R[T]=I&255,I/=256;for(this.u(R),R=Array(16),T=I=0;4>T;++T)for(var P=0;32>P;P+=8)R[I++]=this.g[T]>>>P&255;return R};function l(R,T){var I=f;return Object.prototype.hasOwnProperty.call(I,R)?I[R]:I[R]=T(R)}function h(R,T){this.h=T;for(var I=[],P=!0,O=R.length-1;0<=O;O--){var V=R[O]|0;P&&V==T||(I[O]=V,P=!1)}this.g=I}var f={};function g(R){return-128<=R&&128>R?l(R,function(T){return new h([T|0],0>T?-1:0)}):new h([R|0],0>R?-1:0)}function _(R){if(isNaN(R)||!isFinite(R))return S;if(0>R)return F(_(-R));for(var T=[],I=1,P=0;R>=I;P++)T[P]=R/I|0,I*=4294967296;return new h(T,0)}function w(R,T){if(R.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R.charAt(0)=="-")return F(w(R.substring(1),T));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=_(Math.pow(T,8)),P=S,O=0;O<R.length;O+=8){var V=Math.min(8,R.length-O),C=parseInt(R.substring(O,O+V),T);8>V?(V=_(Math.pow(T,V)),P=P.j(V).add(_(C))):(P=P.j(I),P=P.add(_(C)))}return P}var S=g(0),D=g(1),j=g(16777216);r=h.prototype,r.m=function(){if(q(this))return-F(this).m();for(var R=0,T=1,I=0;I<this.g.length;I++){var P=this.i(I);R+=(0<=P?P:4294967296+P)*T,T*=4294967296}return R},r.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(z(this))return"0";if(q(this))return"-"+F(this).toString(R);for(var T=_(Math.pow(R,6)),I=this,P="";;){var O=ge(I,T).g;I=ie(I,O.j(T));var V=((0<I.g.length?I.g[0]:I.h)>>>0).toString(R);if(I=O,z(I))return V+P;for(;6>V.length;)V="0"+V;P=V+P}},r.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function z(R){if(R.h!=0)return!1;for(var T=0;T<R.g.length;T++)if(R.g[T]!=0)return!1;return!0}function q(R){return R.h==-1}r.l=function(R){return R=ie(this,R),q(R)?-1:z(R)?0:1};function F(R){for(var T=R.g.length,I=[],P=0;P<T;P++)I[P]=~R.g[P];return new h(I,~R.h).add(D)}r.abs=function(){return q(this)?F(this):this},r.add=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],P=0,O=0;O<=T;O++){var V=P+(this.i(O)&65535)+(R.i(O)&65535),C=(V>>>16)+(this.i(O)>>>16)+(R.i(O)>>>16);P=C>>>16,V&=65535,C&=65535,I[O]=C<<16|V}return new h(I,I[I.length-1]&-2147483648?-1:0)};function ie(R,T){return R.add(F(T))}r.j=function(R){if(z(this)||z(R))return S;if(q(this))return q(R)?F(this).j(F(R)):F(F(this).j(R));if(q(R))return F(this.j(F(R)));if(0>this.l(j)&&0>R.l(j))return _(this.m()*R.m());for(var T=this.g.length+R.g.length,I=[],P=0;P<2*T;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<R.g.length;O++){var V=this.i(P)>>>16,C=this.i(P)&65535,nt=R.i(O)>>>16,Dt=R.i(O)&65535;I[2*P+2*O]+=C*Dt,se(I,2*P+2*O),I[2*P+2*O+1]+=V*Dt,se(I,2*P+2*O+1),I[2*P+2*O+1]+=C*nt,se(I,2*P+2*O+1),I[2*P+2*O+2]+=V*nt,se(I,2*P+2*O+2)}for(P=0;P<T;P++)I[P]=I[2*P+1]<<16|I[2*P];for(P=T;P<2*T;P++)I[P]=0;return new h(I,0)};function se(R,T){for(;(R[T]&65535)!=R[T];)R[T+1]+=R[T]>>>16,R[T]&=65535,T++}function oe(R,T){this.g=R,this.h=T}function ge(R,T){if(z(T))throw Error("division by zero");if(z(R))return new oe(S,S);if(q(R))return T=ge(F(R),T),new oe(F(T.g),F(T.h));if(q(T))return T=ge(R,F(T)),new oe(F(T.g),T.h);if(30<R.g.length){if(q(R)||q(T))throw Error("slowDivide_ only works with positive integers.");for(var I=D,P=T;0>=P.l(R);)I=Ae(I),P=Ae(P);var O=ye(I,1),V=ye(P,1);for(P=ye(P,2),I=ye(I,2);!z(P);){var C=V.add(P);0>=C.l(R)&&(O=O.add(I),V=C),P=ye(P,1),I=ye(I,1)}return T=ie(R,O.j(T)),new oe(O,T)}for(O=S;0<=R.l(T);){for(I=Math.max(1,Math.floor(R.m()/T.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),V=_(I),C=V.j(T);q(C)||0<C.l(R);)I-=P,V=_(I),C=V.j(T);z(V)&&(V=D),O=O.add(V),R=ie(R,C)}return new oe(O,R)}r.A=function(R){return ge(this,R).h},r.and=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],P=0;P<T;P++)I[P]=this.i(P)&R.i(P);return new h(I,this.h&R.h)},r.or=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],P=0;P<T;P++)I[P]=this.i(P)|R.i(P);return new h(I,this.h|R.h)},r.xor=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],P=0;P<T;P++)I[P]=this.i(P)^R.i(P);return new h(I,this.h^R.h)};function Ae(R){for(var T=R.g.length+1,I=[],P=0;P<T;P++)I[P]=R.i(P)<<1|R.i(P-1)>>>31;return new h(I,R.h)}function ye(R,T){var I=T>>5;T%=32;for(var P=R.g.length-I,O=[],V=0;V<P;V++)O[V]=0<T?R.i(V+I)>>>T|R.i(V+I+1)<<32-T:R.i(V+I);return new h(O,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,_v=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,os=h}).apply(typeof ay<"u"?ay:typeof self<"u"?self:typeof window<"u"?window:{});var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vv,Da,wv,Mu,$d,Ev,Tv,Iv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Au=="object"&&Au];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var y=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in y))break e;y=y[L]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,L={next:function(){if(!E&&y<u.length){var B=y++;return{value:p(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,y){return u.call.apply(u.bind,arguments)}function S(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function D(u,p,y){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:S,D.apply(null,arguments)}function j(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function z(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,L,B){for(var Y=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)Y[Be-2]=arguments[Be];return p.prototype[L].apply(E,Y)}}function q(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function F(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=u.length||0,B=E.length||0;u.length=L+B;for(let Y=0;Y<B;Y++)u[L+Y]=E[Y]}else u.push(E)}}class ie{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function se(u){return/^[\s\xa0]*$/.test(u)}function oe(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ge(u){return ge[" "](u),u}ge[" "]=function(){};var Ae=oe().indexOf("Gecko")!=-1&&!(oe().toLowerCase().indexOf("webkit")!=-1&&oe().indexOf("Edge")==-1)&&!(oe().indexOf("Trident")!=-1||oe().indexOf("MSIE")!=-1)&&oe().indexOf("Edge")==-1;function ye(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function R(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function T(u){const p={};for(const y in u)p[y]=u[y];return p}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,p){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)u[y]=E[y];for(let B=0;B<I.length;B++)y=I[B],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function O(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function V(u){f.setTimeout(()=>{throw u},0)}function C(){var u=he;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class nt{constructor(){this.h=this.g=null}add(p,y){const E=Dt.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Dt=new ie(()=>new Ot,u=>u.reset());class Ot{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,Z=!1,he=new nt,te=()=>{const u=f.Promise.resolve(void 0);ze=()=>{u.then(x)}};var x=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(y){V(y)}var p=Dt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Z=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u}();function Ce(u,p){if(ce.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ae){e:{try{ge(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}z(Ce,ce);var xe={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function qe(u,p,y,E,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=L,this.key=++Ue,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fr(u){this.src=u,this.g={},this.h=0}fr.prototype.add=function(u,p,y,E,L){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var Y=Br(u,p,E,L);return-1<Y?(p=u[Y],y||(p.fa=!1)):(p=new qe(p,this.src,B,!!E,L),p.fa=y,u.push(p)),p};function _s(u,p){var y=p.type;if(y in u.g){var E=u.g[y],L=Array.prototype.indexOf.call(E,p,void 0),B;(B=0<=L)&&Array.prototype.splice.call(E,L,1),B&&(_t(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Br(u,p,y,E){for(var L=0;L<u.length;++L){var B=u[L];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==E)return L}return-1}var Ai="closure_lm_"+(1e6*Math.random()|0),vs={};function Lo(u,p,y,E,L){if(Array.isArray(p)){for(var B=0;B<p.length;B++)Lo(u,p[B],y,E,L);return null}return y=Fo(y),u&&u[Fe]?u.K(p,y,_(E)?!!E.capture:!!E,L):bo(u,p,y,!1,E,L)}function bo(u,p,y,E,L,B){if(!p)throw Error("Invalid event type");var Y=_(L)?!!L.capture:!!L,Be=Es(u);if(Be||(u[Ai]=Be=new fr(u)),y=Be.add(p,y,E,Y,B),y.proxy)return y;if(E=ll(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Re||(L=Y),L===void 0&&(L=!1),u.addEventListener(p.toString(),E,L);else if(u.attachEvent)u.attachEvent(mr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ll(){function u(y){return p.call(u.src,u.listener,y)}const p=Mo;return u}function ws(u,p,y,E,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)ws(u,p[B],y,E,L);else E=_(E)?!!E.capture:!!E,y=Fo(y),u&&u[Fe]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],y=Br(B,y,E,L),-1<y&&(_t(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=Es(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Br(p,y,E,L)),(y=-1<u?p[u]:null)&&pr(y))}function pr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Fe])_s(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(mr(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Es(p))?(_s(y,u),y.h==0&&(y.src=null,p[Ai]=null)):_t(u)}}}function mr(u){return u in vs?vs[u]:vs[u]="on"+u}function Mo(u,p){if(u.da)u=!0;else{p=new Ce(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&pr(u),u=y.call(E,p)}return u}function Es(u){return u=u[Ai],u instanceof fr?u:null}var Ts="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fo(u){return typeof u=="function"?u:(u[Ts]||(u[Ts]=function(p){return u.handleEvent(p)}),u[Ts])}function ct(){W.call(this),this.i=new fr(this),this.M=this,this.F=null}z(ct,W),ct.prototype[Fe]=!0,ct.prototype.removeEventListener=function(u,p,y,E){ws(this,u,p,y,E)};function ht(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new ce(p,u);else if(p instanceof ce)p.target=p.target||u;else{var L=p;p=new ce(E,u),P(p,L)}if(L=!0,y)for(var B=y.length-1;0<=B;B--){var Y=p.g=y[B];L=gr(Y,E,!0,p)&&L}if(Y=p.g=u,L=gr(Y,E,!0,p)&&L,L=gr(Y,E,!1,p)&&L,y)for(B=0;B<y.length;B++)Y=p.g=y[B],L=gr(Y,E,!1,p)&&L}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)_t(y[E]);delete u.g[p],u.h--}}this.F=null},ct.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},ct.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function gr(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,B=0;B<p.length;++B){var Y=p[B];if(Y&&!Y.da&&Y.capture==y){var Be=Y.listener,dt=Y.ha||Y.src;Y.fa&&_s(u.i,Y),L=Be.call(dt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Uo(u,p,y){if(typeof u=="function")y&&(u=D(u,y));else if(u&&typeof u.handleEvent=="function")u=D(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function zr(u){u.g=Uo(()=>{u.g=null,u.i&&(u.i=!1,zr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Ri extends W{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:zr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ci(u){W.call(this),this.h=u,this.g={}}z(Ci,W);var jo=[];function Bo(u){ye(u.g,function(p,y){this.g.hasOwnProperty(y)&&pr(p)},u),u.g={}}Ci.prototype.N=function(){Ci.aa.N.call(this),Bo(this)},Ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zo=f.JSON.stringify,$o=f.JSON.parse,qo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Pi(){}Pi.prototype.h=null;function Is(u){return u.h||(u.h=u.i())}function Ss(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){ce.call(this,"d")}z(Kn,ce);function As(){ce.call(this,"c")}z(As,ce);var Gn={},Ho=null;function ki(){return Ho=Ho||new ct}Gn.La="serverreachability";function Wo(u){ce.call(this,Gn.La,u)}z(Wo,ce);function yr(u){const p=ki();ht(p,new Wo(p))}Gn.STAT_EVENT="statevent";function Ko(u,p){ce.call(this,Gn.STAT_EVENT,u),this.stat=p}z(Ko,ce);function rt(u){const p=ki();ht(p,new Ko(p,u))}Gn.Ma="timingevent";function Rs(u,p){ce.call(this,Gn.Ma,u),this.size=p}z(Rs,ce);function Cn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function Di(u,p,y,E,L,B){u.info(function(){if(u.g)if(B)for(var Y="",Be=B.split("&"),dt=0;dt<Be.length;dt++){var Ve=Be[dt].split("=");if(1<Ve.length){var vt=Ve[0];Ve=Ve[1];var ot=vt.split("_");Y=2<=ot.length&&ot[1]=="type"?Y+(vt+"="+Ve+"&"):Y+(vt+"=redacted&")}}else Y=null;else Y=B;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+p+`
`+y+`
`+Y})}function Cs(u,p,y,E,L,B,Y){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+p+`
`+y+`
`+B+" "+Y})}function Pn(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Vc(u,y)+(E?" "+E:"")})}function Go(u,p){u.info(function(){return"TIMEOUT: "+p})}Ni.prototype.info=function(){};function Vc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var Y=1;Y<L.length;Y++)L[Y]=""}}}}return zo(y)}catch{return p}}var Ps={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ul={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kn;function Oi(){}z(Oi,Pi),Oi.prototype.g=function(){return new XMLHttpRequest},Oi.prototype.i=function(){return{}},kn=new Oi;function Nn(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new Ci(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cl}function cl(){this.i=null,this.g="",this.h=!1}var Qo={},ks={};function Ns(u,p,y){u.L=1,u.v=Kr(sn(p)),u.m=y,u.P=!0,Jo(u,null)}function Jo(u,p){u.F=Date.now(),He(u),u.A=sn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Qr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new cl,u.g=Pl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Ri(D(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(jo[0]=L.toString()),L=jo);for(var B=0;B<L.length;B++){var Y=Lo(y,L[B],E||p.handleEvent,!1,p.h||p);if(!Y)break;p.g[Y.key]=Y}p=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),yr(),Di(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Kt(u)==3?p.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Kt(this.g);var p=this.g.Ba();const yn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||na(this.g)))){this.J||ot!=4||p==7||(p==8||0>=yn?yr(3):yr(2)),xi(this);var y=this.g.Z();this.X=y;t:if(hl(this)){var E=na(this.g);u="";var L=E.length,B=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),$r(this);var Y="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(B&&p==L-1)});E.length=0,this.h.g+=u,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=y==200,Cs(this.i,this.u,this.A,this.l,this.R,ot,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,dt=this.g;if((Be=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!se(Be)){var Ve=Be;break t}}Ve=null}if(y=Ve)Pn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xo(this,y);else{this.o=!1,this.s=3,rt(12),mn(this),$r(this);break e}}if(this.P){y=!0;let an;for(;!this.J&&this.C<Y.length;)if(an=Lc(this,Y),an==ks){ot==4&&(this.s=4,rt(14),y=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Qo){this.s=4,rt(15),Pn(this.i,this.l,Y,"[Invalid Chunk]"),y=!1;break}else Pn(this.i,this.l,an,null),Xo(this,an);if(hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||Y.length!=0||this.h.h||(this.s=1,rt(16),y=!1),this.o=this.o&&y,!y)Pn(this.i,this.l,Y,"[Invalid Chunked Response]"),mn(this),$r(this);else if(0<Y.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),ia(vt),vt.M=!0,rt(11))}}else Pn(this.i,this.l,Y,null),Xo(this,Y);ot==4&&mn(this),this.o&&!this.J&&(ot==4?Bs(this.j,this):(this.o=!1,He(this)))}else bs(this.g),y==400&&0<Y.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),mn(this),$r(this)}}}catch{}finally{}};function hl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Lc(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?ks:(y=Number(p.substring(y,E)),isNaN(y)?Qo:(E+=1,E+y>p.length?ks:(p=p.slice(E,E+y),u.C=E+y,p)))}Nn.prototype.cancel=function(){this.J=!0,mn(this)};function He(u){u.S=Date.now()+u.I,dl(u,u.I)}function dl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Cn(D(u.ba,u),p)}function xi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Go(this.i,this.A),this.L!=2&&(yr(),rt(17)),mn(this),this.s=2,$r(this)):dl(this,this.S-u)};function $r(u){u.j.G==0||u.J||Bs(u.j,u)}function mn(u){xi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Bo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Xo(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||zt(y.h,u))){if(!u.K&&zt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)js(y),Ln(y);else break e;Us(y),rt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Cn(D(y.Za,y),6e3));if(1>=pl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Tr(y,11)}else if((u.K||y.g==u)&&js(y),!se(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Ve=L[p];if(y.T=Ve[0],Ve=Ve[1],y.G==2)if(Ve[0]=="c"){y.K=Ve[1],y.ia=Ve[2];const vt=Ve[3];vt!=null&&(y.la=vt,y.j.info("VER="+y.la));const ot=Ve[4];ot!=null&&(y.Aa=ot,y.j.info("SVER="+y.Aa));const yn=Ve[5];yn!=null&&typeof yn=="number"&&0<yn&&(E=1.5*yn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const an=u.g;if(an){const ji=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var B=E.h;B.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Yo(B,B.h),B.h=null))}if(E.D){const $s=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;$s&&(E.ya=$s,$e(E.I,E.D,$s))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var Y=u;if(E.qa=Cl(E,E.J?E.ia:null,E.W),Y.K){ml(E.h,Y);var Be=Y,dt=E.L;dt&&(Be.I=dt),Be.B&&(xi(Be),He(Be)),E.g=Y}else Ui(E);0<y.i.length&&Yn(y)}else Ve[0]!="stop"&&Ve[0]!="close"||Tr(y,7);else y.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Tr(y,7):At(y):Ve[0]!="noop"&&y.l&&y.l.ta(Ve),y.v=0)}}yr(4)}catch{}}var fl=class{constructor(u,p){this.g=u,this.map=p}};function Vi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function pl(u){return u.h?1:u.g?u.g.size:0}function zt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Yo(u,p){u.g?u.g.add(p):u.h=p}function ml(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Vi.prototype.cancel=function(){if(this.i=gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function gl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return q(u.i)}function Ds(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function Os(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function qr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Os(u),E=Ds(u),L=E.length,B=0;B<L;B++)p.call(void 0,E[B],y&&y[B],u)}var Li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),L=null;if(0<=E){var B=u[y].substring(0,E);L=u[y].substring(E+1)}else B=u[y];p(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function _r(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _r){this.h=u.h,bi(this,u.j),this.o=u.o,this.g=u.g,Hr(this,u.s),this.l=u.l;var p=u.i,y=new Qn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Wr(this,y),this.m=u.m}else u&&(p=String(u).match(Li))?(this.h=!1,bi(this,p[1]||"",!0),this.o=De(p[2]||""),this.g=De(p[3]||"",!0),Hr(this,p[4]),this.l=De(p[5]||"",!0),Wr(this,p[6]||"",!0),this.m=De(p[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}_r.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Gr(p,xs,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Gr(p,xs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Gr(y,y.charAt(0)=="/"?vl:_l,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Gr(y,Zo)),u.join("")};function sn(u){return new _r(u)}function bi(u,p,y){u.j=y?De(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Hr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Wr(u,p,y){p instanceof Qn?(u.i=p,Jn(u.i,u.h)):(y||(p=Gr(p,wl)),u.i=new Qn(p,u.h))}function $e(u,p,y){u.i.set(p,y)}function Kr(u){return $e(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function De(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Gr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,yl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function yl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var xs=/[#\/\?@]/g,_l=/[#\?:]/g,vl=/[#\?]/g,wl=/[#\?@]/g,Zo=/#/g;function Qn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function St(u){u.g||(u.g=new Map,u.h=0,u.i&&bc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Qn.prototype,r.add=function(u,p){St(this),this.i=null,u=gn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Dn(u,p){St(u),p=gn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function On(u,p){return St(u),p=gn(u,p),u.g.has(p)}r.forEach=function(u,p){St(this),this.g.forEach(function(y,E){y.forEach(function(L){u.call(p,L,E,this)},this)},this)},r.na=function(){St(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const L=u[E];for(let B=0;B<L.length;B++)y.push(p[E])}return y},r.V=function(u){St(this);let p=[];if(typeof u=="string")On(this,u)&&(p=p.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return St(this),this.i=null,u=gn(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Qr(u,p,y){Dn(u,p),0<y.length&&(u.i=null,u.g.set(gn(u,p),q(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const B=encodeURIComponent(String(E)),Y=this.V(E);for(E=0;E<Y.length;E++){var L=B;Y[E]!==""&&(L+="="+encodeURIComponent(String(Y[E]))),u.push(L)}}return this.i=u.join("&")};function gn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Jn(u,p){p&&!u.j&&(St(u),u.i=null,u.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Dn(this,E),Qr(this,L,y))},u)),u.j=p}function Mc(u,p){const y=new Ni;if(f.Image){const E=new Image;E.onload=j(Wt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=j(Wt,y,"TestLoadImage: error",!1,p,E),E.onabort=j(Wt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=j(Wt,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function El(u,p){const y=new Ni,E=new AbortController,L=setTimeout(()=>{E.abort(),Wt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(L),B.ok?Wt(y,"TestPingServer: ok",!0,p):Wt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Wt(y,"TestPingServer: error",!1,p)})}function Wt(u,p,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Fc(){this.g=new qo}function Tl(u,p,y){const E=y||"";try{qr(u,function(L,B){let Y=L;_(L)&&(Y=zo(L)),p.push(E+B+"="+encodeURIComponent(Y))})}catch(L){throw p.push(E+"type="+encodeURIComponent("_badmap")),L}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}z(vr,Pi),vr.prototype.g=function(){return new Mi(this.l,this.j)},vr.prototype.i=function(u){return function(){return u}}({});function Mi(u,p){ct.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Mi,ct),r=Mi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Vn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Il(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Il(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?xn(this):Vn(this),this.readyState==3&&Il(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,xn(this))},r.Qa=function(u){this.g&&(this.response=u,xn(this))},r.ga=function(){this.g&&xn(this)};function xn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Vn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Vn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let p="";return ye(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Jr(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=wr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):$e(u,p,y))}function Qe(u){ct.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Qe,ct);var Uc=/^https?$/i,ea=["POST","PUT"];r=Qe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kn.g(),this.v=this.o?Is(this.o):Is(kn),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){Fi(this,B);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())y.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ea,p,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Y]of y)this.g.setRequestHeader(B,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ls(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Fi(this,B)}};function Fi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Vs(u),on(u)}function Vs(u){u.A||(u.A=!0,ht(u,"complete"),ht(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ht(this,"complete"),ht(this,"abort"),on(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},r.bb=function(){ta(this)};function ta(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)Uo(u.Ea,0,u);else if(ht(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const Y=u.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=Y===0){var L=String(u.D).match(Li)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),E=!Uc.test(L?L.toLowerCase():"")}y=E}if(y)ht(u,"complete"),ht(u,"success");else{u.m=6;try{var B=2<Kt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Vs(u)}}finally{on(u)}}}}function on(u,p){if(u.g){Ls(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ht(u,"ready");try{y.onreadystatechange=E}catch{}}}function Ls(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),$o(p)}};function na(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function bs(u){const p={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(se(u[E]))continue;var y=O(u[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[L]||[];p[L]=B,B.push(y)}R(p,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function ra(u){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,u),this.cb=Xn("retryDelaySeedMs",1e4,u),this.Wa=Xn("forwardChannelMaxRetries",2,u),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Vi(u&&u.concurrentRequestLimit),this.Da=new Fc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ra.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,E){rt(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Cl(this,null,this.W),Yn(this)};function At(u){if(Ms(u),u.G==3){var p=u.U++,y=sn(u.I);if($e(y,"SID",u.K),$e(y,"RID",p),$e(y,"TYPE","terminate"),Er(u,y),p=new Nn(u,u.j,p),p.L=2,p.v=Kr(sn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Pl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),He(p)}Rl(u)}function Ln(u){u.g&&(ia(u),u.g.cancel(),u.g=null)}function Ms(u){Ln(u),u.u&&(f.clearTimeout(u.u),u.u=null),js(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Yn(u){if(!rn(u.h)&&!u.s){u.s=!0;var p=u.Ga;ze||te(),Z||(ze(),Z=!0),he.add(p,u),u.B=0}}function jc(u,p){return pl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Cn(D(u.Ga,u,p),Al(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Nn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=T(B),P(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Xr(this,L,p),y=sn(this.I),$e(y,"RID",u),$e(y,"CVER",22),this.D&&$e(y,"X-HTTP-Session-Id",this.D),Er(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(wr(B)))+"&"+p:this.m&&Jr(y,this.m,B)),Yo(this.h,L),this.Ua&&$e(y,"TYPE","init"),this.P?($e(y,"$req",p),$e(y,"SID","null"),L.T=!0,Ns(L,y,null)):Ns(L,y,p),this.G=2}}else this.G==3&&(u?Fs(this,u):this.i.length==0||rn(this.h)||Fs(this))};function Fs(u,p){var y;p?y=p.l:y=u.U++;const E=sn(u.I);$e(E,"SID",u.K),$e(E,"RID",y),$e(E,"AID",u.T),Er(u,E),u.m&&u.o&&Jr(E,u.m,u.o),y=new Nn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Xr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Yo(u.h,y),Ns(y,E,p)}function Er(u,p){u.H&&ye(u.H,function(y,E){$e(p,E,y)}),u.l&&qr({},function(y,E){$e(p,E,y)})}function Xr(u,p,y){y=Math.min(u.i.length,y);var E=u.l?D(u.l.Na,u.l,u):null;e:{var L=u.i;let B=-1;for(;;){const Y=["count="+y];B==-1?0<y?(B=L[0].g,Y.push("ofs="+B)):B=0:Y.push("ofs="+B);let Be=!0;for(let dt=0;dt<y;dt++){let Ve=L[dt].g;const vt=L[dt].map;if(Ve-=B,0>Ve)B=Math.max(0,L[dt].g-100),Be=!1;else try{Tl(vt,Y,"req"+Ve+"_")}catch{E&&E(vt)}}if(Be){E=Y.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function Ui(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ze||te(),Z||(ze(),Z=!0),he.add(p,u),u.v=0}}function Us(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Cn(D(u.Fa,u),Al(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Sl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Cn(D(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Ln(this),Sl(this))};function ia(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Sl(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=sn(u.qa);$e(p,"RID","rpc"),$e(p,"SID",u.K),$e(p,"AID",u.T),$e(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&$e(p,"TO",u.ja),$e(p,"TYPE","xmlhttp"),Er(u,p),u.m&&u.o&&Jr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Kr(sn(p)),y.m=null,y.P=!0,Jo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Ln(this),Us(this),rt(19))};function js(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Bs(u,p){var y=null;if(u.g==p){js(u),ia(u),u.g=null;var E=2}else if(zt(u.h,p))y=p.D,ml(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;E=ki(),ht(E,new Rs(E,y)),Yn(u)}else Ui(u);else if(L=p.s,L==3||L==0&&0<p.X||!(E==1&&jc(u,p)||E==2&&Us(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:Tr(u,5);break;case 4:Tr(u,10);break;case 3:Tr(u,6);break;default:Tr(u,2)}}}function Al(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Tr(u,p){if(u.j.info("Error code "+p),p==2){var y=D(u.fb,u),E=u.Xa;const L=!E;E=new _r(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||bi(E,"https"),Kr(E),L?Mc(E.toString(),y):El(E.toString(),y)}else rt(2);u.G=0,u.l&&u.l.sa(p),Rl(u),Ms(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Rl(u){if(u.G=0,u.ka=[],u.l){const p=gl(u.h);(p.length!=0||u.i.length!=0)&&(F(u.ka,p),F(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function Cl(u,p,y){var E=y instanceof _r?sn(y):new _r(y);if(E.g!="")p&&(E.g=p+"."+E.g),Hr(E,E.s);else{var L=f.location;E=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var B=new _r(null);E&&bi(B,E),p&&(B.g=p),L&&Hr(B,L),y&&(B.l=y),E=B}return y=u.D,p=u.ya,y&&p&&$e(E,y,p),$e(E,"VER",u.la),Er(u,E),E}function Pl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Qe(new vr({eb:y})):new Qe(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function sa(){}r=sa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function zs(){}zs.prototype.g=function(u,p){return new $t(u,p)};function $t(u,p){ct.call(this),this.g=new ra(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!se(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!se(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Zn(this)}z($t,ct),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){At(this.g)},$t.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=zo(u),u=y);p.i.push(new fl(p.Ya++,u)),p.G==3&&Yn(p)},$t.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,$t.aa.N.call(this)};function kl(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}z(kl,Kn);function Nl(){As.call(this),this.status=1}z(Nl,As);function Zn(u){this.g=u}z(Zn,sa),Zn.prototype.ua=function(){ht(this.g,"a")},Zn.prototype.ta=function(u){ht(this.g,new kl(u))},Zn.prototype.sa=function(u){ht(this.g,new Nl)},Zn.prototype.ra=function(){ht(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Iv=function(){return new zs},Tv=function(){return ki()},Ev=Gn,$d={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ps.NO_ERROR=0,Ps.TIMEOUT=8,Ps.HTTP_ERROR=6,Mu=Ps,ul.COMPLETE="complete",wv=ul,Ss.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Da=Ss,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,vv=Qe}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});const ly="@firebase/firestore";/**
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
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let Do="11.0.2";/**
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
 */const us=new gc("@firebase/firestore");function co(){return us.logLevel}function ne(r,...e){if(us.logLevel<=ke.DEBUG){const t=e.map(If);us.debug(`Firestore (${Do}): ${r}`,...t)}}function Ur(r,...e){if(us.logLevel<=ke.ERROR){const t=e.map(If);us.error(`Firestore (${Do}): ${r}`,...t)}}function wo(r,...e){if(us.logLevel<=ke.WARN){const t=e.map(If);us.warn(`Firestore (${Do}): ${r}`,...t)}}function If(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function we(r="Unexpected state"){const e=`FIRESTORE (${Do}) INTERNAL ASSERTION FAILED: `+r;throw Ur(e),new Error(e)}function je(r,e){r||we()}function Ie(r,e){return r}/**
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
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends Wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Sv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class RA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class CA{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new vi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=l;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},f=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>f(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new vi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string"),new Sv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new Ft(e)}}class PA{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class kA{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new PA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){je(this.o===void 0);const i=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(je(typeof t.token=="string"),this.R=t.token,new NA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function OA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Av{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=OA(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Oe(r,e){return r<e?-1:r>e?1:0}function Eo(r,e,t){return r.length===e.length&&r.every((i,o)=>t(i,e[o]))}/**
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
 */class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new gt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new pe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new gt(0,0))}static max(){return new Te(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class qa{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(),i===void 0?i=e.length-t:i>e.length-t&&we(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return qa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qa?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class tt extends qa{construct(e,t,i){return new tt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new pe(J.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new tt(t)}static emptyPath(){return new tt([])}}const xA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends qa{construct(e,t,i){return new kt(e,t,i)}static isValidIdentifier(e){return xA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new pe(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new pe(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new pe(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new pe(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(tt.fromString(e))}static fromName(e){return new me(tt.fromString(e).popFirst(5))}static empty(){return new me(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return tt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new tt(e.slice()))}}function VA(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new gt(t+1,0):new gt(t,i));return new wi(o,me.empty(),e)}function LA(r){return new wi(r.readTime,r.key,-1)}class wi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new wi(Te.min(),me.empty(),-1)}static max(){return new wi(Te.max(),me.empty(),-1)}}function bA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(r.documentKey,e.documentKey),t!==0?t:Oe(r.largestBatchId,e.largestBatchId))}/**
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
 */const MA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Oo(r){if(r.code!==J.FAILED_PRECONDITION||r.message!==MA)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,i)=>{t(e)})}static reject(e){return new H((t,i)=>{i(e)})}static waitFor(e){return new H((t,i)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},g=>i(g))}),h=!0,l===o&&t()})}static or(e){let t=H.resolve(!1);for(const i of e)t=t.next(o=>o?H.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new H((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next(w=>{h[_]=w,++f,f===l&&i(h)},w=>o(w))}})}static doWhile(e,t){return new H((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function UA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function xo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}wc.oe=-1;function Ec(r){return r==null}function Xu(r){return r===0&&1/r==-1/0}function jA(r){return typeof r=="number"&&Number.isInteger(r)&&!Xu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function BA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=uy(e)),e=zA(r.get(t),e);return uy(e)}function zA(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function uy(r){return r+""}/**
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
 */function cy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ps(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Rv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ru(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ru(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ru(this.root,e,this.comparator,!0)}}class Ru{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Pt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hy(this.data.getIterator())}getIteratorFrom(e){return new hy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class hy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new zn([])}unionWith(e){let t=new yt(kt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Cv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Cv("Invalid base64 string: "+l):l}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const $A=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(r){if(je(!!r),typeof r=="string"){let e=0;const t=$A.exec(r);if(je(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ti(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
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
 */function Sf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Tc(r){const e=r.mapValue.fields.__previous_value__;return Sf(e)?Tc(e):e}function Ha(r){const e=Ei(r.mapValue.fields.__local_write_time__.timestampValue);return new gt(e.seconds,e.nanos)}/**
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
 */class qA{constructor(e,t,i,o,l,h,f,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_}}class Wa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ii(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Sf(r)?4:WA(r)?9007199254740991:HA(r)?10:11:we()}function hr(r,e){if(r===e)return!0;const t=Ii(r);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ha(r).isEqual(Ha(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ei(o.timestampValue),f=Ei(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return Ti(o.bytesValue).isEqual(Ti(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),f=st(l.doubleValue);return h===f?Xu(h)===Xu(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return Eo(r.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(cy(h)!==cy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!hr(h[g],f[g])))return!1;return!0}(r,e);default:return we()}}function Ka(r,e){return(r.values||[]).find(t=>hr(t,e))!==void 0}function To(r,e){if(r===e)return 0;const t=Ii(r),i=Ii(e);if(t!==i)return Oe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(r.booleanValue,e.booleanValue);case 2:return function(l,h){const f=st(l.integerValue||l.doubleValue),g=st(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(r,e);case 3:return dy(r.timestampValue,e.timestampValue);case 4:return dy(Ha(r),Ha(e));case 5:return Oe(r.stringValue,e.stringValue);case 6:return function(l,h){const f=Ti(l),g=Ti(h);return f.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const w=Oe(f[_],g[_]);if(w!==0)return w}return Oe(f.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Oe(st(l.latitude),st(h.latitude));return f!==0?f:Oe(st(l.longitude),st(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return fy(r.arrayValue,e.arrayValue);case 10:return function(l,h){var f,g,_,w;const S=l.fields||{},D=h.fields||{},j=(f=S.value)===null||f===void 0?void 0:f.arrayValue,z=(g=D.value)===null||g===void 0?void 0:g.arrayValue,q=Oe(((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0,((w=z==null?void 0:z.values)===null||w===void 0?void 0:w.length)||0);return q!==0?q:fy(j,z)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===Cu.mapValue&&h===Cu.mapValue)return 0;if(l===Cu.mapValue)return 1;if(h===Cu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let S=0;S<g.length&&S<w.length;++S){const D=Oe(g[S],w[S]);if(D!==0)return D;const j=To(f[g[S]],_[w[S]]);if(j!==0)return j}return Oe(g.length,w.length)}(r.mapValue,e.mapValue);default:throw we()}}function dy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Oe(r,e);const t=Ei(r),i=Ei(e),o=Oe(t.seconds,i.seconds);return o!==0?o:Oe(t.nanos,i.nanos)}function fy(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=To(t[o],i[o]);if(l)return l}return Oe(t.length,i.length)}function Io(r){return qd(r)}function qd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const i=Ei(t);return`time(${i.seconds},${i.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ti(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return me.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=qd(l);return i+"]"}(r.arrayValue):"mapValue"in r?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${qd(t.fields[h])}`;return o+"}"}(r.mapValue):we()}function Fu(r){switch(Ii(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tc(r);return e?16+Fu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ti(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+Fu(l),0)}(r.arrayValue);case 10:case 11:return function(i){let o=0;return ps(i.fields,(l,h)=>{o+=l.length+Fu(h)}),o}(r.mapValue);default:throw we()}}function Hd(r){return!!r&&"integerValue"in r}function Af(r){return!!r&&"arrayValue"in r}function py(r){return!!r&&"nullValue"in r}function my(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Uu(r){return!!r&&"mapValue"in r}function HA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function La(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ps(r.mapValue.fields,(t,i)=>e.mapValue.fields[t]=La(i)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=La(r.arrayValue.values[t]);return e}return Object.assign({},r)}function WA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Uu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=La(t)}setAll(e){let t=kt.emptyPath(),i={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=La(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Uu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Uu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ps(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new Sn(La(this.value))}}function Pv(r){const e=[];return ps(r.fields,(t,i)=>{const o=new kt([t]);if(Uu(i)){const l=Pv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new zn(e)}/**
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
 */class Ut{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Ut(e,0,Te.min(),Te.min(),Te.min(),Sn.empty(),0)}static newFoundDocument(e,t,i,o){return new Ut(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Te.min(),Te.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Te.min(),Te.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yu{constructor(e,t){this.position=e,this.inclusive=t}}function gy(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=me.comparator(me.fromName(h.referenceValue),t.key):i=To(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function yy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!hr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Zu{constructor(e,t="asc"){this.field=e,this.dir=t}}function KA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class kv{}class mt extends kv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new QA(e,t,i):t==="array-contains"?new YA(e,i):t==="in"?new ZA(e,i):t==="not-in"?new eR(e,i):t==="array-contains-any"?new tR(e,i):new mt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new JA(e,i):new XA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(To(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(To(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends kv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new dr(e,t)}matches(e){return Nv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Nv(r){return r.op==="and"}function Dv(r){return GA(r)&&Nv(r)}function GA(r){for(const e of r.filters)if(e instanceof dr)return!1;return!0}function Wd(r){if(r instanceof mt)return r.field.canonicalString()+r.op.toString()+Io(r.value);if(Dv(r))return r.filters.map(e=>Wd(e)).join(",");{const e=r.filters.map(t=>Wd(t)).join(",");return`${r.op}(${e})`}}function Ov(r,e){return r instanceof mt?function(i,o){return o instanceof mt&&i.op===o.op&&i.field.isEqual(o.field)&&hr(i.value,o.value)}(r,e):r instanceof dr?function(i,o){return o instanceof dr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,f)=>l&&Ov(h,o.filters[f]),!0):!1}(r,e):void we()}function xv(r){return r instanceof mt?function(t){return`${t.field.canonicalString()} ${t.op} ${Io(t.value)}`}(r):r instanceof dr?function(t){return t.op.toString()+" {"+t.getFilters().map(xv).join(" ,")+"}"}(r):"Filter"}class QA extends mt{constructor(e,t,i){super(e,t,i),this.key=me.fromName(i.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class JA extends mt{constructor(e,t){super(e,"in",t),this.keys=Vv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class XA extends mt{constructor(e,t){super(e,"not-in",t),this.keys=Vv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Vv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>me.fromName(i.referenceValue))}class YA extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Af(t)&&Ka(t.arrayValue,this.value)}}class ZA extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ka(this.value.arrayValue,t)}}class eR extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ka(this.value.arrayValue,t)}}class tR extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Af(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Ka(this.value.arrayValue,i))}}/**
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
 */class nR{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function _y(r,e=null,t=[],i=[],o=null,l=null,h=null){return new nR(r,e,t,i,o,l,h)}function Rf(r){const e=Ie(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Wd(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Ec(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Io(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Io(i)).join(",")),e.ue=t}return e.ue}function Cf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!KA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Ov(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!yy(r.startAt,e.startAt)&&yy(r.endAt,e.endAt)}function Kd(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ic{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rR(r,e,t,i,o,l,h,f){return new Ic(r,e,t,i,o,l,h,f)}function Pf(r){return new Ic(r)}function vy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function iR(r){return r.collectionGroup!==null}function ba(r){const e=Ie(r);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new yt(kt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(f=f.add(_.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Zu(l,i))}),t.has(kt.keyField().canonicalString())||e.ce.push(new Zu(kt.keyField(),i))}return e.ce}function ar(r){const e=Ie(r);return e.le||(e.le=sR(e,ba(r))),e.le}function sR(r,e){if(r.limitType==="F")return _y(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Zu(o.field,l)});const t=r.endAt?new Yu(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new Yu(r.startAt.position,r.startAt.inclusive):null;return _y(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function Gd(r,e,t){return new Ic(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Sc(r,e){return Cf(ar(r),ar(e))&&r.limitType===e.limitType}function Lv(r){return`${Rf(ar(r))}|lt:${r.limitType}`}function ho(r){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>xv(o)).join(", ")}]`),Ec(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Io(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Io(o)).join(",")),`Target(${i})`}(ar(r))}; limitType=${r.limitType})`}function Ac(r,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):me.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(r,e)&&function(i,o){for(const l of ba(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(i,o){return!(i.startAt&&!function(h,f,g){const _=gy(h,f,g);return h.inclusive?_<=0:_<0}(i.startAt,ba(i),o)||i.endAt&&!function(h,f,g){const _=gy(h,f,g);return h.inclusive?_>=0:_>0}(i.endAt,ba(i),o))}(r,e)}function oR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function bv(r){return(e,t)=>{let i=!1;for(const o of ba(r)){const l=aR(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function aR(r,e,t){const i=r.field.isKeyField()?me.comparator(e.key,t.key):function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?To(g,_):we()}(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return we()}}/**
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
 */class ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Rv(this.inner)}size(){return this.innerSize}}/**
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
 */const lR=new Ze(me.comparator);function jr(){return lR}const Mv=new Ze(me.comparator);function Oa(...r){let e=Mv;for(const t of r)e=e.insert(t.key,t);return e}function Fv(r){let e=Mv;return r.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ns(){return Ma()}function Uv(){return Ma()}function Ma(){return new ms(r=>r.toString(),(r,e)=>r.isEqual(e))}const uR=new Ze(me.comparator),cR=new yt(me.comparator);function Ne(...r){let e=cR;for(const t of r)e=e.add(t);return e}const hR=new yt(Oe);function dR(){return hR}/**
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
 */function kf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xu(e)?"-0":e}}function jv(r){return{integerValue:""+r}}function fR(r,e){return jA(e)?jv(e):kf(r,e)}/**
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
 */class Rc{constructor(){this._=void 0}}function pR(r,e,t){return r instanceof ec?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Sf(l)&&(l=Tc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):r instanceof Ga?zv(r,e):r instanceof Qa?$v(r,e):function(o,l){const h=Bv(o,l),f=wy(h)+wy(o.Pe);return Hd(h)&&Hd(o.Pe)?jv(f):kf(o.serializer,f)}(r,e)}function mR(r,e,t){return r instanceof Ga?zv(r,e):r instanceof Qa?$v(r,e):t}function Bv(r,e){return r instanceof tc?function(i){return Hd(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class ec extends Rc{}class Ga extends Rc{constructor(e){super(),this.elements=e}}function zv(r,e){const t=qv(e);for(const i of r.elements)t.some(o=>hr(o,i))||t.push(i);return{arrayValue:{values:t}}}class Qa extends Rc{constructor(e){super(),this.elements=e}}function $v(r,e){let t=qv(e);for(const i of r.elements)t=t.filter(o=>!hr(o,i));return{arrayValue:{values:t}}}class tc extends Rc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function wy(r){return st(r.integerValue||r.doubleValue)}function qv(r){return Af(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function gR(r,e){return r.field.isEqual(e.field)&&function(i,o){return i instanceof Ga&&o instanceof Ga||i instanceof Qa&&o instanceof Qa?Eo(i.elements,o.elements,hr):i instanceof tc&&o instanceof tc?hr(i.Pe,o.Pe):i instanceof ec&&o instanceof ec}(r.transform,e.transform)}class yR{constructor(e,t){this.version=e,this.transformResults=t}}class br{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new br}static exists(e){return new br(void 0,e)}static updateTime(e){return new br(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Cc{}function Hv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Kv(r.key,br.none()):new il(r.key,r.data,br.none());{const t=r.data,i=Sn.empty();let o=new yt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new gs(r.key,i,new zn(o.toArray()),br.none())}}function _R(r,e,t){r instanceof il?function(o,l,h){const f=o.value.clone(),g=Ty(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof gs?function(o,l,h){if(!ju(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Ty(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Wv(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Fa(r,e,t,i){return r instanceof il?function(l,h,f,g){if(!ju(l.precondition,h))return f;const _=l.value.clone(),w=Iy(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,i):r instanceof gs?function(l,h,f,g){if(!ju(l.precondition,h))return f;const _=Iy(l.fieldTransforms,g,h),w=h.data;return w.setAll(Wv(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(S=>S.field))}(r,e,t,i):function(l,h,f){return ju(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function vR(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=Bv(i.transform,o||null);l!=null&&(t===null&&(t=Sn.empty()),t.set(i.field,l))}return t||null}function Ey(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Eo(i,o,(l,h)=>gR(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class il extends Cc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class gs extends Cc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Wv(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}}),e}function Ty(r,e,t){const i=new Map;je(r.length===t.length);for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,mR(h,f,t[o]))}return i}function Iy(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,pR(l,h,e))}return i}class Kv extends Cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wR extends Cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ER{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&_R(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Fa(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Fa(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Uv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=Hv(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Te.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(t,i)=>Ey(t,i))&&Eo(this.baseMutations,e.baseMutations,(t,i)=>Ey(t,i))}}class Nf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length);let o=function(){return uR}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Nf(e,t,i,o)}}/**
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
 */class TR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var lt,Le;function SR(r){switch(r){default:return we();case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0}}function Gv(r){if(r===void 0)return Ur("GRPC error has no .code"),J.UNKNOWN;switch(r){case lt.OK:return J.OK;case lt.CANCELLED:return J.CANCELLED;case lt.UNKNOWN:return J.UNKNOWN;case lt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case lt.INTERNAL:return J.INTERNAL;case lt.UNAVAILABLE:return J.UNAVAILABLE;case lt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case lt.NOT_FOUND:return J.NOT_FOUND;case lt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case lt.ABORTED:return J.ABORTED;case lt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case lt.DATA_LOSS:return J.DATA_LOSS;default:return we()}}(Le=lt||(lt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function AR(){return new TextEncoder}/**
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
 */const RR=new os([4294967295,4294967295],0);function Sy(r){const e=AR().encode(r),t=new _v;return t.update(e),new Uint8Array(t.digest())}function Ay(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new os([t,i],0),new os([o,l],0)]}class Df{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new xa(`Invalid padding: ${t}`);if(i<0)throw new xa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new xa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new xa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=os.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(os.fromNumber(i)));return o.compare(RR)===1&&(o=new os([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Sy(e),[i,o]=Ay(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);if(!this.de(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Df(l,o,t);return i.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=Sy(e),[i,o]=Ay(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,sl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Pc(Te.min(),o,new Ze(Oe),jr(),Ne())}}class sl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new sl(i,t,Ne(),Ne(),Ne())}}/**
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
 */class Bu{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Qv{constructor(e,t){this.targetId=e,this.me=t}}class Jv{constructor(e,t,i=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Ry{constructor(){this.fe=0,this.ge=Cy(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),t=Ne(),i=Ne();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:we()}}),new sl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Cy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class CR{constructor(e){this.Le=e,this.Be=new Map,this.ke=jr(),this.qe=Pu(),this.Qe=Pu(),this.Ke=new Ze(Oe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(Kd(l))if(i===0){const h=new me(l.path);this.We(t,h,Ut.newNoDocument(h,Te.min()))}else je(i===1);else{const h=this.Ze(t);if(h!==i){const f=this.Xe(e),g=f?this.et(f,e,h):1;if(g!==0){this.He(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,_)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ti(i).toUint8Array()}catch(g){if(g instanceof Cv)return wo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Df(h,o,l)}catch(g){return wo(g instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.Te===0?null:f}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Le.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const f=this.Ye(h);if(f){if(l.current&&Kd(f.target)){const g=new me(f.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,Ut.newNoDocument(g,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=Ne();this.Qe.forEach((l,h)=>{let f=!0;h.forEachWhile(g=>{const _=this.Ye(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Pc(e,t,this.Ke,this.ke,i);return this.ke=jr(),this.qe=Pu(),this.Qe=Pu(),this.Ke=new Ze(Oe),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Ry,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new yt(Oe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new yt(Oe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ry),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Pu(){return new Ze(me.comparator)}function Cy(){return new Ze(me.comparator)}const PR={asc:"ASCENDING",desc:"DESCENDING"},kR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NR={and:"AND",or:"OR"};class DR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qd(r,e){return r.useProto3Json||Ec(e)?e:{value:e}}function nc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function OR(r,e){return nc(r,e.toTimestamp())}function lr(r){return je(!!r),Te.fromTimestamp(function(t){const i=Ei(t);return new gt(i.seconds,i.nanos)}(r))}function Of(r,e){return Jd(r,e).canonicalString()}function Jd(r,e){const t=function(o){return new tt(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Yv(r){const e=tt.fromString(r);return je(r0(e)),e}function Xd(r,e){return Of(r.databaseId,e.path)}function Td(r,e){const t=Yv(e);if(t.get(1)!==r.databaseId.projectId)throw new pe(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new pe(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new me(e0(t))}function Zv(r,e){return Of(r.databaseId,e)}function xR(r){const e=Yv(r);return e.length===4?tt.emptyPath():e0(e)}function Yd(r){return new tt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function e0(r){return je(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Py(r,e,t){return{name:Xd(r,e),fields:t.value.mapValue.fields}}function VR(r,e){let t;if("targetChange"in e){e.targetChange;const i=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(_,w){return _.useProto3Json?(je(w===void 0||typeof w=="string"),Nt.fromBase64String(w||"")):(je(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Nt.fromUint8Array(w||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(_){const w=_.code===void 0?J.UNKNOWN:Gv(_.code);return new pe(w,_.message||"")}(h);t=new Jv(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Td(r,i.document.name),l=lr(i.document.updateTime),h=i.document.createTime?lr(i.document.createTime):Te.min(),f=new Sn({mapValue:{fields:i.document.fields}}),g=Ut.newFoundDocument(o,l,h,f),_=i.targetIds||[],w=i.removedTargetIds||[];t=new Bu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Td(r,i.document),l=i.readTime?lr(i.readTime):Te.min(),h=Ut.newNoDocument(o,l),f=i.removedTargetIds||[];t=new Bu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Td(r,i.document),l=i.removedTargetIds||[];t=new Bu([],l,o,null)}else{if(!("filter"in e))return we();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new IR(o,l),f=i.targetId;t=new Qv(f,h)}}return t}function LR(r,e){let t;if(e instanceof il)t={update:Py(r,e.key,e.value)};else if(e instanceof Kv)t={delete:Xd(r,e.key)};else if(e instanceof gs)t={update:Py(r,e.key,e.data),updateMask:qR(e.fieldMask)};else{if(!(e instanceof wR))return we();t={verify:Xd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const f=h.transform;if(f instanceof ec)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Ga)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Qa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof tc)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw we()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:OR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we()}(r,e.precondition)),t}function bR(r,e){return r&&r.length>0?(je(e!==void 0),r.map(t=>function(o,l){let h=o.updateTime?lr(o.updateTime):lr(l);return h.isEqual(Te.min())&&(h=lr(l)),new yR(h,o.transformResults||[])}(t,e))):[]}function MR(r,e){return{documents:[Zv(r,e.path)]}}function FR(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Zv(r,o);const l=function(_){if(_.length!==0)return n0(dr.create(_,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(_){if(_.length!==0)return _.map(w=>function(D){return{field:fo(D.field),direction:BR(D.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Qd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ct:t,parent:o}}function UR(r){let e=xR(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(S){const D=t0(S);return D instanceof dr&&Dv(D)?D.getFilters():[D]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(D=>function(z){return new Zu(po(z.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(D))}(t.orderBy));let f=null;t.limit&&(f=function(S){let D;return D=typeof S=="object"?S.value:S,Ec(D)?null:D}(t.limit));let g=null;t.startAt&&(g=function(S){const D=!!S.before,j=S.values||[];return new Yu(j,D)}(t.startAt));let _=null;return t.endAt&&(_=function(S){const D=!S.before,j=S.values||[];return new Yu(j,D)}(t.endAt)),rR(e,o,h,l,f,"F",g,_)}function jR(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function t0(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=po(t.unaryFilter.field);return mt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=po(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=po(t.unaryFilter.field);return mt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=po(t.unaryFilter.field);return mt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(r):r.fieldFilter!==void 0?function(t){return mt.create(po(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return dr.create(t.compositeFilter.filters.map(i=>t0(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(r):we()}function BR(r){return PR[r]}function zR(r){return kR[r]}function $R(r){return NR[r]}function fo(r){return{fieldPath:r.canonicalString()}}function po(r){return kt.fromServerFormat(r.fieldPath)}function n0(r){return r instanceof mt?function(t){if(t.op==="=="){if(my(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NAN"}};if(py(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(my(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NAN"}};if(py(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fo(t.field),op:zR(t.op),value:t.value}}}(r):r instanceof dr?function(t){const i=t.getFilters().map(o=>n0(o));return i.length===1?i[0]:{compositeFilter:{op:$R(t.op),filters:i}}}(r):we()}function qR(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function r0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class gi{constructor(e,t,i,o,l=Te.min(),h=Te.min(),f=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HR{constructor(e){this.ht=e}}function WR(r){const e=UR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Gd(e,e.limit,"L"):e}/**
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
 */class KR{constructor(){this.ln=new GR}addToCollectionParentIndex(e,t){return this.ln.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(wi.min())}updateCollectionGroup(e,t,i){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class GR{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new yt(tt.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new yt(tt.comparator)).toArray()}}/**
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
 */const ky={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(41943040,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class So{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new So(0)}static Qn(){return new So(-1)}}/**
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
 */function Ny([r,e],[t,i]){const o=Oe(r,t);return o===0?Oe(e,i):o}class QR{constructor(e){this.Gn=e,this.buffer=new yt(Ny),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Ny(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class JR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xo(t)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Oo(t)}await this.Yn(3e5)})}}class XR{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return H.resolve(wc.oe);const i=new QR(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(ky)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ky):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,f,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(i=S,f=Date.now(),this.removeTargets(e,i,t))).next(S=>(l=S,g=Date.now(),this.removeOrphanedDocuments(e,i))).next(S=>(_=Date.now(),co()<=ke.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${S} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:S})))}}function YR(r,e){return new XR(r,e)}/**
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
 */class ZR{constructor(){this.changes=new ms(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?H.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class tC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Fa(i.mutation,o,zn.empty(),gt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ne()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ne()){const o=ns();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=Oa();return l.forEach((f,g)=>{h=h.insert(f,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=ns();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ne()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,i,o){let l=jr();const h=Ma(),f=function(){return Ma()}();return t.forEach((g,_)=>{const w=i.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof gs)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Fa(w.mutation,_,w.mutation.getFieldMask(),gt.now())):h.set(_.key,zn.empty())}),this.recalculateAndSaveOverlays(e,l).next(g=>(g.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>{var S;return f.set(_,new eC(w,(S=h.get(_))!==null&&S!==void 0?S:null))}),f))}recalculateAndSaveOverlays(e,t){const i=Ma();let o=new Ze((h,f)=>h-f),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let w=i.get(g)||zn.empty();w=f.applyToLocalView(_,w),i.set(g,w);const S=(o.get(f.batchId)||Ne()).add(g);o=o.insert(f.batchId,S)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,w=g.value,S=Uv();w.forEach(D=>{if(!l.has(D)){const j=Hv(t.get(D),i.get(D));j!==null&&S.set(D,j),l=l.add(D)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,S))}return H.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return me.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):iR(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):H.resolve(ns());let f=-1,g=l;return h.next(_=>H.forEach(_,(w,S)=>(f<S.largestBatchId&&(f=S.largestBatchId),l.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next(D=>{g=g.insert(w,D)}))).next(()=>this.populateOverlays(e,_,l)).next(()=>this.computeViews(e,g,_,Ne())).next(w=>({batchId:f,changes:Fv(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(i=>{let o=Oa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Oa();return this.indexManager.getCollectionParents(e,l).next(f=>H.forEach(f,g=>{const _=function(S,D){return new Ic(D,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next(w=>{w.forEach((S,D)=>{h=h.insert(S,D)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))});let f=Oa();return h.forEach((g,_)=>{const w=l.get(g);w!==void 0&&Fa(w.mutation,_,zn.empty(),gt.now()),Ac(t,_)&&(f=f.insert(g,_))}),f})}}/**
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
 */class nC{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return H.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}}(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:WR(o.bundledQuery),readTime:lr(o.readTime)}}(t)),H.resolve()}}/**
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
 */class rC{constructor(){this.overlays=new Ze(me.comparator),this.Er=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ns();return H.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),H.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(i)),H.resolve()}getOverlaysForCollection(e,t,i){const o=ns(),l=t.length+1,h=new me(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new Ze((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let w=l.get(_.largestBatchId);w===null&&(w=ns(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const f=ns(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,w)=>f.set(_,w)),!(f.size()>=o)););return H.resolve(f)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new TR(t,i));let l=this.Er.get(t);l===void 0&&(l=Ne(),this.Er.set(t,l)),this.Er.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class iC{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class xf{constructor(){this.dr=new yt(It.Ar),this.Rr=new yt(It.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new It(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new It(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new me(new tt([])),i=new It(t,e),o=new It(t,e+1),l=[];return this.Rr.forEachInRange([i,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new me(new tt([])),i=new It(t,e),o=new It(t,e+1);let l=Ne();return this.Rr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new It(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class It{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return me.comparator(e.key,t.key)||Oe(e.br,t.br)}static Vr(e,t){return Oe(e.br,t.br)||me.comparator(e.key,t.key)}}/**
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
 */class sC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new yt(It.Ar)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new ER(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new It(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],h=>{const f=this.Cr(h.br);l.push(f)}),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new yt(Oe);return t.forEach(o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],f=>{i=i.add(f.br)})}),H.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;me.isDocumentKey(l)||(l=l.child(""));const h=new It(new me(l),0);let f=new yt(Oe);return this.vr.forEachWhile(g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.br)),!0)},h),H.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){je(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return H.forEach(t.mutations,o=>{const l=new It(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new It(t,0),o=this.vr.firstAfterOrEqual(i);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class oC{constructor(e){this.Nr=e,this.docs=function(){return new Ze(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return H.resolve(i?i.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let i=jr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),H.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=jr();const h=t.path,f=new me(h.child("")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||bA(LA(w),i)<=0||(o.has(w.key)||Ac(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,i,o){we()}Lr(e,t){return H.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new aC(this)}getSize(e){return H.resolve(this.size)}}class aC extends ZR{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),H.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class lC{constructor(e){this.persistence=e,this.Br=new ms(t=>Rf(t),Cf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.kr=0,this.qr=new xf,this.targetCount=0,this.Qr=So.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),H.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new So(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Un(t),H.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Br.forEach((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),H.waitFor(l).next(()=>o)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return H.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),H.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return H.resolve(i)}containsKey(e,t){return H.resolve(this.qr.containsKey(t))}}/**
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
 */class i0{constructor(e,t){this.Kr={},this.overlays={},this.$r=new wc(0),this.Ur=!1,this.Ur=!0,this.Wr=new iC,this.referenceDelegate=e(this),this.Gr=new lC(this),this.indexManager=new KR,this.remoteDocumentCache=function(o){return new oC(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new HR(t),this.jr=new nC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new sC(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ne("MemoryPersistence","Starting transaction:",e);const o=new uC(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return H.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class uC extends FA{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.Zr=new xf,this.Xr=null}static ei(e){return new Vf(e)}get ti(){if(this.Xr)return this.Xr;throw we()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),H.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),H.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ti,i=>{const o=me.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Te.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return H.or([()=>H.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class rc{constructor(e,t){this.persistence=e,this.ri=new ms(i=>BA(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=YR(this,t)}static ei(e,t){return new rc(e,t)}Hr(){}Jr(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return H.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?H.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(f=>{f||(i++,l.removeEntry(h,Te.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),H.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fu(e.data.value)),t}ir(e,t,i){return H.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return H.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Lf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Lf(e,t.fromCache,i,o)}}/**
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
 */class cC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return sI()?8:UA(Bt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new cC;return this.ts(e,t,h).next(f=>{if(l.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(co()<=ke.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",ho(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),H.resolve()):(co()<=ke.DEBUG&&ne("QueryEngine","Query:",ho(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(co()<=ke.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",ho(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):H.resolve())}Xi(e,t){if(vy(t))return H.resolve(null);let i=ar(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Gd(t,null,"F"),i=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=Ne(...l);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,i).next(g=>{const _=this.rs(t,f);return this.ss(t,_,h,g.readTime)?this.Xi(e,Gd(t,null,"F")):this.os(e,_,t,g)}))})))}es(e,t,i,o){return vy(t)||o.isEqual(Te.min())?H.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?H.resolve(null):(co()<=ke.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ho(t)),this.os(e,h,t,VA(o,-1)).next(f=>f))})}rs(e,t){let i=new yt(bv(e));return t.forEach((o,l)=>{Ac(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return co()<=ke.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",ho(t)),this.Zi.getDocumentsMatchingQuery(e,t,wi.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */class dC{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Ze(Oe),this.cs=new ms(l=>Rf(l),Cf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tC(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function fC(r,e,t,i){return new dC(r,e,t,i)}async function s0(r,e){const t=Ie(r);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],f=[];let g=Ne();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){f.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(i,g).next(_=>({Ts:_,removedBatchIds:h,addedBatchIds:f}))})})}function pC(r,e){const t=Ie(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,g,_,w){const S=_.batch,D=S.keys();let j=H.resolve();return D.forEach(z=>{j=j.next(()=>w.getEntry(g,z)).next(q=>{const F=_.docVersions.get(z);je(F!==null),q.version.compareTo(F)<0&&(S.applyToRemoteDocument(q,_),q.isValidDocument()&&(q.setReadTime(_.commitVersion),w.addEntry(q)))})}),j.next(()=>f.mutationQueue.removeMutationBatch(g,S))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(f){let g=Ne();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function o0(r){const e=Ie(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function mC(r,e){const t=Ie(r),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((w,S)=>{const D=o.get(S);if(!D)return;f.push(t.Gr.removeMatchingKeys(l,w.removedDocuments,S).next(()=>t.Gr.addMatchingKeys(l,w.addedDocuments,S)));let j=D.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?j=j.withResumeToken(Nt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,i)),o=o.insert(S,j),function(q,F,ie){return q.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=3e8?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0}(D,j,w)&&f.push(t.Gr.updateTargetData(l,j))});let g=jr(),_=Ne();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),f.push(gC(l,h,e.documentUpdates).next(w=>{g=w.Is,_=w.Es})),!i.isEqual(Te.min())){const w=t.Gr.getLastRemoteSnapshotVersion(l).next(S=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));f.push(w)}return H.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,g,_)).next(()=>g)}).then(l=>(t.us=o,l))}function gC(r,e,t){let i=Ne(),o=Ne();return t.forEach(l=>i=i.add(l)),e.getEntries(r,i).next(l=>{let h=jr();return t.forEach((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Te.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ne("LocalStore","Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)}),{Is:h,Es:o}})}function yC(r,e){const t=Ie(r);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function _C(r,e){const t=Ie(r);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,H.resolve(o)):t.Gr.allocateTargetId(i).next(h=>(o=new gi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function Zd(r,e,t){const i=Ie(r),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!xo(h))throw h;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function Dy(r,e,t){const i=Ie(r);let o=Te.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,w){const S=Ie(g),D=S.cs.get(w);return D!==void 0?H.resolve(S.us.get(D)):S.Gr.getTargetData(_,w)}(i,h,ar(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,f.targetId).next(g=>{l=g})}).next(()=>i._s.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:Ne())).next(f=>(vC(i,oR(e),f),{documents:f,ds:l})))}function vC(r,e,t){let i=r.ls.get(e)||Te.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),r.ls.set(e,i)}class Oy{constructor(){this.activeTargetIds=dR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wC{constructor(){this._o=new Oy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Oy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EC{uo(e){}shutdown(){}}/**
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
 */class xy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ku=null;function Id(){return ku===null?ku=function(){return 268435456+Math.round(2147483648*Math.random())}():ku++,"0x"+ku.toString(16)}/**
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
 */const TC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class IC{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Mt="WebChannelConnection";class SC extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const f=Id(),g=this.No(t,i.toUriEncodedString());ne("RestConnection",`Sending RPC '${t}' ${f}:`,g,o);const _={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(_,l,h),this.Bo(t,g,_,o).then(w=>(ne("RestConnection",`Received RPC '${t}' ${f}: `,w),w),w=>{throw wo("RestConnection",`RPC '${t}' ${f} failed with error: `,w,"url: ",g,"request:",o),w})}ko(t,i,o,l,h,f){return this.Oo(t,i,o,l,h)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Do}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,i){const o=TC[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const l=Id();return new Promise((h,f)=>{const g=new vv;g.setWithCredentials(!0),g.listenOnce(wv.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Mu.NO_ERROR:const w=g.getResponseJson();ne(Mt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),h(w);break;case Mu.TIMEOUT:ne(Mt,`RPC '${e}' ${l} timed out`),f(new pe(J.DEADLINE_EXCEEDED,"Request time out"));break;case Mu.HTTP_ERROR:const S=g.getStatus();if(ne(Mt,`RPC '${e}' ${l} failed with status:`,S,"response text:",g.getResponseText()),S>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const j=D==null?void 0:D.error;if(j&&j.status&&j.message){const z=function(F){const ie=F.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(ie)>=0?ie:J.UNKNOWN}(j.status);f(new pe(z,j.message))}else f(new pe(J.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new pe(J.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{ne(Mt,`RPC '${e}' ${l} completed.`)}});const _=JSON.stringify(o);ne(Mt,`RPC '${e}' ${l} sending request:`,o),g.send(t,"POST",_,i,15)})}qo(e,t,i){const o=Id(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Iv(),f=Tv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Lo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const w=l.join("");ne(Mt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const S=h.createWebChannel(w,g);let D=!1,j=!1;const z=new IC({Eo:F=>{j?ne(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(D||(ne(Mt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),D=!0),ne(Mt,`RPC '${e}' stream ${o} sending:`,F),S.send(F))},Ao:()=>S.close()}),q=(F,ie,se)=>{F.listen(ie,oe=>{try{se(oe)}catch(ge){setTimeout(()=>{throw ge},0)}})};return q(S,Da.EventType.OPEN,()=>{j||(ne(Mt,`RPC '${e}' stream ${o} transport opened.`),z.So())}),q(S,Da.EventType.CLOSE,()=>{j||(j=!0,ne(Mt,`RPC '${e}' stream ${o} transport closed`),z.Do())}),q(S,Da.EventType.ERROR,F=>{j||(j=!0,wo(Mt,`RPC '${e}' stream ${o} transport errored:`,F),z.Do(new pe(J.UNAVAILABLE,"The operation could not be completed")))}),q(S,Da.EventType.MESSAGE,F=>{var ie;if(!j){const se=F.data[0];je(!!se);const oe=se,ge=(oe==null?void 0:oe.error)||((ie=oe[0])===null||ie===void 0?void 0:ie.error);if(ge){ne(Mt,`RPC '${e}' stream ${o} received error:`,ge);const Ae=ge.status;let ye=function(I){const P=lt[I];if(P!==void 0)return Gv(P)}(Ae),R=ge.message;ye===void 0&&(ye=J.INTERNAL,R="Unknown error status: "+Ae+" with message "+ge.message),j=!0,z.Do(new pe(ye,R)),S.close()}else ne(Mt,`RPC '${e}' stream ${o} received:`,se),z.vo(se)}}),q(f,Ev.STAT_EVENT,F=>{F.stat===$d.PROXY?ne(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===$d.NOPROXY&&ne(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{z.bo()},0),z}}function Sd(){return typeof document<"u"?document:null}/**
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
 */function kc(r){return new DR(r,!0)}/**
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
 */class a0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class l0{constructor(e,t,i,o,l,h,f,g){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new a0(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new pe(J.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AC extends l0{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=VR(this.serializer,e),i=function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?lr(h.readTime):Te.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=Yd(this.serializer),t.addTarget=function(l,h){let f;const g=h.target;if(f=Kd(g)?{documents:MR(l,g)}:{query:FR(l,g).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Xv(l,h.resumeToken);const _=Qd(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Te.min())>0){f.readTime=nc(l,h.snapshotVersion.toTimestamp());const _=Qd(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f}(this.serializer,e);const i=jR(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=Yd(this.serializer),t.removeTarget=e,this.c_(t)}}class RC extends l0{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return je(!!e.streamToken),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=bR(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=Yd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>LR(this.serializer,i))};this.c_(t)}}/**
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
 */class CC extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new pe(J.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,Jd(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new pe(J.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,Jd(t,i),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new pe(J.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class PC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ur(t),this.C_=!1):ne("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class kC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{i.enqueueAndForget(async()=>{ys(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(g){const _=Ie(g);_.k_.add(4),await ol(_),_.K_.set("Unknown"),_.k_.delete(4),await Nc(_)}(this))})}),this.K_=new PC(i,o)}}async function Nc(r){if(ys(r))for(const e of r.q_)await e(!0)}async function ol(r){for(const e of r.q_)await e(!1)}function u0(r,e){const t=Ie(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Uf(t)?Ff(t):Vo(t).s_()&&Mf(t,e))}function bf(r,e){const t=Ie(r),i=Vo(t);t.B_.delete(e),i.s_()&&c0(t,e),t.B_.size===0&&(i.s_()?i.a_():ys(t)&&t.K_.set("Unknown"))}function Mf(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vo(r).V_(e)}function c0(r,e){r.U_.xe(e),Vo(r).m_(e)}function Ff(r){r.U_=new CR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),Vo(r).start(),r.K_.F_()}function Uf(r){return ys(r)&&!Vo(r).i_()&&r.B_.size>0}function ys(r){return Ie(r).k_.size===0}function h0(r){r.U_=void 0}async function NC(r){r.K_.set("Online")}async function DC(r){r.B_.forEach((e,t)=>{Mf(r,e)})}async function OC(r,e){h0(r),Uf(r)?(r.K_.O_(e),Ff(r)):r.K_.set("Unknown")}async function xC(r,e,t){if(r.K_.set("Online"),e instanceof Jv&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.B_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.B_.delete(f),o.U_.removeTarget(f))}(r,e)}catch(i){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ic(r,i)}else if(e instanceof Bu?r.U_.$e(e):e instanceof Qv?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(Te.min()))try{const i=await o0(r.localStore);t.compareTo(i)>=0&&await function(l,h){const f=l.U_.it(h);return f.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.B_.get(_);w&&l.B_.set(_,w.withResumeToken(g.resumeToken,h))}}),f.targetMismatches.forEach((g,_)=>{const w=l.B_.get(g);if(!w)return;l.B_.set(g,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),c0(l,g);const S=new gi(w.target,g,_,w.sequenceNumber);Mf(l,S)}),l.remoteSyncer.applyRemoteEvent(f)}(r,t)}catch(i){ne("RemoteStore","Failed to raise snapshot:",i),await ic(r,i)}}async function ic(r,e,t){if(!xo(e))throw e;r.k_.add(1),await ol(r),r.K_.set("Offline"),t||(t=()=>o0(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await Nc(r)})}function d0(r,e){return e().catch(t=>ic(r,t,e))}async function Dc(r){const e=Ie(r),t=Si(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;VC(e);)try{const o=await yC(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,LC(e,o)}catch(o){await ic(e,o)}f0(e)&&p0(e)}function VC(r){return ys(r)&&r.L_.length<10}function LC(r,e){r.L_.push(e);const t=Si(r);t.s_()&&t.f_&&t.g_(e.mutations)}function f0(r){return ys(r)&&!Si(r).i_()&&r.L_.length>0}function p0(r){Si(r).start()}async function bC(r){Si(r).w_()}async function MC(r){const e=Si(r);for(const t of r.L_)e.g_(t.mutations)}async function FC(r,e,t){const i=r.L_.shift(),o=Nf.from(i,e,t);await d0(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Dc(r)}async function UC(r,e){e&&Si(r).f_&&await async function(i,o){if(function(h){return SR(h)&&h!==J.ABORTED}(o.code)){const l=i.L_.shift();Si(i).__(),await d0(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Dc(i)}}(r,e),f0(r)&&p0(r)}async function Vy(r,e){const t=Ie(r);t.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const i=ys(t);t.k_.add(3),await ol(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Nc(t)}async function jC(r,e){const t=Ie(r);e?(t.k_.delete(2),await Nc(t)):e||(t.k_.add(2),await ol(t),t.K_.set("Unknown"))}function Vo(r){return r.W_||(r.W_=function(t,i,o){const l=Ie(t);return l.b_(),new AC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:NC.bind(null,r),mo:DC.bind(null,r),po:OC.bind(null,r),R_:xC.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),Uf(r)?Ff(r):r.K_.set("Unknown")):(await r.W_.stop(),h0(r))})),r.W_}function Si(r){return r.G_||(r.G_=function(t,i,o){const l=Ie(t);return l.b_(),new RC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:bC.bind(null,r),po:UC.bind(null,r),p_:MC.bind(null,r),y_:FC.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await Dc(r)):(await r.G_.stop(),r.L_.length>0&&(ne("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
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
 */class jf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new jf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bf(r,e){if(Ur("AsyncQueue",`${e}: ${r}`),xo(r))return new pe(J.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class _o{static emptySet(e){return new _o(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||me.comparator(t.key,i.key):(t,i)=>me.comparator(t.key,i.key),this.keyedMap=Oa(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new _o;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Ly{constructor(){this.z_=new Ze(me.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):we():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Ao{constructor(e,t,i,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new Ao(e,t,_o.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class BC{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class zC{constructor(){this.queries=by(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=by(),l.forEach((h,f)=>{for(const g of f.J_)g.onError(i)})})(this,new pe(J.ABORTED,"Firestore shutting down"))}}function by(){return new ms(r=>Lv(r),Sc)}async function $C(r,e){const t=Ie(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new BC,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Bf(h,`Initialization of query '${ho(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&zf(t)}async function qC(r,e){const t=Ie(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function HC(r,e){const t=Ie(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.J_)f.ta(o)&&(i=!0);h.H_=o}}i&&zf(t)}function WC(r,e,t){const i=Ie(r),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function zf(r){r.X_.forEach(e=>{e.next()})}var ef,My;(My=ef||(ef={})).na="default",My.Cache="cache";class KC{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Ao(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ef.Cache}}/**
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
 */class m0{constructor(e){this.key=e}}class g0{constructor(e){this.key=e}}class GC{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ne(),this.mutatedKeys=Ne(),this.Va=bv(e),this.ma=new _o(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new Ly,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,S)=>{const D=o.get(w),j=Ac(this.query,S)?S:null,z=!!D&&this.mutatedKeys.has(D.key),q=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let F=!1;D&&j?D.data.isEqual(j.data)?z!==q&&(i.track({type:3,doc:j}),F=!0):this.ya(D,j)||(i.track({type:2,doc:j}),F=!0,(g&&this.Va(j,g)>0||_&&this.Va(j,_)<0)&&(f=!0)):!D&&j?(i.track({type:0,doc:j}),F=!0):D&&!j&&(i.track({type:1,doc:D}),F=!0,(g||_)&&(f=!0)),F&&(j?(h=h.add(j),l=q?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{ma:h,pa:i,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,S)=>function(j,z){const q=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return q(j)-q(z)}(w.type,S.type)||this.Va(w.doc,S.doc)),this.wa(i),o=o!=null&&o;const f=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,_=g!==this.Aa;return this.Aa=g,h.length!==0||_?{snapshot:new Ao(this.query,e.ma,l,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ly,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ne(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new g0(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new m0(i))}),t}va(e){this.da=e.ds,this.Ra=Ne();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Ao.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class QC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class JC{constructor(e){this.key=e,this.Fa=!1}}class XC{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new ms(f=>Lv(f),Sc),this.Oa=new Map,this.Na=new Set,this.La=new Ze(me.comparator),this.Ba=new Map,this.ka=new xf,this.qa={},this.Qa=new Map,this.Ka=So.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function YC(r,e,t=!0){const i=T0(r);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await y0(i,e,t,!0),o}async function ZC(r,e){const t=T0(r);await y0(t,e,!0,!1)}async function y0(r,e,t,i){const o=await _C(r.localStore,ar(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await eP(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&u0(r.remoteStore,o),f}async function eP(r,e,t,i,o){r.Ua=(S,D,j)=>async function(q,F,ie,se){let oe=F.view.ga(ie);oe.ss&&(oe=await Dy(q.localStore,F.query,!1).then(({documents:R})=>F.view.ga(R,oe)));const ge=se&&se.targetChanges.get(F.targetId),Ae=se&&se.targetMismatches.get(F.targetId)!=null,ye=F.view.applyChanges(oe,q.isPrimaryClient,ge,Ae);return Uy(q,F.targetId,ye.ba),ye.snapshot}(r,S,D,j);const l=await Dy(r.localStore,e,!0),h=new GC(e,l.ds),f=h.ga(l.documents),g=sl.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);Uy(r,t,_.ba);const w=new QC(e,t,h);return r.xa.set(e,w),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),_.snapshot}async function tP(r,e,t){const i=Ie(r),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(h=>!Sc(h,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Zd(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&bf(i.remoteStore,o.targetId),tf(i,o.targetId)}).catch(Oo)):(tf(i,o.targetId),await Zd(i.localStore,o.targetId,!0))}async function nP(r,e){const t=Ie(r),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),bf(t.remoteStore,i.targetId))}async function rP(r,e,t){const i=cP(r);try{const o=await function(h,f){const g=Ie(h),_=gt.now(),w=f.reduce((j,z)=>j.add(z.key),Ne());let S,D;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let z=jr(),q=Ne();return g.hs.getEntries(j,w).next(F=>{z=F,z.forEach((ie,se)=>{se.isValidDocument()||(q=q.add(ie))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,z)).next(F=>{S=F;const ie=[];for(const se of f){const oe=vR(se,S.get(se.key).overlayedDocument);oe!=null&&ie.push(new gs(se.key,oe,Pv(oe.value.mapValue),br.exists(!0)))}return g.mutationQueue.addMutationBatch(j,_,ie,f)}).next(F=>{D=F;const ie=F.applyToLocalDocumentSet(S,q);return g.documentOverlayCache.saveOverlays(j,F.batchId,ie)})}).then(()=>({batchId:D.batchId,changes:Fv(S)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,f,g){let _=h.qa[h.currentUser.toKey()];_||(_=new Ze(Oe)),_=_.insert(f,g),h.qa[h.currentUser.toKey()]=_}(i,o.batchId,t),await al(i,o.changes),await Dc(i.remoteStore)}catch(o){const l=Bf(o,"Failed to persist write");t.reject(l)}}async function _0(r,e){const t=Ie(r);try{const i=await mC(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?je(h.Fa):o.removedDocuments.size>0&&(je(h.Fa),h.Fa=!1))}),await al(t,i,e)}catch(i){await Oo(i)}}function Fy(r,e,t){const i=Ie(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const g=Ie(h);g.onlineState=f;let _=!1;g.queries.forEach((w,S)=>{for(const D of S.J_)D.ea(f)&&(_=!0)}),_&&zf(g)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function iP(r,e,t){const i=Ie(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),l=o&&o.key;if(l){let h=new Ze(me.comparator);h=h.insert(l,Ut.newNoDocument(l,Te.min()));const f=Ne().add(l),g=new Pc(Te.min(),new Map,new Ze(Oe),h,f);await _0(i,g),i.La=i.La.remove(l),i.Ba.delete(e),$f(i)}else await Zd(i.localStore,e,!1).then(()=>tf(i,e,t)).catch(Oo)}async function sP(r,e){const t=Ie(r),i=e.batch.batchId;try{const o=await pC(t.localStore,e);w0(t,i,null),v0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await al(t,o)}catch(o){await Oo(o)}}async function oP(r,e,t){const i=Ie(r);try{const o=await function(h,f){const g=Ie(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return g.mutationQueue.lookupMutationBatch(_,f).next(S=>(je(S!==null),w=S.keys(),g.mutationQueue.removeMutationBatch(_,S))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,f)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>g.localDocuments.getDocuments(_,w))})}(i.localStore,e);w0(i,e,t),v0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await al(i,o)}catch(o){await Oo(o)}}function v0(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function w0(r,e,t){const i=Ie(r);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function tf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Oa.get(e))r.xa.delete(i),t&&r.Ma.Wa(i,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(i=>{r.ka.containsKey(i)||E0(r,i)})}function E0(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(bf(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),$f(r))}function Uy(r,e,t){for(const i of t)i instanceof m0?(r.ka.addReference(i.key,e),aP(r,i)):i instanceof g0?(ne("SyncEngine","Document no longer in limbo: "+i.key),r.ka.removeReference(i.key,e),r.ka.containsKey(i.key)||E0(r,i.key)):we()}function aP(r,e){const t=e.key,i=t.path.canonicalString();r.La.get(t)||r.Na.has(i)||(ne("SyncEngine","New document in limbo: "+t),r.Na.add(i),$f(r))}function $f(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new me(tt.fromString(e)),i=r.Ka.next();r.Ba.set(i,new JC(t)),r.La=r.La.insert(t,i),u0(r.remoteStore,new gi(ar(Pf(t.path)),i,"TargetPurposeLimboResolution",wc.oe))}}async function al(r,e,t){const i=Ie(r),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach((f,g)=>{h.push(i.Ua(g,e,t).then(_=>{var w;if((_||t)&&i.isPrimaryClient){const S=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(_){o.push(_);const S=Lf.zi(g.targetId,_);l.push(S)}}))}),await Promise.all(h),i.Ma.R_(o),await async function(g,_){const w=Ie(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>H.forEach(_,D=>H.forEach(D.Wi,j=>w.persistence.referenceDelegate.addReference(S,D.targetId,j)).next(()=>H.forEach(D.Gi,j=>w.persistence.referenceDelegate.removeReference(S,D.targetId,j)))))}catch(S){if(!xo(S))throw S;ne("LocalStore","Failed to update sequence numbers: "+S)}for(const S of _){const D=S.targetId;if(!S.fromCache){const j=w.us.get(D),z=j.snapshotVersion,q=j.withLastLimboFreeSnapshotVersion(z);w.us=w.us.insert(D,q)}}}(i.localStore,l))}async function lP(r,e){const t=Ie(r);if(!t.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const i=await s0(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(f=>{f.forEach(g=>{g.reject(new pe(J.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await al(t,i.Ts)}}function uP(r,e){const t=Ie(r),i=t.Ba.get(e);if(i&&i.Fa)return Ne().add(i.key);{let o=Ne();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function T0(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=_0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iP.bind(null,e),e.Ma.R_=HC.bind(null,e.eventManager),e.Ma.Wa=WC.bind(null,e.eventManager),e}function cP(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oP.bind(null,e),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return fC(this.persistence,new hC,e.initialUser,this.serializer)}ja(e){return new i0(Vf.ei,this.serializer)}za(e){return new wC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class hP extends sc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){je(this.persistence.referenceDelegate instanceof rc);const i=this.persistence.referenceDelegate.garbageCollector;return new JR(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new i0(i=>rc.ei(i,t),this.serializer)}}class nf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Fy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=lP.bind(null,this.syncEngine),await jC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zC}()}createDatastore(e){const t=kc(e.databaseInfo.databaseId),i=function(l){return new SC(l)}(e.databaseInfo);return function(l,h,f,g){return new CC(l,h,f,g)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,f){return new kC(i,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Fy(this.syncEngine,t,0),function(){return xy.p()?new xy:new EC}())}createSyncEngine(e,t){return function(o,l,h,f,g,_,w){const S=new XC(o,l,h,f,g,_);return w&&(S.$a=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ie(o);ne("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await ol(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}nf.provider={build:()=>new nf};/**
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
 */class dP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class fP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Av.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{ne("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(ne("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Bf(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ad(r,e){r.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener(async o=>{i.isEqual(o)||(await s0(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function jy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await pP(r);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(i=>Vy(e.remoteStore,i)),r.setAppCheckTokenChangeListener((i,o)=>Vy(e.remoteStore,o)),r._onlineComponents=e}async function pP(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ad(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===J.FAILED_PRECONDITION||o.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;wo("Error using user provided cache. Falling back to memory cache: "+t),await Ad(r,new sc)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await Ad(r,new hP(void 0));return r._offlineComponents}async function I0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await jy(r,r._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await jy(r,new nf))),r._onlineComponents}function mP(r){return I0(r).then(e=>e.syncEngine)}async function gP(r){const e=await I0(r),t=e.eventManager;return t.onListen=YC.bind(null,e.syncEngine),t.onUnlisten=tP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nP.bind(null,e.syncEngine),t}function yP(r,e,t={}){const i=new vi;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,g,_){const w=new dP({next:D=>{w.eu(),h.enqueueAndForget(()=>qC(l,S));const j=D.docs.has(f);!j&&D.fromCache?_.reject(new pe(J.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&D.fromCache&&g&&g.source==="server"?_.reject(new pe(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(D)},error:D=>_.reject(D)}),S=new KC(Pf(f.path),w,{includeMetadataChanges:!0,ua:!0});return $C(l,S)}(await gP(r),r.asyncQueue,e,t,i)),i.promise}/**
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
 */function S0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const By=new Map;/**
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
 */function _P(r,e,t){if(!t)throw new pe(J.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function vP(r,e,t,i){if(e===!0&&i===!0)throw new pe(J.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function zy(r){if(!me.isDocumentKey(r))throw new pe(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function qf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we()}function Ja(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new pe(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qf(r);throw new pe(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class $y{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new pe(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=S0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new pe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new pe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new pe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hf{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $y({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $y(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new AA;switch(i.type){case"firstParty":return new kA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new pe(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=By.get(t);i&&(ne("ComponentProvider","Removing Datastore"),By.delete(t),i.terminate())}(this),Promise.resolve()}}function wP(r,e,t,i={}){var o;const l=(r=Ja(r,Hf))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let f,g;if(typeof i.mockUserToken=="string")f=i.mockUserToken,g=Ft.MOCK_USER;else{f=ZT(i.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const _=i.mockUserToken.sub||i.mockUserToken.user_id;if(!_)throw new pe(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ft(_)}r._authCredentials=new RA(new Sv(f,g))}}/**
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
 */class Wf{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Wf(this.firestore,e,this._query)}}class Rn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rn(this.firestore,e,this._key)}}class Xa extends Wf{constructor(e,t,i){super(e,t,Pf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rn(this.firestore,null,new me(e))}withConverter(e){return new Xa(this.firestore,e,this._path)}}function qy(r,e,...t){if(r=fn(r),arguments.length===1&&(e=Av.newId()),_P("doc","path",e),r instanceof Hf){const i=tt.fromString(e,...t);return zy(i),new Rn(r,null,new me(i))}{if(!(r instanceof Rn||r instanceof Xa))throw new pe(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(tt.fromString(e,...t));return zy(i),new Rn(r.firestore,r instanceof Xa?r.converter:null,new me(i))}}/**
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
 */class Hy{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new a0(this,"async_queue_retry"),this.fu=()=>{const i=Sd();i&&ne("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Sd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Sd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new vi;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!xo(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(i);throw Ur("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=jf.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&we()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Kf extends Hf{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Hy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hy(e),this._firestoreClient=void 0,await e}}}function EP(r,e){const t=typeof r=="object"?r:hf(),i=typeof r=="string"?r:"(default)",o=fs(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=XT("firestore");l&&wP(o,...l)}return o}function A0(r){if(r._terminated)throw new pe(J.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||TP(r),r._firestoreClient}function TP(r){var e,t,i;const o=r._freezeSettings(),l=function(f,g,_,w){return new qA(f,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,S0(w.experimentalLongPollingOptions),w.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new fP(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class Ro{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ro(Nt.fromBase64String(e))}catch(t){throw new pe(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ro(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new pe(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class R0{constructor(e){this._methodName=e}}/**
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
 */class Qf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pe(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pe(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Jf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const IP=/^__.*__$/;class SP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,t,this.fieldTransforms):new il(e,this.data,t,this.fieldTransforms)}}function C0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class Xf{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return oc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(C0(this.Mu)&&IP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class AP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||kc(e)}$u(e,t,i,o=!1){return new Xf({Mu:e,methodName:t,Ku:i,path:kt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RP(r){const e=r._freezeSettings(),t=kc(r._databaseId);return new AP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function CP(r,e,t,i,o,l={}){const h=r.$u(l.merge||l.mergeFields?2:0,e,t,o);D0("Data must be an object, but it was:",h,i);const f=k0(i,h);let g,_;if(l.merge)g=new zn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const S of l.mergeFields){const D=PP(e,S,t);if(!h.contains(D))throw new pe(J.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);NP(w,D)||w.push(D)}g=new zn(w),_=h.fieldTransforms.filter(S=>g.covers(S.field))}else g=null,_=h.fieldTransforms;return new SP(new Sn(f),g,_)}function P0(r,e){if(N0(r=fn(r)))return D0("Unsupported field value:",e,r),k0(r,e);if(r instanceof R0)return function(i,o){if(!C0(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const f of i){let g=P0(f,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}}(r,e)}return function(i,o){if((i=fn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return fR(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=gt.fromDate(i);return{timestampValue:nc(o.serializer,l)}}if(i instanceof gt){const l=new gt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:nc(o.serializer,l)}}if(i instanceof Qf)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ro)return{bytesValue:Xv(o.serializer,i._byteString)};if(i instanceof Rn){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Of(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Jf)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw f.qu("VectorValues must only contain numeric values.");return kf(f.serializer,g)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${qf(i)}`)}(r,e)}function k0(r,e){const t={};return Rv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(r,(i,o)=>{const l=P0(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function N0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof gt||r instanceof Qf||r instanceof Ro||r instanceof Rn||r instanceof R0||r instanceof Jf)}function D0(r,e,t){if(!N0(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=qf(t);throw i==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+i)}}function PP(r,e,t){if((e=fn(e))instanceof Gf)return e._internalPath;if(typeof e=="string")return O0(r,e);throw oc("Field path arguments must be of type string or ",r,!1,void 0,t)}const kP=new RegExp("[~\\*/\\[\\]]");function O0(r,e,t){if(e.search(kP)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Gf(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function oc(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new pe(J.INVALID_ARGUMENT,f+r+g)}function NP(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class x0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(V0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DP extends x0{data(){return super.data()}}function V0(r,e){return typeof e=="string"?O0(r,e):e instanceof Gf?e._internalPath:e._delegate._internalPath}class OP{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ps(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>st(h.doubleValue));return new Jf(l)}convertGeoPoint(e){return new Qf(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Tc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const t=Ei(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=tt.fromString(e);je(r0(i));const o=new Wa(i.get(1),i.get(3)),l=new me(i.popFirst(5));return o.isEqual(t)||Ur(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function xP(r,e,t){let i;return i=r?t.merge||t.mergeFields?r.toFirestore(e,t):r.toFirestore(e):e,i}/**
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
 */class VP{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class L0 extends x0{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new LP(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(V0("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class LP extends L0{data(e={}){return super.data(e)}}/**
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
 */function bP(r){r=Ja(r,Rn);const e=Ja(r.firestore,Kf);return yP(A0(e),r._key).then(t=>jP(e,r,t))}class MP extends OP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ro(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rn(this.firestore,null,t)}}function FP(r,e,t){r=Ja(r,Rn);const i=Ja(r.firestore,Kf),o=xP(r.converter,e,t);return UP(i,[CP(RP(i),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,br.none())])}function UP(r,e){return function(i,o){const l=new vi;return i.asyncQueue.enqueueAndForget(async()=>rP(await mP(i),o,l)),l.promise}(A0(r),e)}function jP(r,e,t){const i=t.docs.get(e._key),o=new MP(r);return new L0(r,o,e._key,i,new VP(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Do=o})(ko),ur(new qn("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Kf(new CA(i.getProvider("auth-internal")),new DA(i.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new pe(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wa(_.options.projectId,w)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),An(ly,"4.7.5",e),An(ly,"4.7.5","esm2017")})();const b0="@firebase/installations",Yf="0.6.11";/**
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
 */const M0=1e4,F0=`w:${Yf}`,U0="FIS_v2",BP="https://firebaseinstallations.googleapis.com/v1",zP=60*60*1e3,$P="installations",qP="Installations";/**
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
 */const HP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cs=new ds($P,qP,HP);function j0(r){return r instanceof Wn&&r.code.includes("request-failed")}/**
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
 */function B0({projectId:r}){return`${BP}/projects/${r}/installations`}function z0(r){return{token:r.token,requestStatus:2,expiresIn:KP(r.expiresIn),creationTime:Date.now()}}async function $0(r,e){const i=(await e.json()).error;return cs.create("request-failed",{requestName:r,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function q0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function WP(r,{refreshToken:e}){const t=q0(r);return t.append("Authorization",GP(e)),t}async function H0(r){const e=await r();return e.status>=500&&e.status<600?r():e}function KP(r){return Number(r.replace("s","000"))}function GP(r){return`${U0} ${r}`}/**
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
 */async function QP({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const i=B0(r),o=q0(r),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:U0,appId:r.appId,sdkVersion:F0},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await H0(()=>fetch(i,f));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:z0(_.authToken)}}else throw await $0("Create Installation",g)}/**
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
 */function W0(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function JP(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const XP=/^[cdef][\w-]{21}$/,rf="";function YP(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=ZP(r);return XP.test(t)?t:rf}catch{return rf}}function ZP(r){return JP(r).substr(0,22)}/**
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
 */function Oc(r){return`${r.appName}!${r.appId}`}/**
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
 */const K0=new Map;function G0(r,e){const t=Oc(r);Q0(t,e),ek(t,e)}function Q0(r,e){const t=K0.get(r);if(t)for(const i of t)i(e)}function ek(r,e){const t=tk();t&&t.postMessage({key:r,fid:e}),nk()}let rs=null;function tk(){return!rs&&"BroadcastChannel"in self&&(rs=new BroadcastChannel("[Firebase] FID Change"),rs.onmessage=r=>{Q0(r.data.key,r.data.fid)}),rs}function nk(){K0.size===0&&rs&&(rs.close(),rs=null)}/**
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
 */const rk="firebase-installations-database",ik=1,hs="firebase-installations-store";let Rd=null;function Zf(){return Rd||(Rd=M_(rk,ik,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(hs)}}})),Rd}async function ac(r,e){const t=Oc(r),o=(await Zf()).transaction(hs,"readwrite"),l=o.objectStore(hs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&G0(r,e.fid),e}async function J0(r){const e=Oc(r),i=(await Zf()).transaction(hs,"readwrite");await i.objectStore(hs).delete(e),await i.done}async function xc(r,e){const t=Oc(r),o=(await Zf()).transaction(hs,"readwrite"),l=o.objectStore(hs),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&G0(r,f.fid),f}/**
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
 */async function ep(r){let e;const t=await xc(r.appConfig,i=>{const o=sk(i),l=ok(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===rf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function sk(r){const e=r||{fid:YP(),registrationStatus:0};return X0(e)}function ok(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(cs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=ak(r,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lk(r)}:{installationEntry:e}}async function ak(r,e){try{const t=await QP(r,e);return ac(r.appConfig,t)}catch(t){throw j0(t)&&t.customData.serverCode===409?await J0(r.appConfig):await ac(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function lk(r){let e=await Wy(r.appConfig);for(;e.registrationStatus===1;)await W0(100),e=await Wy(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await ep(r);return i||t}return e}function Wy(r){return xc(r,e=>{if(!e)throw cs.create("installation-not-found");return X0(e)})}function X0(r){return uk(r)?{fid:r.fid,registrationStatus:0}:r}function uk(r){return r.registrationStatus===1&&r.registrationTime+M0<Date.now()}/**
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
 */async function ck({appConfig:r,heartbeatServiceProvider:e},t){const i=hk(r,t),o=WP(r,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:F0,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await H0(()=>fetch(i,f));if(g.ok){const _=await g.json();return z0(_)}else throw await $0("Generate Auth Token",g)}function hk(r,{fid:e}){return`${B0(r)}/${e}/authTokens:generate`}/**
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
 */async function tp(r,e=!1){let t;const i=await xc(r.appConfig,l=>{if(!Y0(l))throw cs.create("not-registered");const h=l.authToken;if(!e&&pk(h))return l;if(h.requestStatus===1)return t=dk(r,e),l;{if(!navigator.onLine)throw cs.create("app-offline");const f=gk(l);return t=fk(r,f),f}});return t?await t:i.authToken}async function dk(r,e){let t=await Ky(r.appConfig);for(;t.authToken.requestStatus===1;)await W0(100),t=await Ky(r.appConfig);const i=t.authToken;return i.requestStatus===0?tp(r,e):i}function Ky(r){return xc(r,e=>{if(!Y0(e))throw cs.create("not-registered");const t=e.authToken;return yk(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fk(r,e){try{const t=await ck(r,e),i=Object.assign(Object.assign({},e),{authToken:t});return await ac(r.appConfig,i),t}catch(t){if(j0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await J0(r.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ac(r.appConfig,i)}throw t}}function Y0(r){return r!==void 0&&r.registrationStatus===2}function pk(r){return r.requestStatus===2&&!mk(r)}function mk(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+zP}function gk(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function yk(r){return r.requestStatus===1&&r.requestTime+M0<Date.now()}/**
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
 */async function _k(r){const e=r,{installationEntry:t,registrationPromise:i}=await ep(e);return i?i.catch(console.error):tp(e).catch(console.error),t.fid}/**
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
 */async function vk(r,e=!1){const t=r;return await wk(t),(await tp(t,e)).token}async function wk(r){const{registrationPromise:e}=await ep(r);e&&await e}/**
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
 */function Ek(r){if(!r||!r.options)throw Cd("App Configuration");if(!r.name)throw Cd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Cd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Cd(r){return cs.create("missing-app-config-values",{valueName:r})}/**
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
 */const Z0="installations",Tk="installations-internal",Ik=r=>{const e=r.getProvider("app").getImmediate(),t=Ek(e),i=fs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Sk=r=>{const e=r.getProvider("app").getImmediate(),t=fs(e,Z0).getImmediate();return{getId:()=>_k(t),getToken:o=>vk(t,o)}};function Ak(){ur(new qn(Z0,Ik,"PUBLIC")),ur(new qn(Tk,Sk,"PRIVATE"))}Ak();An(b0,Yf);An(b0,Yf,"esm2017");/**
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
 */const lc="analytics",Rk="firebase_id",Ck="origin",Pk=60*1e3,kk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",np="https://www.googletagmanager.com/gtag/js";/**
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
 */const nn=new gc("@firebase/analytics");/**
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
 */const Nk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new ds("analytics","Analytics",Nk);/**
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
 */function Dk(r){if(!r.startsWith(np)){const e=dn.create("invalid-gtag-resource",{gtagURL:r});return nn.warn(e.message),""}return r}function ew(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function Ok(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function xk(r,e){const t=Ok("firebase-js-sdk-policy",{createScriptURL:Dk}),i=document.createElement("script"),o=`${np}?l=${r}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function Vk(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function Lk(r,e,t,i,o,l){const h=i[o];try{if(h)await e[h];else{const g=(await ew(t)).find(_=>_.measurementId===o);g&&await e[g.appId]}}catch(f){nn.error(f)}r("config",o,l)}async function bk(r,e,t,i,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await ew(t);for(const g of h){const _=f.find(S=>S.measurementId===g),w=_&&e[_.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",i,o||{})}catch(l){nn.error(l)}}function Mk(r,e,t,i){async function o(l,...h){try{if(l==="event"){const[f,g]=h;await bk(r,e,t,f,g)}else if(l==="config"){const[f,g]=h;await Lk(r,e,t,i,f,g)}else if(l==="consent"){const[f,g]=h;r("consent",f,g)}else if(l==="get"){const[f,g,_]=h;r("get",f,g,_)}else if(l==="set"){const[f]=h;r("set",f)}else r(l,...h)}catch(f){nn.error(f)}}return o}function Fk(r,e,t,i,o){let l=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=Mk(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function Uk(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(np)&&t.src.includes(r))return t;return null}/**
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
 */const jk=30,Bk=1e3;class zk{constructor(e={},t=Bk){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tw=new zk;function $k(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function qk(r){var e;const{appId:t,apiKey:i}=r,o={method:"GET",headers:$k(i)},l=kk.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let f="";try{const g=await h.json();!((e=g.error)===null||e===void 0)&&e.message&&(f=g.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:f})}return h.json()}async function Hk(r,e=tw,t){const{appId:i,apiKey:o,measurementId:l}=r.options;if(!i)throw dn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw dn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Gk;return setTimeout(async()=>{f.abort()},Pk),nw({appId:i,apiKey:o,measurementId:l},h,f,e)}async function nw(r,{throttleEndTimeMillis:e,backoffCount:t},i,o=tw){var l;const{appId:h,measurementId:f}=r;try{await Wk(i,e)}catch(g){if(f)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:f};throw g}try{const g=await qk(r);return o.deleteThrottleMetadata(h),g}catch(g){const _=g;if(!Kk(_)){if(o.deleteThrottleMetadata(h),f)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:h,measurementId:f};throw g}const w=Number((l=_==null?void 0:_.customData)===null||l===void 0?void 0:l.httpStatus)===503?Lg(t,o.intervalMillis,jk):Lg(t,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(h,S),nn.debug(`Calling attemptFetch again in ${w} millis`),nw(r,S,i,o)}}function Wk(r,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),i(dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Kk(r){if(!(r instanceof Wn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Gk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Qk(r,e,t,i,o){if(o&&o.global){r("event",t,i);return}else{const l=await e,h=Object.assign(Object.assign({},i),{send_to:l});r("event",t,h)}}/**
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
 */async function Jk(){if(x_())try{await V_()}catch(r){return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Xk(r,e,t,i,o,l,h){var f;const g=Hk(r);g.then(j=>{t[j.measurementId]=j.appId,r.options.measurementId&&j.measurementId!==r.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${j.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(j=>nn.error(j)),e.push(g);const _=Jk().then(j=>{if(j)return i.getId()}),[w,S]=await Promise.all([g,_]);Uk(l)||xk(l,w.measurementId),o("js",new Date);const D=(f=h==null?void 0:h.config)!==null&&f!==void 0?f:{};return D[Ck]="firebase",D.update=!0,S!=null&&(D[Rk]=S),o("config",w.measurementId,D),w.measurementId}/**
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
 */class Yk{constructor(e){this.app=e}_delete(){return delete Ua[this.app.options.appId],Promise.resolve()}}let Ua={},Gy=[];const Qy={};let Pd="dataLayer",Zk="gtag",Jy,rw,Xy=!1;function eN(){const r=[];if(O_()&&r.push("This is a browser extension environment."),oI()||r.push("Cookies are not available."),r.length>0){const e=r.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=dn.create("invalid-analytics-context",{errorInfo:e});nn.warn(t.message)}}function tN(r,e,t){eN();const i=r.options.appId;if(!i)throw dn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(Ua[i]!=null)throw dn.create("already-exists",{id:i});if(!Xy){Vk(Pd);const{wrappedGtag:l,gtagCore:h}=Fk(Ua,Gy,Qy,Pd,Zk);rw=l,Jy=h,Xy=!0}return Ua[i]=Xk(r,Gy,Qy,e,Jy,Pd,t),new Yk(r)}function nN(r=hf()){r=fn(r);const e=fs(r,lc);return e.isInitialized()?e.getImmediate():rN(r)}function rN(r,e={}){const t=fs(r,lc);if(t.isInitialized()){const o=t.getImmediate();if(Ba(e,t.getOptions()))return o;throw dn.create("already-initialized")}return t.initialize({options:e})}function iN(r,e,t,i){r=fn(r),Qk(rw,Ua[r.app.options.appId],e,t,i).catch(o=>nn.error(o))}const Yy="@firebase/analytics",Zy="0.10.10";function sN(){ur(new qn(lc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return tN(i,o,t)},"PUBLIC")),ur(new qn("analytics-internal",r,"PRIVATE")),An(Yy,Zy),An(Yy,Zy,"esm2017");function r(e){try{const t=e.getProvider(lc).getImmediate();return{logEvent:(i,o,l)=>iN(t,i,o,l)}}catch(t){throw dn.create("interop-component-reg-failed",{reason:t})}}}sN();const oN={apiKey:"AIzaSyCHVVbyfElJIxcN2CPYWg4P7Ak5duwbnvE",authDomain:"book-nook-333.firebaseapp.com",projectId:"book-nook-333",storageBucket:"book-nook-333.firebasestorage.app",messagingSenderId:"203255929873",appId:"1:203255929873:web:b19380113207c8153d25b0",measurementId:"G-Z2H02F9DC7"},rp=F_(oN),e_=IA(rp),t_=EP(rp);nN(rp);function aN(){const[r,e]=sr.useState([]),[t,i]=sr.useState([]),[o,l]=sr.useState([]),[h,f]=sr.useState("library"),[g,_]=sr.useState(""),[w,S]=sr.useState([]),[D,j]=sr.useState(null),z="AIzaSyBwTESiEq5mwaGZVzShv4vJrSE26hJTjyE",q=()=>{const R=new Dr;O1(e_,R).then(T=>{const I=T.user;console.log("User signed in:",I),j(I)}).catch(T=>{console.error("Error signing in:",T)})},F=()=>{d1(e_).then(()=>{console.log("User signed out"),j(null)}).catch(R=>{console.error("Error signing out:",R)})},ie=async R=>{try{const T=qy(t_,"users",R);await FP(T,{library:r,wishlist:t,readList:o},{merge:!0}),console.log("User data saved successfully")}catch(T){console.error("Error saving user data:",T)}},se=async R=>{try{const T=qy(t_,"users",R),I=await bP(T);if(I.exists()){const P=I.data();e(P.library||[]),i(P.wishlist||[]),l(P.readList||[])}else console.log("No user data found")}catch(T){console.error("Error fetching user data:",T)}},oe=(R,T)=>{T==="library"?r.some(I=>I.id===R.id)||e(I=>[...I,R]):T==="wishlist"?t.some(I=>I.id===R.id)||i(I=>[...I,R]):T==="readList"&&(o.some(I=>I.id===R.id)||l(I=>[...I,R]))},ge=(R,T)=>{T==="library"?e(I=>I.filter(P=>P.id!==R)):T==="wishlist"?i(I=>I.filter(P=>P.id!==R)):T==="readList"&&l(I=>I.filter(P=>P.id!==R))},Ae=R=>{const T=R.target.value;if(_(T),T.trim()===""){S([]);return}ut.get(`https://www.googleapis.com/books/v1/volumes?q=${T}&key=${z}`).then(I=>{const P=I.data.items||[];S(P.map(O=>{var V;return{id:O.id,title:O.volumeInfo.title,authors:O.volumeInfo.authors||["Unknown Author"],image:(V=O.volumeInfo.imageLinks)==null?void 0:V.thumbnail,description:O.volumeInfo.description||"No description available."}}))}).catch(I=>{console.error("Error fetching books:",I),S([])})},ye=()=>{const R=(T,I)=>Ee.jsx("ul",{className:"book-list",children:T.map(P=>Ee.jsxs("li",{className:"book-item",children:[Ee.jsx("img",{src:P.image,alt:P.title}),Ee.jsxs("div",{className:"book-info",children:[Ee.jsx("p",{children:Ee.jsx("strong",{children:P.title})}),Ee.jsx("p",{children:P.authors.join(", ")})]}),Ee.jsx("button",{onClick:()=>ge(P.id,I),children:"Remove"})]},P.id))});if(h==="library")return Ee.jsxs(Ee.Fragment,{children:[Ee.jsx("h2",{children:"My Library"}),R(r,"library")]});if(h==="wishlist")return Ee.jsxs(Ee.Fragment,{children:[Ee.jsx("h2",{children:"Wishlist"}),R(t,"wishlist")]});if(h==="readList")return Ee.jsxs(Ee.Fragment,{children:[Ee.jsx("h2",{children:"Read List"}),R(o,"readList")]})};return sr.useEffect(()=>{D&&se(D.uid)},[D]),sr.useEffect(()=>{D&&(r.length>0||t.length>0||o.length>0)&&ie(D.uid)},[r,t,o,D]),Ee.jsxs("div",{className:"App",children:[Ee.jsxs("header",{className:"header",children:[Ee.jsx("div",{className:"title",children:Ee.jsx("h1",{children:"bookNook"})}),Ee.jsxs("div",{className:"view-buttons",children:[Ee.jsx("button",{onClick:()=>f("library"),children:"My Library"}),Ee.jsx("button",{onClick:()=>f("wishlist"),children:"Wishlist"}),Ee.jsx("button",{onClick:()=>f("readList"),children:"Read List"})]}),Ee.jsx("div",{className:"sign-in-button",children:D?Ee.jsx("button",{onClick:F,children:"Sign Out"}):Ee.jsx("button",{onClick:q,children:"Sign In"})})]}),Ee.jsxs("main",{children:[ye(),Ee.jsxs("div",{className:"search-container",children:[Ee.jsx("h3",{children:"Search Books"}),Ee.jsx("input",{type:"text",value:g,onChange:Ae,placeholder:"Search for a book..."})]}),Ee.jsxs("div",{className:"search-results",children:[Ee.jsx("h3",{children:"Search Results"}),w.length>0?Ee.jsx("ul",{className:"book-list",children:w.map(R=>Ee.jsxs("li",{className:"book-item",children:[Ee.jsx("img",{src:R.image,alt:R.title}),Ee.jsxs("div",{className:"book-info",children:[Ee.jsx("p",{children:Ee.jsx("strong",{children:R.title})}),Ee.jsx("p",{children:R.authors.join(", ")})]}),Ee.jsxs("button",{onClick:()=>oe(R,h),children:["Add to ",h]})]},R.id))}):Ee.jsx("p",{children:"No books found."})]})]})]})}pE.createRoot(document.getElementById("root")).render(Ee.jsx(sr.StrictMode,{children:Ee.jsx(aN,{})}));
