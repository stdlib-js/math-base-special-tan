// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-tan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-rempio2@esm/index.mjs";var r=[0,0];function i(i){var m,n;return m=e(i),(m&=2147483647)<=1072243195?m<1044381696?i:s(i,0,1):m>=2146435072?NaN:(n=t(i,r),s(r[0],r[1],1-((1&n)<<1)))}export{i as default};
//# sourceMappingURL=index.mjs.map
