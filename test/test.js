/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	constants = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-const-smallest-float32', function tests() {

	it( 'should export an object', function test() {
		expect( constants ).to.be.an( 'object' );
	});

	it( 'should expose a constant', function test() {
		expect( constants.VALUE ).to.be.a( 'number' );
	});

	it( 'should expose a denormalized value', function test() {
		expect( constants.DENORMALIZED ).to.be.a( 'number' );
		assert.ok( constants.VALUE > constants.DENORMALIZED );
	});

});
