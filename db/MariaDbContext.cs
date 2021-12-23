using Adiscount.Entities;
using Microsoft.EntityFrameworkCore;

namespace Adiscount.db.mariaDb;

public class MariaDbContext : DbContext
{
    public virtual DbSet<Client> Clients { get; set; }
    public virtual DbSet<Picture> Pictures { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseLazyLoadingProxies().UseMySql("server=localhost;database=omar;user=root;password=OUKIL",
            ServerVersion.AutoDetect("server=localhost;database=omar;user=root;password=OUKIL"));
    }
}