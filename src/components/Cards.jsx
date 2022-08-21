import React, { useState, useEffect } from "react";
import cardsData from "../api/cards";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-4 md:gap-y-0 md:gap-x-4 pb-16">
      {cards.length &&
        cards.map((card) => (
          <div className="flex flex-col items-center p-10 text-center gap-y-3 border-2 border-gray-100 shadow-md rounded-lg">
            <img src={card.image} alt="card" />
            <h6 className="font-semibold text-xl text-primary-brand-color">
              {card.title}
            </h6>
            <p className="text-gray-500">{card.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Cards;
