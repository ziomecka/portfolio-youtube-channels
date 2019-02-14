import { MEDIA_LISTENERS } from './constants';

/**
 * removes listener from window.matchMedia
 * @param {Window}
 * @returns void
 */
function removeMediaListeners ( window ) {
    // simplification removed all at once
    for ( let [value, listener] of MEDIA_LISTENERS ) {
        window.matchMedia( value ).removeListener( listener );
    }
}

export default removeMediaListeners;
