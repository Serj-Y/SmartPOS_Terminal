
import React from "react"
import styles from "./extraMenuItemConstructor.module.scss"
import burgerIcon from "../assets/svg/hamburger.svg"


type PropsType = {
    option?: any
    OnClick: any
    name: string
    weight: number
    price: any
    img: string
}



export const ExtraMenuItemConstructor = (props: PropsType) => {
    if (props.name) {
            return (
          <div className={styles.itemContainer}>
            <div className={styles.item}>
                <img src={props.img} alt={props.name} />
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


