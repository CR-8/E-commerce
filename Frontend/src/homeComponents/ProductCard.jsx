import React from "react";

const ProductCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="px-4 pt-4">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">Shoes!</h2>
        <p className="text-base-content">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-between items-center">
          <span className="text-lg font-bold text-secondary">$99.99</span>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;