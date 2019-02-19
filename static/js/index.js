require( '../css/index.css' );

import {
    CHANNELS_ROOT_SELECTOR,
    CLEAR,
    FILTER,
    MEDIA,
    SORT,
    URLS,
} from './constants';

import {
    enableClearing,
    enableFiltering,
    enableSorting,
    loadChannels,
} from '@channels';

import {
    detectStorage,
    manageMedia,
} from '@common';

// DETECT LOCAL STORAGE
const localStorageAvailable = detectStorage( 'localStorage' );

// ADD MEDIA LISTENERS
manageMedia.addMediaListeners( { media: MEDIA, window } );

// ADD FILTERS
const {
    container: filterContainer,
    id: filterId,
} = FILTER;

const {
    filterChannels: filterChannelsUrl,
} = URLS;

enableFiltering( {
    containerSelector: filterContainer,
    field: 'title',
    filterSelector: filterId,
    localStorageAvailable,
    root: CHANNELS_ROOT_SELECTOR,
    url: filterChannelsUrl,
} );

// enableFiltering({
//     containerSelector: filterContainer,
//     field: 'description',
//     filterSelector: filterId,
//     root: CHANNELS_ROOT_SELECTOR,
//     url: filterChannelsUrl,
// });

// ADD SORTERS
const {
    container: sortContainer,
    id: sortId,
} = SORT;

const {
    sortChannels: sortChannelsUrl,
} = URLS;

enableSorting( {
    containerSelector: sortContainer,
    direction: 'desc',
    field: 'title',
    label: 'title',
    root: CHANNELS_ROOT_SELECTOR,
    sortSelector: `${sortId}-title`,
    url: sortChannelsUrl,
} );

enableSorting( {
    containerSelector: sortContainer,
    direction: 'desc',
    field: 'statistics.subscriberCount',
    label: 'subscribers',
    root: CHANNELS_ROOT_SELECTOR,
    sortSelector: `${sortId}-subscriber`,
    url: sortChannelsUrl,
} );

enableSorting( {
    containerSelector: sortContainer,
    direction: 'desc',
    field: 'statistics.videoCount',
    label: 'videos',
    root: CHANNELS_ROOT_SELECTOR,
    sortSelector: `${sortId}-video`,
    url: sortChannelsUrl,
} );

enableSorting( {
    containerSelector: sortContainer,
    direction: 'desc',
    field: 'statistics.viewCount',
    label: 'views',
    root: CHANNELS_ROOT_SELECTOR,
    sortSelector: `${sortId}-view`,
    url: sortChannelsUrl,
} );

// ENABLE CLEARING
const {
    id: clearId,
} = CLEAR;

enableClearing( {
    clearSelector: clearId,
    filterSelector: filterId,
    sortSelector: sortId,
} );

// LOAD CHANNELS
loadChannels( {
    localStorageAvailable,
    root: CHANNELS_ROOT_SELECTOR,
} );
