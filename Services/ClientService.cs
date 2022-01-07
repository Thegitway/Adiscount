
using Adiscount.Entities;
using Adiscount.repositories;
using Adiscount.db.mariaDb;


namespace Adiscount.Services;

public  class ClientService : IClient
{
    private  readonly MariaDbContext _mdb;

    public ClientService(MariaDbContext mdb)
    {
        this._mdb = mdb;
    }
  public  bool Add(Client client)
    {
        try
        {
            _mdb.Clients.Add(client);
            _mdb.SaveChanges();

            return true;
        }
        catch (Exception e)
        {
            return false;
        }

    }

    public bool Update(Client client)
    {
        try
        {
            _mdb.Clients.Update(client);
            _mdb.SaveChanges();

            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public Client Get(int id)
    {
        try
        {
            //LINQ first method
            // var query = from st in mdb.clients
            //     where st.id == id
            //     select st;
            //return query.FirstOrDefault<Client>();
            
            //Second method
            return _mdb.Clients.Where(c => c.id == id).FirstOrDefault();

        }
        catch (Exception e)
        {
            return null;
        }
    }

    public List<Client> Get()
    {
        return _mdb.Clients.ToList();
    }

    public bool Remove(int id)
    {
        try
        {
            _mdb.Clients.Remove(_mdb.Clients.Where(c => c.id == id).First());
            _mdb.SaveChanges();

            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }
}