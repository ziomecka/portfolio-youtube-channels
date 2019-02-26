/**
* traverse down through the object properties, recursive
* @param {Object} obj
* @param {Array<strings>} fieldsArr
* @returns any
 */
function getProperty ( obj, fieldsArr ) {
    /**
     * if obj is not object or fieldsArr is not array or fieldsArr is empty
     * then return obj
     * */
    if ( obj !== Object( obj ) || !Array.isArray( fieldsArr ) || !fieldsArr.length ) {
        return obj;
    }

    return getProperty( obj[fieldsArr[0]], fieldsArr.slice( 1 ) );
}

// module.exports because I do not babel-node in tests and I use node and lodash to create expected results
module.exports = getProperty;
