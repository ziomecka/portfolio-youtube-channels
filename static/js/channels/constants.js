const CHANNELS_ERRORS = new Map( [
    ['argument_not_number', 'Argument is not a number'],
    ['argument_not_string', 'Argument is not a string'],
    ['argument_not_url', 'Argument is not an url'],
] );



const DEFAULT_IMAGE_ALT = 'some image';

const DEFAULT_IMAGE_SIZE = 'default';

const DEFAULT_IMAGE_URL = new Map( [
    ['default', ''],
    ['medium', ''],
    ['high', ''],
] );

const DEFAULT_LINK_URL = '#';

const DEFAULT_IMAGE_WIDTH = 100;

const IMAGES_SIZES = new Map( [
    ['xs', 'default'],
    ['sm', 'medium'],
    ['md', 'medium'],
    ['lg', 'high'],
    ['xl', 'high'],
] );

export {
    CHANNELS_ERRORS,
    DEFAULT_IMAGE_ALT,
    DEFAULT_IMAGE_SIZE,
    DEFAULT_IMAGE_URL,
    DEFAULT_IMAGE_WIDTH,
    DEFAULT_LINK_URL,
    IMAGES_SIZES,
};
