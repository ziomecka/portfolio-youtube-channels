module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'array-bracket-spacing': 'error',
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'comma-dangle': [ 'error', 'always-multiline' ],
        'comma-spacing': 'error',
        'computed-property-spacing': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'no-duplicate-imports': 'error',
        'object-curly-spacing': [ 'error', 'always' ],
        'rest-spread-spacing': 'error',
        'semi-spacing': 'error',
        'sort-imports': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': 'error',
        'space-in-parens': [ 'error', 'always' ],
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'switch-colon-spacing': 'error',
    },
};
