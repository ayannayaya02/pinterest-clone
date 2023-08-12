import React from 'react'
import styled from "styled-components";

function Pin(props) {
    let {urls}=props;

  return (
<Wrapper>
    <Container>
<img src={urls?.regular} alt="pins" />
    </Container>
</Wrapper>

  )
}

export default Pin;

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