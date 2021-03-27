using MediatR;
using Skybot.Application.Bots.Dtos;

namespace Skybot.Application.Bots.Commands.Create
{
    public class CreateBotCommand : IRequest<BotDto>
    {
        public string Symbol { get; set; }
    }
}
