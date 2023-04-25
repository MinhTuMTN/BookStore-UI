import styled from "styled-components";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect, useRef, useState } from "react";
import { mobile } from "../responsive";
import dogBackground from "../assets/dog_background.jpg";
import { colors, endpoint } from "../data";
import CustomNavLink from "../components/CustomNavLink";
import logo from "../assets/icon.png";

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
  padding: 7px;
  font-size: 12pt;
  border-radius: 10px;
`;

const Agreement = styled.span`
  font-size: 11pt;
  margin: 20px 0px;
`;

const Button = styled.div`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: ${colors.color2};
  color: white;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
`;

const AlreadyAccount = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-size: 12pt;
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.5);
`;

const Message = styled.div`
  padding: 5px 0px 0px 0px;
  width: 100%;
  color: #d06262;
  display: flex;
  align-items: center;
  display: none;
`;

const Register = () => {
  const [userName, setUserName] = useState("");
  // const [fullName, setFullName] = useState("");
  // const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const errorMessageRef = useRef();

  const handleCreateAccount = () => {
    if (userName.trim() === "") setErrorMessage("Vui lòng nhập username");
    // else if (fullName.trim() === "") setErrorMessage("Vui lòng nhập họ tên");
    else if (email.trim() === "") setErrorMessage("Vui lòng nhập email");
    // else if (address.trim() === "") setErrorMessage("Vui lòng nhập địa chỉ");
    else if (password.trim() === "") setErrorMessage("Vui lòng nhập mật khẩu");
    else if (confirmPassword.trim() === "")
      setErrorMessage("Vui lòng xác nhận mật khẩu");
    else if (confirmPassword.trim() !== password.trim())
      setErrorMessage("Mật khẩu không khớp");
    else {
      setErrorMessage("");
      const data = {
        username: userName,
        email: email,
        password: password,
        // address: address,
      };

      fetch(`${endpoint}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setErrorMessage(data.message);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  useEffect(() => {
    if (errorMessage != "") {
      errorMessageRef.current.style.display = "flex";

      if (errorMessage.indexOf("successfully") != -1)
        errorMessageRef.current.style.color = "#37cf60";
      else errorMessageRef.current.style.color = "#d06262";
    } else errorMessageRef.current.style.display = "none";
  }, [errorMessage]);

  return (
    <Container>
      <Wrapper>
        <IconWrapper>
          <Icon src={logo} />
        </IconWrapper>

        <Title>Tạo tài khoản mới</Title>
        <Message ref={errorMessageRef}>
          {errorMessage.indexOf("") === -1 ? (
            <ErrorOutlineIcon />
          ) : (
            <CheckCircleOutlineIcon />
          )}
          {` ${errorMessage}`}
        </Message>
        <Form>
          <Input
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* <Input
            placeholder="Họ tên"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          /> */}
          <Input
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <Input
            placeholder="Địa chỉ"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          /> */}
          <Input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Xác nhận lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Agreement>
            Bằng cách tạo tài khoản, bạn đã đồng ý với{" "}
            <b>Chính sách quyền riêng tư</b> của chúng tôi
          </Agreement>
          <Button onClick={handleCreateAccount}>Tạo tài khoản</Button>
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
