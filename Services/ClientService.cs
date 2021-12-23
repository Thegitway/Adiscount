
using Adiscount.Entities;
using Adiscount.repositories;
using Adiscount.db.mariaDb;


namespace Adiscount.Services;

public  class ClientService : IClient
{
    private  MariaDbContext mdb = new MariaDbContext();
  public  bool Add(Client client)
    {
        try
        {
            mdb.Clients.Add(client);
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
            mdb.Clients.Update(client);
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
            return mdb.Clients.Where(c => c.id == id).FirstOrDefault();

        }
        catch (Exception e)
        {
            return null;
        }
    }

    public List<Client> Get()
    {
        return mdb.Clients.ToList();
    }

    public bool Remove(int id)
    {
        try
        {
            mdb.Clients.Remove(mdb.Clients.Where(c => c.id == id).First());
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }
}