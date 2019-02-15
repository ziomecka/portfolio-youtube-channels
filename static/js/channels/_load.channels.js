import {
    LISTENERS_ID,
    URLS,
} from './constants';

import {
    api,
    removeAllMediaQueryListeners,
} from '@common';

import createChannels from './_create.channels';

async function _loadChannels ( root ) {
    try {
        createChannels( {
            data: await api.get( URLS.channels ),
            root,
        } );
    } catch ( err ) {
        // TODO display error info
        return undefined;
    }
}

async function loadChannels ( root ) {
    if ( process.env.NODE_ENV !== 'production' ) {
        if ( !root || ( typeof root !== 'string' ) ) {
            /* eslint-disable no-console */
            console.warn( 'Root not provided' );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    // IMPORTANT: If new channels loaded then firstly remove the media query listeners!
    removeAllMediaQueryListeners( { id: LISTENERS_ID } );
    _loadChannels( root );
}

export default loadChannels;
