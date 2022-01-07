using Adiscount.db.mariaDb;
using Adiscount.Entities;

namespace Adiscount.Services;

public class ProductService
{
    private  readonly MariaDbContext _mdb;

    public ProductService(MariaDbContext mdb)
    {
        this._mdb = mdb;
    }
    public  bool Add(Product product)
    {
        try
        {
            _mdb.Products.Add(product);
            _mdb.SaveChanges();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }

    }

    public bool Update(Product product)
    {
        try
        {
            _mdb.Products.Update(product);
            _mdb.SaveChanges();

            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public Product Get(int id)
    {
        try
        {
            //LINQ first method
            // var query = from st in mdb.clients
            //     where st.id == id
            //     select st;
            //return query.FirstOrDefault<Client>();
            
            //Second method
            return _mdb.Products.Where(p => p.id == id).FirstOrDefault();

        }
        catch (Exception e)
        {
            return null;
        }
    }

    public List<Product> Get()
    {
        return _mdb.Products.ToList();
    }

    public bool Remove(int id)
    {
        try
        {
            _mdb.Products.Remove(_mdb.Products.Where(c => c.id == id).First());
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }
}