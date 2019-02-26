require( './css/index.css' );

import { DIRECTIONS_URLS } from './constants';

import apiLoadText from '../_api.load.text';

async function manageDirectionIcon ( selector, direction ) {
    const $svgWrapper = document.querySelector( selector );

    if ( $svgWrapper ) {
        // if no direction then icon removed
        let innerHTML = '';

        if ( direction === 'asc' || direction ==='desc' ) {
            innerHTML = await apiLoadText( DIRECTIONS_URLS[direction] );
        }

        $svgWrapper.innerHTML = innerHTML;

    }
}

export default manageDirectionIcon;

