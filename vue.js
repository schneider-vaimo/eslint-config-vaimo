module.export = {
    extends: [
        './typescript.js',
        'plugin:vue/recommended'
    ],
    env: {
        jest: true
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    }
}