import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CartContainer } from "../../components/CartContainer/CartContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartPage = () => {
  const order = useSelector((state: RootState) => state.cart.orders);
  return (
    <CartContainer
      cartItems={order}
      title={"Cart"}
      icon={<FontAwesomeIcon icon={faCartShopping} />}
    />
  );
};
