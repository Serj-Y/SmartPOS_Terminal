import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import MenuContainer from "../../common/components/menuContainerConstructor/menuContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

export const Food = () => {
    const burgerMenu = useSelector((state: RootState) => state.Menu.foodMenu.burger)
    const optionMenu = useSelector((state: RootState) => state.Menu.foodMenu.burgerOptions)
    const options = useSelector((state: RootState) => state.Cart.options)

    return (
        <MenuContainer options={options} extraMenu={optionMenu} stateMenu={burgerMenu} title="Burgers" icon={<FontAwesomeIcon icon={faBurger} />} />
    )
}

