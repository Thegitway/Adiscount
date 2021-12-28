let baseUrl="https://localhost:5000/api"
  export async function getClient()
    {
        var rep=await fetch(baseUrl+"/client");
        var data= await rep.json();
        return data;
    }