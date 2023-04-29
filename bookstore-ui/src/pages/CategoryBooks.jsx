import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { endpoint } from "../data";
import PageNavigation from "../components/PageNavigation";
import ProductsList from "../components/ProductsList";

const CategiryBooks = () => {
  const { id } = useParams();
  const query = new URLSearchParams(window.location.search);
  var current = query.get("page");
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState([]);
  useEffect(() => {
    console.log("a");
    fetch(`${endpoint}/user/books/category`, {
      body: {
        categories: [id],
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setBooks(data.books);
        setTitle(data.name);
      })
      .catch((error) => console.error(error));
  });
  return (
    <div>
      <ProductsList books={books} title={title} />
      <PageNavigation current={Number(current)} total={5} urlPattern="/books" />
    </div>
  );
};

export default CategiryBooks;
