using Adiscount.Entities;
using Microsoft.AspNetCore.Mvc;
using Adiscount.Services;


[ApiController]
[Route("[controller]")]
public class APIController: Controller
{
    private ClientService clientDB = new ClientService();

    [HttpGet("{id}")]
    public ActionResult<Client> Get(int id)
    {
        Client c=clientDB.Get(id);
        if (c == null)
        {
            return NotFound("No Client Found");
        }
        else
            return c;
    }
    
    [HttpGet]
    public ActionResult<List<Client>> Get()
    {
        List<Client> c=clientDB.Get();
        if (c == null)
        {
            return NotFound("No Client Found");
        }
        else
            return c;
    }
 
}