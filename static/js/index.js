require( '../css/index.css' );

import {
    CHANNELS_ROOT_SELECTOR,
    MEDIA,
} from './constants';

import {
    loadChannels,
} from '@channels';

import {
    manageMedia,
} from '@common';

// ADD MEDIA LISTENERS
manageMedia.addMediaListeners({ media: MEDIA, window });

// LOAD CHANNELS
loadChannels( { root: CHANNELS_ROOT_SELECTOR } );
