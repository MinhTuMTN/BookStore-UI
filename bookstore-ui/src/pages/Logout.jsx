import Cookies from "js-cookie";

const Logout = () => {
  Cookies.remove("authToken");
  window.location = "http://localhost:3000";
};

export default Logout;
