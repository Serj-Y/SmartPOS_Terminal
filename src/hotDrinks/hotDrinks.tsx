import React from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { MenuContainer } from "../common/menuContainerConstructor/menuContainer";
import styles from "./hotDrinks.module.scss";
import { faBottleWater, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const HotDrinks = () => {

    const HotDrinksMenu = useSelector((state: RootState) => state.Menu.drinksMenu.hot)
    return (
        <div className={styles.drinksPage} >
            <MenuContainer stateMenu={HotDrinksMenu} title="Hot Drinks" icon={<FontAwesomeIcon icon={faMugHot} /> }/>
        </div>

    )
}
