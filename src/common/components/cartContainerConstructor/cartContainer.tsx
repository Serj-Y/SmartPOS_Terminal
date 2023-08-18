import React from "react";
import style from "./cartContainer.module.scss"
import styles from "../extraMenuItemConstructor/extraMenuItemConstructor.module.scss"
import { useDispatch } from "react-redux";
import { actions } from "../../../reducer/cartReducer";
import { OptionType, OrderType } from "../menuContainerConstructor/menuContainer";
import { useAlert } from "react-alert";

type PropsType = {
    title: string;
    cartItems: Array<OrderType>
    icon: any
}

export const CartContainer: React.FC<PropsType> = ({ cartItems, title, icon }) => {
    const menu = cartItems
    const dispatch = useDispatch()
    const alert = useAlert()

    const DeleteCartItem = (item: { id: string; name: string; weight: number; price?: number | string; }) => {
        const filtredItems = [...menu.filter((i: any) => i.id !== item.id)]
        dispatch(actions.deleteItemOfCartActionCreator(filtredItems))
        alert.show(`Is Deleted: ${item.name}`)
    }

    const CleanUp = () => {
        dispatch(actions.cleanCartActionCreator())
        alert.show("Cart Is Clean Up")
    }

    const Option = (props: any) => {
        const option = props.Option

        return (
            <div>
                <div >
                    {option.price === "" ? "" : <>{option.name} wight: {option.weight}g price: {option.price}$</>}
                </div>
            </div>
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
                        options={i.option ? i.option.map((i: any) => <div key={i.id} ><Option Option={i} /></div>) : <></>}
                        CloseBtn={() => DeleteCartItem(i)}
                        img={i.img}
                    />
                </div>
            )}
            <div className={style.cleanCartBtn} >
                {menu[1] ? <><button onClick={CleanUp} >Clean cart</button></> : ""}
            </div>
        </div>)
}


type MenuItemType = {
    name: string,
    img: string,
    weight: number,
    price: number,
    options?: Array<OptionType> | any,
    CloseBtn: () => void
}

const MenuItem: React.FC<MenuItemType> = ({ name, img, weight, price, options, CloseBtn }) => {

    if (name) {
        return (
            <div className={styles.itemContainer}>
                <div className={styles.item}>
                    <img src={img} alt={name} />
                    <div className={styles.itemName} >{name}</div>
                    <div className={styles.itemWeight} >{weight} g</div>
                    <div className={styles.itemPrice} >${price}</div>
                    <div className={styles.optionItem} >{options}</div>
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