using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Skybot.Domain.Common.Interfaces
{
    public interface IEntity : ICreatable, IModifiable
    {
        int Id { get; }
        ICollection<IDomainEvent> DomainEvents { get; }

        Task InvokeEvents(Func<IDomainEvent, Task> invoke);
    }
}
