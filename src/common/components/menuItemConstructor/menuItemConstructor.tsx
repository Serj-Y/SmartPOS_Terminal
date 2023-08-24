import React from "react"
import styles from "./menuItemConstructor.module.scss"

type PropsType = {
    name: string
    weight: number
    price: number
    img: string
}

export const MenuItemConstructor: React.FC<PropsType> = ({ img, name, weight, price }) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.item}>
                <img src={img} alt={name} />
                <div>
                    <p className={styles.itemName} >{name}</p>
                    <p className={styles.itemWeight} >{weight} g</p>
                </div>
                <p className={styles.itemPrice} >${price}</p>
            </div>
        </div>
    )
}