import {
    CHANNELS_ERRORS,
    DEFAULT_IMAGE_URL,
} from './constants';

import {
    createImageElement,
    getSize,
} from './_create.image';

import { manageDom } from '@common/';

const {
    appendChild,
    findElement,
    getFirstChild,
    removeChild,
} = manageDom;

const isProduction = process.env.NODE_ENV === 'production';

const notHTML = CHANNELS_ERRORS.get( 'html_not_found' );

/**
 * The thumbnail data.
 * @typedef {Object} Thumbnail
 * @property {string} url
 * @property {number} width
 * @property {number} height
 */

/**
 * The thumbnails data.
 * @typedef {Object} Thumbnails
 * @property {...Thumbnail} default
 * @property {...Thumbnail} medium
 * @property {...Thumbnail} high
 */

/**
 *
 * @param {Object} options
 * @param {string} options.id
 * @param {string} options.media xs, sm, md, lg, xl
 * @param {...Thumbnails} options.thumbnails
 * @param {string} options.title
 * @returns void
 */
function mediaQueryListener ( options ) {
    const {
        id,
        media,
        thumbnails,
        title,
    } = options;

    const $imageWrapper = findElement( {
        selector: `#${ id }`,
        window,
    } );

    if ( !isProduction ) {
        if ( !$imageWrapper ) {
            /* eslint-disable no-console */
            console.warn( `channels mediaQueryListener wrapper: ${ notHTML }` );
            /* eslint-enable no-console */
        }
    }

    // if element is not falsy
    if ( $imageWrapper ) {
        // get image size
        const size = getSize( media );

        // assumption - first child of wrapper is the current image
        const $image = getFirstChild( $imageWrapper );

        if ( !isProduction ) {
            if ( !$image ) {
                /* eslint-disable no-console */
                console.warn( `channels mediaQueryListener image: ${ notHTML }` );
                /* eslint-enable no-console */
            }
        }

        // if found then remove the current image
        if ( $image ) {
            removeChild( {
                element: $imageWrapper,
                child: $image,
            } );
        }

        /**
         *  add new image
         *  if no url then use default image url
         */
        appendChild( {
            element: $imageWrapper,
            child: createImageElement( {
                title,
                ...thumbnails[size],
                url: thumbnails[size].url || DEFAULT_IMAGE_URL.get( size ),
            } ),
        } );
    }
}

export default mediaQueryListener;
