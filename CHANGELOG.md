# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2026-05-03)

<section class="commits">

### Commits

<details>

-   [`8c2f1cf`](https://github.com/stdlib-js/stdlib/commit/8c2f1cf76b36300b8674f4fc0e4d020dab2b0f55) - **bench:** refactor to use string interpolation in `math/base/special` [(#11389)](https://github.com/stdlib-js/stdlib/pull/11389) _(by Karan Anand)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Karan Anand

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2026-02-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2026-01-30)

<section class="features">

### Features

-   [`c888997`](https://github.com/stdlib-js/stdlib/commit/c888997a587373790a6ebadbadfec9da0557a17e) - add `math/base/special/negafibonaccif` [(#4939)](https://github.com/stdlib-js/stdlib/pull/4939)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`348acc3`](https://github.com/stdlib-js/stdlib/commit/348acc31a68a46e6f4566733824a273297f01704): update signature to accept floats

    -   User code should behave similarly in the primary case of providing integer-valued input values. However, no longer will real-values truncate. Now, real-valued inputs will result in `NaN`, which is, arguably, better behavior, as real-to-integer truncation can be a source of silent bugs.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`2e80e3a`](https://github.com/stdlib-js/stdlib/commit/2e80e3a075fbafef274e94d203b693ec03e65fec) - **test:** use powf in negafibonaccif  [(#9192)](https://github.com/stdlib-js/stdlib/pull/9192) _(by Sagar Ratna Chaudhary)_
-   [`329ef48`](https://github.com/stdlib-js/stdlib/commit/329ef48f2e533f6871bca7eb8b7574702c6bbeb9) - **chore:** add structured package data for `math/base/special/negafibonaccif` [(#8399)](https://github.com/stdlib-js/stdlib/pull/8399) _(by Manvith M, Athan Reines)_
-   [`348acc3`](https://github.com/stdlib-js/stdlib/commit/348acc31a68a46e6f4566733824a273297f01704) - **refactor:** modify C implementation to accept `float` value instead of `int32` in `math/base/special/negafibonaccif` [(#7954)](https://github.com/stdlib-js/stdlib/pull/7954) _(by Gunj Joshi)_
-   [`c888997`](https://github.com/stdlib-js/stdlib/commit/c888997a587373790a6ebadbadfec9da0557a17e) - **feat:** add `math/base/special/negafibonaccif` [(#4939)](https://github.com/stdlib-js/stdlib/pull/4939) _(by Gururaj Gurram, stdlib-bot, Karan Anand)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 6 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Gururaj Gurram
-   Karan Anand
-   Manvith M
-   Sagar Ratna Chaudhary

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

