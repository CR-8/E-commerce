import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
    return (
        <div className="container mx-auto py-12 px-4 bg-base-200">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default ProductSection;