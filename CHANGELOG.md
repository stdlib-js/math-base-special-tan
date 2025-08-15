# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-08-15)

<section class="reverts">

### Reverts

-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#5399](https://github.com/stdlib-js/stdlib/issues/5399)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`6f85067`](https://github.com/stdlib-js/stdlib/commit/6f8506775cdf2b3edf740216340ff7a0a82677dc) - **test:** fix malformed test descriptions from strictEqual migration _(by Philipp Burckhardt)_
-   [`65ddf8d`](https://github.com/stdlib-js/stdlib/commit/65ddf8d4d51ccfda52d1c5a06408e43fb386c27e) - **test:** use .strictEqual() instead of .equal() and fix lint errors _(by Philipp Burckhardt)_
-   [`120567c`](https://github.com/stdlib-js/stdlib/commit/120567ce80646050b9e288ff434639110c58da75) - **test:** use `ulpdiff` for floating-point comparisons [(#7869)](https://github.com/stdlib-js/stdlib/pull/7869) _(by Karan Anand)_
-   [`7f8b7d7`](https://github.com/stdlib-js/stdlib/commit/7f8b7d7c34b0fcfa3aa213b3e425dbdb08122049) - **bench:** define `NAME` macro for consistency with other benchmarks _(by Karan Anand)_
-   [`84cf373`](https://github.com/stdlib-js/stdlib/commit/84cf373b5eb74582d81aee0ae21cceba495f86bb) - **docs:** update header comment for consistency _(by Karan Anand)_
-   [`61efe84`](https://github.com/stdlib-js/stdlib/commit/61efe840e2afe996146a95025039d6b8829b23e2) - **test:** fix range typo and regenerate fixture _(by Karan Anand)_
-   [`3c14a0f`](https://github.com/stdlib-js/stdlib/commit/3c14a0ff86030c922414336e82cb027deb18d709) - **docs:** replace manual `for` loop in examples [(#6643)](https://github.com/stdlib-js/stdlib/pull/6643) _(by Harsh)_
-   [`630ddb7`](https://github.com/stdlib-js/stdlib/commit/630ddb777824b5f6e501fda6dadf4ce41dccb964) - **test:** replace equal with strictEqual _(by Karan Anand)_
-   [`d9ad02c`](https://github.com/stdlib-js/stdlib/commit/d9ad02ca1c902ca787d9e9135160871379e40829) - **test:** add tests for IEEE 754-2019 compliance [(#6557)](https://github.com/stdlib-js/stdlib/pull/6557) _(by Karan Anand)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`6dd2fd1`](https://github.com/stdlib-js/stdlib/commit/6dd2fd114ce413fe488ac47dc356e7316e61d843) - **bench:** update random value generation [(#5528)](https://github.com/stdlib-js/stdlib/pull/5528) _(by Karan Anand)_
-   [`7e16f5c`](https://github.com/stdlib-js/stdlib/commit/7e16f5c1f65d9f3a69a3e9c3f34c885d8adfca51) - **chore:** fix C lint errors [(#5409)](https://github.com/stdlib-js/stdlib/pull/5409) _(by Neeraj Pathak)_
-   [`b0e68c5`](https://github.com/stdlib-js/stdlib/commit/b0e68c5bc8ee985794eb2ea1791c9337cd15fbd0) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`e5ce2d6`](https://github.com/stdlib-js/stdlib/commit/e5ce2d609f303ac075cee06bfc453cddea9d039c) - **revert:** chore: update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`ac4992b`](https://github.com/stdlib-js/stdlib/commit/ac4992b3eeccbfcceea795f86cf669b2481d8250) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Harsh
-   Karan Anand
-   Neeraj Pathak
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-28)

<section class="features">

### Features

-   [`6199f14`](https://github.com/stdlib-js/stdlib/commit/6199f14235f3aff23b57504bd62923ebf45555e0) - add C implementation for `math/base/special/tan`

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`55ec8ed`](https://github.com/stdlib-js/stdlib/commit/55ec8edfeb7000bca7478af116e794f20560e922) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`11c882d`](https://github.com/stdlib-js/stdlib/commit/11c882dcc261abe6a898a3061b45af7f0d4a41cd) - **chore:** update package meta data [(#2379)](https://github.com/stdlib-js/stdlib/pull/2379) _(by stdlib-bot, Athan Reines)_
-   [`6199f14`](https://github.com/stdlib-js/stdlib/commit/6199f14235f3aff23b57504bd62923ebf45555e0) - **feat:** add C implementation for `math/base/special/tan` _(by Gunj Joshi)_
-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-04-04)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`a37ebe2`](https://github.com/stdlib-js/stdlib/commit/a37ebe2b277b2b54f00377b8582d309c65ec33ce) - **docs:** remove empty lines _(by Philipp Burckhardt)_
-   [`c5da1f9`](https://github.com/stdlib-js/stdlib/commit/c5da1f9a22b1033d40115798acf13a09acf9410d) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

