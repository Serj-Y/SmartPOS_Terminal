import React, { useState } from "react";
import styles from "./menuContainer.module.scss"
import { MenuItemConstructor } from "../menuItemConstructor/menuItemConstructor";
import { ExtraMenuItemConstructor } from "../extraMenuItemConstructor/extraMenuItemConstructor";
import { actions } from "../../../reducer/cartReducer";
import { useDispatch } from "react-redux";



export type OptionType = {
    id: string
    name: string,
    weight: number,
    price: number,
    isAdd: number
}

export type OrderType = {
    id: string,
    name: string,
    weight: number,
    price: number,
    img: string,
    option?: Array<object>
}


const MenuContainer = (props: any) => {
    const menu = props.stateMenu;
    const extraMenu = props.extraMenu
    const [secondMenu, setSecondMenu] = useState(menu)
    const [isOpen, setIsOpen] = useState(false)
    const [pricer, setPricer] = useState(secondMenu.price)
    const [selectedOption, setSelectedOption] = useState([]) as any
    const [isChecked, setChecked] = useState([]) as any
    const [isTotalItemWeight, setTotalItemWeight] = useState(secondMenu.weight)


    const dispatch = useDispatch()

    function onOpenExtraOptions(i: OrderType) {
        setIsOpen(true)
        setSecondMenu(i)
        setPricer(i.price)
        setTotalItemWeight(i.weight)
    }

    function onCloseExtraOptions() {
        setIsOpen(false)
    }

    const addToCart = (order: OrderType) => {
        const orderWithOption = { ...order, weight: isTotalItemWeight || order.weight, price: pricer, option: selectedOption }
        dispatch(actions.addOrderActionCreator(orderWithOption));
        setPricer(secondMenu.price)
        setTotalItemWeight(secondMenu.weight)
        setSelectedOption([]) as any
    }

    const Option = (props: any) => {
        const i = props.MenuObject;

        // function onHandlerAddOption(i: OptionType) {
        //     setPricer(((prev: any) => prev + i.price))
        //     const option = { ...i}
        //     setSelectedOption([...selectedOption, option ])
        // }


        // function onHandlerDeleteOption(i: OrderType) {
        //     let forFilter = [...selectedOption]
        //     const updatedOption = forFilter.filter((filtredOption: any) => filtredOption.id !== i.id)
        //     setPricer(pricer - i.price)
        //     setSelectedOption([...updatedOption])
        // }

        function onChangeOptionForRadio(i: OptionType) {
            if (isChecked !== i.id) {
                setPricer(secondMenu.price + i.price)
                setTotalItemWeight( secondMenu.weight >  i.weight?  secondMenu.weight+ i.weight: i.weight)
                const option = [{ ...i }]
                setChecked(i.id)
                setSelectedOption(option)
            } else {
                setPricer(secondMenu.price)
                setChecked("")
            }

        }


        return (
            <div>
                {i.multiply
                    ? <> {i.name} <input type="checkbox" checked={i.id === isChecked} value={i.id} onChange={() => onChangeOptionForRadio(i)} key={i.id} name={i.name} /> ${i.price}  </>
                    : <> {i.name} <input type="radio" checked={i.id === isChecked} value={i.id} onChange={() => onChangeOptionForRadio(i)} key={i.id} name={i.name} /> ${i.price}  </>
                }
            </div>)
    }

    return (
        <div className={styles.food}>
            <h2>{props.title} {props.icon}</h2>
            {!isOpen
                ? <div className={styles.items}>
                    {menu.map((i: OrderType) => <div key={i.id}>
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
                        addToCartBtn={() => addToCart(secondMenu)}
                        option={
                            secondMenu.ownOption ?
                                secondMenu.ownOption.map((i: OptionType) => <Option parent={secondMenu} MenuObject={i} />) :
                                extraMenu ?
                                    extraMenu.map((i: OptionType) => <Option parent={secondMenu} MenuObject={i} />) :
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




