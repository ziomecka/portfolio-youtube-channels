const DEFAULT_ELEMENTS = {
    $wrapper: {
        tag: 'li',
    },
    $input: {
        tag: 'input',
        attributes: {
            class: 'choice choice--radio',
            name: 'sort',
            type: 'radio',
        },
    },
    $label: {
        tag: 'label',
        attributes: {
            class: 'choice__label',
        },
    },
};

const SORT_DATA_ATTRIBUTE = 'data-fjs-sort';

export {
    DEFAULT_ELEMENTS,
    SORT_DATA_ATTRIBUTE,
};
