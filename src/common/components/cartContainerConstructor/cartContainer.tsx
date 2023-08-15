import React from "react";
import style from "./cartContainer.module.scss"
import styles from "../extraMenuItemConstructor/extraMenuItemConstructor.module.scss"
import { useDispatch } from "react-redux";
import { actions } from "../../../reducer/cartReducer";
import { OptionType, OrderType } from "../menuContainerConstructor/menuContainer";



type PropsType = {
    title: string;
    icon?: any;
    CartItems?: any;
    options?: any
    CloseBtn?: any
    name: string
    weight?: number
    price?: number
    img?: string
    multiply?: boolean
}

export const CartContainer: React.FC<PropsType> = ({ CartItems, title, icon }) => {

    const menu = CartItems


    const dispatch = useDispatch()

    const menuForFilter = [...menu]


    const deleteMenuItem = (id: string) => {
        const cartItems = menuForFilter.filter((item: any) => item.id !== id)
        dispatch(actions.deleteItemOfCartActionCreator(cartItems))

    }


    const cleanUp = () => {
        dispatch(actions.cleanCartActionCreator(menu))
    }

    const Option = (props: any) => {
        const Option = props.Option

        return (

            <div>

                {Option.name} <input type="checkbox" checked value={Option.id} key={Option.id} name={Option.name} /> ${Option.price}


            </div>)
    }
    return (
        <div className={style.food}>
            <h2>{title} {icon}</h2>
            {menu.map((i: OrderType) =>
                <div className={style.extraOption} >
                    <MenuItem name={i.name} weight={i.weight} price={i.price} options={i.option ? i.option.map((i: any) => <Option Option={i} />) : <></>}
                        CloseBtn={() => deleteMenuItem(i.id)}
                        img={i.img}
                    />
                </div>
            )}
            {menu[1] ? <button onClick={cleanUp} >clean</button> : ""}
        </div>)
}

type MenuItemType = {
    name: string,
    img: string,
    weight: number,
    price: number,
    options?: any,
    CloseBtn: any
}

const MenuItem: React.FC<MenuItemType> = ({ name, img, weight, price, options, CloseBtn }) => {
    if (name) {
        return (
            <div className={styles.itemContainer}>
                <div className={styles.item}>
                    <img src={img} alt={name} />
                    <p className={styles.itemName} >{name}</p>
                    <p className={styles.itemWeight} >{weight} g</p>
                    <p className={styles.itemPrice} >${price}</p>
                    <p className={styles.optionItem} >{options}</p>
                    <button onClick={CloseBtn} >X</button>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}