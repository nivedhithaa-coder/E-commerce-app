import React, { useEffect, useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Navbar from '../components/Navbar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isInCart={isInCart(product.id)}
          />
        ))}
      </div>
      <Link to="/cart" className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
        Cart ({cart.length})
      </Link>
    </div>
    </div>
    
  );
};

export default Home;