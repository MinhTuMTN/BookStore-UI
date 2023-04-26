import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ChangeProfile from "./pages/ChangeProfile";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import PaymentSuccessful from "./pages/PaymentSuccessful";
import ChangePassword from "./pages/ChangePassword";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard"

const UserAuthentication = ({ children }) => {
  if (!Cookies.get("authToken")) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route
          exact
          path="/profile"
          element={
            <UserAuthentication>
              <Profile />
            </UserAuthentication>
          }
        />
        <Route
          exact
          path="/change-password"
          element={
            <UserAuthentication>
              <ChangePassword />
            </UserAuthentication>
          }
        />
        <Route
          exact
          path="/update-profile"
          element={
            <UserAuthentication>
              <ChangeProfile />
            </UserAuthentication>
          }
        />
        <Route
          exact
          path="/logout"
          element={
            <UserAuthentication>
              <Logout />
            </UserAuthentication>
          }
        />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/books" Component={ProductsPage} />
        <Route exact path="/books/:id" Component={ProductDetail} />
        <Route
          exact
          path="/payment-successful"
          element={
            <UserAuthentication>
              <PaymentSuccessful />
            </UserAuthentication>
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <UserAuthentication>
              <Cart />
            </UserAuthentication>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
