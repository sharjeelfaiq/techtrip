import React, { useContext } from "react";
import { PRODUCTS_DATA } from "../Assets/ProductData";
import { ShopContext } from "../Context/ShopContext";
import CartItem from "../Components/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItems, getTotalAmount } = useContext(ShopContext);
    let totalAmount = getTotalAmount();
    const navigate = useNavigate();
    let itemsCountArr = Object.values(cartItems);
    let totalItemsCount = 0;
    for (let i = 0; i < itemsCountArr.length; i++) {
        totalItemsCount += itemsCountArr[i];
    }
    return (
        <>
            <div className="mx-5 my-10 px-5">
                <h1 className="text-6xl font-semibold text-center my-16">
                    Your Cart Items
                </h1>
                <div className="flex flex-col gap-10 justify-center items-center">
                    {totalItemsCount > 0 ? <>{PRODUCTS_DATA.map((product, index) => {
                        if (cartItems[product.id] !== 0) {
                            return (
                                <CartItem
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    id={product.id}
                                    key={index}
                                />
                            );
                        }
                    })}
                    <h1 className="text-3xl font-bold">
                        Subtotal: Rs{totalAmount}
                    </h1></>: <h1 className="text-2xl font-semibold text-center my-16">
                    Your Cart Is Hungry...
                </h1>}
                    <button
                        className="bg-black text-white transition duration-200 px-2 py-1 rounded-md border-[1px] border-solid border-black active:scale-95 font-medium"
                        onClick={() => navigate("/")}
                    >
                        {totalItemsCount > 0 ? "Continue Shopping" : "Start Shopping"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
