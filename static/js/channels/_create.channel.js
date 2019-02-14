import {
    manageDom,
    registerMediaQueryListener,
} from '@common';

import {
    LISTENERS_ID,
} from './constants';

import createImage from './_create.image';
import createStats from './_create.stats';
import mediaQueryListener from './_media.query.listener';

const {
    appendChild,
    createElement,
    getAttribute,
    getFirstChild,
} = manageDom;

/**
 *
 * @param {Object} options
 * @param {Object} options.channelData
 * @param {string} options.channelData.customUrl
 * @param {Object} options.channelData.statistics
 * @param {Object} options.channelData.localized
 * @param {Object} options.channelData.thumbnails
 * @param {string} options.channelData.title
 * @param {Object} options.channelsLocalized
 * @param {tag} options.tag default 'div'
 * @param {string} options.media xs, sm, md, lg, xl
 * @returns HTMLElement
 *
 */
function createChannel ( options ) {
    const {
        channelData: {
            customUrl,
            statistics,
            localized,
            thumbnails,
            title,
        } = {},
        channelsLocalized,
        media,
        tag = 'div',
    } = options;

    const $container = createElement( {
        tag,
        window,
    } );

    // create image
    const $image = createImage( { customUrl, localized, media, title, thumbnails } );

    // append image
    // no check if $image not falsy because createImage does not return undefined
    appendChild( {
        element: $container,
        child: $image,
    } );

    // register listeners for media query changes
    registerMediaQueryListener( {
        id: LISTENERS_ID,
        listener: ( media ) => mediaQueryListener( {
            id: getAttribute( { element: getFirstChild( $image ), attribute: 'id' } ),
            media,
            thumbnails,
            title,
        } ),
        window,
    } );

    // create and append stats
    appendChild( {
        element: $container,
        child: createStats( { channelsLocalized, statistics } ),
    } );

    return $container;
}

export default createChannel;
