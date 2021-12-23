using Adiscount.Entities;

namespace Adiscount.repositories
{

    public interface IPicture
    {
        public bool Add(Picture pic);
        public bool Update(Picture client);
        public Picture Get(int id);
        public List<Picture> Get();
        public bool Remove(int id);
    }
}