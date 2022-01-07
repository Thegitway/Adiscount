import { propTypes } from "react-bootstrap/esm/Image";
import styled from "styled-components"
import { v4 } from "uuid";
import {useRef,useState} from "react";



const Row=styled.div`
display: flex;
flex-direction:row;
justify-content: start;
align-items: center;
padding-left: 2%;
`
const Scaffold=styled.div`
width: 100vw;
`
const Column=styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`


export default function CategoryBar(props) {
 
  const Button=styled.button`
  display:inline-block;
  padding:0.35em 1.2em;
  border:0.1em solid #FFFFFF;
  margin:0.3em;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-wight:300;
  color: black;
  text-align:center;
  transition: all 0.2s;
  background-color: ${p=>p.name===buttonFocus &&"coral"};
  &:hover{
  color:black;
  background-color:coral;
  }
  `
 const categoryComp=useRef()
 const [buttonFocus,setbuttonFocus]=useState("All");
 const [cate,setCate]=props.cate;

 function Clicked(e)
{
  setbuttonFocus(e.currentTarget.name)
  setCate(e.currentTarget.name)
}

  return (
    <Scaffold>
      <Row>
        <Button  onClick={(e)=>Clicked(e)} key={v4()} name="All">All</Button>
       {
        props.category.map((item)=>
        {
         return <Button  onClick={(e)=>Clicked(e)} key={v4()} name={item}>{item}</Button>
        }) 
        }
      
      </Row>
    </Scaffold>
  )
}
