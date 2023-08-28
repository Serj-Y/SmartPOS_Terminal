import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import MenuContainer from "../../components/MenuContainer/MenuContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";


export const ColdDrinksPage = () => {
    const coldDrinksMenu = useSelector((state: RootState) => state.menu.drinksMenu.cold)
    const extraForColdDrinksMenu = useSelector((state: RootState) => state.menu.drinksMenu.coldDrinksOptions)

    return (
        <MenuContainer extraMenu={extraForColdDrinksMenu} stateMenu={coldDrinksMenu} title="Cold Drinks" icon={<FontAwesomeIcon  icon={faBottleWater} />} />
    )
}
