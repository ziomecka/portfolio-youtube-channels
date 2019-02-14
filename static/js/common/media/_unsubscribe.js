import { MEDIA_SUBSCRIBERS } from './constants';

/**
 *
 * @param {string} id identifier used in listeners map
 * @returns void
 */
function unsubscribe ( id ) {
    MEDIA_SUBSCRIBERS.clear( id );
}

export default unsubscribe;
