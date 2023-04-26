import React from "react";
import styled from "styled-components";
import { colors } from "../data";
import { DeleteOutline } from "@mui/icons-material";
import CustomNavLink from "../components/CustomNavLink";
import CartItem from "../components/CartItem";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const TitleCart = styled.h1`
  text-align: center;
  margin-left: 50px;
`;

const Quantity = styled.span`
  font-size: 24px;
  font-weight: 650;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    background-color: ${colors.color2};
    color: white;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;

const Info = styled.div`
  flex: 5;
  border-right: 3px solid gray;
`;

const Products = styled.div`
  padding-right: 10px;
`;



const Total = styled.div`
    flex: 2;
    padding: 20px;
    height: 50vh;
`;

const Payment = styled.img`
  width: 70%;
`;

const TotalTitle = styled.h1`
  font-size: 25px;
`;

const TotalItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "25px"};
`;

const TotalText = styled.span``;

const TotalPrice = styled.span``;

const Cart = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <TitleCart>GIỎ HÀNG CỦA BẠN</TitleCart>
          <Top>
            <CustomNavLink to={"/"}>
              <TopButton>TIẾP TỤC MUA SẮM</TopButton>
            </CustomNavLink>
            <Quantity>3 sản phẩm</Quantity>
            <TopButton type="filled">THANH TOÁN</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Products>
                <CartItem />
              </Products>
            </Info>
            <Total>
                            <TotalTitle>TỔNG ĐƠN HÀNG</TotalTitle>
                            <TotalItem>
                                <TotalText>Tổng tiền các sản phẩm</TotalText>
                                <TotalPrice>300,000 VND</TotalPrice>
                            </TotalItem>
                            <TotalItem>
                                <TotalText>Phí vận chuyển</TotalText>
                                <TotalPrice>5,000 VND</TotalPrice>
                            </TotalItem>
                            <TotalItem type="total">
                                <TotalText>Tổng cộng</TotalText>
                                <TotalPrice>305,000 VND</TotalPrice>
                            </TotalItem>
                            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                        </Total>
          </Bottom>
        </Wrapper>
      </Container>
    </div>
  )
}
export default Cart
