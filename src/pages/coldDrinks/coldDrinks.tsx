import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import MenuContainer from "../../common/components/menuContainerConstructor/menuContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";


export const ColdDrinks = () => {
    const coldDrinksMenu = useSelector((state: RootState) => state.Menu.drinksMenu.cold)
    const extraForColdDrinksMenu = useSelector((state: RootState) => state.Menu.drinksMenu.coldDrinksOptions)

    return (
        <MenuContainer extraMenu={extraForColdDrinksMenu} stateMenu={coldDrinksMenu} title="Cold Drinks" icon={<FontAwesomeIcon icon={faBottleWater} />} />
    )
}
