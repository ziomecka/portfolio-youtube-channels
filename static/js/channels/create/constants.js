const CHANNELS_CLASSES = {
    blockWide: 'fjs-block-wide',
    boxPrimary: 'fjs-box-primary',
    flexColumn: 'fjs-flex-column',
    flexColumnCenter: 'fjs-flex-column-center',
    flexRow: 'fjs-flex-row',
    flexRowCenter: 'fjs-flex-row-center',
    flexRowSpaceAround: 'fjs-flex-row-space-around',
    heading: 'fjs-heading',
    image: 'fjs-image',
    imageRound: 'fjs-image-round',
    textCenter: 'fjs-text-center',
};

const CHANNELS_ERRORS = new Map( [
    ['argument_not_number', 'Argument is not a number'],
    ['argument_not_string', 'Argument is not a string'],
    ['argument_not_url', 'Argument is not an url'],
    ['channels_no_data', 'Missing data'],
    ['html_not_found', 'HTML Element not found'],
] );

const DEFAULT_CHANNELS_LOCALIZED = {
    statisticsValue: '-',
    subscribers: 'subscribers',
    videos: 'videos',
    views: 'views',
};

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
    CHANNELS_CLASSES,
    CHANNELS_ERRORS,
    DEFAULT_CHANNELS_LOCALIZED,
    DEFAULT_IMAGE_ALT,
    DEFAULT_IMAGE_SIZE,
    DEFAULT_IMAGE_URL,
    DEFAULT_IMAGE_WIDTH,
    DEFAULT_LINK_URL,
    IMAGES_SIZES,
};
