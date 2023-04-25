import { Routes, Route } from "react-router-dom";

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

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/profile" Component={Profile} />
        <Route exact path="/update-profile" Component={ChangeProfile} />
        <Route exact path="/logout" Component={Logout} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/books" Component={ProductsPage} />
        <Route exact path="/books/:id" Component={ProductDetail} />
        <Route exact path="/payment-successful" Component={PaymentSuccessful} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
