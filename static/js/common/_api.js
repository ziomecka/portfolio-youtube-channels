import { COMMON_ERRORS } from './constants';
import fetch from 'node-fetch';
import { isValidUrl } from '@common';
import prepareApiQuery from './_api.prepare.query';

/**
 *
 * @param {string} url
 * @param {Object} queries optional
 * @returns Promise<json>
 */
async function get ( options ) {
    const {
        url,
        queries,
    } = Object( options );

    if ( process.env.NODE_ENV !== 'production' ) {
        if (
            !( isValidUrl( { url, http: false } ) ) ||
            ( queries && ( Object( queries ) !== queries ) )
        ) {
            /* eslint-disable no-console */
            console.warn( `api get: ${ COMMON_ERRORS.get( 'argument_incorrect' )}` );
            /* eslint-enable no-console */
            Promise.reject( undefined );
        }
    }

    const getUrl = queries
        ? `${ url }${ prepareApiQuery( queries )}`
        : url;

    /**
     * GET DATA
     * @return either resolve Promise with data or reject Promise with error
     */
    try {
        const response = await fetch( getUrl, { method: 'GET' } );
        const data = await response.json();

        const { result, err } = data;

        if ( result ) {
            return Promise.resolve( result );
        } else {
            return Promise.reject( `api: ${ err }` );
        }
    } catch ( err ) {
        return Promise.reject( err.message || err.toString() );
    }
}

export default {
    get,
};
