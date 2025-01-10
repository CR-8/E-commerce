import React from "react";
import ProductCard from "./ProductCard";
const ProductSection = ({
  products = [],
  title = "Our Products",
  onAddToCart = (id, quantity) =>
    console.log(`Added product ${id} to cart, quantity: ${quantity}`),
  onBuyNow = (id) => console.log(`Buying product ${id}`),
  className = "",
}) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onBuyNow={onBuyNow}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
