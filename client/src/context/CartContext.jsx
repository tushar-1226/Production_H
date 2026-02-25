import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems((prev) => [...prev, product]);
    };
    const removeFromCart = (id) => {
        setCartItems((prev) =>
            prev.filter((item) => item._id !== id)
        );
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};