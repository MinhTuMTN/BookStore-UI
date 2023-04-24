import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ChangeProfile from "./pages/ChangeProfile";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/profile" Component={Profile} />
        <Route exact path="/update-profile" Component={ChangeProfile} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
