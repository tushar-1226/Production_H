import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await axios.get("/cart/get-cart");

                const backendCart = res.data.cart;

                const formattedCart = backendCart.map((item) => ({
                    ...item.productId,
                    quantity: item.quantity
                }));

                setCartItems(formattedCart);

            } catch (error) {
                console.log(error);
            }
        };

        fetchCart();
    }, []);

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

    const updateCart = async (productId, action) => {
        try {
            await axios.put("/cart/update-cart", {
                productId,
                action
            });

            setCartItems((prev) => {

                if (action === "increase") {
                    return prev.map((item) =>
                        item._id === productId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }

                if (action === "decrease") {
                    return prev
                        .map((item) =>
                            item._id === productId
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        )
                        .filter((item) => item.quantity > 0);
                }

                if (action === "remove") {
                    return prev.filter(
                        (item) => item._id !== productId
                    );
                }

                return prev;
            });

        } catch (error) {
            console.log(error);
        }
    };

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};