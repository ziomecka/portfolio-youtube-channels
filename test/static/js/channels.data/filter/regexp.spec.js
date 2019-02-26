/* eslint-disable no-console, no-undef, no-global-assign */
import filterRegexp from '@channelsData/filter/filter.regexp';

describe( 'regexp', () => {
    let testedText;

    beforeEach( () => {
        testedText = 'ds12321.sdfasOofasfas-';
    } );

    it( 'returns true for pattern oo ( and text Oo )', () => {
        expect( filterRegexp( 'oo' ).test( testedText ) ).toBe( true );
    } );

    it( 'returns true for pattern oO ( and text Oo )', () => {
        expect( filterRegexp( 'oO' ).test( testedText ) ).toBe( true );
    } );

    it( 'returns false for pattern containing ooo ( and text does not )', () => {
        expect( filterRegexp( 'ooo' ).test( testedText ) ).toBe( false );
    } );

    it( 'returns true for pattern being empty string', () => {
        expect( filterRegexp( '' ).test( testedText ) ).toBe( true );
    } );

    it( 'returns true for pattern and text containing .', () => {
        expect( filterRegexp( '.' ).test( testedText ) ).toBe( true );
    } );

    it( 'returns false for pattern containing .. (and text does not)', () => {
        expect( filterRegexp( '..' ).test( testedText ) ).toBe( false );
    } );

    it( 'returns true for pattern and text containing -', () => {
        expect( filterRegexp( '-' ).test( testedText ) ).toBe( true );
    } );

    it( 'returns true for pattern containing *', () => {
        expect( filterRegexp( '*' ).test( testedText ) ).toBe( true );
    } );

    it( 'returns false if string does not match pattern', () => {
        expect( filterRegexp( 'Google' ).test( testedText ) ).toBe( false );
    } );

    it( 'throws error if no options are provided', () => {
        expect( () => filterRegexp().test( testedText ) ).toThrowError();
    } );

    it( 'throws error if no pattern is provided', () => {
        expect( () => filterRegexp( {} ).test( testedText ) ).toThrowError();
    } );
} );
