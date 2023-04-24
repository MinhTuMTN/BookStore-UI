import React from "react";
import Navbar from "../components/NavBar";
import { Container, Wrapper } from "./Profile";
import ProfileLeft from "../components/ProfileLeft";
import Footer from "../components/Footer";

const ChangeProfile = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <ProfileLeft index="2" />
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default ChangeProfile;
