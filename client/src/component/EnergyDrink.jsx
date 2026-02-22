import React, { useState, useEffect } from "react";

const EnergyDrink = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/drink")
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-wrap gap-8 p-10 bg-gray-100">
      
      {drinks.map((drink) => (
        <div
          key={drink._id}
          className="w-[280px] bg-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition"
        >
          
          {/* Image */}
          <div className="relative">
            <img
              src={drink.image}
              alt={drink.name}
              className="w-full h-[220px] object-contain rounded-2xl"
            />

            {/* Discount badge */}
            <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
              20% off
            </span>
          </div>

          {/* Content */}
          <div className="mt-4">

            {/* Name + Price */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                {drink.name}
              </h2>

              <span className="bg-gray-800 text-white px-3 py-1 text-sm rounded-full">
                ₹{drink.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">
              {drink.description}
            </p>

            {/* Tags */}
            <div className="flex gap-2 mt-3">
              <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
                ⭐ {drink.rating}
              </span>

              <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
                {drink.isAvailable ? "Available" : "Out of stock"}
              </span>
            </div>

            {/* Button */}
            <button className="w-full mt-5 bg-[#5a3e36] text-white py-3 rounded-full font-medium hover:bg-[#4a322c] transition">
              Add to cart
            </button>

          </div>
        </div>
      ))}

    </div>
  );
};

export default EnergyDrink;