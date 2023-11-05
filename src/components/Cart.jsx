import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Shopping Cart</h2>
      {cartItems && cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems && cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.title} - Quantity: {item.quantity}</span>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
