using System.Threading;
using System.Threading.Tasks;

namespace Skybot.Domain.Repositories
{
    public interface IUnitOfWork
    {
        /// <summary>
        /// Saves all changes made in this context to the database
        /// </summary>
        /// <returns>The number of state entries written to the database</returns>
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}
