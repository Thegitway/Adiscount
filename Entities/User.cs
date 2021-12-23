
namespace Adiscount.Entities{
abstract public class User{
  public string firstName {get; set;}
  public string? lastName {get; set;}
  public int id {get; set;}
  public string email {get; set;}
   
  public DateTime birth {get; set;}
  public virtual Picture? pic{get;set;}
  
}
}