import {
    api,
    directionIcon,
    isValidUrl,
} from '@common';

import { SORT_ICON_SELECTOR } from '../constants';

let lastDirection;

/**
 * call common api, and
 * if direction has changed
 * then change the direction icon
 */
async function get ( options ) {
    const {
        url,
        queries,
    } = options;

    if ( process.env.NODE_ENV !== 'production' ) {
        if ( !isValidUrl( { url, http: false } ) ) {
            /* eslint-disable no-console */
            console.warn( 'channels api get: incorrect argument' );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    const data = await api.get( { url, queries } );

    /**
     * change the sort direction icon
     * do it only if direction has changed
     */
    const { direction } = data;

    if ( direction !== lastDirection ) {
        directionIcon.change( {
            direction,
            selector: `${ SORT_ICON_SELECTOR }`,
        } );

        lastDirection = direction;
    }

    return data;
}

export default get;
