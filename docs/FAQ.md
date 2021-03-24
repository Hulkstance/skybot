# Angular Frequently Asked Questions

## 'NODE_ENV' is not recognized as an internal or external command, operable program or batch file.

```
npm install -g win-node-env
```

## Migrating an Angular CLI project from Codelyzer and TSLint

```
ng add @angular-eslint/schematics
ng g @angular-eslint/schematics:convert-tslint-to-eslint vex
npx ng lint vex
```

- [Reference](https://github.com/angular-eslint/angular-eslint#quick-start-with-angular-and-eslint)

## Wonder about the coding patterns in .NET?

More information and examples on [David Fowler's GitHub](https://github.com/davidfowl/DotNetCodingPatterns/blob/main/1.md#generics-types-as-a-factory).