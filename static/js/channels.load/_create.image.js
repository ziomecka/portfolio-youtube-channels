import {
    CHANNELS_CLASSES,
    DEFAULT_IMAGE_SIZE,
    IMAGES_SIZES,
    IMAGE_ALT,
} from './constants';

import { createElement } from '@common';

const containerElClass = `${ CHANNELS_CLASSES.flexColumnCenter} ${CHANNELS_CLASSES.blockWide }`;
const descriptionElClass = `${ CHANNELS_CLASSES.blockWide } ${ CHANNELS_CLASSES.heading }`;
const imgElClass = `${ CHANNELS_CLASSES.image } ${ CHANNELS_CLASSES.imageRound }`;

function createImage ( options ) {
    const {
        localized: { title: localizedTitle },
        thumbnails,
        customUrl,
    } = options;

    const $imageContainer = createElement( { class: containerElClass }, 'figure' );

    const $imageLinkWrapper = createElement( { href: customUrl, target: '_blank' }, 'a' );

    const $picture = createElement( null, 'picture' );

    /**
     * for each media defined in IMAGES_SIZES
     * append source to picture html element
     */
    for ( let media of IMAGES_SIZES.keys() ) {
        $picture.appendChild( createElement(
            { media: IMAGES_SIZES.get( media ), srcset: thumbnails[media].url },
            'source',
        ) );
    }

    // append image to picture
    $picture.appendChild( createElement(
        {
            alt: `${ IMAGE_ALT } ${ localizedTitle }`,
            class: imgElClass,
            src: thumbnails[DEFAULT_IMAGE_SIZE].url,
        },
        'img',
    ) );

    $imageLinkWrapper.appendChild( $picture );
    $imageContainer.appendChild( $imageLinkWrapper );

    // append description
    $imageContainer.appendChild( createElement( { class: descriptionElClass }, 'figCaption', localizedTitle ) );

    return $imageContainer;
}

export default createImage;
