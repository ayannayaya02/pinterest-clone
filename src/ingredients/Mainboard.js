import React from 'react'
import styled from "styled-components";
import Pin from "./Pin";

function Mainboard(props) {
    let {pins}=props;

  return (
   
    <Wrapper>
        <Container>
            {pins.map((pin,index)=>
            {
                let {urls}=pin;
        return<Pin key={index} urls={urls}/>
            })}
        </Container>
    </Wrapper>
  )
}

export default Mainboard

const Wrapper=styled.div`

background-color:#fffff;
width:100%;
height:100%;
margin-top:20px;
justify-content:center;
display:flex;
`

const Container = styled.div`
  @media (max-width: 1763px) {
    column-count: 2;
    max-width: 584px;
    column-gap:50;
  }

  background-color: #fffff;
  width: 80%;
  column-count: 4;
  column-gap: 50px;
  margin: 0 auto;
  background-color: #fffff;
  height: 100%;
  max-width: 1300px;
`;