/* eslint-disable no-console, no-undef, no-global-assign */
import getProperty from '@channelsData/sort/get.property';

describe( 'getProperty', () => {
    let obj;

    beforeEach( () => {
        obj = {
            foo: {
                poo: {
                    loo: 'nothing',
                },
            },
        };
    } );

    it( 'returns inner most property', () => {
        const result = getProperty( obj, ['foo', 'poo', 'loo'] );

        expect( result ).toEqual( obj.foo.poo.loo );
    } );

    it( 'returns middle property', () => {
        const result = getProperty( obj, ['foo', 'poo'] );

        expect( result ).toEqual( obj.foo.poo );
    } );

    it( 'returns outer most property', () => {
        const result = getProperty( obj, ['foo'] );

        expect( result ).toEqual( obj.foo );
    } );

    it( 'returns undefined if property does not exist', () => {
        const result = getProperty( obj, ['does not exist'] );

        expect( result ).toBe( undefined );
    } );

    it( 'returns object if arr is empty', () => {
        const result = getProperty( obj, [] );

        expect( result ).toEqual( obj );
    } );

    it( 'returns object if arr is undefined', () => {
        const result = getProperty( obj );

        expect( result ).toEqual( obj );
    } );

    it( 'throws err if arguments not provided', () => {
        const result = getProperty();

        expect( result ).toBe( undefined );
    } );
} );
