import React from 'react';
import styled from 'styled-components';


//style
const Container = styled.div`
width:100%;
height: 5vh;
align-items: center;
justify-content: space-evenly;
display: flex;
margin: 1vh;
`

const Bloc=styled.div`
width:10%;
height:5vh;
display: flex;
align-items: center;
justify-content: center;
flex: ${p => p.flex};
`

const Button=styled.button`
color: white; font-size: 16px; line-height: 16px; padding: 6px; border-radius: 10px;  font-style: normal; font-variant: normal; text-transform: none;
 display: inline-block;
 border:0;
 background-color: rgb(206,109,75);
`

export default function Todo(props)
{

  return(
    <Container>
    <Bloc flex="3"></Bloc>
   <Bloc flex="1">{props.data.length>5?`${props.data.substr(0,5)}...`:props.data}</Bloc>
   <Bloc flex="1"><Button onClick={()=>{
      console.log(props.id)
     props.setTodoList(props.todoList.filter(data => data.id!==props.id
     ))
   }}>Delete</Button></Bloc>
  <Bloc flex="3"></Bloc>
   </Container>
  )
}