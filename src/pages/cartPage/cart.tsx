import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CartContainer } from "../../common/components/cartContainerConstructor/cartContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartPage = () => {
    const order = useSelector((state: RootState) => state.Cart.orders)

    return (
        <CartContainer CartItems={order} icon={<FontAwesomeIcon icon={faCartShopping} />} title="Cart" name={""} />
    )
}


