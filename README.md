<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# negaFibonaccif

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the nth [negaFibonacci number][fibonacci-number] as a [single-precision floating-point number][ieee754].

<section class="intro">

The [negaFibonacci numbers][fibonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:negafibonacci_sequence" align="center" raw="0, 1, -1, 2, -3, 5, -8, 13, -21, 34, -55, 89, -144, \ldots" alt="NegaFibonacci sequence"> -->

```math
0, 1, -1, 2, -3, 5, -8, 13, -21, 34, -55, 89, -144, \ldots
```

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:negafibonacci_recurrence_relation" align="center" raw="F_{n-2} = F_{n} - F_{n-1}" alt="NegaFibonacci sequence recurrence relation"> -->

```math
F_{n-2} = F_{n} - F_{n-1}
```

<!-- </equation> -->

which yields

<!-- <equation class="equation" label="eq:negafibonacci_fibonacci" align="center" raw="F_{-n} = (-1)^{n+1} F_n" alt="NegaFibonacci relationship to Fibonacci numbers"> -->

```math
F_{-n} = (-1)^{n+1} F_n
```

<!-- </equation> -->

with seed values `F_0 = 0` and `F_{-1} = 1`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import negafibonaccif from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-negafibonaccif@esm/index.mjs';
```

#### negafibonaccif( n )

Computes the nth [negaFibonacci number][fibonacci-number] as a [single-precision floating-point number][ieee754].

```javascript
var v = negafibonaccif( 0 );
// returns 0

v = negafibonaccif( -1 );
// returns 1

v = negafibonaccif( -2 );
// returns -1

v = negafibonaccif( -3 );
// returns 2

v = negafibonaccif( -36 );
// returns -14930352
```

If `n < -36`, the function returns `NaN`, as larger [negaFibonacci numbers][fibonacci-number] cannot be safely represented in [single-precision floating-point format][ieee754].

```javascript
var v = negafibonaccif( -37 );
// returns NaN
```

If not provided a nonpositive integer value, the function returns `NaN`.

```javascript
var v = negafibonaccif( -3.14 );
// returns NaN

v = negafibonaccif( 1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = negafibonaccif( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@esm/index.mjs';
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import negafibonaccif from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-negafibonaccif@esm/index.mjs';

var v = linspace( -36, 0, 37 );

logEachMap( 'negafibonaccif(%d) = %0.4f', v, negafibonaccif );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-negafibonaccif.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-negafibonaccif

[test-image]: https://github.com/stdlib-js/math-base-special-negafibonaccif/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-negafibonaccif/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-negafibonaccif/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-negafibonaccif?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-negafibonaccif.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-negafibonaccif/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-negafibonaccif/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-negafibonaccif/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-negafibonaccif/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-negafibonaccif/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-negafibonaccif/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-negafibonaccif/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-negafibonaccif/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-negafibonaccif/main/LICENSE

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
