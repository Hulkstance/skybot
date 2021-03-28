using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ardalis.Specification;
using Ardalis.Specification.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Skybot.Domain.Entities;
using Skybot.Domain.Repositories;

namespace Skybot.Infrastructure.Persistence
{
    public class EfRepository : IRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public EfRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IUnitOfWork UnitOfWork => _dbContext;

        public Task<T> GetByIdAsync<T>(int id) where T : Entity, IAggregateRoot
        {
            return _dbContext.Set<T>().SingleOrDefaultAsync(e => e.Id == id);
        }

        public Task<List<T>> ListAsync<T>() where T : Entity, IAggregateRoot
        {
            return _dbContext.Set<T>().ToListAsync();
        }

        public Task<List<T>> ListAsync<T>(ISpecification<T> specification) where T : Entity, IAggregateRoot
        {
            var specificationResult = ApplySpecification(specification);
            return specificationResult.ToListAsync();
        }

        public async Task<T> AddAsync<T>(T entity) where T : Entity, IAggregateRoot
        {
            await _dbContext.Set<T>().AddAsync(entity).ConfigureAwait(false);
            return entity;
        }

        public Task UpdateAsync<T>(T entity) where T : Entity, IAggregateRoot
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            return Task.CompletedTask;
        }

        public Task DeleteAsync<T>(T entity) where T : Entity, IAggregateRoot
        {
            _dbContext.Set<T>().Remove(entity);
            return Task.CompletedTask;
        }

        private IQueryable<T> ApplySpecification<T>(ISpecification<T> specification) where T : Entity, IAggregateRoot
        {
            var evaluator = new SpecificationEvaluator();
            return evaluator.GetQuery(_dbContext.Set<T>().AsQueryable(), specification);
        }
    }
}
