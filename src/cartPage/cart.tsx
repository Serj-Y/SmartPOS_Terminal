
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CartContainer } from "../common/cartContainerConstructor/cartContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

type PropsType = {

}

export const CartPage: React.FC<PropsType> = (props) => {
    const order = useSelector((state: RootState) => state.Menu.order)

    return (
        <div>
            <CartContainer stateMenu={order} cleanCart={order} icon={ <FontAwesomeIcon icon={faCartShopping} /> } title={"Cart"} />
        </div>
    )
}


