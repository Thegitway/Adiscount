using Microsoft.EntityFrameworkCore;
using Entities.Client;
namespace db.mariaDb { 
public partial class MariaDbContext : DbContext
{
   

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySql("server=localhost;database=omar;user=root;password=OUKIL",
            ServerVersion.AutoDetect("server=localhost;database=omar;user=root;password=OUKIL"));    
    }
    

    public virtual DbSet<Client> clients { get; set; }
}
}