import { MEDIA_SUBSCRIBERS } from './constants';

function listener ( args ) {
    const [media, value, window] = args;

    /** if media matches the value
     *  then call each subscriber with media value
     */

    if ( window.matchMedia( value ).matches ) {
        for ( let subscribers of MEDIA_SUBSCRIBERS.values() ) {
            subscribers.forEach( func => func( media ) );
        }
    }
}

export default listener;
