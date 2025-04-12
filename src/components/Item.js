import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart]=useState(false)
  function addToCart(){
    setCart((add) => !add)
  }
  const cartStock = cart ? "in-cart" : ""
  const buttonChecker = cart ? "remove" : "add"
  const buttonText = cart ? "Remove From Cart" : "Add to Cart"
  return (
    <li className={cartStock}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonChecker}   onClick= {addToCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
