
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CartContainer } from "../common/cartContainerConstructor/cartContainer";
import { OrderType } from "../reducer/cartReducer";






type PropsType = {

}

export const CartPage: React.FC<PropsType> = () => {
    const order = useSelector((state: RootState) => state.Cart.orders.order)
    console.log(order)




   
    return (
        <div>
    <CartContainer stateMenu={order} title={"Cart"}/>
           
            </div>
        
    )
}