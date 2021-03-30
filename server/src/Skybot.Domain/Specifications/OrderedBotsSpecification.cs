using Ardalis.Specification;
using Skybot.Domain.Entities;

namespace Skybot.Domain.Specifications
{
    public sealed class OrderedBotsSpecification : Specification<Bot>
    {
        public OrderedBotsSpecification()
        {
            Query.OrderBy(x => x.Symbol);
        }
    }
}
