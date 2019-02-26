/* eslint-disable no-console, no-undef, no-global-assign */
import createResultsObj from './_sort.create.results';

describe( 'sort create results\'s: ', () => {
    describe( 'lodashIteratee', () => {
        let obj;

        let fieldString;
        let fieldNumber;
        let fieldUndefined;

        const { lodashIteratee } = createResultsObj;

        beforeEach( () => {
            obj = {
                foo: {
                    poo: {
                        str: 'NOTHINg',
                        num: 123,
                    },
                },
            };

            fieldString = 'foo.poo.str';
            fieldNumber = 'foo.poo.num';
            fieldUndefined = 'foo.moo';

        } );

        it( 'returns function', () => {
            const lodashIterateeFunc = lodashIteratee( fieldString );

            expect( typeof lodashIterateeFunc === 'function' ).toBeTruthy;
        } );

        it( 'returns function that returns lowercase string', () => {
            const lodashIterateeFunc = lodashIteratee( fieldString );
            const result = lodashIterateeFunc( obj );

            expect( result ).toBe( obj.foo.poo.str.toLowerCase() );
        } );

        it( 'returns function that returns number', () => {
            const lodashIterateeFunc = lodashIteratee( fieldNumber );
            const result = lodashIterateeFunc( obj );

            expect( result ).toBe( obj.foo.poo.num );
        } );

        it( 'returns function that returns undefined if fproperty does not exist', () => {
            const lodashIterateeFunc = lodashIteratee( fieldUndefined );
            const result = lodashIterateeFunc( obj );

            expect( result ).toBe( undefined );
        } );
    } );

    describe( 'create results function', () => {
        let data;

        let fieldString;
        let fieldNumber;
        let fieldUndefined;

        const { createResults } = createResultsObj;

        beforeEach( () => {
            data = [
                {
                    foo: {
                        poo: {
                            str: 'SBd',
                            num: 12,
                        },
                    },
                },
                {
                    foo: {
                        poo: {
                            str: 'abc',
                            num: -1,
                        },
                    },
                },
                {
                    foo: {
                        poo: {
                        },
                    },
                },
                {
                    foo: {
                        poo: {
                            str: 'sac',
                            num: -3,
                        },
                    },
                },
            ];

            fieldString = 'foo.poo.str';
            fieldNumber = 'foo.poo.num';
            fieldUndefined = 'foo.moo';

        } );

        it( 'sorts objects by string, asc, case insensitive', () => {
            const result = createResults( data, [fieldString], ['asc'] );

            expect( result ).toEqual( [data[1], data[3], data[0], data[2]] );
        } );

        it( 'sorts objects by string, desc, case insensitive', () => {
            const result = createResults( data, [fieldString], ['desc'] );

            expect( result ).toEqual( [data[2], data[0], data[3], data[1]] );
        } );

        it( 'sorts objects by number, asc', () => {
            const result = createResults( data, [fieldNumber], ['asc'] );

            expect( result ).toEqual( [data[3], data[1], data[0], data[2]] );
        } );

        it( 'sorts objects by number, desc', () => {
            const result = createResults( data, [fieldNumber], ['desc'] );

            expect( result ).toEqual( [data[2], data[0], data[1], data[3]] );
        } );

        it( 'returns data if property does not exist in sorted objects ', () => {
            const result = createResults( data, [fieldUndefined], ['desc'] );

            expect( result ).toEqual( data );
        } );

        // [KZZ] - can be removed. No value added, and has to be maintained
        // it( 'returns data if directions not provided ', () => {
        //     const result = createResults( data, [fieldUndefined] );

        //     expect( result ).toEqual( data );
        // } );

        // it( 'throws error if fields not provided ', () => {
        //     const func = () => createResults( data, null, ['desc'] );

        //     expect( func ).toThrowError();
        // } );
    } );
} );
