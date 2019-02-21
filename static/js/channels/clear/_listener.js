import {
    helpers,
    manageDom,
} from '@common';

import {
    CHANNELS_ROOT_SELECTOR,
} from '@constants';

import { getSorted } from '../common/';
import loadChannels from '../_load.channels';

const { isNotEmptyString } = helpers;
const { findElement } = manageDom;

/**
 *
 * @param {Object} options
 * @param {string} options.filterSelector
 * @param {string} options.sortSelector
 * @returns function
 */
function listener ( options ) {
    const {
        filterSelector,
        sortSelector,
    } = options;

    if ( process.env.NODE_ENV !== 'production' ) {
        if ( !isNotEmptyString( filterSelector )  || !isNotEmptyString( sortSelector ) ) {
            /* eslint-disable no-console */
            console.warn( 'channelsClear listener: incorrect arguments' );
            /* eslint-enable no-console */
        }
    }

    return (
        () => {
            //  finds one filter element
            const $filter = findElement( {
                selector: `[id^="${ filterSelector }"]`,
                window,
            } );

            // finds the selected sorted element
            const $selectedSort = getSorted( sortSelector );

            // CLEAR

            if ( $filter ) {
                $filter.value = '';
            }

            if ( $selectedSort ) {
                $selectedSort.checked = false;
            }

            /**
             * if either filter or selected sort found
             * then load channels
             */
            if ( $filter || $selectedSort ) {
                loadChannels( {
                    removeChannels: true,
                    root: CHANNELS_ROOT_SELECTOR,
                } );
            }
        }
    );
}

export default listener;
