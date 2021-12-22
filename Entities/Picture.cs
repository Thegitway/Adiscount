public class Picture{
  public List<byte> data{get;set;}
  public String mimeType{get;set;}
  public int size{get;set;}

  public Picture(List<byte> data, String mimeType,int size)
  {

    this.data=data;
    this.mimeType=mimeType;
    this.size=data!=null?data.Count:0;
  }
  public Picture(){
    data=new List<byte>();
    mimeType="";
    size=0;
  }

  ~Picture()
  {

  }

}