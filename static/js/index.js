require( '../css/vendor.css' );
require( '../sass/index.sass' );

import {
    LISTENERS_ID,
    loadChannels,
} from './channels/';

import { removeAllMediaQueryListeners } from '@common';

// IMPORTANT: If new channels loaded then firstly remove the media query listeners!
removeAllMediaQueryListeners( { id: LISTENERS_ID } );
loadChannels();
