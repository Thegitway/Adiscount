import { Navbar,Col,Row,Dropdown } from "react-bootstrap";
import {useEffect,useState} from 'react'
import { Search, SearchOutlined } from "@material-ui/icons";
import styled from 'styled-components';
import {Link} from 'react-router-dom'



const SearchContainer=styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color: rgb(245,246,246);
  margin: 2px;
  padding:10px;
  border-radius: 10px;
`
const Input=styled.input`
width: 100%;
background-color: rgb(245,246,246);
border: 0px;
&:focus {
      outline: none;
}
`
export default function AppBar()
{ 
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return(
    <Navbar style={{"backgroundColor":"#293847"}}>
      <Navbar.Brand  >
      <Link to="/home">
        <img
          alt=""
          src="/Adiscount-logo.png"
          width={width/6}
          className="d-inline-block align-top"
        /></Link>
      </Navbar.Brand>
      <Col xs={7}>
      <SearchContainer>
        <Input/>
      <Search/></SearchContainer>
     
      </Col>
      <Col xs={1}>
      </Col>
      <Col xs={1}>
      <Navbar.Collapse id="basic-navbar-nav">
      <Dropdown>
  <Dropdown.Toggle style={{"borderColor":"#293847","backgroundColor":"#293847",}} id="dropdown-basic">
    Adiscount
  </Dropdown.Toggle>
  
  <Dropdown.Menu >
  <Dropdown.Item href="/addProduct">Add product</Dropdown.Item>

    <Dropdown.Item href="/addList">Go to AddList Page</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</Navbar.Collapse>
</Col>
  </Navbar>
  
  );
}