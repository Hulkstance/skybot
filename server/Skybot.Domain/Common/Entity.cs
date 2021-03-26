using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Skybot.Domain.Common
{
    public abstract class Entity
    {
        public int Id { get; set; }

        public ICollection<DomainEvent> DomainEvents { get; } = new Collection<DomainEvent>();
    }
}
