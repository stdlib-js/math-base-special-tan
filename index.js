// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,f,i,u,a;if(null==r)return t.call(r);f=r[o],a=o,n=null!=(u=r)&&e.call(u,a);try{r[o]=void 0}catch(n){return t.call(r)}return i=t.call(r),n?r[o]=f:delete r[o],i}:function(r){return t.call(r)},i="function"==typeof Uint32Array,u="function"==typeof Uint32Array?Uint32Array:null,a="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,n,t;if("function"!=typeof u)return!1;try{n=new u(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(i&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?a:function(){throw new Error("not implemented")};var c,y=r,l="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,p="function"==typeof Float64Array?Float64Array:void 0;c=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),t=n,r=(l&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var A,b=c,w="function"==typeof Uint8Array,d="function"==typeof Uint8Array?Uint8Array:null,s="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,256,257]),t=n,r=(w&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?s:function(){throw new Error("not implemented")};var U,h=A,m="function"==typeof Uint16Array,N="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,65536,65537]),t=n,r=(m&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var g,F={uint16:U,uint8:h};(g=new F.uint16(1))[0]=4660;var S=52===new F.uint8(g.buffer)[0],H=!0===S?1:0,O=new b(1),T=new y(O.buffer);function j(r){return O[0]=r,T[H]}var E=!0===S?0:1,G=new b(1),L=new y(G.buffer);function W(r,n){return G[0]=r,L[E]=n>>>0,G[0]}function M(r,n,t){var e,o,f,i,u,a,c,y,l;return(o=2147483647&(e=j(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(l=.7853981633974483-r)+(y=3061616997868383e-32-n),n=0),i=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(y=(l=r*r)*l),c=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(y),i=n+l*((u=l*r)*(i+c)+n),y=r+(i+=.3333333333333341*u),o>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(y*y/(y+c)-i))):1===t?y:(W(l=y,0),c=i-(l-r),W(a=f=-1/y,0),a+f*((u=1+a*l)+a*c))}var x,P,V=!0===S?0:1,Y=new b(1),_=new y(Y.buffer);!0===S?(x=1,P=0):(x=0,P=1);var k={HIGH:x,LOW:P},q=new b(1),z=new y(q.buffer),B=k.HIGH,C=k.LOW;function D(r,n){return z[B]=r,z[C]=n,q[0]}var J,K,Q=Math.floor,R=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY;function Z(r){return r!=r}function $(r){return r===R||r===X}!0===S?(J=1,K=0):(J=0,K=1);var rr={HIGH:J,LOW:K},nr=new b(1),tr=new y(nr.buffer),er=rr.HIGH,or=rr.LOW;function fr(r,n){return nr[0]=n,r[0]=tr[er],r[1]=tr[or],r}function ir(r,n){return 1===arguments.length?fr([0,0],r):fr(r,n)}var ur=[0,0];function ar(r,n){return Z(n)||$(n)?(r[0]=n,r[1]=0,r):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var cr=[0,0],yr=[0,0];function lr(r,n){var t,e,o,f,i;return 0===n||0===r||Z(r)||$(r)?r:(function(r,n){1===arguments.length?ar([0,0],r):ar(r,n)}(cr,r),n+=cr[1],n+=function(r){var n=j(r);return(n=(2146435072&n)>>>20)-1023|0}(r=cr[0]),n<-1074?(o=r,ir(ur,0),f=ur[0],f&=2147483647,i=j(o),D(f|=i&=2147483648,ur[1])):n>1023?r<0?X:R:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ir(yr,r),t=yr[0],t&=2148532223,e*D(t|=n+1023<<20,yr[1])))}function vr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var pr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ar=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],br=16777216,wr=5.960464477539063e-8,dr=vr(20),sr=vr(20),Ur=vr(20),hr=vr(20);function mr(r,n,t,e,o,f,i,u,a){var c,y,l,v,p,A,b,w,d;for(v=f,d=e[t],w=t,p=0;w>0;p++)y=wr*d|0,hr[p]=d-br*y|0,d=e[w-1]+y,w-=1;if(d=lr(d,o),d-=8*Q(.125*d),d-=b=0|d,l=0,o>0?(b+=p=hr[t-1]>>24-o,hr[t-1]-=p<<24-o,l=hr[t-1]>>23-o):0===o?l=hr[t-1]>>23:d>=.5&&(l=2),l>0){for(b+=1,c=0,p=0;p<t;p++)w=hr[p],0===c?0!==w&&(c=1,hr[p]=16777216-w):hr[p]=16777215-w;if(o>0)switch(o){case 1:hr[t-1]&=8388607;break;case 2:hr[t-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=lr(1,o)))}if(0===d){for(w=0,p=t-1;p>=f;p--)w|=hr[p];if(0===w){for(A=1;0===hr[f-A];A++);for(p=t+1;p<=t+A;p++){for(a[u+p]=pr[i+p],y=0,w=0;w<=u;w++)y+=r[w]*a[u+(p-w)];e[p]=y}return mr(r,n,t+=A,e,o,f,i,u,a)}}if(0===d)for(t-=1,o-=24;0===hr[t];)t-=1,o-=24;else(d=lr(d,-o))>=br?(y=wr*d|0,hr[t]=d-br*y|0,o+=24,hr[t+=1]=y):hr[t]=0|d;for(y=lr(1,o),p=t;p>=0;p--)e[p]=y*hr[p],y*=wr;for(p=t;p>=0;p--){for(y=0,A=0;A<=v&&A<=t-p;A++)y+=Ar[A]*e[p+A];Ur[t-p]=y}for(y=0,p=t;p>=0;p--)y+=Ur[p];for(n[0]=0===l?y:-y,y=Ur[0]-y,p=1;p<=t;p++)y+=Ur[p];return n[1]=0===l?y:-y,7&b}function Nr(r,n,t,e){var o,f,i,u,a,c,y;for((f=(t-3)/24|0)<0&&(f=0),u=t-24*(f+1),c=f-(i=e-1),y=i+4,a=0;a<=y;a++)dr[a]=c<0?0:pr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*dr[i+(a-c)];sr[a]=o}return mr(r,n,4,sr,u,4,f,i,dr)}var Ir=Math.round;function gr(r,n,t){var e,o,f,i,u;return f=r-1.5707963267341256*(e=Ir(.6366197723675814*r)),i=6077100506506192e-26*e,u=n>>20|0,t[0]=f-i,u-(j(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=f)-(f=o-(i=6077100506303966e-26*e))-i),t[0]=f-i,u-(j(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=f)-(f=o-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Fr=1.5707963267341256,Sr=6077100506506192e-26,Hr=2*Sr,Or=3*Sr,Tr=4*Sr,jr=[0,0,0],Er=[0,0];function Gr(r,n){var t,e,o,f,i,u,a;if((o=2147483647&j(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?gr(r,o,n):o<=1073928572?r>0?(a=r-Fr,n[0]=a-Sr,n[1]=a-n[0]-Sr,1):(a=r+Fr,n[0]=a+Sr,n[1]=a-n[0]+Sr,-1):r>0?(a=r-2*Fr,n[0]=a-Hr,n[1]=a-n[0]-Hr,2):(a=r+2*Fr,n[0]=a+Hr,n[1]=a-n[0]+Hr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?gr(r,o,n):r>0?(a=r-3*Fr,n[0]=a-Or,n[1]=a-n[0]-Or,3):(a=r+3*Fr,n[0]=a+Or,n[1]=a-n[0]+Or,-3):1075388923===o?gr(r,o,n):r>0?(a=r-4*Fr,n[0]=a-Tr,n[1]=a-n[0]-Tr,4):(a=r+4*Fr,n[0]=a+Tr,n[1]=a-n[0]+Tr,-4);if(o<1094263291)return gr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Y[0]=r,_[V]}(r),a=D(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)jr[i]=0|a,a=16777216*(a-jr[i]);for(jr[2]=a,f=3;0===jr[f-1];)f-=1;return u=Nr(jr,Er,e,f),r<0?(n[0]=-Er[0],n[1]=-Er[1],-u):(n[0]=Er[0],n[1]=Er[1],u)}var Lr=[0,0];return function(r){var n,t;return n=j(r),(n&=2147483647)<=1072243195?n<1044381696?r:M(r,0,1):n>=2146435072?NaN:(t=Gr(r,Lr),M(Lr[0],Lr[1],1-((1&t)<<1)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).tan=n();
//# sourceMappingURL=index.js.map
