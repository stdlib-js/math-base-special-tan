// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,o,c,f;if(null==r)return t.call(r);i=r[a],f=a,e=null!=(c=r)&&n.call(c,f);try{r[a]=void 0}catch(e){return t.call(r)}return o=t.call(r),e?r[a]=i:delete r[a],o}:function(r){return t.call(r)},c="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,u="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,e,t;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(c&&t instanceof Uint32Array||"[object Uint32Array]"===o(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?u:function(){throw new Error("not implemented")};var s,l=r,p="function"==typeof Float64Array,y="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,e,t;if("function"!=typeof y)return!1;try{e=new y([1,3.14,-3.14,NaN]),t=e,r=(p&&t instanceof Float64Array||"[object Float64Array]"===o(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var g,h=s,v="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,b="function"==typeof Uint8Array?Uint8Array:void 0;g=function(){var r,e,t;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,256,257]),t=e,r=(v&&t instanceof Uint8Array||"[object Uint8Array]"===o(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,A=g,_="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,U="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,e,t;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),t=e,r=(_&&t instanceof Uint16Array||"[object Uint16Array]"===o(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var I,S={uint16:m,uint8:A};(I=new S.uint16(1))[0]=4660;var k=52===new S.uint8(I.buffer)[0],x=!0===k?1:0,F=new h(1),j=new l(F.buffer);function N(r){return F[0]=r,j[x]}var T=!0===k?0:1,O=new h(1),V=new l(O.buffer);function $(r,e){return O[0]=r,V[T]=e>>>0,O[0]}var G=.7853981633974483,H=3061616997868383e-32,W=.3333333333333341,C=2147483647;function L(r,e,t){var n,i,a,o,c,f,u,s,l;return(i=(n=N(r))&C|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=G-r)+(s=H-e),e=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),u=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=e+l*((c=l*r)*(o+u)+e),s=r+(o+=W*c),i>=1072010280?(1-(n>>30&2))*((u=t)-2*(r-(s*s/(s+u)-o))):1===t?s:(u=o-((l=$(s,0))-r),(f=$(a=-1/s,0))+a*((c=1+f*l)+f*u))}var P,R,Z=2147483647,M=2146435072,X=1048575,Y=!0===k?0:1,z=new h(1),q=new l(z.buffer);!0===k?(P=1,R=0):(P=0,R=1);var B={HIGH:P,LOW:R},D=new h(1),J=new l(D.buffer),K=B.HIGH,Q=B.LOW;function rr(r,e){return J[K]=r,J[Q]=e,D[0]}var er=Math.floor,tr=Number.POSITIVE_INFINITY,nr=Number.NEGATIVE_INFINITY,ir=1023,ar=1023,or=-1023,cr=-1074;function fr(r){return r!=r}function ur(r){return r===tr||r===nr}var sr=2147483648,lr="function"==typeof Object.defineProperty?Object.defineProperty:null,pr=Object.defineProperty;function yr(r){return"number"==typeof r}function dr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function gr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+dr(i):dr(i)+r,n&&(r="-"+r)),r}var hr=String.prototype.toLowerCase,vr=String.prototype.toUpperCase;function wr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!yr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=gr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=gr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===vr.call(r.specifier)?vr.call(t):hr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var br=Math.abs,mr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase,_r=String.prototype.replace,Er=/e\+(\d)$/,Ur=/e-(\d)$/,Ir=/^(\d+)$/,Sr=/^(\d+)e/,kr=/\.0$/,xr=/\.0*e/,Fr=/(\..*[^0])0*e/;function jr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!yr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":br(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=_r.call(t,Fr,"$1e"),t=_r.call(t,xr,"e"),t=_r.call(t,kr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_r.call(t,Er,"e+0$1"),t=_r.call(t,Ur,"e-0$1"),r.alternate&&(t=_r.call(t,Ir,"$1."),t=_r.call(t,Sr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ar.call(r.specifier)?Ar.call(t):mr.call(t)}function Nr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var Tr=String.fromCharCode,Or=isNaN,Vr=Array.isArray;function $r(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Gr(r){var e,t,n,i,a,o,c,f,u,s,l,p,y;if(!Vr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if("string"==typeof(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=$r(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Or(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Or(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=wr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Or(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Or(a)?String(n.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=jr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=gr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+Nr(y):Nr(y)+s)),o+=n.arg||"",c+=1}return o}var Hr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Wr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Cr(r){var e,t,n,i;for(t=[],i=0,n=Hr.exec(r);n;)(e=r.slice(i,Hr.lastIndex-n[0].length)).length&&t.push(e),t.push(Wr(n)),i=Hr.lastIndex,n=Hr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Lr(r){var e,t;if("string"!=typeof r)throw new TypeError(Lr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Cr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Gr.apply(null,e)}var Pr,Rr,Zr=Object.prototype,Mr=Zr.toString,Xr=Zr.__defineGetter__,Yr=Zr.__defineSetter__,zr=Zr.__lookupGetter__,qr=Zr.__lookupSetter__,Br=function(){try{return lr({},"x",{}),!0}catch(r){return!1}}()?pr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Mr.call(r))throw new TypeError(Lr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Mr.call(t))throw new TypeError(Lr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(zr.call(r,e)||qr.call(r,e)?(n=r.__proto__,r.__proto__=Zr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Xr&&Xr.call(r,e,t.get),o&&Yr&&Yr.call(r,e,t.set),r};function Dr(r,e,t){Br(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===k?(Pr=1,Rr=0):(Pr=0,Rr=1);var Jr={HIGH:Pr,LOW:Rr},Kr=new h(1),Qr=new l(Kr.buffer),re=Jr.HIGH,ee=Jr.LOW;function te(r,e,t,n){return Kr[0]=r,e[n]=Qr[re],e[n+t]=Qr[ee],e}function ne(r){return te(r,[0,0],1,0)}Dr(ne,"assign",te);var ie=[0,0],ae=22250738585072014e-324,oe=4503599627370496;function ce(r,e,t,n){return fr(r)||ur(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<ae?(e[n]=r*oe,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Dr((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var fe=2220446049250313e-31,ue=2148532223,se=[0,0],le=[0,0];function pe(r,e){var t,n,i,a,o,c;return 0===e||0===r||fr(r)||ur(r)?r:(ce(r,se,1,0),r=se[0],e+=se[1],e+=function(r){var e=N(r);return(e=(e&M)>>>20)-ir|0}(r),e<cr?(i=0,a=r,ne.assign(i,ie,1,0),o=ie[0],o&=Z,c=N(a),rr(o|=c&=sr,ie[1])):e>ar?r<0?nr:tr:(e<=or?(e+=52,n=fe):n=1,ne.assign(r,le,1,0),t=le[0],t&=ue,n*rr(t|=e+ir<<20,le[1])))}function ye(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var de=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ge=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],he=16777216,ve=5.960464477539063e-8,we=ye(20),be=ye(20),me=ye(20),Ae=ye(20);function _e(r,e,t,n,i,a,o,c,f){var u,s,l,p,y,d,g,h,v;for(p=a,v=n[t],h=t,y=0;h>0;y++)s=ve*v|0,Ae[y]=v-he*s|0,v=n[h-1]+s,h-=1;if(v=pe(v,i),v-=8*er(.125*v),v-=g=0|v,l=0,i>0?(g+=y=Ae[t-1]>>24-i,Ae[t-1]-=y<<24-i,l=Ae[t-1]>>23-i):0===i?l=Ae[t-1]>>23:v>=.5&&(l=2),l>0){for(g+=1,u=0,y=0;y<t;y++)h=Ae[y],0===u?0!==h&&(u=1,Ae[y]=16777216-h):Ae[y]=16777215-h;if(i>0)switch(i){case 1:Ae[t-1]&=8388607;break;case 2:Ae[t-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=pe(1,i)))}if(0===v){for(h=0,y=t-1;y>=a;y--)h|=Ae[y];if(0===h){for(d=1;0===Ae[a-d];d++);for(y=t+1;y<=t+d;y++){for(f[c+y]=de[o+y],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(y-h)];n[y]=s}return _e(r,e,t+=d,n,i,a,o,c,f)}}if(0===v)for(t-=1,i-=24;0===Ae[t];)t-=1,i-=24;else(v=pe(v,-i))>=he?(s=ve*v|0,Ae[t]=v-he*s|0,i+=24,Ae[t+=1]=s):Ae[t]=0|v;for(s=pe(1,i),y=t;y>=0;y--)n[y]=s*Ae[y],s*=ve;for(y=t;y>=0;y--){for(s=0,d=0;d<=p&&d<=t-y;d++)s+=ge[d]*n[y+d];me[t-y]=s}for(s=0,y=t;y>=0;y--)s+=me[y];for(e[0]=0===l?s:-s,s=me[0]-s,y=1;y<=t;y++)s+=me[y];return e[1]=0===l?s:-s,7&g}function Ee(r,e,t,n){var i,a,o,c,f,u,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)we[f]=u<0?0:de[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*we[o+(f-u)];be[f]=i}return _e(r,e,4,be,c,4,a,o,we)}var Ue=Math.round,Ie=.6366197723675814,Se=1.5707963267341256,ke=6077100506506192e-26,xe=6077100506303966e-26,Fe=20222662487959506e-37,je=20222662487111665e-37,Ne=84784276603689e-45,Te=2047;function Oe(r,e,t){var n,i,a,o,c;return a=r-(n=Ue(r*Ie))*Se,o=n*ke,c=e>>20|0,t[0]=a-o,c-(N(t[0])>>20&Te)>16&&(o=n*Fe-((i=a)-(a=i-(o=n*xe))-o),t[0]=a-o,c-(N(t[0])>>20&Te)>49&&(o=n*Ne-((i=a)-(a=i-(o=n*je))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var Ve=0,$e=16777216,Ge=1.5707963267341256,He=6077100506506192e-26,We=2*He,Ce=3*He,Le=4*He,Pe=598523,Re=1072243195,Ze=1073928572,Me=1074752122,Xe=1074977148,Ye=1075183036,ze=1075388923,qe=1075594811,Be=1094263291,De=[0,0,0],Je=[0,0];function Ke(r,e){var t,n,i,a,o,c,f;if((i=N(r)&Z|0)<=Re)return e[0]=r,e[1]=0,0;if(i<=Me)return(i&X)===Pe?Oe(r,i,e):i<=Ze?r>0?(f=r-Ge,e[0]=f-He,e[1]=f-e[0]-He,1):(f=r+Ge,e[0]=f+He,e[1]=f-e[0]+He,-1):r>0?(f=r-2*Ge,e[0]=f-We,e[1]=f-e[0]-We,2):(f=r+2*Ge,e[0]=f+We,e[1]=f-e[0]+We,-2);if(i<=qe)return i<=Ye?i===Xe?Oe(r,i,e):r>0?(f=r-3*Ge,e[0]=f-Ce,e[1]=f-e[0]-Ce,3):(f=r+3*Ge,e[0]=f+Ce,e[1]=f-e[0]+Ce,-3):i===ze?Oe(r,i,e):r>0?(f=r-4*Ge,e[0]=f-Le,e[1]=f-e[0]-Le,4):(f=r+4*Ge,e[0]=f+Le,e[1]=f-e[0]+Le,-4);if(i<Be)return Oe(r,i,e);if(i>=M)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return z[0]=r,q[Y]}(r),f=rr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)De[o]=0|f,f=(f-De[o])*$e;for(De[2]=f,a=3;De[a-1]===Ve;)a-=1;return c=Ee(De,Je,n,a),r<0?(e[0]=-Je[0],e[1]=-Je[1],-c):(e[0]=Je[0],e[1]=Je[1],c)}var Qe=[0,0];return function(r){var e,t;return e=N(r),(e&=Z)<=1072243195?e<1044381696?r:L(r,0,1):e>=M?NaN:(t=Ke(r,Qe),L(Qe[0],Qe[1],1-((1&t)<<1)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).tan=e();
//# sourceMappingURL=index.js.map
