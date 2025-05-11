function kT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function AT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dv={exports:{}},pu={},Ov={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),CT=Symbol.for("react.portal"),PT=Symbol.for("react.fragment"),RT=Symbol.for("react.strict_mode"),bT=Symbol.for("react.profiler"),NT=Symbol.for("react.provider"),DT=Symbol.for("react.context"),OT=Symbol.for("react.forward_ref"),VT=Symbol.for("react.suspense"),LT=Symbol.for("react.memo"),MT=Symbol.for("react.lazy"),Hm=Symbol.iterator;function jT(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var Vv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lv=Object.assign,Mv={};function ps(t,e,n){this.props=t,this.context=e,this.refs=Mv,this.updater=n||Vv}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jv(){}jv.prototype=ps.prototype;function zh(t,e,n){this.props=t,this.context=e,this.refs=Mv,this.updater=n||Vv}var $h=zh.prototype=new jv;$h.constructor=zh;Lv($h,ps.prototype);$h.isPureReactComponent=!0;var qm=Array.isArray,Fv=Object.prototype.hasOwnProperty,Bh={current:null},Uv={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fv.call(e,r)&&!Uv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zo,type:t,key:s,ref:o,props:i,_owner:Bh.current}}function FT(t,e){return{$$typeof:Zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zo}function UT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Km=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UT(""+t.key):e.toString(36)}function nl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zo:case CT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xc(o,0):r,qm(i)?(n="",t!=null&&(n=t.replace(Km,"$&/")+"/"),nl(i,e,n,"",function(c){return c})):i!=null&&(Wh(i)&&(i=FT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Km,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+xc(s,l);o+=nl(s,e,n,u,i)}else if(u=jT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+xc(s,l++),o+=nl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Da(t,e,n){if(t==null)return t;var r=[],i=0;return nl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},rl={transition:null},$T={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:rl,ReactCurrentOwner:Bh};function $v(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Da,forEach:function(t,e,n){Da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Da(t,function(){e++}),e},toArray:function(t){return Da(t,function(e){return e})||[]},only:function(t){if(!Wh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ps;ee.Fragment=PT;ee.Profiler=bT;ee.PureComponent=zh;ee.StrictMode=RT;ee.Suspense=VT;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$T;ee.act=$v;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Fv.call(e,u)&&!Uv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Zo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:DT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NT,_context:t},t.Consumer=t};ee.createElement=zv;ee.createFactory=function(t){var e=zv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:OT,render:t}};ee.isValidElement=Wh;ee.lazy=function(t){return{$$typeof:MT,_payload:{_status:-1,_result:t},_init:zT}};ee.memo=function(t,e){return{$$typeof:LT,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=rl.transition;rl.transition={};try{t()}finally{rl.transition=e}};ee.unstable_act=$v;ee.useCallback=function(t,e){return ft.current.useCallback(t,e)};ee.useContext=function(t){return ft.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ft.current.useEffect(t,e)};ee.useId=function(){return ft.current.useId()};ee.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ft.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};ee.useRef=function(t){return ft.current.useRef(t)};ee.useState=function(t){return ft.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ft.current.useTransition()};ee.version="18.3.1";Ov.exports=ee;var D=Ov.exports;const BT=AT(D),WT=kT({__proto__:null,default:BT},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HT=D,qT=Symbol.for("react.element"),KT=Symbol.for("react.fragment"),GT=Object.prototype.hasOwnProperty,QT=HT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YT={key:!0,ref:!0,__self:!0,__source:!0};function Bv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GT.call(e,r)&&!YT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qT,type:t,key:s,ref:o,props:i,_owner:QT.current}}pu.Fragment=KT;pu.jsx=Bv;pu.jsxs=Bv;Dv.exports=pu;var m=Dv.exports,Wv={exports:{}},Ct={},Hv={exports:{}},qv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,q){var Y=$.length;$.push(q);e:for(;0<Y;){var ie=Y-1>>>1,ce=$[ie];if(0<i(ce,q))$[ie]=q,$[Y]=ce,Y=ie;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var q=$[0],Y=$.pop();if(Y!==q){$[0]=Y;e:for(var ie=0,ce=$.length,Ae=ce>>>1;ie<Ae;){var dn=2*(ie+1)-1,hn=$[dn],fn=dn+1,pn=$[fn];if(0>i(hn,Y))fn<ce&&0>i(pn,hn)?($[ie]=pn,$[fn]=Y,ie=fn):($[ie]=hn,$[dn]=Y,ie=dn);else if(fn<ce&&0>i(pn,Y))$[ie]=pn,$[fn]=Y,ie=fn;else break e}}return q}function i($,q){var Y=$.sortIndex-q.sortIndex;return Y!==0?Y:$.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],h=1,p=null,g=3,S=!1,P=!1,R=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=$)r(c),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(c)}}function O($){if(R=!1,x($),!P)if(n(u)!==null)P=!0,Qt(M);else{var q=n(c);q!==null&&Rt(O,q.startTime-$)}}function M($,q){P=!1,R&&(R=!1,w(v),v=-1),S=!0;var Y=g;try{for(x(q),p=n(u);p!==null&&(!(p.expirationTime>q)||$&&!A());){var ie=p.callback;if(typeof ie=="function"){p.callback=null,g=p.priorityLevel;var ce=ie(p.expirationTime<=q);q=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(u)&&r(u),x(q)}else r(u);p=n(u)}if(p!==null)var Ae=!0;else{var dn=n(c);dn!==null&&Rt(O,dn.startTime-q),Ae=!1}return Ae}finally{p=null,g=Y,S=!1}}var U=!1,I=null,v=-1,E=5,T=-1;function A(){return!(t.unstable_now()-T<E)}function C(){if(I!==null){var $=t.unstable_now();T=$;var q=!0;try{q=I(!0,$)}finally{q?k():(U=!1,I=null)}}else U=!1}var k;if(typeof _=="function")k=function(){_(C)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,Gt=ze.port2;ze.port1.onmessage=C,k=function(){Gt.postMessage(null)}}else k=function(){b(C,0)};function Qt($){I=$,U||(U=!0,k())}function Rt($,q){v=b(function(){$(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||S||(P=!0,Qt(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var Y=g;g=q;try{return $()}finally{g=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Y=g;g=$;try{return q()}finally{g=Y}},t.unstable_scheduleCallback=function($,q,Y){var ie=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ie+Y:ie):Y=ie,$){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Y+ce,$={id:h++,callback:q,priorityLevel:$,startTime:Y,expirationTime:ce,sortIndex:-1},Y>ie?($.sortIndex=Y,e(c,$),n(u)===null&&$===n(c)&&(R?(w(v),v=-1):R=!0,Rt(O,Y-ie))):($.sortIndex=ce,e(u,$),P||S||(P=!0,Qt(M))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var q=g;return function(){var Y=g;g=q;try{return $.apply(this,arguments)}finally{g=Y}}}})(qv);Hv.exports=qv;var JT=Hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=D,At=JT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kv=new Set,Io={};function li(t,e){Yi(t,e),Yi(t+"Capture",e)}function Yi(t,e){for(Io[t]=e,t=0;t<e.length;t++)Kv.add(e[t])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yd=Object.prototype.hasOwnProperty,ZT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gm={},Qm={};function eI(t){return yd.call(Qm,t)?!0:yd.call(Gm,t)?!1:ZT.test(t)?Qm[t]=!0:(Gm[t]=!0,!1)}function tI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nI(t,e,n,r){if(e===null||typeof e>"u"||tI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hh=/[\-:]([a-z])/g;function qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hh,qh);Ge[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hh,qh);Ge[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hh,qh);Ge[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kh(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nI(e,n,i,r)&&(n=null),r||i===null?eI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),Ai=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),Gh=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),wd=Symbol.for("react.suspense_list"),Yh=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Yv=Symbol.for("react.offscreen"),Ym=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=Ym&&t[Ym]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,kc;function Js(t){if(kc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kc=e&&e[1]||""}return`
`+kc+t}var Ac=!1;function Cc(t,e){if(!t||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function rI(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=Cc(t.type,!1),t;case 11:return t=Cc(t.type.render,!1),t;case 1:return t=Cc(t.type,!0),t;default:return""}}function Ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ci:return"Fragment";case Ai:return"Portal";case vd:return"Profiler";case Gh:return"StrictMode";case _d:return"Suspense";case wd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qv:return(t.displayName||"Context")+".Consumer";case Gv:return(t._context.displayName||"Context")+".Provider";case Qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yh:return e=t.displayName||null,e!==null?e:Ed(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return Ed(t(e))}catch{}}return null}function iI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ed(e);case 8:return e===Gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sI(t){var e=Jv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Va(t){t._valueTracker||(t._valueTracker=sI(t))}function Xv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Td(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zv(t,e){e=e.checked,e!=null&&Kh(t,"checked",e,!1)}function Id(t,e){Zv(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sd(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sd(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xs=Array.isArray;function Fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Xs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function e_(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function eg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var La,n_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function So(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oI=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(t){oI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),so[e]=so[t]})});function r_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||so.hasOwnProperty(t)&&so[t]?(""+e).trim():e+"px"}function i_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=r_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aI=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ad(t,e){if(e){if(aI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pd=null;function Jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rd=null,Ui=null,zi=null;function tg(t){if(t=na(t)){if(typeof Rd!="function")throw Error(F(280));var e=t.stateNode;e&&(e=_u(e),Rd(t.stateNode,t.type,e))}}function s_(t){Ui?zi?zi.push(t):zi=[t]:Ui=t}function o_(){if(Ui){var t=Ui,e=zi;if(zi=Ui=null,tg(t),e)for(t=0;t<e.length;t++)tg(e[t])}}function a_(t,e){return t(e)}function l_(){}var Pc=!1;function u_(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return a_(t,e,n)}finally{Pc=!1,(Ui!==null||zi!==null)&&(l_(),o_())}}function xo(t,e){var n=t.stateNode;if(n===null)return null;var r=_u(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var bd=!1;if(bn)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){bd=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{bd=!1}function lI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var oo=!1,Sl=null,xl=!1,Nd=null,uI={onError:function(t){oo=!0,Sl=t}};function cI(t,e,n,r,i,s,o,l,u){oo=!1,Sl=null,lI.apply(uI,arguments)}function dI(t,e,n,r,i,s,o,l,u){if(cI.apply(this,arguments),oo){if(oo){var c=Sl;oo=!1,Sl=null}else throw Error(F(198));xl||(xl=!0,Nd=c)}}function ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ng(t){if(ui(t)!==t)throw Error(F(188))}function hI(t){var e=t.alternate;if(!e){if(e=ui(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ng(i),t;if(s===r)return ng(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function d_(t){return t=hI(t),t!==null?h_(t):null}function h_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=h_(t);if(e!==null)return e;t=t.sibling}return null}var f_=At.unstable_scheduleCallback,rg=At.unstable_cancelCallback,fI=At.unstable_shouldYield,pI=At.unstable_requestPaint,Pe=At.unstable_now,mI=At.unstable_getCurrentPriorityLevel,Xh=At.unstable_ImmediatePriority,p_=At.unstable_UserBlockingPriority,kl=At.unstable_NormalPriority,gI=At.unstable_LowPriority,m_=At.unstable_IdlePriority,mu=null,Zt=null;function yI(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:wI,vI=Math.log,_I=Math.LN2;function wI(t){return t>>>=0,t===0?32:31-(vI(t)/_I|0)|0}var Ma=64,ja=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Al(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Zs(l):(s&=o,s!==0&&(r=Zs(s)))}else o=n&~i,o!==0?r=Zs(o):s!==0&&(r=Zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function EI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=EI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Dd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g_(){var t=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),t}function Rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function II(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function y_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v_,ef,__,w_,E_,Od=!1,Fa=[],ur=null,cr=null,dr=null,ko=new Map,Ao=new Map,Zn=[],SI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ig(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function $s(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=na(e),e!==null&&ef(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xI(t,e,n,r,i){switch(e){case"focusin":return ur=$s(ur,t,e,n,r,i),!0;case"dragenter":return cr=$s(cr,t,e,n,r,i),!0;case"mouseover":return dr=$s(dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ko.set(s,$s(ko.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ao.set(s,$s(Ao.get(s)||null,t,e,n,r,i)),!0}return!1}function T_(t){var e=Fr(t.target);if(e!==null){var n=ui(e);if(n!==null){if(e=n.tag,e===13){if(e=c_(n),e!==null){t.blockedOn=e,E_(t.priority,function(){__(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Pd=r,n.target.dispatchEvent(r),Pd=null}else return e=na(n),e!==null&&ef(e),t.blockedOn=n,!1;e.shift()}return!0}function sg(t,e,n){il(t)&&n.delete(e)}function kI(){Od=!1,ur!==null&&il(ur)&&(ur=null),cr!==null&&il(cr)&&(cr=null),dr!==null&&il(dr)&&(dr=null),ko.forEach(sg),Ao.forEach(sg)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Od||(Od=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,kI)))}function Co(t){function e(i){return Bs(i,t)}if(0<Fa.length){Bs(Fa[0],t);for(var n=1;n<Fa.length;n++){var r=Fa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&Bs(ur,t),cr!==null&&Bs(cr,t),dr!==null&&Bs(dr,t),ko.forEach(e),Ao.forEach(e),n=0;n<Zn.length;n++)r=Zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)T_(n),n.blockedOn===null&&Zn.shift()}var $i=Un.ReactCurrentBatchConfig,Cl=!0;function AI(t,e,n,r){var i=le,s=$i.transition;$i.transition=null;try{le=1,tf(t,e,n,r)}finally{le=i,$i.transition=s}}function CI(t,e,n,r){var i=le,s=$i.transition;$i.transition=null;try{le=4,tf(t,e,n,r)}finally{le=i,$i.transition=s}}function tf(t,e,n,r){if(Cl){var i=Vd(t,e,n,r);if(i===null)Uc(t,e,r,Pl,n),ig(t,r);else if(xI(i,t,e,n,r))r.stopPropagation();else if(ig(t,r),e&4&&-1<SI.indexOf(t)){for(;i!==null;){var s=na(i);if(s!==null&&v_(s),s=Vd(t,e,n,r),s===null&&Uc(t,e,r,Pl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uc(t,e,r,null,n)}}var Pl=null;function Vd(t,e,n,r){if(Pl=null,t=Jh(r),t=Fr(t),t!==null)if(e=ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pl=t,null}function I_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mI()){case Xh:return 1;case p_:return 4;case kl:case gI:return 16;case m_:return 536870912;default:return 16}default:return 16}}var sr=null,nf=null,sl=null;function S_(){if(sl)return sl;var t,e=nf,n=e.length,r,i="value"in sr?sr.value:sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return sl=i.slice(t,1<r?1-r:void 0)}function ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ua(){return!0}function og(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ua:og,this.isPropagationStopped=og,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=Pt(ms),ta=Ee({},ms,{view:0,detail:0}),PI=Pt(ta),bc,Nc,Ws,gu=Ee({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(bc=t.screenX-Ws.screenX,Nc=t.screenY-Ws.screenY):Nc=bc=0,Ws=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Nc}}),ag=Pt(gu),RI=Ee({},gu,{dataTransfer:0}),bI=Pt(RI),NI=Ee({},ta,{relatedTarget:0}),Dc=Pt(NI),DI=Ee({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),OI=Pt(DI),VI=Ee({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LI=Pt(VI),MI=Ee({},ms,{data:0}),lg=Pt(MI),jI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UI[t])?!!e[t]:!1}function sf(){return zI}var $I=Ee({},ta,{key:function(t){if(t.key){var e=jI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BI=Pt($I),WI=Ee({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ug=Pt(WI),HI=Ee({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),qI=Pt(HI),KI=Ee({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),GI=Pt(KI),QI=Ee({},gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YI=Pt(QI),JI=[9,13,27,32],of=bn&&"CompositionEvent"in window,ao=null;bn&&"documentMode"in document&&(ao=document.documentMode);var XI=bn&&"TextEvent"in window&&!ao,x_=bn&&(!of||ao&&8<ao&&11>=ao),cg=" ",dg=!1;function k_(t,e){switch(t){case"keyup":return JI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pi=!1;function ZI(t,e){switch(t){case"compositionend":return A_(e);case"keypress":return e.which!==32?null:(dg=!0,cg);case"textInput":return t=e.data,t===cg&&dg?null:t;default:return null}}function eS(t,e){if(Pi)return t==="compositionend"||!of&&k_(t,e)?(t=S_(),sl=nf=sr=null,Pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return x_&&e.locale!=="ko"?null:e.data;default:return null}}var tS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tS[t.type]:e==="textarea"}function C_(t,e,n,r){s_(r),e=Rl(e,"onChange"),0<e.length&&(n=new rf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var lo=null,Po=null;function nS(t){F_(t,0)}function yu(t){var e=Ni(t);if(Xv(e))return t}function rS(t,e){if(t==="change")return e}var P_=!1;if(bn){var Oc;if(bn){var Vc="oninput"in document;if(!Vc){var fg=document.createElement("div");fg.setAttribute("oninput","return;"),Vc=typeof fg.oninput=="function"}Oc=Vc}else Oc=!1;P_=Oc&&(!document.documentMode||9<document.documentMode)}function pg(){lo&&(lo.detachEvent("onpropertychange",R_),Po=lo=null)}function R_(t){if(t.propertyName==="value"&&yu(Po)){var e=[];C_(e,Po,t,Jh(t)),u_(nS,e)}}function iS(t,e,n){t==="focusin"?(pg(),lo=e,Po=n,lo.attachEvent("onpropertychange",R_)):t==="focusout"&&pg()}function sS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(Po)}function oS(t,e){if(t==="click")return yu(e)}function aS(t,e){if(t==="input"||t==="change")return yu(e)}function lS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:lS;function Ro(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yd.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gg(t,e){var n=mg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mg(n)}}function b_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N_(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uS(t){var e=N_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b_(n.ownerDocument.documentElement,n)){if(r!==null&&af(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gg(n,s);var o=gg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cS=bn&&"documentMode"in document&&11>=document.documentMode,Ri=null,Ld=null,uo=null,Md=!1;function yg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Md||Ri==null||Ri!==Il(r)||(r=Ri,"selectionStart"in r&&af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&Ro(uo,r)||(uo=r,r=Rl(Ld,"onSelect"),0<r.length&&(e=new rf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ri)))}function za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bi={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},Lc={},D_={};bn&&(D_=document.createElement("div").style,"AnimationEvent"in window||(delete bi.animationend.animation,delete bi.animationiteration.animation,delete bi.animationstart.animation),"TransitionEvent"in window||delete bi.transitionend.transition);function vu(t){if(Lc[t])return Lc[t];if(!bi[t])return t;var e=bi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D_)return Lc[t]=e[n];return t}var O_=vu("animationend"),V_=vu("animationiteration"),L_=vu("animationstart"),M_=vu("transitionend"),j_=new Map,vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){j_.set(t,e),li(e,[t])}for(var Mc=0;Mc<vg.length;Mc++){var jc=vg[Mc],dS=jc.toLowerCase(),hS=jc[0].toUpperCase()+jc.slice(1);kr(dS,"on"+hS)}kr(O_,"onAnimationEnd");kr(V_,"onAnimationIteration");kr(L_,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(M_,"onTransitionEnd");Yi("onMouseEnter",["mouseout","mouseover"]);Yi("onMouseLeave",["mouseout","mouseover"]);Yi("onPointerEnter",["pointerout","pointerover"]);Yi("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function _g(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dI(r,e,void 0,t),t.currentTarget=null}function F_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;_g(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;_g(i,l,c),s=u}}}if(xl)throw t=Nd,xl=!1,Nd=null,t}function me(t,e){var n=e[$d];n===void 0&&(n=e[$d]=new Set);var r=t+"__bubble";n.has(r)||(U_(e,t,2,!1),n.add(r))}function Fc(t,e,n){var r=0;e&&(r|=4),U_(n,t,r,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[$a]){t[$a]=!0,Kv.forEach(function(n){n!=="selectionchange"&&(fS.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,Fc("selectionchange",!1,e))}}function U_(t,e,n,r){switch(I_(e)){case 1:var i=AI;break;case 4:i=CI;break;default:i=tf}n=i.bind(null,e,n,t),i=void 0,!bd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}u_(function(){var c=s,h=Jh(n),p=[];e:{var g=j_.get(t);if(g!==void 0){var S=rf,P=t;switch(t){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":S=BI;break;case"focusin":P="focus",S=Dc;break;case"focusout":P="blur",S=Dc;break;case"beforeblur":case"afterblur":S=Dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=bI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=qI;break;case O_:case V_:case L_:S=OI;break;case M_:S=GI;break;case"scroll":S=PI;break;case"wheel":S=YI;break;case"copy":case"cut":case"paste":S=LI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ug}var R=(e&4)!==0,b=!R&&t==="scroll",w=R?g!==null?g+"Capture":null:g;R=[];for(var _=c,x;_!==null;){x=_;var O=x.stateNode;if(x.tag===5&&O!==null&&(x=O,w!==null&&(O=xo(_,w),O!=null&&R.push(No(_,O,x)))),b)break;_=_.return}0<R.length&&(g=new S(g,P,null,n,h),p.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==Pd&&(P=n.relatedTarget||n.fromElement)&&(Fr(P)||P[Nn]))break e;if((S||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,S?(P=n.relatedTarget||n.toElement,S=c,P=P?Fr(P):null,P!==null&&(b=ui(P),P!==b||P.tag!==5&&P.tag!==6)&&(P=null)):(S=null,P=c),S!==P)){if(R=ag,O="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(R=ug,O="onPointerLeave",w="onPointerEnter",_="pointer"),b=S==null?g:Ni(S),x=P==null?g:Ni(P),g=new R(O,_+"leave",S,n,h),g.target=b,g.relatedTarget=x,O=null,Fr(h)===c&&(R=new R(w,_+"enter",P,n,h),R.target=x,R.relatedTarget=b,O=R),b=O,S&&P)t:{for(R=S,w=P,_=0,x=R;x;x=Ei(x))_++;for(x=0,O=w;O;O=Ei(O))x++;for(;0<_-x;)R=Ei(R),_--;for(;0<x-_;)w=Ei(w),x--;for(;_--;){if(R===w||w!==null&&R===w.alternate)break t;R=Ei(R),w=Ei(w)}R=null}else R=null;S!==null&&wg(p,g,S,R,!1),P!==null&&b!==null&&wg(p,b,P,R,!0)}}e:{if(g=c?Ni(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var M=rS;else if(hg(g))if(P_)M=aS;else{M=sS;var U=iS}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=oS);if(M&&(M=M(t,c))){C_(p,M,n,h);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Sd(g,"number",g.value)}switch(U=c?Ni(c):window,t){case"focusin":(hg(U)||U.contentEditable==="true")&&(Ri=U,Ld=c,uo=null);break;case"focusout":uo=Ld=Ri=null;break;case"mousedown":Md=!0;break;case"contextmenu":case"mouseup":case"dragend":Md=!1,yg(p,n,h);break;case"selectionchange":if(cS)break;case"keydown":case"keyup":yg(p,n,h)}var I;if(of)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Pi?k_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(x_&&n.locale!=="ko"&&(Pi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Pi&&(I=S_()):(sr=h,nf="value"in sr?sr.value:sr.textContent,Pi=!0)),U=Rl(c,v),0<U.length&&(v=new lg(v,t,null,n,h),p.push({event:v,listeners:U}),I?v.data=I:(I=A_(n),I!==null&&(v.data=I)))),(I=XI?ZI(t,n):eS(t,n))&&(c=Rl(c,"onBeforeInput"),0<c.length&&(h=new lg("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=I))}F_(p,e)})}function No(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=xo(t,n),s!=null&&r.unshift(No(t,s,i)),s=xo(t,e),s!=null&&r.push(No(t,s,i))),t=t.return}return r}function Ei(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=xo(n,s),u!=null&&o.unshift(No(n,u,l))):i||(u=xo(n,s),u!=null&&o.push(No(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function Eg(t){return(typeof t=="string"?t:""+t).replace(pS,`
`).replace(mS,"")}function Ba(t,e,n){if(e=Eg(e),Eg(t)!==e&&n)throw Error(F(425))}function bl(){}var jd=null,Fd=null;function Ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(t){return Tg.resolve(null).then(t).catch(vS)}:zd;function vS(t){setTimeout(function(){throw t})}function zc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Co(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ig(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),Xt="__reactFiber$"+gs,Do="__reactProps$"+gs,Nn="__reactContainer$"+gs,$d="__reactEvents$"+gs,_S="__reactListeners$"+gs,wS="__reactHandles$"+gs;function Fr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ig(t);t!==null;){if(n=t[Xt])return n;t=Ig(t)}return e}t=n,n=t.parentNode}return null}function na(t){return t=t[Xt]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function _u(t){return t[Do]||null}var Bd=[],Di=-1;function Ar(t){return{current:t}}function ge(t){0>Di||(t.current=Bd[Di],Bd[Di]=null,Di--)}function he(t,e){Di++,Bd[Di]=t.current,t.current=e}var Er={},ot=Ar(Er),vt=Ar(!1),Yr=Er;function Ji(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function Nl(){ge(vt),ge(ot)}function Sg(t,e,n){if(ot.current!==Er)throw Error(F(168));he(ot,e),he(vt,n)}function z_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,iI(t)||"Unknown",i));return Ee({},n,r)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Yr=ot.current,he(ot,t),he(vt,vt.current),!0}function xg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=z_(t,e,Yr),r.__reactInternalMemoizedMergedChildContext=t,ge(vt),ge(ot),he(ot,t)):ge(vt),he(vt,n)}var En=null,wu=!1,$c=!1;function $_(t){En===null?En=[t]:En.push(t)}function ES(t){wu=!0,$_(t)}function Cr(){if(!$c&&En!==null){$c=!0;var t=0,e=le;try{var n=En;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,wu=!1}catch(i){throw En!==null&&(En=En.slice(t+1)),f_(Xh,Cr),i}finally{le=e,$c=!1}}return null}var Oi=[],Vi=0,Ol=null,Vl=0,bt=[],Nt=0,Jr=null,In=1,Sn="";function Lr(t,e){Oi[Vi++]=Vl,Oi[Vi++]=Ol,Ol=t,Vl=e}function B_(t,e,n){bt[Nt++]=In,bt[Nt++]=Sn,bt[Nt++]=Jr,Jr=t;var r=In;t=Sn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-Bt(e)+i|n<<i|r,Sn=s+t}else In=1<<s|n<<i|r,Sn=t}function lf(t){t.return!==null&&(Lr(t,1),B_(t,1,0))}function uf(t){for(;t===Ol;)Ol=Oi[--Vi],Oi[Vi]=null,Vl=Oi[--Vi],Oi[Vi]=null;for(;t===Jr;)Jr=bt[--Nt],bt[Nt]=null,Sn=bt[--Nt],bt[Nt]=null,In=bt[--Nt],bt[Nt]=null}var xt=null,It=null,ve=!1,$t=null;function W_(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,It=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:In,overflow:Sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,It=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hd(t){if(ve){var e=It;if(e){var n=e;if(!kg(t,e)){if(Wd(t))throw Error(F(418));e=hr(n.nextSibling);var r=xt;e&&kg(t,e)?W_(r,n):(t.flags=t.flags&-4097|2,ve=!1,xt=t)}}else{if(Wd(t))throw Error(F(418));t.flags=t.flags&-4097|2,ve=!1,xt=t}}}function Ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function Wa(t){if(t!==xt)return!1;if(!ve)return Ag(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ud(t.type,t.memoizedProps)),e&&(e=It)){if(Wd(t))throw H_(),Error(F(418));for(;e;)W_(t,e),e=hr(e.nextSibling)}if(Ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=xt?hr(t.stateNode.nextSibling):null;return!0}function H_(){for(var t=It;t;)t=hr(t.nextSibling)}function Xi(){It=xt=null,ve=!1}function cf(t){$t===null?$t=[t]:$t.push(t)}var TS=Un.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cg(t){var e=t._init;return e(t._payload)}function q_(t){function e(w,_){if(t){var x=w.deletions;x===null?(w.deletions=[_],w.flags|=16):x.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=gr(w,_),w.index=0,w.sibling=null,w}function s(w,_,x){return w.index=x,t?(x=w.alternate,x!==null?(x=x.index,x<_?(w.flags|=2,_):x):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,x,O){return _===null||_.tag!==6?(_=Qc(x,w.mode,O),_.return=w,_):(_=i(_,x),_.return=w,_)}function u(w,_,x,O){var M=x.type;return M===Ci?h(w,_,x.props.children,O,x.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Jn&&Cg(M)===_.type)?(O=i(_,x.props),O.ref=Hs(w,_,x),O.return=w,O):(O=fl(x.type,x.key,x.props,null,w.mode,O),O.ref=Hs(w,_,x),O.return=w,O)}function c(w,_,x,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=Yc(x,w.mode,O),_.return=w,_):(_=i(_,x.children||[]),_.return=w,_)}function h(w,_,x,O,M){return _===null||_.tag!==7?(_=Kr(x,w.mode,O,M),_.return=w,_):(_=i(_,x),_.return=w,_)}function p(w,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Qc(""+_,w.mode,x),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Oa:return x=fl(_.type,_.key,_.props,null,w.mode,x),x.ref=Hs(w,null,_),x.return=w,x;case Ai:return _=Yc(_,w.mode,x),_.return=w,_;case Jn:var O=_._init;return p(w,O(_._payload),x)}if(Xs(_)||Us(_))return _=Kr(_,w.mode,x,null),_.return=w,_;Ha(w,_)}return null}function g(w,_,x,O){var M=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:l(w,_,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Oa:return x.key===M?u(w,_,x,O):null;case Ai:return x.key===M?c(w,_,x,O):null;case Jn:return M=x._init,g(w,_,M(x._payload),O)}if(Xs(x)||Us(x))return M!==null?null:h(w,_,x,O,null);Ha(w,x)}return null}function S(w,_,x,O,M){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(x)||null,l(_,w,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Oa:return w=w.get(O.key===null?x:O.key)||null,u(_,w,O,M);case Ai:return w=w.get(O.key===null?x:O.key)||null,c(_,w,O,M);case Jn:var U=O._init;return S(w,_,x,U(O._payload),M)}if(Xs(O)||Us(O))return w=w.get(x)||null,h(_,w,O,M,null);Ha(_,O)}return null}function P(w,_,x,O){for(var M=null,U=null,I=_,v=_=0,E=null;I!==null&&v<x.length;v++){I.index>v?(E=I,I=null):E=I.sibling;var T=g(w,I,x[v],O);if(T===null){I===null&&(I=E);break}t&&I&&T.alternate===null&&e(w,I),_=s(T,_,v),U===null?M=T:U.sibling=T,U=T,I=E}if(v===x.length)return n(w,I),ve&&Lr(w,v),M;if(I===null){for(;v<x.length;v++)I=p(w,x[v],O),I!==null&&(_=s(I,_,v),U===null?M=I:U.sibling=I,U=I);return ve&&Lr(w,v),M}for(I=r(w,I);v<x.length;v++)E=S(I,w,v,x[v],O),E!==null&&(t&&E.alternate!==null&&I.delete(E.key===null?v:E.key),_=s(E,_,v),U===null?M=E:U.sibling=E,U=E);return t&&I.forEach(function(A){return e(w,A)}),ve&&Lr(w,v),M}function R(w,_,x,O){var M=Us(x);if(typeof M!="function")throw Error(F(150));if(x=M.call(x),x==null)throw Error(F(151));for(var U=M=null,I=_,v=_=0,E=null,T=x.next();I!==null&&!T.done;v++,T=x.next()){I.index>v?(E=I,I=null):E=I.sibling;var A=g(w,I,T.value,O);if(A===null){I===null&&(I=E);break}t&&I&&A.alternate===null&&e(w,I),_=s(A,_,v),U===null?M=A:U.sibling=A,U=A,I=E}if(T.done)return n(w,I),ve&&Lr(w,v),M;if(I===null){for(;!T.done;v++,T=x.next())T=p(w,T.value,O),T!==null&&(_=s(T,_,v),U===null?M=T:U.sibling=T,U=T);return ve&&Lr(w,v),M}for(I=r(w,I);!T.done;v++,T=x.next())T=S(I,w,v,T.value,O),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?v:T.key),_=s(T,_,v),U===null?M=T:U.sibling=T,U=T);return t&&I.forEach(function(C){return e(w,C)}),ve&&Lr(w,v),M}function b(w,_,x,O){if(typeof x=="object"&&x!==null&&x.type===Ci&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Oa:e:{for(var M=x.key,U=_;U!==null;){if(U.key===M){if(M=x.type,M===Ci){if(U.tag===7){n(w,U.sibling),_=i(U,x.props.children),_.return=w,w=_;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Jn&&Cg(M)===U.type){n(w,U.sibling),_=i(U,x.props),_.ref=Hs(w,U,x),_.return=w,w=_;break e}n(w,U);break}else e(w,U);U=U.sibling}x.type===Ci?(_=Kr(x.props.children,w.mode,O,x.key),_.return=w,w=_):(O=fl(x.type,x.key,x.props,null,w.mode,O),O.ref=Hs(w,_,x),O.return=w,w=O)}return o(w);case Ai:e:{for(U=x.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(w,_.sibling),_=i(_,x.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Yc(x,w.mode,O),_.return=w,w=_}return o(w);case Jn:return U=x._init,b(w,_,U(x._payload),O)}if(Xs(x))return P(w,_,x,O);if(Us(x))return R(w,_,x,O);Ha(w,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,x),_.return=w,w=_):(n(w,_),_=Qc(x,w.mode,O),_.return=w,w=_),o(w)):n(w,_)}return b}var Zi=q_(!0),K_=q_(!1),Ll=Ar(null),Ml=null,Li=null,df=null;function hf(){df=Li=Ml=null}function ff(t){var e=Ll.current;ge(Ll),t._currentValue=e}function qd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bi(t,e){Ml=t,df=Li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},Li===null){if(Ml===null)throw Error(F(308));Li=t,Ml.dependencies={lanes:0,firstContext:t}}else Li=Li.next=t;return e}var Ur=null;function pf(t){Ur===null?Ur=[t]:Ur.push(t)}function G_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dn(t,r)}function Dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dn(t,n)}return i=r.interleaved,i===null?(e.next=e,pf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dn(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zh(t,n)}}function Pg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,l=s;do{var g=l.lane,S=l.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,R=l;switch(g=e,S=n,R.tag){case 1:if(P=R.payload,typeof P=="function"){p=P.call(S,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=R.payload,g=typeof P=="function"?P.call(S,p,g):P,g==null)break e;p=Ee({},p,g);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=S,u=p):h=h.next=S,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=p}}function Rg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ra={},en=Ar(ra),Oo=Ar(ra),Vo=Ar(ra);function zr(t){if(t===ra)throw Error(F(174));return t}function gf(t,e){switch(he(Vo,e),he(Oo,t),he(en,ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kd(e,t)}ge(en),he(en,e)}function es(){ge(en),ge(Oo),ge(Vo)}function Y_(t){zr(Vo.current);var e=zr(en.current),n=kd(e,t.type);e!==n&&(he(Oo,t),he(en,n))}function yf(t){Oo.current===t&&(ge(en),ge(Oo))}var _e=Ar(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function vf(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var ll=Un.ReactCurrentDispatcher,Wc=Un.ReactCurrentBatchConfig,Xr=0,we=null,Oe=null,je=null,Ul=!1,co=!1,Lo=0,IS=0;function Ze(){throw Error(F(321))}function _f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function wf(t,e,n,r,i,s){if(Xr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?AS:CS,t=n(r,i),co){s=0;do{if(co=!1,Lo=0,25<=s)throw Error(F(301));s+=1,je=Oe=null,e.updateQueue=null,ll.current=PS,t=n(r,i)}while(co)}if(ll.current=zl,e=Oe!==null&&Oe.next!==null,Xr=0,je=Oe=we=null,Ul=!1,e)throw Error(F(300));return t}function Ef(){var t=Lo!==0;return Lo=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?we.memoizedState=je=t:je=je.next=t,je}function Mt(){if(Oe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=je===null?we.memoizedState:je.next;if(e!==null)je=e,Oe=t;else{if(t===null)throw Error(F(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},je===null?we.memoizedState=je=t:je=je.next=t}return je}function Mo(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var h=c.lane;if((Xr&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,we.lanes|=h,Zr|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,qt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,Zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function J_(){}function X_(t,e){var n=we,r=Mt(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,Tf(t0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,jo(9,e0.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(F(349));Xr&30||Z_(n,e,i)}return i}function Z_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function e0(t,e,n,r){e.value=n,e.getSnapshot=r,n0(e)&&r0(t)}function t0(t,e,n){return n(function(){n0(e)&&r0(t)})}function n0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function r0(t){var e=Dn(t,1);e!==null&&Wt(e,t,1,-1)}function bg(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},e.queue=t,t=t.dispatch=kS.bind(null,we,t),[e.memoizedState,t]}function jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function i0(){return Mt().memoizedState}function ul(t,e,n,r){var i=Jt();we.flags|=t,i.memoizedState=jo(1|e,n,void 0,r===void 0?null:r)}function Eu(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&_f(r,o.deps)){i.memoizedState=jo(e,n,s,r);return}}we.flags|=t,i.memoizedState=jo(1|e,n,s,r)}function Ng(t,e){return ul(8390656,8,t,e)}function Tf(t,e){return Eu(2048,8,t,e)}function s0(t,e){return Eu(4,2,t,e)}function o0(t,e){return Eu(4,4,t,e)}function a0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function l0(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,a0.bind(null,e,t),n)}function If(){}function u0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function c0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function d0(t,e,n){return Xr&21?(qt(n,e)||(n=g_(),we.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function SS(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=Wc.transition;Wc.transition={};try{t(!1),e()}finally{le=n,Wc.transition=r}}function h0(){return Mt().memoizedState}function xS(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},f0(t))p0(e,n);else if(n=G_(t,e,n,r),n!==null){var i=ht();Wt(n,t,r,i),m0(n,e,r)}}function kS(t,e,n){var r=mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(f0(t))p0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,qt(l,o)){var u=e.interleaved;u===null?(i.next=i,pf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=G_(t,e,i,r),n!==null&&(i=ht(),Wt(n,t,r,i),m0(n,e,r))}}function f0(t){var e=t.alternate;return t===we||e!==null&&e===we}function p0(t,e){co=Ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function m0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zh(t,n)}}var zl={readContext:Lt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},AS={readContext:Lt,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:Ng,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ul(4194308,4,a0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return ul(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xS.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:bg,useDebugValue:If,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=bg(!1),e=t[0];return t=SS.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=Jt();if(ve){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Fe===null)throw Error(F(349));Xr&30||Z_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ng(t0.bind(null,r,s,t),[t]),r.flags|=2048,jo(9,e0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jt(),e=Fe.identifierPrefix;if(ve){var n=Sn,r=In;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CS={readContext:Lt,useCallback:u0,useContext:Lt,useEffect:Tf,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:c0,useReducer:Hc,useRef:i0,useState:function(){return Hc(Mo)},useDebugValue:If,useDeferredValue:function(t){var e=Mt();return d0(e,Oe.memoizedState,t)},useTransition:function(){var t=Hc(Mo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:X_,useId:h0,unstable_isNewReconciler:!1},PS={readContext:Lt,useCallback:u0,useContext:Lt,useEffect:Tf,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:o0,useMemo:c0,useReducer:qc,useRef:i0,useState:function(){return qc(Mo)},useDebugValue:If,useDeferredValue:function(t){var e=Mt();return Oe===null?e.memoizedState=t:d0(e,Oe.memoizedState,t)},useTransition:function(){var t=qc(Mo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:J_,useSyncExternalStore:X_,useId:h0,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=mr(t),s=Pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(Wt(e,t,i,r),al(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=mr(t),s=Pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(Wt(e,t,i,r),al(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=mr(t),i=Pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=fr(t,i,r),e!==null&&(Wt(e,t,r,n),al(e,t,r))}};function Dg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ro(n,r)||!Ro(i,s):!0}function g0(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=_t(e)?Yr:ot.current,r=e.contextTypes,s=(r=r!=null)?Ji(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Og(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function Gd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},mf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=_t(e)?Yr:ot.current,i.context=Ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tu.enqueueReplaceState(i,i.state,null),jl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ts(t,e){try{var n="",r=e;do n+=rI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var RS=typeof WeakMap=="function"?WeakMap:Map;function y0(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bl||(Bl=!0,sh=r),Qd(t,e)},n}function v0(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qd(t,e),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new RS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=WS.bind(null,t,e,n),e.then(t,t))}function Lg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pn(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var bS=Un.ReactCurrentOwner,yt=!1;function ct(t,e,n,r){e.child=t===null?K_(e,null,n,r):Zi(e,t.child,n,r)}function jg(t,e,n,r,i){n=n.render;var s=e.ref;return Bi(e,i),r=wf(t,e,n,r,s,i),n=Ef(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(ve&&n&&lf(e),e.flags|=1,ct(t,e,r,i),e.child)}function Fg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_0(t,e,s,r,i)):(t=fl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(o,r)&&t.ref===e.ref)return On(t,e,i)}return e.flags|=1,t=gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function _0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ro(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,On(t,e,i)}return Yd(t,e,n,r,i)}function w0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ji,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(ji,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(ji,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(ji,Tt),Tt|=r;return ct(t,e,i,n),e.child}function E0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yd(t,e,n,r,i){var s=_t(n)?Yr:ot.current;return s=Ji(e,s),Bi(e,i),n=wf(t,e,n,r,s,i),r=Ef(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(ve&&r&&lf(e),e.flags|=1,ct(t,e,n,i),e.child)}function Ug(t,e,n,r,i){if(_t(n)){var s=!0;Dl(e)}else s=!1;if(Bi(e,i),e.stateNode===null)cl(t,e),g0(e,n,r),Gd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Lt(c):(c=_t(n)?Yr:ot.current,c=Ji(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Og(e,o,r,c),Xn=!1;var g=e.memoizedState;o.state=g,jl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||vt.current||Xn?(typeof h=="function"&&(Kd(e,n,h,r),u=e.memoizedState),(l=Xn||Dg(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Q_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ut(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Lt(u):(u=_t(n)?Yr:ot.current,u=Ji(e,u));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Og(e,o,r,u),Xn=!1,g=e.memoizedState,o.state=g,jl(e,r,o,i);var P=e.memoizedState;l!==p||g!==P||vt.current||Xn?(typeof S=="function"&&(Kd(e,n,S,r),P=e.memoizedState),(c=Xn||Dg(e,n,c,r,g,P,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Jd(t,e,n,r,s,i)}function Jd(t,e,n,r,i,s){E0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xg(e,n,!1),On(t,e,s);r=e.stateNode,bS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zi(e,t.child,null,s),e.child=Zi(e,null,l,s)):ct(t,e,l,s),e.memoizedState=r.state,i&&xg(e,n,!0),e.child}function T0(t){var e=t.stateNode;e.pendingContext?Sg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sg(t,e.context,!1),gf(t,e.containerInfo)}function zg(t,e,n,r,i){return Xi(),cf(i),e.flags|=256,ct(t,e,n,r),e.child}var Xd={dehydrated:null,treeContext:null,retryLane:0};function Zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function I0(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(_e,i&1),t===null)return Hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xu(o,r,0,null),t=Kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zd(n),e.memoizedState=Xd,t):Sf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return NS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=gr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=gr(l,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xd,r}return s=t.child,t=s.sibling,r=gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sf(t,e){return e=xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qa(t,e,n,r){return r!==null&&cf(r),Zi(e,t.child,null,n),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kc(Error(F(422))),qa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xu({mode:"visible",children:r.children},i,0,null),s=Kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zi(e,t.child,null,o),e.child.memoizedState=Zd(o),e.memoizedState=Xd,s);if(!(e.mode&1))return qa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Kc(s,r,void 0),qa(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(t,i),Wt(r,t,i,-1))}return Rf(),r=Kc(Error(F(421))),qa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=hr(i.nextSibling),xt=e,ve=!0,$t=null,t!==null&&(bt[Nt++]=In,bt[Nt++]=Sn,bt[Nt++]=Jr,In=t.id,Sn=t.overflow,Jr=e),e=Sf(e,r.children),e.flags|=4096,e)}function $g(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qd(t.return,e,n)}function Gc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function S0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$g(t,n,e);else if(t.tag===19)$g(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gc(e,!0,n,null,s);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DS(t,e,n){switch(e.tag){case 3:T0(e),Xi();break;case 5:Y_(e);break;case 1:_t(e.type)&&Dl(e);break;case 4:gf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(Ll,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?I0(t,e,n):(he(_e,_e.current&1),t=On(t,e,n),t!==null?t.sibling:null);he(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return S0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,w0(t,e,n)}return On(t,e,n)}var x0,eh,k0,A0;x0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eh=function(){};k0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zr(en.current);var s=null;switch(n){case"input":i=Td(t,i),r=Td(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=xd(t,i),r=xd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bl)}Ad(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Io.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};A0=function(t,e,n,r){n!==r&&(e.flags|=4)};function qs(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function OS(t,e,n){var r=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return _t(e.type)&&Nl(),et(e),null;case 3:return r=e.stateNode,es(),ge(vt),ge(ot),vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(lh($t),$t=null))),eh(t,e),et(e),null;case 5:yf(e);var i=zr(Vo.current);if(n=e.type,t!==null&&e.stateNode!=null)k0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return et(e),null}if(t=zr(en.current),Wa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[Do]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)me(eo[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Jm(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Zm(r,s),me("invalid",r)}Ad(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,l,t),i=["children",""+l]):Io.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Va(r),Xm(r,s,!0);break;case"textarea":Va(r),eg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[Do]=r,x0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cd(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)me(eo[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Jm(t,r),i=Td(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",t);break;case"textarea":Zm(t,r),i=xd(t,r),me("invalid",t);break;default:i=r}Ad(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?i_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&n_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&So(t,u):typeof u=="number"&&So(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Kh(t,s,u,o))}switch(n){case"input":Va(t),Xm(t,r,!1);break;case"textarea":Va(t),eg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)A0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=zr(Vo.current),zr(en.current),Wa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:Ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return et(e),null;case 13:if(ge(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&It!==null&&e.mode&1&&!(e.flags&128))H_(),Xi(),e.flags|=98560,s=!1;else if(s=Wa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Xt]=e}else Xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else $t!==null&&(lh($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Le===0&&(Le=3):Rf())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return es(),eh(t,e),t===null&&bo(e.stateNode.containerInfo),et(e),null;case 10:return ff(e.type._context),et(e),null;case 17:return _t(e.type)&&Nl(),et(e),null;case 19:if(ge(_e),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fl(t),o!==null){for(e.flags|=128,qs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>ns&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return et(e),null}else 2*Pe()-s.renderingStartTime>ns&&n!==1073741824&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=_e.current,he(_e,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function VS(t,e){switch(uf(e),e.tag){case 1:return _t(e.type)&&Nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return es(),ge(vt),ge(ot),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yf(e),null;case 13:if(ge(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(_e),null;case 4:return es(),null;case 10:return ff(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var Ka=!1,rt=!1,LS=typeof WeakSet=="function"?WeakSet:Set,B=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function th(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Bg=!1;function MS(t,e){if(jd=Cl,t=N_(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,h=0,p=t,g=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)g=p,p=S;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++h===r&&(u=o),(S=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fd={focusedElem:t,selectionRange:n},Cl=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var R=P.memoizedProps,b=P.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?R:Ut(e.type,R),b);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){xe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return P=Bg,Bg=!1,P}function ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&th(e,n,s)}i=i.next}while(i!==r)}}function Iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function C0(t){var e=t.alternate;e!==null&&(t.alternate=null,C0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[Do],delete e[$d],delete e[_S],delete e[wS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function P0(t){return t.tag===5||t.tag===3||t.tag===4}function Wg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bl));else if(r!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}function ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}var Be=null,zt=!1;function qn(t,e,n){for(n=n.child;n!==null;)R0(t,e,n),n=n.sibling}function R0(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(mu,n)}catch{}switch(n.tag){case 5:rt||Mi(n,e);case 6:var r=Be,i=zt;Be=null,qn(t,e,n),Be=r,zt=i,Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?zc(t.parentNode,n):t.nodeType===1&&zc(t,n),Co(t)):zc(Be,n.stateNode));break;case 4:r=Be,i=zt,Be=n.stateNode.containerInfo,zt=!0,qn(t,e,n),Be=r,zt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&th(n,e,o),i=i.next}while(i!==r)}qn(t,e,n);break;case 1:if(!rt&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,qn(t,e,n),rt=r):qn(t,e,n);break;default:qn(t,e,n)}}function Hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LS),e.forEach(function(r){var i=qS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,zt=!1;break e;case 3:Be=l.stateNode.containerInfo,zt=!0;break e;case 4:Be=l.stateNode.containerInfo,zt=!0;break e}l=l.return}if(Be===null)throw Error(F(160));R0(s,o,i),Be=null,zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b0(e,t),e=e.sibling}function b0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Yt(t),r&4){try{ho(3,t,t.return),Iu(3,t)}catch(R){xe(t,t.return,R)}try{ho(5,t,t.return)}catch(R){xe(t,t.return,R)}}break;case 1:Ft(e,t),Yt(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Ft(e,t),Yt(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{So(i,"")}catch(R){xe(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Zv(i,s),Cd(l,o);var c=Cd(l,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?i_(i,p):h==="dangerouslySetInnerHTML"?n_(i,p):h==="children"?So(i,p):Kh(i,h,p,c)}switch(l){case"input":Id(i,s);break;case"textarea":e_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Fi(i,!!s.multiple,S,!1):g!==!!s.multiple&&(s.defaultValue!=null?Fi(i,!!s.multiple,s.defaultValue,!0):Fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Do]=s}catch(R){xe(t,t.return,R)}}break;case 6:if(Ft(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){xe(t,t.return,R)}}break;case 3:if(Ft(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(e.containerInfo)}catch(R){xe(t,t.return,R)}break;case 4:Ft(e,t),Yt(t);break;case 13:Ft(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Af=Pe())),r&4&&Hg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(c=rt)||h,Ft(e,t),rt=c):Ft(e,t),Yt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(B=t,h=t.child;h!==null;){for(p=B=h;B!==null;){switch(g=B,S=g.child,g.tag){case 0:case 11:case 14:case 15:ho(4,g,g.return);break;case 1:Mi(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(R){xe(r,n,R)}}break;case 5:Mi(g,g.return);break;case 22:if(g.memoizedState!==null){Kg(p);continue}}S!==null?(S.return=g,B=S):Kg(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=r_("display",o))}catch(R){xe(t,t.return,R)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(R){xe(t,t.return,R)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ft(e,t),Yt(t),r&4&&Hg(t);break;case 21:break;default:Ft(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(P0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(So(i,""),r.flags&=-33);var s=Wg(t);ih(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Wg(t);rh(t,l,o);break;default:throw Error(F(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jS(t,e,n){B=t,N0(t)}function N0(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ka;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rt;l=Ka;var c=rt;if(Ka=o,(rt=u)&&!c)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?Gg(i):u!==null?(u.return=o,B=u):Gg(i);for(;s!==null;)B=s,N0(s),s=s.sibling;B=i,Ka=l,rt=c}qg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):qg(t)}}function qg(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||Iu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Co(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}rt||e.flags&512&&nh(e)}catch(g){xe(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Kg(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Gg(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Iu(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{nh(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{nh(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var FS=Math.ceil,$l=Un.ReactCurrentDispatcher,xf=Un.ReactCurrentOwner,Ot=Un.ReactCurrentBatchConfig,se=0,Fe=null,Ne=null,qe=0,Tt=0,ji=Ar(0),Le=0,Fo=null,Zr=0,Su=0,kf=0,fo=null,mt=null,Af=0,ns=1/0,_n=null,Bl=!1,sh=null,pr=null,Ga=!1,or=null,Wl=0,po=0,oh=null,dl=-1,hl=0;function ht(){return se&6?Pe():dl!==-1?dl:dl=Pe()}function mr(t){return t.mode&1?se&2&&qe!==0?qe&-qe:TS.transition!==null?(hl===0&&(hl=g_()),hl):(t=le,t!==0||(t=window.event,t=t===void 0?16:I_(t.type)),t):1}function Wt(t,e,n,r){if(50<po)throw po=0,oh=null,Error(F(185));ea(t,n,r),(!(se&2)||t!==Fe)&&(t===Fe&&(!(se&2)&&(Su|=n),Le===4&&er(t,qe)),wt(t,r),n===1&&se===0&&!(e.mode&1)&&(ns=Pe()+500,wu&&Cr()))}function wt(t,e){var n=t.callbackNode;TI(t,e);var r=Al(t,t===Fe?qe:0);if(r===0)n!==null&&rg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rg(n),e===1)t.tag===0?ES(Qg.bind(null,t)):$_(Qg.bind(null,t)),yS(function(){!(se&6)&&Cr()}),n=null;else{switch(y_(r)){case 1:n=Xh;break;case 4:n=p_;break;case 16:n=kl;break;case 536870912:n=m_;break;default:n=kl}n=U0(n,D0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function D0(t,e){if(dl=-1,hl=0,se&6)throw Error(F(327));var n=t.callbackNode;if(Wi()&&t.callbackNode!==n)return null;var r=Al(t,t===Fe?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hl(t,r);else{e=r;var i=se;se|=2;var s=V0();(Fe!==t||qe!==e)&&(_n=null,ns=Pe()+500,qr(t,e));do try{$S();break}catch(l){O0(t,l)}while(!0);hf(),$l.current=s,se=i,Ne!==null?e=0:(Fe=null,qe=0,e=Le)}if(e!==0){if(e===2&&(i=Dd(t),i!==0&&(r=i,e=ah(t,i))),e===1)throw n=Fo,qr(t,0),er(t,r),wt(t,Pe()),n;if(e===6)er(t,r);else{if(i=t.current.alternate,!(r&30)&&!US(i)&&(e=Hl(t,r),e===2&&(s=Dd(t),s!==0&&(r=s,e=ah(t,s))),e===1))throw n=Fo,qr(t,0),er(t,r),wt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Mr(t,mt,_n);break;case 3:if(er(t,r),(r&130023424)===r&&(e=Af+500-Pe(),10<e)){if(Al(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zd(Mr.bind(null,t,mt,_n),e);break}Mr(t,mt,_n);break;case 4:if(er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FS(r/1960))-r,10<r){t.timeoutHandle=zd(Mr.bind(null,t,mt,_n),r);break}Mr(t,mt,_n);break;case 5:Mr(t,mt,_n);break;default:throw Error(F(329))}}}return wt(t,Pe()),t.callbackNode===n?D0.bind(null,t):null}function ah(t,e){var n=fo;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=Hl(t,e),t!==2&&(e=mt,mt=n,e!==null&&lh(e)),t}function lh(t){mt===null?mt=t:mt.push.apply(mt,t)}function US(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~kf,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function Qg(t){if(se&6)throw Error(F(327));Wi();var e=Al(t,0);if(!(e&1))return wt(t,Pe()),null;var n=Hl(t,e);if(t.tag!==0&&n===2){var r=Dd(t);r!==0&&(e=r,n=ah(t,r))}if(n===1)throw n=Fo,qr(t,0),er(t,e),wt(t,Pe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,mt,_n),wt(t,Pe()),null}function Cf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(ns=Pe()+500,wu&&Cr())}}function ei(t){or!==null&&or.tag===0&&!(se&6)&&Wi();var e=se;se|=1;var n=Ot.transition,r=le;try{if(Ot.transition=null,le=1,t)return t()}finally{le=r,Ot.transition=n,se=e,!(se&6)&&Cr()}}function Pf(){Tt=ji.current,ge(ji)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gS(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nl();break;case 3:es(),ge(vt),ge(ot),vf();break;case 5:yf(r);break;case 4:es();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:ff(r.type._context);break;case 22:case 23:Pf()}n=n.return}if(Fe=t,Ne=t=gr(t.current,null),qe=Tt=e,Le=0,Fo=null,kf=Su=Zr=0,mt=fo=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ur=null}return t}function O0(t,e){do{var n=Ne;try{if(hf(),ll.current=zl,Ul){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ul=!1}if(Xr=0,je=Oe=we=null,co=!1,Lo=0,xf.current=null,n===null||n.return===null){Le=1,Fo=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=Lg(o);if(S!==null){S.flags&=-257,Mg(S,o,l,s,e),S.mode&1&&Vg(s,c,e),e=S,u=c;var P=e.updateQueue;if(P===null){var R=new Set;R.add(u),e.updateQueue=R}else P.add(u);break e}else{if(!(e&1)){Vg(s,c,e),Rf();break e}u=Error(F(426))}}else if(ve&&l.mode&1){var b=Lg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Mg(b,o,l,s,e),cf(ts(u,l));break e}}s=u=ts(u,l),Le!==4&&(Le=2),fo===null?fo=[s]:fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=y0(s,u,e);Pg(s,w);break e;case 1:l=u;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(pr===null||!pr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=v0(s,l,e);Pg(s,O);break e}}s=s.return}while(s!==null)}M0(n)}catch(M){e=M,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function V0(){var t=$l.current;return $l.current=zl,t===null?zl:t}function Rf(){(Le===0||Le===3||Le===2)&&(Le=4),Fe===null||!(Zr&268435455)&&!(Su&268435455)||er(Fe,qe)}function Hl(t,e){var n=se;se|=2;var r=V0();(Fe!==t||qe!==e)&&(_n=null,qr(t,e));do try{zS();break}catch(i){O0(t,i)}while(!0);if(hf(),se=n,$l.current=r,Ne!==null)throw Error(F(261));return Fe=null,qe=0,Le}function zS(){for(;Ne!==null;)L0(Ne)}function $S(){for(;Ne!==null&&!fI();)L0(Ne)}function L0(t){var e=F0(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?M0(t):Ne=e,xf.current=null}function M0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=VS(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ne=null;return}}else if(n=OS(n,e,Tt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Le===0&&(Le=5)}function Mr(t,e,n){var r=le,i=Ot.transition;try{Ot.transition=null,le=1,BS(t,e,n,r)}finally{Ot.transition=i,le=r}return null}function BS(t,e,n,r){do Wi();while(or!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(II(t,s),t===Fe&&(Ne=Fe=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ga||(Ga=!0,U0(kl,function(){return Wi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var o=le;le=1;var l=se;se|=4,xf.current=null,MS(t,n),b0(n,t),uS(Fd),Cl=!!jd,Fd=jd=null,t.current=n,jS(n),pI(),se=l,le=o,Ot.transition=s}else t.current=n;if(Ga&&(Ga=!1,or=t,Wl=i),s=t.pendingLanes,s===0&&(pr=null),yI(n.stateNode),wt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bl)throw Bl=!1,t=sh,sh=null,t;return Wl&1&&t.tag!==0&&Wi(),s=t.pendingLanes,s&1?t===oh?po++:(po=0,oh=t):po=0,Cr(),null}function Wi(){if(or!==null){var t=y_(Wl),e=Ot.transition,n=le;try{if(Ot.transition=null,le=16>t?16:t,or===null)var r=!1;else{if(t=or,or=null,Wl=0,se&6)throw Error(F(331));var i=se;for(se|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(B=c;B!==null;){var h=B;switch(h.tag){case 0:case 11:case 15:ho(8,h,s)}var p=h.child;if(p!==null)p.return=h,B=p;else for(;B!==null;){h=B;var g=h.sibling,S=h.return;if(C0(h),h===c){B=null;break}if(g!==null){g.return=S,B=g;break}B=S}}}var P=s.alternate;if(P!==null){var R=P.child;if(R!==null){P.child=null;do{var b=R.sibling;R.sibling=null,R=b}while(R!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ho(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,B=w;break e}B=s.return}}var _=t.current;for(B=_;B!==null;){o=B;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,B=x;else e:for(o=_;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Iu(9,l)}}catch(M){xe(l,l.return,M)}if(l===o){B=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,B=O;break e}B=l.return}}if(se=i,Cr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(mu,t)}catch{}r=!0}return r}finally{le=n,Ot.transition=e}}return!1}function Yg(t,e,n){e=ts(n,e),e=y0(t,e,1),t=fr(t,e,1),e=ht(),t!==null&&(ea(t,1,e),wt(t,e))}function xe(t,e,n){if(t.tag===3)Yg(t,t,n);else for(;e!==null;){if(e.tag===3){Yg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){t=ts(n,t),t=v0(e,t,1),e=fr(e,t,1),t=ht(),e!==null&&(ea(e,1,t),wt(e,t));break}}e=e.return}}function WS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(qe&n)===n&&(Le===4||Le===3&&(qe&130023424)===qe&&500>Pe()-Af?qr(t,0):kf|=n),wt(t,e)}function j0(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=ht();t=Dn(t,e),t!==null&&(ea(t,e,n),wt(t,n))}function HS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),j0(t,n)}function qS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),j0(t,n)}var F0;F0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,DS(t,e,n);yt=!!(t.flags&131072)}else yt=!1,ve&&e.flags&1048576&&B_(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;cl(t,e),t=e.pendingProps;var i=Ji(e,ot.current);Bi(e,n),i=wf(null,e,r,t,i,n);var s=Ef();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,Dl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mf(e),i.updater=Tu,e.stateNode=i,i._reactInternals=e,Gd(e,r,t,n),e=Jd(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&lf(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GS(r),t=Ut(r,t),i){case 0:e=Yd(null,e,r,t,n);break e;case 1:e=Ug(null,e,r,t,n);break e;case 11:e=jg(null,e,r,t,n);break e;case 14:e=Fg(null,e,r,Ut(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Yd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Ug(t,e,r,i,n);case 3:e:{if(T0(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Q_(t,e),jl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ts(Error(F(423)),e),e=zg(t,e,r,n,i);break e}else if(r!==i){i=ts(Error(F(424)),e),e=zg(t,e,r,n,i);break e}else for(It=hr(e.stateNode.containerInfo.firstChild),xt=e,ve=!0,$t=null,n=K_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xi(),r===i){e=On(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return Y_(e),t===null&&Hd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ud(r,i)?o=null:s!==null&&Ud(r,s)&&(e.flags|=32),E0(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Hd(e),null;case 13:return I0(t,e,n);case 4:return gf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zi(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),jg(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(Ll,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!vt.current){e=On(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Pn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),qd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bi(e,n),i=Lt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),Fg(t,e,r,i,n);case 15:return _0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),cl(t,e),e.tag=1,_t(r)?(t=!0,Dl(e)):t=!1,Bi(e,n),g0(e,r,i),Gd(e,r,i,n),Jd(null,e,r,!0,t,n);case 19:return S0(t,e,n);case 22:return w0(t,e,n)}throw Error(F(156,e.tag))};function U0(t,e){return f_(t,e)}function KS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new KS(t,e,n,r)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GS(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qh)return 11;if(t===Yh)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ci:return Kr(n.children,i,s,e);case Gh:o=8,i|=8;break;case vd:return t=Dt(12,n,e,i|2),t.elementType=vd,t.lanes=s,t;case _d:return t=Dt(13,n,e,i),t.elementType=_d,t.lanes=s,t;case wd:return t=Dt(19,n,e,i),t.elementType=wd,t.lanes=s,t;case Yv:return xu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gv:o=10;break e;case Qv:o=9;break e;case Qh:o=11;break e;case Yh:o=14;break e;case Jn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kr(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function xu(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=Yv,t.lanes=n,t.stateNode={isHidden:!1},t}function Qc(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function Yc(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rc(0),this.expirationTimes=Rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,r,i,s,o,l,u){return t=new QS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(s),t}function YS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ai,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function z0(t){if(!t)return Er;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(_t(n))return z_(t,n,e)}return e}function $0(t,e,n,r,i,s,o,l,u){return t=Nf(n,r,!0,t,i,s,o,l,u),t.context=z0(null),n=t.current,r=ht(),i=mr(n),s=Pn(r,i),s.callback=e??null,fr(n,s,i),t.current.lanes=i,ea(t,i,r),wt(t,r),t}function ku(t,e,n,r){var i=e.current,s=ht(),o=mr(i);return n=z0(n),e.context===null?e.context=n:e.pendingContext=n,e=Pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fr(i,e,o),t!==null&&(Wt(t,i,o,s),al(t,i,o)),o}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){Jg(t,e),(t=t.alternate)&&Jg(t,e)}function JS(){return null}var B0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}Au.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));ku(t,e,null,null)};Au.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ei(function(){ku(null,t,null,null)}),e[Nn]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=w_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zn.length&&e!==0&&e<Zn[n].priority;n++);Zn.splice(n,0,t),n===0&&T_(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xg(){}function XS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ql(o);s.call(c)}}var o=$0(e,r,t,0,null,!1,!1,"",Xg);return t._reactRootContainer=o,t[Nn]=o.current,bo(t.nodeType===8?t.parentNode:t),ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ql(u);l.call(c)}}var u=Nf(t,0,!1,null,null,!1,!1,"",Xg);return t._reactRootContainer=u,t[Nn]=u.current,bo(t.nodeType===8?t.parentNode:t),ei(function(){ku(e,u,n,r)}),u}function Pu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ql(o);l.call(u)}}ku(e,o,t,i)}else o=XS(n,e,t,i,r);return ql(o)}v_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(Zh(e,n|1),wt(e,Pe()),!(se&6)&&(ns=Pe()+500,Cr()))}break;case 13:ei(function(){var r=Dn(t,1);if(r!==null){var i=ht();Wt(r,t,1,i)}}),Df(t,1)}};ef=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var n=ht();Wt(e,t,134217728,n)}Df(t,134217728)}};__=function(t){if(t.tag===13){var e=mr(t),n=Dn(t,e);if(n!==null){var r=ht();Wt(n,t,e,r)}Df(t,e)}};w_=function(){return le};E_=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Rd=function(t,e,n){switch(e){case"input":if(Id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_u(r);if(!i)throw Error(F(90));Xv(r),Id(r,i)}}}break;case"textarea":e_(t,n);break;case"select":e=n.value,e!=null&&Fi(t,!!n.multiple,e,!1)}};a_=Cf;l_=ei;var ZS={usingClientEntryPoint:!1,Events:[na,Ni,_u,s_,o_,Cf]},Ks={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ex={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=d_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||JS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{mu=Qa.inject(ex),Zt=Qa}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(F(200));return YS(t,e,null,n)};Ct.createRoot=function(t,e){if(!Vf(t))throw Error(F(299));var n=!1,r="",i=B0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,bo(t.nodeType===8?t.parentNode:t),new Of(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=d_(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return ei(t)};Ct.hydrate=function(t,e,n){if(!Cu(e))throw Error(F(200));return Pu(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=B0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$0(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Au(e)};Ct.render=function(t,e,n){if(!Cu(e))throw Error(F(200));return Pu(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!Cu(t))throw Error(F(40));return t._reactRootContainer?(ei(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Cf;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Pu(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function W0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W0)}catch(t){console.error(t)}}W0(),Wv.exports=Ct;var tx=Wv.exports,H0,Zg=tx;H0=Zg.createRoot,Zg.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uo.apply(this,arguments)}var ar;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ar||(ar={}));const ey="popstate";function nx(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=ci(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),uh("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:Kl(s))}function r(i,s){Lf(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return ix(e,n,r,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Lf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rx(){return Math.random().toString(36).substr(2,8)}function ty(t,e){return{usr:t.state,key:t.key,idx:e}}function uh(t,e,n,r){return n===void 0&&(n=null),Uo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ci(e):e,{state:n,key:e&&e.key||r||rx()})}function Kl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ci(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ix(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ar.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Uo({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){l=ar.Pop;let b=h(),w=b==null?null:b-c;c=b,u&&u({action:l,location:R.location,delta:w})}function g(b,w){l=ar.Push;let _=uh(R.location,b,w);n&&n(_,b),c=h()+1;let x=ty(_,c),O=R.createHref(_);try{o.pushState(x,"",O)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(O)}s&&u&&u({action:l,location:R.location,delta:1})}function S(b,w){l=ar.Replace;let _=uh(R.location,b,w);n&&n(_,b),c=h();let x=ty(_,c),O=R.createHref(_);o.replaceState(x,"",O),s&&u&&u({action:l,location:R.location,delta:0})}function P(b){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof b=="string"?b:Kl(b);return _=_.replace(/ $/,"%20"),Re(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let R={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ey,p),u=b,()=>{i.removeEventListener(ey,p),u=null}},createHref(b){return e(i,b)},createURL:P,encodeLocation(b){let w=P(b);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:S,go(b){return o.go(b)}};return R}var ny;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ny||(ny={}));function sx(t,e,n){return n===void 0&&(n="/"),ox(t,e,n,!1)}function ox(t,e,n,r){let i=typeof e=="string"?ci(e):e,s=Mf(i.pathname||"/",n);if(s==null)return null;let o=q0(t);ax(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=vx(s);l=gx(o[u],c,r)}return l}function q0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=yr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),q0(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:px(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of K0(s.path))i(s,o,u)}),e}function K0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=K0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function ax(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lx=/^:[\w-]+$/,ux=3,cx=2,dx=1,hx=10,fx=-2,ry=t=>t==="*";function px(t,e){let n=t.split("/"),r=n.length;return n.some(ry)&&(r+=fx),e&&(r+=cx),n.filter(i=>!ry(i)).reduce((i,s)=>i+(lx.test(s)?ux:s===""?dx:hx),r)}function mx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function gx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=iy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=iy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:yr([s,p.pathname]),pathnameBase:Tx(yr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=yr([s,p.pathnameBase]))}return o}function iy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=yx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:g,isOptional:S}=h;if(g==="*"){let R=l[p]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const P=l[p];return S&&!P?c[g]=void 0:c[g]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function yx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Lf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Lf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Mf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function _x(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ci(t):t;return{pathname:n?n.startsWith("/")?n:wx(n,e):e,search:Ix(r),hash:Sx(i)}}function wx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ex(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jf(t,e){let n=Ex(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ff(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ci(t):(i=Uo({},t),Re(!i.pathname||!i.pathname.includes("?"),Jc("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Jc("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Jc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=_x(i,l),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const yr=t=>t.join("/").replace(/\/\/+/g,"/"),Tx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ix=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Sx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const G0=["post","put","patch","delete"];new Set(G0);const kx=["get",...G0];new Set(kx);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zo.apply(this,arguments)}const Uf=D.createContext(null),Ax=D.createContext(null),Pr=D.createContext(null),Ru=D.createContext(null),zn=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Q0=D.createContext(null);function Cx(t,e){let{relative:n}=e===void 0?{}:e;ys()||Re(!1);let{basename:r,navigator:i}=D.useContext(Pr),{hash:s,pathname:o,search:l}=J0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:yr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ys(){return D.useContext(Ru)!=null}function di(){return ys()||Re(!1),D.useContext(Ru).location}function Y0(t){D.useContext(Pr).static||D.useLayoutEffect(t)}function hi(){let{isDataRoute:t}=D.useContext(zn);return t?Bx():Px()}function Px(){ys()||Re(!1);let t=D.useContext(Uf),{basename:e,future:n,navigator:r}=D.useContext(Pr),{matches:i}=D.useContext(zn),{pathname:s}=di(),o=JSON.stringify(jf(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return Y0(()=>{l.current=!0}),D.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Ff(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:yr([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}const Rx=D.createContext(null);function bx(t){let e=D.useContext(zn).outlet;return e&&D.createElement(Rx.Provider,{value:t},e)}function J0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(Pr),{matches:i}=D.useContext(zn),{pathname:s}=di(),o=JSON.stringify(jf(i,r.v7_relativeSplatPath));return D.useMemo(()=>Ff(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Nx(t,e){return Dx(t,e)}function Dx(t,e,n,r){ys()||Re(!1);let{navigator:i,static:s}=D.useContext(Pr),{matches:o}=D.useContext(zn),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let h=di(),p;if(e){var g;let w=typeof e=="string"?ci(e):e;c==="/"||(g=w.pathname)!=null&&g.startsWith(c)||Re(!1),p=w}else p=h;let S=p.pathname||"/",P=S;if(c!=="/"){let w=c.replace(/^\//,"").split("/");P="/"+S.replace(/^\//,"").split("/").slice(w.length).join("/")}let R=!s&&n&&n.matches&&n.matches.length>0?n.matches:sx(t,{pathname:P}),b=jx(R&&R.map(w=>Object.assign({},w,{params:Object.assign({},u,w.params),pathname:yr([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:yr([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return e&&b?D.createElement(Ru.Provider,{value:{location:zo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:ar.Pop}},b):b}function Ox(){let t=$x(),e=xx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const Vx=D.createElement(Ox,null);class Lx extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(zn.Provider,{value:this.props.routeContext},D.createElement(Q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mx(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(Uf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(zn.Provider,{value:e},r)}function jx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);h>=0||Re(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:g,errors:S}=n,P=p.route.loader&&g[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,g)=>{let S,P=!1,R=null,b=null;n&&(S=l&&p.route.id?l[p.route.id]:void 0,R=p.route.errorElement||Vx,u&&(c<0&&g===0?(P=!0,b=null):c===g&&(P=!0,b=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),_=()=>{let x;return S?x=R:P?x=b:p.route.Component?x=D.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=h,D.createElement(Mx,{match:p,routeContext:{outlet:h,matches:w,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?D.createElement(Lx,{location:n.location,revalidation:n.revalidation,component:R,error:S,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var X0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(X0||{}),Gl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Gl||{});function Fx(t){let e=D.useContext(Uf);return e||Re(!1),e}function Ux(t){let e=D.useContext(Ax);return e||Re(!1),e}function zx(t){let e=D.useContext(zn);return e||Re(!1),e}function Z0(t){let e=zx(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function $x(){var t;let e=D.useContext(Q0),n=Ux(Gl.UseRouteError),r=Z0(Gl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Bx(){let{router:t}=Fx(X0.UseNavigateStable),e=Z0(Gl.UseNavigateStable),n=D.useRef(!1);return Y0(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,zo({fromRouteId:e},s)))},[t,e])}function Wx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function sy(t){let{to:e,replace:n,state:r,relative:i}=t;ys()||Re(!1);let{future:s,static:o}=D.useContext(Pr),{matches:l}=D.useContext(zn),{pathname:u}=di(),c=hi(),h=Ff(e,jf(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(h);return D.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Hx(t){return bx(t.context)}function Yn(t){Re(!1)}function qx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:s,static:o=!1,future:l}=t;ys()&&Re(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:zo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ci(r));let{pathname:h="/",search:p="",hash:g="",state:S=null,key:P="default"}=r,R=D.useMemo(()=>{let b=Mf(h,u);return b==null?null:{location:{pathname:b,search:p,hash:g,state:S,key:P},navigationType:i}},[u,h,p,g,S,P,i]);return R==null?null:D.createElement(Pr.Provider,{value:c},D.createElement(Ru.Provider,{children:n,value:R}))}function Kx(t){let{children:e,location:n}=t;return Nx(ch(e),n)}new Promise(()=>{});function ch(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,ch(r.props.children,s));return}r.type!==Yn&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ch(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dh(){return dh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dh.apply(this,arguments)}function Gx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Qx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Yx(t,e){return t.button===0&&(!e||e==="_self")&&!Qx(t)}const Jx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Xx="6";try{window.__reactRouterVersion=Xx}catch{}const Zx="startTransition",oy=WT[Zx];function ek(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=nx({window:i,v5Compat:!0}));let o=s.current,[l,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=D.useCallback(p=>{c&&oy?oy(()=>u(p)):u(p)},[u,c]);return D.useLayoutEffect(()=>o.listen(h),[o,h]),D.useEffect(()=>Wx(r),[r]),D.createElement(qx,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const tk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$o=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:h,viewTransition:p}=e,g=Gx(e,Jx),{basename:S}=D.useContext(Pr),P,R=!1;if(typeof c=="string"&&nk.test(c)&&(P=c,tk))try{let x=new URL(window.location.href),O=c.startsWith("//")?new URL(x.protocol+c):new URL(c),M=Mf(O.pathname,S);O.origin===x.origin&&M!=null?c=M+O.search+O.hash:R=!0}catch{}let b=Cx(c,{relative:i}),w=rk(c,{replace:o,state:l,target:u,preventScrollReset:h,relative:i,viewTransition:p});function _(x){r&&r(x),x.defaultPrevented||w(x)}return D.createElement("a",dh({},g,{href:P||b,onClick:R||s?r:_,ref:n,target:u}))});var ay;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ay||(ay={}));var ly;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ly||(ly={}));function rk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=hi(),c=di(),h=J0(t,{relative:o});return D.useCallback(p=>{if(Yx(p,n)){p.preventDefault();let g=r!==void 0?r:Kl(c)===Kl(h);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,h,r,i,n,t,s,o,l])}var uy={VITE_FIREBASE_API_KEY:"AIzaSyC4ym5LmDVI_hnMz258y7msAonpjbGNk8M",VITE_FIREBASE_AUTH_DOMAIN:"dashboardmanager-94a43.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"dashboardmanager-94a43",VITE_FIREBASE_STORAGE_BUCKET:"dashboardmanager-94a43.firebasestorage.app",VITE_FIREBASE_MESSAGING_SENDER_ID:"778251849654",VITE_FIREBASE_APP_ID:"1:778251849654:web:9cb047e533243e1b04fb17",VITE_RAZORPAY_KEY_ID:"rzp_test_JcBtfjmbk2t9TS",VITE_FIREBASE_VAPID_KEY:"BK9QLdUsyznLTk6N9zcMhje0m88yWVeGgvbF7Ef7AkuBqqZ-pbv1iDD6QUIvuvCmBI_VMtK0eW4AOWWVlvij_Bw"};/**
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
 */const ew=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ik=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(g=64)),r.push(n[h],n[p],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ew(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ik(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new sk;const g=s<<2|l>>4;if(r.push(g),c!==64){const S=l<<4&240|c>>2;if(r.push(S),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ok=function(t){const e=ew(t);return tw.encodeByteArray(e,!0)},Ql=function(t){return ok(t).replace(/\./g,"")},nw=function(t){try{return tw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ak(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lk=()=>ak().__FIREBASE_DEFAULTS__,uk=()=>{if(typeof process>"u"||typeof uy>"u")return;const t=uy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ck=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nw(t[1]);return e&&JSON.parse(e)},bu=()=>{try{return lk()||uk()||ck()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rw=t=>{var e,n;return(n=(e=bu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dk=t=>{const e=rw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iw=()=>{var t;return(t=bu())===null||t===void 0?void 0:t.config},sw=t=>{var e;return(e=bu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ql(JSON.stringify(n)),Ql(JSON.stringify(o)),""].join(".")}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function mk(){var t;const e=(t=bu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _k(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wk(){return!mk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ow(){try{return typeof indexedDB=="object"}catch{return!1}}function aw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Ek(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Tk="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Tk,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ik(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cn(i,l,r)}}function Ik(t,e){return t.replace(Sk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sk=/\{\$([^}]+)}/g;function xk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cy(s)&&cy(o)){if(!rs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cy(t){return t!==null&&typeof t=="object"}/**
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
 */function ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kk(t,e){const n=new Ak(t,e);return n.subscribe.bind(n)}class Ak{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ck(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xc),i.error===void 0&&(i.error=Xc),i.complete===void 0&&(i.complete=Xc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ck(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xc(){}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jr="[DEFAULT]";/**
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
 */class Pk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bk(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rk(t){return t===jr?void 0:t}function bk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Nk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Dk={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Ok=ne.INFO,Vk={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Lk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Vk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zf{constructor(e){this.name=e,this._logLevel=Ok,this._logHandler=Lk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Mk=(t,e)=>e.some(n=>t instanceof n);let dy,hy;function jk(){return dy||(dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fk(){return hy||(hy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lw=new WeakMap,hh=new WeakMap,uw=new WeakMap,Zc=new WeakMap,$f=new WeakMap;function Uk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lw.set(n,t)}).catch(()=>{}),$f.set(e,t),e}function zk(t){if(hh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $k(t){fh=t(fh)}function Bk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ed(this),e,...n);return uw.set(r,e.sort?e.sort():[e]),Rn(r)}:Fk().includes(t)?function(...e){return t.apply(ed(this),e),Rn(lw.get(this))}:function(...e){return Rn(t.apply(ed(this),e))}}function Wk(t){return typeof t=="function"?Bk(t):(t instanceof IDBTransaction&&zk(t),Mk(t,jk())?new Proxy(t,fh):t)}function Rn(t){if(t instanceof IDBRequest)return Uk(t);if(Zc.has(t))return Zc.get(t);const e=Wk(t);return e!==t&&(Zc.set(t,e),$f.set(e,t)),e}const ed=t=>$f.get(t);function Nu(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Rn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Rn(o.result),u.oldVersion,u.newVersion,Rn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function td(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Rn(n).then(()=>{})}const Hk=["get","getKey","getAll","getAllKeys","count"],qk=["put","add","delete","clear"],nd=new Map;function fy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nd.get(e))return nd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return nd.set(e,s),s}$k(t=>({...t,get:(e,n,r)=>fy(e,n)||t.get(e,n,r),has:(e,n)=>!!fy(e,n)||t.has(e,n)}));/**
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
 */class Kk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ph="@firebase/app",py="0.10.13";/**
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
 */const Vn=new zf("@firebase/app"),Qk="@firebase/app-compat",Yk="@firebase/analytics-compat",Jk="@firebase/analytics",Xk="@firebase/app-check-compat",Zk="@firebase/app-check",eA="@firebase/auth",tA="@firebase/auth-compat",nA="@firebase/database",rA="@firebase/data-connect",iA="@firebase/database-compat",sA="@firebase/functions",oA="@firebase/functions-compat",aA="@firebase/installations",lA="@firebase/installations-compat",uA="@firebase/messaging",cA="@firebase/messaging-compat",dA="@firebase/performance",hA="@firebase/performance-compat",fA="@firebase/remote-config",pA="@firebase/remote-config-compat",mA="@firebase/storage",gA="@firebase/storage-compat",yA="@firebase/firestore",vA="@firebase/vertexai-preview",_A="@firebase/firestore-compat",wA="firebase",EA="10.14.1";/**
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
 */const mh="[DEFAULT]",TA={[ph]:"fire-core",[Qk]:"fire-core-compat",[Jk]:"fire-analytics",[Yk]:"fire-analytics-compat",[Zk]:"fire-app-check",[Xk]:"fire-app-check-compat",[eA]:"fire-auth",[tA]:"fire-auth-compat",[nA]:"fire-rtdb",[rA]:"fire-data-connect",[iA]:"fire-rtdb-compat",[sA]:"fire-fn",[oA]:"fire-fn-compat",[aA]:"fire-iid",[lA]:"fire-iid-compat",[uA]:"fire-fcm",[cA]:"fire-fcm-compat",[dA]:"fire-perf",[hA]:"fire-perf-compat",[fA]:"fire-rc",[pA]:"fire-rc-compat",[mA]:"fire-gcs",[gA]:"fire-gcs-compat",[yA]:"fire-fst",[_A]:"fire-fst-compat",[vA]:"fire-vertex","fire-js":"fire-js",[wA]:"fire-js-all"};/**
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
 */const Yl=new Map,IA=new Map,gh=new Map;function my(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function on(t){const e=t.name;if(gh.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;gh.set(e,t);for(const n of Yl.values())my(n,t);for(const n of IA.values())my(n,t);return!0}function vs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xn(t){return t.settings!==void 0}/**
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
 */const SA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new fi("app","Firebase",SA);/**
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
 */class xA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const _s=EA;function cw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=iw()),!n)throw vr.create("no-options");const s=Yl.get(i);if(s){if(rs(n,s.options)&&rs(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new Nk(i);for(const u of gh.values())o.addComponent(u);const l=new xA(n,r,o);return Yl.set(i,l),l}function Bf(t=mh){const e=Yl.get(t);if(!e&&t===mh&&iw())return cw();if(!e)throw vr.create("no-app",{appName:t});return e}function Vt(t,e,n){var r;let i=(r=TA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}on(new Kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kA="firebase-heartbeat-database",AA=1,Bo="firebase-heartbeat-store";let rd=null;function dw(){return rd||(rd=Nu(kA,AA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),rd}async function CA(t){try{const n=(await dw()).transaction(Bo),r=await n.objectStore(Bo).get(hw(t));return await n.done,r}catch(e){if(e instanceof cn)Vn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function gy(t,e){try{const r=(await dw()).transaction(Bo,"readwrite");await r.objectStore(Bo).put(e,hw(t)),await r.done}catch(n){if(n instanceof cn)Vn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function hw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PA=1024,RA=30*24*60*60*1e3;class bA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=RA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yy(),{heartbeatsToSend:r,unsentEntries:i}=NA(this._heartbeatsCache.heartbeats),s=Ql(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vn.warn(n),""}}}function yy(){return new Date().toISOString().substring(0,10)}function NA(t,e=PA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ow()?aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vy(t){return Ql(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function OA(t){on(new Kt("platform-logger",e=>new Kk(e),"PRIVATE")),on(new Kt("heartbeat",e=>new bA(e),"PRIVATE")),Vt(ph,py,t),Vt(ph,py,"esm2017"),Vt("fire-js","")}OA("");function Wf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VA=fw,pw=new fi("auth","Firebase",fw());/**
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
 */const Jl=new zf("@firebase/auth");function LA(t,...e){Jl.logLevel<=ne.WARN&&Jl.warn(`Auth (${_s}): ${t}`,...e)}function pl(t,...e){Jl.logLevel<=ne.ERROR&&Jl.error(`Auth (${_s}): ${t}`,...e)}/**
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
 */function an(t,...e){throw qf(t,...e)}function Ht(t,...e){return qf(t,...e)}function Hf(t,e,n){const r=Object.assign(Object.assign({},VA()),{[e]:n});return new fi("auth","Firebase",r).create(e,{appName:t.name})}function Gr(t){return Hf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function MA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&an(t,"argument-error"),Hf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pw.create(t,...e)}function G(t,e,...n){if(!t)throw qf(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pl(e),new Error(e)}function Ln(t,e){t||kn(e)}/**
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
 */function yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jA(){return _y()==="http:"||_y()==="https:"}function _y(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function FA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jA()||yk()||"connection"in navigator)?navigator.onLine:!0}function UA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=pk()||vk()}get(){return FA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kf(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $A=new sa(3e4,6e4);function Gf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,r,i={}){return gw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ia(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return gk()||(c.referrerPolicy="no-referrer"),mw.fetch()(yw(t,t.config.apiHost,n,l),c)})}async function gw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zA),e);try{const i=new WA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ya(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Hf(t,h,c);an(t,h)}}catch(i){if(i instanceof cn)throw i;an(t,"network-request-failed",{message:String(i)})}}async function BA(t,e,n,r,i={}){const s=await ws(t,e,n,r,i);return"mfaPendingCredential"in s&&an(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Kf(t.config,i):`${t.config.apiScheme}://${i}`}class WA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),$A.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function HA(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function vw(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qA(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),i=Qf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mo(id(i.auth_time)),issuedAtTime:mo(id(i.iat)),expirationTime:mo(id(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function id(t){return Number(t)*1e3}function Qf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pl("JWT malformed, contained fewer than 3 sections"),null;try{const i=nw(n);return i?JSON.parse(i):(pl("Failed to decode base64 JWT payload"),null)}catch(i){return pl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wy(t){const e=Qf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&KA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Wo(t,vw(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_w(s.providerUserInfo):[],l=YA(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new vh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function QA(t){const e=Ue(t);await Xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _w(t){return t.map(e=>{var{providerId:n}=e,r=Wf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function JA(t,e){const n=await gw(t,{},async()=>{const r=ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",mw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XA(t,e){return ws(t,"POST","/v2/accounts:revokeToken",Gf(t,e))}/**
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
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=wy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
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
 */function Kn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qA(this,e)}reload(){return QA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(Gr(this.auth));const e=await this.getIdToken();return await Wo(this,HA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:O,isAnonymous:M,providerData:U,stsTokenManager:I}=n;G(x&&I,e,"internal-error");const v=Hi.fromJSON(this.name,I);G(typeof x=="string",e,"internal-error"),Kn(p,e.name),Kn(g,e.name),G(typeof O=="boolean",e,"internal-error"),G(typeof M=="boolean",e,"internal-error"),Kn(S,e.name),Kn(P,e.name),Kn(R,e.name),Kn(b,e.name),Kn(w,e.name),Kn(_,e.name);const E=new An({uid:x,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:M,photoURL:P,phoneNumber:S,tenantId:R,stsTokenManager:v,createdAt:w,lastLoginAt:_});return U&&Array.isArray(U)&&(E.providerData=U.map(T=>Object.assign({},T))),b&&(E._redirectEventId=b),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hi;i.updateFromServerResponse(n);const s=new An({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_w(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Hi;l.updateFromIdToken(r);const u=new An({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Ey=new Map;function Cn(t){Ln(t instanceof Function,"Expected a class definition");let e=Ey.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ey.set(t,e),e)}/**
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
 */class ww{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ww.type="NONE";const Ty=ww;/**
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
 */function ml(t,e,n){return`firebase:${t}:${e}:${n}`}class qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ml(this.userKey,i.apiKey,s),this.fullPersistenceKey=ml("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qi(Cn(Ty),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Cn(Ty);const o=ml(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const p=An._fromJSON(e,h);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new qi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new qi(s,e,r))}}/**
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
 */function Iy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ew(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kw(e))return"Blackberry";if(Aw(e))return"Webos";if(Tw(e))return"Safari";if((e.includes("chrome/")||Iw(e))&&!e.includes("edge/"))return"Chrome";if(xw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ew(t=at()){return/firefox\//i.test(t)}function Tw(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Iw(t=at()){return/crios\//i.test(t)}function Sw(t=at()){return/iemobile/i.test(t)}function xw(t=at()){return/android/i.test(t)}function kw(t=at()){return/blackberry/i.test(t)}function Aw(t=at()){return/webos/i.test(t)}function Yf(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZA(t=at()){var e;return Yf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eC(){return _k()&&document.documentMode===10}function Cw(t=at()){return Yf(t)||xw(t)||Aw(t)||kw(t)||/windows phone/i.test(t)||Sw(t)}/**
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
 */function Pw(t,e=[]){let n;switch(t){case"Browser":n=Iy(at());break;case"Worker":n=`${Iy(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_s}/${r}`}/**
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
 */class tC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nC(t,e={}){return ws(t,"GET","/v2/passwordPolicy",Gf(t,e))}/**
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
 */const rC=6;class iC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class sC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sy(this),this.idTokenSubscription=new Sy(this),this.beforeStateQueue=new tC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vw(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(Gr(this));const n=e?Ue(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(Gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(Gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nC(this),n=new iC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await XA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Du(t){return Ue(t)}let Sy=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=kk(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let Jf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oC(t){Jf=t}function aC(t){return Jf.loadJS(t)}function lC(){return Jf.gapiScript}function uC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function cC(t,e){const n=vs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(rs(s,e??{}))return i;an(i,"already-initialized")}return n.initialize({options:e})}function dC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hC(t,e,n){const r=Du(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Rw(e),{host:o,port:l}=fC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),pC()}function Rw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fC(t){const e=Rw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xy(o)}}}function xy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
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
 */async function Ki(t,e){return BA(t,"POST","/v1/accounts:signInWithIdp",Gf(t,e))}/**
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
 */const mC="http://localhost";class ti extends bw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ki(e,n)}buildRequest(){const e={requestUri:mC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ia(n)}return e}}/**
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
 */class Xf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oa extends Xf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tr extends oa{constructor(){super("facebook.com")}static credential(e){return ti._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
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
 */class Tn extends oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ti._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
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
 */class nr extends oa{constructor(){super("github.com")}static credential(e){return ti._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends oa{constructor(){super("twitter.com")}static credential(e,n){return ti._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await An._fromIdTokenResponse(e,r,i),o=ky(r);return new is({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ky(r);return new is({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ky(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zl extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zl(e,n,r,i)}}function Nw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zl._fromErrorAndOperation(t,s,e,r):s})}async function gC(t,e,n=!1){const r=await Wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",r)}/**
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
 */async function yC(t,e,n=!1){const{auth:r}=t;if(xn(r.app))return Promise.reject(Gr(r));const i="reauthenticate";try{const s=await Wo(t,Nw(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Qf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),is._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&an(r,"user-mismatch"),s}}/**
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
 */async function vC(t,e,n=!1){if(xn(t.app))return Promise.reject(Gr(t));const r="signIn",i=await Nw(t,r,e),s=await is._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function _C(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function wC(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function EC(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function TC(t){return Ue(t).signOut()}const eu="__sak";/**
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
 */class Dw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(eu,"1"),this.storage.removeItem(eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IC=1e3,SC=10;class Ow extends Dw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,SC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ow.type="LOCAL";const xC=Ow;/**
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
 */class Vw extends Dw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vw.type="SESSION";const Lw=Vw;/**
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
 */function kC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ou(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await kC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ou.receivers=[];/**
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
 */function Zf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class AC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Zf("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tn(){return window}function CC(t){tn().location.href=t}/**
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
 */function Mw(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function PC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bC(){return Mw()?self:null}/**
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
 */const jw="firebaseLocalStorageDb",NC=1,tu="firebaseLocalStorage",Fw="fbase_key";class aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vu(t,e){return t.transaction([tu],e?"readwrite":"readonly").objectStore(tu)}function DC(){const t=indexedDB.deleteDatabase(jw);return new aa(t).toPromise()}function _h(){const t=indexedDB.open(jw,NC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tu,{keyPath:Fw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tu)?e(r):(r.close(),await DC(),e(await _h()))})})}async function Ay(t,e,n){const r=Vu(t,!0).put({[Fw]:e,value:n});return new aa(r).toPromise()}async function OC(t,e){const n=Vu(t,!1).get(e),r=await new aa(n).toPromise();return r===void 0?null:r.value}function Cy(t,e){const n=Vu(t,!0).delete(e);return new aa(n).toPromise()}const VC=800,LC=3;class Uw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _h(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ou._getInstance(bC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PC(),!this.activeServiceWorker)return;this.sender=new AC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _h();return await Ay(e,eu,"1"),await Cy(e,eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ay(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vu(i,!1).getAll();return new aa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uw.type="LOCAL";const MC=Uw;new sa(3e4,6e4);/**
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
 */function zw(t,e){return e?Cn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ep extends bw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jC(t){return vC(t.auth,new ep(t),t.bypassAuthState)}function FC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),yC(n,new ep(t),t.bypassAuthState)}async function UC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),gC(n,new ep(t),t.bypassAuthState)}/**
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
 */class $w{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jC;case"linkViaPopup":case"linkViaRedirect":return UC;case"reauthViaPopup":case"reauthViaRedirect":return FC;default:an(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zC=new sa(2e3,1e4);async function $C(t,e,n){if(xn(t.app))return Promise.reject(Ht(t,"operation-not-supported-in-this-environment"));const r=Du(t);MA(t,e,Xf);const i=zw(r,n);return new $r(r,"signInViaPopup",e,i).executeNotNull()}class $r extends $w{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zC.get())};e()}}$r.currentPopupAction=null;/**
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
 */const BC="pendingRedirect",gl=new Map;class WC extends $w{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gl.get(this.auth._key());if(!e){try{const r=await HC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gl.set(this.auth._key(),e)}return this.bypassAuthState||gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HC(t,e){const n=GC(e),r=KC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qC(t,e){gl.set(t._key(),e)}function KC(t){return Cn(t._redirectPersistence)}function GC(t){return ml(BC,t.config.apiKey,t.name)}async function QC(t,e,n=!1){if(xn(t.app))return Promise.reject(Gr(t));const r=Du(t),i=zw(r,e),o=await new WC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const YC=10*60*1e3;class JC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Py(e))}saveEventToCache(e){this.cachedEventUids.add(Py(e)),this.lastProcessedEventTime=Date.now()}}function Py(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(t);default:return!1}}/**
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
 */async function ZC(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
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
 */const eP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tP=/^https?/;async function nP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZC(t);for(const n of e)try{if(rP(n))return}catch{}an(t,"unauthorized-domain")}function rP(t){const e=yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tP.test(n))return!1;if(eP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const iP=new sa(3e4,6e4);function Ry(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sP(t){return new Promise((e,n)=>{var r,i,s;function o(){Ry(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ry(),n(Ht(t,"network-request-failed"))},timeout:iP.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const l=uC("iframefcb");return tn()[l]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},aC(`${lC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw yl=null,e})}let yl=null;function oP(t){return yl=yl||sP(t),yl}/**
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
 */const aP=new sa(5e3,15e3),lP="__/auth/iframe",uP="emulator/auth/iframe",cP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hP(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kf(e,uP):`https://${t.config.authDomain}/${lP}`,r={apiKey:e.apiKey,appName:t.name,v:_s},i=dP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ia(r).slice(1)}`}async function fP(t){const e=await oP(t),n=tn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:hP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),l=tn().setTimeout(()=>{s(o)},aP.get());function u(){tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const pP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mP=500,gP=600,yP="_blank",vP="http://localhost";class by{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _P(t,e,n,r=mP,i=gP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},pP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=at().toLowerCase();n&&(l=Iw(c)?yP:n),Ew(c)&&(e=e||vP,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[S,P])=>`${g}${S}=${P},`,"");if(ZA(c)&&l!=="_self")return wP(e||"",l),new by(null);const p=window.open(e||"",l,h);G(p,t,"popup-blocked");try{p.focus()}catch{}return new by(p)}function wP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const EP="__/auth/handler",TP="emulator/auth/handler",IP=encodeURIComponent("fac");async function Ny(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_s,eventId:i};if(e instanceof Xf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof oa){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),c=u?`#${IP}=${encodeURIComponent(u)}`:"";return`${SP(t)}?${ia(l).slice(1)}${c}`}function SP({config:t}){return t.emulator?Kf(t,TP):`https://${t.authDomain}/${EP}`}/**
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
 */const sd="webStorageSupport";class xP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lw,this._completeRedirectFn=QC,this._overrideRedirectResult=qC}async _openPopup(e,n,r,i){var s;Ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ny(e,n,r,yh(),i);return _P(e,o,Zf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ny(e,n,r,yh(),i);return CC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fP(e),r=new JC(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sd,{type:sd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sd];o!==void 0&&n(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cw()||Tw()||Yf()}}const kP=xP;var Dy="@firebase/auth",Oy="1.7.9";/**
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
 */class AP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PP(t){on(new Kt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pw(t)},c=new sC(r,i,s,u);return dC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),on(new Kt("auth-internal",e=>{const n=Du(e.getProvider("auth").getImmediate());return(r=>new AP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Dy,Oy,CP(t)),Vt(Dy,Oy,"esm2017")}/**
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
 */const RP=5*60,bP=sw("authIdTokenMaxAge")||RP;let Vy=null;const NP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bP)return;const i=n==null?void 0:n.token;Vy!==i&&(Vy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function DP(t=Bf()){const e=vs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cC(t,{popupRedirectResolver:kP,persistence:[MC,xC,Lw]}),r=sw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=NP(s.toString());wC(n,o,()=>o(n.currentUser)),_C(n,l=>o(l))}}const i=rw("auth");return i&&hC(n,`http://${i}`),n}function OP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}oC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PP("Browser");var VP="firebase",LP="10.14.1";/**
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
 */Vt(VP,LP,"app");var Ly=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,Ww;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function E(){}E.prototype=v.prototype,I.D=v.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(T,A,C){for(var k=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)k[ze-2]=arguments[ze];return v.prototype[A].apply(T,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,E){E||(E=0);var T=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)T[A]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(A=0;16>A;++A)T[A]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=I.g[0],E=I.g[1],A=I.g[2];var C=I.g[3],k=v+(C^E&(A^C))+T[0]+3614090360&4294967295;v=E+(k<<7&4294967295|k>>>25),k=C+(A^v&(E^A))+T[1]+3905402710&4294967295,C=v+(k<<12&4294967295|k>>>20),k=A+(E^C&(v^E))+T[2]+606105819&4294967295,A=C+(k<<17&4294967295|k>>>15),k=E+(v^A&(C^v))+T[3]+3250441966&4294967295,E=A+(k<<22&4294967295|k>>>10),k=v+(C^E&(A^C))+T[4]+4118548399&4294967295,v=E+(k<<7&4294967295|k>>>25),k=C+(A^v&(E^A))+T[5]+1200080426&4294967295,C=v+(k<<12&4294967295|k>>>20),k=A+(E^C&(v^E))+T[6]+2821735955&4294967295,A=C+(k<<17&4294967295|k>>>15),k=E+(v^A&(C^v))+T[7]+4249261313&4294967295,E=A+(k<<22&4294967295|k>>>10),k=v+(C^E&(A^C))+T[8]+1770035416&4294967295,v=E+(k<<7&4294967295|k>>>25),k=C+(A^v&(E^A))+T[9]+2336552879&4294967295,C=v+(k<<12&4294967295|k>>>20),k=A+(E^C&(v^E))+T[10]+4294925233&4294967295,A=C+(k<<17&4294967295|k>>>15),k=E+(v^A&(C^v))+T[11]+2304563134&4294967295,E=A+(k<<22&4294967295|k>>>10),k=v+(C^E&(A^C))+T[12]+1804603682&4294967295,v=E+(k<<7&4294967295|k>>>25),k=C+(A^v&(E^A))+T[13]+4254626195&4294967295,C=v+(k<<12&4294967295|k>>>20),k=A+(E^C&(v^E))+T[14]+2792965006&4294967295,A=C+(k<<17&4294967295|k>>>15),k=E+(v^A&(C^v))+T[15]+1236535329&4294967295,E=A+(k<<22&4294967295|k>>>10),k=v+(A^C&(E^A))+T[1]+4129170786&4294967295,v=E+(k<<5&4294967295|k>>>27),k=C+(E^A&(v^E))+T[6]+3225465664&4294967295,C=v+(k<<9&4294967295|k>>>23),k=A+(v^E&(C^v))+T[11]+643717713&4294967295,A=C+(k<<14&4294967295|k>>>18),k=E+(C^v&(A^C))+T[0]+3921069994&4294967295,E=A+(k<<20&4294967295|k>>>12),k=v+(A^C&(E^A))+T[5]+3593408605&4294967295,v=E+(k<<5&4294967295|k>>>27),k=C+(E^A&(v^E))+T[10]+38016083&4294967295,C=v+(k<<9&4294967295|k>>>23),k=A+(v^E&(C^v))+T[15]+3634488961&4294967295,A=C+(k<<14&4294967295|k>>>18),k=E+(C^v&(A^C))+T[4]+3889429448&4294967295,E=A+(k<<20&4294967295|k>>>12),k=v+(A^C&(E^A))+T[9]+568446438&4294967295,v=E+(k<<5&4294967295|k>>>27),k=C+(E^A&(v^E))+T[14]+3275163606&4294967295,C=v+(k<<9&4294967295|k>>>23),k=A+(v^E&(C^v))+T[3]+4107603335&4294967295,A=C+(k<<14&4294967295|k>>>18),k=E+(C^v&(A^C))+T[8]+1163531501&4294967295,E=A+(k<<20&4294967295|k>>>12),k=v+(A^C&(E^A))+T[13]+2850285829&4294967295,v=E+(k<<5&4294967295|k>>>27),k=C+(E^A&(v^E))+T[2]+4243563512&4294967295,C=v+(k<<9&4294967295|k>>>23),k=A+(v^E&(C^v))+T[7]+1735328473&4294967295,A=C+(k<<14&4294967295|k>>>18),k=E+(C^v&(A^C))+T[12]+2368359562&4294967295,E=A+(k<<20&4294967295|k>>>12),k=v+(E^A^C)+T[5]+4294588738&4294967295,v=E+(k<<4&4294967295|k>>>28),k=C+(v^E^A)+T[8]+2272392833&4294967295,C=v+(k<<11&4294967295|k>>>21),k=A+(C^v^E)+T[11]+1839030562&4294967295,A=C+(k<<16&4294967295|k>>>16),k=E+(A^C^v)+T[14]+4259657740&4294967295,E=A+(k<<23&4294967295|k>>>9),k=v+(E^A^C)+T[1]+2763975236&4294967295,v=E+(k<<4&4294967295|k>>>28),k=C+(v^E^A)+T[4]+1272893353&4294967295,C=v+(k<<11&4294967295|k>>>21),k=A+(C^v^E)+T[7]+4139469664&4294967295,A=C+(k<<16&4294967295|k>>>16),k=E+(A^C^v)+T[10]+3200236656&4294967295,E=A+(k<<23&4294967295|k>>>9),k=v+(E^A^C)+T[13]+681279174&4294967295,v=E+(k<<4&4294967295|k>>>28),k=C+(v^E^A)+T[0]+3936430074&4294967295,C=v+(k<<11&4294967295|k>>>21),k=A+(C^v^E)+T[3]+3572445317&4294967295,A=C+(k<<16&4294967295|k>>>16),k=E+(A^C^v)+T[6]+76029189&4294967295,E=A+(k<<23&4294967295|k>>>9),k=v+(E^A^C)+T[9]+3654602809&4294967295,v=E+(k<<4&4294967295|k>>>28),k=C+(v^E^A)+T[12]+3873151461&4294967295,C=v+(k<<11&4294967295|k>>>21),k=A+(C^v^E)+T[15]+530742520&4294967295,A=C+(k<<16&4294967295|k>>>16),k=E+(A^C^v)+T[2]+3299628645&4294967295,E=A+(k<<23&4294967295|k>>>9),k=v+(A^(E|~C))+T[0]+4096336452&4294967295,v=E+(k<<6&4294967295|k>>>26),k=C+(E^(v|~A))+T[7]+1126891415&4294967295,C=v+(k<<10&4294967295|k>>>22),k=A+(v^(C|~E))+T[14]+2878612391&4294967295,A=C+(k<<15&4294967295|k>>>17),k=E+(C^(A|~v))+T[5]+4237533241&4294967295,E=A+(k<<21&4294967295|k>>>11),k=v+(A^(E|~C))+T[12]+1700485571&4294967295,v=E+(k<<6&4294967295|k>>>26),k=C+(E^(v|~A))+T[3]+2399980690&4294967295,C=v+(k<<10&4294967295|k>>>22),k=A+(v^(C|~E))+T[10]+4293915773&4294967295,A=C+(k<<15&4294967295|k>>>17),k=E+(C^(A|~v))+T[1]+2240044497&4294967295,E=A+(k<<21&4294967295|k>>>11),k=v+(A^(E|~C))+T[8]+1873313359&4294967295,v=E+(k<<6&4294967295|k>>>26),k=C+(E^(v|~A))+T[15]+4264355552&4294967295,C=v+(k<<10&4294967295|k>>>22),k=A+(v^(C|~E))+T[6]+2734768916&4294967295,A=C+(k<<15&4294967295|k>>>17),k=E+(C^(A|~v))+T[13]+1309151649&4294967295,E=A+(k<<21&4294967295|k>>>11),k=v+(A^(E|~C))+T[4]+4149444226&4294967295,v=E+(k<<6&4294967295|k>>>26),k=C+(E^(v|~A))+T[11]+3174756917&4294967295,C=v+(k<<10&4294967295|k>>>22),k=A+(v^(C|~E))+T[2]+718787259&4294967295,A=C+(k<<15&4294967295|k>>>17),k=E+(C^(A|~v))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(A+(k<<21&4294967295|k>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var E=v-this.blockSize,T=this.B,A=this.h,C=0;C<v;){if(A==0)for(;C<=E;)i(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<v;)if(T[A++]=I.charCodeAt(C++),A==this.blockSize){i(this,T),A=0;break}}else for(;C<v;)if(T[A++]=I[C++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var E=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=E&255,E/=256;for(this.u(I),I=Array(16),v=E=0;4>v;++v)for(var T=0;32>T;T+=8)I[E++]=this.g[v]>>>T&255;return I};function s(I,v){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=v(I)}function o(I,v){this.h=v;for(var E=[],T=!0,A=I.length-1;0<=A;A--){var C=I[A]|0;T&&C==v||(E[A]=C,T=!1)}this.g=E}var l={};function u(I){return-128<=I&&128>I?s(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return b(c(-I));for(var v=[],E=1,T=0;I>=E;T++)v[T]=I/E|0,E*=4294967296;return new o(v,0)}function h(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return b(h(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(v,8)),T=p,A=0;A<I.length;A+=8){var C=Math.min(8,I.length-A),k=parseInt(I.substring(A,A+C),v);8>C?(C=c(Math.pow(v,C)),T=T.j(C).add(c(k))):(T=T.j(E),T=T.add(c(k)))}return T}var p=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-b(this).m();for(var I=0,v=1,E=0;E<this.g.length;E++){var T=this.i(E);I+=(0<=T?T:4294967296+T)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(R(this))return"-"+b(this).toString(I);for(var v=c(Math.pow(I,6)),E=this,T="";;){var A=O(E,v).g;E=w(E,A.j(v));var C=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=A,P(E))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function R(I){return I.h==-1}t.l=function(I){return I=w(this,I),R(I)?-1:P(I)?0:1};function b(I){for(var v=I.g.length,E=[],T=0;T<v;T++)E[T]=~I.g[T];return new o(E,~I.h).add(g)}t.abs=function(){return R(this)?b(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],T=0,A=0;A<=v;A++){var C=T+(this.i(A)&65535)+(I.i(A)&65535),k=(C>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=k>>>16,C&=65535,k&=65535,E[A]=k<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(I,v){return I.add(b(v))}t.j=function(I){if(P(this)||P(I))return p;if(R(this))return R(I)?b(this).j(b(I)):b(b(this).j(I));if(R(I))return b(this.j(b(I)));if(0>this.l(S)&&0>I.l(S))return c(this.m()*I.m());for(var v=this.g.length+I.g.length,E=[],T=0;T<2*v;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var C=this.i(T)>>>16,k=this.i(T)&65535,ze=I.i(A)>>>16,Gt=I.i(A)&65535;E[2*T+2*A]+=k*Gt,_(E,2*T+2*A),E[2*T+2*A+1]+=C*Gt,_(E,2*T+2*A+1),E[2*T+2*A+1]+=k*ze,_(E,2*T+2*A+1),E[2*T+2*A+2]+=C*ze,_(E,2*T+2*A+2)}for(T=0;T<v;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=v;T<2*v;T++)E[T]=0;return new o(E,0)};function _(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function x(I,v){this.g=I,this.h=v}function O(I,v){if(P(v))throw Error("division by zero");if(P(I))return new x(p,p);if(R(I))return v=O(b(I),v),new x(b(v.g),b(v.h));if(R(v))return v=O(I,b(v)),new x(b(v.g),v.h);if(30<I.g.length){if(R(I)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,T=v;0>=T.l(I);)E=M(E),T=M(T);var A=U(E,1),C=U(T,1);for(T=U(T,2),E=U(E,2);!P(T);){var k=C.add(T);0>=k.l(I)&&(A=A.add(E),C=k),T=U(T,1),E=U(E,1)}return v=w(I,A.j(v)),new x(A,v)}for(A=p;0<=I.l(v);){for(E=Math.max(1,Math.floor(I.m()/v.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=c(E),k=C.j(v);R(k)||0<k.l(I);)E-=T,C=c(E),k=C.j(v);P(C)&&(C=g),A=A.add(C),I=w(I,k)}return new x(A,I)}t.A=function(I){return O(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)&I.i(T);return new o(E,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)|I.i(T);return new o(E,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)^I.i(T);return new o(E,this.h^I.h)};function M(I){for(var v=I.g.length+1,E=[],T=0;T<v;T++)E[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(E,I.h)}function U(I,v){var E=v>>5;v%=32;for(var T=I.g.length-E,A=[],C=0;C<T;C++)A[C]=0<v?I.i(C+E)>>>v|I.i(C+E+1)<<32-v:I.i(C+E);return new o(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ww=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Qr=o}).apply(typeof Ly<"u"?Ly:typeof self<"u"?self:typeof window<"u"?window:{});var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hw,to,qw,vl,wh,Kw,Gw,Qw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ja=="object"&&Ja];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in f))break e;f=f[N]}a=a[a.length-1],y=f[a],d=d(y),d!=y&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var f=0,y=!1,N={next:function(){if(!y&&f<a.length){var V=f++;return{value:d(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),a.apply(d,N)}}return function(){return a.apply(d,arguments)}}function g(a,d,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function S(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function P(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,N,V){for(var z=Array(arguments.length-2),de=2;de<arguments.length;de++)z[de-2]=arguments[de];return d.prototype[N].apply(y,z)}}function R(a){const d=a.length;if(0<d){const f=Array(d);for(let y=0;y<d;y++)f[y]=a[y];return f}return[]}function b(a,d){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const N=a.length||0,V=y.length||0;a.length=N+V;for(let z=0;z<V;z++)a[N+z]=y[z]}else a.push(y)}}class w{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var M=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function U(a,d,f){for(const y in a)d.call(f,a[y],y,a)}function I(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function v(a){const d={};for(const f in a)d[f]=a[f];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,d){let f,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(f in y)a[f]=y[f];for(let V=0;V<E.length;V++)f=E[V],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function A(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function k(){var a=q;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class ze{constructor(){this.h=this.g=null}add(d,f){const y=Gt.get();y.set(d,f),this.h?this.h.next=y:this.g=y,this.h=y}}var Gt=new w(()=>new Qt,a=>a.reset());class Qt{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Rt,$=!1,q=new ze,Y=()=>{const a=l.Promise.resolve(void 0);Rt=()=>{a.then(ie)}};var ie=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(f){C(f)}var d=Gt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}$=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var dn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function hn(a,d){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(M){e:{try{O(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:fn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&hn.aa.h.call(this)}}P(hn,Ae);var fn={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pn="closure_listenable_"+(1e6*Math.random()|0),Q1=0;function Y1(a,d,f,y,N){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!y,this.ha=N,this.key=++Q1,this.da=this.fa=!1}function ma(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ga(a){this.src=a,this.g={},this.h=0}ga.prototype.add=function(a,d,f,y,N){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var z=rc(a,d,y,N);return-1<z?(d=a[z],f||(d.fa=!1)):(d=new Y1(d,this.src,V,!!y,N),d.fa=f,a.push(d)),d};function nc(a,d){var f=d.type;if(f in a.g){var y=a.g[f],N=Array.prototype.indexOf.call(y,d,void 0),V;(V=0<=N)&&Array.prototype.splice.call(y,N,1),V&&(ma(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function rc(a,d,f,y){for(var N=0;N<a.length;++N){var V=a[N];if(!V.da&&V.listener==d&&V.capture==!!f&&V.ha==y)return N}return-1}var ic="closure_lm_"+(1e6*Math.random()|0),sc={};function qp(a,d,f,y,N){if(Array.isArray(d)){for(var V=0;V<d.length;V++)qp(a,d[V],f,y,N);return null}return f=Qp(f),a&&a[pn]?a.K(d,f,c(y)?!!y.capture:!!y,N):J1(a,d,f,!1,y,N)}function J1(a,d,f,y,N,V){if(!d)throw Error("Invalid event type");var z=c(N)?!!N.capture:!!N,de=ac(a);if(de||(a[ic]=de=new ga(a)),f=de.add(d,f,y,z,V),f.proxy)return f;if(y=X1(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)dn||(N=z),N===void 0&&(N=!1),a.addEventListener(d.toString(),y,N);else if(a.attachEvent)a.attachEvent(Gp(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function X1(){function a(f){return d.call(a.src,a.listener,f)}const d=Z1;return a}function Kp(a,d,f,y,N){if(Array.isArray(d))for(var V=0;V<d.length;V++)Kp(a,d[V],f,y,N);else y=c(y)?!!y.capture:!!y,f=Qp(f),a&&a[pn]?(a=a.i,d=String(d).toString(),d in a.g&&(V=a.g[d],f=rc(V,f,y,N),-1<f&&(ma(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[d],a.h--)))):a&&(a=ac(a))&&(d=a.g[d.toString()],a=-1,d&&(a=rc(d,f,y,N)),(f=-1<a?d[a]:null)&&oc(f))}function oc(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[pn])nc(d.i,a);else{var f=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(f,y,a.capture):d.detachEvent?d.detachEvent(Gp(f),y):d.addListener&&d.removeListener&&d.removeListener(y),(f=ac(d))?(nc(f,a),f.h==0&&(f.src=null,d[ic]=null)):ma(a)}}}function Gp(a){return a in sc?sc[a]:sc[a]="on"+a}function Z1(a,d){if(a.da)a=!0;else{d=new hn(d,this);var f=a.listener,y=a.ha||a.src;a.fa&&oc(a),a=f.call(y,d)}return a}function ac(a){return a=a[ic],a instanceof ga?a:null}var lc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qp(a){return typeof a=="function"?a:(a[lc]||(a[lc]=function(d){return a.handleEvent(d)}),a[lc])}function Ye(){ce.call(this),this.i=new ga(this),this.M=this,this.F=null}P(Ye,ce),Ye.prototype[pn]=!0,Ye.prototype.removeEventListener=function(a,d,f,y){Kp(this,a,d,f,y)};function lt(a,d){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new Ae(d,a);else if(d instanceof Ae)d.target=d.target||a;else{var N=d;d=new Ae(y,a),T(d,N)}if(N=!0,f)for(var V=f.length-1;0<=V;V--){var z=d.g=f[V];N=ya(z,y,!0,d)&&N}if(z=d.g=a,N=ya(z,y,!0,d)&&N,N=ya(z,y,!1,d)&&N,f)for(V=0;V<f.length;V++)z=d.g=f[V],N=ya(z,y,!1,d)&&N}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],y=0;y<f.length;y++)ma(f[y]);delete a.g[d],a.h--}}this.F=null},Ye.prototype.K=function(a,d,f,y){return this.i.add(String(a),d,!1,f,y)},Ye.prototype.L=function(a,d,f,y){return this.i.add(String(a),d,!0,f,y)};function ya(a,d,f,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,V=0;V<d.length;++V){var z=d[V];if(z&&!z.da&&z.capture==f){var de=z.listener,$e=z.ha||z.src;z.fa&&nc(a.i,z),N=de.call($e,y)!==!1&&N}}return N&&!y.defaultPrevented}function Yp(a,d,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Jp(a){a.g=Yp(()=>{a.g=null,a.i&&(a.i=!1,Jp(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class eT extends ce{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Jp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function As(a){ce.call(this),this.h=a,this.g={}}P(As,ce);var Xp=[];function Zp(a){U(a.g,function(d,f){this.g.hasOwnProperty(f)&&oc(d)},a),a.g={}}As.prototype.N=function(){As.aa.N.call(this),Zp(this)},As.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uc=l.JSON.stringify,tT=l.JSON.parse,nT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function cc(){}cc.prototype.h=null;function em(a){return a.h||(a.h=a.i())}function tm(){}var Cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dc(){Ae.call(this,"d")}P(dc,Ae);function hc(){Ae.call(this,"c")}P(hc,Ae);var Nr={},nm=null;function va(){return nm=nm||new Ye}Nr.La="serverreachability";function rm(a){Ae.call(this,Nr.La,a)}P(rm,Ae);function Ps(a){const d=va();lt(d,new rm(d))}Nr.STAT_EVENT="statevent";function im(a,d){Ae.call(this,Nr.STAT_EVENT,a),this.stat=d}P(im,Ae);function ut(a){const d=va();lt(d,new im(d,a))}Nr.Ma="timingevent";function sm(a,d){Ae.call(this,Nr.Ma,a),this.size=d}P(sm,Ae);function Rs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function bs(){this.g=!0}bs.prototype.xa=function(){this.g=!1};function rT(a,d,f,y,N,V){a.info(function(){if(a.g)if(V)for(var z="",de=V.split("&"),$e=0;$e<de.length;$e++){var oe=de[$e].split("=");if(1<oe.length){var Je=oe[0];oe=oe[1];var Xe=Je.split("_");z=2<=Xe.length&&Xe[1]=="type"?z+(Je+"="+oe+"&"):z+(Je+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+d+`
`+f+`
`+z})}function iT(a,d,f,y,N,V,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+d+`
`+f+`
`+V+" "+z})}function yi(a,d,f,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+oT(a,f)+(y?" "+y:"")})}function sT(a,d){a.info(function(){return"TIMEOUT: "+d})}bs.prototype.info=function(){};function oT(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var V=N[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return uc(f)}catch{return d}}var _a={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},om={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fc;function wa(){}P(wa,cc),wa.prototype.g=function(){return new XMLHttpRequest},wa.prototype.i=function(){return{}},fc=new wa;function Bn(a,d,f,y){this.j=a,this.i=d,this.l=f,this.R=y||1,this.U=new As(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new am}function am(){this.i=null,this.g="",this.h=!1}var lm={},pc={};function mc(a,d,f){a.L=1,a.v=Sa(mn(d)),a.m=f,a.P=!0,um(a,null)}function um(a,d){a.F=Date.now(),Ea(a),a.A=mn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Im(f.i,"t",y),a.C=0,f=a.j.J,a.h=new am,a.g=zm(a.j,f?d:null,!a.m),0<a.O&&(a.M=new eT(g(a.Y,a,a.g),a.O)),d=a.U,f=a.g,y=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Xp[0]=N.toString()),N=Xp);for(var V=0;V<N.length;V++){var z=qp(f,N[V],y||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ps(),rT(a.i,a.u,a.A,a.l,a.R,a.m)}Bn.prototype.ca=function(a){a=a.target;const d=this.M;d&&gn(a)==3?d.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const Xe=gn(this.g);var d=this.g.Ba();const wi=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||Rm(this.g)))){this.J||Xe!=4||d==7||(d==8||0>=wi?Ps(3):Ps(2)),gc(this);var f=this.g.Z();this.X=f;t:if(cm(this)){var y=Rm(this.g);a="";var N=y.length,V=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),Ns(this);var z="";break t}this.h.i=new l.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,a+=this.h.i.decode(y[d],{stream:!(V&&d==N-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,iT(this.i,this.u,this.A,this.l,this.R,Xe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var de,$e=this.g;if((de=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(de)){var oe=de;break t}}oe=null}if(f=oe)yi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yc(this,f);else{this.o=!1,this.s=3,ut(12),Dr(this),Ns(this);break e}}if(this.P){f=!0;let jt;for(;!this.J&&this.C<z.length;)if(jt=aT(this,z),jt==pc){Xe==4&&(this.s=4,ut(14),f=!1),yi(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==lm){this.s=4,ut(15),yi(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else yi(this.i,this.l,jt,null),yc(this,jt);if(cm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||z.length!=0||this.h.h||(this.s=1,ut(16),f=!1),this.o=this.o&&f,!f)yi(this.i,this.l,z,"[Invalid Chunked Response]"),Dr(this),Ns(this);else if(0<z.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ic(Je),Je.M=!0,ut(11))}}else yi(this.i,this.l,z,null),yc(this,z);Xe==4&&Dr(this),this.o&&!this.J&&(Xe==4?Mm(this.j,this):(this.o=!1,Ea(this)))}else ST(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Dr(this),Ns(this)}}}catch{}finally{}};function cm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function aT(a,d){var f=a.C,y=d.indexOf(`
`,f);return y==-1?pc:(f=Number(d.substring(f,y)),isNaN(f)?lm:(y+=1,y+f>d.length?pc:(d=d.slice(y,y+f),a.C=y+f,d)))}Bn.prototype.cancel=function(){this.J=!0,Dr(this)};function Ea(a){a.S=Date.now()+a.I,dm(a,a.I)}function dm(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Rs(g(a.ba,a),d)}function gc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(sT(this.i,this.A),this.L!=2&&(Ps(),ut(17)),Dr(this),this.s=2,Ns(this)):dm(this,this.S-a)};function Ns(a){a.j.G==0||a.J||Mm(a.j,a)}function Dr(a){gc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Zp(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function yc(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||vc(f.h,a))){if(!a.K&&vc(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ra(f),Ca(f);else break e;Tc(f),ut(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=Rs(g(f.Za,f),6e3));if(1>=pm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Vr(f,11)}else if((a.K||f.g==a)&&Ra(f),!_(d))for(N=f.Da.g.parse(d),d=0;d<N.length;d++){let oe=N[d];if(f.T=oe[0],oe=oe[1],f.G==2)if(oe[0]=="c"){f.K=oe[1],f.ia=oe[2];const Je=oe[3];Je!=null&&(f.la=Je,f.j.info("VER="+f.la));const Xe=oe[4];Xe!=null&&(f.Aa=Xe,f.j.info("SVER="+f.Aa));const wi=oe[5];wi!=null&&typeof wi=="number"&&0<wi&&(y=1.5*wi,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const jt=a.g;if(jt){const Na=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Na){var V=y.h;V.g||Na.indexOf("spdy")==-1&&Na.indexOf("quic")==-1&&Na.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(_c(V,V.h),V.h=null))}if(y.D){const Sc=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Sc&&(y.ya=Sc,fe(y.I,y.D,Sc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var z=a;if(y.qa=Um(y,y.J?y.ia:null,y.W),z.K){mm(y.h,z);var de=z,$e=y.L;$e&&(de.I=$e),de.B&&(gc(de),Ea(de)),y.g=z}else Vm(y);0<f.i.length&&Pa(f)}else oe[0]!="stop"&&oe[0]!="close"||Vr(f,7);else f.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Vr(f,7):Ec(f):oe[0]!="noop"&&f.l&&f.l.ta(oe),f.v=0)}}Ps(4)}catch{}}var lT=class{constructor(a,d){this.g=a,this.map=d}};function hm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function pm(a){return a.h?1:a.g?a.g.size:0}function vc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function _c(a,d){a.g?a.g.add(d):a.h=d}function mm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}hm.prototype.cancel=function(){if(this.i=gm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return R(a.i)}function uT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],f=a.length,y=0;y<f;y++)d.push(a[y]);return d}d=[],f=0;for(y in a)d[f++]=a[y];return d}function cT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const y in a)d[f++]=y;return d}}}function ym(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=cT(a),y=uT(a),N=y.length,V=0;V<N;V++)d.call(void 0,y[V],f&&f[V],a)}var vm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dT(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),N=null;if(0<=y){var V=a[f].substring(0,y);N=a[f].substring(y+1)}else V=a[f];d(V,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Or){this.h=a.h,Ta(this,a.j),this.o=a.o,this.g=a.g,Ia(this,a.s),this.l=a.l;var d=a.i,f=new Vs;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),_m(this,f),this.m=a.m}else a&&(d=String(a).match(vm))?(this.h=!1,Ta(this,d[1]||"",!0),this.o=Ds(d[2]||""),this.g=Ds(d[3]||"",!0),Ia(this,d[4]),this.l=Ds(d[5]||"",!0),_m(this,d[6]||"",!0),this.m=Ds(d[7]||"")):(this.h=!1,this.i=new Vs(null,this.h))}Or.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Os(d,wm,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Os(d,wm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Os(f,f.charAt(0)=="/"?pT:fT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Os(f,gT)),a.join("")};function mn(a){return new Or(a)}function Ta(a,d,f){a.j=f?Ds(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ia(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function _m(a,d,f){d instanceof Vs?(a.i=d,yT(a.i,a.h)):(f||(d=Os(d,mT)),a.i=new Vs(d,a.h))}function fe(a,d,f){a.i.set(d,f)}function Sa(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ds(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,hT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function hT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wm=/[#\/\?@]/g,fT=/[#\?:]/g,pT=/[#\?]/g,mT=/[#\?@]/g,gT=/#/g;function Vs(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Wn(a){a.g||(a.g=new Map,a.h=0,a.i&&dT(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Vs.prototype,t.add=function(a,d){Wn(this),this.i=null,a=vi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Em(a,d){Wn(a),d=vi(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Tm(a,d){return Wn(a),d=vi(a,d),a.g.has(d)}t.forEach=function(a,d){Wn(this),this.g.forEach(function(f,y){f.forEach(function(N){a.call(d,N,y,this)},this)},this)},t.na=function(){Wn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let y=0;y<d.length;y++){const N=a[y];for(let V=0;V<N.length;V++)f.push(d[y])}return f},t.V=function(a){Wn(this);let d=[];if(typeof a=="string")Tm(this,a)&&(d=d.concat(this.g.get(vi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return Wn(this),this.i=null,a=vi(this,a),Tm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Im(a,d,f){Em(a,d),0<f.length&&(a.i=null,a.g.set(vi(a,d),R(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var y=d[f];const V=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var N=V;z[y]!==""&&(N+="="+encodeURIComponent(String(z[y]))),a.push(N)}}return this.i=a.join("&")};function vi(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function yT(a,d){d&&!a.j&&(Wn(a),a.i=null,a.g.forEach(function(f,y){var N=y.toLowerCase();y!=N&&(Em(this,y),Im(this,N,f))},a)),a.j=d}function vT(a,d){const f=new bs;if(l.Image){const y=new Image;y.onload=S(Hn,f,"TestLoadImage: loaded",!0,d,y),y.onerror=S(Hn,f,"TestLoadImage: error",!1,d,y),y.onabort=S(Hn,f,"TestLoadImage: abort",!1,d,y),y.ontimeout=S(Hn,f,"TestLoadImage: timeout",!1,d,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function _T(a,d){const f=new bs,y=new AbortController,N=setTimeout(()=>{y.abort(),Hn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(N),V.ok?Hn(f,"TestPingServer: ok",!0,d):Hn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),Hn(f,"TestPingServer: error",!1,d)})}function Hn(a,d,f,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(f)}catch{}}function wT(){this.g=new nT}function ET(a,d,f){const y=f||"";try{ym(a,function(N,V){let z=N;c(N)&&(z=uc(N)),d.push(y+V+"="+encodeURIComponent(z))})}catch(N){throw d.push(y+"type="+encodeURIComponent("_badmap")),N}}function xa(a){this.l=a.Ub||null,this.j=a.eb||!1}P(xa,cc),xa.prototype.g=function(){return new ka(this.l,this.j)},xa.prototype.i=function(a){return function(){return a}}({});function ka(a,d){Ye.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ka,Ye),t=ka.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ms(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ls(this):Ms(this),this.readyState==3&&Sm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ls(this))},t.Qa=function(a){this.g&&(this.response=a,Ls(this))},t.ga=function(){this.g&&Ls(this)};function Ls(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ms(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Ms(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function xm(a){let d="";return U(a,function(f,y){d+=y,d+=":",d+=f,d+=`\r
`}),d}function wc(a,d,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=xm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):fe(a,d,f))}function Se(a){Ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Se,Ye);var TT=/^https?$/i,IT=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fc.g(),this.v=this.o?em(this.o):em(fc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(V){km(this,V);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)f.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())f.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(IT,d,void 0))||y||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of f)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pm(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){km(this,V)}};function km(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Am(a),Aa(a)}function Am(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),Aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Aa(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Cm(this):this.bb())},t.bb=function(){Cm(this)};function Cm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)Yp(a.Ea,0,a);else if(lt(a,"readystatechange"),gn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var y;if(y=z===0){var N=String(a.D).match(vm)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),y=!TT.test(N?N.toLowerCase():"")}f=y}if(f)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var V=2<gn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Am(a)}}finally{Aa(a)}}}}function Aa(a,d){if(a.g){Pm(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||lt(a,"ready");try{f.onreadystatechange=y}catch{}}}function Pm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),tT(d)}};function Rm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ST(a){const d={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var f=A(a[y]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=d[N]||[];d[N]=V,V.push(f)}I(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function js(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function bm(a){this.Aa=0,this.i=[],this.j=new bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=js("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=js("baseRetryDelayMs",5e3,a),this.cb=js("retryDelaySeedMs",1e4,a),this.Wa=js("forwardChannelMaxRetries",2,a),this.wa=js("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hm(a&&a.concurrentRequestLimit),this.Da=new wT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=bm.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,y){ut(0),this.W=a,this.H=d||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Um(this,null,this.W),Pa(this)};function Ec(a){if(Nm(a),a.G==3){var d=a.U++,f=mn(a.I);if(fe(f,"SID",a.K),fe(f,"RID",d),fe(f,"TYPE","terminate"),Fs(a,f),d=new Bn(a,a.j,d),d.L=2,d.v=Sa(mn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=zm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ea(d)}Fm(a)}function Ca(a){a.g&&(Ic(a),a.g.cancel(),a.g=null)}function Nm(a){Ca(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ra(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Pa(a){if(!fm(a.h)&&!a.s){a.s=!0;var d=a.Ga;Rt||Y(),$||(Rt(),$=!0),q.add(d,a),a.B=0}}function xT(a,d){return pm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Rs(g(a.Ga,a,d),jm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Bn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(N.H=V,V=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Om(this,N,d),f=mn(this.I),fe(f,"RID",a),fe(f,"CVER",22),this.D&&fe(f,"X-HTTP-Session-Id",this.D),Fs(this,f),V&&(this.O?d="headers="+encodeURIComponent(String(xm(V)))+"&"+d:this.m&&wc(f,this.m,V)),_c(this.h,N),this.Ua&&fe(f,"TYPE","init"),this.P?(fe(f,"$req",d),fe(f,"SID","null"),N.T=!0,mc(N,f,null)):mc(N,f,d),this.G=2}}else this.G==3&&(a?Dm(this,a):this.i.length==0||fm(this.h)||Dm(this))};function Dm(a,d){var f;d?f=d.l:f=a.U++;const y=mn(a.I);fe(y,"SID",a.K),fe(y,"RID",f),fe(y,"AID",a.T),Fs(a,y),a.m&&a.o&&wc(y,a.m,a.o),f=new Bn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Om(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),_c(a.h,f),mc(f,y,d)}function Fs(a,d){a.H&&U(a.H,function(f,y){fe(d,y,f)}),a.l&&ym({},function(f,y){fe(d,y,f)})}function Om(a,d,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let V=-1;for(;;){const z=["count="+f];V==-1?0<f?(V=N[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let de=!0;for(let $e=0;$e<f;$e++){let oe=N[$e].g;const Je=N[$e].map;if(oe-=V,0>oe)V=Math.max(0,N[$e].g-100),de=!1;else try{ET(Je,z,"req"+oe+"_")}catch{y&&y(Je)}}if(de){y=z.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,y}function Vm(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Rt||Y(),$||(Rt(),$=!0),q.add(d,a),a.v=0}}function Tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Rs(g(a.Fa,a),jm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Lm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Rs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Ca(this),Lm(this))};function Ic(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Lm(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=mn(a.qa);fe(d,"RID","rpc"),fe(d,"SID",a.K),fe(d,"AID",a.T),fe(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(d,"TO",a.ja),fe(d,"TYPE","xmlhttp"),Fs(a,d),a.m&&a.o&&wc(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Sa(mn(d)),f.m=null,f.P=!0,um(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ca(this),Tc(this),ut(19))};function Ra(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Mm(a,d){var f=null;if(a.g==d){Ra(a),Ic(a),a.g=null;var y=2}else if(vc(a.h,d))f=d.D,mm(a.h,d),y=1;else return;if(a.G!=0){if(d.o)if(y==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var N=a.B;y=va(),lt(y,new sm(y,f)),Pa(a)}else Vm(a);else if(N=d.s,N==3||N==0&&0<d.X||!(y==1&&xT(a,d)||y==2&&Tc(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),N){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function jm(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function Vr(a,d){if(a.j.info("Error code "+d),d==2){var f=g(a.fb,a),y=a.Xa;const N=!y;y=new Or(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ta(y,"https"),Sa(y),N?vT(y.toString(),f):_T(y.toString(),f)}else ut(2);a.G=0,a.l&&a.l.sa(d),Fm(a),Nm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Fm(a){if(a.G=0,a.ka=[],a.l){const d=gm(a.h);(d.length!=0||a.i.length!=0)&&(b(a.ka,d),b(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Um(a,d,f){var y=f instanceof Or?mn(f):new Or(f);if(y.g!="")d&&(y.g=d+"."+y.g),Ia(y,y.s);else{var N=l.location;y=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var V=new Or(null);y&&Ta(V,y),d&&(V.g=d),N&&Ia(V,N),f&&(V.l=f),y=V}return f=a.D,d=a.ya,f&&d&&fe(y,f,d),fe(y,"VER",a.la),Fs(a,y),y}function zm(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Se(new xa({eb:f})):new Se(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $m(){}t=$m.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ba(){}ba.prototype.g=function(a,d){return new Et(a,d)};function Et(a,d){Ye.call(this),this.g=new bm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!_(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new _i(this)}P(Et,Ye),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Ec(this.g)},Et.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=uc(a),a=f);d.i.push(new lT(d.Ya++,a)),d.G==3&&Pa(d)},Et.prototype.N=function(){this.g.l=null,delete this.j,Ec(this.g),delete this.g,Et.aa.N.call(this)};function Bm(a){dc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}P(Bm,dc);function Wm(){hc.call(this),this.status=1}P(Wm,hc);function _i(a){this.g=a}P(_i,$m),_i.prototype.ua=function(){lt(this.g,"a")},_i.prototype.ta=function(a){lt(this.g,new Bm(a))},_i.prototype.sa=function(a){lt(this.g,new Wm)},_i.prototype.ra=function(){lt(this.g,"b")},ba.prototype.createWebChannel=ba.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Qw=function(){return new ba},Gw=function(){return va()},Kw=Nr,wh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_a.NO_ERROR=0,_a.TIMEOUT=8,_a.HTTP_ERROR=6,vl=_a,om.COMPLETE="complete",qw=om,tm.EventType=Cs,Cs.OPEN="a",Cs.CLOSE="b",Cs.ERROR="c",Cs.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,to=tm,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,Hw=Se}).apply(typeof Ja<"u"?Ja:typeof self<"u"?self:typeof window<"u"?window:{});const My="@firebase/firestore";/**
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
 */let nt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let Es="10.14.0";/**
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
 */const ni=new zf("@firebase/firestore");function Gs(){return ni.logLevel}function W(t,...e){if(ni.logLevel<=ne.DEBUG){const n=e.map(tp);ni.debug(`Firestore (${Es}): ${t}`,...n)}}function Mn(t,...e){if(ni.logLevel<=ne.ERROR){const n=e.map(tp);ni.error(`Firestore (${Es}): ${t}`,...n)}}function ss(t,...e){if(ni.logLevel<=ne.WARN){const n=e.map(tp);ni.warn(`Firestore (${Es}): ${t}`,...n)}}function tp(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function ue(t,e){t||Q()}function X(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Yw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class jP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FP{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _r,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new Yw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new nt(e)}}class UP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new UP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $P{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new $P(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function WP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Jw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=WP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new De(0,0))}static max(){return new J(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ho{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ho.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ho?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends Ho{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const HP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Ho{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return HP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ke.fromString(e))}static fromName(e){return new K(ke.fromString(e).popFirst(5))}static empty(){return new K(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ke(e.slice()))}}function qP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new Tr(i,K.empty(),e)}function KP(t){return new Tr(t.readTime,t.key,-1)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(J.min(),K.empty(),-1)}static max(){return new Tr(J.max(),K.empty(),-1)}}function GP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const QP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function la(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==QP)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++l,l===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function JP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ua(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class np{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}np.oe=-1;function Lu(t){return t==null}function nu(t){return t===0&&1/t==-1/0}function XP(t){return typeof t=="number"&&Number.isInteger(t)&&!nu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function jy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Xw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Te{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xa(this.root,e,this.comparator,!0)}}class Xa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fy(this.data.getIterator())}getIteratorFrom(e){return new Fy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class Fy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new St([])}unionWith(e){let n=new Ke(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Zw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Zw("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const ZP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(ue(!!t),typeof t=="string"){let e=0;const n=ZP.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */function rp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ip(t){const e=t.mapValue.fields.__previous_value__;return rp(e)?ip(e):e}function qo(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class eR{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Ko{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Za={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rp(t)?4:nR(t)?9007199254740991:tR(t)?10:11:Q()}function ln(t,e){if(t===e)return!0;const n=ii(t);if(n!==ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ir(i.timestampValue),l=Ir(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ri(i.bytesValue).isEqual(ri(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?nu(o)===nu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(jy(o)!==jy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!ln(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function Go(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=ii(t),r=ii(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Uy(t.timestampValue,e.timestampValue);case 4:return Uy(qo(t),qo(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ri(s),u=ri(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=ae(l[c],u[c]);if(h!==0)return h}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Ce(s.latitude),Ce(o.latitude));return l!==0?l:ae(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return zy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,h;const p=s.fields||{},g=o.fields||{},S=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,R=ae(((c=S==null?void 0:S.values)===null||c===void 0?void 0:c.length)||0,((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:zy(S,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Za.mapValue&&o===Za.mapValue)return 0;if(s===Za.mapValue)return 1;if(o===Za.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const g=ae(u[p],h[p]);if(g!==0)return g;const S=as(l[u[p]],c[h[p]]);if(S!==0)return S}return ae(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Uy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Ir(t),r=Ir(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function zy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=as(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function ls(t){return Eh(t)}function Eh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ri(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Eh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Eh(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function Th(t){return!!t&&"integerValue"in t}function sp(t){return!!t&&"arrayValue"in t}function $y(t){return!!t&&"nullValue"in t}function By(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _l(t){return!!t&&"mapValue"in t}function tR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function go(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=go(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=go(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());_l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];_l(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){pi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(go(this.value))}}function eE(t){const e=[];return pi(t.fields,(n,r)=>{const i=new He([n]);if(_l(r)){const s=eE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new St(e)}/**
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
 */class it{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,J.min(),J.min(),J.min(),gt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,J.min(),J.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,J.min(),J.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ru{constructor(e,n){this.position=e,this.inclusive=n}}function Wy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=as(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class iu{constructor(e,n="asc"){this.field=e,this.dir=n}}function rR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tE{}class Ve extends tE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sR(e,n,r):n==="array-contains"?new lR(e,r):n==="in"?new uR(e,r):n==="not-in"?new cR(e,r):n==="array-contains-any"?new dR(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oR(e,r):new aR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(as(n,this.value)):n!==null&&ii(this.value)===ii(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends tE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return nE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nE(t){return t.op==="and"}function rE(t){return iR(t)&&nE(t)}function iR(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Ih(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(rE(t))return t.filters.map(e=>Ih(e)).join(",");{const e=t.filters.map(n=>Ih(n)).join(",");return`${t.op}(${e})`}}function iE(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&ln(r.value,i.value)}(t,e):t instanceof un?function(r,i){return i instanceof un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&iE(o,i.filters[l]),!0):!1}(t,e):void Q()}function sE(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${ls(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(sE).join(" ,")+"}"}(t):"Filter"}class sR extends Ve{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class oR extends Ve{constructor(e,n){super(e,"in",n),this.keys=oE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aR extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=oE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function oE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class lR extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sp(n)&&Go(n.arrayValue,this.value)}}class uR extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Go(this.value.arrayValue,n)}}class cR extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Go(this.value.arrayValue,n)}}class dR extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Go(this.value.arrayValue,r))}}/**
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
 */class hR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function qy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hR(t,e,n,r,i,s,o)}function op(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ih(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ls(r)).join(",")),e.ue=n}return e.ue}function ap(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hy(t.startAt,e.startAt)&&Hy(t.endAt,e.endAt)}function Sh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Mu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fR(t,e,n,r,i,s,o,l){return new Mu(t,e,n,r,i,s,o,l)}function lp(t){return new Mu(t)}function Ky(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pR(t){return t.collectionGroup!==null}function yo(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new iu(s,r))}),n.has(He.keyField().canonicalString())||e.ce.push(new iu(He.keyField(),r))}return e.ce}function nn(t){const e=X(t);return e.le||(e.le=mR(e,yo(t))),e.le}function mR(t,e){if(t.limitType==="F")return qy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new iu(i.field,s)});const n=t.endAt?new ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ru(t.startAt.position,t.startAt.inclusive):null;return qy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xh(t,e,n){return new Mu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ju(t,e){return ap(nn(t),nn(e))&&t.limitType===e.limitType}function aE(t){return`${op(nn(t))}|lt:${t.limitType}`}function Si(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>sE(i)).join(", ")}]`),Lu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ls(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ls(i)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function Fu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of yo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Wy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,yo(r),i)||r.endAt&&!function(o,l,u){const c=Wy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,yo(r),i))}(t,e)}function gR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lE(t){return(e,n)=>{let r=!1;for(const i of yo(t)){const s=yR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yR(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?as(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){pi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Xw(this.inner)}size(){return this.innerSize}}/**
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
 */const vR=new Te(K.comparator);function jn(){return vR}const uE=new Te(K.comparator);function no(...t){let e=uE;for(const n of t)e=e.insert(n.key,n);return e}function cE(t){let e=uE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return vo()}function dE(){return vo()}function vo(){return new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const _R=new Te(K.comparator),wR=new Ke(K.comparator);function te(...t){let e=wR;for(const n of t)e=e.add(n);return e}const ER=new Ke(ae);function TR(){return ER}/**
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
 */function up(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nu(e)?"-0":e}}function hE(t){return{integerValue:""+t}}function IR(t,e){return XP(e)?hE(e):up(t,e)}/**
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
 */class Uu{constructor(){this._=void 0}}function SR(t,e,n){return t instanceof Qo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&rp(s)&&(s=ip(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof us?pE(t,e):t instanceof cs?mE(t,e):function(i,s){const o=fE(i,s),l=Gy(o)+Gy(i.Pe);return Th(o)&&Th(i.Pe)?hE(l):up(i.serializer,l)}(t,e)}function xR(t,e,n){return t instanceof us?pE(t,e):t instanceof cs?mE(t,e):n}function fE(t,e){return t instanceof su?function(r){return Th(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Qo extends Uu{}class us extends Uu{constructor(e){super(),this.elements=e}}function pE(t,e){const n=gE(e);for(const r of t.elements)n.some(i=>ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class cs extends Uu{constructor(e){super(),this.elements=e}}function mE(t,e){let n=gE(e);for(const r of t.elements)n=n.filter(i=>!ln(i,r));return{arrayValue:{values:n}}}class su extends Uu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Gy(t){return Ce(t.integerValue||t.doubleValue)}function gE(t){return sp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class cp{constructor(e,n){this.field=e,this.transform=n}}function kR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof us&&i instanceof us||r instanceof cs&&i instanceof cs?os(r.elements,i.elements,ln):r instanceof su&&i instanceof su?ln(r.Pe,i.Pe):r instanceof Qo&&i instanceof Qo}(t.transform,e.transform)}class AR{constructor(e,n){this.version=e,this.transformResults=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zu{}function yE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _E(t.key,rn.none()):new ca(t.key,t.data,rn.none());{const n=t.data,r=gt.empty();let i=new Ke(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Rr(t.key,r,new St(i.toArray()),rn.none())}}function CR(t,e,n){t instanceof ca?function(i,s,o){const l=i.value.clone(),u=Yy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(i,s,o){if(!wl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Yy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(vE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof ca?function(s,o,l,u){if(!wl(s.precondition,o))return l;const c=s.value.clone(),h=Jy(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(s,o,l,u){if(!wl(s.precondition,o))return l;const c=Jy(s.fieldTransforms,u,o),h=o.data;return h.setAll(vE(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return wl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function PR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=fE(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function Qy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&os(r,i,(s,o)=>kR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends zu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rr extends zu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yy(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,xR(o,l,n[i]))}return r}function Jy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,SR(s,o,e))}return r}class _E extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RR extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&CR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=yE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>Qy(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>Qy(n,r))}}class dp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return _R}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new dp(e,n,r,i)}}/**
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
 */class NR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class DR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var be,re;function OR(t){switch(t){default:return Q();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function wE(t){if(t===void 0)return Mn("GRPC error has no .code"),j.UNKNOWN;switch(t){case be.OK:return j.OK;case be.CANCELLED:return j.CANCELLED;case be.UNKNOWN:return j.UNKNOWN;case be.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case be.INTERNAL:return j.INTERNAL;case be.UNAVAILABLE:return j.UNAVAILABLE;case be.UNAUTHENTICATED:return j.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case be.NOT_FOUND:return j.NOT_FOUND;case be.ALREADY_EXISTS:return j.ALREADY_EXISTS;case be.PERMISSION_DENIED:return j.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case be.ABORTED:return j.ABORTED;case be.OUT_OF_RANGE:return j.OUT_OF_RANGE;case be.UNIMPLEMENTED:return j.UNIMPLEMENTED;case be.DATA_LOSS:return j.DATA_LOSS;default:return Q()}}(re=be||(be={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function VR(){return new TextEncoder}/**
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
 */const LR=new Qr([4294967295,4294967295],0);function Xy(t){const e=VR().encode(t),n=new Ww;return n.update(e),new Uint8Array(n.digest())}function Zy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([i,s],0)]}class hp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ro(`Invalid padding: ${n}`);if(r<0)throw new ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ro(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Qr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Qr.fromNumber(r)));return i.compare(LR)===1&&(i=new Qr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Xy(e),[r,i]=Zy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Xy(e),[r,i]=Zy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $u{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $u(J.min(),i,new Te(ae),jn(),te())}}class da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,te(),te(),te())}}/**
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
 */class El{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class EE{constructor(e,n){this.targetId=e,this.me=n}}class TE{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ev{constructor(){this.fe=0,this.ge=nv(),this.pe=Qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new da(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=nv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class MR{constructor(e){this.Le=e,this.Be=new Map,this.ke=jn(),this.qe=tv(),this.Qe=new Te(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Sh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,it.newNoDocument(o,J.min()))}else ue(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ri(r).toUint8Array()}catch(u){if(u instanceof Zw)return ss("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hp(o,i,s)}catch(u){return ss(u instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Sh(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,it.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new $u(e,n,this.Qe,this.ke,r);return this.ke=jn(),this.qe=tv(),this.Qe=new Te(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ev,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ke(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ev),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function tv(){return new Te(K.comparator)}function nv(){return new Te(K.comparator)}const jR={asc:"ASCENDING",desc:"DESCENDING"},FR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UR={and:"AND",or:"OR"};class zR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kh(t,e){return t.useProto3Json||Lu(e)?e:{value:e}}function ou(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $R(t,e){return ou(t,e.toTimestamp())}function sn(t){return ue(!!t),J.fromTimestamp(function(n){const r=Ir(n);return new De(r.seconds,r.nanos)}(t))}function fp(t,e){return Ah(t,e).canonicalString()}function Ah(t,e){const n=function(i){return new ke(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function SE(t){const e=ke.fromString(t);return ue(PE(e)),e}function Ch(t,e){return fp(t.databaseId,e.path)}function od(t,e){const n=SE(e);if(n.get(1)!==t.databaseId.projectId)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(kE(n))}function xE(t,e){return fp(t.databaseId,e)}function BR(t){const e=SE(t);return e.length===4?ke.emptyPath():kE(e)}function Ph(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kE(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rv(t,e,n){return{name:Ch(t,e),fields:n.value.mapValue.fields}}function WR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ue(h===void 0||typeof h=="string"),Qe.fromBase64String(h||"")):(ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Qe.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const h=c.code===void 0?j.UNKNOWN:wE(c.code);return new H(h,c.message||"")}(o);n=new TE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=od(t,r.document.name),s=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):J.min(),l=new gt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(i,s,o,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new El(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=od(t,r.document),s=r.readTime?sn(r.readTime):J.min(),o=it.newNoDocument(i,s),l=r.removedTargetIds||[];n=new El([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=od(t,r.document),s=r.removedTargetIds||[];n=new El([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new DR(i,s),l=r.targetId;n=new EE(l,o)}}return n}function HR(t,e){let n;if(e instanceof ca)n={update:rv(t,e.key,e.value)};else if(e instanceof _E)n={delete:Ch(t,e.key)};else if(e instanceof Rr)n={update:rv(t,e.key,e.data),updateMask:eb(e.fieldMask)};else{if(!(e instanceof RR))return Q();n={verify:Ch(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof us)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof cs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof su)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$R(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function qR(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?sn(i.updateTime):sn(s);return o.isEqual(J.min())&&(o=sn(s)),new AR(o,i.transformResults||[])}(n,e))):[]}function KR(t,e){return{documents:[xE(t,e.path)]}}function GR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xE(t,i);const s=function(c){if(c.length!==0)return CE(un.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:xi(g.field),direction:JR(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function QR(t){let e=BR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const g=AE(p);return g instanceof un&&rE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new iu(ki(P.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Lu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,S=p.values||[];return new ru(S,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,S=p.values||[];return new ru(S,g)}(n.endAt)),fR(e,i,o,s,l,"F",u,c)}function YR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function AE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ki(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ki(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ki(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ki(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>AE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function JR(t){return jR[t]}function XR(t){return FR[t]}function ZR(t){return UR[t]}function xi(t){return{fieldPath:t.canonicalString()}}function ki(t){return He.fromServerFormat(t.fieldPath)}function CE(t){return t instanceof Ve?function(n){if(n.op==="=="){if(By(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NAN"}};if($y(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(By(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NAN"}};if($y(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(n.field),op:XR(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(i=>CE(i));return r.length===1?r[0]:{compositeFilter:{op:ZR(n.op),filters:r}}}(t):Q()}function eb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function PE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tb{constructor(e){this.ct=e}}function nb(t){const e=QR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xh(e,e.limit,"L"):e}/**
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
 */class rb{constructor(){this.un=new ib}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Tr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class ib{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ke.comparator)).toArray()}}/**
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
 */class ds{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ds(0)}static kn(){return new ds(-1)}}/**
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
 */class sb{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ob{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ab{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_o(r.mutation,i,St.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=no();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=jn();const o=vo(),l=function(){return vo()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Rr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),_o(h.mutation,c,h.mutation.getFieldMask(),De.now())):o.set(c.key,St.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return l.set(c,new ob(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=vo();let i=new Te((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||St.empty();h=l.applyToLocalView(c,h),r.set(u,h);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,p=dE();h.forEach(g=>{if(!s.has(g)){const S=yE(n.get(g),r.get(g));S!==null&&p.set(g,S),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Br());let l=-1,u=s;return o.next(c=>L.forEach(c,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(h)?L.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(h=>({batchId:l,changes:cE(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=no();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=no();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(p,g){return new Mu(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,it.newInvalidDocument(h)))});let l=no();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&_o(h.mutation,c,St.empty(),De.now()),Fu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class lb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:nb(i.bundledQuery),readTime:sn(i.readTime)}}(n)),L.resolve()}}/**
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
 */class ub{constructor(){this.overlays=new Te(K.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Br(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Br(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=Br(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NR(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class cb{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class pp{constructor(){this.Tr=new Ke(Me.Er),this.dr=new Ke(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new ke([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new ke([])),r=new Me(n,e),i=new Me(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class db{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ke(Me.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ae);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Me(new K(s),0);let l=new Ke(ae);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class hb{constructor(e){this.Mr=e,this.docs=function(){return new Te(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||GP(KP(h),r)<=0||(i.has(h.key)||Fu(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fb(this)}getSize(e){return L.resolve(this.size)}}class fb extends sb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class pb{constructor(e){this.persistence=e,this.Nr=new Ts(n=>op(n),ap),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pp,this.targetCount=0,this.kr=ds.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
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
 */class mb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new np(0),this.Kr=!1,this.Kr=!0,this.$r=new cb,this.referenceDelegate=e(this),this.Ur=new pb(this),this.indexManager=new rb,this.remoteDocumentCache=function(i){return new hb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new tb(n),this.Gr=new lb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ub,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new db(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new gb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class gb extends YP{constructor(e){super(),this.currentSequenceNumber=e}}class mp{constructor(e){this.persistence=e,this.Jr=new pp,this.Yr=null}static Zr(e){return new mp(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class gp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gp(e,n.fromCache,r,i)}}/**
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
 */class yb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class vb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return wk()?8:JP(at())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new yb;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Gs()<=ne.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Gs()<=ne.DEBUG&&W("QueryEngine","Query:",Si(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Gs()<=ne.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):L.resolve())}Yi(e,n){if(Ky(n))return L.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xh(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,xh(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Ky(n)||i.isEqual(J.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(Gs()<=ne.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Si(n)),this.rs(e,o,n,qP(i,-1)).next(l=>l))})}ts(e,n){let r=new Ke(lE(e));return n.forEach((i,s)=>{Fu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Gs()<=ne.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Si(n)),this.Ji.getDocumentsMatchingQuery(e,n,Tr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class _b{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Te(ae),this._s=new Ts(s=>op(s),ap),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ab(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function wb(t,e,n,r){return new _b(t,e,n,r)}async function RE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function Eb(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const p=c.batch,g=p.keys();let S=L.resolve();return g.forEach(P=>{S=S.next(()=>h.getEntry(u,P)).next(R=>{const b=c.docVersions.get(P);ue(b!==null),R.version.compareTo(b)<0&&(p.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),h.addEntry(R)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function bE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Tb(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((h,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,p)));let S=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(Qe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(h.resumeToken,r)),i=i.insert(p,S),function(R,b,w){return R.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,S,h)&&l.push(n.Ur.updateTargetData(s,S))});let u=jn(),c=te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(Ib(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(J.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(h)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function Ib(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Sb(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xb(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Rh(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ua(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function iv(t,e,n){const r=X(t);let i=J.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=X(u),g=p._s.get(h);return g!==void 0?L.resolve(p.os.get(g)):p.Ur.getTargetData(c,h)}(r,o,nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:te())).next(l=>(kb(r,gR(e),l),{documents:l,Ts:s})))}function kb(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class sv{constructor(){this.activeTargetIds=TR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ab{constructor(){this.so=new sv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new sv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Cb{_o(e){}shutdown(){}}/**
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
 */class ov{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let el=null;function ad(){return el===null?el=function(){return 268435456+Math.round(2147483648*Math.random())}():el++,"0x"+el.toString(16)}/**
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
 */const Pb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Rb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const tt="WebChannelConnection";class bb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=ad(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(W("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw ss("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Es}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Pb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=ad();return new Promise((o,l)=>{const u=new Hw;u.setWithCredentials(!0),u.listenOnce(qw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case vl.NO_ERROR:const h=u.getResponseJson();W(tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case vl.TIMEOUT:W(tt,`RPC '${e}' ${s} timed out`),l(new H(j.DEADLINE_EXCEEDED,"Request time out"));break;case vl.HTTP_ERROR:const p=u.getStatus();if(W(tt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const S=g==null?void 0:g.error;if(S&&S.status&&S.message){const P=function(b){const w=b.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(w)>=0?w:j.UNKNOWN}(S.status);l(new H(P,S.message))}else l(new H(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(j.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{W(tt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=ad(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qw(),l=Gw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");W(tt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=o.createWebChannel(h,u);let g=!1,S=!1;const P=new Rb({Io:b=>{S?W(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||(W(tt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),W(tt,`RPC '${e}' stream ${i} sending:`,b),p.send(b))},To:()=>p.close()}),R=(b,w,_)=>{b.listen(w,x=>{try{_(x)}catch(O){setTimeout(()=>{throw O},0)}})};return R(p,to.EventType.OPEN,()=>{S||(W(tt,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),R(p,to.EventType.CLOSE,()=>{S||(S=!0,W(tt,`RPC '${e}' stream ${i} transport closed`),P.So())}),R(p,to.EventType.ERROR,b=>{S||(S=!0,ss(tt,`RPC '${e}' stream ${i} transport errored:`,b),P.So(new H(j.UNAVAILABLE,"The operation could not be completed")))}),R(p,to.EventType.MESSAGE,b=>{var w;if(!S){const _=b.data[0];ue(!!_);const x=_,O=x.error||((w=x[0])===null||w===void 0?void 0:w.error);if(O){W(tt,`RPC '${e}' stream ${i} received error:`,O);const M=O.status;let U=function(E){const T=be[E];if(T!==void 0)return wE(T)}(M),I=O.message;U===void 0&&(U=j.INTERNAL,I="Unknown error status: "+M+" with message "+O.message),S=!0,P.So(new H(U,I)),p.close()}else W(tt,`RPC '${e}' stream ${i} received:`,_),P.bo(_)}}),R(l,Kw.STAT_EVENT,b=>{b.stat===wh.PROXY?W(tt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===wh.NOPROXY&&W(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function ld(){return typeof document<"u"?document:null}/**
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
 */function Bu(t){return new zR(t,!0)}/**
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
 */class NE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class DE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new NE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nb extends DE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=WR(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?sn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ph(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Sh(u)?{documents:KR(s,u)}:{query:GR(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=IE(s,o.resumeToken);const c=kh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=ou(s,o.snapshotVersion.toTimestamp());const c=kh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=YR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ph(this.serializer),n.removeTarget=e,this.a_(n)}}class Db extends DE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=qR(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ph(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>HR(this.serializer,r))};this.a_(n)}}/**
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
 */class Ob extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ah(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ah(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Vb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Mn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Lb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{mi(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await ha(c),c.q_.set("Unknown"),c.L_.delete(4),await Wu(c)}(this))})}),this.q_=new Vb(r,i)}}async function Wu(t){if(mi(t))for(const e of t.B_)await e(!0)}async function ha(t){for(const e of t.B_)await e(!1)}function OE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),wp(n)?_p(n):Is(n).r_()&&vp(n,e))}function yp(t,e){const n=X(t),r=Is(n);n.N_.delete(e),r.r_()&&VE(n,e),n.N_.size===0&&(r.r_()?r.o_():mi(n)&&n.q_.set("Unknown"))}function vp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).A_(e)}function VE(t,e){t.Q_.xe(e),Is(t).R_(e)}function _p(t){t.Q_=new MR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.q_.v_()}function wp(t){return mi(t)&&!Is(t).n_()&&t.N_.size>0}function mi(t){return X(t).L_.size===0}function LE(t){t.Q_=void 0}async function Mb(t){t.q_.set("Online")}async function jb(t){t.N_.forEach((e,n)=>{vp(t,e)})}async function Fb(t,e){LE(t),wp(t)?(t.q_.M_(e),_p(t)):t.q_.set("Unknown")}async function Ub(t,e,n){if(t.q_.set("Online"),e instanceof TE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await au(t,r)}else if(e instanceof El?t.Q_.Ke(e):e instanceof EE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await bE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Qe.EMPTY_BYTE_STRING,h.snapshotVersion)),VE(s,u);const p=new lr(h.target,u,c,h.sequenceNumber);vp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await au(t,r)}}async function au(t,e,n){if(!ua(e))throw e;t.L_.add(1),await ha(t),t.q_.set("Offline"),n||(n=()=>bE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Wu(t)})}function ME(t,e){return e().catch(n=>au(t,n,e))}async function Hu(t){const e=X(t),n=Sr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;zb(e);)try{const i=await Sb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,$b(e,i)}catch(i){await au(e,i)}jE(e)&&FE(e)}function zb(t){return mi(t)&&t.O_.length<10}function $b(t,e){t.O_.push(e);const n=Sr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function jE(t){return mi(t)&&!Sr(t).n_()&&t.O_.length>0}function FE(t){Sr(t).start()}async function Bb(t){Sr(t).p_()}async function Wb(t){const e=Sr(t);for(const n of t.O_)e.m_(n.mutations)}async function Hb(t,e,n){const r=t.O_.shift(),i=dp.from(r,e,n);await ME(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Hu(t)}async function qb(t,e){e&&Sr(t).V_&&await async function(r,i){if(function(o){return OR(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Sr(r).s_(),await ME(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Hu(r)}}(t,e),jE(t)&&FE(t)}async function av(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=mi(n);n.L_.add(3),await ha(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Wu(n)}async function Kb(t,e){const n=X(t);e?(n.L_.delete(2),await Wu(n)):e||(n.L_.add(2),await ha(n),n.q_.set("Unknown"))}function Is(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new Nb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Mb.bind(null,t),Ro:jb.bind(null,t),mo:Fb.bind(null,t),d_:Ub.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),wp(t)?_p(t):t.q_.set("Unknown")):(await t.K_.stop(),LE(t))})),t.K_}function Sr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new Db(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Bb.bind(null,t),mo:qb.bind(null,t),f_:Wb.bind(null,t),g_:Hb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Hu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Ep{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ep(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),ua(t))return new H(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=no(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Gi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class lv{constructor(){this.W_=new Te(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new hs(e,n,Gi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Gb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Qb{constructor(){this.queries=uv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=uv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(j.ABORTED,"Firestore shutting down"))}}function uv(){return new Ts(t=>aE(t),ju)}async function Yb(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Gb,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Tp(o,`Initialization of query '${Si(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Ip(n)}async function Jb(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Xb(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Ip(n)}function Zb(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Ip(t){t.Y_.forEach(e=>{e.next()})}var bh,cv;(cv=bh||(bh={})).ea="default",cv.Cache="cache";class eN{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bh.Cache}}/**
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
 */class UE{constructor(e){this.key=e}}class zE{constructor(e){this.key=e}}class tN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=lE(e),this.Ra=new Gi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new lv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const g=i.get(h),S=Fu(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),R=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;g&&S?g.data.isEqual(S.data)?P!==R&&(r.track({type:3,doc:S}),b=!0):this.ga(g,S)||(r.track({type:2,doc:S}),b=!0,(u&&this.Aa(S,u)>0||c&&this.Aa(S,c)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),b=!0):g&&!S&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(S?(o=o.add(S),s=R?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(S,P){const R=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return R(S)-R(P)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new hs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new lv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new zE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new UE(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return hs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rN{constructor(e){this.key=e,this.va=!1}}class iN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ts(l=>aE(l),ju),this.Ma=new Map,this.xa=new Set,this.Oa=new Te(K.comparator),this.Na=new Map,this.La=new pp,this.Ba={},this.ka=new Map,this.qa=ds.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function sN(t,e,n=!0){const r=KE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await $E(r,e,n,!0),i}async function oN(t,e){const n=KE(t);await $E(n,e,!0,!1)}async function $E(t,e,n,r){const i=await xb(t.localStore,nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await aN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&OE(t.remoteStore,i),l}async function aN(t,e,n,r,i){t.Ka=(p,g,S)=>async function(R,b,w,_){let x=b.view.ma(w);x.ns&&(x=await iv(R.localStore,b.query,!1).then(({documents:I})=>b.view.ma(I,x)));const O=_&&_.targetChanges.get(b.targetId),M=_&&_.targetMismatches.get(b.targetId)!=null,U=b.view.applyChanges(x,R.isPrimaryClient,O,M);return hv(R,b.targetId,U.wa),U.snapshot}(t,p,g,S);const s=await iv(t.localStore,e,!0),o=new tN(e,s.Ts),l=o.ma(s.documents),u=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);hv(t,n,c.wa);const h=new nN(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function lN(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ju(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Rh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yp(r.remoteStore,i.targetId),Nh(r,i.targetId)}).catch(la)):(Nh(r,i.targetId),await Rh(r.localStore,i.targetId,!0))}async function uN(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yp(n.remoteStore,r.targetId))}async function cN(t,e,n){const r=yN(t);try{const i=await function(o,l){const u=X(o),c=De.now(),h=l.reduce((S,P)=>S.add(P.key),te());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=jn(),R=te();return u.cs.getEntries(S,h).next(b=>{P=b,P.forEach((w,_)=>{_.isValidDocument()||(R=R.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,P)).next(b=>{p=b;const w=[];for(const _ of l){const x=PR(_,p.get(_.key).overlayedDocument);x!=null&&w.push(new Rr(_.key,x,eE(x.value.mapValue),rn.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,w,l)}).next(b=>{g=b;const w=b.applyToLocalDocumentSet(p,R);return u.documentOverlayCache.saveOverlays(S,b.batchId,w)})}).then(()=>({batchId:g.batchId,changes:cE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Te(ae)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await fa(r,i.changes),await Hu(r.remoteStore)}catch(i){const s=Tp(i,"Failed to persist write");n.reject(s)}}async function BE(t,e){const n=X(t);try{const r=await Tb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ue(o.va):i.removedDocuments.size>0&&(ue(o.va),o.va=!1))}),await fa(n,r,e)}catch(r){await la(r)}}function dv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((h,p)=>{for(const g of p.j_)g.Z_(l)&&(c=!0)}),c&&Ip(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dN(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Te(K.comparator);o=o.insert(s,it.newNoDocument(s,J.min()));const l=te().add(s),u=new $u(J.min(),new Map,new Te(ae),o,l);await BE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Sp(r)}else await Rh(r.localStore,e,!1).then(()=>Nh(r,e,n)).catch(la)}async function hN(t,e){const n=X(t),r=e.batch.batchId;try{const i=await Eb(n.localStore,e);HE(n,r,null),WE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fa(n,i)}catch(i){await la(i)}}async function fN(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ue(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);HE(r,e,n),WE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fa(r,i)}catch(i){await la(i)}}function WE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function HE(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Nh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||qE(t,r)})}function qE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(yp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Sp(t))}function hv(t,e,n){for(const r of n)r instanceof UE?(t.La.addReference(r.key,e),pN(t,r)):r instanceof zE?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||qE(t,r.key)):Q()}function pN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Sp(t))}function Sp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(ke.fromString(e)),r=t.qa.next();t.Na.set(r,new rN(n)),t.Oa=t.Oa.insert(n,r),OE(t.remoteStore,new lr(nn(lp(n.path)),r,"TargetPurposeLimboResolution",np.oe))}}async function fa(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=gp.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=X(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,g=>L.forEach(g.$i,S=>h.persistence.referenceDelegate.addReference(p,g.targetId,S)).next(()=>L.forEach(g.Ui,S=>h.persistence.referenceDelegate.removeReference(p,g.targetId,S)))))}catch(p){if(!ua(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const S=h.os.get(g),P=S.snapshotVersion,R=S.withLastLimboFreeSnapshotVersion(P);h.os=h.os.insert(g,R)}}}(r.localStore,s))}async function mN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await RE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fa(n,r.hs)}}function gN(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function KE(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=BE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dN.bind(null,e),e.Ca.d_=Xb.bind(null,e.eventManager),e.Ca.$a=Zb.bind(null,e.eventManager),e}function yN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fN.bind(null,e),e}class lu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return wb(this.persistence,new vb,e.initialUser,this.serializer)}Ga(e){return new mb(mp.Zr,this.serializer)}Wa(e){return new Ab}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lu.provider={build:()=>new lu};class Dh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mN.bind(null,this.syncEngine),await Kb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Qb}()}createDatastore(e){const n=Bu(e.databaseInfo.databaseId),r=function(s){return new bb(s)}(e.databaseInfo);return function(s,o,l,u){return new Ob(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Lb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>dv(this.syncEngine,n,0),function(){return ov.D()?new ov:new Cb}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,h){const p=new iN(i,s,o,l,u,c);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ha(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Dh.provider={build:()=>new Dh};/**
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
 */class vN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _N{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=Jw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ud(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await RE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function fv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wN(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>av(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>av(e.remoteStore,i)),t._onlineComponents=e}async function wN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await ud(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ss("Error using user provided cache. Falling back to memory cache: "+n),await ud(t,new lu)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await ud(t,new lu);return t._offlineComponents}async function GE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await fv(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await fv(t,new Dh))),t._onlineComponents}function EN(t){return GE(t).then(e=>e.syncEngine)}async function TN(t){const e=await GE(t),n=e.eventManager;return n.onListen=sN.bind(null,e.syncEngine),n.onUnlisten=lN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uN.bind(null,e.syncEngine),n}function IN(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const h=new vN({next:g=>{h.Za(),o.enqueueAndForget(()=>Jb(s,p));const S=g.docs.has(l);!S&&g.fromCache?c.reject(new H(j.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&u&&u.source==="server"?c.reject(new H(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new eN(lp(l.path),h,{includeMetadataChanges:!0,_a:!0});return Yb(s,p)}(await TN(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function QE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const pv=new Map;/**
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
 */function SN(t,e,n){if(!n)throw new H(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xN(t,e,n,r){if(e===!0&&r===!0)throw new H(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mv(t){if(!K.isDocumentKey(t))throw new H(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function si(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xp(t);throw new H(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class gv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MP;switch(r.type){case"firstParty":return new zP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pv.get(n);r&&(W("ComponentProvider","Removing Datastore"),pv.delete(n),r.terminate())}(this),Promise.resolve()}}function kN(t,e,n,r={}){var i;const s=(t=si(t,kp))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=nt.MOCK_USER;else{l=fk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nt(c)}t._authCredentials=new jP(new Yw(l,u))}}/**
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
 */class Ap{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ap(this.firestore,e,this._query)}}class kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class Yo extends Ap{constructor(e,n,r){super(e,n,lp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new K(e))}withConverter(e){return new Yo(this.firestore,e,this._path)}}function qu(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=Jw.newId()),SN("doc","path",e),t instanceof kp){const r=ke.fromString(e,...n);return mv(r),new kt(t,null,new K(r))}{if(!(t instanceof kt||t instanceof Yo))throw new H(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return mv(r),new kt(t.firestore,t instanceof Yo?t.converter:null,new K(r))}}/**
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
 */class yv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new NE(this,"async_queue_retry"),this.Vu=()=>{const r=ld();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ld();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ld();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new _r;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ua(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Ep.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Ku extends kp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new yv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yv(e),this._firestoreClient=void 0,await e}}}function AN(t,e){const n=typeof t=="object"?t:Bf(),r=typeof t=="string"?t:"(default)",i=vs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dk("firestore");s&&kN(i,...s)}return i}function YE(t){if(t._terminated)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CN(t),t._firestoreClient}function CN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,h){return new eR(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,QE(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new _N(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fs(Qe.fromBase64String(e))}catch(n){throw new H(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fs(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ss{constructor(e){this._methodName=e}}/**
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
 */class Cp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
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
 */class Pp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const PN=/^__.*__$/;class RN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}class JE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function XE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Qu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return uu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(XE(this.Cu)&&PN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class bN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bu(e)}Qu(e,n,r,i=!1){return new Qu({Cu:e,methodName:n,qu:r,path:He.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ZE(t){const e=t._freezeSettings(),n=Bu(t._databaseId);return new bN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function NN(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Dp("Data must be an object, but it was:",o,r);const l=t1(r,o);let u,c;if(s.merge)u=new St(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const g=Oh(e,p,n);if(!o.contains(g))throw new H(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);r1(h,g)||h.push(g)}u=new St(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new RN(new gt(l),u,c)}class Yu extends Ss{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yu}}function e1(t,e,n){return new Qu({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Rp extends Ss{_toFieldTransform(e){return new cp(e.path,new Qo)}isEqual(e){return e instanceof Rp}}class bp extends Ss{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=e1(this,e,!0),r=this.Ku.map(s=>xs(s,n)),i=new us(r);return new cp(e.path,i)}isEqual(e){return e instanceof bp&&rs(this.Ku,e.Ku)}}class Np extends Ss{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=e1(this,e,!0),r=this.Ku.map(s=>xs(s,n)),i=new cs(r);return new cp(e.path,i)}isEqual(e){return e instanceof Np&&rs(this.Ku,e.Ku)}}function DN(t,e,n,r){const i=t.Qu(1,e,n);Dp("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();pi(r,(u,c)=>{const h=Op(e,u,n);c=Ue(c);const p=i.Nu(h);if(c instanceof Yu)s.push(h);else{const g=xs(c,p);g!=null&&(s.push(h),o.set(h,g))}});const l=new St(s);return new JE(o,l,i.fieldTransforms)}function ON(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Oh(e,r,n)],u=[i];if(s.length%2!=0)throw new H(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Oh(e,s[g])),u.push(s[g+1]);const c=[],h=gt.empty();for(let g=l.length-1;g>=0;--g)if(!r1(c,l[g])){const S=l[g];let P=u[g];P=Ue(P);const R=o.Nu(S);if(P instanceof Yu)c.push(S);else{const b=xs(P,R);b!=null&&(c.push(S),h.set(S,b))}}const p=new St(c);return new JE(h,p,o.fieldTransforms)}function xs(t,e){if(n1(t=Ue(t)))return Dp("Unsupported field value:",e,t),t1(t,e);if(t instanceof Ss)return function(r,i){if(!XE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=xs(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:ou(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ou(i.serializer,s)}}if(r instanceof Cp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fs)return{bytesValue:IE(i.serializer,r._byteString)};if(r instanceof kt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Pp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return up(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${xp(r)}`)}(t,e)}function t1(t,e){const n={};return Xw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pi(t,(r,i)=>{const s=xs(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function n1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Cp||t instanceof fs||t instanceof kt||t instanceof Ss||t instanceof Pp)}function Dp(t,e,n){if(!n1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=xp(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Oh(t,e,n){if((e=Ue(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return Op(t,e);throw uu("Field path arguments must be of type string or ",t,!1,void 0,n)}const VN=new RegExp("[~\\*/\\[\\]]");function Op(t,e,n){if(e.search(VN)>=0)throw uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(j.INVALID_ARGUMENT,l+t+u)}function r1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class i1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(s1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LN extends i1{data(){return super.data()}}function s1(t,e){return typeof e=="string"?Op(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}class MN{convertValue(e,n="none"){switch(ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return pi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ce(o.doubleValue));return new Pp(s)}convertGeoPoint(e){return new Cp(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ip(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);ue(PE(r));const i=new Ko(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function jN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class FN{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class o1 extends i1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new UN(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(s1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class UN extends o1{data(e={}){return super.data(e)}}/**
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
 */function a1(t){t=si(t,kt);const e=si(t.firestore,Ku);return IN(YE(e),t._key).then(n=>BN(e,t,n))}class zN extends MN{constructor(e){super(),this.firestore=e}convertBytes(e){return new fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function $N(t,e,n){t=si(t,kt);const r=si(t.firestore,Ku),i=jN(t.converter,e);return l1(r,[NN(ZE(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,rn.none())])}function Vp(t,e,n,...r){t=si(t,kt);const i=si(t.firestore,Ku),s=ZE(i);let o;return o=typeof(e=Ue(e))=="string"||e instanceof Gu?ON(s,"updateDoc",t._key,e,n,r):DN(s,"updateDoc",t._key,e),l1(i,[o.toMutation(t._key,rn.exists(!0))])}function l1(t,e){return function(r,i){const s=new _r;return r.asyncQueue.enqueueAndForget(async()=>cN(await EN(r),i,s)),s.promise}(YE(t),e)}function BN(t,e,n){const r=n.docs.get(e._key),i=new zN(t);return new o1(t,i,e._key,r,new FN(n.hasPendingWrites,n.fromCache),e.converter)}function vv(){return new Rp("serverTimestamp")}function WN(...t){return new bp("arrayUnion",t)}function HN(...t){return new Np("arrayRemove",t)}(function(e,n=!0){(function(i){Es=i})(_s),on(new Kt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ku(new FP(r.getProvider("auth-internal")),new BP(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Vt(My,"4.7.3",e),Vt(My,"4.7.3","esm2017")})();const u1="@firebase/installations",Lp="0.6.9";/**
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
 */const c1=1e4,d1=`w:${Lp}`,h1="FIS_v2",qN="https://firebaseinstallations.googleapis.com/v1",KN=60*60*1e3,GN="installations",QN="Installations";/**
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
 */const YN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},oi=new fi(GN,QN,YN);function f1(t){return t instanceof cn&&t.code.includes("request-failed")}/**
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
 */function p1({projectId:t}){return`${qN}/projects/${t}/installations`}function m1(t){return{token:t.token,requestStatus:2,expiresIn:XN(t.expiresIn),creationTime:Date.now()}}async function g1(t,e){const r=(await e.json()).error;return oi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function y1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function JN(t,{refreshToken:e}){const n=y1(t);return n.append("Authorization",ZN(e)),n}async function v1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function XN(t){return Number(t.replace("s","000"))}function ZN(t){return`${h1} ${t}`}/**
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
 */async function e2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=p1(t),i=y1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:h1,appId:t.appId,sdkVersion:d1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await v1(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:m1(c.authToken)}}else throw await g1("Create Installation",u)}/**
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
 */function _1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function t2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const n2=/^[cdef][\w-]{21}$/,Vh="";function r2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=i2(t);return n2.test(n)?n:Vh}catch{return Vh}}function i2(t){return t2(t).substr(0,22)}/**
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
 */function Ju(t){return`${t.appName}!${t.appId}`}/**
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
 */const w1=new Map;function E1(t,e){const n=Ju(t);T1(n,e),s2(n,e)}function T1(t,e){const n=w1.get(t);if(n)for(const r of n)r(e)}function s2(t,e){const n=o2();n&&n.postMessage({key:t,fid:e}),a2()}let Wr=null;function o2(){return!Wr&&"BroadcastChannel"in self&&(Wr=new BroadcastChannel("[Firebase] FID Change"),Wr.onmessage=t=>{T1(t.data.key,t.data.fid)}),Wr}function a2(){w1.size===0&&Wr&&(Wr.close(),Wr=null)}/**
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
 */const l2="firebase-installations-database",u2=1,ai="firebase-installations-store";let cd=null;function Mp(){return cd||(cd=Nu(l2,u2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ai)}}})),cd}async function cu(t,e){const n=Ju(t),i=(await Mp()).transaction(ai,"readwrite"),s=i.objectStore(ai),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&E1(t,e.fid),e}async function I1(t){const e=Ju(t),r=(await Mp()).transaction(ai,"readwrite");await r.objectStore(ai).delete(e),await r.done}async function Xu(t,e){const n=Ju(t),i=(await Mp()).transaction(ai,"readwrite"),s=i.objectStore(ai),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&E1(t,l.fid),l}/**
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
 */async function jp(t){let e;const n=await Xu(t.appConfig,r=>{const i=c2(r),s=d2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Vh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function c2(t){const e=t||{fid:r2(),registrationStatus:0};return S1(e)}function d2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(oi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=h2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:f2(t)}:{installationEntry:e}}async function h2(t,e){try{const n=await e2(t,e);return cu(t.appConfig,n)}catch(n){throw f1(n)&&n.customData.serverCode===409?await I1(t.appConfig):await cu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function f2(t){let e=await _v(t.appConfig);for(;e.registrationStatus===1;)await _1(100),e=await _v(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jp(t);return r||n}return e}function _v(t){return Xu(t,e=>{if(!e)throw oi.create("installation-not-found");return S1(e)})}function S1(t){return p2(t)?{fid:t.fid,registrationStatus:0}:t}function p2(t){return t.registrationStatus===1&&t.registrationTime+c1<Date.now()}/**
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
 */async function m2({appConfig:t,heartbeatServiceProvider:e},n){const r=g2(t,n),i=JN(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:d1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await v1(()=>fetch(r,l));if(u.ok){const c=await u.json();return m1(c)}else throw await g1("Generate Auth Token",u)}function g2(t,{fid:e}){return`${p1(t)}/${e}/authTokens:generate`}/**
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
 */async function Fp(t,e=!1){let n;const r=await Xu(t.appConfig,s=>{if(!x1(s))throw oi.create("not-registered");const o=s.authToken;if(!e&&_2(o))return s;if(o.requestStatus===1)return n=y2(t,e),s;{if(!navigator.onLine)throw oi.create("app-offline");const l=E2(s);return n=v2(t,l),l}});return n?await n:r.authToken}async function y2(t,e){let n=await wv(t.appConfig);for(;n.authToken.requestStatus===1;)await _1(100),n=await wv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Fp(t,e):r}function wv(t){return Xu(t,e=>{if(!x1(e))throw oi.create("not-registered");const n=e.authToken;return T2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function v2(t,e){try{const n=await m2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await cu(t.appConfig,r),n}catch(n){if(f1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await I1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await cu(t.appConfig,r)}throw n}}function x1(t){return t!==void 0&&t.registrationStatus===2}function _2(t){return t.requestStatus===2&&!w2(t)}function w2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+KN}function E2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function T2(t){return t.requestStatus===1&&t.requestTime+c1<Date.now()}/**
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
 */async function I2(t){const e=t,{installationEntry:n,registrationPromise:r}=await jp(e);return r?r.catch(console.error):Fp(e).catch(console.error),n.fid}/**
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
 */async function S2(t,e=!1){const n=t;return await x2(n),(await Fp(n,e)).token}async function x2(t){const{registrationPromise:e}=await jp(t);e&&await e}/**
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
 */function k2(t){if(!t||!t.options)throw dd("App Configuration");if(!t.name)throw dd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw dd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function dd(t){return oi.create("missing-app-config-values",{valueName:t})}/**
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
 */const k1="installations",A2="installations-internal",C2=t=>{const e=t.getProvider("app").getImmediate(),n=k2(e),r=vs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},P2=t=>{const e=t.getProvider("app").getImmediate(),n=vs(e,k1).getImmediate();return{getId:()=>I2(n),getToken:i=>S2(n,i)}};function R2(){on(new Kt(k1,C2,"PUBLIC")),on(new Kt(A2,P2,"PRIVATE"))}R2();Vt(u1,Lp);Vt(u1,Lp,"esm2017");/**
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
 */const b2="/firebase-messaging-sw.js",N2="/firebase-cloud-messaging-push-scope",A1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",D2="https://fcmregistrations.googleapis.com/v1",C1="google.c.a.c_id",O2="google.c.a.c_l",V2="google.c.a.ts",L2="google.c.a.e";var Ev;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ev||(Ev={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Jo;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Jo||(Jo={}));/**
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
 */function wn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function M2(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const hd="fcm_token_details_db",j2=5,Tv="fcm_token_object_Store";async function F2(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(hd))return null;let e=null;return(await Nu(hd,j2,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(Tv))return;const u=o.objectStore(Tv),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(l=h.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:wn(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:wn(h.auth),p256dh:wn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:wn(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:wn(h.auth),p256dh:wn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:wn(h.vapidKey)}}}}}})).close(),await td(hd),await td("fcm_vapid_details_db"),await td("undefined"),U2(e)?e:null}function U2(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const z2="firebase-messaging-database",$2=1,Xo="firebase-messaging-store";let fd=null;function P1(){return fd||(fd=Nu(z2,$2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xo)}}})),fd}async function B2(t){const e=R1(t),r=await(await P1()).transaction(Xo).objectStore(Xo).get(e);if(r)return r;{const i=await F2(t.appConfig.senderId);if(i)return await Up(t,i),i}}async function Up(t,e){const n=R1(t),i=(await P1()).transaction(Xo,"readwrite");return await i.objectStore(Xo).put(e,n),await i.done,e}function R1({appConfig:t}){return t.appId}/**
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
 */const W2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},st=new fi("messaging","Messaging",W2);/**
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
 */async function H2(t,e){const n=await $p(t),r=b1(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(zp(t.appConfig),i)).json()}catch(o){throw st.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw st.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw st.create("token-subscribe-no-token");return s.token}async function q2(t,e){const n=await $p(t),r=b1(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${zp(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw st.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw st.create("token-update-failed",{errorInfo:o})}if(!s.token)throw st.create("token-update-no-token");return s.token}async function K2(t,e){const r={method:"DELETE",headers:await $p(t)};try{const s=await(await fetch(`${zp(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw st.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw st.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function zp({projectId:t}){return`${D2}/projects/${t}/registrations`}async function $p({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function b1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==A1&&(i.web.applicationPubKey=r),i}/**
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
 */const G2=7*24*60*60*1e3;async function Q2(t){const e=await J2(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:wn(e.getKey("auth")),p256dh:wn(e.getKey("p256dh"))},r=await B2(t.firebaseDependencies);if(r){if(X2(r.subscriptionOptions,n))return Date.now()>=r.createTime+G2?Y2(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await K2(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Iv(t.firebaseDependencies,n)}else return Iv(t.firebaseDependencies,n)}async function Y2(t,e){try{const n=await q2(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Up(t.firebaseDependencies,r),n}catch(n){throw n}}async function Iv(t,e){const r={token:await H2(t,e),createTime:Date.now(),subscriptionOptions:e};return await Up(t,r),r.token}async function J2(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:M2(e)})}function X2(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function Sv(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Z2(e,t),eD(e,t),tD(e,t),e}function Z2(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function eD(t,e){e.data&&(t.data=e.data)}function tD(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
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
 */function nD(t){return typeof t=="object"&&!!t&&C1 in t}/**
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
 */function rD(t){if(!t||!t.options)throw pd("App Configuration Object");if(!t.name)throw pd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw pd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function pd(t){return st.create("missing-app-config-values",{valueName:t})}/**
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
 */class iD{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=rD(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function sD(t){try{t.swRegistration=await navigator.serviceWorker.register(b2,{scope:N2}),t.swRegistration.update().catch(()=>{})}catch(e){throw st.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function oD(t,e){if(!e&&!t.swRegistration&&await sD(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw st.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function aD(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=A1)}/**
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
 */async function N1(t,e){if(!navigator)throw st.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw st.create("permission-blocked");return await aD(t,e==null?void 0:e.vapidKey),await oD(t,e==null?void 0:e.serviceWorkerRegistration),Q2(t)}/**
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
 */async function lD(t,e,n){const r=uD(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[C1],message_name:n[O2],message_time:n[V2],message_device_time:Math.floor(Date.now()/1e3)})}function uD(t){switch(t){case Jo.NOTIFICATION_CLICKED:return"notification_open";case Jo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function cD(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Jo.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Sv(n)):t.onMessageHandler.next(Sv(n)));const r=n.data;nD(r)&&r[L2]==="1"&&await lD(t,n.messageType,r)}const xv="@firebase/messaging",kv="0.12.12";/**
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
 */const dD=t=>{const e=new iD(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>cD(e,n)),e},hD=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>N1(e,r)}};function fD(){on(new Kt("messaging",dD,"PUBLIC")),on(new Kt("messaging-internal",hD,"PRIVATE")),Vt(xv,kv),Vt(xv,kv,"esm2017")}/**
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
 */async function pD(){try{await aw()}catch{return!1}return typeof window<"u"&&ow()&&Ek()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function mD(t,e){if(!navigator)throw st.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function gD(t=Bf()){return pD().then(e=>{if(!e)throw st.create("unsupported-browser")},e=>{throw st.create("indexed-db-unsupported")}),vs(Ue(t),"messaging").getImmediate()}async function D1(t,e){return t=Ue(t),N1(t,e)}function yD(t,e){return t=Ue(t),mD(t,e)}fD();function Lh(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function vD(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function _D(t,e){const n=Lh(t);return isNaN(e)?vD(t,NaN):(n.setDate(n.getDate()+e),n)}function wD(t,e){const n=Lh(t),r=Lh(e);return n.getTime()>r.getTime()}const ED={apiKey:"AIzaSyC4ym5LmDVI_hnMz258y7msAonpjbGNk8M",authDomain:"dashboardmanager-94a43.firebaseapp.com",projectId:"dashboardmanager-94a43",storageBucket:"dashboardmanager-94a43.firebasestorage.app",messagingSenderId:"778251849654",appId:"1:778251849654:web:9cb047e533243e1b04fb17"},Bp=cw(ED),du=DP(Bp),Zu=AN(Bp),hu=gD(Bp),TD=new Tn,ID=async()=>{try{return await Notification.requestPermission()==="granted"?await D1(hu,{vapidKey:"BK9QLdUsyznLTk6N9zcMhje0m88yWVeGgvbF7Ef7AkuBqqZ-pbv1iDD6QUIvuvCmBI_VMtK0eW4AOWWVlvij_Bw"}):null}catch(t){return console.error("Error requesting notification permission:",t),null}},SD=async(t,e)=>{const n=qu(Zu,"users",t);await Vp(n,{fcmTokens:WN(e)})},xD=async(t,e)=>{const n=qu(Zu,"users",t);await Vp(n,{fcmTokens:HN(e)})},kD=async()=>{try{const e=(await $C(du,TD)).user;await CD(e);const n=await ID();return n&&await SD(e.uid,n),e}catch(t){throw console.error("Error signing in with Google:",t),t}},AD=async()=>{try{const t=du.currentUser;if(t){const e=await D1(hu,{vapidKey:"BK9QLdUsyznLTk6N9zcMhje0m88yWVeGgvbF7Ef7AkuBqqZ-pbv1iDD6QUIvuvCmBI_VMtK0eW4AOWWVlvij_Bw"});e&&await xD(t.uid,e)}localStorage.removeItem("user"),sessionStorage.clear(),await TC(du),window.location.reload()}catch(t){throw console.error("Error signing out:",t),t}},CD=async t=>{var r,i;const e=qu(Zu,"users",t.uid),n=await a1(e);if(n.exists()){const s={};return t.displayName&&t.displayName!==((r=n.data())==null?void 0:r.displayName)&&(s.displayName=t.displayName),t.photoURL&&t.photoURL!==((i=n.data())==null?void 0:i.photoURL)&&(s.photoURL=t.photoURL),Object.keys(s).length>0&&await Vp(e,s),n.data()}else{const o=_D(new Date,15),l={uid:t.uid,email:t.email||"",displayName:t.displayName||"",photoURL:t.photoURL||"",createdAt:vv(),trialStart:vv(),expiryDate:De.fromDate(o),plan:"free",referralCode:t.uid,fcmTokens:[]};return await $N(e,l),l}},Wp=async t=>{const e=qu(Zu,"users",t),n=await a1(e);return n.exists()?n.data():null},ec=async t=>{const e=await Wp(t);if(!e)throw new Error("User not found");const n=new Date,r=e.expiryDate.toDate(),i=e.plan==="paid";return{isValid:i||wD(r,n),isPaid:i,expiryDate:r}},O1=D.createContext({user:null,userData:null,loading:!0,error:null}),PD=({children:t})=>{const[e,n]=D.useState(null),[r,i]=D.useState(null),[s,o]=D.useState(!0),[l,u]=D.useState(null);return D.useEffect(()=>{const c=EC(du,async h=>{o(!0);try{if(h){n(h);const p=await Wp(h.uid);i(p)}else n(null),i(null)}catch(p){console.error("Error in auth state change:",p),u(p instanceof Error?p:new Error("Unknown error in authentication"))}finally{o(!1)}});return()=>c()},[]),m.jsx(O1.Provider,{value:{user:e,userData:r,loading:s,error:l},children:t})},$n=()=>{const t=D.useContext(O1);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return{...t,signInWithGoogle:kD,signOut:AD}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ie=(t,e)=>{const n=D.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},h)=>D.createElement("svg",{ref:h,...RD,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${bD(t)}`,l].join(" "),...c},[...e.map(([p,g])=>D.createElement(p,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=Ie("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=Ie("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=Ie("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=Ie("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=Ie("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=Ie("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VD=Ie("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LD=Ie("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=Ie("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=Ie("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=Ie("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=Ie("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UD=Ie("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=Ie("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $D=Ie("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=Ie("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=Ie("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=Ie("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qD=Ie("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=Ie("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=Ie("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=Ie("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=Ie("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function j1(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=j1(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function GD(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=j1(t))&&(r&&(r+=" "),r+=e);return r}const Hp="-",QD=t=>{const e=JD(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const l=o.split(Hp);return l[0]===""&&l.length!==1&&l.shift(),F1(l,e)||YD(o)},getConflictingClassGroupIds:(o,l)=>{const u=n[o]||[];return l&&r[o]?[...u,...r[o]]:u}}},F1=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?F1(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const s=t.join(Hp);return(o=e.validators.find(({validator:l})=>l(s)))==null?void 0:o.classGroupId},Cv=/^\[(.+)\]$/,YD=t=>{if(Cv.test(t)){const e=Cv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},JD=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return ZD(Object.entries(t.classGroups),n).forEach(([s,o])=>{jh(o,r,s,e)}),r},jh=(t,e,n,r)=>{t.forEach(i=>{if(typeof i=="string"){const s=i===""?e:Pv(e,i);s.classGroupId=n;return}if(typeof i=="function"){if(XD(i)){jh(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,o])=>{jh(o,Pv(e,s),n,r)})})},Pv=(t,e)=>{let n=t;return e.split(Hp).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},XD=t=>t.isThemeGetter,ZD=(t,e)=>e?t.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>[e+o,l])):s);return[n,i]}):t,eO=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const i=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=r.get(s))!==void 0)return i(s,o),o},set(s,o){n.has(s)?n.set(s,o):i(s,o)}}},U1="!",tO=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,i=e[0],s=e.length,o=l=>{const u=[];let c=0,h=0,p;for(let b=0;b<l.length;b++){let w=l[b];if(c===0){if(w===i&&(r||l.slice(b,b+s)===e)){u.push(l.slice(h,b)),h=b+s;continue}if(w==="/"){p=b;continue}}w==="["?c++:w==="]"&&c--}const g=u.length===0?l:l.substring(h),S=g.startsWith(U1),P=S?g.substring(1):g,R=p&&p>h?p-h:void 0;return{modifiers:u,hasImportantModifier:S,baseClassName:P,maybePostfixModifierPosition:R}};return n?l=>n({className:l,parseClassName:o}):o},nO=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},rO=t=>({cache:eO(t.cacheSize),parseClassName:tO(t),...QD(t)}),iO=/\s+/,sO=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,s=[],o=t.trim().split(iO);let l="";for(let u=o.length-1;u>=0;u-=1){const c=o[u],{modifiers:h,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:S}=n(c);let P=!!S,R=r(P?g.substring(0,S):g);if(!R){if(!P){l=c+(l.length>0?" "+l:l);continue}if(R=r(g),!R){l=c+(l.length>0?" "+l:l);continue}P=!1}const b=nO(h).join(":"),w=p?b+U1:b,_=w+R;if(s.includes(_))continue;s.push(_);const x=i(R,P);for(let O=0;O<x.length;++O){const M=x[O];s.push(w+M)}l=c+(l.length>0?" "+l:l)}return l};function oO(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=z1(e))&&(r&&(r+=" "),r+=n);return r}const z1=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=z1(t[r]))&&(n&&(n+=" "),n+=e);return n};function aO(t,...e){let n,r,i,s=o;function o(u){const c=e.reduce((h,p)=>p(h),t());return n=rO(c),r=n.cache.get,i=n.cache.set,s=l,l(u)}function l(u){const c=r(u);if(c)return c;const h=sO(u,n);return i(u,h),h}return function(){return s(oO.apply(null,arguments))}}const pe=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},$1=/^\[(?:([a-z-]+):)?(.+)\]$/i,lO=/^\d+\/\d+$/,uO=new Set(["px","full","screen"]),cO=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,dO=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hO=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,fO=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,pO=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,yn=t=>Qi(t)||uO.has(t)||lO.test(t),Gn=t=>ks(t,"length",TO),Qi=t=>!!t&&!Number.isNaN(Number(t)),md=t=>ks(t,"number",Qi),Qs=t=>!!t&&Number.isInteger(Number(t)),mO=t=>t.endsWith("%")&&Qi(t.slice(0,-1)),Z=t=>$1.test(t),Qn=t=>cO.test(t),gO=new Set(["length","size","percentage"]),yO=t=>ks(t,gO,B1),vO=t=>ks(t,"position",B1),_O=new Set(["image","url"]),wO=t=>ks(t,_O,SO),EO=t=>ks(t,"",IO),Ys=()=>!0,ks=(t,e,n)=>{const r=$1.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},TO=t=>dO.test(t)&&!hO.test(t),B1=()=>!1,IO=t=>fO.test(t),SO=t=>pO.test(t),xO=()=>{const t=pe("colors"),e=pe("spacing"),n=pe("blur"),r=pe("brightness"),i=pe("borderColor"),s=pe("borderRadius"),o=pe("borderSpacing"),l=pe("borderWidth"),u=pe("contrast"),c=pe("grayscale"),h=pe("hueRotate"),p=pe("invert"),g=pe("gap"),S=pe("gradientColorStops"),P=pe("gradientColorStopPositions"),R=pe("inset"),b=pe("margin"),w=pe("opacity"),_=pe("padding"),x=pe("saturate"),O=pe("scale"),M=pe("sepia"),U=pe("skew"),I=pe("space"),v=pe("translate"),E=()=>["auto","contain","none"],T=()=>["auto","hidden","clip","visible","scroll"],A=()=>["auto",Z,e],C=()=>[Z,e],k=()=>["",yn,Gn],ze=()=>["auto",Qi,Z],Gt=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Qt=()=>["solid","dashed","dotted","double","none"],Rt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",Z],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ie=()=>[Qi,Z];return{cacheSize:500,separator:":",theme:{colors:[Ys],spacing:[yn,Gn],blur:["none","",Qn,Z],brightness:ie(),borderColor:[t],borderRadius:["none","","full",Qn,Z],borderSpacing:C(),borderWidth:k(),contrast:ie(),grayscale:q(),hueRotate:ie(),invert:q(),gap:C(),gradientColorStops:[t],gradientColorStopPositions:[mO,Gn],inset:A(),margin:A(),opacity:ie(),padding:C(),saturate:ie(),scale:ie(),sepia:q(),skew:ie(),space:C(),translate:C()},classGroups:{aspect:[{aspect:["auto","square","video",Z]}],container:["container"],columns:[{columns:[Qn]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Gt(),Z]}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[R]}],"inset-x":[{"inset-x":[R]}],"inset-y":[{"inset-y":[R]}],start:[{start:[R]}],end:[{end:[R]}],top:[{top:[R]}],right:[{right:[R]}],bottom:[{bottom:[R]}],left:[{left:[R]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Qs,Z]}],basis:[{basis:A()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Z]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",Qs,Z]}],"grid-cols":[{"grid-cols":[Ys]}],"col-start-end":[{col:["auto",{span:["full",Qs,Z]},Z]}],"col-start":[{"col-start":ze()}],"col-end":[{"col-end":ze()}],"grid-rows":[{"grid-rows":[Ys]}],"row-start-end":[{row:["auto",{span:[Qs,Z]},Z]}],"row-start":[{"row-start":ze()}],"row-end":[{"row-end":ze()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Z]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Z,e]}],"min-w":[{"min-w":[Z,e,"min","max","fit"]}],"max-w":[{"max-w":[Z,e,"none","full","min","max","fit","prose",{screen:[Qn]},Qn]}],h:[{h:[Z,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Z,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Z,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Z,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Qn,Gn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",md]}],"font-family":[{font:[Ys]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Z]}],"line-clamp":[{"line-clamp":["none",Qi,md]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",yn,Z]}],"list-image":[{"list-image":["none",Z]}],"list-style-type":[{list:["none","disc","decimal",Z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Qt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",yn,Gn]}],"underline-offset":[{"underline-offset":["auto",yn,Z]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Gt(),vO]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",yO]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},wO]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[P]}],"gradient-via-pos":[{via:[P]}],"gradient-to-pos":[{to:[P]}],"gradient-from":[{from:[S]}],"gradient-via":[{via:[S]}],"gradient-to":[{to:[S]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[...Qt(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:Qt()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...Qt()]}],"outline-offset":[{"outline-offset":[yn,Z]}],"outline-w":[{outline:[yn,Gn]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:k()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[yn,Gn]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Qn,EO]}],"shadow-color":[{shadow:[Ys]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":[...Rt(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Rt()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",Qn,Z]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[p]}],saturate:[{saturate:[x]}],sepia:[{sepia:[M]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Z]}],duration:[{duration:ie()}],ease:[{ease:["linear","in","out","in-out",Z]}],delay:[{delay:ie()}],animate:[{animate:["none","spin","ping","pulse","bounce",Z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[Qs,Z]}],"translate-x":[{"translate-x":[v]}],"translate-y":[{"translate-y":[v]}],"skew-x":[{"skew-x":[U]}],"skew-y":[{"skew-y":[U]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Z]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[yn,Gn,md]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},kO=aO(xO);function wo(...t){return kO(GD(t))}const Eo=(t,e="INR")=>new Intl.NumberFormat("en-IN",{style:"currency",currency:e}).format(t),Rv=()=>`ORD-${Math.floor(Math.random()*1e4).toString().padStart(4,"0")}`,W1=t=>{const e=new Date,n=t.getTime()-e.getTime();return n>864e5?`${Math.ceil(n/864e5)} days`:n>0?`${Math.ceil(n/36e5)} hours`:"Expired"};let AO={data:""},CO=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||AO,PO=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,RO=/\/\*[^]*?\*\/|  +/g,bv=/\n+/g,ir=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?ir(o,s):s+"{"+ir(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=ir(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=ir.p?ir.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},vn={},H1=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+H1(t[n]);return e}return t},bO=(t,e,n,r,i)=>{let s=H1(t),o=vn[s]||(vn[s]=(u=>{let c=0,h=11;for(;c<u.length;)h=101*h+u.charCodeAt(c++)>>>0;return"go"+h})(s));if(!vn[o]){let u=s!==t?t:(c=>{let h,p,g=[{}];for(;h=PO.exec(c.replace(RO,""));)h[4]?g.shift():h[3]?(p=h[3].replace(bv," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][h[1]]=h[2].replace(bv," ").trim();return g[0]})(t);vn[o]=ir(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&vn.g?vn.g:null;return n&&(vn.g=vn[o]),((u,c,h,p)=>{p?c.data=c.data.replace(p,u):c.data.indexOf(u)===-1&&(c.data=h?u+c.data:c.data+u)})(vn[o],e,r,l),o},NO=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":ir(l,""):l===!1?"":l}return r+i+(o??"")},"");function tc(t){let e=this||{},n=t.call?t(e.p):t;return bO(n.unshift?n.raw?NO(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,CO(e.target),e.g,e.o,e.k)}let q1,Fh,Uh;tc.bind({g:1});let Fn=tc.bind({k:1});function DO(t,e,n,r){ir.p=e,q1=t,Fh=n,Uh=r}function br(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:Fh&&Fh()},l),n.o=/ *go\d+/.test(u),l.className=tc.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=l.as||t,delete l.as),Uh&&c[0]&&Uh(l),q1(c,l)}return i}}var OO=t=>typeof t=="function",fu=(t,e)=>OO(t)?t(e):t,VO=(()=>{let t=0;return()=>(++t).toString()})(),K1=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),LO=20,G1=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,LO)};case 1:return{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return G1(t,{type:t.toasts.find(s=>s.id===n.id)?1:0,toast:n});case 3:let{toastId:r}=e;return{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Tl=[],Hr={toasts:[],pausedAt:void 0},gi=t=>{Hr=G1(Hr,t),Tl.forEach(e=>{e(Hr)})},MO={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},jO=(t={})=>{let[e,n]=D.useState(Hr),r=D.useRef(Hr);D.useEffect(()=>(r.current!==Hr&&n(Hr),Tl.push(n),()=>{let s=Tl.indexOf(n);s>-1&&Tl.splice(s,1)}),[]);let i=e.toasts.map(s=>{var o,l,u;return{...t,...t[s.type],...s,removeDelay:s.removeDelay||((o=t[s.type])==null?void 0:o.removeDelay)||(t==null?void 0:t.removeDelay),duration:s.duration||((l=t[s.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||MO[s.type],style:{...t.style,...(u=t[s.type])==null?void 0:u.style,...s.style}}});return{...e,toasts:i}},FO=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||VO()}),pa=t=>(e,n)=>{let r=FO(e,t,n);return gi({type:2,toast:r}),r.id},dt=(t,e)=>pa("blank")(t,e);dt.error=pa("error");dt.success=pa("success");dt.loading=pa("loading");dt.custom=pa("custom");dt.dismiss=t=>{gi({type:3,toastId:t})};dt.remove=t=>gi({type:4,toastId:t});dt.promise=(t,e,n)=>{let r=dt.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?fu(e.success,i):void 0;return s?dt.success(s,{id:r,...n,...n==null?void 0:n.success}):dt.dismiss(r),i}).catch(i=>{let s=e.error?fu(e.error,i):void 0;s?dt.error(s,{id:r,...n,...n==null?void 0:n.error}):dt.dismiss(r)}),t};var UO=(t,e)=>{gi({type:1,toast:{id:t,height:e}})},zO=()=>{gi({type:5,time:Date.now()})},To=new Map,$O=1e3,BO=(t,e=$O)=>{if(To.has(t))return;let n=setTimeout(()=>{To.delete(t),gi({type:4,toastId:t})},e);To.set(t,n)},WO=t=>{let{toasts:e,pausedAt:n}=jO(t);D.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(l=>{if(l.duration===1/0)return;let u=(l.duration||0)+l.pauseDuration-(s-l.createdAt);if(u<0){l.visible&&dt.dismiss(l.id);return}return setTimeout(()=>dt.dismiss(l.id),u)});return()=>{o.forEach(l=>l&&clearTimeout(l))}},[e,n]);let r=D.useCallback(()=>{n&&gi({type:6,time:Date.now()})},[n]),i=D.useCallback((s,o)=>{let{reverseOrder:l=!1,gutter:u=8,defaultPosition:c}=o||{},h=e.filter(S=>(S.position||c)===(s.position||c)&&S.height),p=h.findIndex(S=>S.id===s.id),g=h.filter((S,P)=>P<p&&S.visible).length;return h.filter(S=>S.visible).slice(...l?[g+1]:[0,g]).reduce((S,P)=>S+(P.height||0)+u,0)},[e]);return D.useEffect(()=>{e.forEach(s=>{if(s.dismissed)BO(s.id,s.removeDelay);else{let o=To.get(s.id);o&&(clearTimeout(o),To.delete(s.id))}})},[e]),{toasts:e,handlers:{updateHeight:UO,startPause:zO,endPause:r,calculateOffset:i}}},HO=Fn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,qO=Fn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,KO=Fn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,GO=br("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${HO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${qO} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${KO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,QO=Fn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,YO=br("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${QO} 1s linear infinite;
`,JO=Fn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,XO=Fn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ZO=br("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${JO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${XO} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,eV=br("div")`
  position: absolute;
`,tV=br("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,nV=Fn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,rV=br("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${nV} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,iV=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?D.createElement(rV,null,e):e:n==="blank"?null:D.createElement(tV,null,D.createElement(YO,{...r}),n!=="loading"&&D.createElement(eV,null,n==="error"?D.createElement(GO,{...r}):D.createElement(ZO,{...r})))},sV=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,oV=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,aV="0%{opacity:0;} 100%{opacity:1;}",lV="0%{opacity:1;} 100%{opacity:0;}",uV=br("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,cV=br("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,dV=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=K1()?[aV,lV]:[sV(n),oV(n)];return{animation:e?`${Fn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Fn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},hV=D.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?dV(t.position||e||"top-center",t.visible):{opacity:0},s=D.createElement(iV,{toast:t}),o=D.createElement(cV,{...t.ariaProps},fu(t.message,t));return D.createElement(uV,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):D.createElement(D.Fragment,null,s,o))});DO(D.createElement);var fV=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=D.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return D.createElement("div",{ref:s,className:e,style:n},i)},pV=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:K1()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},mV=tc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,tl=16,gV=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:l,handlers:u}=WO(n);return D.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:tl,left:tl,right:tl,bottom:tl,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(c=>{let h=c.position||e,p=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),g=pV(h,p);return D.createElement(fV,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?mV:"",style:g},c.type==="custom"?fu(c.message,c):i?i(c):D.createElement(hV,{toast:c,position:h}))}))},ye=dt;const yV=({onMenuClick:t})=>{var R,b;const{user:e,signOut:n}=$n(),[r,i]=D.useState(!1),[s,o]=D.useState(!1),[l,u]=D.useState([]),[c,h]=D.useState(0),p=hi();D.useEffect(()=>{if(hu){const w=yD(hu,_=>{var O,M;const x={id:Date.now().toString(),title:((O=_.notification)==null?void 0:O.title)||"New Notification",body:((M=_.notification)==null?void 0:M.body)||"",timestamp:new Date,read:!1};u(U=>[x,...U]),h(U=>U+1),ye(x.title,{duration:5e3})});return()=>w()}},[]);const g=async()=>{try{await n(),p("/login"),ye.success("Signed out successfully")}catch(w){ye.error("Failed to sign out"),console.error(w)}},S=w=>{u(l.map(_=>_.id===w?{..._,read:!0}:_)),h(Math.max(0,c-1))},P=()=>{u(l.map(w=>({...w,read:!0}))),h(0)};return m.jsxs("header",{className:"bg-white border-b px-4 py-3 flex items-center justify-between shadow-sm",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx("button",{onClick:t,className:"mr-3 md:mr-4 text-gray-600 hover:text-primary transition-colors","aria-label":"Toggle menu",children:m.jsx($D,{size:24})}),m.jsx("h1",{className:"text-xl font-semibold text-primary",children:"OrderDash"})]}),m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsxs("div",{className:"relative",children:[m.jsxs("button",{className:"text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-muted relative",onClick:()=>o(!s),"aria-label":"Notifications",children:[m.jsx(DD,{size:20}),c>0&&m.jsx("span",{className:"absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",children:c})]}),s&&m.jsxs("div",{className:"absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20",children:[m.jsxs("div",{className:"p-3 border-b flex justify-between items-center",children:[m.jsx("h3",{className:"font-medium",children:"Notifications"}),c>0&&m.jsx("button",{onClick:P,className:"text-sm text-primary hover:underline",children:"Mark all as read"})]}),m.jsx("div",{className:"max-h-96 overflow-y-auto",children:l.length>0?l.map(w=>m.jsxs("div",{className:wo("p-3 border-b hover:bg-gray-50 cursor-pointer",!w.read&&"bg-blue-50"),onClick:()=>S(w.id),children:[m.jsx("h4",{className:"font-medium text-sm",children:w.title}),m.jsx("p",{className:"text-sm text-gray-600 mt-1",children:w.body}),m.jsx("p",{className:"text-xs text-gray-400 mt-1",children:w.timestamp.toLocaleTimeString()})]},w.id)):m.jsx("div",{className:"p-4 text-center text-gray-500",children:"No notifications"})})]})]}),m.jsxs("div",{className:"relative",children:[m.jsx("button",{className:"flex items-center space-x-2",onClick:()=>i(!r),children:e!=null&&e.photoURL?m.jsx("img",{src:e.photoURL,alt:"User",className:"w-8 h-8 rounded-full"}):m.jsx("div",{className:"w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white",children:((R=e==null?void 0:e.displayName)==null?void 0:R.charAt(0))||((b=e==null?void 0:e.email)==null?void 0:b.charAt(0))||"U"})}),m.jsxs("div",{className:wo("absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 transition-all duration-200 ease-in-out",r?"opacity-100 translate-y-0":"opacity-0 translate-y-2 pointer-events-none"),children:[m.jsxs("div",{className:"border-b py-2 px-4",children:[m.jsx("p",{className:"text-sm font-medium truncate",children:(e==null?void 0:e.displayName)||(e==null?void 0:e.email)}),m.jsx("p",{className:"text-xs text-muted-foreground truncate",children:e==null?void 0:e.email})]}),m.jsxs("div",{className:"py-1",children:[m.jsxs("button",{className:"flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-muted",onClick:()=>{i(!1),p("/profile")},children:[m.jsx(M1,{size:16,className:"mr-2"}),"Profile"]}),m.jsxs("button",{className:"flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50",onClick:()=>{i(!1),g()},children:[m.jsx(zD,{size:16,className:"mr-2"}),"Sign out"]})]})]})]})]})]})},vV=({isOpen:t,onClose:e,subscription:n})=>{var o,l;const r=di(),{user:i}=$n(),s=[{to:"/",icon:m.jsx(FD,{size:20}),label:"Dashboard"},{to:"/orders",icon:m.jsx(Mh,{size:20}),label:"Orders"},{to:"/profile",icon:m.jsx(M1,{size:20}),label:"Profile"},{to:"/subscription",icon:m.jsx(MD,{size:20}),label:"Subscription"}];return m.jsxs(m.Fragment,{children:[m.jsx("div",{className:wo("fixed inset-0 bg-black/50 z-10 md:hidden transition-opacity duration-200",t?"opacity-100":"opacity-0 pointer-events-none"),onClick:e}),m.jsxs("div",{className:wo("w-64 bg-white h-full overflow-y-auto flex flex-col border-r z-20 transition-all duration-300 ease-in-out","fixed md:relative left-0",t?"translate-x-0":"-translate-x-full md:translate-x-0"),children:[m.jsxs("div",{className:"p-4 border-b flex items-center justify-between md:justify-center",children:[m.jsx("h2",{className:"font-bold text-xl text-primary",children:"OrderDash"}),m.jsx("button",{onClick:e,className:"md:hidden text-gray-500","aria-label":"Close menu",children:m.jsx(L1,{size:20})})]}),m.jsx("nav",{className:"flex-1 py-4",children:m.jsx("ul",{className:"space-y-1 px-2",children:s.map(u=>m.jsx("li",{children:m.jsxs($o,{to:u.to,className:wo("flex items-center space-x-3 px-3 py-2 rounded-md w-full transition-colors",r.pathname===u.to?"bg-primary text-white":"text-gray-700 hover:bg-muted"),children:[u.icon,m.jsx("span",{children:u.label})]})},u.to))})}),m.jsxs("div",{className:"p-4 border-t",children:[n&&m.jsxs("div",{className:"rounded-md bg-muted p-3",children:[m.jsx("p",{className:"text-sm font-medium",children:n.isPaid?"Paid Plan":"Free Trial"}),!n.isPaid&&n.expiryDate&&m.jsx("p",{className:"text-xs mt-1 text-muted-foreground",children:n.isValid?`Expires in: ${W1(n.expiryDate)}`:"Trial expired"}),!n.isPaid&&m.jsx($o,{to:"/subscription",className:"mt-2 block text-center text-xs btn btn-primary py-1",children:"Upgrade Now"})]}),m.jsxs("div",{className:"mt-4 flex items-center",children:[i!=null&&i.photoURL?m.jsx("img",{src:i.photoURL,alt:"",className:"h-8 w-8 rounded-full"}):m.jsx("div",{className:"h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white",children:((o=i==null?void 0:i.displayName)==null?void 0:o.charAt(0))||((l=i==null?void 0:i.email)==null?void 0:l.charAt(0))||"U"}),m.jsxs("div",{className:"ml-3 overflow-hidden",children:[m.jsx("p",{className:"text-sm font-medium text-gray-700 truncate",children:(i==null?void 0:i.displayName)||"User"}),m.jsx("p",{className:"text-xs text-gray-500 truncate",children:(i==null?void 0:i.email)||""})]})]})]})]})]})};function _V(t){const[e,n]=D.useState(!1);return D.useEffect(()=>{const r=window.matchMedia(t),i=()=>{n(r.matches)};return i(),r.addEventListener("change",i),()=>{r.removeEventListener("change",i)}},[t]),e}const wV=()=>{const{user:t}=$n(),[e,n]=D.useState(!1),[r,i]=D.useState(null),s=di(),o=hi(),l=_V("(max-width: 768px)");return D.useEffect(()=>{l&&n(!1)},[s,l]),D.useEffect(()=>{const u=async()=>{if(t)try{const h=await ec(t.uid);if(i(h),h.isValid&&!h.isPaid&&h.expiryDate){const p=W1(h.expiryDate);p!=="Expired"&&parseInt(p.split(" ")[0])<=3&&ye.warning(`Your trial expires in ${p}! Upgrade to continue using the service.`,{duration:5e3})}!h.isValid&&!h.isPaid&&s.pathname!=="/subscription"&&(ye.error("Your trial has expired. Please subscribe to continue.",{duration:5e3}),o("/subscription"))}catch(h){console.error("Failed to check subscription:",h)}};u();const c=setInterval(u,36e5);return()=>clearInterval(c)},[t,s,o]),m.jsxs("div",{className:"h-screen flex flex-col",children:[m.jsx(yV,{onMenuClick:()=>n(!e)}),m.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[m.jsx(vV,{isOpen:e,onClose:()=>n(!1),subscription:r}),m.jsx("main",{className:"flex-1 overflow-auto bg-muted/30 p-4 md:p-6",children:m.jsx(Hx,{})})]})]})},EV=()=>{const{user:t,signInWithGoogle:e}=$n(),[n,r]=D.useState(!1),[i,s]=D.useState(null),o=hi();D.useEffect(()=>{t&&o("/")},[t,o]);const l=async()=>{try{r(!0),s(null),await e(),ye.success("Signed in successfully"),o("/")}catch(u){console.error("Login error:",u),s("Failed to sign in with Google. Please try again."),ye.error("Failed to sign in with Google")}finally{r(!1)}};return m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-500/10 to-teal-500/10 flex flex-col justify-center items-center p-4",children:m.jsxs("div",{className:"w-full max-w-md",children:[m.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-card animate-fade-in",children:[m.jsxs("div",{className:"text-center mb-8",children:[m.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"OrderDash"}),m.jsx("p",{className:"text-gray-600",children:"Sign in to manage your orders"})]}),i&&m.jsxs("div",{className:"mb-6 p-3 bg-red-50 border border-red-200 rounded-md flex items-start",children:[m.jsx(V1,{className:"text-red-500 w-5 h-5 mt-0.5 mr-2"}),m.jsx("p",{className:"text-sm text-red-700",children:i})]}),m.jsx("button",{disabled:n,onClick:l,className:"w-full flex items-center justify-center bg-white border border-gray-300 rounded-md py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:n?m.jsxs("svg",{className:"animate-spin h-5 w-5 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[m.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),m.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):m.jsxs(m.Fragment,{children:[m.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google",className:"w-5 h-5 mr-2"}),"Sign in with Google"]})}),m.jsx("div",{className:"mt-8 text-center",children:m.jsxs("p",{className:"text-sm text-gray-600",children:["By signing in, you agree to our",m.jsx("a",{href:"#",className:"text-primary hover:underline ml-1",children:"Terms of Service"})," and",m.jsx("a",{href:"#",className:"text-primary hover:underline ml-1",children:"Privacy Policy"})]})})]}),m.jsxs("div",{className:"mt-8 text-center animate-fade-in",children:[m.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"Try it free for 15 days"}),m.jsx("p",{className:"text-gray-600 max-w-sm mx-auto",children:"Get full access to all features. No credit card required."}),m.jsxs("button",{onClick:l,className:"mt-4 btn btn-primary px-6",children:[m.jsx(UD,{className:"w-4 h-4 mr-2"}),"Start Free Trial"]})]})]})})};class TV{async getSheetData(e){return new Promise((n,r)=>{window.google.script.run.withSuccessHandler(i=>{try{const s=JSON.parse(i);n(s)}catch{r(new Error("Failed to parse sheet data"))}}).withFailureHandler(i=>{r(i)}).getSheetData(e)})}async addRecord(e,n){return new Promise((r,i)=>{window.google.script.run.withSuccessHandler(s=>{try{const o=JSON.parse(s);r(o)}catch{i(new Error("Failed to parse response"))}}).withFailureHandler(s=>{i(s)}).addRecord(e,n)})}async updateRecord(e,n,r){return new Promise((i,s)=>{window.google.script.run.withSuccessHandler(o=>{try{const l=JSON.parse(o);i(l)}catch{s(new Error("Failed to parse response"))}}).withFailureHandler(o=>{s(o)}).updateRecord(e,n,r)})}async deleteRecord(e,n){return new Promise((r,i)=>{window.google.script.run.withSuccessHandler(s=>{try{const o=JSON.parse(s);r(o)}catch{i(new Error("Failed to parse response"))}}).withFailureHandler(s=>{i(s)}).deleteRecord(e,n)})}async getSheetNamesAndHeaders(){return new Promise((e,n)=>{window.google.script.run.withSuccessHandler(r=>{try{const i=JSON.parse(r);e(i)}catch{n(new Error("Failed to parse sheet metadata"))}}).withFailureHandler(r=>{n(r)}).getSheetNamesAndHeaders()})}}const io=new TV,IV=()=>{$n();const[t,e]=D.useState([]),[n,r]=D.useState(!0),[i,s]=D.useState(null);D.useEffect(()=>{(async()=>{try{r(!0);const p=await io.getSheetData("Orders");e(p)}catch(p){console.error("Error fetching orders:",p),s("Failed to load orders data")}finally{r(!1)}})()},[]);const o=t.reduce((h,p)=>h+p.Price,0),l=t.length,u=l>0?o/l:0,c=[...t].sort((h,p)=>new Date(p["Created At"]).getTime()-new Date(h["Created At"]).getTime()).slice(0,5);return m.jsxs("div",{className:"space-y-6 animate-fade-in",children:[m.jsxs("div",{className:"flex justify-between items-center",children:[m.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Dashboard"}),m.jsxs($o,{to:"/orders",className:"btn btn-primary flex items-center",children:[m.jsx(Mh,{className:"w-4 h-4 mr-2"}),"View All Orders"]})]}),n?m.jsx("div",{className:"flex justify-center py-12",children:m.jsx(xr,{className:"w-8 h-8 text-primary animate-spin"})}):i?m.jsx("div",{className:"bg-red-50 border border-red-200 p-4 rounded-md text-red-700",children:i}):m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[m.jsx(gd,{title:"Total Revenue",value:Eo(o),icon:m.jsx(jD,{className:"w-5 h-5"}),trend:"+12.5%",description:"vs. last month"}),m.jsx(gd,{title:"Total Orders",value:l.toString(),icon:m.jsx(Mh,{className:"w-5 h-5"}),trend:"+8.2%",description:"vs. last month"}),m.jsx(gd,{title:"Average Order Value",value:Eo(u),icon:m.jsx(BD,{className:"w-5 h-5"}),trend:"+2.3%",description:"vs. last month"})]}),m.jsxs("div",{className:"bg-white rounded-lg shadow-card overflow-hidden",children:[m.jsxs("div",{className:"px-6 py-4 border-b flex justify-between items-center",children:[m.jsx("h2",{className:"font-semibold text-gray-800",children:"Recent Orders"}),m.jsxs($o,{to:"/orders",className:"text-sm text-primary flex items-center",children:["View All ",m.jsx(ND,{className:"w-3 h-3 ml-1"})]})]}),m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full table",children:[m.jsx("thead",{className:"table-header",children:m.jsxs("tr",{className:"table-row",children:[m.jsx("th",{className:"table-head",children:"Order ID"}),m.jsx("th",{className:"table-head",children:"Product"}),m.jsx("th",{className:"table-head",children:"Date"}),m.jsx("th",{className:"table-head",children:"Amount"}),m.jsx("th",{className:"table-head",children:"Status"})]})}),m.jsx("tbody",{className:"table-body",children:c.length>0?c.map(h=>m.jsxs("tr",{className:"table-row",children:[m.jsx("td",{className:"table-cell font-medium",children:h["Order ID"]}),m.jsx("td",{className:"table-cell",children:h["Product Name"]}),m.jsx("td",{className:"table-cell",children:m.jsxs("div",{className:"flex items-center",children:[m.jsx(VD,{className:"w-4 h-4 mr-1 text-muted-foreground"}),new Date(h["Created At"]).toLocaleString("en-US",{day:"numeric",month:"short",year:"numeric"})]})}),m.jsx("td",{className:"table-cell font-medium",children:Eo(h.Price)}),m.jsx("td",{className:"table-cell",children:m.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",children:"Completed"})})]},h["Order ID"])):m.jsx("tr",{children:m.jsx("td",{colSpan:5,className:"table-cell text-center py-4 text-muted-foreground",children:"No orders found"})})})]})})]})]})]})},gd=({title:t,value:e,icon:n,trend:r,description:i})=>m.jsxs("div",{className:"bg-white rounded-lg shadow-card p-6 transition-shadow hover:shadow-card-hover",children:[m.jsxs("div",{className:"flex justify-between items-start",children:[m.jsxs("div",{children:[m.jsx("p",{className:"text-sm font-medium text-muted-foreground",children:t}),m.jsx("h3",{className:"text-2xl font-bold mt-2 text-gray-900",children:e})]}),m.jsx("div",{className:"p-2 bg-primary/10 rounded-full text-primary",children:n})]}),m.jsxs("div",{className:"mt-4 flex items-center",children:[m.jsx("span",{className:"text-xs font-medium text-green-700 bg-green-100 px-1.5 py-0.5 rounded",children:r}),m.jsx("span",{className:"ml-1.5 text-xs text-muted-foreground",children:i})]})]}),SV=()=>{const{user:t}=$n(),[e,n]=D.useState([]),[r,i]=D.useState(!0),[s,o]=D.useState(null),[l,u]=D.useState(!1),[c,h]=D.useState(!1),[p,g]=D.useState(null),[S,P]=D.useState(""),[R,b]=D.useState(!1),[w,_]=D.useState(!0),[x,O]=D.useState(null);D.useEffect(()=>{const E=async()=>{try{i(!0);const A=await io.getSheetData("Orders");n(A)}catch(A){console.error("Error fetching orders:",A),o("Failed to load orders data")}finally{i(!1)}},T=async()=>{if(t)try{const A=await ec(t.uid);_(A.isValid)}catch(A){console.error("Failed to check subscription:",A)}};E(),T()},[t]);const M=e.filter(E=>{const T=S.toLowerCase();return E["Order ID"].toLowerCase().includes(T)||E["Product Name"].toLowerCase().includes(T)}),U=async E=>{try{b(!0);const T={id:Rv(),"Order ID":Rv(),"Product Name":E.get("productName"),Quantity:parseInt(E.get("quantity")),Price:parseFloat(E.get("price")),"Created At":new Date().toISOString(),"Created By":(t==null?void 0:t.email)||"Unknown"},A=await io.addRecord("Orders",T);if(A.success)n([...e,T]),u(!1),ye.success("Order added successfully");else throw new Error(A.message)}catch(T){console.error("Error adding order:",T),ye.error("Failed to add order")}finally{b(!1)}},I=async E=>{if(p)try{b(!0);const T={...p,"Product Name":E.get("productName"),Quantity:parseInt(E.get("quantity")),Price:parseFloat(E.get("price"))},A=await io.updateRecord("Orders",p["Order ID"],T);if(A.success)n(e.map(C=>C["Order ID"]===p["Order ID"]?T:C)),h(!1),ye.success("Order updated successfully");else throw new Error(A.message)}catch(T){console.error("Error updating order:",T),ye.error("Failed to update order")}finally{b(!1)}},v=async E=>{try{b(!0);const T=await io.deleteRecord("Orders",E);if(T.success)n(e.filter(A=>A["Order ID"]!==E)),O(null),ye.success("Order deleted successfully");else throw new Error(T.message)}catch(T){console.error("Error deleting order:",T),ye.error("Failed to delete order")}finally{b(!1)}};return m.jsxs("div",{className:"space-y-6 animate-fade-in",children:[m.jsxs("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4",children:[m.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Orders"}),m.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[m.jsxs("div",{className:"relative",children:[m.jsx(HD,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:18}),m.jsx("input",{type:"text",placeholder:"Search orders...",value:S,onChange:E=>P(E.target.value),className:"input pl-10 py-2 w-full sm:w-64"})]}),m.jsxs("button",{onClick:()=>w?u(!0):ye.error("Upgrade to paid plan to add new orders"),className:"btn btn-primary flex items-center justify-center",disabled:!w,children:[m.jsx(WD,{className:"w-4 h-4 mr-2"}),"Add Order"]})]})]}),r?m.jsx("div",{className:"flex justify-center py-12",children:m.jsx(xr,{className:"w-8 h-8 text-primary animate-spin"})}):s?m.jsx("div",{className:"bg-red-50 border border-red-200 p-4 rounded-md text-red-700",children:s}):m.jsx("div",{className:"bg-white rounded-lg shadow-card overflow-hidden",children:m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full table",children:[m.jsx("thead",{className:"table-header",children:m.jsxs("tr",{className:"table-row",children:[m.jsx("th",{className:"table-head",children:"Order ID"}),m.jsx("th",{className:"table-head",children:"Product"}),m.jsx("th",{className:"table-head",children:"Quantity"}),m.jsx("th",{className:"table-head",children:"Price"}),m.jsx("th",{className:"table-head",children:"Date"}),m.jsx("th",{className:"table-head",children:"Created By"}),m.jsx("th",{className:"table-head w-[80px]",children:"Actions"})]})}),m.jsx("tbody",{className:"table-body",children:M.length>0?M.map(E=>m.jsxs("tr",{className:"table-row",children:[m.jsx("td",{className:"table-cell font-medium",children:E["Order ID"]}),m.jsx("td",{className:"table-cell",children:E["Product Name"]}),m.jsx("td",{className:"table-cell",children:E.Quantity}),m.jsx("td",{className:"table-cell font-medium",children:Eo(E.Price)}),m.jsx("td",{className:"table-cell",children:new Date(E["Created At"]).toLocaleString("en-US",{day:"numeric",month:"short",year:"numeric"})}),m.jsx("td",{className:"table-cell",children:E["Created By"]}),m.jsx("td",{className:"table-cell",children:m.jsxs("div",{className:"flex items-center space-x-2",children:[m.jsx("button",{onClick:()=>{w?(g(E),h(!0)):ye.error("Upgrade to paid plan to edit orders")},className:"text-gray-500 hover:text-primary",disabled:!w,children:m.jsx(KD,{size:16})}),m.jsx("button",{onClick:()=>{w?O(E["Order ID"]):ye.error("Upgrade to paid plan to delete orders")},className:"text-gray-500 hover:text-destructive",disabled:!w,children:m.jsx(Av,{size:16})})]})})]},E["Order ID"])):m.jsx("tr",{children:m.jsx("td",{colSpan:7,className:"table-cell text-center py-4 text-muted-foreground",children:"No orders found"})})})]})})}),l&&m.jsx(Nv,{onClose:()=>u(!1),onSubmit:U,isLoading:R,title:"Add New Order"}),c&&p&&m.jsx(Nv,{onClose:()=>h(!1),onSubmit:I,isLoading:R,title:"Edit Order",initialData:p}),x&&m.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:m.jsxs("div",{className:"bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-fade-in",children:[m.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Confirm Deletion"}),m.jsx("p",{className:"text-gray-600 mb-6",children:"Are you sure you want to delete this order? This action cannot be undone."}),m.jsxs("div",{className:"flex justify-end space-x-3",children:[m.jsx("button",{onClick:()=>O(null),className:"btn btn-outline",disabled:R,children:"Cancel"}),m.jsx("button",{onClick:()=>v(x),className:"btn btn-destructive",disabled:R,children:R?m.jsx(xr,{className:"w-4 h-4 animate-spin"}):m.jsxs(m.Fragment,{children:[m.jsx(Av,{className:"w-4 h-4 mr-2"}),"Delete"]})})]})]})}),!w&&m.jsxs("div",{className:"bg-amber-50 border border-amber-200 p-4 rounded-md text-amber-700 mt-4",children:["Your trial has expired. ",m.jsx("a",{href:"/subscription",className:"font-medium underline",children:"Upgrade to a paid plan"})," to add, edit or delete orders."]})]})},Nv=({onClose:t,onSubmit:e,isLoading:n,title:r,initialData:i})=>{const s=o=>{o.preventDefault();const l=o.currentTarget,u=new FormData(l);e(u)};return m.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:m.jsxs("div",{className:"bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-fade-in",children:[m.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:r}),m.jsxs("form",{onSubmit:s,children:[m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{htmlFor:"productName",className:"block text-sm font-medium text-gray-700 mb-1",children:"Product Name"}),m.jsx("input",{id:"productName",name:"productName",type:"text",required:!0,defaultValue:(i==null?void 0:i["Product Name"])||"",className:"input w-full"})]}),m.jsxs("div",{children:[m.jsx("label",{htmlFor:"quantity",className:"block text-sm font-medium text-gray-700 mb-1",children:"Quantity"}),m.jsx("input",{id:"quantity",name:"quantity",type:"number",min:"1",required:!0,defaultValue:(i==null?void 0:i.Quantity)||1,className:"input w-full"})]}),m.jsxs("div",{children:[m.jsx("label",{htmlFor:"price",className:"block text-sm font-medium text-gray-700 mb-1",children:"Price"}),m.jsx("input",{id:"price",name:"price",type:"number",step:"0.01",min:"0",required:!0,defaultValue:(i==null?void 0:i.Price)||0,className:"input w-full"})]})]}),m.jsxs("div",{className:"flex justify-end space-x-3 mt-6",children:[m.jsx("button",{type:"button",onClick:t,className:"btn btn-outline",disabled:n,children:"Cancel"}),m.jsx("button",{type:"submit",className:"btn btn-primary",disabled:n,children:n?m.jsx(xr,{className:"w-4 h-4 animate-spin"}):i?"Update Order":"Add Order"})]})]})]})})},xV=()=>{var u,c;const{user:t}=$n(),[e,n]=D.useState(null),[r,i]=D.useState(!0),[s,o]=D.useState(!1);D.useEffect(()=>{(async()=>{if(t)try{i(!0);const p=await Wp(t.uid);n(p)}catch(p){console.error("Error fetching user data:",p),ye.error("Failed to load user data")}finally{i(!1)}})()},[t]);const l=()=>{if(!(e!=null&&e.referralCode))return;const h=`${window.location.origin}/login?ref=${e.referralCode}`;navigator.clipboard.writeText(h).then(()=>{o(!0),ye.success("Referral link copied to clipboard"),setTimeout(()=>o(!1),2e3)}).catch(()=>{ye.error("Failed to copy referral link")})};return r?m.jsx("div",{className:"flex justify-center py-12",children:m.jsx(xr,{className:"w-8 h-8 text-primary animate-spin"})}):m.jsxs("div",{className:"space-y-6 animate-fade-in",children:[m.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Profile"}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[m.jsx("div",{className:"lg:col-span-2",children:m.jsx("div",{className:"bg-white rounded-lg shadow-card overflow-hidden",children:m.jsxs("div",{className:"p-6",children:[m.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-6",children:[t!=null&&t.photoURL?m.jsx("img",{src:t.photoURL,alt:"Profile",className:"w-24 h-24 rounded-full object-cover"}):m.jsx("div",{className:"w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-semibold",children:((u=t==null?void 0:t.displayName)==null?void 0:u.charAt(0))||((c=t==null?void 0:t.email)==null?void 0:c.charAt(0))||"U"}),m.jsxs("div",{className:"flex-1",children:[m.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:(t==null?void 0:t.displayName)||"User"}),m.jsx("p",{className:"text-muted-foreground",children:t==null?void 0:t.email}),m.jsxs("div",{className:"mt-4 flex flex-col sm:flex-row gap-3",children:[m.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary",children:(e==null?void 0:e.plan)==="paid"?"Paid Plan":"Free Trial"}),(e==null?void 0:e.expiryDate)&&m.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800",children:["Expires: ",new Date(e.expiryDate.toDate()).toLocaleDateString()]})]})]})]}),m.jsxs("div",{className:"mt-8 space-y-6",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Account Information"}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[m.jsxs("div",{children:[m.jsx("p",{className:"text-sm font-medium text-muted-foreground",children:"Email"}),m.jsx("p",{className:"mt-1",children:t==null?void 0:t.email})]}),m.jsxs("div",{children:[m.jsx("p",{className:"text-sm font-medium text-muted-foreground",children:"Account Created"}),m.jsx("p",{className:"mt-1",children:e!=null&&e.createdAt?new Date(e.createdAt.toDate()).toLocaleDateString():"N/A"})]})]})]}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Subscription Details"}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[m.jsxs("div",{children:[m.jsx("p",{className:"text-sm font-medium text-muted-foreground",children:"Plan"}),m.jsx("p",{className:"mt-1 capitalize",children:(e==null?void 0:e.plan)||"Free"})]}),m.jsxs("div",{children:[m.jsx("p",{className:"text-sm font-medium text-muted-foreground",children:"Trial Started"}),m.jsx("p",{className:"mt-1",children:e!=null&&e.trialStart?new Date(e.trialStart.toDate()).toLocaleDateString():"N/A"})]}),m.jsxs("div",{children:[m.jsx("p",{className:"text-sm font-medium text-muted-foreground",children:"Expiry Date"}),m.jsx("p",{className:"mt-1",children:e!=null&&e.expiryDate?new Date(e.expiryDate.toDate()).toLocaleDateString():"N/A"})]})]})]})]})]})})}),m.jsx("div",{className:"lg:col-span-1",children:m.jsx("div",{className:"bg-white rounded-lg shadow-card overflow-hidden",children:m.jsxs("div",{className:"p-6",children:[m.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Refer a Friend"}),m.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Share your referral link with friends. When they sign up, you'll get an extra month free!"}),m.jsxs("div",{className:"mt-4",children:[m.jsx("label",{className:"block text-sm font-medium text-muted-foreground mb-1",children:"Your Referral Link"}),m.jsxs("div",{className:"flex",children:[m.jsx("input",{type:"text",readOnly:!0,value:`${window.location.origin}/login?ref=${(e==null?void 0:e.referralCode)||""}`,className:"input rounded-r-none flex-grow text-sm"}),m.jsx("button",{onClick:l,className:"btn px-3 py-2 bg-primary text-white rounded-l-none",children:s?m.jsx(OD,{size:18}):m.jsx(LD,{size:18})})]})]}),m.jsx("div",{className:"mt-6",children:m.jsxs("button",{onClick:()=>{const h={title:"OrderDash Referral",text:"Join OrderDash with my referral link and get a 15-day free trial!",url:`${window.location.origin}/login?ref=${(e==null?void 0:e.referralCode)||""}`};navigator.share&&navigator.canShare(h)?navigator.share(h).catch(p=>console.error("Error sharing:",p)):l()},className:"btn btn-outline w-full justify-center",children:[m.jsx(qD,{size:18,className:"mr-2"}),"Share Referral Link"]})}),(e==null?void 0:e.referredBy)&&m.jsx("div",{className:"mt-6",children:m.jsx("p",{className:"text-sm text-muted-foreground",children:"You were referred by another user"})})]})})})]})]})},Ii={id:"premium-monthly",name:"Premium Monthly Plan",description:"Get full access to all features with our premium plan",price:499,currency:"INR",features:["Unlimited orders","Full editing capabilities","Priority email support","Advanced analytics","Data export","Bulk operations"],duration:30},kV=()=>{var h;const{user:t}=$n(),[e,n]=D.useState(!0),[r,i]=D.useState(!1),[s,o]=D.useState(null),l=hi();D.useEffect(()=>{(async()=>{if(t)try{n(!0);const g=await ec(t.uid);o(g)}catch(g){console.error("Failed to check subscription:",g),ye.error("Failed to check subscription status")}finally{n(!1)}})()},[t]);const u=()=>new Promise(p=>{const g=document.createElement("script");g.src="https://checkout.razorpay.com/v1/checkout.js",g.onload=()=>p(!0),g.onerror=()=>p(!1),document.body.appendChild(g)}),c=async()=>{if(!t)return;if(i(!0),!await u()){ye.error("Razorpay SDK failed to load"),i(!1);return}try{const g=await fetch("https://us-central1-dashboardmanager-94a43.cloudfunctions.net/api/create-subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t.uid,customerEmail:t.email,planId:"plan_QTGV7kKPQhxIZt"})});if(!g.ok){const _=await g.json();throw new Error(_.message||"Subscription creation failed")}const{subscription:S}=await g.json(),b={key:"rzp_test_JcBtfjmbk2t9TS",subscription_id:S.id,name:"OrderDash",description:Ii.name,handler:async function(_){try{ye.success("Subscription initiated! You’ll get access after confirmation."),l("/")}catch(x){console.error("Error handling payment:",x),ye.error("Something went wrong. Please try again.")}finally{i(!1)}},prefill:{name:t.displayName||"",email:t.email||""},theme:{color:"#4F46E5"},modal:{ondismiss:function(){i(!1)}}};new window.Razorpay(b).open()}catch(g){console.error("Error creating subscription:",g),ye.error("Failed to initiate subscription"),i(!1)}};return e?m.jsx("div",{className:"flex justify-center py-12",children:m.jsx(xr,{className:"w-8 h-8 text-primary animate-spin"})}):m.jsxs("div",{className:"space-y-6 animate-fade-in",children:[m.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Subscription"}),s!=null&&s.isPaid?m.jsx("div",{className:"bg-white rounded-lg shadow-card p-6",children:m.jsxs("div",{className:"text-center",children:[m.jsx("div",{className:"inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full text-green-600 mb-4",children:m.jsx(Ti,{size:24})}),m.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"You're on the Premium Plan"}),m.jsxs("p",{className:"text-muted-foreground",children:["Your subscription is active until ",(h=s.expiryDate)==null?void 0:h.toLocaleDateString()]}),m.jsx("button",{className:"mt-6 btn btn-primary px-6",onClick:()=>l("/orders"),children:"View Orders"})]})}):m.jsxs(m.Fragment,{children:[!(s!=null&&s.isValid)&&m.jsxs("div",{className:"bg-amber-50 border border-amber-200 p-4 rounded-md flex items-start mb-6",children:[m.jsx(V1,{className:"text-amber-500 w-5 h-5 mt-0.5 mr-3 flex-shrink-0"}),m.jsxs("div",{children:[m.jsx("h3",{className:"font-medium text-amber-800",children:"Your trial has expired"}),m.jsx("p",{className:"text-amber-700 mt-1",children:"Subscribe to continue using all features of the application."})]})]}),m.jsxs("div",{className:"max-w-2xl mx-auto",children:[m.jsxs("div",{className:"bg-white rounded-lg overflow-hidden shadow-card border-2 border-primary",children:[m.jsx("div",{className:"bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium",children:"Premium Plan"}),m.jsxs("div",{className:"p-6",children:[m.jsxs("div",{className:"flex justify-between items-baseline",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:Ii.name}),m.jsx("p",{className:"text-muted-foreground mt-1",children:Ii.description})]}),m.jsxs("div",{className:"text-right",children:[m.jsx("span",{className:"text-3xl font-bold text-gray-900",children:Eo(Ii.price,Ii.currency)}),m.jsx("span",{className:"text-muted-foreground",children:"/month"})]})]}),m.jsx("ul",{className:"mt-8 space-y-4",children:Ii.features.map((p,g)=>m.jsxs("li",{className:"flex items-start",children:[m.jsx(Ti,{className:"text-green-500 w-5 h-5 mt-0.5 mr-3 flex-shrink-0"}),m.jsx("span",{children:p})]},g))}),m.jsx("button",{onClick:c,className:"mt-8 w-full btn btn-primary py-3 text-lg font-medium",disabled:r,children:r?m.jsx(xr,{className:"w-6 h-6 mx-auto animate-spin"}):"Subscribe Now"}),m.jsx("p",{className:"mt-4 text-sm text-center text-muted-foreground",children:"Secure payment powered by Razorpay"})]})]}),m.jsxs("div",{className:"mt-8 bg-gray-50 rounded-lg p-6",children:[m.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Why choose our Premium Plan?"}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[m.jsxs("div",{className:"flex items-start",children:[m.jsx(Ti,{className:"text-green-500 w-5 h-5 mt-0.5 mr-2 flex-shrink-0"}),m.jsxs("div",{children:[m.jsx("h4",{className:"font-medium",children:"Unlimited Access"}),m.jsx("p",{className:"text-sm text-muted-foreground",children:"No restrictions on orders or features"})]})]}),m.jsxs("div",{className:"flex items-start",children:[m.jsx(Ti,{className:"text-green-500 w-5 h-5 mt-0.5 mr-2 flex-shrink-0"}),m.jsxs("div",{children:[m.jsx("h4",{className:"font-medium",children:"Priority Support"}),m.jsx("p",{className:"text-sm text-muted-foreground",children:"Get help when you need it most"})]})]}),m.jsxs("div",{className:"flex items-start",children:[m.jsx(Ti,{className:"text-green-500 w-5 h-5 mt-0.5 mr-2 flex-shrink-0"}),m.jsxs("div",{children:[m.jsx("h4",{className:"font-medium",children:"Advanced Features"}),m.jsx("p",{className:"text-sm text-muted-foreground",children:"Access to premium tools and analytics"})]})]}),m.jsxs("div",{className:"flex items-start",children:[m.jsx(Ti,{className:"text-green-500 w-5 h-5 mt-0.5 mr-2 flex-shrink-0"}),m.jsxs("div",{children:[m.jsx("h4",{className:"font-medium",children:"Cancel Anytime"}),m.jsx("p",{className:"text-sm text-muted-foreground",children:"No long-term commitment required"})]})]})]})]})]})]})]})},AV=()=>m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-500/10 to-teal-500/10 flex flex-col justify-center items-center p-4",children:m.jsxs("div",{className:"text-center",children:[m.jsx("h1",{className:"text-9xl font-bold text-primary",children:"404"}),m.jsx("h2",{className:"text-3xl font-semibold text-gray-800 mt-4",children:"Page Not Found"}),m.jsx("p",{className:"text-gray-600 mt-2 max-w-md mx-auto",children:"The page you are looking for doesn't exist or has been moved."}),m.jsxs($o,{to:"/",className:"mt-8 inline-flex items-center btn btn-primary px-6",children:[m.jsx(L1,{className:"w-4 h-4 mr-2"}),"Back to Dashboard"]})]})}),CV=()=>m.jsxs("div",{className:"h-screen w-full flex flex-col items-center justify-center bg-background",children:[m.jsx(xr,{className:"h-12 w-12 text-primary animate-spin"}),m.jsx("p",{className:"mt-4 text-lg font-medium text-muted-foreground",children:"Loading..."})]});function PV(){const{user:t,loading:e}=$n(),[n,r]=D.useState(null),[i,s]=D.useState(!0),o=hi();return D.useEffect(()=>{e||(async()=>{if(t)try{const u=await ec(t.uid);r(u),!u.isValid&&!u.isPaid&&o("/subscription")}catch(u){console.error("Failed to check subscription:",u)}finally{s(!1)}else s(!1)})()},[t,e,o]),e||t&&i?m.jsx(CV,{}):m.jsxs(Kx,{children:[m.jsx(Yn,{path:"/login",element:t?m.jsx(sy,{to:"/"}):m.jsx(EV,{})}),m.jsxs(Yn,{path:"/",element:t?m.jsx(wV,{}):m.jsx(sy,{to:"/login"}),children:[m.jsx(Yn,{index:!0,element:m.jsx(IV,{})}),m.jsx(Yn,{path:"orders",element:m.jsx(SV,{})}),m.jsx(Yn,{path:"profile",element:m.jsx(xV,{})}),m.jsx(Yn,{path:"subscription",element:m.jsx(kV,{})})]}),m.jsx(Yn,{path:"*",element:m.jsx(AV,{})})]})}H0(document.getElementById("root")).render(m.jsx(D.StrictMode,{children:m.jsx(ek,{children:m.jsxs(PD,{children:[m.jsx(PV,{}),m.jsx(gV,{position:"top-right"})]})})}));
