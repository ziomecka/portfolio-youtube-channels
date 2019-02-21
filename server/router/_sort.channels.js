const { readQuery } = require( '../common' );
const sendBody = require( './_send.body' );
const { sortData } = require( '../data/' );
const { readSession } = require( '../session' );

/**
 * get data or error
 * finally send body
 */
async function sortChannels ( ctx, next ) {
    const { field, value } = readQuery( ctx.query );
    const session = readSession( ctx );

    const body = await sortData( { field, direction: value, session } )
        .catch( err => ( { err: err.message || err.toString() } ) )
        .then( sortedData => ( { result: sortedData } ) );

    ctx.deleteSessionData = false;
    sendBody( { ctx, next, body } );
}

module.exports = sortChannels;
