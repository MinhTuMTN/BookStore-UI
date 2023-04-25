import React from "react";
import { Container, InfoItem, InfoItemLabel, Right, Wrapper } from "./Profile";
import ProfileLeft from "../components/ProfileLeft";
import styled from "styled-components";
import Footer from "../components/Footer";
import { colors } from "../data";

const Title = styled.span`
  font-weight: bold;
  font-size: 20pt;
`;

const FormInput = styled.input`
  flex: 5;
  border: 2px solid ${colors.color2};
  border-radius: 10px;
  font-size: 14pt;
  padding: 4px;
`;

const Form = styled.div`
  width: 70%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 102%;
  justify-content: flex-end;
`;

const Button = styled.div`
  display: block;
  padding: 7px;
  background-color: ${colors.color3};
  color: white;
  border-radius: 10px;
`;
const ChangeProfile = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <ProfileLeft index={2} />
          <Right
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <Title>Chỉnh sửa thông tin cá nhân</Title>
            <Form>
              <InfoItem>
                <InfoItemLabel>Họ tên</InfoItemLabel>
                <FormInput placeholder={"Nguyễn Văn A"} />
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>Email</InfoItemLabel>
                <FormInput type="email" placeholder="nguyenvana@gmail.com" />
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>Số điện thoại</InfoItemLabel>
                <FormInput type="tel" placeholder="012345689" />
              </InfoItem>
              <InfoItem>
                <InfoItemLabel>Địa chỉ</InfoItemLabel>
                <FormInput placeholder="1 Võ Văn Ngân, Linh Chiểu, TP Thủ Đức" />
              </InfoItem>
              <ButtonWrapper>
                <Button>Cập nhật thông tin</Button>
              </ButtonWrapper>
            </Form>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ChangeProfile;
