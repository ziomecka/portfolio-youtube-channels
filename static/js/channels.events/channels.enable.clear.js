import {
    getCheckedElement,
    manageDomListeners,
} from '@common';

import { LISTENERS_ID } from '@constants';

import loadChannels from '@channelsLoad';
import manageChannelsData from '@channelsData';

/**
 * assign listener to the clear button's HTMLElement
 * @returns integer, listener's id
 */
function channelsEnableClear ( clearSelector, filterId, sortId ) {
    return manageDomListeners.add(
        'click',
        LISTENERS_ID,
        () => {
            const $filter = document.querySelector( `[id^="${ filterId }"]` );
            const $selectedSort = getCheckedElement( sortId );

            if ( $filter ) {
                $filter.value = '';
            }

            if ( $selectedSort ) {
                $selectedSort.checked = false;
            }

            /**
             * if either filter or selected sort found
             * then get the channels and load them ( remove the current channels )
             */
            if ( $filter || $selectedSort ) {
                loadChannels( undefined, undefined, true );

                // clear displayed data on data side
                manageChannelsData.clear();
            }
        },
        clearSelector,
    );
}

export default channelsEnableClear;
