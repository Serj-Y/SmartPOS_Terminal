import React from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { MenuContainer } from "../common/menuContainerConstructor/menuContainer";
import styles from "./drinks.module.scss";


export const Drinks = () => {
    const ColdDrinksMenu = useSelector((state: RootState) => state.Menu.drinksMenu.cold)
    const HotDrinksMenu = useSelector((state: RootState) => state.Menu.drinksMenu.hot)

    return (
        <div className={styles.drinksPage} >
            <MenuContainer stateMenu={ColdDrinksMenu} title="Cold Drinks" />
            <MenuContainer stateMenu={HotDrinksMenu} title="Hot Drinks" />
        </div>

    )
}
