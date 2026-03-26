import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Check } from "lucide-react";

const DrinkCard = ({ drink }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const drinkId = drink._id || drink.id;
  const cartItem = cartItems?.find(item => item._id === drinkId);
  const quantity = cartItem ? cartItem.quantity : 0;
  const inCart = quantity > 0;

  return (
    <div 
        className="group relative flex-shrink-0 cursor-pointer flex flex-col
        w-[190px] sm:w-[230px] md:w-[260px] lg:w-[275px]
        rounded-2xl overflow-hidden
        bg-white dark:bg-gradient-to-b dark:from-[#1E1E2E] dark:to-[#16161F]
        border border-gray-100 dark:border-white/[0.07]
        shadow-md hover:shadow-xl dark:shadow-black/40
        transition-all duration-300 hover:-translate-y-1
      "
    >
      {/* Image area */}
      <div className="relative w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#252535] dark:to-[#1a1a28] overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-[140px] sm:h-[170px] md:h-[195px] object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount badge */}
        <span className="absolute top-2 left-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
          20% OFF
        </span>

      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-3 sm:p-4 gap-2">

        {/* Name + Price */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-sm sm:text-[15px] font-bold text-gray-900 dark:text-white leading-snug line-clamp-2 flex-1">
            {drink.name}
          </h2>
          <span className="flex-shrink-0 text-xs sm:text-sm font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-400/10 px-2 py-0.5 rounded-lg border border-teal-100 dark:border-teal-400/20">
            ₹{drink.price}
          </span>
        </div>

        {/* Rating + Status pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-amber-50 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-400/20 px-2 py-0.5 text-[10px] sm:text-xs rounded-full font-medium">
            ⭐ {drink.rating}
          </span>
          <span className={`inline-flex items-center text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-medium border
            ${drink.isAvailable
              ? 'bg-emerald-50 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-400/20'
              : 'bg-red-50 dark:bg-red-400/10 text-red-500 dark:text-red-400 border-red-100 dark:border-red-400/20'
            }`}>
            {drink.isAvailable ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Add to Cart button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const token = localStorage.getItem("token");
            if (!token) {
              navigate("/auth");
              return;
            }
            addToCart(drink);
          }}
          className={`
            w-full mt-1 flex items-center justify-center gap-2
            py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl
            transition-all duration-300 cursor-pointer
            ${inCart
              ? 'bg-emerald-500 dark:bg-emerald-500 text-white hover:bg-emerald-600 dark:hover:bg-emerald-600'
              : 'bg-amber-600 dark:from-indigo-500 dark:to-teal-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-teal-500/25 dark:hover:shadow-teal-400/20'
            }
          `}
        >
          {inCart
            ? <><Check size={14} /> In Cart ({quantity})</>
            : <><ShoppingCart size={14} /> Add to Cart</>
          }
        </button>

      </div>
    </div>
  );
};

export default DrinkCard;