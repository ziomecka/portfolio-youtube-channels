const data = require( './channels.json' );

/**
 * query to database ( e.g. mongoDB)
 * could Promise.reject
 */
async function getData () {
    /** return the localized general data and the complete data */
    return Promise.resolve( data );
}

module.exports=getData;
