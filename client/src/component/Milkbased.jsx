import React, { useState, useEffect, useRef, useContext } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CartContext } from "../context/CartContext";
import Loader from "./Loader";
import axios from "../api/axios";


const Milkbased = () => {

    const handleAddToCart = async (productId) => {
        try {
            await axios.post("/cart/add-to-cart", {
                productId
            });

            alert("Added to cart");

        } catch (error) {
            console.log(error);
            alert("Error adding to cart");
        }
    };

    const { addToCart } = useContext(CartContext);

    const [milkbased, setMilkbased] = useState([]);
    const [loading, setLoading] = useState(true);

    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    useEffect(() => {
        const fetchMilkDrinks = async () => {
            try {
                const res = await axios.get("/drink/milkbased");

                const drinksData = Array.isArray(res.data)
                    ? res.data
                    : res.data.drinks;

                const onlyMilk = drinksData.filter(
                    (drink) => drink.category === "Beverages"
                );

                setMilkbased(onlyMilk);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMilkDrinks();
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

        <div className="flex flex-col flex-wrap gap-8 p-10 ">

            <div className="flex">
                <p className="text-3xl px-2 font-semibold underline underline-offset-4">Milk Based Drinks</p>
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
                    onScroll={checkScrollPosition} className="flex  overflow-x-auto gap-6 scroll-smooth scrollbar-hide">
                    {milkbased.map((drink) => (
                        <div
                            key={drink._id}
                            className="w-[280px] bg-white flex-shrink-0 rounded-3xl shadow-lg p-4 hover:shadow-2xl transition flex flex-col ">

                            <div className="relative">
                                <img
                                    src={drink.image}
                                    alt={drink.name}
                                    className="w-full h-[220px] object-contain rounded-2xl"
                                />

                                <span className="absolute top-1 left-1 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                                    20% off
                                </span>
                            </div>

                            <div className="mt-4 flex flex-col justify-between flex-grow">

                                <div className="flex flex-col">

                                    <div className="flex justify-between items-center w-full">
                                        <h2 className="text-lg font-semibold">
                                            {drink.name}
                                        </h2>

                                        <span className="bg-gray-800 text-white px-3 py-1 text-sm rounded-full">
                                            ₹{drink.price}
                                        </span>
                                    </div>

                                    <p className="hidden md:block text-gray-500 text-sm mt-2 line-clamp-3">
                                        {drink.description}
                                    </p>

                                </div>


                                <div className="">
                                    <div className="flex items-center gap-2 mt-1  pt-4 whitespace-nowrap">
                                        <span className="bg-gray-100 px-3 py-1 text-xs rounded-full flex items-center">
                                            ⭐ {drink.rating}
                                        </span>

                                        <span className="bg-gray-100 px-3 py-1 text-xs rounded-full flex items-center">
                                            {drink.isAvailable ? "Available" : "Out of stock"}
                                        </span>
                                    </div>

                                    <div className="mt-auto">
                                        <button onClick={() => addToCart(drink)} className="w-full mt-5 bg-[#385170]/70 text-white py-3 rounded-full font-medium hover:bg-[#385170] transition-all duration-300 hover:scale-105">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
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
export default Milkbased;