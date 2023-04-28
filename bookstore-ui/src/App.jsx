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
import AdminDashboard from "./pages/admin/home/Home";
import AdminUsers from "./pages/admin/UserManagement/userList/List";
import AdminProducts from "./pages/admin/ProductManagement/productList/List";
import AdminOrders from "./pages/admin/OrderManagement/orderList/List";
import AdminCategories from "./pages/admin/CategoryManagement/categoryList/List";
import UserOrders from "./pages/UserOrders";
import OrderDetails from "./pages/OrderDetails";

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
        <Route exact path="/admin/dashboard" Component={AdminDashboard} />
        <Route exact path="/admin/users" Component={AdminUsers} />
        <Route exact path="/admin/books" Component={AdminProducts} />
        <Route exact path="/admin/order/all" Component={AdminOrders} />
        <Route exact path="/admin/categories" Component={AdminCategories} />
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
          path="/orders"
          element={
            <UserAuthentication>
              <UserOrders />
            </UserAuthentication>
          }
        />
        <Route
          exact
          path="/orders/:id"
          element={
            <UserAuthentication>
              <OrderDetails />
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
