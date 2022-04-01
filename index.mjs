// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-tan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-rempio2@esm/index.mjs";var r=e,i=s,m=t,a=[0,0];var n=function(e){var s,t;return s=r(e),(s&=2147483647)<=1072243195?s<1044381696?e:i(e,0,1):s>=2146435072?NaN:(t=m(e,a),i(a[0],a[1],1-((1&t)<<1)))};export{n as default};
//# sourceMappingURL=index.mjs.map
