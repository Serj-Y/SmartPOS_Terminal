
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CartContainer } from "../common/cartContainerConstructor/cartContainer";







type PropsType = {

}

export const CartPage: React.FC<PropsType> = (props: any) => {
    const order = useSelector((state: RootState) => state.Cart.order)


  


   
    return (
        <div>
    <CartContainer  stateMenu={order} />
           
            </div>
        
    )
}


