import {
    COMMON_ERRORS,
    VALID_ELEMENTS,
} from './constants';

let incorrectArgument;

if ( process.env.NODE_ENV !== 'production' ) {
    incorrectArgument = COMMON_ERRORS.get( 'argument_incorrect' );
}

/**
 *
 * @param {string} tag HTMLElement's tag
 * @returns boolean
 */
function _isValidElement ( tag ) {
    return VALID_ELEMENTS.includes( tag );
}

/**
 *
 * @param {Object} options
 * @param {HTMLElement} options.element
 * @param {HTMLElement} options.child
 * @returns void
 */
function appendChild ( options ) {
    return options.element.appendChild( options.child );
}

/**
 *
 * @param {Object} options
 * @param {Object} options.attributes optional
 * @param {string} options.tag optional, if ot valid or undefined then 'div'
 * @param {string} options.textContent optional
 * @param {Window} options.window
 * @returns HTMLElement
 */
function createElement ( options = {} ) {
    const {
        attributes = {},
        textContent,
        window,
    } = options;

    let {
        tag,
    } = options;

    if ( process.env.NODE_ENV !== 'production' ) {
        if ( !window || !window.document || ( typeof window.document.createElement !== 'function' ) ) {
            /* eslint-disable no-console */
            console.warn( `createElement, window: ${incorrectArgument}` );
            /* eslint-enable no-console */
            return undefined;
        }

        if ( textContent && typeof textContent !== 'string' ) {
            /* eslint-disable no-console */
            console.warn( `createElement, document: ${incorrectArgument}` );
            /* eslint-enable no-console */
        }
    }

    /**
     * if not valid tag
     * then set tag to 'div'
     * and if not production: warn in console
     */
    if ( !_isValidElement( tag ) ) {
        if ( process.env.NODE_ENV !== 'production' )  {
            if ( tag ) {
                /* eslint-disable no-console */
                console.warn( `createElement, tag: ${ incorrectArgument }` );
                /* eslint-enable no-console */
            } else {
                /* eslint-disable no-console */
                console.warn( 'createElement, tag not specified, div created by default' );
                /* eslint-enable no-console */
            }
        }

        tag = 'div';
    }

    const $element = window.document.createElement( tag );

    // No check if attribute is invalid
    Object.keys( attributes ).forEach( key => $element.setAttribute( key, attributes[key] ) );

    // Set textContent. Empty string allowed.
    if ( textContent !== undefined ) {
        $element.textContent = textContent;
    }

    return $element;
}

/**
 *
 * @param {Object} options
 * @param {string} options.selector
 * @param {Window} options.window
 * @returns HTMLElement | undefined
 */
function findAllElements ( options ) {
    if ( process.env.NODE_ENV !== 'production' ) {
        const { window } = options;
        if ( !window || !window.document || ( typeof window.document.querySelector !== 'function' ) ) {
            /* eslint-disable no-console */
            console.warn( `createElement, window: ${incorrectArgument}` );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    return options.window.document.querySelectorAll( options.selector );
}

/**
 *
 * @param {Object} options
 * @param {string} options.selector
 * @param {Window} options.window
 * @returns HTMLElement | undefined
 */
function findElement ( options ) {
    if ( process.env.NODE_ENV !== 'production' ) {
        const { window } = options;
        if ( !window || !window.document || ( typeof window.document.querySelector !== 'function' ) ) {
            /* eslint-disable no-console */
            console.warn( `createElement, window: ${incorrectArgument}` );
            /* eslint-enable no-console */
            return undefined;
        }
    }

    return options.window.document.querySelector( options.selector );
}

/**
 *
 * @param {Object} options
 * @param {string} options.attribute HTMLElement's attribute
 * @param {HTMLElement} options.element
 * @returns string | undefined
 */
function getAttribute ( options ) {
    return options.element.getAttribute( options.attribute );
}

/**
 *
 * @param {HTMLElement} element
 * @returns HTMLElement | undefined
 */
function getFirstChild ( element ) {
    return element.firstChild;
}

/**
 *
 * @param {Object} options
 * @param {HTMLElement} options.element
 * @param {HTMLElement} options.child
 * @returns HTMLElement | undefined - If removed then removed HTMLElement returned
 */
function removeChild ( options ) {
    // polyfill the remove() method in Internet Explorer 9 and higher
    // https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
    ( function ( arr ) {
        arr.forEach( function ( item ) {
            if ( item.hasOwnProperty( 'remove' ) ) {
                return;
            }
            Object.defineProperty( item, 'remove', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function remove () {
                    if ( this.parentNode !== null )
                        this.parentNode.removeChild( this );
                },
            } );
        } );
    } )( [Element.prototype, CharacterData.prototype, DocumentType.prototype] );

    return options.element.remove( options.child );
}

/**
 *
 * @param {Object} options
 * @param {string} options.attribute HTMLElement's attribute
 * @param {HTMLElement} options.element
 * @param {string} options.value
 * @returns void
 */
function setAttribute ( options ) {
    return options.element.setAttribute( options.attribute, options.value );
}

export default {
    appendChild,
    createElement,
    findAllElements,
    findElement,
    getFirstChild,
    getAttribute,
    removeChild,
    setAttribute,
};
