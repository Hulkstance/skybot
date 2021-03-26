using MediatR;
using Skybot.Domain.Events;
using System.Threading;
using System.Threading.Tasks;

namespace Skybot.Application.Bots.EventHandlers
{
    public class BotCompletedEventHandler : INotificationHandler<BotCompletedEvent>
    {
        public Task Handle(BotCompletedEvent notification, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }
}
