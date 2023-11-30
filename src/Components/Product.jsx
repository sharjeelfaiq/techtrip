import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Product = ({ image, name, price, id }) => {
    const { cartItems, addCartItems } = useContext(ShopContext);
    return (
        <div className="text-center mt-10">
            <div className="h-[420px] align-bottom">
                <img src={image} alt="product" width={400} />
            </div>
            <div className="pl-5">
                <h1 className="text-xl font-semibold">{name}</h1>
                <h1 className="text-xl">Rs{price}</h1>
                <button
                    className="mt-5 bg-slate-100 transition px-2 py-1 rounded-md border-[1px] border-solid border-black active:bg-slate-200"
                    onClick={() => addCartItems(id)}
                >
                    Add to cart {cartItems[id] > 0 ? <>({cartItems[id]})</> : null}
                </button>
            </div>
        </div>
    );
};

export default Product;
