using Microsoft.AspNetCore.Mvc;
using Entities.Client;
using db.mariaDb;
    [Route("api/[controller]")]

public class dataController: Controller{
  private readonly MariaDbContext _db;



}