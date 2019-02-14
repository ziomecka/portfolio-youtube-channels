import {
    COMMON_ERRORS,
} from './constants';

import {
    MEDIA,
} from '@constants';

/**
 *
 * @param {Window} window
 * @param {string} defaultMedia one of: xs || sm || md || lg || xl
 */
function detectMedia ( window, defaultMedia = 'xs' ) {
    if ( process.env.NODE_ENV !== 'production' ) {
        if ( !window || typeof window.matchMedia !== 'function' ) {
            /* eslint-disable no-console */
            console.warn( `detectMedia: ${ COMMON_ERRORS.get( 'argument_incorrect' )}` );
            /* eslint-disable no-console */
            return undefined;
        }

        if ( ![...MEDIA.keys()].includes( defaultMedia ) ) {
            /* eslint-disable no-console */
            console.warn( `detectMedia: ${ COMMON_ERRORS.get( 'argument_incorrect' )}` );
            /* eslint-disable no-console */
            return undefined;
        }
    }

    for ( let [key, value] of MEDIA.entries() ) {
        if ( window.matchMedia( value ).matches ) {
            return key;
        }
    }

    return defaultMedia;
}

export default detectMedia;
