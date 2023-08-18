import React from "react"
import styles from "./extraMenuItemConstructor.module.scss"


type PropsType = {
    AddToCartBtn: () => void
    CloseBtn: () => void
    option?: string | number
    name: string
    weight: number
    price: number
    img: string
}

export const ExtraMenuItemConstructor: React.FC<PropsType> = ({ name, img, weight, price, option, AddToCartBtn, CloseBtn }) => {
    if (name) {
        return (
            <div className={styles.itemContainer}>
                <div className={styles.item}>
                    <img src={img} alt={name} />
                    <div className={styles.itemName} >{name}</div>
                    <div className={styles.itemWeight} >{weight} g</div>
                    <div className={styles.itemPrice} >${price}</div>
                    <div className={styles.optionItem} >{option}</div>
                    <div className={styles.addBtn} >
                        <button onClick={AddToCartBtn} >{"Add To Cart"}</button>
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


