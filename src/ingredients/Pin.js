import React from 'react'
import styled from "styled-components";

function Pin() {
  return (
<Wrapper>
    <Container>
<img src="https://images.unsplash.com/photo-1542720046-1e772598ea39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80"/>
    </Container>
</Wrapper>

  )
}

export default Pin

const Wrapper=styled.div`
display:inline-flex;
padding:8px;
`

const Container=styled.div`
display:flex;
box-sizing:border-box;
width:236px;
cursor:pointer;
align-items:center;

img{
    width:100%;
    display:flex;

    border-radius:16px;
    object-fit:cover;
}
`