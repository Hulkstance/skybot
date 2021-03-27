using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Skybot.Application.Bots.Dtos;

namespace Skybot.Application.Bots.Queries.GetAllBots
{
    public class GetAllBotsQueryHandler : IRequestHandler<GetAllBotsQuery, IList<BotDto>>
    {
        public Task<IList<BotDto>> Handle(GetAllBotsQuery request, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }
}
