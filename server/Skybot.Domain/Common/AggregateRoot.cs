using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Skybot.Domain.Common
{
    public class AggregateRoot
    {
        public ICollection<DomainEvent> DomainEvents { get; } = new Collection<DomainEvent>();
    }
}
