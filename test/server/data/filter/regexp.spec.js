/* eslint-disable no-console, no-undef, no-global-assign */
import filterRegexp from '@server/filter/filter.regexp';
import helper from './_regexp.helper';

describe( 'regexp', () => {
    let testedText;

    beforeEach( () => {
        testedText = 'ds12321.sdfasOofasfas-';
    } );

    it( 'returns true for pattern oo ( and text Oo )', () => {
        expect( helper( { pattern: 'oo', callback: filterRegexp } ).test( testedText ) ).toBe( true );
    } );

    it( 'returns true for pattern oO ( and text Oo )', () => {
        expect( helper( { pattern: 'oO', callback: filterRegexp } ).test( testedText ) ).toBe( true );
    } );

    it( 'returns false for pattern containing ooo ( and text does not )', () => {
        expect( helper( { pattern: 'ooo', callback: filterRegexp } ).test( testedText ) ).toBe( false );
    } );

    it( 'returns true for pattern being empty string', () => {
        expect( helper( { pattern: '', callback: filterRegexp } ).test( testedText ) ).toBe( true );
    } );

    it( 'returns true for pattern and text containing .', () => {
        expect( helper( { pattern: '.', callback: filterRegexp } ).test( testedText ) ).toBe( true );
    } );

    it( 'returns false for pattern containing .. (and text does not)', () => {
        expect( helper( { pattern: '..', callback: filterRegexp } ).test( testedText ) ).toBe( false );
    } );

    it( 'returns true for pattern and text containing -', () => {
        expect( helper( { pattern: '-', callback: filterRegexp } ).test( testedText ) ).toBe( true );
    } );

    it( 'returns true for pattern containing *', () => {
        expect( helper( { pattern: '*', callback: filterRegexp } ).test( testedText ) ).toBe( true );
    } );

    it( 'returns false if string does not match pattern', () => {
        expect( helper( { pattern: 'Google', callback: filterRegexp } ).test( testedText ) ).toBe( false );
    } );

    it( 'throws error if no options are provided', () => {
        expect( () => helper().test( testedText ) ).toThrowError();
    } );

    it( 'throws error if no pattern is provided', () => {
        expect( () => helper( { pattern: {}, callback: filterRegexp } ).test( testedText ) ).toThrowError();
    } );
} );
