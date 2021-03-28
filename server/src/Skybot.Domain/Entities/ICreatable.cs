using System;

namespace Skybot.Domain.Entities
{
    public interface ICreatable
    {
        DateTime CreatedAt { get; }
    }
}
