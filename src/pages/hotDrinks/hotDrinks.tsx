import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import MenuContainer from "../../common/components/menuContainerConstructor/menuContainer";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HotDrinks = () => {
    const hotDrinksMenu = useSelector((state: RootState) => state.Menu.drinksMenu.hot)
    const extraMenuOption = useSelector((state: RootState) => state.Menu.drinksMenu.hotDrinksOptions)
    const options = useSelector((state: RootState) => state.Cart.options)
    
    return (
        <MenuContainer options={options} extraMenu={extraMenuOption}  stateMenu={hotDrinksMenu} title="Hot Drinks" icon={<FontAwesomeIcon icon={faMugHot} />} />
    )
}
