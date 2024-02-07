(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function _c(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Re={},kr=[],zt=()=>{},X_=()=>!1,Qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yc=t=>t.startsWith("onUpdate:"),Ze=Object.assign,vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},J_=Object.prototype.hasOwnProperty,ce=(t,e)=>J_.call(t,e),G=Array.isArray,Dr=t=>Yo(t)==="[object Map]",Sf=t=>Yo(t)==="[object Set]",ee=t=>typeof t=="function",Ue=t=>typeof t=="string",ss=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",kf=t=>(Se(t)||ee(t))&&ee(t.then)&&ee(t.catch),Df=Object.prototype.toString,Yo=t=>Df.call(t),Z_=t=>Yo(t).slice(8,-1),Nf=t=>Yo(t)==="[object Object]",Ec=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=_c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ey=/-(\w)/g,Zt=Xo(t=>t.replace(ey,(e,n)=>n?n.toUpperCase():"")),ty=/\B([A-Z])/g,is=Xo(t=>t.replace(ty,"-$1").toLowerCase()),Jo=Xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ha=Xo(t=>t?`on${Jo(t)}`:""),lr=(t,e)=>!Object.is(t,e),ro=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_o=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ny=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let ah;const Il=()=>ah||(ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?oy(r):wc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Se(t))return t}const ry=/;(?![^(]*\))/g,sy=/:([^]+)/,iy=/\/\*[^]*?\*\//g;function oy(t){const e={};return t.replace(iy,"").split(ry).forEach(n=>{if(n){const r=n.split(sy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ic(t){let e="";if(Ue(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=Ic(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ay="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ly=_c(ay);function Of(t){return!!t||t===""}const ie=t=>Ue(t)?t:t==null?"":G(t)||Se(t)&&(t.toString===Df||!ee(t.toString))?JSON.stringify(t,Vf,2):String(t),Vf=(t,e)=>e&&e.__v_isRef?Vf(t,e.value):Dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ka(r,i)+" =>"]=s,n),{})}:Sf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ka(n))}:ss(e)?Ka(e):Se(e)&&!G(e)&&!Nf(e)?String(e):e,Ka=(t,e="")=>{var n;return ss(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let xt;class cy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function uy(t,e=xt){e&&e.active&&e.effects.push(t)}function hy(){return xt}const Tc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Mf=t=>(t.w&Ln)>0,Lf=t=>(t.n&Ln)>0,dy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ln},fy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Mf(s)&&!Lf(s)?s.delete(t):e[n++]=s,s.w&=~Ln,s.n&=~Ln}e.length=n}},Tl=new WeakMap;let Ps=0,Ln=1;const Al=30;let kt;const rr=Symbol(""),bl=Symbol("");class Ac{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,uy(this,r)}run(){if(!this.active)return this.fn();let e=kt,n=xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,xn=!0,Ln=1<<++Ps,Ps<=Al?dy(this):lh(this),this.fn()}finally{Ps<=Al&&fy(this),Ln=1<<--Ps,kt=this.parent,xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(lh(this),this.onStop&&this.onStop(),this.active=!1)}}function lh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xn=!0;const Ff=[];function os(){Ff.push(xn),xn=!1}function as(){const t=Ff.pop();xn=t===void 0?!0:t}function gt(t,e,n){if(xn&&kt){let r=Tl.get(t);r||Tl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Tc()),Uf(s)}}function Uf(t,e){let n=!1;Ps<=Al?Lf(t)||(t.n|=Ln,n=!Mf(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function ln(t,e,n,r,s,i){const o=Tl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!ss(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Ec(n)&&a.push(o.get("length")):(a.push(o.get(rr)),Dr(t)&&a.push(o.get(bl)));break;case"delete":G(t)||(a.push(o.get(rr)),Dr(t)&&a.push(o.get(bl)));break;case"set":Dr(t)&&a.push(o.get(rr));break}if(a.length===1)a[0]&&Rl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Rl(Tc(l))}}function Rl(t,e){const n=G(t)?t:[...t];for(const r of n)r.computed&&ch(r);for(const r of n)r.computed||ch(r)}function ch(t,e){(t!==kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const py=_c("__proto__,__v_isRef,__isVue"),$f=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ss)),uh=my();function my(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)gt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){os();const r=fe(this)[e].apply(this,n);return as(),r}}),t}function gy(t){const e=fe(this);return gt(e,"has",t),e.hasOwnProperty(t)}class Bf{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?xy:Kf:i?Hf:qf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=G(e);if(!s){if(o&&ce(uh,n))return Reflect.get(uh,n,r);if(n==="hasOwnProperty")return gy}const a=Reflect.get(e,n,r);return(ss(n)?$f.has(n):py(n))||(s||gt(e,"get",n),i)?a:at(a)?o&&Ec(n)?a:a.value:Se(a)?s?zf(a):ea(a):a}}class jf extends Bf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(jr(i)&&at(i)&&!at(r))return!1;if(!this._shallow&&(!yo(r)&&!jr(r)&&(i=fe(i),r=fe(r)),!G(e)&&at(i)&&!at(r)))return i.value=r,!0;const o=G(e)&&Ec(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,r,s);return e===fe(s)&&(o?lr(r,i)&&ln(e,"set",n,r):ln(e,"add",n,r)),a}deleteProperty(e,n){const r=ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ln(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ss(n)||!$f.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",G(e)?"length":rr),Reflect.ownKeys(e)}}class _y extends Bf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const yy=new jf,vy=new _y,Ey=new jf(!0),bc=t=>t,Zo=t=>Reflect.getPrototypeOf(t);function Bi(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);n||(lr(e,i)&&gt(s,"get",e),gt(s,"get",i));const{has:o}=Zo(s),a=r?bc:n?Cc:Gs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ji(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return e||(lr(t,s)&&gt(r,"has",t),gt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function qi(t,e=!1){return t=t.__v_raw,!e&&gt(fe(t),"iterate",rr),Reflect.get(t,"size",t)}function hh(t){t=fe(t);const e=fe(this);return Zo(e).has.call(e,t)||(e.add(t),ln(e,"add",t,t)),this}function dh(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=Zo(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?lr(e,o)&&ln(n,"set",t,e):ln(n,"add",t,e),this}function fh(t){const e=fe(this),{has:n,get:r}=Zo(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ln(e,"delete",t,void 0),i}function ph(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&ln(t,"clear",void 0,void 0),n}function Hi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=fe(o),l=e?bc:t?Cc:Gs;return!t&&gt(a,"iterate",rr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Ki(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=Dr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?bc:e?Cc:Gs;return!e&&gt(i,"iterate",l?bl:rr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function vn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function wy(){const t={get(i){return Bi(this,i)},get size(){return qi(this)},has:ji,add:hh,set:dh,delete:fh,clear:ph,forEach:Hi(!1,!1)},e={get(i){return Bi(this,i,!1,!0)},get size(){return qi(this)},has:ji,add:hh,set:dh,delete:fh,clear:ph,forEach:Hi(!1,!0)},n={get(i){return Bi(this,i,!0)},get size(){return qi(this,!0)},has(i){return ji.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Hi(!0,!1)},r={get(i){return Bi(this,i,!0,!0)},get size(){return qi(this,!0)},has(i){return ji.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Hi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ki(i,!1,!1),n[i]=Ki(i,!0,!1),e[i]=Ki(i,!1,!0),r[i]=Ki(i,!0,!0)}),[t,n,e,r]}const[Iy,Ty,Ay,by]=wy();function Rc(t,e){const n=e?t?by:Ay:t?Ty:Iy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const Ry={get:Rc(!1,!1)},Py={get:Rc(!1,!0)},Cy={get:Rc(!0,!1)},qf=new WeakMap,Hf=new WeakMap,Kf=new WeakMap,xy=new WeakMap;function Sy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ky(t){return t.__v_skip||!Object.isExtensible(t)?0:Sy(Z_(t))}function ea(t){return jr(t)?t:Pc(t,!1,yy,Ry,qf)}function Wf(t){return Pc(t,!1,Ey,Py,Hf)}function zf(t){return Pc(t,!0,vy,Cy,Kf)}function Pc(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ky(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Nr(t){return jr(t)?Nr(t.__v_raw):!!(t&&t.__v_isReactive)}function jr(t){return!!(t&&t.__v_isReadonly)}function yo(t){return!!(t&&t.__v_isShallow)}function Gf(t){return Nr(t)||jr(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Qf(t){return _o(t,"__v_skip",!0),t}const Gs=t=>Se(t)?ea(t):t,Cc=t=>Se(t)?zf(t):t;function Yf(t){xn&&kt&&(t=fe(t),Uf(t.dep||(t.dep=Tc())))}function Xf(t,e){t=fe(t);const n=t.dep;n&&Rl(n)}function at(t){return!!(t&&t.__v_isRef===!0)}function he(t){return Jf(t,!1)}function Dy(t){return Jf(t,!0)}function Jf(t,e){return at(t)?t:new Ny(t,e)}class Ny{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:Gs(e)}get value(){return Yf(this),this._value}set value(e){const n=this.__v_isShallow||yo(e)||jr(e);e=n?e:fe(e),lr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Gs(e),Xf(this))}}function ue(t){return at(t)?t.value:t}const Oy={get:(t,e,n)=>ue(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return at(s)&&!at(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zf(t){return Nr(t)?t:new Proxy(t,Oy)}class Vy{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ac(e,()=>{this._dirty||(this._dirty=!0,Xf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return Yf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function My(t,e,n=!1){let r,s;const i=ee(t);return i?(r=t,s=zt):(r=t.get,s=t.set),new Vy(r,s,i||!s,n)}function Sn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){yi(i,e,n)}return s}function Nt(t,e,n,r){if(ee(t)){const i=Sn(t,e,n,r);return i&&kf(i)&&i.catch(o=>{yi(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Nt(t[i],e,n,r));return s}function yi(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Sn(l,null,10,[t,o,a]);return}}Ly(t,n,s,r)}function Ly(t,e,n,r=!0){console.error(t)}let Qs=!1,Pl=!1;const ot=[];let jt=0;const Or=[];let rn=null,Qn=0;const ep=Promise.resolve();let xc=null;function tp(t){const e=xc||ep;return t?e.then(this?t.bind(this):t):e}function Fy(t){let e=jt+1,n=ot.length;for(;e<n;){const r=e+n>>>1,s=ot[r],i=Ys(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Sc(t){(!ot.length||!ot.includes(t,Qs&&t.allowRecurse?jt+1:jt))&&(t.id==null?ot.push(t):ot.splice(Fy(t.id),0,t),np())}function np(){!Qs&&!Pl&&(Pl=!0,xc=ep.then(sp))}function Uy(t){const e=ot.indexOf(t);e>jt&&ot.splice(e,1)}function Cl(t){G(t)?Or.push(...t):(!rn||!rn.includes(t,t.allowRecurse?Qn+1:Qn))&&Or.push(t),np()}function mh(t,e,n=Qs?jt+1:0){for(;n<ot.length;n++){const r=ot[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ot.splice(n,1),n--,r()}}}function rp(t){if(Or.length){const e=[...new Set(Or)];if(Or.length=0,rn){rn.push(...e);return}for(rn=e,rn.sort((n,r)=>Ys(n)-Ys(r)),Qn=0;Qn<rn.length;Qn++)rn[Qn]();rn=null,Qn=0}}const Ys=t=>t.id==null?1/0:t.id,$y=(t,e)=>{const n=Ys(t)-Ys(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function sp(t){Pl=!1,Qs=!0,ot.sort($y);try{for(jt=0;jt<ot.length;jt++){const e=ot[jt];e&&e.active!==!1&&Sn(e,null,14)}}finally{jt=0,ot.length=0,rp(),Qs=!1,xc=null,(ot.length||Or.length)&&sp()}}function By(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Re;d&&(s=n.map(p=>Ue(p)?p.trim():p)),h&&(s=n.map(wl))}let a,l=r[a=Ha(e)]||r[a=Ha(Zt(e))];!l&&i&&(l=r[a=Ha(is(e))]),l&&Nt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nt(c,t,6,s)}}function ip(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ee(t)){const l=c=>{const u=ip(c,e,!0);u&&(a=!0,Ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Se(t)&&r.set(t,null),null):(G(i)?i.forEach(l=>o[l]=null):Ze(o,i),Se(t)&&r.set(t,o),o)}function ta(t,e){return!t||!Qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,is(e))||ce(t,e))}let bt=null,na=null;function vo(t){const e=bt;return bt=t,na=t&&t.type.__scopeId||null,e}function ra(t){na=t}function sa(){na=null}function ye(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ph(-1);const i=vo(e);let o;try{o=t(...s)}finally{vo(i),r._d&&Ph(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Wa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:v,inheritAttrs:T}=t;let A,x;const k=vo(t);try{if(n.shapeFlag&4){const b=s||r,K=b;A=St(u.call(K,b,h,i,p,d,v)),x=l}else{const b=e;A=St(b.length>1?b(i,{attrs:l,slots:a,emit:c}):b(i,null)),x=e.props?l:qy(l)}}catch(b){Ls.length=0,yi(b,t,1),A=Z(un)}let q=A;if(x&&T!==!1){const b=Object.keys(x),{shapeFlag:K}=q;b.length&&K&7&&(o&&b.some(yc)&&(x=Hy(x,o)),q=Hr(q,x))}return n.dirs&&(q=Hr(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),A=q,vo(k),A}function jy(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Io(r)){if(r.type!==un||r.children==="v-if"){if(e)return;e=r}}else return}return e}const qy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qo(n))&&((e||(e={}))[n]=t[n]);return e},Hy=(t,e)=>{const n={};for(const r in t)(!yc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ky(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?gh(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!ta(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?gh(r,o,c):!0:!!o;return!1}function gh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ta(n,i))return!0}return!1}function kc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const op="components";function ls(t,e){return zy(op,t,!0,e)||t}const Wy=Symbol.for("v-ndc");function zy(t,e,n=!0,r=!1){const s=bt||Qe;if(s){const i=s.type;if(t===op){const a=Bv(i,!1);if(a&&(a===e||a===Zt(e)||a===Jo(Zt(e))))return i}const o=_h(s[t]||i[t],e)||_h(s.appContext[t],e);return!o&&r?i:o}}function _h(t,e){return t&&(t[e]||t[Zt(e)]||t[Jo(Zt(e))])}const Gy=t=>t.__isSuspense,Qy={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?Yy(e,n,r,s,i,o,a,l,c):Xy(t,e,n,r,s,o,a,l,c)},hydrate:Jy,create:Dc,normalize:Zy},za=Qy;function Xs(t,e){const n=t.props&&t.props[e];ee(n)&&n()}function Yy(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),d=t.suspense=Dc(t,s,r,e,h,n,i,o,a,l);c(null,d.pendingBranch=t.ssContent,h,null,r,d,i,o),d.deps>0?(Xs(t,"onPending"),Xs(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),Vr(d,t.ssFallback)):d.resolve(!1,!0)}function Xy(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,p=e.ssFallback,{activeBranch:v,pendingBranch:T,isInFallback:A,isHydrating:x}=h;if(T)h.pendingBranch=d,An(d,T)?(l(T,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():A&&(l(v,p,n,r,s,null,i,o,a),Vr(h,p))):(h.pendingId++,x?(h.isHydrating=!1,h.activeBranch=T):c(T,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),A?(l(null,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(l(v,p,n,r,s,null,i,o,a),Vr(h,p))):v&&An(d,v)?(l(v,d,n,r,s,h,i,o,a),h.resolve(!0)):(l(null,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(v&&An(d,v))l(v,d,n,r,s,h,i,o,a),Vr(h,d);else if(Xs(e,"onPending"),h.pendingBranch=d,h.pendingId++,l(null,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:k,pendingId:q}=h;k>0?setTimeout(()=>{h.pendingId===q&&h.fallback(p)},k):k===0&&h.fallback(p)}}function Dc(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:h,m:d,um:p,n:v,o:{parentNode:T,remove:A}}=c;let x;const k=tv(t);k&&e!=null&&e.pendingBranch&&(x=e.pendingId,e.deps++);const q=t.props?ny(t.props.timeout):void 0,b={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof q=="number"?q:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(K=!1,re=!1){const{vnode:pe,activeBranch:ve,pendingBranch:xe,pendingId:ke,effects:We,parentComponent:Et,container:tt}=b;let Ft=!1;if(b.isHydrating)b.isHydrating=!1;else if(!K){Ft=ve&&xe.transition&&xe.transition.mode==="out-in",Ft&&(ve.transition.afterLeave=()=>{ke===b.pendingId&&(d(xe,tt,v(ve),0),Cl(We))});let{anchor:me}=b;ve&&(me=v(ve),p(ve,Et,b,!0)),Ft||d(xe,tt,me,0)}Vr(b,xe),b.pendingBranch=null,b.isInFallback=!1;let wt=b.parent,Oe=!1;for(;wt;){if(wt.pendingBranch){wt.effects.push(...We),Oe=!0;break}wt=wt.parent}!Oe&&!Ft&&Cl(We),b.effects=[],k&&e&&e.pendingBranch&&x===e.pendingId&&(e.deps--,e.deps===0&&!re&&e.resolve()),Xs(pe,"onResolve")},fallback(K){if(!b.pendingBranch)return;const{vnode:re,activeBranch:pe,parentComponent:ve,container:xe,isSVG:ke}=b;Xs(re,"onFallback");const We=v(pe),Et=()=>{b.isInFallback&&(h(null,K,xe,We,ve,null,ke,a,l),Vr(b,K))},tt=K.transition&&K.transition.mode==="out-in";tt&&(pe.transition.afterLeave=Et),b.isInFallback=!0,p(pe,ve,null,!0),tt||Et()},move(K,re,pe){b.activeBranch&&d(b.activeBranch,K,re,pe),b.container=K},next(){return b.activeBranch&&v(b.activeBranch)},registerDep(K,re){const pe=!!b.pendingBranch;pe&&b.deps++;const ve=K.vnode.el;K.asyncDep.catch(xe=>{yi(xe,K,0)}).then(xe=>{if(K.isUnmounted||b.isUnmounted||b.pendingId!==K.suspenseId)return;K.asyncResolved=!0;const{vnode:ke}=K;Ol(K,xe,!1),ve&&(ke.el=ve);const We=!ve&&K.subTree.el;re(K,ke,T(ve||K.subTree.el),ve?null:v(K.subTree),b,o,l),We&&A(We),kc(K,ke.el),pe&&--b.deps===0&&b.resolve()})},unmount(K,re){b.isUnmounted=!0,b.activeBranch&&p(b.activeBranch,n,K,re),b.pendingBranch&&p(b.pendingBranch,n,K,re)}};return b}function Jy(t,e,n,r,s,i,o,a,l){const c=e.suspense=Dc(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(!1,!0),u}function Zy(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=yh(r?n.default:n),t.ssFallback=r?yh(n.fallback):Z(un)}function yh(t){let e;if(ee(t)){const n=qr&&t._c;n&&(t._d=!1,M()),t=t(),n&&(t._d=!0,e=Rt,wp())}return G(t)&&(t=jy(t)),t=St(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function ev(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Cl(t)}function Vr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,kc(r,s))}function tv(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const Wi={};function so(t,e,n){return ap(t,e,n)}function ap(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Re){var a;const l=hy()===((a=Qe)==null?void 0:a.scope)?Qe:null;let c,u=!1,h=!1;if(at(t)?(c=()=>t.value,u=yo(t)):Nr(t)?(c=()=>t,r=!0):G(t)?(h=!0,u=t.some(b=>Nr(b)||yo(b)),c=()=>t.map(b=>{if(at(b))return b.value;if(Nr(b))return Xn(b);if(ee(b))return Sn(b,l,2)})):ee(t)?e?c=()=>Sn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Nt(t,l,3,[p])}:c=zt,e&&r){const b=c;c=()=>Xn(b())}let d,p=b=>{d=k.onStop=()=>{Sn(b,l,4),d=k.onStop=void 0}},v;if(Js)if(p=zt,e?n&&Nt(e,l,3,[c(),h?[]:void 0,p]):c(),s==="sync"){const b=Hv();v=b.__watcherHandles||(b.__watcherHandles=[])}else return zt;let T=h?new Array(t.length).fill(Wi):Wi;const A=()=>{if(k.active)if(e){const b=k.run();(r||u||(h?b.some((K,re)=>lr(K,T[re])):lr(b,T)))&&(d&&d(),Nt(e,l,3,[b,T===Wi?void 0:h&&T[0]===Wi?[]:T,p]),T=b)}else k.run()};A.allowRecurse=!!e;let x;s==="sync"?x=A:s==="post"?x=()=>mt(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),x=()=>Sc(A));const k=new Ac(c,x);e?n?A():T=k.run():s==="post"?mt(k.run.bind(k),l&&l.suspense):k.run();const q=()=>{k.stop(),l&&l.scope&&vc(l.scope.effects,k)};return v&&v.push(q),q}function nv(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?lp(r,t):()=>r[t]:t.bind(r,r);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Qe;Kr(this);const a=ap(s,i.bind(r),n);return o?Kr(o):sr(),a}function lp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Xn(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),at(t))Xn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Xn(t[n],e);else if(Sf(t)||Dr(t))t.forEach(n=>{Xn(n,e)});else if(Nf(t))for(const n in t)Xn(t[n],e);return t}function kn(t,e){const n=bt;if(n===null)return t;const r=ca(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Re]=e[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&Xn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Wn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(os(),Nt(l,n,8,[t.el,a,t,e]),as())}}/*! #__NO_SIDE_EFFECTS__ */function cp(t,e){return ee(t)?Ze({name:t.name},e,{setup:t}):t}const io=t=>!!t.type.__asyncLoader,up=t=>t.type.__isKeepAlive;function rv(t,e){hp(t,"a",e)}function sv(t,e){hp(t,"da",e)}function hp(t,e,n=Qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ia(e,r,n),n){let s=n.parent;for(;s&&s.parent;)up(s.parent.vnode)&&iv(r,e,n,s),s=s.parent}}function iv(t,e,n,r){const s=ia(e,t,r,!0);dp(()=>{vc(r[e],s)},n)}function ia(t,e,n=Qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;os(),Kr(n);const a=Nt(e,n,t,o);return sr(),as(),a});return r?s.unshift(i):s.push(i),i}}const mn=t=>(e,n=Qe)=>(!Js||t==="sp")&&ia(t,(...r)=>e(...r),n),oa=mn("bm"),cs=mn("m"),ov=mn("bu"),av=mn("u"),lv=mn("bum"),dp=mn("um"),cv=mn("sp"),uv=mn("rtg"),hv=mn("rtc");function dv(t,e=Qe){ia("ec",t,e)}function je(t,e,n,r){let s;const i=n&&n[r];if(G(t)||Ue(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const xl=t=>t?Ap(t)?ca(t)||t.proxy:xl(t.parent):null,Ms=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xl(t.parent),$root:t=>xl(t.root),$emit:t=>t.emit,$options:t=>Nc(t),$forceUpdate:t=>t.f||(t.f=()=>Sc(t.update)),$nextTick:t=>t.n||(t.n=tp.bind(t.proxy)),$watch:t=>nv.bind(t)}),Ga=(t,e)=>t!==Re&&!t.__isScriptSetup&&ce(t,e),fv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ga(r,e))return o[e]=1,r[e];if(s!==Re&&ce(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,i[e];if(n!==Re&&ce(n,e))return o[e]=4,n[e];Sl&&(o[e]=0)}}const u=Ms[e];let h,d;if(u)return e==="$attrs"&&gt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ga(s,e)?(s[e]=n,!0):r!==Re&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Re&&ce(t,o)||Ga(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Ms,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vh(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sl=!0;function pv(t){const e=Nc(t),n=t.proxy,r=t.ctx;Sl=!1,e.beforeCreate&&Eh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:v,activated:T,deactivated:A,beforeDestroy:x,beforeUnmount:k,destroyed:q,unmounted:b,render:K,renderTracked:re,renderTriggered:pe,errorCaptured:ve,serverPrefetch:xe,expose:ke,inheritAttrs:We,components:Et,directives:tt,filters:Ft}=e;if(c&&mv(c,r,null),o)for(const me in o){const ge=o[me];ee(ge)&&(r[me]=ge.bind(n))}if(s){const me=s.call(n,n);Se(me)&&(t.data=ea(me))}if(Sl=!0,i)for(const me in i){const ge=i[me],tn=ee(ge)?ge.bind(n,n):ee(ge.get)?ge.get.bind(n,n):zt,yn=!ee(ge)&&ee(ge.set)?ge.set.bind(n):zt,Ut=It({get:tn,set:yn});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:pt=>Ut.value=pt})}if(a)for(const me in a)fp(a[me],r,n,me);if(l){const me=ee(l)?l.call(n):l;Reflect.ownKeys(me).forEach(ge=>{oo(ge,me[ge])})}u&&Eh(u,t,"c");function Oe(me,ge){G(ge)?ge.forEach(tn=>me(tn.bind(n))):ge&&me(ge.bind(n))}if(Oe(oa,h),Oe(cs,d),Oe(ov,p),Oe(av,v),Oe(rv,T),Oe(sv,A),Oe(dv,ve),Oe(hv,re),Oe(uv,pe),Oe(lv,k),Oe(dp,b),Oe(cv,xe),G(ke))if(ke.length){const me=t.exposed||(t.exposed={});ke.forEach(ge=>{Object.defineProperty(me,ge,{get:()=>n[ge],set:tn=>n[ge]=tn})})}else t.exposed||(t.exposed={});K&&t.render===zt&&(t.render=K),We!=null&&(t.inheritAttrs=We),Et&&(t.components=Et),tt&&(t.directives=tt)}function mv(t,e,n=zt){G(t)&&(t=kl(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=Ot(s.from||r,s.default,!0):i=Ot(s.from||r):i=Ot(s),at(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Eh(t,e,n){Nt(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fp(t,e,n,r){const s=r.includes(".")?lp(n,r):()=>n[r];if(Ue(t)){const i=e[t];ee(i)&&so(s,i)}else if(ee(t))so(s,t.bind(n));else if(Se(t))if(G(t))t.forEach(i=>fp(i,e,n,r));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&so(s,i,t)}}function Nc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Eo(l,c,o,!0)),Eo(l,e,o)),Se(e)&&i.set(e,l),l}function Eo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Eo(t,i,n,!0),s&&s.forEach(o=>Eo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=gv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gv={data:wh,props:Ih,emits:Ih,methods:Cs,computed:Cs,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Cs,directives:Cs,watch:yv,provide:wh,inject:_v};function wh(t,e){return e?t?function(){return Ze(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function _v(t,e){return Cs(kl(t),kl(e))}function kl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Cs(t,e){return t?Ze(Object.create(null),t,e):e}function Ih(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Ze(Object.create(null),vh(t),vh(e??{})):e}function yv(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function pp(){return{app:null,config:{isNativeTag:X_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vv=0;function Ev(t,e){return function(r,s=null){ee(r)||(r=Ze({},r)),s!=null&&!Se(s)&&(s=null);const i=pp(),o=new WeakSet;let a=!1;const l=i.app={_uid:vv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Kv,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=Z(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ca(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){wo=l;try{return c()}finally{wo=null}}};return l}}let wo=null;function oo(t,e){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[t]=e}}function Ot(t,e,n=!1){const r=Qe||bt;if(r||wo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:wo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ee(e)?e.call(r&&r.proxy):e}}function wv(t,e,n,r=!1){const s={},i={};_o(i,la,1),t.propsDefaults=Object.create(null),mp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Wf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Iv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=fe(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ta(t.emitsOptions,d))continue;const p=e[d];if(l)if(ce(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const v=Zt(d);s[v]=Dl(l,a,v,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{mp(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=is(h))===h||!ce(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Dl(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],c=!0)}c&&ln(t,"set","$attrs")}function mp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(no(l))continue;const c=e[l];let u;s&&ce(s,u=Zt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:ta(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=fe(n),c=a||Re;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Dl(s,l,h,c[h],t,!ce(c,h))}}return o}function Dl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Kr(s),r=c[n]=l.call(null,e),sr())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===is(n))&&(r=!0))}return r}function gp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ee(t)){const u=h=>{l=!0;const[d,p]=gp(h,e,!0);Ze(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Se(t)&&r.set(t,kr),kr;if(G(i))for(let u=0;u<i.length;u++){const h=Zt(i[u]);Th(h)&&(o[h]=Re)}else if(i)for(const u in i){const h=Zt(u);if(Th(h)){const d=i[u],p=o[h]=G(d)||ee(d)?{type:d}:Ze({},d);if(p){const v=Rh(Boolean,p.type),T=Rh(String,p.type);p[0]=v>-1,p[1]=T<0||v<T,(v>-1||ce(p,"default"))&&a.push(h)}}}const c=[o,a];return Se(t)&&r.set(t,c),c}function Th(t){return t[0]!=="$"}function Ah(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function bh(t,e){return Ah(t)===Ah(e)}function Rh(t,e){return G(e)?e.findIndex(n=>bh(n,t)):ee(e)&&bh(e,t)?0:-1}const _p=t=>t[0]==="_"||t==="$stable",Oc=t=>G(t)?t.map(St):[St(t)],Tv=(t,e,n)=>{if(e._n)return e;const r=ye((...s)=>Oc(e(...s)),n);return r._c=!1,r},yp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_p(s))continue;const i=t[s];if(ee(i))e[s]=Tv(s,i,r);else if(i!=null){const o=Oc(i);e[s]=()=>o}}},vp=(t,e)=>{const n=Oc(e);t.slots.default=()=>n},Av=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),_o(e,"_",n)):yp(e,t.slots={})}else t.slots={},e&&vp(t,e);_o(t.slots,la,1)},bv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ze(s,e),!n&&a===1&&delete s._):(i=!e.$stable,yp(e,s)),o=e}else e&&(vp(t,e),o={default:1});if(i)for(const a in s)!_p(a)&&o[a]==null&&delete s[a]};function Nl(t,e,n,r,s=!1){if(G(t)){t.forEach((d,p)=>Nl(d,e&&(G(e)?e[p]:e),n,r,s));return}if(io(r)&&!s)return;const i=r.shapeFlag&4?ca(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,ce(h,c)&&(h[c]=null)):at(c)&&(c.value=null)),ee(l))Sn(l,a,12,[o,u]);else{const d=Ue(l),p=at(l);if(d||p){const v=()=>{if(t.f){const T=d?ce(h,l)?h[l]:u[l]:l.value;s?G(T)&&vc(T,i):G(T)?T.includes(i)||T.push(i):d?(u[l]=[i],ce(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ce(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,mt(v,n)):v()}}}const mt=ev;function Rv(t){return Pv(t)}function Pv(t,e){const n=Il();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=zt,insertStaticContent:v}=t,T=(f,m,_,y=null,I=null,R=null,V=!1,S=null,D=!!m.dynamicChildren)=>{if(f===m)return;f&&!An(f,m)&&(y=E(f),pt(f,I,R,!0),f=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:C,ref:W,shapeFlag:B}=m;switch(C){case aa:A(f,m,_,y);break;case un:x(f,m,_,y);break;case Qa:f==null&&k(m,_,y,V);break;case Te:Et(f,m,_,y,I,R,V,S,D);break;default:B&1?K(f,m,_,y,I,R,V,S,D):B&6?tt(f,m,_,y,I,R,V,S,D):(B&64||B&128)&&C.process(f,m,_,y,I,R,V,S,D,N)}W!=null&&I&&Nl(W,f&&f.ref,R,m||f,!m)},A=(f,m,_,y)=>{if(f==null)r(m.el=a(m.children),_,y);else{const I=m.el=f.el;m.children!==f.children&&c(I,m.children)}},x=(f,m,_,y)=>{f==null?r(m.el=l(m.children||""),_,y):m.el=f.el},k=(f,m,_,y)=>{[f.el,f.anchor]=v(f.children,m,_,y,f.el,f.anchor)},q=({el:f,anchor:m},_,y)=>{let I;for(;f&&f!==m;)I=d(f),r(f,_,y),f=I;r(m,_,y)},b=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=d(f),s(f),f=_;s(m)},K=(f,m,_,y,I,R,V,S,D)=>{V=V||m.type==="svg",f==null?re(m,_,y,I,R,V,S,D):xe(f,m,I,R,V,S,D)},re=(f,m,_,y,I,R,V,S)=>{let D,C;const{type:W,props:B,shapeFlag:z,transition:te,dirs:se}=f;if(D=f.el=o(f.type,R,B&&B.is,B),z&8?u(D,f.children):z&16&&ve(f.children,D,null,y,I,R&&W!=="foreignObject",V,S),se&&Wn(f,null,y,"created"),pe(D,f,f.scopeId,V,y),B){for(const Ie in B)Ie!=="value"&&!no(Ie)&&i(D,Ie,null,B[Ie],R,f.children,y,I,nt);"value"in B&&i(D,"value",null,B.value),(C=B.onVnodeBeforeMount)&&Bt(C,y,f)}se&&Wn(f,null,y,"beforeMount");const Ae=Cv(I,te);Ae&&te.beforeEnter(D),r(D,m,_),((C=B&&B.onVnodeMounted)||Ae||se)&&mt(()=>{C&&Bt(C,y,f),Ae&&te.enter(D),se&&Wn(f,null,y,"mounted")},I)},pe=(f,m,_,y,I)=>{if(_&&p(f,_),y)for(let R=0;R<y.length;R++)p(f,y[R]);if(I){let R=I.subTree;if(m===R){const V=I.vnode;pe(f,V,V.scopeId,V.slotScopeIds,I.parent)}}},ve=(f,m,_,y,I,R,V,S,D=0)=>{for(let C=D;C<f.length;C++){const W=f[C]=S?In(f[C]):St(f[C]);T(null,W,m,_,y,I,R,V,S)}},xe=(f,m,_,y,I,R,V)=>{const S=m.el=f.el;let{patchFlag:D,dynamicChildren:C,dirs:W}=m;D|=f.patchFlag&16;const B=f.props||Re,z=m.props||Re;let te;_&&zn(_,!1),(te=z.onVnodeBeforeUpdate)&&Bt(te,_,m,f),W&&Wn(m,f,_,"beforeUpdate"),_&&zn(_,!0);const se=I&&m.type!=="foreignObject";if(C?ke(f.dynamicChildren,C,S,_,y,se,R):V||ge(f,m,S,null,_,y,se,R,!1),D>0){if(D&16)We(S,m,B,z,_,y,I);else if(D&2&&B.class!==z.class&&i(S,"class",null,z.class,I),D&4&&i(S,"style",B.style,z.style,I),D&8){const Ae=m.dynamicProps;for(let Ie=0;Ie<Ae.length;Ie++){const Ve=Ae[Ie],Ct=B[Ve],Ir=z[Ve];(Ir!==Ct||Ve==="value")&&i(S,Ve,Ct,Ir,I,f.children,_,y,nt)}}D&1&&f.children!==m.children&&u(S,m.children)}else!V&&C==null&&We(S,m,B,z,_,y,I);((te=z.onVnodeUpdated)||W)&&mt(()=>{te&&Bt(te,_,m,f),W&&Wn(m,f,_,"updated")},y)},ke=(f,m,_,y,I,R,V)=>{for(let S=0;S<m.length;S++){const D=f[S],C=m[S],W=D.el&&(D.type===Te||!An(D,C)||D.shapeFlag&70)?h(D.el):_;T(D,C,W,null,y,I,R,V,!0)}},We=(f,m,_,y,I,R,V)=>{if(_!==y){if(_!==Re)for(const S in _)!no(S)&&!(S in y)&&i(f,S,_[S],null,V,m.children,I,R,nt);for(const S in y){if(no(S))continue;const D=y[S],C=_[S];D!==C&&S!=="value"&&i(f,S,C,D,V,m.children,I,R,nt)}"value"in y&&i(f,"value",_.value,y.value)}},Et=(f,m,_,y,I,R,V,S,D)=>{const C=m.el=f?f.el:a(""),W=m.anchor=f?f.anchor:a("");let{patchFlag:B,dynamicChildren:z,slotScopeIds:te}=m;te&&(S=S?S.concat(te):te),f==null?(r(C,_,y),r(W,_,y),ve(m.children,_,W,I,R,V,S,D)):B>0&&B&64&&z&&f.dynamicChildren?(ke(f.dynamicChildren,z,_,I,R,V,S),(m.key!=null||I&&m===I.subTree)&&Ep(f,m,!0)):ge(f,m,_,W,I,R,V,S,D)},tt=(f,m,_,y,I,R,V,S,D)=>{m.slotScopeIds=S,f==null?m.shapeFlag&512?I.ctx.activate(m,_,y,V,D):Ft(m,_,y,I,R,V,D):wt(f,m,D)},Ft=(f,m,_,y,I,R,V)=>{const S=f.component=Mv(f,y,I);if(up(f)&&(S.ctx.renderer=N),Lv(S),S.asyncDep){if(I&&I.registerDep(S,Oe),!f.el){const D=S.subTree=Z(un);x(null,D,m,_)}return}Oe(S,f,m,_,I,R,V)},wt=(f,m,_)=>{const y=m.component=f.component;if(Ky(f,m,_))if(y.asyncDep&&!y.asyncResolved){me(y,m,_);return}else y.next=m,Uy(y.update),y.update();else m.el=f.el,y.vnode=m},Oe=(f,m,_,y,I,R,V)=>{const S=()=>{if(f.isMounted){let{next:W,bu:B,u:z,parent:te,vnode:se}=f,Ae=W,Ie;zn(f,!1),W?(W.el=se.el,me(f,W,V)):W=se,B&&ro(B),(Ie=W.props&&W.props.onVnodeBeforeUpdate)&&Bt(Ie,te,W,se),zn(f,!0);const Ve=Wa(f),Ct=f.subTree;f.subTree=Ve,T(Ct,Ve,h(Ct.el),E(Ct),f,I,R),W.el=Ve.el,Ae===null&&kc(f,Ve.el),z&&mt(z,I),(Ie=W.props&&W.props.onVnodeUpdated)&&mt(()=>Bt(Ie,te,W,se),I)}else{let W;const{el:B,props:z}=m,{bm:te,m:se,parent:Ae}=f,Ie=io(m);if(zn(f,!1),te&&ro(te),!Ie&&(W=z&&z.onVnodeBeforeMount)&&Bt(W,Ae,m),zn(f,!0),B&&_e){const Ve=()=>{f.subTree=Wa(f),_e(B,f.subTree,f,I,null)};Ie?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Ve()):Ve()}else{const Ve=f.subTree=Wa(f);T(null,Ve,_,y,f,I,R),m.el=Ve.el}if(se&&mt(se,I),!Ie&&(W=z&&z.onVnodeMounted)){const Ve=m;mt(()=>Bt(W,Ae,Ve),I)}(m.shapeFlag&256||Ae&&io(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&f.a&&mt(f.a,I),f.isMounted=!0,m=_=y=null}},D=f.effect=new Ac(S,()=>Sc(C),f.scope),C=f.update=()=>D.run();C.id=f.uid,zn(f,!0),C()},me=(f,m,_)=>{m.component=f;const y=f.vnode.props;f.vnode=m,f.next=null,Iv(f,m.props,y,_),bv(f,m.children,_),os(),mh(f),as()},ge=(f,m,_,y,I,R,V,S,D=!1)=>{const C=f&&f.children,W=f?f.shapeFlag:0,B=m.children,{patchFlag:z,shapeFlag:te}=m;if(z>0){if(z&128){yn(C,B,_,y,I,R,V,S,D);return}else if(z&256){tn(C,B,_,y,I,R,V,S,D);return}}te&8?(W&16&&nt(C,I,R),B!==C&&u(_,B)):W&16?te&16?yn(C,B,_,y,I,R,V,S,D):nt(C,I,R,!0):(W&8&&u(_,""),te&16&&ve(B,_,y,I,R,V,S,D))},tn=(f,m,_,y,I,R,V,S,D)=>{f=f||kr,m=m||kr;const C=f.length,W=m.length,B=Math.min(C,W);let z;for(z=0;z<B;z++){const te=m[z]=D?In(m[z]):St(m[z]);T(f[z],te,_,null,I,R,V,S,D)}C>W?nt(f,I,R,!0,!1,B):ve(m,_,y,I,R,V,S,D,B)},yn=(f,m,_,y,I,R,V,S,D)=>{let C=0;const W=m.length;let B=f.length-1,z=W-1;for(;C<=B&&C<=z;){const te=f[C],se=m[C]=D?In(m[C]):St(m[C]);if(An(te,se))T(te,se,_,null,I,R,V,S,D);else break;C++}for(;C<=B&&C<=z;){const te=f[B],se=m[z]=D?In(m[z]):St(m[z]);if(An(te,se))T(te,se,_,null,I,R,V,S,D);else break;B--,z--}if(C>B){if(C<=z){const te=z+1,se=te<W?m[te].el:y;for(;C<=z;)T(null,m[C]=D?In(m[C]):St(m[C]),_,se,I,R,V,S,D),C++}}else if(C>z)for(;C<=B;)pt(f[C],I,R,!0),C++;else{const te=C,se=C,Ae=new Map;for(C=se;C<=z;C++){const _t=m[C]=D?In(m[C]):St(m[C]);_t.key!=null&&Ae.set(_t.key,C)}let Ie,Ve=0;const Ct=z-se+1;let Ir=!1,sh=0;const Is=new Array(Ct);for(C=0;C<Ct;C++)Is[C]=0;for(C=te;C<=B;C++){const _t=f[C];if(Ve>=Ct){pt(_t,I,R,!0);continue}let $t;if(_t.key!=null)$t=Ae.get(_t.key);else for(Ie=se;Ie<=z;Ie++)if(Is[Ie-se]===0&&An(_t,m[Ie])){$t=Ie;break}$t===void 0?pt(_t,I,R,!0):(Is[$t-se]=C+1,$t>=sh?sh=$t:Ir=!0,T(_t,m[$t],_,null,I,R,V,S,D),Ve++)}const ih=Ir?xv(Is):kr;for(Ie=ih.length-1,C=Ct-1;C>=0;C--){const _t=se+C,$t=m[_t],oh=_t+1<W?m[_t+1].el:y;Is[C]===0?T(null,$t,_,oh,I,R,V,S,D):Ir&&(Ie<0||C!==ih[Ie]?Ut($t,_,oh,2):Ie--)}}},Ut=(f,m,_,y,I=null)=>{const{el:R,type:V,transition:S,children:D,shapeFlag:C}=f;if(C&6){Ut(f.component.subTree,m,_,y);return}if(C&128){f.suspense.move(m,_,y);return}if(C&64){V.move(f,m,_,N);return}if(V===Te){r(R,m,_);for(let B=0;B<D.length;B++)Ut(D[B],m,_,y);r(f.anchor,m,_);return}if(V===Qa){q(f,m,_);return}if(y!==2&&C&1&&S)if(y===0)S.beforeEnter(R),r(R,m,_),mt(()=>S.enter(R),I);else{const{leave:B,delayLeave:z,afterLeave:te}=S,se=()=>r(R,m,_),Ae=()=>{B(R,()=>{se(),te&&te()})};z?z(R,se,Ae):Ae()}else r(R,m,_)},pt=(f,m,_,y=!1,I=!1)=>{const{type:R,props:V,ref:S,children:D,dynamicChildren:C,shapeFlag:W,patchFlag:B,dirs:z}=f;if(S!=null&&Nl(S,null,_,f,!0),W&256){m.ctx.deactivate(f);return}const te=W&1&&z,se=!io(f);let Ae;if(se&&(Ae=V&&V.onVnodeBeforeUnmount)&&Bt(Ae,m,f),W&6)$i(f.component,_,y);else{if(W&128){f.suspense.unmount(_,y);return}te&&Wn(f,null,m,"beforeUnmount"),W&64?f.type.remove(f,m,_,I,N,y):C&&(R!==Te||B>0&&B&64)?nt(C,m,_,!1,!0):(R===Te&&B&384||!I&&W&16)&&nt(D,m,_),y&&Er(f)}(se&&(Ae=V&&V.onVnodeUnmounted)||te)&&mt(()=>{Ae&&Bt(Ae,m,f),te&&Wn(f,null,m,"unmounted")},_)},Er=f=>{const{type:m,el:_,anchor:y,transition:I}=f;if(m===Te){wr(_,y);return}if(m===Qa){b(f);return}const R=()=>{s(_),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:V,delayLeave:S}=I,D=()=>V(_,R);S?S(f.el,R,D):D()}else R()},wr=(f,m)=>{let _;for(;f!==m;)_=d(f),s(f),f=_;s(m)},$i=(f,m,_)=>{const{bum:y,scope:I,update:R,subTree:V,um:S}=f;y&&ro(y),I.stop(),R&&(R.active=!1,pt(V,f,m,_)),S&&mt(S,m),mt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},nt=(f,m,_,y=!1,I=!1,R=0)=>{for(let V=R;V<f.length;V++)pt(f[V],m,_,y,I)},E=f=>f.shapeFlag&6?E(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),L=(f,m,_)=>{f==null?m._vnode&&pt(m._vnode,null,null,!0):T(m._vnode||null,f,m,null,null,null,_),mh(),rp(),m._vnode=f},N={p:T,um:pt,m:Ut,r:Er,mt:Ft,mc:ve,pc:ge,pbc:ke,n:E,o:t};let j,_e;return e&&([j,_e]=e(N)),{render:L,hydrate:j,createApp:Ev(L,j)}}function zn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Cv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ep(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=In(s[i]),a.el=o.el),n||Ep(o,a)),a.type===aa&&(a.el=o.el)}}function xv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Sv=t=>t.__isTeleport,Te=Symbol.for("v-fgt"),aa=Symbol.for("v-txt"),un=Symbol.for("v-cmt"),Qa=Symbol.for("v-stc"),Ls=[];let Rt=null;function M(t=!1){Ls.push(Rt=t?null:[])}function wp(){Ls.pop(),Rt=Ls[Ls.length-1]||null}let qr=1;function Ph(t){qr+=t}function Ip(t){return t.dynamicChildren=qr>0?Rt||kr:null,wp(),qr>0&&Rt&&Rt.push(t),t}function F(t,e,n,r,s,i){return Ip(g(t,e,n,r,s,i,!0))}function Fs(t,e,n,r,s){return Ip(Z(t,e,n,r,s,!0))}function Io(t){return t?t.__v_isVNode===!0:!1}function An(t,e){return t.type===e.type&&t.key===e.key}const la="__vInternal",Tp=({key:t})=>t??null,ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||at(t)||ee(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===Te?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tp(e),ref:e&&ao(e),scopeId:na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return a?(Mc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),qr>0&&!o&&Rt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Rt.push(l),l}const Z=kv;function kv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Wy)&&(t=un),Io(t)){const a=Hr(t,e,!0);return n&&Mc(a,n),qr>0&&!i&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(t)]=a:Rt.push(a)),a.patchFlag|=-2,a}if(jv(t)&&(t=t.__vccOpts),e){e=Dv(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=Ic(a)),Se(l)&&(Gf(l)&&!G(l)&&(l=Ze({},l)),e.style=wc(l))}const o=Ue(t)?1:Gy(t)?128:Sv(t)?64:Se(t)?4:ee(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function Dv(t){return t?Gf(t)||la in t?Ze({},t):t:null}function Hr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Nv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Tp(a),ref:e&&e.ref?n&&s?G(s)?s.concat(ao(e)):[s,ao(e)]:ao(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hr(t.ssContent),ssFallback:t.ssFallback&&Hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Vc(t=" ",e=0){return Z(aa,null,t,e)}function Jn(t="",e=!1){return e?(M(),Fs(un,null,t)):Z(un,null,t)}function St(t){return t==null||typeof t=="boolean"?Z(un):G(t)?Z(Te,null,t.slice()):typeof t=="object"?In(t):Z(aa,null,String(t))}function In(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hr(t)}function Mc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Mc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(la in e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[Vc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Nv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ic([e.class,r.class]));else if(s==="style")e.style=wc([e.style,r.style]);else if(Qo(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Bt(t,e,n,r=null){Nt(t,e,7,[n,r])}const Ov=pp();let Vv=0;function Mv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ov,i={uid:Vv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new cy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gp(r,s),emitsOptions:ip(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=By.bind(null,i),t.ce&&t.ce(i),i}let Qe=null,Lc,Tr,Ch="__VUE_INSTANCE_SETTERS__";(Tr=Il()[Ch])||(Tr=Il()[Ch]=[]),Tr.push(t=>Qe=t),Lc=t=>{Tr.length>1?Tr.forEach(e=>e(t)):Tr[0](t)};const Kr=t=>{Lc(t),t.scope.on()},sr=()=>{Qe&&Qe.scope.off(),Lc(null)};function Ap(t){return t.vnode.shapeFlag&4}let Js=!1;function Lv(t,e=!1){Js=e;const{props:n,children:r}=t.vnode,s=Ap(t);wv(t,n,s,e),Av(t,r);const i=s?Fv(t,e):void 0;return Js=!1,i}function Fv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qf(new Proxy(t.ctx,fv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?$v(t):null;Kr(t),os();const i=Sn(r,t,0,[t.props,s]);if(as(),sr(),kf(i)){if(i.then(sr,sr),e)return i.then(o=>{Ol(t,o,e)}).catch(o=>{yi(o,t,0)});t.asyncDep=i}else Ol(t,i,e)}else bp(t,e)}function Ol(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Zf(e)),bp(t,n)}let xh;function bp(t,e,n){const r=t.type;if(!t.render){if(!e&&xh&&!r.render){const s=r.template||Nc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ze(Ze({isCustomElement:i,delimiters:a},o),l);r.render=xh(s,c)}}t.render=r.render||zt}{Kr(t),os();try{pv(t)}finally{as(),sr()}}}function Uv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}}))}function $v(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Uv(t)},slots:t.slots,emit:t.emit,expose:e}}function ca(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zf(Qf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ms)return Ms[n](t)},has(e,n){return n in e||n in Ms}}))}function Bv(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function jv(t){return ee(t)&&"__vccOpts"in t}const It=(t,e)=>My(t,e,Js);function Rp(t,e,n){const r=arguments.length;return r===2?Se(e)&&!G(e)?Io(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Io(n)&&(n=[n]),Z(t,e,n))}const qv=Symbol.for("v-scx"),Hv=()=>Ot(qv),Kv="3.3.11",Wv="http://www.w3.org/2000/svg",Yn=typeof document<"u"?document:null,Sh=Yn&&Yn.createElement("template"),zv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Yn.createElementNS(Wv,t):Yn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Yn.createTextNode(t),createComment:t=>Yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Sh.innerHTML=r?`<svg>${t}</svg>`:t;const a=Sh.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Gv=Symbol("_vtc");function Qv(t,e,n){const r=t[Gv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Yv=Symbol("_vod");function Xv(t,e,n){const r=t.style,s=Ue(n);if(n&&!s){if(e&&!Ue(e))for(const i in e)n[i]==null&&Vl(r,i,"");for(const i in n)Vl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Yv in t&&(r.display=i)}}const kh=/\s*!important$/;function Vl(t,e,n){if(G(n))n.forEach(r=>Vl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Jv(t,e);kh.test(n)?t.setProperty(is(r),n.replace(kh,""),"important"):t[r]=n}}const Dh=["Webkit","Moz","ms"],Ya={};function Jv(t,e){const n=Ya[e];if(n)return n;let r=Zt(e);if(r!=="filter"&&r in t)return Ya[e]=r;r=Jo(r);for(let s=0;s<Dh.length;s++){const i=Dh[s]+r;if(i in t)return Ya[e]=i}return e}const Nh="http://www.w3.org/1999/xlink";function Zv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Nh,e.slice(6,e.length)):t.setAttributeNS(Nh,e,n);else{const i=ly(e);n==null||i&&!Of(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function eE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Of(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function br(t,e,n,r){t.addEventListener(e,n,r)}function tE(t,e,n,r){t.removeEventListener(e,n,r)}const Oh=Symbol("_vei");function nE(t,e,n,r,s=null){const i=t[Oh]||(t[Oh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=rE(e);if(r){const c=i[e]=oE(r,s);br(t,a,c,l)}else o&&(tE(t,a,o,l),i[e]=void 0)}}const Vh=/(?:Once|Passive|Capture)$/;function rE(t){let e;if(Vh.test(t)){e={};let r;for(;r=t.match(Vh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):is(t.slice(2)),e]}let Xa=0;const sE=Promise.resolve(),iE=()=>Xa||(sE.then(()=>Xa=0),Xa=Date.now());function oE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Nt(aE(r,n.value),e,5,[r])};return n.value=t,n.attached=iE(),n}function aE(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lE=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?Qv(t,r,s):e==="style"?Xv(t,n,r):Qo(e)?yc(e)||nE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cE(t,e,r,s))?eE(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zv(t,e,r,s))};function cE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mh(e)&&ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mh(e)&&Ue(n)?!1:e in t}const Lh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>ro(e,n):e};function uE(t){t.target.composing=!0}function Fh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ja=Symbol("_assign"),Dn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ja]=Lh(s);const i=r||s.props&&s.props.type==="number";br(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=wl(a)),t[Ja](a)}),n&&br(t,"change",()=>{t.value=t.value.trim()}),e||(br(t,"compositionstart",uE),br(t,"compositionend",Fh),br(t,"change",Fh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Ja]=Lh(i),t.composing)return;const o=s||t.type==="number"?wl(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},hE=["ctrl","shift","alt","meta"],dE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hE.some(n=>t[`${n}Key`]&&!e.includes(n))},To=(t,e)=>t._withMods||(t._withMods=(n,...r)=>{for(let s=0;s<e.length;s++){const i=dE[e[s]];if(i&&i(n,e))return}return t(n,...r)}),fE=Ze({patchProp:lE},zv);let Uh;function pE(){return Uh||(Uh=Rv(fE))}const mE=(...t)=>{const e=pE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=gE(r);if(!s)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gE(t){return Ue(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Rr=typeof window<"u";function _E(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Za(t,e){const n={};for(const r in e){const s=e[r];n[r]=Vt(s)?s.map(t):t(s)}return n}const Us=()=>{},Vt=Array.isArray,yE=/\/$/,vE=t=>t.replace(yE,"");function el(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=TE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function EE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $h(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Wr(e.matched[r],n.matched[s])&&Pp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Pp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!IE(t[n],e[n]))return!1;return!0}function IE(t,e){return Vt(t)?Bh(t,e):Vt(e)?Bh(e,t):t===e}function Bh(t,e){return Vt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function TE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Zs;(function(t){t.pop="pop",t.push="push"})(Zs||(Zs={}));var $s;(function(t){t.back="back",t.forward="forward",t.unknown=""})($s||($s={}));function AE(t){if(!t)if(Rr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vE(t)}const bE=/^[^#]+#/;function RE(t,e){return t.replace(bE,"#")+e}function PE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ua=()=>({left:window.pageXOffset,top:window.pageYOffset});function CE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=PE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jh(t,e){return(history.state?history.state.position-e:-1)+t}const Ml=new Map;function xE(t,e){Ml.set(t,e)}function SE(t){const e=Ml.get(t);return Ml.delete(t),e}let kE=()=>location.protocol+"//"+location.host;function Cp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),$h(l,"")}return $h(n,t)+r+s}function DE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Cp(t,location),v=n.value,T=e.value;let A=0;if(d){if(n.value=p,e.value=d,o&&o===v){o=null;return}A=T?d.position-T.position:0}else r(p);s.forEach(x=>{x(n.value,v,{delta:A,type:Zs.pop,direction:A?A>0?$s.forward:$s.back:$s.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:ua()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function qh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ua():null}}function NE(t){const{history:e,location:n}=window,r={value:Cp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:kE()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ee({},e.state,qh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Ee({},s.value,e.state,{forward:l,scroll:ua()});i(u.current,u,!0);const h=Ee({},qh(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function OE(t){t=AE(t);const e=NE(t),n=DE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ee({location:"",base:t,go:r,createHref:RE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function VE(t){return typeof t=="string"||t&&typeof t=="object"}function xp(t){return typeof t=="string"||typeof t=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Sp=Symbol("");var Hh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hh||(Hh={}));function zr(t,e){return Ee(new Error,{type:t,[Sp]:!0},e)}function nn(t,e){return t instanceof Error&&Sp in t&&(e==null||!!(t.type&e))}const Kh="[^/]+?",ME={sensitive:!1,strict:!1,start:!0,end:!0},LE=/[.+*?^${}()[\]/\\]/g;function FE(t,e){const n=Ee({},ME,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(LE,"\\$&"),p+=40;else if(d.type===1){const{value:v,repeatable:T,optional:A,regexp:x}=d;i.push({name:v,repeatable:T,optional:A});const k=x||Kh;if(k!==Kh){p+=10;try{new RegExp(`(${k})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${v}" (${k}): `+b.message)}}let q=T?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(q=A&&c.length<2?`(?:/${q})`:"/"+q),A&&(q+="?"),s+=q,p+=20,A&&(p+=-8),T&&(p+=-20),k===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",v=i[d-1];h[v.name]=p&&v.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:T,optional:A}=p,x=v in c?c[v]:"";if(Vt(x)&&!T)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const k=Vt(x)?x.join("/"):x;if(!k)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function UE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $E(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=UE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wh(r))return 1;if(Wh(s))return-1}return s.length-r.length}function Wh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const BE={type:0,value:""},jE=/[a-zA-Z0-9_]/;function qE(t){if(!t)return[[]];if(t==="/")return[[BE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:jE.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function HE(t,e,n){const r=FE(qE(t.path),n),s=Ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function KE(t,e){const n=[],r=new Map;e=Qh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,v=WE(u);v.aliasOf=d&&d.record;const T=Qh(e,u),A=[v];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of q)A.push(Ee({},v,{components:d?d.record.components:v.components,path:b,aliasOf:d?d.record:v}))}let x,k;for(const q of A){const{path:b}=q;if(h&&b[0]!=="/"){const K=h.record.path,re=K[K.length-1]==="/"?"":"/";q.path=h.record.path+(b&&re+b)}if(x=HE(q,h,T),d?d.alias.push(x):(k=k||x,k!==x&&k.alias.push(x),p&&u.name&&!Gh(x)&&o(u.name)),v.children){const K=v.children;for(let re=0;re<K.length;re++)i(K[re],x,d&&d.children[re])}d=d||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return k?()=>{o(k)}:Us}function o(u){if(xp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&$E(u,n[h])>=0&&(u.record.path!==n[h].record.path||!kp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Gh(u)&&r.set(u.record.name,u)}function c(u,h){let d,p={},v,T;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw zr(1,{location:u});T=d.record.name,p=Ee(zh(h.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&zh(u.params,d.keys.map(k=>k.name))),v=d.stringify(p)}else if("path"in u)v=u.path,d=n.find(k=>k.re.test(v)),d&&(p=d.parse(v),T=d.record.name);else{if(d=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw zr(1,{location:u,currentLocation:h});T=d.record.name,p=Ee({},h.params,u.params),v=d.stringify(p)}const A=[];let x=d;for(;x;)A.unshift(x.record),x=x.parent;return{name:T,path:v,params:p,matched:A,meta:GE(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function zh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function WE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:zE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function zE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Gh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function GE(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function Qh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function kp(t,e){return e.children.some(n=>n===t||kp(t,n))}const Dp=/#/g,QE=/&/g,YE=/\//g,XE=/=/g,JE=/\?/g,Np=/\+/g,ZE=/%5B/g,ew=/%5D/g,Op=/%5E/g,tw=/%60/g,Vp=/%7B/g,nw=/%7C/g,Mp=/%7D/g,rw=/%20/g;function Fc(t){return encodeURI(""+t).replace(nw,"|").replace(ZE,"[").replace(ew,"]")}function sw(t){return Fc(t).replace(Vp,"{").replace(Mp,"}").replace(Op,"^")}function Ll(t){return Fc(t).replace(Np,"%2B").replace(rw,"+").replace(Dp,"%23").replace(QE,"%26").replace(tw,"`").replace(Vp,"{").replace(Mp,"}").replace(Op,"^")}function iw(t){return Ll(t).replace(XE,"%3D")}function ow(t){return Fc(t).replace(Dp,"%23").replace(JE,"%3F")}function aw(t){return t==null?"":ow(t).replace(YE,"%2F")}function Ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function lw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Np," "),o=i.indexOf("="),a=Ao(o<0?i:i.slice(0,o)),l=o<0?null:Ao(i.slice(o+1));if(a in e){let c=e[a];Vt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Yh(t){let e="";for(let n in t){const r=t[n];if(n=iw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vt(r)?r.map(i=>i&&Ll(i)):[r&&Ll(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function cw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Vt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const uw=Symbol(""),Xh=Symbol(""),ha=Symbol(""),Uc=Symbol(""),Fl=Symbol("");function Ts(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Tn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(zr(4,{from:n,to:e})):h instanceof Error?a(h):VE(h)?a(zr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function tl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(hw(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Tn(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=_E(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Tn(d,n,r,i,o)()}))}}return s}function hw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jh(t){const e=Ot(ha),n=Ot(Uc),r=It(()=>e.resolve(ue(t.to))),s=It(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Wr.bind(null,u));if(d>-1)return d;const p=Zh(l[c-2]);return c>1&&Zh(u)===p&&h[h.length-1].path!==p?h.findIndex(Wr.bind(null,l[c-2])):d}),i=It(()=>s.value>-1&&pw(n.params,r.value.params)),o=It(()=>s.value>-1&&s.value===n.matched.length-1&&Pp(n.params,r.value.params));function a(l={}){return fw(l)?e[ue(t.replace)?"replace":"push"](ue(t.to)).catch(Us):Promise.resolve()}return{route:r,href:It(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const dw=cp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jh,setup(t,{slots:e}){const n=ea(Jh(t)),{options:r}=Ot(ha),s=It(()=>({[ed(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ed(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Rp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$e=dw;function fw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Vt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Zh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ed=(t,e,n)=>t??e??n,mw=cp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ot(Fl),s=It(()=>t.route||r.value),i=Ot(Xh,0),o=It(()=>{let c=ue(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=It(()=>s.value.matched[o.value]);oo(Xh,It(()=>o.value+1)),oo(uw,a),oo(Fl,s);const l=he();return so(()=>[l.value,a.value,t.name],([c,u,h],[d,p,v])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Wr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return td(n.default,{Component:d,route:c});const p=h.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,A=Rp(d,Ee({},v,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return td(n.default,{Component:A,route:c})||A}}});function td(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gw=mw;function _w(t){const e=KE(t.routes,t),n=t.parseQuery||lw,r=t.stringifyQuery||Yh,s=t.history,i=Ts(),o=Ts(),a=Ts(),l=Dy(En);let c=En;Rr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Za.bind(null,E=>""+E),h=Za.bind(null,aw),d=Za.bind(null,Ao);function p(E,L){let N,j;return xp(E)?(N=e.getRecordMatcher(E),j=L):j=E,e.addRoute(j,N)}function v(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function T(){return e.getRoutes().map(E=>E.record)}function A(E){return!!e.getRecordMatcher(E)}function x(E,L){if(L=Ee({},L||l.value),typeof E=="string"){const _=el(n,E,L.path),y=e.resolve({path:_.path},L),I=s.createHref(_.fullPath);return Ee(_,y,{params:d(y.params),hash:Ao(_.hash),redirectedFrom:void 0,href:I})}let N;if("path"in E)N=Ee({},E,{path:el(n,E.path,L.path).path});else{const _=Ee({},E.params);for(const y in _)_[y]==null&&delete _[y];N=Ee({},E,{params:h(_)}),L.params=h(L.params)}const j=e.resolve(N,L),_e=E.hash||"";j.params=u(d(j.params));const f=EE(r,Ee({},E,{hash:sw(_e),path:j.path})),m=s.createHref(f);return Ee({fullPath:f,hash:_e,query:r===Yh?cw(E.query):E.query||{}},j,{redirectedFrom:void 0,href:m})}function k(E){return typeof E=="string"?el(n,E,l.value.path):Ee({},E)}function q(E,L){if(c!==E)return zr(8,{from:L,to:E})}function b(E){return pe(E)}function K(E){return b(Ee(k(E),{replace:!0}))}function re(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let j=typeof N=="function"?N(E):N;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=k(j):{path:j},j.params={}),Ee({query:E.query,hash:E.hash,params:"path"in j?{}:E.params},j)}}function pe(E,L){const N=c=x(E),j=l.value,_e=E.state,f=E.force,m=E.replace===!0,_=re(N);if(_)return pe(Ee(k(_),{state:typeof _=="object"?Ee({},_e,_.state):_e,force:f,replace:m}),L||N);const y=N;y.redirectedFrom=L;let I;return!f&&wE(r,j,N)&&(I=zr(16,{to:y,from:j}),Ut(j,j,!0,!1)),(I?Promise.resolve(I):ke(y,j)).catch(R=>nn(R)?nn(R,2)?R:yn(R):ge(R,y,j)).then(R=>{if(R){if(nn(R,2))return pe(Ee({replace:m},k(R.to),{state:typeof R.to=="object"?Ee({},_e,R.to.state):_e,force:f}),L||y)}else R=Et(y,j,!0,m,_e);return We(y,j,R),R})}function ve(E,L){const N=q(E,L);return N?Promise.reject(N):Promise.resolve()}function xe(E){const L=wr.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(E):E()}function ke(E,L){let N;const[j,_e,f]=yw(E,L);N=tl(j.reverse(),"beforeRouteLeave",E,L);for(const _ of j)_.leaveGuards.forEach(y=>{N.push(Tn(y,E,L))});const m=ve.bind(null,E,L);return N.push(m),nt(N).then(()=>{N=[];for(const _ of i.list())N.push(Tn(_,E,L));return N.push(m),nt(N)}).then(()=>{N=tl(_e,"beforeRouteUpdate",E,L);for(const _ of _e)_.updateGuards.forEach(y=>{N.push(Tn(y,E,L))});return N.push(m),nt(N)}).then(()=>{N=[];for(const _ of f)if(_.beforeEnter)if(Vt(_.beforeEnter))for(const y of _.beforeEnter)N.push(Tn(y,E,L));else N.push(Tn(_.beforeEnter,E,L));return N.push(m),nt(N)}).then(()=>(E.matched.forEach(_=>_.enterCallbacks={}),N=tl(f,"beforeRouteEnter",E,L),N.push(m),nt(N))).then(()=>{N=[];for(const _ of o.list())N.push(Tn(_,E,L));return N.push(m),nt(N)}).catch(_=>nn(_,8)?_:Promise.reject(_))}function We(E,L,N){a.list().forEach(j=>xe(()=>j(E,L,N)))}function Et(E,L,N,j,_e){const f=q(E,L);if(f)return f;const m=L===En,_=Rr?history.state:{};N&&(j||m?s.replace(E.fullPath,Ee({scroll:m&&_&&_.scroll},_e)):s.push(E.fullPath,_e)),l.value=E,Ut(E,L,N,m),yn()}let tt;function Ft(){tt||(tt=s.listen((E,L,N)=>{if(!$i.listening)return;const j=x(E),_e=re(j);if(_e){pe(Ee(_e,{replace:!0}),j).catch(Us);return}c=j;const f=l.value;Rr&&xE(jh(f.fullPath,N.delta),ua()),ke(j,f).catch(m=>nn(m,12)?m:nn(m,2)?(pe(m.to,j).then(_=>{nn(_,20)&&!N.delta&&N.type===Zs.pop&&s.go(-1,!1)}).catch(Us),Promise.reject()):(N.delta&&s.go(-N.delta,!1),ge(m,j,f))).then(m=>{m=m||Et(j,f,!1),m&&(N.delta&&!nn(m,8)?s.go(-N.delta,!1):N.type===Zs.pop&&nn(m,20)&&s.go(-1,!1)),We(j,f,m)}).catch(Us)}))}let wt=Ts(),Oe=Ts(),me;function ge(E,L,N){yn(E);const j=Oe.list();return j.length?j.forEach(_e=>_e(E,L,N)):console.error(E),Promise.reject(E)}function tn(){return me&&l.value!==En?Promise.resolve():new Promise((E,L)=>{wt.add([E,L])})}function yn(E){return me||(me=!E,Ft(),wt.list().forEach(([L,N])=>E?N(E):L()),wt.reset()),E}function Ut(E,L,N,j){const{scrollBehavior:_e}=t;if(!Rr||!_e)return Promise.resolve();const f=!N&&SE(jh(E.fullPath,0))||(j||!N)&&history.state&&history.state.scroll||null;return tp().then(()=>_e(E,L,f)).then(m=>m&&CE(m)).catch(m=>ge(m,E,L))}const pt=E=>s.go(E);let Er;const wr=new Set,$i={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,hasRoute:A,getRoutes:T,resolve:x,options:t,push:b,replace:K,go:pt,back:()=>pt(-1),forward:()=>pt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Oe.add,isReady:tn,install(E){const L=this;E.component("RouterLink",$e),E.component("RouterView",gw),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(l)}),Rr&&!Er&&l.value===En&&(Er=!0,b(s.location).catch(_e=>{}));const N={};for(const _e in En)Object.defineProperty(N,_e,{get:()=>l.value[_e],enumerable:!0});E.provide(ha,L),E.provide(Uc,Wf(N)),E.provide(Fl,l);const j=E.unmount;wr.add(E),E.unmount=function(){wr.delete(E),wr.size<1&&(c=En,tt&&tt(),tt=null,l.value=En,Er=!1,me=!1),j()}}};function nt(E){return E.reduce((L,N)=>L.then(()=>xe(N)),Promise.resolve())}return $i}function yw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Wr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Wr(c,l))||s.push(l))}return[n,r,s]}function $c(){return Ot(ha)}function da(){return Ot(Uc)}const Lp="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='11'%20cy='11'%20r='7'%20stroke='%23394150'%20stroke-width='2'/%3e%3cpath%20d='M20%2020L17%2017'%20stroke='%23394150'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e";var nd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new Ew;const d=i<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ew extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(t){const e=Fp(t);return Up.encodeByteArray(e,!0)},bo=function(t){return ww(t).replace(/\./g,"")},$p=function(t){try{return Up.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tw=()=>Iw().__FIREBASE_DEFAULTS__,Aw=()=>{if(typeof process>"u"||typeof nd>"u")return;const t=nd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$p(t[1]);return e&&JSON.parse(e)},Bc=()=>{try{return Tw()||Aw()||bw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bp=t=>{var e,n;return(n=(e=Bc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rw=t=>{const e=Bp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jp=()=>{var t;return(t=Bc())===null||t===void 0?void 0:t.config},qp=t=>{var e;return(e=Bc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Cw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[bo(JSON.stringify(n)),bo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Sw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dw(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ow(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Vw,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vi.prototype.create)}}class vi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Mw(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gn(s,a,r)}}function Mw(t,e){return t.replace(Lw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Lw=/\{\$([^}]+)}/g;function Fw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ro(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(rd(i)&&rd(o)){if(!Ro(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function rd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Uw(t,e){const n=new $w(t,e);return n.subscribe.bind(n)}class $w{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nl),s.error===void 0&&(s.error=nl),s.complete===void 0&&(s.complete=nl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nl(){}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gn="[DEFAULT]";/**
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
 */class jw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hw(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qw(t){return t===Gn?void 0:t}function Hw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Ww={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},zw=ae.INFO,Gw={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Qw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Gw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jc{constructor(e){this.name=e,this._logLevel=zw,this._logHandler=Qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ww[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Yw=(t,e)=>e.some(n=>t instanceof n);let sd,id;function Xw(){return sd||(sd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jw(){return id||(id=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hp=new WeakMap,Ul=new WeakMap,Kp=new WeakMap,rl=new WeakMap,qc=new WeakMap;function Zw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hp.set(n,t)}).catch(()=>{}),qc.set(e,t),e}function eI(t){if(Ul.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ul.set(t,e)}let $l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ul.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tI(t){$l=t($l)}function nI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sl(this),e,...n);return Kp.set(r,e.sort?e.sort():[e]),Nn(r)}:Jw().includes(t)?function(...e){return t.apply(sl(this),e),Nn(Hp.get(this))}:function(...e){return Nn(t.apply(sl(this),e))}}function rI(t){return typeof t=="function"?nI(t):(t instanceof IDBTransaction&&eI(t),Yw(t,Xw())?new Proxy(t,$l):t)}function Nn(t){if(t instanceof IDBRequest)return Zw(t);if(rl.has(t))return rl.get(t);const e=rI(t);return e!==t&&(rl.set(t,e),qc.set(e,t)),e}const sl=t=>qc.get(t);function sI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Nn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Nn(o.result),l.oldVersion,l.newVersion,Nn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const iI=["get","getKey","getAll","getAllKeys","count"],oI=["put","add","delete","clear"],il=new Map;function od(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(il.get(e))return il.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=oI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||iI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return il.set(e,i),i}tI(t=>({...t,get:(e,n,r)=>od(e,n)||t.get(e,n,r),has:(e,n)=>!!od(e,n)||t.has(e,n)}));/**
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
 */class aI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bl="@firebase/app",ad="0.9.25";/**
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
 */const ur=new jc("@firebase/app"),cI="@firebase/app-compat",uI="@firebase/analytics-compat",hI="@firebase/analytics",dI="@firebase/app-check-compat",fI="@firebase/app-check",pI="@firebase/auth",mI="@firebase/auth-compat",gI="@firebase/database",_I="@firebase/database-compat",yI="@firebase/functions",vI="@firebase/functions-compat",EI="@firebase/installations",wI="@firebase/installations-compat",II="@firebase/messaging",TI="@firebase/messaging-compat",AI="@firebase/performance",bI="@firebase/performance-compat",RI="@firebase/remote-config",PI="@firebase/remote-config-compat",CI="@firebase/storage",xI="@firebase/storage-compat",SI="@firebase/firestore",kI="@firebase/firestore-compat",DI="firebase",NI="10.7.1";/**
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
 */const jl="[DEFAULT]",OI={[Bl]:"fire-core",[cI]:"fire-core-compat",[hI]:"fire-analytics",[uI]:"fire-analytics-compat",[fI]:"fire-app-check",[dI]:"fire-app-check-compat",[pI]:"fire-auth",[mI]:"fire-auth-compat",[gI]:"fire-rtdb",[_I]:"fire-rtdb-compat",[yI]:"fire-fn",[vI]:"fire-fn-compat",[EI]:"fire-iid",[wI]:"fire-iid-compat",[II]:"fire-fcm",[TI]:"fire-fcm-compat",[AI]:"fire-perf",[bI]:"fire-perf-compat",[RI]:"fire-rc",[PI]:"fire-rc-compat",[CI]:"fire-gcs",[xI]:"fire-gcs-compat",[SI]:"fire-fst",[kI]:"fire-fst-compat","fire-js":"fire-js",[DI]:"fire-js-all"};/**
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
 */const Po=new Map,ql=new Map;function VI(t,e){try{t.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(ql.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;ql.set(e,t);for(const n of Po.values())VI(n,t);return!0}function Hc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const MI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},On=new vi("app","Firebase",MI);/**
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
 */class LI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const us=NI;function Kc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw On.create("bad-app-name",{appName:String(s)});if(n||(n=jp()),!n)throw On.create("no-options");const i=Po.get(s);if(i){if(Ro(n,i.options)&&Ro(r,i.config))return i;throw On.create("duplicate-app",{appName:s})}const o=new Kw(s);for(const l of ql.values())o.addComponent(l);const a=new LI(n,r,o);return Po.set(s,a),a}function Wp(t=jl){const e=Po.get(t);if(!e&&t===jl&&jp())return Kc();if(!e)throw On.create("no-app",{appName:t});return e}function Vn(t,e,n){var r;let s=(r=OI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(a.join(" "));return}Gr(new cr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const FI="firebase-heartbeat-database",UI=1,ei="firebase-heartbeat-store";let ol=null;function zp(){return ol||(ol=sI(FI,UI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),ol}async function $I(t){try{return await(await zp()).transaction(ei).objectStore(ei).get(Gp(t))}catch(e){if(e instanceof gn)ur.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ur.warn(n.message)}}}async function ld(t,e){try{const r=(await zp()).transaction(ei,"readwrite");await r.objectStore(ei).put(e,Gp(t)),await r.done}catch(n){if(n instanceof gn)ur.warn(n.message);else{const r=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ur.warn(r.message)}}}function Gp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BI=1024,jI=30*24*60*60*1e3;class qI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cd(),{heartbeatsToSend:r,unsentEntries:s}=HI(this._heartbeatsCache.heartbeats),i=bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function cd(){return new Date().toISOString().substring(0,10)}function HI(t,e=BI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ud(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ud(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nw()?Ow().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $I(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ud(t){return bo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function WI(t){Gr(new cr("platform-logger",e=>new aI(e),"PRIVATE")),Gr(new cr("heartbeat",e=>new qI(e),"PRIVATE")),Vn(Bl,ad,t),Vn(Bl,ad,"esm2017"),Vn("fire-js","")}WI("");function Wc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Qp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zI=Qp,Yp=new vi("auth","Firebase",Qp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new jc("@firebase/auth");function GI(t,...e){Co.logLevel<=ae.WARN&&Co.warn(`Auth (${us}): ${t}`,...e)}function lo(t,...e){Co.logLevel<=ae.ERROR&&Co.error(`Auth (${us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,...e){throw zc(t,...e)}function Gt(t,...e){return zc(t,...e)}function Xp(t,e,n){const r=Object.assign(Object.assign({},zI()),{[e]:n});return new vi("auth","Firebase",r).create(e,{appName:t.name})}function QI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Pt(t,"argument-error"),Xp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yp.create(t,...e)}function Q(t,e,...n){if(!t)throw zc(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lo(e),new Error(e)}function hn(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YI(){return hd()==="http:"||hd()==="https:"}function hd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YI()||Sw()||"connection"in navigator)?navigator.onLine:!0}function JI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=xw()||kw()}get(){return XI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t,e){hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=new wi(3e4,6e4);function Bn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _n(t,e,n,r,s={}){return Zp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ei(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jp.fetch()(em(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Zp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZI),e);try{const s=new nT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zi(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xp(t,u,c);Pt(t,u)}}catch(s){if(s instanceof gn)throw s;Pt(t,"network-request-failed",{message:String(s)})}}async function Ii(t,e,n,r,s={}){const i=await _n(t,e,n,r,s);return"mfaPendingCredential"in i&&Pt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function em(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Gc(t.config,s):`${t.config.apiScheme}://${s}`}function tT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),eT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Gt(t,e,r);return s.customData._tokenResponse=n,s}function dd(t){return t!==void 0&&t.enterprise!==void 0}class rT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function sT(t,e){return _n(t,"GET","/v2/recaptchaConfig",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(t,e){return _n(t,"POST","/v1/accounts:delete",e)}async function oT(t,e){return _n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aT(t,e=!1){const n=et(t),r=await n.getIdToken(e),s=Qc(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bs(al(s.auth_time)),issuedAtTime:Bs(al(s.iat)),expirationTime:Bs(al(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function al(t){return Number(t)*1e3}function Qc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lo("JWT malformed, contained fewer than 3 sections"),null;try{const s=$p(n);return s?JSON.parse(s):(lo("Failed to decode base64 JWT payload"),null)}catch(s){return lo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function lT(t){const e=Qc(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&cT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Qr(t,oT(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fT(i.providerUserInfo):[],a=dT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new tm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function hT(t){const e=et(t);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fT(t){return t.map(e=>{var{providerId:n}=e,r=Wc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(t,e){const n=await Zp(t,{},async()=>{const r=Ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=em(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mT(t,e){return _n(t,"POST","/v2/accounts:revokeToken",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ti;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ir{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qr(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aT(this,e)}reload(){return hT(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qr(this,iT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:b,isAnonymous:K,providerData:re,stsTokenManager:pe}=n;Q(q&&pe,e,"internal-error");const ve=ti.fromJSON(this.name,pe);Q(typeof q=="string",e,"internal-error"),wn(h,e.name),wn(d,e.name),Q(typeof b=="boolean",e,"internal-error"),Q(typeof K=="boolean",e,"internal-error"),wn(p,e.name),wn(v,e.name),wn(T,e.name),wn(A,e.name),wn(x,e.name),wn(k,e.name);const xe=new ir({uid:q,auth:e,email:d,emailVerified:b,displayName:h,isAnonymous:K,photoURL:v,phoneNumber:p,tenantId:T,stsTokenManager:ve,createdAt:x,lastLoginAt:k});return re&&Array.isArray(re)&&(xe.providerData=re.map(ke=>Object.assign({},ke))),A&&(xe._redirectEventId=A),xe}static async _fromIdTokenResponse(e,n,r=!1){const s=new ti;s.updateFromServerResponse(n);const i=new ir({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Map;function on(t){hn(t instanceof Function,"Expected a class definition");let e=fd.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fd.set(t,e),e)}/**
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
 */class nm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nm.type="NONE";const pd=nm;/**
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
 */function co(t,e,n){return`firebase:${t}:${e}:${n}`}class Mr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=co(this.userKey,s.apiKey,i),this.fullPersistenceKey=co("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mr(on(pd),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||on(pd);const o=co(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ir._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Mr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Mr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(im(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(am(e))return"Blackberry";if(lm(e))return"Webos";if(Yc(e))return"Safari";if((e.includes("chrome/")||sm(e))&&!e.includes("edge/"))return"Chrome";if(om(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rm(t=ut()){return/firefox\//i.test(t)}function Yc(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sm(t=ut()){return/crios\//i.test(t)}function im(t=ut()){return/iemobile/i.test(t)}function om(t=ut()){return/android/i.test(t)}function am(t=ut()){return/blackberry/i.test(t)}function lm(t=ut()){return/webos/i.test(t)}function fa(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gT(t=ut()){var e;return fa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _T(){return Dw()&&document.documentMode===10}function cm(t=ut()){return fa(t)||om(t)||lm(t)||am(t)||/windows phone/i.test(t)||im(t)}function yT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t,e=[]){let n;switch(t){case"Browser":n=md(ut());break;case"Worker":n=`${md(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class vT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ET(t,e={}){return _n(t,"GET","/v2/passwordPolicy",Bn(t,e))}/**
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
 */const wT=6;class IT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gd(this),this.idTokenSubscription=new gd(this),this.beforeStateQueue=new vT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ET(this),n=new IT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=um(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jn(t){return et(t)}class gd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uw(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",AT().appendChild(r)})}function bT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RT="https://www.google.com/recaptcha/enterprise.js?render=",PT="recaptcha-enterprise",CT="NO_RECAPTCHA";class xT{constructor(e){this.type=PT,this.auth=jn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{sT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new rT(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;dd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(CT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&dd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}hm(RT+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function _d(t,e,n,r=!1){const s=new xT(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Kl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _d(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _d(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t,e){const n=Hc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ro(i,e??{}))return s;Pt(s,"already-initialized")}return n.initialize({options:e})}function kT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DT(t,e,n){const r=jn(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=dm(e),{host:o,port:a}=NT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||OT()}function dm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NT(t){const e=dm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yd(o)}}}function yd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function VT(t,e){return _n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(t,e){return Ii(t,"POST","/v1/accounts:signInWithPassword",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(t,e){return Ii(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}async function FT(t,e){return Ii(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Xc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ni(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ni(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kl(e,n,"signInWithPassword",MT);case"emailLink":return LT(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kl(e,r,"signUpPassword",VT);case"emailLink":return FT(e,{idToken:n,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e){return Ii(t,"POST","/v1/accounts:signInWithIdp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="http://localhost";class hr extends Xc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Wc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new hr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:UT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ei(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BT(t){const e=xs(Ss(t)).link,n=e?xs(Ss(e)).deep_link_id:null,r=xs(Ss(t)).deep_link_id;return(r?xs(Ss(r)).link:null)||r||n||e||t}class Jc{constructor(e){var n,r,s,i,o,a;const l=xs(Ss(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=$T((s=l.mode)!==null&&s!==void 0?s:null);Q(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BT(e);try{return new Jc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,n){return ni._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jc.parseLink(n);return Q(r,"argument-error"),ni._fromEmailAndCode(e,r.code,r.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ti extends Zc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ti{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hr._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Ti{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Ti{constructor(){super("twitter.com")}static credential(e,n){return hr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e){return Ii(t,"POST","/v1/accounts:signUp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ir._fromIdTokenResponse(e,r,s),o=vd(r);return new dr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vd(r);return new dr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends gn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,So.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new So(e,n,r,s)}}function fm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?So._fromErrorAndOperation(t,i,e,r):i})}async function qT(t,e,n=!1){const r=await Qr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dr._forOperation(t,"link",r)}/**
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
 */async function HT(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Qr(t,fm(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=Qc(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),dr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(t,e,n=!1){const r="signIn",s=await fm(t,r,e),i=await dr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function KT(t,e){return pm(jn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(t){const e=jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WT(t,e,n){const r=jn(t),o=await Kl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jT).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&mm(t),l}),a=await dr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function zT(t,e,n){return KT(et(t),hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mm(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(t,e){return _n(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=et(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Qr(r,GT(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function YT(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function XT(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function ds(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function JT(t){return et(t).signOut()}const ko="__sak";/**
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
 */class gm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(){const t=ut();return Yc(t)||fa(t)}const e0=1e3,t0=10;class _m extends gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ZT()&&yT(),this.fallbackToPolling=cm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_T()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,t0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},e0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_m.type="LOCAL";const n0=_m;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym extends gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ym.type="SESSION";const vm=ym;/**
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
 */function r0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await r0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class s0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=eu("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function i0(t){Qt().location.href=t}/**
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
 */function Em(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function o0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function l0(){return Em()?self:null}/**
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
 */const wm="firebaseLocalStorageDb",c0=1,Do="firebaseLocalStorage",Im="fbase_key";class Ai{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ma(t,e){return t.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function u0(){const t=indexedDB.deleteDatabase(wm);return new Ai(t).toPromise()}function Wl(){const t=indexedDB.open(wm,c0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Do,{keyPath:Im})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Do)?e(r):(r.close(),await u0(),e(await Wl()))})})}async function Ed(t,e,n){const r=ma(t,!0).put({[Im]:e,value:n});return new Ai(r).toPromise()}async function h0(t,e){const n=ma(t,!1).get(e),r=await new Ai(n).toPromise();return r===void 0?null:r.value}function wd(t,e){const n=ma(t,!0).delete(e);return new Ai(n).toPromise()}const d0=800,f0=3;class Tm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>f0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Em()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(l0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await o0(),!this.activeServiceWorker)return;this.sender=new s0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||a0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wl();return await Ed(e,ko,"1"),await wd(e,ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ed(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>h0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ma(s,!1).getAll();return new Ai(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tm.type="LOCAL";const p0=Tm;new wi(3e4,6e4);/**
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
 */function Am(t,e){return e?on(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tu extends Xc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function m0(t){return pm(t.auth,new tu(t),t.bypassAuthState)}function g0(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),HT(n,new tu(t),t.bypassAuthState)}async function _0(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),qT(n,new tu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m0;case"linkViaPopup":case"linkViaRedirect":return _0;case"reauthViaPopup":case"reauthViaRedirect":return g0;default:Pt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=new wi(2e3,1e4);async function Rm(t,e,n){const r=jn(t);QI(t,e,Zc);const s=Am(r,n);return new Zn(r,"signInViaPopup",e,s).executeNotNull()}class Zn extends bm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,y0.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="pendingRedirect",uo=new Map;class E0 extends bm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=uo.get(this.auth._key());if(!e){try{const r=await w0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}uo.set(this.auth._key(),e)}return this.bypassAuthState||uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w0(t,e){const n=A0(e),r=T0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function I0(t,e){uo.set(t._key(),e)}function T0(t){return on(t._redirectPersistence)}function A0(t){return co(v0,t.config.apiKey,t.name)}async function b0(t,e,n=!1){const r=jn(t),s=Am(r,e),o=await new E0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=10*60*1e3;class P0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=R0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Id(e))}saveEventToCache(e){this.cachedEventUids.add(Id(e)),this.lastProcessedEventTime=Date.now()}}function Id(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function C0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(t,e={}){return _n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k0=/^https?/;async function D0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await x0(t);for(const n of e)try{if(N0(n))return}catch{}Pt(t,"unauthorized-domain")}function N0(t){const e=Hl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!k0.test(n))return!1;if(S0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const O0=new wi(3e4,6e4);function Td(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function V0(t){return new Promise((e,n)=>{var r,s,i;function o(){Td(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Td(),n(Gt(t,"network-request-failed"))},timeout:O0.get()})}if(!((s=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)o();else{const a=bT("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},hm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ho=null,e})}let ho=null;function M0(t){return ho=ho||V0(t),ho}/**
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
 */const L0=new wi(5e3,15e3),F0="__/auth/iframe",U0="emulator/auth/iframe",$0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j0(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gc(e,U0):`https://${t.config.authDomain}/${F0}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=B0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ei(r).slice(1)}`}async function q0(t){const e=await M0(t),n=Qt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:j0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Qt().setTimeout(()=>{i(o)},L0.get());function l(){Qt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const H0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},K0=500,W0=600,z0="_blank",G0="http://localhost";class Ad{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Q0(t,e,n,r=K0,s=W0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},H0),{width:r.toString(),height:s.toString(),top:i,left:o}),c=ut().toLowerCase();n&&(a=sm(c)?z0:n),rm(c)&&(e=e||G0,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(gT(c)&&a!=="_self")return Y0(e||"",a),new Ad(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new Ad(h)}function Y0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const X0="__/auth/handler",J0="emulator/auth/handler",Z0=encodeURIComponent("fac");async function bd(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof Zc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ti){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Z0}=${encodeURIComponent(l)}`:"";return`${eA(t)}?${Ei(a).slice(1)}${c}`}function eA({config:t}){return t.emulator?Gc(t,J0):`https://${t.authDomain}/${X0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="webStorageSupport";class tA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vm,this._completeRedirectFn=b0,this._overrideRedirectResult=I0}async _openPopup(e,n,r,s){var i;hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await bd(e,n,r,Hl(),s);return Q0(e,o,eu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bd(e,n,r,Hl(),s);return i0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await q0(e),r=new P0(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ll,{type:ll},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ll];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cm()||Yc()||fa()}}const nA=tA;var Rd="@firebase/auth",Pd="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iA(t){Gr(new cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:um(t)},c=new TT(r,s,i,l);return kT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new cr("auth-internal",e=>{const n=jn(e.getProvider("auth").getImmediate());return(r=>new rA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(Rd,Pd,sA(t)),Vn(Rd,Pd,"esm2017")}/**
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
 */const oA=5*60,aA=qp("authIdTokenMaxAge")||oA;let Cd=null;const lA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aA)return;const s=n==null?void 0:n.token;Cd!==s&&(Cd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Yt(t=Wp()){const e=Hc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ST(t,{popupRedirectResolver:nA,persistence:[p0,n0,vm]}),r=qp("authTokenSyncURL");if(r){const i=lA(r);XT(n,i,()=>i(n.currentUser)),YT(n,o=>i(o))}const s=Bp("auth");return s&&DT(n,`http://${s}`),n}iA("Browser");const cA="/assets/hero-imagehc-D6vI5bIK.jpg",uA="/assets/hero-text--xnBRz4p.svg",fs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},hA={},dA={class:"sm:pt-[12px] w-full"},fA=g("div",{class:"maintop relative"},[g("img",{src:cA,alt:"",srcset:"",class:"w-full h-[190px] sm:h-[330px] sm:rounded-lg mainimg sm:hidden md:block md:h-full 2xl:h-[60vh]"}),g("img",{src:uA,alt:"",srcset:"",class:"absolute top-6 right-20 sm:top-8 sm:right-16 w-[35%] sm:w-[45%] md:w-[35%] md:top-[8%] md:right-[15%] 2xl:w-[27%] 2xl:right-[22%]"})],-1),pA=[fA];function mA(t,e){return M(),F("div",dA,pA)}const gA=fs(hA,[["render",mA]]),_A={class:"grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},yA=["src"],vA=["src"],EA=["src"],wA=["src"],IA=["src"],TA=["src"],AA=["src"],bA=["src"],RA=["src"],PA="https://www.themealdb.com/api/json/v1/1/lookup.php?i=53049",CA="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52893",xA="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768",SA="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767",kA="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855",DA="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52894",NA="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52877",OA="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52835",VA="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52999",MA={__name:"baserecipes",setup(t){const e=he({});fetch(`${PA}`).then(u=>u.json()).then(u=>{e.value=u});const n=he({});fetch(`${CA}`).then(u=>u.json()).then(u=>{n.value=u});const r=he({});fetch(`${xA}`).then(u=>u.json()).then(u=>{r.value=u});const s=he({});fetch(`${SA}`).then(u=>u.json()).then(u=>{s.value=u});const i=he({});fetch(`${kA}`).then(u=>u.json()).then(u=>{i.value=u});const o=he({});fetch(`${DA}`).then(u=>u.json()).then(u=>{o.value=u});const a=he({});fetch(`${NA}`).then(u=>u.json()).then(u=>{a.value=u});const l=he({});fetch(`${OA}`).then(u=>u.json()).then(u=>{l.value=u});const c=he({});return fetch(`${VA}`).then(u=>u.json()).then(u=>{c.value=u}),(u,h)=>(M(),F("section",_A,[(M(!0),F(Te,null,je(e.value.meals,d=>(M(),F("div",null,[Z(ue($e),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ye(()=>[g("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,yA),g("div",null,ie(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),F(Te,null,je(n.value.meals,d=>(M(),F("div",null,[Z(ue($e),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ye(()=>[g("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,vA),g("div",null,ie(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),F(Te,null,je(r.value.meals,d=>(M(),F("div",null,[Z(ue($e),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ye(()=>[g("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,EA),g("div",null,ie(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),F(Te,null,je(s.value.meals,d=>(M(),F("div",null,[Z(ue($e),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ye(()=>[g("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,wA),g("div",null,ie(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),F(Te,null,je(i.value.meals,d=>(M(),F("div",null,[Z(ue($e),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ye(()=>[g("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,IA),g("div",null,ie(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),F(Te,null,je(o.value.meals,d=>(M(),F("div",null,[Z(ue($e),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ye(()=>[g("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,TA),g("div",null,ie(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),F(Te,null,je(a.value.meals,d=>(M(),F("div",null,[Z(ue($e),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ye(()=>[g("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,AA),g("div",null,ie(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),F(Te,null,je(l.value.meals,d=>(M(),F("div",null,[Z(ue($e),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ye(()=>[g("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,bA),g("div",null,ie(d.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),F(Te,null,je(c.value.meals,d=>(M(),F("div",null,[Z(ue($e),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ye(()=>[g("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,RA),g("div",null,ie(d.strMeal),1)]),_:2},1032,["to"])]))),256))]))}},LA={class:"grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 xl:gap-4"},FA={class:"relative"},UA=["src"],$A={class:"flex justify-center items-center text-[14px] 2xl:text-[16px]"},BA="https://www.themealdb.com/api/json/v1/1/categories.php?",jA={__name:"categories",setup(t){const e=he({});return fetch(`${BA}`).then(n=>n.json()).then(n=>{e.value=n.categories}),he(!1),(n,r)=>{const s=ls("router-link");return M(),F("section",LA,[(M(!0),F(Te,null,je(e.value,i=>(M(),F("div",FA,[Z(s,{to:/category/+i.strCategory,class:"bg-transparent bg-[#0E1325] border border-[#394150] flex gap-3 rounded-xl duration-300 hover:bg-[#FEBD2E] text-[#E5E7EB] hover:text-black hover:font-bold overflow-hidden"},{default:ye(()=>[g("img",{src:i.strCategoryThumb,alt:"",srcset:"",class:"catimg w-[50%] sm:w-[32%] lg:w-[42%] xl:w-[63%] lg:ml-[-40px] sm:ml-[-40px] ml-[-20px] itemimg rounded-l-full"},null,8,UA),g("div",$A,ie(i.strCategory),1)]),_:2},1032,["to"])]))),256))])}}};var qA="firebase",HA="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(qA,HA,"app");var KA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,nu=nu||{},X=KA||self;function ga(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function WA(t){return Object.prototype.hasOwnProperty.call(t,cl)&&t[cl]||(t[cl]=++zA)}var cl="closure_uid_"+(1e9*Math.random()>>>0),zA=0;function GA(t,e,n){return t.call.apply(t.bind,arguments)}function QA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=GA:lt=QA,lt.apply(null,arguments)}function Gi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function qn(){this.s=this.s,this.o=this.o}var YA=0;qn.prototype.s=!1;qn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),YA!=0)&&WA(this)};qn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ru(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function xd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ga(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var XA=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};X.addEventListener("test",n,e),X.removeEventListener("test",n,e)}catch{}return t}();function ri(t){return/^[\s\xa0]*$/.test(t)}function _a(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Ht(t){return _a().indexOf(t)!=-1}function su(t){return su[" "](t),t}su[" "]=function(){};function JA(t,e){var n=Hb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ZA=Ht("Opera"),Yr=Ht("Trident")||Ht("MSIE"),xm=Ht("Edge"),zl=xm||Yr,Sm=Ht("Gecko")&&!(_a().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),eb=_a().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function km(){var t=X.document;return t?t.documentMode:void 0}var Gl;e:{var ul="",hl=function(){var t=_a();if(Sm)return/rv:([^\);]+)(\)|;)/.exec(t);if(xm)return/Edge\/([\d\.]+)/.exec(t);if(Yr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eb)return/WebKit\/(\S+)/.exec(t);if(ZA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hl&&(ul=hl?hl[1]:""),Yr){var dl=km();if(dl!=null&&dl>parseFloat(ul)){Gl=String(dl);break e}}Gl=ul}var Ql;if(X.document&&Yr){var Sd=km();Ql=Sd||parseInt(Gl,10)||void 0}else Ql=void 0;var tb=Ql;function si(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sm){e:{try{su(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&si.$.h.call(this)}}Ke(si,ct);var nb={2:"touch",3:"pen",4:"mouse"};si.prototype.h=function(){si.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ri="closure_listenable_"+(1e6*Math.random()|0),rb=0;function sb(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++rb,this.fa=this.ia=!1}function ya(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function iu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ib(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Dm(t){const e={};for(const n in t)e[n]=t[n];return e}const kd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<kd.length;i++)n=kd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function va(t){this.src=t,this.g={},this.h=0}va.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Xl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new sb(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Yl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Cm(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ya(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var ou="closure_lm_"+(1e6*Math.random()|0),fl={};function Om(t,e,n,r,s){if(r&&r.once)return Mm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Om(t,e[i],n,r,s);return null}return n=cu(n),t&&t[Ri]?t.O(e,n,bi(r)?!!r.capture:!!r,s):Vm(t,e,n,!1,r,s)}function Vm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=bi(s)?!!s.capture:!!s,a=lu(t);if(a||(t[ou]=a=new va(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=ob(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)XA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Fm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ob(){function t(n){return e.call(t.src,t.listener,n)}const e=ab;return t}function Mm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Mm(t,e[i],n,r,s);return null}return n=cu(n),t&&t[Ri]?t.P(e,n,bi(r)?!!r.capture:!!r,s):Vm(t,e,n,!0,r,s)}function Lm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Lm(t,e[i],n,r,s);else r=bi(r)?!!r.capture:!!r,n=cu(n),t&&t[Ri]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Xl(i,n,r,s),-1<n&&(ya(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=lu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xl(e,n,r,s)),(n=-1<t?e[t]:null)&&au(n))}function au(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ri])Yl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Fm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=lu(e))?(Yl(n,t),n.h==0&&(n.src=null,e[ou]=null)):ya(t)}}}function Fm(t){return t in fl?fl[t]:fl[t]="on"+t}function ab(t,e){if(t.fa)t=!0;else{e=new si(e,this);var n=t.listener,r=t.la||t.src;t.ia&&au(t),t=n.call(r,e)}return t}function lu(t){return t=t[ou],t instanceof va?t:null}var pl="__closure_events_fn_"+(1e9*Math.random()>>>0);function cu(t){return typeof t=="function"?t:(t[pl]||(t[pl]=function(e){return t.handleEvent(e)}),t[pl])}function He(){qn.call(this),this.i=new va(this),this.S=this,this.J=null}Ke(He,qn);He.prototype[Ri]=!0;He.prototype.removeEventListener=function(t,e,n,r){Lm(this,t,e,n,r)};function Xe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var s=e;e=new ct(r,t),Nm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Qi(o,r,!0,e)&&s}if(o=e.g=t,s=Qi(o,r,!0,e)&&s,s=Qi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Qi(o,r,!1,e)&&s}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ya(n[r]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Qi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Yl(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var uu=X.JSON.stringify;class lb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function cb(){var t=hu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ub{constructor(){this.h=this.g=null}add(e,n){const r=Um.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Um=new lb(()=>new hb,t=>t.reset());class hb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function db(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function fb(t){X.setTimeout(()=>{throw t},0)}let ii,oi=!1,hu=new ub,$m=()=>{const t=X.Promise.resolve(void 0);ii=()=>{t.then(pb)}};var pb=()=>{for(var t;t=cb();){try{t.h.call(t.g)}catch(n){fb(n)}var e=Um;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oi=!1};function Ea(t,e){He.call(this),this.h=t||1,this.g=e||X,this.j=lt(this.qb,this),this.l=Date.now()}Ke(Ea,He);O=Ea.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Xe(this,"tick"),this.ga&&(du(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function du(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){Ea.$.N.call(this),du(this),delete this.g};function fu(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Bm(t){t.g=fu(()=>{t.g=null,t.i&&(t.i=!1,Bm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mb extends qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bm(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ai(t){qn.call(this),this.h=t,this.g={}}Ke(ai,qn);var Dd=[];function jm(t,e,n,r){Array.isArray(n)||(n&&(Dd[0]=n.toString()),n=Dd);for(var s=0;s<n.length;s++){var i=Om(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qm(t){iu(t.g,function(e,n){this.g.hasOwnProperty(n)&&au(e)},t),t.g={}}ai.prototype.N=function(){ai.$.N.call(this),qm(this)};ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wa(){this.g=!0}wa.prototype.Ea=function(){this.g=!1};function gb(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function _b(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Sr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vb(t,n)+(r?" "+r:"")})}function yb(t,e){t.info(function(){return"TIMEOUT: "+e})}wa.prototype.info=function(){};function vb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return uu(n)}catch{return e}}var gr={},Nd=null;function Ia(){return Nd=Nd||new He}gr.Ta="serverreachability";function Hm(t){ct.call(this,gr.Ta,t)}Ke(Hm,ct);function li(t){const e=Ia();Xe(e,new Hm(e))}gr.STAT_EVENT="statevent";function Km(t,e){ct.call(this,gr.STAT_EVENT,t),this.stat=e}Ke(Km,ct);function ft(t){const e=Ia();Xe(e,new Km(e,t))}gr.Ua="timingevent";function Wm(t,e){ct.call(this,gr.Ua,t),this.size=e}Ke(Wm,ct);function Pi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var Ta={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pu(){}pu.prototype.h=null;function Od(t){return t.h||(t.h=t.i())}function Gm(){}var Ci={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mu(){ct.call(this,"d")}Ke(mu,ct);function gu(){ct.call(this,"c")}Ke(gu,ct);var Jl;function Aa(){}Ke(Aa,pu);Aa.prototype.g=function(){return new XMLHttpRequest};Aa.prototype.i=function(){return{}};Jl=new Aa;function xi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ai(this),this.P=Eb,t=zl?125:void 0,this.V=new Ea(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Qm}function Qm(){this.i=null,this.g="",this.h=!1}var Eb=45e3,Ym={},Zl={};O=xi.prototype;O.setTimeout=function(t){this.P=t};function ec(t,e,n){t.L=1,t.A=Ra(dn(e)),t.u=n,t.S=!0,Xm(t,null)}function Xm(t,e){t.G=Date.now(),Si(t),t.B=dn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),ig(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Qm,t.g=Rg(t.l,n?e:null,!t.u),0<t.O&&(t.M=new mb(lt(t.Pa,t,t.g),t.O)),jm(t.U,t.g,"readystatechange",t.nb),e=t.I?Dm(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),li(),gb(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&Kt(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const u=Kt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||zl||this.g&&(this.h.h||this.g.ja()||Fd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?li(3):li(2)),ba(this);var n=this.g.da();this.ca=n;t:if(Jm(this)){var r=Fd(this.g);t="";var s=r.length,i=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){er(this),js(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_b(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ri(a)){var c=a;break t}}c=null}if(n=c)Sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tc(this,n);else{this.i=!1,this.s=3,ft(12),er(this),js(this);break e}}this.S?(Zm(this,u,o),zl&&this.i&&u==3&&(jm(this.U,this.V,"tick",this.mb),this.V.start())):(Sr(this.j,this.m,o,null),tc(this,o)),u==4&&er(this),this.i&&!this.J&&(u==4?Ig(this.l,this):(this.i=!1,Si(this)))}else Bb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),er(this),js(this)}}}catch{}finally{}};function Jm(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Zm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=wb(t,n),s==Zl){e==4&&(t.s=4,ft(14),r=!1),Sr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ym){t.s=4,ft(15),Sr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Sr(t.j,t.m,s,null),tc(t,s);Jm(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ft(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Iu(e),e.M=!0,ft(11))):(Sr(t.j,t.m,n,"[Invalid Chunked Response]"),er(t),js(t))}O.mb=function(){if(this.g){var t=Kt(this.g),e=this.g.ja();this.o<e.length&&(ba(this),Zm(this,t,e),this.i&&t!=4&&Si(this))}};function wb(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Zl:(n=Number(e.substring(n,r)),isNaN(n)?Ym:(r+=1,r+n>e.length?Zl:(e=e.slice(r,r+n),t.o=r+n,e)))}O.cancel=function(){this.J=!0,er(this)};function Si(t){t.Y=Date.now()+t.P,eg(t,t.P)}function eg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Pi(lt(t.lb,t),e)}function ba(t){t.C&&(X.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(yb(this.j,this.B),this.L!=2&&(li(),ft(17)),er(this),this.s=2,js(this)):eg(this,this.Y-t)};function js(t){t.l.H==0||t.J||Ig(t.l,t)}function er(t){ba(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,du(t.V),qm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function tc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||nc(n.i,t))){if(!t.K&&nc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Vo(n),Sa(n);else break e;wu(n),ft(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Pi(lt(n.ib,n),6e3));if(1>=lg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else tr(n,11)}else if((t.K||n.g==t)&&Vo(n),!ri(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(_u(i,i.h),i.h=null))}if(r.F){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,Pe(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=bg(r,r.J?r.pa:null,r.Y),o.K){cg(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(ba(a),Si(a)),r.g=o}else Eg(r);0<n.j.length&&ka(n)}else c[0]!="stop"&&c[0]!="close"||tr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?tr(n,7):Eu(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}li(4)}catch{}}function Ib(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ga(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Tb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ga(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function tg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ga(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Tb(t),r=Ib(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var ng=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ab(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function or(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof or){this.h=t.h,No(this,t.j),this.s=t.s,this.g=t.g,Oo(this,t.m),this.l=t.l;var e=t.i,n=new ci;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Vd(this,n),this.o=t.o}else t&&(e=String(t).match(ng))?(this.h=!1,No(this,e[1]||"",!0),this.s=ks(e[2]||""),this.g=ks(e[3]||"",!0),Oo(this,e[4]),this.l=ks(e[5]||"",!0),Vd(this,e[6]||"",!0),this.o=ks(e[7]||"")):(this.h=!1,this.i=new ci(null,this.h))}or.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ds(e,Md,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ds(e,Md,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ds(n,n.charAt(0)=="/"?Pb:Rb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ds(n,xb)),t.join("")};function dn(t){return new or(t)}function No(t,e,n){t.j=n?ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vd(t,e,n){e instanceof ci?(t.i=e,Sb(t.i,t.h)):(n||(e=Ds(e,Cb)),t.i=new ci(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function Ra(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ds(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,bb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function bb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Md=/[#\/\?@]/g,Rb=/[#\?:]/g,Pb=/[#\?]/g,Cb=/[#\?@]/g,xb=/#/g;function ci(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Hn(t){t.g||(t.g=new Map,t.h=0,t.i&&Ab(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=ci.prototype;O.add=function(t,e){Hn(this),this.i=null,t=ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function rg(t,e){Hn(t),e=ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sg(t,e){return Hn(t),e=ps(t,e),t.g.has(e)}O.forEach=function(t,e){Hn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};O.ta=function(){Hn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};O.Z=function(t){Hn(this);let e=[];if(typeof t=="string")sg(this,t)&&(e=e.concat(this.g.get(ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Hn(this),this.i=null,t=ps(this,t),sg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ig(t,e,n){rg(t,e),0<n.length&&(t.i=null,t.g.set(ps(t,e),ru(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Sb(t,e){e&&!t.j&&(Hn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(rg(this,r),ig(this,s,n))},t)),t.j=e}var kb=class{constructor(t,e){this.g=t,this.map=e}};function og(t){this.l=t||Db,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Db=10;function ag(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function lg(t){return t.h?1:t.g?t.g.size:0}function nc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _u(t,e){t.g?t.g.add(e):t.h=e}function cg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}og.prototype.cancel=function(){if(this.i=ug(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ug(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ru(t.i)}var Nb=class{stringify(t){return X.JSON.stringify(t,void 0)}parse(t){return X.JSON.parse(t,void 0)}};function Ob(){this.g=new Nb}function Vb(t,e,n){const r=n||"";try{tg(t,function(s,i){let o=s;bi(s)&&(o=uu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Mb(t,e){const n=new wa;if(X.Image){const r=new Image;r.onload=Gi(Yi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Gi(Yi,n,r,"TestLoadImage: error",!1,e),r.onabort=Gi(Yi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gi(Yi,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Yi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Pa(t){this.l=t.ec||null,this.j=t.ob||!1}Ke(Pa,pu);Pa.prototype.g=function(){return new Ca(this.l,this.j)};Pa.prototype.i=function(t){return function(){return t}}({});function Ca(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=yu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(Ca,He);var yu=0;O=Ca.prototype;O.open=function(t,e){if(this.readyState!=yu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ui(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||X).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=yu};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function hg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ki(this):ui(this),this.readyState==3&&hg(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,ki(this))};O.Ya=function(t){this.g&&(this.response=t,ki(this))};O.ka=function(){this.g&&ki(this)};function ki(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ui(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ui(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Lb=X.JSON.parse;function Ne(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=dg,this.L=this.M=!1}Ke(Ne,He);var dg="",Fb=/^https?$/i,Ub=["POST","PUT"];O=Ne.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Jl.g(),this.C=this.u?Od(this.u):Od(Jl),this.g.onreadystatechange=lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Ld(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=X.FormData&&t instanceof X.FormData,!(0<=Cm(Ub,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{mg(this),0<this.B&&((this.L=$b(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.ua,this)):this.A=fu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ld(this,i)}};function $b(t){return Yr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof nu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function Ld(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fg(t),xa(t)}function fg(t){t.F||(t.F=!0,Xe(t,"complete"),Xe(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),xa(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xa(this,!0)),Ne.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?pg(this):this.kb())};O.kb=function(){pg(this)};function pg(t){if(t.h&&typeof nu<"u"&&(!t.C[1]||Kt(t)!=4||t.da()!=2)){if(t.v&&Kt(t)==4)fu(t.La,0,t);else if(Xe(t,"readystatechange"),Kt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(ng)[1]||null;!s&&X.self&&X.self.location&&(s=X.self.location.protocol.slice(0,-1)),r=!Fb.test(s?s.toLowerCase():"")}n=r}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var i=2<Kt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",fg(t)}}finally{xa(t)}}}}function xa(t,e){if(t.g){mg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function mg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function Kt(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Lb(e)}};function Fd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case dg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Bb(t){const e={};t=(t.g&&2<=Kt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ri(t[r]))continue;var n=db(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}ib(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gg(t){let e="";return iu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function vu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=gg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function As(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _g(t){this.Ga=0,this.j=[],this.l=new wa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=As("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=As("baseRetryDelayMs",5e3,t),this.hb=As("retryDelaySeedMs",1e4,t),this.eb=As("forwardChannelMaxRetries",2,t),this.xa=As("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new og(t&&t.concurrentRequestLimit),this.Ja=new Ob,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=_g.prototype;O.ra=8;O.H=1;function Eu(t){if(yg(t),t.H==3){var e=t.W++,n=dn(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),Di(t,n),e=new xi(t,t.l,e),e.L=2,e.A=Ra(dn(n)),n=!1,X.navigator&&X.navigator.sendBeacon)try{n=X.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&X.Image&&(new Image().src=e.A,n=!0),n||(e.g=Rg(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Si(e)}Ag(t)}function Sa(t){t.g&&(Iu(t),t.g.cancel(),t.g=null)}function yg(t){Sa(t),t.u&&(X.clearTimeout(t.u),t.u=null),Vo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function ka(t){if(!ag(t.i)&&!t.m){t.m=!0;var e=t.Na;ii||$m(),oi||(ii(),oi=!0),hu.add(e,t),t.C=0}}function jb(t,e){return lg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Pi(lt(t.Na,t,e),Tg(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new xi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Dm(i),Nm(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vg(this,s,e),n=dn(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.F&&Pe(n,"X-HTTP-Session-Id",this.F),Di(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(gg(i)))+"&"+e:this.o&&vu(n,this.o,i)),_u(this.i,s),this.bb&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),s.aa=!0,ec(s,n,null)):ec(s,n,e),this.H=2}}else this.H==3&&(t?Ud(this,t):this.j.length==0||ag(this.i)||Ud(this))};function Ud(t,e){var n;e?n=e.m:n=t.W++;const r=dn(t.I);Pe(r,"SID",t.K),Pe(r,"RID",n),Pe(r,"AID",t.V),Di(t,r),t.o&&t.s&&vu(r,t.o,t.s),n=new xi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=vg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),_u(t.i,n),ec(n,r,e)}function Di(t,e){t.na&&iu(t.na,function(n,r){Pe(e,r,n)}),t.h&&tg({},function(n,r){Pe(e,r,n)})}function vg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?lt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{Vb(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Eg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ii||$m(),oi||(ii(),oi=!0),hu.add(e,t),t.A=0}}function wu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Pi(lt(t.Ma,t),Tg(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,wg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Pi(lt(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ft(10),Sa(this),wg(this))};function Iu(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function wg(t){t.g=new xi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dn(t.wa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.V),Pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Pe(e,"TO",t.qa),Pe(e,"TYPE","xmlhttp"),Di(t,e),t.o&&t.s&&vu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ra(dn(e)),n.u=null,n.S=!0,Xm(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Sa(this),wu(this),ft(19))};function Vo(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function Ig(t,e){var n=null;if(t.g==e){Vo(t),Iu(t),t.g=null;var r=2}else if(nc(t.i,e))n=e.F,cg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ia(),Xe(r,new Wm(r,n)),ka(t)}else Eg(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&jb(t,e)||r==2&&wu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:tr(t,5);break;case 4:tr(t,10);break;case 3:tr(t,6);break;default:tr(t,2)}}}function Tg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function tr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=lt(t.pb,t);n||(n=new or("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||No(n,"https"),Ra(n)),Mb(n.toString(),r)}else ft(2);t.H=0,t.h&&t.h.za(e),Ag(t),yg(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ft(2)):(this.l.info("Failed to ping google.com"),ft(1))};function Ag(t){if(t.H=0,t.ma=[],t.h){const e=ug(t.i);(e.length!=0||t.j.length!=0)&&(xd(t.ma,e),xd(t.ma,t.j),t.i.i.length=0,ru(t.j),t.j.length=0),t.h.ya()}}function bg(t,e,n){var r=n instanceof or?dn(n):new or(n);if(r.g!="")e&&(r.g=e+"."+r.g),Oo(r,r.m);else{var s=X.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new or(null);r&&No(i,r),e&&(i.g=e),s&&Oo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Pe(r,n,e),Pe(r,"VER",t.ra),Di(t,r),r}function Rg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ne(new Pa({ob:n})):new Ne(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function Pg(){}O=Pg.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Mo(){if(Yr&&!(10<=Number(tb)))throw Error("Environmental error: no available transport.")}Mo.prototype.g=function(t,e){return new vt(t,e)};function vt(t,e){He.call(this),this.g=new _g(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ri(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ri(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}Ke(vt,He);vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ft(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=bg(t,null,t.Y),ka(t)};vt.prototype.close=function(){Eu(this.g)};vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=uu(t),t=n);e.j.push(new kb(e.fb++,t)),e.H==3&&ka(e)};vt.prototype.N=function(){this.g.h=null,delete this.j,Eu(this.g),delete this.g,vt.$.N.call(this)};function Cg(t){mu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(Cg,mu);function xg(){gu.call(this),this.status=1}Ke(xg,gu);function ms(t){this.g=t}Ke(ms,Pg);ms.prototype.Ba=function(){Xe(this.g,"a")};ms.prototype.Aa=function(t){Xe(this.g,new Cg(t))};ms.prototype.za=function(t){Xe(this.g,new xg)};ms.prototype.ya=function(){Xe(this.g,"b")};function qb(){this.blockSize=-1}function Mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ke(Mt,qb);Mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ml(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Mt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)ml(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ml(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ml(this,r),s=0;break}}this.h=s,this.i+=e};Mt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function we(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Hb={};function Tu(t){return-128<=t&&128>t?JA(t,function(e){return new we([e|0],0>e?-1:0)}):new we([t|0],0>t?-1:0)}function Wt(t){if(isNaN(t)||!isFinite(t))return Fr;if(0>t)return Ge(Wt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=rc;return new we(e,0)}function Sg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ge(Sg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Wt(Math.pow(e,8)),r=Fr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Wt(Math.pow(e,i)),r=r.R(i).add(Wt(o))):(r=r.R(n),r=r.add(Wt(o)))}return r}var rc=4294967296,Fr=Tu(0),sc=Tu(1),$d=Tu(16777216);O=we.prototype;O.ea=function(){if(Tt(this))return-Ge(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:rc+r)*e,e*=rc}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(an(this))return"0";if(Tt(this))return"-"+Ge(this).toString(t);for(var e=Wt(Math.pow(t,6)),n=this,r="";;){var s=Fo(n,e).g;n=Lo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,an(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function an(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tt(t){return t.h==-1}O.X=function(t){return t=Lo(this,t),Tt(t)?-1:an(t)?0:1};function Ge(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new we(n,~t.h).add(sc)}O.abs=function(){return Tt(this)?Ge(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new we(n,n[n.length-1]&-2147483648?-1:0)};function Lo(t,e){return t.add(Ge(e))}O.R=function(t){if(an(this)||an(t))return Fr;if(Tt(this))return Tt(t)?Ge(this).R(Ge(t)):Ge(Ge(this).R(t));if(Tt(t))return Ge(this.R(Ge(t)));if(0>this.X($d)&&0>t.X($d))return Wt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Xi(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Xi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Xi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Xi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new we(n,0)};function Xi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function bs(t,e){this.g=t,this.h=e}function Fo(t,e){if(an(e))throw Error("division by zero");if(an(t))return new bs(Fr,Fr);if(Tt(t))return e=Fo(Ge(t),e),new bs(Ge(e.g),Ge(e.h));if(Tt(e))return e=Fo(t,Ge(e)),new bs(Ge(e.g),e.h);if(30<t.g.length){if(Tt(t)||Tt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=sc,r=e;0>=r.X(t);)n=Bd(n),r=Bd(r);var s=Ar(n,1),i=Ar(r,1);for(r=Ar(r,2),n=Ar(n,2);!an(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ar(r,1),n=Ar(n,1)}return e=Lo(t,s.R(e)),new bs(s,e)}for(s=Fr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Wt(n),o=i.R(e);Tt(o)||0<o.X(t);)n-=r,i=Wt(n),o=i.R(e);an(i)&&(i=sc),s=s.add(i),t=Lo(t,o)}return new bs(s,t)}O.gb=function(t){return Fo(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new we(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new we(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new we(n,this.h^t.h)};function Bd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new we(n,t.h)}function Ar(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new we(s,t.h)}Mo.prototype.createWebChannel=Mo.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;Ta.NO_ERROR=0;Ta.TIMEOUT=8;Ta.HTTP_ERROR=6;zm.COMPLETE="complete";Gm.EventType=Ci;Ci.OPEN="a";Ci.CLOSE="b";Ci.ERROR="c";Ci.MESSAGE="d";He.prototype.listen=He.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;Mt.prototype.digest=Mt.prototype.l;Mt.prototype.reset=Mt.prototype.reset;Mt.prototype.update=Mt.prototype.j;we.prototype.add=we.prototype.add;we.prototype.multiply=we.prototype.R;we.prototype.modulo=we.prototype.gb;we.prototype.compare=we.prototype.X;we.prototype.toNumber=we.prototype.ea;we.prototype.toString=we.prototype.toString;we.prototype.getBits=we.prototype.D;we.fromNumber=Wt;we.fromString=Sg;var Kb=function(){return new Mo},Wb=function(){return Ia()},gl=Ta,zb=zm,Gb=gr,jd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ji=Gm,Qb=Ne,Yb=Mt,Ur=we;const qd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new jc("@firebase/firestore");function Rs(){return fr.logLevel}function $(t,...e){if(fr.logLevel<=ae.DEBUG){const n=e.map(Au);fr.debug(`Firestore (${gs}): ${t}`,...n)}}function fn(t,...e){if(fr.logLevel<=ae.ERROR){const n=e.map(Au);fr.error(`Firestore (${gs}): ${t}`,...n)}}function Xr(t,...e){if(fr.logLevel<=ae.WARN){const n=e.map(Au);fr.warn(`Firestore (${gs}): ${t}`,...n)}}function Au(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw fn(e),new Error(e)}function be(t,e){t||Y()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class Jb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zb{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ar,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new kg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new st(e)}}class eR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new eR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new nR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=sR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function Jr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Be(0,0))}static max(){return new J(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends hi{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const iR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends hi{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return iR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ce.fromString(e))}static fromName(e){return new H(Ce.fromString(e).popFirst(5))}static empty(){return new H(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ce(e.slice()))}}function oR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Fn(s,H.empty(),e)}function aR(t){return new Fn(t.readTime,t.key,-1)}class Fn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fn(J.min(),H.empty(),-1)}static max(){return new Fn(J.max(),H.empty(),-1)}}function lR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==cR)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(s=>s?P.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new P((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new P((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Oi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}bu._e=-1;function Da(t){return t==null}function Uo(t){return t===0&&1/t==-1/0}function hR(t){return typeof t=="number"&&Number.isInteger(t)&&!Uo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ng(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zi(this.root,e,this.comparator,!0)}}class Zi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Kd(this.data.getIterator())}getIteratorFrom(e){return new Kd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Kd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new Je(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Jr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Og extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Og("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const dR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Un(t){if(be(!!t),typeof t=="string"){let e=0;const n=dR.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pu(t){const e=t.mapValue.fields.__previous_value__;return Ru(e)?Pu(e):e}function di(t){const e=Un(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ru(t)?4:pR(t)?9007199254740991:10:Y()}function en(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Un(s.timestampValue),a=Un(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return pr(s.bytesValue).isEqual(pr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),a=Le(i.doubleValue);return o===a?Uo(o)===Uo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Jr(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Hd(o)!==Hd(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!en(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function pi(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function Zr(t,e){if(t===e)return 0;const n=mr(t),r=mr(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Le(i.integerValue||i.doubleValue),l=Le(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Wd(t.timestampValue,e.timestampValue);case 4:return Wd(di(t),di(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,o){const a=pr(i),l=pr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=de(a[c],l[c]);if(u!==0)return u}return de(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=de(Le(i.latitude),Le(o.latitude));return a!==0?a:de(Le(i.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Zr(a[c],l[c]);if(u)return u}return de(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===eo.mapValue&&o===eo.mapValue)return 0;if(i===eo.mapValue)return 1;if(o===eo.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=de(l[h],u[h]);if(d!==0)return d;const p=Zr(a[l[h]],c[u[h]]);if(p!==0)return p}return de(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Wd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Un(t),r=Un(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function es(t){return ic(t)}function ic(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Un(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ic(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ic(n.fields[o])}`;return s+"}"}(t.mapValue):Y()}function zd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function oc(t){return!!t&&"integerValue"in t}function Cu(t){return!!t&&"arrayValue"in t}function Gd(t){return!!t&&"nullValue"in t}function Qd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fo(t){return!!t&&"mapValue"in t}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=qs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){_s(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(qs(this.value))}}function Vg(t){const e=[];return _s(t.fields,(n,r)=>{const s=new Ye([n]);if(fo(r)){const i=Vg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new it(e,0,J.min(),J.min(),J.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new it(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new it(e,2,n,J.min(),J.min(),At.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,J.min(),J.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $o{constructor(e,n){this.position=e,this.inclusive=n}}function Yd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Zr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class mi{constructor(e,n="asc"){this.field=e,this.dir=n}}function mR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Mg{}class Fe extends Mg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _R(e,n,r):n==="array-contains"?new ER(e,r):n==="in"?new wR(e,r):n==="not-in"?new IR(e,r):n==="array-contains-any"?new TR(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yR(e,r):new vR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zr(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(Zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends Mg{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Lt(e,n)}matches(e){return Lg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Lg(t){return t.op==="and"}function Fg(t){return gR(t)&&Lg(t)}function gR(t){for(const e of t.filters)if(e instanceof Lt)return!1;return!0}function ac(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+es(t.value);if(Fg(t))return t.filters.map(e=>ac(e)).join(",");{const e=t.filters.map(n=>ac(n)).join(",");return`${t.op}(${e})`}}function Ug(t,e){return t instanceof Fe?function(r,s){return s instanceof Fe&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)}(t,e):t instanceof Lt?function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Ug(o,s.filters[a]),!0):!1}(t,e):void Y()}function $g(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(t):t instanceof Lt?function(n){return n.op.toString()+" {"+n.getFilters().map($g).join(" ,")+"}"}(t):"Filter"}class _R extends Fe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class yR extends Fe{constructor(e,n){super(e,"in",n),this.keys=Bg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vR extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=Bg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class ER extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cu(n)&&pi(n.arrayValue,this.value)}}class wR extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class IR extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pi(this.value.arrayValue,n)}}class TR extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pi(this.value.arrayValue,r))}}/**
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
 */class AR{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Jd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new AR(t,e,n,r,s,i,o)}function xu(t){const e=ne(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ac(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>es(r)).join(",")),e.ce=n}return e.ce}function Su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ug(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xd(t.startAt,e.startAt)&&Xd(t.endAt,e.endAt)}function lc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function bR(t,e,n,r,s,i,o,a){return new ys(t,e,n,r,s,i,o,a)}function ku(t){return new ys(t)}function Zd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jg(t){return t.collectionGroup!==null}function Hs(t){const e=ne(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Je(Ye.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new mi(i,r))}),n.has(Ye.keyField().canonicalString())||e.le.push(new mi(Ye.keyField(),r))}return e.le}function Xt(t){const e=ne(t);return e.he||(e.he=RR(e,Hs(t))),e.he}function RR(t,e){if(t.limitType==="F")return Jd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new mi(s.field,i)});const n=t.endAt?new $o(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $o(t.startAt.position,t.startAt.inclusive):null;return Jd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cc(t,e){const n=t.filters.concat([e]);return new ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function uc(t,e,n){return new ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Na(t,e){return Su(Xt(t),Xt(e))&&t.limitType===e.limitType}function qg(t){return`${xu(Xt(t))}|lt:${t.limitType}`}function Pr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>$g(s)).join(", ")}]`),Da(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>es(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>es(s)).join(",")),`Target(${r})`}(Xt(t))}; limitType=${t.limitType})`}function Oa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Hs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=Yd(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Hs(r),s)||r.endAt&&!function(o,a,l){const c=Yd(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Hs(r),s))}(t,e)}function PR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hg(t){return(e,n)=>{let r=!1;for(const s of Hs(t)){const i=CR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function CR(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Zr(l,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ng(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new De(H.comparator);function pn(){return xR}const Kg=new De(H.comparator);function Ns(...t){let e=Kg;for(const n of t)e=e.insert(n.key,n);return e}function Wg(t){let e=Kg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function nr(){return Ks()}function zg(){return Ks()}function Ks(){return new vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const SR=new De(H.comparator),kR=new Je(H.comparator);function oe(...t){let e=kR;for(const n of t)e=e.add(n);return e}const DR=new Je(de);function NR(){return DR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uo(e)?"-0":e}}function Qg(t){return{integerValue:""+t}}function OR(t,e){return hR(e)?Qg(e):Gg(t,e)}/**
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
 */class Va{constructor(){this._=void 0}}function VR(t,e,n){return t instanceof Bo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ru(i)&&(i=Pu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof gi?Xg(t,e):t instanceof _i?Jg(t,e):function(s,i){const o=Yg(s,i),a=ef(o)+ef(s.Ie);return oc(o)&&oc(s.Ie)?Qg(a):Gg(s.serializer,a)}(t,e)}function MR(t,e,n){return t instanceof gi?Xg(t,e):t instanceof _i?Jg(t,e):n}function Yg(t,e){return t instanceof jo?function(r){return oc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Bo extends Va{}class gi extends Va{constructor(e){super(),this.elements=e}}function Xg(t,e){const n=Zg(e);for(const r of t.elements)n.some(s=>en(s,r))||n.push(r);return{arrayValue:{values:n}}}class _i extends Va{constructor(e){super(),this.elements=e}}function Jg(t,e){let n=Zg(e);for(const r of t.elements)n=n.filter(s=>!en(s,r));return{arrayValue:{values:n}}}class jo extends Va{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function ef(t){return Le(t.integerValue||t.doubleValue)}function Zg(t){return Cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function LR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof gi&&s instanceof gi||r instanceof _i&&s instanceof _i?Jr(r.elements,s.elements,en):r instanceof jo&&s instanceof jo?en(r.Ie,s.Ie):r instanceof Bo&&s instanceof Bo}(t.transform,e.transform)}class FR{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ma{}function e_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new n_(t.key,cn.none()):new Vi(t.key,t.data,cn.none());{const n=t.data,r=At.empty();let s=new Je(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _r(t.key,r,new Dt(s.toArray()),cn.none())}}function UR(t,e,n){t instanceof Vi?function(s,i,o){const a=s.value.clone(),l=nf(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(s,i,o){if(!po(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=nf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(t_(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ws(t,e,n,r){return t instanceof Vi?function(i,o,a,l){if(!po(i.precondition,o))return a;const c=i.value.clone(),u=rf(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof _r?function(i,o,a,l){if(!po(i.precondition,o))return a;const c=rf(i.fieldTransforms,l,o),u=o.data;return u.setAll(t_(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return po(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function $R(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Yg(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function tf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Jr(r,s,(i,o)=>LR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vi extends Ma{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _r extends Ma{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function t_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nf(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,MR(o,a,n[s]))}return r}function rf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,VR(i,o,e))}return r}class n_ extends Ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BR extends Ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&UR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=e_(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Jr(this.mutations,e.mutations,(n,r)=>tf(n,r))&&Jr(this.baseMutations,e.baseMutations,(n,r)=>tf(n,r))}}class Du{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return SR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Du(e,n,r,s)}}/**
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
 */class qR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class HR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,le;function KR(t){switch(t){default:return Y();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function r_(t){if(t===void 0)return fn("GRPC error has no .code"),w.UNKNOWN;switch(t){case Me.OK:return w.OK;case Me.CANCELLED:return w.CANCELLED;case Me.UNKNOWN:return w.UNKNOWN;case Me.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Me.INTERNAL:return w.INTERNAL;case Me.UNAVAILABLE:return w.UNAVAILABLE;case Me.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Me.NOT_FOUND:return w.NOT_FOUND;case Me.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Me.ABORTED:return w.ABORTED;case Me.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Me.DATA_LOSS:return w.DATA_LOSS;default:return Y()}}(le=Me||(Me={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function WR(){return new TextEncoder}/**
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
 */const zR=new Ur([4294967295,4294967295],0);function sf(t){const e=WR().encode(t),n=new Yb;return n.update(e),new Uint8Array(n.digest())}function of(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([s,i],0)]}class Nu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Os(`Invalid padding: ${n}`);if(r<0)throw new Os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Os(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ur.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Ur.fromNumber(r)));return s.compare(zR)===1&&(s=new Ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=sf(e),[r,s]=of(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=sf(e),[r,s]=of(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Mi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new La(J.min(),s,new De(de),pn(),oe())}}class Mi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mi(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class s_{constructor(e,n){this.targetId=e,this.fe=n}}class i_{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class af{constructor(){this.ge=0,this.pe=cf(),this.ye=ht.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=oe(),n=oe(),r=oe();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new Mi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=cf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,be(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class GR{constructor(e){this.Le=e,this.ke=new Map,this.qe=pn(),this.Qe=lf(),this.Ke=new De(de)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(lc(i))if(r===0){const o=new H(i.path);this.We(n,o,it.newNoDocument(o,J.min()))}else be(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=pr(r).toUint8Array()}catch(l){if(l instanceof Og)return Xr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Nu(o,s,i)}catch(l){return Xr(l instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&lc(a.target)){const l=new H(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,it.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=oe();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new La(e,n,this.Ke,this.qe,r);return this.qe=pn(),this.Qe=lf(),this.Ke=new De(de),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new af,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Je(de),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new af),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function lf(){return new De(H.comparator)}function cf(){return new De(H.comparator)}const QR={asc:"ASCENDING",desc:"DESCENDING"},YR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XR={and:"AND",or:"OR"};class JR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hc(t,e){return t.useProto3Json||Da(e)?e:{value:e}}function qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function o_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZR(t,e){return qo(t,e.toTimestamp())}function Jt(t){return be(!!t),J.fromTimestamp(function(n){const r=Un(n);return new Be(r.seconds,r.nanos)}(t))}function Ou(t,e){return function(r){return new Ce(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function a_(t){const e=Ce.fromString(t);return be(h_(e)),e}function dc(t,e){return Ou(t.databaseId,e.path)}function _l(t,e){const n=a_(e);if(n.get(1)!==t.databaseId.projectId)throw new U(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(l_(n))}function fc(t,e){return Ou(t.databaseId,e)}function eP(t){const e=a_(t);return e.length===4?Ce.emptyPath():l_(e)}function pc(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function l_(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uf(t,e,n){return{name:dc(t,e),fields:n.value.mapValue.fields}}function tP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(be(u===void 0||typeof u=="string"),ht.fromBase64String(u||"")):(be(u===void 0||u instanceof Uint8Array),ht.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?w.UNKNOWN:r_(c.code);return new U(u,c.message||"")}(o);n=new i_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_l(t,r.document.name),i=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):J.min(),a=new At({mapValue:{fields:r.document.fields}}),l=it.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new mo(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_l(t,r.document),i=r.readTime?Jt(r.readTime):J.min(),o=it.newNoDocument(s,i),a=r.removedTargetIds||[];n=new mo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_l(t,r.document),i=r.removedTargetIds||[];n=new mo([],i,s,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new HR(s,i),a=r.targetId;n=new s_(a,o)}}return n}function nP(t,e){let n;if(e instanceof Vi)n={update:uf(t,e.key,e.value)};else if(e instanceof n_)n={delete:dc(t,e.key)};else if(e instanceof _r)n={update:uf(t,e.key,e.data),updateMask:hP(e.fieldMask)};else{if(!(e instanceof BR))return Y();n={verify:dc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Bo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _i)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof jo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ZR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function rP(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Jt(s.updateTime):Jt(i);return o.isEqual(J.min())&&(o=Jt(i)),new FR(o,s.transformResults||[])}(n,e))):[]}function sP(t,e){return{documents:[fc(t,e.path)]}}function iP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=fc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return u_(Lt.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Cr(h.field),direction:lP(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=hc(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function oP(t){let e=eP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=c_(h);return d instanceof Lt&&Fg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new mi(xr(v.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Da(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new $o(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new $o(p,d)}(n.endAt)),bR(e,s,o,i,a,"F",l,c)}function aP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function c_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xr(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xr(n.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xr(n.unaryFilter.field);return Fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xr(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Lt.create(n.compositeFilter.filters.map(r=>c_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function lP(t){return QR[t]}function cP(t){return YR[t]}function uP(t){return XR[t]}function Cr(t){return{fieldPath:t.canonicalString()}}function xr(t){return Ye.fromServerFormat(t.fieldPath)}function u_(t){return t instanceof Fe?function(n){if(n.op==="=="){if(Qd(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NAN"}};if(Gd(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qd(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NOT_NAN"}};if(Gd(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cr(n.field),op:cP(n.op),value:n.value}}}(t):t instanceof Lt?function(n){const r=n.getFilters().map(s=>u_(s));return r.length===1?r[0]:{compositeFilter:{op:uP(n.op),filters:r}}}(t):Y()}function hP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function h_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,r,s,i=J.min(),o=J.min(),a=ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.ut=e}}function fP(t){const e=oP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uc(e,e.limit,"L"):e}/**
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
 */class pP{constructor(){this.on=new mP}addToCollectionParentIndex(e,n){return this.on.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Fn.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Fn.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class mP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ts(0)}static Nn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.changes=new vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _P{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ws(r.mutation,s,Dt.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=nr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ns();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=pn();const o=Ks(),a=function(){return Ks()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof _r)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ws(u.mutation,c,u.mutation.getFieldMask(),Be.now())):o.set(c.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new _P(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ks();let s=new De((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Dt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||oe()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=zg();u.forEach(d=>{if(!i.has(d)){const p=e_(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):P.resolve(nr());let a=-1,l=i;return o.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,oe())).next(u=>({batchId:a,changes:Wg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Ns();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ns();return this.indexManager.getCollectionParents(e,i).next(a=>P.forEach(a,l=>{const c=function(h,d){return new ys(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,it.newInvalidDocument(u)))});let a=Ns();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Ws(u.mutation,c,Dt.empty(),Be.now()),Oa(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Jt(s.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:fP(s.bundledQuery),readTime:Jt(s.readTime)}}(n)),P.resolve()}}/**
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
 */class EP{constructor(){this.overlays=new De(H.comparator),this.lr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=nr();return P.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const s=nr(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new De((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=nr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=nr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return P.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qR(n,r));let i=this.lr.get(n);i===void 0&&(i=oe(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.hr=new Je(qe.Pr),this.Ir=new Je(qe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new qe(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new H(new Ce([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new H(new Ce([])),r=new qe(n,e),s=new qe(n,e+1);let i=oe();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return H.comparator(e.key,n.key)||de(e.gr,n.gr)}static Tr(e,n){return de(e.gr,n.gr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Je(qe.Pr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jR(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(de);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),P.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new qe(new H(i),0);let a=new Je(de);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),P.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return P.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new qe(n,0),s=this.yr.firstAfterOrEqual(r);return P.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.Cr=e,this.docs=function(){return new De(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=pn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=pn();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||lR(aR(u),r)<=0||(s.has(u.key)||Oa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y()}vr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TP(this)}getSize(e){return P.resolve(this.size)}}class TP extends gP{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.persistence=e,this.Fr=new vs(n=>xu(n),Su),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Vu,this.targetCount=0,this.Nr=ts.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),P.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.kn(n),P.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,n){this.Br={},this.overlays={},this.Lr=new bu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new AP(this),this.indexManager=new pP,this.remoteDocumentCache=function(s){return new IP(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new dP(n),this.Kr=new vP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new wP(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new RP(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class RP extends uR{constructor(e){super(),this.currentSequenceNumber=e}}class Mu{constructor(e){this.persistence=e,this.Gr=new Vu,this.zr=null}static jr(e){return new Mu(e)}get Hr(){if(this.zr)return this.zr;throw Y()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,r=>{const s=H.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lu(e,n.fromCache,r,s)}}/**
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
 */class PP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class CP{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new PP;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Rs()<=ae.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Pr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),P.resolve()):(Rs()<=ae.DEBUG&&$("QueryEngine","Query:",Pr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Rs()<=ae.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Pr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):P.resolve())}zi(e,n){if(Zd(n))return P.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=uc(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,uc(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,r,s){return Zd(n)||s.isEqual(J.min())?P.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?P.resolve(null):(Rs()<=ae.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pr(n)),this.Xi(e,o,n,oR(s,-1)).next(a=>a))})}Yi(e,n){let r=new Je(Hg(e));return n.forEach((s,i)=>{Oa(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Rs()<=ae.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Pr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Fn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new De(de),this.ns=new vs(i=>xu(i),Su),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yP(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function SP(t,e,n,r){return new xP(t,e,n,r)}async function d_(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=oe();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function kP(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let p=P.resolve();return d.forEach(v=>{p=p.next(()=>u.getEntry(l,v)).next(T=>{const A=c.docVersions.get(v);be(A!==null),T.version.compareTo(A)<0&&(h.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),u.addEntry(T)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function f_(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function DP(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ht.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(T,A,x){return T.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(d,p,u)&&a.push(n.qr.updateTargetData(i,p))});let l=pn(),c=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(NP(i,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(J.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=s,i))}function NP(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=pn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function OP(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VP(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Cn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function mc(t,e,n){const r=ne(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Oi(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function hf(t,e,n){const r=ne(t);let s=J.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=ne(l),d=h.ns.get(u);return d!==void 0?P.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(r,o,Xt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:oe())).next(a=>(MP(r,PR(e),a),{documents:a,ls:i})))}function MP(t,e,n){let r=t.rs.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class df{constructor(){this.activeTargetIds=NR()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LP{constructor(){this.eo=new df,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new df,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FP{ro(e){}shutdown(){}}/**
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
 */class ff{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let to=null;function yl(){return to===null?to=function(){return 268435456+Math.round(2147483648*Math.random())}():to++,"0x"+to.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class BP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=yl(),l=this.So(n,r);$("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,s).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Xr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=UP[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=yl();return new Promise((o,a)=>{const l=new Qb;l.setWithCredentials(!0),l.listenOnce(zb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case gl.NO_ERROR:const u=l.getResponseJson();$(rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case gl.TIMEOUT:$(rt,`RPC '${e}' ${i} timed out`),a(new U(w.DEADLINE_EXCEEDED,"Request time out"));break;case gl.HTTP_ERROR:const h=l.getStatus();if($(rt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(A){const x=A.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(x)>=0?x:w.UNKNOWN}(p.status);a(new U(v,p.message))}else a(new U(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(w.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(rt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);$(rt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}vo(e,n,r){const s=yl(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Kb(),a=Wb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");$(rt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,p=!1;const v=new $P({co:A=>{p?$(rt,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(d||($(rt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),$(rt,`RPC '${e}' stream ${s} sending:`,A),h.send(A))},lo:()=>h.close()}),T=(A,x,k)=>{A.listen(x,q=>{try{k(q)}catch(b){setTimeout(()=>{throw b},0)}})};return T(h,Ji.EventType.OPEN,()=>{p||$(rt,`RPC '${e}' stream ${s} transport opened.`)}),T(h,Ji.EventType.CLOSE,()=>{p||(p=!0,$(rt,`RPC '${e}' stream ${s} transport closed`),v.Ro())}),T(h,Ji.EventType.ERROR,A=>{p||(p=!0,Xr(rt,`RPC '${e}' stream ${s} transport errored:`,A),v.Ro(new U(w.UNAVAILABLE,"The operation could not be completed")))}),T(h,Ji.EventType.MESSAGE,A=>{var x;if(!p){const k=A.data[0];be(!!k);const q=k,b=q.error||((x=q[0])===null||x===void 0?void 0:x.error);if(b){$(rt,`RPC '${e}' stream ${s} received error:`,b);const K=b.status;let re=function(xe){const ke=Me[xe];if(ke!==void 0)return r_(ke)}(K),pe=b.message;re===void 0&&(re=w.INTERNAL,pe="Unknown error status: "+K+" with message "+b.message),p=!0,v.Ro(new U(re,pe)),h.close()}else $(rt,`RPC '${e}' stream ${s} received:`,k),v.Vo(k)}}),T(a,Gb.STAT_EVENT,A=>{A.stat===jd.PROXY?$(rt,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===jd.NOPROXY&&$(rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.Ao()},0),v}}function vl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t){return new JR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new p_(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(fn(n.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new U(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jP extends m_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=tP(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Jt(o.readTime):J.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=pc(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=lc(l)?{documents:sP(i,l)}:{query:iP(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=o_(i,o.resumeToken);const c=hc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=qo(i,o.snapshotVersion.toTimestamp());const c=hc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=aP(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=pc(this.serializer),n.removeTarget=e,this.e_(n)}}class qP extends m_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=rP(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.I_(r,n)}return be(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=pc(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nP(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new U(w.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(w.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(w.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class KP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(fn(n),this.f_=!1):$("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{yr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ne(l);c.C_.add(4),await Li(c),c.M_.set("Unknown"),c.C_.delete(4),await Ua(c)}(this))})}),this.M_=new KP(r,s)}}async function Ua(t){if(yr(t))for(const e of t.v_)await e(!0)}async function Li(t){for(const e of t.v_)await e(!1)}function g_(t,e){const n=ne(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),$u(n)?Uu(n):Es(n).Ho()&&Fu(n,e))}function __(t,e){const n=ne(t),r=Es(n);n.D_.delete(e),r.Ho()&&y_(n,e),n.D_.size===0&&(r.Ho()?r.Zo():yr(n)&&n.M_.set("Unknown"))}function Fu(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Es(t).u_(e)}function y_(t,e){t.x_.Oe(e),Es(t).c_(e)}function Uu(t){t.x_=new GR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Es(t).start(),t.M_.g_()}function $u(t){return yr(t)&&!Es(t).jo()&&t.D_.size>0}function yr(t){return ne(t).C_.size===0}function v_(t){t.x_=void 0}async function zP(t){t.D_.forEach((e,n)=>{Fu(t,e)})}async function GP(t,e){v_(t),$u(t)?(t.M_.w_(e),Uu(t)):t.M_.set("Unknown")}async function QP(t,e,n){if(t.M_.set("Online"),e instanceof i_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ho(t,r)}else if(e instanceof mo?t.x_.$e(e):e instanceof s_?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(J.min()))try{const r=await f_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.D_.get(l);if(!u)return;i.D_.set(l,u.withResumeToken(ht.EMPTY_BYTE_STRING,u.snapshotVersion)),y_(i,l);const h=new Cn(u.target,l,c,u.sequenceNumber);Fu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Ho(t,r)}}async function Ho(t,e,n){if(!Oi(e))throw e;t.C_.add(1),await Li(t),t.M_.set("Offline"),n||(n=()=>f_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Ua(t)})}function E_(t,e){return e().catch(n=>Ho(t,n,e))}async function $a(t){const e=ne(t),n=$n(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;YP(e);)try{const s=await OP(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,XP(e,s)}catch(s){await Ho(e,s)}w_(e)&&I_(e)}function YP(t){return yr(t)&&t.b_.length<10}function XP(t,e){t.b_.push(e);const n=$n(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function w_(t){return yr(t)&&!$n(t).jo()&&t.b_.length>0}function I_(t){$n(t).start()}async function JP(t){$n(t).E_()}async function ZP(t){const e=$n(t);for(const n of t.b_)e.P_(n.mutations)}async function eC(t,e,n){const r=t.b_.shift(),s=Du.from(r,e,n);await E_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await $a(t)}async function tC(t,e){e&&$n(t).h_&&await async function(r,s){if(function(o){return KR(o)&&o!==w.ABORTED}(s.code)){const i=r.b_.shift();$n(r).Yo(),await E_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $a(r)}}(t,e),w_(t)&&I_(t)}async function pf(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=yr(n);n.C_.add(3),await Li(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Ua(n)}async function nC(t,e){const n=ne(t);e?(n.C_.delete(2),await Ua(n)):e||(n.C_.add(2),await Li(n),n.M_.set("Unknown"))}function Es(t){return t.O_||(t.O_=function(n,r,s){const i=ne(n);return i.A_(),new jP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:zP.bind(null,t),Io:GP.bind(null,t),a_:QP.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),$u(t)?Uu(t):t.M_.set("Unknown")):(await t.O_.stop(),v_(t))})),t.O_}function $n(t){return t.N_||(t.N_=function(n,r,s){const i=ne(n);return i.A_(),new qP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:JP.bind(null,t),Io:tC.bind(null,t),T_:ZP.bind(null,t),I_:eC.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await $a(t)):(await t.N_.stop(),t.b_.length>0&&($("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Bu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ju(t,e){if(fn("AsyncQueue",`${e}: ${t}`),Oi(t))return new U(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new $r(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $r)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $r;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.B_=new De(H.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Y():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ns(e,n,$r.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.k_=void 0,this.listeners=[]}}class sC{constructor(){this.queries=new vs(e=>qg(e),Na),this.onlineState="Unknown",this.q_=new Set}}async function iC(t,e){const n=ne(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new rC),s)try{i.k_=await n.onListen(r)}catch(o){const a=ju(o,`Initialization of query '${Pr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&qu(n)}async function oC(t,e){const n=ne(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function aC(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&qu(n)}function lC(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function qu(t){t.q_.forEach(e=>{e.next()})}class cC{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.key=e}}class A_{constructor(e){this.key=e}}class uC{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=oe(),this.mutatedKeys=oe(),this._a=Hg(e),this.aa=new $r(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new mf,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Oa(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let A=!1;d&&p?d.data.isEqual(p.data)?v!==T&&(r.track({type:3,doc:p}),A=!0):this.ha(d,p)||(r.track({type:2,doc:p}),A=!0,(l&&this._a(p,l)>0||c&&this._a(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),A=!0):d&&!p&&(r.track({type:1,doc:d}),A=!0,(l||c)&&(a=!0)),A&&(p?(o=o.add(p),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(p,v){const T=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return T(p)-T(v)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],l=this.oa.size===0&&this.current&&!s?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new ns(this.query,e.aa,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new mf,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=oe(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new A_(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new T_(r))}),n}da(e){this.ia=e.ls,this.oa=oe();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ns.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class hC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class dC{constructor(e){this.key=e,this.Ra=!1}}class fC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new vs(a=>qg(a),Na),this.fa=new Map,this.ga=new Set,this.pa=new De(H.comparator),this.ya=new Map,this.wa=new Vu,this.Sa={},this.ba=new Map,this.Da=ts.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function pC(t,e){const n=AC(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await VP(n.localStore,Xt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await mC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&g_(n.remoteStore,o)}return s}async function mC(t,e,n,r,s){t.va=(h,d,p)=>async function(T,A,x,k){let q=A.view.ca(x);q.Zi&&(q=await hf(T.localStore,A.query,!1).then(({documents:pe})=>A.view.ca(pe,q)));const b=k&&k.targetChanges.get(A.targetId),K=k&&k.targetMismatches.get(A.targetId)!=null,re=A.view.applyChanges(q,T.isPrimaryClient,b,K);return _f(T,A.targetId,re.Ta),re.snapshot}(t,h,d,p);const i=await hf(t.localStore,e,!0),o=new uC(e,i.ls),a=o.ca(i.documents),l=Mi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);_f(t,n,c.Ta);const u=new hC(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function gC(t,e){const n=ne(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Na(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await mc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),__(n.remoteStore,r.targetId),gc(n,r.targetId)}).catch(Ni)):(gc(n,r.targetId),await mc(n.localStore,r.targetId,!0))}async function _C(t,e,n){const r=bC(t);try{const s=await function(o,a){const l=ne(o),c=Be.now(),u=a.reduce((p,v)=>p.add(v.key),oe());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=pn(),T=oe();return l.ss.getEntries(p,u).next(A=>{v=A,v.forEach((x,k)=>{k.isValidDocument()||(T=T.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(A=>{h=A;const x=[];for(const k of a){const q=$R(k,h.get(k.key).overlayedDocument);q!=null&&x.push(new _r(k.key,q,Vg(q.value.mapValue),cn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,x,a)}).next(A=>{d=A;const x=A.applyToLocalDocumentSet(h,T);return l.documentOverlayCache.saveOverlays(p,A.batchId,x)})}).then(()=>({batchId:d.batchId,changes:Wg(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new De(de)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(r,s.batchId,n),await Fi(r,s.changes),await $a(r.remoteStore)}catch(s){const i=ju(s,"Failed to persist write");n.reject(i)}}async function b_(t,e){const n=ne(t);try{const r=await DP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?be(o.Ra):s.removedDocuments.size>0&&(be(o.Ra),o.Ra=!1))}),await Fi(n,r,e)}catch(r){await Ni(r)}}function gf(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ne(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&qu(l)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yC(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new De(H.comparator);o=o.insert(i,it.newNoDocument(i,J.min()));const a=oe().add(i),l=new La(J.min(),new Map,new De(de),o,a);await b_(r,l),r.pa=r.pa.remove(i),r.ya.delete(e),Hu(r)}else await mc(r.localStore,e,!1).then(()=>gc(r,e,n)).catch(Ni)}async function vC(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await kP(n.localStore,e);P_(n,r,null),R_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fi(n,s)}catch(s){await Ni(s)}}async function EC(t,e,n){const r=ne(t);try{const s=await function(o,a){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(be(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);P_(r,e,n),R_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fi(r,s)}catch(s){await Ni(s)}}function R_(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function P_(t,e,n){const r=ne(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||C_(t,r)})}function C_(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(__(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Hu(t))}function _f(t,e,n){for(const r of n)r instanceof T_?(t.wa.addReference(r.key,e),wC(t,r)):r instanceof A_?($("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||C_(t,r.key)):Y()}function wC(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||($("SyncEngine","New document in limbo: "+n),t.ga.add(r),Hu(t))}function Hu(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new H(Ce.fromString(e)),r=t.Da.next();t.ya.set(r,new dC(n)),t.pa=t.pa.insert(n,r),g_(t.remoteStore,new Cn(Xt(ku(n.path)),r,"TargetPurposeLimboResolution",bu._e))}}async function Fi(t,e,n){const r=ne(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Lu.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(l,c){const u=ne(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(c,d=>P.forEach(d.ki,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>P.forEach(d.qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Oi(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.ts.get(d),v=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(v);u.ts=u.ts.insert(d,T)}}}(r.localStore,i))}async function IC(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await d_(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new U(w.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fi(n,r._s)}}function TC(t,e){const n=ne(t),r=n.ya.get(e);if(r&&r.Ra)return oe().add(r.key);{let s=oe();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function AC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=b_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yC.bind(null,e),e.Va.a_=aC.bind(null,e.eventManager),e.Va.Fa=lC.bind(null,e.eventManager),e}function bC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EC.bind(null,e),e}class yf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return SP(this.persistence,new CP,e.initialUser,this.serializer)}createPersistence(e){return new bP(Mu.jr,this.serializer)}createSharedClientState(e){return new LP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IC.bind(null,this.syncEngine),await nC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sC}()}createDatastore(e){const n=Fa(e.databaseInfo.databaseId),r=function(i){return new BP(i)}(e.databaseInfo);return function(i,o,a,l){return new HP(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new WP(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>gf(this.syncEngine,n,0),function(){return ff.D()?new ff:new FP}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new fC(s,i,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ne(n);$("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Li(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class PC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):fn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=Dg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ju(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function El(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await d_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SC(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>pf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>pf(e.remoteStore,i)),t._onlineComponents=e}function xC(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function SC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await El(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!xC(n))throw n;Xr("Error using user provided cache. Falling back to memory cache: "+n),await El(t,new yf)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await El(t,new yf);return t._offlineComponents}async function x_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await vf(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await vf(t,new RC))),t._onlineComponents}function kC(t){return x_(t).then(e=>e.syncEngine)}async function Ef(t){const e=await x_(t),n=e.eventManager;return n.onListen=pC.bind(null,e.syncEngine),n.onUnlisten=gC.bind(null,e.syncEngine),n}/**
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
 */function S_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t,e,n){if(!n)throw new U(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DC(t,e,n,r){if(e===!0&&r===!0)throw new U(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function If(t){if(!H.isDocumentKey(t))throw new U(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tf(t){if(H.isDocumentKey(t))throw new U(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ba(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function zs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ba(t);throw new U(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=S_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ja{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Af(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xb;switch(r.type){case"firstParty":return new tR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wf.get(n);r&&($("ComponentProvider","Removing Datastore"),wf.delete(n),r.terminate())}(this),Promise.resolve()}}function NC(t,e,n,r={}){var s;const i=(t=zs(t,ja))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Xr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=st.MOCK_USER;else{a=Cw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new st(c)}t._authCredentials=new Jb(new kg(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vr(this.firestore,e,this._query)}}class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Mn extends vr{constructor(e,n,r){super(e,n,ku(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new H(e))}withConverter(e){return new Mn(this.firestore,e,this._path)}}function Ko(t,e,...n){if(t=et(t),k_("collection","path",e),t instanceof ja){const r=Ce.fromString(e,...n);return Tf(r),new Mn(t,null,r)}{if(!(t instanceof yt||t instanceof Mn))throw new U(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Tf(r),new Mn(t.firestore,null,r)}}function OC(t,e,...n){if(t=et(t),arguments.length===1&&(e=Dg.newId()),k_("doc","path",e),t instanceof ja){const r=Ce.fromString(e,...n);return If(r),new yt(t,null,new H(r))}{if(!(t instanceof yt||t instanceof Mn))throw new U(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return If(r),new yt(t.firestore,t instanceof Mn?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new p_(this,"async_queue_retry"),this.iu=()=>{const n=vl();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=vl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=vl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new ar;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Oi(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Bu.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&Y()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function bf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Wo extends ja{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new VC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||N_(this),this._firestoreClient.terminate()}}function MC(t,e){const n=typeof t=="object"?t:Wp(),r=typeof t=="string"?t:e||"(default)",s=Hc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Rw("firestore");i&&NC(s,...i)}return s}function D_(t){return t._firestoreClient||N_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function N_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new fR(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,S_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new CC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(ht.fromBase64String(e))}catch(n){throw new U(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=/^__.*__$/;class FC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vi(e,this.data,n,this.fieldTransforms)}}function V_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class zu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new zu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return zo(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(V_(this.Iu)&&LC.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class UC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fa(e)}pu(e,n,r,s=!1){return new zu({Iu:e,methodName:n,gu:r,path:Ye.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function M_(t){const e=t._freezeSettings(),n=Fa(t._databaseId);return new UC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $C(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);U_("Data must be an object, but it was:",o,r);const a=L_(r,o);let l,c;if(i.merge)l=new Dt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=jC(e,h,n);if(!o.contains(d))throw new U(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);HC(u,d)||u.push(d)}l=new Dt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new FC(new At(a),l,c)}function BC(t,e,n,r=!1){return Gu(n,t.pu(r?4:3,e))}function Gu(t,e){if(F_(t=et(t)))return U_("Unsupported field value:",e,t),L_(t,e);if(t instanceof O_)return function(r,s){if(!V_(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Gu(a,s.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:qo(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qo(s.serializer,i)}}if(r instanceof Wu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rs)return{bytesValue:o_(s.serializer,r._byteString)};if(r instanceof yt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ou(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${Ba(r)}`)}(t,e)}function L_(t,e){const n={};return Ng(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(t,(r,s)=>{const i=Gu(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function F_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Wu||t instanceof rs||t instanceof yt||t instanceof O_)}function U_(t,e,n){if(!F_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ba(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function jC(t,e,n){if((e=et(e))instanceof Ku)return e._internalPath;if(typeof e=="string")return $_(t,e);throw zo("Field path arguments must be of type string or ",t,!1,void 0,n)}const qC=new RegExp("[~\\*/\\[\\]]");function $_(t,e,n){if(e.search(qC)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ku(...e.split("."))._internalPath}catch{throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new U(w.INVALID_ARGUMENT,a+t+l)}function HC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KC extends B_{data(){return super.data()}}function Qu(t,e){return typeof e=="string"?$_(t,e):e instanceof Ku?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yu{}class j_ extends Yu{}function Xu(t,e,...n){let r=[];e instanceof Yu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Zu).length,a=i.filter(l=>l instanceof Ju).length;if(o>1||o>0&&a>0)throw new U(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ju extends j_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ju(e,n,r)}_apply(e){const n=this._parse(e);return H_(e._query,n),new vr(e.firestore,e.converter,cc(e._query,n))}_parse(e){const n=M_(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Pf(h,u);const p=[];for(const v of h)p.push(Rf(l,i,v));d={arrayValue:{values:p}}}else d=Rf(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Pf(h,u),d=BC(a,o,h,u==="in"||u==="not-in");return Fe.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Zu extends Yu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Lt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)H_(o,l),o=cc(o,l)}(e._query,n),new vr(e.firestore,e.converter,cc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class eh extends j_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new eh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new U(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new mi(i,o)}(e._query,this._field,this._direction);return new vr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ys(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function q_(t,e="asc"){const n=e,r=Qu("orderBy",t);return eh._create(r,n)}function Rf(t,e,n){if(typeof(n=et(n))=="string"){if(n==="")throw new U(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jg(e)&&n.indexOf("/")!==-1)throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!H.isDocumentKey(r))throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zd(t,new H(r))}if(n instanceof yt)return zd(t,n._key);throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ba(n)}.`)}function Pf(t,e){if(!Array.isArray(t)||t.length===0)throw new U(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function H_(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class zC{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _s(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Wu(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=Un(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);be(h_(r));const s=new fi(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class K_ extends B_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class go extends K_{data(e={}){return super.data(e)}}class QC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new go(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new go(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new go(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:YC(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class W_ extends zC{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function XC(t,e){const n=zs(t.firestore,Wo),r=OC(t),s=GC(t.converter,e);return JC(n,[$C(M_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,cn.exists(!1))]).then(()=>r)}function th(t,...e){var n,r,s;t=et(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(bf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof yt)c=zs(t.firestore,Wo),u=ku(t._key.path),l={next:h=>{e[o]&&e[o](ZC(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=zs(t,vr);c=zs(h.firestore,Wo),u=h._query;const d=new W_(c);l={next:p=>{e[o]&&e[o](new QC(c,d,h,p))},error:e[o+1],complete:e[o+2]},WC(t._query)}return function(d,p,v,T){const A=new PC(T),x=new cC(p,A,v);return d.asyncQueue.enqueueAndForget(async()=>iC(await Ef(d),x)),()=>{A.Na(),d.asyncQueue.enqueueAndForget(async()=>oC(await Ef(d),x))}}(D_(c),u,a,l)}function JC(t,e){return function(r,s){const i=new ar;return r.asyncQueue.enqueueAndForget(async()=>_C(await kC(r),s,i)),i.promise}(D_(t),e)}function ZC(t,e,n){const r=n.docs.get(e._key),s=new W_(t);return new K_(t,s,e._key,r,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){gs=s})(us),Gr(new cr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Wo(new Zb(r.getProvider("auth-internal")),new rR(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Vn(qd,"4.4.0",e),Vn(qd,"4.4.0","esm2017")})();const ex={apiKey:"AIzaSyAc1sTUtbtUwc72YDjdsXM4rT7Pf4VCHZo",authDomain:"recipe-page-a168a.firebaseapp.com",projectId:"recipe-page-a168a",storageBucket:"recipe-page-a168a.appspot.com",messagingSenderId:"540105599417",appId:"1:540105599417:web:68b26438060496e3412e68",measurementId:"G-G49BH7ELT1"},tx=Kc(ex),Go=MC(tx),nx=g("h2",{class:"text-white text-center font-bold text-lg lg:text-xl hidden lg:block"},"Recently added",-1),rx={class:"flex justify-between text-white"},sx={class:"flex flex-col"},ix={class:"font-bold text-xl text-yellow-400"},ox={class:"text-sm font-semibold"},ax={class:"px-3 bg-gray-300 flex text-black items-center rounded-full font-bold"};let Cf=[];const lx=Yt();ds(lx,t=>{if(t){let e=t.displayName;return Cf.value=e,Cf}});const cx={name:"app",components:{},methods:{},data:()=>({recipes:he([])}),mounted(){const t=Xu(Ko(Go,"recipees"),q_("name","desc")),e=th(t,n=>{this.recipes=n.docs.map(r=>({id:r.id,ingredients:r.data().ingredients,instructions:r.data().instructions,name:r.data().name,created:r.data().date_created,user:r.data().username}))});cs(e)}},ux=Object.assign(cx,{setup(t){return he(!1),(e,n)=>{const r=ls("router-link");return M(),F(Te,null,[nx,(M(!0),F(Te,null,je(e.recipes,s=>(M(),F("div",{class:"relative hidden lg:block",key:s.id},[Z(r,{to:/dashmeals/+s.id,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ye(()=>[g("section",rx,[g("div",sx,[g("div",ix,ie(s.name),1),g("div",ox,ie(s.created),1)]),g("div",ax,ie(s.user),1)])]),_:2},1032,["to"])]))),128))],64)}}}),hx={class:"flex flex-col gap-4 sm:px-[12px] 2xl:px-[16px] pb-10"},dx={class:"flex flex-col lg:flex-row justify-between gap-3 sm:gap-8 px-3 sm:px-5 xl:px-14"},fx={class:"flex flex-col sm:w-full lg:w-[35%] gap-3 sm:gap-6"},px={class:"flex w-full justify-between gap-1 sm:gap-4 md:gap-6"},mx=g("i",{class:"fa-solid fa-layer-group"},null,-1),gx=g("div",{class:"font-semibold"},"categories",-1),_x=[mx,gx],yx=g("i",{class:"fa-solid fa-book text-green-800"},null,-1),vx=g("div",{class:"font-semibold"},"Dashboard",-1),Ex=g("i",{class:"fa-solid fa-right-from-bracket text-base"},null,-1),wx=g("div",{class:"text-base font-semibold"},"Logout",-1),Ix=[Ex,wx],Tx=g("i",{class:"fa-solid fa-message"},null,-1),Ax=g("div",{class:"text-base font-semibold"},"Recent",-1),bx=[Tx,Ax],Rx={class:"w-full py-2 lg:hidden"},Px=g("img",{src:Lp,alt:"",srcset:"",class:"absolute top-3 left-4"},null,-1),Cx={class:"w-full flex flex-col gap-8"},xx={class:"hidden lg:flex justify-between gap-3 text-[14px]"},Sx=g("img",{src:Lp,alt:"",srcset:"",class:"absolute top-3 left-4"},null,-1),kx=g("i",{class:"fa-solid fa-book text-green-800"},null,-1),Dx=g("div",{class:"font-semibold"},"Dashboard",-1),Nx={class:"bg-green-300 flex items-center px-2 rounded-full font-extrabold text-[9px] lg:text-[16px]"},Ox=g("i",{class:"fa-solid fa-right-from-bracket text-base"},null,-1),Vx=g("div",{class:"text-base"},"Logout",-1),Mx=[Ox,Vx],Lx={key:0,class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},Fx=["src"],Ux={key:1},$x={__name:"home",setup(t){const e=he(!1),n=$c(),r=Yt();let s=[];cs(()=>{ds(r,h=>{if(h){e.value=!0;let d=h.displayName;return s.value=d,s}else e.value=!1})});const i=()=>{JT(r).then(()=>{n.push("/")})},o=he(""),a=he([]),l=()=>{o.value!==""&&fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${o.value}`).then(h=>h.json()).then(h=>{a.value=h.meals?h.meals:[],o.value=""}).catch(h=>{console.error("Error fetching data:",h)})},c=he(!1),u=he(!0);return(h,d)=>(M(),F("main",hx,[Z(gA),g("section",dx,[g("div",fx,[g("div",px,[g("button",{onClick:d[0]||(d[0]=p=>(c.value=!0,u.value=!1)),class:"text-white bg-purple-500 p-3 rounded-2xl flex items-center justify-center gap-1 w-full",name:"Categories"},_x),Z(ue($e),{to:"/dashboard",class:"relative flex justify-center items-center bg-white rounded-full p-4 py-3 gap-2 h-12 text-[#394150] w-full lg:hidden"},{default:ye(()=>[yx,vx]),_:1}),e.value?(M(),F("button",{key:0,onClick:i,class:"bg-yellow-400 px-3 rounded-xl flex gap-2 justify-center items-center w-full lg:hidden"},Ix)):Jn("",!0),g("button",{onClick:d[1]||(d[1]=p=>(u.value=!0,c.value=!1)),class:"bg-[#394150] px-3 rounded-xl hidden lg:flex gap-2 justify-center items-center w-full text-white"},bx)]),g("div",Rx,[g("form",{class:"relative",onSubmit:To(l,["prevent"]),onClick:d[3]||(d[3]=p=>h.bro==!1)},[kn(g("input",{type:"text",placeholder:"Search recipes and more...",name:"search-input",class:"border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14","onUpdate:modelValue":d[2]||(d[2]=p=>o.value=p)},null,512),[[Dn,o.value]]),Px],32)]),c.value?(M(),Fs(za,{key:0},{default:ye(()=>[Z(jA)]),_:1})):Jn("",!0),u.value?(M(),Fs(za,{key:1},{default:ye(()=>[Z(ux)]),_:1})):Jn("",!0)]),g("div",Cx,[g("div",xx,[g("form",{class:"relative w-[60%]",onSubmit:To(l,["prevent"]),onClick:d[5]||(d[5]=p=>h.bro==!1)},[kn(g("input",{type:"text",placeholder:"Search recipes and more...",name:"search-input",class:"border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14","onUpdate:modelValue":d[4]||(d[4]=p=>o.value=p)},null,512),[[Dn,o.value]]),Sx],32),Z(ue($e),{to:"/dashboard",class:"relative flex justify-center items-center bg-white rounded-full p-8 py-3 gap-2 h-12 text-[#394150]"},{default:ye(()=>[kx,Dx]),_:1}),g("div",Nx,ie(ue(s).value),1),e.value?(M(),F("button",{key:0,onClick:i,class:"bg-yellow-400 px-3 rounded-xl flex gap-2 justify-center items-center"},Mx)):Jn("",!0)]),a.value&&a.value.length>0?(M(),F("section",Lx,[(M(!0),F(Te,null,je(a.value,p=>(M(),F("div",null,[Z(ue($e),{to:/meals/+p.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:ye(()=>[g("img",{src:p.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Fx),g("div",null,ie(p.strMeal),1)]),_:2},1032,["to"])]))),256))])):(M(),F("section",Ux,[(M(),Fs(za,null,{default:ye(()=>[Z(MA)]),_:1}))]))])])]))}},qa="/assets/logo-light-NOLr421m.svg",Ui="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%206L9%2012L15%2018'%20stroke='%230D101D'%20stroke-width='2'/%3e%3c/svg%3e",Kn=t=>(ra("data-v-82eb6daa"),t=t(),sa(),t),Bx={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},jx={class:"flex flex-col gap-10"},qx={class:"px-3 flex justify-between text-[12px] md:text-base text-[#394150] w-full"},Hx=Kn(()=>g("img",{src:qa,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),Kx=Kn(()=>g("img",{src:Ui,alt:"",srcset:""},null,-1)),Wx=Kn(()=>g("div",null,"Back to categories",-1)),zx={class:"flex flex-col gap-10 w-full sm:px-[18%] 2xl:px-[25%]"},Gx=["src"],Qx={class:"flex flex-col gap-4"},Yx={class:"text-[30px] md:text-[45px] detailhead"},Xx={class:"flex gap-4"},Jx=Kn(()=>g("div",null,"category:",-1)),Zx={class:"font-bold"},e1=Kn(()=>g("div",null,"Area:",-1)),t1={class:"font-bold"},n1={class:"ingredients flex flex-col gap-5 px-2 md:px-0"},r1=Kn(()=>g("div",{class:"flex gap-4"},[g("button",{class:"bg-[#FEBD2E] p-3 py-5 rounded-full"}),g("h3",{class:"font-bold flex items-center text-[18px]"},"Ingredients")],-1)),s1={class:"list-disc px-[5%] flex flex-col gap-2 text-[18px]"},i1={class:"Instructions flex flex-col gap-5 px-2 md:px-0 pb-14"},o1=Kn(()=>g("div",{class:"flex gap-4"},[g("button",{class:"bg-[#4E80EE] p-3 py-5 rounded-full"}),g("h3",{class:"font-bold flex items-center text-[18px]"},"Instructions")],-1)),a1={class:"text-[17px] instruct whitespace-pre-line"},l1=Kn(()=>g("div",null,"Video",-1)),c1=["href"],u1={class:"text-[#845EEE]"},h1={key:1,class:"text-yellow-400"},d1={__name:"details",setup(t){const e=he({}),n=da(),r=It(()=>{const s=[];for(let i=1;i<=20;i++){const o=e.value.meals[0]["strIngredient"+i],a=e.value.meals[0]["strMeasure"+i];o&&o.length>1&&a&&s.push(`${a} ${o}`)}return s});return oa(async()=>{const i=await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${n.params.id}`)).json();e.value=i}),(s,i)=>(M(),F("main",Bx,[g("section",jx,[g("div",qx,[Hx,Z(ue($e),{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ye(()=>[Kx,Wx]),_:1})]),(M(!0),F(Te,null,je(e.value.meals,o=>(M(),F("div",zx,[g("img",{src:o.strMealThumb,alt:"",srcset:"",class:"rounded-lg w-full sm:h-[450px] 2xl:h-[500px]"},null,8,Gx),g("div",Qx,[g("h2",Yx,ie(o.strMeal),1),g("div",Xx,[Z(ue($e),{to:/category/+o.strCategory,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:ye(()=>[Jx,g("div",Zx,ie(o.strCategory),1)]),_:2},1032,["to"]),Z(ue($e),{to:/area/+o.strArea,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:ye(()=>[e1,g("div",t1,ie(o.strArea),1)]),_:2},1032,["to"])])]),g("div",n1,[r1,g("ul",s1,[(M(!0),F(Te,null,je(r.value,(a,l)=>(M(),F("li",{key:l},ie(a),1))),128))])]),g("div",i1,[o1,g("p",a1,ie(o.strInstructions),1)]),g("div",null,[l1,o.strYoutube?(M(),F("a",{key:0,href:o.strYoutube,target:"_blank"},[g("div",u1,ie(o.strYoutube),1)],8,c1)):(M(),F("div",h1," Not Currently availlable!!! "))])]))),256))])]))}},f1=fs(d1,[["__scopeId","data-v-82eb6daa"]]),nh=t=>(ra("data-v-60e5110c"),t=t(),sa(),t),p1={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},m1={class:"flex flex-col gap-10"},g1={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},_1=nh(()=>g("img",{src:qa,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),y1=nh(()=>g("img",{src:Ui,alt:"",srcset:""},null,-1)),v1=nh(()=>g("div",null,"Back to categories",-1)),E1={class:"flex justify-center text-[35px] detailhead"},w1={class:"grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},I1=["src"],T1={__name:"categoryDetails",setup(t){const e=he({}),n=da();return oa(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${n.params.id}`).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()}).then(r=>{e.value=r.meals}).catch(r=>{console.error("Error fetching data:",r)})}),(r,s)=>{const i=ls("router-link");return M(),F("main",p1,[g("section",m1,[g("div",g1,[_1,Z(i,{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ye(()=>[y1,v1]),_:1})]),g("div",E1,ie(ue(n).params.id)+" meals ",1),g("section",w1,[(M(!0),F(Te,null,je(e.value,o=>(M(),F("div",null,[Z(i,{to:/meals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:ye(()=>[g("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,I1),g("div",null,ie(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},A1=fs(T1,[["__scopeId","data-v-60e5110c"]]),rh=t=>(ra("data-v-62e3d8fd"),t=t(),sa(),t),b1={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},R1={class:"flex flex-col gap-10"},P1={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},C1=rh(()=>g("img",{src:qa,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),x1=rh(()=>g("img",{src:Ui,alt:"",srcset:""},null,-1)),S1=rh(()=>g("div",null,"Back to categories",-1)),k1={class:"flex justify-center text-[35px] detailhead"},D1={class:"grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},N1=["src"],O1={__name:"areadetails",setup(t){const e=he({}),n=da();return oa(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${n.params.id}`).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()}).then(r=>{e.value=r.meals}).catch(r=>{console.error("Error fetching data:",r)})}),(r,s)=>{const i=ls("router-link");return M(),F("main",b1,[g("section",R1,[g("div",P1,[C1,Z(i,{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ye(()=>[x1,S1]),_:1})]),g("div",k1,ie(ue(n).params.id)+" meals ",1),g("section",D1,[(M(!0),F(Te,null,je(e.value,o=>(M(),F("div",null,[Z(i,{to:/meals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:ye(()=>[g("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,N1),g("div",null,ie(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},V1=fs(O1,[["__scopeId","data-v-62e3d8fd"]]),z_="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%2016H7C4.79086%2016%203%2014.2091%203%2012V12C3%209.79086%204.79086%208%207%208H10'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2012H8'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14%2016H17C19.2091%2016%2021%2014.2091%2021%2012V12C21%209.79086%2019.2091%208%2017%208H14'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",M1={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] 2xl:pt-[10%] gap-4"},L1={class:"stepone w-[90%] flex flex-col gap-6 text-white"},F1={class:"flex flex-col gap-6 text-white p-[15px]",id:"register"},U1={class:"flex justify-between"},$1=g("div",{class:"text-[24px]"},"Login",-1),B1={class:"flex flex-col justify-center items-center gap-2"},j1=g("p",{class:"text-[10px]"},"Don't have an acount?",-1),q1={class:"flex flex-col gap-2 text-[#E5E7EB]"},H1=g("label",{for:"Email",name:"Email",class:"text-[18px]"},"Email",-1),K1={class:"flex flex-col gap-2"},W1=g("label",{for:"password",name:"password",class:"text-[18px]"},"Password",-1),z1={key:0},G1={class:"guest flex gap-4 px-[15px]"},Q1=g("h2",{class:"text-yellow-400 font-bold text-lg"},"Guest:",-1),Y1={class:"flex flex-col"},X1={class:"flex items-center gap-2 text-[#fffefe]"},J1=g("div",null,"Email",-1),Z1=g("img",{src:z_,class:"h-5 lg:h-6"},null,-1),eS=[Z1],tS={class:"flex items-center gap-2 text-[#fffefe]"},nS=g("div",null,"password",-1),rS=g("img",{src:z_,class:"h-5 lg:h-6"},null,-1),sS=[rS],iS=g("div",null,"or",-1),oS={__name:"login",setup(t){const e=he(""),n=he(""),r=$c(),s=he(""),i=()=>{const h=Yt();zT(h,e.value,n.value).then(d=>{console.log("successfully signed in!"),r.push("/home")}).catch(d=>{switch(console.log(d.code),d.code){case"auth/invalid-email":s.value="invalid email";break;case"auth/user-not-found":s.value="No account with that email was found";break;case"auth/wrong-password":s.value="incorrect password";break;default:s.value="Email or password was incorrect";break}})},o=()=>{const h=new qt;Rm(Yt(),h).then(d=>{r.push("/home")}).catch(d=>{})};let a="testdemo@gmail.com",l="Welcome1",c=()=>{navigator.clipboard.writeText(a),alert("Email copied to clipboard")},u=()=>{navigator.clipboard.writeText(l),alert("password copied to clipboard")};return(h,d)=>(M(),F("div",M1,[g("form",{onSubmit:d[4]||(d[4]=To((...p)=>h.login&&h.login(...p),["prevent"])),class:"bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]"},[g("div",L1,[g("div",F1,[g("div",U1,[$1,g("div",B1,[Z(ue($e),{to:"/signup",class:"text-[20px] px-3 rounded-lg text-black duration-300 bg-white"},{default:ye(()=>[Vc("Sign Up")]),_:1}),j1])]),g("div",q1,[H1,kn(g("input",{"onUpdate:modelValue":d[0]||(d[0]=p=>e.value=p),type:"text",id:"Email",placeholder:"Email",name:"Email",class:"Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[Dn,e.value]])]),g("div",K1,[W1,kn(g("input",{"onUpdate:modelValue":d[1]||(d[1]=p=>n.value=p),type:"text",placeholder:"password",id:"password",class:"password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[Dn,n.value]])])]),s.value?(M(),F("p",z1,ie(s.value),1)):Jn("",!0),g("section",G1,[Q1,g("div",Y1,[g("div",X1,[J1,g("button",{onClick:d[2]||(d[2]=(...p)=>ue(c)&&ue(c)(...p))},eS)]),g("div",tS,[nS,g("button",{onClick:d[3]||(d[3]=(...p)=>ue(u)&&ue(u)(...p))},sS)])])]),g("div",{class:"w-full flex flex-col items-center justify-center text-white gap-3"},[g("button",{onClick:i,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Submit"),iS,g("button",{onClick:o,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Sign in with google")])])],32)]))}},aS={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[15%] 2xl:pt-[8%] gap-4"},lS={class:"stepone w-[90%] flex flex-col gap-6 text-white"},cS={class:"flex flex-col gap-6 text-white p-[15px]",id:"register"},uS={class:"flex justify-between"},hS=g("div",{class:"text-[24px]"},"Create an Account",-1),dS={class:"flex flex-col justify-center items-center gap-2"},fS=g("p",{class:"text-[10px]"},"already have an acount?",-1),pS={class:"flex flex-col gap-2 text-[#E5E7EB]"},mS=g("label",{for:"Email",class:"text-[18px]"},"Email",-1),gS={class:"flex flex-col gap-2"},_S=g("label",{for:"password",class:"text-[18px]"},"Password",-1),yS={class:"flex flex-col gap-2 text-[#E5E7EB]"},vS=g("label",{for:"username",name:"username",class:"text-[18px]"},"User name",-1),ES=g("div",null,"or",-1),wS={__name:"signup",setup(t){const e=he(""),n=he(""),r=$c(),s=he(""),i=()=>{WT(Yt(),e.value,n.value).then(c=>{console.log("successfully registered!"),l(),r.push("/home")}).catch(c=>{console.log(c.code),alert(c.message)})},o=()=>{const c=new qt;Rm(Yt(),c).then(u=>{l(),r.push("/home")}).catch(u=>{})},a=Yt();function l(){QT(a.currentUser,{displayName:s.value}).then(()=>{}).catch(c=>{console.log("Public profile Not created")})}return(c,u)=>(M(),F("div",aS,[g("form",{onSubmit:u[3]||(u[3]=To((...h)=>c.login&&c.login(...h),["prevent"])),class:"bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]"},[g("div",lS,[g("div",cS,[g("div",uS,[hS,g("div",dS,[Z(ue($e),{to:"/",class:"text-[20px] px-3 rounded-lg text-black duration-300 bg-white"},{default:ye(()=>[Vc("Sign in")]),_:1}),fS])]),g("div",pS,[mS,kn(g("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>e.value=h),type:"text",placeholder:"Email",name:"Email",class:"Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[Dn,e.value]])]),g("div",gS,[_S,kn(g("input",{"onUpdate:modelValue":u[1]||(u[1]=h=>n.value=h),type:"text",placeholder:"password",name:"Password",id:"password",class:"password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[Dn,n.value]])]),g("div",yS,[vS,kn(g("input",{"onUpdate:modelValue":u[2]||(u[2]=h=>s.value=h),type:"text",id:"username",placeholder:"Enter user name",name:"username",class:"border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[Dn,s.value]])])]),g("div",{class:"w-full flex flex-col items-center justify-center text-white gap-3"},[g("button",{onClick:i,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Submit"),ES,g("button",{onClick:o,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Sign in with google")])])],32)]))}},IS={class:"flex flex-col gap-10"},TS={class:"px-[5%] flex justify-between text-[12px] lg:text-[18px] text-[#394150] w-full py-10"},AS=g("img",{src:Ui,alt:"",srcset:""},null,-1),bS=g("div",null,"Back to categories",-1),RS={class:"bg-green-300 flex items-center px-2 rounded-full font-extrabold text-[9px] lg:text-[16px]"},PS=g("i",{class:"fa-regular fa-square-plus"},null,-1),CS=g("div",{class:"font-semibold"},"New Recipe",-1),xS=[PS,CS],SS=g("div",{id:"dashboard",class:"text-[24px] font-bold text-white text-center"},[g("h3",null,"Community Recipe Dashboard")],-1),kS={class:"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-[16px] text-[#E5E7EB] font-medium px-[2%] lg:px-[6%]"},DS=["src"],NS={key:1,class:"fa-solid fa-bowl-food text-[100px] sm:[120px] md:text-[125px] lg:text-[150px] flex justify-center items-center"},OS={class:"flex justify-between text-white"},VS={class:"flex flex-col"},MS={class:"font-bold text-xl text-yellow-400"},LS={class:"text-sm font-semibold"},FS={class:"px-3 bg-gray-400 flex items-center rounded-lg font-bold"},US={key:0,class:"overlay absolute w-full h-full bg-[#394150] z-10 flex items-center justify-center sm:px-[10%] lg:px-[20%] 2xl:px-[25%]",id:"recipes"},$S={class:"modal w-full bg-[#0E1325] rounded-xl p-[35px] relative flex flex-col gap-4"},BS=g("div",{class:"text-gray-100 flex justify-end text-xs"},"*Recommended that users complete all fields*",-1),jS={ref:"recipeName",type:"text",name:"Name",placeholder:"Enter recipe name",class:"p-3 rounded-lg"},qS={ref:"recipeIngredients",name:"measurement + ingredients",placeholder:"Measurements / Ingredients. Example: 1600g Flour, 1/2 tsp Salt ect..",class:"p-2 rounded-md border border-[#394150]"},HS={ref:"recipeInstructions",name:"note",id:"note",cols:"30",rows:"2",class:"rounded-lg p-3",placeholder:"enter instructions"};let Br=[];const G_=Yt();ds(G_,t=>{if(t){let e=t.displayName;return Br.value=e,Br}});const KS={name:"app",components:{},methods:{createRecipe:function(){XC(Ko(Go,"recipees"),{recipe_id:Math.floor(Math.random()*1e6),name:this.$refs.recipeName.value,date_created:new Date(Date.now()).toLocaleString(),Ingredients:this.$refs.recipeIngredients.value,instructions:this.$refs.recipeInstructions.value,username:Br.value})},bro:function(){this.$refs.recipeName.value="",this.$refs.recipeIngredients.value="",this.$refs.recipeInstructions.value="",alert("recipe created")},getRandomColor:function(){return"hsl("+Math.random()*360+", 100%, 75%)"}},data:()=>({recipes:he([])}),mounted(){const t=Xu(Ko(Go,"recipees"),q_("name","desc")),e=th(t,n=>{this.recipes=n.docs.map(r=>({id:r.id,ingredients:r.data().ingredients,instructions:r.data().instructions,name:r.data().name,created:r.data().date_created,user:r.data().username}))});cs(e)}},WS=Object.assign(KS,{setup(t){const e=he(!1);return cs(()=>{ds(G_,n=>{if(n){let r=n.displayName;return Br.value=r,Br}})}),(n,r)=>{const s=ls("router-link");return M(),F("section",IS,[g("header",TS,[Z(s,{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ye(()=>[AS,bS]),_:1}),g("div",RS,ie(ue(Br).value),1),g("button",{class:"flex gap-2 bg-yellow-400 rounded-2xl items-center p-3 md:p-4 md:px-6",onClick:r[0]||(r[0]=i=>e.value=!0)},xS)]),SS,g("section",kS,[(M(!0),F(Te,null,je(n.recipes,i=>(M(),F("div",{class:"relative",key:i.id},[Z(s,{to:/dashmeals/+i.id,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:ye(()=>[i.img?(M(),F("img",{key:0,src:i.img,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] md:w-[800px]",id:"your-img"},null,8,DS)):(M(),F("i",NS)),g("section",OS,[g("div",VS,[g("div",MS,ie(i.name),1),g("div",LS,ie(i.created),1)]),g("div",FS,ie(i.user),1)])]),_:2},1032,["to"])]))),128))]),e.value?(M(),F("div",US,[g("div",$S,[BS,g("input",jS,null,512),g("input",qS,null,512),g("textarea",HS,null,512),g("button",{class:"p-[10px 20px] text-[20px] w-full bg-green-100 border-none text-black cursor-pointer p-2 font-semibold",onClick:r[1]||(r[1]=i=>(n.createRecipe(),e.value=!1,n.bro(),n.toasts=!0))},"Create Recipe"),g("button",{class:"text-white font-semibold text-[18px]",onClick:r[2]||(r[2]=i=>e.value=!1)},"Cancel")])])):Jn("",!0)])}}}),zS={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] 2xl:pt-[10%] gap-4"},GS={class:"flex flex-col gap-2 text-[#E5E7EB]"},QS=g("label",{for:"username",name:"username",class:"text-[18px]"},"Name:",-1),YS={},XS=Object.assign(YS,{__name:"user",setup(t){const e=he("");return(n,r)=>(M(),F("div",zS,[g("div",GS,[QS,kn(g("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>e.value=s),type:"text",id:"Email",placeholder:"Enter user name",name:"username",class:"border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[Dn,e.value]])])]))}}),ws=t=>(ra("data-v-84179dc6"),t=t(),sa(),t),JS={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},ZS={class:"flex flex-col gap-8"},ek={class:"px-3 flex justify-between text-[12px] md:text-base text-[#394150] w-full"},tk=ws(()=>g("img",{src:qa,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),nk=ws(()=>g("img",{src:Ui,alt:"",srcset:""},null,-1)),rk=ws(()=>g("div",null,"Back to Dashboard",-1)),sk={class:"px-[4%]"},ik={key:0,class:"flex flex-col gap-10 w-full sm:px-[18%] 2xl:px-[25%]"},ok=["src"],ak={key:1,class:"fa-solid fa-bowl-food text-[100px] sm:[120px] md:text-[125px] lg:text-[150px] flex justify-center items-center"},lk={class:"flex justify-between"},ck={class:"flex flex-col gap-4"},uk={class:"text-[30px] lg:text-[45px] detailhead"},hk={class:"flex justify-center items-center px-3 md:px-5 rounded-full bg-blue-300 text-black font-extrabold"},dk={class:"ingredients flex flex-col gap-5 px-2 md:px-0"},fk=ws(()=>g("div",{class:"flex gap-4"},[g("button",{class:"bg-[#FEBD2E] p-3 py-5 rounded-full"}),g("h3",{class:"font-bold flex items-center text-[18px]"},"Ingredients")],-1)),pk={class:"Instructions flex flex-col gap-5 px-2 md:px-0"},mk=ws(()=>g("div",{class:"flex gap-4"},[g("button",{class:"bg-[#4E80EE] p-3 py-5 rounded-full"}),g("h3",{class:"font-bold flex items-center text-[18px]"},"Instructions")],-1)),gk={class:"text-[17px] instruct whitespace-pre-line"},_k={class:"flex justify-between"},yk={class:"flex flex-col"},vk=ws(()=>g("div",null,"Video",-1)),Ek=["href"],wk={class:"text-[#845EEE]"},Ik={key:1,class:"text-yellow-400 text-sm md:text-base"},Tk={class:"flex items-center"};let xf=[];const Ak=Yt();ds(Ak,t=>{if(t){let e=t.displayName;return xf.value=e,xf}});const bk={name:"app",components:{},methods:{},data:()=>({recipes:he([])}),mounted(){const t=Xu(Ko(Go,"recipees")),e=th(t,n=>{this.recipes=n.docs.map(r=>({id:r.id,ingredients:r.data().Ingredients,instructions:r.data().instructions,name:r.data().name,created:r.data().date_created,user:r.data().username}))});cs(e)}},Rk=Object.assign(bk,{setup(t){const e=da();return(n,r)=>(M(),F("main",JS,[g("section",ZS,[g("div",ek,[tk,Z(ue($e),{to:"/dashboard",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:ye(()=>[nk,rk]),_:1})]),(M(!0),F(Te,null,je(n.recipes,s=>(M(),F("div",sk,[s.id==ue(e).params.id?(M(),F("div",ik,[s.img?(M(),F("img",{key:0,src:s.img,alt:"meal-thumbnail",srcset:"",class:"rounded-lg w-full sm:h-[450px] 2xl:h-[500px]",id:"your-img"},null,8,ok)):(M(),F("i",ak)),g("div",lk,[g("div",ck,[g("h2",uk,ie(s.name),1)]),g("div",hk,ie(s.user),1)]),g("div",dk,[fk,g("div",null,ie(s.ingredients),1)]),g("div",pk,[mk,g("p",gk,ie(s.instructions),1)]),g("div",_k,[g("div",yk,[vk,s.strYoutube?(M(),F("a",{key:0,href:s.strYoutube,target:"_blank"},[g("div",wk,ie(s.strYoutube),1)],8,Ek)):(M(),F("div",Ik," Not Currently availlable!!! "))]),g("div",Tk,ie(s.created),1)])])):Jn("",!0)]))),256))])]))}}),Pk=fs(Rk,[["__scopeId","data-v-84179dc6"]]),Q_=_w({history:OE("/"),routes:[{path:"/home",name:"home",component:$x,meta:{requiresAuth:!0}},{path:"/meals/:id",name:"meal Details",component:f1},{path:"/category/:id",name:"category Details",component:A1},{path:"/area/:id",name:"area Details",component:V1},{path:"/",name:"loggedin",component:oS},{path:"/signup",name:"signUp",component:wS},{path:"/dashboard",name:"Dashboard",component:WS},{path:"/dashmeals/:id",name:"Dashboard meals details",component:Pk},{path:"/user",name:"userName",component:XS}]}),Ck=()=>new Promise((t,e)=>{const n=ds(Yt(),r=>{n(),t(r)},e)});Q_.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await Ck()?n():(alert("You dont have access"),n("/")):n()});const xk={};function Sk(t,e){const n=ls("RouterView");return M(),Fs(n)}const kk=fs(xk,[["render",Sk]]),Dk={apiKey:"AIzaSyAc1sTUtbtUwc72YDjdsXM4rT7Pf4VCHZo",authDomain:"recipe-page-a168a.firebaseapp.com",projectId:"recipe-page-a168a",storageBucket:"recipe-page-a168a.appspot.com",messagingSenderId:"540105599417",appId:"1:540105599417:web:68b26438060496e3412e68",measurementId:"G-G49BH7ELT1"};Kc(Dk);const Y_=mE(kk);Y_.use(Q_);Y_.mount("#app");
