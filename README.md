# Skybot

[![Angular status](https://github.com/Hulkstance/skybot/actions/workflows/angular.yml/badge.svg)](https://github.com/Hulkstance/skybot/actions/)
[![GitHub license](https://img.shields.io/badge/license-GNU-blue.svg)](https://github.com/Hulkstance/skybot/blob/main/LICENSE)

## Applied concepts

- Domain-driven design
- Clean Code
- SOLID principles
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
- Ardalis.GuardClauses
- XUnit & Moq
- Elasticsearch, Serilog & Kibana
- Docker

## Database migrations

To add migration:

1. Navigate to `./server`
2. Execute
```
dotnet ef migrations add InitialCreate --verbose --project src\Skybot.Infrastructure\Skybot.Infrastructure.csproj --startup-project src\Skybot.Web\Skybot.Web.csproj --output-dir Persistence\Migrations
```

To update database:

1. Navigate to `./server`
2. Execute
```
dotnet ef database update --verbose --project src\Skybot.Infrastructure\Skybot.Infrastructure.csproj --startup-project src\Skybot.Web\Skybot.Web.csproj
```

## Principles

- SOLID
- DRY
- KISS
- YAGNI

## Design patterns

- Builder
- [Guard Clause](https://deviq.com/design-patterns/null-object-pattern)
- Repository
- Specification
- CQRS (MediatR)
- Singleton
- Strategy
- Command
- Mediator
- Observer

### References:
- [Design patterns given by Jason Taylor](https://deviq.com/design-patterns/repository-pattern)
- [Refactoring.Guru](https://refactoring.guru/design-patterns)

## Clean Architectures

- [Clean Architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Clean Architecture by Jason Taylor](https://github.com/jasontaylordev/CleanArchitecture/tree/d0f133ee026aec5cd5856c5592c307b5f20fa8e4)
- [Clean Architecture by Phong Nguyen](https://github.com/phongnguyend/Practical.CleanArchitecture/tree/66699d05e66b7f7e06704f528c7677bd5db1f5fa)
  - Microservices
  - Monolith
  - Modular Monolith
- [Clean Architecture by Steve "Ardalis" Smith](https://github.com/ardalis/CleanArchitecture)
- [Clean Architecture by iayti](https://github.com/iayti/CleanArchitecture)
- [eShopOnContainers by Microsoft](https://github.com/dotnet-architecture/eShopOnContainers/tree/main/src/BuildingBlocks)

### References
- [Clean Domain-Driven Design in 10 minutes - Hackernoon](https://hackernoon.com/clean-domain-driven-design-in-10-minutes-6037a59c8b7b)
- [Why You Should Avoid Command Handlers Calling Other Commands?](https://www.rahulpnath.com/blog/avoid-commands-calling-commands/)
- [How to Organize CLEAN ARCHITECTURE to Modular Patterns in 10 Minutes](https://hackernoon.com/applying-clean-architecture-on-web-application-with-modular-pattern-7b11f1b89011)
- [Monolith vs Modular Monolith vs Microservices](https://www.jrebel.com/blog/what-is-a-modular-monolith)
- [Design Patterns](https://deviq.com/design-patterns/design-patterns-overview)
- [SOLID Principles](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)

## Angular Best Practices

- [Angular Awesome](https://github.com/akhilben/angular-awesome/tree/823bd76a66888b1e7e40f883f54a6a7302371202#-table-of-contents)
- [until-destroy](https://github.com/ngneat/until-destroy)
- [Migrating an Angular CLI project to ESLint](https://github.com/angular-eslint/angular-eslint#migrating-an-angular-cli-project-from-codelyzer-and-tslint)
