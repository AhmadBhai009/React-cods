import React from "react";

const Cart = ({ msg }) => {
  return (
    <div className="cart">
      <img src="images.jpeg" alt="img" />
      <div className="Summer">
        <p> name</p>
        <p> price</p>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default Cart;
