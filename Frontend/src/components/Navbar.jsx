import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: lightgray;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
`;

const Input = styled.input`
  border: none;
  background-color: aliceblue;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 25px;
  padding: 5px;
`;
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Search style={{ color: "gray", fontSize: 16 }} />
            <Input />
          </SearchContainer>
        </Left>
        <Link to="/">
        <Center>
          <Logo>Pet Shop.</Logo>
        </Center>
        </Link>
        <Right>
        <Link to="/register"><MenuItem>Register</MenuItem></Link>
        <Link to="/login"><MenuItem>Sign In</MenuItem></Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
