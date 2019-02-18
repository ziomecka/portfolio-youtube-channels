import {
    LISTENERS_ID,
    URLS,
} from './constants';

import {
    api,
    manageMedia,
} from '@common';

import { createChannels } from './create/';
import { removeChannels } from './remove/';

async function _loadChannels ( options ) {
    const { root } = options;
    let { data } = options;

    if ( !data ) {
        try {
            data = await api.get( { url: URLS.channels } );
            createChannels( { data, root } );
        } catch ( err ) {
            /* eslint-disable no-console */
            console.log( err );
            /* eslint-enable no-console */
            return undefined;
            // TODO display some error message
        }
    } else {
        createChannels( { data, root } );
    }
}

/**
 *
 * @param {Object} options
 * @param {string} options.root
 * @param {object} options.data
 * @param {boolean} options.removeChannels optional
 */
async function loadChannels ( options ) {
    if ( process.env.NODE_ENV !== 'production' ) {
        const { data } = options;

        if ( data && data.data && !Array.isArray( data.data ) ) {
            /* eslint-disable no-console */
            console.warn( 'loadChannels: data is not an array' );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    if ( options.removeChannels ) {
        manageMedia.unsubscribeFromMediaChanges( { id: LISTENERS_ID } );
        removeChannels( options.root );
    }

    _loadChannels( options );
}

export default loadChannels;
