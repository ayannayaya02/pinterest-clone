import React from 'react'
import styled from "styled-components";
import Pin from "./Pin";

function Mainboard(props) {
    let {pins}=props;

  return (
   
    <Wrapper>
        <Container>
            {pins.map((pin)=>
            {
                let {urls}=pin;
        return<Pin urls={urls}/>
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

const Container=styled.div`
background-color:#fffff;
display:flex;
width:80%;

`