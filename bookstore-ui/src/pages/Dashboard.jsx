import React from 'react'
import styled from 'styled-components'


import SideBar from '../components/Sidebar';
import sidebar_menu from '../constants/sidebar-menu';
import SidebarRoutes from '../components/Sidebar/sidebar-routes';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #F0F2F5;
`;

const Dashboard = () => {
  return (
    <div>

      <Container>
        <SideBar menu={sidebar_menu} />
          <Wrapper>
              <SidebarRoutes/>
          </Wrapper>
      </Container>

    </div>
  )
}

export default Dashboard
