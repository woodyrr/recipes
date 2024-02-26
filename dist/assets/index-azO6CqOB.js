(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Al(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function uc(t,e,n=".",s){if(!Al(e))return uc(t,{},n,s);const r=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(s&&s(r,i,o,n)||(Array.isArray(o)&&Array.isArray(r[i])?r[i]=[...o,...r[i]]:Al(o)&&Al(r[i])?r[i]=uc(o,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=o))}return r}function m0(t){return(...e)=>e.reduce((n,s)=>uc(n,s,"",t),{})}const g0=m0();function gu(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Ce={},Ks=[],en=()=>{},_0=()=>!1,Oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_u=t=>t.startsWith("onUpdate:"),nt=Object.assign,yu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},y0=Object.prototype.hasOwnProperty,ge=(t,e)=>y0.call(t,e),X=Array.isArray,Gs=t=>Da(t)==="[object Map]",sm=t=>Da(t)==="[object Set]",se=t=>typeof t=="function",je=t=>typeof t=="string",Tr=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",rm=t=>(De(t)||se(t))&&se(t.then)&&se(t.catch),im=Object.prototype.toString,Da=t=>im.call(t),v0=t=>Da(t).slice(8,-1),om=t=>Da(t)==="[object Object]",vu=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Do=gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},E0=/-(\w)/g,ln=Na(t=>t.replace(E0,(e,n)=>n?n.toUpperCase():"")),w0=/\B([A-Z])/g,Ir=Na(t=>t.replace(w0,"-$1").toLowerCase()),Va=Na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Rl=Na(t=>t?`on${Va(t)}`:""),Ts=(t,e)=>!Object.is(t,e),No=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Yo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},T0=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let Ed;const dc=()=>Ed||(Ed=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Eu(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=je(s)?A0(s):Eu(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(je(t)||De(t))return t}const I0=/;(?![^(]*\))/g,b0=/:([^]+)/,x0=/\/\*[^]*?\*\//g;function A0(t){const e={};return t.replace(x0,"").split(I0).forEach(n=>{if(n){const s=n.split(b0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Qs(t){let e="";if(je(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=Qs(t[n]);s&&(e+=s+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const R0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",P0=gu(R0);function am(t){return!!t||t===""}const ue=t=>je(t)?t:t==null?"":X(t)||De(t)&&(t.toString===im||!se(t.toString))?JSON.stringify(t,lm,2):String(t),lm=(t,e)=>e&&e.__v_isRef?lm(t,e.value):Gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Pl(s,i)+" =>"]=r,n),{})}:sm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pl(n))}:Tr(e)?Pl(e):De(e)&&!X(e)&&!om(e)?String(e):e,Pl=(t,e="")=>{var n;return Tr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let xt;class S0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function C0(t,e=xt){e&&e.active&&e.effects.push(t)}function cm(){return xt}function k0(t){xt&&xt.cleanups.push(t)}const wu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},um=t=>(t.w&Kn)>0,hm=t=>(t.n&Kn)>0,O0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kn},D0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];um(r)&&!hm(r)?r.delete(t):e[n++]=r,r.w&=~Kn,r.n&=~Kn}e.length=n}},fc=new WeakMap;let jr=0,Kn=1;const pc=30;let Ft;const _s=Symbol(""),mc=Symbol("");class Tu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,C0(this,s)}run(){if(!this.active)return this.fn();let e=Ft,n=Un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ft,Ft=this,Un=!0,Kn=1<<++jr,jr<=pc?O0(this):wd(this),this.fn()}finally{jr<=pc&&D0(this),Kn=1<<--jr,Ft=this.parent,Un=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ft===this?this.deferStop=!0:this.active&&(wd(this),this.onStop&&this.onStop(),this.active=!1)}}function wd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Un=!0;const dm=[];function br(){dm.push(Un),Un=!1}function xr(){const t=dm.pop();Un=t===void 0?!0:t}function It(t,e,n){if(Un&&Ft){let s=fc.get(t);s||fc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=wu()),fm(r)}}function fm(t,e){let n=!1;jr<=pc?hm(t)||(t.n|=Kn,n=!um(t)):n=!t.has(Ft),n&&(t.add(Ft),Ft.deps.push(t))}function gn(t,e,n,s,r,i){const o=fc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Tr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?vu(n)&&a.push(o.get("length")):(a.push(o.get(_s)),Gs(t)&&a.push(o.get(mc)));break;case"delete":X(t)||(a.push(o.get(_s)),Gs(t)&&a.push(o.get(mc)));break;case"set":Gs(t)&&a.push(o.get(_s));break}if(a.length===1)a[0]&&gc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);gc(wu(l))}}function gc(t,e){const n=X(t)?t:[...t];for(const s of n)s.computed&&Td(s);for(const s of n)s.computed||Td(s)}function Td(t,e){(t!==Ft||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const N0=gu("__proto__,__v_isRef,__isVue"),pm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tr)),Id=V0();function V0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ye(this);for(let i=0,o=this.length;i<o;i++)It(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ye)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){br();const s=ye(this)[e].apply(this,n);return xr(),s}}),t}function M0(t){const e=ye(this);return It(e,"has",t),e.hasOwnProperty(t)}class mm{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Q0:vm:i?ym:_m).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=X(e);if(!r){if(o&&ge(Id,n))return Reflect.get(Id,n,s);if(n==="hasOwnProperty")return M0}const a=Reflect.get(e,n,s);return(Tr(n)?pm.has(n):N0(n))||(r||It(e,"get",n),i)?a:ct(a)?o&&vu(n)?a:a.value:De(a)?r?wm(a):Xn(a):a}}class gm extends mm{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(or(i)&&ct(i)&&!ct(s))return!1;if(!this._shallow&&(!Xo(s)&&!or(s)&&(i=ye(i),s=ye(s)),!X(e)&&ct(i)&&!ct(s)))return i.value=s,!0;const o=X(e)&&vu(n)?Number(n)<e.length:ge(e,n),a=Reflect.set(e,n,s,r);return e===ye(r)&&(o?Ts(s,i)&&gn(e,"set",n,s):gn(e,"add",n,s)),a}deleteProperty(e,n){const s=ge(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&gn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Tr(n)||!pm.has(n))&&It(e,"has",n),s}ownKeys(e){return It(e,"iterate",X(e)?"length":_s),Reflect.ownKeys(e)}}class L0 extends mm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const F0=new gm,$0=new L0,U0=new gm(!0),Iu=t=>t,Ma=t=>Reflect.getPrototypeOf(t);function go(t,e,n=!1,s=!1){t=t.__v_raw;const r=ye(t),i=ye(e);n||(Ts(e,i)&&It(r,"get",e),It(r,"get",i));const{has:o}=Ma(r),a=s?Iu:n?Au:di;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function _o(t,e=!1){const n=this.__v_raw,s=ye(n),r=ye(t);return e||(Ts(t,r)&&It(s,"has",t),It(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function yo(t,e=!1){return t=t.__v_raw,!e&&It(ye(t),"iterate",_s),Reflect.get(t,"size",t)}function bd(t){t=ye(t);const e=ye(this);return Ma(e).has.call(e,t)||(e.add(t),gn(e,"add",t,t)),this}function xd(t,e){e=ye(e);const n=ye(this),{has:s,get:r}=Ma(n);let i=s.call(n,t);i||(t=ye(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ts(e,o)&&gn(n,"set",t,e):gn(n,"add",t,e),this}function Ad(t){const e=ye(this),{has:n,get:s}=Ma(e);let r=n.call(e,t);r||(t=ye(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&gn(e,"delete",t,void 0),i}function Rd(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&gn(t,"clear",void 0,void 0),n}function vo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ye(o),l=e?Iu:t?Au:di;return!t&&It(a,"iterate",_s),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function Eo(t,e,n){return function(...s){const r=this.__v_raw,i=ye(r),o=Gs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?Iu:e?Au:di;return!e&&It(i,"iterate",l?mc:_s),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Pn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function B0(){const t={get(i){return go(this,i)},get size(){return yo(this)},has:_o,add:bd,set:xd,delete:Ad,clear:Rd,forEach:vo(!1,!1)},e={get(i){return go(this,i,!1,!0)},get size(){return yo(this)},has:_o,add:bd,set:xd,delete:Ad,clear:Rd,forEach:vo(!1,!0)},n={get(i){return go(this,i,!0)},get size(){return yo(this,!0)},has(i){return _o.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:vo(!0,!1)},s={get(i){return go(this,i,!0,!0)},get size(){return yo(this,!0)},has(i){return _o.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:vo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Eo(i,!1,!1),n[i]=Eo(i,!0,!1),e[i]=Eo(i,!1,!0),s[i]=Eo(i,!0,!0)}),[t,n,e,s]}const[j0,q0,H0,z0]=B0();function bu(t,e){const n=e?t?z0:H0:t?q0:j0;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ge(n,r)&&r in s?n:s,r,i)}const W0={get:bu(!1,!1)},K0={get:bu(!1,!0)},G0={get:bu(!0,!1)},_m=new WeakMap,ym=new WeakMap,vm=new WeakMap,Q0=new WeakMap;function Y0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function X0(t){return t.__v_skip||!Object.isExtensible(t)?0:Y0(v0(t))}function Xn(t){return or(t)?t:xu(t,!1,F0,W0,_m)}function Em(t){return xu(t,!1,U0,K0,ym)}function wm(t){return xu(t,!0,$0,G0,vm)}function xu(t,e,n,s,r){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=X0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ys(t){return or(t)?Ys(t.__v_raw):!!(t&&t.__v_isReactive)}function or(t){return!!(t&&t.__v_isReadonly)}function Xo(t){return!!(t&&t.__v_isShallow)}function Tm(t){return Ys(t)||or(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Im(t){return Yo(t,"__v_skip",!0),t}const di=t=>De(t)?Xn(t):t,Au=t=>De(t)?wm(t):t;function bm(t){Un&&Ft&&(t=ye(t),fm(t.dep||(t.dep=wu())))}function xm(t,e){t=ye(t);const n=t.dep;n&&gc(n)}function ct(t){return!!(t&&t.__v_isRef===!0)}function ee(t){return Am(t,!1)}function J0(t){return Am(t,!0)}function Am(t,e){return ct(t)?t:new Z0(t,e)}class Z0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:di(e)}get value(){return bm(this),this._value}set value(e){const n=this.__v_isShallow||Xo(e)||or(e);e=n?e:ye(e),Ts(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:di(e),xm(this))}}function Y(t){return ct(t)?t.value:t}const eE={get:(t,e,n)=>Y(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ct(r)&&!ct(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Rm(t){return Ys(t)?t:new Proxy(t,eE)}class tE{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Tu(e,()=>{this._dirty||(this._dirty=!0,xm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ye(this);return bm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function nE(t,e,n=!1){let s,r;const i=se(t);return i?(s=t,r=en):(s=t.get,r=t.set),new tE(s,r,i||!r,n)}function Bn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Fi(i,e,n)}return r}function Ut(t,e,n,s){if(se(t)){const i=Bn(t,e,n,s);return i&&rm(i)&&i.catch(o=>{Fi(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ut(t[i],e,n,s));return r}function Fi(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Bn(l,null,10,[t,o,a]);return}}sE(t,n,r,s)}function sE(t,e,n,s=!0){console.error(t)}let fi=!1,_c=!1;const lt=[];let Qt=0;const Xs=[];let dn=null,cs=0;const Pm=Promise.resolve();let Ru=null;function Sm(t){const e=Ru||Pm;return t?e.then(this?t.bind(this):t):e}function rE(t){let e=Qt+1,n=lt.length;for(;e<n;){const s=e+n>>>1,r=lt[s],i=pi(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function Pu(t){(!lt.length||!lt.includes(t,fi&&t.allowRecurse?Qt+1:Qt))&&(t.id==null?lt.push(t):lt.splice(rE(t.id),0,t),Cm())}function Cm(){!fi&&!_c&&(_c=!0,Ru=Pm.then(Om))}function iE(t){const e=lt.indexOf(t);e>Qt&&lt.splice(e,1)}function yc(t){X(t)?Xs.push(...t):(!dn||!dn.includes(t,t.allowRecurse?cs+1:cs))&&Xs.push(t),Cm()}function Pd(t,e,n=fi?Qt+1:0){for(;n<lt.length;n++){const s=lt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;lt.splice(n,1),n--,s()}}}function km(t){if(Xs.length){const e=[...new Set(Xs)];if(Xs.length=0,dn){dn.push(...e);return}for(dn=e,dn.sort((n,s)=>pi(n)-pi(s)),cs=0;cs<dn.length;cs++)dn[cs]();dn=null,cs=0}}const pi=t=>t.id==null?1/0:t.id,oE=(t,e)=>{const n=pi(t)-pi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Om(t){_c=!1,fi=!0,lt.sort(oE);try{for(Qt=0;Qt<lt.length;Qt++){const e=lt[Qt];e&&e.active!==!1&&Bn(e,null,14)}}finally{Qt=0,lt.length=0,km(),fi=!1,Ru=null,(lt.length||Xs.length)&&Om()}}function aE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ce;d&&(r=n.map(f=>je(f)?f.trim():f)),h&&(r=n.map(hc))}let a,l=s[a=Rl(e)]||s[a=Rl(ln(e))];!l&&i&&(l=s[a=Rl(Ir(e))]),l&&Ut(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ut(c,t,6,r)}}function Dm(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!se(t)){const l=c=>{const u=Dm(c,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(De(t)&&s.set(t,null),null):(X(i)?i.forEach(l=>o[l]=null):nt(o,i),De(t)&&s.set(t,o),o)}function La(t,e){return!t||!Oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,Ir(e))||ge(t,e))}let At=null,Fa=null;function Jo(t){const e=At;return At=t,Fa=t&&t.type.__scopeId||null,e}function $i(t){Fa=t}function Ui(){Fa=null}function ie(t,e=At,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ud(-1);const i=Jo(e);let o;try{o=t(...r)}finally{Jo(i),s._d&&Ud(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Sl(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:y,inheritAttrs:T}=t;let E,b;const R=Jo(t);try{if(n.shapeFlag&4){const v=r||s,N=v;E=Lt(u.call(N,v,h,i,f,d,y)),b=l}else{const v=e;E=Lt(v.length>1?v(i,{attrs:l,slots:a,emit:c}):v(i,null)),b=e.props?l:cE(l)}}catch(v){Jr.length=0,Fi(v,t,1),E=q(yn)}let C=E;if(b&&T!==!1){const v=Object.keys(b),{shapeFlag:N}=C;v.length&&N&7&&(o&&v.some(_u)&&(b=uE(b,o)),C=lr(C,b))}return n.dirs&&(C=lr(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),E=C,Jo(R),E}function lE(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(ta(s)){if(s.type!==yn||s.children==="v-if"){if(e)return;e=s}}else return}return e}const cE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oa(n))&&((e||(e={}))[n]=t[n]);return e},uE=(t,e)=>{const n={};for(const s in t)(!_u(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hE(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Sd(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!La(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Sd(s,o,c):!0:!!o;return!1}function Sd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!La(n,i))return!0}return!1}function Su({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nm="components",dE="directives";function In(t,e){return Vm(Nm,t,!0,e)||t}const fE=Symbol.for("v-ndc");function pE(t){return Vm(dE,t)}function Vm(t,e,n=!0,s=!1){const r=At||Ge;if(r){const i=r.type;if(t===Nm){const a=lw(i,!1);if(a&&(a===e||a===ln(e)||a===Va(ln(e))))return i}const o=Cd(r[t]||i[t],e)||Cd(r.appContext[t],e);return!o&&s?i:o}}function Cd(t,e){return t&&(t[e]||t[ln(e)]||t[Va(ln(e))])}const mE=t=>t.__isSuspense,gE={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,l,c){t==null?_E(e,n,s,r,i,o,a,l,c):yE(t,e,n,s,r,o,a,l,c)},hydrate:vE,create:Cu,normalize:EE},Cl=gE;function mi(t,e){const n=t.props&&t.props[e];se(n)&&n()}function _E(t,e,n,s,r,i,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),d=t.suspense=Cu(t,r,s,e,h,n,i,o,a,l);c(null,d.pendingBranch=t.ssContent,h,null,s,d,i,o),d.deps>0?(mi(t,"onPending"),mi(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,i,o),Js(d,t.ssFallback)):d.resolve(!1,!0)}function yE(t,e,n,s,r,i,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,f=e.ssFallback,{activeBranch:y,pendingBranch:T,isInFallback:E,isHydrating:b}=h;if(T)h.pendingBranch=d,Dn(d,T)?(l(T,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():E&&(l(y,f,n,s,r,null,i,o,a),Js(h,f))):(h.pendingId++,b?(h.isHydrating=!1,h.activeBranch=T):c(T,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),E?(l(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(l(y,f,n,s,r,null,i,o,a),Js(h,f))):y&&Dn(d,y)?(l(y,d,n,s,r,h,i,o,a),h.resolve(!0)):(l(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(y&&Dn(d,y))l(y,d,n,s,r,h,i,o,a),Js(h,d);else if(mi(e,"onPending"),h.pendingBranch=d,h.pendingId++,l(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:R,pendingId:C}=h;R>0?setTimeout(()=>{h.pendingId===C&&h.fallback(f)},R):R===0&&h.fallback(f)}}function Cu(t,e,n,s,r,i,o,a,l,c,u=!1){const{p:h,m:d,um:f,n:y,o:{parentNode:T,remove:E}}=c;let b;const R=TE(t);R&&e!=null&&e.pendingBranch&&(b=e.pendingId,e.deps++);const C=t.props?T0(t.props.timeout):void 0,v={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof C=="number"?C:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(N=!1,W=!1){const{vnode:le,activeBranch:fe,pendingBranch:me,pendingId:Se,effects:qe,parentComponent:yt,container:ze}=v;let vt=!1;if(v.isHydrating)v.isHydrating=!1;else if(!N){vt=fe&&me.transition&&me.transition.mode==="out-in",vt&&(fe.transition.afterLeave=()=>{Se===v.pendingId&&(d(me,ze,y(fe),0),yc(qe))});let{anchor:ve}=v;fe&&(ve=y(fe),f(fe,yt,v,!0)),vt||d(me,ze,ve,0)}Js(v,me),v.pendingBranch=null,v.isInFallback=!1;let mt=v.parent,Me=!1;for(;mt;){if(mt.pendingBranch){mt.effects.push(...qe),Me=!0;break}mt=mt.parent}!Me&&!vt&&yc(qe),v.effects=[],R&&e&&e.pendingBranch&&b===e.pendingId&&(e.deps--,e.deps===0&&!W&&e.resolve()),mi(le,"onResolve")},fallback(N){if(!v.pendingBranch)return;const{vnode:W,activeBranch:le,parentComponent:fe,container:me,isSVG:Se}=v;mi(W,"onFallback");const qe=y(le),yt=()=>{v.isInFallback&&(h(null,N,me,qe,fe,null,Se,a,l),Js(v,N))},ze=N.transition&&N.transition.mode==="out-in";ze&&(le.transition.afterLeave=yt),v.isInFallback=!0,f(le,fe,null,!0),ze||yt()},move(N,W,le){v.activeBranch&&d(v.activeBranch,N,W,le),v.container=N},next(){return v.activeBranch&&y(v.activeBranch)},registerDep(N,W){const le=!!v.pendingBranch;le&&v.deps++;const fe=N.vnode.el;N.asyncDep.catch(me=>{Fi(me,N,0)}).then(me=>{if(N.isUnmounted||v.isUnmounted||v.pendingId!==N.suspenseId)return;N.asyncResolved=!0;const{vnode:Se}=N;bc(N,me,!1),fe&&(Se.el=fe);const qe=!fe&&N.subTree.el;W(N,Se,T(fe||N.subTree.el),fe?null:y(N.subTree),v,o,l),qe&&E(qe),Su(N,Se.el),le&&--v.deps===0&&v.resolve()})},unmount(N,W){v.isUnmounted=!0,v.activeBranch&&f(v.activeBranch,n,N,W),v.pendingBranch&&f(v.pendingBranch,n,N,W)}};return v}function vE(t,e,n,s,r,i,o,a,l){const c=e.suspense=Cu(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(!1,!0),u}function EE(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=kd(s?n.default:n),t.ssFallback=s?kd(n.fallback):q(yn)}function kd(t){let e;if(se(t)){const n=ar&&t._c;n&&(t._d=!1,D()),t=t(),n&&(t._d=!0,e=Ot,Qm())}return X(t)&&(t=lE(t)),t=Lt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function wE(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):yc(t)}function Js(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,Su(s,r))}function TE(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const wo={};function ut(t,e,n){return Mm(t,e,n)}function Mm(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ce){var a;const l=cm()===((a=Ge)==null?void 0:a.scope)?Ge:null;let c,u=!1,h=!1;if(ct(t)?(c=()=>t.value,u=Xo(t)):Ys(t)?(c=()=>t,s=!0):X(t)?(h=!0,u=t.some(v=>Ys(v)||Xo(v)),c=()=>t.map(v=>{if(ct(v))return v.value;if(Ys(v))return hs(v);if(se(v))return Bn(v,l,2)})):se(t)?e?c=()=>Bn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Ut(t,l,3,[f])}:c=en,e&&s){const v=c;c=()=>hs(v())}let d,f=v=>{d=R.onStop=()=>{Bn(v,l,4),d=R.onStop=void 0}},y;if(gi)if(f=en,e?n&&Ut(e,l,3,[c(),h?[]:void 0,f]):c(),r==="sync"){const v=hw();y=v.__watcherHandles||(v.__watcherHandles=[])}else return en;let T=h?new Array(t.length).fill(wo):wo;const E=()=>{if(R.active)if(e){const v=R.run();(s||u||(h?v.some((N,W)=>Ts(N,T[W])):Ts(v,T)))&&(d&&d(),Ut(e,l,3,[v,T===wo?void 0:h&&T[0]===wo?[]:T,f]),T=v)}else R.run()};E.allowRecurse=!!e;let b;r==="sync"?b=E:r==="post"?b=()=>wt(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),b=()=>Pu(E));const R=new Tu(c,b);e?n?E():T=R.run():r==="post"?wt(R.run.bind(R),l&&l.suspense):R.run();const C=()=>{R.stop(),l&&l.scope&&yu(l.scope.effects,R)};return y&&y.push(C),C}function IE(t,e,n){const s=this.proxy,r=je(t)?t.includes(".")?Lm(s,t):()=>s[t]:t.bind(s,s);let i;se(e)?i=e:(i=e.handler,n=e);const o=Ge;cr(this);const a=Mm(r,i.bind(s),n);return o?cr(o):ys(),a}function Lm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function hs(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ct(t))hs(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)hs(t[n],e);else if(sm(t)||Gs(t))t.forEach(n=>{hs(n,e)});else if(om(t))for(const n in t)hs(t[n],e);return t}function kt(t,e){const n=At;if(n===null)return t;const s=qa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Ce]=e[i];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&hs(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function rs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(br(),Ut(l,n,8,[t.el,a,t,e]),xr())}}/*! #__NO_SIDE_EFFECTS__ */function ku(t,e){return se(t)?nt({name:t.name},e,{setup:t}):t}const Vo=t=>!!t.type.__asyncLoader,Fm=t=>t.type.__isKeepAlive;function bE(t,e){$m(t,"a",e)}function xE(t,e){$m(t,"da",e)}function $m(t,e,n=Ge){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($a(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Fm(r.parent.vnode)&&AE(s,e,n,r),r=r.parent}}function AE(t,e,n,s){const r=$a(e,t,s,!0);Ou(()=>{yu(s[e],r)},n)}function $a(t,e,n=Ge,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;br(),cr(n);const a=Ut(e,n,t,o);return ys(),xr(),a});return s?r.unshift(i):r.push(i),i}}const bn=t=>(e,n=Ge)=>(!gi||t==="sp")&&$a(t,(...s)=>e(...s),n),Ua=bn("bm"),Cs=bn("m"),RE=bn("bu"),Um=bn("u"),PE=bn("bum"),Ou=bn("um"),SE=bn("sp"),CE=bn("rtg"),kE=bn("rtc");function OE(t,e=Ge){$a("ec",t,e)}function We(t,e,n,s){let r;const i=n&&n[s];if(X(t)||je(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(De(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const vc=t=>t?Jm(t)?qa(t)||t.proxy:vc(t.parent):null,Xr=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vc(t.parent),$root:t=>vc(t.root),$emit:t=>t.emit,$options:t=>Du(t),$forceUpdate:t=>t.f||(t.f=()=>Pu(t.update)),$nextTick:t=>t.n||(t.n=Sm.bind(t.proxy)),$watch:t=>IE.bind(t)}),kl=(t,e)=>t!==Ce&&!t.__isScriptSetup&&ge(t,e),DE={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(kl(s,e))return o[e]=1,s[e];if(r!==Ce&&ge(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ge(c,e))return o[e]=3,i[e];if(n!==Ce&&ge(n,e))return o[e]=4,n[e];Ec&&(o[e]=0)}}const u=Xr[e];let h,d;if(u)return e==="$attrs"&&It(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&ge(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return kl(r,e)?(r[e]=n,!0):s!==Ce&&ge(s,e)?(s[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&ge(t,o)||kl(e,o)||(a=i[0])&&ge(a,o)||ge(s,o)||ge(Xr,o)||ge(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function NE(){return VE().slots}function VE(){const t=Mu();return t.setupContext||(t.setupContext=eg(t))}function Od(t){return X(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ec=!0;function ME(t){const e=Du(t),n=t.proxy,s=t.ctx;Ec=!1,e.beforeCreate&&Dd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:y,activated:T,deactivated:E,beforeDestroy:b,beforeUnmount:R,destroyed:C,unmounted:v,render:N,renderTracked:W,renderTriggered:le,errorCaptured:fe,serverPrefetch:me,expose:Se,inheritAttrs:qe,components:yt,directives:ze,filters:vt}=e;if(c&&LE(c,s,null),o)for(const ve in o){const Ee=o[ve];se(Ee)&&(s[ve]=Ee.bind(n))}if(r){const ve=r.call(n,n);De(ve)&&(t.data=Xn(ve))}if(Ec=!0,i)for(const ve in i){const Ee=i[ve],un=se(Ee)?Ee.bind(n,n):se(Ee.get)?Ee.get.bind(n,n):en,Rn=!se(Ee)&&se(Ee.set)?Ee.set.bind(n):en,zt=Le({get:un,set:Rn});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>zt.value,set:Et=>zt.value=Et})}if(a)for(const ve in a)Bm(a[ve],s,n,ve);if(l){const ve=se(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(Ee=>{Mo(Ee,ve[Ee])})}u&&Dd(u,t,"c");function Me(ve,Ee){X(Ee)?Ee.forEach(un=>ve(un.bind(n))):Ee&&ve(Ee.bind(n))}if(Me(Ua,h),Me(Cs,d),Me(RE,f),Me(Um,y),Me(bE,T),Me(xE,E),Me(OE,fe),Me(kE,W),Me(CE,le),Me(PE,R),Me(Ou,v),Me(SE,me),X(Se))if(Se.length){const ve=t.exposed||(t.exposed={});Se.forEach(Ee=>{Object.defineProperty(ve,Ee,{get:()=>n[Ee],set:un=>n[Ee]=un})})}else t.exposed||(t.exposed={});N&&t.render===en&&(t.render=N),qe!=null&&(t.inheritAttrs=qe),yt&&(t.components=yt),ze&&(t.directives=ze)}function LE(t,e,n=en){X(t)&&(t=wc(t));for(const s in t){const r=t[s];let i;De(r)?"default"in r?i=Bt(r.from||s,r.default,!0):i=Bt(r.from||s):i=Bt(r),ct(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Dd(t,e,n){Ut(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bm(t,e,n,s){const r=s.includes(".")?Lm(n,s):()=>n[s];if(je(t)){const i=e[t];se(i)&&ut(r,i)}else if(se(t))ut(r,t.bind(n));else if(De(t))if(X(t))t.forEach(i=>Bm(i,e,n,s));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&ut(r,i,t)}}function Du(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Zo(l,c,o,!0)),Zo(l,e,o)),De(e)&&i.set(e,l),l}function Zo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Zo(t,i,n,!0),r&&r.forEach(o=>Zo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=FE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const FE={data:Nd,props:Vd,emits:Vd,methods:qr,computed:qr,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:qr,directives:qr,watch:UE,provide:Nd,inject:$E};function Nd(t,e){return e?t?function(){return nt(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function $E(t,e){return qr(wc(t),wc(e))}function wc(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function qr(t,e){return t?nt(Object.create(null),t,e):e}function Vd(t,e){return t?X(t)&&X(e)?[...new Set([...t,...e])]:nt(Object.create(null),Od(t),Od(e??{})):e}function UE(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const s in e)n[s]=gt(t[s],e[s]);return n}function jm(){return{app:null,config:{isNativeTag:_0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let BE=0;function jE(t,e){return function(s,r=null){se(s)||(s=nt({},s)),r!=null&&!De(r)&&(r=null);const i=jm(),o=new WeakSet;let a=!1;const l=i.app={_uid:BE++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:dw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&se(c.install)?(o.add(c),c.install(l,...u)):se(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=q(s,r);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,qa(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){ea=l;try{return c()}finally{ea=null}}};return l}}let ea=null;function Mo(t,e){if(Ge){let n=Ge.provides;const s=Ge.parent&&Ge.parent.provides;s===n&&(n=Ge.provides=Object.create(s)),n[t]=e}}function Bt(t,e,n=!1){const s=Ge||At;if(s||ea){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ea._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}function qE(t,e,n,s=!1){const r={},i={};Yo(i,ja,1),t.propsDefaults=Object.create(null),qm(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Em(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function HE(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ye(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(La(t.emitsOptions,d))continue;const f=e[d];if(l)if(ge(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const y=ln(d);r[y]=Tc(l,a,y,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{qm(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!ge(e,h)&&((u=Ir(h))===h||!ge(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Tc(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ge(e,h))&&(delete i[h],c=!0)}c&&gn(t,"set","$attrs")}function qm(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Do(l))continue;const c=e[l];let u;r&&ge(r,u=ln(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:La(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=ye(n),c=a||Ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Tc(r,l,h,c[h],t,!ge(c,h))}}return o}function Tc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&se(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(cr(r),s=c[n]=l.call(null,e),ys())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ir(n))&&(s=!0))}return s}function Hm(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!se(t)){const u=h=>{l=!0;const[d,f]=Hm(h,e,!0);nt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return De(t)&&s.set(t,Ks),Ks;if(X(i))for(let u=0;u<i.length;u++){const h=ln(i[u]);Md(h)&&(o[h]=Ce)}else if(i)for(const u in i){const h=ln(u);if(Md(h)){const d=i[u],f=o[h]=X(d)||se(d)?{type:d}:nt({},d);if(f){const y=$d(Boolean,f.type),T=$d(String,f.type);f[0]=y>-1,f[1]=T<0||y<T,(y>-1||ge(f,"default"))&&a.push(h)}}}const c=[o,a];return De(t)&&s.set(t,c),c}function Md(t){return t[0]!=="$"}function Ld(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Fd(t,e){return Ld(t)===Ld(e)}function $d(t,e){return X(e)?e.findIndex(n=>Fd(n,t)):se(e)&&Fd(e,t)?0:-1}const zm=t=>t[0]==="_"||t==="$stable",Nu=t=>X(t)?t.map(Lt):[Lt(t)],zE=(t,e,n)=>{if(e._n)return e;const s=ie((...r)=>Nu(e(...r)),n);return s._c=!1,s},Wm=(t,e,n)=>{const s=t._ctx;for(const r in t){if(zm(r))continue;const i=t[r];if(se(i))e[r]=zE(r,i,s);else if(i!=null){const o=Nu(i);e[r]=()=>o}}},Km=(t,e)=>{const n=Nu(e);t.slots.default=()=>n},WE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),Yo(e,"_",n)):Wm(e,t.slots={})}else t.slots={},e&&Km(t,e);Yo(t.slots,ja,1)},KE=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(nt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Wm(e,r)),o=e}else e&&(Km(t,e),o={default:1});if(i)for(const a in r)!zm(a)&&o[a]==null&&delete r[a]};function Ic(t,e,n,s,r=!1){if(X(t)){t.forEach((d,f)=>Ic(d,e&&(X(e)?e[f]:e),n,s,r));return}if(Vo(s)&&!r)return;const i=s.shapeFlag&4?qa(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(je(c)?(u[c]=null,ge(h,c)&&(h[c]=null)):ct(c)&&(c.value=null)),se(l))Bn(l,a,12,[o,u]);else{const d=je(l),f=ct(l);if(d||f){const y=()=>{if(t.f){const T=d?ge(h,l)?h[l]:u[l]:l.value;r?X(T)&&yu(T,i):X(T)?T.includes(i)||T.push(i):d?(u[l]=[i],ge(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ge(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,wt(y,n)):y()}}}const wt=wE;function GE(t){return QE(t)}function QE(t,e){const n=dc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=en,insertStaticContent:y}=t,T=(p,g,_,w=null,A=null,P=null,$=!1,O=null,V=!!g.dynamicChildren)=>{if(p===g)return;p&&!Dn(p,g)&&(w=I(p),Et(p,A,P,!0),p=null),g.patchFlag===-2&&(V=!1,g.dynamicChildren=null);const{type:k,ref:G,shapeFlag:H}=g;switch(k){case Ba:E(p,g,_,w);break;case yn:b(p,g,_,w);break;case Lo:p==null&&R(g,_,w,$);break;case be:yt(p,g,_,w,A,P,$,O,V);break;default:H&1?N(p,g,_,w,A,P,$,O,V):H&6?ze(p,g,_,w,A,P,$,O,V):(H&64||H&128)&&k.process(p,g,_,w,A,P,$,O,V,M)}G!=null&&A&&Ic(G,p&&p.ref,P,g||p,!g)},E=(p,g,_,w)=>{if(p==null)s(g.el=a(g.children),_,w);else{const A=g.el=p.el;g.children!==p.children&&c(A,g.children)}},b=(p,g,_,w)=>{p==null?s(g.el=l(g.children||""),_,w):g.el=p.el},R=(p,g,_,w)=>{[p.el,p.anchor]=y(p.children,g,_,w,p.el,p.anchor)},C=({el:p,anchor:g},_,w)=>{let A;for(;p&&p!==g;)A=d(p),s(p,_,w),p=A;s(g,_,w)},v=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),r(p),p=_;r(g)},N=(p,g,_,w,A,P,$,O,V)=>{$=$||g.type==="svg",p==null?W(g,_,w,A,P,$,O,V):me(p,g,A,P,$,O,V)},W=(p,g,_,w,A,P,$,O)=>{let V,k;const{type:G,props:H,shapeFlag:Q,transition:re,dirs:ce}=p;if(V=p.el=o(p.type,P,H&&H.is,H),Q&8?u(V,p.children):Q&16&&fe(p.children,V,null,w,A,P&&G!=="foreignObject",$,O),ce&&rs(p,null,w,"created"),le(V,p,p.scopeId,$,w),H){for(const Ae in H)Ae!=="value"&&!Do(Ae)&&i(V,Ae,null,H[Ae],P,p.children,w,A,rt);"value"in H&&i(V,"value",null,H.value),(k=H.onVnodeBeforeMount)&&Kt(k,w,p)}ce&&rs(p,null,w,"beforeMount");const Re=YE(A,re);Re&&re.beforeEnter(V),s(V,g,_),((k=H&&H.onVnodeMounted)||Re||ce)&&wt(()=>{k&&Kt(k,w,p),Re&&re.enter(V),ce&&rs(p,null,w,"mounted")},A)},le=(p,g,_,w,A)=>{if(_&&f(p,_),w)for(let P=0;P<w.length;P++)f(p,w[P]);if(A){let P=A.subTree;if(g===P){const $=A.vnode;le(p,$,$.scopeId,$.slotScopeIds,A.parent)}}},fe=(p,g,_,w,A,P,$,O,V=0)=>{for(let k=V;k<p.length;k++){const G=p[k]=O?kn(p[k]):Lt(p[k]);T(null,G,g,_,w,A,P,$,O)}},me=(p,g,_,w,A,P,$)=>{const O=g.el=p.el;let{patchFlag:V,dynamicChildren:k,dirs:G}=g;V|=p.patchFlag&16;const H=p.props||Ce,Q=g.props||Ce;let re;_&&is(_,!1),(re=Q.onVnodeBeforeUpdate)&&Kt(re,_,g,p),G&&rs(g,p,_,"beforeUpdate"),_&&is(_,!0);const ce=A&&g.type!=="foreignObject";if(k?Se(p.dynamicChildren,k,O,_,w,ce,P):$||Ee(p,g,O,null,_,w,ce,P,!1),V>0){if(V&16)qe(O,g,H,Q,_,w,A);else if(V&2&&H.class!==Q.class&&i(O,"class",null,Q.class,A),V&4&&i(O,"style",H.style,Q.style,A),V&8){const Re=g.dynamicProps;for(let Ae=0;Ae<Re.length;Ae++){const Fe=Re[Ae],Nt=H[Fe],Fs=Q[Fe];(Fs!==Nt||Fe==="value")&&i(O,Fe,Nt,Fs,A,p.children,_,w,rt)}}V&1&&p.children!==g.children&&u(O,g.children)}else!$&&k==null&&qe(O,g,H,Q,_,w,A);((re=Q.onVnodeUpdated)||G)&&wt(()=>{re&&Kt(re,_,g,p),G&&rs(g,p,_,"updated")},w)},Se=(p,g,_,w,A,P,$)=>{for(let O=0;O<g.length;O++){const V=p[O],k=g[O],G=V.el&&(V.type===be||!Dn(V,k)||V.shapeFlag&70)?h(V.el):_;T(V,k,G,null,w,A,P,$,!0)}},qe=(p,g,_,w,A,P,$)=>{if(_!==w){if(_!==Ce)for(const O in _)!Do(O)&&!(O in w)&&i(p,O,_[O],null,$,g.children,A,P,rt);for(const O in w){if(Do(O))continue;const V=w[O],k=_[O];V!==k&&O!=="value"&&i(p,O,k,V,$,g.children,A,P,rt)}"value"in w&&i(p,"value",_.value,w.value)}},yt=(p,g,_,w,A,P,$,O,V)=>{const k=g.el=p?p.el:a(""),G=g.anchor=p?p.anchor:a("");let{patchFlag:H,dynamicChildren:Q,slotScopeIds:re}=g;re&&(O=O?O.concat(re):re),p==null?(s(k,_,w),s(G,_,w),fe(g.children,_,G,A,P,$,O,V)):H>0&&H&64&&Q&&p.dynamicChildren?(Se(p.dynamicChildren,Q,_,A,P,$,O),(g.key!=null||A&&g===A.subTree)&&Gm(p,g,!0)):Ee(p,g,_,G,A,P,$,O,V)},ze=(p,g,_,w,A,P,$,O,V)=>{g.slotScopeIds=O,p==null?g.shapeFlag&512?A.ctx.activate(g,_,w,$,V):vt(g,_,w,A,P,$,V):mt(p,g,V)},vt=(p,g,_,w,A,P,$)=>{const O=p.component=rw(p,w,A);if(Fm(p)&&(O.ctx.renderer=M),iw(O),O.asyncDep){if(A&&A.registerDep(O,Me),!p.el){const V=O.subTree=q(yn);b(null,V,g,_)}return}Me(O,p,g,_,A,P,$)},mt=(p,g,_)=>{const w=g.component=p.component;if(hE(p,g,_))if(w.asyncDep&&!w.asyncResolved){ve(w,g,_);return}else w.next=g,iE(w.update),w.update();else g.el=p.el,w.vnode=g},Me=(p,g,_,w,A,P,$)=>{const O=()=>{if(p.isMounted){let{next:G,bu:H,u:Q,parent:re,vnode:ce}=p,Re=G,Ae;is(p,!1),G?(G.el=ce.el,ve(p,G,$)):G=ce,H&&No(H),(Ae=G.props&&G.props.onVnodeBeforeUpdate)&&Kt(Ae,re,G,ce),is(p,!0);const Fe=Sl(p),Nt=p.subTree;p.subTree=Fe,T(Nt,Fe,h(Nt.el),I(Nt),p,A,P),G.el=Fe.el,Re===null&&Su(p,Fe.el),Q&&wt(Q,A),(Ae=G.props&&G.props.onVnodeUpdated)&&wt(()=>Kt(Ae,re,G,ce),A)}else{let G;const{el:H,props:Q}=g,{bm:re,m:ce,parent:Re}=p,Ae=Vo(g);if(is(p,!1),re&&No(re),!Ae&&(G=Q&&Q.onVnodeBeforeMount)&&Kt(G,Re,g),is(p,!0),H&&we){const Fe=()=>{p.subTree=Sl(p),we(H,p.subTree,p,A,null)};Ae?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Fe()):Fe()}else{const Fe=p.subTree=Sl(p);T(null,Fe,_,w,p,A,P),g.el=Fe.el}if(ce&&wt(ce,A),!Ae&&(G=Q&&Q.onVnodeMounted)){const Fe=g;wt(()=>Kt(G,Re,Fe),A)}(g.shapeFlag&256||Re&&Vo(Re.vnode)&&Re.vnode.shapeFlag&256)&&p.a&&wt(p.a,A),p.isMounted=!0,g=_=w=null}},V=p.effect=new Tu(O,()=>Pu(k),p.scope),k=p.update=()=>V.run();k.id=p.uid,is(p,!0),k()},ve=(p,g,_)=>{g.component=p;const w=p.vnode.props;p.vnode=g,p.next=null,HE(p,g.props,w,_),KE(p,g.children,_),br(),Pd(p),xr()},Ee=(p,g,_,w,A,P,$,O,V=!1)=>{const k=p&&p.children,G=p?p.shapeFlag:0,H=g.children,{patchFlag:Q,shapeFlag:re}=g;if(Q>0){if(Q&128){Rn(k,H,_,w,A,P,$,O,V);return}else if(Q&256){un(k,H,_,w,A,P,$,O,V);return}}re&8?(G&16&&rt(k,A,P),H!==k&&u(_,H)):G&16?re&16?Rn(k,H,_,w,A,P,$,O,V):rt(k,A,P,!0):(G&8&&u(_,""),re&16&&fe(H,_,w,A,P,$,O,V))},un=(p,g,_,w,A,P,$,O,V)=>{p=p||Ks,g=g||Ks;const k=p.length,G=g.length,H=Math.min(k,G);let Q;for(Q=0;Q<H;Q++){const re=g[Q]=V?kn(g[Q]):Lt(g[Q]);T(p[Q],re,_,null,A,P,$,O,V)}k>G?rt(p,A,P,!0,!1,H):fe(g,_,w,A,P,$,O,V,H)},Rn=(p,g,_,w,A,P,$,O,V)=>{let k=0;const G=g.length;let H=p.length-1,Q=G-1;for(;k<=H&&k<=Q;){const re=p[k],ce=g[k]=V?kn(g[k]):Lt(g[k]);if(Dn(re,ce))T(re,ce,_,null,A,P,$,O,V);else break;k++}for(;k<=H&&k<=Q;){const re=p[H],ce=g[Q]=V?kn(g[Q]):Lt(g[Q]);if(Dn(re,ce))T(re,ce,_,null,A,P,$,O,V);else break;H--,Q--}if(k>H){if(k<=Q){const re=Q+1,ce=re<G?g[re].el:w;for(;k<=Q;)T(null,g[k]=V?kn(g[k]):Lt(g[k]),_,ce,A,P,$,O,V),k++}}else if(k>Q)for(;k<=H;)Et(p[k],A,P,!0),k++;else{const re=k,ce=k,Re=new Map;for(k=ce;k<=Q;k++){const bt=g[k]=V?kn(g[k]):Lt(g[k]);bt.key!=null&&Re.set(bt.key,k)}let Ae,Fe=0;const Nt=Q-ce+1;let Fs=!1,_d=0;const Lr=new Array(Nt);for(k=0;k<Nt;k++)Lr[k]=0;for(k=re;k<=H;k++){const bt=p[k];if(Fe>=Nt){Et(bt,A,P,!0);continue}let Wt;if(bt.key!=null)Wt=Re.get(bt.key);else for(Ae=ce;Ae<=Q;Ae++)if(Lr[Ae-ce]===0&&Dn(bt,g[Ae])){Wt=Ae;break}Wt===void 0?Et(bt,A,P,!0):(Lr[Wt-ce]=k+1,Wt>=_d?_d=Wt:Fs=!0,T(bt,g[Wt],_,null,A,P,$,O,V),Fe++)}const yd=Fs?XE(Lr):Ks;for(Ae=yd.length-1,k=Nt-1;k>=0;k--){const bt=ce+k,Wt=g[bt],vd=bt+1<G?g[bt+1].el:w;Lr[k]===0?T(null,Wt,_,vd,A,P,$,O,V):Fs&&(Ae<0||k!==yd[Ae]?zt(Wt,_,vd,2):Ae--)}}},zt=(p,g,_,w,A=null)=>{const{el:P,type:$,transition:O,children:V,shapeFlag:k}=p;if(k&6){zt(p.component.subTree,g,_,w);return}if(k&128){p.suspense.move(g,_,w);return}if(k&64){$.move(p,g,_,M);return}if($===be){s(P,g,_);for(let H=0;H<V.length;H++)zt(V[H],g,_,w);s(p.anchor,g,_);return}if($===Lo){C(p,g,_);return}if(w!==2&&k&1&&O)if(w===0)O.beforeEnter(P),s(P,g,_),wt(()=>O.enter(P),A);else{const{leave:H,delayLeave:Q,afterLeave:re}=O,ce=()=>s(P,g,_),Re=()=>{H(P,()=>{ce(),re&&re()})};Q?Q(P,ce,Re):Re()}else s(P,g,_)},Et=(p,g,_,w=!1,A=!1)=>{const{type:P,props:$,ref:O,children:V,dynamicChildren:k,shapeFlag:G,patchFlag:H,dirs:Q}=p;if(O!=null&&Ic(O,null,_,p,!0),G&256){g.ctx.deactivate(p);return}const re=G&1&&Q,ce=!Vo(p);let Re;if(ce&&(Re=$&&$.onVnodeBeforeUnmount)&&Kt(Re,g,p),G&6)mo(p.component,_,w);else{if(G&128){p.suspense.unmount(_,w);return}re&&rs(p,null,g,"beforeUnmount"),G&64?p.type.remove(p,g,_,A,M,w):k&&(P!==be||H>0&&H&64)?rt(k,g,_,!1,!0):(P===be&&H&384||!A&&G&16)&&rt(V,g,_),w&&Ms(p)}(ce&&(Re=$&&$.onVnodeUnmounted)||re)&&wt(()=>{Re&&Kt(Re,g,p),re&&rs(p,null,g,"unmounted")},_)},Ms=p=>{const{type:g,el:_,anchor:w,transition:A}=p;if(g===be){Ls(_,w);return}if(g===Lo){v(p);return}const P=()=>{r(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:$,delayLeave:O}=A,V=()=>$(_,P);O?O(p.el,P,V):V()}else P()},Ls=(p,g)=>{let _;for(;p!==g;)_=d(p),r(p),p=_;r(g)},mo=(p,g,_)=>{const{bum:w,scope:A,update:P,subTree:$,um:O}=p;w&&No(w),A.stop(),P&&(P.active=!1,Et($,p,g,_)),O&&wt(O,g),wt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},rt=(p,g,_,w=!1,A=!1,P=0)=>{for(let $=P;$<p.length;$++)Et(p[$],g,_,w,A)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),U=(p,g,_)=>{p==null?g._vnode&&Et(g._vnode,null,null,!0):T(g._vnode||null,p,g,null,null,null,_),Pd(),km(),g._vnode=p},M={p:T,um:Et,m:zt,r:Ms,mt:vt,mc:fe,pc:Ee,pbc:Se,n:I,o:t};let z,we;return e&&([z,we]=e(M)),{render:U,hydrate:z,createApp:jE(U,z)}}function is({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function YE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gm(t,e,n=!1){const s=t.children,r=e.children;if(X(s)&&X(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=kn(r[i]),a.el=o.el),n||Gm(o,a)),a.type===Ba&&(a.el=o.el)}}function XE(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const JE=t=>t.__isTeleport,be=Symbol.for("v-fgt"),Ba=Symbol.for("v-txt"),yn=Symbol.for("v-cmt"),Lo=Symbol.for("v-stc"),Jr=[];let Ot=null;function D(t=!1){Jr.push(Ot=t?null:[])}function Qm(){Jr.pop(),Ot=Jr[Jr.length-1]||null}let ar=1;function Ud(t){ar+=t}function Ym(t){return t.dynamicChildren=ar>0?Ot||Ks:null,Qm(),ar>0&&Ot&&Ot.push(t),t}function F(t,e,n,s,r,i){return Ym(m(t,e,n,s,r,i,!0))}function tn(t,e,n,s,r){return Ym(q(t,e,n,s,r,!0))}function ta(t){return t?t.__v_isVNode===!0:!1}function Dn(t,e){return t.type===e.type&&t.key===e.key}const ja="__vInternal",Xm=({key:t})=>t??null,Fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||ct(t)||se(t)?{i:At,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,s=0,r=null,i=t===be?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xm(e),ref:e&&Fo(e),scopeId:Fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:At};return a?(Vu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),ar>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const q=ZE;function ZE(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===fE)&&(t=yn),ta(t)){const a=lr(t,e,!0);return n&&Vu(a,n),ar>0&&!i&&Ot&&(a.shapeFlag&6?Ot[Ot.indexOf(t)]=a:Ot.push(a)),a.patchFlag|=-2,a}if(cw(t)&&(t=t.__vccOpts),e){e=ew(e);let{class:a,style:l}=e;a&&!je(a)&&(e.class=Qs(a)),De(l)&&(Tm(l)&&!X(l)&&(l=nt({},l)),e.style=Eu(l))}const o=je(t)?1:mE(t)?128:JE(t)?64:De(t)?4:se(t)?2:0;return m(t,e,n,s,r,o,i,!0)}function ew(t){return t?Tm(t)||ja in t?nt({},t):t:null}function lr(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?tw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Xm(a),ref:e&&e.ref?n&&r?X(r)?r.concat(Fo(e)):[r,Fo(e)]:Fo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==be?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&lr(t.ssContent),ssFallback:t.ssFallback&&lr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Mt(t=" ",e=0){return q(Ba,null,t,e)}function Bi(t,e){const n=q(Lo,null,t);return n.staticCount=e,n}function Ln(t="",e=!1){return e?(D(),tn(yn,null,t)):q(yn,null,t)}function Lt(t){return t==null||typeof t=="boolean"?q(yn):X(t)?q(be,null,t.slice()):typeof t=="object"?kn(t):q(Ba,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:lr(t)}function Vu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Vu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ja in e)?e._ctx=At:r===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:At},n=32):(e=String(e),s&64?(n=16,e=[Mt(e)]):n=8);t.children=e,t.shapeFlag|=n}function tw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Qs([e.class,s.class]));else if(r==="style")e.style=Eu([e.style,s.style]);else if(Oa(r)){const i=e[r],o=s[r];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Kt(t,e,n,s=null){Ut(t,e,7,[n,s])}const nw=jm();let sw=0;function rw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||nw,i={uid:sw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new S0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hm(s,r),emitsOptions:Dm(s,r),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=aE.bind(null,i),t.ce&&t.ce(i),i}let Ge=null;const Mu=()=>Ge||At;let Lu,$s,Bd="__VUE_INSTANCE_SETTERS__";($s=dc()[Bd])||($s=dc()[Bd]=[]),$s.push(t=>Ge=t),Lu=t=>{$s.length>1?$s.forEach(e=>e(t)):$s[0](t)};const cr=t=>{Lu(t),t.scope.on()},ys=()=>{Ge&&Ge.scope.off(),Lu(null)};function Jm(t){return t.vnode.shapeFlag&4}let gi=!1;function iw(t,e=!1){gi=e;const{props:n,children:s}=t.vnode,r=Jm(t);qE(t,n,r,e),WE(t,s);const i=r?ow(t,e):void 0;return gi=!1,i}function ow(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Im(new Proxy(t.ctx,DE));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?eg(t):null;cr(t),br();const i=Bn(s,t,0,[t.props,r]);if(xr(),ys(),rm(i)){if(i.then(ys,ys),e)return i.then(o=>{bc(t,o,e)}).catch(o=>{Fi(o,t,0)});t.asyncDep=i}else bc(t,i,e)}else Zm(t,e)}function bc(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Rm(e)),Zm(t,n)}let jd;function Zm(t,e,n){const s=t.type;if(!t.render){if(!e&&jd&&!s.render){const r=s.template||Du(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=nt(nt({isCustomElement:i,delimiters:a},o),l);s.render=jd(r,c)}}t.render=s.render||en}{cr(t),br();try{ME(t)}finally{xr(),ys()}}}function aw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return It(t,"get","$attrs"),e[n]}}))}function eg(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return aw(t)},slots:t.slots,emit:t.emit,expose:e}}function qa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rm(Im(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xr)return Xr[n](t)},has(e,n){return n in e||n in Xr}}))}function lw(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function cw(t){return se(t)&&"__vccOpts"in t}const Le=(t,e)=>nE(t,e,gi);function na(t,e,n){const s=arguments.length;return s===2?De(e)&&!X(e)?ta(e)?q(t,null,[e]):q(t,e):q(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ta(n)&&(n=[n]),q(t,e,n))}const uw=Symbol.for("v-scx"),hw=()=>Bt(uw),dw="3.3.11",fw="http://www.w3.org/2000/svg",us=typeof document<"u"?document:null,qd=us&&us.createElement("template"),pw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?us.createElementNS(fw,t):us.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>us.createTextNode(t),createComment:t=>us.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>us.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{qd.innerHTML=s?`<svg>${t}</svg>`:t;const a=qd.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mw=Symbol("_vtc");function gw(t,e,n){const s=t[mw];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _w=Symbol("_vod");function yw(t,e,n){const s=t.style,r=je(n);if(n&&!r){if(e&&!je(e))for(const i in e)n[i]==null&&xc(s,i,"");for(const i in n)xc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),_w in t&&(s.display=i)}}const Hd=/\s*!important$/;function xc(t,e,n){if(X(n))n.forEach(s=>xc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=vw(t,e);Hd.test(n)?t.setProperty(Ir(s),n.replace(Hd,""),"important"):t[s]=n}}const zd=["Webkit","Moz","ms"],Ol={};function vw(t,e){const n=Ol[e];if(n)return n;let s=ln(e);if(s!=="filter"&&s in t)return Ol[e]=s;s=Va(s);for(let r=0;r<zd.length;r++){const i=zd[r]+s;if(i in t)return Ol[e]=i}return e}const Wd="http://www.w3.org/1999/xlink";function Ew(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wd,e.slice(6,e.length)):t.setAttributeNS(Wd,e,n);else{const i=P0(e);n==null||i&&!am(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ww(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=am(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Bs(t,e,n,s){t.addEventListener(e,n,s)}function Tw(t,e,n,s){t.removeEventListener(e,n,s)}const Kd=Symbol("_vei");function Iw(t,e,n,s,r=null){const i=t[Kd]||(t[Kd]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=bw(e);if(s){const c=i[e]=Rw(s,r);Bs(t,a,c,l)}else o&&(Tw(t,a,o,l),i[e]=void 0)}}const Gd=/(?:Once|Passive|Capture)$/;function bw(t){let e;if(Gd.test(t)){e={};let s;for(;s=t.match(Gd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ir(t.slice(2)),e]}let Dl=0;const xw=Promise.resolve(),Aw=()=>Dl||(xw.then(()=>Dl=0),Dl=Date.now());function Rw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ut(Pw(s,n.value),e,5,[s])};return n.value=t,n.attached=Aw(),n}function Pw(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Qd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sw=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?gw(t,s,r):e==="style"?yw(t,n,s):Oa(e)?_u(e)||Iw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cw(t,e,s,r))?ww(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ew(t,e,s,r))};function Cw(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qd(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Qd(e)&&je(n)?!1:e in t}const Yd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>No(e,n):e};function kw(t){t.target.composing=!0}function Xd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Nl=Symbol("_assign"),jn={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Nl]=Yd(r);const i=s||r.props&&r.props.type==="number";Bs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=hc(a)),t[Nl](a)}),n&&Bs(t,"change",()=>{t.value=t.value.trim()}),e||(Bs(t,"compositionstart",kw),Bs(t,"compositionend",Xd),Bs(t,"change",Xd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[Nl]=Yd(i),t.composing)return;const o=r||t.type==="number"?hc(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},Ow=["ctrl","shift","alt","meta"],Dw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ow.some(n=>t[`${n}Key`]&&!e.includes(n))},sa=(t,e)=>t._withMods||(t._withMods=(n,...s)=>{for(let r=0;r<e.length;r++){const i=Dw[e[r]];if(i&&i(n,e))return}return t(n,...s)}),Nw=nt({patchProp:Sw},pw);let Jd;function Vw(){return Jd||(Jd=GE(Nw))}const Mw=(...t)=>{const e=Vw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Lw(s);if(!r)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Lw(t){return je(t)?document.querySelector(t):t}function tg(t){return cm()?(k0(t),!0):!1}function Fu(t){return typeof t=="function"?t():Y(t)}const Fw=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const $w=t=>t!=null,Uw=Object.prototype.toString,ra=t=>Uw.call(t)==="[object Object]",$o=()=>{};function Bw(t){return t||Mu()}function jw(t,e){Bw(e)&&Ou(t,e)}function Zr(t){var e;const n=Fu(t);return(e=n==null?void 0:n.$el)!=null?e:n}const ng=Fw?window:void 0;function Vt(...t){let e,n,s,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,r]=t,e=ng):[e,n,s,r]=t,!e)return $o;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=ut(()=>[Zr(e),Fu(r)],([u,h])=>{if(o(),!u)return;const d=ra(h)?{...h}:h;i.push(...n.flatMap(f=>s.map(y=>a(u,f,y,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return tg(c),c}function qw(){const t=ee(!1),e=Mu();return e&&Cs(()=>{t.value=!0},e),t}function Hw(t){const e=qw();return Le(()=>(e.value,!!t()))}function zw(t,e,n={}){const{root:s,rootMargin:r="0px",threshold:i=.1,window:o=ng,immediate:a=!0}=n,l=Hw(()=>o&&"IntersectionObserver"in o),c=Le(()=>{const y=Fu(t);return(Array.isArray(y)?y:[y]).map(Zr).filter($w)});let u=$o;const h=ee(a),d=l.value?ut(()=>[c.value,Zr(s),h.value],([y,T])=>{if(u(),!h.value||!y.length)return;const E=new IntersectionObserver(e,{root:Zr(T),rootMargin:r,threshold:i});y.forEach(b=>b&&E.observe(b)),u=()=>{E.disconnect(),u=$o}},{immediate:a,flush:"post"}):$o,f=()=>{u(),d(),h.value=!1};return tg(f),{isSupported:l,isActive:h,pause(){u(),h.value=!1},resume(){h.value=!0},stop:f}}const sg=1/60*1e3,Ww=typeof performance<"u"?()=>performance.now():()=>Date.now(),rg=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(Ww()),sg);function Kw(t){let e=[],n=[],s=0,r=!1,i=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const h=u&&r,d=h?e:n;return c&&o.add(l),d.indexOf(l)===-1&&(d.push(l),h&&r&&(s=e.length)),l},cancel:l=>{const c=n.indexOf(l);c!==-1&&n.splice(c,1),o.delete(l)},process:l=>{if(r){i=!0;return}if(r=!0,[e,n]=[n,e],n.length=0,s=e.length,s)for(let c=0;c<s;c++){const u=e[c];u(l),o.has(u)&&(a.schedule(u),t())}r=!1,i&&(i=!1,a.process(l))}};return a}const Gw=40;let Ac=!0,_i=!1,Rc=!1;const Zs={delta:0,timestamp:0},ji=["read","update","preRender","render","postRender"],Ha=ji.reduce((t,e)=>(t[e]=Kw(()=>_i=!0),t),{}),Pc=ji.reduce((t,e)=>{const n=Ha[e];return t[e]=(s,r=!1,i=!1)=>(_i||Xw(),n.schedule(s,r,i)),t},{}),Qw=ji.reduce((t,e)=>(t[e]=Ha[e].cancel,t),{});ji.reduce((t,e)=>(t[e]=()=>Ha[e].process(Zs),t),{});const Yw=t=>Ha[t].process(Zs),ig=t=>{_i=!1,Zs.delta=Ac?sg:Math.max(Math.min(t-Zs.timestamp,Gw),1),Zs.timestamp=t,Rc=!0,ji.forEach(Yw),Rc=!1,_i&&(Ac=!1,rg(ig))},Xw=()=>{_i=!0,Ac=!0,Rc||rg(ig)},og=()=>Zs;function ag(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}var Jw=function(){},Zd=function(){};const Sc=(t,e,n)=>Math.min(Math.max(n,t),e),Vl=.001,Zw=.01,ef=10,eT=.05,tT=1;function nT({duration:t=800,bounce:e=.25,velocity:n=0,mass:s=1}){let r,i;Jw(t<=ef*1e3);let o=1-e;o=Sc(eT,tT,o),t=Sc(Zw,ef,t/1e3),o<1?(r=c=>{const u=c*o,h=u*t,d=u-n,f=Cc(c,o),y=Math.exp(-h);return Vl-d/f*y},i=c=>{const h=c*o*t,d=h*n+n,f=Math.pow(o,2)*Math.pow(c,2)*t,y=Math.exp(-h),T=Cc(Math.pow(c,2),o);return(-r(c)+Vl>0?-1:1)*((d-f)*y)/T}):(r=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-Vl+u*h},i=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const a=5/t,l=rT(r,i,a);if(t=t*1e3,isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*s;return{stiffness:c,damping:o*2*Math.sqrt(s*c),duration:t}}}const sT=12;function rT(t,e,n){let s=n;for(let r=1;r<sT;r++)s=s-t(s)/e(s);return s}function Cc(t,e){return t*Math.sqrt(1-e*e)}const iT=["duration","bounce"],oT=["stiffness","damping","mass"];function tf(t,e){return e.some(n=>t[n]!==void 0)}function aT(t){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!tf(t,oT)&&tf(t,iT)){const n=nT(t);e=Object.assign(Object.assign(Object.assign({},e),n),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function $u(t){var{from:e=0,to:n=1,restSpeed:s=2,restDelta:r}=t,i=ag(t,["from","to","restSpeed","restDelta"]);const o={done:!1,value:e};let{stiffness:a,damping:l,mass:c,velocity:u,duration:h,isResolvedFromDuration:d}=aT(i),f=nf,y=nf;function T(){const E=u?-(u/1e3):0,b=n-e,R=l/(2*Math.sqrt(a*c)),C=Math.sqrt(a/c)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-e)/100,.4)),R<1){const v=Cc(C,R);f=N=>{const W=Math.exp(-R*C*N);return n-W*((E+R*C*b)/v*Math.sin(v*N)+b*Math.cos(v*N))},y=N=>{const W=Math.exp(-R*C*N);return R*C*W*(Math.sin(v*N)*(E+R*C*b)/v+b*Math.cos(v*N))-W*(Math.cos(v*N)*(E+R*C*b)-v*b*Math.sin(v*N))}}else if(R===1)f=v=>n-Math.exp(-C*v)*(b+(E+C*b)*v);else{const v=C*Math.sqrt(R*R-1);f=N=>{const W=Math.exp(-R*C*N),le=Math.min(v*N,300);return n-W*((E+R*C*b)*Math.sinh(le)+v*b*Math.cosh(le))/v}}}return T(),{next:E=>{const b=f(E);if(d)o.done=E>=h;else{const R=y(E)*1e3,C=Math.abs(R)<=s,v=Math.abs(n-b)<=r;o.done=C&&v}return o.value=o.done?n:b,o},flipTarget:()=>{u=-u,[e,n]=[n,e],T()}}}$u.needsInterpolation=(t,e)=>typeof t=="string"||typeof e=="string";const nf=t=>0,lg=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s},Uu=(t,e,n)=>-n*t+n*e+t,cg=(t,e)=>n=>Math.max(Math.min(n,e),t),ei=t=>t%1?Number(t.toFixed(5)):t,yi=/(-)?([\d]*\.?[\d])+/g,kc=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,lT=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function qi(t){return typeof t=="string"}const Hi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ti=Object.assign(Object.assign({},Hi),{transform:cg(0,1)}),To=Object.assign(Object.assign({},Hi),{default:1}),Bu=t=>({test:e=>qi(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),os=Bu("deg"),ni=Bu("%"),ae=Bu("px"),sf=Object.assign(Object.assign({},ni),{parse:t=>ni.parse(t)/100,transform:t=>ni.transform(t*100)}),ju=(t,e)=>n=>!!(qi(n)&&lT.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),ug=(t,e,n)=>s=>{if(!qi(s))return s;const[r,i,o,a]=s.match(yi);return{[t]:parseFloat(r),[e]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},ds={test:ju("hsl","hue"),parse:ug("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+ni.transform(ei(e))+", "+ni.transform(ei(n))+", "+ei(ti.transform(s))+")"},cT=cg(0,255),Ml=Object.assign(Object.assign({},Hi),{transform:t=>Math.round(cT(t))}),Fn={test:ju("rgb","red"),parse:ug("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+Ml.transform(t)+", "+Ml.transform(e)+", "+Ml.transform(n)+", "+ei(ti.transform(s))+")"};function uT(t){let e="",n="",s="",r="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),s=t.substr(5,2),r=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),s=t.substr(3,1),r=t.substr(4,1),e+=e,n+=n,s+=s,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const Oc={test:ju("#"),parse:uT,transform:Fn.transform},Tt={test:t=>Fn.test(t)||Oc.test(t)||ds.test(t),parse:t=>Fn.test(t)?Fn.parse(t):ds.test(t)?ds.parse(t):Oc.parse(t),transform:t=>qi(t)?t:t.hasOwnProperty("red")?Fn.transform(t):ds.transform(t)},hg="${c}",dg="${n}";function hT(t){var e,n,s,r;return isNaN(t)&&qi(t)&&((n=(e=t.match(yi))===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0)+((r=(s=t.match(kc))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function fg(t){typeof t=="number"&&(t=`${t}`);const e=[];let n=0;const s=t.match(kc);s&&(n=s.length,t=t.replace(kc,hg),e.push(...s.map(Tt.parse)));const r=t.match(yi);return r&&(t=t.replace(yi,dg),e.push(...r.map(Hi.parse))),{values:e,numColors:n,tokenised:t}}function pg(t){return fg(t).values}function mg(t){const{values:e,numColors:n,tokenised:s}=fg(t),r=e.length;return i=>{let o=s;for(let a=0;a<r;a++)o=o.replace(a<n?hg:dg,a<n?Tt.transform(i[a]):ei(i[a]));return o}}const dT=t=>typeof t=="number"?0:t;function fT(t){const e=pg(t);return mg(t)(e.map(dT))}const zi={test:hT,parse:pg,createTransformer:mg,getAnimatableNone:fT},pT=new Set(["brightness","contrast","saturate","opacity"]);function mT(t){let[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[s]=n.match(yi)||[];if(!s)return t;const r=n.replace(s,"");let i=pT.has(e)?1:0;return s!==n&&(i*=100),e+"("+i+r+")"}const gT=/([a-z-]*)\(.*?\)/g,Dc=Object.assign(Object.assign({},zi),{getAnimatableNone:t=>{const e=t.match(gT);return e?e.map(mT).join(" "):t}});function Ll(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function rf({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let r=0,i=0,o=0;if(!e)r=i=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Ll(l,a,t+1/3),i=Ll(l,a,t),o=Ll(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:s}}const _T=(t,e,n)=>{const s=t*t,r=e*e;return Math.sqrt(Math.max(0,n*(r-s)+s))},yT=[Oc,Fn,ds],of=t=>yT.find(e=>e.test(t)),gg=(t,e)=>{let n=of(t),s=of(e),r=n.parse(t),i=s.parse(e);n===ds&&(r=rf(r),n=Fn),s===ds&&(i=rf(i),s=Fn);const o=Object.assign({},r);return a=>{for(const l in o)l!=="alpha"&&(o[l]=_T(r[l],i[l],a));return o.alpha=Uu(r.alpha,i.alpha,a),n.transform(o)}},vT=t=>typeof t=="number",ET=(t,e)=>n=>e(t(n)),_g=(...t)=>t.reduce(ET);function yg(t,e){return vT(t)?n=>Uu(t,e,n):Tt.test(t)?gg(t,e):Eg(t,e)}const vg=(t,e)=>{const n=[...t],s=n.length,r=t.map((i,o)=>yg(i,e[o]));return i=>{for(let o=0;o<s;o++)n[o]=r[o](i);return n}},wT=(t,e)=>{const n=Object.assign(Object.assign({},t),e),s={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(s[r]=yg(t[r],e[r]));return r=>{for(const i in s)n[i]=s[i](r);return n}};function af(t){const e=zi.parse(t),n=e.length;let s=0,r=0,i=0;for(let o=0;o<n;o++)s||typeof e[o]=="number"?s++:e[o].hue!==void 0?i++:r++;return{parsed:e,numNumbers:s,numRGB:r,numHSL:i}}const Eg=(t,e)=>{const n=zi.createTransformer(e),s=af(t),r=af(e);return s.numHSL===r.numHSL&&s.numRGB===r.numRGB&&s.numNumbers>=r.numNumbers?_g(vg(s.parsed,r.parsed),n):o=>`${o>0?e:t}`},TT=(t,e)=>n=>Uu(t,e,n);function IT(t){if(typeof t=="number")return TT;if(typeof t=="string")return Tt.test(t)?gg:Eg;if(Array.isArray(t))return vg;if(typeof t=="object")return wT}function bT(t,e,n){const s=[],r=n||IT(t[0]),i=t.length-1;for(let o=0;o<i;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]:e;a=_g(l,a)}s.push(a)}return s}function xT([t,e],[n]){return s=>n(lg(t,e,s))}function AT(t,e){const n=t.length,s=n-1;return r=>{let i=0,o=!1;if(r<=t[0]?o=!0:r>=t[s]&&(i=s-1,o=!0),!o){let l=1;for(;l<n&&!(t[l]>r||l===s);l++);i=l-1}const a=lg(t[i],t[i+1],r);return e[i](a)}}function wg(t,e,{clamp:n=!0,ease:s,mixer:r}={}){const i=t.length;Zd(i===e.length),Zd(!s||!Array.isArray(s)||s.length===i-1),t[0]>t[i-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const o=bT(e,s,r),a=i===2?xT(t,o):AT(t,o);return n?l=>a(Sc(t[0],t[i-1],l)):a}const za=t=>e=>1-t(1-e),qu=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,RT=t=>e=>Math.pow(e,t),Tg=t=>e=>e*e*((t+1)*e-t),PT=t=>{const e=Tg(t);return n=>(n*=2)<1?.5*e(n):.5*(2-Math.pow(2,-10*(n-1)))},Ig=1.525,ST=4/11,CT=8/11,kT=9/10,bg=t=>t,Hu=RT(2),OT=za(Hu),xg=qu(Hu),Ag=t=>1-Math.sin(Math.acos(t)),Rg=za(Ag),DT=qu(Rg),zu=Tg(Ig),NT=za(zu),VT=qu(zu),MT=PT(Ig),LT=4356/361,FT=35442/1805,$T=16061/1805,ia=t=>{if(t===1||t===0)return t;const e=t*t;return t<ST?7.5625*e:t<CT?9.075*e-9.9*t+3.4:t<kT?LT*e-FT*t+$T:10.8*t*t-20.52*t+10.72},UT=za(ia),BT=t=>t<.5?.5*(1-ia(1-t*2)):.5*ia(t*2-1)+.5;function jT(t,e){return t.map(()=>e||xg).splice(0,t.length-1)}function qT(t){const e=t.length;return t.map((n,s)=>s!==0?s/(e-1):0)}function HT(t,e){return t.map(n=>n*e)}function Uo({from:t=0,to:e=1,ease:n,offset:s,duration:r=300}){const i={done:!1,value:t},o=Array.isArray(e)?e:[t,e],a=HT(s&&s.length===o.length?s:qT(o),r);function l(){return wg(a,o,{ease:Array.isArray(n)?n:jT(o,n)})}let c=l();return{next:u=>(i.value=c(u),i.done=u>=r,i),flipTarget:()=>{o.reverse(),c=l()}}}function zT({velocity:t=0,from:e=0,power:n=.8,timeConstant:s=350,restDelta:r=.5,modifyTarget:i}){const o={done:!1,value:e};let a=n*t;const l=e+a,c=i===void 0?l:i(l);return c!==l&&(a=c-e),{next:u=>{const h=-a*Math.exp(-u/s);return o.done=!(h>r||h<-r),o.value=o.done?c:c+h,o},flipTarget:()=>{}}}const lf={keyframes:Uo,spring:$u,decay:zT};function WT(t){if(Array.isArray(t.to))return Uo;if(lf[t.type])return lf[t.type];const e=new Set(Object.keys(t));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?Uo:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?$u:Uo}function Pg(t,e,n=0){return t-e-n}function KT(t,e,n=0,s=!0){return s?Pg(e+-t,e,n):e-(t-e)+n}function GT(t,e,n,s){return s?t>=e+n:t<=-n}const QT=t=>{const e=({delta:n})=>t(n);return{start:()=>Pc.update(e,!0),stop:()=>Qw.update(e)}};function Sg(t){var e,n,{from:s,autoplay:r=!0,driver:i=QT,elapsed:o=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:h,onComplete:d,onRepeat:f,onUpdate:y}=t,T=ag(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:E}=T,b,R=0,C=T.duration,v,N=!1,W=!0,le;const fe=WT(T);!((n=(e=fe).needsInterpolation)===null||n===void 0)&&n.call(e,s,E)&&(le=wg([0,100],[s,E],{clamp:!1}),s=0,E=100);const me=fe(Object.assign(Object.assign({},T),{from:s,to:E}));function Se(){R++,l==="reverse"?(W=R%2===0,o=KT(o,C,c,W)):(o=Pg(o,C,c),l==="mirror"&&me.flipTarget()),N=!1,f&&f()}function qe(){b.stop(),d&&d()}function yt(vt){if(W||(vt=-vt),o+=vt,!N){const mt=me.next(Math.max(0,o));v=mt.value,le&&(v=le(v)),N=W?mt.done:o<=0}y==null||y(v),N&&(R===0&&(C??(C=o)),R<a?GT(o,C,c,W)&&Se():qe())}function ze(){u==null||u(),b=i(yt),b.start()}return r&&ze(),{stop:()=>{h==null||h(),b.stop()}}}function Cg(t,e){return e?t*(1e3/e):0}function YT({from:t=0,velocity:e=0,min:n,max:s,power:r=.8,timeConstant:i=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:h,onComplete:d,onStop:f}){let y;function T(C){return n!==void 0&&C<n||s!==void 0&&C>s}function E(C){return n===void 0?s:s===void 0||Math.abs(n-C)<Math.abs(s-C)?n:s}function b(C){y==null||y.stop(),y=Sg(Object.assign(Object.assign({},C),{driver:u,onUpdate:v=>{var N;h==null||h(v),(N=C.onUpdate)===null||N===void 0||N.call(C,v)},onComplete:d,onStop:f}))}function R(C){b(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:l},C))}if(T(t))R({from:t,velocity:e,to:E(t)});else{let C=r*e+t;typeof c<"u"&&(C=c(C));const v=E(C),N=v===n?-1:1;let W,le;const fe=me=>{W=le,le=me,e=Cg(me-W,og().delta),(N===1&&me>v||N===-1&&me<v)&&R({from:me,to:v,velocity:e})};b({type:"decay",from:t,velocity:e,timeConstant:i,power:r,restDelta:l,modifyTarget:c,onUpdate:T(C)?fe:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const kg=(t,e)=>1-3*e+3*t,Og=(t,e)=>3*e-6*t,Dg=t=>3*t,oa=(t,e,n)=>((kg(e,n)*t+Og(e,n))*t+Dg(e))*t,Ng=(t,e,n)=>3*kg(e,n)*t*t+2*Og(e,n)*t+Dg(e),XT=1e-7,JT=10;function ZT(t,e,n,s,r){let i,o,a=0;do o=e+(n-e)/2,i=oa(o,s,r)-t,i>0?n=o:e=o;while(Math.abs(i)>XT&&++a<JT);return o}const eI=8,tI=.001;function nI(t,e,n,s){for(let r=0;r<eI;++r){const i=Ng(e,n,s);if(i===0)return e;const o=oa(e,n,s)-t;e-=o/i}return e}const Bo=11,Io=1/(Bo-1);function sI(t,e,n,s){if(t===e&&n===s)return bg;const r=new Float32Array(Bo);for(let o=0;o<Bo;++o)r[o]=oa(o*Io,t,n);function i(o){let a=0,l=1;const c=Bo-1;for(;l!==c&&r[l]<=o;++l)a+=Io;--l;const u=(o-r[l])/(r[l+1]-r[l]),h=a+u*Io,d=Ng(h,t,n);return d>=tI?nI(o,h,t,n):d===0?h:ZT(o,a,a+Io,t,n)}return o=>o===0||o===1?o:oa(i(o),e,s)}/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rI(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const iI="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",oI=rI(iI),Fl={};var aI=Object.defineProperty,lI=(t,e,n)=>e in t?aI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,cI=(t,e,n)=>(lI(t,typeof e!="symbol"?e+"":e,n),n);class uI{constructor(){cI(this,"subscriptions",new Set)}add(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}notify(e,n,s){if(this.subscriptions.size)for(const r of this.subscriptions)r(e,n,s)}clear(){this.subscriptions.clear()}}var hI=Object.defineProperty,dI=(t,e,n)=>e in t?hI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Gt=(t,e,n)=>(dI(t,typeof e!="symbol"?e+"":e,n),n);function cf(t){return!isNaN(parseFloat(t))}class fI{constructor(e){Gt(this,"current"),Gt(this,"prev"),Gt(this,"timeDelta",0),Gt(this,"lastUpdated",0),Gt(this,"updateSubscribers",new uI),Gt(this,"stopAnimation"),Gt(this,"canTrackVelocity",!1),Gt(this,"updateAndNotify",n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:r}=og();this.lastUpdated!==r&&(this.timeDelta=s,this.lastUpdated=r),Pc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),Gt(this,"scheduleVelocityCheck",()=>Pc.postRender(this.velocityCheck)),Gt(this,"velocityCheck",({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=cf(this.current)),n!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=e,this.canTrackVelocity=cf(this.current)}onChange(e){return this.updateSubscribers.add(e)}clearListeners(){this.updateSubscribers.clear()}set(e){this.updateAndNotify(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Cg(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{const{stop:s}=e(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function pI(t){return new fI(t)}const{isArray:mI}=Array;function gI(){const t=ee({}),e=s=>{const r=i=>{t.value[i]&&(t.value[i].stop(),t.value[i].destroy(),delete t.value[i])};s?mI(s)?s.forEach(r):r(s):Object.keys(t.value).forEach(r)},n=(s,r,i)=>{if(t.value[s])return t.value[s];const o=pI(r);return o.onChange(a=>i[s]=a),t.value[s]=o,o};return jw(e),{motionValues:t,get:n,stop:e}}function _I(t){return Array.isArray(t)}function as(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function $l(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function yI(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function Ul(){return{type:"keyframes",ease:"linear",duration:300}}function vI(t){return{type:"keyframes",duration:800,values:t}}const uf={default:yI,x:as,y:as,z:as,rotate:as,rotateX:as,rotateY:as,rotateZ:as,scaleX:$l,scaleY:$l,scale:$l,backgroundColor:Ul,color:Ul,opacity:Ul};function Vg(t,e){let n;return _I(e)?n=vI:n=uf[t]||uf.default,{to:e,...n(e)}}const hf={...Hi,transform:Math.round},Mg={color:Tt,backgroundColor:Tt,outlineColor:Tt,fill:Tt,stroke:Tt,borderColor:Tt,borderTopColor:Tt,borderRightColor:Tt,borderBottomColor:Tt,borderLeftColor:Tt,borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,size:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,rotate:os,rotateX:os,rotateY:os,rotateZ:os,scale:To,scaleX:To,scaleY:To,scaleZ:To,skew:os,skewX:os,skewY:os,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:ti,originX:sf,originY:sf,originZ:ae,zIndex:hf,filter:Dc,WebkitFilter:Dc,fillOpacity:ti,strokeOpacity:ti,numOctaves:hf},Wu=t=>Mg[t];function Lg(t,e){return e&&typeof t=="number"&&e.transform?e.transform(t):t}function EI(t,e){let n=Wu(t);return n!==Dc&&(n=zi),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const wI={linear:bg,easeIn:Hu,easeInOut:xg,easeOut:OT,circIn:Ag,circInOut:DT,circOut:Rg,backIn:zu,backInOut:VT,backOut:NT,anticipate:MT,bounceIn:UT,bounceInOut:BT,bounceOut:ia};function df(t){if(Array.isArray(t)){const[e,n,s,r]=t;return sI(e,n,s,r)}else if(typeof t=="string")return wI[t];return t}function TI(t){return Array.isArray(t)&&typeof t[0]!="number"}function ff(t,e){return t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&zi.test(e)&&!e.startsWith("url("))}function II(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function bI({ease:t,times:e,delay:n,...s}){const r={...s};return e&&(r.offset=e),t&&(r.ease=TI(t)?t.map(df):df(t)),n&&(r.elapsed=-n),r}function xI(t,e,n){return Array.isArray(e.to)&&(t.duration||(t.duration=800)),II(e),AI(t)||(t={...t,...Vg(n,e.to)}),{...e,...bI(t)}}function AI({delay:t,repeat:e,repeatType:n,repeatDelay:s,from:r,...i}){return!!Object.keys(i).length}function RI(t,e){return t[e]||t.default||t}function PI(t,e,n,s,r){const i=RI(s,t);let o=i.from===null||i.from===void 0?e.get():i.from;const a=ff(t,n);o==="none"&&a&&typeof n=="string"&&(o=EI(t,n));const l=ff(t,o);function c(h){const d={from:o,to:n,velocity:s.velocity?s.velocity:e.getVelocity(),onUpdate:f=>e.set(f)};return i.type==="inertia"||i.type==="decay"?YT({...d,...i}):Sg({...xI(i,d,t),onUpdate:f=>{d.onUpdate(f),i.onUpdate&&i.onUpdate(f)},onComplete:()=>{s.onComplete&&s.onComplete(),r&&r(),h&&h()}})}function u(h){return e.set(n),s.onComplete&&s.onComplete(),r&&r(),h&&h(),{stop:()=>{}}}return!l||!a||i.type===!1?u:c}function SI(){const{motionValues:t,stop:e,get:n}=gI();return{motionValues:t,stop:e,push:(r,i,o,a={},l)=>{const c=o[r],u=n(r,c,o);if(a&&a.immediate){u.set(i);return}const h=PI(r,u,i,a,l);u.start(h)}}}function CI(t,e={},{motionValues:n,push:s,stop:r}=SI()){const i=Y(e),o=ee(!1);ut(n,h=>{o.value=Object.values(h).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const a=h=>{if(!i||!i[h])throw new Error(`The variant ${h} does not exist.`);return i[h]},l=h=>(typeof h=="string"&&(h=a(h)),Promise.all(Object.entries(h).map(([d,f])=>{if(d!=="transition")return new Promise(y=>s(d,f,t,h.transition||Vg(d,h[d]),y))}).filter(Boolean)));return{isAnimating:o,apply:l,set:h=>{const d=ra(h)?h:a(h);Object.entries(d).forEach(([f,y])=>{f!=="transition"&&s(f,y,t,{immediate:!0})})},leave:async h=>{let d;if(i&&(i.leave&&(d=i.leave),!i.leave&&i.initial&&(d=i.initial)),!d){h();return}await l(d),h()},stop:r}}const Ku=typeof window<"u",kI=()=>Ku&&window.onpointerdown===null,OI=()=>Ku&&window.ontouchstart===null,DI=()=>Ku&&window.onmousedown===null;function NI({target:t,state:e,variants:n,apply:s}){const r=Y(n),i=ee(!1),o=ee(!1),a=ee(!1),l=Le(()=>{let u=[];return r&&(r.hovered&&(u=[...u,...Object.keys(r.hovered)]),r.tapped&&(u=[...u,...Object.keys(r.tapped)]),r.focused&&(u=[...u,...Object.keys(r.focused)])),u}),c=Le(()=>{const u={};Object.assign(u,e.value),i.value&&r.hovered&&Object.assign(u,r.hovered),o.value&&r.tapped&&Object.assign(u,r.tapped),a.value&&r.focused&&Object.assign(u,r.focused);for(const h in u)l.value.includes(h)||delete u[h];return u});r.hovered&&(Vt(t,"mouseenter",()=>i.value=!0),Vt(t,"mouseleave",()=>{i.value=!1,o.value=!1}),Vt(t,"mouseout",()=>{i.value=!1,o.value=!1})),r.tapped&&(DI()&&(Vt(t,"mousedown",()=>o.value=!0),Vt(t,"mouseup",()=>o.value=!1)),kI()&&(Vt(t,"pointerdown",()=>o.value=!0),Vt(t,"pointerup",()=>o.value=!1)),OI()&&(Vt(t,"touchstart",()=>o.value=!0),Vt(t,"touchend",()=>o.value=!1))),r.focused&&(Vt(t,"focus",()=>a.value=!0),Vt(t,"blur",()=>a.value=!1)),ut(c,s)}function VI({set:t,target:e,variants:n,variant:s}){const r=Y(n);ut(()=>e,()=>{r&&(r.initial&&t("initial"),r.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}function MI({state:t,apply:e}){ut(t,n=>{n&&e(n)},{immediate:!0})}function Fg({target:t,variants:e,variant:n}){const s=Y(e);s&&(s.visible||s.visibleOnce)&&zw(t,([{isIntersecting:r}])=>{s.visible?r?n.value="visible":n.value="initial":s.visibleOnce&&(r&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function LI(t,e={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){e.lifeCycleHooks&&VI(t),e.syncVariants&&MI(t),e.visibilityHooks&&Fg(t),e.eventListeners&&NI(t)}function $g(t={}){const e=Xn({...t}),n=ee({});return ut(e,()=>{const s={};for(const[r,i]of Object.entries(e)){const o=Wu(r),a=Lg(i,o);s[r]=a}n.value=s},{immediate:!0,deep:!0}),{state:e,style:n}}function Gu(t,e){ut(()=>Zr(t),n=>{n&&e(n)},{immediate:!0})}const FI={x:"translateX",y:"translateY",z:"translateZ"};function Ug(t={},e=!0){const n=Xn({...t}),s=ee("");return ut(n,r=>{let i="",o=!1;if(e&&(r.x||r.y||r.z)){const a=[r.x||0,r.y||0,r.z||0].map(ae.transform).join(",");i+=`translate3d(${a}) `,o=!0}for(const[a,l]of Object.entries(r)){if(e&&(a==="x"||a==="y"||a==="z"))continue;const c=Wu(a),u=Lg(l,c);i+=`${FI[a]||a}(${u}) `}e&&!o&&(i+="translateZ(0px) "),s.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}const $I=["","X","Y","Z"],UI=["perspective","translate","scale","rotate","skew"],Bg=["transformPerspective","x","y","z"];UI.forEach(t=>{$I.forEach(e=>{const n=t+e;Bg.push(n)})});const BI=new Set(Bg);function Qu(t){return BI.has(t)}const jI=new Set(["originX","originY","originZ"]);function jg(t){return jI.has(t)}function qI(t){const e={},n={};return Object.entries(t).forEach(([s,r])=>{Qu(s)||jg(s)?e[s]=r:n[s]=r}),{transform:e,style:n}}function qg(t){const{transform:e,style:n}=qI(t),{transform:s}=Ug(e),{style:r}=$g(n);return s.value&&(r.value.transform=s.value),r.value}function HI(t,e){let n,s;const{state:r,style:i}=$g();return Gu(t,o=>{s=o;for(const a of Object.keys(Mg))o.style[a]===null||o.style[a]===""||Qu(a)||jg(a)||(r[a]=o.style[a]);n&&Object.entries(n).forEach(([a,l])=>o.style[a]=l),e&&e(r)}),ut(i,o=>{if(!s){n=o;return}for(const a in o)s.style[a]=o[a]},{immediate:!0}),{style:r}}function zI(t){const e=t.trim().split(/\) |\)/);if(e.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return e.reduce((s,r)=>{if(!r)return s;const[i,o]=r.split("("),l=o.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),c=l.length===1?l[0]:l;return{...s,[i]:c}},{})}function WI(t,e){Object.entries(zI(e)).forEach(([n,s])=>{const r=["x","y","z"];if(n==="translate3d"){if(s===0){r.forEach(i=>t[i]=0);return}s.forEach((i,o)=>t[r[o]]=i);return}if(s=parseFloat(s),n==="translateX"){t.x=s;return}if(n==="translateY"){t.y=s;return}if(n==="translateZ"){t.z=s;return}t[n]=s})}function KI(t,e){let n,s;const{state:r,transform:i}=Ug();return Gu(t,o=>{s=o,o.style.transform&&WI(r,o.style.transform),n&&(o.style.transform=n),e&&e(r)}),ut(i,o=>{if(!s){n=o;return}s.style.transform=o},{immediate:!0}),{transform:r}}function GI(t,e){const n=Xn({}),s=o=>Object.entries(o).forEach(([a,l])=>n[a]=l),{style:r}=HI(t,s),{transform:i}=KI(t,s);return ut(n,o=>{Object.entries(o).forEach(([a,l])=>{const c=Qu(a)?i:r;c[a]&&c[a]===l||(c[a]=l)})},{immediate:!0,deep:!0}),Gu(t,()=>e&&s(e)),{motionProperties:n,style:r,transform:i}}function QI(t={}){const e=Y(t),n=ee();return{state:Le(()=>{if(n.value)return e[n.value]}),variant:n}}function Hg(t,e={},n){const{motionProperties:s}=GI(t),{variant:r,state:i}=QI(e),o=CI(s,e),a={target:t,variant:r,variants:e,state:i,motionProperties:s,...o};return LI(a,n),a}const YI=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused","delay"];function XI(t,e){const n=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};n&&(n.variants&&ra(n.variants)&&(e.value={...e.value,...n.variants}),YI.forEach(s=>{if(s==="delay"){if(n&&n[s]&&typeof n[s]=="number"){const r=n[s];e&&e.value&&(e.value.enter&&(e.value.enter.transition||(e.value.enter.transition={}),e.value.enter.transition={delay:r,...e.value.enter.transition}),e.value.visible&&(e.value.visible.transition||(e.value.visible.transition={}),e.value.visible.transition={delay:r,...e.value.visible.transition}),e.value.visibleOnce&&(e.value.visibleOnce.transition||(e.value.visibleOnce.transition={}),e.value.visibleOnce.transition={delay:r,...e.value.visibleOnce.transition}))}return}if(n&&n[s]&&ra(n[s])){const r=n[s];s==="visible-once"&&(s="visibleOnce"),e.value[s]=r}}))}function Bl(t){return{created:(s,r,i)=>{const o=r.value&&typeof r.value=="string"?r.value:i.key;o&&Fl[o]&&Fl[o].stop();const a=ee(t||{});typeof r.value=="object"&&(a.value=r.value),XI(i,a);const c=Hg(s,a,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});s.motionInstance=c,o&&(Fl[o]=c)},mounted:(s,r,i)=>{s.motionInstance&&Fg(s.motionInstance)},getSSRProps(s,r){let{initial:i}=s.value||r&&(r==null?void 0:r.props)||{};i=Y(i);const o=g0((t==null?void 0:t.initial)||{},i||{});return!o||Object.keys(o).length===0?void 0:{style:qg(o)}}}}const JI={initial:{opacity:0},enter:{opacity:1}},ZI={initial:{opacity:0},visible:{opacity:1}},eb={initial:{opacity:0},visibleOnce:{opacity:1}},tb={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},nb={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},sb={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},rb={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},ib={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},ob={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},ab={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},lb={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},cb={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},ub={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},hb={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},db={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},fb={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},pb={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},mb={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},gb={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},_b={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},yb={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},vb={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Eb={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},wb={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Tb={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Ib={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},bb={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},xb={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Ab={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Rb={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Nc={__proto__:null,fade:JI,fadeVisible:ZI,fadeVisibleOnce:eb,pop:tb,popVisible:nb,popVisibleOnce:sb,rollBottom:fb,rollLeft:rb,rollRight:ab,rollTop:ub,rollVisibleBottom:pb,rollVisibleLeft:ib,rollVisibleOnceBottom:mb,rollVisibleOnceLeft:ob,rollVisibleOnceRight:cb,rollVisibleOnceTop:db,rollVisibleRight:lb,rollVisibleTop:hb,slideBottom:xb,slideLeft:gb,slideRight:vb,slideTop:Tb,slideVisibleBottom:Ab,slideVisibleLeft:_b,slideVisibleOnceBottom:Rb,slideVisibleOnceLeft:yb,slideVisibleOnceRight:wb,slideVisibleOnceTop:bb,slideVisibleRight:Eb,slideVisibleTop:Ib},Pb=ku({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var a;const e=NE(),n=Xn({});if(!t.is&&!e.default)return()=>na("div",{});const s=Le(()=>{let l;return t.preset&&(l=Nc[t.preset]),l}),r=Le(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),i=Le(()=>{const l={...r.value,...s.value||{},...t.variants||{}};return t.delay&&(l.enter.transition={...l.enter.transition},l.enter.transition.delay=parseInt(t.delay)),l}),o=Le(()=>{if(!t.is)return;let l=t.is;return typeof o.value=="string"&&!oI(l)&&(l=In(l)),l});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||process!=null&&process.dev){const l=c=>{var u;(u=c.variants)!=null&&u.initial&&c.set("initial"),setTimeout(()=>{var h,d,f;(h=c.variants)!=null&&h.enter&&c.apply("enter"),(d=c.variants)!=null&&d.visible&&c.apply("visible"),(f=c.variants)!=null&&f.visibleOnce&&c.apply("visibleOnce")},10)};Um(()=>Object.entries(n).forEach(([c,u])=>l(u)))}return{slots:e,component:o,motionConfig:i,instances:n}},render({slots:t,motionConfig:e,instances:n,component:s}){var a;const r=qg(e.initial||{}),i=(l,c)=>(l.props||(l.props={}),l.props.style=r,l.props.onVnodeMounted=({el:u})=>{const h=Hg(u,e);n[c]=h},l);if(s){const l=na(s,void 0,t);return i(l,0),l}return(((a=t.default)==null?void 0:a.call(t))||[]).map((l,c)=>i(l,c))}});function Sb(t){const e="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(e.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(s,r=>n.charAt(e.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Cb={install(t,e){if(t.directive("motion",Bl()),t.component("Motion",Pb),!e||e&&!e.excludePresets)for(const n in Nc){const s=Nc[n];t.directive(`motion-${Sb(n)}`,Bl(s))}if(e&&e.directives)for(const n in e.directives){const s=e.directives[n];!s.initial&&__DEV__&&console.warn(`Your directive v-motion-${n} is missing initial variant!`),t.directive(`motion-${n}`,Bl(s))}}};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const js=typeof window<"u";function kb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function jl(t,e){const n={};for(const s in e){const r=e[s];n[s]=jt(r)?r.map(t):t(r)}return n}const si=()=>{},jt=Array.isArray,Ob=/\/$/,Db=t=>t.replace(Ob,"");function ql(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Lb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Nb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Vb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ur(e.matched[s],n.matched[r])&&zg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Mb(t[n],e[n]))return!1;return!0}function Mb(t,e){return jt(t)?mf(t,e):jt(e)?mf(e,t):t===e}function mf(t,e){return jt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Lb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var vi;(function(t){t.pop="pop",t.push="push"})(vi||(vi={}));var ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ri||(ri={}));function Fb(t){if(!t)if(js){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Db(t)}const $b=/^[^#]+#/;function Ub(t,e){return t.replace($b,"#")+e}function Bb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function jb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Bb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gf(t,e){return(history.state?history.state.position-e:-1)+t}const Vc=new Map;function qb(t,e){Vc.set(t,e)}function Hb(t){const e=Vc.get(t);return Vc.delete(t),e}let zb=()=>location.protocol+"//"+location.host;function Wg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),pf(l,"")}return pf(n,t)+s+r}function Wb(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const f=Wg(t,location),y=n.value,T=e.value;let E=0;if(d){if(n.value=f,e.value=d,o&&o===y){o=null;return}E=T?d.position-T.position:0}else s(f);r.forEach(b=>{b(n.value,y,{delta:E,type:vi.pop,direction:E?E>0?ri.forward:ri.back:ri.unknown})})};function l(){o=n.value}function c(d){r.push(d);const f=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ie({},d.state,{scroll:Wa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function _f(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Wa():null}}function Kb(t){const{history:e,location:n}=window,s={value:Wg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:zb()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ie({},e.state,_f(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=Ie({},r.value,e.state,{forward:l,scroll:Wa()});i(u.current,u,!0);const h=Ie({},_f(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function Gb(t){t=Fb(t);const e=Kb(t),n=Wb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ie({location:"",base:t,go:s,createHref:Ub.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Qb(t){return typeof t=="string"||t&&typeof t=="object"}function Kg(t){return typeof t=="string"||typeof t=="symbol"}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gg=Symbol("");var yf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yf||(yf={}));function hr(t,e){return Ie(new Error,{type:t,[Gg]:!0},e)}function hn(t,e){return t instanceof Error&&Gg in t&&(e==null||!!(t.type&e))}const vf="[^/]+?",Yb={sensitive:!1,strict:!1,start:!0,end:!0},Xb=/[.+*?^${}()[\]/\\]/g;function Jb(t,e){const n=Ie({},Yb,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Xb,"\\$&"),f+=40;else if(d.type===1){const{value:y,repeatable:T,optional:E,regexp:b}=d;i.push({name:y,repeatable:T,optional:E});const R=b||vf;if(R!==vf){f+=10;try{new RegExp(`(${R})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+v.message)}}let C=T?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(C=E&&c.length<2?`(?:/${C})`:"/"+C),E&&(C+="?"),r+=C,f+=20,E&&(f+=-8),T&&(f+=-20),R===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",y=i[d-1];h[y.name]=f&&y.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:y,repeatable:T,optional:E}=f,b=y in c?c[y]:"";if(jt(b)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=jt(b)?b.join("/"):b;if(!R)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Zb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ex(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Zb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ef(s))return 1;if(Ef(r))return-1}return r.length-s.length}function Ef(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tx={type:0,value:""},nx=/[a-zA-Z0-9_]/;function sx(t){if(!t)return[[]];if(t==="/")return[[tx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:nx.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function rx(t,e,n){const s=Jb(sx(t.path),n),r=Ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ix(t,e){const n=[],s=new Map;e=If({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const f=!d,y=ox(u);y.aliasOf=d&&d.record;const T=If(e,u),E=[y];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of C)E.push(Ie({},y,{components:d?d.record.components:y.components,path:v,aliasOf:d?d.record:y}))}let b,R;for(const C of E){const{path:v}=C;if(h&&v[0]!=="/"){const N=h.record.path,W=N[N.length-1]==="/"?"":"/";C.path=h.record.path+(v&&W+v)}if(b=rx(C,h,T),d?d.alias.push(b):(R=R||b,R!==b&&R.alias.push(b),f&&u.name&&!Tf(b)&&o(u.name)),y.children){const N=y.children;for(let W=0;W<N.length;W++)i(N[W],b,d&&d.children[W])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return R?()=>{o(R)}:si}function o(u){if(Kg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&ex(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Qg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Tf(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},y,T;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw hr(1,{location:u});T=d.record.name,f=Ie(wf(h.params,d.keys.filter(R=>!R.optional).map(R=>R.name)),u.params&&wf(u.params,d.keys.map(R=>R.name))),y=d.stringify(f)}else if("path"in u)y=u.path,d=n.find(R=>R.re.test(y)),d&&(f=d.parse(y),T=d.record.name);else{if(d=h.name?s.get(h.name):n.find(R=>R.re.test(h.path)),!d)throw hr(1,{location:u,currentLocation:h});T=d.record.name,f=Ie({},h.params,u.params),y=d.stringify(f)}const E=[];let b=d;for(;b;)E.unshift(b.record),b=b.parent;return{name:T,path:y,params:f,matched:E,meta:lx(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function wf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ox(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ax(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ax(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Tf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lx(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function If(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Qg(t,e){return e.children.some(n=>n===t||Qg(t,n))}const Yg=/#/g,cx=/&/g,ux=/\//g,hx=/=/g,dx=/\?/g,Xg=/\+/g,fx=/%5B/g,px=/%5D/g,Jg=/%5E/g,mx=/%60/g,Zg=/%7B/g,gx=/%7C/g,e_=/%7D/g,_x=/%20/g;function Yu(t){return encodeURI(""+t).replace(gx,"|").replace(fx,"[").replace(px,"]")}function yx(t){return Yu(t).replace(Zg,"{").replace(e_,"}").replace(Jg,"^")}function Mc(t){return Yu(t).replace(Xg,"%2B").replace(_x,"+").replace(Yg,"%23").replace(cx,"%26").replace(mx,"`").replace(Zg,"{").replace(e_,"}").replace(Jg,"^")}function vx(t){return Mc(t).replace(hx,"%3D")}function Ex(t){return Yu(t).replace(Yg,"%23").replace(dx,"%3F")}function wx(t){return t==null?"":Ex(t).replace(ux,"%2F")}function aa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Tx(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Xg," "),o=i.indexOf("="),a=aa(o<0?i:i.slice(0,o)),l=o<0?null:aa(i.slice(o+1));if(a in e){let c=e[a];jt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function bf(t){let e="";for(let n in t){const s=t[n];if(n=vx(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(jt(s)?s.map(i=>i&&Mc(i)):[s&&Mc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ix(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=jt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const bx=Symbol(""),xf=Symbol(""),Ka=Symbol(""),Xu=Symbol(""),Lc=Symbol("");function Fr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function On(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(hr(4,{from:n,to:e})):h instanceof Error?a(h):Qb(h)?a(hr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Hl(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(xx(a)){const c=(a.__vccOpts||a)[e];c&&r.push(On(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=kb(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&On(d,n,s,i,o)()}))}}return r}function xx(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Af(t){const e=Bt(Ka),n=Bt(Xu),s=Le(()=>e.resolve(Y(t.to))),r=Le(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ur.bind(null,u));if(d>-1)return d;const f=Rf(l[c-2]);return c>1&&Rf(u)===f&&h[h.length-1].path!==f?h.findIndex(ur.bind(null,l[c-2])):d}),i=Le(()=>r.value>-1&&Px(n.params,s.value.params)),o=Le(()=>r.value>-1&&r.value===n.matched.length-1&&zg(n.params,s.value.params));function a(l={}){return Rx(l)?e[Y(t.replace)?"replace":"push"](Y(t.to)).catch(si):Promise.resolve()}return{route:s,href:Le(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Ax=ku({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Af,setup(t,{slots:e}){const n=Xn(Af(t)),{options:s}=Bt(Ka),r=Le(()=>({[Pf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Pf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:na("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Te=Ax;function Rx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Px(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!jt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Rf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pf=(t,e,n)=>t??e??n,Sx=ku({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Bt(Lc),r=Le(()=>t.route||s.value),i=Bt(xf,0),o=Le(()=>{let c=Y(i);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Le(()=>r.value.matched[o.value]);Mo(xf,Le(()=>o.value+1)),Mo(bx,a),Mo(Lc,r);const l=ee();return ut(()=>[l.value,a.value,t.name],([c,u,h],[d,f,y])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!ur(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Sf(n.default,{Component:d,route:c});const f=h.props[u],y=f?f===!0?c.params:typeof f=="function"?f(c):f:null,E=na(d,Ie({},y,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Sf(n.default,{Component:E,route:c})||E}}});function Sf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Cx=Sx;function kx(t){const e=ix(t.routes,t),n=t.parseQuery||Tx,s=t.stringifyQuery||bf,r=t.history,i=Fr(),o=Fr(),a=Fr(),l=J0(Sn);let c=Sn;js&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jl.bind(null,I=>""+I),h=jl.bind(null,wx),d=jl.bind(null,aa);function f(I,U){let M,z;return Kg(I)?(M=e.getRecordMatcher(I),z=U):z=I,e.addRoute(z,M)}function y(I){const U=e.getRecordMatcher(I);U&&e.removeRoute(U)}function T(){return e.getRoutes().map(I=>I.record)}function E(I){return!!e.getRecordMatcher(I)}function b(I,U){if(U=Ie({},U||l.value),typeof I=="string"){const _=ql(n,I,U.path),w=e.resolve({path:_.path},U),A=r.createHref(_.fullPath);return Ie(_,w,{params:d(w.params),hash:aa(_.hash),redirectedFrom:void 0,href:A})}let M;if("path"in I)M=Ie({},I,{path:ql(n,I.path,U.path).path});else{const _=Ie({},I.params);for(const w in _)_[w]==null&&delete _[w];M=Ie({},I,{params:h(_)}),U.params=h(U.params)}const z=e.resolve(M,U),we=I.hash||"";z.params=u(d(z.params));const p=Nb(s,Ie({},I,{hash:yx(we),path:z.path})),g=r.createHref(p);return Ie({fullPath:p,hash:we,query:s===bf?Ix(I.query):I.query||{}},z,{redirectedFrom:void 0,href:g})}function R(I){return typeof I=="string"?ql(n,I,l.value.path):Ie({},I)}function C(I,U){if(c!==I)return hr(8,{from:U,to:I})}function v(I){return le(I)}function N(I){return v(Ie(R(I),{replace:!0}))}function W(I){const U=I.matched[I.matched.length-1];if(U&&U.redirect){const{redirect:M}=U;let z=typeof M=="function"?M(I):M;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=R(z):{path:z},z.params={}),Ie({query:I.query,hash:I.hash,params:"path"in z?{}:I.params},z)}}function le(I,U){const M=c=b(I),z=l.value,we=I.state,p=I.force,g=I.replace===!0,_=W(M);if(_)return le(Ie(R(_),{state:typeof _=="object"?Ie({},we,_.state):we,force:p,replace:g}),U||M);const w=M;w.redirectedFrom=U;let A;return!p&&Vb(s,z,M)&&(A=hr(16,{to:w,from:z}),zt(z,z,!0,!1)),(A?Promise.resolve(A):Se(w,z)).catch(P=>hn(P)?hn(P,2)?P:Rn(P):Ee(P,w,z)).then(P=>{if(P){if(hn(P,2))return le(Ie({replace:g},R(P.to),{state:typeof P.to=="object"?Ie({},we,P.to.state):we,force:p}),U||w)}else P=yt(w,z,!0,g,we);return qe(w,z,P),P})}function fe(I,U){const M=C(I,U);return M?Promise.reject(M):Promise.resolve()}function me(I){const U=Ls.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(I):I()}function Se(I,U){let M;const[z,we,p]=Ox(I,U);M=Hl(z.reverse(),"beforeRouteLeave",I,U);for(const _ of z)_.leaveGuards.forEach(w=>{M.push(On(w,I,U))});const g=fe.bind(null,I,U);return M.push(g),rt(M).then(()=>{M=[];for(const _ of i.list())M.push(On(_,I,U));return M.push(g),rt(M)}).then(()=>{M=Hl(we,"beforeRouteUpdate",I,U);for(const _ of we)_.updateGuards.forEach(w=>{M.push(On(w,I,U))});return M.push(g),rt(M)}).then(()=>{M=[];for(const _ of p)if(_.beforeEnter)if(jt(_.beforeEnter))for(const w of _.beforeEnter)M.push(On(w,I,U));else M.push(On(_.beforeEnter,I,U));return M.push(g),rt(M)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),M=Hl(p,"beforeRouteEnter",I,U),M.push(g),rt(M))).then(()=>{M=[];for(const _ of o.list())M.push(On(_,I,U));return M.push(g),rt(M)}).catch(_=>hn(_,8)?_:Promise.reject(_))}function qe(I,U,M){a.list().forEach(z=>me(()=>z(I,U,M)))}function yt(I,U,M,z,we){const p=C(I,U);if(p)return p;const g=U===Sn,_=js?history.state:{};M&&(z||g?r.replace(I.fullPath,Ie({scroll:g&&_&&_.scroll},we)):r.push(I.fullPath,we)),l.value=I,zt(I,U,M,g),Rn()}let ze;function vt(){ze||(ze=r.listen((I,U,M)=>{if(!mo.listening)return;const z=b(I),we=W(z);if(we){le(Ie(we,{replace:!0}),z).catch(si);return}c=z;const p=l.value;js&&qb(gf(p.fullPath,M.delta),Wa()),Se(z,p).catch(g=>hn(g,12)?g:hn(g,2)?(le(g.to,z).then(_=>{hn(_,20)&&!M.delta&&M.type===vi.pop&&r.go(-1,!1)}).catch(si),Promise.reject()):(M.delta&&r.go(-M.delta,!1),Ee(g,z,p))).then(g=>{g=g||yt(z,p,!1),g&&(M.delta&&!hn(g,8)?r.go(-M.delta,!1):M.type===vi.pop&&hn(g,20)&&r.go(-1,!1)),qe(z,p,g)}).catch(si)}))}let mt=Fr(),Me=Fr(),ve;function Ee(I,U,M){Rn(I);const z=Me.list();return z.length?z.forEach(we=>we(I,U,M)):console.error(I),Promise.reject(I)}function un(){return ve&&l.value!==Sn?Promise.resolve():new Promise((I,U)=>{mt.add([I,U])})}function Rn(I){return ve||(ve=!I,vt(),mt.list().forEach(([U,M])=>I?M(I):U()),mt.reset()),I}function zt(I,U,M,z){const{scrollBehavior:we}=t;if(!js||!we)return Promise.resolve();const p=!M&&Hb(gf(I.fullPath,0))||(z||!M)&&history.state&&history.state.scroll||null;return Sm().then(()=>we(I,U,p)).then(g=>g&&jb(g)).catch(g=>Ee(g,I,U))}const Et=I=>r.go(I);let Ms;const Ls=new Set,mo={currentRoute:l,listening:!0,addRoute:f,removeRoute:y,hasRoute:E,getRoutes:T,resolve:b,options:t,push:v,replace:N,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Me.add,isReady:un,install(I){const U=this;I.component("RouterLink",Te),I.component("RouterView",Cx),I.config.globalProperties.$router=U,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Y(l)}),js&&!Ms&&l.value===Sn&&(Ms=!0,v(r.location).catch(we=>{}));const M={};for(const we in Sn)Object.defineProperty(M,we,{get:()=>l.value[we],enumerable:!0});I.provide(Ka,U),I.provide(Xu,Em(M)),I.provide(Lc,l);const z=I.unmount;Ls.add(I),I.unmount=function(){Ls.delete(I),Ls.size<1&&(c=Sn,ze&&ze(),ze=null,l.value=Sn,Ms=!1,ve=!1),z()}}};function rt(I){return I.reduce((U,M)=>U.then(()=>me(M)),Promise.resolve())}return mo}function Ox(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>ur(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ur(c,l))||r.push(l))}return[n,s,r]}function Ju(){return Bt(Ka)}function Ga(){return Bt(Xu)}const t_="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='11'%20cy='11'%20r='7'%20stroke='%23394150'%20stroke-width='2'/%3e%3cpath%20d='M20%2020L17%2017'%20stroke='%23394150'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e";var Cf={};/**
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
 */const n_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Dx=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},s_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw new Nx;const d=i<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const y=c<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vx=function(t){const e=n_(t);return s_.encodeByteArray(e,!0)},la=function(t){return Vx(t).replace(/\./g,"")},r_=function(t){try{return s_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lx=()=>Mx().__FIREBASE_DEFAULTS__,Fx=()=>{if(typeof process>"u"||typeof Cf>"u")return;const t=Cf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$x=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&r_(t[1]);return e&&JSON.parse(e)},Zu=()=>{try{return Lx()||Fx()||$x()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},i_=t=>{var e,n;return(n=(e=Zu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ux=t=>{const e=i_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},o_=()=>{var t;return(t=Zu())===null||t===void 0?void 0:t.config},a_=t=>{var e;return(e=Zu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Bx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function jx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[la(JSON.stringify(n)),la(JSON.stringify(o)),a].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function Hx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wx(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kx(){try{return typeof indexedDB=="object"}catch{return!1}}function Gx(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Qx="FirebaseError";class xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Qx,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Yx(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new xn(r,a,s)}}function Yx(t,e){return t.replace(Xx,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Xx=/\{\$([^}]+)}/g;function Jx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ca(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(kf(i)&&kf(o)){if(!ca(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function kf(t){return t!==null&&typeof t=="object"}/**
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
 */function Ki(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Hr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function zr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zx(t,e){const n=new eA(t,e);return n.subscribe.bind(n)}class eA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");tA(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=zl),r.error===void 0&&(r.error=zl),r.complete===void 0&&(r.complete=zl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zl(){}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class Is{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ls="[DEFAULT]";/**
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
 */class nA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bx;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rA(e))try{this.getOrInitializeService({instanceIdentifier:ls})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ls){return this.instances.has(e)}getOptions(e=ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ls){return this.component?this.component.multipleInstances?e:ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sA(t){return t===ls?void 0:t}function rA(t){return t.instantiationMode==="EAGER"}/**
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
 */class iA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const oA={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},aA=de.INFO,lA={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},cA=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=lA[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eh{constructor(e){this.name=e,this._logLevel=aA,this._logHandler=cA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const uA=(t,e)=>e.some(n=>t instanceof n);let Of,Df;function hA(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dA(){return Df||(Df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l_=new WeakMap,Fc=new WeakMap,c_=new WeakMap,Wl=new WeakMap,th=new WeakMap;function fA(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&l_.set(n,t)}).catch(()=>{}),th.set(e,t),e}function pA(t){if(Fc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fc.set(t,e)}let $c={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||c_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mA(t){$c=t($c)}function gA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Kl(this),e,...n);return c_.set(s,e.sort?e.sort():[e]),qn(s)}:dA().includes(t)?function(...e){return t.apply(Kl(this),e),qn(l_.get(this))}:function(...e){return qn(t.apply(Kl(this),e))}}function _A(t){return typeof t=="function"?gA(t):(t instanceof IDBTransaction&&pA(t),uA(t,hA())?new Proxy(t,$c):t)}function qn(t){if(t instanceof IDBRequest)return fA(t);if(Wl.has(t))return Wl.get(t);const e=_A(t);return e!==t&&(Wl.set(t,e),th.set(e,t)),e}const Kl=t=>th.get(t);function yA(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=qn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(qn(o.result),l.oldVersion,l.newVersion,qn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const vA=["get","getKey","getAll","getAllKeys","count"],EA=["put","add","delete","clear"],Gl=new Map;function Nf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gl.get(e))return Gl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=EA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||vA.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Gl.set(e,i),i}mA(t=>({...t,get:(e,n,s)=>Nf(e,n)||t.get(e,n,s),has:(e,n)=>!!Nf(e,n)||t.has(e,n)}));/**
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
 */class wA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function TA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",Vf="0.9.25";/**
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
 */const bs=new eh("@firebase/app"),IA="@firebase/app-compat",bA="@firebase/analytics-compat",xA="@firebase/analytics",AA="@firebase/app-check-compat",RA="@firebase/app-check",PA="@firebase/auth",SA="@firebase/auth-compat",CA="@firebase/database",kA="@firebase/database-compat",OA="@firebase/functions",DA="@firebase/functions-compat",NA="@firebase/installations",VA="@firebase/installations-compat",MA="@firebase/messaging",LA="@firebase/messaging-compat",FA="@firebase/performance",$A="@firebase/performance-compat",UA="@firebase/remote-config",BA="@firebase/remote-config-compat",jA="@firebase/storage",qA="@firebase/storage-compat",HA="@firebase/firestore",zA="@firebase/firestore-compat",WA="firebase",KA="10.7.1";/**
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
 */const Bc="[DEFAULT]",GA={[Uc]:"fire-core",[IA]:"fire-core-compat",[xA]:"fire-analytics",[bA]:"fire-analytics-compat",[RA]:"fire-app-check",[AA]:"fire-app-check-compat",[PA]:"fire-auth",[SA]:"fire-auth-compat",[CA]:"fire-rtdb",[kA]:"fire-rtdb-compat",[OA]:"fire-fn",[DA]:"fire-fn-compat",[NA]:"fire-iid",[VA]:"fire-iid-compat",[MA]:"fire-fcm",[LA]:"fire-fcm-compat",[FA]:"fire-perf",[$A]:"fire-perf-compat",[UA]:"fire-rc",[BA]:"fire-rc-compat",[jA]:"fire-gcs",[qA]:"fire-gcs-compat",[HA]:"fire-fst",[zA]:"fire-fst-compat","fire-js":"fire-js",[WA]:"fire-js-all"};/**
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
 */const ua=new Map,jc=new Map;function QA(t,e){try{t.container.addComponent(e)}catch(n){bs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dr(t){const e=t.name;if(jc.has(e))return bs.debug(`There were multiple attempts to register component ${e}.`),!1;jc.set(e,t);for(const n of ua.values())QA(n,t);return!0}function nh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const YA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hn=new Wi("app","Firebase",YA);/**
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
 */class XA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ar=KA;function sh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Hn.create("bad-app-name",{appName:String(r)});if(n||(n=o_()),!n)throw Hn.create("no-options");const i=ua.get(r);if(i){if(ca(n,i.options)&&ca(s,i.config))return i;throw Hn.create("duplicate-app",{appName:r})}const o=new iA(r);for(const l of jc.values())o.addComponent(l);const a=new XA(n,s,o);return ua.set(r,a),a}function u_(t=Bc){const e=ua.get(t);if(!e&&t===Bc&&o_())return sh();if(!e)throw Hn.create("no-app",{appName:t});return e}function zn(t,e,n){var s;let r=(s=GA[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bs.warn(a.join(" "));return}dr(new Is(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const JA="firebase-heartbeat-database",ZA=1,Ei="firebase-heartbeat-store";let Ql=null;function h_(){return Ql||(Ql=yA(JA,ZA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ei)}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),Ql}async function e1(t){try{return await(await h_()).transaction(Ei).objectStore(Ei).get(d_(t))}catch(e){if(e instanceof xn)bs.warn(e.message);else{const n=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bs.warn(n.message)}}}async function Mf(t,e){try{const s=(await h_()).transaction(Ei,"readwrite");await s.objectStore(Ei).put(e,d_(t)),await s.done}catch(n){if(n instanceof xn)bs.warn(n.message);else{const s=Hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bs.warn(s.message)}}}function d_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const t1=1024,n1=30*24*60*60*1e3;class s1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new i1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=n1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lf(),{heartbeatsToSend:s,unsentEntries:r}=r1(this._heartbeatsCache.heartbeats),i=la(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lf(){return new Date().toISOString().substring(0,10)}function r1(t,e=t1){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ff(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ff(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class i1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kx()?Gx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await e1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ff(t){return la(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function o1(t){dr(new Is("platform-logger",e=>new wA(e),"PRIVATE")),dr(new Is("heartbeat",e=>new s1(e),"PRIVATE")),zn(Uc,Vf,t),zn(Uc,Vf,"esm2017"),zn("fire-js","")}o1("");function rh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function f_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a1=f_,p_=new Wi("auth","Firebase",f_());/**
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
 */const ha=new eh("@firebase/auth");function l1(t,...e){ha.logLevel<=de.WARN&&ha.warn(`Auth (${Ar}): ${t}`,...e)}function jo(t,...e){ha.logLevel<=de.ERROR&&ha.error(`Auth (${Ar}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw ih(t,...e)}function nn(t,...e){return ih(t,...e)}function m_(t,e,n){const s=Object.assign(Object.assign({},a1()),{[e]:n});return new Wi("auth","Firebase",s).create(e,{appName:t.name})}function c1(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Dt(t,"argument-error"),m_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ih(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return p_.create(t,...e)}function J(t,e,...n){if(!t)throw ih(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jo(e),new Error(e)}function vn(t,e){t||fn(e)}/**
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
 */function qc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function u1(){return $f()==="http:"||$f()==="https:"}function $f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function h1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(u1()||Hx()||"connection"in navigator)?navigator.onLine:!0}function d1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=qx()||zx()}get(){return h1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function oh(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class g_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const f1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const p1=new Gi(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function An(t,e,n,s,r={}){return __(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ki(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),g_.fetch()(y_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function __(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},f1),e);try{const r=new g1(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw m_(t,u,c);Dt(t,u)}}catch(r){if(r instanceof xn)throw r;Dt(t,"network-request-failed",{message:String(r)})}}async function Qi(t,e,n,s,r={}){const i=await An(t,e,n,s,r);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function y_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?oh(t.config,r):`${t.config.apiScheme}://${r}`}function m1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class g1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nn(this.auth,"network-request-failed")),p1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=nn(t,e,s);return r.customData._tokenResponse=n,r}function Uf(t){return t!==void 0&&t.enterprise!==void 0}class _1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return m1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function y1(t,e){return An(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
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
 */async function v1(t,e){return An(t,"POST","/v1/accounts:delete",e)}async function E1(t,e){return An(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w1(t,e=!1){const n=st(t),s=await n.getIdToken(e),r=ah(s);J(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ii(Yl(r.auth_time)),issuedAtTime:ii(Yl(r.iat)),expirationTime:ii(Yl(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yl(t){return Number(t)*1e3}function ah(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return jo("JWT malformed, contained fewer than 3 sections"),null;try{const r=r_(n);return r?JSON.parse(r):(jo("Failed to decode base64 JWT payload"),null)}catch(r){return jo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function T1(t){const e=ah(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof xn&&I1(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function I1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class b1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class v_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function da(t){var e;const n=t.auth,s=await t.getIdToken(),r=await fr(t,E1(n,{idToken:s}));J(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?R1(i.providerUserInfo):[],a=A1(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new v_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function x1(t){const e=st(t);await da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A1(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function R1(t){return t.map(e=>{var{providerId:n}=e,s=rh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function P1(t,e){const n=await __(t,{},async()=>{const s=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=y_(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",g_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function S1(t,e){return An(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
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
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):T1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await P1(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new wi;return s&&(J(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(J(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Cn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=rh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new b1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new v_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fr(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return w1(this,e)}reload(){return x1(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await da(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fr(this,v1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:v,isAnonymous:N,providerData:W,stsTokenManager:le}=n;J(C&&le,e,"internal-error");const fe=wi.fromJSON(this.name,le);J(typeof C=="string",e,"internal-error"),Cn(h,e.name),Cn(d,e.name),J(typeof v=="boolean",e,"internal-error"),J(typeof N=="boolean",e,"internal-error"),Cn(f,e.name),Cn(y,e.name),Cn(T,e.name),Cn(E,e.name),Cn(b,e.name),Cn(R,e.name);const me=new vs({uid:C,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:N,photoURL:y,phoneNumber:f,tenantId:T,stsTokenManager:fe,createdAt:b,lastLoginAt:R});return W&&Array.isArray(W)&&(me.providerData=W.map(Se=>Object.assign({},Se))),E&&(me._redirectEventId=E),me}static async _fromIdTokenResponse(e,n,s=!1){const r=new wi;r.updateFromServerResponse(n);const i=new vs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await da(i),i}}/**
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
 */const Bf=new Map;function pn(t){vn(t instanceof Function,"Expected a class definition");let e=Bf.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bf.set(t,e),e)}/**
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
 */class E_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}E_.type="NONE";const jf=E_;/**
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
 */function qo(t,e,n){return`firebase:${t}:${e}:${n}`}class er{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=qo(this.userKey,r.apiKey,i),this.fullPersistenceKey=qo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new er(pn(jf),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||pn(jf);const o=qo(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=vs._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new er(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new er(i,e,s))}}/**
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
 */function qf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(I_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(x_(e))return"Blackberry";if(A_(e))return"Webos";if(lh(e))return"Safari";if((e.includes("chrome/")||T_(e))&&!e.includes("edge/"))return"Chrome";if(b_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function w_(t=ft()){return/firefox\//i.test(t)}function lh(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function T_(t=ft()){return/crios\//i.test(t)}function I_(t=ft()){return/iemobile/i.test(t)}function b_(t=ft()){return/android/i.test(t)}function x_(t=ft()){return/blackberry/i.test(t)}function A_(t=ft()){return/webos/i.test(t)}function Qa(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function C1(t=ft()){var e;return Qa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function k1(){return Wx()&&document.documentMode===10}function R_(t=ft()){return Qa(t)||b_(t)||A_(t)||x_(t)||/windows phone/i.test(t)||I_(t)}function O1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function P_(t,e=[]){let n;switch(t){case"Browser":n=qf(ft());break;case"Worker":n=`${qf(ft())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ar}/${s}`}/**
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
 */class D1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function N1(t,e={}){return An(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
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
 */const V1=6;class M1{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:V1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class L1{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hf(this),this.idTokenSubscription=new Hf(this),this.beforeStateQueue=new D1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await er.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await da(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=d1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?st(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await N1(this),n=new M1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await S1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=P_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&l1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zn(t){return st(t)}class Hf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zx(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function F1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function S_(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=nn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",F1().appendChild(s)})}function $1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const U1="https://www.google.com/recaptcha/enterprise.js?render=",B1="recaptcha-enterprise",j1="NO_RECAPTCHA";class q1{constructor(e){this.type=B1,this.auth=Zn(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{y1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new _1(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;Uf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(j1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Uf(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}S_(U1+a).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function zf(t,e,n,s=!1){const r=new q1(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hc(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await zf(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await zf(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function H1(t,e){const n=nh(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ca(i,e??{}))return r;Dt(r,"already-initialized")}return n.initialize({options:e})}function z1(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function W1(t,e,n){const s=Zn(t);J(s._canInitEmulator,s,"emulator-config-failed"),J(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=C_(e),{host:o,port:a}=K1(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||G1()}function C_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function K1(t){const e=C_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Wf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Wf(o)}}}function Wf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function G1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ch{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function Q1(t,e){return An(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Y1(t,e){return Qi(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}/**
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
 */async function X1(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function J1(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
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
 */class Ti extends ch{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ti(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ti(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hc(e,n,"signInWithPassword",Y1);case"emailLink":return X1(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hc(e,s,"signUpPassword",Q1);case"emailLink":return J1(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function tr(t,e){return Qi(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
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
 */const Z1="http://localhost";class xs extends ch{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=rh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new xs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,tr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tr(e,n)}buildRequest(){const e={requestUri:Z1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
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
 */function eR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tR(t){const e=Hr(zr(t)).link,n=e?Hr(zr(e)).deep_link_id:null,s=Hr(zr(t)).deep_link_id;return(s?Hr(zr(s)).link:null)||s||n||e||t}class uh{constructor(e){var n,s,r,i,o,a;const l=Hr(zr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=eR((r=l.mode)!==null&&r!==void 0?r:null);J(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tR(e);try{return new uh(n)}catch{return null}}}/**
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
 */class Rr{constructor(){this.providerId=Rr.PROVIDER_ID}static credential(e,n){return Ti._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=uh.parseLink(n);return J(s,"argument-error"),Ti._fromEmailAndCode(e,s.code,s.tenantId)}}Rr.PROVIDER_ID="password";Rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yi extends hh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends Yi{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xs._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yt.credential(n,s)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class Vn extends Yi{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
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
 */class Mn extends Yi{constructor(){super("twitter.com")}static credential(e,n){return xs._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Mn.credential(n,s)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */async function nR(t,e){return Qi(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
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
 */class As{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await vs._fromIdTokenResponse(e,s,r),o=Kf(s);return new As({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Kf(s);return new As({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fa extends xn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,fa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new fa(e,n,s,r)}}function k_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fa._fromErrorAndOperation(t,i,e,s):i})}async function sR(t,e,n=!1){const s=await fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return As._forOperation(t,"link",s)}/**
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
 */async function rR(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await fr(t,k_(s,r,e,t),n);J(i.idToken,s,"internal-error");const o=ah(i.idToken);J(o,s,"internal-error");const{sub:a}=o;return J(t.uid===a,s,"user-mismatch"),As._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(s,"user-mismatch"),i}}/**
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
 */async function O_(t,e,n=!1){const s="signIn",r=await k_(t,s,e),i=await As._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function iR(t,e){return O_(Zn(t),e)}/**
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
 */async function D_(t){const e=Zn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oR(t,e,n){const s=Zn(t),o=await Hc(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&D_(t),l}),a=await As._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function aR(t,e,n){return iR(st(t),Rr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&D_(t),s})}/**
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
 */async function lR(t,e){return An(t,"POST","/v1/accounts:update",e)}/**
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
 */async function cR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=st(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await fr(s,lR(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function uR(t,e,n,s){return st(t).onIdTokenChanged(e,n,s)}function hR(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function Pr(t,e,n,s){return st(t).onAuthStateChanged(e,n,s)}function dR(t){return st(t).signOut()}const pa="__sak";/**
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
 */class N_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pa,"1"),this.storage.removeItem(pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function fR(){const t=ft();return lh(t)||Qa(t)}const pR=1e3,mR=10;class V_ extends N_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fR()&&O1(),this.fallbackToPolling=R_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);k1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,mR):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},pR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}V_.type="LOCAL";const gR=V_;/**
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
 */class M_ extends N_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}M_.type="SESSION";const L_=M_;/**
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
 */function _R(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ya(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await _R(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ya.receivers=[];/**
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
 */function dh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=dh("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function vR(t){sn().location.href=t}/**
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
 */function F_(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function ER(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TR(){return F_()?self:null}/**
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
 */const $_="firebaseLocalStorageDb",IR=1,ma="firebaseLocalStorage",U_="fbase_key";class Xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xa(t,e){return t.transaction([ma],e?"readwrite":"readonly").objectStore(ma)}function bR(){const t=indexedDB.deleteDatabase($_);return new Xi(t).toPromise()}function zc(){const t=indexedDB.open($_,IR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ma,{keyPath:U_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ma)?e(s):(s.close(),await bR(),e(await zc()))})})}async function Gf(t,e,n){const s=Xa(t,!0).put({[U_]:e,value:n});return new Xi(s).toPromise()}async function xR(t,e){const n=Xa(t,!1).get(e),s=await new Xi(n).toPromise();return s===void 0?null:s.value}function Qf(t,e){const n=Xa(t,!0).delete(e);return new Xi(n).toPromise()}const AR=800,RR=3;class B_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>RR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return F_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ya._getInstance(TR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ER(),!this.activeServiceWorker)return;this.sender=new yR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zc();return await Gf(e,pa,"1"),await Qf(e,pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>xR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Xa(r,!1).getAll();return new Xi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}B_.type="LOCAL";const PR=B_;new Gi(3e4,6e4);/**
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
 */function j_(t,e){return e?pn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fh extends ch{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SR(t){return O_(t.auth,new fh(t),t.bypassAuthState)}function CR(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),rR(n,new fh(t),t.bypassAuthState)}async function kR(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),sR(n,new fh(t),t.bypassAuthState)}/**
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
 */class q_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SR;case"linkViaPopup":case"linkViaRedirect":return kR;case"reauthViaPopup":case"reauthViaRedirect":return CR;default:Dt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OR=new Gi(2e3,1e4);async function H_(t,e,n){const s=Zn(t);c1(t,e,hh);const r=j_(s,n);return new fs(s,"signInViaPopup",e,r).executeNotNull()}class fs extends q_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OR.get())};e()}}fs.currentPopupAction=null;/**
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
 */const DR="pendingRedirect",Ho=new Map;class NR extends q_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ho.get(this.auth._key());if(!e){try{const s=await VR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ho.set(this.auth._key(),e)}return this.bypassAuthState||Ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VR(t,e){const n=FR(e),s=LR(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function MR(t,e){Ho.set(t._key(),e)}function LR(t){return pn(t._redirectPersistence)}function FR(t){return qo(DR,t.config.apiKey,t.name)}async function $R(t,e,n=!1){const s=Zn(t),r=j_(s,e),o=await new NR(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const UR=10*60*1e3;class BR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!z_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yf(e))}saveEventToCache(e){this.cachedEventUids.add(Yf(e)),this.lastProcessedEventTime=Date.now()}}function Yf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function z_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z_(t);default:return!1}}/**
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
 */async function qR(t,e={}){return An(t,"GET","/v1/projects",e)}/**
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
 */const HR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zR=/^https?/;async function WR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qR(t);for(const n of e)try{if(KR(n))return}catch{}Dt(t,"unauthorized-domain")}function KR(t){const e=qc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zR.test(n))return!1;if(HR.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const GR=new Gi(3e4,6e4);function Xf(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QR(t){return new Promise((e,n)=>{var s,r,i;function o(){Xf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xf(),n(nn(t,"network-request-failed"))},timeout:GR.get()})}if(!((r=(s=sn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=sn().gapi)===null||i===void 0)&&i.load)o();else{const a=$1("iframefcb");return sn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},S_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zo=null,e})}let zo=null;function YR(t){return zo=zo||QR(t),zo}/**
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
 */const XR=new Gi(5e3,15e3),JR="__/auth/iframe",ZR="emulator/auth/iframe",eP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nP(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oh(e,ZR):`https://${t.config.authDomain}/${JR}`,s={apiKey:e.apiKey,appName:t.name,v:Ar},r=tP.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ki(s).slice(1)}`}async function sP(t){const e=await YR(t),n=sn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:nP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eP,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=sn().setTimeout(()=>{i(o)},XR.get());function l(){sn().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const rP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iP=500,oP=600,aP="_blank",lP="http://localhost";class Jf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cP(t,e,n,s=iP,r=oP){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rP),{width:s.toString(),height:r.toString(),top:i,left:o}),c=ft().toLowerCase();n&&(a=T_(c)?aP:n),w_(c)&&(e=e||lP,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(C1(c)&&a!=="_self")return uP(e||"",a),new Jf(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new Jf(h)}function uP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const hP="__/auth/handler",dP="emulator/auth/handler",fP=encodeURIComponent("fac");async function Zf(t,e,n,s,r,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ar,eventId:r};if(e instanceof hh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Yi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${fP}=${encodeURIComponent(l)}`:"";return`${pP(t)}?${Ki(a).slice(1)}${c}`}function pP({config:t}){return t.emulator?oh(t,dP):`https://${t.authDomain}/${hP}`}/**
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
 */const Xl="webStorageSupport";class mP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L_,this._completeRedirectFn=$R,this._overrideRedirectResult=MR}async _openPopup(e,n,s,r){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Zf(e,n,s,qc(),r);return cP(e,o,dh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Zf(e,n,s,qc(),r);return vR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(vn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await sP(e),s=new BR(e);return n.register("authEvent",r=>(J(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xl,{type:Xl},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Xl];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return R_()||lh()||Qa()}}const gP=mP;var ep="@firebase/auth",tp="1.5.1";/**
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
 */class _P{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vP(t){dr(new Is("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:P_(t)},c=new L1(s,r,i,l);return z1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),dr(new Is("auth-internal",e=>{const n=Zn(e.getProvider("auth").getImmediate());return(s=>new _P(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(ep,tp,yP(t)),zn(ep,tp,"esm2017")}/**
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
 */const EP=5*60,wP=a_("authIdTokenMaxAge")||EP;let np=null;const TP=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>wP)return;const r=n==null?void 0:n.token;np!==r&&(np=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function rn(t=u_()){const e=nh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=H1(t,{popupRedirectResolver:gP,persistence:[PR,gR,L_]}),s=a_("authTokenSyncURL");if(s){const i=TP(s);hR(n,i,()=>i(n.currentUser)),uR(n,o=>i(o))}const r=i_("auth");return r&&W1(n,`http://${r}`),n}vP("Browser");const IP="/assets/hero-imagehc-D6vI5bIK.jpg",bP="/assets/hero-text--xnBRz4p.svg",es=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},xP={},AP={class:"sm:pt-[12px] w-full"},RP=m("div",{class:"maintop relative"},[m("img",{src:IP,alt:"",srcset:"",class:"w-full h-[190px] sm:h-[330px] sm:rounded-lg mainimg sm:hidden md:block md:h-full 2xl:h-[60vh]"}),m("img",{src:bP,alt:"",srcset:"",class:"absolute top-6 right-20 sm:top-8 sm:right-16 w-[35%] sm:w-[45%] md:w-[35%] md:top-[8%] md:right-[15%] 2xl:w-[27%] 2xl:right-[22%]"})],-1),PP=[RP];function SP(t,e){return D(),F("div",AP,PP)}const CP=es(xP,[["render",SP]]),kP={class:"grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},OP=["src"],DP=["src"],NP=["src"],VP=["src"],MP=["src"],LP=["src"],FP=["src"],$P=["src"],UP=["src"],BP="https://www.themealdb.com/api/json/v1/1/lookup.php?i=53049",jP="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52893",qP="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768",HP="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767",zP="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855",WP="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52894",KP="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52877",GP="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52835",QP="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52999",YP={__name:"baserecipes",setup(t){const e=ee({});fetch(`${BP}`).then(u=>u.json()).then(u=>{e.value=u});const n=ee({});fetch(`${jP}`).then(u=>u.json()).then(u=>{n.value=u});const s=ee({});fetch(`${qP}`).then(u=>u.json()).then(u=>{s.value=u});const r=ee({});fetch(`${HP}`).then(u=>u.json()).then(u=>{r.value=u});const i=ee({});fetch(`${zP}`).then(u=>u.json()).then(u=>{i.value=u});const o=ee({});fetch(`${WP}`).then(u=>u.json()).then(u=>{o.value=u});const a=ee({});fetch(`${KP}`).then(u=>u.json()).then(u=>{a.value=u});const l=ee({});fetch(`${GP}`).then(u=>u.json()).then(u=>{l.value=u});const c=ee({});return fetch(`${QP}`).then(u=>u.json()).then(u=>{c.value=u}),(u,h)=>(D(),F("section",kP,[(D(!0),F(be,null,We(e.value.meals,d=>(D(),F("div",null,[q(Y(Te),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ie(()=>[m("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,OP),m("div",null,ue(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(D(!0),F(be,null,We(n.value.meals,d=>(D(),F("div",null,[q(Y(Te),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ie(()=>[m("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,DP),m("div",null,ue(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(D(!0),F(be,null,We(s.value.meals,d=>(D(),F("div",null,[q(Y(Te),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ie(()=>[m("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,NP),m("div",null,ue(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(D(!0),F(be,null,We(r.value.meals,d=>(D(),F("div",null,[q(Y(Te),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ie(()=>[m("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,VP),m("div",null,ue(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(D(!0),F(be,null,We(i.value.meals,d=>(D(),F("div",null,[q(Y(Te),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ie(()=>[m("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,MP),m("div",null,ue(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(D(!0),F(be,null,We(o.value.meals,d=>(D(),F("div",null,[q(Y(Te),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ie(()=>[m("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,LP),m("div",null,ue(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(D(!0),F(be,null,We(a.value.meals,d=>(D(),F("div",null,[q(Y(Te),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ie(()=>[m("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,FP),m("div",null,ue(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(D(!0),F(be,null,We(l.value.meals,d=>(D(),F("div",null,[q(Y(Te),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ie(()=>[m("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,$P),m("div",null,ue(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(D(!0),F(be,null,We(c.value.meals,d=>(D(),F("div",null,[q(Y(Te),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ie(()=>[m("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,UP),m("div",null,ue(d.strMeal),1)]),_:2},1032,["to"])]))),256))]))}},XP={class:"grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 xl:gap-4"},JP={class:"relative"},ZP=["src"],eS={class:"flex justify-center items-center text-[14px] 2xl:text-[16px]"},tS="https://www.themealdb.com/api/json/v1/1/categories.php?",nS={__name:"categories",setup(t){const e=ee({});return fetch(`${tS}`).then(n=>n.json()).then(n=>{e.value=n.categories}),ee(!1),(n,s)=>{const r=In("router-link");return D(),F("section",XP,[(D(!0),F(be,null,We(e.value,i=>(D(),F("div",JP,[q(r,{to:/category/+i.strCategory,class:"bg-transparent bg-[#0E1325] border border-[#394150] flex gap-3 rounded-xl duration-300 hover:bg-[#FEBD2E] text-[#E5E7EB] hover:text-black hover:font-bold overflow-hidden"},{default:ie(()=>[m("img",{src:i.strCategoryThumb,alt:"",srcset:"",class:"catimg w-[50%] sm:w-[32%] lg:w-[42%] xl:w-[63%] lg:ml-[-40px] sm:ml-[-40px] ml-[-20px] itemimg rounded-l-full"},null,8,ZP),m("div",eS,ue(i.strCategory),1)]),_:2},1032,["to"])]))),256))])}}};var sS="firebase",rS="10.7.1";/**
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
 */zn(sS,rS,"app");var iS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,ph=ph||{},te=iS||self;function Ja(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ji(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function oS(t){return Object.prototype.hasOwnProperty.call(t,Jl)&&t[Jl]||(t[Jl]=++aS)}var Jl="closure_uid_"+(1e9*Math.random()>>>0),aS=0;function lS(t,e,n){return t.call.apply(t.bind,arguments)}function cS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=lS:ht=cS,ht.apply(null,arguments)}function xo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function ts(){this.s=this.s,this.o=this.o}var uS=0;ts.prototype.s=!1;ts.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),uS!=0)&&oS(this)};ts.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const W_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function mh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function sp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ja(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var hS=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};te.addEventListener("test",n,e),te.removeEventListener("test",n,e)}catch{}return t}();function Ii(t){return/^[\s\xa0]*$/.test(t)}function Za(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return Za().indexOf(t)!=-1}function gh(t){return gh[" "](t),t}gh[" "]=function(){};function dS(t,e){var n=rC;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var fS=Xt("Opera"),pr=Xt("Trident")||Xt("MSIE"),K_=Xt("Edge"),Wc=K_||pr,G_=Xt("Gecko")&&!(Za().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),pS=Za().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function Q_(){var t=te.document;return t?t.documentMode:void 0}var Kc;e:{var Zl="",ec=function(){var t=Za();if(G_)return/rv:([^\);]+)(\)|;)/.exec(t);if(K_)return/Edge\/([\d\.]+)/.exec(t);if(pr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(pS)return/WebKit\/(\S+)/.exec(t);if(fS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ec&&(Zl=ec?ec[1]:""),pr){var tc=Q_();if(tc!=null&&tc>parseFloat(Zl)){Kc=String(tc);break e}}Kc=Zl}var Gc;if(te.document&&pr){var rp=Q_();Gc=rp||parseInt(Kc,10)||void 0}else Gc=void 0;var mS=Gc;function bi(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G_){e:{try{gh(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&bi.$.h.call(this)}}Ye(bi,dt);var gS={2:"touch",3:"pen",4:"mouse"};bi.prototype.h=function(){bi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zi="closure_listenable_"+(1e6*Math.random()|0),_S=0;function yS(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++_S,this.fa=this.ia=!1}function el(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function _h(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function vS(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Y_(t){const e={};for(const n in t)e[n]=t[n];return e}const ip="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function X_(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<ip.length;i++)n=ip[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function tl(t){this.src=t,this.g={},this.h=0}tl.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Yc(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new yS(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Qc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=W_(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(el(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Yc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var yh="closure_lm_"+(1e6*Math.random()|0),nc={};function J_(t,e,n,s,r){if(s&&s.once)return ey(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)J_(t,e[i],n,s,r);return null}return n=wh(n),t&&t[Zi]?t.O(e,n,Ji(s)?!!s.capture:!!s,r):Z_(t,e,n,!1,s,r)}function Z_(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ji(r)?!!r.capture:!!r,a=Eh(t);if(a||(t[yh]=a=new tl(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=ES(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)hS||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ny(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ES(){function t(n){return e.call(t.src,t.listener,n)}const e=wS;return t}function ey(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ey(t,e[i],n,s,r);return null}return n=wh(n),t&&t[Zi]?t.P(e,n,Ji(s)?!!s.capture:!!s,r):Z_(t,e,n,!0,s,r)}function ty(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ty(t,e[i],n,s,r);else s=Ji(s)?!!s.capture:!!s,n=wh(n),t&&t[Zi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Yc(i,n,s,r),-1<n&&(el(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Yc(e,n,s,r)),(n=-1<t?e[t]:null)&&vh(n))}function vh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Zi])Qc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ny(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Eh(e))?(Qc(n,t),n.h==0&&(n.src=null,e[yh]=null)):el(t)}}}function ny(t){return t in nc?nc[t]:nc[t]="on"+t}function wS(t,e){if(t.fa)t=!0;else{e=new bi(e,this);var n=t.listener,s=t.la||t.src;t.ia&&vh(t),t=n.call(s,e)}return t}function Eh(t){return t=t[yh],t instanceof tl?t:null}var sc="__closure_events_fn_"+(1e9*Math.random()>>>0);function wh(t){return typeof t=="function"?t:(t[sc]||(t[sc]=function(e){return t.handleEvent(e)}),t[sc])}function Qe(){ts.call(this),this.i=new tl(this),this.S=this,this.J=null}Ye(Qe,ts);Qe.prototype[Zi]=!0;Qe.prototype.removeEventListener=function(t,e,n,s){ty(this,t,e,n,s)};function et(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var r=e;e=new dt(s,t),X_(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ao(o,s,!0,e)&&r}if(o=e.g=t,r=Ao(o,s,!0,e)&&r,r=Ao(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ao(o,s,!1,e)&&r}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)el(n[s]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Qe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ao(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Qc(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var Th=te.JSON.stringify;class TS{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function IS(){var t=Ih;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bS{constructor(){this.h=this.g=null}add(e,n){const s=sy.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var sy=new TS(()=>new xS,t=>t.reset());class xS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function RS(t){te.setTimeout(()=>{throw t},0)}let xi,Ai=!1,Ih=new bS,ry=()=>{const t=te.Promise.resolve(void 0);xi=()=>{t.then(PS)}};var PS=()=>{for(var t;t=IS();){try{t.h.call(t.g)}catch(n){RS(n)}var e=sy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ai=!1};function nl(t,e){Qe.call(this),this.h=t||1,this.g=e||te,this.j=ht(this.qb,this),this.l=Date.now()}Ye(nl,Qe);L=nl.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(bh(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){nl.$.N.call(this),bh(this),delete this.g};function xh(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function iy(t){t.g=xh(()=>{t.g=null,t.i&&(t.i=!1,iy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class SS extends ts{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:iy(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(t){ts.call(this),this.h=t,this.g={}}Ye(Ri,ts);var op=[];function oy(t,e,n,s){Array.isArray(n)||(n&&(op[0]=n.toString()),n=op);for(var r=0;r<n.length;r++){var i=J_(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ay(t){_h(t.g,function(e,n){this.g.hasOwnProperty(n)&&vh(e)},t),t.g={}}Ri.prototype.N=function(){Ri.$.N.call(this),ay(this)};Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sl(){this.g=!0}sl.prototype.Ea=function(){this.g=!1};function CS(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function kS(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ws(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+DS(t,n)+(s?" "+s:"")})}function OS(t,e){t.info(function(){return"TIMEOUT: "+e})}sl.prototype.info=function(){};function DS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Th(n)}catch{return e}}var ks={},ap=null;function rl(){return ap=ap||new Qe}ks.Ta="serverreachability";function ly(t){dt.call(this,ks.Ta,t)}Ye(ly,dt);function Pi(t){const e=rl();et(e,new ly(e))}ks.STAT_EVENT="statevent";function cy(t,e){dt.call(this,ks.STAT_EVENT,t),this.stat=e}Ye(cy,dt);function _t(t){const e=rl();et(e,new cy(e,t))}ks.Ua="timingevent";function uy(t,e){dt.call(this,ks.Ua,t),this.size=e}Ye(uy,dt);function eo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var il={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},hy={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ah(){}Ah.prototype.h=null;function lp(t){return t.h||(t.h=t.i())}function dy(){}var to={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Rh(){dt.call(this,"d")}Ye(Rh,dt);function Ph(){dt.call(this,"c")}Ye(Ph,dt);var Xc;function ol(){}Ye(ol,Ah);ol.prototype.g=function(){return new XMLHttpRequest};ol.prototype.i=function(){return{}};Xc=new ol;function no(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Ri(this),this.P=NS,t=Wc?125:void 0,this.V=new nl(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fy}function fy(){this.i=null,this.g="",this.h=!1}var NS=45e3,py={},Jc={};L=no.prototype;L.setTimeout=function(t){this.P=t};function Zc(t,e,n){t.L=1,t.A=ll(En(e)),t.u=n,t.S=!0,my(t,null)}function my(t,e){t.G=Date.now(),so(t),t.B=En(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),Iy(n.i,"t",s),t.o=0,n=t.l.J,t.h=new fy,t.g=Hy(t.l,n?e:null,!t.u),0<t.O&&(t.M=new SS(ht(t.Pa,t,t.g),t.O)),oy(t.U,t.g,"readystatechange",t.nb),e=t.I?Y_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Pi(),CS(t.j,t.v,t.B,t.m,t.W,t.u)}L.nb=function(t){t=t.target;const e=this.M;e&&Jt(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=Jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Wc||this.g&&(this.h.h||this.g.ja()||dp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Pi(3):Pi(2)),al(this);var n=this.g.da();this.ca=n;t:if(gy(this)){var s=dp(this.g);t="";var r=s.length,i=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ps(this),oi(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kS(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ii(a)){var c=a;break t}}c=null}if(n=c)Ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eu(this,n);else{this.i=!1,this.s=3,_t(12),ps(this),oi(this);break e}}this.S?(_y(this,u,o),Wc&&this.i&&u==3&&(oy(this.U,this.V,"tick",this.mb),this.V.start())):(Ws(this.j,this.m,o,null),eu(this,o)),u==4&&ps(this),this.i&&!this.J&&(u==4?Uy(this.l,this):(this.i=!1,so(this)))}else tC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),ps(this),oi(this)}}}catch{}finally{}};function gy(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function _y(t,e,n){let s=!0,r;for(;!t.J&&t.o<n.length;)if(r=VS(t,n),r==Jc){e==4&&(t.s=4,_t(14),s=!1),Ws(t.j,t.m,null,"[Incomplete Response]");break}else if(r==py){t.s=4,_t(15),Ws(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ws(t.j,t.m,r,null),eu(t,r);gy(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,_t(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nh(e),e.M=!0,_t(11))):(Ws(t.j,t.m,n,"[Invalid Chunked Response]"),ps(t),oi(t))}L.mb=function(){if(this.g){var t=Jt(this.g),e=this.g.ja();this.o<e.length&&(al(this),_y(this,t,e),this.i&&t!=4&&so(this))}};function VS(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?Jc:(n=Number(e.substring(n,s)),isNaN(n)?py:(s+=1,s+n>e.length?Jc:(e=e.slice(s,s+n),t.o=s+n,e)))}L.cancel=function(){this.J=!0,ps(this)};function so(t){t.Y=Date.now()+t.P,yy(t,t.P)}function yy(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=eo(ht(t.lb,t),e)}function al(t){t.C&&(te.clearTimeout(t.C),t.C=null)}L.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(OS(this.j,this.B),this.L!=2&&(Pi(),_t(17)),ps(this),this.s=2,oi(this)):yy(this,this.Y-t)};function oi(t){t.l.H==0||t.J||Uy(t.l,t)}function ps(t){al(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,bh(t.V),ay(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function eu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||tu(n.i,t))){if(!t.K&&tu(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ya(n),dl(n);else break e;Dh(n),_t(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=eo(ht(n.ib,n),6e3));if(1>=Ay(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ms(n,11)}else if((t.K||n.g==t)&&ya(n),!Ii(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Sh(i,i.h),i.h=null))}if(s.F){const T=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.Da=T,ke(s.I,s.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=qy(s,s.J?s.pa:null,s.Y),o.K){Ry(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.C&&(al(a),so(a)),s.g=o}else Fy(s);0<n.j.length&&fl(n)}else c[0]!="stop"&&c[0]!="close"||ms(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ms(n,7):Oh(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Pi(4)}catch{}}function MS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ja(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function LS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ja(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function vy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ja(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=LS(t),s=MS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Ey=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Es(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Es){this.h=t.h,ga(this,t.j),this.s=t.s,this.g=t.g,_a(this,t.m),this.l=t.l;var e=t.i,n=new Si;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),cp(this,n),this.o=t.o}else t&&(e=String(t).match(Ey))?(this.h=!1,ga(this,e[1]||"",!0),this.s=Wr(e[2]||""),this.g=Wr(e[3]||"",!0),_a(this,e[4]),this.l=Wr(e[5]||"",!0),cp(this,e[6]||"",!0),this.o=Wr(e[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}Es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Kr(e,up,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Kr(e,up,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Kr(n,n.charAt(0)=="/"?BS:US,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Kr(n,qS)),t.join("")};function En(t){return new Es(t)}function ga(t,e,n){t.j=n?Wr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _a(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cp(t,e,n){e instanceof Si?(t.i=e,HS(t.i,t.h)):(n||(e=Kr(e,jS)),t.i=new Si(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function ll(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Wr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Kr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$S),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $S(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var up=/[#\/\?@]/g,US=/[#\?:]/g,BS=/[#\?]/g,jS=/[#\?@]/g,qS=/#/g;function Si(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ns(t){t.g||(t.g=new Map,t.h=0,t.i&&FS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Si.prototype;L.add=function(t,e){ns(this),this.i=null,t=Sr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wy(t,e){ns(t),e=Sr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ty(t,e){return ns(t),e=Sr(t,e),t.g.has(e)}L.forEach=function(t,e){ns(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};L.ta=function(){ns(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};L.Z=function(t){ns(this);let e=[];if(typeof t=="string")Ty(this,t)&&(e=e.concat(this.g.get(Sr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return ns(this),this.i=null,t=Sr(this,t),Ty(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Iy(t,e,n){wy(t,e),0<n.length&&(t.i=null,t.g.set(Sr(t,e),mh(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Sr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function HS(t,e){e&&!t.j&&(ns(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(wy(this,s),Iy(this,r,n))},t)),t.j=e}var zS=class{constructor(t,e){this.g=t,this.map=e}};function by(t){this.l=t||WS,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WS=10;function xy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ay(t){return t.h?1:t.g?t.g.size:0}function tu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sh(t,e){t.g?t.g.add(e):t.h=e}function Ry(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}by.prototype.cancel=function(){if(this.i=Py(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Py(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return mh(t.i)}var KS=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function GS(){this.g=new KS}function QS(t,e,n){const s=n||"";try{vy(t,function(r,i){let o=r;Ji(r)&&(o=Th(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function YS(t,e){const n=new sl;if(te.Image){const s=new Image;s.onload=xo(Ro,n,s,"TestLoadImage: loaded",!0,e),s.onerror=xo(Ro,n,s,"TestLoadImage: error",!1,e),s.onabort=xo(Ro,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=xo(Ro,n,s,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ro(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function cl(t){this.l=t.ec||null,this.j=t.ob||!1}Ye(cl,Ah);cl.prototype.g=function(){return new ul(this.l,this.j)};cl.prototype.i=function(t){return function(){return t}}({});function ul(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ch,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(ul,Qe);var Ch=0;L=ul.prototype;L.open=function(t,e){if(this.readyState!=Ch)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ci(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=Ch};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Sy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ro(this):Ci(this),this.readyState==3&&Sy(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,ro(this))};L.Ya=function(t){this.g&&(this.response=t,ro(this))};L.ka=function(){this.g&&ro(this)};function ro(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ci(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ci(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var XS=te.JSON.parse;function Ve(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Cy,this.L=this.M=!1}Ye(Ve,Qe);var Cy="",JS=/^https?$/i,ZS=["POST","PUT"];L=Ve.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Xc.g(),this.C=this.u?lp(this.u):lp(Xc),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){hp(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=te.FormData&&t instanceof te.FormData,!(0<=W_(ZS,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Dy(this),0<this.B&&((this.L=eC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=xh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){hp(this,i)}};function eC(t){return pr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof ph<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function hp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ky(t),hl(t)}function ky(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),hl(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hl(this,!0)),Ve.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?Oy(this):this.kb())};L.kb=function(){Oy(this)};function Oy(t){if(t.h&&typeof ph<"u"&&(!t.C[1]||Jt(t)!=4||t.da()!=2)){if(t.v&&Jt(t)==4)xh(t.La,0,t);else if(et(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(Ey)[1]||null;!r&&te.self&&te.self.location&&(r=te.self.location.protocol.slice(0,-1)),s=!JS.test(r?r.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var i=2<Jt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",ky(t)}}finally{hl(t)}}}}function hl(t,e){if(t.g){Dy(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=s}catch{}}}function Dy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function Jt(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),XS(e)}};function dp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Cy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function tC(t){const e={};t=(t.g&&2<=Jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Ii(t[s]))continue;var n=AS(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}vS(e,function(s){return s.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ny(t){let e="";return _h(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function kh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ny(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function $r(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Vy(t){this.Ga=0,this.j=[],this.l=new sl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$r("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$r("baseRetryDelayMs",5e3,t),this.hb=$r("retryDelaySeedMs",1e4,t),this.eb=$r("forwardChannelMaxRetries",2,t),this.xa=$r("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new by(t&&t.concurrentRequestLimit),this.Ja=new GS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=Vy.prototype;L.ra=8;L.H=1;function Oh(t){if(My(t),t.H==3){var e=t.W++,n=En(t.I);if(ke(n,"SID",t.K),ke(n,"RID",e),ke(n,"TYPE","terminate"),io(t,n),e=new no(t,t.l,e),e.L=2,e.A=ll(En(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.A,n=!0),n||(e.g=Hy(e.l,null),e.g.ha(e.A)),e.G=Date.now(),so(e)}jy(t)}function dl(t){t.g&&(Nh(t),t.g.cancel(),t.g=null)}function My(t){dl(t),t.u&&(te.clearTimeout(t.u),t.u=null),ya(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function fl(t){if(!xy(t.i)&&!t.m){t.m=!0;var e=t.Na;xi||ry(),Ai||(xi(),Ai=!0),Ih.add(e,t),t.C=0}}function nC(t,e){return Ay(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=eo(ht(t.Na,t,e),By(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new no(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Y_(i),X_(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ly(this,r,e),n=En(this.I),ke(n,"RID",t),ke(n,"CVER",22),this.F&&ke(n,"X-HTTP-Session-Id",this.F),io(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Ny(i)))+"&"+e:this.o&&kh(n,this.o,i)),Sh(this.i,r),this.bb&&ke(n,"TYPE","init"),this.P?(ke(n,"$req",e),ke(n,"SID","null"),r.aa=!0,Zc(r,n,null)):Zc(r,n,e),this.H=2}}else this.H==3&&(t?fp(this,t):this.j.length==0||xy(this.i)||fp(this))};function fp(t,e){var n;e?n=e.m:n=t.W++;const s=En(t.I);ke(s,"SID",t.K),ke(s,"RID",n),ke(s,"AID",t.V),io(t,s),t.o&&t.s&&kh(s,t.o,t.s),n=new no(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ly(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sh(t.i,n),Zc(n,s,e)}function io(t,e){t.na&&_h(t.na,function(n,s){ke(e,s,n)}),t.h&&vy({},function(n,s){ke(e,s,n)})}function Ly(t,e,n){n=Math.min(t.j.length,n);var s=t.h?ht(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=i,0>c)i=Math.max(0,r[l].g-100),a=!1;else try{QS(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function Fy(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;xi||ry(),Ai||(xi(),Ai=!0),Ih.add(e,t),t.A=0}}function Dh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=eo(ht(t.Ma,t),By(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,$y(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=eo(ht(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_t(10),dl(this),$y(this))};function Nh(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function $y(t){t.g=new no(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=En(t.wa);ke(e,"RID","rpc"),ke(e,"SID",t.K),ke(e,"AID",t.V),ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ke(e,"TO",t.qa),ke(e,"TYPE","xmlhttp"),io(t,e),t.o&&t.s&&kh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ll(En(e)),n.u=null,n.S=!0,my(n,t)}L.ib=function(){this.v!=null&&(this.v=null,dl(this),Dh(this),_t(19))};function ya(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function Uy(t,e){var n=null;if(t.g==e){ya(t),Nh(t),t.g=null;var s=2}else if(tu(t.i,e))n=e.F,Ry(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;s=rl(),et(s,new uy(s,n)),fl(t)}else Fy(t);else if(r=e.s,r==3||r==0&&0<e.ca||!(s==1&&nC(t,e)||s==2&&Dh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ms(t,5);break;case 4:ms(t,10);break;case 3:ms(t,6);break;default:ms(t,2)}}}function By(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ms(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=ht(t.pb,t);n||(n=new Es("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||ga(n,"https"),ll(n)),YS(n.toString(),s)}else _t(2);t.H=0,t.h&&t.h.za(e),jy(t),My(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_t(2)):(this.l.info("Failed to ping google.com"),_t(1))};function jy(t){if(t.H=0,t.ma=[],t.h){const e=Py(t.i);(e.length!=0||t.j.length!=0)&&(sp(t.ma,e),sp(t.ma,t.j),t.i.i.length=0,mh(t.j),t.j.length=0),t.h.ya()}}function qy(t,e,n){var s=n instanceof Es?En(n):new Es(n);if(s.g!="")e&&(s.g=e+"."+s.g),_a(s,s.m);else{var r=te.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Es(null);s&&ga(i,s),e&&(i.g=e),r&&_a(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&ke(s,n,e),ke(s,"VER",t.ra),io(t,s),s}function Hy(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ve(new cl({ob:n})):new Ve(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function zy(){}L=zy.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function va(){if(pr&&!(10<=Number(mS)))throw Error("Environmental error: no available transport.")}va.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){Qe.call(this),this.g=new Vy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ii(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ii(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cr(this)}Ye(Pt,Qe);Pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=qy(t,null,t.Y),fl(t)};Pt.prototype.close=function(){Oh(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Th(t),t=n);e.j.push(new zS(e.fb++,t)),e.H==3&&fl(e)};Pt.prototype.N=function(){this.g.h=null,delete this.j,Oh(this.g),delete this.g,Pt.$.N.call(this)};function Wy(t){Rh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(Wy,Rh);function Ky(){Ph.call(this),this.status=1}Ye(Ky,Ph);function Cr(t){this.g=t}Ye(Cr,zy);Cr.prototype.Ba=function(){et(this.g,"a")};Cr.prototype.Aa=function(t){et(this.g,new Wy(t))};Cr.prototype.za=function(t){et(this.g,new Ky)};Cr.prototype.ya=function(){et(this.g,"b")};function sC(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ye(qt,sC);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function rc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)rc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){rc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){rc(this,s),r=0;break}}this.h=r,this.i+=e};qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function xe(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var rC={};function Vh(t){return-128<=t&&128>t?dS(t,function(e){return new xe([e|0],0>e?-1:0)}):new xe([t|0],0>t?-1:0)}function Zt(t){if(isNaN(t)||!isFinite(t))return nr;if(0>t)return Je(Zt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=nu;return new xe(e,0)}function Gy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Je(Gy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zt(Math.pow(e,8)),s=nr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Zt(Math.pow(e,i)),s=s.R(i).add(Zt(o))):(s=s.R(n),s=s.add(Zt(o)))}return s}var nu=4294967296,nr=Vh(0),su=Vh(1),pp=Vh(16777216);L=xe.prototype;L.ea=function(){if(St(this))return-Je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:nu+s)*e,e*=nu}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(mn(this))return"0";if(St(this))return"-"+Je(this).toString(t);for(var e=Zt(Math.pow(t,6)),n=this,s="";;){var r=wa(n,e).g;n=Ea(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,mn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function mn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function St(t){return t.h==-1}L.X=function(t){return t=Ea(this,t),St(t)?-1:mn(t)?0:1};function Je(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new xe(n,~t.h).add(su)}L.abs=function(){return St(this)?Je(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new xe(n,n[n.length-1]&-2147483648?-1:0)};function Ea(t,e){return t.add(Je(e))}L.R=function(t){if(mn(this)||mn(t))return nr;if(St(this))return St(t)?Je(this).R(Je(t)):Je(Je(this).R(t));if(St(t))return Je(this.R(Je(t)));if(0>this.X(pp)&&0>t.X(pp))return Zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*s+2*r]+=o*l,Po(n,2*s+2*r),n[2*s+2*r+1]+=i*l,Po(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Po(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Po(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new xe(n,0)};function Po(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ur(t,e){this.g=t,this.h=e}function wa(t,e){if(mn(e))throw Error("division by zero");if(mn(t))return new Ur(nr,nr);if(St(t))return e=wa(Je(t),e),new Ur(Je(e.g),Je(e.h));if(St(e))return e=wa(t,Je(e)),new Ur(Je(e.g),e.h);if(30<t.g.length){if(St(t)||St(e))throw Error("slowDivide_ only works with positive integers.");for(var n=su,s=e;0>=s.X(t);)n=mp(n),s=mp(s);var r=Us(n,1),i=Us(s,1);for(s=Us(s,2),n=Us(n,2);!mn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Us(s,1),n=Us(n,1)}return e=Ea(t,r.R(e)),new Ur(r,e)}for(r=nr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Zt(n),o=i.R(e);St(o)||0<o.X(t);)n-=s,i=Zt(n),o=i.R(e);mn(i)&&(i=su),r=r.add(i),t=Ea(t,o)}return new Ur(r,t)}L.gb=function(t){return wa(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new xe(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new xe(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new xe(n,this.h^t.h)};function mp(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new xe(n,t.h)}function Us(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new xe(r,t.h)}va.prototype.createWebChannel=va.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;il.NO_ERROR=0;il.TIMEOUT=8;il.HTTP_ERROR=6;hy.COMPLETE="complete";dy.EventType=to;to.OPEN="a";to.CLOSE="b";to.ERROR="c";to.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;Ve.prototype.listenOnce=Ve.prototype.P;Ve.prototype.getLastError=Ve.prototype.Sa;Ve.prototype.getLastErrorCode=Ve.prototype.Ia;Ve.prototype.getStatus=Ve.prototype.da;Ve.prototype.getResponseJson=Ve.prototype.Wa;Ve.prototype.getResponseText=Ve.prototype.ja;Ve.prototype.send=Ve.prototype.ha;Ve.prototype.setWithCredentials=Ve.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;xe.prototype.add=xe.prototype.add;xe.prototype.multiply=xe.prototype.R;xe.prototype.modulo=xe.prototype.gb;xe.prototype.compare=xe.prototype.X;xe.prototype.toNumber=xe.prototype.ea;xe.prototype.toString=xe.prototype.toString;xe.prototype.getBits=xe.prototype.D;xe.fromNumber=Zt;xe.fromString=Gy;var iC=function(){return new va},oC=function(){return rl()},ic=il,aC=hy,lC=ks,gp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},So=dy,cC=Ve,uC=qt,sr=xe;const _p="@firebase/firestore";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let kr="10.7.0";/**
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
 */const Rs=new eh("@firebase/firestore");function Br(){return Rs.logLevel}function j(t,...e){if(Rs.logLevel<=de.DEBUG){const n=e.map(Mh);Rs.debug(`Firestore (${kr}): ${t}`,...n)}}function wn(t,...e){if(Rs.logLevel<=de.ERROR){const n=e.map(Mh);Rs.error(`Firestore (${kr}): ${t}`,...n)}}function mr(t,...e){if(Rs.logLevel<=de.WARN){const n=e.map(Mh);Rs.warn(`Firestore (${kr}): ${t}`,...n)}}function Mh(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${kr}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function Pe(t,e){t||Z()}function oe(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ws{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Qy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class dC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fC{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new ws;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ws,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ws)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pe(typeof s.accessToken=="string"),new Qy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new ot(e)}}class pC{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mC{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new pC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _C{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new gC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function yC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Yy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=yC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function _e(t,e){return t<e?-1:t>e?1:0}function gr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new He(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new He(0,0))}static max(){return new ne(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ki{constructor(e,n,s){n===void 0?n=0:n>e.length&&Z(),s===void 0?s=e.length-n:s>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ki.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ki?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends ki{construct(e,n,s){return new Oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const vC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends ki{construct(e,n,s){return new Ze(e,n,s)}static isValidIdentifier(e){return vC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Oe.fromString(e))}static fromName(e){return new K(Oe.fromString(e).popFirst(5))}static empty(){return new K(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Oe(e.slice()))}}function EC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ne.fromTimestamp(s===1e9?new He(n+1,0):new He(n,s));return new Gn(r,K.empty(),e)}function wC(t){return new Gn(t.readTime,t.key,-1)}class Gn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Gn(ne.min(),K.empty(),-1)}static max(){return new Gn(ne.max(),K.empty(),-1)}}function TC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const IC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function oo(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==IC)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ao(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Lh._e=-1;function pl(t){return t==null}function Ta(t){return t===0&&1/t==-1/0}function xC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ta(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function yp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Xy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Co(this.root,e,this.comparator,!1)}getReverseIterator(){return new Co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Co(this.root,e,this.comparator,!0)}}class Co{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=r??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Xe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,s,r,i){return this}insert(e,n,s){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vp(this.data.getIterator())}getIteratorFrom(e){return new vp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class vp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new $t([])}unionWith(e){let n=new tt(Ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Jy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Jy("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const AC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=AC.exec(t);if(Pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ps(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function Fh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $h(t){const e=t.mapValue.fields.__previous_value__;return Fh(e)?$h(e):e}function Oi(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class RC{constructor(e,n,s,r,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ko={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fh(t)?4:PC(t)?9007199254740991:10:Z()}function cn(t,e){if(t===e)return!0;const n=Ss(t);if(n!==Ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oi(t).isEqual(Oi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Qn(r.timestampValue),a=Qn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ps(r.bytesValue).isEqual(Ps(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ue(r.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ue(r.integerValue)===Ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ue(r.doubleValue),a=Ue(i.doubleValue);return o===a?Ta(o)===Ta(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return gr(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(yp(o)!==yp(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!cn(o[l],a[l])))return!1;return!0}(t,e);default:return Z()}}function Ni(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function _r(t,e){if(t===e)return 0;const n=Ss(t),s=Ss(e);if(n!==s)return _e(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ue(i.integerValue||i.doubleValue),l=Ue(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Ep(t.timestampValue,e.timestampValue);case 4:return Ep(Oi(t),Oi(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ps(i),l=Ps(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=_e(a[c],l[c]);if(u!==0)return u}return _e(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=_e(Ue(i.latitude),Ue(o.latitude));return a!==0?a:_e(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=_r(a[c],l[c]);if(u)return u}return _e(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===ko.mapValue&&o===ko.mapValue)return 0;if(i===ko.mapValue)return 1;if(o===ko.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=_e(l[h],u[h]);if(d!==0)return d;const f=_r(a[l[h]],c[u[h]]);if(f!==0)return f}return _e(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Ep(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Qn(t),s=Qn(e),r=_e(n.seconds,s.seconds);return r!==0?r:_e(n.nanos,s.nanos)}function yr(t){return ru(t)}function ru(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Qn(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ps(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=ru(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${ru(n.fields[o])}`;return r+"}"}(t.mapValue):Z()}function wp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function iu(t){return!!t&&"integerValue"in t}function Uh(t){return!!t&&"arrayValue"in t}function Tp(t){return!!t&&"nullValue"in t}function Ip(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wo(t){return!!t&&"mapValue"in t}function ai(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Or(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ai(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ai(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Wo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(n)}setAll(e){let n=Ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ai(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Wo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Wo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Or(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ct(ai(this.value))}}function Zy(t){const e=[];return Or(t.fields,(n,s)=>{const r=new Ze([n]);if(Wo(s)){const i=Zy(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new $t(e)}/**
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
 */class at{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new at(e,0,ne.min(),ne.min(),ne.min(),Ct.empty(),0)}static newFoundDocument(e,n,s,r){return new at(e,1,n,ne.min(),s,r,0)}static newNoDocument(e,n){return new at(e,2,n,ne.min(),ne.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,ne.min(),ne.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ia{constructor(e,n){this.position=e,this.inclusive=n}}function bp(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=_r(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function xp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function SC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ev{}class Be extends ev{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new kC(e,n,s):n==="array-contains"?new NC(e,s):n==="in"?new VC(e,s):n==="not-in"?new MC(e,s):n==="array-contains-any"?new LC(e,s):new Be(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new OC(e,s):new DC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_r(n,this.value)):n!==null&&Ss(this.value)===Ss(n)&&this.matchesComparison(_r(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends ev{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Ht(e,n)}matches(e){return tv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function tv(t){return t.op==="and"}function nv(t){return CC(t)&&tv(t)}function CC(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function ou(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+yr(t.value);if(nv(t))return t.filters.map(e=>ou(e)).join(",");{const e=t.filters.map(n=>ou(n)).join(",");return`${t.op}(${e})`}}function sv(t,e){return t instanceof Be?function(s,r){return r instanceof Be&&s.op===r.op&&s.field.isEqual(r.field)&&cn(s.value,r.value)}(t,e):t instanceof Ht?function(s,r){return r instanceof Ht&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&sv(o,r.filters[a]),!0):!1}(t,e):void Z()}function rv(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${yr(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(rv).join(" ,")+"}"}(t):"Filter"}class kC extends Be{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class OC extends Be{constructor(e,n){super(e,"in",n),this.keys=iv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DC extends Be{constructor(e,n){super(e,"not-in",n),this.keys=iv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class NC extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uh(n)&&Ni(n.arrayValue,this.value)}}class VC extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ni(this.value.arrayValue,n)}}class MC extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ni(this.value.arrayValue,n)}}class LC extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ni(this.value.arrayValue,s))}}/**
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
 */class FC{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Ap(t,e=null,n=[],s=[],r=null,i=null,o=null){return new FC(t,e,n,s,r,i,o)}function Bh(t){const e=oe(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ou(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),pl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>yr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>yr(s)).join(",")),e.ce=n}return e.ce}function jh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xp(t.startAt,e.startAt)&&xp(t.endAt,e.endAt)}function au(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Dr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function $C(t,e,n,s,r,i,o,a){return new Dr(t,e,n,s,r,i,o,a)}function qh(t){return new Dr(t)}function Rp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ov(t){return t.collectionGroup!==null}function li(t){const e=oe(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new tt(Ze.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Vi(i,s))}),n.has(Ze.keyField().canonicalString())||e.le.push(new Vi(Ze.keyField(),s))}return e.le}function on(t){const e=oe(t);return e.he||(e.he=UC(e,li(t))),e.he}function UC(t,e){if(t.limitType==="F")return Ap(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Vi(r.field,i)});const n=t.endAt?new Ia(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Ia(t.startAt.position,t.startAt.inclusive):null;return Ap(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function lu(t,e){const n=t.filters.concat([e]);return new Dr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cu(t,e,n){return new Dr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ml(t,e){return jh(on(t),on(e))&&t.limitType===e.limitType}function av(t){return`${Bh(on(t))}|lt:${t.limitType}`}function qs(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>rv(r)).join(", ")}]`),pl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>yr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>yr(r)).join(",")),`Target(${s})`}(on(t))}; limitType=${t.limitType})`}function gl(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):K.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of li(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,l){const c=bp(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,li(s),r)||s.endAt&&!function(o,a,l){const c=bp(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,li(s),r))}(t,e)}function BC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lv(t){return(e,n)=>{let s=!1;for(const r of li(t)){const i=jC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function jC(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?_r(l,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
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
 */class Nr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Or(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Xy(this.inner)}size(){return this.innerSize}}/**
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
 */const qC=new Ne(K.comparator);function Tn(){return qC}const cv=new Ne(K.comparator);function Gr(...t){let e=cv;for(const n of t)e=e.insert(n.key,n);return e}function uv(t){let e=cv;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function gs(){return ci()}function hv(){return ci()}function ci(){return new Nr(t=>t.toString(),(t,e)=>t.isEqual(e))}const HC=new Ne(K.comparator),zC=new tt(K.comparator);function he(...t){let e=zC;for(const n of t)e=e.add(n);return e}const WC=new tt(_e);function KC(){return WC}/**
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
 */function dv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ta(e)?"-0":e}}function fv(t){return{integerValue:""+t}}function GC(t,e){return xC(e)?fv(e):dv(t,e)}/**
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
 */class _l{constructor(){this._=void 0}}function QC(t,e,n){return t instanceof ba?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Fh(i)&&(i=$h(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Mi?mv(t,e):t instanceof Li?gv(t,e):function(r,i){const o=pv(r,i),a=Pp(o)+Pp(r.Ie);return iu(o)&&iu(r.Ie)?fv(a):dv(r.serializer,a)}(t,e)}function YC(t,e,n){return t instanceof Mi?mv(t,e):t instanceof Li?gv(t,e):n}function pv(t,e){return t instanceof xa?function(s){return iu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class ba extends _l{}class Mi extends _l{constructor(e){super(),this.elements=e}}function mv(t,e){const n=_v(e);for(const s of t.elements)n.some(r=>cn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Li extends _l{constructor(e){super(),this.elements=e}}function gv(t,e){let n=_v(e);for(const s of t.elements)n=n.filter(r=>!cn(r,s));return{arrayValue:{values:n}}}class xa extends _l{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Pp(t){return Ue(t.integerValue||t.doubleValue)}function _v(t){return Uh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function XC(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Mi&&r instanceof Mi||s instanceof Li&&r instanceof Li?gr(s.elements,r.elements,cn):s instanceof xa&&r instanceof xa?cn(s.Ie,r.Ie):s instanceof ba&&r instanceof ba}(t.transform,e.transform)}class JC{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yl{}function yv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ev(t.key,_n.none()):new lo(t.key,t.data,_n.none());{const n=t.data,s=Ct.empty();let r=new tt(Ze.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Os(t.key,s,new $t(r.toArray()),_n.none())}}function ZC(t,e,n){t instanceof lo?function(r,i,o){const a=r.value.clone(),l=Cp(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Os?function(r,i,o){if(!Ko(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Cp(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(vv(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ui(t,e,n,s){return t instanceof lo?function(i,o,a,l){if(!Ko(i.precondition,o))return a;const c=i.value.clone(),u=kp(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Os?function(i,o,a,l){if(!Ko(i.precondition,o))return a;const c=kp(i.fieldTransforms,l,o),u=o.data;return u.setAll(vv(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return Ko(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ek(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=pv(s.transform,r||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(s.field,i))}return n||null}function Sp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&gr(s,r,(i,o)=>XC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lo extends yl{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Os extends yl{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Cp(t,e,n){const s=new Map;Pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,YC(o,a,n[r]))}return s}function kp(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,QC(i,o,e))}return s}class Ev extends yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tk extends yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nk{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ZC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ui(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ui(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=hv();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=yv(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(ne.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&gr(this.mutations,e.mutations,(n,s)=>Sp(n,s))&&gr(this.baseMutations,e.baseMutations,(n,s)=>Sp(n,s))}}class Hh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Pe(e.mutations.length===s.length);let r=function(){return HC}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Hh(e,n,s,r)}}/**
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
 */class sk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,pe;function ik(t){switch(t){default:return Z();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function wv(t){if(t===void 0)return wn("GRPC error has no .code"),x.UNKNOWN;switch(t){case $e.OK:return x.OK;case $e.CANCELLED:return x.CANCELLED;case $e.UNKNOWN:return x.UNKNOWN;case $e.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case $e.INTERNAL:return x.INTERNAL;case $e.UNAVAILABLE:return x.UNAVAILABLE;case $e.UNAUTHENTICATED:return x.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case $e.NOT_FOUND:return x.NOT_FOUND;case $e.ALREADY_EXISTS:return x.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return x.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case $e.ABORTED:return x.ABORTED;case $e.OUT_OF_RANGE:return x.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return x.UNIMPLEMENTED;case $e.DATA_LOSS:return x.DATA_LOSS;default:return Z()}}(pe=$e||($e={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ok(){return new TextEncoder}/**
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
 */const ak=new sr([4294967295,4294967295],0);function Op(t){const e=ok().encode(t),n=new uC;return n.update(e),new Uint8Array(n.digest())}function Dp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new sr([n,s],0),new sr([r,i],0)]}class zh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Qr(`Invalid padding: ${n}`);if(s<0)throw new Qr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Qr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Qr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=sr.fromNumber(this.Te)}de(e,n,s){let r=e.add(n.multiply(sr.fromNumber(s)));return r.compare(ak)===1&&(r=new sr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Op(e),[s,r]=Dp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zh(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Op(e),[s,r]=Dp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Qr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new vl(ne.min(),r,new Ne(_e),Tn(),he())}}class co{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new co(s,n,he(),he(),he())}}/**
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
 */class Go{constructor(e,n,s,r){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=r}}class Tv{constructor(e,n){this.targetId=e,this.fe=n}}class Iv{constructor(e,n,s=pt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Np{constructor(){this.ge=0,this.pe=Mp(),this.ye=pt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=he(),n=he(),s=he();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Z()}}),new co(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=Mp()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Pe(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class lk{constructor(e){this.Le=e,this.ke=new Map,this.qe=Tn(),this.Qe=Vp(),this.Ke=new Ne(_e)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,s=e.fe.count,r=this.Ye(n);if(r){const i=r.target;if(au(i))if(s===0){const o=new K(i.path);this.We(n,o,at.newNoDocument(o,ne.min()))}else Pe(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Ps(s).toUint8Array()}catch(l){if(l instanceof Jy)return mr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new zh(o,r,i)}catch(l){return mr(l instanceof Qr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),r++)}),r}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&au(a.target)){const l=new K(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,at.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let s=he();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const r=new vl(e,n,this.Ke,this.qe,s);return this.qe=Tn(),this.Qe=Vp(),this.Ke=new Ne(_e),r}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const r=this.ze(e);this.st(e,n)?r.Me(n,1):r.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Np,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new tt(_e),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Np),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Vp(){return new Ne(K.comparator)}function Mp(){return new Ne(K.comparator)}const ck={asc:"ASCENDING",desc:"DESCENDING"},uk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hk={and:"AND",or:"OR"};class dk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uu(t,e){return t.useProto3Json||pl(e)?e:{value:e}}function Aa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fk(t,e){return Aa(t,e.toTimestamp())}function an(t){return Pe(!!t),ne.fromTimestamp(function(n){const s=Qn(n);return new He(s.seconds,s.nanos)}(t))}function Wh(t,e){return function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function xv(t){const e=Oe.fromString(t);return Pe(Sv(e)),e}function hu(t,e){return Wh(t.databaseId,e.path)}function oc(t,e){const n=xv(e);if(n.get(1)!==t.databaseId.projectId)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Av(n))}function du(t,e){return Wh(t.databaseId,e)}function pk(t){const e=xv(t);return e.length===4?Oe.emptyPath():Av(e)}function fu(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Av(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lp(t,e,n){return{name:hu(t,e),fields:n.value.mapValue.fields}}function mk(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Pe(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?x.UNKNOWN:wv(c.code);return new B(u,c.message||"")}(o);n=new Iv(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=oc(t,s.document.name),i=an(s.document.updateTime),o=s.document.createTime?an(s.document.createTime):ne.min(),a=new Ct({mapValue:{fields:s.document.fields}}),l=at.newFoundDocument(r,i,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Go(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=oc(t,s.document),i=s.readTime?an(s.readTime):ne.min(),o=at.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Go([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=oc(t,s.document),i=s.removedTargetIds||[];n=new Go([],i,r,null)}else{if(!("filter"in e))return Z();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new rk(r,i),a=s.targetId;n=new Tv(a,o)}}return n}function gk(t,e){let n;if(e instanceof lo)n={update:Lp(t,e.key,e.value)};else if(e instanceof Ev)n={delete:hu(t,e.key)};else if(e instanceof Os)n={update:Lp(t,e.key,e.data),updateMask:xk(e.fieldMask)};else{if(!(e instanceof tk))return Z();n={verify:hu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof ba)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Li)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xa)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:fk(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function _k(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?an(r.updateTime):an(i);return o.isEqual(ne.min())&&(o=an(i)),new JC(o,r.transformResults||[])}(n,e))):[]}function yk(t,e){return{documents:[du(t,e.path)]}}function vk(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=du(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=du(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return Pv(Ht.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Hs(h.field),direction:Tk(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=uu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Ek(t){let e=pk(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Pe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Rv(h);return d instanceof Ht&&nv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Vi(zs(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,pl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Ia(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Ia(f,d)}(n.endAt)),$C(e,r,o,i,a,"F",l,c)}function wk(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=zs(n.unaryFilter.field);return Be.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=zs(n.unaryFilter.field);return Be.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zs(n.unaryFilter.field);return Be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zs(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Be.create(zs(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(s=>Rv(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function Tk(t){return ck[t]}function Ik(t){return uk[t]}function bk(t){return hk[t]}function Hs(t){return{fieldPath:t.canonicalString()}}function zs(t){return Ze.fromServerFormat(t.fieldPath)}function Pv(t){return t instanceof Be?function(n){if(n.op==="=="){if(Ip(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NAN"}};if(Tp(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ip(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NOT_NAN"}};if(Tp(n.value))return{unaryFilter:{field:Hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(n.field),op:Ik(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const s=n.getFilters().map(r=>Pv(r));return s.length===1?s[0]:{compositeFilter:{op:bk(n.op),filters:s}}}(t):Z()}function xk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,s,r,i=ne.min(),o=ne.min(),a=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ak{constructor(e){this.ut=e}}function Rk(t){const e=Ek({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cu(e,e.limit,"L"):e}/**
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
 */class Pk{constructor(){this.on=new Sk}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Gn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class Sk{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new tt(Oe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new tt(Oe.comparator)).toArray()}}/**
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
 */class vr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new vr(0)}static Nn(){return new vr(-1)}}/**
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
 */class Ck{constructor(){this.changes=new Nr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Ok{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&ui(s.mutation,r,$t.empty(),He.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,he()).next(()=>s))}getLocalViewOfDocuments(e,n,s=he()){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Gr();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,he()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Tn();const o=ci(),a=function(){return ci()}();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof Os)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ui(u.mutation,c,u.mutation.getFieldMask(),He.now())):o.set(c.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new kk(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ci();let r=new Ne((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||$t.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(r.get(a.batchId)||he()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=hv();u.forEach(d=>{if(!i.has(d)){const f=yv(n.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ov(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(gs());let a=-1,l=i;return o.next(c=>S.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,he())).next(u=>({batchId:a,changes:uv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let r=Gr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Gr();return this.indexManager.getCollectionParents(e,i).next(a=>S.forEach(a,l=>{const c=function(h,d){return new Dr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s,r).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,at.newInvalidDocument(u)))});let a=Gr();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&ui(u.mutation,c,$t.empty(),He.now()),gl(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class Dk{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(r){return{id:r.id,version:r.version,createTime:an(r.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(r){return{name:r.name,query:Rk(r.bundledQuery),readTime:an(r.readTime)}}(n)),S.resolve()}}/**
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
 */class Nk{constructor(){this.overlays=new Ne(K.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=gs();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.lt(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=gs(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ne((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=gs(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=gs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return S.resolve(a)}lt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.lr.get(r.largestBatchId).delete(s.key);this.lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sk(n,s));let i=this.lr.get(n);i===void 0&&(i=he(),this.lr.set(n,i)),this.lr.set(n,i.add(s.key))}}/**
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
 */class Kh{constructor(){this.hr=new tt(Ke.Pr),this.Ir=new tt(Ke.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new Ke(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new Ke(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new K(new Oe([])),s=new Ke(n,e),r=new Ke(n,e+1),i=[];return this.Ir.forEachInRange([s,r],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new K(new Oe([])),s=new Ke(n,e),r=new Ke(n,e+1);let i=he();return this.Ir.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ke{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return K.comparator(e.key,n.key)||_e(e.gr,n.gr)}static Tr(e,n){return _e(e.gr,n.gr)||K.comparator(e.key,n.key)}}/**
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
 */class Vk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new tt(Ke.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nk(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.yr=this.yr.add(new Ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Sr(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ke(n,0),r=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([s,r],o=>{const a=this.wr(o.gr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new tt(_e);return n.forEach(r=>{const i=new Ke(r,0),o=new Ke(r,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{s=s.add(a.gr)})}),S.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;K.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new K(i),0);let a=new tt(_e);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.gr)),!0)},o),S.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const r=this.wr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Pe(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return S.forEach(n.mutations,r=>{const i=new Ke(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new Ke(n,0),r=this.yr.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Mk{constructor(e){this.Cr=e,this.docs=function(){return new Ne(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let s=Tn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():at.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Tn();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||TC(wC(u),s)<=0||(r.has(u.key)||gl(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Z()}vr(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Lk(this)}getSize(e){return S.resolve(this.size)}}class Lk extends Ck{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this._r.addEntry(e,r)):this._r.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class Fk{constructor(e){this.persistence=e,this.Fr=new Nr(n=>Bh(n),jh),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Kh,this.targetCount=0,this.Nr=vr.On()}forEachTarget(e,n){return this.Fr.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new vr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
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
 */class $k{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Lh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Fk(this),this.indexManager=new Pk,this.remoteDocumentCache=function(r){return new Mk(r)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new Ak(n),this.Kr=new Dk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new Vk(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const r=new Uk(this.Lr.next());return this.referenceDelegate.$r(),s(r).next(i=>this.referenceDelegate.Ur(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Wr(e,n){return S.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class Uk extends bC{constructor(e){super(),this.currentSequenceNumber=e}}class Gh{constructor(e){this.persistence=e,this.Gr=new Kh,this.zr=null}static jr(e){return new Gh(e)}get Hr(){if(this.zr)return this.zr;throw Z()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(r=>this.Hr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,s=>{const r=K.fromPath(s);return this.Jr(e,r).next(i=>{i||n.removeEntry(r,ne.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class Qh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=r}static Qi(e,n){let s=he(),r=he();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Qh(e,n.fromCache,s,r)}}/**
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
 */class Bk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jk{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Bk;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,s,r){return s.documentReadCount<this.Ui?(Br()<=de.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(Br()<=de.DEBUG&&j("QueryEngine","Query:",qs(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Wi*r?(Br()<=de.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):S.resolve())}zi(e,n){if(Rp(n))return S.resolve(null);let s=on(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=cu(n,null,"F"),s=on(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=he(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,cu(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,s,r){return Rp(n)||r.isEqual(ne.min())?S.resolve(null):this.Gi.getDocuments(e,s).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,s,r)?S.resolve(null):(Br()<=de.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qs(n)),this.Xi(e,o,n,EC(r,-1)).next(a=>a))})}Yi(e,n){let s=new tt(lv(e));return n.forEach((r,i)=>{gl(e,i)&&(s=s.add(i))}),s}Zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,n,s){return Br()<=de.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",qs(n)),this.Gi.getDocumentsMatchingQuery(e,n,Gn.min(),s)}Xi(e,n,s,r){return this.Gi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class qk{constructor(e,n,s,r){this.persistence=e,this.es=n,this.serializer=r,this.ts=new Ne(_e),this.ns=new Nr(i=>Bh(i),jh),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ok(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function Hk(t,e,n,s){return new qk(t,e,n,s)}async function Cv(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=he();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function zk(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=S.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(l,y)).next(T=>{const E=c.docVersions.get(y);Pe(E!==null),T.version.compareTo(E)<0&&(h.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),u.addEntry(T)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=he();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function kv(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function Wk(t,e){const n=oe(t),s=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(pt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(h,f),function(T,E,b){return T.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(i,f))});let l=Tn(),c=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Kk(i,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!s.isEqual(ne.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=r,i))}function Kk(t,e,n){let s=he(),r=he();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Tn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:r}})}function Gk(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Qk(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.qr.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.qr.allocateTargetId(s).next(o=>(r=new $n(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function pu(t,e,n){const s=oe(t),r=s.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ao(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(r.target)}function Fp(t,e,n){const s=oe(t);let r=ne.min(),i=he();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=oe(l),d=h.ns.get(u);return d!==void 0?S.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(s,o,on(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?r:ne.min(),n?i:he())).next(a=>(Yk(s,BC(e),a),{documents:a,ls:i})))}function Yk(t,e,n){let s=t.rs.get(e)||ne.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.rs.set(e,s)}class $p{constructor(){this.activeTargetIds=KC()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xk{constructor(){this.eo=new $p,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new $p,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Jk{ro(e){}shutdown(){}}/**
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
 */class Up{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oo=null;function ac(){return Oo===null?Oo=function(){return 268435456+Math.round(2147483648*Math.random())}():Oo++,"0x"+Oo.toString(16)}/**
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
 */const Zk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class eO{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const it="WebChannelConnection";class tO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${r}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get yo(){return!1}wo(n,s,r,i,o){const a=ac(),l=this.So(n,s);j("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,r).then(u=>(j("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw mr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}Co(n,s,r,i,o,a){return this.wo(n,s,r,i,o)}bo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}So(n,s){const r=Zk[n];return`${this.mo}/v1/${s}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,r){const i=ac();return new Promise((o,a)=>{const l=new cC;l.setWithCredentials(!0),l.listenOnce(aC.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ic.NO_ERROR:const u=l.getResponseJson();j(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ic.TIMEOUT:j(it,`RPC '${e}' ${i} timed out`),a(new B(x.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const h=l.getStatus();if(j(it,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(E){const b=E.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(b)>=0?b:x.UNKNOWN}(f.status);a(new B(y,f.message))}else a(new B(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(x.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{j(it,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);j(it,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",c,s,15)})}vo(e,n,s){const r=ac(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iC(),a=oC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=i.join("");j(it,`Creating RPC '${e}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const y=new eO({co:E=>{f?j(it,`Not sending because RPC '${e}' stream ${r} is closed:`,E):(d||(j(it,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),j(it,`RPC '${e}' stream ${r} sending:`,E),h.send(E))},lo:()=>h.close()}),T=(E,b,R)=>{E.listen(b,C=>{try{R(C)}catch(v){setTimeout(()=>{throw v},0)}})};return T(h,So.EventType.OPEN,()=>{f||j(it,`RPC '${e}' stream ${r} transport opened.`)}),T(h,So.EventType.CLOSE,()=>{f||(f=!0,j(it,`RPC '${e}' stream ${r} transport closed`),y.Ro())}),T(h,So.EventType.ERROR,E=>{f||(f=!0,mr(it,`RPC '${e}' stream ${r} transport errored:`,E),y.Ro(new B(x.UNAVAILABLE,"The operation could not be completed")))}),T(h,So.EventType.MESSAGE,E=>{var b;if(!f){const R=E.data[0];Pe(!!R);const C=R,v=C.error||((b=C[0])===null||b===void 0?void 0:b.error);if(v){j(it,`RPC '${e}' stream ${r} received error:`,v);const N=v.status;let W=function(me){const Se=$e[me];if(Se!==void 0)return wv(Se)}(N),le=v.message;W===void 0&&(W=x.INTERNAL,le="Unknown error status: "+N+" with message "+v.message),f=!0,y.Ro(new B(W,le)),h.close()}else j(it,`RPC '${e}' stream ${r} received:`,R),y.Vo(R)}}),T(a,lC.STAT_EVENT,E=>{E.stat===gp.PROXY?j(it,`RPC '${e}' stream ${r} detected buffering proxy`):E.stat===gp.NOPROXY&&j(it,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function lc(){return typeof document<"u"?document:null}/**
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
 */function El(t){return new dk(t,!0)}/**
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
 */class Ov{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),r=Math.max(0,n-s);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class Dv{constructor(e,n,s,r,i,o,a,l){this.si=e,this.Ko=s,this.$o=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Ov(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Uo===n&&this.s_(s,r)},s=>{e(()=>{const r=new B(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(r)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(r=>{s(()=>this.o_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nO extends Dv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=mk(this.serializer,e),s=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?an(o.readTime):ne.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=fu(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=au(l)?{documents:yk(i,l)}:{query:vk(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bv(i,o.resumeToken);const c=uu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ne.min())>0){a.readTime=Aa(i,o.snapshotVersion.toTimestamp());const c=uu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=wk(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=fu(this.serializer),n.removeTarget=e,this.e_(n)}}class sO extends Dv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=_k(e.writeResults,e.commitTime),s=an(e.commitTime);return this.listener.I_(s,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=fu(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>gk(this.serializer,s))};this.e_(n)}}/**
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
 */class rO extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.wo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(x.UNKNOWN,r.toString())})}Co(e,n,s,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(x.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class iO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(wn(n),this.f_=!1):j("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class oO{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{s.enqueueAndForget(async()=>{Ds(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=oe(l);c.C_.add(4),await uo(c),c.M_.set("Unknown"),c.C_.delete(4),await wl(c)}(this))})}),this.M_=new iO(s,r)}}async function wl(t){if(Ds(t))for(const e of t.v_)await e(!0)}async function uo(t){for(const e of t.v_)await e(!1)}function Nv(t,e){const n=oe(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Jh(n)?Xh(n):Vr(n).Ho()&&Yh(n,e))}function Vv(t,e){const n=oe(t),s=Vr(n);n.D_.delete(e),s.Ho()&&Mv(n,e),n.D_.size===0&&(s.Ho()?s.Zo():Ds(n)&&n.M_.set("Unknown"))}function Yh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vr(t).u_(e)}function Mv(t,e){t.x_.Oe(e),Vr(t).c_(e)}function Xh(t){t.x_=new lk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Vr(t).start(),t.M_.g_()}function Jh(t){return Ds(t)&&!Vr(t).jo()&&t.D_.size>0}function Ds(t){return oe(t).C_.size===0}function Lv(t){t.x_=void 0}async function aO(t){t.D_.forEach((e,n)=>{Yh(t,e)})}async function lO(t,e){Lv(t),Jh(t)?(t.M_.w_(e),Xh(t)):t.M_.set("Unknown")}async function cO(t,e,n){if(t.M_.set("Online"),e instanceof Iv&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.D_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.D_.delete(a),r.x_.removeTarget(a))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ra(t,s)}else if(e instanceof Go?t.x_.$e(e):e instanceof Tv?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ne.min()))try{const s=await kv(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.D_.get(l);if(!u)return;i.D_.set(l,u.withResumeToken(pt.EMPTY_BYTE_STRING,u.snapshotVersion)),Mv(i,l);const h=new $n(u.target,l,c,u.sequenceNumber);Yh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await Ra(t,s)}}async function Ra(t,e,n){if(!ao(e))throw e;t.C_.add(1),await uo(t),t.M_.set("Offline"),n||(n=()=>kv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await wl(t)})}function Fv(t,e){return e().catch(n=>Ra(t,n,e))}async function Tl(t){const e=oe(t),n=Yn(e);let s=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;uO(e);)try{const r=await Gk(e.localStore,s);if(r===null){e.b_.length===0&&n.Zo();break}s=r.batchId,hO(e,r)}catch(r){await Ra(e,r)}$v(e)&&Uv(e)}function uO(t){return Ds(t)&&t.b_.length<10}function hO(t,e){t.b_.push(e);const n=Yn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function $v(t){return Ds(t)&&!Yn(t).jo()&&t.b_.length>0}function Uv(t){Yn(t).start()}async function dO(t){Yn(t).E_()}async function fO(t){const e=Yn(t);for(const n of t.b_)e.P_(n.mutations)}async function pO(t,e,n){const s=t.b_.shift(),r=Hh.from(s,e,n);await Fv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Tl(t)}async function mO(t,e){e&&Yn(t).h_&&await async function(s,r){if(function(o){return ik(o)&&o!==x.ABORTED}(r.code)){const i=s.b_.shift();Yn(s).Yo(),await Fv(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Tl(s)}}(t,e),$v(t)&&Uv(t)}async function Bp(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=Ds(n);n.C_.add(3),await uo(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await wl(n)}async function gO(t,e){const n=oe(t);e?(n.C_.delete(2),await wl(n)):e||(n.C_.add(2),await uo(n),n.M_.set("Unknown"))}function Vr(t){return t.O_||(t.O_=function(n,s,r){const i=oe(n);return i.A_(),new nO(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:aO.bind(null,t),Io:lO.bind(null,t),a_:cO.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Jh(t)?Xh(t):t.M_.set("Unknown")):(await t.O_.stop(),Lv(t))})),t.O_}function Yn(t){return t.N_||(t.N_=function(n,s,r){const i=oe(n);return i.A_(),new sO(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:dO.bind(null,t),Io:mO.bind(null,t),T_:fO.bind(null,t),I_:pO.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Tl(t)):(await t.N_.stop(),t.b_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class Zh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Zh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ed(t,e){if(wn("AsyncQueue",`${e}: ${t}`),ao(t))return new B(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class rr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=Gr(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new rr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new rr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class jp{constructor(){this.B_=new Ne(K.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Z():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Er{constructor(e,n,s,r,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Er(e,n,rr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ml(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class _O{constructor(){this.k_=void 0,this.listeners=[]}}class yO{constructor(){this.queries=new Nr(e=>av(e),ml),this.onlineState="Unknown",this.q_=new Set}}async function vO(t,e){const n=oe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new _O),r)try{i.k_=await n.onListen(s)}catch(o){const a=ed(o,`Initialization of query '${qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&td(n)}async function EO(t,e){const n=oe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function wO(t,e){const n=oe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(r)&&(s=!0);o.k_=r}}s&&td(n)}function TO(t,e,n){const s=oe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function td(t){t.q_.forEach(e=>{e.next()})}class IO{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Er(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class Bv{constructor(e){this.key=e}}class jv{constructor(e){this.key=e}}class bO{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=he(),this.mutatedKeys=he(),this._a=lv(e),this.aa=new rr(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new jp,r=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=gl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),T=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?y!==T&&(s.track({type:3,doc:f}),E=!0):this.ha(d,f)||(s.track({type:2,doc:f}),E=!0,(l&&this._a(f,l)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),E=!0):d&&!f&&(s.track({type:1,doc:d}),E=!0,(l||c)&&(a=!0)),E&&(f?(o=o.add(f),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{aa:o,la:s,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(f,y){const T=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return T(f)-T(y)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(s),r=r!=null&&r;const a=n&&!r?this.Ia():[],l=this.oa.size===0&&this.current&&!r?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new Er(this.query,e.aa,i,o,e.mutatedKeys,l===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new jp,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=he(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new jv(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new Bv(s))}),n}da(e){this.ia=e.ls,this.oa=he();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Er.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class xO{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class AO{constructor(e){this.key=e,this.Ra=!1}}class RO{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Nr(a=>av(a),ml),this.fa=new Map,this.ga=new Set,this.pa=new Ne(K.comparator),this.ya=new Map,this.wa=new Kh,this.Sa={},this.ba=new Map,this.Da=vr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function PO(t,e){const n=FO(t);let s,r;const i=n.ma.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Aa();else{const o=await Qk(n.localStore,on(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await SO(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Nv(n.remoteStore,o)}return r}async function SO(t,e,n,s,r){t.va=(h,d,f)=>async function(T,E,b,R){let C=E.view.ca(b);C.Zi&&(C=await Fp(T.localStore,E.query,!1).then(({documents:le})=>E.view.ca(le,C)));const v=R&&R.targetChanges.get(E.targetId),N=R&&R.targetMismatches.get(E.targetId)!=null,W=E.view.applyChanges(C,T.isPrimaryClient,v,N);return Hp(T,E.targetId,W.Ta),W.snapshot}(t,h,d,f);const i=await Fp(t.localStore,e,!0),o=new bO(e,i.ls),a=o.ca(i.documents),l=co.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);Hp(t,n,c.Ta);const u=new xO(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function CO(t,e){const n=oe(t),s=n.ma.get(e),r=n.fa.get(s.targetId);if(r.length>1)return n.fa.set(s.targetId,r.filter(i=>!ml(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await pu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Vv(n.remoteStore,s.targetId),mu(n,s.targetId)}).catch(oo)):(mu(n,s.targetId),await pu(n.localStore,s.targetId,!0))}async function kO(t,e,n){const s=$O(t);try{const r=await function(o,a){const l=oe(o),c=He.now(),u=a.reduce((f,y)=>f.add(y.key),he());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Tn(),T=he();return l.ss.getEntries(f,u).next(E=>{y=E,y.forEach((b,R)=>{R.isValidDocument()||(T=T.add(b))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(E=>{h=E;const b=[];for(const R of a){const C=ek(R,h.get(R.key).overlayedDocument);C!=null&&b.push(new Os(R.key,C,Zy(C.value.mapValue),_n.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,b,a)}).next(E=>{d=E;const b=E.applyToLocalDocumentSet(h,T);return l.documentOverlayCache.saveOverlays(f,E.batchId,b)})}).then(()=>({batchId:d.batchId,changes:uv(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new Ne(_e)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(s,r.batchId,n),await ho(s,r.changes),await Tl(s.remoteStore)}catch(r){const i=ed(r,"Failed to persist write");n.reject(i)}}async function qv(t,e){const n=oe(t);try{const s=await Wk(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ya.get(i);o&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ra=!0:r.modifiedDocuments.size>0?Pe(o.Ra):r.removedDocuments.size>0&&(Pe(o.Ra),o.Ra=!1))}),await ho(n,s,e)}catch(s){await oo(s)}}function qp(t,e,n){const s=oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=oe(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&td(l)}(s.eventManager,e),r.length&&s.Va.a_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function OO(t,e,n){const s=oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ya.get(e),i=r&&r.key;if(i){let o=new Ne(K.comparator);o=o.insert(i,at.newNoDocument(i,ne.min()));const a=he().add(i),l=new vl(ne.min(),new Map,new Ne(_e),o,a);await qv(s,l),s.pa=s.pa.remove(i),s.ya.delete(e),nd(s)}else await pu(s.localStore,e,!1).then(()=>mu(s,e,n)).catch(oo)}async function DO(t,e){const n=oe(t),s=e.batch.batchId;try{const r=await zk(n.localStore,e);zv(n,s,null),Hv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ho(n,r)}catch(r){await oo(r)}}async function NO(t,e,n){const s=oe(t);try{const r=await function(o,a){const l=oe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Pe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);zv(s,e,n),Hv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ho(s,r)}catch(r){await oo(r)}}function Hv(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function zv(t,e,n){const s=oe(t);let r=s.Sa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Sa[s.currentUser.toKey()]=r}}function mu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||Wv(t,s)})}function Wv(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Vv(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),nd(t))}function Hp(t,e,n){for(const s of n)s instanceof Bv?(t.wa.addReference(s.key,e),VO(t,s)):s instanceof jv?(j("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||Wv(t,s.key)):Z()}function VO(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(j("SyncEngine","New document in limbo: "+n),t.ga.add(s),nd(t))}function nd(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new K(Oe.fromString(e)),s=t.Da.next();t.ya.set(s,new AO(n)),t.pa=t.pa.insert(n,s),Nv(t.remoteStore,new $n(on(qh(n.path)),s,"TargetPurposeLimboResolution",Lh._e))}}async function ho(t,e,n){const s=oe(t),r=[],i=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,l)=>{o.push(s.va(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=Qh.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.Va.a_(r),await async function(l,c){const u=oe(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(c,d=>S.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>S.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ao(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),y=f.snapshotVersion,T=f.withLastLimboFreeSnapshotVersion(y);u.ts=u.ts.insert(d,T)}}}(s.localStore,i))}async function MO(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await Cv(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new B(x.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ho(n,s._s)}}function LO(t,e){const n=oe(t),s=n.ya.get(e);if(s&&s.Ra)return he().add(s.key);{let r=he();const i=n.fa.get(e);if(!i)return r;for(const o of i){const a=n.ma.get(o);r=r.unionWith(a.view.ua)}return r}}function FO(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OO.bind(null,e),e.Va.a_=wO.bind(null,e.eventManager),e.Va.Fa=TO.bind(null,e.eventManager),e}function $O(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NO.bind(null,e),e}class zp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=El(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Hk(this.persistence,new jk,e.initialUser,this.serializer)}createPersistence(e){return new $k(Gh.jr,this.serializer)}createSharedClientState(e){return new Xk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>qp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=MO.bind(null,this.syncEngine),await gO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yO}()}createDatastore(e){const n=El(e.databaseInfo.databaseId),s=function(i){return new tO(i)}(e.databaseInfo);return function(i,o,a,l){return new rO(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new oO(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>qp(this.syncEngine,n,0),function(){return Up.D()?new Up:new Jk}())}createSyncEngine(e,n){return function(r,i,o,a,l,c,u){const h=new RO(r,i,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=oe(n);j("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await uo(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class BO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class jO{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ot.UNAUTHENTICATED,this.clientId=Yy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ed(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function cc(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Cv(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HO(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Bp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Bp(e.remoteStore,i)),t._onlineComponents=e}function qO(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function HO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!qO(n))throw n;mr("Error using user provided cache. Falling back to memory cache: "+n),await cc(t,new zp)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await cc(t,new zp);return t._offlineComponents}async function Kv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Wp(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Wp(t,new UO))),t._onlineComponents}function zO(t){return Kv(t).then(e=>e.syncEngine)}async function Kp(t){const e=await Kv(t),n=e.eventManager;return n.onListen=PO.bind(null,e.syncEngine),n.onUnlisten=CO.bind(null,e.syncEngine),n}/**
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
 */function Gv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Gp=new Map;/**
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
 */function Qv(t,e,n){if(!n)throw new B(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WO(t,e,n,s){if(e===!0&&s===!0)throw new B(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qp(t){if(!K.isDocumentKey(t))throw new B(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yp(t){if(K.isDocumentKey(t))throw new B(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Il(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function hi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Il(t);throw new B(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Xp{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new B(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xp(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new hC;switch(s.type){case"firstParty":return new mC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new B(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Gp.get(n);s&&(j("ComponentProvider","Removing Datastore"),Gp.delete(n),s.terminate())}(this),Promise.resolve()}}function KO(t,e,n,s={}){var r;const i=(t=hi(t,bl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=ot.MOCK_USER;else{a=jx(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new B(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ot(c)}t._authCredentials=new dC(new Qy(a,l))}}/**
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
 */class Ns{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ns(this.firestore,e,this._query)}}class Rt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class Wn extends Ns{constructor(e,n,s){super(e,n,qh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new K(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function Pa(t,e,...n){if(t=st(t),Qv("collection","path",e),t instanceof bl){const s=Oe.fromString(e,...n);return Yp(s),new Wn(t,null,s)}{if(!(t instanceof Rt||t instanceof Wn))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return Yp(s),new Wn(t.firestore,null,s)}}function GO(t,e,...n){if(t=st(t),arguments.length===1&&(e=Yy.newId()),Qv("doc","path",e),t instanceof bl){const s=Oe.fromString(e,...n);return Qp(s),new Rt(t,null,new K(s))}{if(!(t instanceof Rt||t instanceof Wn))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return Qp(s),new Rt(t.firestore,t instanceof Wn?t.converter:null,new K(s))}}/**
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
 */class QO{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Ov(this,"async_queue_retry"),this.iu=()=>{const n=lc();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=lc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new ws;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ao(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw wn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const r=Zh.createAndSchedule(this,e,n,s,i=>this.au(i));return this.Xa.push(r),r}su(){this.eu&&Z()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Jp(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Sa extends bl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new QO}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xv(this),this._firestoreClient.terminate()}}function YO(t,e){const n=typeof t=="object"?t:u_(),s=typeof t=="string"?t:e||"(default)",r=nh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Ux("firestore");i&&KO(r,...i)}return r}function Yv(t){return t._firestoreClient||Xv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Xv(t){var e,n,s;const r=t._freezeSettings(),i=function(a,l,c,u){return new RC(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Gv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new jO(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class wr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wr(pt.fromBase64String(e))}catch(n){throw new B(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wr(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jv{constructor(e){this._methodName=e}}/**
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
 */class rd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */const XO=/^__.*__$/;class JO{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Os(e,this.data,this.fieldMask,n,this.fieldTransforms):new lo(e,this.data,n,this.fieldTransforms)}}function Zv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class id{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new id(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Au(e),r}Ru(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Pu(),r}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Ca(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Zv(this.Iu)&&XO.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class ZO{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||El(e)}pu(e,n,s,r=!1){return new id({Iu:e,methodName:n,gu:s,path:Ze.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function e0(t){const e=t._freezeSettings(),n=El(t._databaseId);return new ZO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eD(t,e,n,s,r,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,r);s0("Data must be an object, but it was:",o,s);const a=t0(s,o);let l,c;if(i.merge)l=new $t(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=nD(e,h,n);if(!o.contains(d))throw new B(x.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);rD(u,d)||u.push(d)}l=new $t(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new JO(new Ct(a),l,c)}function tD(t,e,n,s=!1){return od(n,t.pu(s?4:3,e))}function od(t,e){if(n0(t=st(t)))return s0("Unsupported field value:",e,t),t0(t,e);if(t instanceof Jv)return function(s,r){if(!Zv(r.Iu))throw r.mu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.mu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let l=od(a,r.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=st(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return GC(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=He.fromDate(s);return{timestampValue:Aa(r.serializer,i)}}if(s instanceof He){const i=new He(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Aa(r.serializer,i)}}if(s instanceof rd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wr)return{bytesValue:bv(r.serializer,s._byteString)};if(s instanceof Rt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wh(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.mu(`Unsupported field value: ${Il(s)}`)}(t,e)}function t0(t,e){const n={};return Xy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Or(t,(s,r)=>{const i=od(r,e.Eu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function n0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof rd||t instanceof wr||t instanceof Rt||t instanceof Jv)}function s0(t,e,n){if(!n0(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Il(n);throw s==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+s)}}function nD(t,e,n){if((e=st(e))instanceof sd)return e._internalPath;if(typeof e=="string")return r0(t,e);throw Ca("Field path arguments must be of type string or ",t,!1,void 0,n)}const sD=new RegExp("[~\\*/\\[\\]]");function r0(t,e,n){if(e.search(sD)>=0)throw Ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sd(...e.split("."))._internalPath}catch{throw Ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ca(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new B(x.INVALID_ARGUMENT,a+t+l)}function rD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class i0{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ad("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iD extends i0{data(){return super.data()}}function ad(t,e){return typeof e=="string"?r0(t,e):e instanceof sd?e._internalPath:e._delegate._internalPath}/**
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
 */function oD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ld{}class o0 extends ld{}function cd(t,e,...n){let s=[];e instanceof ld&&s.push(e),s=s.concat(n),function(i){const o=i.filter(l=>l instanceof hd).length,a=i.filter(l=>l instanceof ud).length;if(o>1||o>0&&a>0)throw new B(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class ud extends o0{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new ud(e,n,s)}_apply(e){const n=this._parse(e);return l0(e._query,n),new Ns(e.firestore,e.converter,lu(e._query,n))}_parse(e){const n=e0(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){em(h,u);const f=[];for(const y of h)f.push(Zp(l,i,y));d={arrayValue:{values:f}}}else d=Zp(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||em(h,u),d=tD(a,o,h,u==="in"||u==="not-in");return Be.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class hd extends ld{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hd(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const l of a)l0(o,l),o=lu(o,l)}(e._query,n),new Ns(e.firestore,e.converter,lu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dd extends o0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new dd(e,n)}_apply(e){const n=function(r,i,o){if(r.startAt!==null)throw new B(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new B(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vi(i,o)}(e._query,this._field,this._direction);return new Ns(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Dr(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function a0(t,e="asc"){const n=e,s=ad("orderBy",t);return dd._create(s,n)}function Zp(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new B(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ov(e)&&n.indexOf("/")!==-1)throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Oe.fromString(n));if(!K.isDocumentKey(s))throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return wp(t,new K(s))}if(n instanceof Rt)return wp(t,n._key);throw new B(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Il(n)}.`)}function em(t,e){if(!Array.isArray(t)||t.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function l0(t,e){const n=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class aD{convertValue(e,n="none"){switch(Ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Or(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new rd(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=$h(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Oe.fromString(e);Pe(Sv(s));const r=new Di(s.get(1),s.get(3)),i=new K(s.popFirst(5));return r.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function lD(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Yr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class c0 extends i0{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ad("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Qo extends c0{data(e={}){return super.data(e)}}class cD{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Yr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Qo(this._firestore,this._userDataWriter,s.key,s,new Yr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new Qo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Yr(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Qo(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Yr(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:uD(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}class u0 extends aD{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function hD(t,e){const n=hi(t.firestore,Sa),s=GO(t),r=lD(t.converter,e);return dD(n,[eD(e0(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,_n.exists(!1))]).then(()=>s)}function fd(t,...e){var n,s,r;t=st(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Jp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Jp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof Rt)c=hi(t.firestore,Sa),u=qh(t._key.path),l={next:h=>{e[o]&&e[o](fD(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=hi(t,Ns);c=hi(h.firestore,Sa),u=h._query;const d=new u0(c);l={next:f=>{e[o]&&e[o](new cD(c,d,h,f))},error:e[o+1],complete:e[o+2]},oD(t._query)}return function(d,f,y,T){const E=new BO(T),b=new IO(f,E,y);return d.asyncQueue.enqueueAndForget(async()=>vO(await Kp(d),b)),()=>{E.Na(),d.asyncQueue.enqueueAndForget(async()=>EO(await Kp(d),b))}}(Yv(c),u,a,l)}function dD(t,e){return function(s,r){const i=new ws;return s.asyncQueue.enqueueAndForget(async()=>kO(await zO(s),r,i)),i.promise}(Yv(t),e)}function fD(t,e,n){const s=n.docs.get(e._key),r=new u0(t);return new c0(t,r,e._key,s,new Yr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){kr=r})(Ar),dr(new Is("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new Sa(new fC(s.getProvider("auth-internal")),new _C(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(c.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),zn(_p,"4.4.0",e),zn(_p,"4.4.0","esm2017")})();const pD={apiKey:"AIzaSyAc1sTUtbtUwc72YDjdsXM4rT7Pf4VCHZo",authDomain:"recipe-page-a168a.firebaseapp.com",projectId:"recipe-page-a168a",storageBucket:"recipe-page-a168a.appspot.com",messagingSenderId:"540105599417",appId:"1:540105599417:web:68b26438060496e3412e68",measurementId:"G-G49BH7ELT1"},mD=sh(pD),ka=YO(mD),gD=m("h2",{class:"text-white text-center font-bold text-lg lg:text-xl hidden lg:block"},"Recently added",-1),_D={class:"flex justify-between text-white"},yD={class:"flex flex-col"},vD={class:"font-bold text-xl text-yellow-400"},ED={class:"text-sm font-semibold"},wD={class:"px-3 bg-gray-300 flex text-black items-center rounded-full font-bold"};let tm=[];const TD=rn();Pr(TD,t=>{if(t){let e=t.displayName;return tm.value=e,tm}});const ID={name:"app",components:{},methods:{},data:()=>({recipes:ee([])}),mounted(){const t=cd(Pa(ka,"recipees"),a0("name","desc")),e=fd(t,n=>{this.recipes=n.docs.map(s=>({id:s.id,ingredients:s.data().ingredients,instructions:s.data().instructions,name:s.data().name,created:s.data().date_created,user:s.data().username}))});Cs(e)}},bD=Object.assign(ID,{setup(t){return ee(!1),(e,n)=>{const s=In("router-link");return D(),F(be,null,[gD,(D(!0),F(be,null,We(e.recipes,r=>(D(),F("div",{class:"relative hidden lg:block",key:r.id},[q(s,{to:/dashmeals/+r.id,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ie(()=>[m("section",_D,[m("div",yD,[m("div",vD,ue(r.name),1),m("div",ED,ue(r.created),1)]),m("div",wD,ue(r.user),1)])]),_:2},1032,["to"])]))),128))],64)}}}),xD={class:"flex flex-col gap-4 sm:px-[12px] 2xl:px-[16px] pb-10"},AD={class:"flex flex-col lg:flex-row justify-between gap-3 sm:gap-8 px-3 sm:px-5 xl:px-14"},RD={class:"flex flex-col sm:w-full lg:w-[35%] gap-3 sm:gap-6"},PD={class:"flex w-full justify-between gap-1 sm:gap-4 md:gap-6"},SD=m("i",{class:"fa-solid fa-layer-group"},null,-1),CD=m("div",{class:"font-semibold"},"categories",-1),kD=[SD,CD],OD=m("i",{class:"fa-solid fa-book text-green-800"},null,-1),DD=m("div",{class:"font-semibold"},"Dashboard",-1),ND=m("i",{class:"fa-solid fa-right-from-bracket text-base"},null,-1),VD=m("div",{class:"text-base font-semibold"},"Logout",-1),MD=[ND,VD],LD=m("i",{class:"fa-solid fa-message"},null,-1),FD=m("div",{class:"text-base font-semibold"},"Recent",-1),$D=[LD,FD],UD={class:"w-full py-2 lg:hidden"},BD=m("img",{src:t_,alt:"",srcset:"",class:"absolute top-3 left-4"},null,-1),jD={class:"w-full flex flex-col gap-8"},qD={class:"hidden lg:flex justify-between gap-3 text-[14px]"},HD=m("img",{src:t_,alt:"",srcset:"",class:"absolute top-3 left-4"},null,-1),zD=m("i",{class:"fa-solid fa-book text-green-800"},null,-1),WD=m("div",{class:"font-semibold"},"Dashboard",-1),KD={class:"bg-green-300 flex items-center px-2 rounded-full font-extrabold text-[9px] lg:text-[16px] text-center"},GD=m("i",{class:"fa-solid fa-right-from-bracket text-base"},null,-1),QD=m("div",{class:"text-base"},"Logout",-1),YD=[GD,QD],XD={key:0,class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},JD=["src"],ZD={key:1},eN={__name:"home",setup(t){const e=ee(!1),n=Ju(),s=rn();let r=[];Cs(()=>{Pr(s,h=>{if(h){e.value=!0;let d=h.displayName;return r.value=d,r}else e.value=!1})});const i=()=>{dR(s).then(()=>{n.push("/")})},o=ee(""),a=ee([]),l=()=>{o.value!==""&&fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${o.value}`).then(h=>h.json()).then(h=>{a.value=h.meals?h.meals:[],o.value=""}).catch(h=>{console.error("Error fetching data:",h)})},c=ee(!1),u=ee(!0);return(h,d)=>(D(),F("main",xD,[q(CP),m("section",AD,[m("div",RD,[m("div",PD,[m("button",{onClick:d[0]||(d[0]=f=>(c.value=!0,u.value=!1)),class:"text-white bg-purple-500 p-3 rounded-2xl flex items-center justify-center gap-1 w-full",name:"Categories"},kD),q(Y(Te),{to:"/dashboard",class:"relative flex justify-center items-center bg-white rounded-full p-4 py-3 gap-2 h-12 text-[#394150] w-full lg:hidden"},{default:ie(()=>[OD,DD]),_:1}),e.value?(D(),F("button",{key:0,onClick:i,class:"bg-yellow-400 px-3 rounded-xl flex gap-2 justify-center items-center w-full lg:hidden"},MD)):Ln("",!0),m("button",{onClick:d[1]||(d[1]=f=>(u.value=!0,c.value=!1)),class:"bg-[#394150] px-3 rounded-xl hidden lg:flex gap-2 justify-center items-center w-full text-white"},$D)]),m("div",UD,[m("form",{class:"relative",onSubmit:sa(l,["prevent"]),onClick:d[3]||(d[3]=f=>h.bro==!1)},[kt(m("input",{type:"text",placeholder:"Search recipes and more...",name:"search-input",class:"border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14","onUpdate:modelValue":d[2]||(d[2]=f=>o.value=f)},null,512),[[jn,o.value]]),BD],32)]),c.value?(D(),tn(Cl,{key:0},{default:ie(()=>[q(nS)]),_:1})):Ln("",!0),u.value?(D(),tn(Cl,{key:1},{default:ie(()=>[q(bD)]),_:1})):Ln("",!0)]),m("div",jD,[m("div",qD,[m("form",{class:"relative w-[60%]",onSubmit:sa(l,["prevent"]),onClick:d[5]||(d[5]=f=>h.bro==!1)},[kt(m("input",{type:"text",placeholder:"Search recipes and more...",name:"search-input",class:"border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14","onUpdate:modelValue":d[4]||(d[4]=f=>o.value=f)},null,512),[[jn,o.value]]),HD],32),q(Y(Te),{to:"/dashboard",class:"relative flex justify-center items-center bg-white rounded-full p-8 py-3 gap-2 h-12 text-[#394150]"},{default:ie(()=>[zD,WD]),_:1}),m("div",KD,ue(Y(r).value),1),e.value?(D(),F("button",{key:0,onClick:i,class:"bg-yellow-400 px-3 rounded-xl flex gap-2 justify-center items-center"},YD)):Ln("",!0)]),a.value&&a.value.length>0?(D(),F("section",XD,[(D(!0),F(be,null,We(a.value,f=>(D(),F("div",null,[q(Y(Te),{to:/meals/+f.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:ie(()=>[m("img",{src:f.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,JD),m("div",null,ue(f.strMeal),1)]),_:2},1032,["to"])]))),256))])):(D(),F("section",ZD,[(D(),tn(Cl,null,{default:ie(()=>[q(YP)]),_:1}))]))])])]))}},xl="/assets/logo-light-NOLr421m.svg",fo="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%206L9%2012L15%2018'%20stroke='%230D101D'%20stroke-width='2'/%3e%3c/svg%3e",ss=t=>($i("data-v-76a683bd"),t=t(),Ui(),t),tN={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},nN={class:"flex flex-col gap-10"},sN={class:"px-3 flex justify-between text-[12px] md:text-base text-[#394150] w-full"},rN=ss(()=>m("img",{src:xl,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),iN=ss(()=>m("img",{src:fo,alt:"",srcset:""},null,-1)),oN=ss(()=>m("div",null,"Back to categories",-1)),aN={class:"flex flex-col gap-10 w-full sm:px-[18%] 2xl:px-[25%]"},lN=["src"],cN={class:"flex flex-col gap-4"},uN={class:"text-[30px] md:text-[45px] detailhead"},hN={class:"flex gap-4"},dN=ss(()=>m("div",null,"category:",-1)),fN={class:"font-bold"},pN=ss(()=>m("div",null,"Area:",-1)),mN={class:"font-bold"},gN={class:"ingredients flex flex-col gap-5 px-2 md:px-0"},_N=ss(()=>m("div",{class:"flex gap-4"},[m("button",{class:"bg-[#FEBD2E] p-3 py-5 rounded-full"}),m("h3",{class:"font-bold flex items-center text-[18px]"},"Ingredients")],-1)),yN={class:"list-disc px-[5%] flex flex-col gap-2 text-[18px]"},vN={class:"Instructions flex flex-col gap-5 px-2 md:px-0 pb-14"},EN=ss(()=>m("div",{class:"flex gap-4"},[m("button",{class:"bg-[#4E80EE] p-3 py-5 rounded-full"}),m("h3",{class:"font-bold flex items-center text-[18px]"},"Instructions")],-1)),wN={class:"text-[17px] instruct whitespace-pre-line"},TN=ss(()=>m("div",null,"Video",-1)),IN=["href"],bN={class:"text-[#845EEE]"},xN={key:1,class:"text-yellow-400"},AN={__name:"details",setup(t){const e=ee({}),n=Ga(),s=Le(()=>{const r=[];for(let i=1;i<=20;i++){const o=e.value.meals[0]["strIngredient"+i],a=e.value.meals[0]["strMeasure"+i];o&&o.length>1&&a&&r.push(`${a} ${o}`)}return r});return Ua(async()=>{const i=await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${n.params.id}`)).json();e.value=i}),(r,i)=>(D(),F("main",tN,[m("section",nN,[m("div",sN,[rN,q(Y(Te),{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ie(()=>[iN,oN]),_:1})]),(D(!0),F(be,null,We(e.value.meals,o=>(D(),F("div",aN,[m("img",{src:o.strMealThumb,alt:"",srcset:"",class:"rounded-lg w-full sm:h-[450px] 2xl:h-[500px]"},null,8,lN),m("div",cN,[m("h2",uN,ue(o.strMeal),1),m("div",hN,[q(Y(Te),{to:/category/+o.strCategory,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:ie(()=>[dN,m("div",fN,ue(o.strCategory),1)]),_:2},1032,["to"]),q(Y(Te),{to:/area/+o.strArea,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:ie(()=>[pN,m("div",mN,ue(o.strArea),1)]),_:2},1032,["to"])])]),m("div",gN,[_N,m("ul",yN,[(D(!0),F(be,null,We(s.value,(a,l)=>(D(),F("li",{key:l},ue(a),1))),128))])]),m("div",vN,[EN,m("p",wN,ue(o.strInstructions),1)]),m("div",null,[TN,o.strYoutube?(D(),F("a",{key:0,href:o.strYoutube,target:"_blank"},[m("div",bN,ue(o.strYoutube),1)],8,IN)):(D(),F("div",xN," Not Currently availlable!!! "))])]))),256))])]))}},RN=es(AN,[["__scopeId","data-v-76a683bd"]]),pd=t=>($i("data-v-6a00bb9f"),t=t(),Ui(),t),PN={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10 bg-[#0E1325]"},SN={class:"flex flex-col gap-10"},CN={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},kN=pd(()=>m("img",{src:xl,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),ON=pd(()=>m("img",{src:fo,alt:"",srcset:""},null,-1)),DN=pd(()=>m("div",null,"Back to categories",-1)),NN={class:"flex justify-center text-[35px] detailhead"},VN={class:"grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},MN=["src"],LN={__name:"categoryDetails",setup(t){const e=ee({}),n=Ga();return Ua(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${n.params.id}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{e.value=s.meals}).catch(s=>{console.error("Error fetching data:",s)})}),(s,r)=>{const i=In("router-link");return D(),F("main",PN,[m("section",SN,[m("div",CN,[kN,q(i,{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ie(()=>[ON,DN]),_:1})]),m("div",NN,ue(Y(n).params.id)+" meals ",1),m("section",VN,[(D(!0),F(be,null,We(e.value,o=>(D(),F("div",null,[q(i,{to:/meals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:ie(()=>[m("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,MN),m("div",null,ue(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},FN=es(LN,[["__scopeId","data-v-6a00bb9f"]]),md=t=>($i("data-v-fd5b640d"),t=t(),Ui(),t),$N={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},UN={class:"flex flex-col gap-10"},BN={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},jN=md(()=>m("img",{src:xl,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),qN=md(()=>m("img",{src:fo,alt:"",srcset:""},null,-1)),HN=md(()=>m("div",null,"Back to categories",-1)),zN={class:"flex justify-center text-[35px] detailhead"},WN={class:"grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},KN=["src"],GN={__name:"areadetails",setup(t){const e=ee({}),n=Ga();return Ua(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${n.params.id}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{e.value=s.meals}).catch(s=>{console.error("Error fetching data:",s)})}),(s,r)=>{const i=In("router-link");return D(),F("main",$N,[m("section",UN,[m("div",BN,[jN,q(i,{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ie(()=>[qN,HN]),_:1})]),m("div",zN,ue(Y(n).params.id)+" meals ",1),m("section",WN,[(D(!0),F(be,null,We(e.value,o=>(D(),F("div",null,[q(i,{to:/meals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:ie(()=>[m("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,KN),m("div",null,ue(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},QN=es(GN,[["__scopeId","data-v-fd5b640d"]]),h0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%2016H7C4.79086%2016%203%2014.2091%203%2012V12C3%209.79086%204.79086%208%207%208H10'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2012H8'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14%2016H17C19.2091%2016%2021%2014.2091%2021%2012V12C21%209.79086%2019.2091%208%2017%208H14'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",YN={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] md:pt-[15%] lg:pt-[10%] 2xl:pt-[10%] gap-4"},XN={class:"stepone w-[90%] flex flex-col gap-6 text-white"},JN={class:"flex flex-col gap-6 text-white p-[15px]",id:"register"},ZN={class:"flex justify-between"},eV=m("div",{class:"text-[24px]"},"Login",-1),tV={class:"flex flex-col justify-center items-center gap-2"},nV=m("p",{class:"text-[10px]"},"Don't have an acount?",-1),sV={class:"flex flex-col gap-2 text-[#E5E7EB]"},rV=m("label",{for:"Email",name:"Email",class:"text-[18px]"},"Email",-1),iV={class:"flex flex-col gap-2"},oV=m("label",{for:"password",name:"password",class:"text-[18px]"},"Password",-1),aV={key:0},lV={class:"guest flex gap-4 px-[15px]"},cV=m("h2",{class:"text-yellow-400 font-bold text-lg"},"Guest:",-1),uV={class:"flex flex-col"},hV={class:"flex items-center gap-2 text-[#fffefe]"},dV=m("div",null,"Email",-1),fV=m("img",{src:h0,class:"h-5 lg:h-6"},null,-1),pV=[fV],mV={class:"flex items-center gap-2 text-[#fffefe]"},gV=m("div",null,"password",-1),_V=m("img",{src:h0,class:"h-5 lg:h-6"},null,-1),yV=[_V],vV=m("div",null,"or",-1),EV={__name:"login",setup(t){const e=ee(""),n=ee(""),s=Ju(),r=ee(""),i=()=>{const h=rn();aR(h,e.value,n.value).then(d=>{console.log("successfully signed in!"),s.push("/home")}).catch(d=>{switch(console.log(d.code),d.code){case"auth/invalid-email":r.value="invalid email";break;case"auth/user-not-found":r.value="No account with that email was found";break;case"auth/wrong-password":r.value="incorrect password";break;default:r.value="Email or password was incorrect";break}})},o=()=>{const h=new Yt;H_(rn(),h).then(d=>{s.push("/home")}).catch(d=>{})};let a="testdemo@gmail.com",l="Welcome1",c=()=>{navigator.clipboard.writeText(a),alert("Email copied to clipboard")},u=()=>{navigator.clipboard.writeText(l),alert("password copied to clipboard")};return(h,d)=>(D(),F("div",YN,[m("form",{onSubmit:d[4]||(d[4]=sa((...f)=>h.login&&h.login(...f),["prevent"])),class:"bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]"},[m("div",XN,[m("div",JN,[m("div",ZN,[eV,m("div",tV,[q(Y(Te),{to:"/signup",class:"text-[20px] px-3 rounded-lg text-black duration-300 bg-white"},{default:ie(()=>[Mt("Sign Up")]),_:1}),nV])]),m("div",sV,[rV,kt(m("input",{"onUpdate:modelValue":d[0]||(d[0]=f=>e.value=f),type:"text",id:"Email",placeholder:"Email",name:"Email",class:"Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[jn,e.value]])]),m("div",iV,[oV,kt(m("input",{"onUpdate:modelValue":d[1]||(d[1]=f=>n.value=f),type:"text",placeholder:"password",id:"password",class:"password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[jn,n.value]])])]),r.value?(D(),F("p",aV,ue(r.value),1)):Ln("",!0),m("section",lV,[cV,m("div",uV,[m("div",hV,[dV,m("button",{onClick:d[2]||(d[2]=(...f)=>Y(c)&&Y(c)(...f))},pV)]),m("div",mV,[gV,m("button",{onClick:d[3]||(d[3]=(...f)=>Y(u)&&Y(u)(...f))},yV)])])]),m("div",{class:"w-full flex flex-col items-center justify-center text-white gap-3"},[m("button",{onClick:i,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Submit"),vV,m("button",{onClick:o,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Sign in with google")])])],32)]))}},wV={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[15%] 2xl:pt-[8%] gap-4"},TV={class:"stepone w-[90%] flex flex-col gap-6 text-white"},IV={class:"flex flex-col gap-6 text-white p-[15px]",id:"register"},bV={class:"flex justify-between"},xV=m("div",{class:"text-[24px]"},"Create an Account",-1),AV={class:"flex flex-col justify-center items-center gap-2"},RV=m("p",{class:"text-[10px]"},"already have an acount?",-1),PV={class:"flex flex-col gap-2 text-[#E5E7EB]"},SV=m("label",{for:"Email",class:"text-[18px]"},"Email",-1),CV={class:"flex flex-col gap-2"},kV=m("label",{for:"password",class:"text-[18px]"},"Password",-1),OV={class:"flex flex-col gap-2 text-[#E5E7EB]"},DV=m("label",{for:"username",name:"username",class:"text-[18px]"},"User name",-1),NV=m("div",null,"or",-1),VV={__name:"signup",setup(t){const e=ee(""),n=ee(""),s=Ju(),r=ee(""),i=()=>{oR(rn(),e.value,n.value).then(c=>{console.log("successfully registered!"),l(),s.push("/home")}).catch(c=>{console.log(c.code),alert(c.message)})},o=()=>{const c=new Yt;H_(rn(),c).then(u=>{l(),s.push("/home")}).catch(u=>{})},a=rn();function l(){cR(a.currentUser,{displayName:r.value}).then(()=>{}).catch(c=>{console.log("Public profile Not created")})}return(c,u)=>(D(),F("div",wV,[m("form",{onSubmit:u[3]||(u[3]=sa((...h)=>c.login&&c.login(...h),["prevent"])),class:"bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]"},[m("div",TV,[m("div",IV,[m("div",bV,[xV,m("div",AV,[q(Y(Te),{to:"/Login",class:"text-[20px] px-3 rounded-lg text-black duration-300 bg-white"},{default:ie(()=>[Mt("Sign in")]),_:1}),RV])]),m("div",PV,[SV,kt(m("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>e.value=h),type:"text",placeholder:"Email",name:"Email",class:"Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[jn,e.value]])]),m("div",CV,[kV,kt(m("input",{"onUpdate:modelValue":u[1]||(u[1]=h=>n.value=h),type:"text",placeholder:"password",name:"Password",id:"password",class:"password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[jn,n.value]])]),m("div",OV,[DV,kt(m("input",{"onUpdate:modelValue":u[2]||(u[2]=h=>r.value=h),type:"text",id:"username",placeholder:"Enter user name",name:"username",class:"border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[jn,r.value]])])]),m("div",{class:"w-full flex flex-col items-center justify-center text-white gap-3"},[m("button",{onClick:i,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Submit"),NV,m("button",{onClick:o,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Sign in with google")])])],32)]))}},MV={class:"w-full flex flex-col gap-10"},LV={class:"px-[5%] flex justify-between text-[12px] lg:text-[18px] text-[#394150] w-full py-10"},FV=m("img",{src:fo,alt:"",srcset:""},null,-1),$V=m("div",null,"Back to categories",-1),UV={class:"bg-green-300 flex items-center px-2 rounded-full font-extrabold text-[9px] lg:text-[16px] text-center"},BV=m("i",{class:"fa-regular fa-square-plus"},null,-1),jV=m("div",{class:"font-semibold"},"New Recipe",-1),qV=[BV,jV],HV=m("div",{id:"dashboard",class:"text-[24px] font-bold text-white text-center"},[m("h3",null,"Community Recipe Dashboard")],-1),zV={class:"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-[16px] text-[#E5E7EB] font-medium px-[2%] lg:px-[6%]"},WV=["src"],KV={key:1,class:"fa-solid fa-bowl-food text-[100px] sm:[120px] md:text-[125px] lg:text-[150px] flex justify-center items-center"},GV={class:"flex justify-between text-white"},QV={class:"flex flex-col"},YV={class:"font-bold text-xl text-yellow-400"},XV={class:"text-sm font-semibold"},JV={class:"px-3 bg-gray-400 flex items-center rounded-lg font-bold"},ZV={key:0,class:"overlay absolute w-full h-full bg-[#394150] z-10 flex items-center justify-center sm:px-[10%] lg:px-[20%] 2xl:px-[25%]",id:"recipes"},e2={class:"modal w-full bg-[#0E1325] rounded-xl p-[35px] relative flex flex-col gap-4"},t2=m("div",{class:"text-gray-100 flex justify-end text-xs"},"*Recommended that users complete all fields*",-1),n2={ref:"recipeName",type:"text",name:"Name",placeholder:"Enter recipe name",class:"p-3 rounded-lg"},s2={ref:"recipeIngredients",name:"measurement + ingredients",placeholder:"Measurements / Ingredients. Example: 1600g Flour, 1/2 tsp Salt ect..",class:"p-2 rounded-md border border-[#394150]"},r2={ref:"recipeInstructions",name:"note",id:"note",cols:"30",rows:"2",class:"rounded-lg p-3",placeholder:"enter instructions"};let ir=[];const d0=rn();Pr(d0,t=>{if(t){let e=t.displayName;return ir.value=e,ir}});const i2={name:"app",components:{},methods:{createRecipe:function(){hD(Pa(ka,"recipees"),{recipe_id:Math.floor(Math.random()*1e6),name:this.$refs.recipeName.value,date_created:new Date(Date.now()).toLocaleString(),Ingredients:this.$refs.recipeIngredients.value,instructions:this.$refs.recipeInstructions.value,username:ir.value})},bro:function(){this.$refs.recipeName.value="",this.$refs.recipeIngredients.value="",this.$refs.recipeInstructions.value="",alert("recipe created")},getRandomColor:function(){return"hsl("+Math.random()*360+", 100%, 75%)"}},data:()=>({recipes:ee([])}),mounted(){const t=cd(Pa(ka,"recipees"),a0("name","desc")),e=fd(t,n=>{this.recipes=n.docs.map(s=>({id:s.id,ingredients:s.data().ingredients,instructions:s.data().instructions,name:s.data().name,created:s.data().date_created,user:s.data().username}))});Cs(e)}},o2=Object.assign(i2,{setup(t){const e=ee(!1);return Cs(()=>{Pr(d0,n=>{if(n){let s=n.displayName;return ir.value=s,ir}})}),(n,s)=>{const r=In("router-link");return D(),F("section",MV,[m("header",LV,[q(r,{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ie(()=>[FV,$V]),_:1}),m("div",UV,ue(Y(ir).value),1),m("button",{class:"flex gap-2 bg-yellow-400 rounded-2xl items-center p-3 md:p-4 md:px-6",onClick:s[0]||(s[0]=i=>e.value=!0)},qV)]),HV,m("section",zV,[(D(!0),F(be,null,We(n.recipes,i=>(D(),F("div",{class:"relative",key:i.id},[q(r,{to:/dashmeals/+i.id,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ie(()=>[i.img?(D(),F("img",{key:0,src:i.img,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] md:w-[800px]",id:"your-img"},null,8,WV)):(D(),F("i",KV)),m("section",GV,[m("div",QV,[m("div",YV,ue(i.name),1),m("div",XV,ue(i.created),1)]),m("div",JV,ue(i.user),1)])]),_:2},1032,["to"])]))),128))]),e.value?(D(),F("div",ZV,[m("div",e2,[t2,m("input",n2,null,512),m("input",s2,null,512),m("textarea",r2,null,512),m("button",{class:"p-[10px 20px] text-[20px] w-full bg-green-100 border-none text-black cursor-pointer p-2 font-semibold",onClick:s[1]||(s[1]=i=>(n.createRecipe(),e.value=!1,n.bro(),n.toasts=!0))},"Create Recipe"),m("button",{class:"text-white font-semibold text-[18px]",onClick:s[2]||(s[2]=i=>e.value=!1)},"Cancel")])])):Ln("",!0)])}}}),a2={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] 2xl:pt-[10%] gap-4"},l2={class:"flex flex-col gap-2 text-[#E5E7EB]"},c2=m("label",{for:"username",name:"username",class:"text-[18px]"},"Name:",-1),u2={},h2=Object.assign(u2,{__name:"user",setup(t){const e=ee("");return(n,s)=>(D(),F("div",a2,[m("div",l2,[c2,kt(m("input",{"onUpdate:modelValue":s[0]||(s[0]=r=>e.value=r),type:"text",id:"Email",placeholder:"Enter user name",name:"username",class:"border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[jn,e.value]])])]))}}),Mr=t=>($i("data-v-97ff9b3b"),t=t(),Ui(),t),d2={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},f2={class:"flex flex-col gap-8"},p2={class:"px-3 flex justify-between text-[12px] md:text-base text-[#394150] w-full"},m2=Mr(()=>m("img",{src:xl,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),g2=Mr(()=>m("img",{src:fo,alt:"",srcset:""},null,-1)),_2=Mr(()=>m("div",null,"Back to Dashboard",-1)),y2={class:"px-[4%]"},v2={key:0,class:"flex flex-col gap-10 w-full sm:px-[18%] 2xl:px-[25%]"},E2=["src"],w2={key:1,class:"fa-solid fa-bowl-food text-[100px] sm:[120px] md:text-[125px] lg:text-[150px] flex justify-center items-center"},T2={class:"flex justify-between"},I2={class:"flex flex-col gap-4"},b2={class:"text-[30px] lg:text-[45px] detailhead"},x2={class:"flex justify-center items-center px-3 md:px-5 rounded-full bg-blue-300 text-black font-extrabold"},A2={class:"ingredients flex flex-col gap-5 px-2 md:px-0"},R2=Mr(()=>m("div",{class:"flex gap-4"},[m("button",{class:"bg-[#FEBD2E] p-3 py-5 rounded-full"}),m("h3",{class:"font-bold flex items-center text-[18px]"},"Ingredients")],-1)),P2={class:"Instructions flex flex-col gap-5 px-2 md:px-0"},S2=Mr(()=>m("div",{class:"flex gap-4"},[m("button",{class:"bg-[#4E80EE] p-3 py-5 rounded-full"}),m("h3",{class:"font-bold flex items-center text-[18px]"},"Instructions")],-1)),C2={class:"text-[17px] instruct whitespace-pre-line"},k2={class:"flex justify-between"},O2={class:"flex flex-col"},D2=Mr(()=>m("div",null,"Video",-1)),N2=["href"],V2={class:"text-[#845EEE]"},M2={key:1,class:"text-yellow-400 text-sm md:text-base"},L2={class:"flex items-center"};let nm=[];const F2=rn();Pr(F2,t=>{if(t){let e=t.displayName;return nm.value=e,nm}});const $2={name:"app",components:{},methods:{},data:()=>({recipes:ee([])}),mounted(){const t=cd(Pa(ka,"recipees")),e=fd(t,n=>{this.recipes=n.docs.map(s=>({id:s.id,ingredients:s.data().Ingredients,instructions:s.data().instructions,name:s.data().name,created:s.data().date_created,user:s.data().username}))});Cs(e)}},U2=Object.assign($2,{setup(t){const e=Ga();return(n,s)=>(D(),F("main",d2,[m("section",f2,[m("div",p2,[m2,q(Y(Te),{to:"/dashboard",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ie(()=>[g2,_2]),_:1})]),(D(!0),F(be,null,We(n.recipes,r=>(D(),F("div",y2,[r.id==Y(e).params.id?(D(),F("div",v2,[r.img?(D(),F("img",{key:0,src:r.img,alt:"meal-thumbnail",srcset:"",class:"rounded-lg w-full sm:h-[450px] 2xl:h-[500px]",id:"your-img"},null,8,E2)):(D(),F("i",w2)),m("div",T2,[m("div",I2,[m("h2",b2,ue(r.name),1)]),m("div",x2,ue(r.user),1)]),m("div",A2,[R2,m("div",null,ue(r.ingredients),1)]),m("div",P2,[S2,m("p",C2,ue(r.instructions),1)]),m("div",k2,[m("div",O2,[D2,r.strYoutube?(D(),F("a",{key:0,href:r.strYoutube,target:"_blank"},[m("div",V2,ue(r.strYoutube),1)],8,N2)):(D(),F("div",M2," Not Currently availlable!!! "))]),m("div",L2,ue(r.created),1)])])):Ln("",!0)]))),256))])]))}}),B2=es(U2,[["__scopeId","data-v-97ff9b3b"]]),j2="/assets/pizza-cC5xAPrI.svg",q2="/assets/foods-Qb57CO0j.jpg",H2="/assets/deserts-moDldMjV.png",z2="/assets/homechefs-vRxJ6rMu.png",Vs=t=>($i("data-v-f8f3227e"),t=t(),Ui(),t),W2={class:"header fixed w-full flex justify-between sm:static md:justify-around items-center py-3 md:py-6 px-[5%] overflow-x-hidden z-[999] bg-yellow-400"},K2=Vs(()=>m("div",{class:"flex justify-center items-center gap-1"},[m("i",{class:"fa-solid fa-bowl-food text-[25px] md:text-[30px] lg:text-[35px] 2xl:text-[41px] text-[#0E1325]"}),m("div",{class:"lg:text-[18px] font-bold text-[#0E1325]"},"HomeChef")],-1)),G2={class:"md:flex md:justify-center md:items-center gap-3 md:gap-5 xl:gap-10 md:text-[13px] lg:text-[15px] 2xl:text-[19px] hidden font-medium"},Q2={class:"flex items-center gap-5"},Y2={key:0,class:"overlay-1 duration-500 fixed w-full h-full top-14 flex flex-col gap-4 z-[999] text-black bg-gray-100 overflow-hidden"},X2={class:"flex flex-col gap-8 text-lg py-2 px-[10%] font-medium"},J2=Vs(()=>m("div",{class:"flex gap-2"},[m("h2",null,"Discover")],-1)),Z2=Vs(()=>m("div",{class:"flex gap-2"},[m("h2",null,"Safety")],-1)),eM=Vs(()=>m("i",{class:"fa-solid fa-chevron-right"},null,-1)),tM=Vs(()=>m("div",{class:"flex gap-2"},[m("h2",null,"Support")],-1)),nM=Vs(()=>m("div",{class:"flex gap-2"},[m("h2",null,"Blog")],-1)),sM=Vs(()=>m("div",{class:"flex gap-2"},[m("h2",null,"Careers")],-1)),rM={__name:"header1",setup(t){const e=ee(!1),n=ee(!1);return(s,r)=>(D(),F(be,null,[m("header",W2,[K2,m("div",G2,[q(Y(Te),{to:"/discover",class:"hover:underline underline-offset-4"},{default:ie(()=>[Mt(" Discover ")]),_:1}),q(Y(Te),{to:"/Safety",class:"hover:underline underline-offset-4"},{default:ie(()=>[Mt(" Safety ")]),_:1}),q(Y(Te),{to:"/Support",class:"hover:underline underline-offset-4"},{default:ie(()=>[Mt(" Support ")]),_:1}),q(Y(Te),{to:"/Blog",class:"hover:underline underline-offset-4"},{default:ie(()=>[Mt(" Blog ")]),_:1}),q(Y(Te),{to:"/Careers",class:"hover:underline underline-offset-4"},{default:ie(()=>[Mt(" Careers ")]),_:1})]),m("div",Q2,[q(Y(Te),{to:"/Login",class:"p-2 lg:px-3 rounded-full text-[13px] md:text-[14px] 2xl:text-[17px] font-semibold bg-[#0E1325] text-white hover:drop-shadow-xl duration-200"},{default:ie(()=>[Mt(" Open HomeChef ")]),_:1}),m("button",{onClick:r[0]||(r[0]=i=>(n.value=!n.value,e.value=!e.value)),class:"text-black flex flex-col pt-1 gap-2 md:hidden nav-open-btn"},[m("span",{class:Qs(["line duration-500 w-[42px] h-[2px] bg-black",{openBtn1:n.value}])},null,2),m("span",{class:Qs(["line duration-500 w-[42px] h-[2px] bg-black",{openBtn2:n.value}])},null,2),m("span",{class:Qs(["line duration-500 w-[42px] h-[2px] bg-black",{openBtn3:n.value}])},null,2)])])]),e.value?(D(),F("div",Y2,[m("div",X2,[q(Y(Te),{to:"/discover",class:"flex justify-between px-[2%]"},{default:ie(()=>[J2]),_:1}),q(Y(Te),{to:"/Safety",class:"flex justify-between px-[2%] items-center"},{default:ie(()=>[Z2,eM]),_:1}),q(Y(Te),{to:"/Support",class:"flex justify-between px-[2%]"},{default:ie(()=>[tM]),_:1}),q(Y(Te),{to:"/Blog",class:"flex justify-between px-[2%]"},{default:ie(()=>[nM]),_:1}),q(Y(Te),{to:"/Careers",class:"flex justify-between px-[2%]"},{default:ie(()=>[sM]),_:1})])])):Ln("",!0)],64))}},f0=es(rM,[["__scopeId","data-v-f8f3227e"]]),iM={},oM={class:"flex flex-col md:flex-row items-center gap-3 bg-black text-center px-[4%] xl:px-[10%] py-6"},aM=Bi('<div class="flex flex-col gap-2 text-gray-400"><h2 class="text-white text-2xl font-bold">HomeChef</h2><h3 class="text-xs md:text-sm text-left">Craft an exclusive space where culinary enthusiasts converge - our platform organizes kitchen discussions into specialized channels, allowing you to collaborate on recipes, share kitchen triumphs, and engage in delightful conversations without cluttering your culinary community. </h3><div class="text-xs md:text-sm"> Copyright 2024. All Rights Reserved </div></div><div class="flex flex-col md:gap-10 gap-3"><div class="flex justify-center gap-6 md:gap-10 font-semibold text-gray-300 items-center text-[15px]"><div class="duration-500 hover:text-yellow-400"><a href="">Discover</a></div><div class="duration-500 hover:text-yellow-400"><a href="">Safety</a></div><div class="duration-500 hover:text-yellow-400"><a href="">Support</a></div><div class="duration-500 hover:text-yellow-400"><a href="">Blog</a></div><div class="duration-500 hover:text-yellow-400"><a href="">Careers</a></div></div><div class="flex flex-row gap-3 text-white mx-auto items-center text-lg"><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-twitter"></i></div></div>',2),lM=[aM];function cM(t,e){return D(),F("footer",oM,lM)}const uM=es(iM,[["render",cM]]),hM={class:"bg-white"},dM={class:"bg-yellow-400 xl:pb-10"},fM={class:"sm:p-[1px] w-full flex flex-col gap-10 2xl:py-12 pt-12"},pM={class:"flex flex-col text-lg py-8 md:py-6 gap-3 md:gap-6 2xl:gap-10"},mM=m("div",{class:"flex justify-center flex-col gap-5 lg:gap-10 grill-sec lg:bg-grill-cooking bg-no-repeat bg-[90%]"},[m("h1",{class:"text-[33px] sm:text-[37px] lg:text-[38px] 2xl:text-[47px] font-bold text-center imagine"},"Imagine a place..."),m("p",{class:"px-[5%] lg:px-[25%] text-[15px] md:text-[16px] lg:text-[17px] 2xl:text-[21px]"},'...where you can explore culinary creativity, connect with fellow home chefs, or join a global community passionate about the art of home cooking. A place that makes it effortless to share recipes, exchange tips, and savor the joy of cooking together, transforming your kitchen into a hub of delicious possibilities." ')],-1),gM={class:"flex flex-col sm:flex-row justify-center gap-3 lg:gap-10 px-[8%] md:px-0"},_M=m("button",{class:"flex justify-center items-center gap-2 bg-[#0E1325] py-3 px-5 text-white rounded-full hover:drop-shadow-lg duration-200 text-[16px] md:text-base 2xl:text-[19px]"},[m("i",{class:"fa-solid fa-download"}),m("div",null,"Download For IOS")],-1),yM={class:"flex flex-col text-[25px] text-center md:text-left"},vM={class:"target bg-gray-100 flex flex-col md:flex-row items-center px-[2%] md:px-[8%] 2xl:px-[15%] justify-between gap-6 md:gap-10 2xl:gap-16 duration-500 py-10 2xl:py-16",initial:{opacity:0},visible:{opacity:1,animationDuration:2}},EM=Bi('<div class="w-[40%] xl:w-full"><img src="'+j2+'" alt="" srcset="" class="xl:w-[80%] rounded-full"></div><div class="w-full flex flex-col gap-3 md:gap-5"><h3 class="font-bold text-[26px] 2xl:text-[34px] imagine">Craft an exclusive space where culinary enthusiasts converge</h3><p class="text-[20px] 2xl:text-[24px]">- our platform organizes kitchen discussions into specialized channels, allowing you to collaborate on recipes, share kitchen triumphs, and engage in delightful conversations without cluttering your culinary community.</p></div>',2),wM=[EM],TM={class:"target bg-gray-200 flex flex-col-reverse md:flex-row items-center px-[2%] md:px-[8%] 2xl:px-[15%] justify-between gap-6 md:gap-10 2xl:gap-16 duration-500 py-10 2xl:py-12",initial:{opacity:0},visible:{opacity:1,animationDuration:2}},IM=Bi('<div class="w-full flex flex-col gap-3 md:gap-5"><h3 class="font-bold 2xl:text-[34px] imagine">Where choosing your favorite food categories is easy</h3><p class="text-[20px] 2xl:text-[24px]">Click away to our multiple food categories options when free. Experiment and improve your food pallete with our large quatity of delicious meals. </p></div><div class="w-[40%] xl:w-full"><img src="'+q2+'" alt="" srcset="" class="xl:w-[80%] rounded-full"></div>',2),bM=[IM],xM={class:"target bg-gray-100 flex flex-col md:flex-row items-center px-[2%] md:px-[8%] 2xl:px-[20%] justify-between gap-6 md:gap-10 2xl:gap-8 duration-900 py-10 2xl:py-20",initial:{opacity:0},visible:{opacity:1,animationDuration:2}},AM=Bi('<div class="w-[75%] sm:w-[50%] xl:w-full"><img src="'+H2+'" alt="" srcset="" class="xl:w-[80%] rounded-lg"></div><div class="w-full flex flex-col gap-3 md:gap-5"><h3 class="font-bold 2xl:text-[34px] imagine">From your mind to multiple plates</h3><p class="text-[20px] 2xl:text-[24px]">Find, create and share any meal you desire. Explore culinary creativity, connect with fellow home chefs, or join a global community passionate about the art of home cooking.</p></div>',2),RM=[AM],PM={class:"target bg-gray-200 flex flex-col text-center items-center px-[2%] 2xl:px-[16%] justify-center gap-6 md:gap-10 2xl:gap-12 duration-900 py-10 2xl:py-12",initial:{opacity:0},visible:{opacity:1,animationDuration:2}},SM=Bi('<div class="w-full flex flex-col gap-3 md:gap-4"><h3 class="font-bold 2xl:text-[40px] ending">Reliable and delicious food recipes</h3><p class="text-[20px] 2xl:text-[22px]">Embark on a culinary journey with our HomeChef recipe website, where we curate a world of flavors at your fingertips. From mouthwatering recipes to expert tips, we&#39;re your go-to destination for elevating home cooking to an art form.</p></div><div class="w-[95%] sm:w-[40%] xl:w-full"><img src="'+z2+'" alt="" srcset="" class="xl:w-full rounded-md xl:px-[20%]"></div><div class="flex flex-col gap-2"><h4 class="text-[30px]">Ready to start your journey?</h4><button class="flex justify-center items-center gap-2 bg-[#0E1325] py-3 px-5 text-white rounded-full hover:drop-shadow-lg duration-200 text-[16px] md:text-base 2xl:text-[19px]"><i class="fa-solid fa-download"></i><div>Open HomeChef in your browser</div></button></div>',3),CM=[SM],kM={__name:"HomeView",setup(t){return(e,n)=>{const s=In("router-link"),r=pE("motion");return D(),F("main",hM,[m("section",dM,[q(f0),m("div",fM,[m("section",pM,[mM,m("div",gM,[_M,q(s,{to:"/Login",class:"flex justify-center items-center gap-2 bg-gray-200 py-3 px-5 text-black font-semibold rounded-full hover:drop-shadow-lg duration-200 text-[16px] md:text-base 2xl:text-[19px]"},{default:ie(()=>[Mt("Open HomeChef in your browser")]),_:1})])])])]),m("div",yM,[kt((D(),F("div",vM,wM)),[[r]]),kt((D(),F("div",TM,bM)),[[r]]),kt((D(),F("div",xM,RM)),[[r]]),kt((D(),F("div",PM,CM)),[[r]])]),q(uM)])}}},OM={class:"flex flex-col overflow-hidden"},DM={class:"flex flex-col gap-10 justify-center items-center text-white pt-28 text-[18px]"},NM=m("div",null," No Availlable Info for this section currently. ",-1),po={__name:"headSection",setup(t){return(e,n)=>{const s=In("RouterLink");return D(),F("main",OM,[q(f0),m("section",DM,[NM,q(s,{to:"/",class:"flex justify-between p-2 bg-gray-500 rounded-md"},{default:ie(()=>[Mt(" Go back ")]),_:1})])])}}},VM={__name:"Discover",setup(t){return(e,n)=>(D(),tn(po))}},MM={__name:"Careers",setup(t){return(e,n)=>(D(),tn(po))}},LM={__name:"Blog",setup(t){return(e,n)=>(D(),tn(po))}},FM={__name:"Safety",setup(t){return(e,n)=>(D(),tn(po))}},$M={__name:"Support",setup(t){return(e,n)=>(D(),tn(po))}},p0=kx({history:Gb("/"),routes:[{path:"/home",name:"home",component:eN,meta:{requiresAuth:!0}},{path:"/meals/:id",name:"meal Details",component:RN},{path:"/discover",name:"Discover",component:VM},{path:"/blog",name:"blog",component:LM},{path:"/careers",name:"careers",component:MM},{path:"/support",name:"Support",component:$M},{path:"/safety",name:"safety",component:FM},{path:"/category/:id",name:"category Details",component:FN},{path:"/area/:id",name:"area Details",component:QN},{path:"/Login",name:"loggedin",component:EV},{path:"/",name:"Homeview",component:kM},{path:"/signup",name:"signUp",component:VV},{path:"/dashboard",name:"Dashboard",component:o2},{path:"/dashmeals/:id",name:"Dashboard meals details",component:B2},{path:"/user",name:"userName",component:h2}]}),UM=()=>new Promise((t,e)=>{const n=Pr(rn(),s=>{n(),t(s)},e)});p0.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?await UM()?n():(alert("You dont have access"),n("/")):n()});const BM={};function jM(t,e){const n=In("RouterView");return D(),tn(n)}const qM=es(BM,[["render",jM]]),HM={apiKey:"AIzaSyAc1sTUtbtUwc72YDjdsXM4rT7Pf4VCHZo",authDomain:"recipe-page-a168a.firebaseapp.com",projectId:"recipe-page-a168a",storageBucket:"recipe-page-a168a.appspot.com",messagingSenderId:"540105599417",appId:"1:540105599417:web:68b26438060496e3412e68",measurementId:"G-G49BH7ELT1"};sh(HM);const gd=Mw(qM);gd.use(p0);gd.use(Cb);gd.mount("#app");
