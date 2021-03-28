using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Skybot.Domain.Events;

namespace Skybot.Domain.Entities
{
    public interface IEntity : ICreatable, IModifiable
    {
        int Id { get; }
        ICollection<IDomainEvent> DomainEvents { get; }

        Task InvokeEvents(Func<IDomainEvent, Task> invoke);
    }
}
