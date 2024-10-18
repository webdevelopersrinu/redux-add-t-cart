import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";

const SuccessPage = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F3FAF2] min-h-screen flex flex-col justify-center items-center text-center">
      {/* Confetti Animation */}
      {showConfetti && <Confetti width={width} height={height} />}

      {/* Success Message */}
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Order placed successfully!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for your order. We will process it soon!
      </p>

      {/* Continue Shopping Button */}
      <Link
        to={"/"}
        // Redirect to home or any page
        className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-500 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default SuccessPage;
