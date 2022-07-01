// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,e=t,o=function(n){return e.call(n)},f=Object.prototype.hasOwnProperty,u=function(n,r){return null!=n&&f.call(n,r)},i="function"==typeof Symbol?Symbol.toStringTag:"",c=u,a=i,y=t,l=o,p=function(n){var r,t,e;if(null==n)return y.call(n);t=n[a],r=c(n,a);try{n[a]=void 0}catch(r){return y.call(n)}return e=y.call(n),r?n[a]=t:delete n[a],e},A=r&&"symbol"==typeof Symbol.toStringTag?p:l,b=A,v="function"==typeof Uint32Array,w="function"==typeof Uint32Array?Uint32Array:null,d=function(n){return v&&n instanceof Uint32Array||"[object Uint32Array]"===b(n)},s=w,U=function(){var n,r;if("function"!=typeof s)return!1;try{r=new s(r=[1,3.14,-3.14,4294967296,4294967297]),n=d(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},h="function"==typeof Uint32Array?Uint32Array:void 0,m=function(){throw new Error("not implemented")},N=U()?h:m,I=A,g="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,S=function(n){return g&&n instanceof Float64Array||"[object Float64Array]"===I(n)},H=F,O=function(){var n,r;if("function"!=typeof H)return!1;try{r=new H([1,3.14,-3.14,NaN]),n=S(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},T="function"==typeof Float64Array?Float64Array:void 0,j=function(){throw new Error("not implemented")},E=O()?T:j,G=A,L="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,M=function(n){return L&&n instanceof Uint8Array||"[object Uint8Array]"===G(n)},x=W,P=function(){var n,r;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,256,257]),n=M(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},V="function"==typeof Uint8Array?Uint8Array:void 0,Y=function(){throw new Error("not implemented")},_=P()?V:Y,k=A,q="function"==typeof Uint16Array,z="function"==typeof Uint16Array?Uint16Array:null,B=function(n){return q&&n instanceof Uint16Array||"[object Uint16Array]"===k(n)},C=z,D=function(){var n,r;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,65536,65537]),n=B(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},J="function"==typeof Uint16Array?Uint16Array:void 0,K=function(){throw new Error("not implemented")},Q={uint16:D()?J:K,uint8:_};(n=new Q.uint16(1))[0]=4660;var R,X,Z=52===new Q.uint8(n.buffer)[0],$=N,nn=!0===Z?1:0,rn=new E(1),tn=new $(rn.buffer),en=function(n){return rn[0]=n,tn[nn]},on=N,fn=!0===Z?0:1,un=new E(1),cn=new on(un.buffer),an=function(n,r){return un[0]=n,cn[fn]=r>>>0,un[0]},yn=en,ln=an,pn=function(n){return 0===n?.13333333333320124:.13333333333320124+n*(.021869488294859542+n*(.0035920791075913124+n*(.0005880412408202641+n*(7817944429395571e-20+-18558637485527546e-21*n))))},An=function(n){return 0===n?.05396825397622605:.05396825397622605+n*(.0088632398235993+n*(.0014562094543252903+n*(.0002464631348184699+n*(7140724913826082e-20+2590730518636337e-20*n))))},bn=function(n,r,t){var e,o,f,u,i,c,a,y,l;return(o=2147483647&(e=yn(n))|0)>=1072010280&&(n<0&&(n=-n,r=-r),n=(l=.7853981633974483-n)+(y=3061616997868383e-32-r),r=0),u=r+(l=n*n)*((i=l*n)*((u=pn(y=l*l))+(a=l*An(y)))+r),y=n+(u+=.3333333333333341*i),o>=1072010280?(1-(e>>30&2))*((a=t)-2*(n-(y*y/(y+a)-u))):1===t?y:(ln(l=y,0),a=u-(l-n),ln(c=f=-1/y,0),c+f*((i=1+c*l)+c*a))},vn=N,wn=!0===Z?0:1,dn=new E(1),sn=new vn(dn.buffer),Un=function(n){return dn[0]=n,sn[wn]};!0===Z?(R=1,X=0):(R=0,X=1);var hn,mn,Nn=N,In={HIGH:R,LOW:X},gn=new E(1),Fn=new Nn(gn.buffer),Sn=In.HIGH,Hn=In.LOW,On=function(n,r){return Fn[Sn]=n,Fn[Hn]=r,gn[0]},Tn=On,jn=Math.floor,En=Number.POSITIVE_INFINITY,Gn=Number.NEGATIVE_INFINITY,Ln=function(n){return n!=n},Wn=En,Mn=Gn,xn=function(n){return n===Wn||n===Mn};!0===Z?(hn=1,mn=0):(hn=0,mn=1);var Pn=N,Vn={HIGH:hn,LOW:mn},Yn=new E(1),_n=new Pn(Yn.buffer),kn=Vn.HIGH,qn=Vn.LOW,zn=function(n,r){return Yn[0]=r,n[0]=_n[kn],n[1]=_n[qn],n},Bn=function(n,r){return 1===arguments.length?zn([0,0],n):zn(n,r)},Cn=Bn,Dn=en,Jn=Tn,Kn=[0,0],Qn=xn,Rn=Ln,Xn=function(n){return Math.abs(n)},Zn=function(n,r){return Rn(r)||Qn(r)?(n[0]=r,n[1]=0,n):0!==r&&Xn(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},$n=function(n,r){return 1===arguments.length?Zn([0,0],n):Zn(n,r)},nr=en,rr=function(n){var r=nr(n);return(r=(2146435072&r)>>>20)-1023|0},tr=En,er=Gn,or=Ln,fr=xn,ur=function(n,r){var t,e;return Cn(Kn,n),t=Kn[0],t&=2147483647,e=Dn(r),Jn(t|=e&=2147483648,Kn[1])},ir=$n,cr=rr,ar=Bn,yr=Tn,lr=[0,0],pr=[0,0],Ar=function(n,r){var t,e;return 0===r||0===n||or(n)||fr(n)?n:(ir(lr,n),r+=lr[1],(r+=cr(n=lr[0]))<-1074?ur(0,n):r>1023?n<0?er:tr:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,ar(pr,n),t=pr[0],t&=2148532223,e*yr(t|=r+1023<<20,pr[1])))},br=function(n,r){var t,e;for(t=[],e=0;e<r;e++)t.push(n);return t},vr=jn,wr=Ar,dr=function(n){return br(0,n)},sr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ur=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],hr=16777216,mr=5.960464477539063e-8,Nr=dr(20),Ir=dr(20),gr=dr(20),Fr=dr(20);function Sr(n,r,t,e,o,f,u,i,c){var a,y,l,p,A,b,v,w,d;for(p=f,d=e[t],w=t,A=0;w>0;A++)y=mr*d|0,Fr[A]=d-hr*y|0,d=e[w-1]+y,w-=1;if(d=wr(d,o),d-=8*vr(.125*d),d-=v=0|d,l=0,o>0?(v+=A=Fr[t-1]>>24-o,Fr[t-1]-=A<<24-o,l=Fr[t-1]>>23-o):0===o?l=Fr[t-1]>>23:d>=.5&&(l=2),l>0){for(v+=1,a=0,A=0;A<t;A++)w=Fr[A],0===a?0!==w&&(a=1,Fr[A]=16777216-w):Fr[A]=16777215-w;if(o>0)switch(o){case 1:Fr[t-1]&=8388607;break;case 2:Fr[t-1]&=4194303}2===l&&(d=1-d,0!==a&&(d-=wr(1,o)))}if(0===d){for(w=0,A=t-1;A>=f;A--)w|=Fr[A];if(0===w){for(b=1;0===Fr[f-b];b++);for(A=t+1;A<=t+b;A++){for(c[i+A]=sr[u+A],y=0,w=0;w<=i;w++)y+=n[w]*c[i+(A-w)];e[A]=y}return Sr(n,r,t+=b,e,o,f,u,i,c)}}if(0===d)for(t-=1,o-=24;0===Fr[t];)t-=1,o-=24;else(d=wr(d,-o))>=hr?(y=mr*d|0,Fr[t]=d-hr*y|0,o+=24,Fr[t+=1]=y):Fr[t]=0|d;for(y=wr(1,o),A=t;A>=0;A--)e[A]=y*Fr[A],y*=mr;for(A=t;A>=0;A--){for(y=0,b=0;b<=p&&b<=t-A;b++)y+=Ur[b]*e[A+b];gr[t-A]=y}for(y=0,A=t;A>=0;A--)y+=gr[A];for(r[0]=0===l?y:-y,y=gr[0]-y,A=1;A<=t;A++)y+=gr[A];return r[1]=0===l?y:-y,7&v}var Hr=function(n,r,t,e){var o,f,u,i,c,a,y;for((f=(t-3)/24|0)<0&&(f=0),i=t-24*(f+1),a=f-(u=e-1),y=u+4,c=0;c<=y;c++)Nr[c]=a<0?0:sr[a],a+=1;for(c=0;c<=4;c++){for(o=0,a=0;a<=u;a++)o+=n[a]*Nr[u+(c-a)];Ir[c]=o}return Sr(n,r,4,Ir,i,4,f,u,Nr)},Or=Math.round,Tr=en,jr=en,Er=Un,Gr=Tn,Lr=Hr,Wr=function(n,r,t){var e,o,f,u,i;return f=n-1.5707963267341256*(e=Or(.6366197723675814*n)),u=6077100506506192e-26*e,i=r>>20|0,t[0]=f-u,i-(Tr(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=f)-(f=o-(u=6077100506303966e-26*e))-u),t[0]=f-u,i-(Tr(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=f)-(f=o-(u=20222662487111665e-37*e))-u),t[0]=f-u)),t[1]=f-t[0]-u,e},Mr=1.5707963267341256,xr=6077100506506192e-26,Pr=2*xr,Vr=3*xr,Yr=4*xr,_r=[0,0,0],kr=[0,0],qr=function(n,r){var t,e,o,f,u,i,c;if((o=2147483647&jr(n)|0)<=1072243195)return r[0]=n,r[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Wr(n,o,r):o<=1073928572?n>0?(c=n-Mr,r[0]=c-xr,r[1]=c-r[0]-xr,1):(c=n+Mr,r[0]=c+xr,r[1]=c-r[0]+xr,-1):n>0?(c=n-2*Mr,r[0]=c-Pr,r[1]=c-r[0]-Pr,2):(c=n+2*Mr,r[0]=c+Pr,r[1]=c-r[0]+Pr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Wr(n,o,r):n>0?(c=n-3*Mr,r[0]=c-Vr,r[1]=c-r[0]-Vr,3):(c=n+3*Mr,r[0]=c+Vr,r[1]=c-r[0]+Vr,-3):1075388923===o?Wr(n,o,r):n>0?(c=n-4*Mr,r[0]=c-Yr,r[1]=c-r[0]-Yr,4):(c=n+4*Mr,r[0]=c+Yr,r[1]=c-r[0]+Yr,-4);if(o<1094263291)return Wr(n,o,r);if(o>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(t=Er(n),c=Gr(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)_r[u]=0|c,c=16777216*(c-_r[u]);for(_r[2]=c,f=3;0===_r[f-1];)f-=1;return i=Lr(_r,kr,e,f),n<0?(r[0]=-kr[0],r[1]=-kr[1],-i):(r[0]=kr[0],r[1]=kr[1],i)},zr=qr,Br=[0,0];return function(n){var r,t;return r=en(n),(r&=2147483647)<=1072243195?r<1044381696?n:bn(n,0,1):r>=2146435072?NaN:(t=zr(n,Br),bn(Br[0],Br[1],1-((1&t)<<1)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).tan=r();
//# sourceMappingURL=index.js.map
