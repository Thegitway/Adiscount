using Adiscount.Entities;
using Microsoft.EntityFrameworkCore;

namespace Adiscount.db.mariaDb;

public class MariaDbContext : DbContext
{
    public MariaDbContext(DbContextOptions<MariaDbContext> options)
        : base(options)
    {
    }
    public virtual DbSet<Client> Clients { get; set; }
    public virtual DbSet<Picture> Pictures { get; set; }
    
}