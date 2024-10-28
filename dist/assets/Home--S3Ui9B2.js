import{r as bt,c as xt,g as wt,j as A,b as jt}from"./index-n5vQ_biw.js";import{I as Et,M as Ot,T as Tt,H as St,a as At}from"./MainNavigation-C1hfUM4g.js";const Nt="/assets/hand-DJy_2kUD.png",Ct="/assets/main-img-B31ewoL9.png";var lt={exports:{}};(function($,q){(function(J,Z){$.exports=Z(bt)})(typeof self<"u"?self:xt,J=>(()=>{var Z={7403:(e,o,t)=>{t.d(o,{default:()=>B});var n=t(4087),s=t.n(n);const a=function(w){return new RegExp(/<[a-z][\s\S]*>/i).test(w)},r=function(w,h){return Math.floor(Math.random()*(h-w+1))+w};var c="TYPE_CHARACTER",u="REMOVE_CHARACTER",p="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",l="PAUSE_FOR",d="CALL_FUNCTION",y="ADD_HTML_TAG_ELEMENT",v="CHANGE_DELETE_SPEED",g="CHANGE_DELAY",b="CHANGE_CURSOR",E="PASTE_STRING",S="HTML_TAG";function O(w){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},O(w)}function m(w,h){var T=Object.keys(w);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(w);h&&(j=j.filter(function(H){return Object.getOwnPropertyDescriptor(w,H).enumerable})),T.push.apply(T,j)}return T}function x(w){for(var h=1;h<arguments.length;h++){var T=arguments[h]!=null?arguments[h]:{};h%2?m(Object(T),!0).forEach(function(j){N(w,j,T[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(T)):m(Object(T)).forEach(function(j){Object.defineProperty(w,j,Object.getOwnPropertyDescriptor(T,j))})}return w}function C(w){return function(h){if(Array.isArray(h))return L(h)}(w)||function(h){if(typeof Symbol<"u"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}(w)||function(h,T){if(h){if(typeof h=="string")return L(h,T);var j=Object.prototype.toString.call(h).slice(8,-1);return j==="Object"&&h.constructor&&(j=h.constructor.name),j==="Map"||j==="Set"?Array.from(h):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?L(h,T):void 0}}(w)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function L(w,h){(h==null||h>w.length)&&(h=w.length);for(var T=0,j=new Array(h);T<h;T++)j[T]=w[T];return j}function P(w,h){for(var T=0;T<h.length;T++){var j=h[T];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(w,U(j.key),j)}}function N(w,h,T){return(h=U(h))in w?Object.defineProperty(w,h,{value:T,enumerable:!0,configurable:!0,writable:!0}):w[h]=T,w}function U(w){var h=function(T,j){if(O(T)!=="object"||T===null)return T;var H=T[Symbol.toPrimitive];if(H!==void 0){var i=H.call(T,"string");if(O(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(T)}(w);return O(h)==="symbol"?h:String(h)}const B=function(){function w(j,H){var i=this;if(function(_,k){if(!(_ instanceof k))throw new TypeError("Cannot call a class as a function")}(this,w),N(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),N(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),N(this,"setupWrapperElement",function(){i.state.elements.container&&(i.state.elements.wrapper.className=i.options.wrapperClassName,i.state.elements.cursor.className=i.options.cursorClassName,i.state.elements.cursor.innerHTML=i.options.cursor,i.state.elements.container.innerHTML="",i.state.elements.container.appendChild(i.state.elements.wrapper),i.state.elements.container.appendChild(i.state.elements.cursor))}),N(this,"start",function(){return i.state.eventLoopPaused=!1,i.runEventLoop(),i}),N(this,"pause",function(){return i.state.eventLoopPaused=!0,i}),N(this,"stop",function(){return i.state.eventLoop&&((0,n.cancel)(i.state.eventLoop),i.state.eventLoop=null),i}),N(this,"pauseFor",function(_){return i.addEventToQueue(l,{ms:_}),i}),N(this,"typeOutAllStrings",function(){return typeof i.options.strings=="string"?(i.typeString(i.options.strings).pauseFor(i.options.pauseFor),i):(i.options.strings.forEach(function(_){i.typeString(_).pauseFor(i.options.pauseFor).deleteAll(i.options.deleteSpeed)}),i)}),N(this,"typeString",function(_){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(_))return i.typeOutHTMLString(_,k);if(_){var M=(i.options||{}).stringSplitter,D=typeof M=="function"?M(_):_.split("");i.typeCharacters(D,k)}return i}),N(this,"pasteString",function(_){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(_)?i.typeOutHTMLString(_,k,!0):(_&&i.addEventToQueue(E,{character:_,node:k}),i)}),N(this,"typeOutHTMLString",function(_){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,M=arguments.length>2?arguments[2]:void 0,D=function(G){var V=document.createElement("div");return V.innerHTML=G,V.childNodes}(_);if(D.length>0)for(var I=0;I<D.length;I++){var F=D[I],W=F.innerHTML;F&&F.nodeType!==3?(F.innerHTML="",i.addEventToQueue(y,{node:F,parentNode:k}),M?i.pasteString(W,F):i.typeString(W,F)):F.textContent&&(M?i.pasteString(F.textContent,k):i.typeString(F.textContent,k))}return i}),N(this,"deleteAll",function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return i.addEventToQueue(p,{speed:_}),i}),N(this,"changeDeleteSpeed",function(_){if(!_)throw new Error("Must provide new delete speed");return i.addEventToQueue(v,{speed:_}),i}),N(this,"changeDelay",function(_){if(!_)throw new Error("Must provide new delay");return i.addEventToQueue(g,{delay:_}),i}),N(this,"changeCursor",function(_){if(!_)throw new Error("Must provide new cursor");return i.addEventToQueue(b,{cursor:_}),i}),N(this,"deleteChars",function(_){if(!_)throw new Error("Must provide amount of characters to delete");for(var k=0;k<_;k++)i.addEventToQueue(u);return i}),N(this,"callFunction",function(_,k){if(!_||typeof _!="function")throw new Error("Callback must be a function");return i.addEventToQueue(d,{cb:_,thisArg:k}),i}),N(this,"typeCharacters",function(_){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_||!Array.isArray(_))throw new Error("Characters must be an array");return _.forEach(function(M){i.addEventToQueue(c,{character:M,node:k})}),i}),N(this,"removeCharacters",function(_){if(!_||!Array.isArray(_))throw new Error("Characters must be an array");return _.forEach(function(){i.addEventToQueue(u)}),i}),N(this,"addEventToQueue",function(_,k){var M=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return i.addEventToStateProperty(_,k,M,"eventQueue")}),N(this,"addReverseCalledEvent",function(_,k){var M=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return i.options.loop?i.addEventToStateProperty(_,k,M,"reverseCalledEvents"):i}),N(this,"addEventToStateProperty",function(_,k){var M=arguments.length>2&&arguments[2]!==void 0&&arguments[2],D=arguments.length>3?arguments[3]:void 0,I={eventName:_,eventArgs:k||{}};return i.state[D]=M?[I].concat(C(i.state[D])):[].concat(C(i.state[D]),[I]),i}),N(this,"runEventLoop",function(){i.state.lastFrameTime||(i.state.lastFrameTime=Date.now());var _=Date.now(),k=_-i.state.lastFrameTime;if(!i.state.eventQueue.length){if(!i.options.loop)return;i.state.eventQueue=C(i.state.calledEvents),i.state.calledEvents=[],i.options=x({},i.state.initialOptions)}if(i.state.eventLoop=s()(i.runEventLoop),!i.state.eventLoopPaused){if(i.state.pauseUntil){if(_<i.state.pauseUntil)return;i.state.pauseUntil=null}var M,D=C(i.state.eventQueue),I=D.shift();if(!(k<=(M=I.eventName===f||I.eventName===u?i.options.deleteSpeed==="natural"?r(40,80):i.options.deleteSpeed:i.options.delay==="natural"?r(120,160):i.options.delay))){var F=I.eventName,W=I.eventArgs;switch(i.logInDevMode({currentEvent:I,state:i.state,delay:M}),F){case E:case c:var G=W.character,V=W.node,it=document.createTextNode(G),Y=it;i.options.onCreateTextNode&&typeof i.options.onCreateTextNode=="function"&&(Y=i.options.onCreateTextNode(G,it)),Y&&(V?V.appendChild(Y):i.state.elements.wrapper.appendChild(Y)),i.state.visibleNodes=[].concat(C(i.state.visibleNodes),[{type:"TEXT_NODE",character:G,node:Y}]);break;case u:D.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case l:var ft=I.eventArgs.ms;i.state.pauseUntil=Date.now()+parseInt(ft);break;case d:var ct=I.eventArgs,dt=ct.cb,vt=ct.thisArg;dt.call(vt,{elements:i.state.elements});break;case y:var ut=I.eventArgs,tt=ut.node,et=ut.parentNode;et?et.appendChild(tt):i.state.elements.wrapper.appendChild(tt),i.state.visibleNodes=[].concat(C(i.state.visibleNodes),[{type:S,node:tt,parentNode:et||i.state.elements.wrapper}]);break;case p:var ht=i.state.visibleNodes,nt=W.speed,X=[];nt&&X.push({eventName:v,eventArgs:{speed:nt,temp:!0}});for(var pt=0,yt=ht.length;pt<yt;pt++)X.push({eventName:f,eventArgs:{removingCharacterNode:!1}});nt&&X.push({eventName:v,eventArgs:{speed:i.options.deleteSpeed,temp:!0}}),D.unshift.apply(D,X);break;case f:var mt=I.eventArgs.removingCharacterNode;if(i.state.visibleNodes.length){var rt=i.state.visibleNodes.pop(),_t=rt.type,K=rt.node,gt=rt.character;i.options.onRemoveNode&&typeof i.options.onRemoveNode=="function"&&i.options.onRemoveNode({node:K,character:gt}),K&&K.parentNode.removeChild(K),_t===S&&mt&&D.unshift({eventName:f,eventArgs:{}})}break;case v:i.options.deleteSpeed=I.eventArgs.speed;break;case g:i.options.delay=I.eventArgs.delay;break;case b:i.options.cursor=I.eventArgs.cursor,i.state.elements.cursor.innerHTML=I.eventArgs.cursor}i.options.loop&&(I.eventName===f||I.eventArgs&&I.eventArgs.temp||(i.state.calledEvents=[].concat(C(i.state.calledEvents),[I]))),i.state.eventQueue=D,i.state.lastFrameTime=_}}}),j)if(typeof j=="string"){var st=document.querySelector(j);if(!st)throw new Error("Could not find container element");this.state.elements.container=st}else this.state.elements.container=j;H&&(this.options=x(x({},this.options),H)),this.state.initialOptions=x({},this.options),this.init()}var h,T;return h=w,(T=[{key:"init",value:function(){var j,H;this.setupWrapperElement(),this.addEventToQueue(b,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(j=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(H=document.createElement("style")).appendChild(document.createTextNode(j)),document.head.appendChild(H),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(j){this.options.devMode&&console.log(j)}}])&&P(h.prototype,T),Object.defineProperty(h,"prototype",{writable:!1}),w}()},8552:(e,o,t)=>{var n=t(852)(t(5639),"DataView");e.exports=n},1989:(e,o,t)=>{var n=t(1789),s=t(401),a=t(7667),r=t(1327),c=t(1866);function u(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var d=p[f];this.set(d[0],d[1])}}u.prototype.clear=n,u.prototype.delete=s,u.prototype.get=a,u.prototype.has=r,u.prototype.set=c,e.exports=u},8407:(e,o,t)=>{var n=t(7040),s=t(4125),a=t(2117),r=t(7518),c=t(4705);function u(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var d=p[f];this.set(d[0],d[1])}}u.prototype.clear=n,u.prototype.delete=s,u.prototype.get=a,u.prototype.has=r,u.prototype.set=c,e.exports=u},7071:(e,o,t)=>{var n=t(852)(t(5639),"Map");e.exports=n},3369:(e,o,t)=>{var n=t(4785),s=t(1285),a=t(6e3),r=t(9916),c=t(5265);function u(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var d=p[f];this.set(d[0],d[1])}}u.prototype.clear=n,u.prototype.delete=s,u.prototype.get=a,u.prototype.has=r,u.prototype.set=c,e.exports=u},3818:(e,o,t)=>{var n=t(852)(t(5639),"Promise");e.exports=n},8525:(e,o,t)=>{var n=t(852)(t(5639),"Set");e.exports=n},8668:(e,o,t)=>{var n=t(3369),s=t(619),a=t(2385);function r(c){var u=-1,p=c==null?0:c.length;for(this.__data__=new n;++u<p;)this.add(c[u])}r.prototype.add=r.prototype.push=s,r.prototype.has=a,e.exports=r},6384:(e,o,t)=>{var n=t(8407),s=t(7465),a=t(3779),r=t(7599),c=t(4758),u=t(4309);function p(f){var l=this.__data__=new n(f);this.size=l.size}p.prototype.clear=s,p.prototype.delete=a,p.prototype.get=r,p.prototype.has=c,p.prototype.set=u,e.exports=p},2705:(e,o,t)=>{var n=t(5639).Symbol;e.exports=n},1149:(e,o,t)=>{var n=t(5639).Uint8Array;e.exports=n},577:(e,o,t)=>{var n=t(852)(t(5639),"WeakMap");e.exports=n},4963:e=>{e.exports=function(o,t){for(var n=-1,s=o==null?0:o.length,a=0,r=[];++n<s;){var c=o[n];t(c,n,o)&&(r[a++]=c)}return r}},4636:(e,o,t)=>{var n=t(2545),s=t(5694),a=t(1469),r=t(4144),c=t(5776),u=t(6719),p=Object.prototype.hasOwnProperty;e.exports=function(f,l){var d=a(f),y=!d&&s(f),v=!d&&!y&&r(f),g=!d&&!y&&!v&&u(f),b=d||y||v||g,E=b?n(f.length,String):[],S=E.length;for(var O in f)!l&&!p.call(f,O)||b&&(O=="length"||v&&(O=="offset"||O=="parent")||g&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||c(O,S))||E.push(O);return E}},2488:e=>{e.exports=function(o,t){for(var n=-1,s=t.length,a=o.length;++n<s;)o[a+n]=t[n];return o}},2908:e=>{e.exports=function(o,t){for(var n=-1,s=o==null?0:o.length;++n<s;)if(t(o[n],n,o))return!0;return!1}},8470:(e,o,t)=>{var n=t(7813);e.exports=function(s,a){for(var r=s.length;r--;)if(n(s[r][0],a))return r;return-1}},8866:(e,o,t)=>{var n=t(2488),s=t(1469);e.exports=function(a,r,c){var u=r(a);return s(a)?u:n(u,c(a))}},4239:(e,o,t)=>{var n=t(2705),s=t(9607),a=t(2333),r=n?n.toStringTag:void 0;e.exports=function(c){return c==null?c===void 0?"[object Undefined]":"[object Null]":r&&r in Object(c)?s(c):a(c)}},9454:(e,o,t)=>{var n=t(4239),s=t(7005);e.exports=function(a){return s(a)&&n(a)=="[object Arguments]"}},939:(e,o,t)=>{var n=t(2492),s=t(7005);e.exports=function a(r,c,u,p,f){return r===c||(r==null||c==null||!s(r)&&!s(c)?r!=r&&c!=c:n(r,c,u,p,a,f))}},2492:(e,o,t)=>{var n=t(6384),s=t(7114),a=t(8351),r=t(6096),c=t(4160),u=t(1469),p=t(4144),f=t(6719),l="[object Arguments]",d="[object Array]",y="[object Object]",v=Object.prototype.hasOwnProperty;e.exports=function(g,b,E,S,O,m){var x=u(g),C=u(b),L=x?d:c(g),P=C?d:c(b),N=(L=L==l?y:L)==y,U=(P=P==l?y:P)==y,B=L==P;if(B&&p(g)){if(!p(b))return!1;x=!0,N=!1}if(B&&!N)return m||(m=new n),x||f(g)?s(g,b,E,S,O,m):a(g,b,L,E,S,O,m);if(!(1&E)){var w=N&&v.call(g,"__wrapped__"),h=U&&v.call(b,"__wrapped__");if(w||h){var T=w?g.value():g,j=h?b.value():b;return m||(m=new n),O(T,j,E,S,m)}}return!!B&&(m||(m=new n),r(g,b,E,S,O,m))}},8458:(e,o,t)=>{var n=t(3560),s=t(5346),a=t(3218),r=t(346),c=/^\[object .+?Constructor\]$/,u=Function.prototype,p=Object.prototype,f=u.toString,l=p.hasOwnProperty,d=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(y){return!(!a(y)||s(y))&&(n(y)?d:c).test(r(y))}},8749:(e,o,t)=>{var n=t(4239),s=t(1780),a=t(7005),r={};r["[object Float32Array]"]=r["[object Float64Array]"]=r["[object Int8Array]"]=r["[object Int16Array]"]=r["[object Int32Array]"]=r["[object Uint8Array]"]=r["[object Uint8ClampedArray]"]=r["[object Uint16Array]"]=r["[object Uint32Array]"]=!0,r["[object Arguments]"]=r["[object Array]"]=r["[object ArrayBuffer]"]=r["[object Boolean]"]=r["[object DataView]"]=r["[object Date]"]=r["[object Error]"]=r["[object Function]"]=r["[object Map]"]=r["[object Number]"]=r["[object Object]"]=r["[object RegExp]"]=r["[object Set]"]=r["[object String]"]=r["[object WeakMap]"]=!1,e.exports=function(c){return a(c)&&s(c.length)&&!!r[n(c)]}},280:(e,o,t)=>{var n=t(5726),s=t(6916),a=Object.prototype.hasOwnProperty;e.exports=function(r){if(!n(r))return s(r);var c=[];for(var u in Object(r))a.call(r,u)&&u!="constructor"&&c.push(u);return c}},2545:e=>{e.exports=function(o,t){for(var n=-1,s=Array(o);++n<o;)s[n]=t(n);return s}},1717:e=>{e.exports=function(o){return function(t){return o(t)}}},4757:e=>{e.exports=function(o,t){return o.has(t)}},4429:(e,o,t)=>{var n=t(5639)["__core-js_shared__"];e.exports=n},7114:(e,o,t)=>{var n=t(8668),s=t(2908),a=t(4757);e.exports=function(r,c,u,p,f,l){var d=1&u,y=r.length,v=c.length;if(y!=v&&!(d&&v>y))return!1;var g=l.get(r),b=l.get(c);if(g&&b)return g==c&&b==r;var E=-1,S=!0,O=2&u?new n:void 0;for(l.set(r,c),l.set(c,r);++E<y;){var m=r[E],x=c[E];if(p)var C=d?p(x,m,E,c,r,l):p(m,x,E,r,c,l);if(C!==void 0){if(C)continue;S=!1;break}if(O){if(!s(c,function(L,P){if(!a(O,P)&&(m===L||f(m,L,u,p,l)))return O.push(P)})){S=!1;break}}else if(m!==x&&!f(m,x,u,p,l)){S=!1;break}}return l.delete(r),l.delete(c),S}},8351:(e,o,t)=>{var n=t(2705),s=t(1149),a=t(7813),r=t(7114),c=t(8776),u=t(1814),p=n?n.prototype:void 0,f=p?p.valueOf:void 0;e.exports=function(l,d,y,v,g,b,E){switch(y){case"[object DataView]":if(l.byteLength!=d.byteLength||l.byteOffset!=d.byteOffset)return!1;l=l.buffer,d=d.buffer;case"[object ArrayBuffer]":return!(l.byteLength!=d.byteLength||!b(new s(l),new s(d)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+l,+d);case"[object Error]":return l.name==d.name&&l.message==d.message;case"[object RegExp]":case"[object String]":return l==d+"";case"[object Map]":var S=c;case"[object Set]":var O=1&v;if(S||(S=u),l.size!=d.size&&!O)return!1;var m=E.get(l);if(m)return m==d;v|=2,E.set(l,d);var x=r(S(l),S(d),v,g,b,E);return E.delete(l),x;case"[object Symbol]":if(f)return f.call(l)==f.call(d)}return!1}},6096:(e,o,t)=>{var n=t(8234),s=Object.prototype.hasOwnProperty;e.exports=function(a,r,c,u,p,f){var l=1&c,d=n(a),y=d.length;if(y!=n(r).length&&!l)return!1;for(var v=y;v--;){var g=d[v];if(!(l?g in r:s.call(r,g)))return!1}var b=f.get(a),E=f.get(r);if(b&&E)return b==r&&E==a;var S=!0;f.set(a,r),f.set(r,a);for(var O=l;++v<y;){var m=a[g=d[v]],x=r[g];if(u)var C=l?u(x,m,g,r,a,f):u(m,x,g,a,r,f);if(!(C===void 0?m===x||p(m,x,c,u,f):C)){S=!1;break}O||(O=g=="constructor")}if(S&&!O){var L=a.constructor,P=r.constructor;L==P||!("constructor"in a)||!("constructor"in r)||typeof L=="function"&&L instanceof L&&typeof P=="function"&&P instanceof P||(S=!1)}return f.delete(a),f.delete(r),S}},1957:(e,o,t)=>{var n=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;e.exports=n},8234:(e,o,t)=>{var n=t(8866),s=t(9551),a=t(3674);e.exports=function(r){return n(r,a,s)}},5050:(e,o,t)=>{var n=t(7019);e.exports=function(s,a){var r=s.__data__;return n(a)?r[typeof a=="string"?"string":"hash"]:r.map}},852:(e,o,t)=>{var n=t(8458),s=t(7801);e.exports=function(a,r){var c=s(a,r);return n(c)?c:void 0}},9607:(e,o,t)=>{var n=t(2705),s=Object.prototype,a=s.hasOwnProperty,r=s.toString,c=n?n.toStringTag:void 0;e.exports=function(u){var p=a.call(u,c),f=u[c];try{u[c]=void 0;var l=!0}catch{}var d=r.call(u);return l&&(p?u[c]=f:delete u[c]),d}},9551:(e,o,t)=>{var n=t(4963),s=t(479),a=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols,c=r?function(u){return u==null?[]:(u=Object(u),n(r(u),function(p){return a.call(u,p)}))}:s;e.exports=c},4160:(e,o,t)=>{var n=t(8552),s=t(7071),a=t(3818),r=t(8525),c=t(577),u=t(4239),p=t(346),f="[object Map]",l="[object Promise]",d="[object Set]",y="[object WeakMap]",v="[object DataView]",g=p(n),b=p(s),E=p(a),S=p(r),O=p(c),m=u;(n&&m(new n(new ArrayBuffer(1)))!=v||s&&m(new s)!=f||a&&m(a.resolve())!=l||r&&m(new r)!=d||c&&m(new c)!=y)&&(m=function(x){var C=u(x),L=C=="[object Object]"?x.constructor:void 0,P=L?p(L):"";if(P)switch(P){case g:return v;case b:return f;case E:return l;case S:return d;case O:return y}return C}),e.exports=m},7801:e=>{e.exports=function(o,t){return o==null?void 0:o[t]}},1789:(e,o,t)=>{var n=t(4536);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:e=>{e.exports=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t}},7667:(e,o,t)=>{var n=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var r=this.__data__;if(n){var c=r[a];return c==="__lodash_hash_undefined__"?void 0:c}return s.call(r,a)?r[a]:void 0}},1327:(e,o,t)=>{var n=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var r=this.__data__;return n?r[a]!==void 0:s.call(r,a)}},1866:(e,o,t)=>{var n=t(4536);e.exports=function(s,a){var r=this.__data__;return this.size+=this.has(s)?0:1,r[s]=n&&a===void 0?"__lodash_hash_undefined__":a,this}},5776:e=>{var o=/^(?:0|[1-9]\d*)$/;e.exports=function(t,n){var s=typeof t;return!!(n=n??9007199254740991)&&(s=="number"||s!="symbol"&&o.test(t))&&t>-1&&t%1==0&&t<n}},7019:e=>{e.exports=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null}},5346:(e,o,t)=>{var n,s=t(4429),a=(n=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(r){return!!a&&a in r}},5726:e=>{var o=Object.prototype;e.exports=function(t){var n=t&&t.constructor;return t===(typeof n=="function"&&n.prototype||o)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,o,t)=>{var n=t(8470),s=Array.prototype.splice;e.exports=function(a){var r=this.__data__,c=n(r,a);return!(c<0||(c==r.length-1?r.pop():s.call(r,c,1),--this.size,0))}},2117:(e,o,t)=>{var n=t(8470);e.exports=function(s){var a=this.__data__,r=n(a,s);return r<0?void 0:a[r][1]}},7518:(e,o,t)=>{var n=t(8470);e.exports=function(s){return n(this.__data__,s)>-1}},4705:(e,o,t)=>{var n=t(8470);e.exports=function(s,a){var r=this.__data__,c=n(r,s);return c<0?(++this.size,r.push([s,a])):r[c][1]=a,this}},4785:(e,o,t)=>{var n=t(1989),s=t(8407),a=t(7071);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||s),string:new n}}},1285:(e,o,t)=>{var n=t(5050);e.exports=function(s){var a=n(this,s).delete(s);return this.size-=a?1:0,a}},6e3:(e,o,t)=>{var n=t(5050);e.exports=function(s){return n(this,s).get(s)}},9916:(e,o,t)=>{var n=t(5050);e.exports=function(s){return n(this,s).has(s)}},5265:(e,o,t)=>{var n=t(5050);e.exports=function(s,a){var r=n(this,s),c=r.size;return r.set(s,a),this.size+=r.size==c?0:1,this}},8776:e=>{e.exports=function(o){var t=-1,n=Array(o.size);return o.forEach(function(s,a){n[++t]=[a,s]}),n}},4536:(e,o,t)=>{var n=t(852)(Object,"create");e.exports=n},6916:(e,o,t)=>{var n=t(5569)(Object.keys,Object);e.exports=n},1167:(e,o,t)=>{e=t.nmd(e);var n=t(1957),s=o&&!o.nodeType&&o,a=s&&e&&!e.nodeType&&e,r=a&&a.exports===s&&n.process,c=function(){try{return a&&a.require&&a.require("util").types||r&&r.binding&&r.binding("util")}catch{}}();e.exports=c},2333:e=>{var o=Object.prototype.toString;e.exports=function(t){return o.call(t)}},5569:e=>{e.exports=function(o,t){return function(n){return o(t(n))}}},5639:(e,o,t)=>{var n=t(1957),s=typeof self=="object"&&self&&self.Object===Object&&self,a=n||s||Function("return this")();e.exports=a},619:e=>{e.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(o){return this.__data__.has(o)}},1814:e=>{e.exports=function(o){var t=-1,n=Array(o.size);return o.forEach(function(s){n[++t]=s}),n}},7465:(e,o,t)=>{var n=t(8407);e.exports=function(){this.__data__=new n,this.size=0}},3779:e=>{e.exports=function(o){var t=this.__data__,n=t.delete(o);return this.size=t.size,n}},7599:e=>{e.exports=function(o){return this.__data__.get(o)}},4758:e=>{e.exports=function(o){return this.__data__.has(o)}},4309:(e,o,t)=>{var n=t(8407),s=t(7071),a=t(3369);e.exports=function(r,c){var u=this.__data__;if(u instanceof n){var p=u.__data__;if(!s||p.length<199)return p.push([r,c]),this.size=++u.size,this;u=this.__data__=new a(p)}return u.set(r,c),this.size=u.size,this}},346:e=>{var o=Function.prototype.toString;e.exports=function(t){if(t!=null){try{return o.call(t)}catch{}try{return t+""}catch{}}return""}},7813:e=>{e.exports=function(o,t){return o===t||o!=o&&t!=t}},5694:(e,o,t)=>{var n=t(9454),s=t(7005),a=Object.prototype,r=a.hasOwnProperty,c=a.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(p){return s(p)&&r.call(p,"callee")&&!c.call(p,"callee")};e.exports=u},1469:e=>{var o=Array.isArray;e.exports=o},8612:(e,o,t)=>{var n=t(3560),s=t(1780);e.exports=function(a){return a!=null&&s(a.length)&&!n(a)}},4144:(e,o,t)=>{e=t.nmd(e);var n=t(5639),s=t(5062),a=o&&!o.nodeType&&o,r=a&&e&&!e.nodeType&&e,c=r&&r.exports===a?n.Buffer:void 0,u=(c?c.isBuffer:void 0)||s;e.exports=u},8446:(e,o,t)=>{var n=t(939);e.exports=function(s,a){return n(s,a)}},3560:(e,o,t)=>{var n=t(4239),s=t(3218);e.exports=function(a){if(!s(a))return!1;var r=n(a);return r=="[object Function]"||r=="[object GeneratorFunction]"||r=="[object AsyncFunction]"||r=="[object Proxy]"}},1780:e=>{e.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},3218:e=>{e.exports=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")}},7005:e=>{e.exports=function(o){return o!=null&&typeof o=="object"}},6719:(e,o,t)=>{var n=t(8749),s=t(1717),a=t(1167),r=a&&a.isTypedArray,c=r?s(r):n;e.exports=c},3674:(e,o,t)=>{var n=t(4636),s=t(280),a=t(8612);e.exports=function(r){return a(r)?n(r):s(r)}},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},75:function(e){(function(){var o,t,n,s,a,r;typeof performance<"u"&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(e.exports=function(){return(o()-a)/1e6},t=process.hrtime,s=(o=function(){var c;return 1e9*(c=t())[0]+c[1]})(),r=1e9*process.uptime(),a=s-r):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(this)},4087:(e,o,t)=>{for(var n=t(75),s=typeof window>"u"?t.g:window,a=["moz","webkit"],r="AnimationFrame",c=s["request"+r],u=s["cancel"+r]||s["cancelRequest"+r],p=0;!c&&p<a.length;p++)c=s[a[p]+"Request"+r],u=s[a[p]+"Cancel"+r]||s[a[p]+"CancelRequest"+r];if(!c||!u){var f=0,l=0,d=[];c=function(y){if(d.length===0){var v=n(),g=Math.max(0,16.666666666666668-(v-f));f=g+v,setTimeout(function(){var b=d.slice(0);d.length=0;for(var E=0;E<b.length;E++)if(!b[E].cancelled)try{b[E].callback(f)}catch(S){setTimeout(function(){throw S},0)}},Math.round(g))}return d.push({handle:++l,callback:y,cancelled:!1}),l},u=function(y){for(var v=0;v<d.length;v++)d[v].handle===y&&(d[v].cancelled=!0)}}e.exports=function(y){return c.call(s,y)},e.exports.cancel=function(){u.apply(s,arguments)},e.exports.polyfill=function(y){y||(y=s),y.requestAnimationFrame=c,y.cancelAnimationFrame=u}},8156:e=>{e.exports=J}},ot={};function z(e){var o=ot[e];if(o!==void 0)return o.exports;var t=ot[e]={id:e,loaded:!1,exports:{}};return Z[e].call(t.exports,t,t.exports,z),t.loaded=!0,t.exports}z.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return z.d(o,{a:o}),o},z.d=(e,o)=>{for(var t in o)z.o(o,t)&&!z.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},z.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),z.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),z.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var at={};return(()=>{z.d(at,{default:()=>d});var e=z(8156),o=z.n(e),t=z(7403),n=z(8446),s=z.n(n);function a(y){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},a(y)}function r(y,v){for(var g=0;g<v.length;g++){var b=v[g];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(y,f(b.key),b)}}function c(y,v){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,b){return g.__proto__=b,g},c(y,v)}function u(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function p(y){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},p(y)}function f(y){var v=function(g,b){if(a(g)!=="object"||g===null)return g;var E=g[Symbol.toPrimitive];if(E!==void 0){var S=E.call(g,"string");if(a(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(y);return a(v)==="symbol"?v:String(v)}var l=function(y){(function(m,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(x&&x.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),Object.defineProperty(m,"prototype",{writable:!1}),x&&c(m,x)})(O,y);var v,g,b,E,S=(b=O,E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var m,x=p(b);if(E){var C=p(this).constructor;m=Reflect.construct(x,arguments,C)}else m=x.apply(this,arguments);return function(L,P){if(P&&(a(P)==="object"||typeof P=="function"))return P;if(P!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return u(L)}(this,m)});function O(){var m,x,C,L;(function(B,w){if(!(B instanceof w))throw new TypeError("Cannot call a class as a function")})(this,O);for(var P=arguments.length,N=new Array(P),U=0;U<P;U++)N[U]=arguments[U];return x=u(m=S.call.apply(S,[this].concat(N))),L={instance:null},(C=f(C="state"))in x?Object.defineProperty(x,C,{value:L,enumerable:!0,configurable:!0,writable:!0}):x[C]=L,m}return v=O,(g=[{key:"componentDidMount",value:function(){var m=this,x=new t.default(this.typewriter,this.props.options);this.setState({instance:x},function(){var C=m.props.onInit;C&&C(x)})}},{key:"componentDidUpdate",value:function(m){s()(this.props.options,m.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var m=this,x=this.props.component;return o().createElement(x,{ref:function(C){return m.typewriter=C},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&r(v.prototype,g),Object.defineProperty(v,"prototype",{writable:!1}),O}(e.Component);l.defaultProps={component:"div"};const d=l})(),at.default})())})(lt);var Lt=lt.exports;const Pt=wt(Lt),kt=({strings:$,wrapperClassName:q,cursorClassName:J})=>A.jsx(Pt,{options:{strings:$,autoStart:!0,loop:!0,deleteSpeed:50,wrapperClassName:q,cursorClassName:J}}),It="_content_119yp_17",Mt="_title_119yp_28",Dt="_greetingContainer_119yp_33",zt="_handIcon_119yp_39",Rt="_mainTitle_119yp_45",Ft="_mainName_119yp_50",Ht="_spacer_119yp_55",Qt="_spacerImage_119yp_59",Ut="_homeMainIcon_119yp_64",$t="_typewriter_119yp_76",Bt="_typewriterInner_119yp_83",Wt="_typewriterCursor_119yp_89",Gt="_header_119yp_109",Vt="_preloader_119yp_1",R={content:It,title:Mt,greetingContainer:Dt,handIcon:zt,mainTitle:Rt,mainName:Ft,spacer:Ht,spacerImage:Qt,homeMainIcon:Ut,typewriter:$t,typewriterInner:Bt,typewriterCursor:Wt,header:Gt,preloader:Vt},Yt=()=>A.jsxs("section",{className:R.content,id:"/",children:[A.jsxs("div",{className:R.header,children:[A.jsxs("div",{className:R.greetingContainer,children:[A.jsx("h2",{className:R.title,children:"Greetings!"}),A.jsx("img",{src:Nt,className:R.handIcon})]}),A.jsxs("h1",{className:R.mainTitle,children:["I'M",A.jsx("strong",{className:R.mainName,children:" SAMIA RANI"})]}),A.jsx("div",{className:R.typewriter,children:A.jsx(kt,{strings:["Applied Mathematician","Latex Specialist"],wrapperClassName:R.typewriterInner,cursorClassName:R.typewriterCursor})})]}),A.jsx("div",{className:R.spacer}),A.jsx(jt.LazyLoadImage,{className:R.spacerImage,alt:"home-img",effect:"blur",src:Ct,wrapperClassName:R.homeMainIcon,width:"500",height:"400"})]}),qt="_content_zm2en_1",Jt="_introduction_zm2en_10",Xt="_introductionText_zm2en_19",Kt="_title_zm2en_24",Zt="_description_zm2en_28",te="_purple_zm2en_38",ee="_introSocial_zm2en_42",ne="_socialLinks_zm2en_55",re="_socialLink_zm2en_55",oe="_socialIcon_zm2en_70",Q={content:qt,introduction:Jt,introductionText:Xt,title:Kt,description:Zt,purple:te,introSocial:ee,socialLinks:ne,socialLink:re,socialIcon:oe},ae=()=>{const $=()=>{const q=`https://wa.me/+923356336535?text=${encodeURIComponent("Hello, Samia Rani. I would like to ask about your Latex Services.")}`;window.location.href=q};return A.jsx("section",{className:Q.content,children:A.jsxs("div",{className:Q.introSocial,children:[A.jsx("h1",{children:"FIND ME ON"}),A.jsxs("p",{children:["Feel free to ",A.jsx("span",{className:Q.purple,children:"connect "}),"with me"]}),A.jsxs("ul",{className:Q.socialLinks,children:[A.jsx("li",{className:Q.socialLink,children:A.jsx("a",{onClick:$,target:"_blank",rel:"noreferrer",className:Q.socialIcon,"aria-label":"whatsapp",children:A.jsx(Et,{})})}),A.jsx("li",{className:Q.socialLink,children:A.jsx("a",{href:"mailto:samiarani91@gmail.com",target:"_blank",rel:"noreferrer",className:Q.socialIcon,"aria-label":"email",children:A.jsx(Ot,{})})}),A.jsx("li",{className:Q.socialLink,children:A.jsx("a",{href:"https://www.fiverr.com/samia_cooder",target:"_blank",rel:"noreferrer",className:Q.socialIcon,"aria-label":"fiverr",children:A.jsx(Tt,{})})})]})]})})},se="_layout_1h1ah_1",ie={layout:se},ce=({children:$})=>A.jsxs("div",{className:ie.layout,children:[A.jsx(St,{children:A.jsx(At,{})}),$]}),le=()=>A.jsxs(ce,{children:[A.jsx(Yt,{}),A.jsx(ae,{})]});export{le as default};