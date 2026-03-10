import React from "react";
import { useNavigate } from "react-router-dom";

const DrinkCard = ({ drink, addToCart }) => {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/drink/${drink._id}`)}
      className="w-[280px] bg-white flex-shrink-0 rounded-3xl shadow-lg p-4 hover:shadow-2xl transition flex flex-col cursor-pointer"
    >

      <img
        src={drink.image}
        alt={drink.name}
        className="w-full h-[220px] object-contain rounded-2xl"
      />

      <span className="absolute top-1 left-1 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
        20% off
      </span>

      <div className="mt-4 flex flex-col justify-between flex-grow">

        <div className="flex flex-col">

          <div className="flex justify-between items-center w-full">
            <h2 className="text-lg font-semibold">{drink.name}</h2>

            <span className="bg-gray-800 text-white px-3 py-1 text-sm rounded-full">
              ₹{drink.price}
            </span>
          </div>

          <p className="hidden md:block text-gray-500 text-sm mt-2 line-clamp-3">
            {drink.description}
          </p>

        </div>

        <div>

          <div className="flex items-center gap-2 mt-1 pt-4 whitespace-nowrap">
            <span className="bg-gray-100 px-3 py-1 text-xs rounded-full flex items-center">
              ⭐ {drink.rating}
            </span>

            <span className="bg-gray-100 px-3 py-1 text-xs rounded-full flex items-center">
              {drink.isAvailable ? "Available" : "Out of stock"}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(drink);
            }}
            className="w-full mt-5 bg-[#385170]/70 text-white py-3 rounded-full font-medium hover:bg-[#385170] transition-all duration-300 hover:scale-105"
          >
            Add to cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default DrinkCard;