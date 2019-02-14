import {
    BREAKPOINTS,
    MEDIA,
} from './media/constants';

const COMMON_ERRORS = new Map( [
    ['argument_not_string', 'Argument is not a string'],
    ['media_query_not_found', 'Listeners not found'],
    ['media_query_not_function', 'Listener is not a function'],
] );

const VALID_ELEMENTS = [
    'a',
    'div',
    'figCaption',
    'figure',
    'img',
    'input',
    'label',
    'li',
    'p',
    'span',
];

export {
    BREAKPOINTS,
    COMMON_ERRORS,
    MEDIA,
    VALID_ELEMENTS,
};
