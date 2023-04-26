import React from 'react'
import styled from 'styled-components'
import { colors } from '../data'
import { DeleteOutline } from '@mui/icons-material';

const Product = styled.div`
  padding: 10px 0px;
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
  width: 100px;
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

const CartItem = () => {
    return (
        <div>
            <Product>
                <ProductDetail>
                    <Image src="https://www.bookgeeks.in/wp-content/uploads/2022/11/The-Art-of-War-by-Sun-Tzu.jpg" />
                    <ProductName>The Art Of War MNBV MNSNA NSAMSN</ProductName>
                    <AmountContainer>
                        <AmountButton>-</AmountButton>
                        <Amount>10</Amount>
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
        </div>
    )
}

export default CartItem
