import React, { useState, useEffect, useRef, useContext } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CartContext } from "../context/CartContext";
import Loader from "./Loader";
import axios from "../api/axios";
import DrinkCard from "../component/DrinkCard";

const Trending = () => {

  const { addToCart, cartItems } = useContext(CartContext);

  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const res = await axios.get("/drink");

        const drinksData = Array.isArray(res.data)
          ? res.data
          : res.data.drinks;

        const filteredTrending = drinksData.filter(
          (drink) => drink.isTrending === true
        );
        setTrending(filteredTrending);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrinks();
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = 300;
    let move;

    if (direction === "right") {
      move = scrollAmount;
    } else {
      move = -scrollAmount;
    }
    scrollRef.current.scrollBy({
      left: move,
      behavior: "smooth",
    });
  }


  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;


      setShowLeftArrow(scrollLeft > 0);


      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, [])


  if (loading) {
    return <Loader />;
  }
  return (

    <div className="flex flex-col flex-wrap gap-5 sm:gap-8 px-4 sm:px-6 md:px-10 py-6 sm:py-8">

      <div className="flex">
        <p className="text-xl sm:text-2xl md:text-3xl dark:text-white px-2 font-semibold underline underline-offset-4">Trending Drinks</p>
      </div>
      <div className="relative w-full border border-gray-400 rounded-2xl p-5 overflow-hidden">
        {showLeftArrow && (
          <ChevronLeft
            size={40}
            onClick={() => handleScroll("left")}
            className='absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-gray-300 rounded-full p-1 cursor-pointer hover:bg-gray-400 transition-all'
          />
        )}
        <div ref={scrollRef}
          onScroll={checkScrollPosition} className="flex overflow-x-auto gap-3 sm:gap-5 scroll-smooth scrollbar-hide">

          {trending.map((drink) => (
            <DrinkCard
              key={drink._id}
              drink={drink}
              addToCart={addToCart}
              cartItems={cartItems}
            />
          ))}

        </div>
        {showRightArrow && (
          <ChevronRight
            onClick={() => handleScroll("right")}
            size={40}
            className='absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-gray-300 rounded-full p-1 cursor-pointer hover:bg-gray-400 transition-all'
          />
        )}
      </div>

    </div>

  );

}
export default Trending;