(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Hr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ae={},Zt=[],Ze=()=>{},lc=()=>!1,Ms=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vr=t=>t.startsWith("onUpdate:"),Ee=Object.assign,Wr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cc=Object.prototype.hasOwnProperty,J=(t,e)=>cc.call(t,e),H=Array.isArray,en=t=>Ns(t)==="[object Map]",ia=t=>Ns(t)==="[object Set]",W=t=>typeof t=="function",ve=t=>typeof t=="string",mn=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",oa=t=>(ue(t)||W(t))&&W(t.then)&&W(t.catch),aa=Object.prototype.toString,Ns=t=>aa.call(t),uc=t=>Ns(t).slice(8,-1),la=t=>Ns(t)==="[object Object]",Kr=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ls=Hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ds=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dc=/-(\w)/g,nt=Ds(t=>t.replace(dc,(e,n)=>n?n.toUpperCase():"")),fc=/\B([A-Z])/g,_n=Ds(t=>t.replace(fc,"-$1").toLowerCase()),Ls=Ds(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qs=Ds(t=>t?`on${Ls(t)}`:""),Vt=(t,e)=>!Object.is(t,e),cs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},mr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},hc=t=>{const e=ve(t)?Number(t):NaN;return isNaN(e)?t:e};let Di;const _r=()=>Di||(Di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ve(s)?_c(s):zr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ve(t)||ue(t))return t}const pc=/;(?![^(]*\))/g,gc=/:([^]+)/,mc=/\/\*[^]*?\*\//g;function _c(t){const e={};return t.replace(mc,"").split(pc).forEach(n=>{if(n){const s=n.split(gc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function qr(t){let e="";if(ve(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=qr(t[n]);s&&(e+=s+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bc=Hr(vc);function ca(t){return!!t||t===""}const k=t=>ve(t)?t:t==null?"":H(t)||ue(t)&&(t.toString===aa||!W(t.toString))?JSON.stringify(t,ua,2):String(t),ua=(t,e)=>e&&e.__v_isRef?ua(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Zs(s,i)+" =>"]=r,n),{})}:ia(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Zs(n))}:mn(e)?Zs(e):ue(e)&&!H(e)&&!la(e)?String(e):e,Zs=(t,e="")=>{var n;return mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Fe;class yc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!e&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function wc(t,e=Fe){e&&e.active&&e.effects.push(t)}function Ec(){return Fe}const Gr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},da=t=>(t.w&Rt)>0,fa=t=>(t.n&Rt)>0,Ic=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rt},Tc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];da(r)&&!fa(r)?r.delete(t):e[n++]=r,r.w&=~Rt,r.n&=~Rt}e.length=n}},vr=new WeakMap;let In=0,Rt=1;const br=30;let He;const Ft=Symbol(""),yr=Symbol("");class Jr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wc(this,s)}run(){if(!this.active)return this.fn();let e=He,n=It;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=He,He=this,It=!0,Rt=1<<++In,In<=br?Ic(this):Li(this),this.fn()}finally{In<=br&&Tc(this),Rt=1<<--In,He=this.parent,It=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(Li(this),this.onStop&&this.onStop(),this.active=!1)}}function Li(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let It=!0;const ha=[];function vn(){ha.push(It),It=!1}function bn(){const t=ha.pop();It=t===void 0?!0:t}function ke(t,e,n){if(It&&He){let s=vr.get(t);s||vr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Gr()),pa(r)}}function pa(t,e){let n=!1;In<=br?fa(t)||(t.n|=Rt,n=!da(t)):n=!t.has(He),n&&(t.add(He),He.deps.push(t))}function lt(t,e,n,s,r,i){const o=vr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&H(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||!mn(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":H(t)?Kr(n)&&l.push(o.get("length")):(l.push(o.get(Ft)),en(t)&&l.push(o.get(yr)));break;case"delete":H(t)||(l.push(o.get(Ft)),en(t)&&l.push(o.get(yr)));break;case"set":en(t)&&l.push(o.get(Ft));break}if(l.length===1)l[0]&&wr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);wr(Gr(a))}}function wr(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&Ui(s);for(const s of n)s.computed||Ui(s)}function Ui(t,e){(t!==He||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const xc=Hr("__proto__,__v_isRef,__isVue"),ga=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mn)),$i=Cc();function Cc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=X(this);for(let i=0,o=this.length;i<o;i++)ke(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(X)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){vn();const s=X(this)[e].apply(this,n);return bn(),s}}),t}function Rc(t){const e=X(this);return ke(e,"has",t),e.hasOwnProperty(t)}class ma{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Fc:ya:i?ba:va).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!r){if(o&&J($i,n))return Reflect.get($i,n,s);if(n==="hasOwnProperty")return Rc}const l=Reflect.get(e,n,s);return(mn(n)?ga.has(n):xc(n))||(r||ke(e,"get",n),i)?l:Ce(l)?o&&Kr(n)?l:l.value:ue(l)?r?Ea(l):$s(l):l}}class _a extends ma{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(ln(i)&&Ce(i)&&!Ce(s))return!1;if(!this._shallow&&(!bs(s)&&!ln(s)&&(i=X(i),s=X(s)),!H(e)&&Ce(i)&&!Ce(s)))return i.value=s,!0;const o=H(e)&&Kr(n)?Number(n)<e.length:J(e,n),l=Reflect.set(e,n,s,r);return e===X(r)&&(o?Vt(s,i)&&lt(e,"set",n,s):lt(e,"add",n,s)),l}deleteProperty(e,n){const s=J(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&lt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!mn(n)||!ga.has(n))&&ke(e,"has",n),s}ownKeys(e){return ke(e,"iterate",H(e)?"length":Ft),Reflect.ownKeys(e)}}class Sc extends ma{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ac=new _a,Pc=new Sc,Oc=new _a(!0),Yr=t=>t,Us=t=>Reflect.getPrototypeOf(t);function ts(t,e,n=!1,s=!1){t=t.__v_raw;const r=X(t),i=X(e);n||(Vt(e,i)&&ke(r,"get",e),ke(r,"get",i));const{has:o}=Us(r),l=s?Yr:n?Zr:kn;if(o.call(r,e))return l(t.get(e));if(o.call(r,i))return l(t.get(i));t!==r&&t.get(e)}function ns(t,e=!1){const n=this.__v_raw,s=X(n),r=X(t);return e||(Vt(t,r)&&ke(s,"has",t),ke(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ss(t,e=!1){return t=t.__v_raw,!e&&ke(X(t),"iterate",Ft),Reflect.get(t,"size",t)}function Bi(t){t=X(t);const e=X(this);return Us(e).has.call(e,t)||(e.add(t),lt(e,"add",t,t)),this}function Fi(t,e){e=X(e);const n=X(this),{has:s,get:r}=Us(n);let i=s.call(n,t);i||(t=X(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Vt(e,o)&&lt(n,"set",t,e):lt(n,"add",t,e),this}function ji(t){const e=X(this),{has:n,get:s}=Us(e);let r=n.call(e,t);r||(t=X(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&lt(e,"delete",t,void 0),i}function Hi(){const t=X(this),e=t.size!==0,n=t.clear();return e&&lt(t,"clear",void 0,void 0),n}function rs(t,e){return function(s,r){const i=this,o=i.__v_raw,l=X(o),a=e?Yr:t?Zr:kn;return!t&&ke(l,"iterate",Ft),o.forEach((c,u)=>s.call(r,a(c),a(u),i))}}function is(t,e,n){return function(...s){const r=this.__v_raw,i=X(r),o=en(i),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=r[t](...s),u=n?Yr:e?Zr:kn;return!e&&ke(i,"iterate",a?yr:Ft),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:l?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function kc(){const t={get(i){return ts(this,i)},get size(){return ss(this)},has:ns,add:Bi,set:Fi,delete:ji,clear:Hi,forEach:rs(!1,!1)},e={get(i){return ts(this,i,!1,!0)},get size(){return ss(this)},has:ns,add:Bi,set:Fi,delete:ji,clear:Hi,forEach:rs(!1,!0)},n={get(i){return ts(this,i,!0)},get size(){return ss(this,!0)},has(i){return ns.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:rs(!0,!1)},s={get(i){return ts(this,i,!0,!0)},get size(){return ss(this,!0)},has(i){return ns.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:rs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=is(i,!1,!1),n[i]=is(i,!0,!1),e[i]=is(i,!1,!0),s[i]=is(i,!0,!0)}),[t,n,e,s]}const[Mc,Nc,Dc,Lc]=kc();function Xr(t,e){const n=e?t?Lc:Dc:t?Nc:Mc;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(J(n,r)&&r in s?n:s,r,i)}const Uc={get:Xr(!1,!1)},$c={get:Xr(!1,!0)},Bc={get:Xr(!0,!1)},va=new WeakMap,ba=new WeakMap,ya=new WeakMap,Fc=new WeakMap;function jc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hc(t){return t.__v_skip||!Object.isExtensible(t)?0:jc(uc(t))}function $s(t){return ln(t)?t:Qr(t,!1,Ac,Uc,va)}function wa(t){return Qr(t,!1,Oc,$c,ba)}function Ea(t){return Qr(t,!0,Pc,Bc,ya)}function Qr(t,e,n,s,r){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Hc(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function tn(t){return ln(t)?tn(t.__v_raw):!!(t&&t.__v_isReactive)}function ln(t){return!!(t&&t.__v_isReadonly)}function bs(t){return!!(t&&t.__v_isShallow)}function Ia(t){return tn(t)||ln(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Ta(t){return vs(t,"__v_skip",!0),t}const kn=t=>ue(t)?$s(t):t,Zr=t=>ue(t)?Ea(t):t;function xa(t){It&&He&&(t=X(t),pa(t.dep||(t.dep=Gr())))}function Ca(t,e){t=X(t);const n=t.dep;n&&wr(n)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function pe(t){return Ra(t,!1)}function Vc(t){return Ra(t,!0)}function Ra(t,e){return Ce(t)?t:new Wc(t,e)}class Wc{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:kn(e)}get value(){return xa(this),this._value}set value(e){const n=this.__v_isShallow||bs(e)||ln(e);e=n?e:X(e),Vt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:kn(e),Ca(this))}}function le(t){return Ce(t)?t.value:t}const Kc={get:(t,e,n)=>le(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ce(r)&&!Ce(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Sa(t){return tn(t)?t:new Proxy(t,Kc)}class zc{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Jr(e,()=>{this._dirty||(this._dirty=!0,Ca(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=X(this);return xa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qc(t,e,n=!1){let s,r;const i=W(t);return i?(s=t,r=Ze):(s=t.get,r=t.set),new zc(s,r,i||!r,n)}function Tt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Kn(i,e,n)}return r}function We(t,e,n,s){if(W(t)){const i=Tt(t,e,n,s);return i&&oa(i)&&i.catch(o=>{Kn(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(We(t[i],e,n,s));return r}function Kn(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){Tt(a,null,10,[t,o,l]);return}}Gc(t,n,r,s)}function Gc(t,e,n,s=!0){console.error(t)}let Mn=!1,Er=!1;const xe=[];let Xe=0;const nn=[];let it=null,Lt=0;const Aa=Promise.resolve();let ei=null;function Pa(t){const e=ei||Aa;return t?e.then(this?t.bind(this):t):e}function Jc(t){let e=Xe+1,n=xe.length;for(;e<n;){const s=e+n>>>1,r=xe[s],i=Nn(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function ti(t){(!xe.length||!xe.includes(t,Mn&&t.allowRecurse?Xe+1:Xe))&&(t.id==null?xe.push(t):xe.splice(Jc(t.id),0,t),Oa())}function Oa(){!Mn&&!Er&&(Er=!0,ei=Aa.then(Ma))}function Yc(t){const e=xe.indexOf(t);e>Xe&&xe.splice(e,1)}function Ir(t){H(t)?nn.push(...t):(!it||!it.includes(t,t.allowRecurse?Lt+1:Lt))&&nn.push(t),Oa()}function Vi(t,e,n=Mn?Xe+1:0){for(;n<xe.length;n++){const s=xe[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;xe.splice(n,1),n--,s()}}}function ka(t){if(nn.length){const e=[...new Set(nn)];if(nn.length=0,it){it.push(...e);return}for(it=e,it.sort((n,s)=>Nn(n)-Nn(s)),Lt=0;Lt<it.length;Lt++)it[Lt]();it=null,Lt=0}}const Nn=t=>t.id==null?1/0:t.id,Xc=(t,e)=>{const n=Nn(t)-Nn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ma(t){Er=!1,Mn=!0,xe.sort(Xc);try{for(Xe=0;Xe<xe.length;Xe++){const e=xe[Xe];e&&e.active!==!1&&Tt(e,null,14)}}finally{Xe=0,xe.length=0,ka(),Mn=!1,ei=null,(xe.length||nn.length)&&Ma()}}function Qc(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||ae;p&&(r=n.map(v=>ve(v)?v.trim():v)),f&&(r=n.map(mr))}let l,a=s[l=Qs(e)]||s[l=Qs(nt(e))];!a&&i&&(a=s[l=Qs(_n(e))]),a&&We(a,t,6,r);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,We(c,t,6,r)}}function Na(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!W(t)){const a=c=>{const u=Na(c,e,!0);u&&(l=!0,Ee(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!l?(ue(t)&&s.set(t,null),null):(H(i)?i.forEach(a=>o[a]=null):Ee(o,i),ue(t)&&s.set(t,o),o)}function Bs(t,e){return!t||!Ms(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,_n(e))||J(t,e))}let Le=null,Fs=null;function ys(t){const e=Le;return Le=t,Fs=t&&t.type.__scopeId||null,e}function ni(t){Fs=t}function si(){Fs=null}function ce(t,e=Le,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&no(-1);const i=ys(e);let o;try{o=t(...r)}finally{ys(i),s._d&&no(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function er(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:f,data:p,setupState:v,ctx:x,inheritAttrs:P}=t;let F,L;const N=ys(t);try{if(n.shapeFlag&4){const I=r||s,j=I;F=je(u.call(j,I,f,i,v,p,x)),L=a}else{const I=e;F=je(I.length>1?I(i,{attrs:a,slots:l,emit:c}):I(i,null)),L=e.props?a:eu(a)}}catch(I){Sn.length=0,Kn(I,t,1),F=q(ct)}let z=F;if(L&&P!==!1){const I=Object.keys(L),{shapeFlag:j}=z;I.length&&j&7&&(o&&I.some(Vr)&&(L=tu(L,o)),z=un(z,L))}return n.dirs&&(z=un(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),F=z,ys(N),F}function Zc(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Ts(s)){if(s.type!==ct||s.children==="v-if"){if(e)return;e=s}}else return}return e}const eu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ms(n))&&((e||(e={}))[n]=t[n]);return e},tu=(t,e)=>{const n={};for(const s in t)(!Vr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function nu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:a}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Wi(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Bs(c,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Wi(s,o,c):!0:!!o;return!1}function Wi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Bs(n,i))return!0}return!1}function ri({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Da="components";function js(t,e){return ru(Da,t,!0,e)||t}const su=Symbol.for("v-ndc");function ru(t,e,n=!0,s=!1){const r=Le||we;if(r){const i=r.type;if(t===Da){const l=Qu(i,!1);if(l&&(l===e||l===nt(e)||l===Ls(nt(e))))return i}const o=Ki(r[t]||i[t],e)||Ki(r.appContext[t],e);return!o&&s?i:o}}function Ki(t,e){return t&&(t[e]||t[nt(e)]||t[Ls(nt(e))])}const iu=t=>t.__isSuspense,ou={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,l,a,c){t==null?au(e,n,s,r,i,o,l,a,c):lu(t,e,n,s,r,o,l,a,c)},hydrate:cu,create:ii,normalize:uu},zi=ou;function Dn(t,e){const n=t.props&&t.props[e];W(n)&&n()}function au(t,e,n,s,r,i,o,l,a){const{p:c,o:{createElement:u}}=a,f=u("div"),p=t.suspense=ii(t,r,s,e,f,n,i,o,l,a);c(null,p.pendingBranch=t.ssContent,f,null,s,p,i,o),p.deps>0?(Dn(t,"onPending"),Dn(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,i,o),sn(p,t.ssFallback)):p.resolve(!1,!0)}function lu(t,e,n,s,r,i,o,l,{p:a,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,v=e.ssFallback,{activeBranch:x,pendingBranch:P,isInFallback:F,isHydrating:L}=f;if(P)f.pendingBranch=p,bt(p,P)?(a(P,p,f.hiddenContainer,null,r,f,i,o,l),f.deps<=0?f.resolve():F&&(a(x,v,n,s,r,null,i,o,l),sn(f,v))):(f.pendingId++,L?(f.isHydrating=!1,f.activeBranch=P):c(P,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),F?(a(null,p,f.hiddenContainer,null,r,f,i,o,l),f.deps<=0?f.resolve():(a(x,v,n,s,r,null,i,o,l),sn(f,v))):x&&bt(p,x)?(a(x,p,n,s,r,f,i,o,l),f.resolve(!0)):(a(null,p,f.hiddenContainer,null,r,f,i,o,l),f.deps<=0&&f.resolve()));else if(x&&bt(p,x))a(x,p,n,s,r,f,i,o,l),sn(f,p);else if(Dn(e,"onPending"),f.pendingBranch=p,f.pendingId++,a(null,p,f.hiddenContainer,null,r,f,i,o,l),f.deps<=0)f.resolve();else{const{timeout:N,pendingId:z}=f;N>0?setTimeout(()=>{f.pendingId===z&&f.fallback(v)},N):N===0&&f.fallback(v)}}function ii(t,e,n,s,r,i,o,l,a,c,u=!1){const{p:f,m:p,um:v,n:x,o:{parentNode:P,remove:F}}=c;let L;const N=fu(t);N&&e!=null&&e.pendingBranch&&(L=e.pendingId,e.deps++);const z=t.props?hc(t.props.timeout):void 0,I={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof z=="number"?z:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(j=!1,Y=!1){const{vnode:oe,activeBranch:ne,pendingBranch:fe,pendingId:me,effects:be,parentComponent:Ne,container:Ie}=I;let qe=!1;if(I.isHydrating)I.isHydrating=!1;else if(!j){qe=ne&&fe.transition&&fe.transition.mode==="out-in",qe&&(ne.transition.afterLeave=()=>{me===I.pendingId&&(p(fe,Ie,x(ne),0),Ir(be))});let{anchor:Q}=I;ne&&(Q=x(ne),v(ne,Ne,I,!0)),qe||p(fe,Ie,Q,0)}sn(I,fe),I.pendingBranch=null,I.isInFallback=!1;let De=I.parent,ge=!1;for(;De;){if(De.pendingBranch){De.effects.push(...be),ge=!0;break}De=De.parent}!ge&&!qe&&Ir(be),I.effects=[],N&&e&&e.pendingBranch&&L===e.pendingId&&(e.deps--,e.deps===0&&!Y&&e.resolve()),Dn(oe,"onResolve")},fallback(j){if(!I.pendingBranch)return;const{vnode:Y,activeBranch:oe,parentComponent:ne,container:fe,isSVG:me}=I;Dn(Y,"onFallback");const be=x(oe),Ne=()=>{I.isInFallback&&(f(null,j,fe,be,ne,null,me,l,a),sn(I,j))},Ie=j.transition&&j.transition.mode==="out-in";Ie&&(oe.transition.afterLeave=Ne),I.isInFallback=!0,v(oe,ne,null,!0),Ie||Ne()},move(j,Y,oe){I.activeBranch&&p(I.activeBranch,j,Y,oe),I.container=j},next(){return I.activeBranch&&x(I.activeBranch)},registerDep(j,Y){const oe=!!I.pendingBranch;oe&&I.deps++;const ne=j.vnode.el;j.asyncDep.catch(fe=>{Kn(fe,j,0)}).then(fe=>{if(j.isUnmounted||I.isUnmounted||I.pendingId!==j.suspenseId)return;j.asyncResolved=!0;const{vnode:me}=j;Ar(j,fe,!1),ne&&(me.el=ne);const be=!ne&&j.subTree.el;Y(j,me,P(ne||j.subTree.el),ne?null:x(j.subTree),I,o,a),be&&F(be),ri(j,me.el),oe&&--I.deps===0&&I.resolve()})},unmount(j,Y){I.isUnmounted=!0,I.activeBranch&&v(I.activeBranch,n,j,Y),I.pendingBranch&&v(I.pendingBranch,n,j,Y)}};return I}function cu(t,e,n,s,r,i,o,l,a){const c=e.suspense=ii(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,l,!0),u=a(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(!1,!0),u}function uu(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=qi(s?n.default:n),t.ssFallback=s?qi(n.fallback):q(ct)}function qi(t){let e;if(W(t)){const n=cn&&t._c;n&&(t._d=!1,A()),t=t(),n&&(t._d=!0,e=Ue,Xa())}return H(t)&&(t=Zc(t)),t=je(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function du(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Ir(t)}function sn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,ri(s,r))}function fu(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const os={};function us(t,e,n){return La(t,e,n)}function La(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ae){var l;const a=Ec()===((l=we)==null?void 0:l.scope)?we:null;let c,u=!1,f=!1;if(Ce(t)?(c=()=>t.value,u=bs(t)):tn(t)?(c=()=>t,s=!0):H(t)?(f=!0,u=t.some(I=>tn(I)||bs(I)),c=()=>t.map(I=>{if(Ce(I))return I.value;if(tn(I))return $t(I);if(W(I))return Tt(I,a,2)})):W(t)?e?c=()=>Tt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return p&&p(),We(t,a,3,[v])}:c=Ze,e&&s){const I=c;c=()=>$t(I())}let p,v=I=>{p=N.onStop=()=>{Tt(I,a,4),p=N.onStop=void 0}},x;if(Un)if(v=Ze,e?n&&We(e,a,3,[c(),f?[]:void 0,v]):c(),r==="sync"){const I=td();x=I.__watcherHandles||(I.__watcherHandles=[])}else return Ze;let P=f?new Array(t.length).fill(os):os;const F=()=>{if(N.active)if(e){const I=N.run();(s||u||(f?I.some((j,Y)=>Vt(j,P[Y])):Vt(I,P)))&&(p&&p(),We(e,a,3,[I,P===os?void 0:f&&P[0]===os?[]:P,v]),P=I)}else N.run()};F.allowRecurse=!!e;let L;r==="sync"?L=F:r==="post"?L=()=>Pe(F,a&&a.suspense):(F.pre=!0,a&&(F.id=a.uid),L=()=>ti(F));const N=new Jr(c,L);e?n?F():P=N.run():r==="post"?Pe(N.run.bind(N),a&&a.suspense):N.run();const z=()=>{N.stop(),a&&a.scope&&Wr(a.scope.effects,N)};return x&&x.push(z),z}function hu(t,e,n){const s=this.proxy,r=ve(t)?t.includes(".")?Ua(s,t):()=>s[t]:t.bind(s,s);let i;W(e)?i=e:(i=e.handler,n=e);const o=we;dn(this);const l=La(r,i.bind(s),n);return o?dn(o):jt(),l}function Ua(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function $t(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ce(t))$t(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)$t(t[n],e);else if(ia(t)||en(t))t.forEach(n=>{$t(n,e)});else if(la(t))for(const n in t)$t(t[n],e);return t}function Ln(t,e){const n=Le;if(n===null)return t;const s=zs(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,l,a,c=ae]=e[i];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&$t(l),r.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Mt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let a=l.dir[s];a&&(vn(),We(a,n,8,[t.el,l,t,e]),bn())}}/*! #__NO_SIDE_EFFECTS__ */function $a(t,e){return W(t)?Ee({name:t.name},e,{setup:t}):t}const ds=t=>!!t.type.__asyncLoader,Ba=t=>t.type.__isKeepAlive;function pu(t,e){Fa(t,"a",e)}function gu(t,e){Fa(t,"da",e)}function Fa(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Hs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ba(r.parent.vnode)&&mu(s,e,n,r),r=r.parent}}function mu(t,e,n,s){const r=Hs(e,t,s,!0);Ha(()=>{Wr(s[e],r)},n)}function Hs(t,e,n=we,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;vn(),dn(n);const l=We(e,n,t,o);return jt(),bn(),l});return s?r.unshift(i):r.push(i),i}}const dt=t=>(e,n=we)=>(!Un||t==="sp")&&Hs(t,(...s)=>e(...s),n),Vs=dt("bm"),ja=dt("m"),_u=dt("bu"),vu=dt("u"),bu=dt("bum"),Ha=dt("um"),yu=dt("sp"),wu=dt("rtg"),Eu=dt("rtc");function Iu(t,e=we){Hs("ec",t,e)}function Oe(t,e,n,s){let r;const i=n&&n[s];if(H(t)||ve(t)){r=new Array(t.length);for(let o=0,l=t.length;o<l;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ue(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,i&&i[l]));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];r[l]=e(t[c],c,l,i&&i[l])}}else r=[];return n&&(n[s]=r),r}const Tr=t=>t?el(t)?zs(t)||t.proxy:Tr(t.parent):null,Rn=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tr(t.parent),$root:t=>Tr(t.root),$emit:t=>t.emit,$options:t=>oi(t),$forceUpdate:t=>t.f||(t.f=()=>ti(t.update)),$nextTick:t=>t.n||(t.n=Pa.bind(t.proxy)),$watch:t=>hu.bind(t)}),tr=(t,e)=>t!==ae&&!t.__isScriptSetup&&J(t,e),Tu={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(tr(s,e))return o[e]=1,s[e];if(r!==ae&&J(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&J(c,e))return o[e]=3,i[e];if(n!==ae&&J(n,e))return o[e]=4,n[e];xr&&(o[e]=0)}}const u=Rn[e];let f,p;if(u)return e==="$attrs"&&ke(t,"get",e),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==ae&&J(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,J(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return tr(r,e)?(r[e]=n,!0):s!==ae&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||t!==ae&&J(t,o)||tr(e,o)||(l=i[0])&&J(l,o)||J(s,o)||J(Rn,o)||J(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gi(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xr=!0;function xu(t){const e=oi(t),n=t.proxy,s=t.ctx;xr=!1,e.beforeCreate&&Ji(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:v,updated:x,activated:P,deactivated:F,beforeDestroy:L,beforeUnmount:N,destroyed:z,unmounted:I,render:j,renderTracked:Y,renderTriggered:oe,errorCaptured:ne,serverPrefetch:fe,expose:me,inheritAttrs:be,components:Ne,directives:Ie,filters:qe}=e;if(c&&Cu(c,s,null),o)for(const Q in o){const Z=o[Q];W(Z)&&(s[Q]=Z.bind(n))}if(r){const Q=r.call(n,n);ue(Q)&&(t.data=$s(Q))}if(xr=!0,i)for(const Q in i){const Z=i[Q],st=W(Z)?Z.bind(n,n):W(Z.get)?Z.get.bind(n,n):Ze,ht=!W(Z)&&W(Z.set)?Z.set.bind(n):Ze,Ge=Ve({get:st,set:ht});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ae=>Ge.value=Ae})}if(l)for(const Q in l)Va(l[Q],s,n,Q);if(a){const Q=W(a)?a.call(n):a;Reflect.ownKeys(Q).forEach(Z=>{fs(Z,Q[Z])})}u&&Ji(u,t,"c");function ge(Q,Z){H(Z)?Z.forEach(st=>Q(st.bind(n))):Z&&Q(Z.bind(n))}if(ge(Vs,f),ge(ja,p),ge(_u,v),ge(vu,x),ge(pu,P),ge(gu,F),ge(Iu,ne),ge(Eu,Y),ge(wu,oe),ge(bu,N),ge(Ha,I),ge(yu,fe),H(me))if(me.length){const Q=t.exposed||(t.exposed={});me.forEach(Z=>{Object.defineProperty(Q,Z,{get:()=>n[Z],set:st=>n[Z]=st})})}else t.exposed||(t.exposed={});j&&t.render===Ze&&(t.render=j),be!=null&&(t.inheritAttrs=be),Ne&&(t.components=Ne),Ie&&(t.directives=Ie)}function Cu(t,e,n=Ze){H(t)&&(t=Cr(t));for(const s in t){const r=t[s];let i;ue(r)?"default"in r?i=Ke(r.from||s,r.default,!0):i=Ke(r.from||s):i=Ke(r),Ce(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Ji(t,e,n){We(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Va(t,e,n,s){const r=s.includes(".")?Ua(n,s):()=>n[s];if(ve(t)){const i=e[t];W(i)&&us(r,i)}else if(W(t))us(r,t.bind(n));else if(ue(t))if(H(t))t.forEach(i=>Va(i,e,n,s));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&us(r,i,t)}}function oi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let a;return l?a=l:!r.length&&!n&&!s?a=e:(a={},r.length&&r.forEach(c=>ws(a,c,o,!0)),ws(a,e,o)),ue(e)&&i.set(e,a),a}function ws(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ws(t,i,n,!0),r&&r.forEach(o=>ws(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Ru[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Ru={data:Yi,props:Xi,emits:Xi,methods:Tn,computed:Tn,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Tn,directives:Tn,watch:Au,provide:Yi,inject:Su};function Yi(t,e){return e?t?function(){return Ee(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Su(t,e){return Tn(Cr(t),Cr(e))}function Cr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Tn(t,e){return t?Ee(Object.create(null),t,e):e}function Xi(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Ee(Object.create(null),Gi(t),Gi(e??{})):e}function Au(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const s in e)n[s]=Se(t[s],e[s]);return n}function Wa(){return{app:null,config:{isNativeTag:lc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pu=0;function Ou(t,e){return function(s,r=null){W(s)||(s=Ee({},s)),r!=null&&!ue(r)&&(r=null);const i=Wa(),o=new WeakSet;let l=!1;const a=i.app={_uid:Pu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:nd,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(a,...u)):W(c)&&(o.add(c),c(a,...u))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,u){return u?(i.components[c]=u,a):i.components[c]},directive(c,u){return u?(i.directives[c]=u,a):i.directives[c]},mount(c,u,f){if(!l){const p=q(s,r);return p.appContext=i,u&&e?e(p,c):t(p,c,f),l=!0,a._container=c,c.__vue_app__=a,zs(p.component)||p.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return i.provides[c]=u,a},runWithContext(c){Es=a;try{return c()}finally{Es=null}}};return a}}let Es=null;function fs(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function Ke(t,e,n=!1){const s=we||Le;if(s||Es){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Es._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&W(e)?e.call(s&&s.proxy):e}}function ku(t,e,n,s=!1){const r={},i={};vs(i,Ks,1),t.propsDefaults=Object.create(null),Ka(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:wa(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Mu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=X(r),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Bs(t.emitsOptions,p))continue;const v=e[p];if(a)if(J(i,p))v!==i[p]&&(i[p]=v,c=!0);else{const x=nt(p);r[x]=Rr(a,l,x,v,t,!1)}else v!==i[p]&&(i[p]=v,c=!0)}}}else{Ka(t,e,r,i)&&(c=!0);let u;for(const f in l)(!e||!J(e,f)&&((u=_n(f))===f||!J(e,u)))&&(a?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Rr(a,l,f,void 0,t,!0)):delete r[f]);if(i!==l)for(const f in i)(!e||!J(e,f))&&(delete i[f],c=!0)}c&&lt(t,"set","$attrs")}function Ka(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ls(a))continue;const c=e[a];let u;r&&J(r,u=nt(a))?!i||!i.includes(u)?n[u]=c:(l||(l={}))[u]=c:Bs(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(i){const a=X(n),c=l||ae;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Rr(r,a,f,c[f],t,!J(c,f))}}return o}function Rr(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=J(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&W(a)){const{propsDefaults:c}=r;n in c?s=c[n]:(dn(r),s=c[n]=a.call(null,e),jt())}else s=a}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===_n(n))&&(s=!0))}return s}function za(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let a=!1;if(!W(t)){const u=f=>{a=!0;const[p,v]=za(f,e,!0);Ee(o,p),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return ue(t)&&s.set(t,Zt),Zt;if(H(i))for(let u=0;u<i.length;u++){const f=nt(i[u]);Qi(f)&&(o[f]=ae)}else if(i)for(const u in i){const f=nt(u);if(Qi(f)){const p=i[u],v=o[f]=H(p)||W(p)?{type:p}:Ee({},p);if(v){const x=to(Boolean,v.type),P=to(String,v.type);v[0]=x>-1,v[1]=P<0||x<P,(x>-1||J(v,"default"))&&l.push(f)}}}const c=[o,l];return ue(t)&&s.set(t,c),c}function Qi(t){return t[0]!=="$"}function Zi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function eo(t,e){return Zi(t)===Zi(e)}function to(t,e){return H(e)?e.findIndex(n=>eo(n,t)):W(e)&&eo(e,t)?0:-1}const qa=t=>t[0]==="_"||t==="$stable",ai=t=>H(t)?t.map(je):[je(t)],Nu=(t,e,n)=>{if(e._n)return e;const s=ce((...r)=>ai(e(...r)),n);return s._c=!1,s},Ga=(t,e,n)=>{const s=t._ctx;for(const r in t){if(qa(r))continue;const i=t[r];if(W(i))e[r]=Nu(r,i,s);else if(i!=null){const o=ai(i);e[r]=()=>o}}},Ja=(t,e)=>{const n=ai(e);t.slots.default=()=>n},Du=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),vs(e,"_",n)):Ga(e,t.slots={})}else t.slots={},e&&Ja(t,e);vs(t.slots,Ks,1)},Lu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ae;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(Ee(r,e),!n&&l===1&&delete r._):(i=!e.$stable,Ga(e,r)),o=e}else e&&(Ja(t,e),o={default:1});if(i)for(const l in r)!qa(l)&&o[l]==null&&delete r[l]};function Sr(t,e,n,s,r=!1){if(H(t)){t.forEach((p,v)=>Sr(p,e&&(H(e)?e[v]:e),n,s,r));return}if(ds(s)&&!r)return;const i=s.shapeFlag&4?zs(s.component)||s.component.proxy:s.el,o=r?null:i,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ae?l.refs={}:l.refs,f=l.setupState;if(c!=null&&c!==a&&(ve(c)?(u[c]=null,J(f,c)&&(f[c]=null)):Ce(c)&&(c.value=null)),W(a))Tt(a,l,12,[o,u]);else{const p=ve(a),v=Ce(a);if(p||v){const x=()=>{if(t.f){const P=p?J(f,a)?f[a]:u[a]:a.value;r?H(P)&&Wr(P,i):H(P)?P.includes(i)||P.push(i):p?(u[a]=[i],J(f,a)&&(f[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else p?(u[a]=o,J(f,a)&&(f[a]=o)):v&&(a.value=o,t.k&&(u[t.k]=o))};o?(x.id=-1,Pe(x,n)):x()}}}const Pe=du;function Uu(t){return $u(t)}function $u(t,e){const n=_r();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:v=Ze,insertStaticContent:x}=t,P=(d,h,g,m=null,y=null,w=null,S=!1,T=null,C=!!h.dynamicChildren)=>{if(d===h)return;d&&!bt(d,h)&&(m=b(d),Ae(d,y,w,!0),d=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:E,ref:$,shapeFlag:D}=h;switch(E){case Ws:F(d,h,g,m);break;case ct:L(d,h,g,m);break;case nr:d==null&&N(h,g,m,S);break;case de:Ne(d,h,g,m,y,w,S,T,C);break;default:D&1?j(d,h,g,m,y,w,S,T,C):D&6?Ie(d,h,g,m,y,w,S,T,C):(D&64||D&128)&&E.process(d,h,g,m,y,w,S,T,C,R)}$!=null&&y&&Sr($,d&&d.ref,w,h||d,!h)},F=(d,h,g,m)=>{if(d==null)s(h.el=l(h.children),g,m);else{const y=h.el=d.el;h.children!==d.children&&c(y,h.children)}},L=(d,h,g,m)=>{d==null?s(h.el=a(h.children||""),g,m):h.el=d.el},N=(d,h,g,m)=>{[d.el,d.anchor]=x(d.children,h,g,m,d.el,d.anchor)},z=({el:d,anchor:h},g,m)=>{let y;for(;d&&d!==h;)y=p(d),s(d,g,m),d=y;s(h,g,m)},I=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),r(d),d=g;r(h)},j=(d,h,g,m,y,w,S,T,C)=>{S=S||h.type==="svg",d==null?Y(h,g,m,y,w,S,T,C):fe(d,h,y,w,S,T,C)},Y=(d,h,g,m,y,w,S,T)=>{let C,E;const{type:$,props:D,shapeFlag:B,transition:K,dirs:G}=d;if(C=d.el=o(d.type,w,D&&D.is,D),B&8?u(C,d.children):B&16&&ne(d.children,C,null,m,y,w&&$!=="foreignObject",S,T),G&&Mt(d,null,m,"created"),oe(C,d,d.scopeId,S,m),D){for(const se in D)se!=="value"&&!ls(se)&&i(C,se,null,D[se],w,d.children,m,y,Te);"value"in D&&i(C,"value",null,D.value),(E=D.onVnodeBeforeMount)&&Ye(E,m,d)}G&&Mt(d,null,m,"beforeMount");const ie=Bu(y,K);ie&&K.beforeEnter(C),s(C,h,g),((E=D&&D.onVnodeMounted)||ie||G)&&Pe(()=>{E&&Ye(E,m,d),ie&&K.enter(C),G&&Mt(d,null,m,"mounted")},y)},oe=(d,h,g,m,y)=>{if(g&&v(d,g),m)for(let w=0;w<m.length;w++)v(d,m[w]);if(y){let w=y.subTree;if(h===w){const S=y.vnode;oe(d,S,S.scopeId,S.slotScopeIds,y.parent)}}},ne=(d,h,g,m,y,w,S,T,C=0)=>{for(let E=C;E<d.length;E++){const $=d[E]=T?_t(d[E]):je(d[E]);P(null,$,h,g,m,y,w,S,T)}},fe=(d,h,g,m,y,w,S)=>{const T=h.el=d.el;let{patchFlag:C,dynamicChildren:E,dirs:$}=h;C|=d.patchFlag&16;const D=d.props||ae,B=h.props||ae;let K;g&&Nt(g,!1),(K=B.onVnodeBeforeUpdate)&&Ye(K,g,h,d),$&&Mt(h,d,g,"beforeUpdate"),g&&Nt(g,!0);const G=y&&h.type!=="foreignObject";if(E?me(d.dynamicChildren,E,T,g,m,G,w):S||Z(d,h,T,null,g,m,G,w,!1),C>0){if(C&16)be(T,h,D,B,g,m,y);else if(C&2&&D.class!==B.class&&i(T,"class",null,B.class,y),C&4&&i(T,"style",D.style,B.style,y),C&8){const ie=h.dynamicProps;for(let se=0;se<ie.length;se++){const _e=ie[se],Be=D[_e],Jt=B[_e];(Jt!==Be||_e==="value")&&i(T,_e,Be,Jt,y,d.children,g,m,Te)}}C&1&&d.children!==h.children&&u(T,h.children)}else!S&&E==null&&be(T,h,D,B,g,m,y);((K=B.onVnodeUpdated)||$)&&Pe(()=>{K&&Ye(K,g,h,d),$&&Mt(h,d,g,"updated")},m)},me=(d,h,g,m,y,w,S)=>{for(let T=0;T<h.length;T++){const C=d[T],E=h[T],$=C.el&&(C.type===de||!bt(C,E)||C.shapeFlag&70)?f(C.el):g;P(C,E,$,null,m,y,w,S,!0)}},be=(d,h,g,m,y,w,S)=>{if(g!==m){if(g!==ae)for(const T in g)!ls(T)&&!(T in m)&&i(d,T,g[T],null,S,h.children,y,w,Te);for(const T in m){if(ls(T))continue;const C=m[T],E=g[T];C!==E&&T!=="value"&&i(d,T,E,C,S,h.children,y,w,Te)}"value"in m&&i(d,"value",g.value,m.value)}},Ne=(d,h,g,m,y,w,S,T,C)=>{const E=h.el=d?d.el:l(""),$=h.anchor=d?d.anchor:l("");let{patchFlag:D,dynamicChildren:B,slotScopeIds:K}=h;K&&(T=T?T.concat(K):K),d==null?(s(E,g,m),s($,g,m),ne(h.children,g,$,y,w,S,T,C)):D>0&&D&64&&B&&d.dynamicChildren?(me(d.dynamicChildren,B,g,y,w,S,T),(h.key!=null||y&&h===y.subTree)&&Ya(d,h,!0)):Z(d,h,g,$,y,w,S,T,C)},Ie=(d,h,g,m,y,w,S,T,C)=>{h.slotScopeIds=T,d==null?h.shapeFlag&512?y.ctx.activate(h,g,m,S,C):qe(h,g,m,y,w,S,C):De(d,h,C)},qe=(d,h,g,m,y,w,S)=>{const T=d.component=qu(d,m,y);if(Ba(d)&&(T.ctx.renderer=R),Gu(T),T.asyncDep){if(y&&y.registerDep(T,ge),!d.el){const C=T.subTree=q(ct);L(null,C,h,g)}return}ge(T,d,h,g,y,w,S)},De=(d,h,g)=>{const m=h.component=d.component;if(nu(d,h,g))if(m.asyncDep&&!m.asyncResolved){Q(m,h,g);return}else m.next=h,Yc(m.update),m.update();else h.el=d.el,m.vnode=h},ge=(d,h,g,m,y,w,S)=>{const T=()=>{if(d.isMounted){let{next:$,bu:D,u:B,parent:K,vnode:G}=d,ie=$,se;Nt(d,!1),$?($.el=G.el,Q(d,$,S)):$=G,D&&cs(D),(se=$.props&&$.props.onVnodeBeforeUpdate)&&Ye(se,K,$,G),Nt(d,!0);const _e=er(d),Be=d.subTree;d.subTree=_e,P(Be,_e,f(Be.el),b(Be),d,y,w),$.el=_e.el,ie===null&&ri(d,_e.el),B&&Pe(B,y),(se=$.props&&$.props.onVnodeUpdated)&&Pe(()=>Ye(se,K,$,G),y)}else{let $;const{el:D,props:B}=h,{bm:K,m:G,parent:ie}=d,se=ds(h);if(Nt(d,!1),K&&cs(K),!se&&($=B&&B.onVnodeBeforeMount)&&Ye($,ie,h),Nt(d,!0),D&&ee){const _e=()=>{d.subTree=er(d),ee(D,d.subTree,d,y,null)};se?h.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=er(d);P(null,_e,g,m,d,y,w),h.el=_e.el}if(G&&Pe(G,y),!se&&($=B&&B.onVnodeMounted)){const _e=h;Pe(()=>Ye($,ie,_e),y)}(h.shapeFlag&256||ie&&ds(ie.vnode)&&ie.vnode.shapeFlag&256)&&d.a&&Pe(d.a,y),d.isMounted=!0,h=g=m=null}},C=d.effect=new Jr(T,()=>ti(E),d.scope),E=d.update=()=>C.run();E.id=d.uid,Nt(d,!0),E()},Q=(d,h,g)=>{h.component=d;const m=d.vnode.props;d.vnode=h,d.next=null,Mu(d,h.props,m,g),Lu(d,h.children,g),vn(),Vi(d),bn()},Z=(d,h,g,m,y,w,S,T,C=!1)=>{const E=d&&d.children,$=d?d.shapeFlag:0,D=h.children,{patchFlag:B,shapeFlag:K}=h;if(B>0){if(B&128){ht(E,D,g,m,y,w,S,T,C);return}else if(B&256){st(E,D,g,m,y,w,S,T,C);return}}K&8?($&16&&Te(E,y,w),D!==E&&u(g,D)):$&16?K&16?ht(E,D,g,m,y,w,S,T,C):Te(E,y,w,!0):($&8&&u(g,""),K&16&&ne(D,g,m,y,w,S,T,C))},st=(d,h,g,m,y,w,S,T,C)=>{d=d||Zt,h=h||Zt;const E=d.length,$=h.length,D=Math.min(E,$);let B;for(B=0;B<D;B++){const K=h[B]=C?_t(h[B]):je(h[B]);P(d[B],K,g,null,y,w,S,T,C)}E>$?Te(d,y,w,!0,!1,D):ne(h,g,m,y,w,S,T,C,D)},ht=(d,h,g,m,y,w,S,T,C)=>{let E=0;const $=h.length;let D=d.length-1,B=$-1;for(;E<=D&&E<=B;){const K=d[E],G=h[E]=C?_t(h[E]):je(h[E]);if(bt(K,G))P(K,G,g,null,y,w,S,T,C);else break;E++}for(;E<=D&&E<=B;){const K=d[D],G=h[B]=C?_t(h[B]):je(h[B]);if(bt(K,G))P(K,G,g,null,y,w,S,T,C);else break;D--,B--}if(E>D){if(E<=B){const K=B+1,G=K<$?h[K].el:m;for(;E<=B;)P(null,h[E]=C?_t(h[E]):je(h[E]),g,G,y,w,S,T,C),E++}}else if(E>B)for(;E<=D;)Ae(d[E],y,w,!0),E++;else{const K=E,G=E,ie=new Map;for(E=G;E<=B;E++){const Me=h[E]=C?_t(h[E]):je(h[E]);Me.key!=null&&ie.set(Me.key,E)}let se,_e=0;const Be=B-G+1;let Jt=!1,ki=0;const wn=new Array(Be);for(E=0;E<Be;E++)wn[E]=0;for(E=K;E<=D;E++){const Me=d[E];if(_e>=Be){Ae(Me,y,w,!0);continue}let Je;if(Me.key!=null)Je=ie.get(Me.key);else for(se=G;se<=B;se++)if(wn[se-G]===0&&bt(Me,h[se])){Je=se;break}Je===void 0?Ae(Me,y,w,!0):(wn[Je-G]=E+1,Je>=ki?ki=Je:Jt=!0,P(Me,h[Je],g,null,y,w,S,T,C),_e++)}const Mi=Jt?Fu(wn):Zt;for(se=Mi.length-1,E=Be-1;E>=0;E--){const Me=G+E,Je=h[Me],Ni=Me+1<$?h[Me+1].el:m;wn[E]===0?P(null,Je,g,Ni,y,w,S,T,C):Jt&&(se<0||E!==Mi[se]?Ge(Je,g,Ni,2):se--)}}},Ge=(d,h,g,m,y=null)=>{const{el:w,type:S,transition:T,children:C,shapeFlag:E}=d;if(E&6){Ge(d.component.subTree,h,g,m);return}if(E&128){d.suspense.move(h,g,m);return}if(E&64){S.move(d,h,g,R);return}if(S===de){s(w,h,g);for(let D=0;D<C.length;D++)Ge(C[D],h,g,m);s(d.anchor,h,g);return}if(S===nr){z(d,h,g);return}if(m!==2&&E&1&&T)if(m===0)T.beforeEnter(w),s(w,h,g),Pe(()=>T.enter(w),y);else{const{leave:D,delayLeave:B,afterLeave:K}=T,G=()=>s(w,h,g),ie=()=>{D(w,()=>{G(),K&&K()})};B?B(w,G,ie):ie()}else s(w,h,g)},Ae=(d,h,g,m=!1,y=!1)=>{const{type:w,props:S,ref:T,children:C,dynamicChildren:E,shapeFlag:$,patchFlag:D,dirs:B}=d;if(T!=null&&Sr(T,null,g,d,!0),$&256){h.ctx.deactivate(d);return}const K=$&1&&B,G=!ds(d);let ie;if(G&&(ie=S&&S.onVnodeBeforeUnmount)&&Ye(ie,h,d),$&6)es(d.component,g,m);else{if($&128){d.suspense.unmount(g,m);return}K&&Mt(d,null,h,"beforeUnmount"),$&64?d.type.remove(d,h,g,y,R,m):E&&(w!==de||D>0&&D&64)?Te(E,h,g,!1,!0):(w===de&&D&384||!y&&$&16)&&Te(C,h,g),m&&qt(d)}(G&&(ie=S&&S.onVnodeUnmounted)||K)&&Pe(()=>{ie&&Ye(ie,h,d),K&&Mt(d,null,h,"unmounted")},g)},qt=d=>{const{type:h,el:g,anchor:m,transition:y}=d;if(h===de){Gt(g,m);return}if(h===nr){I(d);return}const w=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:T}=y,C=()=>S(g,w);T?T(d.el,w,C):C()}else w()},Gt=(d,h)=>{let g;for(;d!==h;)g=p(d),r(d),d=g;r(h)},es=(d,h,g)=>{const{bum:m,scope:y,update:w,subTree:S,um:T}=d;m&&cs(m),y.stop(),w&&(w.active=!1,Ae(S,d,h,g)),T&&Pe(T,h),Pe(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Te=(d,h,g,m=!1,y=!1,w=0)=>{for(let S=w;S<d.length;S++)Ae(d[S],h,g,m,y)},b=d=>d.shapeFlag&6?b(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),O=(d,h,g)=>{d==null?h._vnode&&Ae(h._vnode,null,null,!0):P(h._vnode||null,d,h,null,null,null,g),Vi(),ka(),h._vnode=d},R={p:P,um:Ae,m:Ge,r:qt,mt:qe,mc:ne,pc:Z,pbc:me,n:b,o:t};let U,ee;return e&&([U,ee]=e(R)),{render:O,hydrate:U,createApp:Ou(O,U)}}function Nt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ya(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=_t(r[i]),l.el=o.el),n||Ya(o,l)),l.type===Ws&&(l.el=o.el)}}function Fu(t){const e=t.slice(),n=[0];let s,r,i,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<c?i=l+1:o=l;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ju=t=>t.__isTeleport,de=Symbol.for("v-fgt"),Ws=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),nr=Symbol.for("v-stc"),Sn=[];let Ue=null;function A(t=!1){Sn.push(Ue=t?null:[])}function Xa(){Sn.pop(),Ue=Sn[Sn.length-1]||null}let cn=1;function no(t){cn+=t}function Qa(t){return t.dynamicChildren=cn>0?Ue||Zt:null,Xa(),cn>0&&Ue&&Ue.push(t),t}function M(t,e,n,s,r,i){return Qa(_(t,e,n,s,r,i,!0))}function Is(t,e,n,s,r){return Qa(q(t,e,n,s,r,!0))}function Ts(t){return t?t.__v_isVNode===!0:!1}function bt(t,e){return t.type===e.type&&t.key===e.key}const Ks="__vInternal",Za=({key:t})=>t??null,hs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ve(t)||Ce(t)||W(t)?{i:Le,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,s=0,r=null,i=t===de?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Za(e),ref:e&&hs(e),scopeId:Fs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Le};return l?(ci(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ve(n)?8:16),cn>0&&!o&&Ue&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ue.push(a),a}const q=Hu;function Hu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===su)&&(t=ct),Ts(t)){const l=un(t,e,!0);return n&&ci(l,n),cn>0&&!i&&Ue&&(l.shapeFlag&6?Ue[Ue.indexOf(t)]=l:Ue.push(l)),l.patchFlag|=-2,l}if(Zu(t)&&(t=t.__vccOpts),e){e=Vu(e);let{class:l,style:a}=e;l&&!ve(l)&&(e.class=qr(l)),ue(a)&&(Ia(a)&&!H(a)&&(a=Ee({},a)),e.style=zr(a))}const o=ve(t)?1:iu(t)?128:ju(t)?64:ue(t)?4:W(t)?2:0;return _(t,e,n,s,r,o,i,!0)}function Vu(t){return t?Ia(t)||Ks in t?Ee({},t):t:null}function un(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,l=e?Wu(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Za(l),ref:e&&e.ref?n&&r?H(r)?r.concat(hs(e)):[r,hs(e)]:hs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==de?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function li(t=" ",e=0){return q(Ws,null,t,e)}function he(t="",e=!1){return e?(A(),Is(ct,null,t)):q(ct,null,t)}function je(t){return t==null||typeof t=="boolean"?q(ct):H(t)?q(de,null,t.slice()):typeof t=="object"?_t(t):q(Ws,null,String(t))}function _t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:un(t)}function ci(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ci(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ks in e)?e._ctx=Le:r===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),s&64?(n=16,e=[li(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=qr([e.class,s.class]));else if(r==="style")e.style=zr([e.style,s.style]);else if(Ms(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ye(t,e,n,s=null){We(t,e,7,[n,s])}const Ku=Wa();let zu=0;function qu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Ku,i={uid:zu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new yc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:za(s,r),emitsOptions:Na(s,r),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qc.bind(null,i),t.ce&&t.ce(i),i}let we=null,ui,Yt,so="__VUE_INSTANCE_SETTERS__";(Yt=_r()[so])||(Yt=_r()[so]=[]),Yt.push(t=>we=t),ui=t=>{Yt.length>1?Yt.forEach(e=>e(t)):Yt[0](t)};const dn=t=>{ui(t),t.scope.on()},jt=()=>{we&&we.scope.off(),ui(null)};function el(t){return t.vnode.shapeFlag&4}let Un=!1;function Gu(t,e=!1){Un=e;const{props:n,children:s}=t.vnode,r=el(t);ku(t,n,r,e),Du(t,s);const i=r?Ju(t,e):void 0;return Un=!1,i}function Ju(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ta(new Proxy(t.ctx,Tu));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Xu(t):null;dn(t),vn();const i=Tt(s,t,0,[t.props,r]);if(bn(),jt(),oa(i)){if(i.then(jt,jt),e)return i.then(o=>{Ar(t,o,e)}).catch(o=>{Kn(o,t,0)});t.asyncDep=i}else Ar(t,i,e)}else tl(t,e)}function Ar(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=Sa(e)),tl(t,n)}let ro;function tl(t,e,n){const s=t.type;if(!t.render){if(!e&&ro&&!s.render){const r=s.template||oi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ee(Ee({isCustomElement:i,delimiters:l},o),a);s.render=ro(r,c)}}t.render=s.render||Ze}{dn(t),vn();try{xu(t)}finally{bn(),jt()}}}function Yu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ke(t,"get","$attrs"),e[n]}}))}function Xu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Yu(t)},slots:t.slots,emit:t.emit,expose:e}}function zs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sa(Ta(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}}))}function Qu(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function Zu(t){return W(t)&&"__vccOpts"in t}const Ve=(t,e)=>qc(t,e,Un);function nl(t,e,n){const s=arguments.length;return s===2?ue(e)&&!H(e)?Ts(e)?q(t,null,[e]):q(t,e):q(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ts(n)&&(n=[n]),q(t,e,n))}const ed=Symbol.for("v-scx"),td=()=>Ke(ed),nd="3.3.11",sd="http://www.w3.org/2000/svg",Ut=typeof document<"u"?document:null,io=Ut&&Ut.createElement("template"),rd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ut.createElementNS(sd,t):Ut.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ut.createTextNode(t),createComment:t=>Ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{io.innerHTML=s?`<svg>${t}</svg>`:t;const l=io.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},id=Symbol("_vtc");function od(t,e,n){const s=t[id];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ad=Symbol("_vod");function ld(t,e,n){const s=t.style,r=ve(n);if(n&&!r){if(e&&!ve(e))for(const i in e)n[i]==null&&Pr(s,i,"");for(const i in n)Pr(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),ad in t&&(s.display=i)}}const oo=/\s*!important$/;function Pr(t,e,n){if(H(n))n.forEach(s=>Pr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=cd(t,e);oo.test(n)?t.setProperty(_n(s),n.replace(oo,""),"important"):t[s]=n}}const ao=["Webkit","Moz","ms"],sr={};function cd(t,e){const n=sr[e];if(n)return n;let s=nt(e);if(s!=="filter"&&s in t)return sr[e]=s;s=Ls(s);for(let r=0;r<ao.length;r++){const i=ao[r]+s;if(i in t)return sr[e]=i}return e}const lo="http://www.w3.org/1999/xlink";function ud(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(lo,e.slice(6,e.length)):t.setAttributeNS(lo,e,n);else{const i=bc(e);n==null||i&&!ca(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function dd(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ca(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Xt(t,e,n,s){t.addEventListener(e,n,s)}function fd(t,e,n,s){t.removeEventListener(e,n,s)}const co=Symbol("_vei");function hd(t,e,n,s,r=null){const i=t[co]||(t[co]={}),o=i[e];if(s&&o)o.value=s;else{const[l,a]=pd(e);if(s){const c=i[e]=_d(s,r);Xt(t,l,c,a)}else o&&(fd(t,l,o,a),i[e]=void 0)}}const uo=/(?:Once|Passive|Capture)$/;function pd(t){let e;if(uo.test(t)){e={};let s;for(;s=t.match(uo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_n(t.slice(2)),e]}let rr=0;const gd=Promise.resolve(),md=()=>rr||(gd.then(()=>rr=0),rr=Date.now());function _d(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;We(vd(s,n.value),e,5,[s])};return n.value=t,n.attached=md(),n}function vd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const fo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,bd=(t,e,n,s,r=!1,i,o,l,a)=>{e==="class"?od(t,s,r):e==="style"?ld(t,n,s):Ms(e)?Vr(e)||hd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yd(t,e,s,r))?dd(t,e,s,i,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ud(t,e,s,r))};function yd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&fo(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return fo(e)&&ve(n)?!1:e in t}const ho=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>cs(e,n):e};function wd(t){t.target.composing=!0}function po(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ir=Symbol("_assign"),$n={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[ir]=ho(r);const i=s||r.props&&r.props.type==="number";Xt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=mr(l)),t[ir](l)}),n&&Xt(t,"change",()=>{t.value=t.value.trim()}),e||(Xt(t,"compositionstart",wd),Xt(t,"compositionend",po),Xt(t,"change",po))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[ir]=ho(i),t.composing)return;const o=r||t.type==="number"?mr(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===l)||(t.value=l))}},Ed=["ctrl","shift","alt","meta"],Id={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ed.some(n=>t[`${n}Key`]&&!e.includes(n))},di=(t,e)=>t._withMods||(t._withMods=(n,...s)=>{for(let r=0;r<e.length;r++){const i=Id[e[r]];if(i&&i(n,e))return}return t(n,...s)}),Td=Ee({patchProp:bd},rd);let go;function xd(){return go||(go=Uu(Td))}const Cd=(...t)=>{const e=xd().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Rd(s);if(!r)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Rd(t){return ve(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Qt=typeof window<"u";function Sd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function or(t,e){const n={};for(const s in e){const r=e[s];n[s]=ze(r)?r.map(t):t(r)}return n}const An=()=>{},ze=Array.isArray,Ad=/\/$/,Pd=t=>t.replace(Ad,"");function ar(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Nd(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Od(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kd(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&fn(e.matched[s],n.matched[r])&&sl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Md(t[n],e[n]))return!1;return!0}function Md(t,e){return ze(t)?_o(t,e):ze(e)?_o(e,t):t===e}function _o(t,e){return ze(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Nd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Bn;(function(t){t.pop="pop",t.push="push"})(Bn||(Bn={}));var Pn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pn||(Pn={}));function Dd(t){if(!t)if(Qt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Pd(t)}const Ld=/^[^#]+#/;function Ud(t,e){return t.replace(Ld,"#")+e}function $d(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const qs=()=>({left:window.pageXOffset,top:window.pageYOffset});function Bd(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=$d(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vo(t,e){return(history.state?history.state.position-e:-1)+t}const Or=new Map;function Fd(t,e){Or.set(t,e)}function jd(t){const e=Or.get(t);return Or.delete(t),e}let Hd=()=>location.protocol+"//"+location.host;function rl(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let l=r.includes(t.slice(i))?t.slice(i).length:1,a=r.slice(l);return a[0]!=="/"&&(a="/"+a),mo(a,"")}return mo(n,t)+s+r}function Vd(t,e,n,s){let r=[],i=[],o=null;const l=({state:p})=>{const v=rl(t,location),x=n.value,P=e.value;let F=0;if(p){if(n.value=v,e.value=p,o&&o===x){o=null;return}F=P?p.position-P.position:0}else s(v);r.forEach(L=>{L(n.value,x,{delta:F,type:Bn.pop,direction:F?F>0?Pn.forward:Pn.back:Pn.unknown})})};function a(){o=n.value}function c(p){r.push(p);const v=()=>{const x=r.indexOf(p);x>-1&&r.splice(x,1)};return i.push(v),v}function u(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:qs()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:f}}function bo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?qs():null}}function Wd(t){const{history:e,location:n}=window,s={value:rl(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,c,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+a:Hd()+t+a;try{e[u?"replaceState":"pushState"](c,"",p),r.value=c}catch(v){console.error(v),n[u?"replace":"assign"](p)}}function o(a,c){const u=te({},e.state,bo(r.value.back,a,r.value.forward,!0),c,{position:r.value.position});i(a,u,!0),s.value=a}function l(a,c){const u=te({},r.value,e.state,{forward:a,scroll:qs()});i(u.current,u,!0);const f=te({},bo(s.value,a,null),{position:u.position+1},c);i(a,f,!1),s.value=a}return{location:s,state:r,push:l,replace:o}}function Kd(t){t=Dd(t);const e=Wd(t),n=Vd(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=te({location:"",base:t,go:s,createHref:Ud.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function zd(t){return typeof t=="string"||t&&typeof t=="object"}function il(t){return typeof t=="string"||typeof t=="symbol"}const gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ol=Symbol("");var yo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yo||(yo={}));function hn(t,e){return te(new Error,{type:t,[ol]:!0},e)}function rt(t,e){return t instanceof Error&&ol in t&&(e==null||!!(t.type&e))}const wo="[^/]+?",qd={sensitive:!1,strict:!1,start:!0,end:!0},Gd=/[.+*?^${}()[\]/\\]/g;function Jd(t,e){const n=te({},qd,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const p=c[f];let v=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(Gd,"\\$&"),v+=40;else if(p.type===1){const{value:x,repeatable:P,optional:F,regexp:L}=p;i.push({name:x,repeatable:P,optional:F});const N=L||wo;if(N!==wo){v+=10;try{new RegExp(`(${N})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${x}" (${N}): `+I.message)}}let z=P?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(z=F&&c.length<2?`(?:/${z})`:"/"+z),F&&(z+="?"),r+=z,v+=20,F&&(v+=-8),P&&(v+=-20),N===".*"&&(v+=-50)}u.push(v)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(c){const u=c.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const v=u[p]||"",x=i[p-1];f[x.name]=v&&x.repeatable?v.split("/"):v}return f}function a(c){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const v of p)if(v.type===0)u+=v.value;else if(v.type===1){const{value:x,repeatable:P,optional:F}=v,L=x in c?c[x]:"";if(ze(L)&&!P)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const N=ze(L)?L.join("/"):L;if(!N)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${x}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:i,parse:l,stringify:a}}function Yd(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Xd(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Yd(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Eo(s))return 1;if(Eo(r))return-1}return r.length-s.length}function Eo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Qd={type:0,value:""},Zd=/[a-zA-Z0-9_]/;function ef(t){if(!t)return[[]];if(t==="/")return[[Qd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${c}": ${v}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,a,c="",u="";function f(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&f(),o()):a===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:a==="("?n=2:Zd.test(a)?p():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function tf(t,e,n){const s=Jd(ef(t.path),n),r=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function nf(t,e){const n=[],s=new Map;e=xo({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,f,p){const v=!p,x=sf(u);x.aliasOf=p&&p.record;const P=xo(e,u),F=[x];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of z)F.push(te({},x,{components:p?p.record.components:x.components,path:I,aliasOf:p?p.record:x}))}let L,N;for(const z of F){const{path:I}=z;if(f&&I[0]!=="/"){const j=f.record.path,Y=j[j.length-1]==="/"?"":"/";z.path=f.record.path+(I&&Y+I)}if(L=tf(z,f,P),p?p.alias.push(L):(N=N||L,N!==L&&N.alias.push(L),v&&u.name&&!To(L)&&o(u.name)),x.children){const j=x.children;for(let Y=0;Y<j.length;Y++)i(j[Y],L,p&&p.children[Y])}p=p||L,(L.record.components&&Object.keys(L.record.components).length||L.record.name||L.record.redirect)&&a(L)}return N?()=>{o(N)}:An}function o(u){if(il(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let f=0;for(;f<n.length&&Xd(u,n[f])>=0&&(u.record.path!==n[f].record.path||!al(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!To(u)&&s.set(u.record.name,u)}function c(u,f){let p,v={},x,P;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw hn(1,{location:u});P=p.record.name,v=te(Io(f.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Io(u.params,p.keys.map(N=>N.name))),x=p.stringify(v)}else if("path"in u)x=u.path,p=n.find(N=>N.re.test(x)),p&&(v=p.parse(x),P=p.record.name);else{if(p=f.name?s.get(f.name):n.find(N=>N.re.test(f.path)),!p)throw hn(1,{location:u,currentLocation:f});P=p.record.name,v=te({},f.params,u.params),x=p.stringify(v)}const F=[];let L=p;for(;L;)F.unshift(L.record),L=L.parent;return{name:P,path:x,params:v,matched:F,meta:of(F)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:r}}function Io(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function sf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:rf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function rf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function To(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function of(t){return t.reduce((e,n)=>te(e,n.meta),{})}function xo(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function al(t,e){return e.children.some(n=>n===t||al(t,n))}const ll=/#/g,af=/&/g,lf=/\//g,cf=/=/g,uf=/\?/g,cl=/\+/g,df=/%5B/g,ff=/%5D/g,ul=/%5E/g,hf=/%60/g,dl=/%7B/g,pf=/%7C/g,fl=/%7D/g,gf=/%20/g;function fi(t){return encodeURI(""+t).replace(pf,"|").replace(df,"[").replace(ff,"]")}function mf(t){return fi(t).replace(dl,"{").replace(fl,"}").replace(ul,"^")}function kr(t){return fi(t).replace(cl,"%2B").replace(gf,"+").replace(ll,"%23").replace(af,"%26").replace(hf,"`").replace(dl,"{").replace(fl,"}").replace(ul,"^")}function _f(t){return kr(t).replace(cf,"%3D")}function vf(t){return fi(t).replace(ll,"%23").replace(uf,"%3F")}function bf(t){return t==null?"":vf(t).replace(lf,"%2F")}function xs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function yf(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(cl," "),o=i.indexOf("="),l=xs(o<0?i:i.slice(0,o)),a=o<0?null:xs(i.slice(o+1));if(l in e){let c=e[l];ze(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Co(t){let e="";for(let n in t){const s=t[n];if(n=_f(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ze(s)?s.map(i=>i&&kr(i)):[s&&kr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wf(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ze(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Ef=Symbol(""),Ro=Symbol(""),Gs=Symbol(""),hi=Symbol(""),Mr=Symbol("");function En(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const a=f=>{f===!1?l(hn(4,{from:n,to:e})):f instanceof Error?l(f):zd(f)?l(hn(2,{from:e,to:f})):(i&&s.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),o())},c=t.call(s&&s.instances[r],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(f=>l(f))})}function lr(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let l=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(If(l)){const c=(l.__vccOpts||l)[e];c&&r.push(vt(c,n,s,i,o))}else{let a=l();r.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Sd(c)?c.default:c;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&vt(p,n,s,i,o)()}))}}return r}function If(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function So(t){const e=Ke(Gs),n=Ke(hi),s=Ve(()=>e.resolve(le(t.to))),r=Ve(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(fn.bind(null,u));if(p>-1)return p;const v=Ao(a[c-2]);return c>1&&Ao(u)===v&&f[f.length-1].path!==v?f.findIndex(fn.bind(null,a[c-2])):p}),i=Ve(()=>r.value>-1&&Cf(n.params,s.value.params)),o=Ve(()=>r.value>-1&&r.value===n.matched.length-1&&sl(n.params,s.value.params));function l(a={}){return xf(a)?e[le(t.replace)?"replace":"push"](le(t.to)).catch(An):Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}const Tf=$a({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:So,setup(t,{slots:e}){const n=$s(So(t)),{options:s}=Ke(Gs),r=Ve(()=>({[Po(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Po(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:nl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),ye=Tf;function xf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Cf(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!ze(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ao(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Po=(t,e,n)=>t??e??n,Rf=$a({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ke(Mr),r=Ve(()=>t.route||s.value),i=Ke(Ro,0),o=Ve(()=>{let c=le(i);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),l=Ve(()=>r.value.matched[o.value]);fs(Ro,Ve(()=>o.value+1)),fs(Ef,l),fs(Mr,r);const a=pe();return us(()=>[a.value,l.value,t.name],([c,u,f],[p,v,x])=>{u&&(u.instances[f]=c,v&&v!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),c&&u&&(!v||!fn(u,v)||!p)&&(u.enterCallbacks[f]||[]).forEach(P=>P(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=l.value,p=f&&f.components[u];if(!p)return Oo(n.default,{Component:p,route:c});const v=f.props[u],x=v?v===!0?c.params:typeof v=="function"?v(c):v:null,F=nl(p,te({},x,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(f.instances[u]=null)},ref:a}));return Oo(n.default,{Component:F,route:c})||F}}});function Oo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sf=Rf;function Af(t){const e=nf(t.routes,t),n=t.parseQuery||yf,s=t.stringifyQuery||Co,r=t.history,i=En(),o=En(),l=En(),a=Vc(gt);let c=gt;Qt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=or.bind(null,b=>""+b),f=or.bind(null,bf),p=or.bind(null,xs);function v(b,O){let R,U;return il(b)?(R=e.getRecordMatcher(b),U=O):U=b,e.addRoute(U,R)}function x(b){const O=e.getRecordMatcher(b);O&&e.removeRoute(O)}function P(){return e.getRoutes().map(b=>b.record)}function F(b){return!!e.getRecordMatcher(b)}function L(b,O){if(O=te({},O||a.value),typeof b=="string"){const g=ar(n,b,O.path),m=e.resolve({path:g.path},O),y=r.createHref(g.fullPath);return te(g,m,{params:p(m.params),hash:xs(g.hash),redirectedFrom:void 0,href:y})}let R;if("path"in b)R=te({},b,{path:ar(n,b.path,O.path).path});else{const g=te({},b.params);for(const m in g)g[m]==null&&delete g[m];R=te({},b,{params:f(g)}),O.params=f(O.params)}const U=e.resolve(R,O),ee=b.hash||"";U.params=u(p(U.params));const d=Od(s,te({},b,{hash:mf(ee),path:U.path})),h=r.createHref(d);return te({fullPath:d,hash:ee,query:s===Co?wf(b.query):b.query||{}},U,{redirectedFrom:void 0,href:h})}function N(b){return typeof b=="string"?ar(n,b,a.value.path):te({},b)}function z(b,O){if(c!==b)return hn(8,{from:O,to:b})}function I(b){return oe(b)}function j(b){return I(te(N(b),{replace:!0}))}function Y(b){const O=b.matched[b.matched.length-1];if(O&&O.redirect){const{redirect:R}=O;let U=typeof R=="function"?R(b):R;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=N(U):{path:U},U.params={}),te({query:b.query,hash:b.hash,params:"path"in U?{}:b.params},U)}}function oe(b,O){const R=c=L(b),U=a.value,ee=b.state,d=b.force,h=b.replace===!0,g=Y(R);if(g)return oe(te(N(g),{state:typeof g=="object"?te({},ee,g.state):ee,force:d,replace:h}),O||R);const m=R;m.redirectedFrom=O;let y;return!d&&kd(s,U,R)&&(y=hn(16,{to:m,from:U}),Ge(U,U,!0,!1)),(y?Promise.resolve(y):me(m,U)).catch(w=>rt(w)?rt(w,2)?w:ht(w):Z(w,m,U)).then(w=>{if(w){if(rt(w,2))return oe(te({replace:h},N(w.to),{state:typeof w.to=="object"?te({},ee,w.to.state):ee,force:d}),O||m)}else w=Ne(m,U,!0,h,ee);return be(m,U,w),w})}function ne(b,O){const R=z(b,O);return R?Promise.reject(R):Promise.resolve()}function fe(b){const O=Gt.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(b):b()}function me(b,O){let R;const[U,ee,d]=Pf(b,O);R=lr(U.reverse(),"beforeRouteLeave",b,O);for(const g of U)g.leaveGuards.forEach(m=>{R.push(vt(m,b,O))});const h=ne.bind(null,b,O);return R.push(h),Te(R).then(()=>{R=[];for(const g of i.list())R.push(vt(g,b,O));return R.push(h),Te(R)}).then(()=>{R=lr(ee,"beforeRouteUpdate",b,O);for(const g of ee)g.updateGuards.forEach(m=>{R.push(vt(m,b,O))});return R.push(h),Te(R)}).then(()=>{R=[];for(const g of d)if(g.beforeEnter)if(ze(g.beforeEnter))for(const m of g.beforeEnter)R.push(vt(m,b,O));else R.push(vt(g.beforeEnter,b,O));return R.push(h),Te(R)}).then(()=>(b.matched.forEach(g=>g.enterCallbacks={}),R=lr(d,"beforeRouteEnter",b,O),R.push(h),Te(R))).then(()=>{R=[];for(const g of o.list())R.push(vt(g,b,O));return R.push(h),Te(R)}).catch(g=>rt(g,8)?g:Promise.reject(g))}function be(b,O,R){l.list().forEach(U=>fe(()=>U(b,O,R)))}function Ne(b,O,R,U,ee){const d=z(b,O);if(d)return d;const h=O===gt,g=Qt?history.state:{};R&&(U||h?r.replace(b.fullPath,te({scroll:h&&g&&g.scroll},ee)):r.push(b.fullPath,ee)),a.value=b,Ge(b,O,R,h),ht()}let Ie;function qe(){Ie||(Ie=r.listen((b,O,R)=>{if(!es.listening)return;const U=L(b),ee=Y(U);if(ee){oe(te(ee,{replace:!0}),U).catch(An);return}c=U;const d=a.value;Qt&&Fd(vo(d.fullPath,R.delta),qs()),me(U,d).catch(h=>rt(h,12)?h:rt(h,2)?(oe(h.to,U).then(g=>{rt(g,20)&&!R.delta&&R.type===Bn.pop&&r.go(-1,!1)}).catch(An),Promise.reject()):(R.delta&&r.go(-R.delta,!1),Z(h,U,d))).then(h=>{h=h||Ne(U,d,!1),h&&(R.delta&&!rt(h,8)?r.go(-R.delta,!1):R.type===Bn.pop&&rt(h,20)&&r.go(-1,!1)),be(U,d,h)}).catch(An)}))}let De=En(),ge=En(),Q;function Z(b,O,R){ht(b);const U=ge.list();return U.length?U.forEach(ee=>ee(b,O,R)):console.error(b),Promise.reject(b)}function st(){return Q&&a.value!==gt?Promise.resolve():new Promise((b,O)=>{De.add([b,O])})}function ht(b){return Q||(Q=!b,qe(),De.list().forEach(([O,R])=>b?R(b):O()),De.reset()),b}function Ge(b,O,R,U){const{scrollBehavior:ee}=t;if(!Qt||!ee)return Promise.resolve();const d=!R&&jd(vo(b.fullPath,0))||(U||!R)&&history.state&&history.state.scroll||null;return Pa().then(()=>ee(b,O,d)).then(h=>h&&Bd(h)).catch(h=>Z(h,b,O))}const Ae=b=>r.go(b);let qt;const Gt=new Set,es={currentRoute:a,listening:!0,addRoute:v,removeRoute:x,hasRoute:F,getRoutes:P,resolve:L,options:t,push:I,replace:j,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ge.add,isReady:st,install(b){const O=this;b.component("RouterLink",ye),b.component("RouterView",Sf),b.config.globalProperties.$router=O,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>le(a)}),Qt&&!qt&&a.value===gt&&(qt=!0,I(r.location).catch(ee=>{}));const R={};for(const ee in gt)Object.defineProperty(R,ee,{get:()=>a.value[ee],enumerable:!0});b.provide(Gs,O),b.provide(hi,wa(R)),b.provide(Mr,a);const U=b.unmount;Gt.add(b),b.unmount=function(){Gt.delete(b),Gt.size<1&&(c=gt,Ie&&Ie(),Ie=null,a.value=gt,qt=!1,Q=!1),U()}}};function Te(b){return b.reduce((O,R)=>O.then(()=>fe(R)),Promise.resolve())}return es}function Pf(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(c=>fn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>fn(c,a))||r.push(a))}return[n,s,r]}function pi(){return Ke(Gs)}function gi(){return Ke(hi)}const Of="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='11'%20cy='11'%20r='7'%20stroke='%23394150'%20stroke-width='2'/%3e%3cpath%20d='M20%2020L17%2017'%20stroke='%23394150'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e";var ko={};/**
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
 */const hl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},kf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],a=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=i>>2,f=(i&3)<<4|l>>4;let p=(l&15)<<2|c>>6,v=c&63;a||(v=64,o||(p=64)),s.push(n[u],n[f],n[p],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||c==null||f==null)throw new Mf;const p=i<<2|l>>4;if(s.push(p),c!==64){const v=l<<4&240|c>>2;if(s.push(v),f!==64){const x=c<<6&192|f;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nf=function(t){const e=hl(t);return pl.encodeByteArray(e,!0)},gl=function(t){return Nf(t).replace(/\./g,"")},ml=function(t){try{return pl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Df(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lf=()=>Df().__FIREBASE_DEFAULTS__,Uf=()=>{if(typeof process>"u"||typeof ko>"u")return;const t=ko.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$f=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ml(t[1]);return e&&JSON.parse(e)},mi=()=>{try{return Lf()||Uf()||$f()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bf=t=>{var e,n;return(n=(e=mi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_l=()=>{var t;return(t=mi())===null||t===void 0?void 0:t.config},vl=t=>{var e;return(e=mi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ff{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Hf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wf(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kf(){try{return typeof indexedDB=="object"}catch{return!1}}function zf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const qf="FirebaseError";class St extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qf,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Gf(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new St(r,l,s)}}function Gf(t,e){return t.replace(Jf,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Jf=/\{\$([^}]+)}/g;function Yf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Mo(i)&&Mo(o)){if(!Cs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Mo(t){return t!==null&&typeof t=="object"}/**
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
 */function qn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Xf(t,e){const n=new Qf(t,e);return n.subscribe.bind(n)}class Qf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Zf(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=cr),r.error===void 0&&(r.error=cr),r.complete===void 0&&(r.complete=cr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cr(){}/**
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
 */function ft(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class eh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ff;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nh(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:th(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function th(t){return t===Dt?void 0:t}function nh(t){return t.instantiationMode==="EAGER"}/**
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
 */class sh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const rh={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ih=re.INFO,oh={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},ah=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=oh[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=ih,this._logHandler=ah,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const lh=(t,e)=>e.some(n=>t instanceof n);let No,Do;function ch(){return No||(No=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uh(){return Do||(Do=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yl=new WeakMap,Nr=new WeakMap,wl=new WeakMap,ur=new WeakMap,_i=new WeakMap;function dh(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yl.set(n,t)}).catch(()=>{}),_i.set(e,t),e}function fh(t){if(Nr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Nr.set(t,e)}let Dr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hh(t){Dr=t(Dr)}function ph(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(dr(this),e,...n);return wl.set(s,e.sort?e.sort():[e]),xt(s)}:uh().includes(t)?function(...e){return t.apply(dr(this),e),xt(yl.get(this))}:function(...e){return xt(t.apply(dr(this),e))}}function gh(t){return typeof t=="function"?ph(t):(t instanceof IDBTransaction&&fh(t),lh(t,ch())?new Proxy(t,Dr):t)}function xt(t){if(t instanceof IDBRequest)return dh(t);if(ur.has(t))return ur.get(t);const e=gh(t);return e!==t&&(ur.set(t,e),_i.set(e,t)),e}const dr=t=>_i.get(t);function mh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=xt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(xt(o.result),a.oldVersion,a.newVersion,xt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),r&&a.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const _h=["get","getKey","getAll","getAllKeys","count"],vh=["put","add","delete","clear"],fr=new Map;function Lo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fr.get(e))return fr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=vh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||_h.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,r?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),r&&a.done]))[0]};return fr.set(e,i),i}hh(t=>({...t,get:(e,n,s)=>Lo(e,n)||t.get(e,n,s),has:(e,n)=>!!Lo(e,n)||t.has(e,n)}));/**
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
 */class bh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lr="@firebase/app",Uo="0.9.25";/**
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
 */const Wt=new bl("@firebase/app"),wh="@firebase/app-compat",Eh="@firebase/analytics-compat",Ih="@firebase/analytics",Th="@firebase/app-check-compat",xh="@firebase/app-check",Ch="@firebase/auth",Rh="@firebase/auth-compat",Sh="@firebase/database",Ah="@firebase/database-compat",Ph="@firebase/functions",Oh="@firebase/functions-compat",kh="@firebase/installations",Mh="@firebase/installations-compat",Nh="@firebase/messaging",Dh="@firebase/messaging-compat",Lh="@firebase/performance",Uh="@firebase/performance-compat",$h="@firebase/remote-config",Bh="@firebase/remote-config-compat",Fh="@firebase/storage",jh="@firebase/storage-compat",Hh="@firebase/firestore",Vh="@firebase/firestore-compat",Wh="firebase",Kh="10.7.1";/**
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
 */const Ur="[DEFAULT]",zh={[Lr]:"fire-core",[wh]:"fire-core-compat",[Ih]:"fire-analytics",[Eh]:"fire-analytics-compat",[xh]:"fire-app-check",[Th]:"fire-app-check-compat",[Ch]:"fire-auth",[Rh]:"fire-auth-compat",[Sh]:"fire-rtdb",[Ah]:"fire-rtdb-compat",[Ph]:"fire-fn",[Oh]:"fire-fn-compat",[kh]:"fire-iid",[Mh]:"fire-iid-compat",[Nh]:"fire-fcm",[Dh]:"fire-fcm-compat",[Lh]:"fire-perf",[Uh]:"fire-perf-compat",[$h]:"fire-rc",[Bh]:"fire-rc-compat",[Fh]:"fire-gcs",[jh]:"fire-gcs-compat",[Hh]:"fire-fst",[Vh]:"fire-fst-compat","fire-js":"fire-js",[Wh]:"fire-js-all"};/**
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
 */const Rs=new Map,$r=new Map;function qh(t,e){try{t.container.addComponent(e)}catch(n){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if($r.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;$r.set(e,t);for(const n of Rs.values())qh(n,t);return!0}function El(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Gh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new zn("app","Firebase",Gh);/**
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
 */class Jh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=Kh;function Il(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ur,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});if(n||(n=_l()),!n)throw Ct.create("no-options");const i=Rs.get(r);if(i){if(Cs(n,i.options)&&Cs(s,i.config))return i;throw Ct.create("duplicate-app",{appName:r})}const o=new sh(r);for(const a of $r.values())o.addComponent(a);const l=new Jh(n,s,o);return Rs.set(r,l),l}function Yh(t=Ur){const e=Rs.get(t);if(!e&&t===Ur&&_l())return Il();if(!e)throw Ct.create("no-app",{appName:t});return e}function rn(t,e,n){var s;let r=(s=zh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(l.join(" "));return}Fn(new pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Xh="firebase-heartbeat-database",Qh=1,jn="firebase-heartbeat-store";let hr=null;function Tl(){return hr||(hr=mh(Xh,Qh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jn)}}}).catch(t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})})),hr}async function Zh(t){try{return await(await Tl()).transaction(jn).objectStore(jn).get(xl(t))}catch(e){if(e instanceof St)Wt.warn(e.message);else{const n=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(n.message)}}}async function $o(t,e){try{const s=(await Tl()).transaction(jn,"readwrite");await s.objectStore(jn).put(e,xl(t)),await s.done}catch(n){if(n instanceof St)Wt.warn(n.message);else{const s=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(s.message)}}}function xl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ep=1024,tp=30*24*60*60*1e3;class np{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=tp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bo(),{heartbeatsToSend:s,unsentEntries:r}=sp(this._heartbeatsCache.heartbeats),i=gl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bo(){return new Date().toISOString().substring(0,10)}function sp(t,e=ep){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Fo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Fo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kf()?zf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fo(t){return gl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ip(t){Fn(new pn("platform-logger",e=>new bh(e),"PRIVATE")),Fn(new pn("heartbeat",e=>new np(e),"PRIVATE")),rn(Lr,Uo,t),rn(Lr,Uo,"esm2017"),rn("fire-js","")}ip("");function vi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Cl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const op=Cl,Rl=new zn("auth","Firebase",Cl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new bl("@firebase/auth");function ap(t,...e){Ss.logLevel<=re.WARN&&Ss.warn(`Auth (${Gn}): ${t}`,...e)}function ps(t,...e){Ss.logLevel<=re.ERROR&&Ss.error(`Auth (${Gn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,...e){throw bi(t,...e)}function et(t,...e){return bi(t,...e)}function Sl(t,e,n){const s=Object.assign(Object.assign({},op()),{[e]:n});return new zn("auth","Firebase",s).create(e,{appName:t.name})}function lp(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&$e(t,"argument-error"),Sl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Rl.create(t,...e)}function V(t,e,...n){if(!t)throw bi(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ps(e),new Error(e)}function ut(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cp(){return jo()==="http:"||jo()==="https:"}function jo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cp()||Hf()||"connection"in navigator)?navigator.onLine:!0}function dp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=jf()||Vf()}get(){return up()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new Jn(3e4,6e4);function At(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pt(t,e,n,s,r={}){return Pl(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=qn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Al.fetch()(Ol(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Pl(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},fp),e);try{const r=new gp(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw as(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw as(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw as(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw as(t,"user-disabled",o);const u=s[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Sl(t,u,c);$e(t,u)}}catch(r){if(r instanceof St)throw r;$e(t,"network-request-failed",{message:String(r)})}}async function Yn(t,e,n,s,r={}){const i=await Pt(t,e,n,s,r);return"mfaPendingCredential"in i&&$e(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ol(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?yi(t.config,r):`${t.config.apiScheme}://${r}`}function pp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(et(this.auth,"network-request-failed")),hp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function as(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=et(t,e,s);return r.customData._tokenResponse=n,r}function Ho(t){return t!==void 0&&t.enterprise!==void 0}class mp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _p(t,e){return Pt(t,"GET","/v2/recaptchaConfig",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t,e){return Pt(t,"POST","/v1/accounts:delete",e)}async function bp(t,e){return Pt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yp(t,e=!1){const n=ft(t),s=await n.getIdToken(e),r=wi(s);V(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:On(pr(r.auth_time)),issuedAtTime:On(pr(r.iat)),expirationTime:On(pr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pr(t){return Number(t)*1e3}function wi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ps("JWT malformed, contained fewer than 3 sections"),null;try{const r=ml(n);return r?JSON.parse(r):(ps("Failed to decode base64 JWT payload"),null)}catch(r){return ps("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function wp(t){const e=wi(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof St&&Ep(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ep({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function As(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Hn(t,bp(n,{idToken:s}));V(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cp(i.providerUserInfo):[],l=xp(t.providerData,o),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new kl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Tp(t){const e=ft(t);await As(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xp(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Cp(t){return t.map(e=>{var{providerId:n}=e,s=vi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(t,e){const n=await Pl(t,{},async()=>{const s=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Ol(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Al.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Sp(t,e){return Pt(t,"POST","/v2/accounts:revokeToken",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Rp(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Vn;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(V(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=vi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ip(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yp(this,e)}reload(){return Tp(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await As(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hn(this,vp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,a,c,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,L=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:I,isAnonymous:j,providerData:Y,stsTokenManager:oe}=n;V(z&&oe,e,"internal-error");const ne=Vn.fromJSON(this.name,oe);V(typeof z=="string",e,"internal-error"),mt(f,e.name),mt(p,e.name),V(typeof I=="boolean",e,"internal-error"),V(typeof j=="boolean",e,"internal-error"),mt(v,e.name),mt(x,e.name),mt(P,e.name),mt(F,e.name),mt(L,e.name),mt(N,e.name);const fe=new Ht({uid:z,auth:e,email:p,emailVerified:I,displayName:f,isAnonymous:j,photoURL:x,phoneNumber:v,tenantId:P,stsTokenManager:ne,createdAt:L,lastLoginAt:N});return Y&&Array.isArray(Y)&&(fe.providerData=Y.map(me=>Object.assign({},me))),F&&(fe._redirectEventId=F),fe}static async _fromIdTokenResponse(e,n,s=!1){const r=new Vn;r.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await As(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map;function at(t){ut(t instanceof Function,"Expected a class definition");let e=Vo.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vo.set(t,e),e)}/**
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
 */class Ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ml.type="NONE";const Wo=Ml;/**
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
 */function gs(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=gs(this.userKey,r.apiKey,i),this.fullPersistenceKey=gs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new on(at(Wo),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||at(Wo);const o=gs(s,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const f=Ht._fromJSON(e,u);c!==i&&(l=f),i=c;break}}catch{}const a=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new on(i,e,s):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new on(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ll(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($l(e))return"Blackberry";if(Bl(e))return"Webos";if(Ei(e))return"Safari";if((e.includes("chrome/")||Dl(e))&&!e.includes("edge/"))return"Chrome";if(Ul(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Nl(t=Re()){return/firefox\//i.test(t)}function Ei(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dl(t=Re()){return/crios\//i.test(t)}function Ll(t=Re()){return/iemobile/i.test(t)}function Ul(t=Re()){return/android/i.test(t)}function $l(t=Re()){return/blackberry/i.test(t)}function Bl(t=Re()){return/webos/i.test(t)}function Js(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ap(t=Re()){var e;return Js(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pp(){return Wf()&&document.documentMode===10}function Fl(t=Re()){return Js(t)||Ul(t)||Bl(t)||$l(t)||/windows phone/i.test(t)||Ll(t)}function Op(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t,e=[]){let n;switch(t){case"Browser":n=Ko(Re());break;case"Worker":n=`${Ko(Re())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${s}`}/**
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
 */class kp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Mp(t,e={}){return Pt(t,"GET","/v2/passwordPolicy",At(t,e))}/**
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
 */const Np=6;class Dp{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Np,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(s=a.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsLowercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zo(this),this.idTokenSubscription=new zo(this),this.beforeStateQueue=new kp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await As(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ft(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mp(this),n=new Dp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Sp(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,s,r);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ap(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ot(t){return ft(t)}class zo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xf(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hl(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=et("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Up().appendChild(s)})}function $p(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Bp="https://www.google.com/recaptcha/enterprise.js?render=",Fp="recaptcha-enterprise",jp="NO_RECAPTCHA";class Hp{constructor(e){this.type=Fp,this.auth=Ot(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{_p(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new mp(a);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function r(i,o,l){const a=window.grecaptcha;Ho(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(jp)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(l=>{if(!n&&Ho(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Hl(Bp+l).then(()=>{r(l,i,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function qo(t,e,n,s=!1){const r=new Hp(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Fr(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qo(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qo(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t,e){const n=El(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Cs(i,e??{}))return r;$e(r,"already-initialized")}return n.initialize({options:e})}function Wp(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Kp(t,e,n){const s=Ot(t);V(s._canInitEmulator,s,"emulator-config-failed"),V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Vl(e),{host:o,port:l}=zp(e),a=l===null?"":`:${l}`;s.config.emulator={url:`${i}//${o}${a}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||qp()}function Vl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zp(t){const e=Vl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Go(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Go(o)}}}function Go(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function Gp(t,e){return Pt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",At(t,e))}async function Xp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Ii{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Wn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Wn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fr(e,n,"signInWithPassword",Jp);case"emailLink":return Yp(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fr(e,s,"signUpPassword",Gp);case"emailLink":return Xp(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="http://localhost";class Kt extends Ii{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=vi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Kt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,an(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:Qp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eg(t){const e=xn(Cn(t)).link,n=e?xn(Cn(e)).deep_link_id:null,s=xn(Cn(t)).deep_link_id;return(s?xn(Cn(s)).link:null)||s||n||e||t}class Ti{constructor(e){var n,s,r,i,o,l;const a=xn(Cn(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(s=a.oobCode)!==null&&s!==void 0?s:null,f=Zp((r=a.mode)!==null&&r!==void 0?r:null);V(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=eg(e);try{return new Ti(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.providerId=yn.PROVIDER_ID}static credential(e,n){return Wn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ti.parseLink(n);return V(s,"argument-error"),Wn._fromEmailAndCode(e,s.code,s.tenantId)}}yn.PROVIDER_ID="password";yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xn extends xi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Xn{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kt._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Qe.credential(n,s)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Xn{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Xn{constructor(){super("twitter.com")}static credential(e,n){return Kt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Et.credential(n,s)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(t,e){return Yn(t,"POST","/v1/accounts:signUp",At(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ht._fromIdTokenResponse(e,s,r),o=Jo(s);return new zt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Jo(s);return new zt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Jo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends St{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ps.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ps(e,n,s,r)}}function Wl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ps._fromErrorAndOperation(t,i,e,s):i})}async function ng(t,e,n=!1){const s=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zt._forOperation(t,"link",s)}/**
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
 */async function sg(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Hn(t,Wl(s,r,e,t),n);V(i.idToken,s,"internal-error");const o=wi(i.idToken);V(o,s,"internal-error");const{sub:l}=o;return V(t.uid===l,s,"user-mismatch"),zt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$e(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(t,e,n=!1){const s="signIn",r=await Wl(t,s,e),i=await zt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function rg(t,e){return Kl(Ot(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(t){const e=Ot(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ig(t,e,n){const s=Ot(t),o=await Fr(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tg).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&zl(t),a}),l=await zt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function og(t,e,n){return rg(ft(t),yn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&zl(t),s})}function ag(t,e,n,s){return ft(t).onIdTokenChanged(e,n,s)}function lg(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function ql(t,e,n,s){return ft(t).onAuthStateChanged(e,n,s)}function cg(t){return ft(t).signOut()}const Os="__sak";/**
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
 */class Gl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Os,"1"),this.storage.removeItem(Os),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(){const t=Re();return Ei(t)||Js(t)}const dg=1e3,fg=10;class Jl extends Gl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ug()&&Op(),this.fallbackToPolling=Fl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Pp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,fg):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},dg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jl.type="LOCAL";const hg=Jl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends Gl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yl.type="SESSION";const Xl=Yl;/**
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
 */function pg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ys(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async c=>c(n.origin,i)),a=await pg(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ys.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const c=Ci("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(p.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function mg(t){tt().location.href=t}/**
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
 */function Ql(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function _g(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bg(){return Ql()?self:null}/**
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
 */const Zl="firebaseLocalStorageDb",yg=1,ks="firebaseLocalStorage",ec="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xs(t,e){return t.transaction([ks],e?"readwrite":"readonly").objectStore(ks)}function wg(){const t=indexedDB.deleteDatabase(Zl);return new Qn(t).toPromise()}function jr(){const t=indexedDB.open(Zl,yg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ks,{keyPath:ec})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ks)?e(s):(s.close(),await wg(),e(await jr()))})})}async function Yo(t,e,n){const s=Xs(t,!0).put({[ec]:e,value:n});return new Qn(s).toPromise()}async function Eg(t,e){const n=Xs(t,!1).get(e),s=await new Qn(n).toPromise();return s===void 0?null:s.value}function Xo(t,e){const n=Xs(t,!0).delete(e);return new Qn(n).toPromise()}const Ig=800,Tg=3;class tc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Tg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ql()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ys._getInstance(bg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _g(),!this.activeServiceWorker)return;this.sender=new gg(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jr();return await Yo(e,Os,"1"),await Xo(e,Os),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Eg(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Xs(r,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tc.type="LOCAL";const xg=tc;new Jn(3e4,6e4);/**
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
 */function nc(t,e){return e?at(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ri extends Ii{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Cg(t){return Kl(t.auth,new Ri(t),t.bypassAuthState)}function Rg(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),sg(n,new Ri(t),t.bypassAuthState)}async function Sg(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),ng(n,new Ri(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cg;case"linkViaPopup":case"linkViaRedirect":return Sg;case"reauthViaPopup":case"reauthViaRedirect":return Rg;default:$e(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Jn(2e3,1e4);async function rc(t,e,n){const s=Ot(t);lp(t,e,xi);const r=nc(s,n);return new Bt(s,"signInViaPopup",e,r).executeNotNull()}class Bt extends sc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Ci();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ag.get())};e()}}Bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="pendingRedirect",ms=new Map;class Og extends sc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ms.get(this.auth._key());if(!e){try{const s=await kg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ms.set(this.auth._key(),e)}return this.bypassAuthState||ms.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kg(t,e){const n=Dg(e),s=Ng(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Mg(t,e){ms.set(t._key(),e)}function Ng(t){return at(t._redirectPersistence)}function Dg(t){return gs(Pg,t.config.apiKey,t.name)}async function Lg(t,e,n=!1){const s=Ot(t),r=nc(s,e),o=await new Og(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=10*60*1e3;class $g{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ic(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(et(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ug&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qo(e))}saveEventToCache(e){this.cachedEventUids.add(Qo(e)),this.lastProcessedEventTime=Date.now()}}function Qo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ic({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ic(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(t,e={}){return Pt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hg=/^https?/;async function Vg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fg(t);for(const n of e)try{if(Wg(n))return}catch{}$e(t,"unauthorized-domain")}function Wg(t){const e=Br(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Hg.test(n))return!1;if(jg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Kg=new Jn(3e4,6e4);function Zo(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zg(t){return new Promise((e,n)=>{var s,r,i;function o(){Zo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zo(),n(et(t,"network-request-failed"))},timeout:Kg.get()})}if(!((r=(s=tt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const l=$p("iframefcb");return tt()[l]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},Hl(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw _s=null,e})}let _s=null;function qg(t){return _s=_s||zg(t),_s}/**
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
 */const Gg=new Jn(5e3,15e3),Jg="__/auth/iframe",Yg="emulator/auth/iframe",Xg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zg(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yi(e,Yg):`https://${t.config.authDomain}/${Jg}`,s={apiKey:e.apiKey,appName:t.name,v:Gn},r=Qg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${qn(s).slice(1)}`}async function em(t){const e=await qg(t),n=tt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:Zg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),l=tt().setTimeout(()=>{i(o)},Gg.get());function a(){tt().clearTimeout(l),r(s)}s.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const tm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nm=500,sm=600,rm="_blank",im="http://localhost";class ea{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function om(t,e,n,s=nm,r=sm){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const a=Object.assign(Object.assign({},tm),{width:s.toString(),height:r.toString(),top:i,left:o}),c=Re().toLowerCase();n&&(l=Dl(c)?rm:n),Nl(c)&&(e=e||im,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[v,x])=>`${p}${v}=${x},`,"");if(Ap(c)&&l!=="_self")return am(e||"",l),new ea(null);const f=window.open(e||"",l,u);V(f,t,"popup-blocked");try{f.focus()}catch{}return new ea(f)}function am(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const lm="__/auth/handler",cm="emulator/auth/handler",um=encodeURIComponent("fac");async function ta(t,e,n,s,r,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Gn,eventId:r};if(e instanceof xi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof Xn){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await t._getAppCheckToken(),c=a?`#${um}=${encodeURIComponent(a)}`:"";return`${dm(t)}?${qn(l).slice(1)}${c}`}function dm({config:t}){return t.emulator?yi(t,cm):`https://${t.authDomain}/${lm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="webStorageSupport";class fm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xl,this._completeRedirectFn=Lg,this._overrideRedirectResult=Mg}async _openPopup(e,n,s,r){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ta(e,n,s,Br(),r);return om(e,o,Ci())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ta(e,n,s,Br(),r);return mg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ut(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await em(e),s=new $g(e);return n.register("authEvent",r=>(V(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gr,{type:gr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[gr];o!==void 0&&n(!!o),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fl()||Ei()||Js()}}const hm=fm;var na="@firebase/auth",sa="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mm(t){Fn(new pn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jl(t)},c=new Lp(s,r,i,a);return Wp(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Fn(new pn("auth-internal",e=>{const n=Ot(e.getProvider("auth").getImmediate());return(s=>new pm(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(na,sa,gm(t)),rn(na,sa,"esm2017")}/**
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
 */const _m=5*60,vm=vl("authIdTokenMaxAge")||_m;let ra=null;const bm=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>vm)return;const r=n==null?void 0:n.token;ra!==r&&(ra=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function gn(t=Yh()){const e=El(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vp(t,{popupRedirectResolver:hm,persistence:[xg,hg,Xl]}),s=vl("authTokenSyncURL");if(s){const i=bm(s);lg(n,i,()=>i(n.currentUser)),ag(n,o=>i(o))}const r=Bf("auth");return r&&Kp(n,`http://${r}`),n}mm("Browser");const ym="/assets/hero-imagehc-D6vI5bIK.jpg",wm="/assets/hero-text--xnBRz4p.svg",Zn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Em={},Im={class:"sm:pt-[12px] w-full"},Tm=_("div",{class:"maintop relative"},[_("img",{src:ym,alt:"",srcset:"",class:"w-full h-[190px] sm:h-[330px] sm:rounded-lg mainimg sm:hidden md:block md:h-full 2xl:h-[65vh]"}),_("img",{src:wm,alt:"",srcset:"",class:"absolute top-6 right-20 sm:top-8 sm:right-16 w-[35%] sm:w-[45%] md:w-[35%] md:top-[8%] md:right-[15%] 2xl:w-[30%] 2xl:right-[22%]"})],-1),xm=[Tm];function Cm(t,e){return A(),M("div",Im,xm)}const Rm=Zn(Em,[["render",Cm]]),Sm={class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},Am=["src"],Pm=["src"],Om=["src"],km=["src"],Mm=["src"],Nm=["src"],Dm=["src"],Lm=["src"],Um=["src"],$m="https://www.themealdb.com/api/json/v1/1/lookup.php?i=53049",Bm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52893",Fm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768",jm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767",Hm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855",Vm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52894",Wm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52877",Km="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52835",zm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52999",qm={__name:"baserecipes",setup(t){const e=pe({});fetch(`${$m}`).then(u=>u.json()).then(u=>{e.value=u});const n=pe({});fetch(`${Bm}`).then(u=>u.json()).then(u=>{n.value=u});const s=pe({});fetch(`${Fm}`).then(u=>u.json()).then(u=>{s.value=u});const r=pe({});fetch(`${jm}`).then(u=>u.json()).then(u=>{r.value=u});const i=pe({});fetch(`${Hm}`).then(u=>u.json()).then(u=>{i.value=u});const o=pe({});fetch(`${Vm}`).then(u=>u.json()).then(u=>{o.value=u});const l=pe({});fetch(`${Wm}`).then(u=>u.json()).then(u=>{l.value=u});const a=pe({});fetch(`${Km}`).then(u=>u.json()).then(u=>{a.value=u});const c=pe({});return fetch(`${zm}`).then(u=>u.json()).then(u=>{c.value=u}),(u,f)=>(A(),M("section",Sm,[(A(!0),M(de,null,Oe(e.value.meals,p=>(A(),M("div",null,[q(le(ye),{to:/meals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ce(()=>[_("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Am),_("div",null,k(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(A(!0),M(de,null,Oe(n.value.meals,p=>(A(),M("div",null,[q(le(ye),{to:/meals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ce(()=>[_("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Pm),_("div",null,k(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(A(!0),M(de,null,Oe(s.value.meals,p=>(A(),M("div",null,[q(le(ye),{to:/meals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ce(()=>[_("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Om),_("div",null,k(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(A(!0),M(de,null,Oe(r.value.meals,p=>(A(),M("div",null,[q(le(ye),{to:/meals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ce(()=>[_("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,km),_("div",null,k(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(A(!0),M(de,null,Oe(i.value.meals,p=>(A(),M("div",null,[q(le(ye),{to:/meals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ce(()=>[_("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Mm),_("div",null,k(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(A(!0),M(de,null,Oe(o.value.meals,p=>(A(),M("div",null,[q(le(ye),{to:/meals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ce(()=>[_("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Nm),_("div",null,k(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(A(!0),M(de,null,Oe(l.value.meals,p=>(A(),M("div",null,[q(le(ye),{to:/meals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ce(()=>[_("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Dm),_("div",null,k(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(A(!0),M(de,null,Oe(a.value.meals,p=>(A(),M("div",null,[q(le(ye),{to:/meals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ce(()=>[_("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Lm),_("div",null,k(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(A(!0),M(de,null,Oe(c.value.meals,p=>(A(),M("div",null,[q(le(ye),{to:/meals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ce(()=>[_("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Um),_("div",null,k(p.strMeal),1)]),_:2},1032,["to"])]))),256))]))}},Gm={class:"grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-4 xl:gap-6"},Jm={class:"relative"},Ym=["src"],Xm={class:"flex justify-center items-center text-[14px] 2xl:text-[16px]"},Qm="https://www.themealdb.com/api/json/v1/1/categories.php?",Zm={__name:"categories",setup(t){const e=pe({});return fetch(`${Qm}`).then(n=>n.json()).then(n=>{e.value=n.categories}),(n,s)=>{const r=js("router-link");return A(),M("section",Gm,[(A(!0),M(de,null,Oe(e.value,i=>(A(),M("div",Jm,[q(r,{to:/category/+i.strCategory,class:"bg-transparent bg-[#0E1325] border border-[#394150] flex gap-3 rounded-xl duration-300 hover:bg-[#FEBD2E] text-[#E5E7EB] hover:text-black hover:font-bold overflow-hidden"},{default:ce(()=>[_("img",{src:i.strCategoryThumb,alt:"",srcset:"",class:"catimg w-[50%] sm:w-[32%] lg:w-[42%] xl:w-[63%] lg:ml-[-40px] sm:ml-[-40px] ml-[-20px] itemimg rounded-l-full"},null,8,Ym),_("div",Xm,k(i.strCategory),1)]),_:2},1032,["to"])]))),256))])}}},e_={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] 2xl:pt-[10%] gap-4"},t_={class:"stepone w-[90%] flex flex-col gap-6 text-white"},n_={class:"flex flex-col gap-6 text-white p-[15px]",id:"register"},s_={class:"flex justify-between"},r_=_("div",{class:"text-[24px]"},"Login",-1),i_={class:"flex flex-col justify-center items-center gap-2"},o_=_("p",{class:"text-[10px]"},"Don't have an acount?",-1),a_={class:"flex flex-col gap-2 text-[#E5E7EB]"},l_=_("label",{for:"Email",name:"Email",class:"text-[18px]"},"Email",-1),c_={class:"flex flex-col gap-2"},u_=_("label",{for:"password",name:"password",class:"text-[18px]"},"Password",-1),d_={key:0},f_=_("div",null,"or",-1),h_={__name:"login",setup(t){const e=pe(""),n=pe(""),s=pi(),r=pe(""),i=()=>{const l=gn();og(l,e.value,n.value).then(a=>{console.log("successfully signed in!"),console.log(l.currentUser),s.push("/home")}).catch(a=>{switch(console.log(a.code),a.code){case"auth/invalid-email":r.value="invalid email";break;case"auth/user-not-found":r.value="No account with that email was found";break;case"auth/wrong-password":r.value="incorrect password";break;default:r.value="Email or password was incorrect";break}})},o=()=>{const l=new Qe;rc(gn(),l).then(a=>{console.log(a.user),s.push("/home")}).catch(a=>{})};return(l,a)=>(A(),M("div",e_,[_("form",{onSubmit:a[2]||(a[2]=di((...c)=>l.login&&l.login(...c),["prevent"])),class:"bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]"},[_("div",t_,[_("div",n_,[_("div",s_,[r_,_("div",i_,[q(le(ye),{to:"/signup",class:"text-[20px] px-3 rounded-lg text-black duration-300 bg-white"},{default:ce(()=>[li("Sign Up")]),_:1}),o_])]),_("div",a_,[l_,Ln(_("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),type:"text",id:"Email",placeholder:"Email",name:"Email",class:"Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[$n,e.value]])]),_("div",c_,[u_,Ln(_("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c),type:"text",placeholder:"password",id:"password",class:"password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[$n,n.value]])])]),r.value?(A(),M("p",d_,k(r.value),1)):he("",!0),_("div",{class:"w-full flex flex-col items-center justify-center text-white gap-3"},[_("button",{onClick:i,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Submit"),f_,_("button",{onClick:o,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Sign in with google")])])],32)]))}},p_={class:"flex flex-col gap-4 sm:px-[12px] 2xl:px-[16px] pb-10"},g_={class:"flex flex-col lg:flex-row justify-between gap-3 sm:gap-8 px-3 sm:px-5 xl:px-14"},m_={class:"flex flex-col sm:w-full lg:w-[35%] gap-3 sm:gap-6"},__=_("div",{class:"text-white text-[24px] cathead flex justify-left items-center"},"Categories",-1),v_={class:"w-full flex flex-col gap-8"},b_={class:"flex justify-between gap-3 text-[14px]"},y_=_("img",{src:Of,alt:"",srcset:"",class:"absolute top-3 left-4"},null,-1),w_=_("i",{class:"fa-regular fa-square-plus"},null,-1),E_=_("div",{class:"font-semibold"},"CREATE",-1),I_=_("i",{class:"fa-solid fa-right-from-bracket text-base"},null,-1),T_=_("div",{class:"text-base"},"Logout",-1),x_=[I_,T_],C_={key:0,class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},R_=["src"],S_={key:1},A_={__name:"home",setup(t){const e=pe(!1),n=pi(),s=gn();ja(()=>{ql(s,a=>{a?e.value=!0:e.value=!1})});const r=()=>{cg(s).then(()=>{n.push("/")})},i=pe(""),o=pe([]),l=()=>{i.value!==""&&fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${i.value}`).then(a=>a.json()).then(a=>{o.value=a.meals?a.meals:[],i.value=""}).catch(a=>{console.error("Error fetching data:",a)})};return(a,c)=>(A(),M("main",p_,[q(Rm),_("section",g_,[_("div",m_,[__,(A(),Is(zi,null,{default:ce(()=>[q(Zm)]),_:1}))]),_("div",v_,[_("div",b_,[_("form",{class:"relative w-[60%]",onSubmit:di(l,["prevent"]),onClick:c[1]||(c[1]=u=>a.bro==!1)},[Ln(_("input",{type:"text",placeholder:"Search recipes and more...",name:"search-input",class:"border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14","onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u)},null,512),[[$n,i.value]]),y_],32),q(le(ye),{to:"/home",class:"relative flex justify-center items-center bg-white rounded-full p-8 py-3 gap-2 h-12 text-[#394150]"},{default:ce(()=>[w_,E_]),_:1}),e.value?(A(),M("button",{key:0,onClick:r,class:"bg-yellow-400 px-3 rounded-xl flex gap-2 justify-center items-center"},x_)):he("",!0)]),o.value&&o.value.length>0?(A(),M("section",C_,[(A(!0),M(de,null,Oe(o.value,u=>(A(),M("div",null,[q(le(ye),{to:/meals/+u.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:ce(()=>[_("img",{src:u.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,R_),_("div",null,k(u.strMeal),1)]),_:2},1032,["to"])]))),256))])):(A(),M("section",S_,[(A(),Is(zi,null,{default:ce(()=>[q(qm)]),_:1}))]))])])]))}},Si="/assets/logo-light-NOLr421m.svg",Ai="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%206L9%2012L15%2018'%20stroke='%230D101D'%20stroke-width='2'/%3e%3c/svg%3e",kt=t=>(ni("data-v-ec837983"),t=t(),si(),t),P_={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},O_={class:"flex flex-col gap-10"},k_={class:"px-3 flex justify-between text-[12px] md:text-base text-[#394150] w-full"},M_=kt(()=>_("img",{src:Si,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),N_=kt(()=>_("img",{src:Ai,alt:"",srcset:""},null,-1)),D_=kt(()=>_("div",null,"Back to categories",-1)),L_={class:"flex flex-col gap-10 w-full sm:px-[18%] 2xl:px-[25%]"},U_=["src"],$_={class:"flex flex-col gap-4"},B_={class:"text-[30px] md:text-[45px] detailhead"},F_={class:"flex gap-4"},j_=kt(()=>_("div",null,"category:",-1)),H_={class:"font-bold"},V_=kt(()=>_("div",null,"Area:",-1)),W_={class:"font-bold"},K_={class:"ingredients flex flex-col gap-5 px-2 md:px-0"},z_=kt(()=>_("div",{class:"flex gap-4"},[_("button",{class:"bg-[#FEBD2E] p-3 py-5 rounded-full"}),_("h3",{class:"font-bold flex items-center text-[18px]"},"Ingredients")],-1)),q_={class:"list-disc px-[5%] flex flex-col gap-2 text-[18px]"},G_={key:0},J_={key:1},Y_={key:2},X_={key:3},Q_={key:4},Z_={key:5},ev={key:6},tv={key:7},nv={key:8},sv={key:9},rv={key:10},iv={key:11},ov={key:12},av={key:13},lv={key:14},cv={key:15},uv={key:16},dv={key:17},fv={key:18},hv={key:19},pv={class:"Instructions flex flex-col gap-5 px-2 md:px-0 pb-14"},gv=kt(()=>_("div",{class:"flex gap-4"},[_("button",{class:"bg-[#4E80EE] p-3 py-5 rounded-full"}),_("h3",{class:"font-bold flex items-center text-[18px]"},"Instructions")],-1)),mv={class:"text-[17px] instruct whitespace-pre-line"},_v=kt(()=>_("div",null,"Video",-1)),vv=["href"],bv={class:"text-[#845EEE]"},yv={__name:"details",setup(t){const e=pe({}),n=gi();return Vs(async()=>{const r=await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${n.params.id}`)).json();e.value=r}),(s,r)=>(A(),M("main",P_,[_("section",O_,[_("div",k_,[M_,q(le(ye),{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ce(()=>[N_,D_]),_:1})]),(A(!0),M(de,null,Oe(e.value.meals,i=>(A(),M("div",L_,[_("img",{src:i.strMealThumb,alt:"",srcset:"",class:"rounded-lg w-full sm:h-[450px] 2xl:h-[500px]"},null,8,U_),_("div",$_,[_("h2",B_,k(i.strMeal),1),_("div",F_,[q(le(ye),{to:/category/+i.strCategory,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:ce(()=>[j_,_("div",H_,k(i.strCategory),1)]),_:2},1032,["to"]),q(le(ye),{to:/area/+i.strArea,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:ce(()=>[V_,_("div",W_,k(i.strArea),1)]),_:2},1032,["to"])])]),_("div",K_,[z_,_("ul",q_,[i.strIngredient1.length>1&&i.strMeasure1!==null?(A(),M("li",G_,k(i.strMeasure1)+" "+k(i.strIngredient1),1)):he("",!0),i.strIngredient2.length>1?(A(),M("li",J_,k(i.strMeasure2)+" "+k(i.strIngredient2),1)):he("",!0),i.strIngredient3.length>1?(A(),M("li",Y_,k(i.strMeasure3)+" "+k(i.strIngredient3),1)):he("",!0),i.strIngredient4.length>1?(A(),M("li",X_,k(i.strMeasure4)+" "+k(i.strIngredient4),1)):he("",!0),i.strIngredient5.length>1?(A(),M("li",Q_,k(i.strMeasure5)+" "+k(i.strIngredient5),1)):he("",!0),i.strMeasure6!==null&&i.strIngredient6.length>1?(A(),M("li",Z_,k(i.strMeasure6)+" "+k(i.strIngredient6),1)):he("",!0),i.strMeasure7!==null&&i.strIngredient7.length>1?(A(),M("li",ev,k(i.strMeasure7)+" "+k(i.strIngredient7),1)):he("",!0),i.strMeasure8!==null&&i.strIngredient8.length>1?(A(),M("li",tv,k(i.strMeasure8)+" "+k(i.strIngredient8),1)):he("",!0),i.strMeasure9!==null&&i.strIngredient9.length>1?(A(),M("li",nv,k(i.strMeasure9)+" "+k(i.strIngredient9),1)):he("",!0),i.strMeasure10!==null&&i.strIngredient10.length>1?(A(),M("li",sv,k(i.strMeasure10)+" "+k(i.strIngredient10),1)):he("",!0),i.strMeasure11!==null&&i.strIngredient11.length>1?(A(),M("li",rv,k(i.strMeasure11)+" "+k(i.strIngredient11),1)):he("",!0),i.strMeasure12!==null&&i.strIngredient12.length>1?(A(),M("li",iv,k(i.strMeasure12)+" "+k(i.strIngredient12),1)):he("",!0),i.strMeasure13!==null&&i.strIngredient13.length>1?(A(),M("li",ov,k(i.strMeasure13)+" "+k(i.strIngredient13),1)):he("",!0),i.strMeasure14!==null&&i.strIngredient14.length>1?(A(),M("li",av,k(i.strMeasure14)+" "+k(i.strIngredient14),1)):he("",!0),i.strMeasure15!==null&&i.strIngredient15.length>1?(A(),M("li",lv,k(i.strMeasure15)+" "+k(i.strIngredient15),1)):he("",!0),i.strMeasure16!==null&&i.strIngredient16.length>1?(A(),M("li",cv,k(i.strMeasure16)+" "+k(i.strIngredient16),1)):he("",!0),i.strMeasure17!==null&&i.strIngredient17.length>1?(A(),M("li",uv,k(i.strMeasure17)+" "+k(i.strIngredient17),1)):he("",!0),i.strMeasure18!==null&&i.strIngredient18.length>1?(A(),M("li",dv,k(i.strMeasure18)+" "+k(i.strIngredient18),1)):he("",!0),i.strMeasure19!==null&&i.strIngredient19.length>1?(A(),M("li",fv,k(i.strMeasure19)+" "+k(i.strIngredient19),1)):he("",!0),i.strMeasure20!==null&&i.strIngredient20.length>1?(A(),M("li",hv,k(i.strMeasure20)+" "+k(i.strIngredient20),1)):he("",!0)])]),_("div",pv,[gv,_("p",mv,k(i.strInstructions),1)]),_("div",null,[_v,_("a",{href:i.strYoutube,target:"_blank"},[_("div",bv,k(i.strYoutube),1)],8,vv)])]))),256))])]))}},wv=Zn(yv,[["__scopeId","data-v-ec837983"]]),Pi=t=>(ni("data-v-4ade651f"),t=t(),si(),t),Ev={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},Iv={class:"flex flex-col gap-10"},Tv={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},xv=Pi(()=>_("img",{src:Si,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),Cv=Pi(()=>_("img",{src:Ai,alt:"",srcset:""},null,-1)),Rv=Pi(()=>_("div",null,"Back to categories",-1)),Sv={class:"flex justify-center text-[35px] detailhead"},Av={class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},Pv=["src"],Ov={__name:"categoryDetails",setup(t){const e=pe({}),n=gi();return Vs(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${n.params.id}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{e.value=s.meals}).catch(s=>{console.error("Error fetching data:",s)})}),(s,r)=>{const i=js("router-link");return A(),M("main",Ev,[_("section",Iv,[_("div",Tv,[xv,q(i,{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ce(()=>[Cv,Rv]),_:1})]),_("div",Sv,k(le(n).params.id)+" meals ",1),_("section",Av,[(A(!0),M(de,null,Oe(e.value,o=>(A(),M("div",null,[q(i,{to:/meals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:ce(()=>[_("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Pv),_("div",null,k(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},kv=Zn(Ov,[["__scopeId","data-v-4ade651f"]]),Oi=t=>(ni("data-v-7f3da348"),t=t(),si(),t),Mv={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},Nv={class:"flex flex-col gap-10"},Dv={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},Lv=Oi(()=>_("img",{src:Si,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),Uv=Oi(()=>_("img",{src:Ai,alt:"",srcset:""},null,-1)),$v=Oi(()=>_("div",null,"Back to categories",-1)),Bv={class:"flex justify-center text-[35px] detailhead"},Fv={class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},jv=["src"],Hv={__name:"areadetails",setup(t){const e=pe({}),n=gi();return Vs(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${n.params.id}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{e.value=s.meals}).catch(s=>{console.error("Error fetching data:",s)})}),(s,r)=>{const i=js("router-link");return A(),M("main",Mv,[_("section",Nv,[_("div",Dv,[Lv,q(i,{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ce(()=>[Uv,$v]),_:1})]),_("div",Bv,k(le(n).params.id)+" meals ",1),_("section",Fv,[(A(!0),M(de,null,Oe(e.value,o=>(A(),M("div",null,[q(i,{to:/meals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:ce(()=>[_("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,jv),_("div",null,k(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},Vv=Zn(Hv,[["__scopeId","data-v-7f3da348"]]),Wv={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] 2xl:pt-[10%] gap-4"},Kv={class:"stepone w-[90%] flex flex-col gap-6 text-white"},zv={class:"flex flex-col gap-6 text-white p-[15px]",id:"register"},qv={class:"flex justify-between"},Gv=_("div",{class:"text-[24px]"},"Create an Account",-1),Jv={class:"flex flex-col justify-center items-center gap-2"},Yv=_("p",{class:"text-[10px]"},"already have an acount?",-1),Xv={class:"flex flex-col gap-2 text-[#E5E7EB]"},Qv=_("label",{for:"Email",class:"text-[18px]"},"Email",-1),Zv={class:"flex flex-col gap-2"},eb=_("label",{for:"password",class:"text-[18px]"},"Password",-1),tb=_("div",null,"or",-1),nb={__name:"signup",setup(t){const e=pe(""),n=pe(""),s=pi(),r=()=>{ig(gn(),e.value,n.value).then(o=>{console.log("successfully registered!"),s.push("/home")}).catch(o=>{console.log(o.code),alert(o.message)})},i=()=>{const o=new Qe;rc(gn(),o).then(l=>{console.log(l.user),s.push("/home")}).catch(l=>{})};return(o,l)=>(A(),M("div",Wv,[_("form",{onSubmit:l[2]||(l[2]=di((...a)=>o.login&&o.login(...a),["prevent"])),class:"bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]"},[_("div",Kv,[_("div",zv,[_("div",qv,[Gv,_("div",Jv,[q(le(ye),{to:"/",class:"text-[20px] px-3 rounded-lg text-black duration-300 bg-white"},{default:ce(()=>[li("Sign in")]),_:1}),Yv])]),_("div",Xv,[Qv,Ln(_("input",{"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a),type:"text",placeholder:"Email",name:"Email",class:"Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[$n,e.value]])]),_("div",Zv,[eb,Ln(_("input",{"onUpdate:modelValue":l[1]||(l[1]=a=>n.value=a),type:"text",placeholder:"password",name:"Password",id:"password",class:"password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[$n,n.value]])])]),_("div",{class:"w-full flex flex-col items-center justify-center text-white gap-3"},[_("button",{onClick:r,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Submit"),tb,_("button",{onClick:i,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Sign in with google")])])],32)]))}},oc=Af({history:Kd("/"),routes:[{path:"/home",name:"home",component:A_,meta:{requiresAuth:!0}},{path:"/meals/:id",name:"meal Details",component:wv},{path:"/category/:id",name:"category Details",component:kv},{path:"/area/:id",name:"area Details",component:Vv},{path:"/",name:"loggedin",component:h_},{path:"/signup",name:"signUp",component:nb}]}),sb=()=>new Promise((t,e)=>{const n=ql(gn(),s=>{n(),t(s)},e)});oc.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?await sb()?n():(alert("You dont have access"),n("/")):n()});const rb={};function ib(t,e){const n=js("RouterView");return A(),Is(n)}const ob=Zn(rb,[["render",ib]]);var ab="firebase",lb="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(ab,lb,"app");const cb={apiKey:"AIzaSyAc1sTUtbtUwc72YDjdsXM4rT7Pf4VCHZo",authDomain:"recipe-page-a168a.firebaseapp.com",projectId:"recipe-page-a168a",storageBucket:"recipe-page-a168a.appspot.com",messagingSenderId:"540105599417",appId:"1:540105599417:web:68b26438060496e3412e68",measurementId:"G-G49BH7ELT1"};Il(cb);const ac=Cd(ob);ac.use(oc);ac.mount("#app");
