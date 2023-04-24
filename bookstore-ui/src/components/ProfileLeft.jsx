import React from "react";
import { colors } from "../data";
import styled from "styled-components";

const Left = styled.div`
  flex: 1;
  border-right: 1px solid black;
  height: 100%;
  cursor: pointer;
`;

const MenuItem = styled.div`
  display: block;
  font-weight: bold;
  padding: 10px;

  color: ${(props) =>
    props.active
      ? colors.color1
      : props.children === "Đăng xuất"
      ? "#fb8277"
      : "black"};
`;

const ProfileLeft = ({ index }) => {
  const menuItem = [
    "Thông tin cá nhân",
    "Đổi mật khẩu",
    "Chỉnh sửa thông tin cá nhân",
    "Đăng xuất",
  ];
  return (
    <div>
      <Left>
        {menuItem.map((item, itemIndex) => (
          <MenuItem active={index == itemIndex}>{item}</MenuItem>
        ))}
      </Left>
    </div>
  );
};

export default ProfileLeft;
