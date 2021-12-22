namespace Entities.Client{
public class Client:User{
  double solde;
    
    Client(String firstName,String lastName,String id,
  String email,DateTime birth,double solde){
   this.firstName=firstName;
   this.lastName=lastName;
   this.email=email;
   this.id=id;
   this.birth=birth;
   //this.pic=pic;
   this.solde=solde;
   
   
  }

  Client()
  {
   this.firstName="";
   this.lastName="";
   this.email="";
   this.id="";
   this.birth=new DateTime();
   //this.pic=new Picture();
   this.solde=0;
  }
}
}