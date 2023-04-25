import Cookies from "js-cookie";

const Logout = () => {
  Cookies.remove("auth");
  window.location = "http://localhost:3000";
};

export default Logout;
