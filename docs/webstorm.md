# WebStorm

## Adding spaces between imports and braces in WebStorm (for ex. `import { Injectable }`)

Go to WebStorm -> Settings -> Editor -> Code Style -> TypeScript -> Spaces (second tab), scroll to section "Within" and check:

- Object literal braces
- ES6 import/export braces

## How to fix TSLint?

1. In the `Settings/Preferences` dialog, go to `Languages and Frameworks | TypeScript | TSLint`.
2. Select the `Manual Configuration` option.
3. Press OK

- Reference: [JetBrains](https://www.jetbrains.com/help/webstorm/using-tslint-code-quality-tool.html#ws_tslint_activate_and_configure)

## Add a new comment

Type `/**` before a declaration and press `Enter`. The IDE auto-completes the doc comment for you.