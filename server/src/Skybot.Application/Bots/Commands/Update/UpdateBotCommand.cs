using MediatR;

namespace Skybot.Application.Bots.Commands.Update
{
    public class UpdateBotCommand : IRequest
    {
        public int Id { get; set; }
        public string Symbol { get; set; }
    }
}
