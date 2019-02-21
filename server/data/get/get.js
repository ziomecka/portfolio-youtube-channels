require( 'dotenv' ).config();

const getSessionData = require( '../session/' ).get;
const data = require( './channels.json' );

/**
 * query to database ( e.g. mongoDB )
 * if session provided
 * then return the session data
 * else return the complete data
 *
 * Both, the session and the complete data include:
 * - the localized general data, and
 * - the channels data
 */
async function getData ( session ) {
    const { LOG } = process.env;

    // it is a simplification because I store just an object (no session database is implemented )
    if ( session ) {

        /* eslint-disable no-console */
        const sessionData = await getSessionData().catch( console.error );
        /* eslint-enable no-console */

        if ( LOG ) {
            if ( sessionData ) {
                console.log( 'Session database: data is returned' ); // eslint-disable-line
            } else {
                console.log( 'Database: the complete data is returned' ); // eslint-disable-line
            }
        }

        // if no session data then return the complete data
        return Promise.resolve( sessionData || data );
    }

    if ( LOG ) {
        console.log( 'Database: the complete data is returned' ); // eslint-disable-line
    }

    return Promise.resolve( data );
}

module.exports = getData;
