'use strict';

// CONSTANTS //

var constants = {};

// 1 / Math.pow( 2, 127-1 )
Object.defineProperty( constants, 'VALUE', {
	'value': 1.1754943508222875e-38,
	'enumerable': true,
	'configurable': false,
	'writable': false
});

// 1 / ( Math.pow( 2, 127-1 )*Math.pow( 2, 23 ) )
Object.defineProperty( constants, 'DENORMALIZED', {
	'value': 1.401298464324817e-45,
	'enumerable': true,
	'configurable': false,
	'writable': false
});


// EXPORTS //

module.exports = constants;

