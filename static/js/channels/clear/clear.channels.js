import {
    buildId,
    helpers,
    manageDomListeners,
} from '@common';

import { LISTENERS_ID } from '../constants';

import listener from './_listener';

const { isNotEmptyString } = helpers;

/**
 *
 * @param {Object} options
 * @param {string} options.clearSelector
 * @param {string} options.filterSelector
 * @param {string} options.sortSelector
 * @returns number - id of the listener
 */
function clear ( options ) {
    const {
        clearSelector,
        filterSelector,
        sortSelector,
    } = options;

    if ( process.env.NODE_ENV !== 'production' ) {
        if (
            !isNotEmptyString( clearSelector )  ||
            !isNotEmptyString( filterSelector )  ||
            !isNotEmptyString( sortSelector )
        ) {
            /* eslint-disable no-console */
            console.warn( 'channelsClear listener: incorrect arguments' );
            /* eslint-enable no-console */
        }
    }

    return manageDomListeners.add( {
        event: 'click',
        id: LISTENERS_ID,
        listener: listener( {
            filterSelector: filterSelector,
            sortSelector: sortSelector,
        } ),
        selector: buildId( clearSelector ),
        window,
    } );
}

export default clear;
