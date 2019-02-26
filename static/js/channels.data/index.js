import { DEFAULT_DIRECTION } from './constants';

import filterChannels from './filter';
import sortChannels from './sort';

/**
 * @returns functions to manage data: get, clear, filter, sort, store
 */
function createChannelsData () {
    // COMPLETE_DATA AND DISPLAYED_DATA include: localized and channels data
    const COMPLETE_DATA = require( './channels.json' );
    let DISPLAYED_DATA = COMPLETE_DATA;

    let SORT_DIRECTION;
    let FILTERED_BY;
    let SORTED_BY;

    return {
        get: () => COMPLETE_DATA,
        clear: () => {
            DISPLAYED_DATA = COMPLETE_DATA;
            FILTERED_BY = undefined;
            SORT_DIRECTION = undefined;
            SORTED_BY = undefined;
        },
        filter: ( text, field ) => {
            const result = { ...COMPLETE_DATA };

            /**
             * if text is not falsy,
             * then if text is longer then the last filter
             *      then filter the displayed data
             *      else filter the complete data
             *  else return the complete data
             */
            if ( text ) {
                if ( FILTERED_BY && text.length > FILTERED_BY.length ) {
                    result.channels = filterChannels( DISPLAYED_DATA.channels, field, text );
                } else {
                    result.channels = filterChannels( COMPLETE_DATA.channels, field, text );
                }
            } else {
                result.channels = COMPLETE_DATA.channels;
            }

            FILTERED_BY = text;

            manageChannelsData.store( result );

            if ( SORTED_BY ) {
                Object.assign( result, manageChannelsData.sort( SORTED_BY, SORT_DIRECTION ) );
            }

            return result;
        },
        sort: ( field, direction = DEFAULT_DIRECTION ) => {
            SORTED_BY = field;
            SORT_DIRECTION = direction;

            return {
                ...COMPLETE_DATA,
                channels: sortChannels( DISPLAYED_DATA.channels, field, direction ),
                direction: SORT_DIRECTION,
            };
        },
        store: ( result ) => DISPLAYED_DATA = result,
    };
}

const manageChannelsData = createChannelsData();

export default manageChannelsData;
