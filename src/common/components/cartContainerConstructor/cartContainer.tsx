import React from "react";
import style from "./cartContainer.module.scss"
import styles from "../extraMenuItemConstructor/extraMenuItemConstructor.module.scss"
import { useDispatch } from "react-redux";
import { actions } from "../../../reducer/cartReducer";
import { OrderType } from "../menuContainerConstructor/menuContainer";

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

    const deleteCartItem = (id: string) => {
        const filtredItems = [...menu.filter((i: any) => i.id !== id)]
        dispatch(actions.deleteItemOfCartActionCreator(filtredItems))
    }

    const cleanUp = () => {
        dispatch(actions.cleanCartActionCreator())
    }

    const Option = (props: any) => {
        const Option = props.Option

        return (
           <>
             {Option.name} wight: {Option.weight}g price: {Option.price}$
           </>
                  
             )
    }

    return (
        <div className={style.food}>
            <h2>{title} {icon}</h2>
            {menu.map((i: OrderType) =>
                <div key={i.id} className={style.items} >
                    <MenuItem
                        name={i.name}
                        weight={i.weight}
                        price={i.price}
                        options={i.option ? i.option.map((i: any) => <Option Option={i} />) : <></>}
                        CloseBtn={() => deleteCartItem(i.id)}
                        img={i.img}
                    />
                </div>
            )}
            <div className={style.cleanCartBtn} >
                 {menu[1] ? <><button onClick={cleanUp} >Clean cart</button></> : ""}
            </div>
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