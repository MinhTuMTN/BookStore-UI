import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import ProfileLeft from "../components/ProfileLeft";
import { Container, Wrapper } from "./Profile";

const ChangePassword = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <ProfileLeft index="1" />
        </Wrapper>
      </Container>
      <Footer />
    </div>
  )
}

export default ChangePassword
