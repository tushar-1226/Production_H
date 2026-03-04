import React from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import ShopNavbar from "./ShopNavbar";
import DrinkCard from "./DrinkCard";

const SearchResult = ({addToCart}) => {

  const { id } = useParams();

  const [drink, setDrink] = useState(null);

  useEffect(() => {

    const fetchDrink = async () => {
      try {
        const res = await axios.get(`/drink/${id}`);
        setDrink(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDrink();

  }, [id]);
  return (
    <div className="">
      <ShopNavbar />

      <div className="w-full min-h-screen p-10">
        <h1 className="text-2xl font-semibold underline underline-offset-4 mb-4 mt-10 pl-2">
          Search Result
        </h1>


        {drink && (
          <DrinkCard
            drink={drink}
            addToCart={addToCart}
          />
        )}


      </div>
    </div>
  );
};

export default SearchResult;