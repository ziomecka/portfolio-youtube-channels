/* eslint-disable no-console, no-undef, no-global-assign */
import data from './_data';
import expectedResult from './_results.json';
import filterData from '@channelsData/filter/';

describe( 'function filter', () => {
    const field = 'title';

    it( 'filters channels by title field: f', () => {
        const testedResult = filterData( data, field, 'f' );

        expect( testedResult ).toEqual( expectedResult.f.result );
        expect( testedResult.length ).toEqual( expectedResult.f.count );
    } );

    it( 'filters channels by title field: F', () => {
        const testedResult = filterData( data, field, 'F' );

        expect( testedResult ).toEqual( expectedResult.f.result );
        expect( testedResult.length ).toEqual( expectedResult.f.count );
    } );

    it( 'filters channels by title field: g00gle', () => {
        const testedResult = filterData( data, field, 'gOOgle' );

        expect( testedResult ).toEqual( expectedResult.google.result );
        expect( testedResult.length ).toEqual( expectedResult.google.count );
    } );

    it( 'filters channels by title field: g00gle', () => {
        const testedResult = filterData( data, field, 'D*' );

        expect( testedResult ).toEqual( expectedResult['D*'].result );
        expect( testedResult.length ).toEqual( expectedResult['D*'].count );
    } );

    it( 'returns complete data if text is empty', () => {
        let testedResult = filterData( data, field, '' );
        expect( testedResult ).toEqual( data );
    } );
} );
