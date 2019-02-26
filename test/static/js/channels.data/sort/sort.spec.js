/* eslint-disable no-console, no-undef, no-global-assign */
import data from './_data';
import expectedResult from './_results.json';
import sortData from '@channelsData/sort/';

describe( 'function sort', () => {
    describe( 'sorts data by not nested key field:', () => {
        const field = 'title';

        it( 'title, asc', () => {
            const direction = 'asc';

            const testedResult = sortData( data, field, direction );

            expect( testedResult ).toEqual( expectedResult.titleAsc );
        } );

        it( 'title, desc', () => {
            const direction = 'desc';

            const testedResult = sortData( data, field, direction );

            expect( testedResult ).toEqual( expectedResult.titleDesc );
        } );
    } );

    describe( 'sorts data by nested key field:', () => {
        it( 'statistics.subscriberCount, desc', () => {
            const field = 'statistics.subscriberCount';
            const direction = 'desc';

            const testedResult = sortData( data, field, direction );

            expect( testedResult ).toEqual( expectedResult.subscriberCountDesc );
        } );

        it( 'statistics.viewCount, asc', () => {
            const field = 'statistics.viewCount';
            const direction = 'asc';

            const testedResult = sortData( data, field, direction );

            expect( testedResult ).toEqual( expectedResult.viewCountAsc );
        } );
    } );
} );
