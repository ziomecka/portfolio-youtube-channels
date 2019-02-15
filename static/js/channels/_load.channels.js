import {
    URLS,
} from './constants';

import { api } from '@common';
import createChannels from './_create.channels';

async function loadChannels ( root ) {
    if ( process.env.NODE_ENV !== 'production' ) {
        if ( !root || ( typeof root !== 'string' ) ) {
            /* eslint-disable no-console */
            console.warn( 'Root not provided' );
            /* eslint-enable no-console */
            return undefined;
        }
    }

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

export default loadChannels;
