
import React from "react"
import styles from "./menuItemConstructor.module.scss"
import burgerIcon from "../assets/svg/hamburger.svg"

type PropsType = {
    name: string
    weight: number
    price: number
    alt: string
    img: string
    extraInfo?: any
 
}


export const MenuItemConstructor: React.FC<PropsType> = (props) => {

  

    return (
        <div className={styles.itemContainer}>
    
           {!props.extraInfo ? <div className={styles.item}>
                    <img src={props.img || burgerIcon} alt={props.alt || burgerIcon} />
                    <p className={styles.itemName} >{props.name}</p>
                    <p className={styles.itemWeight} >{props.weight} g</p>
                    <p className={styles.itemPrice} >${props.price}</p>
                </div>
           : <div>H</div> }
               
           
        </div>

    )
} 


