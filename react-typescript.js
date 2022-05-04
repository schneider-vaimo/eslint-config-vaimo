module.export = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
        // Layer in all the JS react rules
        './react.js'
    ]
}