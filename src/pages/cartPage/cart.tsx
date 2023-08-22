import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CartContainer } from "../../common/components/cartContainerConstructor/cartContainer";


export const CartPage = () => {
    const order= useSelector((state: RootState) => state.Cart.orders)

    return (
        <CartContainer cartItems={order} />
    )
}


