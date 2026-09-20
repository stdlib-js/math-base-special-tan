"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var _=n(function(I,t){
var v=require('@stdlib/number-float64-base-get-high-word/dist'),u=require('@stdlib/math-base-special-kernel-tan/dist'),H=require('@stdlib/math-base-special-rempio2/dist'),f=require('@stdlib/constants-float64-high-word-abs-mask/dist'),O=require('@stdlib/constants-float64-high-word-exponent-mask/dist'),a=[0,0],q=1072243195,s=1044381696;function W(e){var r,i;return r=v(e),r&=f,r<=q?r<s?e:u(e,0,1):r>=O?NaN:(i=H(e,a),u(a[0],a[1],1-((i&1)<<1)))}t.exports=W
});var o=_();module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
