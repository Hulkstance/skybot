using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace Skybot.Application.Bots.Commands.Update
{
    public class UpdateBotCommandHandler : IRequestHandler<UpdateBotCommand>
    {
        public async Task<Unit> Handle(UpdateBotCommand request, CancellationToken cancellationToken)
        {
            return Unit.Value;
        }
    }
}
