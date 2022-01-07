import {useState,useEffect,useRef} from "react"
import styled, {keyframes} from "styled-components"
import { createProduct,createPic } from "../API/apiService"
import { useNavigate } from "react-router-dom"
const Scaffold=styled.div`
width: 100%;
 background-color: white;

`



const Column=styled.div`
display: flex;

margin-left: 5%;
justify-content: start;
align-items: start;
flex-direction: column;
`
const Row=styled.div`
display: flex;
padding:0% 3% 3% 3%;
justify-content: space-around;
align-items: flex-start;
`
const rotate = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(2);
  }

 
`;
const H5=styled.h5`
animation: ${rotate} 2s alternate-reverse infinite;

`
const RowCenter=styled.div`
display: flex;
padding-top: 3%;
justify-content: center;
align-items: center;
`

const ContainerImage=styled.div`
display: flex;
margin-top: 5%;
height: 60vh;
width: 60vh;
align-items: center;
justify-content: center;
border: 1px;
border-style: dotted;
`
const Button = styled.button`
  background:white;
  color: rgb(125,184,140);
  font-size: 1em;
  margin:20%;
  padding: 1.25em 1em;
  border: 2px solid rgb(125,194,140);
  border-radius: 3px;

  &:hover{
    background:rgb(125,184,140);
  color: white;
  font-size: 1em;
  margin:20%;
  padding: 1.25em 1em;
  border: 2px solid teal;
  border-radius: 3px;
  }
`;

const InputFile=styled.input`
z-index: 2;
`

const Image=styled.img`
position: absolute;
opacity: 60%;
z-index:0;
height: 60vh;
width: 60vh;
object-fit:cover;
  
`

const Label=styled.label`

margin: 8px;
`
const Input=styled.input`
margin: 5px;
`

export default function AddProduct() {
  
  var name=useRef();
  var category=useRef()
  var price=useRef()
  var unite=useRef()
  const navigate = useNavigate()

  const [fileData,sfileData]=useState({})

    function handleSubmit(e)
    {
   
e.preventDefault();

      createPic(
        fileData
      ).then((res)=>
      {
        console.log(res)
        createProduct({
          "pictureId": res.id,
          "info": name.current.value,
          "unite": unite.current.value,
          "price": price.current.value,
          "category": category.current.value
        }).then((x)=>{
          navigate("/home")
        })
      })
      
    }

  return (
    <Scaffold>
    <RowCenter><H5>Add your product</H5></RowCenter>
    
   <form onSubmit={(e)=>handleSubmit(e)}>
    <Row style={{"justifyContent":"space-between",}}>
    <div style={{"flex":"1"}}></div>
    <ContainerImage>
    <InputFile required={true} type="file" accept="image/*"
    onChange={(e)=> { 
      var fr=new FileReader();
      fr.onload=function(){
        sfileData({"data":fr.result.substring(23),"name":e.target.files[0].name,"size":fr.result.substring(23).lenght});
            }
      fr.readAsDataURL(e.target.files[0])
     }}></InputFile>
     
    <Image src={`data:image/png;base64, ${fileData.data}`}></Image>
    </ContainerImage>
    <div style={{"flex":"1"}}></div>
   <Column >
   <Row style={{"marginTop": "20%",}}>
   <Column >
   <Label htmlFor="name" className="form__label">Name</Label>
   <Label htmlFor="name" className="form__label">Category</Label>
   <Label htmlFor="name" className="form__label">Price</Label>
   </Column>
   <Column>
   <div className="form__group field">
  <Input ref={name} type="input" className="form__field" placeholder="Name" name="name" id='name' required />
</div>
<div className="form__group field">
  <Input ref={category} type="input" className="form__field" placeholder="Category" name="name" id='name' required />
</div>
<div className="form__group field">
  <Input ref={price} type="number" step="any" className="form__field" placeholder="Price" name="name" id='name' required />
</div>

   </Column>
   
   </Row>
  
   <select ref={unite} style={{
    "width": "100%",
  "minWidth": "15ch",
  "maxWidth": "30ch",
  "border": "1px solid ",
  "borderRadius": "0.25em",
  "padding": "0.15em 0.5em",
  "fontSize": "1rem",
  "cursor": "pointer",
  "lineHeight": "1",
  "backgroundColor": "#fff",
  "backgroundColor": "white"
  }} name="unit" id="units">
  <option value="DH">Dirham (DH)</option>
  <option value="€">EUR (€)</option>
  <option value="$">Dollar ($)</option>
 </select>


<Button>Confirm</Button>
    </Column>
    <div style={{"flex":"1"}}></div>
    </Row>
    </form>
    </Scaffold>
  )
}
