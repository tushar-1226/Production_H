import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const DrinkCard = ({ drink }) => {

  const { addToCart, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const drinkId = drink._id || drink.id;

  const cartItem = cartItems?.find(item => item._id === drinkId);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div
      onClick={() => navigate(`/drink/${drinkId}`)}
      className="relative w-[200px] sm:w-[240px] md:w-[270px] lg:w-[280px] bg-white dark:bg-[#1C1C1E] flex-shrink-0 rounded-2xl shadow-lg p-3 sm:p-4 hover:shadow-2xl transition flex flex-col cursor-pointer"
    >

      <img
        src={drink.image}
        alt={drink.name}
        className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-contain rounded-xl"
      />

      <span className="absolute top-2 left-2 bg-black/60 dark:bg-gray-100/80 text-white dark:text-black text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
        20% off
      </span>

      <div className="mt-4 flex flex-col justify-between flex-grow">

        <div className="flex flex-col">

          <div className="flex justify-between items-center w-full gap-1">
            <h2 className="text-sm sm:text-base md:text-lg dark:text-[#FFFFFF] font-semibold truncate">{drink.name}</h2>

            <span className="bg-gray-800 text-white px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full flex-shrink-0">
              ₹{drink.price}
            </span>
          </div>

          <p className="hidden md:block text-gray-500 dark:text-[#A1A1AA] text-sm mt-2 line-clamp-3">
            {drink.description}
          </p>

        </div>

        <div>

          <div className="flex items-center gap-1.5 mt-1 pt-2 sm:pt-4 flex-wrap">
            <span className="bg-gray-100 dark:bg-gray-100/80 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full flex items-center">
              ⭐ {drink.rating}
            </span>

            <span className="bg-gray-100 dark:bg-gray-100/80 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full flex items-center">
              {drink.isAvailable ? "Available" : "Out of stock"}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(drink);
            }}
            className="w-full mt-3 sm:mt-5 bg-[#385170]/70 dark:bg-[#3B82F6] text-white py-2 sm:py-3 text-xs sm:text-sm cursor-pointer rounded-full font-medium hover:bg-[#385170] dark:hover:bg-[#2563EB] active:bg-[#1D4ED8] transition-all duration-300 hover:scale-105"
          >
            {quantity === 0 ? "Add to Cart" : `In Cart (${quantity})`}
          </button>

        </div>

      </div>

    </div>
  );
};

export default DrinkCard;