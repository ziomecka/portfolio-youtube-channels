require( 'dotenv' ).config();

const sessionData = require( '../session/' );

async function clearData ( ctx ) {
    if ( ctx.deleteSessionData ) {
        /* eslint-disable no-console */
        const cleared = await sessionData.clear().catch( console.error );
        /* eslint-enable no-console */

        if ( cleared ) {
            if ( process.env.LOG ) {
                console.log( 'Session database: data is cleared' ); // eslint-disable-line
            }
            return Promise.resolve( true );
        }
        return Promise.resolve( false );
    }
    return Promise.resolve( undefined );
}

module.exports = clearData;
