using Skybot.Domain.Common;
using Skybot.Domain.Entities;

namespace Skybot.Domain.Events
{
    public class BotCompletedEvent : DomainEvent
    {
        public BotCompletedEvent(Bot completedItem)
        {
            CompletedItem = completedItem;
        }
        
        public Bot CompletedItem { get; set; }
    }
}
