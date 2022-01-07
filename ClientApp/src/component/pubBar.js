import styled from "styled-components";


const SignalImage=styled.img`
width:10vw;
`

const Column=styled.div`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
`
const Commercial=styled.img`
 object-fit: cover;
width: 100%;
`
const LinkContainer=styled.div`
width: 33vw;

`
const Signal=styled.div`
display: flex;
border-bottom:4px;
border-top: 0px;
border-left: 0px;
border-right: 0px;
border-color: coral;
border-style: solid;
background-color: white;
width: 100vw;
align-items: center;
justify-content: space-around;
 
`

export default function PubBar() {
  return (
    <a  style={{"textDecoration":"none"}} href="https://www.missionsignal.fr/produits/dentifrices.html">
      <Signal>
      <LinkContainer ><Commercial src="./girl-smiling.png"/></LinkContainer>
    <Column>
      <SignalImage flex={1} src="signal.png"/>
      <div flex={1} style={{"fontWeight":"bold","color":"teal"}}>
      signal will take car of you
      </div></Column>
      </Signal></a>
  )
}
