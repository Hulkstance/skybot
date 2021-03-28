using System.Threading;
using System.Threading.Tasks;
using Skybot.Domain.Repositories;

namespace Skybot.Infrastructure.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        /// <inheritdoc />
        public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            return Task.FromResult(1);
        }
    }
}
