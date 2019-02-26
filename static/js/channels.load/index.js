import { CHANNELS_ROOT_SELECTOR } from '@constants';
import { SORT_ICON_SELECTOR } from './constants';

import { channelsRemove as channelsRemoveFunc } from '@channelsEvents';
import createChannels from './_create.channels';
import manageChannelsData from '@channelsData';
import { manageDirectionIcon } from '@common';

let lastDirection;

function loadChannels ( data = manageChannelsData.get(), root = CHANNELS_ROOT_SELECTOR, removeChannels ) {
    if ( removeChannels ) {
        channelsRemoveFunc( root );
    }

    createChannels( data, root );

    //  if direction has changed then change the direction icon
    const { direction } = data;

    if ( direction !== lastDirection ) {
        manageDirectionIcon( SORT_ICON_SELECTOR, direction );
        lastDirection = direction;
    }
}

export default loadChannels;
