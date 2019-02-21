require( 'dotenv' ).config();

const { DEFAULT_DIRECTION } = require( './constants' );
const callback = require( './callback' );
const defaultComparator = require( './comparator' );
const getData = require( '../get' );
const storeData = require( '../store' );
const validateComparator = require( './validate.comparator' );

async function sortData ( options ) {
    const {
        field,
        comparator = defaultComparator,
        direction = DEFAULT_DIRECTION,
        session,
    } = options;

    const { LOG } = process.env;

    validateComparator( comparator );

    /**
     * if field has not been provided in options or is not string
     * then throw Error
     */
    if ( !field || ( typeof field !== 'string' ) ) {
        throw new Error( 'sortData: incorrect field' );
    }

    /**
     * else return the localized general data && the sorted data ( or throw error from async getData function )
     */

    if ( LOG ) {
        console.log( 'sortData: I request the data' ); // eslint-disable-line
    }

    const data = await getData( session ).catch( err => { throw new Error( err.message || err.toString() ); } );

    /** the localized general data && the sorted data && the direction */
    const result =  {
        ...data,
        data: [...data.data].sort( callback( { comparator, direction, field } ) ),
        direction,
    };

    if ( LOG ) {
        console.log( 'sortData: I request to store the sorted data' ); // eslint-disable-line
    }

    storeData( { session, data: result } );

    /** return the localized general data && the sorted data (copy is made) */
    return result;
}

module.exports = sortData;
