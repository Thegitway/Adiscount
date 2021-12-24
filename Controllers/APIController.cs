using Adiscount.Entities;
using Adiscount.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class APIController : Controller
{
    private readonly ClientService clientDB = new();
    private readonly PictureService pictureDB = new();
    
    [EnableCors] 

    [HttpGet("client/{id}")]
    public ActionResult<Client> Getclient(int id)
    {
        var c = clientDB.Get(id);
        if (c == null)
            return NotFound("No Client Found");
        return c;
    }
    
    [EnableCors] 

    [HttpGet("client")]
    public ActionResult<List<Client>> Getclient()
    {
        var c = clientDB.Get();
        if (c == null)
            return NotFound("No Client Found");
        return c;
    }
    
    [EnableCors]
    [HttpGet("picture/{id}")]
    public ActionResult<Picture> Getpicture(int id)
    {
        return pictureDB.Get(id);
        
    }
    
    [EnableCors] 
    [HttpGet("picture")]
    public ActionResult<List<Picture>> Getpicture()
    {
        var p = pictureDB.Get();
        if (p.Count == 0)
            return NotFound();
        return p;
    }
}