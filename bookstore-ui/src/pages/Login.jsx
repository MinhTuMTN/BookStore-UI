import styled from "styled-components";
import { mobile } from "../responsive";
import background from '../assets/dog_background.avif'
import logo from "../assets/icon.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url(${background}) center;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px;


  @import url('https://fonts.googleapis.com/css2?family=Knewave&family=Nunito:wght@400;600;700&display=swap');
  font-family: 'Nunito', sans-serif;
  font-family: 'Knewave', cursive;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-family: Nunito, sans-serif;
  display: block;
  font-size: 30px;
  font-weight: 300;
  line-height: 1.2;
  text-align: center;
`;

const ImgLogo = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 15px;
  color: black;
  line-height: 1.5;
  border: none;
  display: block;
  border-bottom: 2px solid #adadad;
  margin-bottom: 37px;
`;

const Button = styled.button`
  font-size: 15px;
  border: none;
  border-radius: 10px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: teal;
  background: -webkit-linear-gradient(to left, #FFC3A1, #FF6E31);
  background: -o-linear-gradient(to left,#FFC3A1, #FF6E31);
  background: -moz-linear-gradient(to left,#FFC3A1, #FF6E31);
  background: linear-gradient(to left, #FFC3A1, #FF6E31);
  cursor: pointer;
`;

const LoginButon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 13px;
`;

const TextDiv = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const Text = styled.span`
  font-size: 14px;
  color: #7a7676;
  line-height: 1.5;
  padding-right: 5px;
`;
const Link = styled.a`
  font-size: 14px;
  color: #ef5f45;
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Đăng nhập</Title>
        <ImgLogo src={logo}/>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <LoginButon>
            <Button>Đăng nhập</Button>
          </LoginButon>
          <Link>Quên mật khẩu?</Link>
          <TextDiv>
            <Text>Bạn chưa có tài khoản?</Text>
            <Link>Tạo tài khoản</Link>
          </TextDiv>
          
          
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
