import styled from "styled-components";
import { mobile } from "../responsive";
import dogBackground from "../assets/dog_background.jpg";
import { colors } from "../data";
import CustomNavLink from "../components/CustomNavLink";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${dogBackground});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 10px;
`;

const Agreement = styled.span`
  font-size: 11pt;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: ${colors.color2};
  color: white;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
`;

const AlreadyAccount = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-size: 12pt;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Tạo tài khoản mới</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Mật khẩu" />
          <Input placeholder="Xác nhận lại mật khẩu" />
          <Agreement>
            Bằng cách tạo tài khoản, bạn đã đồng ý với{" "}
            <b>Chính sách quyền riêng tư</b> của chúng tôi
          </Agreement>
          <Button>Tạo tài khoản</Button>
          <AlreadyAccount>
            Bạn đã có tài khoản?{" "}
            <CustomNavLink to={"/login"}>
              <b>Đăng nhập</b>
            </CustomNavLink>
          </AlreadyAccount>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
