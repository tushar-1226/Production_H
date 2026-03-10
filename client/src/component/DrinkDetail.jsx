import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { CartContext } from "../context/CartContext";
import Loader from "./Loader";

const DrinkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrink = async () => {
      try {
        const res = await axios.get(`/drink/${id}`);
        setDrink(res.data);
      } catch (err) {
        console.error(err);
        if (err.response) {
          setDrink(null);
          setError(`Server responded ${err.response.status}: ${JSON.stringify(err.response.data)}`);
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDrink();
  }, [id]);

  if (loading) return <Loader />;

  if (!drink) return <div className="p-8">{error ? `Error: ${error}` : 'Drink not found'}</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="mb-4 text-sm text-blue-600">← Back</button>

      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl p-6 shadow-md">
        <div className="md:w-1/2 flex items-center justify-center">
          <img src={drink.image} alt={drink.name} className="w-full max-h-[420px] object-contain" />
        </div>

        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-2xl font-semibold mb-2">{drink.name}</h1>
          <p className="text-gray-600 mb-4">{drink.description}</p>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold">₹{drink.price}</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">⭐ {drink.rating}</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">{drink.isAvailable ? 'Available' : 'Out of stock'}</span>
          </div>

          <div className="mt-auto">
            <button onClick={() => addToCart(drink)} className="bg-[#385170] text-white px-6 py-3 rounded-full">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetail;
