import React, { useContext } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {

  const { cartItems, updateCart, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>

      <div className='relative flex items-center justify-center w-full p-5'>
        <ArrowLeft
          onClick={() => navigate(-1)}
          className='absolute h-10 w-10 p-2 left-5 bg-gray-300 rounded-full m-7 cursor-pointer'
        />
        <p className='text-4xl font-semibold'>Your Cart</p>
      </div>


      <div className="flex items-start justify-center gap-5">

        <div className="flex flex-col items-center">

          {cartItems.length === 0 ? (
            <p className="text-xl mt-10">Cart is Empty</p>
          ) : (

            cartItems.map((item, index) => (

              <div
                key={index}
                className="mx-12 my-3 flex w-full bg-white rounded-xl shadow-md md:p-6 gap-4"
              >


                <div className="h-40 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>


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

                  <div className="flex items-center gap-3 mt-2">
                    
                    <button onClick={() => updateCart(item._id, "increase")} className="px-3 py-1 bg-gray-200 rounded">+</button>
                    <span className="font-medium">{item.quantity}</span>
                    <button onClick={() => updateCart(item._id, "decrease")} className="px-3 py-1 bg-gray-200 rounded">-</button>
                    
                  </div>

                  <div className='flex gap-6 mt-4'>
                    <button onClick={() => updateCart(item._id, "remove")} className='bg-gray-300 p-2 rounded-xl'>
                      Remove
                    </button>

                    <button className='bg-gray-300 p-2 rounded-xl'>
                      Buy this Now
                    </button>
                  </div>

                </div>
              </div>

            ))
          )}

        </div>
        {cartItems.length === 0 ? (" ") : (
          <div className="w-full max-w-md sticky top-20 bg-white shadow-md rounded-lg p-5 mt-3">

            {/* MRP */}
            <div className="flex justify-between py-3 border-b">
              <p className="text-gray-600">MRP</p>
              <p className="font-medium">₹ {totalAmount}</p>
            </div>

            {/* Fees */}
            <div className="flex justify-between py-3 border-b cursor-pointer">
              <p className="text-gray-600 flex items-center gap-1">
                Platform fees
              </p>
              <p className="font-medium">₹12</p>
            </div>

            {/* Discounts */}
            <div className="flex justify-between py-3 border-b cursor-pointer">
              <p className="text-gray-600 flex items-center gap-1">
                Discounts

              </p>
              <p className="text-green-600 font-medium">0</p>
            </div>

            {/* Total */}
            <div className="flex justify-between py-4">
              <p className="font-semibold text-lg">Total Amount</p>
              <p className="font-semibold text-lg">₹ {totalAmount + 12} </p>
            </div>

            {/* Savings Box */}
            <div className="bg-green-100 text-green-700 rounded-md p-3 text-sm font-medium">
              ✅ You'll save ₹0 on this order!
            </div>

            {/* Secure Message */}
            <div className="flex items-center gap-3 mt-4 text-gray-600 text-sm">

              <p>
                Safe and secure payments. Easy returns.
                100% Authentic products.
              </p>
            </div>

            {/* Bottom Price + Button */}
            <div className="flex justify-between items-center mt-5 pt-4 border-t">
              <div>
                <p className="text-gray-400 line-through text-sm">
                  
                </p>
                <p className="text-xl font-semibold">
                  ₹{totalAmount + 12}
                </p>
              </div>

              <button className="bg-yellow-400 hover:bg-yellow-500 
                           px-6 py-3 rounded-md 
                           font-semibold transition">
                Place Order
              </button>
            </div>

          </div>
        )}
      
      </div>


    </div>
  );
};

export default Cart;