import { DEFAULT_ELEMENTS } from './constants';
import { manageDom } from '@common';

const {
    appendChild,
    createElement,
    findElement,
} = manageDom;

// for creating id
let counter = 0;

function _sortElement ( options ) {
    const {
        id,
        label,
        $elements: {
            $wrapper: {
                tag: wrapperTag,
                attributes: wrapperAttributes,
            },
            $input: {
                tag: inputTag,
                attributes: inputAttributes,
            },
            $label: {
                tag: labelTag,
                attributes: labelAttributes,
            },
        },
    } = options;

    const $fragment = document.createDocumentFragment();

    const $wrapper = createElement( {
        tag: wrapperTag,
        attributes: wrapperAttributes,
        window,
    } );

    const $input = createElement( {
        tag: inputTag,
        attributes: Object.assign( inputAttributes, { id } ),
        window,
    } );

    const $label = createElement( {
        tag: labelTag,
        attributes: Object.assign( labelAttributes, { for: id } ),
        textContent: label,
        window,
    } );

    appendChild( {
        element: $wrapper,
        child: $input,
    } );

    appendChild( {
        element: $wrapper,
        child: $label,
    } );

    appendChild( {
        element: $fragment,
        child: $wrapper,
    } );

    return $fragment;
}

function prepareHTML ( options ) {
    const {
        id,
        label,
        selector,
        $elements: {
            $input = DEFAULT_ELEMENTS.$input,
            $label = DEFAULT_ELEMENTS.$label,
            $wrapper = DEFAULT_ELEMENTS.$wrapper,
        } = DEFAULT_ELEMENTS,
    } = options;

    const _id = `${ id }-${ counter++ }`;

    appendChild( {
        element: findElement( { selector, window } ),
        child: _sortElement( {
            id: _id,
            label,
            $elements: { $input, $label, $wrapper },
        } ),
    } );

    return _id;
}

export default prepareHTML;
