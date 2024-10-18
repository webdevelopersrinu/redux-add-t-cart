import React from "react";
import Header from "./components/Header";
import "./hello.css";
import CardContainer from "./components/CardContainer";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
import PlaceOrder from "./components/PlaceOrder";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<CardContainer />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/success-page" element={<SuccessPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
