import React from 'react'
import styled from "styled-components";
import Pin from "./Pin";

function Mainboard() {
  return (
   
    <Wrapper>
        <Container>
<Pin/>
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

const Container=styled.div`
background-color:#fffff;
display:flex;
width:80%;

`