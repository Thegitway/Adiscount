using Adiscount.db.mariaDb;
using Adiscount.Entities;

Console.WriteLine("begin !");
var dd = new MariaDbContext();

if (!dd.Database.CanConnect())
{
    dd.Database.EnsureDeleted();
    Console.WriteLine("Creating database if not created");
    dd.Database.EnsureCreated();
    dd.Clients.Add(new Client
        {firstName = "OMAR", lastName = "OUKIL", birth = DateTime.Now, email = "omaroukil31@gmail.com"});
    dd.Clients.Add(new Client
        {firstName = "GUTS", lastName = "BERSERK", birth = DateTime.Now, email = "behelit@gmail.com"});
    dd.SaveChanges();
}


Console.WriteLine("END !");

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    "default",
    "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();