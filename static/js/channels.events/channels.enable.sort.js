import {
    CHANNELS_ROOT_SELECTOR,
    LISTENERS_ID,
    SORT_ATTRIBUTE,
} from '@constants';

import { DEFAULT_DIRECTION } from '@channelsData/constants';

import loadChannels from '@channelsLoad';
import manageChannelsData from '@channelsData';
import { manageDomListeners } from '@common';

/**
 * assign listener to the sorter's HTMLElement
 * @returns integer, listener's id
 */
function channelsEnableSort ( sortSelector, direction = DEFAULT_DIRECTION, root = CHANNELS_ROOT_SELECTOR ) {
    return manageDomListeners.add(
        'change',
        LISTENERS_ID,
        ( e ) => {
            const { target } = e;
            /**
             * if radio button has been selected
             *  then get the sorted channels and load them ( remove the current channels )
             */
            if ( target.value === 'on' ) {
                loadChannels( manageChannelsData.sort( target.getAttribute( SORT_ATTRIBUTE ), direction ), root, true );
            }
        },
        sortSelector,
    );
}

export default channelsEnableSort;
