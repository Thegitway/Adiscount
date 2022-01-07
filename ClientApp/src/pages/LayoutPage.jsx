import {Row,Col,Container} from 'react-bootstrap';

export default function LayoutPage()
{
  const v="ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
  return (
  <Container fluid="true" style={{ backgroundColor:"#000", height:"200px"}}>
    <Row >
      <Col xs={8} md={2} style={{backgroundColor:"#ff0"}}>
      <Container  fluid="true" style={{height:"100px"}}>
        titi
      </Container>
      </Col>
      <Col xs={2} md={5} style={{background: "rgba(208,200,200,0.45)"}}>
        toto
      </Col>
      <Col xs={2} md={5} style={{backgroundColor:"blue"}}>
      v
      </Col>
    </Row>

    <Row>
      <Col xs={5} md={2} style={{backgroundColor:"#f00"}}>
        titi
      </Col>
      <Col xs={2} md={5} style={{backgroundColor:"green"}}>
        toto
      </Col>
      <Col xs={5} md={5} style={{backgroundColor:"blue"}}>
      v
      </Col>
    </Row>
    
  </Container>);
}