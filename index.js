/**
 * It is technically possible to create all configurations in the index.js file.
 * But if you do this,you won't get the config object linted
 */
const eslintrc = require('./.eslintrc.js');

module.exports = eslintrc;