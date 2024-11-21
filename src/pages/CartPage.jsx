import React from "react";
import Cart from "../components/Cart";

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Carrito de Compras</h1>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
