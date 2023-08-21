import React from "react";
import style from "./cartItem.module.scss"
import { OptionType } from "../menuContainerConstructor/menuContainer";

type MenuItemType = {
    name: string;
    img: string;
    weight: number;
    price: number;
    options?: Array<OptionType> | any;
    CloseBtn: () => void;
};
export const CartItem: React.FC<MenuItemType> = ({ name, img, weight, price, options, CloseBtn }) => {

    if (name) {
        return (
            <div className={style.itemContainer}>
                <div className={style.item}>
                    <img src={img} alt={name} />
                    <div className={style.itemName}>{name}</div>
                    <div className={style.itemWeight}>{weight} g</div>
                    <div className={style.itemPrice}>${price}</div>
                    <div className={style.optionItem}>{options}</div>
                    <button onClick={CloseBtn}>X</button>
                </div>
            </div>
        );
    } else {
        return (
            <></>
        );
    }
};
