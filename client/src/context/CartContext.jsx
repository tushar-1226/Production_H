import { createContext, useState } from "react";
import axios from "../api/axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = async (drink) => {
        try {

            // ✅ update database cart
            await axios.post("/cart/add-to-cart", {
                productId: drink._id
            });

            // ✅ keep your existing frontend logic
            setCartItems((prev) => {
                const existingItem = prev.find(
                    (item) => item._id === drink._id
                );

                if (existingItem) {
                    return prev.map((item) =>
                        item._id === drink._id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }

                return [...prev, { ...drink, quantity: 1 }];
            });

        } catch (error) {
            console.log(error);
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