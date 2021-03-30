using MediatR;
using Skybot.Domain.Events;
using System.Threading;
using System.Threading.Tasks;
using Ardalis.GuardClauses;
using Microsoft.Extensions.Logging;

namespace Skybot.Application.Bots.EventHandlers
{
    public class BotCompletedEventHandler : INotificationHandler<BotCompletedEvent>
    {
        private readonly ILogger<BotCompletedEventHandler> _logger;

        public BotCompletedEventHandler(ILogger<BotCompletedEventHandler> logger)
        {
            _logger = logger;
        }
        
        public Task Handle(BotCompletedEvent domainEvent, CancellationToken cancellationToken)
        {
            Guard.Against.Null(domainEvent, nameof(domainEvent));
            
            _logger.LogInformation("Domain Event: {DomainEvent}", domainEvent.GetType().Name);

            return Task.CompletedTask;
        }
    }
}
