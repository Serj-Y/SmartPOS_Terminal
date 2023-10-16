import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import MenuContainer from "../../components/MenuContainer/MenuContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

export const BurgerPage = () => {
  const burgerMenu = useSelector(
    (state: RootState) => state.menu.foodMenu.burger
  );
  const optionMenu = useSelector(
    (state: RootState) => state.menu.foodMenu.burgerOptions
  );
  const options = useSelector((state: RootState) => state.cart.options);

  return (
    <MenuContainer
      options={options}
      extraMenu={optionMenu}
      stateMenu={burgerMenu}
      title="Burgers"
      icon={<FontAwesomeIcon icon={faBurger} />}
    />
  );
};
