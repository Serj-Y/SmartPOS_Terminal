
import React, { useState } from "react"
import styles from "./menuItemConstructor.module.scss"
import burgerIcon from "../assets/svg/hamburger.svg"
import Cola from "../assets/png/cupCola.png"

type PropsType = {
    name: string
    weight: number
    price: number
    img: any
}



export const MenuItemConstructor: React.FC<PropsType> = (props) => {



  

    return (
        <div className={styles.itemContainer}>
          <div className={styles.item}>
                    <img src={props.img } alt={props.name} />
                    <p className={styles.itemName} >{props.name}</p>
                    <p className={styles.itemWeight} >{props.weight} g</p>
                    <p className={styles.itemPrice} >${props.price}</p>
                </div>
        </div>

    )
} 


