using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Skybot.Domain.Entities;

namespace Skybot.Infrastructure.Persistence.Configurations
{
    public class BotConfiguration : IEntityTypeConfiguration<Bot>
    {
        public void Configure(EntityTypeBuilder<Bot> builder)
        {
            builder.Property(e => e.Symbol)
                .IsRequired()
                .HasMaxLength(10);
        }
    }
}
