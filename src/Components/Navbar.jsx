import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { Badge } from "antd";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
    const { cartItems } = useContext(ShopContext);
    let itemsCountArr = Object.values(cartItems);
    let totalItemsCount = 0;
    for (let i = 0; i < itemsCountArr.length; i++) {
        totalItemsCount += itemsCountArr[i];
    }
    return (
        <div className="h-16 bg-black flex justify-between items-center p-10 sticky top-0">
            <Link
                to="/"
                className="text-white text-3xl font-semibold"
            >
                Shop
            </Link>
            <Link to="/cart">
                {totalItemsCount !== 0 ? (
                    <Badge count={totalItemsCount}>
                        <ShoppingCartSimple size={40} color="white" />
                    </Badge>
                ) : (
                    <Badge count={0} showZero>
                        <ShoppingCartSimple size={40} color="white" />
                    </Badge>
                )}
            </Link>
        </div>
    );
};

export default Navbar;
