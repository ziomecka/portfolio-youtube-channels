import {
    CHANNELS_CLASSES,
    LISTENERS_ID,
} from './constants';

import {
    manageDom,
    manageMedia,
} from '@common';

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
 * @typedef {Object} ChannelClasses
 * @property {string} className default as defined in constants
 * @property {Object} image
 * @property {Object} stats
 */
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
 * @param {...ChannelClasses} options.classes optional
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
        classes: {
            className,
            image: imageClasses,
            stats: statsClasses,
        } = {
            className: `${ CHANNELS_CLASSES.flexColumnCenter } ${ CHANNELS_CLASSES.boxPrimary }`,
        },
        media,
        tag = 'div',
    } = options;

    const $container = createElement( {
        attributes: { class: className },
        tag,
        window,
    } );

    // create image
    const $image = createImage( { classes: imageClasses, customUrl, localized, media, title, thumbnails } );

    // append image
    // no check if $image not falsy because createImage does not return undefined
    appendChild( {
        element: $container,
        child: $image,
    } );


    // register listeners for media query changes
    manageMedia.subscribeToMediaChanges( {
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
        child: createStats( { channelsLocalized, classes: statsClasses, statistics } ),
    } );

    return $container;
}

export default createChannel;
