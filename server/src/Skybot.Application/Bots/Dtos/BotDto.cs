using Skybot.Application.Mappings;
using Skybot.Domain.Entities;

namespace Skybot.Application.Bots.Dtos
{
    public record BotDto : IMapFrom<Bot>
    {
        public int Id { get; init; }
        public string Symbol { get; init; }
    }
}
