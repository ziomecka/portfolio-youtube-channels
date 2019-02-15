require( 'dotenv' ).config();

const callback = require( './callback' );
const getData = require( '../get/' );

async function filterData ( options ) {
    const {
        field,
        text,
    } = options;

    const { LOG } = process.env;

    const isString = val => ( typeof val === 'string' );

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

            /**
             * the localized general data && the filtered and sorted data
             * return direction only if the data has been sorted
             * */
            const result = {
                ...data,
                data: filteredData,
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
        return await getData().catch( err => { throw new Error( err.message || err.toString() ); } );
    }
}

module.exports = filterData;
