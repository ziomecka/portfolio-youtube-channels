import {
    DOM_LISTENERS,
    VALID_EVENTS,
} from './constants';

/**
 * adds dom listener, stores listener in map
 * @returns integer, listener's id
 */
function add ( event, id, listener, selector ) {
    const $element = document.querySelector( selector );

    if ( process.env.NODE_ENV !== 'production' ) {
        if (
            !VALID_EVENTS.includes( event ) ||
            !id || !typeof id === 'string' ||
            !$element ||
            typeof listener !== 'function'
        ) {
            throw new Error( 'addDomListener: incorrect argument' );
        }
    }

    if ( $element ) {
        let listeners;
        let listenerId;

        /**
         * get current map of listeners or create new map of listeners
         * if no current map
         *  then listener's id = 0
         *  else listener's id = lastId + 1
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

        $element.addEventListener( event, listener );

        listeners.set( listenerId, listener );

        return listenerId;
    }
}

export default add;
