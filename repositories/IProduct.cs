using Adiscount.Entities;

namespace Adiscount.repositories;

public interface IProduct
{
    public bool Add(Product pro);
    public bool Update(Product pro);
    public Picture Get(int id);
    public List<Product> Get();
    public bool Remove(int id);
}