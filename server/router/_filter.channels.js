const { filterData } = require( '../data/' );
const { readQuery } = require( '../common/' );
const sendBody = require( './_send.body' );

/**
 * get data or error
 * finally send body
 */
async function filterChannels ( ctx, next ) {
    const { field, value } = readQuery( ctx.query );
    const body = await filterData( { field, text: value, next } )
        .catch( err => ( { err: err.message || err.toString() } ) )
        .then( filteredData =>  ( { result: filteredData } ) );

    sendBody( { ctx, next, body } );
}

module.exports = filterChannels;
