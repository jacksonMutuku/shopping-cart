import React, { useState } from 'react';

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="card mb-3">
      <img src={product.image} className="card-img-top" alt={"The product"} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">{product.category}</p>
        <p className="card-text">{product.description}</p>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
          <input type="text" value={quantity} className="form-control mx-2" readOnly />
          <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
          <button className="btn btn-primary ms-auto" onClick={() => addToCart(product, quantity)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
