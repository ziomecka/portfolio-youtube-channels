import {
    manageDom,
} from '@common';

const {
    findElement,
} = manageDom;

/**
 *
 * @param {string} root
 * @returns void
 */
function removeChannels ( root ) {
    const $root = findElement( {
        selector: root,
        window,
    } );

    if ( $root ) {
        $root.innerHTML = '';
    } else {
        if ( process.env.NODE_ENV !== 'production' ) {
            if ( !$root ) {
                /* eslint-disable no-console */
                console.warn( 'removeChannels: $root HTMLElement not found' );
                /* eslint-enable no-console */
            }
        }
        // TODO display message to user
    }
}

export default removeChannels;
