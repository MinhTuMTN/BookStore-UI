import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Cookies from "js-cookie";

const Logout = () => {
  let navigate = useNavigate();
  Cookies.remove("auth");
  //   }, []);

  // return <Navigate replace to="/" />;
  window.location = "http://localhost:3000";
};

export default Logout;
