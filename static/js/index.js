require( '../css/index.css' );

import { CHANNELS_ROOT_SELECTOR } from './constants';

import {
    loadChannels,
} from './channels/';

loadChannels( CHANNELS_ROOT_SELECTOR );
