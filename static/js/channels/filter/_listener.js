import {
    helpers,
    isValidUrl,
    manageDom,
} from '@common';

import { DEFAULT_SORT_DIRECTION } from '../constants';
import { SORT_DATA_ATTRIBUTE } from '../sort/constants';

import api from '../api/';
import { getSorted } from '../common/';
import loadChannels from '../_load.channels';

const { getAttribute } = manageDom;
const { isNotEmptyString } = helpers;

function listener ( options ) {
    const {
        field,
        root,
        sortSelector,
        url,
    } = options;

    if ( process.env.NODE_ENV !== 'production' ) {
        if (
            !root ||
            typeof root !== 'string' ||
            !field ||
            typeof field !== 'string' ||
            !isValidUrl( { url, http: false } ) ||
            !isNotEmptyString( sortSelector )
        ) {
            /* eslint-disable no-console */
            console.warn( 'filter listener: incorrect argument' );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    return async ( value ) => {
        try {
            // find the custom SORT_DATA_ATTRIBUTE of the checked sort element
            const $checkedSortElement = getSorted( sortSelector );

            const name = $checkedSortElement
                ? getAttribute( {
                    element: $checkedSortElement,
                    attribute: SORT_DATA_ATTRIBUTE,
                } )
                : '';

            loadChannels( {
                root,
                data: await api.get( {
                    url,
                    queries: {
                        [field]: value,
                        sort: name,
                        direction: DEFAULT_SORT_DIRECTION,
                    },
                } ),
                removeChannels: true,
            } );
        } catch ( err ) {
            if ( process.env.NODE_ENV !== 'production' ) {
                /* eslint-disable no-console */
                console.log( err );
                /* eslint-enable no-console */
            }

            return undefined;
            // TODO display some error message
        }
    };
}

export default listener;
