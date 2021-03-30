namespace Skybot.Domain.Entities
{
    public class Bot : Entity, IAggregateRoot
    {
        public string Symbol { get; set; }
    }
}
