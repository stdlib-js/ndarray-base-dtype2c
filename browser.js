// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).dtype2c=n()}(this,(function(){"use strict";function t(t){var n=t.default;if("function"==typeof n){var r=function(){return n.apply(this,arguments)};r.prototype=n.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(n){var e=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,e.get?e:{enumerable:!0,get:function(){return t[n]}})})),r}var n=function(t){return Object.keys(Object(t))},r=n;var e=function(){return function(){return 2!==(r(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},l=Object.prototype.toString,c=l;var f=function(t){return c.call(t)},a=Object.prototype.hasOwnProperty;var p=function(t,n){return null!=t&&a.call(t,n)},v="function"==typeof Symbol?Symbol.toStringTag:"",s=p,y=v,b=l;var m=f,g=function(t){var n,r,e;if(null==t)return b.call(t);r=t[y],n=s(t,y);try{t[y]=void 0}catch(n){return b.call(t)}return e=b.call(t),n?t[y]=r:delete t[y],e},d=u()?g:m,j=d;var h,_=function(t){return"[object Arguments]"===j(t)},w=_;h=function(){return w(arguments)}();var O=h,P="function"==typeof Object.defineProperty?Object.defineProperty:null;var S=function(){try{return P({},"x",{}),!0}catch(t){return!1}},x=Object.defineProperty,E=Object.prototype,T=E.toString,I=E.__defineGetter__,A=E.__defineSetter__,k=E.__lookupGetter__,V=E.__lookupSetter__;var N=function(t,n,r){var e,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(k.call(t,n)||V.call(t,n)?(e=t.__proto__,t.__proto__=E,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(t,n,r.get),u&&A&&A.call(t,n,r.set),t},B=x,F=N,G=S()?B:F,L=G;var M=function(t,n,r){L(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},X=M;var Y=function(t){return"string"==typeof t},C=String.prototype.valueOf;var D=d,H=function(t){try{return C.call(t),!0}catch(t){return!1}},R=u();var W=function(t){return"object"==typeof t&&(t instanceof String||(R?H(t):"[object String]"===D(t)))},z=Y,U=W;var q=X,J=function(t){return z(t)||U(t)},K=W;q(J,"isPrimitive",Y),q(J,"isObject",K);var Q=J;var Z=function(t){return"number"==typeof t},$=Number,tt=$.prototype.toString;var nt=d,rt=$,et=function(t){try{return tt.call(t),!0}catch(t){return!1}},ot=u();var it=function(t){return"object"==typeof t&&(t instanceof rt||(ot?et(t):"[object Number]"===nt(t)))},ut=Z,lt=it;var ct=X,ft=function(t){return ut(t)||lt(t)},at=it;ct(ft,"isPrimitive",Z),ct(ft,"isObject",at);var pt=ft;var vt=function(t){return t!=t},st=pt.isPrimitive,yt=vt;var bt=function(t){return st(t)&&yt(t)},mt=pt.isObject,gt=vt;var dt=function(t){return mt(t)&&gt(t.valueOf())},jt=bt,ht=dt;var _t=X,wt=function(t){return jt(t)||ht(t)},Ot=dt;_t(wt,"isPrimitive",bt),_t(wt,"isObject",Ot);var Pt=wt,St=Number.POSITIVE_INFINITY,xt=$.NEGATIVE_INFINITY,Et=Math.floor;var Tt=function(t){return Et(t)===t},It=St,At=xt,kt=Tt;var Vt=function(t){return t<It&&t>At&&kt(t)},Nt=pt.isPrimitive,Bt=Vt;var Ft=function(t){return Nt(t)&&Bt(t)},Gt=pt.isObject,Lt=Vt;var Mt=function(t){return Gt(t)&&Lt(t.valueOf())},Xt=Ft,Yt=Mt;var Ct=X,Dt=function(t){return Xt(t)||Yt(t)},Ht=Mt;Ct(Dt,"isPrimitive",Ft),Ct(Dt,"isObject",Ht);var Rt,Wt=Dt,zt=Object.prototype.propertyIsEnumerable;Rt=!zt.call("beep","0");var Ut=Q,qt=Pt.isPrimitive,Jt=Wt.isPrimitive,Kt=zt,Qt=Rt;var Zt=function(t,n){var r;return null!=t&&(!(r=Kt.call(t,n))&&Qt&&Ut(t)?!qt(n=+n)&&Jt(n)&&n>=0&&n<t.length:r)},$t=Zt,tn=d;var nn=Array.isArray?Array.isArray:function(t){return"[object Array]"===tn(t)},rn=p,en=$t,on=nn,un=Tt;var ln=O?_:function(t){return null!==t&&"object"==typeof t&&!on(t)&&"number"==typeof t.length&&un(t.length)&&t.length>=0&&t.length<=4294967295&&rn(t,"callee")&&!en(t,"callee")},cn=ln,fn=n,an=Array.prototype.slice;var pn=function(t){return cn(t)?fn(an.call(t)):fn(t)},vn=nn;var sn=function(t){return null!==t&&"object"==typeof t};X(sn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,e;if(!vn(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(sn));var yn=sn;var bn=$t((function(){}),"prototype"),mn=!$t({toString:null},"toString"),gn=Tt;var dn=Pt,jn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&gn(t.length)&&t.length>=0&&t.length<=9007199254740991},hn=Q.isPrimitive,_n=Wt.isPrimitive;var wn=function(t,n,r){var e,o;if(!jn(t)&&!hn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(e=t.length))return-1;if(3===arguments.length){if(!_n(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=e)return-1;o=r}else(o=e+r)<0&&(o=0)}else o=0;if(dn(n)){for(;o<e;o++)if(dn(t[o]))return o}else for(;o<e;o++)if(t[o]===n)return o;return-1},On=wn,Pn=/./;var Sn=function(t){return"boolean"==typeof t},xn=Boolean.prototype.toString;var En=d,Tn=function(t){try{return xn.call(t),!0}catch(t){return!1}},In=u();var An=function(t){return"object"==typeof t&&(t instanceof Boolean||(In?Tn(t):"[object Boolean]"===En(t)))},kn=Sn,Vn=An;var Nn=X,Bn=function(t){return kn(t)||Vn(t)},Fn=An;Nn(Bn,"isPrimitive",Sn),Nn(Bn,"isObject",Fn);var Gn=Bn;var Ln=function(){return new Function("return this;")()},Mn="object"==typeof self?self:null,Xn="object"==typeof window?window:null,Yn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Cn="object"==typeof Yn?Yn:null;module.exports=Cn;var Dn=Gn.isPrimitive,Hn=Ln,Rn=Mn,Wn=Xn,zn=t(Object.freeze({__proto__:null}));var Un=function(t){if(arguments.length){if(!Dn(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Hn()}if(Rn)return Rn;if(Wn)return Wn;if(zn)return zn;throw new Error("unexpected error. Unable to resolve global object.")},qn=Un(),Jn=qn.document&&qn.document.childNodes,Kn=Int8Array,Qn=Pn,Zn=Jn,$n=Kn;var tr=function(){return"function"==typeof Qn||"object"==typeof $n||"function"==typeof Zn};var nr=function(){return/^\s*function\s*([^(]*)/i},rr=nr;X(rr,"REGEXP",nr());var er=yn;var or=d,ir=rr.REGEXP,ur=function(t){return er(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var lr=function(t){var n,r,e;if(("Object"===(r=or(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=ir.exec(e.toString()))return n[1]}return ur(t)?"Buffer":r},cr=lr;var fr=lr;var ar=function(t){var n;return null===t?"null":"object"===(n=typeof t)?cr(t).toLowerCase():n},pr=function(t){return fr(t).toLowerCase()},vr=tr()?pr:ar;var sr,yr=function(t){return t.constructor&&t.constructor.prototype===t},br="undefined"==typeof window?void 0:window,mr=p,gr=On,dr=vr,jr=yr,hr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_r=br;sr=function(){var t;if("undefined"===dr(_r))return!1;for(t in _r)try{-1===gr(hr,t)&&mr(_r,t)&&null!==_r[t]&&"object"===dr(_r[t])&&jr(_r[t])}catch(t){return!0}return!1}();var wr="undefined"!=typeof window,Or=sr,Pr=yr,Sr=wr;var xr=yn,Er=p,Tr=ln,Ir=bn,Ar=mn,kr=function(t){if(!1===Sr&&!Or)return Pr(t);try{return Pr(t)}catch(t){return!1}},Vr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Nr=n,Br=pn,Fr=function(t){var n,r,e,o,i,u,l;if(o=[],Tr(t)){for(l=0;l<t.length;l++)o.push(l.toString());return o}if("string"==typeof t){if(t.length>0&&!Er(t,"0"))for(l=0;l<t.length;l++)o.push(l.toString())}else{if(!1===(e="function"==typeof t)&&!xr(t))return o;r=Ir&&e}for(i in t)r&&"prototype"===i||!Er(t,i)||o.push(String(i));if(Ar)for(n=kr(t),l=0;l<Vr.length;l++)u=Vr[l],n&&"constructor"===u||!Er(t,u)||o.push(String(u));return o},Gr=o?e()?Br:Nr:Fr,Lr=nn;var Mr=function(t){return"object"==typeof t&&null!==t&&!Lr(t)},Xr=vr;var Yr=function(t){return"function"===Xr(t)},Cr=Object.getPrototypeOf;var Dr=function(t){return t.__proto__},Hr=d,Rr=Dr;var Wr=function(t){var n=Rr(t);return n||null===n?n:"[object Function]"===Hr(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},zr=Cr,Ur=Wr,qr=Yr(Object.getPrototypeOf)?zr:Ur;var Jr=Mr,Kr=Yr,Qr=function(t){return null==t?null:(t=Object(t),qr(t))},Zr=p,$r=d,te=Object.prototype;var ne=function(t){var n;return!!Jr(t)&&(!(n=Qr(t))||!Zr(t,"constructor")&&Zr(n,"constructor")&&Kr(n.constructor)&&"[object Function]"===$r(n.constructor)&&Zr(n,"isPrototypeOf")&&Kr(n.isPrototypeOf)&&(n===te||function(t){var n;for(n in t)if(!Zr(t,n))return!1;return!0}(t)))},re=Gr,ee=nn,oe=ne,ie=yn,ue=Gn.isPrimitive,le=p;var ce=function(t,n){var r,e,o,i,u,l,c,f=!0;if(!ie(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!oe(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(le(n,"duplicates")&&(f=n.duplicates,!ue(f)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(e=(r=re(t)).length,u={},f)for(c=0;c<e;c++)i=t[o=r[c]],le(u,i)?(l=u[i],ee(l)?u[i].push(o):u[i]=[l,o]):u[i]=o;else for(c=0;c<e;c++)u[t[o=r[c]]]=o;return u},fe=ce,ae=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var pe=function(){return ae.slice()},ve=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var se=G;var ye=function(t,n,r){se(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})},be=ye,me=be,ge=Gr;var de=function(t,n){var r,e,o;for(r=ge(n),o=0;o<r.length;o++)e=r[o],me(t,e,n[e]);return t},je=function(){return ve.slice()},he=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},_e=de;X(je,"enum",he),_e(je,he());var we=je,Oe=(0,we.enum)();var Pe=be,Se=Gr;var xe=function(t,n){var r,e,o;for(r=Se(n),o=0;o<r.length;o++)e=r[o],Pe(t,e,n[e]);return t},Ee=pe,Te=function(){return{bool:Oe.bool,int8:Oe.int8,uint8:Oe.uint8,uint8c:Oe.uint8c,int16:Oe.int16,uint16:Oe.uint16,int32:Oe.int32,uint32:Oe.uint32,int64:Oe.int64,uint64:Oe.uint64,float32:Oe.float32,float64:Oe.float64,complex64:Oe.complex64,complex128:Oe.complex128,binary:Oe.binary,generic:Oe.generic,notype:Oe.notype,userdefined_type:Oe.userdefined_type}},Ie=xe;X(Ee,"enum",Te),Ie(Ee,Te());var Ae=fe((0,Ee.enum)(),{duplicates:!1});var ke=function(t){var n=Ae[t];return"string"==typeof n?n:null},Ve=(0,we.enum)();var Ne=ke,Be=function(t){var n=Ve[t];return"number"==typeof n?n:null};var Fe=function(t){var n=typeof t;return"string"===n?null===Be(t)?null:t:"number"===n?Ne(t):null},Ge={binary:null,bool:"bool",complex64:"stdlib_complex64_t",complex128:"stdlib_complex128_t",float16:null,bfloat16:null,float32:"float",float64:"double",float128:null,generic:null,int8:"int8_t",int16:"int16_t",int32:"int32_t",int64:"int64_t",int128:null,int256:null,uint8:"uint8_t",uint8c:null,uint16:"uint16_t",uint32:"uint32_t",uint64:"uint64_t",uint128:null,uint256:null};return function(t){return Ge[Fe(t)]||null}}));
//# sourceMappingURL=browser.js.map
