import styled from "styled-components"
import { useState } from "react"

const TabOption = styled.button`
  border: none;
  color: #888888;
  color: ${(props) => (props.disabled ? "white" : "whitegrey")};
  background: ${(props) => (props.disabled ? "linear-gradient(90deg, #e7e6e6 -40%, #dbdada 145%)" : "white")};
  cursor: pointer;
  padding: 25px;
  width: 100%;
  background-color: #fdfdff;
  transition: all 1.5s ease;
  font-size: 20px;
  &:hover {
    color: white;
    background-color: #e8e2e2;
  }
`

const DetailContainer = styled.ul`
  flex: 1;
`

const DetailItem = styled.li``

const TabContainer = styled.div``

const ContentContainer = styled.div``

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`

const Desc = styled.p`
  margin: 20px 0px;
  flex: 1;

`

const TabProductDetail = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    return (
        <div>
            <TabContainer>
                <Tabs>
                    <TabOption id="1" disabled={currentTab === "1"} onClick={(handleTabClick)}>Description</TabOption>
                    <TabOption id="2" disabled={currentTab === "2"} onClick={(handleTabClick)}>Detail</TabOption>
                </Tabs>
                <ContentContainer>

                    <Desc key="1"> {currentTab === "1" && <div>Twenty-Five Hundred years ago, Sun Tzu wrote this classic book of military strategy based on Chinese warfare and military thought. Since that time, all levels of military have used the teaching on Sun Tzu to warfare and civilization have adapted these teachings for use in politics, business and everyday life. The Art of War is a book which should be used to gain advantage of opponents in the boardroom and battlefield alike.</div>}</Desc>

                    <DetailContainer key="2">
                        {currentTab === "2" && <div>
                            <DetailItem>Author: Sun Tzu</DetailItem>
                            <DetailItem>Number of pages: 273 pages</DetailItem>
                            <DetailItem>First published: January 1, 401</DetailItem>
                        </div>}
                    </DetailContainer>

                </ContentContainer>
            </TabContainer>
        </div>
    )
}

export default TabProductDetail
