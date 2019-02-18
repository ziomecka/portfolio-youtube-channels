require( '../css/index.css' );

import {
    CHANNELS_ROOT_SELECTOR,
    FILTER,
    MEDIA,
    URLS,
} from './constants';

import {
    enableFiltering,
    loadChannels,
} from '@channels';

import {
    manageMedia,
} from '@common';

// ADD MEDIA LISTENERS
manageMedia.addMediaListeners({ media: MEDIA, window });

// ADD FILTERS
const {
    container: filterContainer,
    id: filterId
} = FILTER;

const {
    filterChannels: filterChannelsUrl,
} = URLS;

enableFiltering({
    containerSelector: filterContainer,
    field: 'title',
    filterSelector: filterId,
    root: CHANNELS_ROOT_SELECTOR,
    url: filterChannelsUrl,
});

// enableFiltering({
//     containerSelector: filterContainer,
//     field: 'description',
//     filterSelector: filterId,
//     root: CHANNELS_ROOT_SELECTOR,
//     url: filterChannelsUrl,
// });

// LOAD CHANNELS
loadChannels( { root: CHANNELS_ROOT_SELECTOR } );
