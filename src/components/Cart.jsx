import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CardItem from "./CardItem.jsx";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart); // Get cart items from Redux store
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );
  const navigate = useNavigate();
  function handeleProceedBtn() {
    navigate("/place-order");
  }
  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <CardItem item={item} key={item.id} />
          ))}

          {/* Display total price for all items */}
          <div className="text-right mt-6">
            <h3 className="text-xl font-semibold">
              Total Price: ${totalPrice.toFixed(2)}
            </h3>
          </div>
          <div className=" text-right mt-6">
            <button
              onClick={handeleProceedBtn}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
