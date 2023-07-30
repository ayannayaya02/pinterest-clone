import React from "react";
import styled from "styled-components";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Icon from "@mui/material/Icon";

function Header() {
  return (
    <div>
      <Wrapper>
        <LogoWrapper>
          <Icon>
            <PinterestIcon />
          </Icon>
        </LogoWrapper>

        <HomeButton>
          <a href="/">HomePage</a>
        </HomeButton>

        <Following>
          <a href="/">Following</a>
        </Following>

        <SearchWrapper>
          <SearchBar>
            {/*
            <SearchIconButton>
            
              <SearchIcon/>
            </SearchIconButton>
  */}
            <form>
              <input type="text" />
              <button type="submit"></button>
            </form>
          </SearchBar>
        </SearchWrapper>
        {/*

<IconWrapper>

</IconWrapper>
*/}
      </Wrapper>
    </div>
  );
}

export default Header
/*Make sure to name the component then include it in the return()! */
/*Include CSS for components */

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: #ffff;
  color: black;
`
/*Pinterest Logo is considered a svg icon why it's class name is the title */

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`

/*Styling HomeButton No Hover */

const Home =styled.div
`
display:flex;
height:48px;
min-width:123px;
align-items:center;
justify-content:center;
border-radius:24px;
cursor:pointer;
`
const HomeButton=styled(Home)`
background-color:rgb(17,17,17);



a{
  text-decoration:none;
  color:white;
  font-weight:700;

}

`
/* Styling the button for following */
const Following = styled(Home)`
  
  background-color:white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover{
    background-color:#e1e1e1;
  }
`
/*flex 1 will take up all space it gets plus the width being 100% makes it stretch out.It is round because of the border-radius value.*/
const SearchWrapper=styled.div`
flex:1;
`
const SearchBar=styled.div`
background-color:#efefef;
display:flex;
height:49px;
width:100%;
border-radius:50px;
border:none;
padding-left:10px;

form{
  display:flex;
  flex:1;
}

form > input{
  background-color:transparent;
  border:none;
  width:100%;
  margin-left:5px;
  font-size:16px;
}

form > button{
  display:none;
}

input :focus{
  outline:none;
}
input:active{
outline:none;
}

input:hover{
  outline:none;
}

`
