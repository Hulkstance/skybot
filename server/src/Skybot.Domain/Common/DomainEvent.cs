using System;
using MediatR;
using Skybot.Domain.Common.Interfaces;

namespace Skybot.Domain.Common
{
    public abstract class DomainEvent : IDomainEvent, INotification
    {
        public DateTime DateOccurred { get; protected set; } = DateTime.UtcNow;
    }
}
