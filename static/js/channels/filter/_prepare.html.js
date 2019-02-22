import {
    CONTAINER_SELECTOR,
    DEFAULT_ELEMENTS,
    DEFAULT_ID,
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

function filterElement ( options ) {
    const {
        id,
        $elements: {
            $wrapper: {
                tag: wrapperTag,
                attributes: wrapperAttributes,
            },
            $input: {
                tag: inputTag,
                attributes: inputAttributes,
            },
        },
    } = Object( options );

    const $fragment = document.createDocumentFragment();

    const $wrapper = createElement( {
        attributes: wrapperAttributes,
        tag: wrapperTag,
        window,
    } );

    const $input = createElement( {
        tag: inputTag,
        attributes: {
            ...inputAttributes,
            id,
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
        id = DEFAULT_ID,
        selector = CONTAINER_SELECTOR,
        $elements: {
            $input = DEFAULT_ELEMENTS.$input,
            $wrapper = DEFAULT_ELEMENTS.$wrapper,
        } = DEFAULT_ELEMENTS,
    } = Object( options );

    const _id = `${ id }-${ field }-${ counter++ }`;

    appendChild( {
        element: findElement( { selector, window } ),
        child: filterElement( {
            id: _id,
            $elements: { $input, $wrapper },
        } ),
    } );

    return _id;
}

export default prepareHTML;
