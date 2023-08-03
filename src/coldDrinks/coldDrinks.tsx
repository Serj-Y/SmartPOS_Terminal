import React from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { MenuContainer } from "../common/menuContainerConstructor/menuContainer";
import styles from "./coldDrinks.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";


export const ColdDrinks = () => {
    const ColdDrinksMenu = useSelector((state: RootState) => state.Menu.drinksMenu.cold)

    return (
        <div className={styles.drinksPage}>
            <MenuContainer stateMenu={ColdDrinksMenu} title="Cold Drinks" icon={<FontAwesomeIcon icon={faBottleWater} />} />
        </div>

    )
}
