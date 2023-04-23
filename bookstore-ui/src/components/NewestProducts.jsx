import styled from "styled-components";
import { colors, endpoint } from "../data";
import ProductItem from "./ProductItem";
import banner from "../assets/banner.jpg";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: space-around;
  text-align: center;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  font-size: 40px;

  width: 100%;
  height: 150px;
  color: ${colors.color1};
`;

const Products = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    fetch(`${endpoint}/user/books`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopularProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Banner>Sách mới nhất</Banner>
      <Container>
        {popularProducts.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
