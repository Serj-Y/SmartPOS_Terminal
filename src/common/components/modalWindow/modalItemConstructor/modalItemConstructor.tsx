import React from "react"
import styles from "./modalItemConstructor.module.scss"


type PropsType = {
    AddToCartBtn: () => void
    option?: string | number
    name: string
    weight: number
    price: number
    img: string
}

export const ModalItemConstructor: React.FC<PropsType> = ({ name, img, weight, price, option, AddToCartBtn }) => {
    if (name) {
        return (
            <div className={styles.itemContainer}>
                <div className={styles.item}>
                    <img src={img} alt={name} />
                    <div className={styles.namePriceWeight} >
                        <div className={styles.itemName} >{name}</div>
                        <div className={styles.itemWeight} >{weight} g</div>
                        <div className={styles.itemPrice} >${price}</div>
                    </div>
                    <div className={styles.optionItem} >{option}</div>
                    <div className={styles.addBtn} onClick={AddToCartBtn} >Add To Cart</div>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}


