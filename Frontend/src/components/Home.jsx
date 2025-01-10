import React from "react";
import Navbar from "../homeComponents/Navbar";
import ProductSection from "../homeComponents/ProductSection";
import Footer from "../homeComponents/Footer";
function Home() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 99.99,
      description: "A brief description of the product goes here",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Product 2",
      price: 149.99,
      description: "Another great product description",
      rating: 4.8,
    },
    // Add more products as needed
  ];
  return (
    <div>
      <Navbar />
      <ProductSection products={products} />
      <Footer />
    </div>
  );
}

export default Home;
