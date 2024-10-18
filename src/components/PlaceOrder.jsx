import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllCartItems } from "../store/cartSlice";
import toast from "react-hot-toast";

const PlaceOrder = () => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const totalPayment = cartItems.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (address === "") {
      toast.error("Enter Shipping Address");
    } else {
      dispatch(removeAllCartItems());
      navigate("/success-page");
    }
  };

  return (
    <div className="bg-[#F3FAF2] p-6 lg:px-20 xl:px-40 flex flex-col items-center min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Place Your Order</h2>

      {/* User Address Input */}
      <div className="w-full lg:w-2/3 mb-4">
        <label className="block text-lg mb-2 font-medium">
          Shipping Address
        </label>
        <textarea
          className="w-full p-4 border rounded-lg bg-[#E8F9E9] focus:outline-none focus:ring-2 focus:ring-[#B1D8B7]"
          rows="3"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your shipping address..."
          required
        />
      </div>

      {/* Payment Methods */}
      <div className="w-full lg:w-2/3 mb-4">
        <label className="block text-lg mb-2 font-medium">Payment Method</label>
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="credit-card"
              checked={paymentMethod === "credit-card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Credit Card
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="debit-card"
              checked={paymentMethod === "debit-card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Debit Card
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            PayPal
          </label>
        </div>
      </div>

      {/* Total Payment */}
      <div className="w-full lg:w-2/3 mb-4">
        <label className="block text-lg mb-2 font-medium">Total Payment</label>
        <div className="text-xl font-bold bg-[#E8F9E9] py-4 px-6 rounded-lg">
          $ {totalPayment}
        </div>
      </div>

      {/* Place Order Button */}
      <div className="w-full lg:w-2/3 mt-6">
        <button
          onClick={handlePlaceOrder}
          className="w-full px-5 bg-green-600 text-white py-4 rounded-lg hover:bg-green-500 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
