const regexp = require( './filter.regexp' );

function callback ( options ) {
    const { field, text } = options;

    return ( item ) => {
        item = Object( item );

        // TODO improve
        if ( typeof item[field] === 'string' ) {
            return item[field].match( regexp( { pattern: text } ) );
        }
    };
}

module.exports = callback;
