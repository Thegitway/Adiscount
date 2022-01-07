import styled from "styled-components"
import { useEffect,useState } from "react";
import { getPicId } from "../API/apiService.js";




const Image=styled.img`
   object-fit:cover;
  width: 100%;
  height: 70%;
  border-radius: 17px;
`


const Info=styled.h5`
margin:4px;
color: black;
display: flex;
`
const Price=styled.p`
font-weight: bold;
font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1.5vw;
color:coral;
`
const Scaffold=styled.a`
flex:${p=>p.flex};
margin:3%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-decoration: none;
background-color:white;
border: 1px;
border-color: darkgoldenrod;
border-style: dashed;
border-radius: 18px;

`

export const Product = (props) => {


  const [data,setData]=useState("")
  useEffect(()=>{
  getPicId(props.pid).then((item)=>{
  setData(item.data)
  })
})

  return (
    <Scaffold flex={props.flex} href={`/details?id=${props.id}&pid=${props.pid}`}>
    <Image src={`data:image/png;base64, ${data}`}></Image>
    <Info>{props.name}</Info>
    <Price>{props.price}</Price>
   
    </Scaffold>
  )
}
