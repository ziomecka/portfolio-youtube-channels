import {
    DIRECTIONS,
    // DIRECTIONS_CLASSES,
    DIRECTIONS_URLS,
} from './constants';

import { COMMON_ERRORS } from '../constants';

import api from '../api/';
import helpers from '../_helpers';
import manageDom from '../_manage.dom';

const { isNotEmptyString } = helpers;

async function changeDirection ( options ) {
    const { selector, direction } = options;

    if ( process.env.NODE_ENV !== 'production' ) {
        if (
            !isNotEmptyString( selector ) ||
            ( direction && !DIRECTIONS.includes( direction ) )
        ) {
            throw new Error( `changeDirection: ${ COMMON_ERRORS.get( 'argument_incorrect' ) }` );
        }
    }

    const $svgWrapper = manageDom.findElement( { selector, window } );

    if ( $svgWrapper ) {
        /**
         * if direction is not falsy then
         *      get html of svg element from the server
         *      append svg element to the direction icon's wrapper
         * else delete html content of the svgWrapper
         *
         * Use inline-svg as because it can be styled.
         */
        let innerHTML = '';

        if ( direction ) {
            innerHTML = await api.loadText( DIRECTIONS_URLS[direction] );
        }

        $svgWrapper.innerHTML = innerHTML;

        /**
         * it could have been done by css classes
         * then background-image set and svg file got from the server
         * cannot be styled
         *
         * to enable this feature:
         * - comment the above code
         * - uncomment the below code
         * - uncomment classes in css/icon.css
         */

        // manageDom.setAttribute( {
        //     element,
        //     attribute: 'class',
        //     value: `${ DIRECTIONS_CLASSES.general } ${ DIRECTIONS_CLASSES[ direction ] }`,
        // });
    }
}

export default changeDirection;
