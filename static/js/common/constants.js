import {
    BREAKPOINTS,
    MEDIA,
} from './media/constants';

let COMMON_ERRORS;

if ( process.env.NODE_ENV !== 'production' ) {
    COMMON_ERRORS = new Map( [
        ['argument_not_string', 'Argument is not a string'],
        ['argument_incorrect', 'Argument is incorrect'],
        ['convert_numbers_not_number', 'Argument is not a stringified number'],
        ['media_query_not_found', 'Listeners not found'],
        ['media_query_not_function', 'Listener is not a function'],
    ] );
}

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
    'picture',
    'source',
    'span',
];

export {
    BREAKPOINTS,
    COMMON_ERRORS,
    MEDIA,
    VALID_ELEMENTS,
};
