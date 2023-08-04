
import React from "react"
import styles from "./extraMenuItemConstructor.module.scss"
import burgerIcon from "../assets/svg/hamburger.svg"


type PropsType = {
    option1?: any
    option2?:any
    option3?: any
    OnClick: any
    name: string
    weight: number
    price: any
    img: string
}



export const ExtraMenuItemConstructor: React.FC<PropsType> = (props) => {

    return (
        <div className={styles.itemContainer}>
            <div className={styles.item}>
                <img src={props.img || burgerIcon} alt={props.name} />
                <p className={styles.itemName} >{props.name}</p>
                <p className={styles.itemWeight} >{props.weight} g</p>
                <p className={styles.itemPrice} >${props.price}</p>
              <p className={styles.optionItem} >{props.option1}</p>  
              <p className={styles.optionItem}> {props.option2}</p>
               <p className={styles.optionItem}> {props.option3}</p>
               
                <button onClick={props.OnClick} >X</button>
            </div>
        </div>

    )
}


