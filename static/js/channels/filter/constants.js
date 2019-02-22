const CONTAINER_SELECTOR = '#fjs-filter-container';

const DEFAULT_ELEMENTS = {
    $wrapper: {
        attributes: {
            class: 'filter fjs-block-wide',
        },
    },
    $input: {
        tag: 'input',
        attributes: {
            class: 'filter__input',
            type: 'text',
        },
    },
};

const DEFAULT_ID = 'fjs-filter-input';
const DEFAULT_PLACEHOLDER = 'filter channels...';
const STORAGE_PLACEHOLDER_ID = 'filterPlaceholder';

export {
    CONTAINER_SELECTOR,
    DEFAULT_ELEMENTS,
    DEFAULT_ID,
    DEFAULT_PLACEHOLDER,
    STORAGE_PLACEHOLDER_ID,
};
