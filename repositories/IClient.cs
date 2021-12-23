using Adiscount.Entities;

namespace Adiscount.repositories
{
    public interface IClient
    {
        public  bool Add(Client client);
        public bool Update( Client client);
        public Client Get(int id);
        public List<Client> Get();
        public bool Remove(int id);

    }
}