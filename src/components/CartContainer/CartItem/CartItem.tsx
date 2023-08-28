import React from "react";
import style from "./CartItem.module.scss"
import { OptionType } from "../../MenuContainer/MenuContainer";




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
                    <div className={style.deleteItem} onClick={CloseBtn}>Delete</div>
                </div>
            </div>
        );
    } else {
        return (
            <></>
        );
    }
};
