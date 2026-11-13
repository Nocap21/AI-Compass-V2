using Microsoft.EntityFrameworkCore;

namespace AICompass.Api.Data;

public class AICompassDbContext : DbContext
{
    public AICompassDbContext(DbContextOptions<AICompassDbContext> options)
        : base(options)
    {
    }
}
