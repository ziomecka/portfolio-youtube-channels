import { SORT_ID_PREFIX } from './constants';

function getCheckedElement ( sortId = SORT_ID_PREFIX ) {
    // finds collection of HTMLElements with id starting from sortId
    const $sorts = document.querySelectorAll( `[id^="${ sortId }"]` );

    if ( $sorts ) {
        // finds the selected sort HTMLElement
        return [...$sorts].find( $element => $element.checked );
    }
}

export default getCheckedElement;
