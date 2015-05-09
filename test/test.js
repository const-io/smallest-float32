/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	CONST = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-const-smallest-float32', function tests() {

	it( 'should export a number', function test() {
		expect( CONST ).to.be.a( 'number' );
	});

	it( 'should export a denormalized value', function test() {
		expect( CONST.denormalized ).to.be.a( 'number' );
		assert.ok( CONST > CONST.denormalized );
	});

});
