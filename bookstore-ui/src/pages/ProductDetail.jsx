import styled from "styled-components"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import React from 'react';
import TabProductDetail from "../components/TabProductDetail";
import { colors } from "../data";


const Container = styled.div`
    
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`

const ImgContainer = styled.div`
  flex: 1;
  padding: 50px 110px;
  border: 1px solid;
`

const Image = styled.img`
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 75px;
`

const Author = styled.p`
  font-size: 40px;
  padding: 10px 0px;
`

const Price = styled.p`
  font-weight: 200;
  font-size: 30px;
  padding: 10px 0px;
  color: ${colors.color1};
  font-style: italic;
`

const HR = styled.hr``

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 20px 0px;
`

const AmountContainer = styled.div`
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

const AddButton = styled.button`
  padding: 10px;
  border: 2px solid ${colors.color1};
  background-color: white;
  cursor: pointer;
  font-size: 20px;
  &:hover{
    background-color: #ececec86;
  }
`

const ProductDetail = () => {
  return (
    <div>

      <Navbar />
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image src="https://www.bookgeeks.in/wp-content/uploads/2022/11/The-Art-of-War-by-Sun-Tzu.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>The Art of War!</Title>
            <Author>Sun Tzu</Author>
            <HR />
            <Price>100,000 VND</Price>
            <HR />
            <AddContainer>
              <AmountContainer>
                <AmountButton>-</AmountButton>
                <Amount>1</Amount>
                <AmountButton>+</AmountButton>
              </AmountContainer>
              <AddButton>ADD TO CART</AddButton>
            </AddContainer>
            
            <TabProductDetail />
          </InfoContainer>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  )
}

export default ProductDetail
