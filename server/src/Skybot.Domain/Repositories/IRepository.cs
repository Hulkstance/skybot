using System.Collections.Generic;
using System.Threading.Tasks;
using Ardalis.Specification;
using Skybot.Domain.Entities;

namespace Skybot.Domain.Repositories
{
    public interface IRepository
    {
        IUnitOfWork UnitOfWork { get; }

        Task<T> GetByIdAsync<T>(int id) where T : Entity, IAggregateRoot;
        Task<List<T>> ListAsync<T>() where T : Entity, IAggregateRoot;
        Task<List<T>> ListAsync<T>(ISpecification<T> specification) where T : Entity, IAggregateRoot;
        Task<T> AddAsync<T>(T entity) where T : Entity, IAggregateRoot;
        Task UpdateAsync<T>(T entity) where T : Entity, IAggregateRoot;
        Task DeleteAsync<T>(T entity) where T : Entity, IAggregateRoot;
    }
}
