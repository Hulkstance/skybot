using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Skybot.Application.Exceptions;
using Skybot.Domain.Entities;
using Skybot.Domain.Repositories;

namespace Skybot.Application.Bots.Commands.Update
{
    public class UpdateBotCommandHandler : IRequestHandler<UpdateBotCommand>
    {
        private readonly IRepository _repository;

        public UpdateBotCommandHandler(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<Unit> Handle(UpdateBotCommand request, CancellationToken cancellationToken)
        {
            var entity = await _repository.GetByIdAsync<Bot>(request.Id).ConfigureAwait(false);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Bot), request.Id);
            }

            entity.Symbol = request.Symbol;

            await _repository.UpdateAsync(entity).ConfigureAwait(false);
            await _repository.UnitOfWork.SaveChangesAsync(cancellationToken).ConfigureAwait(false);

            return Unit.Value;
        }
    }
}
