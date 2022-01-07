
import Todo from '../component/Todo';
import {v4} from 'uuid';
import {Link} from 'react-router-dom';
import {useState,useRef} from 'react';
import styled from 'styled-components';


//style
const Container = styled.div`
width:100%;
height: 5vh;
align-items: center;
justify-content: center;
display: flex;
margin-top: 2vh;

`

export default function AddList() {
var [todoList,setTodoList]=useState([])

var inputRef=useRef('');



  return (
   <>
   <div><Link to="/home"><Container>Adiscount</Container></Link></div>

   <Container><form onSubmit={(e)=>{
         e.preventDefault();
     setTodoList([...todoList,
     {id:v4(),data:inputRef.current.value}])
     inputRef.current.value=''   
     }}>
   <input ref={inputRef} type="text"></input>
   </form></Container>
   <br/>
   { 
     todoList.map((item)=>{
      return <Todo key={item.id} id={item.id} data={item.data} todoList={todoList} setTodoList={setTodoList}></Todo>
     })
   }

   </>
  );
}

