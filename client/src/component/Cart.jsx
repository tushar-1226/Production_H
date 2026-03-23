import React, { useContext, useMemo, useState } from "react";
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag, CreditCard, ShieldCheck, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { motion, AnimatePresence } from "motion/react";

const Cart = () => {
  const { cartItems, updateCart } = useContext(CartContext);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0A0A0B] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      
      {/* Header section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <motion.button 
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors w-fit"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium">Continue Shopping</span>
            </motion.button>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Review your Cart
            </h1>
            <p className="text-slate-500 dark:text-slate-400">You have {cartItems.length} items in your cart.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="popLayout">
              {cartItems.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-12 flex flex-col items-center text-center shadow-sm"
                >
                  <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={40} className="text-slate-400 dark:text-slate-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Your cart feels lonely</h2>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm">
                    Looks like you haven't added any drinks yet. Discover our premium selection and find your favorite.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/shop')}
                    className="px-8 py-3 bg-black dark:bg-[#00FFD1] text-white dark:text-black rounded-full font-bold shadow-lg shadow-black/10 dark:shadow-cyan-500/20 transition-all"
                  >
                    Start Exploring
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  {cartItems.map((item) => (
                    <motion.div
                      key={item._id}
                      variants={itemVariants}
                      layout
                      className="group relative bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row gap-6 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-cyan-500/5 transition-all duration-500"
                    >
                      {/* Product Image */}
                      <div className="w-full sm:w-32 h-32 bg-slate-50 dark:bg-[#111113] rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0 border border-slate-100 dark:border-white/5">
                        <motion.img 
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain p-2" 
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h3 className="text-xl font-bold dark:text-white group-hover:text-orange-500 dark:group-hover:text-[#00FFD1] transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                              {item.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold">₹{item.price}</p>
                            <p className="text-xs text-slate-400 font-medium">per unit</p>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                          {/* Quantity Selector */}
                          <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#111113] p-1 rounded-2xl border border-slate-200 dark:border-white/10">
                            <motion.button 
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateCart(item._id, "decrease")}
                              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300"
                            >
                              <Minus size={16} strokeWidth={2.5} />
                            </motion.button>
                            <span className="w-10 text-center font-bold text-lg">{item.quantity}</span>
                            <motion.button 
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateCart(item._id, "increase")}
                              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300"
                            >
                              <Plus size={16} strokeWidth={2.5} />
                            </motion.button>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-3">
                            <button className="text-sm font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors px-3 py-2">
                              Save for later
                            </button>
                            <motion.button 
                              whileHover={{ scale: 1.05, backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => updateCart(item._id, "remove")}
                              className="p-2.5 text-red-500 bg-red-50 dark:bg-red-500/10 rounded-xl transition-all"
                            >
                              <Trash2 size={18} />
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      {/* Subtotal Pill */}
                      <div className="absolute top-4 right-4 sm:top-auto sm:bottom-4 px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:hidden">
                        Total: ₹{Number(item.price) * Number(item.quantity)}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Sidebar - Summary */}
          {cartItems.length > 0 && (
            <motion.aside 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-4 sticky top-28"
            >
              <div className="bg-white dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 shadow-2xl shadow-black/5 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                      <span>Subtotal</span>
                      <span className="font-semibold text-slate-900 dark:text-white">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                      <span>Platform fees</span>
                      <span className="font-semibold text-slate-900 dark:text-white">₹{fees}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between items-center text-green-500">
                        <span>Discount</span>
                        <span className="font-semibold">-₹{discount}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Promo Code */}
                <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                  <p className="text-sm font-bold mb-3 uppercase tracking-wider text-slate-400">Promo Code</p>
                  <div className="flex gap-2 p-1.5 bg-slate-50 dark:bg-[#111113] rounded-2xl border border-slate-200 dark:border-white/10">
                    <input 
                      value={promo} 
                      onChange={(e) => setPromo(e.target.value)} 
                      placeholder="SAVE50 or OFF10" 
                      className="flex-1 bg-transparent px-3 py-2 outline-none text-sm placeholder:text-slate-500"
                    />
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={applyPromo}
                      className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold transition-all"
                    >
                      Apply
                    </motion.button>
                  </div>
                  {promoMessage && (
                    <p className={`text-xs mt-3 ml-1 font-medium ${promoMessage.includes('Invalid') ? 'text-red-500' : 'text-green-500'}`}>
                      {promoMessage}
                    </p>
                  )}
                </div>

                {/* Total */}
                <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Total Amount</p>
                      <p className="text-base text-slate-400 line-through decoration-red-500/50">
                        {discount > 0 ? `₹${subtotal + fees}` : ""}
                      </p>
                    </div>
                    <p className="text-4xl font-extrabold tracking-tighter">₹{total}</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01, translateY: -2 }}
                    whileTap={{ scale: 0.99 }}
                    className="group w-full relative h-14 bg-black dark:bg-[#00FFD1] text-white dark:text-black rounded-2xl font-bold flex items-center justify-center gap-3 overflow-hidden shadow-xl shadow-black/10 dark:shadow-cyan-500/20"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Place Order
                      <CreditCard size={18} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-10 dark:from-white dark:to-cyan-200 transition-opacity" />
                  </motion.button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <ShieldCheck size={14} className="text-green-500" />
                    Secure Pay
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <RefreshCw size={14} className="text-blue-500" />
                    Easy Return
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
