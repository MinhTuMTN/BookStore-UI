import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { colors } from "../data";
import iconCategory from "../assets/icon_category.png";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.color2Light};
  position: relative;
  cursor: pointer;
  border-radius: 20px;
`;

const Image = styled.img`
  height: 60%;
  border-radius: 20px;

  z-index: 2;
`;

const ProductName = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 15pt;
  text-align: center;
  color: ${colors.color2};
  max-lines: 2;
`;

const CartButton = styled.div`
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  border-radius: 20px;
  margin: 5px 0px;

  &:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
`;
const ProductItem = ({ item }) => {
  return (
    <Container>
      <Image src={iconCategory} />
      <ProductName>{item.name}</ProductName>
      <CartButton>Thêm vào giỏ hàng</CartButton>
    </Container>
  );
};

export default ProductItem;
