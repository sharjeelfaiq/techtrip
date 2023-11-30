import { useState, createContext } from "react";
import { PRODUCTS_DATA } from "../Assets/ProductData";

export const ShopContext = createContext(null);

const defaultCartItems = () => {
    let cart = {};
    for (let i = 1; i <= PRODUCTS_DATA.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(defaultCartItems());

    const addCartItems = (pId) => {
        setCartItems((prev) => ({ ...prev, [pId]: prev[pId] + 1 }));
    };

    const removeCartItems = (pId) => {
        setCartItems((prev) => ({ ...prev, [pId]: prev[pId] - 1 }));
    };

    const updateCartItems = (newAmount, pid) => {
        setCartItems((prev) => ({ ...prev, [pid]: newAmount }));
    };

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = PRODUCTS_DATA.find(
                    (product) => product.id === Number(item)
                );
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const contextValue = {
        cartItems,
        addCartItems,
        removeCartItems,
        updateCartItems,
        getTotalAmount,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
