/* eslint-disable no-console, no-undef, no-global-assign, no-useless-escape */
import getEscapeFunction from '@common/_get.escape.function';

describe( 'function getEscapeFunction', () => {
    let func;

    beforeEach( () => {
        func = getEscapeFunction();
    } );

    it( 'returns function', () => {
        expect( typeof func ==='function' ).toBe( true );
    } );

    it( 'returns function that throws err if arg is number', () => {
        expect( () => func( 123 ) ).toThrowError();
    } );

    it( 'throws error if variant is foo', () => {
        expect( () => getEscapeFunction( { variant: 'foo' } ) ).toThrowError();
    } );

    describe( 'for default variant (query) ', () => {

        it( 'returns function that escapes =', () => {
            const escapedStr = func( 'ab=09=' );
            expect( escapedStr ).toBe( 'ab\\=09\\=' );
        } );

        it( 'returns function that escapes &', () => {
            const escapedStr = func( '&09=' );
            expect( escapedStr ).toBe( '\\&09\\=' );
        } );

        it( 'returns function that escapes \\', () => {
            const escapedStr = func( 'f=d&af\\' );
            expect( escapedStr ).toBe( 'f\\=d\\&af\\' );
        } );
    } );
} );

