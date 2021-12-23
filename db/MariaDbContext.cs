using Microsoft.EntityFrameworkCore;
using Adiscount.Entities;
namespace Adiscount.db.mariaDb { 
public partial class MariaDbContext : DbContext
{
   
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySql("server=localhost;database=omar;user=root;password=OUKIL",
            ServerVersion.AutoDetect("server=localhost;database=omar;user=root;password=OUKIL"));    
    }
    

    public virtual DbSet<Client> Clients { get; set; }
    public virtual DbSet<Picture> Pictures{get;set;}
}
}