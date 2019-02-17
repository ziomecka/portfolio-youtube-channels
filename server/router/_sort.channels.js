const { readQuery } = require( '../common' );
const sendBody = require( './_send.body' );
const { sortData } = require( '../data/' );

/**
 * get data or error
 * finally send body
 */
async function sortChannels ( ctx, next ) {
    const { field, value } = readQuery( ctx.query );

    const body = await sortData( { field, direction: value } )
        .catch( err => ( { err: err.message || err.toString() } ) )
        .then( sortedData => ( { result: sortedData } ) );

    sendBody( { ctx, next, body } );
}

module.exports = sortChannels;
