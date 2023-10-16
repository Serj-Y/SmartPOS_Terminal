import React from "react";
import styles from "./MenuItem.module.scss";

type PropsType = {
  name: string;
  weight: number;
  price: number;
  img: string;
};

export const MenuItem: React.FC<PropsType> = ({ img, name, weight, price }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.item}>
        <img src={img} alt={name} />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.weight}>{weight} g</p>
        </div>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
};
