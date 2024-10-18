import React from "react";
import { useDispatch } from "react-redux";
import {
  removeToCart,
  increaseQuantity,
  decreaseQuantity,
} from "./../store/cartSlice.js";
import toast from "react-hot-toast";

function CardItem({ item }) {
  const dispatch = useDispatch();
  function handeleRemoveToCart() {
    toast.success("remove to product in cart");
    dispatch(removeToCart(item));
  }

  return (
    <>
      <div
        className="flex items-center bg-white shadow-md rounded-lg p-4 space-x-6 flex-wrap"
      >
        {/* Display product image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-md"
        />

        {/* Display product name and price */}
        <div className="flex-grow">
          <h4 className="text-lg font-semibold">{item.name}</h4>
          <p className="text-gray-600">Price: ${item.price}</p>
        </div>

        {/* Quantity controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => dispatch(decreaseQuantity(item))}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            -
          </button>
          <span className="text-lg">{item.quantity}</span>
          <button
            onClick={() => dispatch(increaseQuantity(item))}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            +
          </button>
        </div>

        {/* Remove item button */}
        <button
          onClick={handeleRemoveToCart}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove
        </button>

        {/* Display total price for this item */}
        <p className="text-lg font-semibold ml-6">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </>
  );
}

export default CardItem;
