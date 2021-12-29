using Adiscount.db.mariaDb;
using Adiscount.Entities;
using Adiscount.repositories;

namespace Adiscount.Services;

public class PictureService : IPicture
{
    private readonly MariaDbContext _mdb ;

    public PictureService(MariaDbContext mdb)
    {
        this._mdb = mdb;
    }
    public bool Add(Picture picture)
    {
        try
        {
            mdb.Pictures.Add(picture);
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public bool Update(Picture picture)
    {
        try
        {
            mdb.Pictures.Update(picture);
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }


    public Picture Get(int id)
    {
        try
        {
            //LINQ first method
            // var query = from st in mdb.clients
            //     where st.id == id
            //     select st;
            //return query.FirstOrDefault<Client>();

            //Second method
            return mdb.Pictures.Where(c => c.id == id).FirstOrDefault();
        }
        catch (Exception e)
        {
            return null;
        }
    }

    public List<Picture> Get()
    {
        return mdb.Pictures.ToList();
    }

    public bool Remove(int id)
    {
        try
        {
            mdb.Pictures.Remove(mdb.Pictures.Where(c => c.id == id).First());
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }
}