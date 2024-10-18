import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import toast from "react-hot-toast";

function Card({ image, id, title, description, oldPrice, price }) {
  const dispatch = useDispatch();
  function handeleAddToCart() {
    toast.success("add to product in cart");
    dispatch(addToCart({ id, image, title, price }));
  }
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-data">
        <div className="title">{title}</div>
        <p className="description">{description}</p>
      </div>
      <div className="price-section">
        <span className="old-price">${oldPrice}</span>
        <span className="new-price">${price}</span>
      </div>
      <div className="add-to-card">
        <button onClick={handeleAddToCart} className="btn">
          Add to card
        </button>
      </div>
    </div>
  );
}

export default Card;
