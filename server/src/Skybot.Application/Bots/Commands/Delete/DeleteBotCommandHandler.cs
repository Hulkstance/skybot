using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace Skybot.Application.Bots.Commands.Delete
{
    public class DeleteBotCommandHandler : IRequestHandler<DeleteBotCommand>
    {
        public async Task<Unit> Handle(DeleteBotCommand request, CancellationToken cancellationToken)
        {
            return Unit.Value;
        }
    }
}
