const { getData } = require( '../data/' );
const sendBody = require( './_send.body' );

/**
 * get data or error
 * finally send body
 */
async function getChannels ( ctx, next ) {
    const body = await getData()
        .catch( err => ( { err: err.message || err.toString() } ) )
        .then( completeData => ( { result: completeData } ) );

    ctx.deleteSessionData = true;
    sendBody( { ctx, next, body } );
}

module.exports = getChannels;
