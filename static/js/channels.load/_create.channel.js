import { CHANNELS_CLASSES } from './constants';

import { createElement } from '@common';
import createImage from './_create.image';
import createStats from './_create.stats';

const className = `${ CHANNELS_CLASSES.flexColumnCenter } ${ CHANNELS_CLASSES.boxPrimary }`;

function createChannel ( channelData, channelsLocalized ) {
    const $container = createElement( { class: className } );

    $container.appendChild( createImage( channelData ) );

    $container.appendChild( createStats( channelData.statistics, channelsLocalized ) );

    return $container;
}

export default createChannel;
