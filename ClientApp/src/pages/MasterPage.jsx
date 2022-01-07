import styled from "styled-components";
import AppBar from "../component/AppBar";
import { Outlet } from "react-router-dom";
export default function Home() {

  const Scaffold=styled.div`
  
  width: 100%;
  background-color: rgb(245,245,245);
  `

  return (
    <Scaffold> 
      <AppBar></AppBar>
     <Outlet/>
      </Scaffold>
    
  )
}
