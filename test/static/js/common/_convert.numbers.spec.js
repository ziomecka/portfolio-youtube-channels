/* eslint-disable no-console, no-undef, no-global-assign */
import { COMMON_ERRORS } from '@common/constants';
import { convertNumbers } from '@common';

describe( 'function convertNumbers', () => {
    let consoleSpy;

    beforeEach( () => {
        console = { warn: () => {} };
        consoleSpy = spyOn( console, 'warn' );
    } );

    afterEach( () => {
        consoleSpy.calls.reset();
    } );

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
        expect( console.warn ).toHaveBeenCalledWith( `convertNumbers: ${ COMMON_ERRORS.get( 'convert_numbers_not_number' ) }` );
    } );

    it( 'returns undefined for argument of type object and runs console.warn', () => {
        expect( convertNumbers( {} ) ).toBe( undefined );
        expect( console.warn ).toHaveBeenCalledWith( `convertNumbers: ${ COMMON_ERRORS.get( 'convert_numbers_not_number' ) }` );
    } );

    it( 'returns undefined for argument of type array and runs console.warn', () => {
        expect( convertNumbers( [] ) ).toBe( undefined );
        expect( console.warn ).toHaveBeenCalledWith( `convertNumbers: ${ COMMON_ERRORS.get( 'convert_numbers_not_number' ) }` );
    } );

    it( 'returns undefined for argument of type string that is not a stringified number and runs console.warn', () => {
        expect( convertNumbers( 'dfa45fa' ) ).toBe( undefined );
        expect( console.warn ).toHaveBeenCalledWith( `convertNumbers: ${ COMMON_ERRORS.get( 'convert_numbers_not_number' ) }` );
    } );

    it( 'returns undefined for incorrect separator argument and runs console.warn', () => {
        expect( convertNumbers( '937', 1 ) ).toBe( undefined );
        expect( console.warn ).toHaveBeenCalledWith( `convertNumbers: ${ COMMON_ERRORS.get( 'argument_incorrect' ) }` );
    } );

    it( 'converts string to the Polish notation', () => {
        expect( convertNumbers( '93789', '.' ) ).toBe( '93.789' );
    } );
} );
