(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Kr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ue={},en=[],Qe=()=>{},cc=()=>!1,Ds=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zr=t=>t.startsWith("onUpdate:"),Ee=Object.assign,qr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uc=Object.prototype.hasOwnProperty,G=(t,e)=>uc.call(t,e),j=Array.isArray,tn=t=>Ls(t)==="[object Map]",ia=t=>Ls(t)==="[object Set]",V=t=>typeof t=="function",_e=t=>typeof t=="string",_n=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",oa=t=>(fe(t)||V(t))&&V(t.then)&&V(t.catch),aa=Object.prototype.toString,Ls=t=>aa.call(t),dc=t=>Ls(t).slice(8,-1),la=t=>Ls(t)==="[object Object]",Gr=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cs=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$s=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fc=/-(\w)/g,tt=$s(t=>t.replace(fc,(e,n)=>n?n.toUpperCase():"")),hc=/\B([A-Z])/g,vn=$s(t=>t.replace(hc,"-$1").toLowerCase()),Us=$s(t=>t.charAt(0).toUpperCase()+t.slice(1)),tr=$s(t=>t?`on${Us(t)}`:""),Ht=(t,e)=>!Object.is(t,e),us=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},br=t=>{const e=parseFloat(t);return isNaN(e)?t:e},pc=t=>{const e=_e(t)?Number(t):NaN;return isNaN(e)?t:e};let Di;const yr=()=>Di||(Di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bs(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=_e(s)?vc(s):Bs(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(_e(t)||fe(t))return t}const gc=/;(?![^(]*\))/g,mc=/:([^]+)/,_c=/\/\*[^]*?\*\//g;function vc(t){const e={};return t.replace(_c,"").split(gc).forEach(n=>{if(n){const s=n.split(mc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jr(t){let e="";if(_e(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=Jr(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yc=Kr(bc);function ca(t){return!!t||t===""}const de=t=>_e(t)?t:t==null?"":j(t)||fe(t)&&(t.toString===aa||!V(t.toString))?JSON.stringify(t,ua,2):String(t),ua=(t,e)=>e&&e.__v_isRef?ua(t,e.value):tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[nr(s,i)+" =>"]=r,n),{})}:ia(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nr(n))}:_n(e)?nr(e):fe(e)&&!j(e)&&!la(e)?String(e):e,nr=(t,e="")=>{var n;return _n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Fe;class wc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!e&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ec(t,e=Fe){e&&e.active&&e.effects.push(t)}function Ic(){return Fe}const Yr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},da=t=>(t.w&Ct)>0,fa=t=>(t.n&Ct)>0,xc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ct},Tc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];da(r)&&!fa(r)?r.delete(t):e[n++]=r,r.w&=~Ct,r.n&=~Ct}e.length=n}},wr=new WeakMap;let xn=0,Ct=1;const Er=30;let He;const Bt=Symbol(""),Ir=Symbol("");class Xr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ec(this,s)}run(){if(!this.active)return this.fn();let e=He,n=Et;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=He,He=this,Et=!0,Ct=1<<++xn,xn<=Er?xc(this):Li(this),this.fn()}finally{xn<=Er&&Tc(this),Ct=1<<--xn,He=this.parent,Et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(Li(this),this.onStop&&this.onStop(),this.active=!1)}}function Li(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Et=!0;const ha=[];function bn(){ha.push(Et),Et=!1}function yn(){const t=ha.pop();Et=t===void 0?!0:t}function ke(t,e,n){if(Et&&He){let s=wr.get(t);s||wr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Yr()),pa(r)}}function pa(t,e){let n=!1;xn<=Er?fa(t)||(t.n|=Ct,n=!da(t)):n=!t.has(He),n&&(t.add(He),He.deps.push(t))}function at(t,e,n,s,r,i){const o=wr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&j(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||!_n(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":j(t)?Gr(n)&&l.push(o.get("length")):(l.push(o.get(Bt)),tn(t)&&l.push(o.get(Ir)));break;case"delete":j(t)||(l.push(o.get(Bt)),tn(t)&&l.push(o.get(Ir)));break;case"set":tn(t)&&l.push(o.get(Bt));break}if(l.length===1)l[0]&&xr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);xr(Yr(a))}}function xr(t,e){const n=j(t)?t:[...t];for(const s of n)s.computed&&$i(s);for(const s of n)s.computed||$i(s)}function $i(t,e){(t!==He||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Cc=Kr("__proto__,__v_isRef,__isVue"),ga=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_n)),Ui=Rc();function Rc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Y(this);for(let i=0,o=this.length;i<o;i++)ke(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){bn();const s=Y(this)[e].apply(this,n);return yn(),s}}),t}function Sc(t){const e=Y(this);return ke(e,"has",t),e.hasOwnProperty(t)}class ma{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?jc:ya:i?ba:va).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=j(e);if(!r){if(o&&G(Ui,n))return Reflect.get(Ui,n,s);if(n==="hasOwnProperty")return Sc}const l=Reflect.get(e,n,s);return(_n(n)?ga.has(n):Cc(n))||(r||ke(e,"get",n),i)?l:Ce(l)?o&&Gr(n)?l:l.value:fe(l)?r?Ea(l):js(l):l}}class _a extends ma{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(cn(i)&&Ce(i)&&!Ce(s))return!1;if(!this._shallow&&(!ys(s)&&!cn(s)&&(i=Y(i),s=Y(s)),!j(e)&&Ce(i)&&!Ce(s)))return i.value=s,!0;const o=j(e)&&Gr(n)?Number(n)<e.length:G(e,n),l=Reflect.set(e,n,s,r);return e===Y(r)&&(o?Ht(s,i)&&at(e,"set",n,s):at(e,"add",n,s)),l}deleteProperty(e,n){const s=G(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&at(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!_n(n)||!ga.has(n))&&ke(e,"has",n),s}ownKeys(e){return ke(e,"iterate",j(e)?"length":Bt),Reflect.ownKeys(e)}}class Pc extends ma{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ac=new _a,kc=new Pc,Oc=new _a(!0),Qr=t=>t,Fs=t=>Reflect.getPrototypeOf(t);function ns(t,e,n=!1,s=!1){t=t.__v_raw;const r=Y(t),i=Y(e);n||(Ht(e,i)&&ke(r,"get",e),ke(r,"get",i));const{has:o}=Fs(r),l=s?Qr:n?ti:Mn;if(o.call(r,e))return l(t.get(e));if(o.call(r,i))return l(t.get(i));t!==r&&t.get(e)}function ss(t,e=!1){const n=this.__v_raw,s=Y(n),r=Y(t);return e||(Ht(t,r)&&ke(s,"has",t),ke(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function rs(t,e=!1){return t=t.__v_raw,!e&&ke(Y(t),"iterate",Bt),Reflect.get(t,"size",t)}function Bi(t){t=Y(t);const e=Y(this);return Fs(e).has.call(e,t)||(e.add(t),at(e,"add",t,t)),this}function Fi(t,e){e=Y(e);const n=Y(this),{has:s,get:r}=Fs(n);let i=s.call(n,t);i||(t=Y(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ht(e,o)&&at(n,"set",t,e):at(n,"add",t,e),this}function ji(t){const e=Y(this),{has:n,get:s}=Fs(e);let r=n.call(e,t);r||(t=Y(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&at(e,"delete",t,void 0),i}function Hi(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&at(t,"clear",void 0,void 0),n}function is(t,e){return function(s,r){const i=this,o=i.__v_raw,l=Y(o),a=e?Qr:t?ti:Mn;return!t&&ke(l,"iterate",Bt),o.forEach((c,u)=>s.call(r,a(c),a(u),i))}}function os(t,e,n){return function(...s){const r=this.__v_raw,i=Y(r),o=tn(i),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=r[t](...s),u=n?Qr:e?ti:Mn;return!e&&ke(i,"iterate",a?Ir:Bt),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:l?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function ht(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Nc(){const t={get(i){return ns(this,i)},get size(){return rs(this)},has:ss,add:Bi,set:Fi,delete:ji,clear:Hi,forEach:is(!1,!1)},e={get(i){return ns(this,i,!1,!0)},get size(){return rs(this)},has:ss,add:Bi,set:Fi,delete:ji,clear:Hi,forEach:is(!1,!0)},n={get(i){return ns(this,i,!0)},get size(){return rs(this,!0)},has(i){return ss.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:is(!0,!1)},s={get(i){return ns(this,i,!0,!0)},get size(){return rs(this,!0)},has(i){return ss.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:is(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=os(i,!1,!1),n[i]=os(i,!0,!1),e[i]=os(i,!1,!0),s[i]=os(i,!0,!0)}),[t,n,e,s]}const[Mc,Dc,Lc,$c]=Nc();function Zr(t,e){const n=e?t?$c:Lc:t?Dc:Mc;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(G(n,r)&&r in s?n:s,r,i)}const Uc={get:Zr(!1,!1)},Bc={get:Zr(!1,!0)},Fc={get:Zr(!0,!1)},va=new WeakMap,ba=new WeakMap,ya=new WeakMap,jc=new WeakMap;function Hc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vc(t){return t.__v_skip||!Object.isExtensible(t)?0:Hc(dc(t))}function js(t){return cn(t)?t:ei(t,!1,Ac,Uc,va)}function wa(t){return ei(t,!1,Oc,Bc,ba)}function Ea(t){return ei(t,!0,kc,Fc,ya)}function ei(t,e,n,s,r){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Vc(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function nn(t){return cn(t)?nn(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function ys(t){return!!(t&&t.__v_isShallow)}function Ia(t){return nn(t)||cn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function xa(t){return bs(t,"__v_skip",!0),t}const Mn=t=>fe(t)?js(t):t,ti=t=>fe(t)?Ea(t):t;function Ta(t){Et&&He&&(t=Y(t),pa(t.dep||(t.dep=Yr())))}function Ca(t,e){t=Y(t);const n=t.dep;n&&xr(n)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function te(t){return Ra(t,!1)}function Wc(t){return Ra(t,!0)}function Ra(t,e){return Ce(t)?t:new Kc(t,e)}class Kc{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Mn(e)}get value(){return Ta(this),this._value}set value(e){const n=this.__v_isShallow||ys(e)||cn(e);e=n?e:Y(e),Ht(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mn(e),Ca(this))}}function ce(t){return Ce(t)?t.value:t}const zc={get:(t,e,n)=>ce(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ce(r)&&!Ce(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Sa(t){return nn(t)?t:new Proxy(t,zc)}class qc{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Xr(e,()=>{this._dirty||(this._dirty=!0,Ca(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Y(this);return Ta(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Gc(t,e,n=!1){let s,r;const i=V(t);return i?(s=t,r=Qe):(s=t.get,r=t.set),new qc(s,r,i||!r,n)}function It(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Kn(i,e,n)}return r}function Ve(t,e,n,s){if(V(t)){const i=It(t,e,n,s);return i&&oa(i)&&i.catch(o=>{Kn(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ve(t[i],e,n,s));return r}function Kn(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){It(a,null,10,[t,o,l]);return}}Jc(t,n,r,s)}function Jc(t,e,n,s=!0){console.error(t)}let Dn=!1,Tr=!1;const Te=[];let Ye=0;const sn=[];let rt=null,Dt=0;const Pa=Promise.resolve();let ni=null;function Aa(t){const e=ni||Pa;return t?e.then(this?t.bind(this):t):e}function Yc(t){let e=Ye+1,n=Te.length;for(;e<n;){const s=e+n>>>1,r=Te[s],i=Ln(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function si(t){(!Te.length||!Te.includes(t,Dn&&t.allowRecurse?Ye+1:Ye))&&(t.id==null?Te.push(t):Te.splice(Yc(t.id),0,t),ka())}function ka(){!Dn&&!Tr&&(Tr=!0,ni=Pa.then(Na))}function Xc(t){const e=Te.indexOf(t);e>Ye&&Te.splice(e,1)}function Cr(t){j(t)?sn.push(...t):(!rt||!rt.includes(t,t.allowRecurse?Dt+1:Dt))&&sn.push(t),ka()}function Vi(t,e,n=Dn?Ye+1:0){for(;n<Te.length;n++){const s=Te[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Te.splice(n,1),n--,s()}}}function Oa(t){if(sn.length){const e=[...new Set(sn)];if(sn.length=0,rt){rt.push(...e);return}for(rt=e,rt.sort((n,s)=>Ln(n)-Ln(s)),Dt=0;Dt<rt.length;Dt++)rt[Dt]();rt=null,Dt=0}}const Ln=t=>t.id==null?1/0:t.id,Qc=(t,e)=>{const n=Ln(t)-Ln(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Na(t){Tr=!1,Dn=!0,Te.sort(Qc);try{for(Ye=0;Ye<Te.length;Ye++){const e=Te[Ye];e&&e.active!==!1&&It(e,null,14)}}finally{Ye=0,Te.length=0,Oa(),Dn=!1,ni=null,(Te.length||sn.length)&&Na()}}function Zc(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ue;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||ue;h&&(r=n.map(v=>_e(v)?v.trim():v)),d&&(r=n.map(br))}let l,a=s[l=tr(e)]||s[l=tr(tt(e))];!a&&i&&(a=s[l=tr(vn(e))]),a&&Ve(a,t,6,r);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ve(c,t,6,r)}}function Ma(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!V(t)){const a=c=>{const u=Ma(c,e,!0);u&&(l=!0,Ee(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!l?(fe(t)&&s.set(t,null),null):(j(i)?i.forEach(a=>o[a]=null):Ee(o,i),fe(t)&&s.set(t,o),o)}function Hs(t,e){return!t||!Ds(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,vn(e))||G(t,e))}let Le=null,Vs=null;function ws(t){const e=Le;return Le=t,Vs=t&&t.type.__scopeId||null,e}function ri(t){Vs=t}function ii(){Vs=null}function oe(t,e=Le,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&no(-1);const i=ws(e);let o;try{o=t(...r)}finally{ws(i),s._d&&no(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function sr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:d,data:h,setupState:v,ctx:T,inheritAttrs:P}=t;let B,N;const k=ws(t);try{if(n.shapeFlag&4){const I=r||s,F=I;B=je(u.call(F,I,d,i,v,h,T)),N=a}else{const I=e;B=je(I.length>1?I(i,{attrs:a,slots:l,emit:c}):I(i,null)),N=e.props?a:tu(a)}}catch(I){Pn.length=0,Kn(I,t,1),B=z(lt)}let K=B;if(N&&P!==!1){const I=Object.keys(N),{shapeFlag:F}=K;I.length&&F&7&&(o&&I.some(zr)&&(N=nu(N,o)),K=dn(K,N))}return n.dirs&&(K=dn(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),B=K,ws(k),B}function eu(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Ts(s)){if(s.type!==lt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const tu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ds(n))&&((e||(e={}))[n]=t[n]);return e},nu=(t,e)=>{const n={};for(const s in t)(!zr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function su(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:a}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Wi(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!Hs(c,h))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Wi(s,o,c):!0:!!o;return!1}function Wi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Hs(n,i))return!0}return!1}function oi({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Da="components";function zn(t,e){return iu(Da,t,!0,e)||t}const ru=Symbol.for("v-ndc");function iu(t,e,n=!0,s=!1){const r=Le||we;if(r){const i=r.type;if(t===Da){const l=Zu(i,!1);if(l&&(l===e||l===tt(e)||l===Us(tt(e))))return i}const o=Ki(r[t]||i[t],e)||Ki(r.appContext[t],e);return!o&&s?i:o}}function Ki(t,e){return t&&(t[e]||t[tt(e)]||t[Us(tt(e))])}const ou=t=>t.__isSuspense,au={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,l,a,c){t==null?lu(e,n,s,r,i,o,l,a,c):cu(t,e,n,s,r,o,l,a,c)},hydrate:uu,create:ai,normalize:du},zi=au;function $n(t,e){const n=t.props&&t.props[e];V(n)&&n()}function lu(t,e,n,s,r,i,o,l,a){const{p:c,o:{createElement:u}}=a,d=u("div"),h=t.suspense=ai(t,r,s,e,d,n,i,o,l,a);c(null,h.pendingBranch=t.ssContent,d,null,s,h,i,o),h.deps>0?($n(t,"onPending"),$n(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,i,o),rn(h,t.ssFallback)):h.resolve(!1,!0)}function cu(t,e,n,s,r,i,o,l,{p:a,um:c,o:{createElement:u}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const h=e.ssContent,v=e.ssFallback,{activeBranch:T,pendingBranch:P,isInFallback:B,isHydrating:N}=d;if(P)d.pendingBranch=h,vt(h,P)?(a(P,h,d.hiddenContainer,null,r,d,i,o,l),d.deps<=0?d.resolve():B&&(a(T,v,n,s,r,null,i,o,l),rn(d,v))):(d.pendingId++,N?(d.isHydrating=!1,d.activeBranch=P):c(P,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),B?(a(null,h,d.hiddenContainer,null,r,d,i,o,l),d.deps<=0?d.resolve():(a(T,v,n,s,r,null,i,o,l),rn(d,v))):T&&vt(h,T)?(a(T,h,n,s,r,d,i,o,l),d.resolve(!0)):(a(null,h,d.hiddenContainer,null,r,d,i,o,l),d.deps<=0&&d.resolve()));else if(T&&vt(h,T))a(T,h,n,s,r,d,i,o,l),rn(d,h);else if($n(e,"onPending"),d.pendingBranch=h,d.pendingId++,a(null,h,d.hiddenContainer,null,r,d,i,o,l),d.deps<=0)d.resolve();else{const{timeout:k,pendingId:K}=d;k>0?setTimeout(()=>{d.pendingId===K&&d.fallback(v)},k):k===0&&d.fallback(v)}}function ai(t,e,n,s,r,i,o,l,a,c,u=!1){const{p:d,m:h,um:v,n:T,o:{parentNode:P,remove:B}}=c;let N;const k=hu(t);k&&e!=null&&e.pendingBranch&&(N=e.pendingId,e.deps++);const K=t.props?pc(t.props.timeout):void 0,I={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof K=="number"?K:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(F=!1,J=!1){const{vnode:le,activeBranch:ne,pendingBranch:he,pendingId:ge,effects:be,parentComponent:Ne,container:Ie}=I;let ze=!1;if(I.isHydrating)I.isHydrating=!1;else if(!F){ze=ne&&he.transition&&he.transition.mode==="out-in",ze&&(ne.transition.afterLeave=()=>{ge===I.pendingId&&(h(he,Ie,T(ne),0),Cr(be))});let{anchor:X}=I;ne&&(X=T(ne),v(ne,Ne,I,!0)),ze||h(he,Ie,X,0)}rn(I,he),I.pendingBranch=null,I.isInFallback=!1;let Me=I.parent,pe=!1;for(;Me;){if(Me.pendingBranch){Me.effects.push(...be),pe=!0;break}Me=Me.parent}!pe&&!ze&&Cr(be),I.effects=[],k&&e&&e.pendingBranch&&N===e.pendingId&&(e.deps--,e.deps===0&&!J&&e.resolve()),$n(le,"onResolve")},fallback(F){if(!I.pendingBranch)return;const{vnode:J,activeBranch:le,parentComponent:ne,container:he,isSVG:ge}=I;$n(J,"onFallback");const be=T(le),Ne=()=>{I.isInFallback&&(d(null,F,he,be,ne,null,ge,l,a),rn(I,F))},Ie=F.transition&&F.transition.mode==="out-in";Ie&&(le.transition.afterLeave=Ne),I.isInFallback=!0,v(le,ne,null,!0),Ie||Ne()},move(F,J,le){I.activeBranch&&h(I.activeBranch,F,J,le),I.container=F},next(){return I.activeBranch&&T(I.activeBranch)},registerDep(F,J){const le=!!I.pendingBranch;le&&I.deps++;const ne=F.vnode.el;F.asyncDep.catch(he=>{Kn(he,F,0)}).then(he=>{if(F.isUnmounted||I.isUnmounted||I.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:ge}=F;Or(F,he,!1),ne&&(ge.el=ne);const be=!ne&&F.subTree.el;J(F,ge,P(ne||F.subTree.el),ne?null:T(F.subTree),I,o,a),be&&B(be),oi(F,ge.el),le&&--I.deps===0&&I.resolve()})},unmount(F,J){I.isUnmounted=!0,I.activeBranch&&v(I.activeBranch,n,F,J),I.pendingBranch&&v(I.pendingBranch,n,F,J)}};return I}function uu(t,e,n,s,r,i,o,l,a){const c=e.suspense=ai(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,l,!0),u=a(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(!1,!0),u}function du(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=qi(s?n.default:n),t.ssFallback=s?qi(n.fallback):z(lt)}function qi(t){let e;if(V(t)){const n=un&&t._c;n&&(t._d=!1,M()),t=t(),n&&(t._d=!0,e=$e,Xa())}return j(t)&&(t=eu(t)),t=je(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function fu(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):Cr(t)}function rn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,oi(s,r))}function hu(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const as={};function ds(t,e,n){return La(t,e,n)}function La(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ue){var l;const a=Ic()===((l=we)==null?void 0:l.scope)?we:null;let c,u=!1,d=!1;if(Ce(t)?(c=()=>t.value,u=ys(t)):nn(t)?(c=()=>t,s=!0):j(t)?(d=!0,u=t.some(I=>nn(I)||ys(I)),c=()=>t.map(I=>{if(Ce(I))return I.value;if(nn(I))return $t(I);if(V(I))return It(I,a,2)})):V(t)?e?c=()=>It(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ve(t,a,3,[v])}:c=Qe,e&&s){const I=c;c=()=>$t(I())}let h,v=I=>{h=k.onStop=()=>{It(I,a,4),h=k.onStop=void 0}},T;if(Un)if(v=Qe,e?n&&Ve(e,a,3,[c(),d?[]:void 0,v]):c(),r==="sync"){const I=nd();T=I.__watcherHandles||(I.__watcherHandles=[])}else return Qe;let P=d?new Array(t.length).fill(as):as;const B=()=>{if(k.active)if(e){const I=k.run();(s||u||(d?I.some((F,J)=>Ht(F,P[J])):Ht(I,P)))&&(h&&h(),Ve(e,a,3,[I,P===as?void 0:d&&P[0]===as?[]:P,v]),P=I)}else k.run()};B.allowRecurse=!!e;let N;r==="sync"?N=B:r==="post"?N=()=>Ae(B,a&&a.suspense):(B.pre=!0,a&&(B.id=a.uid),N=()=>si(B));const k=new Xr(c,N);e?n?B():P=k.run():r==="post"?Ae(k.run.bind(k),a&&a.suspense):k.run();const K=()=>{k.stop(),a&&a.scope&&qr(a.scope.effects,k)};return T&&T.push(K),K}function pu(t,e,n){const s=this.proxy,r=_e(t)?t.includes(".")?$a(s,t):()=>s[t]:t.bind(s,s);let i;V(e)?i=e:(i=e.handler,n=e);const o=we;fn(this);const l=La(r,i.bind(s),n);return o?fn(o):Ft(),l}function $a(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function $t(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ce(t))$t(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)$t(t[n],e);else if(ia(t)||tn(t))t.forEach(n=>{$t(n,e)});else if(la(t))for(const n in t)$t(t[n],e);return t}function Vt(t,e){const n=Le;if(n===null)return t;const s=Gs(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,l,a,c=ue]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&$t(l),r.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Ot(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let a=l.dir[s];a&&(bn(),Ve(a,n,8,[t.el,l,t,e]),yn())}}/*! #__NO_SIDE_EFFECTS__ */function Ua(t,e){return V(t)?Ee({name:t.name},e,{setup:t}):t}const fs=t=>!!t.type.__asyncLoader,Ba=t=>t.type.__isKeepAlive;function gu(t,e){Fa(t,"a",e)}function mu(t,e){Fa(t,"da",e)}function Fa(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ws(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ba(r.parent.vnode)&&_u(s,e,n,r),r=r.parent}}function _u(t,e,n,s){const r=Ws(e,t,s,!0);Ha(()=>{qr(s[e],r)},n)}function Ws(t,e,n=we,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;bn(),fn(n);const l=Ve(e,n,t,o);return Ft(),yn(),l});return s?r.unshift(i):r.push(i),i}}const ut=t=>(e,n=we)=>(!Un||t==="sp")&&Ws(t,(...s)=>e(...s),n),Ks=ut("bm"),ja=ut("m"),vu=ut("bu"),bu=ut("u"),yu=ut("bum"),Ha=ut("um"),wu=ut("sp"),Eu=ut("rtg"),Iu=ut("rtc");function xu(t,e=we){Ws("ec",t,e)}function ye(t,e,n,s){let r;const i=n&&n[s];if(j(t)||_e(t)){r=new Array(t.length);for(let o=0,l=t.length;o<l;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(fe(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,i&&i[l]));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];r[l]=e(t[c],c,l,i&&i[l])}}else r=[];return n&&(n[s]=r),r}const Rr=t=>t?el(t)?Gs(t)||t.proxy:Rr(t.parent):null,Sn=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rr(t.parent),$root:t=>Rr(t.root),$emit:t=>t.emit,$options:t=>li(t),$forceUpdate:t=>t.f||(t.f=()=>si(t.update)),$nextTick:t=>t.n||(t.n=Aa.bind(t.proxy)),$watch:t=>pu.bind(t)}),rr=(t,e)=>t!==ue&&!t.__isScriptSetup&&G(t,e),Tu={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(rr(s,e))return o[e]=1,s[e];if(r!==ue&&G(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&G(c,e))return o[e]=3,i[e];if(n!==ue&&G(n,e))return o[e]=4,n[e];Sr&&(o[e]=0)}}const u=Sn[e];let d,h;if(u)return e==="$attrs"&&ke(t,"get",e),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==ue&&G(n,e))return o[e]=4,n[e];if(h=a.config.globalProperties,G(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return rr(r,e)?(r[e]=n,!0):s!==ue&&G(s,e)?(s[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||t!==ue&&G(t,o)||rr(e,o)||(l=i[0])&&G(l,o)||G(s,o)||G(Sn,o)||G(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gi(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sr=!0;function Cu(t){const e=li(t),n=t.proxy,s=t.ctx;Sr=!1,e.beforeCreate&&Ji(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:v,updated:T,activated:P,deactivated:B,beforeDestroy:N,beforeUnmount:k,destroyed:K,unmounted:I,render:F,renderTracked:J,renderTriggered:le,errorCaptured:ne,serverPrefetch:he,expose:ge,inheritAttrs:be,components:Ne,directives:Ie,filters:ze}=e;if(c&&Ru(c,s,null),o)for(const X in o){const Q=o[X];V(Q)&&(s[X]=Q.bind(n))}if(r){const X=r.call(n,n);fe(X)&&(t.data=js(X))}if(Sr=!0,i)for(const X in i){const Q=i[X],nt=V(Q)?Q.bind(n,n):V(Q.get)?Q.get.bind(n,n):Qe,ft=!V(Q)&&V(Q.set)?Q.set.bind(n):Qe,qe=De({get:nt,set:ft});Object.defineProperty(s,X,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Pe=>qe.value=Pe})}if(l)for(const X in l)Va(l[X],s,n,X);if(a){const X=V(a)?a.call(n):a;Reflect.ownKeys(X).forEach(Q=>{hs(Q,X[Q])})}u&&Ji(u,t,"c");function pe(X,Q){j(Q)?Q.forEach(nt=>X(nt.bind(n))):Q&&X(Q.bind(n))}if(pe(Ks,d),pe(ja,h),pe(vu,v),pe(bu,T),pe(gu,P),pe(mu,B),pe(xu,ne),pe(Iu,J),pe(Eu,le),pe(yu,k),pe(Ha,I),pe(wu,he),j(ge))if(ge.length){const X=t.exposed||(t.exposed={});ge.forEach(Q=>{Object.defineProperty(X,Q,{get:()=>n[Q],set:nt=>n[Q]=nt})})}else t.exposed||(t.exposed={});F&&t.render===Qe&&(t.render=F),be!=null&&(t.inheritAttrs=be),Ne&&(t.components=Ne),Ie&&(t.directives=Ie)}function Ru(t,e,n=Qe){j(t)&&(t=Pr(t));for(const s in t){const r=t[s];let i;fe(r)?"default"in r?i=We(r.from||s,r.default,!0):i=We(r.from||s):i=We(r),Ce(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Ji(t,e,n){Ve(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Va(t,e,n,s){const r=s.includes(".")?$a(n,s):()=>n[s];if(_e(t)){const i=e[t];V(i)&&ds(r,i)}else if(V(t))ds(r,t.bind(n));else if(fe(t))if(j(t))t.forEach(i=>Va(i,e,n,s));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&ds(r,i,t)}}function li(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let a;return l?a=l:!r.length&&!n&&!s?a=e:(a={},r.length&&r.forEach(c=>Es(a,c,o,!0)),Es(a,e,o)),fe(e)&&i.set(e,a),a}function Es(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Es(t,i,n,!0),r&&r.forEach(o=>Es(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Su[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Su={data:Yi,props:Xi,emits:Xi,methods:Tn,computed:Tn,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Tn,directives:Tn,watch:Au,provide:Yi,inject:Pu};function Yi(t,e){return e?t?function(){return Ee(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Pu(t,e){return Tn(Pr(t),Pr(e))}function Pr(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Tn(t,e){return t?Ee(Object.create(null),t,e):e}function Xi(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:Ee(Object.create(null),Gi(t),Gi(e??{})):e}function Au(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const s in e)n[s]=Se(t[s],e[s]);return n}function Wa(){return{app:null,config:{isNativeTag:cc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ku=0;function Ou(t,e){return function(s,r=null){V(s)||(s=Ee({},s)),r!=null&&!fe(r)&&(r=null);const i=Wa(),o=new WeakSet;let l=!1;const a=i.app={_uid:ku++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:sd,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(a,...u)):V(c)&&(o.add(c),c(a,...u))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,u){return u?(i.components[c]=u,a):i.components[c]},directive(c,u){return u?(i.directives[c]=u,a):i.directives[c]},mount(c,u,d){if(!l){const h=z(s,r);return h.appContext=i,u&&e?e(h,c):t(h,c,d),l=!0,a._container=c,c.__vue_app__=a,Gs(h.component)||h.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return i.provides[c]=u,a},runWithContext(c){Is=a;try{return c()}finally{Is=null}}};return a}}let Is=null;function hs(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function We(t,e,n=!1){const s=we||Le;if(s||Is){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Is._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}function Nu(t,e,n,s=!1){const r={},i={};bs(i,qs,1),t.propsDefaults=Object.create(null),Ka(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:wa(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Mu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Y(r),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Hs(t.emitsOptions,h))continue;const v=e[h];if(a)if(G(i,h))v!==i[h]&&(i[h]=v,c=!0);else{const T=tt(h);r[T]=Ar(a,l,T,v,t,!1)}else v!==i[h]&&(i[h]=v,c=!0)}}}else{Ka(t,e,r,i)&&(c=!0);let u;for(const d in l)(!e||!G(e,d)&&((u=vn(d))===d||!G(e,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Ar(a,l,d,void 0,t,!0)):delete r[d]);if(i!==l)for(const d in i)(!e||!G(e,d))&&(delete i[d],c=!0)}c&&at(t,"set","$attrs")}function Ka(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(cs(a))continue;const c=e[a];let u;r&&G(r,u=tt(a))?!i||!i.includes(u)?n[u]=c:(l||(l={}))[u]=c:Hs(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(i){const a=Y(n),c=l||ue;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Ar(r,a,d,c[d],t,!G(c,d))}}return o}function Ar(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=G(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:c}=r;n in c?s=c[n]:(fn(r),s=c[n]=a.call(null,e),Ft())}else s=a}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===vn(n))&&(s=!0))}return s}function za(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let a=!1;if(!V(t)){const u=d=>{a=!0;const[h,v]=za(d,e,!0);Ee(o,h),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return fe(t)&&s.set(t,en),en;if(j(i))for(let u=0;u<i.length;u++){const d=tt(i[u]);Qi(d)&&(o[d]=ue)}else if(i)for(const u in i){const d=tt(u);if(Qi(d)){const h=i[u],v=o[d]=j(h)||V(h)?{type:h}:Ee({},h);if(v){const T=to(Boolean,v.type),P=to(String,v.type);v[0]=T>-1,v[1]=P<0||T<P,(T>-1||G(v,"default"))&&l.push(d)}}}const c=[o,l];return fe(t)&&s.set(t,c),c}function Qi(t){return t[0]!=="$"}function Zi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function eo(t,e){return Zi(t)===Zi(e)}function to(t,e){return j(e)?e.findIndex(n=>eo(n,t)):V(e)&&eo(e,t)?0:-1}const qa=t=>t[0]==="_"||t==="$stable",ci=t=>j(t)?t.map(je):[je(t)],Du=(t,e,n)=>{if(e._n)return e;const s=oe((...r)=>ci(e(...r)),n);return s._c=!1,s},Ga=(t,e,n)=>{const s=t._ctx;for(const r in t){if(qa(r))continue;const i=t[r];if(V(i))e[r]=Du(r,i,s);else if(i!=null){const o=ci(i);e[r]=()=>o}}},Ja=(t,e)=>{const n=ci(e);t.slots.default=()=>n},Lu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),bs(e,"_",n)):Ga(e,t.slots={})}else t.slots={},e&&Ja(t,e);bs(t.slots,qs,1)},$u=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ue;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(Ee(r,e),!n&&l===1&&delete r._):(i=!e.$stable,Ga(e,r)),o=e}else e&&(Ja(t,e),o={default:1});if(i)for(const l in r)!qa(l)&&o[l]==null&&delete r[l]};function kr(t,e,n,s,r=!1){if(j(t)){t.forEach((h,v)=>kr(h,e&&(j(e)?e[v]:e),n,s,r));return}if(fs(s)&&!r)return;const i=s.shapeFlag&4?Gs(s.component)||s.component.proxy:s.el,o=r?null:i,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ue?l.refs={}:l.refs,d=l.setupState;if(c!=null&&c!==a&&(_e(c)?(u[c]=null,G(d,c)&&(d[c]=null)):Ce(c)&&(c.value=null)),V(a))It(a,l,12,[o,u]);else{const h=_e(a),v=Ce(a);if(h||v){const T=()=>{if(t.f){const P=h?G(d,a)?d[a]:u[a]:a.value;r?j(P)&&qr(P,i):j(P)?P.includes(i)||P.push(i):h?(u[a]=[i],G(d,a)&&(d[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else h?(u[a]=o,G(d,a)&&(d[a]=o)):v&&(a.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,Ae(T,n)):T()}}}const Ae=fu;function Uu(t){return Bu(t)}function Bu(t,e){const n=yr();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:v=Qe,insertStaticContent:T}=t,P=(f,p,m,_=null,y=null,w=null,S=!1,x=null,C=!!p.dynamicChildren)=>{if(f===p)return;f&&!vt(f,p)&&(_=b(f),Pe(f,y,w,!0),f=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:E,ref:L,shapeFlag:O}=p;switch(E){case zs:B(f,p,m,_);break;case lt:N(f,p,m,_);break;case ir:f==null&&k(p,m,_,S);break;case ae:Ne(f,p,m,_,y,w,S,x,C);break;default:O&1?F(f,p,m,_,y,w,S,x,C):O&6?Ie(f,p,m,_,y,w,S,x,C):(O&64||O&128)&&E.process(f,p,m,_,y,w,S,x,C,R)}L!=null&&y&&kr(L,f&&f.ref,w,p||f,!p)},B=(f,p,m,_)=>{if(f==null)s(p.el=l(p.children),m,_);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},N=(f,p,m,_)=>{f==null?s(p.el=a(p.children||""),m,_):p.el=f.el},k=(f,p,m,_)=>{[f.el,f.anchor]=T(f.children,p,m,_,f.el,f.anchor)},K=({el:f,anchor:p},m,_)=>{let y;for(;f&&f!==p;)y=h(f),s(f,m,_),f=y;s(p,m,_)},I=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=h(f),r(f),f=m;r(p)},F=(f,p,m,_,y,w,S,x,C)=>{S=S||p.type==="svg",f==null?J(p,m,_,y,w,S,x,C):he(f,p,y,w,S,x,C)},J=(f,p,m,_,y,w,S,x)=>{let C,E;const{type:L,props:O,shapeFlag:$,transition:W,dirs:q}=f;if(C=f.el=o(f.type,w,O&&O.is,O),$&8?u(C,f.children):$&16&&ne(f.children,C,null,_,y,w&&L!=="foreignObject",S,x),q&&Ot(f,null,_,"created"),le(C,f,f.scopeId,S,_),O){for(const se in O)se!=="value"&&!cs(se)&&i(C,se,null,O[se],w,f.children,_,y,xe);"value"in O&&i(C,"value",null,O.value),(E=O.onVnodeBeforeMount)&&Je(E,_,f)}q&&Ot(f,null,_,"beforeMount");const ie=Fu(y,W);ie&&W.beforeEnter(C),s(C,p,m),((E=O&&O.onVnodeMounted)||ie||q)&&Ae(()=>{E&&Je(E,_,f),ie&&W.enter(C),q&&Ot(f,null,_,"mounted")},y)},le=(f,p,m,_,y)=>{if(m&&v(f,m),_)for(let w=0;w<_.length;w++)v(f,_[w]);if(y){let w=y.subTree;if(p===w){const S=y.vnode;le(f,S,S.scopeId,S.slotScopeIds,y.parent)}}},ne=(f,p,m,_,y,w,S,x,C=0)=>{for(let E=C;E<f.length;E++){const L=f[E]=x?mt(f[E]):je(f[E]);P(null,L,p,m,_,y,w,S,x)}},he=(f,p,m,_,y,w,S)=>{const x=p.el=f.el;let{patchFlag:C,dynamicChildren:E,dirs:L}=p;C|=f.patchFlag&16;const O=f.props||ue,$=p.props||ue;let W;m&&Nt(m,!1),(W=$.onVnodeBeforeUpdate)&&Je(W,m,p,f),L&&Ot(p,f,m,"beforeUpdate"),m&&Nt(m,!0);const q=y&&p.type!=="foreignObject";if(E?ge(f.dynamicChildren,E,x,m,_,q,w):S||Q(f,p,x,null,m,_,q,w,!1),C>0){if(C&16)be(x,p,O,$,m,_,y);else if(C&2&&O.class!==$.class&&i(x,"class",null,$.class,y),C&4&&i(x,"style",O.style,$.style,y),C&8){const ie=p.dynamicProps;for(let se=0;se<ie.length;se++){const me=ie[se],Be=O[me],Yt=$[me];(Yt!==Be||me==="value")&&i(x,me,Be,Yt,y,f.children,m,_,xe)}}C&1&&f.children!==p.children&&u(x,p.children)}else!S&&E==null&&be(x,p,O,$,m,_,y);((W=$.onVnodeUpdated)||L)&&Ae(()=>{W&&Je(W,m,p,f),L&&Ot(p,f,m,"updated")},_)},ge=(f,p,m,_,y,w,S)=>{for(let x=0;x<p.length;x++){const C=f[x],E=p[x],L=C.el&&(C.type===ae||!vt(C,E)||C.shapeFlag&70)?d(C.el):m;P(C,E,L,null,_,y,w,S,!0)}},be=(f,p,m,_,y,w,S)=>{if(m!==_){if(m!==ue)for(const x in m)!cs(x)&&!(x in _)&&i(f,x,m[x],null,S,p.children,y,w,xe);for(const x in _){if(cs(x))continue;const C=_[x],E=m[x];C!==E&&x!=="value"&&i(f,x,E,C,S,p.children,y,w,xe)}"value"in _&&i(f,"value",m.value,_.value)}},Ne=(f,p,m,_,y,w,S,x,C)=>{const E=p.el=f?f.el:l(""),L=p.anchor=f?f.anchor:l("");let{patchFlag:O,dynamicChildren:$,slotScopeIds:W}=p;W&&(x=x?x.concat(W):W),f==null?(s(E,m,_),s(L,m,_),ne(p.children,m,L,y,w,S,x,C)):O>0&&O&64&&$&&f.dynamicChildren?(ge(f.dynamicChildren,$,m,y,w,S,x),(p.key!=null||y&&p===y.subTree)&&Ya(f,p,!0)):Q(f,p,m,L,y,w,S,x,C)},Ie=(f,p,m,_,y,w,S,x,C)=>{p.slotScopeIds=x,f==null?p.shapeFlag&512?y.ctx.activate(p,m,_,S,C):ze(p,m,_,y,w,S,C):Me(f,p,C)},ze=(f,p,m,_,y,w,S)=>{const x=f.component=Gu(f,_,y);if(Ba(f)&&(x.ctx.renderer=R),Ju(x),x.asyncDep){if(y&&y.registerDep(x,pe),!f.el){const C=x.subTree=z(lt);N(null,C,p,m)}return}pe(x,f,p,m,y,w,S)},Me=(f,p,m)=>{const _=p.component=f.component;if(su(f,p,m))if(_.asyncDep&&!_.asyncResolved){X(_,p,m);return}else _.next=p,Xc(_.update),_.update();else p.el=f.el,_.vnode=p},pe=(f,p,m,_,y,w,S)=>{const x=()=>{if(f.isMounted){let{next:L,bu:O,u:$,parent:W,vnode:q}=f,ie=L,se;Nt(f,!1),L?(L.el=q.el,X(f,L,S)):L=q,O&&us(O),(se=L.props&&L.props.onVnodeBeforeUpdate)&&Je(se,W,L,q),Nt(f,!0);const me=sr(f),Be=f.subTree;f.subTree=me,P(Be,me,d(Be.el),b(Be),f,y,w),L.el=me.el,ie===null&&oi(f,me.el),$&&Ae($,y),(se=L.props&&L.props.onVnodeUpdated)&&Ae(()=>Je(se,W,L,q),y)}else{let L;const{el:O,props:$}=p,{bm:W,m:q,parent:ie}=f,se=fs(p);if(Nt(f,!1),W&&us(W),!se&&(L=$&&$.onVnodeBeforeMount)&&Je(L,ie,p),Nt(f,!0),O&&Z){const me=()=>{f.subTree=sr(f),Z(O,f.subTree,f,y,null)};se?p.type.__asyncLoader().then(()=>!f.isUnmounted&&me()):me()}else{const me=f.subTree=sr(f);P(null,me,m,_,f,y,w),p.el=me.el}if(q&&Ae(q,y),!se&&(L=$&&$.onVnodeMounted)){const me=p;Ae(()=>Je(L,ie,me),y)}(p.shapeFlag&256||ie&&fs(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&Ae(f.a,y),f.isMounted=!0,p=m=_=null}},C=f.effect=new Xr(x,()=>si(E),f.scope),E=f.update=()=>C.run();E.id=f.uid,Nt(f,!0),E()},X=(f,p,m)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,Mu(f,p.props,_,m),$u(f,p.children,m),bn(),Vi(f),yn()},Q=(f,p,m,_,y,w,S,x,C=!1)=>{const E=f&&f.children,L=f?f.shapeFlag:0,O=p.children,{patchFlag:$,shapeFlag:W}=p;if($>0){if($&128){ft(E,O,m,_,y,w,S,x,C);return}else if($&256){nt(E,O,m,_,y,w,S,x,C);return}}W&8?(L&16&&xe(E,y,w),O!==E&&u(m,O)):L&16?W&16?ft(E,O,m,_,y,w,S,x,C):xe(E,y,w,!0):(L&8&&u(m,""),W&16&&ne(O,m,_,y,w,S,x,C))},nt=(f,p,m,_,y,w,S,x,C)=>{f=f||en,p=p||en;const E=f.length,L=p.length,O=Math.min(E,L);let $;for($=0;$<O;$++){const W=p[$]=C?mt(p[$]):je(p[$]);P(f[$],W,m,null,y,w,S,x,C)}E>L?xe(f,y,w,!0,!1,O):ne(p,m,_,y,w,S,x,C,O)},ft=(f,p,m,_,y,w,S,x,C)=>{let E=0;const L=p.length;let O=f.length-1,$=L-1;for(;E<=O&&E<=$;){const W=f[E],q=p[E]=C?mt(p[E]):je(p[E]);if(vt(W,q))P(W,q,m,null,y,w,S,x,C);else break;E++}for(;E<=O&&E<=$;){const W=f[O],q=p[$]=C?mt(p[$]):je(p[$]);if(vt(W,q))P(W,q,m,null,y,w,S,x,C);else break;O--,$--}if(E>O){if(E<=$){const W=$+1,q=W<L?p[W].el:_;for(;E<=$;)P(null,p[E]=C?mt(p[E]):je(p[E]),m,q,y,w,S,x,C),E++}}else if(E>$)for(;E<=O;)Pe(f[E],y,w,!0),E++;else{const W=E,q=E,ie=new Map;for(E=q;E<=$;E++){const Oe=p[E]=C?mt(p[E]):je(p[E]);Oe.key!=null&&ie.set(Oe.key,E)}let se,me=0;const Be=$-q+1;let Yt=!1,Oi=0;const En=new Array(Be);for(E=0;E<Be;E++)En[E]=0;for(E=W;E<=O;E++){const Oe=f[E];if(me>=Be){Pe(Oe,y,w,!0);continue}let Ge;if(Oe.key!=null)Ge=ie.get(Oe.key);else for(se=q;se<=$;se++)if(En[se-q]===0&&vt(Oe,p[se])){Ge=se;break}Ge===void 0?Pe(Oe,y,w,!0):(En[Ge-q]=E+1,Ge>=Oi?Oi=Ge:Yt=!0,P(Oe,p[Ge],m,null,y,w,S,x,C),me++)}const Ni=Yt?ju(En):en;for(se=Ni.length-1,E=Be-1;E>=0;E--){const Oe=q+E,Ge=p[Oe],Mi=Oe+1<L?p[Oe+1].el:_;En[E]===0?P(null,Ge,m,Mi,y,w,S,x,C):Yt&&(se<0||E!==Ni[se]?qe(Ge,m,Mi,2):se--)}}},qe=(f,p,m,_,y=null)=>{const{el:w,type:S,transition:x,children:C,shapeFlag:E}=f;if(E&6){qe(f.component.subTree,p,m,_);return}if(E&128){f.suspense.move(p,m,_);return}if(E&64){S.move(f,p,m,R);return}if(S===ae){s(w,p,m);for(let O=0;O<C.length;O++)qe(C[O],p,m,_);s(f.anchor,p,m);return}if(S===ir){K(f,p,m);return}if(_!==2&&E&1&&x)if(_===0)x.beforeEnter(w),s(w,p,m),Ae(()=>x.enter(w),y);else{const{leave:O,delayLeave:$,afterLeave:W}=x,q=()=>s(w,p,m),ie=()=>{O(w,()=>{q(),W&&W()})};$?$(w,q,ie):ie()}else s(w,p,m)},Pe=(f,p,m,_=!1,y=!1)=>{const{type:w,props:S,ref:x,children:C,dynamicChildren:E,shapeFlag:L,patchFlag:O,dirs:$}=f;if(x!=null&&kr(x,null,m,f,!0),L&256){p.ctx.deactivate(f);return}const W=L&1&&$,q=!fs(f);let ie;if(q&&(ie=S&&S.onVnodeBeforeUnmount)&&Je(ie,p,f),L&6)ts(f.component,m,_);else{if(L&128){f.suspense.unmount(m,_);return}W&&Ot(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,m,y,R,_):E&&(w!==ae||O>0&&O&64)?xe(E,p,m,!1,!0):(w===ae&&O&384||!y&&L&16)&&xe(C,p,m),_&&Gt(f)}(q&&(ie=S&&S.onVnodeUnmounted)||W)&&Ae(()=>{ie&&Je(ie,p,f),W&&Ot(f,null,p,"unmounted")},m)},Gt=f=>{const{type:p,el:m,anchor:_,transition:y}=f;if(p===ae){Jt(m,_);return}if(p===ir){I(f);return}const w=()=>{r(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:x}=y,C=()=>S(m,w);x?x(f.el,w,C):C()}else w()},Jt=(f,p)=>{let m;for(;f!==p;)m=h(f),r(f),f=m;r(p)},ts=(f,p,m)=>{const{bum:_,scope:y,update:w,subTree:S,um:x}=f;_&&us(_),y.stop(),w&&(w.active=!1,Pe(S,f,p,m)),x&&Ae(x,p),Ae(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},xe=(f,p,m,_=!1,y=!1,w=0)=>{for(let S=w;S<f.length;S++)Pe(f[S],p,m,_,y)},b=f=>f.shapeFlag&6?b(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),A=(f,p,m)=>{f==null?p._vnode&&Pe(p._vnode,null,null,!0):P(p._vnode||null,f,p,null,null,null,m),Vi(),Oa(),p._vnode=f},R={p:P,um:Pe,m:qe,r:Gt,mt:ze,mc:ne,pc:Q,pbc:ge,n:b,o:t};let D,Z;return e&&([D,Z]=e(R)),{render:A,hydrate:D,createApp:Ou(A,D)}}function Nt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ya(t,e,n=!1){const s=t.children,r=e.children;if(j(s)&&j(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=mt(r[i]),l.el=o.el),n||Ya(o,l)),l.type===zs&&(l.el=o.el)}}function ju(t){const e=t.slice(),n=[0];let s,r,i,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<c?i=l+1:o=l;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Hu=t=>t.__isTeleport,ae=Symbol.for("v-fgt"),zs=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),ir=Symbol.for("v-stc"),Pn=[];let $e=null;function M(t=!1){Pn.push($e=t?null:[])}function Xa(){Pn.pop(),$e=Pn[Pn.length-1]||null}let un=1;function no(t){un+=t}function Qa(t){return t.dynamicChildren=un>0?$e||en:null,Xa(),un>0&&$e&&$e.push(t),t}function U(t,e,n,s,r,i){return Qa(g(t,e,n,s,r,i,!0))}function xs(t,e,n,s,r){return Qa(z(t,e,n,s,r,!0))}function Ts(t){return t?t.__v_isVNode===!0:!1}function vt(t,e){return t.type===e.type&&t.key===e.key}const qs="__vInternal",Za=({key:t})=>t??null,ps=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||Ce(t)||V(t)?{i:Le,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,s=0,r=null,i=t===ae?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Za(e),ref:e&&ps(e),scopeId:Vs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Le};return l?(di(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=_e(n)?8:16),un>0&&!o&&$e&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&$e.push(a),a}const z=Vu;function Vu(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===ru)&&(t=lt),Ts(t)){const l=dn(t,e,!0);return n&&di(l,n),un>0&&!i&&$e&&(l.shapeFlag&6?$e[$e.indexOf(t)]=l:$e.push(l)),l.patchFlag|=-2,l}if(ed(t)&&(t=t.__vccOpts),e){e=Wu(e);let{class:l,style:a}=e;l&&!_e(l)&&(e.class=Jr(l)),fe(a)&&(Ia(a)&&!j(a)&&(a=Ee({},a)),e.style=Bs(a))}const o=_e(t)?1:ou(t)?128:Hu(t)?64:fe(t)?4:V(t)?2:0;return g(t,e,n,s,r,o,i,!0)}function Wu(t){return t?Ia(t)||qs in t?Ee({},t):t:null}function dn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,l=e?Ku(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Za(l),ref:e&&e.ref?n&&r?j(r)?r.concat(ps(e)):[r,ps(e)]:ps(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ae?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ui(t=" ",e=0){return z(zs,null,t,e)}function An(t="",e=!1){return e?(M(),xs(lt,null,t)):z(lt,null,t)}function je(t){return t==null||typeof t=="boolean"?z(lt):j(t)?z(ae,null,t.slice()):typeof t=="object"?mt(t):z(zs,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dn(t)}function di(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),di(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(qs in e)?e._ctx=Le:r===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),s&64?(n=16,e=[ui(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ku(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Jr([e.class,s.class]));else if(r==="style")e.style=Bs([e.style,s.style]);else if(Ds(r)){const i=e[r],o=s[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Je(t,e,n,s=null){Ve(t,e,7,[n,s])}const zu=Wa();let qu=0;function Gu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||zu,i={uid:qu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new wc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:za(s,r),emitsOptions:Ma(s,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zc.bind(null,i),t.ce&&t.ce(i),i}let we=null,fi,Xt,so="__VUE_INSTANCE_SETTERS__";(Xt=yr()[so])||(Xt=yr()[so]=[]),Xt.push(t=>we=t),fi=t=>{Xt.length>1?Xt.forEach(e=>e(t)):Xt[0](t)};const fn=t=>{fi(t),t.scope.on()},Ft=()=>{we&&we.scope.off(),fi(null)};function el(t){return t.vnode.shapeFlag&4}let Un=!1;function Ju(t,e=!1){Un=e;const{props:n,children:s}=t.vnode,r=el(t);Nu(t,n,r,e),Lu(t,s);const i=r?Yu(t,e):void 0;return Un=!1,i}function Yu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=xa(new Proxy(t.ctx,Tu));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Qu(t):null;fn(t),bn();const i=It(s,t,0,[t.props,r]);if(yn(),Ft(),oa(i)){if(i.then(Ft,Ft),e)return i.then(o=>{Or(t,o,e)}).catch(o=>{Kn(o,t,0)});t.asyncDep=i}else Or(t,i,e)}else tl(t,e)}function Or(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=Sa(e)),tl(t,n)}let ro;function tl(t,e,n){const s=t.type;if(!t.render){if(!e&&ro&&!s.render){const r=s.template||li(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ee(Ee({isCustomElement:i,delimiters:l},o),a);s.render=ro(r,c)}}t.render=s.render||Qe}{fn(t),bn();try{Cu(t)}finally{yn(),Ft()}}}function Xu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ke(t,"get","$attrs"),e[n]}}))}function Qu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Xu(t)},slots:t.slots,emit:t.emit,expose:e}}function Gs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sa(xa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Sn)return Sn[n](t)},has(e,n){return n in e||n in Sn}}))}function Zu(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function ed(t){return V(t)&&"__vccOpts"in t}const De=(t,e)=>Gc(t,e,Un);function nl(t,e,n){const s=arguments.length;return s===2?fe(e)&&!j(e)?Ts(e)?z(t,null,[e]):z(t,e):z(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ts(n)&&(n=[n]),z(t,e,n))}const td=Symbol.for("v-scx"),nd=()=>We(td),sd="3.3.11",rd="http://www.w3.org/2000/svg",Lt=typeof document<"u"?document:null,io=Lt&&Lt.createElement("template"),id={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Lt.createElementNS(rd,t):Lt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Lt.createTextNode(t),createComment:t=>Lt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Lt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{io.innerHTML=s?`<svg>${t}</svg>`:t;const l=io.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},od=Symbol("_vtc");function ad(t,e,n){const s=t[od];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ld=Symbol("_vod");function cd(t,e,n){const s=t.style,r=_e(n);if(n&&!r){if(e&&!_e(e))for(const i in e)n[i]==null&&Nr(s,i,"");for(const i in n)Nr(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),ld in t&&(s.display=i)}}const oo=/\s*!important$/;function Nr(t,e,n){if(j(n))n.forEach(s=>Nr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ud(t,e);oo.test(n)?t.setProperty(vn(s),n.replace(oo,""),"important"):t[s]=n}}const ao=["Webkit","Moz","ms"],or={};function ud(t,e){const n=or[e];if(n)return n;let s=tt(e);if(s!=="filter"&&s in t)return or[e]=s;s=Us(s);for(let r=0;r<ao.length;r++){const i=ao[r]+s;if(i in t)return or[e]=i}return e}const lo="http://www.w3.org/1999/xlink";function dd(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(lo,e.slice(6,e.length)):t.setAttributeNS(lo,e,n);else{const i=yc(e);n==null||i&&!ca(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function fd(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ca(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Qt(t,e,n,s){t.addEventListener(e,n,s)}function hd(t,e,n,s){t.removeEventListener(e,n,s)}const co=Symbol("_vei");function pd(t,e,n,s,r=null){const i=t[co]||(t[co]={}),o=i[e];if(s&&o)o.value=s;else{const[l,a]=gd(e);if(s){const c=i[e]=vd(s,r);Qt(t,l,c,a)}else o&&(hd(t,l,o,a),i[e]=void 0)}}const uo=/(?:Once|Passive|Capture)$/;function gd(t){let e;if(uo.test(t)){e={};let s;for(;s=t.match(uo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vn(t.slice(2)),e]}let ar=0;const md=Promise.resolve(),_d=()=>ar||(md.then(()=>ar=0),ar=Date.now());function vd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ve(bd(s,n.value),e,5,[s])};return n.value=t,n.attached=_d(),n}function bd(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const fo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yd=(t,e,n,s,r=!1,i,o,l,a)=>{e==="class"?ad(t,s,r):e==="style"?cd(t,n,s):Ds(e)?zr(e)||pd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wd(t,e,s,r))?fd(t,e,s,i,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dd(t,e,s,r))};function wd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&fo(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return fo(e)&&_e(n)?!1:e in t}const ho=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>us(e,n):e};function Ed(t){t.target.composing=!0}function po(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const lr=Symbol("_assign"),Wt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[lr]=ho(r);const i=s||r.props&&r.props.type==="number";Qt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=br(l)),t[lr](l)}),n&&Qt(t,"change",()=>{t.value=t.value.trim()}),e||(Qt(t,"compositionstart",Ed),Qt(t,"compositionend",po),Qt(t,"change",po))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[lr]=ho(i),t.composing)return;const o=r||t.type==="number"?br(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===l)||(t.value=l))}},Id=["ctrl","shift","alt","meta"],xd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Id.some(n=>t[`${n}Key`]&&!e.includes(n))},Cs=(t,e)=>t._withMods||(t._withMods=(n,...s)=>{for(let r=0;r<e.length;r++){const i=xd[e[r]];if(i&&i(n,e))return}return t(n,...s)}),Td=Ee({patchProp:yd},id);let go;function Cd(){return go||(go=Uu(Td))}const Rd=(...t)=>{const e=Cd().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Sd(s);if(!r)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Sd(t){return _e(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Zt=typeof window<"u";function Pd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ee=Object.assign;function cr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ke(r)?r.map(t):t(r)}return n}const kn=()=>{},Ke=Array.isArray,Ad=/\/$/,kd=t=>t.replace(Ad,"");function ur(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Dd(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Od(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Nd(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&hn(e.matched[s],n.matched[r])&&sl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Md(t[n],e[n]))return!1;return!0}function Md(t,e){return Ke(t)?_o(t,e):Ke(e)?_o(e,t):t===e}function _o(t,e){return Ke(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Dd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Bn;(function(t){t.pop="pop",t.push="push"})(Bn||(Bn={}));var On;(function(t){t.back="back",t.forward="forward",t.unknown=""})(On||(On={}));function Ld(t){if(!t)if(Zt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kd(t)}const $d=/^[^#]+#/;function Ud(t,e){return t.replace($d,"#")+e}function Bd(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Js=()=>({left:window.pageXOffset,top:window.pageYOffset});function Fd(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Bd(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vo(t,e){return(history.state?history.state.position-e:-1)+t}const Mr=new Map;function jd(t,e){Mr.set(t,e)}function Hd(t){const e=Mr.get(t);return Mr.delete(t),e}let Vd=()=>location.protocol+"//"+location.host;function rl(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let l=r.includes(t.slice(i))?t.slice(i).length:1,a=r.slice(l);return a[0]!=="/"&&(a="/"+a),mo(a,"")}return mo(n,t)+s+r}function Wd(t,e,n,s){let r=[],i=[],o=null;const l=({state:h})=>{const v=rl(t,location),T=n.value,P=e.value;let B=0;if(h){if(n.value=v,e.value=h,o&&o===T){o=null;return}B=P?h.position-P.position:0}else s(v);r.forEach(N=>{N(n.value,T,{delta:B,type:Bn.pop,direction:B?B>0?On.forward:On.back:On.unknown})})};function a(){o=n.value}function c(h){r.push(h);const v=()=>{const T=r.indexOf(h);T>-1&&r.splice(T,1)};return i.push(v),v}function u(){const{history:h}=window;h.state&&h.replaceState(ee({},h.state,{scroll:Js()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:d}}function bo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Js():null}}function Kd(t){const{history:e,location:n}=window,s={value:rl(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:Vd()+t+a;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(v){console.error(v),n[u?"replace":"assign"](h)}}function o(a,c){const u=ee({},e.state,bo(r.value.back,a,r.value.forward,!0),c,{position:r.value.position});i(a,u,!0),s.value=a}function l(a,c){const u=ee({},r.value,e.state,{forward:a,scroll:Js()});i(u.current,u,!0);const d=ee({},bo(s.value,a,null),{position:u.position+1},c);i(a,d,!1),s.value=a}return{location:s,state:r,push:l,replace:o}}function zd(t){t=Ld(t);const e=Kd(t),n=Wd(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ee({location:"",base:t,go:s,createHref:Ud.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function qd(t){return typeof t=="string"||t&&typeof t=="object"}function il(t){return typeof t=="string"||typeof t=="symbol"}const pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ol=Symbol("");var yo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yo||(yo={}));function pn(t,e){return ee(new Error,{type:t,[ol]:!0},e)}function st(t,e){return t instanceof Error&&ol in t&&(e==null||!!(t.type&e))}const wo="[^/]+?",Gd={sensitive:!1,strict:!1,start:!0,end:!0},Jd=/[.+*?^${}()[\]/\\]/g;function Yd(t,e){const n=ee({},Gd,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const h=c[d];let v=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Jd,"\\$&"),v+=40;else if(h.type===1){const{value:T,repeatable:P,optional:B,regexp:N}=h;i.push({name:T,repeatable:P,optional:B});const k=N||wo;if(k!==wo){v+=10;try{new RegExp(`(${k})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${T}" (${k}): `+I.message)}}let K=P?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(K=B&&c.length<2?`(?:/${K})`:"/"+K),B&&(K+="?"),r+=K,v+=20,B&&(v+=-8),P&&(v+=-20),k===".*"&&(v+=-50)}u.push(v)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const v=u[h]||"",T=i[h-1];d[T.name]=v&&T.repeatable?v.split("/"):v}return d}function a(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const v of h)if(v.type===0)u+=v.value;else if(v.type===1){const{value:T,repeatable:P,optional:B}=v,N=T in c?c[T]:"";if(Ke(N)&&!P)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const k=Ke(N)?N.join("/"):N;if(!k)if(B)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${T}"`);u+=k}}return u||"/"}return{re:o,score:s,keys:i,parse:l,stringify:a}}function Xd(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Qd(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Xd(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Eo(s))return 1;if(Eo(r))return-1}return r.length-s.length}function Eo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Zd={type:0,value:""},ef=/[a-zA-Z0-9_]/;function tf(t){if(!t)return[[]];if(t==="/")return[[Zd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${c}": ${v}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,a,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&d(),o()):a===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:a==="("?n=2:ef.test(a)?h():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function nf(t,e,n){const s=Yd(tf(t.path),n),r=ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function sf(t,e){const n=[],s=new Map;e=To({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,d,h){const v=!h,T=rf(u);T.aliasOf=h&&h.record;const P=To(e,u),B=[T];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of K)B.push(ee({},T,{components:h?h.record.components:T.components,path:I,aliasOf:h?h.record:T}))}let N,k;for(const K of B){const{path:I}=K;if(d&&I[0]!=="/"){const F=d.record.path,J=F[F.length-1]==="/"?"":"/";K.path=d.record.path+(I&&J+I)}if(N=nf(K,d,P),h?h.alias.push(N):(k=k||N,k!==N&&k.alias.push(N),v&&u.name&&!xo(N)&&o(u.name)),T.children){const F=T.children;for(let J=0;J<F.length;J++)i(F[J],N,h&&h.children[J])}h=h||N,(N.record.components&&Object.keys(N.record.components).length||N.record.name||N.record.redirect)&&a(N)}return k?()=>{o(k)}:kn}function o(u){if(il(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let d=0;for(;d<n.length&&Qd(u,n[d])>=0&&(u.record.path!==n[d].record.path||!al(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!xo(u)&&s.set(u.record.name,u)}function c(u,d){let h,v={},T,P;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw pn(1,{location:u});P=h.record.name,v=ee(Io(d.params,h.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Io(u.params,h.keys.map(k=>k.name))),T=h.stringify(v)}else if("path"in u)T=u.path,h=n.find(k=>k.re.test(T)),h&&(v=h.parse(T),P=h.record.name);else{if(h=d.name?s.get(d.name):n.find(k=>k.re.test(d.path)),!h)throw pn(1,{location:u,currentLocation:d});P=h.record.name,v=ee({},d.params,u.params),T=h.stringify(v)}const B=[];let N=h;for(;N;)B.unshift(N.record),N=N.parent;return{name:P,path:T,params:v,matched:B,meta:af(B)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:r}}function Io(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function rf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:of(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function of(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function xo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function af(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function To(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function al(t,e){return e.children.some(n=>n===t||al(t,n))}const ll=/#/g,lf=/&/g,cf=/\//g,uf=/=/g,df=/\?/g,cl=/\+/g,ff=/%5B/g,hf=/%5D/g,ul=/%5E/g,pf=/%60/g,dl=/%7B/g,gf=/%7C/g,fl=/%7D/g,mf=/%20/g;function hi(t){return encodeURI(""+t).replace(gf,"|").replace(ff,"[").replace(hf,"]")}function _f(t){return hi(t).replace(dl,"{").replace(fl,"}").replace(ul,"^")}function Dr(t){return hi(t).replace(cl,"%2B").replace(mf,"+").replace(ll,"%23").replace(lf,"%26").replace(pf,"`").replace(dl,"{").replace(fl,"}").replace(ul,"^")}function vf(t){return Dr(t).replace(uf,"%3D")}function bf(t){return hi(t).replace(ll,"%23").replace(df,"%3F")}function yf(t){return t==null?"":bf(t).replace(cf,"%2F")}function Rs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function wf(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(cl," "),o=i.indexOf("="),l=Rs(o<0?i:i.slice(0,o)),a=o<0?null:Rs(i.slice(o+1));if(l in e){let c=e[l];Ke(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Co(t){let e="";for(let n in t){const s=t[n];if(n=vf(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ke(s)?s.map(i=>i&&Dr(i)):[s&&Dr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ef(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ke(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const If=Symbol(""),Ro=Symbol(""),Ys=Symbol(""),pi=Symbol(""),Lr=Symbol("");function In(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _t(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const a=d=>{d===!1?l(pn(4,{from:n,to:e})):d instanceof Error?l(d):qd(d)?l(pn(2,{from:e,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},c=t.call(s&&s.instances[r],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(d=>l(d))})}function dr(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let l=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(xf(l)){const c=(l.__vccOpts||l)[e];c&&r.push(_t(c,n,s,i,o))}else{let a=l();r.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Pd(c)?c.default:c;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&_t(h,n,s,i,o)()}))}}return r}function xf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function So(t){const e=We(Ys),n=We(pi),s=De(()=>e.resolve(ce(t.to))),r=De(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(hn.bind(null,u));if(h>-1)return h;const v=Po(a[c-2]);return c>1&&Po(u)===v&&d[d.length-1].path!==v?d.findIndex(hn.bind(null,a[c-2])):h}),i=De(()=>r.value>-1&&Rf(n.params,s.value.params)),o=De(()=>r.value>-1&&r.value===n.matched.length-1&&sl(n.params,s.value.params));function l(a={}){return Cf(a)?e[ce(t.replace)?"replace":"push"](ce(t.to)).catch(kn):Promise.resolve()}return{route:s,href:De(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}const Tf=Ua({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:So,setup(t,{slots:e}){const n=js(So(t)),{options:s}=We(Ys),r=De(()=>({[Ao(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ao(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:nl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),ve=Tf;function Cf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Rf(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ke(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Po(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ao=(t,e,n)=>t??e??n,Sf=Ua({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=We(Lr),r=De(()=>t.route||s.value),i=We(Ro,0),o=De(()=>{let c=ce(i);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),l=De(()=>r.value.matched[o.value]);hs(Ro,De(()=>o.value+1)),hs(If,l),hs(Lr,r);const a=te();return ds(()=>[a.value,l.value,t.name],([c,u,d],[h,v,T])=>{u&&(u.instances[d]=c,v&&v!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),c&&u&&(!v||!hn(u,v)||!h)&&(u.enterCallbacks[d]||[]).forEach(P=>P(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,d=l.value,h=d&&d.components[u];if(!h)return ko(n.default,{Component:h,route:c});const v=d.props[u],T=v?v===!0?c.params:typeof v=="function"?v(c):v:null,B=nl(h,ee({},T,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return ko(n.default,{Component:B,route:c})||B}}});function ko(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Pf=Sf;function Af(t){const e=sf(t.routes,t),n=t.parseQuery||wf,s=t.stringifyQuery||Co,r=t.history,i=In(),o=In(),l=In(),a=Wc(pt);let c=pt;Zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cr.bind(null,b=>""+b),d=cr.bind(null,yf),h=cr.bind(null,Rs);function v(b,A){let R,D;return il(b)?(R=e.getRecordMatcher(b),D=A):D=b,e.addRoute(D,R)}function T(b){const A=e.getRecordMatcher(b);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(b=>b.record)}function B(b){return!!e.getRecordMatcher(b)}function N(b,A){if(A=ee({},A||a.value),typeof b=="string"){const m=ur(n,b,A.path),_=e.resolve({path:m.path},A),y=r.createHref(m.fullPath);return ee(m,_,{params:h(_.params),hash:Rs(m.hash),redirectedFrom:void 0,href:y})}let R;if("path"in b)R=ee({},b,{path:ur(n,b.path,A.path).path});else{const m=ee({},b.params);for(const _ in m)m[_]==null&&delete m[_];R=ee({},b,{params:d(m)}),A.params=d(A.params)}const D=e.resolve(R,A),Z=b.hash||"";D.params=u(h(D.params));const f=Od(s,ee({},b,{hash:_f(Z),path:D.path})),p=r.createHref(f);return ee({fullPath:f,hash:Z,query:s===Co?Ef(b.query):b.query||{}},D,{redirectedFrom:void 0,href:p})}function k(b){return typeof b=="string"?ur(n,b,a.value.path):ee({},b)}function K(b,A){if(c!==b)return pn(8,{from:A,to:b})}function I(b){return le(b)}function F(b){return I(ee(k(b),{replace:!0}))}function J(b){const A=b.matched[b.matched.length-1];if(A&&A.redirect){const{redirect:R}=A;let D=typeof R=="function"?R(b):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),ee({query:b.query,hash:b.hash,params:"path"in D?{}:b.params},D)}}function le(b,A){const R=c=N(b),D=a.value,Z=b.state,f=b.force,p=b.replace===!0,m=J(R);if(m)return le(ee(k(m),{state:typeof m=="object"?ee({},Z,m.state):Z,force:f,replace:p}),A||R);const _=R;_.redirectedFrom=A;let y;return!f&&Nd(s,D,R)&&(y=pn(16,{to:_,from:D}),qe(D,D,!0,!1)),(y?Promise.resolve(y):ge(_,D)).catch(w=>st(w)?st(w,2)?w:ft(w):Q(w,_,D)).then(w=>{if(w){if(st(w,2))return le(ee({replace:p},k(w.to),{state:typeof w.to=="object"?ee({},Z,w.to.state):Z,force:f}),A||_)}else w=Ne(_,D,!0,p,Z);return be(_,D,w),w})}function ne(b,A){const R=K(b,A);return R?Promise.reject(R):Promise.resolve()}function he(b){const A=Jt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(b):b()}function ge(b,A){let R;const[D,Z,f]=kf(b,A);R=dr(D.reverse(),"beforeRouteLeave",b,A);for(const m of D)m.leaveGuards.forEach(_=>{R.push(_t(_,b,A))});const p=ne.bind(null,b,A);return R.push(p),xe(R).then(()=>{R=[];for(const m of i.list())R.push(_t(m,b,A));return R.push(p),xe(R)}).then(()=>{R=dr(Z,"beforeRouteUpdate",b,A);for(const m of Z)m.updateGuards.forEach(_=>{R.push(_t(_,b,A))});return R.push(p),xe(R)}).then(()=>{R=[];for(const m of f)if(m.beforeEnter)if(Ke(m.beforeEnter))for(const _ of m.beforeEnter)R.push(_t(_,b,A));else R.push(_t(m.beforeEnter,b,A));return R.push(p),xe(R)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),R=dr(f,"beforeRouteEnter",b,A),R.push(p),xe(R))).then(()=>{R=[];for(const m of o.list())R.push(_t(m,b,A));return R.push(p),xe(R)}).catch(m=>st(m,8)?m:Promise.reject(m))}function be(b,A,R){l.list().forEach(D=>he(()=>D(b,A,R)))}function Ne(b,A,R,D,Z){const f=K(b,A);if(f)return f;const p=A===pt,m=Zt?history.state:{};R&&(D||p?r.replace(b.fullPath,ee({scroll:p&&m&&m.scroll},Z)):r.push(b.fullPath,Z)),a.value=b,qe(b,A,R,p),ft()}let Ie;function ze(){Ie||(Ie=r.listen((b,A,R)=>{if(!ts.listening)return;const D=N(b),Z=J(D);if(Z){le(ee(Z,{replace:!0}),D).catch(kn);return}c=D;const f=a.value;Zt&&jd(vo(f.fullPath,R.delta),Js()),ge(D,f).catch(p=>st(p,12)?p:st(p,2)?(le(p.to,D).then(m=>{st(m,20)&&!R.delta&&R.type===Bn.pop&&r.go(-1,!1)}).catch(kn),Promise.reject()):(R.delta&&r.go(-R.delta,!1),Q(p,D,f))).then(p=>{p=p||Ne(D,f,!1),p&&(R.delta&&!st(p,8)?r.go(-R.delta,!1):R.type===Bn.pop&&st(p,20)&&r.go(-1,!1)),be(D,f,p)}).catch(kn)}))}let Me=In(),pe=In(),X;function Q(b,A,R){ft(b);const D=pe.list();return D.length?D.forEach(Z=>Z(b,A,R)):console.error(b),Promise.reject(b)}function nt(){return X&&a.value!==pt?Promise.resolve():new Promise((b,A)=>{Me.add([b,A])})}function ft(b){return X||(X=!b,ze(),Me.list().forEach(([A,R])=>b?R(b):A()),Me.reset()),b}function qe(b,A,R,D){const{scrollBehavior:Z}=t;if(!Zt||!Z)return Promise.resolve();const f=!R&&Hd(vo(b.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return Aa().then(()=>Z(b,A,f)).then(p=>p&&Fd(p)).catch(p=>Q(p,b,A))}const Pe=b=>r.go(b);let Gt;const Jt=new Set,ts={currentRoute:a,listening:!0,addRoute:v,removeRoute:T,hasRoute:B,getRoutes:P,resolve:N,options:t,push:I,replace:F,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:pe.add,isReady:nt,install(b){const A=this;b.component("RouterLink",ve),b.component("RouterView",Pf),b.config.globalProperties.$router=A,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ce(a)}),Zt&&!Gt&&a.value===pt&&(Gt=!0,I(r.location).catch(Z=>{}));const R={};for(const Z in pt)Object.defineProperty(R,Z,{get:()=>a.value[Z],enumerable:!0});b.provide(Ys,A),b.provide(pi,wa(R)),b.provide(Lr,a);const D=b.unmount;Jt.add(b),b.unmount=function(){Jt.delete(b),Jt.size<1&&(c=pt,Ie&&Ie(),Ie=null,a.value=pt,Gt=!1,X=!1),D()}}};function xe(b){return b.reduce((A,R)=>A.then(()=>he(R)),Promise.resolve())}return ts}function kf(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(c=>hn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>hn(c,a))||r.push(a))}return[n,s,r]}function gi(){return We(Ys)}function mi(){return We(pi)}const hl="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='11'%20cy='11'%20r='7'%20stroke='%23394150'%20stroke-width='2'/%3e%3cpath%20d='M20%2020L17%2017'%20stroke='%23394150'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e";var Oo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Of=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],a=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},gl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=i>>2,d=(i&3)<<4|l>>4;let h=(l&15)<<2|c>>6,v=c&63;a||(v=64,o||(h=64)),s.push(n[u],n[d],n[h],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Of(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||c==null||d==null)throw new Nf;const h=i<<2|l>>4;if(s.push(h),c!==64){const v=l<<4&240|c>>2;if(s.push(v),d!==64){const T=c<<6&192|d;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mf=function(t){const e=pl(t);return gl.encodeByteArray(e,!0)},ml=function(t){return Mf(t).replace(/\./g,"")},_l=function(t){try{return gl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Lf=()=>Df().__FIREBASE_DEFAULTS__,$f=()=>{if(typeof process>"u"||typeof Oo>"u")return;const t=Oo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_l(t[1]);return e&&JSON.parse(e)},_i=()=>{try{return Lf()||$f()||Uf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bf=t=>{var e,n;return(n=(e=_i())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vl=()=>{var t;return(t=_i())===null||t===void 0?void 0:t.config},bl=t=>{var e;return(e=_i())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qf="FirebaseError";class Rt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qf,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Gf(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Rt(r,l,s)}}function Gf(t,e){return t.replace(Jf,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Jf=/\{\$([^}]+)}/g;function Yf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ss(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(No(i)&&No(o)){if(!Ss(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function No(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Cn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Rn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Xf(t,e){const n=new Qf(t,e);return n.subscribe.bind(n)}class Qf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Zf(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=fr),r.error===void 0&&(r.error=fr),r.complete===void 0&&(r.complete=fr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fr(){}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mt="[DEFAULT]";/**
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
 */class eh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ff;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nh(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:th(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function th(t){return t===Mt?void 0:t}function nh(t){return t.instantiationMode==="EAGER"}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const rh={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ih=re.INFO,oh={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},ah=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=oh[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yl{constructor(e){this.name=e,this._logLevel=ih,this._logHandler=ah,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const lh=(t,e)=>e.some(n=>t instanceof n);let Mo,Do;function ch(){return Mo||(Mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uh(){return Do||(Do=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wl=new WeakMap,$r=new WeakMap,El=new WeakMap,hr=new WeakMap,vi=new WeakMap;function dh(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wl.set(n,t)}).catch(()=>{}),vi.set(e,t),e}function fh(t){if($r.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});$r.set(t,e)}let Ur={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $r.get(t);if(e==="objectStoreNames")return t.objectStoreNames||El.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hh(t){Ur=t(Ur)}function ph(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(pr(this),e,...n);return El.set(s,e.sort?e.sort():[e]),xt(s)}:uh().includes(t)?function(...e){return t.apply(pr(this),e),xt(wl.get(this))}:function(...e){return xt(t.apply(pr(this),e))}}function gh(t){return typeof t=="function"?ph(t):(t instanceof IDBTransaction&&fh(t),lh(t,ch())?new Proxy(t,Ur):t)}function xt(t){if(t instanceof IDBRequest)return dh(t);if(hr.has(t))return hr.get(t);const e=gh(t);return e!==t&&(hr.set(t,e),vi.set(e,t)),e}const pr=t=>vi.get(t);function mh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=xt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(xt(o.result),a.oldVersion,a.newVersion,xt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),r&&a.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const _h=["get","getKey","getAll","getAllKeys","count"],vh=["put","add","delete","clear"],gr=new Map;function Lo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gr.get(e))return gr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=vh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||_h.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,r?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),r&&a.done]))[0]};return gr.set(e,i),i}hh(t=>({...t,get:(e,n,s)=>Lo(e,n)||t.get(e,n,s),has:(e,n)=>!!Lo(e,n)||t.has(e,n)}));/**
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
 */class bh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Br="@firebase/app",$o="0.9.25";/**
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
 */const Kt=new yl("@firebase/app"),wh="@firebase/app-compat",Eh="@firebase/analytics-compat",Ih="@firebase/analytics",xh="@firebase/app-check-compat",Th="@firebase/app-check",Ch="@firebase/auth",Rh="@firebase/auth-compat",Sh="@firebase/database",Ph="@firebase/database-compat",Ah="@firebase/functions",kh="@firebase/functions-compat",Oh="@firebase/installations",Nh="@firebase/installations-compat",Mh="@firebase/messaging",Dh="@firebase/messaging-compat",Lh="@firebase/performance",$h="@firebase/performance-compat",Uh="@firebase/remote-config",Bh="@firebase/remote-config-compat",Fh="@firebase/storage",jh="@firebase/storage-compat",Hh="@firebase/firestore",Vh="@firebase/firestore-compat",Wh="firebase",Kh="10.7.1";/**
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
 */const Fr="[DEFAULT]",zh={[Br]:"fire-core",[wh]:"fire-core-compat",[Ih]:"fire-analytics",[Eh]:"fire-analytics-compat",[Th]:"fire-app-check",[xh]:"fire-app-check-compat",[Ch]:"fire-auth",[Rh]:"fire-auth-compat",[Sh]:"fire-rtdb",[Ph]:"fire-rtdb-compat",[Ah]:"fire-fn",[kh]:"fire-fn-compat",[Oh]:"fire-iid",[Nh]:"fire-iid-compat",[Mh]:"fire-fcm",[Dh]:"fire-fcm-compat",[Lh]:"fire-perf",[$h]:"fire-perf-compat",[Uh]:"fire-rc",[Bh]:"fire-rc-compat",[Fh]:"fire-gcs",[jh]:"fire-gcs-compat",[Hh]:"fire-fst",[Vh]:"fire-fst-compat","fire-js":"fire-js",[Wh]:"fire-js-all"};/**
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
 */const Ps=new Map,jr=new Map;function qh(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(jr.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;jr.set(e,t);for(const n of Ps.values())qh(n,t);return!0}function Il(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Gh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tt=new qn("app","Firebase",Gh);/**
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
 */class Jh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const Jn=Kh;function xl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Tt.create("bad-app-name",{appName:String(r)});if(n||(n=vl()),!n)throw Tt.create("no-options");const i=Ps.get(r);if(i){if(Ss(n,i.options)&&Ss(s,i.config))return i;throw Tt.create("duplicate-app",{appName:r})}const o=new sh(r);for(const a of jr.values())o.addComponent(a);const l=new Jh(n,s,o);return Ps.set(r,l),l}function Yh(t=Fr){const e=Ps.get(t);if(!e&&t===Fr&&vl())return xl();if(!e)throw Tt.create("no-app",{appName:t});return e}function on(t,e,n){var s;let r=(s=zh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(l.join(" "));return}Fn(new gn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Xh="firebase-heartbeat-database",Qh=1,jn="firebase-heartbeat-store";let mr=null;function Tl(){return mr||(mr=mh(Xh,Qh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jn)}}}).catch(t=>{throw Tt.create("idb-open",{originalErrorMessage:t.message})})),mr}async function Zh(t){try{return await(await Tl()).transaction(jn).objectStore(jn).get(Cl(t))}catch(e){if(e instanceof Rt)Kt.warn(e.message);else{const n=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}async function Uo(t,e){try{const s=(await Tl()).transaction(jn,"readwrite");await s.objectStore(jn).put(e,Cl(t)),await s.done}catch(n){if(n instanceof Rt)Kt.warn(n.message);else{const s=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kt.warn(s.message)}}}function Cl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ep=1024,tp=30*24*60*60*1e3;class np{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=tp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bo(),{heartbeatsToSend:s,unsentEntries:r}=sp(this._heartbeatsCache.heartbeats),i=ml(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bo(){return new Date().toISOString().substring(0,10)}function sp(t,e=ep){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Fo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Fo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kf()?zf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fo(t){return ml(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ip(t){Fn(new gn("platform-logger",e=>new bh(e),"PRIVATE")),Fn(new gn("heartbeat",e=>new np(e),"PRIVATE")),on(Br,$o,t),on(Br,$o,"esm2017"),on("fire-js","")}ip("");function bi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Rl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const op=Rl,Sl=new qn("auth","Firebase",Rl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new yl("@firebase/auth");function ap(t,...e){As.logLevel<=re.WARN&&As.warn(`Auth (${Jn}): ${t}`,...e)}function gs(t,...e){As.logLevel<=re.ERROR&&As.error(`Auth (${Jn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,...e){throw yi(t,...e)}function Ze(t,...e){return yi(t,...e)}function Pl(t,e,n){const s=Object.assign(Object.assign({},op()),{[e]:n});return new qn("auth","Firebase",s).create(e,{appName:t.name})}function lp(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ue(t,"argument-error"),Pl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Sl.create(t,...e)}function H(t,e,...n){if(!t)throw yi(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gs(e),new Error(e)}function ct(t,e){t||it(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cp(){return jo()==="http:"||jo()==="https:"}function jo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=jf()||Vf()}get(){return up()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const hp=new Yn(3e4,6e4);function St(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pt(t,e,n,s,r={}){return kl(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=Gn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Al.fetch()(Ol(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function kl(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},fp),e);try{const r=new gp(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ls(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ls(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ls(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ls(t,"user-disabled",o);const u=s[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pl(t,u,c);Ue(t,u)}}catch(r){if(r instanceof Rt)throw r;Ue(t,"network-request-failed",{message:String(r)})}}async function Xn(t,e,n,s,r={}){const i=await Pt(t,e,n,s,r);return"mfaPendingCredential"in i&&Ue(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ol(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?wi(t.config,r):`${t.config.apiScheme}://${r}`}function pp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ze(this.auth,"network-request-failed")),hp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ls(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ze(t,e,s);return r.customData._tokenResponse=n,r}function Ho(t){return t!==void 0&&t.enterprise!==void 0}class mp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _p(t,e){return Pt(t,"GET","/v2/recaptchaConfig",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Nn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yp(t,e=!1){const n=dt(t),s=await n.getIdToken(e),r=Ei(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Nn(_r(r.auth_time)),issuedAtTime:Nn(_r(r.iat)),expirationTime:Nn(_r(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _r(t){return Number(t)*1e3}function Ei(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return gs("JWT malformed, contained fewer than 3 sections"),null;try{const r=_l(n);return r?JSON.parse(r):(gs("Failed to decode base64 JWT payload"),null)}catch(r){return gs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function wp(t){const e=Ei(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Rt&&Ep(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ep({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nn(this.lastLoginAt),this.creationTime=Nn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ks(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Hn(t,bp(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cp(i.providerUserInfo):[],l=Tp(t.providerData,o),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Nl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function xp(t){const e=dt(t);await ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tp(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Cp(t){return t.map(e=>{var{providerId:n}=e,s=bi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(t,e){const n=await kl(t,{},async()=>{const s=Gn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Ol(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Al.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Sp(t,e){return Pt(t,"POST","/v2/accounts:revokeToken",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Rp(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Vn;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=bi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ip(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yp(this,e)}reload(){return xp(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ks(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hn(this,vp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,a,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,B=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:I,isAnonymous:F,providerData:J,stsTokenManager:le}=n;H(K&&le,e,"internal-error");const ne=Vn.fromJSON(this.name,le);H(typeof K=="string",e,"internal-error"),gt(d,e.name),gt(h,e.name),H(typeof I=="boolean",e,"internal-error"),H(typeof F=="boolean",e,"internal-error"),gt(v,e.name),gt(T,e.name),gt(P,e.name),gt(B,e.name),gt(N,e.name),gt(k,e.name);const he=new jt({uid:K,auth:e,email:h,emailVerified:I,displayName:d,isAnonymous:F,photoURL:T,phoneNumber:v,tenantId:P,stsTokenManager:ne,createdAt:N,lastLoginAt:k});return J&&Array.isArray(J)&&(he.providerData=J.map(ge=>Object.assign({},ge))),B&&(he._redirectEventId=B),he}static async _fromIdTokenResponse(e,n,s=!1){const r=new Vn;r.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ks(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map;function ot(t){ct(t instanceof Function,"Expected a class definition");let e=Vo.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vo.set(t,e),e)}/**
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
 */function ms(t,e,n){return`firebase:${t}:${e}:${n}`}class an{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ms(this.userKey,r.apiKey,i),this.fullPersistenceKey=ms("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new an(ot(Wo),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||ot(Wo);const o=ms(s,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const d=jt._fromJSON(e,u);c!==i&&(l=d),i=c;break}}catch{}const a=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new an(i,e,s):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new an(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($l(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bl(e))return"Blackberry";if(Fl(e))return"Webos";if(Ii(e))return"Safari";if((e.includes("chrome/")||Ll(e))&&!e.includes("edge/"))return"Chrome";if(Ul(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Dl(t=Re()){return/firefox\//i.test(t)}function Ii(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ll(t=Re()){return/crios\//i.test(t)}function $l(t=Re()){return/iemobile/i.test(t)}function Ul(t=Re()){return/android/i.test(t)}function Bl(t=Re()){return/blackberry/i.test(t)}function Fl(t=Re()){return/webos/i.test(t)}function Xs(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pp(t=Re()){var e;return Xs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ap(){return Wf()&&document.documentMode===10}function jl(t=Re()){return Xs(t)||Ul(t)||Fl(t)||Bl(t)||/windows phone/i.test(t)||$l(t)}function kp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e=[]){let n;switch(t){case"Browser":n=Ko(Re());break;case"Worker":n=`${Ko(Re())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jn}/${s}`}/**
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
 */class Op{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Np(t,e={}){return Pt(t,"GET","/v2/passwordPolicy",St(t,e))}/**
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
 */const Mp=6;class Dp{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Mp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(s=a.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsLowercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zo(this),this.idTokenSubscription=new zo(this),this.beforeStateQueue=new Op(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await an.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ks(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Np(this),n=new Dp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Sp(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ot(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,s,r);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ap(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function At(t){return dt(t)}class zo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xf(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Vl(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ze("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",$p().appendChild(s)})}function Up(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Bp="https://www.google.com/recaptcha/enterprise.js?render=",Fp="recaptcha-enterprise",jp="NO_RECAPTCHA";class Hp{constructor(e){this.type=Fp,this.auth=At(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{_p(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new mp(a);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function r(i,o,l){const a=window.grecaptcha;Ho(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(jp)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(l=>{if(!n&&Ho(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Vl(Bp+l).then(()=>{r(l,i,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function qo(t,e,n,s=!1){const r=new Hp(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Vr(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qo(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qo(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t,e){const n=Il(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ss(i,e??{}))return r;Ue(r,"already-initialized")}return n.initialize({options:e})}function Wp(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Kp(t,e,n){const s=At(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Wl(e),{host:o,port:l}=zp(e),a=l===null?"":`:${l}`;s.config.emulator={url:`${i}//${o}${a}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||qp()}function Wl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zp(t){const e=Wl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Go(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Go(o)}}}function Go(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}async function Gp(t,e){return Pt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(t,e){return Xn(t,"POST","/v1/accounts:signInWithPassword",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",St(t,e))}async function Xp(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends xi{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Wn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Wn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vr(e,n,"signInWithPassword",Jp);case"emailLink":return Yp(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vr(e,s,"signUpPassword",Gp);case"emailLink":return Xp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(t,e){return Xn(t,"POST","/v1/accounts:signInWithIdp",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="http://localhost";class zt extends xi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=bi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new zt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ln(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ln(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ln(e,n)}buildRequest(){const e={requestUri:Qp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eg(t){const e=Cn(Rn(t)).link,n=e?Cn(Rn(e)).deep_link_id:null,s=Cn(Rn(t)).deep_link_id;return(s?Cn(Rn(s)).link:null)||s||n||e||t}class Ti{constructor(e){var n,s,r,i,o,l;const a=Cn(Rn(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(s=a.oobCode)!==null&&s!==void 0?s:null,d=Zp((r=a.mode)!==null&&r!==void 0?r:null);H(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=eg(e);try{return new Ti(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.providerId=wn.PROVIDER_ID}static credential(e,n){return Wn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ti.parseLink(n);return H(s,"argument-error"),Wn._fromEmailAndCode(e,s.code,s.tenantId)}}wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qn extends Ci{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Qn{constructor(){super("facebook.com")}static credential(e){return zt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Qn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zt._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Xe.credential(n,s)}catch{return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com";Xe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Qn{constructor(){super("github.com")}static credential(e){return zt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Qn{constructor(){super("twitter.com")}static credential(e,n){return zt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return wt.credential(n,s)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(t,e){return Xn(t,"POST","/v1/accounts:signUp",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await jt._fromIdTokenResponse(e,s,r),o=Jo(s);return new qt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Jo(s);return new qt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Jo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends Rt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Os(e,n,s,r)}}function Kl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(t,i,e,s):i})}async function ng(t,e,n=!1){const s=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qt._forOperation(t,"link",s)}/**
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
 */async function sg(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Hn(t,Kl(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=Ei(i.idToken);H(o,s,"internal-error");const{sub:l}=o;return H(t.uid===l,s,"user-mismatch"),qt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ue(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(t,e,n=!1){const s="signIn",r=await Kl(t,s,e),i=await qt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function rg(t,e){return zl(At(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){const e=At(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ig(t,e,n){const s=At(t),o=await Vr(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tg).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ql(t),a}),l=await qt._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function og(t,e,n){return rg(dt(t),wn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ql(t),s})}function ag(t,e,n,s){return dt(t).onIdTokenChanged(e,n,s)}function lg(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function Gl(t,e,n,s){return dt(t).onAuthStateChanged(e,n,s)}function cg(t){return dt(t).signOut()}const Ns="__sak";/**
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
 */class Jl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ns,"1"),this.storage.removeItem(Ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(){const t=Re();return Ii(t)||Xs(t)}const dg=1e3,fg=10;class Yl extends Jl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ug()&&kp(),this.fallbackToPolling=jl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Ap()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,fg):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},dg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yl.type="LOCAL";const hg=Yl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Jl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xl.type="SESSION";const Ql=Xl;/**
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
 */class Qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Qs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async c=>c(n.origin,i)),a=await pg(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const c=Ri("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(h.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function mg(t){et().location.href=t}/**
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
 */function Zl(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function _g(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bg(){return Zl()?self:null}/**
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
 */const ec="firebaseLocalStorageDb",yg=1,Ms="firebaseLocalStorage",tc="fbase_key";class Zn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zs(t,e){return t.transaction([Ms],e?"readwrite":"readonly").objectStore(Ms)}function wg(){const t=indexedDB.deleteDatabase(ec);return new Zn(t).toPromise()}function Wr(){const t=indexedDB.open(ec,yg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ms,{keyPath:tc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ms)?e(s):(s.close(),await wg(),e(await Wr()))})})}async function Yo(t,e,n){const s=Zs(t,!0).put({[tc]:e,value:n});return new Zn(s).toPromise()}async function Eg(t,e){const n=Zs(t,!1).get(e),s=await new Zn(n).toPromise();return s===void 0?null:s.value}function Xo(t,e){const n=Zs(t,!0).delete(e);return new Zn(n).toPromise()}const Ig=800,xg=3;class nc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>xg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(bg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _g(),!this.activeServiceWorker)return;this.sender=new gg(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wr();return await Yo(e,Ns,"1"),await Xo(e,Ns),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Eg(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Zs(r,!1).getAll();return new Zn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nc.type="LOCAL";const Tg=nc;new Yn(3e4,6e4);/**
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
 */function sc(t,e){return e?ot(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Si extends xi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Cg(t){return zl(t.auth,new Si(t),t.bypassAuthState)}function Rg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),sg(n,new Si(t),t.bypassAuthState)}async function Sg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),ng(n,new Si(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cg;case"linkViaPopup":case"linkViaRedirect":return Sg;case"reauthViaPopup":case"reauthViaRedirect":return Rg;default:Ue(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Yn(2e3,1e4);async function ic(t,e,n){const s=At(t);lp(t,e,Ci);const r=sc(s,n);return new Ut(s,"signInViaPopup",e,r).executeNotNull()}class Ut extends rc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=Ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pg.get())};e()}}Ut.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="pendingRedirect",_s=new Map;class kg extends rc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_s.get(this.auth._key());if(!e){try{const s=await Og(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_s.set(this.auth._key(),e)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Og(t,e){const n=Dg(e),s=Mg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Ng(t,e){_s.set(t._key(),e)}function Mg(t){return ot(t._redirectPersistence)}function Dg(t){return ms(Ag,t.config.apiKey,t.name)}async function Lg(t,e,n=!1){const s=At(t),r=sc(s,e),o=await new kg(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=10*60*1e3;class Ug{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!oc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ze(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$g&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qo(e))}saveEventToCache(e){this.cachedEventUids.add(Qo(e)),this.lastProcessedEventTime=Date.now()}}function Qo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const jg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hg=/^https?/;async function Vg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fg(t);for(const n of e)try{if(Wg(n))return}catch{}Ue(t,"unauthorized-domain")}function Wg(t){const e=Hr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Hg.test(n))return!1;if(jg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Kg=new Yn(3e4,6e4);function Zo(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zg(t){return new Promise((e,n)=>{var s,r,i;function o(){Zo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zo(),n(Ze(t,"network-request-failed"))},timeout:Kg.get()})}if(!((r=(s=et().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=et().gapi)===null||i===void 0)&&i.load)o();else{const l=Up("iframefcb");return et()[l]=()=>{gapi.load?o():n(Ze(t,"network-request-failed"))},Vl(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw vs=null,e})}let vs=null;function qg(t){return vs=vs||zg(t),vs}/**
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
 */const Gg=new Yn(5e3,15e3),Jg="__/auth/iframe",Yg="emulator/auth/iframe",Xg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zg(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wi(e,Yg):`https://${t.config.authDomain}/${Jg}`,s={apiKey:e.apiKey,appName:t.name,v:Jn},r=Qg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Gn(s).slice(1)}`}async function em(t){const e=await qg(t),n=et().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:Zg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ze(t,"network-request-failed"),l=et().setTimeout(()=>{i(o)},Gg.get());function a(){et().clearTimeout(l),r(s)}s.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const tm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nm=500,sm=600,rm="_blank",im="http://localhost";class ea{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function om(t,e,n,s=nm,r=sm){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const a=Object.assign(Object.assign({},tm),{width:s.toString(),height:r.toString(),top:i,left:o}),c=Re().toLowerCase();n&&(l=Ll(c)?rm:n),Dl(c)&&(e=e||im,a.scrollbars="yes");const u=Object.entries(a).reduce((h,[v,T])=>`${h}${v}=${T},`,"");if(Pp(c)&&l!=="_self")return am(e||"",l),new ea(null);const d=window.open(e||"",l,u);H(d,t,"popup-blocked");try{d.focus()}catch{}return new ea(d)}function am(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const lm="__/auth/handler",cm="emulator/auth/handler",um=encodeURIComponent("fac");async function ta(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Jn,eventId:r};if(e instanceof Ci){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof Qn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await t._getAppCheckToken(),c=a?`#${um}=${encodeURIComponent(a)}`:"";return`${dm(t)}?${Gn(l).slice(1)}${c}`}function dm({config:t}){return t.emulator?wi(t,cm):`https://${t.authDomain}/${lm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="webStorageSupport";class fm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ql,this._completeRedirectFn=Lg,this._overrideRedirectResult=Ng}async _openPopup(e,n,s,r){var i;ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ta(e,n,s,Hr(),r);return om(e,o,Ri())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ta(e,n,s,Hr(),r);return mg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ct(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await em(e),s=new Ug(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vr,{type:vr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[vr];o!==void 0&&n(!!o),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jl()||Ii()||Xs()}}const hm=fm;var na="@firebase/auth",sa="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mm(t){Fn(new gn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hl(t)},c=new Lp(s,r,i,a);return Wp(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Fn(new gn("auth-internal",e=>{const n=At(e.getProvider("auth").getImmediate());return(s=>new pm(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(na,sa,gm(t)),on(na,sa,"esm2017")}/**
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
 */const _m=5*60,vm=bl("authIdTokenMaxAge")||_m;let ra=null;const bm=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>vm)return;const r=n==null?void 0:n.token;ra!==r&&(ra=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function mn(t=Yh()){const e=Il(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vp(t,{popupRedirectResolver:hm,persistence:[Tg,hg,Ql]}),s=bl("authTokenSyncURL");if(s){const i=bm(s);lg(n,i,()=>i(n.currentUser)),ag(n,o=>i(o))}const r=Bf("auth");return r&&Kp(n,`http://${r}`),n}mm("Browser");const ym="/assets/hero-imagehc-D6vI5bIK.jpg",wm="/assets/hero-text--xnBRz4p.svg",es=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Em={},Im={class:"sm:pt-[12px] w-full"},xm=g("div",{class:"maintop relative"},[g("img",{src:ym,alt:"",srcset:"",class:"w-full h-[190px] sm:h-[330px] sm:rounded-lg mainimg sm:hidden md:block md:h-full 2xl:h-[60vh]"}),g("img",{src:wm,alt:"",srcset:"",class:"absolute top-6 right-20 sm:top-8 sm:right-16 w-[35%] sm:w-[45%] md:w-[35%] md:top-[8%] md:right-[15%] 2xl:w-[27%] 2xl:right-[22%]"})],-1),Tm=[xm];function Cm(t,e){return M(),U("div",Im,Tm)}const Rm=es(Em,[["render",Cm]]),Sm={class:"grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},Pm=["src"],Am=["src"],km=["src"],Om=["src"],Nm=["src"],Mm=["src"],Dm=["src"],Lm=["src"],$m=["src"],Um="https://www.themealdb.com/api/json/v1/1/lookup.php?i=53049",Bm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52893",Fm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768",jm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767",Hm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855",Vm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52894",Wm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52877",Km="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52835",zm="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52999",qm={__name:"baserecipes",setup(t){const e=te({});fetch(`${Um}`).then(u=>u.json()).then(u=>{console.log(u),e.value=u});const n=te({});fetch(`${Bm}`).then(u=>u.json()).then(u=>{n.value=u});const s=te({});fetch(`${Fm}`).then(u=>u.json()).then(u=>{s.value=u});const r=te({});fetch(`${jm}`).then(u=>u.json()).then(u=>{r.value=u});const i=te({});fetch(`${Hm}`).then(u=>u.json()).then(u=>{i.value=u});const o=te({});fetch(`${Vm}`).then(u=>u.json()).then(u=>{o.value=u});const l=te({});fetch(`${Wm}`).then(u=>u.json()).then(u=>{l.value=u});const a=te({});fetch(`${Km}`).then(u=>u.json()).then(u=>{a.value=u});const c=te({});return fetch(`${zm}`).then(u=>u.json()).then(u=>{c.value=u}),(u,d)=>(M(),U("section",Sm,[(M(!0),U(ae,null,ye(e.value.meals,h=>(M(),U("div",null,[z(ce(ve),{to:/meals/+h.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:oe(()=>[g("img",{src:h.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Pm),g("div",null,de(h.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),U(ae,null,ye(n.value.meals,h=>(M(),U("div",null,[z(ce(ve),{to:/meals/+h.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:oe(()=>[g("img",{src:h.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Am),g("div",null,de(h.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),U(ae,null,ye(s.value.meals,h=>(M(),U("div",null,[z(ce(ve),{to:/meals/+h.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:oe(()=>[g("img",{src:h.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,km),g("div",null,de(h.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),U(ae,null,ye(r.value.meals,h=>(M(),U("div",null,[z(ce(ve),{to:/meals/+h.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:oe(()=>[g("img",{src:h.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Om),g("div",null,de(h.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),U(ae,null,ye(i.value.meals,h=>(M(),U("div",null,[z(ce(ve),{to:/meals/+h.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:oe(()=>[g("img",{src:h.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Nm),g("div",null,de(h.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),U(ae,null,ye(o.value.meals,h=>(M(),U("div",null,[z(ce(ve),{to:/meals/+h.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:oe(()=>[g("img",{src:h.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Mm),g("div",null,de(h.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),U(ae,null,ye(l.value.meals,h=>(M(),U("div",null,[z(ce(ve),{to:/meals/+h.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:oe(()=>[g("img",{src:h.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Dm),g("div",null,de(h.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),U(ae,null,ye(a.value.meals,h=>(M(),U("div",null,[z(ce(ve),{to:/meals/+h.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:oe(()=>[g("img",{src:h.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Lm),g("div",null,de(h.strMeal),1)]),_:2},1032,["to"])]))),256)),(M(!0),U(ae,null,ye(c.value.meals,h=>(M(),U("div",null,[z(ce(ve),{to:/meals/+h.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},{default:oe(()=>[g("img",{src:h.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,$m),g("div",null,de(h.strMeal),1)]),_:2},1032,["to"])]))),256))]))}},Gm={class:"grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 xl:gap-4"},Jm={class:"relative"},Ym=["src"],Xm={class:"flex justify-center items-center text-[14px] 2xl:text-[16px]"},Qm="https://www.themealdb.com/api/json/v1/1/categories.php?",Zm={__name:"categories",setup(t){const e=te({});return fetch(`${Qm}`).then(n=>n.json()).then(n=>{e.value=n.categories}),te(!1),(n,s)=>{const r=zn("router-link");return M(),U("section",Gm,[(M(!0),U(ae,null,ye(e.value,i=>(M(),U("div",Jm,[z(r,{to:/category/+i.strCategory,class:"bg-transparent bg-[#0E1325] border border-[#394150] flex gap-3 rounded-xl duration-300 hover:bg-[#FEBD2E] text-[#E5E7EB] hover:text-black hover:font-bold overflow-hidden"},{default:oe(()=>[g("img",{src:i.strCategoryThumb,alt:"",srcset:"",class:"catimg w-[50%] sm:w-[32%] lg:w-[42%] xl:w-[63%] lg:ml-[-40px] sm:ml-[-40px] ml-[-20px] itemimg rounded-l-full"},null,8,Ym),g("div",Xm,de(i.strCategory),1)]),_:2},1032,["to"])]))),256))])}}},e_={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] 2xl:pt-[10%] gap-4"},t_={class:"stepone w-[90%] flex flex-col gap-6 text-white"},n_={class:"flex flex-col gap-6 text-white p-[15px]",id:"register"},s_={class:"flex justify-between"},r_=g("div",{class:"text-[24px]"},"Login",-1),i_={class:"flex flex-col justify-center items-center gap-2"},o_=g("p",{class:"text-[10px]"},"Don't have an acount?",-1),a_={class:"flex flex-col gap-2 text-[#E5E7EB]"},l_=g("label",{for:"Email",name:"Email",class:"text-[18px]"},"Email",-1),c_={class:"flex flex-col gap-2"},u_=g("label",{for:"password",name:"password",class:"text-[18px]"},"Password",-1),d_={key:0},f_=g("div",null,"or",-1),h_={__name:"login",setup(t){const e=te(""),n=te(""),s=gi(),r=te(""),i=()=>{const l=mn();og(l,e.value,n.value).then(a=>{console.log("successfully signed in!"),console.log(l.currentUser),s.push("/home")}).catch(a=>{switch(console.log(a.code),a.code){case"auth/invalid-email":r.value="invalid email";break;case"auth/user-not-found":r.value="No account with that email was found";break;case"auth/wrong-password":r.value="incorrect password";break;default:r.value="Email or password was incorrect";break}})},o=()=>{const l=new Xe;ic(mn(),l).then(a=>{console.log(a.user),s.push("/home")}).catch(a=>{})};return(l,a)=>(M(),U("div",e_,[g("form",{onSubmit:a[2]||(a[2]=Cs((...c)=>l.login&&l.login(...c),["prevent"])),class:"bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]"},[g("div",t_,[g("div",n_,[g("div",s_,[r_,g("div",i_,[z(ce(ve),{to:"/signup",class:"text-[20px] px-3 rounded-lg text-black duration-300 bg-white"},{default:oe(()=>[ui("Sign Up")]),_:1}),o_])]),g("div",a_,[l_,Vt(g("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),type:"text",id:"Email",placeholder:"Email",name:"Email",class:"Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[Wt,e.value]])]),g("div",c_,[u_,Vt(g("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c),type:"text",placeholder:"password",id:"password",class:"password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[Wt,n.value]])])]),r.value?(M(),U("p",d_,de(r.value),1)):An("",!0),g("div",{class:"w-full flex flex-col items-center justify-center text-white gap-3"},[g("button",{onClick:i,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Submit"),f_,g("button",{onClick:o,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Sign in with google")])])],32)]))}},p_={class:"flex flex-col gap-4 sm:px-[12px] 2xl:px-[16px] pb-10"},g_={class:"flex flex-col lg:flex-row justify-between gap-3 sm:gap-8 px-3 sm:px-5 xl:px-14"},m_={class:"flex flex-col sm:w-full lg:w-[35%] gap-3 sm:gap-6"},__={class:"flex w-full justify-between gap-1 sm:gap-4 md:gap-6"},v_=g("i",{class:"fa-solid fa-layer-group"},null,-1),b_=g("div",{class:"font-semibold"},"categories",-1),y_=[v_,b_],w_=g("i",{class:"fa-solid fa-book text-green-800"},null,-1),E_=g("div",{class:"font-semibold"},"Dashboard",-1),I_=g("i",{class:"fa-solid fa-right-from-bracket text-base"},null,-1),x_=g("div",{class:"text-base font-semibold"},"Logout",-1),T_=[I_,x_],C_=g("button",{class:"bg-[#394150] px-3 rounded-xl hidden lg:flex gap-2 justify-center items-center w-full text-white"},[g("i",{class:"fa-solid fa-message"}),g("div",{class:"text-base font-semibold"},"Recent")],-1),R_={class:"w-full py-2 lg:hidden"},S_=g("img",{src:hl,alt:"",srcset:"",class:"absolute top-3 left-4"},null,-1),P_={class:"w-full flex flex-col gap-8"},A_={class:"hidden lg:flex justify-between gap-3 text-[14px]"},k_=g("img",{src:hl,alt:"",srcset:"",class:"absolute top-3 left-4"},null,-1),O_=g("i",{class:"fa-solid fa-book text-green-800"},null,-1),N_=g("div",{class:"font-semibold"},"Dashboard",-1),M_=g("i",{class:"fa-solid fa-right-from-bracket text-base"},null,-1),D_=g("div",{class:"text-base"},"Logout",-1),L_=[M_,D_],$_={key:0,class:"grid lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},U_=["src"],B_={key:1},F_={__name:"home",setup(t){const e=te(!1),n=gi(),s=mn();ja(()=>{Gl(s,c=>{c?e.value=!0:e.value=!1})});const r=()=>{cg(s).then(()=>{n.push("/")})},i=te(""),o=te([]),l=()=>{i.value!==""&&fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${i.value}`).then(c=>c.json()).then(c=>{o.value=c.meals?c.meals:[],i.value=""}).catch(c=>{console.error("Error fetching data:",c)})},a=te(!1);return(c,u)=>(M(),U("main",p_,[z(Rm),g("section",g_,[g("div",m_,[g("div",__,[g("button",{onClick:u[0]||(u[0]=d=>a.value=!a.value),class:"text-white bg-purple-500 p-3 rounded-2xl flex items-center justify-center gap-1 w-full",name:"Categories"},y_),z(ce(ve),{to:"/dashboard",class:"relative flex justify-center items-center bg-white rounded-full p-4 py-3 gap-2 h-12 text-[#394150] w-full lg:hidden"},{default:oe(()=>[w_,E_]),_:1}),e.value?(M(),U("button",{key:0,onClick:r,class:"bg-yellow-400 px-3 rounded-xl flex gap-2 justify-center items-center w-full lg:hidden"},T_)):An("",!0),C_]),g("div",R_,[g("form",{class:"relative",onSubmit:Cs(l,["prevent"]),onClick:u[2]||(u[2]=d=>c.bro==!1)},[Vt(g("input",{type:"text",placeholder:"Search recipes and more...",name:"search-input",class:"border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14","onUpdate:modelValue":u[1]||(u[1]=d=>i.value=d)},null,512),[[Wt,i.value]]),S_],32)]),a.value?(M(),xs(zi,{key:0},{default:oe(()=>[z(Zm)]),_:1})):An("",!0)]),g("div",P_,[g("div",A_,[g("form",{class:"relative w-[60%]",onSubmit:Cs(l,["prevent"]),onClick:u[4]||(u[4]=d=>c.bro==!1)},[Vt(g("input",{type:"text",placeholder:"Search recipes and more...",name:"search-input",class:"border border-[#394150] bg-transparent placeholder:text-[#394150] text-white rounded-full w-full p-3 px-14","onUpdate:modelValue":u[3]||(u[3]=d=>i.value=d)},null,512),[[Wt,i.value]]),k_],32),z(ce(ve),{to:"/dashboard",class:"relative flex justify-center items-center bg-white rounded-full p-8 py-3 gap-2 h-12 text-[#394150]"},{default:oe(()=>[O_,N_]),_:1}),e.value?(M(),U("button",{key:0,onClick:r,class:"bg-yellow-400 px-3 rounded-xl flex gap-2 justify-center items-center"},L_)):An("",!0)]),o.value&&o.value.length>0?(M(),U("section",$_,[(M(!0),U(ae,null,ye(o.value,d=>(M(),U("div",null,[z(ce(ve),{to:/meals/+d.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:oe(()=>[g("img",{src:d.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,U_),g("div",null,de(d.strMeal),1)]),_:2},1032,["to"])]))),256))])):(M(),U("section",B_,[(M(),xs(zi,null,{default:oe(()=>[z(qm)]),_:1}))]))])])]))}},Pi="/assets/logo-light-NOLr421m.svg",er="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%206L9%2012L15%2018'%20stroke='%230D101D'%20stroke-width='2'/%3e%3c/svg%3e",kt=t=>(ri("data-v-c9d429b4"),t=t(),ii(),t),j_={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},H_={class:"flex flex-col gap-10"},V_={class:"px-3 flex justify-between text-[12px] md:text-base text-[#394150] w-full"},W_=kt(()=>g("img",{src:Pi,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),K_=kt(()=>g("img",{src:er,alt:"",srcset:""},null,-1)),z_=kt(()=>g("div",null,"Back to categories",-1)),q_={class:"flex flex-col gap-10 w-full sm:px-[18%] 2xl:px-[25%]"},G_=["src"],J_={class:"flex flex-col gap-4"},Y_={class:"text-[30px] md:text-[45px] detailhead"},X_={class:"flex gap-4"},Q_=kt(()=>g("div",null,"category:",-1)),Z_={class:"font-bold"},ev=kt(()=>g("div",null,"Area:",-1)),tv={class:"font-bold"},nv={class:"ingredients flex flex-col gap-5 px-2 md:px-0"},sv=kt(()=>g("div",{class:"flex gap-4"},[g("button",{class:"bg-[#FEBD2E] p-3 py-5 rounded-full"}),g("h3",{class:"font-bold flex items-center text-[18px]"},"Ingredients")],-1)),rv={class:"list-disc px-[5%] flex flex-col gap-2 text-[18px]"},iv={class:"Instructions flex flex-col gap-5 px-2 md:px-0 pb-14"},ov=kt(()=>g("div",{class:"flex gap-4"},[g("button",{class:"bg-[#4E80EE] p-3 py-5 rounded-full"}),g("h3",{class:"font-bold flex items-center text-[18px]"},"Instructions")],-1)),av={class:"text-[17px] instruct whitespace-pre-line"},lv=kt(()=>g("div",null,"Video",-1)),cv=["href"],uv={class:"text-[#845EEE]"},dv={key:1,class:"text-yellow-400"},fv={__name:"details",setup(t){const e=te({}),n=mi(),s=De(()=>{const r=[];for(let i=1;i<=20;i++){const o=e.value.meals[0]["strIngredient"+i],l=e.value.meals[0]["strMeasure"+i];o&&o.length>1&&l&&r.push(`${l} ${o}`)}return r});return Ks(async()=>{const i=await(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${n.params.id}`)).json();console.log(i),e.value=i}),(r,i)=>(M(),U("main",j_,[g("section",H_,[g("div",V_,[W_,z(ce(ve),{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:oe(()=>[K_,z_]),_:1})]),(M(!0),U(ae,null,ye(e.value.meals,o=>(M(),U("div",q_,[g("img",{src:o.strMealThumb,alt:"",srcset:"",class:"rounded-lg w-full sm:h-[450px] 2xl:h-[500px]"},null,8,G_),g("div",J_,[g("h2",Y_,de(o.strMeal),1),g("div",X_,[z(ce(ve),{to:/category/+o.strCategory,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:oe(()=>[Q_,g("div",Z_,de(o.strCategory),1)]),_:2},1032,["to"]),z(ce(ve),{to:/area/+o.strArea,class:"flex bg-[#394150] px-4 py-2 rounded-full gap-1"},{default:oe(()=>[ev,g("div",tv,de(o.strArea),1)]),_:2},1032,["to"])])]),g("div",nv,[sv,g("ul",rv,[(M(!0),U(ae,null,ye(s.value,(l,a)=>(M(),U("li",{key:a},de(l),1))),128))])]),g("div",iv,[ov,g("p",av,de(o.strInstructions),1)]),g("div",null,[lv,o.strYoutube?(M(),U("a",{key:0,href:o.strYoutube,target:"_blank"},[g("div",uv,de(o.strYoutube),1)],8,cv)):(M(),U("div",dv," Not Currently availlable!!! "))])]))),256))])]))}},hv=es(fv,[["__scopeId","data-v-c9d429b4"]]),Ai=t=>(ri("data-v-60e5110c"),t=t(),ii(),t),pv={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},gv={class:"flex flex-col gap-10"},mv={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},_v=Ai(()=>g("img",{src:Pi,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),vv=Ai(()=>g("img",{src:er,alt:"",srcset:""},null,-1)),bv=Ai(()=>g("div",null,"Back to categories",-1)),yv={class:"flex justify-center text-[35px] detailhead"},wv={class:"grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},Ev=["src"],Iv={__name:"categoryDetails",setup(t){const e=te({}),n=mi();return Ks(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${n.params.id}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{e.value=s.meals}).catch(s=>{console.error("Error fetching data:",s)})}),(s,r)=>{const i=zn("router-link");return M(),U("main",pv,[g("section",gv,[g("div",mv,[_v,z(i,{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:oe(()=>[vv,bv]),_:1})]),g("div",yv,de(ce(n).params.id)+" meals ",1),g("section",wv,[(M(!0),U(ae,null,ye(e.value,o=>(M(),U("div",null,[z(i,{to:/meals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:oe(()=>[g("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Ev),g("div",null,de(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},xv=es(Iv,[["__scopeId","data-v-60e5110c"]]),ki=t=>(ri("data-v-62e3d8fd"),t=t(),ii(),t),Tv={class:"w-full text-[#E5E7EB] px-[2%] sm:px-[5%] md:px-[6%] 2xl:px-[8%] py-10"},Cv={class:"flex flex-col gap-10"},Rv={class:"px-3 flex justify-between items-center text-[12px] md:text-base text-[#394150] w-full"},Sv=ki(()=>g("img",{src:Pi,alt:"",srcset:"",class:"h-full w-[30%] sm:w-[20%] md:w-[15%] lg:w-[8%]"},null,-1)),Pv=ki(()=>g("img",{src:er,alt:"",srcset:""},null,-1)),Av=ki(()=>g("div",null,"Back to categories",-1)),kv={class:"flex justify-center text-[35px] detailhead"},Ov={class:"grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium"},Nv=["src"],Mv={__name:"areadetails",setup(t){const e=te({}),n=mi();return Ks(()=>{fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${n.params.id}`).then(s=>{if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return s.json()}).then(s=>{e.value=s.meals}).catch(s=>{console.error("Error fetching data:",s)})}),(s,r)=>{const i=zn("router-link");return M(),U("main",Tv,[g("section",Cv,[g("div",Rv,[Sv,z(i,{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:oe(()=>[Pv,Av]),_:1})]),g("div",kv,de(ce(n).params.id)+" meals ",1),g("section",Ov,[(M(!0),U(ae,null,ye(e.value,o=>(M(),U("div",null,[z(i,{to:/meals/+o.idMeal,class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col hover:text-black hover:font-bold duration-300 hover:bg-[#FEBD2E]"},{default:oe(()=>[g("img",{src:o.strMealThumb,alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px] sm:w-[800px]",id:"your-img"},null,8,Nv),g("div",null,de(o.strMeal),1)]),_:2},1032,["to"])]))),256))])])])}}},Dv=es(Mv,[["__scopeId","data-v-62e3d8fd"]]),Lv={class:"flex flex-col justify-center px-[5%] md:px-[25%] pt-[25%] 2xl:pt-[10%] gap-4"},$v={class:"stepone w-[90%] flex flex-col gap-6 text-white"},Uv={class:"flex flex-col gap-6 text-white p-[15px]",id:"register"},Bv={class:"flex justify-between"},Fv=g("div",{class:"text-[24px]"},"Create an Account",-1),jv={class:"flex flex-col justify-center items-center gap-2"},Hv=g("p",{class:"text-[10px]"},"already have an acount?",-1),Vv={class:"flex flex-col gap-2 text-[#E5E7EB]"},Wv=g("label",{for:"Email",class:"text-[18px]"},"Email",-1),Kv={class:"flex flex-col gap-2"},zv=g("label",{for:"password",class:"text-[18px]"},"Password",-1),qv=g("div",null,"or",-1),Gv={__name:"signup",setup(t){const e=te(""),n=te(""),s=gi(),r=()=>{ig(mn(),e.value,n.value).then(o=>{console.log("successfully registered!"),s.push("/home")}).catch(o=>{console.log(o.code),alert(o.message)})},i=()=>{const o=new Xe;ic(mn(),o).then(l=>{console.log(l.user),s.push("/home")}).catch(l=>{})};return(o,l)=>(M(),U("div",Lv,[g("form",{onSubmit:l[2]||(l[2]=Cs((...a)=>o.login&&o.login(...a),["prevent"])),class:"bg-[#212936] rounded-2xl flex flex-col items-center gap-8 py-8 border border-[#4D5562]"},[g("div",$v,[g("div",Uv,[g("div",Bv,[Fv,g("div",jv,[z(ce(ve),{to:"/",class:"text-[20px] px-3 rounded-lg text-black duration-300 bg-white"},{default:oe(()=>[ui("Sign in")]),_:1}),Hv])]),g("div",Vv,[Wv,Vt(g("input",{"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a),type:"text",placeholder:"Email",name:"Email",class:"Email border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[Wt,e.value]])]),g("div",Kv,[zv,Vt(g("input",{"onUpdate:modelValue":l[1]||(l[1]=a=>n.value=a),type:"text",placeholder:"password",name:"Password",id:"password",class:"password border-2 border-[#4D5562] py-3 px-4 rounded-xl bg-transparent outline outline-none hover:border-[#652CD1]",required:""},null,512),[[Wt,n.value]])])]),g("div",{class:"w-full flex flex-col items-center justify-center text-white gap-3"},[g("button",{onClick:r,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Submit"),qv,g("button",{onClick:i,type:"submit",class:"btn1 bg-gradient-to-l from-[#845EEE] to-[#652CD1] rounded-full px-[10%] py-2"},"Sign in with google")])])],32)]))}},Jv={class:"flex flex-col gap-10"},Yv={class:"px-[5%] flex justify-between text-[12px] lg:text-[18px] text-[#394150] w-full py-10"},Xv=g("img",{src:er,alt:"",srcset:""},null,-1),Qv=g("div",null,"Back to categories",-1),Zv=g("i",{class:"fa-regular fa-square-plus"},null,-1),eb=g("div",{class:"font-semibold"},"New Recipe",-1),tb=[Zv,eb],nb=g("div",{id:"dashboard",class:"text-[24px] font-bold text-white text-center"},[g("h3",null,"Personal Recipe Dashboard")],-1),sb=g("section",{class:"grid md:grid-cols-2 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium px-[2%] lg:px-[6%]"},[g("div",null,[g("button",{class:"bg-[#394150] p-3 w-full rounded-xl flex flex-col"},[g("img",{src:"",alt:"meal-thumbnail",srcset:"",class:"rounded-xl pb-2 w-full h-[200px]",id:"your-img"}),g("div",null,[g("div",null,"bbgbgbf")])])])],-1),rb={key:0,class:"overlay absolute w-full h-full bg-[#394150] z-10 flex items-center justify-center sm:px-[10%] lg:px-[20%] 2xl:px-[25%]"},ib={class:"modal w-full bg-[#0E1325] rounded-xl p-[35px] relative flex flex-col gap-4"},ob=g("div",{class:"text-gray-100 flex justify-end text-xs"},"*Recommended that users complete all fields*",-1),ab=g("input",{type:"text",name:"Name",placeholder:"Enter recipe name",class:"p-3 rounded-lg"},null,-1),lb={class:"flex flex-col md:flex-row md:justify-between gap-2"},cb={class:"flex flex-col gap-2"},ub={class:"flex flex-col md:flex-row gap-2"},db=["placeholder","id"],fb=["placeholder","id"],hb=g("i",{class:"fa-regular fa-square-plus"},null,-1),pb=g("div",{class:"font-semibold"},"Add ingredient",-1),gb=[hb,pb],mb={class:"flex flex-col gap-2"},_b=g("div",{class:"text-white"},"Upload image",-1),vb={class:"max-w-[1000px] p-[10px] mt-0 mx-auto"},bb={class:"mt-6 flex flex-wrap"},yb={class:"main-text"},wb={class:"date text-sm font-bold"},Eb={__name:"dashboard",setup(t){const e=te(!1),n=te(""),s=te([]),r=te([]),i=te(0),o=()=>{s.value.push({id:Math.floor(Math.random()*1e6),text:n.value,date:new Date}),e.value=!1,n.value=""},l=()=>{i.value++,r.value.push({measure:`measurement ${i.value}`,ingredient:`ingredient ${i.value}`})};return(a,c)=>{const u=zn("router-link");return M(),U("section",Jv,[g("header",Yv,[z(u,{to:"/home",class:"flex gap-1 bg-white rounded-2xl items-center p-2 md:p-3"},{default:oe(()=>[Xv,Qv]),_:1}),g("button",{class:"flex gap-2 bg-yellow-400 rounded-2xl items-center p-2 md:p-3 md:px-6",onClick:c[0]||(c[0]=d=>e.value=!0)},tb)]),nb,sb,e.value?(M(),U("div",rb,[g("div",ib,[ob,ab,g("div",lb,[g("div",cb,[(M(!0),U(ae,null,ye(r.value,(d,h)=>(M(),U("div",{key:h,class:""},[g("div",ub,[g("input",{placeholder:d.measure,id:"measure"+h,class:"p-2 rounded-md border border-[#394150]"},null,8,db),g("input",{placeholder:d.ingredient,id:"ingredient"+h,class:"p-2 rounded-md"},null,8,fb)])]))),128))]),g("button",{class:"bg-yellow-400 flex gap-1 justify-center items-center px-2 h-10 rounded-lg",onClick:l},gb)]),Vt(g("textarea",{"onUpdate:modelValue":c[1]||(c[1]=d=>n.value=d),name:"note",id:"note",cols:"30",rows:"2",class:"rounded-lg p-3",placeholder:"enter instructions"},null,512),[[Wt,n.value]]),g("div",mb,[_b,g("input",{class:"text-white cursor-pointer",type:"file",accept:"image/jpeg",onChange:c[2]||(c[2]=(...d)=>a.uploadImage&&a.uploadImage(...d))},null,32)]),g("button",{class:"p-[10px 20px] text-[20px] w-full bg-green-100 border-none text-black cursor-pointer p-2 font-semibold",onClick:o},"Create Recipe"),g("button",{class:"text-white font-semibold text-[18px]",onClick:c[3]||(c[3]=d=>e.value=!1)},"Cancel")])])):An("",!0),g("div",vb,[g("div",bb,[(M(!0),U(ae,null,ye(s.value,d=>(M(),U("div",{key:d.id,class:"w-[225px] h-[225px] p-[10px] rounded-2xl bg-gray-200 flex flex-col justify-between mr-[20px] mb-[20px] text-black",style:Bs({backgroundColor:d.bg})},[g("p",yb,de(d.text),1),g("p",wb,de(d.date.toLocaleDateString("en-US")),1)],4))),128))])])])}}},ac=Af({history:zd("/"),routes:[{path:"/home",name:"home",component:F_,meta:{requiresAuth:!0}},{path:"/meals/:id",name:"meal Details",component:hv},{path:"/category/:id",name:"category Details",component:xv},{path:"/area/:id",name:"area Details",component:Dv},{path:"/",name:"loggedin",component:h_},{path:"/signup",name:"signUp",component:Gv},{path:"/dashboard",name:"Dashboard",component:Eb}]}),Ib=()=>new Promise((t,e)=>{const n=Gl(mn(),s=>{n(),t(s)},e)});ac.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?await Ib()?n():(alert("You dont have access"),n("/")):n()});const xb={};function Tb(t,e){const n=zn("RouterView");return M(),xs(n)}const Cb=es(xb,[["render",Tb]]);var Rb="firebase",Sb="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(Rb,Sb,"app");const Pb={apiKey:"AIzaSyAc1sTUtbtUwc72YDjdsXM4rT7Pf4VCHZo",authDomain:"recipe-page-a168a.firebaseapp.com",projectId:"recipe-page-a168a",storageBucket:"recipe-page-a168a.appspot.com",messagingSenderId:"540105599417",appId:"1:540105599417:web:68b26438060496e3412e68",measurementId:"G-G49BH7ELT1"};xl(Pb);const lc=Rd(Cb);lc.use(ac);lc.mount("#app");
