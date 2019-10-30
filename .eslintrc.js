module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
       " project": "./tsconfig.json",
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", 'always'],
        "quotes": ['error', 'double'],
        '@typescript-eslint/indent': ['error', 2],
        'camelcase': 'off',
        "no-console": "off",
        '@typescript-eslint/camelcase': ['error', { 'properties': 'never' }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        'no-useless-escape': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-parameter-properties': 'off'
    }
};
