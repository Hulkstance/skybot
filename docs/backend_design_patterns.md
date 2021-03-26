# Design patterns we used in the backend

- CQRS pattern (MediatR)
- Guard Clause (Ardalis.GuardClauses)
- Notification and Specification patterns (FluentValidation)

Quote from [eShopOnContainers](https://github.com/dotnet-architecture/eShopOnContainers/issues/26):

> At the end of the day, a **specification** is an interface that defines one method: `IsSatisfiedBy()` which returns boolean to assert that the specification is satisfied. So, every single business rule could be represented by a class that implements the ISpecification interface. We can chain many specifications in order to validate the entities when created of updated.
> 
> Then, we can use the **Notification pattern** in order to return a collection of validation errors, instead of the simple "exception approach" we are currently implementing which is only returning the first exception you get instead of all the possible errors.
For example, see these blog post for further details: