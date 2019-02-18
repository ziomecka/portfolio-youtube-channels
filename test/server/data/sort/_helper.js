// require becasue used in create.results (can be run via node and I do not babel node )
const lodashOrder = require( 'lodash.orderby' );
const getProperty = require( '../../../../server/data/sort/get.property' );

function iteratee ( field ) {
    return (
        ( item ) => {
            // getProperty has been tested
            const objectProperty = getProperty( { arr: field.split( '.' ), obj: item } );
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
const helper = ( options ) => {
    const {
        data,
        directions,
    } = options;

    let { fields } = options;

    if (
        !Array.isArray( fields ) ||
        !Array.isArray( directions ) ||
        fields.length !== directions.length ||
        directions.some( item => ( item !== 'asc' ) && ( item !=='desc' ) )
    ) {
        throw new Error( 'helper: arguments incorrect' );
    }

    /**
     * For each field pass to lodash an iteratee.
     * Thanks to is the lodash sort becomes case insensitive
     */
    return lodashOrder( data, fields.map( iteratee ), directions );
};

module.exports = {
    helper,
    iteratee,
};

