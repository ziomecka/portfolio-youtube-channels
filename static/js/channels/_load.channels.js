import {
    LISTENERS_ID,
    STORAGE_ID,
    URLS,
} from './constants';

import {
    api,
    manageMedia,
} from '@common';

import { createChannels } from './create/';
import { removeChannels } from './remove/';

async function _loadChannels ( options ) {
    const {
        localStorageAvailable,
        root,
    } = options;

    let { data } = options;

    /**
     * if data is not provided in arguments
     * then
     * - get data from localStorage and if data then createChannels AND
     * - get data from server, if data
     *      - remove channels received from localStorage
     *      - then createChannels and store data in localStorage
     *      - else display some error TODO
     * else
     * - use the data to createChannels
     */
    if ( !data ) {
        if ( localStorageAvailable ) {
            data = localStorage.getItem( STORAGE_ID );

            if ( data ) {
                // add channels recived from localStorage
                createChannels( { data: JSON.parse( data ), root } );
            }
        }

        try {
            data = await api.get( { url: URLS.channels } );

            // remove channels loaded from localStorage
            removeChannels( options.root );

            // add channels received from server
            createChannels( { data, root } );

            if ( localStorageAvailable ) {
                // store channels in localStorage
                localStorage.setItem( STORAGE_ID, JSON.stringify( data ) );
            }
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
