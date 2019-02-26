// pixels
const BREAKPOINTS = {
    sm: 360,
    // md: 945,
    lg: 1280,
    // xl: 1680,
};

const { sm, lg } = BREAKPOINTS;

const SORT_ICON_SELECTOR = '.fjs-sort-icon';

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

const IMAGE_ALT = 'image presenting';

const DEFAULT_IMAGE_SIZE = 'default';

const IMAGES_SIZES = new Map( [
    ['medium', `(min-width: ${ sm + 1  }px) and (max-width: ${ lg  }px)`],
    ['high', `(min-width: ${ lg + 1 }px)`],
] );

export {
    SORT_ICON_SELECTOR,
    CHANNELS_CLASSES,
    DEFAULT_IMAGE_SIZE,
    IMAGE_ALT,
    IMAGES_SIZES,
};
