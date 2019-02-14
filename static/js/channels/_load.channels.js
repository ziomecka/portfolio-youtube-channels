import {
    CHANNELS_ROOT_SELECTOR,
    URLS,
} from './constants';

import { api } from '@common';
import createChannels from './_create.channels';

async function loadChannels () {
    try {

        createChannels( {
            data: await api.get( URLS.channels ),
            root: CHANNELS_ROOT_SELECTOR,
        } );
    } catch ( err ) {
        // TODO display error info
        return undefined;
    }
}

export default loadChannels;
