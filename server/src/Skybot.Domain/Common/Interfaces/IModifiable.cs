using System;

namespace Skybot.Domain.Common.Interfaces
{
    public interface IModifiable
    {
        DateTime? ModifiedAt { get; }
    }
}
