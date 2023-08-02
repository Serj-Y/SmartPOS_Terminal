import React, { useState } from "react";
import styles from "./menuContainer.module.scss"
import { MenuItemConstructor } from "../menuItemConstructor/menuItemConstructor";
import { useSelector } from "react-redux";
import { ExtraMenuItemConstructor } from "../extraMenuItemConstructor /extraMenuItemConstructor";
import { match } from "assert";



export const MenuContainer = (props: { stateMenu: any; title: string; }) => {
    const menu = props.stateMenu;

    const [secondMenu, setSecondMenu] = useState(props.stateMenu)

    const [isOpen, setIsOpen] = useState(false)

    const [pricer, setPricer] = useState(secondMenu.price)

    const [isAddOption, setIsAddOption] = useState(0)

    function onClickHandler(i: any) {
        setIsOpen(true)
        setSecondMenu(i)
        setPricer(i.price)
        setIsAddOption(0)
        console.log(i);
    }

    function onHandlerAddOption() {
        if (isAddOption >= 0) {
            setPricer(((prev: any) => prev + secondMenu.option[0]?.price))
            setIsAddOption(prev => prev + 1)
        }

    }

    function onHandlerRemoveOption() {
        if (isAddOption > 0) {
            setPricer(pricer - secondMenu.option[0]?.price)
            setIsAddOption(prev => prev - 1)
        }

    }

    const Option1 = () => {
        return (
            <div>
                {secondMenu.option[0].name}
                <button onClick={onHandlerRemoveOption}>-</button>
                {isAddOption}
                <button onClick={onHandlerAddOption} >+</button>
                ${secondMenu.option[0].price}
            </div>
        )
    }

    return (
        <div className={styles.food}>
            <h2>{props.title}</h2>
            {!isOpen
                ? <div className={styles.items}>
                    {menu.map((i: any) => <div key={i.id}>
                        <label form="Btn">
                            <MenuItemConstructor name={i.name} weight={i.weight} price={i.price} img={""} />
                            <button id="Btn" style={{ display: "none" }} onClick={() => onClickHandler(i)}></button>
                        </label>
                    </div>
                    )}
                </div>
                : <div className={styles.extraOption} >
                    <ExtraMenuItemConstructor name={secondMenu.name || ""} weight={secondMenu.weight || ""} price={pricer || ""} OnClick={() => setIsOpen(false)} option1={secondMenu.option ? <Option1 /> : ""} img={""}
                    />
                </div>
            }
        </div>
    );
};
