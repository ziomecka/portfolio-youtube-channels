import {
    convertNumbers,
    createElement,
} from '@common/';

import { CHANNELS_CLASSES } from './constants';

const containerElClass = `${ CHANNELS_CLASSES.flexRowSpaceAround } ${ CHANNELS_CLASSES.blockWide }`;
const descriptionElClass =  CHANNELS_CLASSES.flexColumnCenter;
const detailsElClass =  `${ CHANNELS_CLASSES.blockWide } ${ CHANNELS_CLASSES.textCenter }`;

function createStats ( statistics, channelsLocalized ) {
    function prepareStatsValue ( description, value ) {
        const $statsValue = createElement( { class: descriptionElClass }, 'p' );

        $statsValue.appendChild( createElement( { class: detailsElClass }, 'span', `${ description }: ` ) );

        $statsValue.appendChild( createElement( { class: detailsElClass }, 'span', convertNumbers( value ) ) );

        return $statsValue;
    }

    const $container = createElement( { class: containerElClass } );

    // if should not be hidden then prepare subscriber statistics html
    if ( !statistics.hiddenSubscriberCount ) {
        $container.appendChild( prepareStatsValue( channelsLocalized.subscribers, statistics.subscriberCount ) );
    }

    // prepare video statistics html
    $container.appendChild( prepareStatsValue( channelsLocalized.videos, statistics.videoCount ) );

    // prepare view statistics html
    $container.appendChild( prepareStatsValue( channelsLocalized.views, statistics.viewCount ) );

    return $container;
}

export default createStats;
