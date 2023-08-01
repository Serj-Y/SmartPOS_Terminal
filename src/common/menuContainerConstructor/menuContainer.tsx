import React from "react";
import styles from "./menuContainer.module.scss"
import { MenuItemConstructor } from "../menuItemConstructor/menuItemConstructor";





export const MenuContainer = (props: { stateMenu: any; title: string; }) => {
    const menu = props.stateMenu;

    function onClickHandler(id: any) {
        console.log(id);
    }

    return (
        <div className={styles.food}>
            <h2>{props.title}</h2>
            <div className={styles.items}>
                {menu.map((i: { id: React.Key | null | undefined; name: string; weight: number; price: number; }) => <div key={i.id}>
                    <label form="Btn">
                        <MenuItemConstructor name={i.name} weight={i.weight} price={i.price} alt={""} img={""} />
                        <button id="Btn" style={{ display: "none" }} onClick={() => onClickHandler(i.id)}></button>
                    </label>
                </div>
                )}
            </div>
        </div>
    );
};
