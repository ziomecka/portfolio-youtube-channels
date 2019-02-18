import {
    buildId,
    helpers,
    isValidUrl,
} from '@common';

import { LISTENERS_ID } from '../constants';

import addListeners from './_add.listeners';
import listener from './_listener';
import prepareHTML from './_prepare.html';

function filterChannels ( options = {} ) {
    const {
        containerSelector,
        field,
        filterSelector,
        root,
        url,
    } = options;

    const { isNotEmptyString } = helpers;

    if ( process.env.NODE_ENV !== 'production' ) {
        // containerSelector and filterSelector will throw Error, no need to check
        if (
            !isNotEmptyString( field ) ||
            !isNotEmptyString( root ) ||
            !isValidUrl( { url, http: false } )
        ) {
            /* eslint-disable no-console */
            console.warn( 'filterChannels: arguments incorrect' );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    // create the filter's HTMLElement and return the id
    const id = prepareHTML( {
        field,
        id: filterSelector,
        selector: buildId( containerSelector ),
        window,
    } );

    // assign listener to the filter's HTMLElement
    addListeners( {
        event: 'input',
        id: LISTENERS_ID,
        listener: listener( { field, root, url } ),
        root,
        selector: buildId( id ),
        window,
    } );
}

export default filterChannels;
