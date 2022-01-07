import styled from "styled-components";
import AppBar from "./component/AppBar";
import { Outlet,useNavigate} from "react-router-dom";
import { useEffect,useState } from "react";
export default function App() {

    const Scaffold=styled.div`
  
  width: 100%;
  background-color: white;
  `

    const navigate = useNavigate()
    useEffect(()=>{
        if(window.location.href.charAt(window.location.href.length-1)==='/')
            navigate("/home");
    },[]);
    const [s,setS]=useState("");

    return (
        <Scaffold >
            <AppBar></AppBar>
            <Outlet s={[s,setS]}/>
        </Scaffold>

    )
}
