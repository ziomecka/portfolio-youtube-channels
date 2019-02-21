require( 'dotenv' ).config();

const sessionData = require( '../session/' );

/**
 * store in database ( e.g. mongoDB )
 */
async function storeData ( options ) {
    const { session, data } = Object( options );

    if ( session && data ) {
        if ( process.env.LOG ) {
            console.log( 'Session database: data is stored.' ); // eslint-disable-line
        }

        /* eslint-disable no-console */
        return await sessionData.store( data ).catch( console.error );
        /* eslint-enable no-console */
    }

    return Promise.resolve( false );
}

module.exports = storeData;
