/* eslint-disable no-console, no-undef, no-global-assign */
import { convertNumbers } from '@common';

describe( 'function convertNumbers', () => {
    it( 'converts string to the US/British notation', () => {
        expect( convertNumbers( '235445' ) ).toBe( '235,445' );
    } );

    it( 'converts string to the US/British notation', () => {
        expect( convertNumbers( '1235445' ) ).toBe( '1,235,445' );
    } );

    it( 'converts string to the US/British notation', () => {
        expect( convertNumbers( '71235445' ) ).toBe( '71,235,445' );
    } );

    it( 'converts string to the US/British notation', () => {
        expect( convertNumbers( '0' ) ).toBe( '0' );
    } );

    it( 'converts string to the US/British notation', () => {
        expect( convertNumbers( '937' ) ).toBe( '937' );
    } );

    it( 'returns undefined for argument of type number and runs console.warn', () => {
        expect( convertNumbers( 123 ) ).toBe( undefined );
    } );

    it( 'returns undefined for argument of type object and runs console.warn', () => {
        expect( convertNumbers( {} ) ).toBe( undefined );
    } );

    it( 'returns undefined for argument of type array and runs console.warn', () => {
        expect( convertNumbers( [] ) ).toBe( undefined );
    } );

    it( 'returns undefined for argument of type string that is not a stringified number and runs console.warn', () => {
        expect( convertNumbers( 'dfa45fa' ) ).toBe( undefined );
    } );

    it( 'returns argument for incorrect separator argument and runs console.warn', () => {
        const str = '937';
        expect( convertNumbers( '937', 1 ) ).toBe( str );
    } );

    it( 'converts string to the Polish notation', () => {
        expect( convertNumbers( '93789', '.' ) ).toBe( '93.789' );
    } );
} );
