using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Skybot.Application.Exceptions;
using Skybot.Domain.Entities;
using Skybot.Domain.Repositories;

namespace Skybot.Application.Bots.Commands.Delete
{
    public class DeleteBotCommandHandler : IRequestHandler<DeleteBotCommand>
    {
        private readonly IRepository _repository;

        public DeleteBotCommandHandler(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<Unit> Handle(DeleteBotCommand request, CancellationToken cancellationToken)
        {
            var entity = await _repository.GetByIdAsync<Bot>(request.Id).ConfigureAwait(false);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Bot), request.Id);
            }

            await _repository.DeleteAsync(entity).ConfigureAwait(false);
            await _repository.UnitOfWork.SaveChangesAsync(cancellationToken).ConfigureAwait(false);

            return Unit.Value;
        }
    }
}
