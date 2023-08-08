
import React from "react"
import styles from "./extraMenuItemConstructor.module.scss"
import burgerIcon from "../assets/svg/hamburger.svg"


type PropsType = {
    optionName?: any
    optionPrice?: any
    count?: number
    deleteOptionBtn?: any
    addOptionBtn?: any
    addCartBtn?: any
    CloseBtn?: any
    option?: any
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
                    <div className={styles.addBtn} >
                        <button onClick={props.addCartBtn} >Add To Cart</button>
                    </div>
                    <div>
                        <button onClick={props.CloseBtn} >X</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )

    }


}


