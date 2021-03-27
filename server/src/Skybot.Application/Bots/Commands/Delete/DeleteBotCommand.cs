using MediatR;

namespace Skybot.Application.Bots.Commands.Delete
{
    public class DeleteBotCommand : IRequest
    {
        public int Id { get; set; }
    }
}
