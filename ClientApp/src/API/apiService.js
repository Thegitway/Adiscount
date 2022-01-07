const baseUrl="http://localhost:5003/api"

export async function getClient()
    {
        var rep=await fetch(baseUrl+"/client");
        var data= await rep.json();
        return data;
    }
    
    export async function getPic()
    {
        var rep=await fetch(baseUrl+"/picture");
        var data= await rep.json();
        return data;
    }

    export async function getPicId(id)
    {
        var rep=await fetch(baseUrl+`/picture/${id}`);
        var data= await rep.json();
        return data;
    }

    export async function getProduct()
    {
      var rep= await fetch(baseUrl+"/product")
      var data=rep.json()
      return data;
    }
    export async function getProductId(id)
    {
      var rep= await fetch(baseUrl+`/product/${id}`)
      var data=rep.json()
      return data;
    }

    export async function createProduct(product)
    {
       var res=await fetch(baseUrl+"/product/add", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(product)
          })
          var data= await res.json();
return data
    }

    export async function createPic(pic)
    {
       var res= await fetch(baseUrl+"/picture/add", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(pic)
          })
          var data= await res.json();
return data
    }