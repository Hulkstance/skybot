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
- [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/)

## Wonder about the coding patterns in .NET?

More information and examples on [David Fowler's GitHub](https://github.com/davidfowl/DotNetCodingPatterns/blob/main/1.md#generics-types-as-a-factory).

## How to install Elasticsearch with Kibana?

- [Video](https://www.youtube.com/watch?v=0acSdHJfk64)
- [Running on Docker](https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-docker.html)
- [Example docker compose](https://github.com/iayti/CleanArchitecture/blob/c2c576282ff71a66a9babc4a7262081cb1d9f251/docker-compose.yml)