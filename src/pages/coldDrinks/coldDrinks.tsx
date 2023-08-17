import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import MenuContainer from "../../common/components/menuContainerConstructor/menuContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";


export const ColdDrinks = () => {
    const ColdDrinksMenu = useSelector((state: RootState) => state.Menu.drinksMenu.cold)
    const ExtraForColdDrinksMenu = useSelector((state: RootState) => state.Menu.drinksMenu.coldOption)

    return (
        <MenuContainer extraMenu={ExtraForColdDrinksMenu} stateMenu={ColdDrinksMenu} title="Cold Drinks" icon={<FontAwesomeIcon icon={faBottleWater} />} />
    )
}
