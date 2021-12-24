using Adiscount.Entities;
using Microsoft.EntityFrameworkCore;

namespace Adiscount.db.mariaDb;

public class MariaDbContext : DbContext
{
    public virtual DbSet<Client> Clients { get; set; }
    public virtual DbSet<Picture> Pictures { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

        string connectionString1 = "jdbc:mariadb://mariadb:3306/omar?user=root&password=OUKIL";
        string connectionString2 = "server=localhost;port=3306;database=omar;user=root;password=OUKIL";
        optionsBuilder.UseLazyLoadingProxies().UseMySql(connectionString2,
            ServerVersion.AutoDetect(connectionString2));
    }
}