import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import avatarIcon from "../assets/avatar.jpg";
import ProfileLeft from "../components/ProfileLeft";

export const Container = styled.div`
  width: 100%;
  padding: 50px;
  z-index: 1;
  background-color: #eee;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  src: ${(props) => props.src};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
`;
const InfoItemLabel = styled.span`
  font-weight: bold;
  flex: 2;
`;
const InfoItemContent = styled.span`
  flex: 8;
`;

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <ProfileLeft index="0" />
          <Right>
            <Avatar src={avatarIcon} />
            <Info>
              <InfoItem>
                <InfoItemLabel>Họ tên</InfoItemLabel>
                <InfoItemContent>Nguyễn Văn A</InfoItemContent>
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>Username</InfoItemLabel>
                <InfoItemContent>nguyenvana</InfoItemContent>
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>Email</InfoItemLabel>
                <InfoItemContent>a@gmail.com</InfoItemContent>
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>Số điện thoại</InfoItemLabel>
                <InfoItemContent>0123456789</InfoItemContent>
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>Địa chỉ</InfoItemLabel>
                <InfoItemContent>
                  1 Võ Văn Ngân, Linh Chiểu, TP Thủ Đức, TP HCM
                </InfoItemContent>
              </InfoItem>
            </Info>
          </Right>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Profile;
