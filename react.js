module.export = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript'
    ],
    plugins: ['import'],
    rules: {
        radix: 0
    }
}