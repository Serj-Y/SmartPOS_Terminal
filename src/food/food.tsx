import React from "react";
import styles from "./food.module.scss"
import { MenuItemConstructor } from "../common/menuItemConstructor/menuItemConstructor";


export const Food = () => {
    return (
        <div className={styles.food} >
            <h2>Burgers</h2>
            <div className={styles.items}>
                <MenuItemConstructor name={"Burger"} weight={250} price={2.45} alt={""} img={""} />
                <MenuItemConstructor name={"Burger XL"} weight={435} price={3.45} alt={""} img={""} />
                <MenuItemConstructor name={"Cheeseburger"} weight={265} price={3} alt={""} img={""} />
                <MenuItemConstructor name={"Big John"} weight={635} price={5.25} alt={""} img={""} />
            </div>
        </div>
    )
}
