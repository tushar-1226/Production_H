import React, { useState, useEffect, useRef, useContext } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CartContext } from "../context/CartContext";
import Loader from "./Loader";
import axios from "../api/axios";
import DrinkCard from "../component/DrinkCard";


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
                const res = await axios.get("/drink?category=milkbased")

                const drinksData = Array.isArray(res.data)
                    ? res.data
                    : res.data.drinks;

                const onlyMilk = drinksData.filter(
                    (drink) => drink.category === "milkbased"
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
                        <DrinkCard
                            key={drink._id}
                            drink={drink}
                            addToCart={handleAddToCart}
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
export default Milkbased;