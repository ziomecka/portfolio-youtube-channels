import {
    CHANNELS_ERRORS,
    DEFAULT_IMAGE_ALT,
    DEFAULT_IMAGE_SIZE,
    DEFAULT_IMAGE_URL,
    DEFAULT_IMAGE_WIDTH,
    DEFAULT_LINK_URL,
    IMAGES_SIZES,
} from './constants';

import {
    isValidUrl,
    manageDom,
} from '@common';

const {
    appendChild,
    createElement,
} = manageDom;

// used to create id in getId
let id = 0;

const isProduction = process.env.NODE_ENV === 'production';

const notNumber = CHANNELS_ERRORS.get( 'argument_not_number' );
const notString = CHANNELS_ERRORS.get( 'argument_not_string' );
const notUrl = CHANNELS_ERRORS.get( 'argument_not_url' );

/**
 *
 * @param {Object} options
 * @param {string} options.title
 * @param {string} options.url
 * @param {number} options.width
 * @returns HTMLElement img
 */
function createImageElement ( options ) {
    let {
        title,
        url,
        width,
    } = options;

    if ( !title || typeof title !== 'string' ) {
        title = DEFAULT_IMAGE_ALT;

        if ( !isProduction ) {
            /* eslint-disable no-console */
            console.warn( `createImageElement: ${ notString }` );
            /* eslint-enable no-console */
        }
    }

    if ( !isValidUrl( url ) ) {
        url = DEFAULT_IMAGE_URL.get( DEFAULT_IMAGE_SIZE );

        if ( !isProduction ) {
            /* eslint-disable no-console */
            console.warn( `createImageElement: ${ notUrl }` );
            /* eslint-enable no-console */
        }
    }

    if ( !width || typeof width !== 'number' ) {
        width = DEFAULT_IMAGE_WIDTH;

        if ( !isProduction ) {
            /* eslint-disable no-console */
            console.warn( `createImageElement: ${ notNumber }` );
            /* eslint-enable no-console */
        }
    }

    // auto for height is enough (?)
    return createElement( {
        attributes: {
            alt: title,
            height: 'auto',
            src: url,
            width,
        },
        tag: 'img',
        window,
    } );
}

/**
 *
 * @param {string} title
 * @returns string
 */
function getId ( title ) {
    if ( typeof title !== 'string' ) {
        if ( !isProduction ) {
            /* eslint-disable no-console */
            console.warn( `getId: ${ notString }` );
            /* eslint-enable no-console */
        }

        title = `${ id++ }`;
        return `app-img-${ title }`;
    }

    return `app-img-${ title.replace( /\s|\./g, '-' ).toLowerCase() }`;
}

/**
 *
 * @param {string} media xs, sm, md, lg, xl
 * @returns string  default, medium, high. Default value: DEFAULT_IMAGE_SIZE
 */
function getSize ( media ) {
    return IMAGES_SIZES.get( media ) || DEFAULT_IMAGE_SIZE;
}


/**
 *
 * @typedef {Object} Tags optional
 * @property {tag} containerEl default figure
 * @property {tag} descriptionEl default figCaption
 * @property {tag} imgWrapperEl default a
 */

/**
 *
 * @param {Object} options
 * @param {string} options.customUrl
 * @param {Object} options.localized
 * @param {string} options.localized.title
 * @param {string} options.media
 * @param {...Tags} options.tags default { containerEl: figure, descriptionEl: figCaption, imgWrapperEl: a }, optional
 * @param {string} options.title
 * @returns HTMLElement
 *
 */
function createImage ( options ) {
    let {
        customUrl,
        localized: { title: localizedTitle },
        media,
        tags: {
            containerEl,
            descriptionEl,
            imgWrapperEl,
        } = {
            containerEl: 'figure',
            descriptionEl: 'figCaption',
            imgWrapperEl: 'a',
        },
        title,
    } = options;

    const id = getId( title );
    const size = getSize( media );

    if ( !isValidUrl( customUrl ) ) {
        customUrl = DEFAULT_LINK_URL;

        if ( !isProduction ) {
            /* eslint-disable no-console */
            console.warn( `createImage: ${ notUrl }` );
            /* eslint-enable no-console */
        }
    }

    const $container = createElement( {
        tag: containerEl,
        window,
    } );

    const $imageWrapper = createElement( {
        attributes: {
            href: customUrl,
            id,
            target: '_blank',
        },
        tag: imgWrapperEl,
        window,
    } );

    const {
        url,
        width,
    } = Object( Object( options.thumbnails )[size] );

    // append image to wrapper
    appendChild( {
        element: $imageWrapper,
        child: createImageElement( {
            title: localizedTitle,
            url,
            width,
        } ),
    } );

    // append wrapper to container
    appendChild( {
        element: $container,
        child: $imageWrapper,
    } );

    // append description to container
    appendChild( {
        element: $container,
        child: createElement( {
            tag: descriptionEl,
            textContent: localizedTitle,
            window,
        } ),
    } );

    return $container;
}

export {
    createImageElement,
    getSize,
};

export default createImage;
