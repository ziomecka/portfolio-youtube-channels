import {
    helpers,
    manageDom,
} from '@common';

const { isNotEmptyString } = helpers;

const { findAllElements } = manageDom;

function getSorted ( sortSelector ) {
    if ( process.env.NODE_ENV !== 'production' ) {
        if ( !isNotEmptyString( sortSelector ) ) {
            /* eslint-disable no-console */
            console.warn( 'channelsGetSorted: incorrect arguments' );
            /* eslint-enable no-console */
        }
    }

    // finds collection of sort elements
    const $sorts = findAllElements( {
        selector: `[id^="${ sortSelector }"]`,
        window,
    } );

    // finds one sorted element - the selected one
    return [...$sorts].find( $element => $element.checked );
}

export default getSorted;
