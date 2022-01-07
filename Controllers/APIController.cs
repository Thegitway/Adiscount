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
    private readonly ProductService _productDB;

   public APIController(ClientService clientDb,PictureService pictureDb,ProductService productDb)
    {
        _clientDB = clientDb;
        _pictureDB = pictureDb;
        _productDB = productDb;
    }

    [HttpGet("client/{id}")]
    public ActionResult<Client> Getclient(int id)
    {
        var c = _clientDB.Get(id);
        if (c == null)
            return NotFound("No Client Found");
        return c;
    }

    [HttpPost("product/add")]
    public ActionResult<Product> CreateProduct([FromBody] Product product)
    {
         _productDB.Add(product);
         return product;
    }
    
    [HttpPost("picture/add")]
    public ActionResult<Picture> CreatePicture([FromBody] Picture picture)
    {
        _pictureDB.Add(picture);
        return picture;
    }
    
    [HttpGet("product/{id}")]
    public ActionResult<Product> GetProduct(int id)
    {
        var c = _productDB.Get(id);
        if (c == null)
            return NotFound("No Product Found");
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
    
    [HttpGet("product")]
    public ActionResult<List<Product>> GetProduct()
    {
        var c = _productDB.Get();
        if (c == null)
            return NotFound("No Product Found");
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