// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol.toStringTag:"";var o=r&&"symbol"==typeof Symbol.toStringTag?function(r){var o,a,i,u,f;if(null==r)return n.call(r);a=r[e],f=e,o=null!=(u=r)&&t.call(u,f);try{r[e]=void 0}catch(t){return n.call(r)}return i=n.call(r),o?r[e]=a:delete r[e],i}:function(r){return n.call(r)},a="function"==typeof Uint32Array;var i="function"==typeof Uint32Array?Uint32Array:null;var u,f="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var r,n,t;if("function"!=typeof i)return!1;try{n=new i(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(a&&t instanceof Uint32Array||"[object Uint32Array]"===o(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?f:function(){throw new Error("not implemented")};var c=u,l="function"==typeof Float64Array;var y="function"==typeof Float64Array?Float64Array:null;var v,p="function"==typeof Float64Array?Float64Array:void 0;v=function(){var r,n,t;if("function"!=typeof y)return!1;try{n=new y([1,3.14,-3.14,NaN]),t=n,r=(l&&t instanceof Float64Array||"[object Float64Array]"===o(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var b=v,w="function"==typeof Uint8Array;var s="function"==typeof Uint8Array?Uint8Array:null;var A,_="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,256,257]),t=n,r=(w&&t instanceof Uint8Array||"[object Uint8Array]"===o(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m=A,d="function"==typeof Uint16Array;var U="function"==typeof Uint16Array?Uint16Array:null;var h,g="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,65536,65537]),t=n,r=(d&&t instanceof Uint16Array||"[object Uint16Array]"===o(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,N={uint16:h,uint8:m};(j=new N.uint16(1))[0]=4660;var I=52===new N.uint8(j.buffer)[0],O=!0===I?1:0,S=new b(1),E=new c(S.buffer);function F(r){return S[0]=r,E[O]}var H=!0===I?0:1,T=new b(1),G=new c(T.buffer);function P(r,n){return T[0]=r,G[H]=n>>>0,T[0]}function L(r,n,t){var e,o,a,i,u,f,c,l,y;return(o=2147483647&(e=F(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),i=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),i=n+y*((u=y*r)*(i+c)+n),l=r+(i+=.3333333333333341*u),o>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-i))):1===t?l:(P(y=l,0),c=i-(y-r),P(f=a=-1/l,0),f+a*((u=1+f*y)+f*c))}var V,W,k=!0===I?0:1,M=new b(1),x=new c(M.buffer);!0===I?(V=1,W=0):(V=0,W=1);var Y={HIGH:V,LOW:W},C=new b(1),q=new c(C.buffer),z=Y.HIGH,B=Y.LOW;function D(r,n){return q[z]=r,q[B]=n,C[0]}var J=Math.floor,K=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY;function R(r){return r!=r}function X(r){return r===K||r===Q}var Z="function"==typeof Object.defineProperty?Object.defineProperty:null;var $=Object.defineProperty,rr=Object.prototype,nr=rr.toString,tr=rr.__defineGetter__,er=rr.__defineSetter__,or=rr.__lookupGetter__,ar=rr.__lookupSetter__;var ir,ur,fr=function(){try{return Z({},"x",{}),!0}catch(r){return!1}}()?$:function(r,n,t){var e,o,a,i;if("object"!=typeof r||null===r||"[object Array]"===nr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===nr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(or.call(r,n)||ar.call(r,n)?(e=r.__proto__,r.__proto__=rr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,i="set"in t,o&&(a||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&tr&&tr.call(r,n,t.get),i&&er&&er.call(r,n,t.set),r};function cr(r,n,t){fr(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===I?(ir=1,ur=0):(ir=0,ur=1);var lr={HIGH:ir,LOW:ur},yr=new b(1),vr=new c(yr.buffer),pr=lr.HIGH,br=lr.LOW;function wr(r,n,t,e){return yr[0]=r,n[e]=vr[pr],n[e+t]=vr[br],n}function sr(r){return wr(r,[0,0],1,0)}cr(sr,"assign",wr);var Ar=[0,0];function _r(r,n,t,e){return R(r)||X(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}cr((function(r){return _r(r,[0,0],1,0)}),"assign",_r);var mr=[0,0],dr=[0,0];function Ur(r,n){var t,e,o,a,i,u;return 0===n||0===r||R(r)||X(r)?r:(_r(r,mr,1,0),n+=mr[1],n+=function(r){var n=F(r);return(n=(2146435072&n)>>>20)-1023|0}(r=mr[0]),n<-1074?(o=0,a=r,sr.assign(o,Ar,1,0),i=Ar[0],i&=2147483647,u=F(a),D(i|=u&=2147483648,Ar[1])):n>1023?r<0?Q:K:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,sr.assign(r,dr,1,0),t=dr[0],t&=2148532223,e*D(t|=n+1023<<20,dr[1])))}function hr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Nr=5.960464477539063e-8,Ir=hr(20),Or=hr(20),Sr=hr(20),Er=hr(20);function Fr(r,n,t,e,o,a,i,u,f){var c,l,y,v,p,b,w,s,A;for(v=a,A=e[t],s=t,p=0;s>0;p++)l=Nr*A|0,Er[p]=A-16777216*l|0,A=e[s-1]+l,s-=1;if(A=Ur(A,o),A-=8*J(.125*A),A-=w=0|A,y=0,o>0?(w+=p=Er[t-1]>>24-o,Er[t-1]-=p<<24-o,y=Er[t-1]>>23-o):0===o?y=Er[t-1]>>23:A>=.5&&(y=2),y>0){for(w+=1,c=0,p=0;p<t;p++)s=Er[p],0===c?0!==s&&(c=1,Er[p]=16777216-s):Er[p]=16777215-s;if(o>0)switch(o){case 1:Er[t-1]&=8388607;break;case 2:Er[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=Ur(1,o)))}if(0===A){for(s=0,p=t-1;p>=a;p--)s|=Er[p];if(0===s){for(b=1;0===Er[a-b];b++);for(p=t+1;p<=t+b;p++){for(f[u+p]=gr[i+p],l=0,s=0;s<=u;s++)l+=r[s]*f[u+(p-s)];e[p]=l}return Fr(r,n,t+=b,e,o,a,i,u,f)}}if(0===A)for(t-=1,o-=24;0===Er[t];)t-=1,o-=24;else(A=Ur(A,-o))>=16777216?(l=Nr*A|0,Er[t]=A-16777216*l|0,o+=24,Er[t+=1]=l):Er[t]=0|A;for(l=Ur(1,o),p=t;p>=0;p--)e[p]=l*Er[p],l*=Nr;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=jr[b]*e[p+b];Sr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Sr[p];for(n[0]=0===y?l:-l,l=Sr[0]-l,p=1;p<=t;p++)l+=Sr[p];return n[1]=0===y?l:-l,7&w}function Hr(r,n,t,e){var o,a,i,u,f,c,l;for(4,(a=(t-3)/24|0)<0&&(a=0),u=t-24*(a+1),c=a-(i=e-1),l=i+4,f=0;f<=l;f++)Ir[f]=c<0?0:gr[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=i;c++)o+=r[c]*Ir[i+(f-c)];Or[f]=o}return 4,Fr(r,n,4,Or,u,4,a,i,Ir)}var Tr=Math.round;function Gr(r,n,t){var e,o,a,i,u;return a=r-1.5707963267341256*(e=Tr(.6366197723675814*r)),i=6077100506506192e-26*e,u=n>>20|0,t[0]=a-i,u-(F(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=a)-(a=o-(i=6077100506303966e-26*e))-i),t[0]=a-i,u-(F(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=a)-(a=o-(i=20222662487111665e-37*e))-i),t[0]=a-i)),t[1]=a-t[0]-i,e}var Pr=1.5707963267341256,Lr=6077100506506192e-26,Vr=2*Lr,Wr=4*Lr,kr=[0,0,0],Mr=[0,0];function xr(r,n){var t,e,o,a,i,u,f;if((o=2147483647&F(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Gr(r,o,n):o<=1073928572?r>0?(f=r-Pr,n[0]=f-Lr,n[1]=f-n[0]-Lr,1):(f=r+Pr,n[0]=f+Lr,n[1]=f-n[0]+Lr,-1):r>0?(f=r-2*Pr,n[0]=f-Vr,n[1]=f-n[0]-Vr,2):(f=r+2*Pr,n[0]=f+Vr,n[1]=f-n[0]+Vr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Gr(r,o,n):r>0?(f=r-3*Pr,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*Pr,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===o?Gr(r,o,n):r>0?(f=r-4*Pr,n[0]=f-Wr,n[1]=f-n[0]-Wr,4):(f=r+4*Pr,n[0]=f+Wr,n[1]=f-n[0]+Wr,-4);if(o<1094263291)return Gr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return M[0]=r,x[k]}(r),f=D(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)kr[i]=0|f,f=16777216*(f-kr[i]);for(kr[2]=f,a=3;0===kr[a-1];)a-=1;return u=Hr(kr,Mr,e,a),r<0?(n[0]=-Mr[0],n[1]=-Mr[1],-u):(n[0]=Mr[0],n[1]=Mr[1],u)}var Yr=[0,0];function Cr(r){var n,t;return n=F(r),(n&=2147483647)<=1072243195?n<1044381696?r:L(r,0,1):n>=2146435072?NaN:(t=xr(r,Yr),L(Yr[0],Yr[1],1-((1&t)<<1)))}export{Cr as default};
//# sourceMappingURL=mod.js.map
