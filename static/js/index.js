require( '../css/index.css' );

import {
    LISTENERS_ID,
    loadChannels,
} from './channels/';

import { CHANNELS_ROOT_SELECTOR } from './constants';

import { removeAllMediaQueryListeners } from '@common';

// IMPORTANT: If new channels loaded then firstly remove the media query listeners!
removeAllMediaQueryListeners( { id: LISTENERS_ID } );
loadChannels( CHANNELS_ROOT_SELECTOR );
