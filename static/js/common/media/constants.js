// pixels
const BREAKPOINTS = {
    sm: 360,
    md: 945,
    lg: 1280,
    xl: 1680,
};

const { sm, md, lg, xl } = BREAKPOINTS;

const MEDIA_LISTENERS = new Map( [] );

const MEDIA_SUBSCRIBERS = new Map( [] );

const MEDIA = new Map( [
    ['xs', `screen and (max-width: ${ sm }px)`],
    ['sm', `screen and (min-width: ${ sm + 1 }px) and (max-width: ${ md  }px)`],
    ['md', `screen and (min-width: ${ md + 1 }px) and (max-width: ${ lg }px)`],
    ['lg', `screen and (min-width: ${ lg + 1 }px) and (max-width: ${ xl }px)`],
    ['xl', `screen and (min-width: ${ xl + 1 }px)`],
] );

export {
    BREAKPOINTS,
    MEDIA,
    MEDIA_LISTENERS,
    MEDIA_SUBSCRIBERS,
};
