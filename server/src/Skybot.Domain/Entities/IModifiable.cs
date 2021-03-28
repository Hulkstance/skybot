using System;

namespace Skybot.Domain.Entities
{
    public interface IModifiable
    {
        DateTime? ModifiedAt { get; }
    }
}
