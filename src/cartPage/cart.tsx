
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CartContainer } from "../common/cartContainerConstructor/cartContainer";







type PropsType = {

}

export const CartPage: React.FC<PropsType> = (props: any) => {
    const order = useSelector((state: RootState) => state.Cart.order)
    console.log(order)

  


   
    return (
        <div>
    <CartContainer  cartOrder={order}  stateMenu={order} title={"Cart"}/>
           
            </div>
        
    )
}


