
import React from "react"
import styles from "./menuItemConstructor.module.scss"
import burgerIcon from "../assets/svg/hamburger.svg"
import { v1 } from "uuid"

type PropsType = {
    name: string
    weight: number
    price: number
    img: string
}



export const MenuItemConstructor: React.FC<PropsType> = (props) => {

  

    return (
        <div className={styles.itemContainer}>
          <div className={styles.item}>
                    <img src={props.img || burgerIcon} alt={props.name} />
                    <p className={styles.itemName} >{props.name}</p>
                    <p className={styles.itemWeight} >{props.weight} g</p>
                    <p className={styles.itemPrice} >${props.price}</p>
                </div>
        </div>

    )
} 


