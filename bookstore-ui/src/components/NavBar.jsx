import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Search, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Badge } from "@mui/material";

import { mobile } from "../responsive";
import icon from "../assets/icon.png";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  height: 60px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 10px;
  margin-left: 25px;
  padding: 5px;
  height: 50%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 9;
  ${mobile({ width: "50px" })}

  &:focus {
    outline: none;
  }
`;

const Brand = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const MenuPopup = styled.div`
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: white;
    z-index: 1;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: ${showMenu ? "flex" : "none"};
    flex-direction: column;
  `;

  const MenuButton = styled.div`
    width: 150px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    margin: 5px;
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <img src={icon} alt="" height="100%" />
          <Brand>Book Store</Brand>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16, flex: 1 }} />
          </SearchContainer>
        </Left>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color="error">
              <NotificationsOutlinedIcon color="action" />
            </Badge>
            <span>Thông báo</span>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartCheckoutOutlined color="action" />
            </Badge>
            <span>Giỏ hàng</span>
          </MenuItem>
          <MenuItem onClick={() => setShowMenu(!showMenu)}>
            <PersonOutlineOutlinedIcon />
            <span>Tài khoản</span>
          </MenuItem>
          <MenuPopup>
            <MenuButton style={{ backgroundColor: "#92cbde" }}>
              Đăng nhập
            </MenuButton>
            <MenuButton style={{ backgroundColor: "#79be8f" }}>
              Đăng ký
            </MenuButton>
          </MenuPopup>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
