/* eslint-disable no-console, no-undef, no-global-assign */
import helper from './_filter.helper';

describe( 'filter helper', () => {
    let data;

    beforeEach( () => {
        data= [
            {
                'foo': 'fD24 3w4.',
                'loo': 'TExt',
            },
            {
                'foo': 'dfdasf324 3w4.',
                'loo': 'dfd text 3w4.',
            },
        ];
    } );

    it( 'returns object with correct result and count properties', () => {
        const pattern = 'd';
        const field = 'foo';

        expect( helper( { data, pattern, field } ).result ).toEqual( [data[0], data[1]] );
        expect( helper( { data, pattern, field } ).count ).toBe( 2 );
    } );

    it( 'returns object with correct result and count properties', () => {
        const pattern = '3';
        const field = 'loo';

        expect( helper( { data, pattern, field } ).result ).toEqual( [data[1]] );
        expect( helper( { data, pattern, field } ).count ).toBe( 1 );
    } );

    it( 'returns object with correct result (empty array) and count (0) properties', () => {
        const pattern = 'q';
        const field = 'loo';

        expect( helper( { data, pattern, field } ).result ).toEqual( [] );
        expect( helper( { data, pattern, field } ).count ).toBe( 0 );
    } );

    it( 'throws error if pattern is undefined', () => {
        const field = 'loo';

        expect( () => helper( { data, field } ).result ).toThrowError();
    } );

    it( 'returns empty array if field is undefined', () => {
        const pattern = 'q';
        expect( helper( { data, pattern } ).result ).toEqual( [] );
    } );
} );
