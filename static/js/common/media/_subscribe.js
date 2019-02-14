import { COMMON_ERRORS } from '../constants';
import { MEDIA_SUBSCRIBERS } from './constants';

/**
 *
 * @param {Object} options
 * @param {string} options.id identifier used in listeners map
 * @param {function} options.listener
 * @returns void
 */
function subscribe ( options ) {
    const {
        id,
        listener,
    } = options;

    if ( process.env.NODE_ENV !== 'production' ) {
        if ( typeof listener !== 'function' ) {
            /* eslint-disable no-console */
            console.warn( `subscribeToMedia: ${ COMMON_ERRORS.get( 'media_query_not_function' ) }` );
            /* eslint-enable no-console */
            return undefined;
        }

        if ( !id || typeof id !== 'string' ) {
            /* eslint-disable no-console */
            console.warn( `subscribeToMedia: ${ COMMON_ERRORS.get( 'argument_not_string' ) }` );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    let subscribers = MEDIA_SUBSCRIBERS.get( id );

    if ( !subscribers ) {
        MEDIA_SUBSCRIBERS.set( id, [] );
        subscribers = MEDIA_SUBSCRIBERS.get( id );
    }

    subscribers.push( listener );
}

export default subscribe;
