using System;
using MediatR;

namespace Skybot.Domain.Events
{
    public abstract class DomainEvent : IDomainEvent, INotification
    {
        public DateTime DateOccurred { get; protected set; } = DateTime.UtcNow;
    }
}
