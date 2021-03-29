# Skybot

[![Angular status](https://github.com/Hulkstance/skybot/actions/workflows/angular.yml/badge.svg)](https://github.com/Hulkstance/skybot/actions/)
[![GitHub license](https://img.shields.io/badge/license-GNU-blue.svg)](https://github.com/Hulkstance/skybot/blob/main/LICENSE)

## Applied concepts

- Domain-driven design
- Clean Code
- SOLID
- Dependency Injection
- CQRS pattern
- Notification pattern
- Repository pattern
- Specification pattern
- Unit of Work

## Technologies

- ASP.NET Core 5
- Entity Framework Core 5
- MediatR
- AutoMapper
- FluentValidation
- Ardalis.Specification
- XUnit & Moq
- Elasticsearch, Serilog & Kibana
- Docker

## Database migrations

To add migration:

1. Navigate to `server`
2. Execute
```
dotnet ef migrations add InitialCreate --verbose --project src\Skybot.Infrastructure\Skybot.Infrastructure.csproj --startup-project src\Skybot.Web\Skybot.Web.csproj --output-dir Persistence\Migrations
```

To update database:

1. Navigate to `server`
2. Execute
```
dotnet ef database update --verbose --project src\Skybot.Infrastructure\Skybot.Infrastructure.csproj --startup-project src\Skybot.Web\Skybot.Web.csproj
```

## TradingView advantages

- Tick data
- Visualization and the graphics are loading incredibly fast
- Custom time intervals e.g. 45-minute interval
- FOREX, crypto, indices, etc. in one platform

## Principles

- SOLID
- DRY
- KISS
- YAGNI

## Design patterns

- Adapter
- Builder
- Guard Clause
  - NuGet package: [Ardalis.GuardClauses](https://github.com/ardalis/GuardClauses)
  - Information: [DevIQ](https://deviq.com/design-patterns/null-object-pattern)
- Null Object
- Repository
- Specification (FluentValidation)
- CQRS (MediatR)
- Singleton
- State
- Observer
- Publisher-Subscriber
- Object Pool
- Strategy

### References:
- [Design patterns given by Jason Taylor](https://deviq.com/design-patterns/repository-pattern)
- [Refactoring.Guru](https://refactoring.guru/design-patterns)

## Architecture
- Domain-driven design
- Behavior-driven development
- Test-driven development
- Pain-driven development

## Clean Architectures

- [Clean Architecture by Jason Taylor](https://github.com/jasontaylordev/CleanArchitecture/tree/d0f133ee026aec5cd5856c5592c307b5f20fa8e4)
- [Clean Architecture by Phong Nguyen](https://github.com/phongnguyend/Practical.CleanArchitecture/tree/66699d05e66b7f7e06704f528c7677bd5db1f5fa)
  - Microservices
  - Monolith
  - Modular Monolith
- [Clean Architecture by Steve "Ardalis" Smith](https://github.com/ardalis/CleanArchitecture)

### References:
- [Monolith vs Modular Monolith vs Microservices](https://www.jrebel.com/blog/what-is-a-modular-monolith)

## Angular best practices

- [Angular Awesome](https://github.com/akhilben/angular-awesome/tree/823bd76a66888b1e7e40f883f54a6a7302371202#-table-of-contents)
- [until-destroy](https://github.com/ngneat/until-destroy)
- [Migrating an Angular CLI project to ESLint](https://github.com/angular-eslint/angular-eslint#migrating-an-angular-cli-project-from-codelyzer-and-tslint)
