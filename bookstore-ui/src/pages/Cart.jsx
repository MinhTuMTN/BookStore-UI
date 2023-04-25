import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { colors } from '../data'

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: center;
`

const Info = styled.div`
    flex: 3;
`

const Summary = styled.div`
    flex: 1;
`

const Products = styled.div`
    
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const ProductName = styled.span`
    padding: 0px 70px;
    display: flex;
    align-items: center;
`

const Price = styled.p`
    flex: 1;
    padding: 0px 70px;
    display: flex;
    align-items: center;
`


const AmountContainer = styled.div`
    padding: 0px 70px;
    display: flex;
    align-items: center;
    font-weight: 700;
    justify-content: space-between;
`

const AmountButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 1px solid ${colors.color1};
  background-color: white;
  &:hover{
    background-color: #ececec86;
  }
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Cart = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>YOUR CART</Title>
                    <Top>
                        <TopButton>CONTINUE BUTTON</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag (2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type='filled'>CHECKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Products>
                                <Product>
                                    <ProductDetail>
                                        <Image src="https://www.bookgeeks.in/wp-content/uploads/2022/11/The-Art-of-War-by-Sun-Tzu.jpg" />
                                        <ProductName>The Art Of War</ProductName>

                                        <AmountContainer>
                                            <AmountButton>-</AmountButton>
                                            <Amount>1</Amount>
                                            <AmountButton>+</AmountButton>
                                        </AmountContainer>
                                    </ProductDetail>
                                    <Price>100,000 VND</Price>
                                </Product>
                            </Products>
                        </Info>
                        <Summary>summary</Summary>
                    </Bottom>
                </Wrapper>
            </Container>
            <Footer />
        </div>
    )
}

export default Cart
