import React from "react";
import style from "./CartItem.module.scss"


type MenuItemType = {
    name: string;
    img: string;
    weight: number;
    price: number;
    options?: any;
    CloseBtn: () => void;
};

export const CartItem: React.FC<MenuItemType> = ({ name, img, weight, price, options, CloseBtn }) => {

    if (name) {
        return (
            <div className={style.itemContainer}>
                <div className={style.item}>
                    <img src={img} alt={name} />
                    <div className={style.name}>{name}</div>
                    <div className={style.weight}>{weight} g</div>
                    <div className={style.price}>${price}</div>
                    <div className={style.options}>{options}</div>
                    <div className={style.deleteBtn} onClick={CloseBtn}>Delete</div>
                </div>
            </div>
        );
    } else {
        return (
            <></>
        );
    }
};
