using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Threading.Tasks;
using Skybot.Domain.Events;

namespace Skybot.Domain.Entities
{
    public abstract class Entity : IEntity
    {
        public int Id { get; set; }

        public DateTime CreatedAt { get; protected set; }
        public DateTime? ModifiedAt { get; protected set; }

        public ICollection<IDomainEvent> DomainEvents { get; } = new Collection<IDomainEvent>();

        public Task InvokeEvents(Func<IDomainEvent, Task> invoke)
        {
            throw new NotImplementedException();
        }

        public void AddDomainEvent(DomainEvent eventItem)
        {
            DomainEvents.Add(eventItem);
        }

        public void RemoveDomainEvent(DomainEvent eventItem)
        {
            DomainEvents.Remove(eventItem);
        }
    }
}
