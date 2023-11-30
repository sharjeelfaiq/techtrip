import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const CartItem = ({ image, name, price, id }) => {
    const {
        cartItems,
        addCartItems,
        removeCartItems,
        updateCartItems,
    } = useContext(ShopContext);
    return (
        <div className="p-4 flex w-2/4 rounded-xl shadow-2xl">
            <div className="h-[220px] align-bottom">
                <img src={image} alt="product" width={220} />
            </div>
            <div className="ml-5">
                <h1 className="text-3xl font-bold">
                    {name}{" "}
                    {cartItems[id] > 0 ? (
                        <>({cartItems[id]})</>
                    ) : null}
                </h1>
                <h1 className="text-2xl font-semibold">Rs{price}</h1>
                <div className="mt-5">
                    <button
                        className="px-2 bg-slate-100 transition rounded-md border-[1px] border-solid border-black active:bg-slate-200"
                        onClick={() => removeCartItems(id)}
                    >
                        -
                    </button>
                    <input
                        value={cartItems[id]}
                        className="w-10 text-center outline-neutral-500 mx-1 border-[1px] border-solid border-neutral-500"
                        onChange={(e) =>
                            updateCartItems(
                                Number(e.target.value),
                                id
                            )
                        }
                    />
                    <button
                        className="px-2 bg-slate-100 transition rounded-md border-[1px] border-solid border-black active:bg-slate-200"
                        onClick={() => addCartItems(id)}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
