const defaultComparator = require( './comparator' );
const doesError = require( './does.error' );

function validateComparator ( comparator ) {
    const isBoolean = val => ( typeof val === 'boolean' );

    /**
         * if comparator is not the default comparator
         * then throw Error if comparator:
         * - does not return boolean for number or string arguments
         * - does not throw error for object, function, boolean arguments
         * */
    if (
        ( comparator !== defaultComparator ) &&
            (
                !isBoolean( comparator( 1, 2 ) ) ||
                !isBoolean( comparator( 'a', 'b' ) )  ||
                !doesError( { func: comparator, types: ['object', 'function', 'boolean'] } )
            )
    ) {
        throw new Error( 'sortData: incorrect comparator' );
    }
}

module.exports = validateComparator;
