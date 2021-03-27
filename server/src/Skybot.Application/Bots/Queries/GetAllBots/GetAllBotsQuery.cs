using System.Collections.Generic;
using MediatR;
using Skybot.Application.Bots.Dtos;

namespace Skybot.Application.Bots.Queries.GetAllBots
{
    public class GetAllBotsQuery : IRequest<IList<BotDto>>
    {
    }
}
