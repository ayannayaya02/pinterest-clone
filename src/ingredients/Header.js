import React, {useState} from "react";
import styled from "styled-components";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Icon from "@mui/material/Icon";
import SearchIcon from "@mui/icons-material/Search";
import SearchIconButton from "@mui/material/IconButton";
import FaceIcon from "@mui/icons-material/Face";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

/**Make different file for this page it's getting too long. */
/*SearchIcon is a componentso it is a self clsoing tag */

function Header() {
  const [input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Result", input);
  };

  return (
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
          <SearchIconButton>
            <SearchIcon />
          </SearchIconButton>
          <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={onSearchSubmit}></button>
          </form>
        </SearchBar>
      </SearchWrapper>

      <IconWrapper>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>

        <IconButton>
          <FaceIcon />
        </IconButton>

        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconWrapper>
    </Wrapper>
  );
}

export default Header;
/*Make sure to name the component then include it in the return()! */
/*Include CSS for components */

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 5px;
  padding: 15px;
  background-color: #ffff;
  color: black;
`;
/*Pinterest Logo is considered a svg icon why it's class name is the title */

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    display: inline-flex;
    font-size: 25px;
    cursor: pointer;
  }

  :hover {
    cursor: pointer;
    background-color: #e1e1e1;
    border-radius: 12px;
  }
`;

/*Styling HomeButton No Hover */

const Home = styled.div`
  display: flex;
  height: 48px;
  min-width: 115px;
  padding: 5px 10px 5px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  cursor: pointer;
`;
const HomeButton = styled(Home)`
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;
/* Styling the button for following */
const Following = styled(Home)`
  background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;
/*flex 1 will take up all space it gets plus the width being 100% makes it stretch out.It is round because of the border-radius value.*/
const SearchWrapper = styled.div`
  flex: 1;
`;
const SearchBar = styled.div`
  background-color: #efefef;
  display: flex;
  height: 49px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  input :focus {
    outline: none;
  }
  input:active {
    outline: none;
  }

  input:hover {
    outline: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  padding: 15px;
`;

const IconButton = styled.div``;
