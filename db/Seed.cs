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
                if (context.Clients.Any() && context.Products.Any())
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



                var imgDocker=File.ReadAllBytes("Assets/docker-img.png");
                var imgAcajou=File.ReadAllBytes("Assets/acajou.png");
                var imgBerserk=File.ReadAllBytes("Assets/berserk1.png");
                var imgCitron=File.ReadAllBytes("Assets/citron.png");
                var imgCorona=File.ReadAllBytes("Assets/corona.png");
                var imgSake=File.ReadAllBytes("Assets/sake.png");
                var imgSel=File.ReadAllBytes("Assets/sel.png");
                var imgTequila=File.ReadAllBytes("Assets/tequila.png");
                var imgTide=File.ReadAllBytes("Assets/tide.png");

                context.Pictures.AddRange(
                     
                     new Picture{
                         id = 1,
                         name = "Acajou-img",
                         data = imgAcajou,
                         size = imgAcajou.Length,
                         mimeType = "png"
                     },
                    new Picture{
                    id = 2,
                    name = "berserk-img",
                    data = imgBerserk,
                    size = imgBerserk.Length,
                    mimeType = "png"
                    }, new Picture{
                         id =3,
                         name = "Citron-img",
                         data = imgCitron,
                         size = imgCitron.Length,
                         mimeType = "png"
                     },
                     new Picture{
                         id = 4,
                         name = "Corona-img",
                         data = imgCorona,
                         size = imgCorona.Length,
                         mimeType = "png"
                     },new Picture
                     {
                         id = 5,
                         name = "docker-img",
                         data = imgDocker,
                         size = imgDocker.Length,
                         mimeType = "png"
                     },
                     new Picture{
                         id = 6,
                         name = "Sake-img",
                         data = imgSake,
                         size = imgSake.Length,
                         mimeType = "png"
                     },
                     new Picture{
                         id = 7,
                         name = "Sel-img",
                         data = imgSel,
                         size = imgSel.Length,
                         mimeType = "png"
                     },
                     new Picture{
                         id = 8,
                         name = "Tequila-img",
                         data = imgTequila,
                         size = imgTequila.Length,
                         mimeType = "png"
                     },
                     new Picture{
                         id = 9,
                         name = "Tide-img",
                         data = imgTide,
                         size = imgTide.Length,
                         mimeType = "png"
                     }
                     

                );
                context.SaveChanges();
                
                //Products
                
                context.Products.AddRange(
                    new Product
                    {
                        pictureId = 1,
                        info = "Acajou",
                        category = "fiesta",
                        price = 100,
                        unite = "DH",
                        
                    },
                    new Product
                    {
                        pictureId = 2,
                        info = "Berserk Tome 1",
                        category = "Otaku",
                        price = 77,
                        unite = "DH",
                        
                    },
                    new Product
                    {
                        pictureId = 3,
                        info = "Citron",
                        category = "fiesta",
                        price = 3,
                        unite = "DH",
                    },
                    new Product
                    {
                        pictureId = 4,
                        info = "Corona",
                        category = "fiesta",
                        price = 28,
                        unite = "DH",
                    },
                    new Product
                    {
                        pictureId = 6,
                        info = "Sake",
                        category = "fiesta",
                        price = 99.9,
                        unite = "DH",
                    },
                    new Product
                    {
                        pictureId = 7,
                        info = "Sel",
                        category = "fiesta",
                        price = 3,
                        unite = "DH",
                    },
                    new Product
                    {
                        pictureId = 8,
                        info = "Tequila",
                        category = "fiesta",
                        price = 289.99,
                        unite = "DH",
                    },
                    new Product
                    {
                        pictureId = 9,
                        info = "Tide",
                        category = "household",
                        price = 27.59,
                        unite = "DH",
                    }
                    );
                context.SaveChanges();

            }
        }
    }