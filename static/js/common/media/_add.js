import { COMMON_ERRORS } from '../constants';

import { MEDIA_LISTENERS } from './constants';

import defaultListener from './_listener';

/**
 * add listener to window.matchMedia
 * @param {Object} options
 * @param {Map} options.media
 * @param {Window} options.window
 */
function addMediaListeners ( options ) {
    const {
        listener = defaultListener,
        media,
        window,
    } = options;

    if ( process.env.NODE_ENV !== 'production' ) {
        if ( !window ||
            ( typeof window.matchMedia !== 'function' ) ||
            ( typeof window.matchMedia( 'screen' ).addListener !== 'function' ) ||
            ( typeof listener !== 'function' ) ||
            ( !( media instanceof Map ) )
        ) {
            /* eslint-disable no-console */
            console.warn( `addMediaListeners: ${ COMMON_ERRORS.get( 'argument_incorrect' )}` );
            /* eslint-disable no-console */
            return undefined;
        }
    }

    /**
     * for each Media register a window matchMedia listener
     * listener will be called with:
     *  - media (xs | sm | md | lg | xl)
     *  - value (e.g. screen and (max-width: 360px) )
     *  - window object
     */

    for ( let [screen, value] of media.entries() ) {
        const _listener = listener.bind( null, [screen, value, window] );

        MEDIA_LISTENERS.set( screen, _listener );

        window.matchMedia( value ).addListener( _listener );
    }
}

export default addMediaListeners;
