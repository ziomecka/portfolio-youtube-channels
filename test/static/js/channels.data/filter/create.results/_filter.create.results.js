// require because I do not babel node
const filterRegexp = require( '../../../../../../static/js/channels.data/filter/filter.regexp' );
const lodashFilter = require( 'lodash.filter' );

// filterRegExp has been tested in regexp.spec
const createResults = ( data, pattern, field ) => {
    const result = lodashFilter( data, ( obj ) => {
        const regexp = filterRegexp( pattern );

        return regexp ? regexp.test( obj[field] ) : false;
    } );

    return {
        result,
        count: result ? result.length : 0,
    };
};

module.exports = createResults;

