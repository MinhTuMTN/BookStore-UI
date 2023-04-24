import styled from "styled-components"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import React, { useState } from 'react';

const Container = styled.div`
    
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 90%;
  padding: 50px;
  object-fit: cover;

`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px 50px;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 75px;
`

const Author = styled.p`
  font-size: 40px;
`

const Desc = styled.p`
  margin: 20px 0px;
  flex: 1;

`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const HR = styled.hr``


const TabOption = styled.button`
  border: none;
  color: #888888;
  cursor: pointer;
  padding: 25px;
  width: 100%;
  background-color: #fdfdff;
  transition: all 1.5s ease;
  font-size: 20px;
  :hover {
    color: white;
    background-color: #ffffff;
  }
  :disabled {
    background: linear-gradient(90deg, #d3d3d3 -40%, #a09f9f 145%);
    color: white;
  }
`

const DetailContainer = styled.div`
  flex: 1;


`

const DetailItem = styled.p``

const TabContainer = styled.div``
const ContentContainer = styled.div``
const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
`



const ProductDetail = () => {
  const [currentTab, setCurrentTab] = useState('1');

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  }
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

            <Price>100000 VND</Price>
            <TabContainer>
              <Tabs>
                <TabOption id="1" disabled={currentTab === "1"} onClick={(handleTabClick)}>Description</TabOption>
                <TabOption id="2" disabled={currentTab === "2"} onClick={(handleTabClick)}>Detail</TabOption>
              </Tabs>
              <ContentContainer>

                <Desc key="1"> {currentTab === "1" && <div>Twenty-Five Hundred years ago, Sun Tzu wrote this classic book of military strategy based on Chinese warfare and military thought. Since that time, all levels of military have used the teaching on Sun Tzu to warfare and civilization have adapted these teachings for use in politics, business and everyday life. The Art of War is a book which should be used to gain advantage of opponents in the boardroom and battlefield alike.</div>}</Desc>

                <DetailContainer key="2">
                  {currentTab === "2" && <div>
                    <DetailItem>273 pages</DetailItem>
                    <DetailItem>First published: January 1, 401</DetailItem>
                  </div>}
                </DetailContainer>

              </ContentContainer>
            </TabContainer>
          </InfoContainer>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  )
}

export default ProductDetail
