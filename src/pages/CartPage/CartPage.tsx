import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CartContainer } from "../../components/CartContainer/CartContainer";


export const CartPage = () => {
    const order= useSelector((state: RootState) => state.cart.orders)

    return (
        <CartContainer cartItems={order} />
    )
}
