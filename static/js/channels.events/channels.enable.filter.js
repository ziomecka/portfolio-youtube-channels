import {
    CHANNELS_ROOT_SELECTOR,
    LISTENERS_ID,
} from '@constants';

import loadChannels from '@channelsLoad';
import manageChannelsData from '@channelsData';
import { manageDomListeners } from '@common';

/**
 * assign listener to the filter's HTMLElement
 * @returns integer, listener's id
 */
function channelsEnableFilter ( field, filterSelector, root = CHANNELS_ROOT_SELECTOR ) {
    return manageDomListeners.add(
        'input',
        LISTENERS_ID,
        //  get the filtered channels and load them ( remove the current channels )
        ( e ) => loadChannels( manageChannelsData.filter( e.target.value, field ), root, true ),
        filterSelector,
    );
}

export default channelsEnableFilter;
