import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import MenuContainer from "../../common/components/menuContainerConstructor/menuContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

export const Food = () => {
    const BurgerMenu = useSelector((state: RootState) => state.Menu.foodMenu.burger)
    const OptionMenu = useSelector((state: RootState) => state.Menu.foodMenu.option)
    const Options = useSelector((state: RootState) => state.Cart.options)

    return (
        <MenuContainer Options={Options} extraMenu={OptionMenu} stateMenu={BurgerMenu} title="Burgers" icon={<FontAwesomeIcon icon={faBurger} />} />
    )
}

