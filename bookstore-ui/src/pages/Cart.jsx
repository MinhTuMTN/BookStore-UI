import React from 'react'
import styled from 'styled-components'
import { colors } from '../data'
import CartItem from '../components/CartItem'
import React from "react";
import styled from "styled-components";
import { colors } from "../data";
import { DeleteOutline } from "@mui/icons-material";

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
    flex: 7;
`;

const Products = styled.div``;

const Total = styled.div`
    flex: 3;
    padding: 20px;
    height: 50vh;
const Product = styled.div`
  padding: 40px 0px;
  border: 1px solid #eee;
  border-radius: 50px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  flex: 2;
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const DeleteButton = styled.button`
  height: 40px;
  background-color: white;
  cursor: pointer;
  margin-right: 40px;
  border: none;
  border-radius: 30%;
  &:hover {
    background-color: ${colors.color2};
    color: white;
  }
`;

const Image = styled.img`
  width: 200px;
`;

const ProductName = styled.span`
  font-size: 20px;
  width: 200px;
`;

const Price = styled.p`
  font-size: 20px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-bottom: 10px;
`;

const AmountButton = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 30%;
  border: 1px solid ${colors.color2};
  background-color: white;
  &:hover {
    background-color: ${colors.color2};
    color: white;
  }
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
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
                        <TopButton>TIẾP TỤC MUA SẮM</TopButton>
                        <Quantity>3 sản phẩm</Quantity>
                        <TopButton type='filled'>THANH TOÁN</TopButton>
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
  return (
    <div>
      <Container>
        <Wrapper>
          <TitleCart>GIỎ HÀNG CỦA BẠN</TitleCart>
          <Top>
            <TopButton>TIẾP TỤC MUA SẮM</TopButton>
            <Quantity>3 sản phẩm</Quantity>
            <TopButton type="filled">THANH TOÁN</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Products>
                <Product>
                  <ProductDetail>
                    <Image src="https://www.bookgeeks.in/wp-content/uploads/2022/11/The-Art-of-War-by-Sun-Tzu.jpg" />
                    <ProductName>The Art Of War MNBV MNSNA NSAMSN</ProductName>
                    <AmountContainer>
                      <AmountButton>-</AmountButton>
                      <Amount>1</Amount>
                      <AmountButton>+</AmountButton>
                    </AmountContainer>
                    <Price>100,000 VND</Price>
                  </ProductDetail>
                  <DeleteButton>
                    <DeleteOutline />
                  </DeleteButton>
                </Product>

                <Product>
                  <ProductDetail>
                    <Image src="https://www.bookgeeks.in/wp-content/uploads/2022/11/The-Art-of-War-by-Sun-Tzu.jpg" />
                    <ProductName>The Art Of War MNBV MNSNA NSAMSN</ProductName>
                    <AmountContainer>
                      <AmountButton>-</AmountButton>
                      <Amount>1</Amount>
                      <AmountButton>+</AmountButton>
                    </AmountContainer>
                    <Price>100,000 VND</Price>
                  </ProductDetail>
                  <DeleteButton>
                    <DeleteOutline />
                  </DeleteButton>
                </Product>
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
  );
};

export default Cart;
