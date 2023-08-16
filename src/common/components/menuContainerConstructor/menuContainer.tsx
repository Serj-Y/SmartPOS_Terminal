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
    const Options = props.Options
    const [secondMenu, setSecondMenu] = useState(menu)
    const [isOpen, setIsOpen] = useState(false)
    const [pricer, setPricer] = useState(secondMenu.price)
    const [selectedOption, setSelectedOption] = useState([]) as any
    const [isChecked, setChecked] = useState([]) as any
    const [isCount, setCount] = useState(1)
    const [isTotalItemWeight, setTotalItemWeight] = useState(secondMenu.weight)
    const [isId, setId] = useState({...Options}) 


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

        const orderWithOption = { ...order, weight: isTotalItemWeight || order.weight, price: pricer, option: Options || selectedOption }
        dispatch(actions.addOrderActionCreator(orderWithOption));
        setPricer(secondMenu.price)
        setTotalItemWeight(secondMenu.weight)
        setSelectedOption([]) as any
        setChecked([])
    }

    const Option = (props: any) => {
        const i = props.MenuObject;
        const result = Options?.find(({ id }: any) => id === i.id);

      
        // function onHandlerAddOption(i: OptionType) {
        //     setCount(((prev: number) => prev +1))
        //     setPricer(((prev: any) => prev + i.price))
        //     const option = { ...i, isAdd: isCount }
        //     dispatch(actions.addOptionActionCreator(option))
        //   const  mapId = Options.map((i: any)=> i.id)
        //   setId(mapId)
 
        // }


        // function onHandlerDeleteOption(i: OrderType) {
        //     let forFilter = [...Options]
        //     const updatedOption = forFilter.filter((filtredOption: any) => filtredOption.id !== i.id)
        //     setPricer(pricer > secondMenu.price ? pricer - i.price : secondMenu.price)
        //     dispatch(actions.deleteItemOfOptionActionCreator(updatedOption))
        //     setCount(((prev: number) => prev--))

        // }

{/* <button disabled={result?.id ===i.id} onClick={() => onHandlerAddOption(i)}>+</button> { } <button disabled={pricer === secondMenu.price} onClick={() => onHandlerDeleteOption(i)}>-</button> {i.price}$ */}
        
function onChangeOptionForCheckBox(i: OptionType) {
    if (result?.id !== i.id) {
        setPricer((prev: any) =>prev + i.price )
        setTotalItemWeight((prev: any) => prev + i.weight )
        const option = { ...i }
        setChecked(i.id)
        dispatch(actions.addOptionActionCreator(option))
    } else {
            const updatedOption = Options.filter((filtredOption: any) => filtredOption.id !== i.id)
            setPricer( secondMenu.price <pricer? (prev: any) => prev - i.price: secondMenu.price)
            setTotalItemWeight( secondMenu.weight <isTotalItemWeight? (prev: any) => prev - i.weight: secondMenu.weight)
            dispatch(actions.deleteItemOfOptionActionCreator(updatedOption))
    }
}


function onChangeOptionForRadio(i: OptionType) {
            if (isChecked !== i.id) {
                setPricer(secondMenu.price + i.price)
                setTotalItemWeight(secondMenu.weight > i.weight ? secondMenu.weight + i.weight : i.weight)
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
                    ? <>{i.name} <input type="checkBox" checked={result?.id ===i.id} onChange={()=>onChangeOptionForCheckBox(i)} /> {i.price}$  </>
                    : <> {i.name} <input type="radio" checked={i.id === isChecked} value={i.id} onChange={() => onChangeOptionForRadio(i)} key={i.id} name={i.name} /> {i.price}$  </>
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




