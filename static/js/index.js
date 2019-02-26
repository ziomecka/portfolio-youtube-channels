require( '../css/index.css' );

import {
    channelsEnableClear,
    channelsEnableFilter,
    channelsEnableSort,
} from '@channelsEvents';

import loadChannels from '@channelsLoad';

channelsEnableClear( '#clear', 'filter-title' );

channelsEnableFilter( 'title', '#filter-title' );

channelsEnableSort( '#fjs-sort-container' );

loadChannels();
