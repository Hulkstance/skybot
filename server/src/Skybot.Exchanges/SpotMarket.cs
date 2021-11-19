namespace Skybot.Exchanges
{
    public sealed class SpotMarket : Market
    {
        public override Market CreateInstance()
        {
            return new SpotMarket();
        }
    }
}
