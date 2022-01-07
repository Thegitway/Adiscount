
import styled,{keyframes} from "styled-components"
import {useState,useEffect} from "react"
import { getPicId, getProductId } from "../API/apiService"
import {useSearchParams} from "react-router-dom";


const Scaffold=styled.div`
width: 90vw;
height: 90vh;
background-color: white;
`

const Image=styled.img`
   object-fit:cover;
  width: 40vw;
  height: 90vh;
  border-radius: 0px;
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
padding:3%;
justify-content: space-between;
align-items: flex-start;
`
const Title=styled.h1`
font-family: Georgia, 'Times New Roman', Times, serif;
font-weight: 200;
`
const Price=styled.div`
font-weight: 100;
font-size: 40px;
font-family: Georgia, 'Times New Roman', Times, serif;

`
const Info=styled.div`
margin: 10px 0px;
font-family: Georgia, 'Times New Roman', Times, serif;

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

export default function Details() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [products,setProducts]=useState();
  const [pic,setPic]=useState({})
  useEffect(()=>{
     getProductId(searchParams.get("id")).then((x)=>{
    setProducts(x);
   })
   getPicId(searchParams.get("pid")).then((x)=>{
     setPic(x);
   })
  },[])
  if(products!=null && products.length!=0)
  {
  return (
    <Scaffold>
    <Row>
    <Image flex="1" src={`data:image/png;base64, ${pic.data}`}/>
   <Column>
    <Title >
      {products.info}
    </Title>
    <Info>
      Ad ad exercitation sit exercitation esse nulla culpa. Eu officia non nulla commodo tempor. Incididunt eu tempor velit amet amet consectetur velit dolor non velit proident qui sunt anim.
    </Info>
    <Price>{products.price} {products.unite}</Price>
    </Column>
    </Row>
      
    </Scaffold>
  )}else 
  {
    return <Scaffold>
    <ContainerImage>
      {/* <img src="loading.gif"/> */}
      <Rotate>Omar</Rotate>
    </ContainerImage>
    </Scaffold>
  }
}
