using Skybot.Domain.Common;

namespace Skybot.Domain.Entities
{
    public class Bot : AggregateRoot
    {
        public string Symbol { get; set; }
    }
}
