/* eslint-disable no-console, no-undef, no-global-assign */
import sortHelper from './_helper';

const {
    helper,
    iteratee,
} = sortHelper;

describe( 'sort helper\'s iteratee', () => {
    let obj;

    let fieldString;
    let fieldNumber;
    let fieldUndefined;

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
        const iterateeFunc = iteratee( fieldString );

        expect( typeof iterateeFunc === 'function' ).toBeTruthy;
    } );

    it( 'returns function that returns lowercase string', () => {
        const iterateeFunc = iteratee( fieldString );
        const result = iterateeFunc( obj );

        expect( result ).toBe( obj.foo.poo.str.toLowerCase() );
    } );

    it( 'returns function that returns number', () => {
        const iterateeFunc = iteratee( fieldNumber );
        const result = iterateeFunc( obj );

        expect( result ).toBe( obj.foo.poo.num );
    } );

    it( 'returns function that returns undefined if fproperty does not exist', () => {
        const iterateeFunc = iteratee( fieldUndefined );
        const result = iterateeFunc( obj );

        expect( result ).toBe( undefined );
    } );
} );

describe( 'sort helper', () => {
    let data;

    let fieldString;
    let fieldNumber;
    let fieldUndefined;

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
        const result = helper( {
            data,
            fields: [fieldString],
            directions: ['asc'],
        } );

        expect( result ).toEqual( [data[1], data[3], data[0], data[2]] );
    } );

    it( 'sorts objects by string, desc, case insensitive', () => {
        const result = helper( {
            data,
            fields: [fieldString],
            directions: ['desc'],
        } );

        expect( result ).toEqual( [data[2], data[0], data[3], data[1]] );
    } );

    it( 'sorts objects by number, asc', () => {
        const result = helper( {
            data,
            fields: [fieldNumber],
            directions: ['asc'],
        } );

        expect( result ).toEqual( [data[3], data[1], data[0], data[2]] );
    } );

    it( 'sorts objects by number, desc', () => {
        const result = helper( {
            data,
            fields: [fieldNumber],
            directions: ['desc'],
        } );

        expect( result ).toEqual( [data[2], data[0], data[1], data[3]] );
    } );

    it( 'returns data if property does not exist in sorted objects ', () => {
        const result = helper( {
            data,
            fields: [fieldUndefined],
            directions: ['desc'],
        } );

        expect( result ).toEqual( data );
    } );
} );
