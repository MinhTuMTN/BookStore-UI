import React from "react";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import NewestProducts from "../components/NewestProducts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <NewestProducts />
      <Footer />
    </div>
  );
};

export default Home;
