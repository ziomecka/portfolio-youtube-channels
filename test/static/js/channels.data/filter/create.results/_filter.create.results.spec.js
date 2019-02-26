/* eslint-disable no-console, no-undef, no-global-assign */
import createResults from './_filter.create.results';

describe( 'filter createResults', () => {
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

        expect( createResults( data, pattern, field ).result ).toEqual( [data[0], data[1]] );
        expect( createResults( data, pattern, field ).count ).toBe( 2 );
    } );

    it( 'returns object with correct result and count properties', () => {
        const pattern = '3';
        const field = 'loo';

        expect( createResults( data, pattern, field ).result ).toEqual( [data[1]] );
        expect( createResults( data, pattern, field ).count ).toBe( 1 );
    } );

    it( 'returns object with correct result (empty array) and count (0) properties', () => {
        const pattern = 'q';
        const field = 'loo';

        expect( createResults( data, pattern, field ).result ).toEqual( [] );
        expect( createResults( data, pattern, field ).count ).toBe( 0 );
    } );

    it( 'returns empty array if pattern is undefined', () => {
        const field = 'loo';

        expect( createResults( data, undefined, field ).result ).toEqual( [] );
    } );

    it( 'returns empty array if field is undefined', () => {
        const pattern = 'q';
        expect( createResults( data, pattern ).result ).toEqual( [] );
    } );
} );
