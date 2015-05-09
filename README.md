SMALLEST FLOAT32
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Smallest positive [single-precision floating-point number](http://en.wikipedia.org/wiki/IEEE_754-1985).


## Installation

``` bash
$ npm install compute-const-smallest-float32
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var SMALLEST_FLOAT32 = require( 'compute-const-smallest-float32' );
```

#### SMALLEST_FLOAT32

An `object` comprised as follows...

``` javascript
{
	'VALUE': <Number>,
	'DENORMALIZED': <Number>
}
```



##### Value

Smallest positive __normalized__ single-precision floating-point number.

``` javascript
SMALLEST_FLOAT32.VALUE === 1 / Math.pow( 2, 127-1 );
```


##### Denormalized

Smallest positive __denormalized__ single-precision floating-point number.

``` javascript
SMALLEST_FLOAT32.DENORMALIZED === 1 / Math.pow( 2, 127-1+23 );
```


## Examples

``` javascript
var SMALLEST_FLOAT32 = require( 'compute-const-smallest-float32' );

console.log( SMALLEST_FLOAT32.VALUE );
// returns 1.1754943508222875e-38

console.log( SMALLEST_FLOAT32.DENORMALIZED );
// returns 1.401298464324817e-45
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-const-smallest-float32.svg
[npm-url]: https://npmjs.org/package/compute-const-smallest-float32

[travis-image]: http://img.shields.io/travis/compute-io/const-smallest-float32/master.svg
[travis-url]: https://travis-ci.org/compute-io/const-smallest-float32

[coveralls-image]: https://img.shields.io/coveralls/compute-io/const-smallest-float32/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/const-smallest-float32?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/const-smallest-float32.svg
[dependencies-url]: https://david-dm.org/compute-io/const-smallest-float32

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/const-smallest-float32.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/const-smallest-float32

[github-issues-image]: http://img.shields.io/github/issues/compute-io/const-smallest-float32.svg
[github-issues-url]: https://github.com/compute-io/const-smallest-float32/issues
