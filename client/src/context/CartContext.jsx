import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find(
            (item) => item._id === product._id
        );
        if (existingItem) {
            setCartItems((prev) => prev.map((item) => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item ) );
        }
        else {
            setCartItems((prev) => [
                ...prev,
                { ...product, quantity: 1 }
            ]);
        }
    };

    const increaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item._id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                    item._id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id) => {
        setCartItems((prev) =>
            prev.filter((item) => item._id !== id)
        );
    };

    const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};