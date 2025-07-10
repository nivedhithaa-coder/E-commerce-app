import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="bg-white border p-4 rounded-lg shadow-md mb-4 flex items-center justify-between">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-contain ml-4" 
      />
      <div className="flex-grow">
        <h2 className="text-xl font-bold">{item.title}</h2>
        <p className="text-gray-700">${item.price} x {item.quantity}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="bg-gray-300 px-2 py-1 rounded"
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="bg-gray-300 px-2 py-1 rounded"
          >
            +
          </button>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-orange-400 text-white px-4 py-2 mt-2 rounded"
        >
          Remove
        </button>
      </div>
      
    </div>
  );
};

export default CartItem;