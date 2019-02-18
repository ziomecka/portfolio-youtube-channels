import {
    DOM_LISTENERS,
    VALID_EVENTS,
} from './constants';

import helpers from '../_helpers';
import manageDom from '../_manage.dom';

const { findElement } = manageDom;

/** adds dom listener, stores listener in map and returns id
 */
function add ( options ) {
    const {
        event,
        id,
        listener,
        selector,
        window,
    } = options;

    if ( process.env.NODE_ENV !== 'production' ) {
        const { isNotEmptyString } = helpers;

        if (
            !VALID_EVENTS.includes( event ) ||
            !isNotEmptyString( id ) ||
            !( typeof listener === 'function' ) ||
            !isNotEmptyString( selector )
        ) {
            /* eslint-disable no-console */
            console.warn( 'addDomListener: incorrect argument' );
            /* eslint-enable no-console */
        }
    }

    let listeners;
    let listenerId;

    /** get map of listeners
     *  set listenerId
     */
    if ( !DOM_LISTENERS.has( id ) ) {
        DOM_LISTENERS.set( id, new Map() );

        listeners = DOM_LISTENERS.get( id );
        listenerId = 0;
    } else {
        listeners = DOM_LISTENERS.get( id );

        // id = last id + 1
        listenerId = [...listeners.keys()][listeners.size -1] + 1;
    }

    const $element = findElement( { selector, window } );

    if ( $element ) {
        const _listener = ( e )  => listener( e.target.value );

        $element.addEventListener( event, _listener );

        listeners.set( listenerId, _listener );

        return listenerId;

    } else {
        return undefined;
    }
}

export default add;
