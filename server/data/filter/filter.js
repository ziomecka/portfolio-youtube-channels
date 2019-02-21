require( 'dotenv' ).config();

const callback = require( './callback' );
const defaultComparator = require( '../sort/comparator' );
const getData = require( '../get/' );
const sortCallback = require( '../sort/callback' );
const validateComparator = require( '../sort/validate.comparator' );

async function filterData ( options ) {
    const {
        comparator = defaultComparator,
        direction,
        field,
        sort,
        text,
    } = options;

    validateComparator( comparator );

    const { LOG } = process.env;

    const isString = val => ( typeof val === 'string' );

    const sortData = ( data ) => {
        return ( sort )
            ? [...data].sort( sortCallback( { comparator, direction, field: sort } ) )
            : data;
    };

    if ( LOG ) {
        console.log( 'filterData: I request the data' ); // eslint-disable-line
    }

    /**
     * if text is non-empty string
     * then
     *      if field is non-empty strings
     *      then return the localized general data && the filtered data ( or throw error from async getData function )
     *      else throw Error
     * else
     *      return the localized general data && the complete data ( or throw error from async getData function )
     */
    if ( text && isString( text ) ) {
        if ( field  && isString( field ) ) {
            /** request the localized general data && the completed data */
            const data = await getData().catch( err => { throw new Error( err.message || err.toString() ); } );

            /** filter data */
            /** if the filtered data should be sorted - do it */
            const filteredData = data.data.filter( callback( { field, text } ) );
            const filteredAndSortedData = sortData( filteredData );

            /**
             * the localized general data && the filtered and sorted data
             * return direction only if the data has been sorted
             * */
            const result = {
                ...data,
                data: filteredAndSortedData,
                direction: sort ? direction: undefined,
            };

            return result;
        } else {
            throw new Error( 'filterData: incorrect field or text' );
        }
    } else {
        /** return
         *  the localized general data && the sorted complete data
         *  ( or throw error from async getData function )
         * */
        const data = await getData().catch( err => { throw new Error( err.message || err.toString() ); } );
        const sortedData = sortData( data.data );

        /**
         * the localized general data && the sorted complete data
         * return direction only if the data has been sorted
         * */
        const result = {
            ...data,
            data: sortedData,
            direction: sort ? direction: undefined,
        };

        return result;
    }
}

module.exports = filterData;
