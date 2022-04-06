import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.div`
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;


const Right = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  border-radius: 0.2rem;
  display: flex;
  margin: 0.2rem 1rem;
  padding: 0.2rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 0.5rem !important;
`;

const Logo = styled.h1`
  font-weight: bold ;
  margin: 0 !important;
`;

const  MenuItem = styled.div`
font-size: 14px;
margin: 0 0.5rem;
cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <Search style = {{color : "grey" ,fontSize:"1.2rem"}}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
