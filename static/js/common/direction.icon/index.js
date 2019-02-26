require( './css/index.css' );

import { DIRECTIONS } from '@channelsData/constants';
import { DIRECTIONS_SVGS } from './constants';

function manageDirectionIcon ( selector, direction ) {
    const $svgWrapper = document.querySelector( selector );

    if ( $svgWrapper ) {
        // render inline svg or ''
        $svgWrapper.innerHTML = ( DIRECTIONS.includes( direction ) )
            ? DIRECTIONS_SVGS[direction]
            : '';
    }
}

export default manageDirectionIcon;

