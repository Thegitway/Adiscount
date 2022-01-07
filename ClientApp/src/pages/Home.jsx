import styled,{keyframes} from "styled-components";
import PubBar from "../component/pubBar.js";
import { Product } from "../component/Product";
import CategoryBar from "../component/CategoryBar";
import {useEffect,useState,useRef} from "react";
import { getProduct } from "../API/apiService.js";
import { v4 } from "uuid";

const Scaffold=styled.div`
  
  width: 100%;
  background-color: white;
  `
  
  
const Row=styled.div`
display: flex;
height: 60vh;
width: 100%; 
`

const ContainerImage=styled.div`
display: flex;
margin-top: 5%;
align-items: center;
justify-content: center;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 8rem 1rem;
  font-size: 1.2rem;
`;
export default function Home(props) {

   
  const [cate,setCate]=useState("All");
  
  const [products,setProducts]=useState([]);
  useEffect(()=>{
     getProduct().then((x)=>{
    setProducts(x);
   })
   
  },[])

  
let productperRow=5
let vuPro=[]
let vuRow=[]


const t= () =>
{
  let categories= []
  products.map((item)=>{
  categories.push(item.category)
  })
  return [...new Set(categories)];
  
}

if(products.length!=0)
{
  return (
    <Scaffold > 

      <PubBar ></PubBar>
    
      <CategoryBar category={t()} cate={[cate,setCate]}></CategoryBar>
      
      {  
        
        products.map((item,index)=>
         {
          
      if(vuPro.length<productperRow && (cate===item.category || cate==="All") )
         vuPro.push(<Product key={v4()} id={item.id} flex="1" name={item.info} price={`${item.price} ${item.unite}`} pid={item.pictureId}/>)
       else if((cate===item.category || cate==="All"))
       {
         vuRow.push(<Row key={v4()}>{vuPro}</Row>)
         vuPro=[]
         vuPro.push(<Product key={v4()} id={item.id} flex="1" name={item.info} price={`${item.price} ${item.unite}`} pid={item.pictureId}/>)
       }

      if(index>=products.length-1)
      {
        if(vuPro.length!==0 )
        {
          vuRow.push(<Row key={v4()}>{vuPro}</Row>)
         vuPro=[]
         vuPro.push(<Product key={v4()} id={item.id} flex="1" name={item.info} price={`${item.price} ${item.unite}`} pid={item.pictureId}/>)

        }
      return vuRow
      } 
         })    
    }

      </Scaffold>
    
  )}else 
  {
    return <Scaffold>
     <ContainerImage>
     <Rotate> LOADING... PLEASE STOP 🤢!!!</Rotate>
     </ContainerImage>{/* <ContainerImage>
      <img src="loading.gif"/>
    </ContainerImage> */}
    </Scaffold>
  }
}
