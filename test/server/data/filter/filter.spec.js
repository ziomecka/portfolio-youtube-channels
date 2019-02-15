/* eslint-disable no-console, no-undef, no-global-assign */
import callback from '@server/filter/callback';
import data from './_data';
import expectedResult from './_results.json';

describe( 'function filter', () => {
    const field = 'title';

    it( 'filters channels by title field: f', () => {
        const testedResult = data.filter( callback( { field, text: 'f' } ) );

        expect( testedResult ).toEqual( expectedResult.f.result );
        expect( testedResult.length ).toEqual( expectedResult.f.count );
    } );

    it( 'filters channels by title field: F', () => {
        const testedResult = data.filter( callback( { field, text: 'F' } ) );

        expect( testedResult ).toEqual( expectedResult.f.result );
        expect( testedResult.length ).toEqual( expectedResult.f.count );
    } );

    it( 'filters channels by title field: g00gle', () => {
        const testedResult = data.filter( callback( { field, text: 'gOOgle' } ) );

        expect( testedResult ).toEqual( expectedResult.google.result );
        expect( testedResult.length ).toEqual( expectedResult.google.count );
    } );

    it( 'filters channels by title field: g00gle', () => {
        const testedResult = data.filter( callback( { field, text: 'D*' } ) );

        expect( testedResult ).toEqual( expectedResult['D*'].result );
        expect( testedResult.length ).toEqual( expectedResult['D*'].count );
    } );

    it( 'returns complete data if text is empty', () => {
        let testedResult = data.filter( callback( { field, text: '' } ) );
        expect( testedResult ).toEqual( data );
    } );
} );
