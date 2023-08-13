import { useState } from "react";
import styles from "./menuContainer.module.scss"
import { MenuItemConstructor } from "../menuItemConstructor/menuItemConstructor";
import { ExtraMenuItemConstructor } from "../extraMenuItemConstructor/extraMenuItemConstructor";
import { useDispatch } from "react-redux";

export type OptionType = {
    id: string
    name: string,
    weight?: number,
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
    const [count, setCount] = useState(0)
    const [selectedOption, setSelectedOption] = useState([]) as any
    const [iOptions, setIOptions] = useState([]) as any

    const dispatch = useDispatch()

    function onOpenExtraOptions(i: OrderType) {
        setIsOpen(true)
        setSecondMenu(i)
        setPricer(i.price)

    }

    function onCloseExtraOptions() {
        setIsOpen(false)
    }

    const addToCart = (order: OrderType) => {
        const orderWithOption = { ...order, weight: selectedOption.weight || order.weight, price: pricer, option: selectedOption }
        // dispatch(actions.addOrderActionCreator(orderWithOption));
        // setCount(0)
        setPricer(secondMenu.price)
        setSelectedOption([]) as any
    }

    const Option = (props: any) => {
        const i = props.MenuObject;

        function onHandlerAddOption(i: OptionType) {
            setPricer(((prev: any) => prev + i.price))
            const option = { ...i }
            const options = { ...option, isAdd: i.isAdd += 1 }
            setSelectedOption([...selectedOption, options ])
        }


        function onHandlerDeleteOption(i: OrderType) {
            let forFilter = [...selectedOption]
            const updatedOption = forFilter.filter((filtredOption: any) => filtredOption.id !== i.id)
            setPricer(pricer - i.price)
            setCount(0)
            setSelectedOption([...updatedOption])
        }


        return (
            <div  >
                {i.name}
                <button onClick={() => onHandlerDeleteOption(i)} >-</button>{i.isAdd} <button onClick={() => onHandlerAddOption(i)} >+</button>
                ${i.price}
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




