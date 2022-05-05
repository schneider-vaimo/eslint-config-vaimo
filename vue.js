module.export = {
    extends: [
        './typescript.js',
        'plugin:vue/recommended'
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    }
}