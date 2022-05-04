# Vaimo ESLint configuration
This package provides Vaimo's base JS .eslintrc as an extensible shared config.

## Usage
We export 4 configurations for your usage.

### eslint-config-vaimo
Our export contains all of our ESLint rules, extended from Airbnb's recommended rules.

1. Install the package and its minimum required peer dependencies:

  ```bash
  npx install-peerdeps --dev @vaimo/eslint-config-vaimo@latest
  ```
  If using yarn, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly. Otherwise, run `npm info "eslint-config-airbnb-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

2. Create a `.eslintrc` file in the root of your project's directory. Your `
.eslintrc` file should look like this:
```json
{
  "extends": ["vaimo"]
}
```
For TypeScript projects, use `vaimo/typescript`
```json
{
  "extends": ["vaimo/typescript"]
}
```
For React projects, use `vaimo/react`
```json
{
  "extends": ["vaimo/react"]
}
```
For React projects using TypeScript, use `vaimo/react-typescript`
```json
{
  "extends": ["vaimo/react-typescript"]
}
```

TypeScript users will also need a tsconfig.json file in their project. An empty object ({}) will do if this is a new project.

3. You can add two scripts to your package.json to lint and/or fix:
```json
"scripts": {
  "lint": "eslint ."
  "lint:fix": "eslint . --fix"
}
```
Now you can manually lint your code by running npm run lint and fix all fixable issues with npm run lint:fix. You probably want your editor to do this though.

## Settings
If you would like to overwrite ESLint settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`.

```json
{
  "extends": [
    "vaimo"
  ],
  "rules": {
    "no-console": 2,
    "no-plusplus": false
  }
}
```

## With VS Code
Please read everything in this section!

Once you have done the above install you can get your editor to lint and fix for you. This is how to do that with VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these setting while editing the `settings.json`file, so click Open (Open Settings) icon in the top right corner:

```json
// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS, JSX, TS and TSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
"[typescript]": {
  "editor.formatOnSave": false
},
"[typescriptreact]": {
  "editor.formatOnSave": false
},
// show eslint icon at bottom toolbar
"eslint.alwaysShowStatus": true,
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll": true
}
```
After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for me until I restart.

## With JetBrains Products (PhpStorm or WebStorm)
If you have previously configured ESLint to run via a File Watcher, [turn that off](https://www.jetbrains.com/help/idea/using-file-watchers.html#enableFileWatcher).

## If you choose Local / Per Project Install Above
1. Open ESLint configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > ESLint (optionally just search settings for "eslint")
2. Select Automatic ESLint Configuration
3. Check Run eslint --fix on save

## If you choose Global Install
The following steps are for a typical Node / ESLint global installtion. If you have a customized setup, refer to JetBrains docs for more ESLint Configuration Options.

1. Open ESLint configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > ESLint (optionally just search settings for "eslint")
2. Select Manual ESLint configuration
3. Choose your Node interpreter from the detected installations
4. Select the global ESLint package from the dropdown
5. Leave Configuration File as Automatic Search
6. Check Run eslint --fix on save


## Improving this config
If you think there are rules that should be implemented or removed, please create a pull-request with your changes and explain why you want these changes implemented.

Keep in mind that this is a general set of rules for all of Vaimo.

### Config inheritance
Currently the configs are setup to extend from a base version.

This means that `vaimo/typescript` is inheriting the rules and extending the `vaimo` config. And `vaimo/react-typescript` is inheriting the rules and extending the `vaimo/react` config.

This means that generic JavaScript rules should be added to the base JavaScript configs, while TypeScript rules should be added to TypeScript configs (duh).