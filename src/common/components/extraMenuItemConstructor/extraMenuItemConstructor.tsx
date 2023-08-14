
import React from "react"
import styles from "./extraMenuItemConstructor.module.scss"


type PropsType = {
    addToCartBtn: () => void
    CloseBtn: () => void
    option?: string | number
    name: string
    weight: number
    price: number
    img: string
}



export const ExtraMenuItemConstructor: React.FC<PropsType> = ({ name, img, weight, price, option, addToCartBtn, CloseBtn }) => {
    if (name) {
        return (
            <div className={styles.itemContainer}>
                <div className={styles.item}>
                    <img src={img} alt={name} />
                    <p className={styles.itemName} >{name}</p>
                    <p className={styles.itemWeight} >{weight} g</p>
                    <p className={styles.itemPrice} >${price}</p>
                    <p className={styles.optionItem} >{option}</p>
                    <div className={styles.addBtn} >
                        <button onClick={addToCartBtn} >Add To Cart</button>
                    </div>
                    <div>
                        <button onClick={CloseBtn} >X</button>
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


