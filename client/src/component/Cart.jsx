import React, { useContext } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>

      {/* Header */}
      <div className='relative flex items-center justify-center w-full p-5'>
        <ArrowLeft
          onClick={() => navigate(-1)}
          className='absolute h-10 w-10 p-2 left-5 bg-gray-300 rounded-full m-7 cursor-pointer'
        />
        <p className='text-4xl font-semibold'>Your Cart</p>
      </div>


      {/* Cart Items */}
      <div className="flex flex-col items-center">

        {cartItems.length === 0 ? (
          <p className="text-xl mt-10">Cart is Empty</p>
        ) : (

          cartItems.map((item, index) => (

            <div
              key={index}
              className="mx-12 my-6 flex w-full max-w-4xl bg-gray-300 rounded-xl shadow-md p-4 md:p-6 gap-4"
            >

              {/* Image */}
              <div className="h-40 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className='flex flex-col flex-1'>

                <p className='text-xl font-semibold'>
                  {item.name}
                </p>

                <p className='font-medium text-gray-700'>
                  {item.description}
                </p>

                <p className='mt-2 font-semibold'>
                  ₹{item.price}
                </p>

                {/* Quantity UI (static for now) */}
                <div className="flex items-center gap-3 mt-2">
                  <button className="px-3 py-1 bg-gray-200 rounded">-</button>
                  <span className="font-medium">1</span>
                  <button className="px-3 py-1 bg-gray-200 rounded">+</button>
                </div>

                {/* Buttons */}
                <div className='flex gap-6 mt-4'>
                  <button className='bg-gray-400 p-2 rounded-xl'>
                    Remove
                  </button>

                  <button className='bg-gray-400 p-2 rounded-xl'>
                    Buy this Now
                  </button>
                </div>

              </div>
            </div>

          ))
        )}

      </div>

    </div>
  );
};

export default Cart;