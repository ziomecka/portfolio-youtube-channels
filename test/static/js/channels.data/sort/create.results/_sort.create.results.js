// require becasue used in create.results (can be run via node and I do not babel node )
const lodashOrder = require( 'lodash.orderby' );
const getProperty = require( '../../../../../../static/js/channels.data/sort/get.property' );

function lodashIteratee ( field ) {
    return (
        ( item ) => {
            // getProperty has been tested
            const objectProperty = getProperty( item, field.split( '.' ) );
            const number = Number( objectProperty );

            /**
             * if is number
             * then sort as a number
             * else if is string
             * then return lowercase string
             * else return undefined
             */
            if ( !Number.isNaN( number ) ) {
                return number;
            } else if ( typeof objectProperty === 'string' ) {
                return objectProperty.toLowerCase();
            } else {
                return undefined;
            }
        }
    );
}

/**
 * CAUTION: if sorted property is undefined then the object:
 *  - goes to end (asc)
 *  - goes to beginning (desc)
 * */
const createResults = ( data, fields, directions ) => {
    /**
     * For each field pass to lodash the lodashIteratee.
     * Thanks to is the lodash sort becomes case insensitive
     */
    return lodashOrder( data, fields.map( lodashIteratee ), directions );
};

module.exports = {
    createResults,
    lodashIteratee,
};

