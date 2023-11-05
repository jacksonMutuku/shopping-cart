

import React, {useEffect, useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import { useLocation } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5', { mode: "cors" })
        .then(res=>res.json())
        .then(data => setProducts(data))
    }, [])

    const addToCart = (product, quantity) => {
        if (quantity > 0) {
          const newItem = { ...product, quantity };
          setCartItems([...cartItems, newItem]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
    };

    return ( 
        <div>
        <h1>Our products</h1>
        <div className='product-page'>
          <div className='main-grid'>
            {products.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
          <div className='cart-section'><Cart cartItems={cartItems} removeFromCart={removeFromCart} /></div>
        </div>
 
      </div>
    )
}
 
export default Shop