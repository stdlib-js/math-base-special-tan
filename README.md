<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Tangent

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [tangent][tangent] of a number.

<section class="intro">

The [tangent][tangent] is defined as

<!-- <equation class="equation" label="eq:tangent" align="center" raw="\tan x = \frac{\sin x}{\cos x}" alt="Tangent definition."> -->

<div class="equation" align="center" data-raw-text="\tan x = \frac{\sin x}{\cos x}" data-equation="eq:tangent">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/tan/docs/img/equation_tangent.svg" alt="Tangent definition.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-tan
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var tan = require( '@stdlib/math-base-special-tan' );
```

#### tan( x )

Evaluates the [tangent][tangent] of a `number` (in radians).

```javascript
var v = tan( 0.0 );
// returns ~0.0

v = tan( -3.141592653589793/4.0 );
// returns ~-1.0

v = tan( 3.141592653589793/4.0 );
// returns ~1.0

v = tan( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var PI = require( '@stdlib/constants-float64-pi' );
var tan = require( '@stdlib/math-base-special-tan' );

var x = linspace( -PI/2.0, PI/2.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( tan( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cos`][@stdlib/math/base/special/cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sin`][@stdlib/math/base/special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-tan.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-tan

[test-image]: https://github.com/stdlib-js/math-base-special-tan/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-tan/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-tan/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-tan?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-tan.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-tan/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-tan/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-tan/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-tan/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-tan/blob/main/branches.md

[tangent]: http://mathworld.wolfram.com/Tangent.html

<!-- <related-links> -->

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math-base-special-cos

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math-base-special-sin

<!-- </related-links> -->

</section>

<!-- /.links -->
