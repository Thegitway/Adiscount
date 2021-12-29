using Adiscount.Entities;
using Adiscount.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class APIController : Controller
{
    private readonly ClientService _clientDB;
    private readonly PictureService _pictureDB;
    
   public APIController(ClientService clientDb,PictureService pictureDb)
    {
        _clientDB = clientDb;
        _pictureDB = pictureDb;
    }

    [HttpGet("client/{id}")]
    public ActionResult<Client> Getclient(int id)
    {
        var c = _clientDB.Get(id);
        if (c == null)
            return NotFound("No Client Found");
        return c;
    }
    
    

    [HttpGet("client")]
    public ActionResult<List<Client>> Getclient()
    {
        var c = _clientDB.Get();
        if (c == null)
            return NotFound("No Client Found");
        return c;
    }
    
 
    [HttpGet("picture/{id}")]
    public ActionResult<Picture> Getpicture(int id)
    {
        return _pictureDB.Get(id);
        
    }
    
    [HttpGet("picture")]
    public ActionResult<List<Picture>> Getpicture()
    {
        var p = _pictureDB.Get();
        if (p.Count == 0)
            return NotFound();
        return p;
    }
}