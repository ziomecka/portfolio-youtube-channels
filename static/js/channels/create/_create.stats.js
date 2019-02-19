import {
    CHANNELS_CLASSES,
    CHANNELS_ERRORS,
    DEFAULT_CHANNELS_LOCALIZED,
} from './constants';

import {
    convertNumbers,
    manageDom,
} from '@common/';

const { appendChild, createElement } = manageDom;

const notString = CHANNELS_ERRORS.get( 'argument_not_string' );
const noData = CHANNELS_ERRORS.get( 'channels_no_data' );

const isProduction = process.env.NODE_ENV === 'production';

/**
 *
 * @typedef {Object} Tags optional
 * @property {tag} containerEl default div
 * @property {tag} descriptionEl default p
 * @property {tag} detailsEl default span
 */

/**
 *
 * @param {Object} options
 * @param {Object} options.classes
 * @param {string} options.description
 * @param {string} options.value
 * @param {...Tags} options.tags default { descriptionEl: p, detailsEl: span }
 * @returns HTMLElement
 */
function _createStats ( options ) {
    const {
        classes: {
            descriptionEl: descriptionElClass,
            detailsEl: detailsElClass,
        } = {
            descriptionEl: CHANNELS_CLASSES.flexColumnCenter,
            detailsEl: `${CHANNELS_CLASSES.blockWide} ${CHANNELS_CLASSES.textCenter }`,
        },
        tags: {
            descriptionEl,
            detailsEl,
        } = {
            descriptionEl: 'p',
            detailsEl: 'span',
        },
    } = options;

    let {
        description,
        value,
    } = options;

    if ( !description || ( typeof description !== 'string' ) ) {
        if ( !isProduction ) {
            /* eslint-disable no-console */
            console.warn( `createStats description: ${ notString }` );
            /* eslint-enable no-console */
        }
        description = '';
    }

    if ( !value || ( typeof value !== 'string' ) ) {
        if ( !isProduction ) {
            /* eslint-disable no-console */
            console.warn( `createStats value: ${ notString }` );
            /* eslint-enable no-console */
        }
        value = '';
    }

    const $container = createElement( {
        tag: descriptionEl,
        attributes: { class: descriptionElClass },
        window,
    } );

    appendChild( {
        element: $container,
        child: createElement( {
            attributes: { class: detailsElClass },
            tag: detailsEl,
            textContent: `${ description }: `,
            window,
        } ),
    } );

    appendChild( {
        element: $container,
        child: createElement( {
            attributes: { class: detailsElClass },
            tag: detailsEl,
            textContent: value,
            window,
        } ),
    } );

    return $container;
}

/**
 * The thumbnail data.
 * @typedef {Object} ChannelsLocalized
 * @property {string} statisticsValue
 * @property {string} subscribers
 * @property {string} videos
 * @property {string} views
 */

/**
 *
 * @typedef {Object} Classes optional
 * @property {string} containerEl default as defined in constants
 * @property {string} descriptionEl default as defined in constants
 * @property {string} detailsEl default as defined in constants
 */

/**
 * The thumbnail data.
 * @typedef {Object} Statistics
 * @property {boolean} hiddenSubscriberCount optional, default true
 * @property {string} subscriberCount
 * @property {string} viewCount
 * @property {string} videoCount
 */

/**
 *
 * @param {Object} options
 * @param {...ChannelsLocalized} options.channelsLocalized default {}
 * @param {...Classes} options.classes optional
 * @param {...Statistics} options.statistics default {}
 * @param {...Tags} options.tags default { containerEl: div, descriptionEl: p, detailsEl: span }
 * @returns HTMLElement
 */
function createStats ( options ) {
    const {
        channelsLocalized: {
            statisticsValue,
            subscribers,
            videos,
            views,
        } = {},
        classes: {
            containerEl: containerElClass,
            descriptionEl: descriptionElClass,
            detailsEl: detailsElClass,

        } = {
            containerEl: `${ CHANNELS_CLASSES.flexRowSpaceAround } ${ CHANNELS_CLASSES.blockWide }`,
            descriptionEl: CHANNELS_CLASSES.flexColumnCenter,
            detailsEl: `${CHANNELS_CLASSES.blockWide} ${CHANNELS_CLASSES.textCenter }`,
        },
        statistics: {
            hiddenSubscriberCount = true,
            subscriberCount,
            viewCount,
            videoCount,
        } = {},
        tags: {
            containerEl,
            descriptionEl,
            detailsEl,
        } = {
            containerEl: 'div',
            descriptionEl: 'p',
            detailsEl: 'span',
        },
    } = options;

    const $container = createElement( {
        tag: containerEl,
        attributes: { class: containerElClass },
        window,
    } );

    if ( !isProduction ) {
        if ( options.channelsLocalized !== Object( options.channelsLocalized ) ) {
            /* eslint-disable no-console */
            console.warn( `createStats channelsLocalized: ${ noData }` );
            /* eslint-enable no-console */
        }

        if ( options.statistics !== Object( options.statistics ) ) {
            /* eslint-disable no-console */
            console.warn( `createStats statistics: ${ noData }` );
            /* eslint-enable no-console */
        }
    }

    const commonClasses = {
        descriptionEl: descriptionElClass,
        detailsEl: detailsElClass,
    };

    const commonTags = {
        descriptionEl,
        detailsEl,
    };

    const defaultStatisticsValue = DEFAULT_CHANNELS_LOCALIZED.statisticsValue;

    // if not hidden then prepare subscribers' html
    if ( !hiddenSubscriberCount ) {
        appendChild( {
            element: $container,
            child: _createStats( {
                classes: commonClasses,
                description: subscribers || DEFAULT_CHANNELS_LOCALIZED.subscribers,
                tags: commonTags,
                value: convertNumbers( subscriberCount ) || statisticsValue || defaultStatisticsValue,
            } ),
        } );
    }

    // prepare videos' html
    appendChild( {
        element: $container,
        child: _createStats( {
            classes: commonClasses,
            description: videos || DEFAULT_CHANNELS_LOCALIZED.videos,
            tags: commonTags,
            value: convertNumbers( videoCount ) || statisticsValue || defaultStatisticsValue,
        } ),
    } );

    // prepare views' html
    appendChild( {
        element: $container,
        child: _createStats( {
            classes: commonClasses,
            description: views || DEFAULT_CHANNELS_LOCALIZED.views,
            tags: commonTags,
            value: convertNumbers( viewCount ) || statisticsValue || defaultStatisticsValue,
        } ),
    } );

    return $container;
}

export default createStats;
