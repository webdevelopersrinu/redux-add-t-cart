import React from "react";
import productsData from "../utils/productsData";
import Card from "./Card";

function CardContainer() {
  return (
    <div className="container">
      {productsData.map((iteam) => {
        const { _id, price, oldPrice, image, description, title } = iteam;
        return (
          <Card
            key={_id}
            id={_id}
            price={price}
            oldPrice={oldPrice}
            image={image}
            description={description}
            title={title}
          />
        );
      })}
    </div>
  );
}


export default CardContainer;
