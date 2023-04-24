import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ChangeProfile from "./pages/ChangeProfile";
import Logout from "./pages/Logout";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/profile" Component={Profile} />
        <Route exact path="/update-profile" Component={ChangeProfile} />
        <Route exact path="/logout" Component={Logout} render />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
