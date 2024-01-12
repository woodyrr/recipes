(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Xr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const pe={},sn=[],Ze=()=>{},hc=()=>!1,Hs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qr=t=>t.startsWith("onUpdate:"),Ie=Object.assign,Zr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pc=Object.prototype.hasOwnProperty,ee=(t,e)=>pc.call(t,e),V=Array.isArray,rn=t=>Vs(t)==="[object Map]",la=t=>Vs(t)==="[object Set]",K=t=>typeof t=="function",we=t=>typeof t=="string",In=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",ca=t=>(ge(t)||K(t))&&K(t.then)&&K(t.catch),ua=Object.prototype.toString,Vs=t=>ua.call(t),gc=t=>Vs(t).slice(8,-1),da=t=>Vs(t)==="[object Object]",ei=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_s=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mc=/-(\w)/g,nt=Ws(t=>t.replace(mc,(e,n)=>n?n.toUpperCase():"")),_c=/\B([A-Z])/g,xn=Ws(t=>t.replace(_c,"-$1").toLowerCase()),Ks=Ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),ar=Ws(t=>t?`on${Ks(t)}`:""),Kt=(t,e)=>!Object.is(t,e),vs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ss=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Tr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},vc=t=>{const e=we(t)?Number(t):NaN;return isNaN(e)?t:e};let Bi;const Cr=()=>Bi||(Bi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ti(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=we(s)?Ec(s):ti(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(we(t)||ge(t))return t}const bc=/;(?![^(]*\))/g,wc=/:([^]+)/,yc=/\/\*[^]*?\*\//g;function Ec(t){const e={};return t.replace(yc,"").split(bc).forEach(n=>{if(n){const s=n.split(wc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ni(t){let e="";if(we(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=ni(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ic="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xc=Xr(Ic);function fa(t){return!!t||t===""}const b=t=>we(t)?t:t==null?"":V(t)||ge(t)&&(t.toString===ua||!K(t.toString))?JSON.stringify(t,ha,2):String(t),ha=(t,e)=>e&&e.__v_isRef?ha(t,e.value):rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[lr(s,i)+" =>"]=r,n),{})}:la(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>lr(n))}:In(e)?lr(e):ge(e)&&!V(e)&&!da(e)?String(e):e,lr=(t,e="")=>{var n;return In(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Fe;class Tc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!e&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Cc(t,e=Fe){e&&e.active&&e.effects.push(t)}function Sc(){return Fe}const si=t=>{const e=new Set(t);return e.w=0,e.n=0,e},pa=t=>(t.w&St)>0,ga=t=>(t.n&St)>0,Rc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=St},Ac=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];pa(r)&&!ga(r)?r.delete(t):e[n++]=r,r.w&=~St,r.n&=~St}e.length=n}},Sr=new WeakMap;let Dn=0,St=1;const Rr=30;let He;const Ht=Symbol(""),Ar=Symbol("");class ri{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cc(this,s)}run(){if(!this.active)return this.fn();let e=He,n=It;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=He,He=this,It=!0,St=1<<++Dn,Dn<=Rr?Rc(this):Fi(this),this.fn()}finally{Dn<=Rr&&Ac(this),St=1<<--Dn,He=this.parent,It=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(Fi(this),this.onStop&&this.onStop(),this.active=!1)}}function Fi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let It=!0;const ma=[];function Tn(){ma.push(It),It=!1}function Cn(){const t=ma.pop();It=t===void 0?!0:t}function Oe(t,e,n){if(It&&He){let s=Sr.get(t);s||Sr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=si()),_a(r)}}function _a(t,e){let n=!1;Dn<=Rr?ga(t)||(t.n|=St,n=!pa(t)):n=!t.has(He),n&&(t.add(He),He.deps.push(t))}function lt(t,e,n,s,r,i){const o=Sr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!In(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?ei(n)&&a.push(o.get("length")):(a.push(o.get(Ht)),rn(t)&&a.push(o.get(Ar)));break;case"delete":V(t)||(a.push(o.get(Ht)),rn(t)&&a.push(o.get(Ar)));break;case"set":rn(t)&&a.push(o.get(Ht));break}if(a.length===1)a[0]&&Pr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Pr(si(l))}}function Pr(t,e){const n=V(t)?t:[...t];for(const s of n)s.computed&&ji(s);for(const s of n)s.computed||ji(s)}function ji(t,e){(t!==He||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Pc=Xr("__proto__,__v_isRef,__isVue"),va=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(In)),Hi=kc();function kc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let i=0,o=this.length;i<o;i++)Oe(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ne)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Tn();const s=ne(this)[e].apply(this,n);return Cn(),s}}),t}function Oc(t){const e=ne(this);return Oe(e,"has",t),e.hasOwnProperty(t)}class ba{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Kc:Ia:i?Ea:ya).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=V(e);if(!r){if(o&&ee(Hi,n))return Reflect.get(Hi,n,s);if(n==="hasOwnProperty")return Oc}const a=Reflect.get(e,n,s);return(In(n)?va.has(n):Pc(n))||(r||Oe(e,"get",n),i)?a:Se(a)?o&&ei(n)?a:a.value:ge(a)?r?Ta(a):qs(a):a}}class wa extends ba{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(fn(i)&&Se(i)&&!Se(s))return!1;if(!this._shallow&&(!Rs(s)&&!fn(s)&&(i=ne(i),s=ne(s)),!V(e)&&Se(i)&&!Se(s)))return i.value=s,!0;const o=V(e)&&ei(n)?Number(n)<e.length:ee(e,n),a=Reflect.set(e,n,s,r);return e===ne(r)&&(o?Kt(s,i)&&lt(e,"set",n,s):lt(e,"add",n,s)),a}deleteProperty(e,n){const s=ee(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&lt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!In(n)||!va.has(n))&&Oe(e,"has",n),s}ownKeys(e){return Oe(e,"iterate",V(e)?"length":Ht),Reflect.ownKeys(e)}}class Mc extends ba{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Nc=new wa,Dc=new Mc,$c=new wa(!0),ii=t=>t,zs=t=>Reflect.getPrototypeOf(t);function us(t,e,n=!1,s=!1){t=t.__v_raw;const r=ne(t),i=ne(e);n||(Kt(e,i)&&Oe(r,"get",e),Oe(r,"get",i));const{has:o}=zs(r),a=s?ii:n?li:Wn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ds(t,e=!1){const n=this.__v_raw,s=ne(n),r=ne(t);return e||(Kt(t,r)&&Oe(s,"has",t),Oe(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function fs(t,e=!1){return t=t.__v_raw,!e&&Oe(ne(t),"iterate",Ht),Reflect.get(t,"size",t)}function Vi(t){t=ne(t);const e=ne(this);return zs(e).has.call(e,t)||(e.add(t),lt(e,"add",t,t)),this}function Wi(t,e){e=ne(e);const n=ne(this),{has:s,get:r}=zs(n);let i=s.call(n,t);i||(t=ne(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Kt(e,o)&&lt(n,"set",t,e):lt(n,"add",t,e),this}function Ki(t){const e=ne(this),{has:n,get:s}=zs(e);let r=n.call(e,t);r||(t=ne(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&lt(e,"delete",t,void 0),i}function zi(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&lt(t,"clear",void 0,void 0),n}function hs(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ne(o),l=e?ii:t?li:Wn;return!t&&Oe(a,"iterate",Ht),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function ps(t,e,n){return function(...s){const r=this.__v_raw,i=ne(r),o=rn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?ii:e?li:Wn;return!e&&Oe(i,"iterate",l?Ar:Ht),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Lc(){const t={get(i){return us(this,i)},get size(){return fs(this)},has:ds,add:Vi,set:Wi,delete:Ki,clear:zi,forEach:hs(!1,!1)},e={get(i){return us(this,i,!1,!0)},get size(){return fs(this)},has:ds,add:Vi,set:Wi,delete:Ki,clear:zi,forEach:hs(!1,!0)},n={get(i){return us(this,i,!0)},get size(){return fs(this,!0)},has(i){return ds.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:hs(!0,!1)},s={get(i){return us(this,i,!0,!0)},get size(){return fs(this,!0)},has(i){return ds.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:hs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ps(i,!1,!1),n[i]=ps(i,!0,!1),e[i]=ps(i,!1,!0),s[i]=ps(i,!0,!0)}),[t,n,e,s]}const[Uc,Bc,Fc,jc]=Lc();function oi(t,e){const n=e?t?jc:Fc:t?Bc:Uc;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ee(n,r)&&r in s?n:s,r,i)}const Hc={get:oi(!1,!1)},Vc={get:oi(!1,!0)},Wc={get:oi(!0,!1)},ya=new WeakMap,Ea=new WeakMap,Ia=new WeakMap,Kc=new WeakMap;function zc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qc(t){return t.__v_skip||!Object.isExtensible(t)?0:zc(gc(t))}function qs(t){return fn(t)?t:ai(t,!1,Nc,Hc,ya)}function xa(t){return ai(t,!1,$c,Vc,Ea)}function Ta(t){return ai(t,!0,Dc,Wc,Ia)}function ai(t,e,n,s,r){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=qc(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function on(t){return fn(t)?on(t.__v_raw):!!(t&&t.__v_isReactive)}function fn(t){return!!(t&&t.__v_isReadonly)}function Rs(t){return!!(t&&t.__v_isShallow)}function Ca(t){return on(t)||fn(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function Sa(t){return Ss(t,"__v_skip",!0),t}const Wn=t=>ge(t)?qs(t):t,li=t=>ge(t)?Ta(t):t;function Ra(t){It&&He&&(t=ne(t),_a(t.dep||(t.dep=si())))}function Aa(t,e){t=ne(t);const n=t.dep;n&&Pr(n)}function Se(t){return!!(t&&t.__v_isRef===!0)}function Q(t){return Pa(t,!1)}function Gc(t){return Pa(t,!0)}function Pa(t,e){return Se(t)?t:new Jc(t,e)}class Jc{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:Wn(e)}get value(){return Ra(this),this._value}set value(e){const n=this.__v_isShallow||Rs(e)||fn(e);e=n?e:ne(e),Kt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Wn(e),Aa(this))}}function X(t){return Se(t)?t.value:t}const Yc={get:(t,e,n)=>X(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ka(t){return on(t)?t:new Proxy(t,Yc)}class Xc{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ri(e,()=>{this._dirty||(this._dirty=!0,Aa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ne(this);return Ra(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Qc(t,e,n=!1){let s,r;const i=K(t);return i?(s=t,r=Ze):(s=t.get,r=t.set),new Xc(s,r,i||!r,n)}function xt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ts(i,e,n)}return r}function We(t,e,n,s){if(K(t)){const i=xt(t,e,n,s);return i&&ca(i)&&i.catch(o=>{ts(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(We(t[i],e,n,s));return r}function ts(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){xt(l,null,10,[t,o,a]);return}}Zc(t,n,r,s)}function Zc(t,e,n,s=!0){console.error(t)}let Kn=!1,kr=!1;const Ce=[];let Xe=0;const an=[];let it=null,Ut=0;const Oa=Promise.resolve();let ci=null;function Ma(t){const e=ci||Oa;return t?e.then(this?t.bind(this):t):e}function eu(t){let e=Xe+1,n=Ce.length;for(;e<n;){const s=e+n>>>1,r=Ce[s],i=zn(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function ui(t){(!Ce.length||!Ce.includes(t,Kn&&t.allowRecurse?Xe+1:Xe))&&(t.id==null?Ce.push(t):Ce.splice(eu(t.id),0,t),Na())}function Na(){!Kn&&!kr&&(kr=!0,ci=Oa.then($a))}function tu(t){const e=Ce.indexOf(t);e>Xe&&Ce.splice(e,1)}function Or(t){V(t)?an.push(...t):(!it||!it.includes(t,t.allowRecurse?Ut+1:Ut))&&an.push(t),Na()}function qi(t,e,n=Kn?Xe+1:0){for(;n<Ce.length;n++){const s=Ce[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ce.splice(n,1),n--,s()}}}function Da(t){if(an.length){const e=[...new Set(an)];if(an.length=0,it){it.push(...e);return}for(it=e,it.sort((n,s)=>zn(n)-zn(s)),Ut=0;Ut<it.length;Ut++)it[Ut]();it=null,Ut=0}}const zn=t=>t.id==null?1/0:t.id,nu=(t,e)=>{const n=zn(t)-zn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $a(t){kr=!1,Kn=!0,Ce.sort(nu);try{for(Xe=0;Xe<Ce.length;Xe++){const e=Ce[Xe];e&&e.active!==!1&&xt(e,null,14)}}finally{Xe=0,Ce.length=0,Da(),Kn=!1,ci=null,(Ce.length||an.length)&&$a()}}function su(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||pe;p&&(r=n.map(w=>we(w)?w.trim():w)),f&&(r=n.map(Tr))}let a,l=s[a=ar(e)]||s[a=ar(nt(e))];!l&&i&&(l=s[a=ar(xn(e))]),l&&We(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,We(c,t,6,r)}}function La(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=La(c,e,!0);u&&(a=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ge(t)&&s.set(t,null),null):(V(i)?i.forEach(l=>o[l]=null):Ie(o,i),ge(t)&&s.set(t,o),o)}function Gs(t,e){return!t||!Hs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,xn(e))||ee(t,e))}let $e=null,Js=null;function As(t){const e=$e;return $e=t,Js=t&&t.type.__scopeId||null,e}function Sn(t){Js=t}function Rn(){Js=null}function G(t,e=$e,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&io(-1);const i=As(e);let o;try{o=t(...r)}finally{As(i),s._d&&io(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function cr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:w,ctx:R,inheritAttrs:O}=t;let j,$;const N=As(t);try{if(n.shapeFlag&4){const C=r||s,H=C;j=je(u.call(H,C,f,i,w,p,R)),$=l}else{const C=e;j=je(C.length>1?C(i,{attrs:l,slots:a,emit:c}):C(i,null)),$=e.props?l:iu(l)}}catch(C){Fn.length=0,ts(C,t,1),j=L(ct)}let J=j;if($&&O!==!1){const C=Object.keys($),{shapeFlag:H}=J;C.length&&H&7&&(o&&C.some(Qr)&&($=ou($,o)),J=mn(J,$))}return n.dirs&&(J=mn(J),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&(J.transition=n.transition),j=J,As(N),j}function ru(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Ms(s)){if(s.type!==ct||s.children==="v-if"){if(e)return;e=s}}else return}return e}const iu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hs(n))&&((e||(e={}))[n]=t[n]);return e},ou=(t,e)=>{const n={};for(const s in t)(!Qr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function au(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Gi(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Gs(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Gi(s,o,c):!0:!!o;return!1}function Gi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Gs(n,i))return!0}return!1}function di({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ua="components";function Rt(t,e){return cu(Ua,t,!0,e)||t}const lu=Symbol.for("v-ndc");function cu(t,e,n=!0,s=!1){const r=$e||Ee;if(r){const i=r.type;if(t===Ua){const a=sd(i,!1);if(a&&(a===e||a===nt(e)||a===Ks(nt(e))))return i}const o=Ji(r[t]||i[t],e)||Ji(r.appContext[t],e);return!o&&s?i:o}}function Ji(t,e){return t&&(t[e]||t[nt(e)]||t[Ks(nt(e))])}const uu=t=>t.__isSuspense,du={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,l,c){t==null?fu(e,n,s,r,i,o,a,l,c):hu(t,e,n,s,r,o,a,l,c)},hydrate:pu,create:fi,normalize:gu},Ps=du;function qn(t,e){const n=t.props&&t.props[e];K(n)&&n()}function fu(t,e,n,s,r,i,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),p=t.suspense=fi(t,r,s,e,f,n,i,o,a,l);c(null,p.pendingBranch=t.ssContent,f,null,s,p,i,o),p.deps>0?(qn(t,"onPending"),qn(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,i,o),ln(p,t.ssFallback)):p.resolve(!1,!0)}function hu(t,e,n,s,r,i,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,w=e.ssFallback,{activeBranch:R,pendingBranch:O,isInFallback:j,isHydrating:$}=f;if(O)f.pendingBranch=p,bt(p,O)?(l(O,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():j&&(l(R,w,n,s,r,null,i,o,a),ln(f,w))):(f.pendingId++,$?(f.isHydrating=!1,f.activeBranch=O):c(O,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),j?(l(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():(l(R,w,n,s,r,null,i,o,a),ln(f,w))):R&&bt(p,R)?(l(R,p,n,s,r,f,i,o,a),f.resolve(!0)):(l(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0&&f.resolve()));else if(R&&bt(p,R))l(R,p,n,s,r,f,i,o,a),ln(f,p);else if(qn(e,"onPending"),f.pendingBranch=p,f.pendingId++,l(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:N,pendingId:J}=f;N>0?setTimeout(()=>{f.pendingId===J&&f.fallback(w)},N):N===0&&f.fallback(w)}}function fi(t,e,n,s,r,i,o,a,l,c,u=!1){const{p:f,m:p,um:w,n:R,o:{parentNode:O,remove:j}}=c;let $;const N=_u(t);N&&e!=null&&e.pendingBranch&&($=e.pendingId,e.deps++);const J=t.props?vc(t.props.timeout):void 0,C={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof J=="number"?J:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(H=!1,te=!1){const{vnode:de,activeBranch:ae,pendingBranch:me,pendingId:ve,effects:ye,parentComponent:Ne,container:xe}=C;let qe=!1;if(C.isHydrating)C.isHydrating=!1;else if(!H){qe=ae&&me.transition&&me.transition.mode==="out-in",qe&&(ae.transition.afterLeave=()=>{ve===C.pendingId&&(p(me,xe,R(ae),0),Or(ye))});let{anchor:se}=C;ae&&(se=R(ae),w(ae,Ne,C,!0)),qe||p(me,xe,se,0)}ln(C,me),C.pendingBranch=null,C.isInFallback=!1;let De=C.parent,_e=!1;for(;De;){if(De.pendingBranch){De.effects.push(...ye),_e=!0;break}De=De.parent}!_e&&!qe&&Or(ye),C.effects=[],N&&e&&e.pendingBranch&&$===e.pendingId&&(e.deps--,e.deps===0&&!te&&e.resolve()),qn(de,"onResolve")},fallback(H){if(!C.pendingBranch)return;const{vnode:te,activeBranch:de,parentComponent:ae,container:me,isSVG:ve}=C;qn(te,"onFallback");const ye=R(de),Ne=()=>{C.isInFallback&&(f(null,H,me,ye,ae,null,ve,a,l),ln(C,H))},xe=H.transition&&H.transition.mode==="out-in";xe&&(de.transition.afterLeave=Ne),C.isInFallback=!0,w(de,ae,null,!0),xe||Ne()},move(H,te,de){C.activeBranch&&p(C.activeBranch,H,te,de),C.container=H},next(){return C.activeBranch&&R(C.activeBranch)},registerDep(H,te){const de=!!C.pendingBranch;de&&C.deps++;const ae=H.vnode.el;H.asyncDep.catch(me=>{ts(me,H,0)}).then(me=>{if(H.isUnmounted||C.isUnmounted||C.pendingId!==H.suspenseId)return;H.asyncResolved=!0;const{vnode:ve}=H;Ur(H,me,!1),ae&&(ve.el=ae);const ye=!ae&&H.subTree.el;te(H,ve,O(ae||H.subTree.el),ae?null:R(H.subTree),C,o,l),ye&&j(ye),di(H,ve.el),de&&--C.deps===0&&C.resolve()})},unmount(H,te){C.isUnmounted=!0,C.activeBranch&&w(C.activeBranch,n,H,te),C.pendingBranch&&w(C.pendingBranch,n,H,te)}};return C}function pu(t,e,n,s,r,i,o,a,l){const c=e.suspense=fi(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(!1,!0),u}function gu(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Yi(s?n.default:n),t.ssFallback=s?Yi(n.fallback):L(ct)}function Yi(t){let e;if(K(t)){const n=pn&&t._c;n&&(t._d=!1,v()),t=t(),n&&(t._d=!0,e=Le,el())}return V(t)&&(t=ru(t)),t=je(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function mu(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):Or(t)}function ln(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,di(s,r))}function _u(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const gs={};function bs(t,e,n){return Ba(t,e,n)}function Ba(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=pe){var a;const l=Sc()===((a=Ee)==null?void 0:a.scope)?Ee:null;let c,u=!1,f=!1;if(Se(t)?(c=()=>t.value,u=Rs(t)):on(t)?(c=()=>t,s=!0):V(t)?(f=!0,u=t.some(C=>on(C)||Rs(C)),c=()=>t.map(C=>{if(Se(C))return C.value;if(on(C))return Ft(C);if(K(C))return xt(C,l,2)})):K(t)?e?c=()=>xt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),We(t,l,3,[w])}:c=Ze,e&&s){const C=c;c=()=>Ft(C())}let p,w=C=>{p=N.onStop=()=>{xt(C,l,4),p=N.onStop=void 0}},R;if(Gn)if(w=Ze,e?n&&We(e,l,3,[c(),f?[]:void 0,w]):c(),r==="sync"){const C=od();R=C.__watcherHandles||(C.__watcherHandles=[])}else return Ze;let O=f?new Array(t.length).fill(gs):gs;const j=()=>{if(N.active)if(e){const C=N.run();(s||u||(f?C.some((H,te)=>Kt(H,O[te])):Kt(C,O)))&&(p&&p(),We(e,l,3,[C,O===gs?void 0:f&&O[0]===gs?[]:O,w]),O=C)}else N.run()};j.allowRecurse=!!e;let $;r==="sync"?$=j:r==="post"?$=()=>ke(j,l&&l.suspense):(j.pre=!0,l&&(j.id=l.uid),$=()=>ui(j));const N=new ri(c,$);e?n?j():O=N.run():r==="post"?ke(N.run.bind(N),l&&l.suspense):N.run();const J=()=>{N.stop(),l&&l.scope&&Zr(l.scope.effects,N)};return R&&R.push(J),J}function vu(t,e,n){const s=this.proxy,r=we(t)?t.includes(".")?Fa(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=Ee;_n(this);const a=Ba(r,i.bind(s),n);return o?_n(o):Vt(),a}function Fa(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ft(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))Ft(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)Ft(t[n],e);else if(la(t)||rn(t))t.forEach(n=>{Ft(n,e)});else if(da(t))for(const n in t)Ft(t[n],e);return t}function hn(t,e){const n=$e;if(n===null)return t;const s=Zs(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=pe]=e[i];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&Ft(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Dt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Tn(),We(l,n,8,[t.el,a,t,e]),Cn())}}/*! #__NO_SIDE_EFFECTS__ */function ja(t,e){return K(t)?Ie({name:t.name},e,{setup:t}):t}const ws=t=>!!t.type.__asyncLoader,Ha=t=>t.type.__isKeepAlive;function bu(t,e){Va(t,"a",e)}function wu(t,e){Va(t,"da",e)}function Va(t,e,n=Ee){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ys(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ha(r.parent.vnode)&&yu(s,e,n,r),r=r.parent}}function yu(t,e,n,s){const r=Ys(e,t,s,!0);Ka(()=>{Zr(s[e],r)},n)}function Ys(t,e,n=Ee,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Tn(),_n(n);const a=We(e,n,t,o);return Vt(),Cn(),a});return s?r.unshift(i):r.push(i),i}}const dt=t=>(e,n=Ee)=>(!Gn||t==="sp")&&Ys(t,(...s)=>e(...s),n),Jt=dt("bm"),Wa=dt("m"),Eu=dt("bu"),Iu=dt("u"),xu=dt("bum"),Ka=dt("um"),Tu=dt("sp"),Cu=dt("rtg"),Su=dt("rtc");function Ru(t,e=Ee){Ys("ec",t,e)}function fe(t,e,n,s){let r;const i=n&&n[s];if(V(t)||we(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ge(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Mr=t=>t?sl(t)?Zs(t)||t.proxy:Mr(t.parent):null,Bn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mr(t.parent),$root:t=>Mr(t.root),$emit:t=>t.emit,$options:t=>hi(t),$forceUpdate:t=>t.f||(t.f=()=>ui(t.update)),$nextTick:t=>t.n||(t.n=Ma.bind(t.proxy)),$watch:t=>vu.bind(t)}),ur=(t,e)=>t!==pe&&!t.__isScriptSetup&&ee(t,e),Au={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ur(s,e))return o[e]=1,s[e];if(r!==pe&&ee(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ee(c,e))return o[e]=3,i[e];if(n!==pe&&ee(n,e))return o[e]=4,n[e];Nr&&(o[e]=0)}}const u=Bn[e];let f,p;if(u)return e==="$attrs"&&Oe(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==pe&&ee(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,ee(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ur(r,e)?(r[e]=n,!0):s!==pe&&ee(s,e)?(s[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&ee(t,o)||ur(e,o)||(a=i[0])&&ee(a,o)||ee(s,o)||ee(Bn,o)||ee(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xi(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nr=!0;function Pu(t){const e=hi(t),n=t.proxy,s=t.ctx;Nr=!1,e.beforeCreate&&Qi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:w,updated:R,activated:O,deactivated:j,beforeDestroy:$,beforeUnmount:N,destroyed:J,unmounted:C,render:H,renderTracked:te,renderTriggered:de,errorCaptured:ae,serverPrefetch:me,expose:ve,inheritAttrs:ye,components:Ne,directives:xe,filters:qe}=e;if(c&&ku(c,s,null),o)for(const se in o){const re=o[se];K(re)&&(s[se]=re.bind(n))}if(r){const se=r.call(n,n);ge(se)&&(t.data=qs(se))}if(Nr=!0,i)for(const se in i){const re=i[se],st=K(re)?re.bind(n,n):K(re.get)?re.get.bind(n,n):Ze,ht=!K(re)&&K(re.set)?re.set.bind(n):Ze,Ge=Ve({get:st,set:ht});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Pe=>Ge.value=Pe})}if(a)for(const se in a)za(a[se],s,n,se);if(l){const se=K(l)?l.call(n):l;Reflect.ownKeys(se).forEach(re=>{ys(re,se[re])})}u&&Qi(u,t,"c");function _e(se,re){V(re)?re.forEach(st=>se(st.bind(n))):re&&se(re.bind(n))}if(_e(Jt,f),_e(Wa,p),_e(Eu,w),_e(Iu,R),_e(bu,O),_e(wu,j),_e(Ru,ae),_e(Su,te),_e(Cu,de),_e(xu,N),_e(Ka,C),_e(Tu,me),V(ve))if(ve.length){const se=t.exposed||(t.exposed={});ve.forEach(re=>{Object.defineProperty(se,re,{get:()=>n[re],set:st=>n[re]=st})})}else t.exposed||(t.exposed={});H&&t.render===Ze&&(t.render=H),ye!=null&&(t.inheritAttrs=ye),Ne&&(t.components=Ne),xe&&(t.directives=xe)}function ku(t,e,n=Ze){V(t)&&(t=Dr(t));for(const s in t){const r=t[s];let i;ge(r)?"default"in r?i=Ke(r.from||s,r.default,!0):i=Ke(r.from||s):i=Ke(r),Se(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Qi(t,e,n){We(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function za(t,e,n,s){const r=s.includes(".")?Fa(n,s):()=>n[s];if(we(t)){const i=e[t];K(i)&&bs(r,i)}else if(K(t))bs(r,t.bind(n));else if(ge(t))if(V(t))t.forEach(i=>za(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&bs(r,i,t)}}function hi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>ks(l,c,o,!0)),ks(l,e,o)),ge(e)&&i.set(e,l),l}function ks(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ks(t,i,n,!0),r&&r.forEach(o=>ks(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ou[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ou={data:Zi,props:eo,emits:eo,methods:$n,computed:$n,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:$n,directives:$n,watch:Nu,provide:Zi,inject:Mu};function Zi(t,e){return e?t?function(){return Ie(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Mu(t,e){return $n(Dr(t),Dr(e))}function Dr(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function $n(t,e){return t?Ie(Object.create(null),t,e):e}function eo(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Ie(Object.create(null),Xi(t),Xi(e??{})):e}function Nu(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=Ae(t[s],e[s]);return n}function qa(){return{app:null,config:{isNativeTag:hc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Du=0;function $u(t,e){return function(s,r=null){K(s)||(s=Ie({},s)),r!=null&&!ge(r)&&(r=null);const i=qa(),o=new WeakSet;let a=!1;const l=i.app={_uid:Du++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ad,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(l,...u)):K(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const p=L(s,r);return p.appContext=i,u&&e?e(p,c):t(p,c,f),a=!0,l._container=c,c.__vue_app__=l,Zs(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Os=l;try{return c()}finally{Os=null}}};return l}}let Os=null;function ys(t,e){if(Ee){let n=Ee.provides;const s=Ee.parent&&Ee.parent.provides;s===n&&(n=Ee.provides=Object.create(s)),n[t]=e}}function Ke(t,e,n=!1){const s=Ee||$e;if(s||Os){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Os._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}function Lu(t,e,n,s=!1){const r={},i={};Ss(i,Qs,1),t.propsDefaults=Object.create(null),Ga(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:xa(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Uu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ne(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Gs(t.emitsOptions,p))continue;const w=e[p];if(l)if(ee(i,p))w!==i[p]&&(i[p]=w,c=!0);else{const R=nt(p);r[R]=$r(l,a,R,w,t,!1)}else w!==i[p]&&(i[p]=w,c=!0)}}}else{Ga(t,e,r,i)&&(c=!0);let u;for(const f in a)(!e||!ee(e,f)&&((u=xn(f))===f||!ee(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=$r(l,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!ee(e,f))&&(delete i[f],c=!0)}c&&lt(t,"set","$attrs")}function Ga(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(_s(l))continue;const c=e[l];let u;r&&ee(r,u=nt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gs(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=ne(n),c=a||pe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=$r(r,l,f,c[f],t,!ee(c,f))}}return o}function $r(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(_n(r),s=c[n]=l.call(null,e),Vt())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===xn(n))&&(s=!0))}return s}function Ja(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!K(t)){const u=f=>{l=!0;const[p,w]=Ja(f,e,!0);Ie(o,p),w&&a.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ge(t)&&s.set(t,sn),sn;if(V(i))for(let u=0;u<i.length;u++){const f=nt(i[u]);to(f)&&(o[f]=pe)}else if(i)for(const u in i){const f=nt(u);if(to(f)){const p=i[u],w=o[f]=V(p)||K(p)?{type:p}:Ie({},p);if(w){const R=ro(Boolean,w.type),O=ro(String,w.type);w[0]=R>-1,w[1]=O<0||R<O,(R>-1||ee(w,"default"))&&a.push(f)}}}const c=[o,a];return ge(t)&&s.set(t,c),c}function to(t){return t[0]!=="$"}function no(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function so(t,e){return no(t)===no(e)}function ro(t,e){return V(e)?e.findIndex(n=>so(n,t)):K(e)&&so(e,t)?0:-1}const Ya=t=>t[0]==="_"||t==="$stable",pi=t=>V(t)?t.map(je):[je(t)],Bu=(t,e,n)=>{if(e._n)return e;const s=G((...r)=>pi(e(...r)),n);return s._c=!1,s},Xa=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ya(r))continue;const i=t[r];if(K(i))e[r]=Bu(r,i,s);else if(i!=null){const o=pi(i);e[r]=()=>o}}},Qa=(t,e)=>{const n=pi(e);t.slots.default=()=>n},Fu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),Ss(e,"_",n)):Xa(e,t.slots={})}else t.slots={},e&&Qa(t,e);Ss(t.slots,Qs,1)},ju=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ie(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Xa(e,r)),o=e}else e&&(Qa(t,e),o={default:1});if(i)for(const a in r)!Ya(a)&&o[a]==null&&delete r[a]};function Lr(t,e,n,s,r=!1){if(V(t)){t.forEach((p,w)=>Lr(p,e&&(V(e)?e[w]:e),n,s,r));return}if(ws(s)&&!r)return;const i=s.shapeFlag&4?Zs(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(we(c)?(u[c]=null,ee(f,c)&&(f[c]=null)):Se(c)&&(c.value=null)),K(l))xt(l,a,12,[o,u]);else{const p=we(l),w=Se(l);if(p||w){const R=()=>{if(t.f){const O=p?ee(f,l)?f[l]:u[l]:l.value;r?V(O)&&Zr(O,i):V(O)?O.includes(i)||O.push(i):p?(u[l]=[i],ee(f,l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else p?(u[l]=o,ee(f,l)&&(f[l]=o)):w&&(l.value=o,t.k&&(u[t.k]=o))};o?(R.id=-1,ke(R,n)):R()}}}const ke=mu;function Hu(t){return Vu(t)}function Vu(t,e){const n=Cr();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:w=Ze,insertStaticContent:R}=t,O=(d,h,m,_=null,I=null,x=null,k=!1,S=null,A=!!h.dynamicChildren)=>{if(d===h)return;d&&!bt(d,h)&&(_=y(d),Pe(d,I,x,!0),d=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:T,ref:B,shapeFlag:D}=h;switch(T){case Xs:j(d,h,m,_);break;case ct:$(d,h,m,_);break;case dr:d==null&&N(h,m,_,k);break;case Z:Ne(d,h,m,_,I,x,k,S,A);break;default:D&1?H(d,h,m,_,I,x,k,S,A):D&6?xe(d,h,m,_,I,x,k,S,A):(D&64||D&128)&&T.process(d,h,m,_,I,x,k,S,A,P)}B!=null&&I&&Lr(B,d&&d.ref,x,h||d,!h)},j=(d,h,m,_)=>{if(d==null)s(h.el=a(h.children),m,_);else{const I=h.el=d.el;h.children!==d.children&&c(I,h.children)}},$=(d,h,m,_)=>{d==null?s(h.el=l(h.children||""),m,_):h.el=d.el},N=(d,h,m,_)=>{[d.el,d.anchor]=R(d.children,h,m,_,d.el,d.anchor)},J=({el:d,anchor:h},m,_)=>{let I;for(;d&&d!==h;)I=p(d),s(d,m,_),d=I;s(h,m,_)},C=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),r(d),d=m;r(h)},H=(d,h,m,_,I,x,k,S,A)=>{k=k||h.type==="svg",d==null?te(h,m,_,I,x,k,S,A):me(d,h,I,x,k,S,A)},te=(d,h,m,_,I,x,k,S)=>{let A,T;const{type:B,props:D,shapeFlag:F,transition:z,dirs:Y}=d;if(A=d.el=o(d.type,x,D&&D.is,D),F&8?u(A,d.children):F&16&&ae(d.children,A,null,_,I,x&&B!=="foreignObject",k,S),Y&&Dt(d,null,_,"created"),de(A,d,d.scopeId,k,_),D){for(const le in D)le!=="value"&&!_s(le)&&i(A,le,null,D[le],x,d.children,_,I,Te);"value"in D&&i(A,"value",null,D.value),(T=D.onVnodeBeforeMount)&&Ye(T,_,d)}Y&&Dt(d,null,_,"beforeMount");const ue=Wu(I,z);ue&&z.beforeEnter(A),s(A,h,m),((T=D&&D.onVnodeMounted)||ue||Y)&&ke(()=>{T&&Ye(T,_,d),ue&&z.enter(A),Y&&Dt(d,null,_,"mounted")},I)},de=(d,h,m,_,I)=>{if(m&&w(d,m),_)for(let x=0;x<_.length;x++)w(d,_[x]);if(I){let x=I.subTree;if(h===x){const k=I.vnode;de(d,k,k.scopeId,k.slotScopeIds,I.parent)}}},ae=(d,h,m,_,I,x,k,S,A=0)=>{for(let T=A;T<d.length;T++){const B=d[T]=S?_t(d[T]):je(d[T]);O(null,B,h,m,_,I,x,k,S)}},me=(d,h,m,_,I,x,k)=>{const S=h.el=d.el;let{patchFlag:A,dynamicChildren:T,dirs:B}=h;A|=d.patchFlag&16;const D=d.props||pe,F=h.props||pe;let z;m&&$t(m,!1),(z=F.onVnodeBeforeUpdate)&&Ye(z,m,h,d),B&&Dt(h,d,m,"beforeUpdate"),m&&$t(m,!0);const Y=I&&h.type!=="foreignObject";if(T?ve(d.dynamicChildren,T,S,m,_,Y,x):k||re(d,h,S,null,m,_,Y,x,!1),A>0){if(A&16)ye(S,h,D,F,m,_,I);else if(A&2&&D.class!==F.class&&i(S,"class",null,F.class,I),A&4&&i(S,"style",D.style,F.style,I),A&8){const ue=h.dynamicProps;for(let le=0;le<ue.length;le++){const be=ue[le],Be=D[be],Zt=F[be];(Zt!==Be||be==="value")&&i(S,be,Be,Zt,I,d.children,m,_,Te)}}A&1&&d.children!==h.children&&u(S,h.children)}else!k&&T==null&&ye(S,h,D,F,m,_,I);((z=F.onVnodeUpdated)||B)&&ke(()=>{z&&Ye(z,m,h,d),B&&Dt(h,d,m,"updated")},_)},ve=(d,h,m,_,I,x,k)=>{for(let S=0;S<h.length;S++){const A=d[S],T=h[S],B=A.el&&(A.type===Z||!bt(A,T)||A.shapeFlag&70)?f(A.el):m;O(A,T,B,null,_,I,x,k,!0)}},ye=(d,h,m,_,I,x,k)=>{if(m!==_){if(m!==pe)for(const S in m)!_s(S)&&!(S in _)&&i(d,S,m[S],null,k,h.children,I,x,Te);for(const S in _){if(_s(S))continue;const A=_[S],T=m[S];A!==T&&S!=="value"&&i(d,S,T,A,k,h.children,I,x,Te)}"value"in _&&i(d,"value",m.value,_.value)}},Ne=(d,h,m,_,I,x,k,S,A)=>{const T=h.el=d?d.el:a(""),B=h.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:z}=h;z&&(S=S?S.concat(z):z),d==null?(s(T,m,_),s(B,m,_),ae(h.children,m,B,I,x,k,S,A)):D>0&&D&64&&F&&d.dynamicChildren?(ve(d.dynamicChildren,F,m,I,x,k,S),(h.key!=null||I&&h===I.subTree)&&Za(d,h,!0)):re(d,h,m,B,I,x,k,S,A)},xe=(d,h,m,_,I,x,k,S,A)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?I.ctx.activate(h,m,_,k,A):qe(h,m,_,I,x,k,A):De(d,h,A)},qe=(d,h,m,_,I,x,k)=>{const S=d.component=Qu(d,_,I);if(Ha(d)&&(S.ctx.renderer=P),Zu(S),S.asyncDep){if(I&&I.registerDep(S,_e),!d.el){const A=S.subTree=L(ct);$(null,A,h,m)}return}_e(S,d,h,m,I,x,k)},De=(d,h,m)=>{const _=h.component=d.component;if(au(d,h,m))if(_.asyncDep&&!_.asyncResolved){se(_,h,m);return}else _.next=h,tu(_.update),_.update();else h.el=d.el,_.vnode=h},_e=(d,h,m,_,I,x,k)=>{const S=()=>{if(d.isMounted){let{next:B,bu:D,u:F,parent:z,vnode:Y}=d,ue=B,le;$t(d,!1),B?(B.el=Y.el,se(d,B,k)):B=Y,D&&vs(D),(le=B.props&&B.props.onVnodeBeforeUpdate)&&Ye(le,z,B,Y),$t(d,!0);const be=cr(d),Be=d.subTree;d.subTree=be,O(Be,be,f(Be.el),y(Be),d,I,x),B.el=be.el,ue===null&&di(d,be.el),F&&ke(F,I),(le=B.props&&B.props.onVnodeUpdated)&&ke(()=>Ye(le,z,B,Y),I)}else{let B;const{el:D,props:F}=h,{bm:z,m:Y,parent:ue}=d,le=ws(h);if($t(d,!1),z&&vs(z),!le&&(B=F&&F.onVnodeBeforeMount)&&Ye(B,ue,h),$t(d,!0),D&&ie){const be=()=>{d.subTree=cr(d),ie(D,d.subTree,d,I,null)};le?h.type.__asyncLoader().then(()=>!d.isUnmounted&&be()):be()}else{const be=d.subTree=cr(d);O(null,be,m,_,d,I,x),h.el=be.el}if(Y&&ke(Y,I),!le&&(B=F&&F.onVnodeMounted)){const be=h;ke(()=>Ye(B,ue,be),I)}(h.shapeFlag&256||ue&&ws(ue.vnode)&&ue.vnode.shapeFlag&256)&&d.a&&ke(d.a,I),d.isMounted=!0,h=m=_=null}},A=d.effect=new ri(S,()=>ui(T),d.scope),T=d.update=()=>A.run();T.id=d.uid,$t(d,!0),T()},se=(d,h,m)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,Uu(d,h.props,_,m),ju(d,h.children,m),Tn(),qi(d),Cn()},re=(d,h,m,_,I,x,k,S,A=!1)=>{const T=d&&d.children,B=d?d.shapeFlag:0,D=h.children,{patchFlag:F,shapeFlag:z}=h;if(F>0){if(F&128){ht(T,D,m,_,I,x,k,S,A);return}else if(F&256){st(T,D,m,_,I,x,k,S,A);return}}z&8?(B&16&&Te(T,I,x),D!==T&&u(m,D)):B&16?z&16?ht(T,D,m,_,I,x,k,S,A):Te(T,I,x,!0):(B&8&&u(m,""),z&16&&ae(D,m,_,I,x,k,S,A))},st=(d,h,m,_,I,x,k,S,A)=>{d=d||sn,h=h||sn;const T=d.length,B=h.length,D=Math.min(T,B);let F;for(F=0;F<D;F++){const z=h[F]=A?_t(h[F]):je(h[F]);O(d[F],z,m,null,I,x,k,S,A)}T>B?Te(d,I,x,!0,!1,D):ae(h,m,_,I,x,k,S,A,D)},ht=(d,h,m,_,I,x,k,S,A)=>{let T=0;const B=h.length;let D=d.length-1,F=B-1;for(;T<=D&&T<=F;){const z=d[T],Y=h[T]=A?_t(h[T]):je(h[T]);if(bt(z,Y))O(z,Y,m,null,I,x,k,S,A);else break;T++}for(;T<=D&&T<=F;){const z=d[D],Y=h[F]=A?_t(h[F]):je(h[F]);if(bt(z,Y))O(z,Y,m,null,I,x,k,S,A);else break;D--,F--}if(T>D){if(T<=F){const z=F+1,Y=z<B?h[z].el:_;for(;T<=F;)O(null,h[T]=A?_t(h[T]):je(h[T]),m,Y,I,x,k,S,A),T++}}else if(T>F)for(;T<=D;)Pe(d[T],I,x,!0),T++;else{const z=T,Y=T,ue=new Map;for(T=Y;T<=F;T++){const Me=h[T]=A?_t(h[T]):je(h[T]);Me.key!=null&&ue.set(Me.key,T)}let le,be=0;const Be=F-Y+1;let Zt=!1,$i=0;const Mn=new Array(Be);for(T=0;T<Be;T++)Mn[T]=0;for(T=z;T<=D;T++){const Me=d[T];if(be>=Be){Pe(Me,I,x,!0);continue}let Je;if(Me.key!=null)Je=ue.get(Me.key);else for(le=Y;le<=F;le++)if(Mn[le-Y]===0&&bt(Me,h[le])){Je=le;break}Je===void 0?Pe(Me,I,x,!0):(Mn[Je-Y]=T+1,Je>=$i?$i=Je:Zt=!0,O(Me,h[Je],m,null,I,x,k,S,A),be++)}const Li=Zt?Ku(Mn):sn;for(le=Li.length-1,T=Be-1;T>=0;T--){const Me=Y+T,Je=h[Me],Ui=Me+1<B?h[Me+1].el:_;Mn[T]===0?O(null,Je,m,Ui,I,x,k,S,A):Zt&&(le<0||T!==Li[le]?Ge(Je,m,Ui,2):le--)}}},Ge=(d,h,m,_,I=null)=>{const{el:x,type:k,transition:S,children:A,shapeFlag:T}=d;if(T&6){Ge(d.component.subTree,h,m,_);return}if(T&128){d.suspense.move(h,m,_);return}if(T&64){k.move(d,h,m,P);return}if(k===Z){s(x,h,m);for(let D=0;D<A.length;D++)Ge(A[D],h,m,_);s(d.anchor,h,m);return}if(k===dr){J(d,h,m);return}if(_!==2&&T&1&&S)if(_===0)S.beforeEnter(x),s(x,h,m),ke(()=>S.enter(x),I);else{const{leave:D,delayLeave:F,afterLeave:z}=S,Y=()=>s(x,h,m),ue=()=>{D(x,()=>{Y(),z&&z()})};F?F(x,Y,ue):ue()}else s(x,h,m)},Pe=(d,h,m,_=!1,I=!1)=>{const{type:x,props:k,ref:S,children:A,dynamicChildren:T,shapeFlag:B,patchFlag:D,dirs:F}=d;if(S!=null&&Lr(S,null,m,d,!0),B&256){h.ctx.deactivate(d);return}const z=B&1&&F,Y=!ws(d);let ue;if(Y&&(ue=k&&k.onVnodeBeforeUnmount)&&Ye(ue,h,d),B&6)cs(d.component,m,_);else{if(B&128){d.suspense.unmount(m,_);return}z&&Dt(d,null,h,"beforeUnmount"),B&64?d.type.remove(d,h,m,I,P,_):T&&(x!==Z||D>0&&D&64)?Te(T,h,m,!1,!0):(x===Z&&D&384||!I&&B&16)&&Te(A,h,m),_&&Xt(d)}(Y&&(ue=k&&k.onVnodeUnmounted)||z)&&ke(()=>{ue&&Ye(ue,h,d),z&&Dt(d,null,h,"unmounted")},m)},Xt=d=>{const{type:h,el:m,anchor:_,transition:I}=d;if(h===Z){Qt(m,_);return}if(h===dr){C(d);return}const x=()=>{r(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:k,delayLeave:S}=I,A=()=>k(m,x);S?S(d.el,x,A):A()}else x()},Qt=(d,h)=>{let m;for(;d!==h;)m=p(d),r(d),d=m;r(h)},cs=(d,h,m)=>{const{bum:_,scope:I,update:x,subTree:k,um:S}=d;_&&vs(_),I.stop(),x&&(x.active=!1,Pe(k,d,h,m)),S&&ke(S,h),ke(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Te=(d,h,m,_=!1,I=!1,x=0)=>{for(let k=x;k<d.length;k++)Pe(d[k],h,m,_,I)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),M=(d,h,m)=>{d==null?h._vnode&&Pe(h._vnode,null,null,!0):O(h._vnode||null,d,h,null,null,null,m),qi(),Da(),h._vnode=d},P={p:O,um:Pe,m:Ge,r:Xt,mt:qe,mc:ae,pc:re,pbc:ve,n:y,o:t};let U,ie;return e&&([U,ie]=e(P)),{render:M,hydrate:U,createApp:$u(M,U)}}function $t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Wu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Za(t,e,n=!1){const s=t.children,r=e.children;if(V(s)&&V(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=_t(r[i]),a.el=o.el),n||Za(o,a)),a.type===Xs&&(a.el=o.el)}}function Ku(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const zu=t=>t.__isTeleport,Z=Symbol.for("v-fgt"),Xs=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),dr=Symbol.for("v-stc"),Fn=[];let Le=null;function v(t=!1){Fn.push(Le=t?null:[])}function el(){Fn.pop(),Le=Fn[Fn.length-1]||null}let pn=1;function io(t){pn+=t}function tl(t){return t.dynamicChildren=pn>0?Le||sn:null,el(),pn>0&&Le&&Le.push(t),t}function E(t,e,n,s,r,i){return tl(g(t,e,n,s,r,i,!0))}function gn(t,e,n,s,r){return tl(L(t,e,n,s,r,!0))}function Ms(t){return t?t.__v_isVNode===!0:!1}function bt(t,e){return t.type===e.type&&t.key===e.key}const Qs="__vInternal",nl=({key:t})=>t??null,Es=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?we(t)||Se(t)||K(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,s=0,r=null,i=t===Z?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nl(e),ref:e&&Es(e),scopeId:Js,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$e};return a?(mi(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=we(n)?8:16),pn>0&&!o&&Le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Le.push(l),l}const L=qu;function qu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===lu)&&(t=ct),Ms(t)){const a=mn(t,e,!0);return n&&mi(a,n),pn>0&&!i&&Le&&(a.shapeFlag&6?Le[Le.indexOf(t)]=a:Le.push(a)),a.patchFlag|=-2,a}if(rd(t)&&(t=t.__vccOpts),e){e=Gu(e);let{class:a,style:l}=e;a&&!we(a)&&(e.class=ni(a)),ge(l)&&(Ca(l)&&!V(l)&&(l=Ie({},l)),e.style=ti(l))}const o=we(t)?1:uu(t)?128:zu(t)?64:ge(t)?4:K(t)?2:0;return g(t,e,n,s,r,o,i,!0)}function Gu(t){return t?Ca(t)||Qs in t?Ie({},t):t:null}function mn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Ju(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&nl(a),ref:e&&e.ref?n&&r?V(r)?r.concat(Es(e)):[r,Es(e)]:Es(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Z?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mn(t.ssContent),ssFallback:t.ssFallback&&mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gi(t=" ",e=0){return L(Xs,null,t,e)}function q(t="",e=!1){return e?(v(),gn(ct,null,t)):L(ct,null,t)}function je(t){return t==null||typeof t=="boolean"?L(ct):V(t)?L(Z,null,t.slice()):typeof t=="object"?_t(t):L(Xs,null,String(t))}function _t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mn(t)}function mi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),mi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Qs in e)?e._ctx=$e:r===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[gi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ju(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ni([e.class,s.class]));else if(r==="style")e.style=ti([e.style,s.style]);else if(Hs(r)){const i=e[r],o=s[r];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ye(t,e,n,s=null){We(t,e,7,[n,s])}const Yu=qa();let Xu=0;function Qu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Yu,i={uid:Xu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ja(s,r),emitsOptions:La(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=su.bind(null,i),t.ce&&t.ce(i),i}let Ee=null,_i,en,oo="__VUE_INSTANCE_SETTERS__";(en=Cr()[oo])||(en=Cr()[oo]=[]),en.push(t=>Ee=t),_i=t=>{en.length>1?en.forEach(e=>e(t)):en[0](t)};const _n=t=>{_i(t),t.scope.on()},Vt=()=>{Ee&&Ee.scope.off(),_i(null)};function sl(t){return t.vnode.shapeFlag&4}let Gn=!1;function Zu(t,e=!1){Gn=e;const{props:n,children:s}=t.vnode,r=sl(t);Lu(t,n,r,e),Fu(t,s);const i=r?ed(t,e):void 0;return Gn=!1,i}function ed(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sa(new Proxy(t.ctx,Au));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?nd(t):null;_n(t),Tn();const i=xt(s,t,0,[t.props,r]);if(Cn(),Vt(),ca(i)){if(i.then(Vt,Vt),e)return i.then(o=>{Ur(t,o,e)}).catch(o=>{ts(o,t,0)});t.asyncDep=i}else Ur(t,i,e)}else rl(t,e)}function Ur(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=ka(e)),rl(t,n)}let ao;function rl(t,e,n){const s=t.type;if(!t.render){if(!e&&ao&&!s.render){const r=s.template||hi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ie(Ie({isCustomElement:i,delimiters:a},o),l);s.render=ao(r,c)}}t.render=s.render||Ze}{_n(t),Tn();try{Pu(t)}finally{Cn(),Vt()}}}function td(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}}))}function nd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return td(t)},slots:t.slots,emit:t.emit,expose:e}}function Zs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ka(Sa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bn)return Bn[n](t)},has(e,n){return n in e||n in Bn}}))}function sd(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function rd(t){return K(t)&&"__vccOpts"in t}const Ve=(t,e)=>Qc(t,e,Gn);function il(t,e,n){const s=arguments.length;return s===2?ge(e)&&!V(e)?Ms(e)?L(t,null,[e]):L(t,e):L(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ms(n)&&(n=[n]),L(t,e,n))}const id=Symbol.for("v-scx"),od=()=>Ke(id),ad="3.3.11",ld="http://www.w3.org/2000/svg",Bt=typeof document<"u"?document:null,lo=Bt&&Bt.createElement("template"),cd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Bt.createElementNS(ld,t):Bt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Bt.createTextNode(t),createComment:t=>Bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{lo.innerHTML=s?`<svg>${t}</svg>`:t;const a=lo.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ud=Symbol("_vtc");function dd(t,e,n){const s=t[ud];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fd=Symbol("_vod");function hd(t,e,n){const s=t.style,r=we(n);if(n&&!r){if(e&&!we(e))for(const i in e)n[i]==null&&Br(s,i,"");for(const i in n)Br(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),fd in t&&(s.display=i)}}const co=/\s*!important$/;function Br(t,e,n){if(V(n))n.forEach(s=>Br(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=pd(t,e);co.test(n)?t.setProperty(xn(s),n.replace(co,""),"important"):t[s]=n}}const uo=["Webkit","Moz","ms"],fr={};function pd(t,e){const n=fr[e];if(n)return n;let s=nt(e);if(s!=="filter"&&s in t)return fr[e]=s;s=Ks(s);for(let r=0;r<uo.length;r++){const i=uo[r]+s;if(i in t)return fr[e]=i}return e}const fo="http://www.w3.org/1999/xlink";function gd(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(fo,e.slice(6,e.length)):t.setAttributeNS(fo,e,n);else{const i=xc(e);n==null||i&&!fa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function md(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=fa(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function tn(t,e,n,s){t.addEventListener(e,n,s)}function _d(t,e,n,s){t.removeEventListener(e,n,s)}const ho=Symbol("_vei");function vd(t,e,n,s,r=null){const i=t[ho]||(t[ho]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=bd(e);if(s){const c=i[e]=Ed(s,r);tn(t,a,c,l)}else o&&(_d(t,a,o,l),i[e]=void 0)}}const po=/(?:Once|Passive|Capture)$/;function bd(t){let e;if(po.test(t)){e={};let s;for(;s=t.match(po);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xn(t.slice(2)),e]}let hr=0;const wd=Promise.resolve(),yd=()=>hr||(wd.then(()=>hr=0),hr=Date.now());function Ed(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;We(Id(s,n.value),e,5,[s])};return n.value=t,n.attached=yd(),n}function Id(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const go=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xd=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?dd(t,s,r):e==="style"?hd(t,n,s):Hs(e)?Qr(e)||vd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Td(t,e,s,r))?md(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),gd(t,e,s,r))};function Td(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&go(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return go(e)&&we(n)?!1:e in t}const mo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>vs(e,n):e};function Cd(t){t.target.composing=!0}function _o(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pr=Symbol("_assign"),vn={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[pr]=mo(r);const i=s||r.props&&r.props.type==="number";tn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Tr(a)),t[pr](a)}),n&&tn(t,"change",()=>{t.value=t.value.trim()}),e||(tn(t,"compositionstart",Cd),tn(t,"compositionend",_o),tn(t,"change",_o))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[pr]=mo(i),t.composing)return;const o=r||t.type==="number"?Tr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},Sd=["ctrl","shift","alt","meta"],Rd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Sd.some(n=>t[`${n}Key`]&&!e.includes(n))},er=(t,e)=>t._withMods||(t._withMods=(n,...s)=>{for(let r=0;r<e.length;r++){const i=Rd[e[r]];if(i&&i(n,e))return}return t(n,...s)}),Ad=Ie({patchProp:xd},cd);let vo;function Pd(){return vo||(vo=Hu(Ad))}const kd=(...t)=>{const e=Pd().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Od(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Od(t){return we(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const nn=typeof window<"u";function Md(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function gr(t,e){const n={};for(const s in e){const r=e[s];n[s]=ze(r)?r.map(t):t(r)}return n}const jn=()=>{},ze=Array.isArray,Nd=/\/$/,Dd=t=>t.replace(Nd,"");function mr(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Bd(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function $d(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ld(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bn(e.matched[s],n.matched[r])&&ol(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ol(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ud(t[n],e[n]))return!1;return!0}function Ud(t,e){return ze(t)?wo(t,e):ze(e)?wo(e,t):t===e}function wo(t,e){return ze(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Bd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Jn;(function(t){t.pop="pop",t.push="push"})(Jn||(Jn={}));var Hn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hn||(Hn={}));function Fd(t){if(!t)if(nn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Dd(t)}const jd=/^[^#]+#/;function Hd(t,e){return t.replace(jd,"#")+e}function Vd(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const tr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Wd(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Vd(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function yo(t,e){return(history.state?history.state.position-e:-1)+t}const Fr=new Map;function Kd(t,e){Fr.set(t,e)}function zd(t){const e=Fr.get(t);return Fr.delete(t),e}let qd=()=>location.protocol+"//"+location.host;function al(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),bo(l,"")}return bo(n,t)+s+r}function Gd(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const w=al(t,location),R=n.value,O=e.value;let j=0;if(p){if(n.value=w,e.value=p,o&&o===R){o=null;return}j=O?p.position-O.position:0}else s(w);r.forEach($=>{$(n.value,R,{delta:j,type:Jn.pop,direction:j?j>0?Hn.forward:Hn.back:Hn.unknown})})};function l(){o=n.value}function c(p){r.push(p);const w=()=>{const R=r.indexOf(p);R>-1&&r.splice(R,1)};return i.push(w),w}function u(){const{history:p}=window;p.state&&p.replaceState(oe({},p.state,{scroll:tr()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Eo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?tr():null}}function Jd(t){const{history:e,location:n}=window,s={value:al(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:qd()+t+l;try{e[u?"replaceState":"pushState"](c,"",p),r.value=c}catch(w){console.error(w),n[u?"replace":"assign"](p)}}function o(l,c){const u=oe({},e.state,Eo(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=oe({},r.value,e.state,{forward:l,scroll:tr()});i(u.current,u,!0);const f=oe({},Eo(s.value,l,null),{position:u.position+1},c);i(l,f,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function Yd(t){t=Fd(t);const e=Jd(t),n=Gd(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=oe({location:"",base:t,go:s,createHref:Hd.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Xd(t){return typeof t=="string"||t&&typeof t=="object"}function ll(t){return typeof t=="string"||typeof t=="symbol"}const gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cl=Symbol("");var Io;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Io||(Io={}));function wn(t,e){return oe(new Error,{type:t,[cl]:!0},e)}function rt(t,e){return t instanceof Error&&cl in t&&(e==null||!!(t.type&e))}const xo="[^/]+?",Qd={sensitive:!1,strict:!1,start:!0,end:!0},Zd=/[.+*?^${}()[\]/\\]/g;function ef(t,e){const n=oe({},Qd,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const p=c[f];let w=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(Zd,"\\$&"),w+=40;else if(p.type===1){const{value:R,repeatable:O,optional:j,regexp:$}=p;i.push({name:R,repeatable:O,optional:j});const N=$||xo;if(N!==xo){w+=10;try{new RegExp(`(${N})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${R}" (${N}): `+C.message)}}let J=O?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(J=j&&c.length<2?`(?:/${J})`:"/"+J),j&&(J+="?"),r+=J,w+=20,j&&(w+=-8),O&&(w+=-20),N===".*"&&(w+=-50)}u.push(w)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const w=u[p]||"",R=i[p-1];f[R.name]=w&&R.repeatable?w.split("/"):w}return f}function l(c){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const w of p)if(w.type===0)u+=w.value;else if(w.type===1){const{value:R,repeatable:O,optional:j}=w,$=R in c?c[R]:"";if(ze($)&&!O)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const N=ze($)?$.join("/"):$;if(!N)if(j)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${R}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function tf(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function nf(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=tf(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(To(s))return 1;if(To(r))return-1}return r.length-s.length}function To(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sf={type:0,value:""},rf=/[a-zA-Z0-9_]/;function of(t){if(!t)return[[]];if(t==="/")return[[sf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${n})/"${c}": ${w}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function f(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:rf.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function af(t,e,n){const s=ef(of(t.path),n),r=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lf(t,e){const n=[],s=new Map;e=Ro({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,f,p){const w=!p,R=cf(u);R.aliasOf=p&&p.record;const O=Ro(e,u),j=[R];if("alias"in u){const J=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of J)j.push(oe({},R,{components:p?p.record.components:R.components,path:C,aliasOf:p?p.record:R}))}let $,N;for(const J of j){const{path:C}=J;if(f&&C[0]!=="/"){const H=f.record.path,te=H[H.length-1]==="/"?"":"/";J.path=f.record.path+(C&&te+C)}if($=af(J,f,O),p?p.alias.push($):(N=N||$,N!==$&&N.alias.push($),w&&u.name&&!So($)&&o(u.name)),R.children){const H=R.children;for(let te=0;te<H.length;te++)i(H[te],$,p&&p.children[te])}p=p||$,($.record.components&&Object.keys($.record.components).length||$.record.name||$.record.redirect)&&l($)}return N?()=>{o(N)}:jn}function o(u){if(ll(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&nf(u,n[f])>=0&&(u.record.path!==n[f].record.path||!ul(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!So(u)&&s.set(u.record.name,u)}function c(u,f){let p,w={},R,O;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw wn(1,{location:u});O=p.record.name,w=oe(Co(f.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Co(u.params,p.keys.map(N=>N.name))),R=p.stringify(w)}else if("path"in u)R=u.path,p=n.find(N=>N.re.test(R)),p&&(w=p.parse(R),O=p.record.name);else{if(p=f.name?s.get(f.name):n.find(N=>N.re.test(f.path)),!p)throw wn(1,{location:u,currentLocation:f});O=p.record.name,w=oe({},f.params,u.params),R=p.stringify(w)}const j=[];let $=p;for(;$;)j.unshift($.record),$=$.parent;return{name:O,path:R,params:w,matched:j,meta:df(j)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Co(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function cf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function uf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function So(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function df(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function Ro(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ul(t,e){return e.children.some(n=>n===t||ul(t,n))}const dl=/#/g,ff=/&/g,hf=/\//g,pf=/=/g,gf=/\?/g,fl=/\+/g,mf=/%5B/g,_f=/%5D/g,hl=/%5E/g,vf=/%60/g,pl=/%7B/g,bf=/%7C/g,gl=/%7D/g,wf=/%20/g;function vi(t){return encodeURI(""+t).replace(bf,"|").replace(mf,"[").replace(_f,"]")}function yf(t){return vi(t).replace(pl,"{").replace(gl,"}").replace(hl,"^")}function jr(t){return vi(t).replace(fl,"%2B").replace(wf,"+").replace(dl,"%23").replace(ff,"%26").replace(vf,"`").replace(pl,"{").replace(gl,"}").replace(hl,"^")}function Ef(t){return jr(t).replace(pf,"%3D")}function If(t){return vi(t).replace(dl,"%23").replace(gf,"%3F")}function xf(t){return t==null?"":If(t).replace(hf,"%2F")}function Ns(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Tf(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(fl," "),o=i.indexOf("="),a=Ns(o<0?i:i.slice(0,o)),l=o<0?null:Ns(i.slice(o+1));if(a in e){let c=e[a];ze(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ao(t){let e="";for(let n in t){const s=t[n];if(n=Ef(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ze(s)?s.map(i=>i&&jr(i)):[s&&jr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Cf(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ze(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Sf=Symbol(""),Po=Symbol(""),nr=Symbol(""),bi=Symbol(""),Hr=Symbol("");function Nn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(wn(4,{from:n,to:e})):f instanceof Error?a(f):Xd(f)?a(wn(2,{from:e,to:f})):(i&&s.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function _r(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Rf(a)){const c=(a.__vccOpts||a)[e];c&&r.push(vt(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Md(c)?c.default:c;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&vt(p,n,s,i,o)()}))}}return r}function Rf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ko(t){const e=Ke(nr),n=Ke(bi),s=Ve(()=>e.resolve(X(t.to))),r=Ve(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(bn.bind(null,u));if(p>-1)return p;const w=Oo(l[c-2]);return c>1&&Oo(u)===w&&f[f.length-1].path!==w?f.findIndex(bn.bind(null,l[c-2])):p}),i=Ve(()=>r.value>-1&&kf(n.params,s.value.params)),o=Ve(()=>r.value>-1&&r.value===n.matched.length-1&&ol(n.params,s.value.params));function a(l={}){return Pf(l)?e[X(t.replace)?"replace":"push"](X(t.to)).catch(jn):Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Af=ja({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ko,setup(t,{slots:e}){const n=qs(ko(t)),{options:s}=Ke(nr),r=Ve(()=>({[Mo(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Mo(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:il("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),he=Af;function Pf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kf(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!ze(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Oo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mo=(t,e,n)=>t??e??n,Of=ja({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ke(Hr),r=Ve(()=>t.route||s.value),i=Ke(Po,0),o=Ve(()=>{let c=X(i);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ve(()=>r.value.matched[o.value]);ys(Po,Ve(()=>o.value+1)),ys(Sf,a),ys(Hr,r);const l=Q();return bs(()=>[l.value,a.value,t.name],([c,u,f],[p,w,R])=>{u&&(u.instances[f]=c,w&&w!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=w.leaveGuards),u.updateGuards.size||(u.updateGuards=w.updateGuards))),c&&u&&(!w||!bn(u,w)||!p)&&(u.enterCallbacks[f]||[]).forEach(O=>O(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return No(n.default,{Component:p,route:c});const w=f.props[u],R=w?w===!0?c.params:typeof w=="function"?w(c):w:null,j=il(p,oe({},R,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return No(n.default,{Component:j,route:c})||j}}});function No(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Mf=Of;function Nf(t){const e=lf(t.routes,t),n=t.parseQuery||Tf,s=t.stringifyQuery||Ao,r=t.history,i=Nn(),o=Nn(),a=Nn(),l=Gc(gt);let c=gt;nn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gr.bind(null,y=>""+y),f=gr.bind(null,xf),p=gr.bind(null,Ns);function w(y,M){let P,U;return ll(y)?(P=e.getRecordMatcher(y),U=M):U=y,e.addRoute(U,P)}function R(y){const M=e.getRecordMatcher(y);M&&e.removeRoute(M)}function O(){return e.getRoutes().map(y=>y.record)}function j(y){return!!e.getRecordMatcher(y)}function $(y,M){if(M=oe({},M||l.value),typeof y=="string"){const m=mr(n,y,M.path),_=e.resolve({path:m.path},M),I=r.createHref(m.fullPath);return oe(m,_,{params:p(_.params),hash:Ns(m.hash),redirectedFrom:void 0,href:I})}let P;if("path"in y)P=oe({},y,{path:mr(n,y.path,M.path).path});else{const m=oe({},y.params);for(const _ in m)m[_]==null&&delete m[_];P=oe({},y,{params:f(m)}),M.params=f(M.params)}const U=e.resolve(P,M),ie=y.hash||"";U.params=u(p(U.params));const d=$d(s,oe({},y,{hash:yf(ie),path:U.path})),h=r.createHref(d);return oe({fullPath:d,hash:ie,query:s===Ao?Cf(y.query):y.query||{}},U,{redirectedFrom:void 0,href:h})}function N(y){return typeof y=="string"?mr(n,y,l.value.path):oe({},y)}function J(y,M){if(c!==y)return wn(8,{from:M,to:y})}function C(y){return de(y)}function H(y){return C(oe(N(y),{replace:!0}))}function te(y){const M=y.matched[y.matched.length-1];if(M&&M.redirect){const{redirect:P}=M;let U=typeof P=="function"?P(y):P;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=N(U):{path:U},U.params={}),oe({query:y.query,hash:y.hash,params:"path"in U?{}:y.params},U)}}function de(y,M){const P=c=$(y),U=l.value,ie=y.state,d=y.force,h=y.replace===!0,m=te(P);if(m)return de(oe(N(m),{state:typeof m=="object"?oe({},ie,m.state):ie,force:d,replace:h}),M||P);const _=P;_.redirectedFrom=M;let I;return!d&&Ld(s,U,P)&&(I=wn(16,{to:_,from:U}),Ge(U,U,!0,!1)),(I?Promise.resolve(I):ve(_,U)).catch(x=>rt(x)?rt(x,2)?x:ht(x):re(x,_,U)).then(x=>{if(x){if(rt(x,2))return de(oe({replace:h},N(x.to),{state:typeof x.to=="object"?oe({},ie,x.to.state):ie,force:d}),M||_)}else x=Ne(_,U,!0,h,ie);return ye(_,U,x),x})}function ae(y,M){const P=J(y,M);return P?Promise.reject(P):Promise.resolve()}function me(y){const M=Qt.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(y):y()}function ve(y,M){let P;const[U,ie,d]=Df(y,M);P=_r(U.reverse(),"beforeRouteLeave",y,M);for(const m of U)m.leaveGuards.forEach(_=>{P.push(vt(_,y,M))});const h=ae.bind(null,y,M);return P.push(h),Te(P).then(()=>{P=[];for(const m of i.list())P.push(vt(m,y,M));return P.push(h),Te(P)}).then(()=>{P=_r(ie,"beforeRouteUpdate",y,M);for(const m of ie)m.updateGuards.forEach(_=>{P.push(vt(_,y,M))});return P.push(h),Te(P)}).then(()=>{P=[];for(const m of d)if(m.beforeEnter)if(ze(m.beforeEnter))for(const _ of m.beforeEnter)P.push(vt(_,y,M));else P.push(vt(m.beforeEnter,y,M));return P.push(h),Te(P)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),P=_r(d,"beforeRouteEnter",y,M),P.push(h),Te(P))).then(()=>{P=[];for(const m of o.list())P.push(vt(m,y,M));return P.push(h),Te(P)}).catch(m=>rt(m,8)?m:Promise.reject(m))}function ye(y,M,P){a.list().forEach(U=>me(()=>U(y,M,P)))}function Ne(y,M,P,U,ie){const d=J(y,M);if(d)return d;const h=M===gt,m=nn?history.state:{};P&&(U||h?r.replace(y.fullPath,oe({scroll:h&&m&&m.scroll},ie)):r.push(y.fullPath,ie)),l.value=y,Ge(y,M,P,h),ht()}let xe;function qe(){xe||(xe=r.listen((y,M,P)=>{if(!cs.listening)return;const U=$(y),ie=te(U);if(ie){de(oe(ie,{replace:!0}),U).catch(jn);return}c=U;const d=l.value;nn&&Kd(yo(d.fullPath,P.delta),tr()),ve(U,d).catch(h=>rt(h,12)?h:rt(h,2)?(de(h.to,U).then(m=>{rt(m,20)&&!P.delta&&P.type===Jn.pop&&r.go(-1,!1)}).catch(jn),Promise.reject()):(P.delta&&r.go(-P.delta,!1),re(h,U,d))).then(h=>{h=h||Ne(U,d,!1),h&&(P.delta&&!rt(h,8)?r.go(-P.delta,!1):P.type===Jn.pop&&rt(h,20)&&r.go(-1,!1)),ye(U,d,h)}).catch(jn)}))}let De=Nn(),_e=Nn(),se;function re(y,M,P){ht(y);const U=_e.list();return U.length?U.forEach(ie=>ie(y,M,P)):console.error(y),Promise.reject(y)}function st(){return se&&l.value!==gt?Promise.resolve():new Promise((y,M)=>{De.add([y,M])})}function ht(y){return se||(se=!y,qe(),De.list().forEach(([M,P])=>y?P(y):M()),De.reset()),y}function Ge(y,M,P,U){const{scrollBehavior:ie}=t;if(!nn||!ie)return Promise.resolve();const d=!P&&zd(yo(y.fullPath,0))||(U||!P)&&history.state&&history.state.scroll||null;return Ma().then(()=>ie(y,M,d)).then(h=>h&&Wd(h)).catch(h=>re(h,y,M))}const Pe=y=>r.go(y);let Xt;const Qt=new Set,cs={currentRoute:l,listening:!0,addRoute:w,removeRoute:R,hasRoute:j,getRoutes:O,resolve:$,options:t,push:C,replace:H,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:_e.add,isReady:st,install(y){const M=this;y.component("RouterLink",he),y.component("RouterView",Mf),y.config.globalProperties.$router=M,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>X(l)}),nn&&!Xt&&l.value===gt&&(Xt=!0,C(r.location).catch(ie=>{}));const P={};for(const ie in gt)Object.defineProperty(P,ie,{get:()=>l.value[ie],enumerable:!0});y.provide(nr,M),y.provide(bi,xa(P)),y.provide(Hr,l);const U=y.unmount;Qt.add(y),y.unmount=function(){Qt.delete(y),Qt.size<1&&(c=gt,xe&&xe(),xe=null,l.value=gt,Xt=!1,se=!1),U()}}};function Te(y){return y.reduce((M,P)=>M.then(()=>me(P)),Promise.resolve())}return cs}function Df(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>bn(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>bn(c,l))||r.push(l))}return[n,s,r]}function wi(){return Ke(nr)}function An(){return Ke(bi)}const ml="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='11'%20cy='11'%20r='7'%20stroke='%23394150'%20stroke-width='2'/%3e%3cpath%20d='M20%2020L17%2017'%20stroke='%23394150'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",$f="/assets/hero-imagehc-D6vI5bIK.jpg",Lf="/assets/hero-text--xnBRz4p.svg",At=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Uf={},Bf={class:"sm:pt-[12px] w-full"},Ff=g("div",{class:"maintop relative"},[g("img",{src:$f,alt:"",srcset:"",class:"w-full h-[190px] sm:h-[330px] sm:rounded-lg mainimg sm:hidden md:block md:h-full 2xl:h-[65vh]"}),g("img",{src:Lf,alt:"",srcset:"",class:"absolute top-6 right-20 sm:top-8 sm:right-16 w-[35%] sm:w-[45%] md:w-[35%] md:top-[8%] md:right-[15%] 2xl:w-[30%] 2xl:right-[22%]"})],-1),jf=[Ff];function Hf(t,e){return v(),E("div",Bf,jf)}const _l=At(Uf,[["render",Hf]]),Vf={class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},Wf=["src"],Kf=["src"],zf=["src"],qf=["src"],Gf=["src"],Jf=["src"],Yf="https://www.themealdb.com/api/json/v1/1/lookup.php?i=53049",Xf="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52893",Qf="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768",Zf="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767",eh="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855",th="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52894",nh={__name:"baserecipes",setup(t){const e=Q({});fetch(`${Yf}`).then(a=>a.json()).then(a=>{e.value=a});const n=Q({});fetch(`${Xf}`).then(a=>a.json()).then(a=>{n.value=a});const s=Q({});fetch(`${Qf}`).then(a=>a.json()).then(a=>{s.value=a});const r=Q({});fetch(`${Zf}`).then(a=>a.json()).then(a=>{r.value=a});const i=Q({});fetch(`${eh}`).then(a=>a.json()).then(a=>{i.value=a});const o=Q({});return fetch(`${th}`).then(a=>a.json()).then(a=>{o.value=a}),(a,l)=>(v(),E("section",Vf,[(v(!0),E(Z,null,fe(e.value.meals,c=>(v(),E("div",null,[L(X(he),{to:/meals/+c.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:c.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Wf),g("div",null,b(c.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(n.value.meals,c=>(v(),E("div",null,[L(X(he),{to:/meals/+c.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:c.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Kf),g("div",null,b(c.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(s.value.meals,c=>(v(),E("div",null,[L(X(he),{to:/meals/+c.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:c.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,zf),g("div",null,b(c.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(r.value.meals,c=>(v(),E("div",null,[L(X(he),{to:/meals/+c.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:c.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,qf),g("div",null,b(c.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(i.value.meals,c=>(v(),E("div",null,[L(X(he),{to:/meals/+c.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:c.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Gf),g("div",null,b(c.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(o.value.meals,c=>(v(),E("div",null,[L(X(he),{to:/meals/+c.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:c.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Jf),g("div",null,b(c.strMeal),1)]),_:2},1032,["to"])]))),256))]))}},sh={class:"grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4"},rh={class:"relative"},ih=["src"],oh={class:"flex justify-center items-center text-[14px] 2xl:text-[16px]"},ah="https://www.themealdb.com/api/json/v1/1/categories.php?",lh={__name:"categories",setup(t){const e=Q({});return fetch(`${ah}`).then(n=>n.json()).then(n=>{e.value=n.categories.slice(0,6)}),(n,s)=>{const r=Rt("router-link");return v(),E("section",sh,[(v(!0),E(Z,null,fe(e.value,i=>(v(),E("div",rh,[L(r,{to:/category/+i.strCategory,class:"bg-transparent bg-[#0E1325] border border-[#394150] flex gap-3 rounded-xl duration-300 hover:bg-[#FEBD2E] text-[#E5E7EB] hover:text-black hover:font-bold overflow-hidden"},{default:G(()=>[g("img",{src:i.strCategoryThumb,alt:"",srcset:"",class:"catimg w-[50%] sm:w-[32%] lg:w-[42%] xl:w-[33%] lg:ml-[-40px] sm:ml-[-40px] ml-[-20px] itemimg rounded-l-full"},null,8,ih),g("div",oh,b(i.strCategory),1)]),_:2},1032,["to"])]))),256))])}}},ch={class:"flex flex-col gap-4 sm:px-[12px] 2xl:px-[16px]"},uh={class:"flex flex-col lg:flex-row justify-between gap-3 sm:gap-8 px-3 sm:px-5 xl:px-14"},dh={class:"flex flex-col sm:w-full lg:w-[35%] gap-3 sm:gap-6"},fh=g("div",{class:"text-white text-[24px] cathead flex justify-left items-center"},"Categories",-1),hh={class:"w-full flex flex-col gap-8"},ph={class:"flex justify-between gap-3 text-[14px]"},gh=g("img",{src:ml,alt:"",srcset:"",class:"absolute top-3 left-4"},null,-1),mh=g("i",{class:"fa-solid fa-right-from-bracket text-base"},null,-1),_h=g("div",{class:"text-[14px] font-semibold"},"SignIn / SignUp",-1),vh={key:0,class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},bh=["src"],wh={key:1},yh={__name:"home",setup(t){const e=Q(""),n=Q([]),s=()=>{e.value!==""&&fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.value}`).then(i=>i.json()).then(i=>{n.value=i.meals?i.meals.slice(0,20):[],e.value=""}).catch(i=>{console.error("Error fetching data:",i)})};let r=!0;return(i,o)=>(v(),E("main",ch,[L(_l),g("section",uh,[g("div",dh,[fh,(v(),gn(Ps,null,{default:G(()=>[L(lh)]),_:1}))]),g("div",hh,[g("div",ph,[g("form",{class:"relative w-[60%]",onSubmit:er(s,["prevent"]),onClick:o[1]||(o[1]=a=>X(r)==!1)},[hn(g("input",{type:"text",placeholder:"Search recipes and more...",name:"search-input",class:"border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},null,512),[[vn,e.value]]),gh],32),L(X(he),{to:"/login",class:"relative flex justify-center items-center bg-white rounded-full p-8 py-3 gap-2 h-12 text-[#394150]"},{default:G(()=>[mh,_h]),_:1})]),n.value&&n.value.length>0?(v(),E("section",vh,[(v(!0),E(Z,null,fe(n.value,a=>(v(),E("div",null,[L(X(he),{to:/meals/+a.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:G(()=>[g("img",{src:a.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,bh),g("div",null,b(a.strMeal),1)]),_:2},1032,["to"])]))),256))])):(v(),E("section",wh,[(v(),gn(Ps,null,{default:G(()=>[L(nh)]),_:1}))]))])])]))}},Pn="/assets/logo-light-NOLr421m.svg",kn="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%206L9%2012L15%2018'%20stroke='%230D101D'%20stroke-width='2'/%3e%3c/svg%3e",Yt=t=>(Sn("data-v-7e1eda91"),t=t(),Rn(),t),Eh={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},Ih={class:"flex flex-col gap-10"},xh={class:"px-3 flex justify-between text-[12px] md:text-base text-[#394150] w-full"},Th=Yt(()=>g("img",{src:Pn,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),Ch=Yt(()=>g("img",{src:kn,alt:"",srcset:""},null,-1)),Sh=Yt(()=>g("div",null,"Back to categories",-1)),Rh={class:"flex flex-col gap-10 w-full sm:px-[18%] 2xl:px-[25%]"},Ah=["src"],Ph={class:"flex flex-col gap-4"},kh={class:"text-[30px] md:text-[45px] detailhead"},Oh={class:"flex gap-4"},Mh=Yt(()=>g("div",null,"category:",-1)),Nh={class:"font-bold"},Dh=Yt(()=>g("div",null,"Area:",-1)),$h={class:"font-bold"},Lh={class:"ingredients flex flex-col gap-5 px-2 md:px-0"},Uh=Yt(()=>g("div",{class:"flex gap-4"},[g("button",{class:"bg-[#FEBD2E] p-3 py-5 rounded-full"}),g("h3",{class:"font-bold flex items-center text-[18px]"},"Ingredients")],-1)),Bh={class:"list-disc px-[5%] flex flex-col gap-2 text-[18px]"},Fh={key:0},jh={key:1},Hh={key:2},Vh={key:3},Wh={key:4},Kh={key:5},zh={key:6},qh={key:7},Gh={key:8},Jh={key:9},Yh={key:10},Xh={key:11},Qh={key:12},Zh={key:13},ep={key:14},tp={key:15},np={key:16},sp={key:17},rp={key:18},ip={key:19},op={class:"Instructions flex flex-col gap-5 px-2 md:px-0 pb-14"},ap=Yt(()=>g("div",{class:"flex gap-4"},[g("button",{class:"bg-[#4E80EE] p-3 py-5 rounded-full"}),g("h3",{class:"font-bold flex items-center text-[18px]"},"Instructions")],-1)),lp={class:"text-[17px] instruct whitespace-pre-line"},cp={__name:"details",setup(t){const e=Q({}),n=An();return Jt(async()=>{const r=await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${n.params.id}`)).json();e.value=r}),(s,r)=>{const i=Rt("router-link");return v(),E("main",Eh,[g("section",Ih,[g("div",xh,[Th,L(i,{to:"/",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:G(()=>[Ch,Sh]),_:1})]),(v(!0),E(Z,null,fe(e.value.meals,o=>(v(),E("div",Rh,[g("img",{src:o.strMealThumb,alt:"",srcset:"",class:"rounded-lg w-full sm:h-[450px] 2xl:h-[500px]"},null,8,Ah),g("div",Ph,[g("h2",kh,b(o.strMeal),1),g("div",Oh,[L(i,{to:/category/+o.strCategory,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:G(()=>[Mh,g("div",Nh,b(o.strCategory),1)]),_:2},1032,["to"]),L(i,{to:/area/+o.strArea,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:G(()=>[Dh,g("div",$h,b(o.strArea),1)]),_:2},1032,["to"])])]),g("div",Lh,[Uh,g("ul",Bh,[o.strIngredient1.length>1&&o.strMeasure1!==null?(v(),E("li",Fh,b(o.strMeasure1)+" "+b(o.strIngredient1),1)):q("",!0),o.strIngredient2.length>1?(v(),E("li",jh,b(o.strMeasure2)+" "+b(o.strIngredient2),1)):q("",!0),o.strIngredient3.length>1?(v(),E("li",Hh,b(o.strMeasure3)+" "+b(o.strIngredient3),1)):q("",!0),o.strIngredient4.length>1?(v(),E("li",Vh,b(o.strMeasure4)+" "+b(o.strIngredient4),1)):q("",!0),o.strIngredient5.length>1?(v(),E("li",Wh,b(o.strMeasure5)+" "+b(o.strIngredient5),1)):q("",!0),o.strIngredient6.length>1?(v(),E("li",Kh,b(o.strMeasure6)+" "+b(o.strIngredient6),1)):q("",!0),o.strIngredient7.length>1?(v(),E("li",zh,b(o.strMeasure7)+" "+b(o.strIngredient7),1)):q("",!0),o.strIngredient8.length>1?(v(),E("li",qh,b(o.strMeasure8)+" "+b(o.strIngredient8),1)):q("",!0),o.strIngredient9.length>1?(v(),E("li",Gh,b(o.strMeasure9)+" "+b(o.strIngredient9),1)):q("",!0),o.strIngredient10.length>1?(v(),E("li",Jh,b(o.strMeasure10)+" "+b(o.strIngredient10),1)):q("",!0),o.strIngredient11.length>1?(v(),E("li",Yh,b(o.strMeasure11)+" "+b(o.strIngredient11),1)):q("",!0),o.strIngredient12.length>1?(v(),E("li",Xh,b(o.strMeasure12)+" "+b(o.strIngredient12),1)):q("",!0),o.strIngredient13.length>1?(v(),E("li",Qh,b(o.strMeasure13)+" "+b(o.strIngredient13),1)):q("",!0),o.strIngredient14.length>1?(v(),E("li",Zh,b(o.strMeasure14)+" "+b(o.strIngredient14),1)):q("",!0),o.strIngredient15.length>1?(v(),E("li",ep,b(o.strMeasure15)+" "+b(o.strIngredient15),1)):q("",!0),o.strMeasure16!==null&&o.strIngredient16.length>1?(v(),E("li",tp,b(o.strMeasure16)+" "+b(o.strIngredient16),1)):q("",!0),o.strMeasure17!==null&&o.strIngredient17.length>1?(v(),E("li",np,b(o.strMeasure17)+" "+b(o.strIngredient17),1)):q("",!0),o.strMeasure18!==null&&o.strIngredient18.length>1?(v(),E("li",sp,b(o.strMeasure18)+" "+b(o.strIngredient18),1)):q("",!0),o.strMeasure19!==null&&o.strIngredient19.length>1?(v(),E("li",rp,b(o.strMeasure19)+" "+b(o.strIngredient19),1)):q("",!0),o.strMeasure20!==null&&o.strIngredient20.length>1?(v(),E("li",ip,b(o.strMeasure20)+" "+b(o.strIngredient20),1)):q("",!0)])]),g("div",op,[ap,g("p",lp,b(o.strInstructions),1)])]))),256))])])}}},up=At(cp,[["__scopeId","data-v-7e1eda91"]]),Pt=t=>(Sn("data-v-e2e2d262"),t=t(),Rn(),t),dp={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},fp={class:"flex flex-col gap-10"},hp={class:"px-3 flex justify-between text-[12px] md:text-base text-[#394150] w-full"},pp=Pt(()=>g("img",{src:Pn,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),gp=Pt(()=>g("img",{src:kn,alt:"",srcset:""},null,-1)),mp=Pt(()=>g("div",null,"Back to categories",-1)),_p={class:"flex flex-col gap-10 w-full sm:px-[18%] 2xl:px-[25%]"},vp=["src"],bp={class:"flex flex-col gap-4"},wp={class:"text-[30px] md:text-[45px] detailhead"},yp={class:"flex gap-4"},Ep=Pt(()=>g("div",null,"category:",-1)),Ip={class:"font-bold"},xp=Pt(()=>g("div",null,"Area:",-1)),Tp={class:"font-bold"},Cp={class:"ingredients flex flex-col gap-5 px-2 md:px-0"},Sp=Pt(()=>g("div",{class:"flex gap-4"},[g("button",{class:"bg-[#FEBD2E] p-3 py-5 rounded-full"}),g("h3",{class:"font-bold flex items-center text-[18px]"},"Ingredients")],-1)),Rp={class:"list-disc px-[5%] flex flex-col gap-2 text-[18px]"},Ap={key:0},Pp={key:1},kp={key:2},Op={key:3},Mp={key:4},Np={key:5},Dp={key:6},$p={key:7},Lp={key:8},Up={key:9},Bp={key:10},Fp={key:11},jp={key:12},Hp={key:13},Vp={key:14},Wp={key:15},Kp={key:16},zp={key:17},qp={key:18},Gp={key:19},Jp={class:"Instructions flex flex-col gap-5 px-2 md:px-0 pb-14"},Yp=Pt(()=>g("div",{class:"flex gap-4"},[g("button",{class:"bg-[#4E80EE] p-3 py-5 rounded-full"}),g("h3",{class:"font-bold flex items-center text-[18px]"},"Instructions")],-1)),Xp={class:"text-[17px] instruct whitespace-pre-line"},Qp=Pt(()=>g("div",null,[g("div",null,"Video")],-1)),Zp={__name:"Ldetails",setup(t){const e=Q({}),n=An();return Jt(async()=>{const r=await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${n.params.id}`)).json();console.log(r),e.value=r}),(s,r)=>(v(),E("main",dp,[g("section",fp,[g("div",hp,[pp,L(X(he),{to:"/search",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:G(()=>[gp,mp]),_:1})]),(v(!0),E(Z,null,fe(e.value.meals,i=>(v(),E("div",_p,[g("img",{src:i.strMealThumb,alt:"",srcset:"",class:"rounded-lg w-full sm:h-[450px] 2xl:h-[500px]"},null,8,vp),g("div",bp,[g("h2",wp,b(i.strMeal),1),g("div",yp,[L(X(he),{to:/lcategory/+i.strCategory,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:G(()=>[Ep,g("div",Ip,b(i.strCategory),1)]),_:2},1032,["to"]),L(X(he),{to:/larea/+i.strArea,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:G(()=>[xp,g("div",Tp,b(i.strArea),1)]),_:2},1032,["to"])])]),g("div",Cp,[Sp,g("ul",Rp,[i.strIngredient1.length>1&&i.strMeasure1!==null?(v(),E("li",Ap,b(i.strMeasure1)+" "+b(i.strIngredient1),1)):q("",!0),i.strIngredient2.length>1?(v(),E("li",Pp,b(i.strMeasure2)+" "+b(i.strIngredient2),1)):q("",!0),i.strIngredient3.length>1?(v(),E("li",kp,b(i.strMeasure3)+" "+b(i.strIngredient3),1)):q("",!0),i.strIngredient4.length>1?(v(),E("li",Op,b(i.strMeasure4)+" "+b(i.strIngredient4),1)):q("",!0),i.strIngredient5.length>1?(v(),E("li",Mp,b(i.strMeasure5)+" "+b(i.strIngredient5),1)):q("",!0),i.strIngredient6.length>1?(v(),E("li",Np,b(i.strMeasure6)+" "+b(i.strIngredient6),1)):q("",!0),i.strIngredient7.length>1?(v(),E("li",Dp,b(i.strMeasure7)+" "+b(i.strIngredient7),1)):q("",!0),i.strIngredient8.length>1?(v(),E("li",$p,b(i.strMeasure8)+" "+b(i.strIngredient8),1)):q("",!0),i.strIngredient9.length>1?(v(),E("li",Lp,b(i.strMeasure9)+" "+b(i.strIngredient9),1)):q("",!0),i.strIngredient10.length>1?(v(),E("li",Up,b(i.strMeasure10)+" "+b(i.strIngredient10),1)):q("",!0),i.strIngredient11.length>1?(v(),E("li",Bp,b(i.strMeasure11)+" "+b(i.strIngredient11),1)):q("",!0),i.strIngredient12.length>1?(v(),E("li",Fp,b(i.strMeasure12)+" "+b(i.strIngredient12),1)):q("",!0),i.strIngredient13.length>1?(v(),E("li",jp,b(i.strMeasure13)+" "+b(i.strIngredient13),1)):q("",!0),i.strIngredient14.length>1?(v(),E("li",Hp,b(i.strMeasure14)+" "+b(i.strIngredient14),1)):q("",!0),i.strIngredient15.length>1?(v(),E("li",Vp,b(i.strMeasure15)+" "+b(i.strIngredient15),1)):q("",!0),i.strMeasure16!==null&&i.strIngredient16.length>1?(v(),E("li",Wp,b(i.strMeasure16)+" "+b(i.strIngredient16),1)):q("",!0),i.strMeasure17!==null&&i.strIngredient17.length>1?(v(),E("li",Kp,b(i.strMeasure17)+" "+b(i.strIngredient17),1)):q("",!0),i.strMeasure18!==null&&i.strIngredient18.length>1?(v(),E("li",zp,b(i.strMeasure18)+" "+b(i.strIngredient18),1)):q("",!0),i.strMeasure19!==null&&i.strIngredient19.length>1?(v(),E("li",qp,b(i.strMeasure19)+" "+b(i.strIngredient19),1)):q("",!0),i.strMeasure20!==null&&i.strIngredient20.length>1?(v(),E("li",Gp,b(i.strMeasure20)+" "+b(i.strIngredient20),1)):q("",!0)])]),g("div",Jp,[Yp,g("p",Xp,b(i.strInstructions),1)]),Qp]))),256))])]))}},eg=At(Zp,[["__scopeId","data-v-e2e2d262"]]),yi=t=>(Sn("data-v-a66f1031"),t=t(),Rn(),t),tg={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},ng={class:"flex flex-col gap-10"},sg={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},rg=yi(()=>g("img",{src:Pn,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),ig=yi(()=>g("img",{src:kn,alt:"",srcset:""},null,-1)),og=yi(()=>g("div",null,"Back to categories",-1)),ag={class:"flex justify-center text-[35px] detailhead"},lg={class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},cg=["src"],ug={__name:"categoryDetails",setup(t){const e=Q({}),n=An();return Jt(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${n.params.id}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{e.value=s.meals.slice(0,20)}).catch(s=>{console.error("Error fetching data:",s)})}),(s,r)=>{const i=Rt("router-link");return v(),E("main",tg,[g("section",ng,[g("div",sg,[rg,L(i,{to:"/",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:G(()=>[ig,og]),_:1})]),g("div",ag,b(X(n).params.id)+" meals ",1),g("section",lg,[(v(!0),E(Z,null,fe(e.value,o=>(v(),E("div",null,[L(i,{to:/meals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:G(()=>[g("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,cg),g("div",null,b(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},dg=At(ug,[["__scopeId","data-v-a66f1031"]]),Ei=t=>(Sn("data-v-3075fa14"),t=t(),Rn(),t),fg={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},hg={class:"flex flex-col gap-10"},pg={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},gg=Ei(()=>g("img",{src:Pn,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),mg=Ei(()=>g("img",{src:kn,alt:"",srcset:""},null,-1)),_g=Ei(()=>g("div",null,"Back to categories",-1)),vg={class:"flex justify-center text-[35px] detailhead"},bg={class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},wg=["src"],yg={__name:"LcategoryDetails",setup(t){const e=Q({}),n=An();return Jt(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${n.params.id}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{e.value=s.meals}).catch(s=>{console.error("Error fetching data:",s)})}),(s,r)=>{const i=Rt("router-link");return v(),E("main",fg,[g("section",hg,[g("div",pg,[gg,L(i,{to:"/search",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:G(()=>[mg,_g]),_:1})]),g("div",vg,b(X(n).params.id)+" meals ",1),g("section",bg,[(v(!0),E(Z,null,fe(e.value,o=>(v(),E("div",null,[L(i,{to:/lmeals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:G(()=>[g("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,wg),g("div",null,b(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},Eg=At(yg,[["__scopeId","data-v-3075fa14"]]),Ii=t=>(Sn("data-v-de893029"),t=t(),Rn(),t),Ig={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},xg={class:"flex flex-col gap-10"},Tg={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},Cg=Ii(()=>g("img",{src:Pn,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),Sg=Ii(()=>g("img",{src:kn,alt:"",srcset:""},null,-1)),Rg=Ii(()=>g("div",null,"Back to categories",-1)),Ag={class:"flex justify-center text-[35px] detailhead"},Pg={class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},kg=["src"],Og={__name:"areadetails",setup(t){const e=Q({}),n=An();return Jt(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${n.params.id}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{e.value=s.meals.slice(0,20)}).catch(s=>{console.error("Error fetching data:",s)})}),(s,r)=>{const i=Rt("router-link");return v(),E("main",Ig,[g("section",xg,[g("div",Tg,[Cg,L(i,{to:"/",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:G(()=>[Sg,Rg]),_:1})]),g("div",Ag,b(X(n).params.id)+" meals ",1),g("section",Pg,[(v(!0),E(Z,null,fe(e.value,o=>(v(),E("div",null,[L(i,{to:/meals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:G(()=>[g("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,kg),g("div",null,b(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},Mg=At(Og,[["__scopeId","data-v-de893029"]]),sr=t=>(Sn("data-v-3a052b30"),t=t(),Rn(),t),Ng={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},Dg={class:"flex flex-col gap-10"},$g={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},Lg=sr(()=>g("img",{src:Pn,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),Ug=sr(()=>g("img",{src:kn,alt:"",srcset:""},null,-1)),Bg=sr(()=>g("div",null,"Back to categories",-1)),Fg={class:"flex justify-center text-[35px] detailhead"},jg=sr(()=>g("div",null,"test",-1)),Hg={class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},Vg=["src"],Wg={__name:"Lareadetails",setup(t){const e=Q({}),n=An();return Jt(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${n.params.id}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{e.value=s.meals}).catch(s=>{console.error("Error fetching data:",s)})}),(s,r)=>{const i=Rt("router-link");return v(),E("main",Ng,[g("section",Dg,[g("div",$g,[Lg,L(i,{to:"/search",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:G(()=>[Ug,Bg]),_:1})]),g("div",Fg,b(X(n).params.id)+" meals ",1),jg,g("section",Hg,[(v(!0),E(Z,null,fe(e.value,o=>(v(),E("div",null,[L(i,{to:/lmeals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:G(()=>[g("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Vg),g("div",null,b(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},Kg=At(Wg,[["__scopeId","data-v-3a052b30"]]);var Do={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},zg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,w=c&63;l||(w=64,o||(p=64)),s.push(n[u],n[f],n[p],n[w])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||f==null)throw new qg;const p=i<<2|a>>4;if(s.push(p),c!==64){const w=a<<4&240|c>>2;if(s.push(w),f!==64){const R=c<<6&192|f;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gg=function(t){const e=vl(t);return bl.encodeByteArray(e,!0)},wl=function(t){return Gg(t).replace(/\./g,"")},yl=function(t){try{return bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Jg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yg=()=>Jg().__FIREBASE_DEFAULTS__,Xg=()=>{if(typeof process>"u"||typeof Do>"u")return;const t=Do.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yl(t[1]);return e&&JSON.parse(e)},xi=()=>{try{return Yg()||Xg()||Qg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zg=t=>{var e,n;return(n=(e=xi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},El=()=>{var t;return(t=xi())===null||t===void 0?void 0:t.config},Il=t=>{var e;return(e=xi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function nm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rm(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function im(){try{return typeof indexedDB=="object"}catch{return!1}}function om(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="FirebaseError";class kt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=am,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?lm(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new kt(r,a,s)}}function lm(t,e){return t.replace(cm,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const cm=/\{\$([^}]+)}/g;function um(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ds(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if($o(i)&&$o(o)){if(!Ds(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function $o(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ln(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Un(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dm(t,e){const n=new fm(t,e);return n.subscribe.bind(n)}class fm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hm(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=vr),r.error===void 0&&(r.error=vr),r.complete===void 0&&(r.complete=vr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vr(){}/**
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
 */function ft(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lt="[DEFAULT]";/**
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
 */class pm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new em;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mm(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gm(t){return t===Lt?void 0:t}function mm(t){return t.instantiationMode==="EAGER"}/**
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
 */class _m{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const vm={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},bm=ce.INFO,wm={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},ym=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=wm[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=bm,this._logHandler=ym,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Em=(t,e)=>e.some(n=>t instanceof n);let Lo,Uo;function Im(){return Lo||(Lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xm(){return Uo||(Uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tl=new WeakMap,Vr=new WeakMap,Cl=new WeakMap,br=new WeakMap,Ti=new WeakMap;function Tm(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tl.set(n,t)}).catch(()=>{}),Ti.set(e,t),e}function Cm(t){if(Vr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vr.set(t,e)}let Wr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sm(t){Wr=t(Wr)}function Rm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(wr(this),e,...n);return Cl.set(s,e.sort?e.sort():[e]),Tt(s)}:xm().includes(t)?function(...e){return t.apply(wr(this),e),Tt(Tl.get(this))}:function(...e){return Tt(t.apply(wr(this),e))}}function Am(t){return typeof t=="function"?Rm(t):(t instanceof IDBTransaction&&Cm(t),Em(t,Im())?new Proxy(t,Wr):t)}function Tt(t){if(t instanceof IDBRequest)return Tm(t);if(br.has(t))return br.get(t);const e=Am(t);return e!==t&&(br.set(t,e),Ti.set(e,t)),e}const wr=t=>Ti.get(t);function Pm(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Tt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Tt(o.result),l.oldVersion,l.newVersion,Tt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const km=["get","getKey","getAll","getAllKeys","count"],Om=["put","add","delete","clear"],yr=new Map;function Bo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yr.get(e))return yr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Om.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||km.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return yr.set(e,i),i}Sm(t=>({...t,get:(e,n,s)=>Bo(e,n)||t.get(e,n,s),has:(e,n)=>!!Bo(e,n)||t.has(e,n)}));/**
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
 */class Mm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Nm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kr="@firebase/app",Fo="0.9.25";/**
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
 */const zt=new xl("@firebase/app"),Dm="@firebase/app-compat",$m="@firebase/analytics-compat",Lm="@firebase/analytics",Um="@firebase/app-check-compat",Bm="@firebase/app-check",Fm="@firebase/auth",jm="@firebase/auth-compat",Hm="@firebase/database",Vm="@firebase/database-compat",Wm="@firebase/functions",Km="@firebase/functions-compat",zm="@firebase/installations",qm="@firebase/installations-compat",Gm="@firebase/messaging",Jm="@firebase/messaging-compat",Ym="@firebase/performance",Xm="@firebase/performance-compat",Qm="@firebase/remote-config",Zm="@firebase/remote-config-compat",e_="@firebase/storage",t_="@firebase/storage-compat",n_="@firebase/firestore",s_="@firebase/firestore-compat",r_="firebase",i_="10.7.1";/**
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
 */const zr="[DEFAULT]",o_={[Kr]:"fire-core",[Dm]:"fire-core-compat",[Lm]:"fire-analytics",[$m]:"fire-analytics-compat",[Bm]:"fire-app-check",[Um]:"fire-app-check-compat",[Fm]:"fire-auth",[jm]:"fire-auth-compat",[Hm]:"fire-rtdb",[Vm]:"fire-rtdb-compat",[Wm]:"fire-fn",[Km]:"fire-fn-compat",[zm]:"fire-iid",[qm]:"fire-iid-compat",[Gm]:"fire-fcm",[Jm]:"fire-fcm-compat",[Ym]:"fire-perf",[Xm]:"fire-perf-compat",[Qm]:"fire-rc",[Zm]:"fire-rc-compat",[e_]:"fire-gcs",[t_]:"fire-gcs-compat",[n_]:"fire-fst",[s_]:"fire-fst-compat","fire-js":"fire-js",[r_]:"fire-js-all"};/**
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
 */const $s=new Map,qr=new Map;function a_(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yn(t){const e=t.name;if(qr.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;qr.set(e,t);for(const n of $s.values())a_(n,t);return!0}function Sl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const l_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new ns("app","Firebase",l_);/**
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
 */class c_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=i_;function Rl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:zr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});if(n||(n=El()),!n)throw Ct.create("no-options");const i=$s.get(r);if(i){if(Ds(n,i.options)&&Ds(s,i.config))return i;throw Ct.create("duplicate-app",{appName:r})}const o=new _m(r);for(const l of qr.values())o.addComponent(l);const a=new c_(n,s,o);return $s.set(r,a),a}function u_(t=zr){const e=$s.get(t);if(!e&&t===zr&&El())return Rl();if(!e)throw Ct.create("no-app",{appName:t});return e}function cn(t,e,n){var s;let r=(s=o_[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}Yn(new yn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const d_="firebase-heartbeat-database",f_=1,Xn="firebase-heartbeat-store";let Er=null;function Al(){return Er||(Er=Pm(d_,f_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xn)}}}).catch(t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})})),Er}async function h_(t){try{return await(await Al()).transaction(Xn).objectStore(Xn).get(Pl(t))}catch(e){if(e instanceof kt)zt.warn(e.message);else{const n=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(n.message)}}}async function jo(t,e){try{const s=(await Al()).transaction(Xn,"readwrite");await s.objectStore(Xn).put(e,Pl(t)),await s.done}catch(n){if(n instanceof kt)zt.warn(n.message);else{const s=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(s.message)}}}function Pl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const p_=1024,g_=30*24*60*60*1e3;class m_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new v_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ho();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=g_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ho(),{heartbeatsToSend:s,unsentEntries:r}=__(this._heartbeatsCache.heartbeats),i=wl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ho(){return new Date().toISOString().substring(0,10)}function __(t,e=p_){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Vo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Vo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class v_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return im()?om().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await h_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return jo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return jo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vo(t){return wl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function b_(t){Yn(new yn("platform-logger",e=>new Mm(e),"PRIVATE")),Yn(new yn("heartbeat",e=>new m_(e),"PRIVATE")),cn(Kr,Fo,t),cn(Kr,Fo,"esm2017"),cn("fire-js","")}b_("");function Ci(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function kl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w_=kl,Ol=new ns("auth","Firebase",kl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new xl("@firebase/auth");function y_(t,...e){Ls.logLevel<=ce.WARN&&Ls.warn(`Auth (${rs}): ${t}`,...e)}function Is(t,...e){Ls.logLevel<=ce.ERROR&&Ls.error(`Auth (${rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,...e){throw Si(t,...e)}function et(t,...e){return Si(t,...e)}function Ml(t,e,n){const s=Object.assign(Object.assign({},w_()),{[e]:n});return new ns("auth","Firebase",s).create(e,{appName:t.name})}function E_(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ue(t,"argument-error"),Ml(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Si(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ol.create(t,...e)}function W(t,e,...n){if(!t)throw Si(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Is(e),new Error(e)}function ut(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function I_(){return Wo()==="http:"||Wo()==="https:"}function Wo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I_()||nm()||"connection"in navigator)?navigator.onLine:!0}function T_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=tm()||sm()}get(){return x_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new is(3e4,6e4);function Ot(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mt(t,e,n,s,r={}){return Dl(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ss(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Nl.fetch()($l(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Dl(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},C_),e);try{const r=new A_(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ms(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ms(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ms(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ms(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ml(t,u,c);Ue(t,u)}}catch(r){if(r instanceof kt)throw r;Ue(t,"network-request-failed",{message:String(r)})}}async function os(t,e,n,s,r={}){const i=await Mt(t,e,n,s,r);return"mfaPendingCredential"in i&&Ue(t,"multi-factor-auth-required",{_serverResponse:i}),i}function $l(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ri(t.config,r):`${t.config.apiScheme}://${r}`}function R_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(et(this.auth,"network-request-failed")),S_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ms(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=et(t,e,s);return r.customData._tokenResponse=n,r}function Ko(t){return t!==void 0&&t.enterprise!==void 0}class P_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return R_(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function k_(t,e){return Mt(t,"GET","/v2/recaptchaConfig",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t,e){return Mt(t,"POST","/v1/accounts:delete",e)}async function M_(t,e){return Mt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N_(t,e=!1){const n=ft(t),s=await n.getIdToken(e),r=Ai(s);W(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Vn(Ir(r.auth_time)),issuedAtTime:Vn(Ir(r.iat)),expirationTime:Vn(Ir(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ir(t){return Number(t)*1e3}function Ai(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Is("JWT malformed, contained fewer than 3 sections"),null;try{const r=yl(n);return r?JSON.parse(r):(Is("Failed to decode base64 JWT payload"),null)}catch(r){return Is("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function D_(t){const e=Ai(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof kt&&$_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function $_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vn(this.lastLoginAt),this.creationTime=Vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Us(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Qn(t,M_(n,{idToken:s}));W(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?F_(i.providerUserInfo):[],a=B_(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ll(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function U_(t){const e=ft(t);await Us(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function B_(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function F_(t){return t.map(e=>{var{providerId:n}=e,s=Ci(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(t,e){const n=await Dl(t,{},async()=>{const s=ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=$l(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Nl.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function H_(t,e){return Mt(t,"POST","/v2/accounts:revokeToken",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):D_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await j_(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Zn;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ci(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new L_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ll(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return N_(this,e)}reload(){return U_(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Us(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qn(this,O_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,j=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:J,emailVerified:C,isAnonymous:H,providerData:te,stsTokenManager:de}=n;W(J&&de,e,"internal-error");const ae=Zn.fromJSON(this.name,de);W(typeof J=="string",e,"internal-error"),mt(f,e.name),mt(p,e.name),W(typeof C=="boolean",e,"internal-error"),W(typeof H=="boolean",e,"internal-error"),mt(w,e.name),mt(R,e.name),mt(O,e.name),mt(j,e.name),mt($,e.name),mt(N,e.name);const me=new Wt({uid:J,auth:e,email:p,emailVerified:C,displayName:f,isAnonymous:H,photoURL:R,phoneNumber:w,tenantId:O,stsTokenManager:ae,createdAt:$,lastLoginAt:N});return te&&Array.isArray(te)&&(me.providerData=te.map(ve=>Object.assign({},ve))),j&&(me._redirectEventId=j),me}static async _fromIdTokenResponse(e,n,s=!1){const r=new Zn;r.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Us(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map;function at(t){ut(t instanceof Function,"Expected a class definition");let e=zo.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zo.set(t,e),e)}/**
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
 */class Ul{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ul.type="NONE";const qo=Ul;/**
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
 */function xs(t,e,n){return`firebase:${t}:${e}:${n}`}class un{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=xs(this.userKey,r.apiKey,i),this.fullPersistenceKey=xs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new un(at(qo),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||at(qo);const o=xs(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=Wt._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new un(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new un(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vl(e))return"Blackberry";if(Wl(e))return"Webos";if(Pi(e))return"Safari";if((e.includes("chrome/")||Fl(e))&&!e.includes("edge/"))return"Chrome";if(Hl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Bl(t=Re()){return/firefox\//i.test(t)}function Pi(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fl(t=Re()){return/crios\//i.test(t)}function jl(t=Re()){return/iemobile/i.test(t)}function Hl(t=Re()){return/android/i.test(t)}function Vl(t=Re()){return/blackberry/i.test(t)}function Wl(t=Re()){return/webos/i.test(t)}function rr(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function V_(t=Re()){var e;return rr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function W_(){return rm()&&document.documentMode===10}function Kl(t=Re()){return rr(t)||Hl(t)||Wl(t)||Vl(t)||/windows phone/i.test(t)||jl(t)}function K_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t,e=[]){let n;switch(t){case"Browser":n=Go(Re());break;case"Worker":n=`${Go(Re())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${s}`}/**
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
 */class z_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function q_(t,e={}){return Mt(t,"GET","/v2/passwordPolicy",Ot(t,e))}/**
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
 */const G_=6;class J_{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:G_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jo(this),this.idTokenSubscription=new Jo(this),this.beforeStateQueue=new z_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ol,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Us(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ft(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await q_(this),n=new J_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await H_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&y_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nt(t){return ft(t)}class Jo{constructor(e){this.auth=e,this.observer=null,this.addObserver=dm(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ql(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=et("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",X_().appendChild(s)})}function Q_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Z_="https://www.google.com/recaptcha/enterprise.js?render=",ev="recaptcha-enterprise",tv="NO_RECAPTCHA";class nv{constructor(e){this.type=ev,this.auth=Nt(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{k_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new P_(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;Ko(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(tv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Ko(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ql(Z_+a).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Yo(t,e,n,s=!1){const r=new nv(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Jr(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Yo(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Yo(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t,e){const n=Sl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ds(i,e??{}))return r;Ue(r,"already-initialized")}return n.initialize({options:e})}function rv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function iv(t,e,n){const s=Nt(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Gl(e),{host:o,port:a}=ov(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||av()}function Gl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ov(t){const e=Gl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Xo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Xo(o)}}}function Xo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function av(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function lv(t,e){return Mt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(t,e){return os(t,"POST","/v1/accounts:signInWithPassword",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(t,e){return os(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}async function dv(t,e){return os(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends ki{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new es(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new es(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jr(e,n,"signInWithPassword",cv);case"emailLink":return uv(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jr(e,s,"signUpPassword",lv);case"emailLink":return dv(e,{idToken:n,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(t,e){return os(t,"POST","/v1/accounts:signInWithIdp",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="http://localhost";class qt extends ki{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ci(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new qt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,dn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dn(e,n)}buildRequest(){const e={requestUri:fv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ss(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pv(t){const e=Ln(Un(t)).link,n=e?Ln(Un(e)).deep_link_id:null,s=Ln(Un(t)).deep_link_id;return(s?Ln(Un(s)).link:null)||s||n||e||t}class Oi{constructor(e){var n,s,r,i,o,a;const l=Ln(Un(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,f=hv((r=l.mode)!==null&&r!==void 0?r:null);W(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pv(e);try{return new Oi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(e,n){return es._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Oi.parseLink(n);return W(s,"argument-error"),es._fromEmailAndCode(e,s.code,s.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class as extends Mi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends as{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends as{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Qe.credential(n,s)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends as{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends as{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Et.credential(n,s)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(t,e){return os(t,"POST","/v1/accounts:signUp",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Wt._fromIdTokenResponse(e,s,r),o=Qo(s);return new Gt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Qo(s);return new Gt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Qo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends kt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Bs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Bs(e,n,s,r)}}function Jl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bs._fromErrorAndOperation(t,i,e,s):i})}async function mv(t,e,n=!1){const s=await Qn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gt._forOperation(t,"link",s)}/**
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
 */async function _v(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Qn(t,Jl(s,r,e,t),n);W(i.idToken,s,"internal-error");const o=Ai(i.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),Gt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ue(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(t,e,n=!1){const s="signIn",r=await Jl(t,s,e),i=await Gt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function vv(t,e){return Yl(Nt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xl(t){const e=Nt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bv(t,e,n){const s=Nt(t),o=await Jr(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Xl(t),l}),a=await Gt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function wv(t,e,n){return vv(ft(t),On.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Xl(t),s})}function yv(t,e,n,s){return ft(t).onIdTokenChanged(e,n,s)}function Ev(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function Ql(t,e,n,s){return ft(t).onAuthStateChanged(e,n,s)}function Iv(t){return ft(t).signOut()}const Fs="__sak";/**
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
 */class Zl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fs,"1"),this.storage.removeItem(Fs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(){const t=Re();return Pi(t)||rr(t)}const Tv=1e3,Cv=10;class ec extends Zl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xv()&&K_(),this.fallbackToPolling=Kl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);W_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Cv):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ec.type="LOCAL";const Sv=ec;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends Zl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tc.type="SESSION";const nc=tc;/**
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
 */function Rv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ir{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ir(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Rv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ir.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Av{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Ni("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function Pv(t){tt().location.href=t}/**
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
 */function sc(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function kv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ov(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mv(){return sc()?self:null}/**
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
 */const rc="firebaseLocalStorageDb",Nv=1,js="firebaseLocalStorage",ic="fbase_key";class ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function or(t,e){return t.transaction([js],e?"readwrite":"readonly").objectStore(js)}function Dv(){const t=indexedDB.deleteDatabase(rc);return new ls(t).toPromise()}function Yr(){const t=indexedDB.open(rc,Nv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(js,{keyPath:ic})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(js)?e(s):(s.close(),await Dv(),e(await Yr()))})})}async function Zo(t,e,n){const s=or(t,!0).put({[ic]:e,value:n});return new ls(s).toPromise()}async function $v(t,e){const n=or(t,!1).get(e),s=await new ls(n).toPromise();return s===void 0?null:s.value}function ea(t,e){const n=or(t,!0).delete(e);return new ls(n).toPromise()}const Lv=800,Uv=3;class oc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Uv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ir._getInstance(Mv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kv(),!this.activeServiceWorker)return;this.sender=new Av(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ov()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yr();return await Zo(e,Fs,"1"),await ea(e,Fs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>$v(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ea(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=or(r,!1).getAll();return new ls(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oc.type="LOCAL";const Bv=oc;new is(3e4,6e4);/**
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
 */function ac(t,e){return e?at(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Di extends ki{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fv(t){return Yl(t.auth,new Di(t),t.bypassAuthState)}function jv(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),_v(n,new Di(t),t.bypassAuthState)}async function Hv(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),mv(n,new Di(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fv;case"linkViaPopup":case"linkViaRedirect":return Hv;case"reauthViaPopup":case"reauthViaRedirect":return jv;default:Ue(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new is(2e3,1e4);async function cc(t,e,n){const s=Nt(t);E_(t,e,Mi);const r=ac(s,n);return new jt(s,"signInViaPopup",e,r).executeNotNull()}class jt extends lc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,jt.currentPopupAction&&jt.currentPopupAction.cancel(),jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Ni();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vv.get())};e()}}jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="pendingRedirect",Ts=new Map;class Kv extends lc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ts.get(this.auth._key());if(!e){try{const s=await zv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ts.set(this.auth._key(),e)}return this.bypassAuthState||Ts.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zv(t,e){const n=Jv(e),s=Gv(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function qv(t,e){Ts.set(t._key(),e)}function Gv(t){return at(t._redirectPersistence)}function Jv(t){return xs(Wv,t.config.apiKey,t.name)}async function Yv(t,e,n=!1){const s=Nt(t),r=ac(s,e),o=await new Kv(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=10*60*1e3;class Qv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!uc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(et(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xv&&this.cachedEventUids.clear(),this.cachedEventUids.has(ta(e))}saveEventToCache(e){this.cachedEventUids.add(ta(e)),this.lastProcessedEventTime=Date.now()}}function ta(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e={}){return Mt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nb=/^https?/;async function sb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eb(t);for(const n of e)try{if(rb(n))return}catch{}Ue(t,"unauthorized-domain")}function rb(t){const e=Gr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!nb.test(n))return!1;if(tb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const ib=new is(3e4,6e4);function na(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ob(t){return new Promise((e,n)=>{var s,r,i;function o(){na(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{na(),n(et(t,"network-request-failed"))},timeout:ib.get()})}if(!((r=(s=tt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const a=Q_("iframefcb");return tt()[a]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},ql(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Cs=null,e})}let Cs=null;function ab(t){return Cs=Cs||ob(t),Cs}/**
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
 */const lb=new is(5e3,15e3),cb="__/auth/iframe",ub="emulator/auth/iframe",db={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hb(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ri(e,ub):`https://${t.config.authDomain}/${cb}`,s={apiKey:e.apiKey,appName:t.name,v:rs},r=fb.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ss(s).slice(1)}`}async function pb(t){const e=await ab(t),n=tt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:hb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:db,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=tt().setTimeout(()=>{i(o)},lb.get());function l(){tt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const gb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mb=500,_b=600,vb="_blank",bb="http://localhost";class sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wb(t,e,n,s=mb,r=_b){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gb),{width:s.toString(),height:r.toString(),top:i,left:o}),c=Re().toLowerCase();n&&(a=Fl(c)?vb:n),Bl(c)&&(e=e||bb,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[w,R])=>`${p}${w}=${R},`,"");if(V_(c)&&a!=="_self")return yb(e||"",a),new sa(null);const f=window.open(e||"",a,u);W(f,t,"popup-blocked");try{f.focus()}catch{}return new sa(f)}function yb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Eb="__/auth/handler",Ib="emulator/auth/handler",xb=encodeURIComponent("fac");async function ra(t,e,n,s,r,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:rs,eventId:r};if(e instanceof Mi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",um(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof as){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${xb}=${encodeURIComponent(l)}`:"";return`${Tb(t)}?${ss(a).slice(1)}${c}`}function Tb({config:t}){return t.emulator?Ri(t,Ib):`https://${t.authDomain}/${Eb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="webStorageSupport";class Cb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nc,this._completeRedirectFn=Yv,this._overrideRedirectResult=qv}async _openPopup(e,n,s,r){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ra(e,n,s,Gr(),r);return wb(e,o,Ni())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ra(e,n,s,Gr(),r);return Pv(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ut(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await pb(e),s=new Qv(e);return n.register("authEvent",r=>(W(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xr,{type:xr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[xr];o!==void 0&&n(!!o),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kl()||Pi()||rr()}}const Sb=Cb;var ia="@firebase/auth",oa="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Pb(t){Yn(new yn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zl(t)},c=new Y_(s,r,i,l);return rv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Yn(new yn("auth-internal",e=>{const n=Nt(e.getProvider("auth").getImmediate());return(s=>new Rb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(ia,oa,Ab(t)),cn(ia,oa,"esm2017")}/**
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
 */const kb=5*60,Ob=Il("authIdTokenMaxAge")||kb;let aa=null;const Mb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ob)return;const r=n==null?void 0:n.token;aa!==r&&(aa=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function En(t=u_()){const e=Sl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sv(t,{popupRedirectResolver:Sb,persistence:[Bv,Sv,nc]}),s=Il("authTokenSyncURL");if(s){const i=Mb(s);Ev(n,i,()=>i(n.currentUser)),yv(n,o=>i(o))}const r=Zg("auth");return r&&iv(n,`http://${r}`),n}Pb("Browser");const Nb={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] 2xl:pt-[10%] gap-4"},Db={class:"stepone w-[90%] flex flex-col gap-6 text-white"},$b={class:"flex flex-col gap-6 text-white p-[15px]",id:"register"},Lb={class:"flex justify-between"},Ub=g("div",{class:"text-[24px]"},"Login",-1),Bb={class:"flex flex-col justify-center items-center gap-2"},Fb=g("p",{class:"text-[10px]"},"Don't have an acount?",-1),jb={class:"flex flex-col gap-2 text-[#E5E7EB]"},Hb=g("label",{for:"Email",name:"Email",class:"text-[18px]"},"Email",-1),Vb={class:"flex flex-col gap-2"},Wb=g("label",{for:"password",name:"password",class:"text-[18px]"},"Password",-1),Kb={key:0},zb=g("div",null,"or",-1),qb={__name:"login",setup(t){const e=Q(""),n=Q(""),s=wi(),r=Q(""),i=()=>{const a=En();wv(a,e.value,n.value).then(l=>{console.log("successfully signed in!"),console.log(a.currentUser),s.push("/search")}).catch(l=>{switch(console.log(l.code),l.code){case"auth/invalid-email":r.value="invalid email";break;case"auth/user-not-found":r.value="No account with that email was found";break;case"auth/wrong-password":r.value="incorrect password";break;default:r.value="Email or password was incorrect";break}})},o=()=>{const a=new Qe;cc(En(),a).then(l=>{console.log(l.user),s.push("/search")}).catch(l=>{})};return(a,l)=>(v(),E("div",Nb,[g("form",{onSubmit:l[2]||(l[2]=er((...c)=>a.login&&a.login(...c),["prevent"])),class:"bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]"},[g("div",Db,[g("div",$b,[g("div",Lb,[Ub,g("div",Bb,[L(X(he),{to:"/signup",class:"text-[20px] px-3 rounded-lg text-black duration-300 bg-white"},{default:G(()=>[gi("Sign Up")]),_:1}),Fb])]),g("div",jb,[Hb,hn(g("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>e.value=c),type:"text",id:"Email",placeholder:"Email",name:"Email",class:"Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[vn,e.value]])]),g("div",Vb,[Wb,hn(g("input",{"onUpdate:modelValue":l[1]||(l[1]=c=>n.value=c),type:"text",placeholder:"password",id:"password",class:"password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[vn,n.value]])])]),r.value?(v(),E("p",Kb,b(r.value),1)):q("",!0),g("div",{class:"w-full flex flex-col items-center justify-center text-white gap-3"},[g("button",{onClick:i,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Submit"),zb,g("button",{onClick:o,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Sign in with google")])])],32)]))}},Gb={class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},Jb=["src"],Yb=["src"],Xb=["src"],Qb=["src"],Zb=["src"],ew=["src"],tw=["src"],nw=["src"],sw=["src"],rw="https://www.themealdb.com/api/json/v1/1/lookup.php?i=53049",iw="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52893",ow="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768",aw="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767",lw="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855",cw="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52894",uw="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52877",dw="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52835",fw="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52999",hw={__name:"Lbaserecipes",setup(t){const e=Q({});fetch(`${rw}`).then(u=>u.json()).then(u=>{e.value=u});const n=Q({});fetch(`${iw}`).then(u=>u.json()).then(u=>{n.value=u});const s=Q({});fetch(`${ow}`).then(u=>u.json()).then(u=>{s.value=u});const r=Q({});fetch(`${aw}`).then(u=>u.json()).then(u=>{r.value=u});const i=Q({});fetch(`${lw}`).then(u=>u.json()).then(u=>{i.value=u});const o=Q({});fetch(`${cw}`).then(u=>u.json()).then(u=>{o.value=u});const a=Q({});fetch(`${uw}`).then(u=>u.json()).then(u=>{a.value=u});const l=Q({});fetch(`${dw}`).then(u=>u.json()).then(u=>{l.value=u});const c=Q({});return fetch(`${fw}`).then(u=>u.json()).then(u=>{c.value=u}),(u,f)=>(v(),E("section",Gb,[(v(!0),E(Z,null,fe(e.value.meals,p=>(v(),E("div",null,[L(X(he),{to:/lmeals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Jb),g("div",null,b(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(n.value.meals,p=>(v(),E("div",null,[L(X(he),{to:/lmeals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Yb),g("div",null,b(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(s.value.meals,p=>(v(),E("div",null,[L(X(he),{to:/lmeals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Xb),g("div",null,b(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(r.value.meals,p=>(v(),E("div",null,[L(X(he),{to:/lmeals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Qb),g("div",null,b(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(i.value.meals,p=>(v(),E("div",null,[L(X(he),{to:/lmeals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Zb),g("div",null,b(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(o.value.meals,p=>(v(),E("div",null,[L(X(he),{to:/lmeals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,ew),g("div",null,b(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(a.value.meals,p=>(v(),E("div",null,[L(X(he),{to:/lmeals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,tw),g("div",null,b(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(l.value.meals,p=>(v(),E("div",null,[L(X(he),{to:/lmeals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,nw),g("div",null,b(p.strMeal),1)]),_:2},1032,["to"])]))),256)),(v(!0),E(Z,null,fe(c.value.meals,p=>(v(),E("div",null,[L(X(he),{to:/lmeals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:G(()=>[g("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,sw),g("div",null,b(p.strMeal),1)]),_:2},1032,["to"])]))),256))]))}},pw={class:"grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-4 xl:gap-6"},gw={class:"relative"},mw=["src"],_w={class:"flex justify-center items-center text-[14px] 2xl:text-[16px]"},vw="https://www.themealdb.com/api/json/v1/1/categories.php?",bw={__name:"Lcategories",setup(t){const e=Q({});return fetch(`${vw}`).then(n=>n.json()).then(n=>{e.value=n.categories}),(n,s)=>{const r=Rt("router-link");return v(),E("section",pw,[(v(!0),E(Z,null,fe(e.value,i=>(v(),E("div",gw,[L(r,{to:/lcategory/+i.strCategory,class:"bg-transparent bg-[#0E1325] border border-[#394150] flex gap-3 rounded-xl duration-300 hover:bg-[#FEBD2E] text-[#E5E7EB] hover:text-black hover:font-bold overflow-hidden"},{default:G(()=>[g("img",{src:i.strCategoryThumb,alt:"",srcset:"",class:"catimg w-[50%] sm:w-[32%] lg:w-[42%] xl:w-[63%] lg:ml-[-40px] sm:ml-[-40px] ml-[-20px] itemimg rounded-l-full"},null,8,mw),g("div",_w,b(i.strCategory),1)]),_:2},1032,["to"])]))),256))])}}},ww={class:"flex flex-col gap-4 sm:px-[12px] 2xl:px-[16px] pb-10"},yw={class:"flex flex-col lg:flex-row justify-between gap-3 sm:gap-8 px-3 sm:px-5 xl:px-14"},Ew={class:"flex flex-col sm:w-full lg:w-[35%] gap-3 sm:gap-6"},Iw=g("div",{class:"text-white text-[24px] cathead flex justify-left items-center"},"Categories",-1),xw={class:"w-full flex flex-col gap-8"},Tw={class:"flex justify-between gap-3 text-[14px]"},Cw=g("img",{src:ml,alt:"",srcset:"",class:"absolute top-3 left-4"},null,-1),Sw=g("i",{class:"fa-regular fa-square-plus"},null,-1),Rw=g("div",{class:"font-semibold"},"CREATE",-1),Aw=g("i",{class:"fa-solid fa-right-from-bracket text-base"},null,-1),Pw=g("div",{class:"text-base"},"Logout",-1),kw=[Aw,Pw],Ow={key:0,class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},Mw=["src"],Nw={key:1},Dw={__name:"search",setup(t){const e=Q(!1),n=wi(),s=En();Wa(()=>{Ql(s,l=>{l?e.value=!0:e.value=!1})});const r=()=>{Iv(s).then(()=>{n.push("/")})},i=Q(""),o=Q([]),a=()=>{i.value!==""&&fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${i.value}`).then(l=>l.json()).then(l=>{o.value=l.meals?l.meals:[],i.value=""}).catch(l=>{console.error("Error fetching data:",l)})};return(l,c)=>(v(),E("main",ww,[L(_l),g("section",yw,[g("div",Ew,[Iw,(v(),gn(Ps,null,{default:G(()=>[L(bw)]),_:1}))]),g("div",xw,[g("div",Tw,[g("form",{class:"relative w-[60%]",onSubmit:er(a,["prevent"]),onClick:c[1]||(c[1]=u=>l.bro==!1)},[hn(g("input",{type:"text",placeholder:"Search recipes and more...",name:"search-input",class:"border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14","onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u)},null,512),[[vn,i.value]]),Cw],32),L(X(he),{to:"/search",class:"relative flex justify-center items-center bg-white rounded-full p-8 py-3 gap-2 h-12 text-[#394150]"},{default:G(()=>[Sw,Rw]),_:1}),e.value?(v(),E("button",{key:0,onClick:r,class:"bg-yellow-400 px-3 rounded-xl flex gap-2 justify-center items-center"},kw)):q("",!0)]),o.value&&o.value.length>0?(v(),E("section",Ow,[(v(!0),E(Z,null,fe(o.value,u=>(v(),E("div",null,[L(X(he),{to:/lmeals/+u.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:G(()=>[g("img",{src:u.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Mw),g("div",null,b(u.strMeal),1)]),_:2},1032,["to"])]))),256))])):(v(),E("section",Nw,[(v(),gn(Ps,null,{default:G(()=>[L(hw)]),_:1}))]))])])]))}},$w={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] 2xl:pt-[10%] gap-4"},Lw={class:"stepone w-[90%] flex flex-col gap-6 text-white"},Uw={class:"flex flex-col gap-6 text-white p-[15px]",id:"register"},Bw={class:"flex justify-between"},Fw=g("div",{class:"text-[24px]"},"Create an Account",-1),jw={class:"flex flex-col justify-center items-center gap-2"},Hw=g("p",{class:"text-[10px]"},"already have an acount?",-1),Vw={class:"flex flex-col gap-2 text-[#E5E7EB]"},Ww=g("label",{for:"Email",class:"text-[18px]"},"Email",-1),Kw={class:"flex flex-col gap-2"},zw=g("label",{for:"password",class:"text-[18px]"},"Password",-1),qw=g("div",null,"or",-1),Gw={__name:"signup",setup(t){const e=Q(""),n=Q(""),s=wi(),r=()=>{bv(En(),e.value,n.value).then(o=>{console.log("successfully registered!"),s.push("/search")}).catch(o=>{console.log(o.code),alert(o.message)})},i=()=>{const o=new Qe;cc(En(),o).then(a=>{console.log(a.user),s.push("/search")}).catch(a=>{})};return(o,a)=>(v(),E("div",$w,[g("form",{onSubmit:a[2]||(a[2]=er((...l)=>o.login&&o.login(...l),["prevent"])),class:"bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]"},[g("div",Lw,[g("div",Uw,[g("div",Bw,[Fw,g("div",jw,[L(X(he),{to:"/login",class:"text-[20px] px-3 rounded-lg text-black duration-300 bg-white"},{default:G(()=>[gi("Sign in")]),_:1}),Hw])]),g("div",Vw,[Ww,hn(g("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),type:"text",placeholder:"Email",name:"Email",class:"Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[vn,e.value]])]),g("div",Kw,[zw,hn(g("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),type:"text",placeholder:"password",name:"Password",id:"password",class:"password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[vn,n.value]])])]),g("div",{class:"w-full flex flex-col items-center justify-center text-white gap-3"},[g("button",{onClick:r,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Submit"),qw,g("button",{onClick:i,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Sign in with google")])])],32)]))}},dc=Nf({history:Yd("/"),routes:[{path:"/",name:"home",component:yh},{path:"/meals/:id",name:"meal Details",component:up},{path:"/lmeals/:id",name:"lmeal Details",component:eg},{path:"/larea/:id",name:"logged meal Details",component:Kg},{path:"/category/:id",name:"category Details",component:dg},{path:"/lcategory/:id",name:"logged category Details",component:Eg},{path:"/area/:id",name:"area Details",component:Mg},{path:"/login",name:"loggedin",component:qb},{path:"/signup",name:"signUp",component:Gw},{path:"/search",name:"search",component:Dw,meta:{requiresAuth:!0}}]}),Jw=()=>new Promise((t,e)=>{const n=Ql(En(),s=>{n(),t(s)},e)});dc.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?await Jw()?n():(alert("You dont have access"),n("/")):n()});const Yw={};function Xw(t,e){const n=Rt("RouterView");return v(),gn(n)}const Qw=At(Yw,[["render",Xw]]);var Zw="firebase",ey="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(Zw,ey,"app");const ty={apiKey:"AIzaSyAc1sTUtbtUwc72YDjdsXM4rT7Pf4VCHZo",authDomain:"recipe-page-a168a.firebaseapp.com",projectId:"recipe-page-a168a",storageBucket:"recipe-page-a168a.appspot.com",messagingSenderId:"540105599417",appId:"1:540105599417:web:68b26438060496e3412e68",measurementId:"G-G49BH7ELT1"};Rl(ty);const fc=kd(Qw);fc.use(dc);fc.mount("#app");
