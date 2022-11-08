// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"";r=t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,f,i,u,a;if(null==r)return n.call(r);f=r[o],a=o,t=null!=(u=r)&&e.call(u,a);try{r[o]=void 0}catch(t){return n.call(r)}return i=n.call(r),t?r[o]=f:delete r[o],i}:function(r){return n.call(r)};var f,i=r,u="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,t,n;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(u&&n instanceof Uint32Array||"[object Uint32Array]"===i(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?c:function(){throw new Error("not implemented")};var l,y=f,p="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,t,n;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),n=t,r=(p&&n instanceof Float64Array||"[object Float64Array]"===i(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?b:function(){throw new Error("not implemented")};var s,w=l,d="function"==typeof Uint8Array,A="function"==typeof Uint8Array?Uint8Array:null,_="function"==typeof Uint8Array?Uint8Array:void 0;s=function(){var r,t,n;if("function"!=typeof A)return!1;try{t=new A(t=[1,3.14,-3.14,256,257]),n=t,r=(d&&n instanceof Uint8Array||"[object Uint8Array]"===i(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,h=s,U="function"==typeof Uint16Array,g="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,t,n;if("function"!=typeof g)return!1;try{t=new g(t=[1,3.14,-3.14,65536,65537]),n=t,r=(U&&n instanceof Uint16Array||"[object Uint16Array]"===i(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var N,I={uint16:m,uint8:h};(N=new I.uint16(1))[0]=4660;var O=52===new I.uint8(N.buffer)[0],S=!0===O?1:0,E=new w(1),F=new y(E.buffer);function T(r){return E[0]=r,F[S]}var H=!0===O?0:1,G=new w(1),P=new y(G.buffer);function L(r,t){return G[0]=r,P[H]=t>>>0,G[0]}function V(r,t,n){var e,o,f,i,u,a,c,l,y;return(o=2147483647&(e=T(r))|0)>=1072010280&&(r<0&&(r=-r,t=-t),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-t),t=0),i=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),i=t+y*((u=y*r)*(i+c)+t),l=r+(i+=.3333333333333341*u),o>=1072010280?(1-(e>>30&2))*((c=n)-2*(r-(l*l/(l+c)-i))):1===n?l:(L(y=l,0),c=i-(y-r),L(a=f=-1/l,0),a+f*((u=1+a*y)+a*c))}var W,k,x=!0===O?0:1,M=new w(1),Y=new y(M.buffer);!0===O?(W=1,k=0):(W=0,k=1);var C={HIGH:W,LOW:k},q=new w(1),z=new y(q.buffer),B=C.HIGH,D=C.LOW;function J(r,t){return z[B]=r,z[D]=t,q[0]}var K,Q,R=Math.floor,X=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY;function $(r){return r!=r}function rr(r){return r===X||r===Z}!0===O?(K=1,Q=0):(K=0,Q=1);var tr={HIGH:K,LOW:Q},nr=new w(1),er=new y(nr.buffer),or=tr.HIGH,fr=tr.LOW;function ir(r,t){return nr[0]=t,r[0]=er[or],r[1]=er[fr],r}function ur(r,t){return 1===arguments.length?ir([0,0],r):ir(r,t)}var ar,cr=[0,0],lr="function"==typeof Object.defineProperty?Object.defineProperty:null,yr=Object.defineProperty,pr=Object.prototype,vr=pr.toString,br=pr.__defineGetter__,sr=pr.__defineSetter__,wr=pr.__lookupGetter__,dr=pr.__lookupSetter__;function Ar(r,t,n,e){return $(r)||rr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}ar=function(){try{return lr({},"x",{}),!0}catch(r){return!1}}()?yr:function(r,t,n){var e,o,f,i;if("object"!=typeof r||null===r||"[object Array]"===vr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===vr.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(wr.call(r,t)||dr.call(r,t)?(e=r.__proto__,r.__proto__=pr,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),f="get"in n,i="set"in n,o&&(f||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&br&&br.call(r,t,n.get),i&&sr&&sr.call(r,t,n.set),r},ar((function(r){return Ar(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:Ar});var _r=[0,0],mr=[0,0];function hr(r,t){var n,e,o,f,i;return 0===t||0===r||$(r)||rr(r)?r:(Ar(r,_r,1,0),t+=_r[1],t+=function(r){var t=T(r);return(t=(2146435072&t)>>>20)-1023|0}(r=_r[0]),t<-1074?(o=r,ur(cr,0),f=cr[0],f&=2147483647,i=T(o),J(f|=i&=2147483648,cr[1])):t>1023?r<0?Z:X:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ur(mr,r),n=mr[0],n&=2148532223,e*J(n|=t+1023<<20,mr[1])))}function Ur(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Nr=16777216,Ir=5.960464477539063e-8,Or=Ur(20),Sr=Ur(20),Er=Ur(20),Fr=Ur(20);function Tr(r,t,n,e,o,f,i,u,a){var c,l,y,p,v,b,s,w,d;for(p=f,d=e[n],w=n,v=0;w>0;v++)l=Ir*d|0,Fr[v]=d-Nr*l|0,d=e[w-1]+l,w-=1;if(d=hr(d,o),d-=8*R(.125*d),d-=s=0|d,y=0,o>0?(s+=v=Fr[n-1]>>24-o,Fr[n-1]-=v<<24-o,y=Fr[n-1]>>23-o):0===o?y=Fr[n-1]>>23:d>=.5&&(y=2),y>0){for(s+=1,c=0,v=0;v<n;v++)w=Fr[v],0===c?0!==w&&(c=1,Fr[v]=16777216-w):Fr[v]=16777215-w;if(o>0)switch(o){case 1:Fr[n-1]&=8388607;break;case 2:Fr[n-1]&=4194303}2===y&&(d=1-d,0!==c&&(d-=hr(1,o)))}if(0===d){for(w=0,v=n-1;v>=f;v--)w|=Fr[v];if(0===w){for(b=1;0===Fr[f-b];b++);for(v=n+1;v<=n+b;v++){for(a[u+v]=gr[i+v],l=0,w=0;w<=u;w++)l+=r[w]*a[u+(v-w)];e[v]=l}return Tr(r,t,n+=b,e,o,f,i,u,a)}}if(0===d)for(n-=1,o-=24;0===Fr[n];)n-=1,o-=24;else(d=hr(d,-o))>=Nr?(l=Ir*d|0,Fr[n]=d-Nr*l|0,o+=24,Fr[n+=1]=l):Fr[n]=0|d;for(l=hr(1,o),v=n;v>=0;v--)e[v]=l*Fr[v],l*=Ir;for(v=n;v>=0;v--){for(l=0,b=0;b<=p&&b<=n-v;b++)l+=jr[b]*e[v+b];Er[n-v]=l}for(l=0,v=n;v>=0;v--)l+=Er[v];for(t[0]=0===y?l:-l,l=Er[0]-l,v=1;v<=n;v++)l+=Er[v];return t[1]=0===y?l:-l,7&s}function Hr(r,t,n,e){var o,f,i,u,a,c,l;for((f=(n-3)/24|0)<0&&(f=0),u=n-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)Or[a]=c<0?0:gr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Or[i+(a-c)];Sr[a]=o}return Tr(r,t,4,Sr,u,4,f,i,Or)}var Gr=Math.round;function Pr(r,t,n){var e,o,f,i,u;return f=r-1.5707963267341256*(e=Gr(.6366197723675814*r)),i=6077100506506192e-26*e,u=t>>20|0,n[0]=f-i,u-(T(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=f)-(f=o-(i=6077100506303966e-26*e))-i),n[0]=f-i,u-(T(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=f)-(f=o-(i=20222662487111665e-37*e))-i),n[0]=f-i)),n[1]=f-n[0]-i,e}var Lr=1.5707963267341256,Vr=6077100506506192e-26,Wr=2*Vr,kr=3*Vr,xr=4*Vr,Mr=[0,0,0],Yr=[0,0];function Cr(r,t){var n,e,o,f,i,u,a;if((o=2147483647&T(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Pr(r,o,t):o<=1073928572?r>0?(a=r-Lr,t[0]=a-Vr,t[1]=a-t[0]-Vr,1):(a=r+Lr,t[0]=a+Vr,t[1]=a-t[0]+Vr,-1):r>0?(a=r-2*Lr,t[0]=a-Wr,t[1]=a-t[0]-Wr,2):(a=r+2*Lr,t[0]=a+Wr,t[1]=a-t[0]+Wr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Pr(r,o,t):r>0?(a=r-3*Lr,t[0]=a-kr,t[1]=a-t[0]-kr,3):(a=r+3*Lr,t[0]=a+kr,t[1]=a-t[0]+kr,-3):1075388923===o?Pr(r,o,t):r>0?(a=r-4*Lr,t[0]=a-xr,t[1]=a-t[0]-xr,4):(a=r+4*Lr,t[0]=a+xr,t[1]=a-t[0]+xr,-4);if(o<1094263291)return Pr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return M[0]=r,Y[x]}(r),a=J(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Mr[i]=0|a,a=16777216*(a-Mr[i]);for(Mr[2]=a,f=3;0===Mr[f-1];)f-=1;return u=Hr(Mr,Yr,e,f),r<0?(t[0]=-Yr[0],t[1]=-Yr[1],-u):(t[0]=Yr[0],t[1]=Yr[1],u)}var qr=[0,0];return function(r){var t,n;return t=T(r),(t&=2147483647)<=1072243195?t<1044381696?r:V(r,0,1):t>=2146435072?NaN:(n=Cr(r,qr),V(qr[0],qr[1],1-((1&n)<<1)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).tan=t();
//# sourceMappingURL=browser.js.map
