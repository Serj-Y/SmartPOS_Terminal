import React from "react";
import styles from "./ProductCard.module.scss";

type PropsType = {
  onClick: (id: string) => void;
  id: string;
  name: string;
  weight: number;
  price: number;
  img: string;
};

export const ProductCard: React.FC<PropsType> = (props) => {
  const { id, img, name, weight, price, onClick } = props;

  return (
    <div onClick={() => onClick(id)} className={styles.itemContainer}>
      <div className={styles.item}>
        <img src={img} alt={name} />
        <p className={styles.itemName}>{name}</p>
        <p className={styles.itemWeight}>{weight} g</p>
        <p className={styles.itemPrice}>${price}</p>
      </div>
    </div>
  );
};
