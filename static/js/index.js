require( '../css/index.css' );

import {
    CHANNELS_ROOT_SELECTOR,
    FILTER,
    MEDIA,
    SORT,
    URLS,
} from './constants';

import {
    enableFiltering,
    enableSorting,
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

// ADD SORTERS
const {
    container: sortContainer,
    id: sortId
} = SORT;

const {
    sortChannels: sortChannelsUrl,
} = URLS;

enableSorting({
    containerSelector: sortContainer,
    direction: 'desc',
    field: 'title',
    label: 'title',
    root: CHANNELS_ROOT_SELECTOR,
    sortSelector: `${sortId}-title`,
    url: sortChannelsUrl,
});

enableSorting({
    containerSelector: sortContainer,
    direction: 'desc',
    field: 'statistics.subscriberCount',
    label: 'subscribers',
    root: CHANNELS_ROOT_SELECTOR,
    sortSelector: `${sortId}-subscriber`,
    url: sortChannelsUrl,
});

enableSorting({
    containerSelector: sortContainer,
    direction: 'desc',
    field: 'statistics.videoCount',
    label: 'videos',
    root: CHANNELS_ROOT_SELECTOR,
    sortSelector: `${sortId}-video`,
    url: sortChannelsUrl,
});

enableSorting({
    containerSelector: sortContainer,
    direction: 'desc',
    field: 'statistics.viewCount',
    label: 'views',
    root: CHANNELS_ROOT_SELECTOR,
    sortSelector: `${sortId}-view`,
    url: sortChannelsUrl,
});

// LOAD CHANNELS
loadChannels( { root: CHANNELS_ROOT_SELECTOR } );
