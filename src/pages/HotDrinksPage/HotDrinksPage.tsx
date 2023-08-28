import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import MenuContainer from "../../components/MenuContainer/MenuContainer";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HotDrinksPage = () => {
    const hotDrinksMenu = useSelector((state: RootState) => state.menu.drinksMenu.hot)
    const extraMenuOption = useSelector((state: RootState) => state.menu.drinksMenu.hotDrinksOptions)
    const options = useSelector((state: RootState) => state.cart.options)
    
    return (
        <MenuContainer options={options} extraMenu={extraMenuOption}  stateMenu={hotDrinksMenu} title="Hot Drinks" icon={<FontAwesomeIcon icon={faMugHot} />} />
    )
}
