'use strict';

// SMALLEST FLOAT32 //

// 1 / Math.pow( 2, 127-1 )
var value = new Number( 1.1754943508222875e-38 );

// 1 / ( Math.pow( 2, 127-1 )*Math.pow( 2, 23 ) )
Object.defineProperty( value, 'denormalized', {
	'value': 1.401298464324817e-45,
	'enumerable': true,
	'configurable': false,
	'writable': false
});


// EXPORTS //

module.exports = value;

