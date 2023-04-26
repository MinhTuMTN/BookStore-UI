import React from "react";
import { Container, InfoItem, InfoItemLabel, Right, Wrapper } from "./Profile";
import ProfileLeft from "../components/ProfileLeft";
import { ButtonWrapper, Button, Form, FormInput, Title } from "./ChangeProfile";

const UserOrders = () => {
  return (
    <Container>
      <Wrapper>
        <ProfileLeft index={3} />
        <Right
          style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
        >
          <Title>Đổi mật khẩu</Title>
          <Form>
            <InfoItem>
              <InfoItemLabel>Mật khẩu cũ</InfoItemLabel>
              <FormInput type="password" placeholder={"Mật khẩu cũ"} />
            </InfoItem>
            <InfoItem>
              <InfoItemLabel>Mật khẩu mới</InfoItemLabel>
              <FormInput type="password" placeholder="Mật khẩu mới" />
            </InfoItem>
            <InfoItem>
              <InfoItemLabel>Nhập lại mật khẩu</InfoItemLabel>
              <FormInput type="password" placeholder="Nhập lại mật khẩu" />
            </InfoItem>
            <ButtonWrapper>
              <Button>Đổi mật khẩu</Button>
            </ButtonWrapper>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default UserOrders;
