using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Skybot.Domain.Common.Interfaces;

namespace Skybot.Domain.Common
{
    public interface IRepository
    {
        Task<T> GetByIdAsync<T>(int id) where T : Entity, IAggregateRoot;
        Task<List<T>> ListAsync<T>() where T : Entity, IAggregateRoot;
        //Task<List<T>> ListAsync<T>(ISpecification<T> spec) where T : Entity, IAggregateRoot;
        Task<T> AddAsync<T>(T entity) where T : Entity, IAggregateRoot;
        Task UpdateAsync<T>(T entity) where T : Entity, IAggregateRoot;
        Task DeleteAsync<T>(T entity) where T : Entity, IAggregateRoot;
    }
}
