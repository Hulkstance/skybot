using System.Collections.Generic;
using Skybot.Domain.Events;

namespace Skybot.Domain.Entities
{
    public abstract class Entity
    {
        public int Id { get; set; }

        public readonly List<DomainEvent> DomainEvents = new();
    }
}
