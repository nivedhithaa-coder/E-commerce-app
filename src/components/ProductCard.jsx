import React from 'react';

const ProductCard = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col h-full">
      <div className="flex-grow">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4" 
        />
        <h2 className="text-xl font-bold mb-2">{product.title}</h2> 
        <p className="text-gray-700 mb-2">{product.description}</p> 
        <p className="text-lg font-semibold mb-4">${product.price}</p> 
      </div>
      {isInCart ? (
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-red-500 text-white px-4 py-2 rounded w-full"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="bg-orange-400 text-white px-4 py-2 rounded w-full"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;