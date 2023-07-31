
import React, { useEffect, useState } from "react"
import styles from "./menuItemConstructor.module.scss"
import burgerIcon from "../assets/svg/hamburger.svg"

type PropsType = {
    name: string
    weight: number
    price: number
    alt: string
    img: string

}


export const MenuItemConstructor: React.FC<PropsType> = (props) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [whichMenuIsOpen, setWhichMenuIsOpen] = useState("")

    const onClickHandler = () => {
        setIsOpenMenu(true)
        setWhichMenuIsOpen(props.name)
        console.log(props.name)
        if (isOpenMenu) {
            setIsOpenMenu(false)
        }


    }

    return (
        <div className={styles.itemContainer}>
            <label htmlFor="container">
                <button id="container" name="container"  style={{ display: "none" }} onClick={onClickHandler} />
                <div className={styles.item}>
                    <img src={props.img || burgerIcon} alt={props.alt || burgerIcon} />
                    <p className={styles.itemName} >{props.name}</p>
                    <p className={styles.itemWeight} >{props.weight} g</p>
                    <p className={styles.itemPrice} >${props.price}</p>
                </div>
            </label>
        </div>

    )
} 