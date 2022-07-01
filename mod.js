// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var n=function(){return r&&"symbol"==typeof Symbol.toStringTag},t=Object.prototype.toString,e=t;var o=function(r){return e.call(r)},f=Object.prototype.hasOwnProperty;var u=function(r,n){return null!=r&&f.call(r,n)},a="function"==typeof Symbol?Symbol.toStringTag:"",i=u,c=a,y=t;var v=o,l=function(r){var n,t,e;if(null==r)return y.call(r);t=r[c],n=i(r,c);try{r[c]=void 0}catch(n){return y.call(r)}return e=y.call(r),n?r[c]=t:delete r[c],e},p=n()?l:v,A=p,w="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null,U=function(r){return w&&r instanceof Uint32Array||"[object Uint32Array]"===A(r)},h=b;var m=function(){var r,n;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,4294967296,4294967297]),r=U(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var N="function"==typeof Uint32Array?Uint32Array:void 0,s=function(){throw new Error("not implemented")},I=m()?N:s,d=p,F="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null,H=function(r){return F&&r instanceof Float64Array||"[object Float64Array]"===d(r)},O=S;var g=function(){var r,n;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),r=H(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var E="function"==typeof Float64Array?Float64Array:void 0,j=function(){throw new Error("not implemented")},T=g()?E:j,G=p,L="function"==typeof Uint8Array;var W="function"==typeof Uint8Array?Uint8Array:null,M=function(r){return L&&r instanceof Uint8Array||"[object Uint8Array]"===G(r)},P=W;var V=function(){var r,n;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=M(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},k=V()?Y:_,x=p,q="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null,B=function(r){return q&&r instanceof Uint16Array||"[object Uint16Array]"===x(r)},C=z;var D=function(){var r,n;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),r=B(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var J,K="function"==typeof Uint16Array?Uint16Array:void 0,Q=function(){throw new Error("not implemented")},R={uint16:D()?K:Q,uint8:k};(J=new R.uint16(1))[0]=4660;var X=52===new R.uint8(J.buffer)[0],Z=I,$=!0===X?1:0,rr=new T(1),nr=new Z(rr.buffer);var tr=function(r){return rr[0]=r,nr[$]},er=I,or=!0===X?0:1,fr=new T(1),ur=new er(fr.buffer);var ar=function(r,n){return fr[0]=r,ur[or]=n>>>0,fr[0]};var ir=tr,cr=ar,yr=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))},vr=function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))};var lr=function(r,n,t){var e,o,f,u,a,i,c,y,v;return(o=2147483647&(e=ir(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(v=.7853981633974483-r)+(y=3061616997868383e-32-n),n=0),u=n+(v=r*r)*((a=v*r)*((u=yr(y=v*v))+(c=v*vr(y)))+n),y=r+(u+=.3333333333333341*a),o>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(y*y/(y+c)-u))):1===t?y:(cr(v=y,0),c=u-(v-r),cr(i=f=-1/y,0),i+f*((a=1+i*v)+i*c))},pr=I,Ar=!0===X?0:1,wr=new T(1),br=new pr(wr.buffer);var Ur,hr,mr=function(r){return wr[0]=r,br[Ar]};!0===X?(Ur=1,hr=0):(Ur=0,hr=1);var Nr=I,sr={HIGH:Ur,LOW:hr},Ir=new T(1),dr=new Nr(Ir.buffer),Fr=sr.HIGH,Sr=sr.LOW;var Hr=function(r,n){return dr[Fr]=r,dr[Sr]=n,Ir[0]},Or=Hr,gr=Math.floor,Er=Number.POSITIVE_INFINITY,jr=Number.NEGATIVE_INFINITY;var Tr=function(r){return r!=r},Gr=Er,Lr=jr;var Wr,Mr,Pr=function(r){return r===Gr||r===Lr};!0===X?(Wr=1,Mr=0):(Wr=0,Mr=1);var Vr=I,Yr={HIGH:Wr,LOW:Mr},_r=new T(1),kr=new Vr(_r.buffer),xr=Yr.HIGH,qr=Yr.LOW;var zr=function(r,n){return _r[0]=n,r[0]=kr[xr],r[1]=kr[qr],r};var Br=function(r,n){return 1===arguments.length?zr([0,0],r):zr(r,n)},Cr=Br,Dr=tr,Jr=Or,Kr=[0,0];var Qr=Pr,Rr=Tr,Xr=function(r){return Math.abs(r)};var Zr=function(r,n){return Rr(n)||Qr(n)?(r[0]=n,r[1]=0,r):0!==n&&Xr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var $r=tr;var rn=function(r){var n=$r(r);return(n=(2146435072&n)>>>20)-1023|0},nn=Er,tn=jr,en=Tr,on=Pr,fn=function(r,n){var t,e;return Cr(Kr,r),t=Kr[0],t&=2147483647,e=Dr(n),Jr(t|=e&=2147483648,Kr[1])},un=function(r,n){return 1===arguments.length?Zr([0,0],r):Zr(r,n)},an=rn,cn=Br,yn=Or,vn=[0,0],ln=[0,0];var pn=function(r,n){var t,e;return 0===n||0===r||en(r)||on(r)?r:(un(vn,r),n+=vn[1],(n+=an(r=vn[0]))<-1074?fn(0,r):n>1023?r<0?tn:nn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,cn(ln,r),t=ln[0],t&=2148532223,e*yn(t|=n+1023<<20,ln[1])))};var An=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var wn=gr,bn=pn,Un=function(r){return An(0,r)},hn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],mn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Nn=5.960464477539063e-8,sn=Un(20),In=Un(20),dn=Un(20),Fn=Un(20);function Sn(r,n,t,e,o,f,u,a,i){var c,y,v,l,p,A,w,b,U;for(l=f,U=e[t],b=t,p=0;b>0;p++)y=Nn*U|0,Fn[p]=U-16777216*y|0,U=e[b-1]+y,b-=1;if(U=bn(U,o),U-=8*wn(.125*U),U-=w=0|U,v=0,o>0?(w+=p=Fn[t-1]>>24-o,Fn[t-1]-=p<<24-o,v=Fn[t-1]>>23-o):0===o?v=Fn[t-1]>>23:U>=.5&&(v=2),v>0){for(w+=1,c=0,p=0;p<t;p++)b=Fn[p],0===c?0!==b&&(c=1,Fn[p]=16777216-b):Fn[p]=16777215-b;if(o>0)switch(o){case 1:Fn[t-1]&=8388607;break;case 2:Fn[t-1]&=4194303}2===v&&(U=1-U,0!==c&&(U-=bn(1,o)))}if(0===U){for(b=0,p=t-1;p>=f;p--)b|=Fn[p];if(0===b){for(A=1;0===Fn[f-A];A++);for(p=t+1;p<=t+A;p++){for(i[a+p]=hn[u+p],y=0,b=0;b<=a;b++)y+=r[b]*i[a+(p-b)];e[p]=y}return Sn(r,n,t+=A,e,o,f,u,a,i)}}if(0===U)for(t-=1,o-=24;0===Fn[t];)t-=1,o-=24;else(U=bn(U,-o))>=16777216?(y=Nn*U|0,Fn[t]=U-16777216*y|0,o+=24,Fn[t+=1]=y):Fn[t]=0|U;for(y=bn(1,o),p=t;p>=0;p--)e[p]=y*Fn[p],y*=Nn;for(p=t;p>=0;p--){for(y=0,A=0;A<=l&&A<=t-p;A++)y+=mn[A]*e[p+A];dn[t-p]=y}for(y=0,p=t;p>=0;p--)y+=dn[p];for(n[0]=0===v?y:-y,y=dn[0]-y,p=1;p<=t;p++)y+=dn[p];return n[1]=0===v?y:-y,7&w}var Hn=function(r,n,t,e){var o,f,u,a,i,c,y;for(4,(f=(t-3)/24|0)<0&&(f=0),a=t-24*(f+1),c=f-(u=e-1),y=u+4,i=0;i<=y;i++)sn[i]=c<0?0:hn[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=u;c++)o+=r[c]*sn[u+(i-c)];In[i]=o}return 4,Sn(r,n,4,In,a,4,f,u,sn)},On=Math.round,gn=tr;var En=tr,jn=mr,Tn=Or,Gn=Hn,Ln=function(r,n,t){var e,o,f,u,a;return f=r-1.5707963267341256*(e=On(.6366197723675814*r)),u=6077100506506192e-26*e,a=n>>20|0,t[0]=f-u,a-(gn(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=f)-(f=o-(u=6077100506303966e-26*e))-u),t[0]=f-u,a-(gn(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=f)-(f=o-(u=20222662487111665e-37*e))-u),t[0]=f-u)),t[1]=f-t[0]-u,e},Wn=1.5707963267341256,Mn=6077100506506192e-26,Pn=2*Mn,Vn=4*Mn,Yn=[0,0,0],_n=[0,0];var kn=function(r,n){var t,e,o,f,u,a,i;if((o=2147483647&En(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ln(r,o,n):o<=1073928572?r>0?(i=r-Wn,n[0]=i-Mn,n[1]=i-n[0]-Mn,1):(i=r+Wn,n[0]=i+Mn,n[1]=i-n[0]+Mn,-1):r>0?(i=r-2*Wn,n[0]=i-Pn,n[1]=i-n[0]-Pn,2):(i=r+2*Wn,n[0]=i+Pn,n[1]=i-n[0]+Pn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ln(r,o,n):r>0?(i=r-3*Wn,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*Wn,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?Ln(r,o,n):r>0?(i=r-4*Wn,n[0]=i-Vn,n[1]=i-n[0]-Vn,4):(i=r+4*Wn,n[0]=i+Vn,n[1]=i-n[0]+Vn,-4);if(o<1094263291)return Ln(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=jn(r),i=Tn(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Yn[u]=0|i,i=16777216*(i-Yn[u]);for(Yn[2]=i,f=3;0===Yn[f-1];)f-=1;return a=Gn(Yn,_n,e,f),r<0?(n[0]=-_n[0],n[1]=-_n[1],-a):(n[0]=_n[0],n[1]=_n[1],a)},xn=kn,qn=[0,0];function zn(r){var n,t;return n=tr(r),(n&=2147483647)<=1072243195?n<1044381696?r:lr(r,0,1):n>=2146435072?NaN:(t=xn(r,qn),lr(qn[0],qn[1],1-((1&t)<<1)))}export{zn as default};
//# sourceMappingURL=mod.js.map
