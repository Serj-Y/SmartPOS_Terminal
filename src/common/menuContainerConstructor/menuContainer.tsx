import React, { useState } from "react";
import styles from "./menuContainer.module.scss"
import { MenuItemConstructor } from "../menuItemConstructor/menuItemConstructor";
import { ExtraMenuItemConstructor } from "../extraMenuItemConstructor/extraMenuItemConstructor";
import { actions } from "../../reducer/menuReducer";
import { useDispatch } from "react-redux";
import { $CombinedState } from "redux";


const MenuContainer = (props: any) => {
    const menu = props.stateMenu;
    const extraMenu = props.extraMenu
    const optionsOfCart = props.cartOfOption
    const [secondMenu, setSecondMenu] = useState(menu)
    const [isOpen, setIsOpen] = useState(false)
    const [pricer, setPricer] = useState(secondMenu.price)
    const [count, setCount] = useState(0)
    const [selectedOption, setSelectedOption] = useState([]) as any

    const dispatch = useDispatch()




    function onOpenExtraOptions(i: any) {
        setIsOpen(true)
        setSecondMenu(i)
        setPricer(i.price)
    }

    function onCloseExtraOptions() {
        setIsOpen(false)
    }

    const addToCart = (order: any) => {
        const orderWithOption = { ...order, option: selectedOption }
        dispatch(actions.addOrderActionCreator(orderWithOption));

    }

    const Option = (props: any) => {
        const i = props.MenuObject;
        function onHandlerAddOption(i: any) {
            setPricer(((prev: any) => prev + i.price))
            setCount(i.isAdd)
            setCount(((prev: any) => prev + 1))
            const option = i
            setSelectedOption([...selectedOption, option])
        }


        function onHandlerDeleteOption(i: any) {
            setPricer(pricer - i.price)
            setCount(((prev: any) => prev - 1))
        }


        return (
            <div  >
                {i.name}
                <button onClick={() => onHandlerDeleteOption(i)} >-</button>{count} <button onClick={() => onHandlerAddOption(i)} >+</button>
                ${i.price}
            </div>)
    }

    return (
        <div className={styles.food}>
            <h2>{props.title} {props.icon}</h2>
            {!isOpen
                ? <div className={styles.items}>
                    {menu.map((i: any) => <div key={i.id}>
                        <label form="Btn">
                            <MenuItemConstructor name={i.name} weight={i.weight} price={i.price} img={i.img} />
                            <button id="Btn" style={{ display: "none" }} onClick={() => onOpenExtraOptions(i)}></button>
                        </label>
                    </div>
                    )}
                </div>
                : <div className={styles.extraOption} >
                    <ExtraMenuItemConstructor name={secondMenu.name} weight={secondMenu.weight} price={pricer}
                        CloseBtn={onCloseExtraOptions}
                        addCartBtn={() => addToCart(secondMenu)}
                        option={
                            secondMenu.ownOption ?
                                secondMenu.ownOption.map((i: any) => <Option parent={secondMenu} MenuObject={i} />) :
                                extraMenu ?
                                    extraMenu.map((i: any) => <Option parent={secondMenu} MenuObject={i} />) :
                                    <></>
                        }
                        img={secondMenu.img}
                    />
                </div>
            }
        </div>
    );
};


export default MenuContainer




