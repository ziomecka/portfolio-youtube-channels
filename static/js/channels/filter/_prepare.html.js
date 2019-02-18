import {
    DEFAULT_PLACEHOLDER,
    STORAGE_PLACEHOLDER_ID,
} from './constants';

import { STORAGE_ID } from '../constants';
import { manageDom } from '@common';

require( './css/index.css' );

const {
    appendChild,
    createElement,
    findElement,
} = manageDom;

let counter = 0;

// get localized or default placeholder
function _getPlaceholder () {
    /**
     * try because e.g.
     * - localStorage may be not supported or available
     * - localStorage item may be undefined
     * - localized property may be undefined
     */
    try {
        return (
            `${ JSON.parse( localStorage.getItem( STORAGE_ID ) ).localized[STORAGE_PLACEHOLDER_ID] }...` ||
            DEFAULT_PLACEHOLDER
        );
    } catch ( err ) {
        return DEFAULT_PLACEHOLDER;
    }
}

function filterElement ( id ) {
    const $fragment = document.createDocumentFragment();

    const $wrapper = createElement( { attributes: { class: 'filter fjs-block-wide' }, window } );

    const $input = createElement( {
        tag: 'input',
        attributes: {
            id,
            class: 'filter__input',
            type: 'text',
            placeholder: _getPlaceholder(),
        },
        window,
    } );

    appendChild( {
        element: $wrapper,
        child: $input,
    } );

    appendChild( {
        element: $fragment,
        child: $wrapper,
    } );

    return $fragment;
}

function prepareHTML ( options ) {
    const {
        field,
        id = 'fjs-filter-input',
        selector = '#fjs-filter-container',
    } = options;

    const _id = `${ id }-${field}-${ counter++ }`;

    appendChild( {
        element: findElement( { selector, window } ),
        child: filterElement( _id ),
    } );

    return _id;
}

export default prepareHTML;
