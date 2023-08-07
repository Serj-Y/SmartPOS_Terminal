import React, { useState } from "react";
import style from "./cartContainer.module.scss"
import styles from "../extraMenuItemConstructor/extraMenuItemConstructor.module.scss"

type PropsType = {
    option?: any
    OnClick: any
    name: string
    weight: number
    price: any
    img: string
}

export const CartContainer = (props: any) => {
    const menu = props.stateMenu
    return (
        <div className={style.food}>
            <h2>{props.title} {props.icon}</h2>
            {menu.map((i: any) =>
                <div className={style.extraOption} >
                    <MenuItem name={i.name} weight={i.weight} price={i.price}
                        OnClick={() => { }}
                        img={i.img}
                    />
                </div>
            )}
        </div>)
}

const MenuItem = (props: PropsType) => {
    if (props.name) {
            return (
          <div className={styles.itemContainer}>
            <div className={styles.item}>
                <img src={props.img } alt={props.name} />
                <p className={styles.itemName} >{props.name}</p>
                <p className={styles.itemWeight} >{props.weight} g</p>
                <p className={styles.itemPrice} >${props.price}</p>
                <p className={styles.optionItem} >{props.option}</p>
                <button onClick={props.OnClick} >X</button>
            </div>
        </div>
    )
    } else {
        return(
                   <></> 
        )

    }


}


