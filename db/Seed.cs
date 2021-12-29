using Adiscount.db.mariaDb;
using Adiscount.Entities;
using Microsoft.EntityFrameworkCore;

public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MariaDbContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<MariaDbContext>>()))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                // Look for any records.
                if (context.Clients.Any())
                {
                  return;   // DB has been seeded
                }

                context.SaveChanges();

                context.Clients.AddRange(
                    new Client
                    {
                        firstName = "OMAR",
                        lastName = "OUKIL",
                        birth = DateTime.Now,
                        email = "omaroukil31@gmail.com"
                        
                    },
                    
                    new Client
                     {
                        firstName = "GUTS", lastName = "BERSERK",
                        birth = DateTime.Now,
                        email = "behelito@gmail.com"
                     },

                    new Client
                     {
                         firstName = "STEVE", lastName = "JOB",
                         birth = DateTime.Now,
                         email = "APPLE@gmail.com"
                     }

                );

                context.SaveChanges();



                var data=File.ReadAllBytes("Assets/docker-img.png");
                context.Pictures.AddRange(
                     new Picture
                     {
                         data = data,
                         size = data.Length,
                         mimeType = "png"
                     }

                );
                context.SaveChanges();
                
            }
        }
    }