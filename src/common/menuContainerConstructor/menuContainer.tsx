import React, { useState } from "react";
import styles from "./menuContainer.module.scss"
import { MenuItemConstructor } from "../menuItemConstructor/menuItemConstructor";
import { ExtraMenuItemConstructor } from "../extraMenuItemConstructor/extraMenuItemConstructor";
import { actions } from "../../reducer/menuReducer";
import { useDispatch } from "react-redux";

;


export type SecondMenuType = {
    id: string, name: string, weight: number, price: number, img: string,
}

const MenuContainer = (props: any) => {
    const menu = props.stateMenu;
    const extraMenu = props.extraMenu
    const [secondMenu, setSecondMenu] = useState(menu)
    const [isOpen, setIsOpen] = useState(false)
    const [pricer, setPricer] = useState(secondMenu.price)
    const [extraOption, setExtraOption] = useState(undefined)
    const [count, setCount] = useState(0)

console.log(secondMenu.option)
    const dispatch = useDispatch()


    const addToCart = (newOrderForm: any) => {
      dispatch(actions.addOrderActionCreator(newOrderForm));
    }


    function onClickHandler(i: any) {
        setIsOpen(true)
        setSecondMenu(i)
        setPricer(i.price)

    }


    function onCloseExtraMenu() {
        setIsOpen(false)
    }

    // const Option1 = () => {

    //     function onHandlerAddOption(extra: any) {
    //         if (!isAddOption) {
    //             setPricer(((prev: any) => prev + extra.price))
    //             setIsAddOption(true)
    //             setIsOnBag(extra)
    //             console.log("is add item1" + extra)
    //         } else {
    //             setPricer(pricer - extra.price)
    //             setIsAddOption(false)
    //             setIsOnBag(null)
    //         }
    //     }
    //     return (
    //         <div key={secondMenu.option[0]?.id} >
    //             {secondMenu.option[0]?.name}
    //             <input type="checkbox" checked={isAddOption} onChange={() => onHandlerAddOption(secondMenu.option[0])} />
    //             ${secondMenu.option[0]?.price}
    //         </div>
    //     )

    // }

    // const Option2 = () => {

    //     const dispatch = useDispatch()

    //     function onHandlerAddOption(extra: any) {
    //         if (!isAddOption2) {
    //             setPricer(((prev: any) => prev + extra.price))
    //             setIsAddOption2(true)
    //             setIsOnBag(extra)
    //             const extraIsAdd = extra.isAdd

    //             dispatch(actions.addOptionActionCreator(extra))

    //             console.log(extra.isAdd)
    //         } else {
    //             setPricer(pricer - extra.price)
    //             setIsAddOption2(false)
    //             setIsOnBag(null)
    //         }


    //     }
    //     return (
    //         <div key={secondMenu.option[1]?.id} >
    //             {secondMenu.option[1]?.name}
    //             <input type="checkbox" checked={isAddOption2} onChange={() => onHandlerAddOption(secondMenu.option[1])} />
    //             ${secondMenu.option[1]?.price}
    //         </div>
    //     )

    // }
    // const Option3 = (item: any) => {

    //     function onHandlerAddOption(extra: any) {
    //         if (!isAddOption3) {
    //             setPricer(((prev: any) => prev + extra.price))
    //             setIsAddOption3(true)
    //             setIsOnBag(extra)

    //         } else {
    //             setPricer(pricer - extra.price)
    //             setIsAddOption3(false)
    //             setIsOnBag(null)
    //         }


    //     }
    //     return (
    //         <div key={secondMenu.option[2]?.id} >
    //             {secondMenu.option[2]?.name}
    //             <input type="checkbox" checked={isAddOption3} onChange={() => onHandlerAddOption(secondMenu.option[2])} />
    //             ${secondMenu.option[2]?.price}
    //         </div>
    //     )

    // }

    const Option = (props: any) => {
        const i = props.MenuObject;      
        function onHandlerAddOption(i: any) {
            setExtraOption(i)
            setPricer(((prev: any) => prev + i.price))
            setCount(i.isAdd)
            setCount(((prev: any) => prev + 1))

            dispatch(actions.addOptionActionCreator(i))
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
                            <button id="Btn" style={{ display: "none" }} onClick={() => onClickHandler(i)}></button>
                        </label>
                    </div>
                    )}
                </div>
                : <div className={styles.extraOption} >
                    <ExtraMenuItemConstructor name={secondMenu.name} weight={secondMenu.weight} price={pricer}
                        CloseBtn={onCloseExtraMenu}
                        addCartBtn={() => addToCart(secondMenu)}
                        option={secondMenu.ownOption?  secondMenu.ownOption.map((i: any) => <Option MenuObject={i} /> ): extraMenu? extraMenu.map((i: any) => <Option MenuObject={i} />): ""} 
                        img={secondMenu.img}
                    />
                </div>
            }
        </div>
    );
};


export default MenuContainer




