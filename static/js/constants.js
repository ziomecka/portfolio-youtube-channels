import {
    BREAKPOINTS,
    MEDIA,
} from './common/media/constants';

const CHANNELS_ROOT_SELECTOR = '#fjs-main';

const CLEAR = {
    id: 'fjs-clear-button',
};
const LISTENERS_ID = 'channels-listeners';

const FILTER = {
    container: 'fjs-filter-container',
    id: 'fjs-filter-text',
};

const SORT = {
    container: 'fjs-sort-container',
    id: 'fjs-sort-radio',
};

const SORT_ATTRIBUTE = 'data-sort';

export { URLS } from '../../server/constants';

export {
    BREAKPOINTS,
    CHANNELS_ROOT_SELECTOR,
    CLEAR,
    FILTER,
    MEDIA,
    SORT,
    LISTENERS_ID,
    SORT_ATTRIBUTE,
};
