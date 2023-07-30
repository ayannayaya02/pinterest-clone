import React from 'react';
import PinterestIcon from "@mui/icons-material/Pinterest";
import Icon from '@mui/core/Icon';


function Header() {
  return (
    <div>
      <Wrapper>

      <LogoWrapper>
        <Icon>
          <PinterestIcon/>

        </Icon>
      </LogoWrapper>

      <Following>
      </Following>

      <SearchEngine>
      </SearchEngine>


      </Wrapper>
    </div>
  );
}

export default Header
 
const Wrapper=styled.div`
display:flex;
align-items:center;
height:56px;
padding:12px 5px 5px 15px;
background-color:#ffff;
color:black;
`