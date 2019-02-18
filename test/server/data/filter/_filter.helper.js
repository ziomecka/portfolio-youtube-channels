// require because I do not babel node
const filterRegexp = require( '../../../../server/data/filter/filter.regexp' );
const lodashFilter = require( 'lodash.filter' );

// filterRegExp has been tested in filter.regexp.spec
const helper = ( options ) => {
    const { field, data, pattern } = options;

    const result = lodashFilter( data, ( obj ) => filterRegexp( { pattern } ).test( obj[field] ) );

    return {
        result,
        count: result ? result.length : 0,
    };
};

module.exports = helper;

