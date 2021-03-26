using System;
using MediatR;

namespace Skybot.Domain.Common
{
    public abstract class DomainEvent : INotification
    {
        public DateTimeOffset DateOccurred { get; protected set; } = DateTime.UtcNow;
    }
}
