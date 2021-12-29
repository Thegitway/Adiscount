using Adiscount.db.mariaDb;
using Adiscount.Entities;
using Adiscount.repositories;
using Adiscount.Services;
using Microsoft.EntityFrameworkCore;
string connectionString = "server=localhost;port=3306;database=omar;user=root;password=OUKIL";


var builder = WebApplication.CreateBuilder(args);
//dependency injection
builder.Services.AddDbContext<MariaDbContext>(opt =>
    opt.UseMySql(connectionString,ServerVersion.AutoDetect(connectionString)));

builder.Services.AddScoped<ClientService>();
builder.Services.AddScoped<PictureService>();



builder.Services.AddControllersWithViews();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    SeedData.Initialize(services);
}
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors(policy =>
    policy.AllowAnyOrigin()
        );

app.MapControllerRoute(
    "default",
    "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();