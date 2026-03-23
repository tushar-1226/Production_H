import React, { useContext, useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {

  const { cartItems, updateCart, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");

  const fees = 12;

  const subtotal = useMemo(() => {
    return cartItems.reduce((s, item) => s + Number(item.price) * Number(item.quantity), 0);
  }, [cartItems]);

  const total = Math.max(0, subtotal - discount) + fees;

  const applyPromo = () => {
    const code = promo.trim().toUpperCase();
    if (!code) {
      setPromoMessage("Enter a promo code");
      return;
    }

    if (code === "SAVE50") {
      setDiscount(50);
      setPromoMessage("Applied SAVE50 — ₹50 off");
    } else if (code === "OFF10") {
      const d = Math.round(subtotal * 0.1);
      setDiscount(d);
      setPromoMessage(`Applied OFF10 — ₹${d} off`);
    } else {
      setDiscount(0);
      setPromoMessage("Invalid code");
    }
  };

  return (
    <div className="h-full dark:bg-[#0A0A0B] dark:text-white bg-transparent">

      <div className="relative flex items-center justify-center w-full p-6 ">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className='absolute left-6 h-10 w-10 p-2 rounded-full m-7 cursor-pointer bg-gray-100 text-gray-900 shadow-lg'
        />
        <div className="text-center">
          <h1 className='text-4xl font-extrabold bg-clip-text text-transparent text-black dark:text-white'>Your Cart</h1>
          <p className='text-sm text-black dark:text-white'>Review items, apply promo codes, and place order</p>
        </div>
      </div>


      <div className="flex items-start justify-center gap-6 px-6 pb-16">

        <div className="w-full max-w-3xl">

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 rounded-xl shadow-lg">
              <div className="text-6xl">🛒</div>
              <h2 className="text-2xl font-semibold mt-4">Your cart is empty</h2>
              <p className="text-gray-500 mt-2">Looks like you haven't added anything yet.</p>
              <div className="mt-6">
                <button onClick={() => navigate('/shop')} className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg font-semibold shadow-md hover:-translate-y-1 transition-transform">Explore Drinks</button>
              </div>
            </div>
          ) : (

            cartItems.map((item, index) => (
              <div key={item._id || index} className="bg-white rounded-xl shadow p-4 mb-4 flex gap-4 items-center">

                <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain rounded-md" />
                </div>

                <div className='flex-1'>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className='text-lg font-semibold text-gray-900'>{item.name}</p>
                      <p className='text-sm text-gray-500 mt-1'>{item.description}</p>
                    </div>
                    <div className="text-right">
                      <p className='text-lg font-semibold'>₹{item.price}</p>
                      <p className='text-sm text-gray-400'>each</p>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center">
                    <div className="inline-flex items-center gap-2 bg-gray-100 p-1.5 rounded-lg">
                      <button aria-label="decrease" onClick={() => updateCart(item._id, "decrease")} className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 font-bold">-</button>
                      <div className="min-w-[30px] text-center font-medium">{item.quantity}</div>
                      <button aria-label="increase" onClick={() => updateCart(item._id, "increase")} className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 font-bold">+</button>
                    </div>

                    <div className="flex gap-3">
                      <button onClick={() => updateCart(item._id, "remove")} className='bg-transparent border border-gray-200 px-3 py-2 rounded-md text-gray-700'>Remove</button>
                      <button className='bg-transparent border border-gray-200 px-3 py-2 rounded-md text-gray-700'>Save for later</button>
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-gray-700">Item total: <span className="font-semibold">₹{Number(item.price) * Number(item.quantity)}</span></div>
                </div>

              </div>
            ))
          )}

        </div>

        {cartItems.length === 0 ? null : (
          <aside className="w-full max-w-md sticky top-28 bg-white shadow-lg rounded-lg p-6">

            <div className="flex justify-between items-center mb-3">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-semibold">₹{subtotal}</p>
            </div>

            <div className="flex justify-between items-center mb-3">
              <p className="text-gray-600">Platform fees</p>
              <p className="font-semibold">₹{fees}</p>
            </div>

            <div className="mt-4">
              <label className="text-sm text-gray-600">Promo code</label>
              <div className="mt-2 flex gap-2">
                <input value={promo} onChange={(e) => setPromo(e.target.value)} placeholder="Enter code (SAVE50 or OFF10)" className="flex-1 px-3 py-2 rounded-md border border-gray-200" />
                <button onClick={applyPromo} className="px-3 py-2 bg-gray-900 text-white rounded-md">Apply</button>
              </div>
              {promoMessage && <p className="text-xs mt-2 text-gray-600">{promoMessage}</p>}
            </div>

            <div className="flex justify-between items-center mt-4 pt-3 border-t">
              <p className="font-semibold text-lg">Total</p>
              <p className="font-semibold text-lg">₹{total}</p>
            </div>

            <div className="mt-5">
              <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-md">Place Order</button>
            </div>

            <div className="mt-4 text-xs text-gray-500">Secure payments • Easy returns • 100% authentic</div>

          </aside>
        )}

      </div>

    </div>
  );
};

export default Cart;