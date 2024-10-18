import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cardItems = useSelector((state) => state.cart);
  const totalQuantity = cardItems.reduce((acc, item) => {
    return acc + (item?.quantity || 0);
  }, 0);
  return (
    <header className="bg-[#F3FAF2] p-4 shadow-lg fixed top-0 left-0 w-full">
      <div className=" mx-auto flex justify-between items-center ">
        <div className="text-[#29A060] text-2xl font-bold">
          <Link to="/">Srinu Store</Link>
        </div>
        <nav className=" md:flex space-x-6 text-white">
          <div className="flex items-center justify-center relative">
            <Link
              to="/cart"
              className="hover:text-[#E8F9E9] hover:bg-[#299e60] text-[#299E60] bg-[#D3EBC0] px-3 py-2 rounded-full font-bold"
            >
              Cart
            </Link>
            {totalQuantity > 0 && (
              <span className=" absolute left-10 bottom-5 hover:text-[#E8F9E9] hover:bg-[#299e60] text-[#299E60] bg-[#D3EBC0] px-1 py-1 rounded-full font-bold border-white">
                {totalQuantity}
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
