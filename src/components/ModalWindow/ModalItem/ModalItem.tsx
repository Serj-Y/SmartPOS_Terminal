import React from "react"
import styles from "./ModalItem.module.scss"


type PropsType = {
    AddToCartBtn: () => void
    option?: string | number
    name: string
    weight: number
    price: number
    img: string
}

export const ModalItem: React.FC<PropsType> = ({ name, img, weight, price, option, AddToCartBtn }) => {
    if (name) {
        return (
            <div className={styles.itemContainer}>
                <div className={styles.item}>
                    <img className={styles.img} src={img} alt={name} />
                    <div className={styles.namePriceWeightContainer} >
                        <div className={styles.name} >{name}</div>
                        <div className={styles.weight} >{weight} g</div>
                        <div className={styles.price} >${price}</div>
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