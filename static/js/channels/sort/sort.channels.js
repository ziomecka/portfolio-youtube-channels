import {
    DEFAULT_ELEMENTS,
    SORT_DATA_ATTRIBUTE,
} from './constants';

import {
    buildId,
    helpers,
    isValidUrl,
} from '@common';

import { LISTENERS_ID } from '../constants';

import addListeners from './_add.listeners';
import listener from './_listener';
import prepareHTML from './_prepare.html';

require( './css/index.css' );

function sortChannels ( options = {} ) {
    const {
        containerSelector,
        direction = 'desc',
        field,
        label,
        root,
        url,
    } = options;

    const { isNotEmptyString } = helpers;

    if ( process.env.NODE_ENV !== 'production' ) {
        // containerSelector will throw Error, no need to check
        if (
            !isNotEmptyString( field ) ||
            !isNotEmptyString( label ) ||
            !isNotEmptyString( root ) ||
            !isValidUrl( { url, http: false } )
        ) {
            /* eslint-disable no-console */
            console.warn( 'sortChannels: incorrect arguments' );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    const sortSelector = options.sortSelector.replace( /\./g, '-' );

    /**
     * create the sorter's HTMLElement and return the id
     * The element will have custom data attribute, used by filter to catch selected sorting
     */
    const id = prepareHTML( {
        $elements: {
            $input: {
                ...DEFAULT_ELEMENTS.$input,
                attributes: {
                    ...DEFAULT_ELEMENTS.$input.attributes,
                    [SORT_DATA_ATTRIBUTE]: field,
                },
            },
        },
        field,
        id: sortSelector,
        label,
        selector: buildId( containerSelector ),
        window,
    } );

    // assign listener to the sorter's HTMLElement
    addListeners( {
        event: 'change',
        direction,
        id: LISTENERS_ID,
        root,
        selector: buildId( id ),
        listener: listener( { direction, field, root, url } ),
        window,
    } );
}

export default sortChannels;
