import React, { useState } from "react";
import styles from "./ProductSelected.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  selectCategoriesItem,
  selectItemById,
} from "../../selectors/productSelectors";
import { ItemProductOptionsType } from "../../reducer/productReducer";
import { ProductInput } from "../ProductInput/ProductInput";
import { setBasketItem } from "../../reducer/basketReducer";

type PropsType = {
  id: string;
  onClose: (value: undefined | string) => void;
};

export const ProductSelected: React.FC<PropsType> = ({ id, onClose }) => {
  const [checked, setChecked] = useState<string>("");
  const dispatch = useDispatch();

  const item = useSelector((state: RootState) =>
    selectItemById(state.product.items, id)
  );

  const options = useSelector((state: RootState) =>
    selectCategoriesItem(state.product.options, item?.category || "")
  );

  const onClickPushBasketHandler = () => {
    if (item && options) {
      const optionsResult = options.find((el) => el.id === checked);
      dispatch(
        setBasketItem({
          ...item,
          options: optionsResult
            ? [...(item.options || []), optionsResult]
            : item.options || [],
        })
      );
    }
  };

  if (item === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.extraOption}>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <img src={item?.img} alt={item.name} />
          <p className={styles.itemName}>{item.name}</p>
          <p className={styles.itemWeight}>{item.weight} g</p>
          <p className={styles.itemPrice}>
            $
            {item.price + (options.find((el) => el.id === checked)?.price || 0)}
          </p>
          {options.map((el: ItemProductOptionsType, it) => (
            <ProductInput
              id={el.id}
              key={it}
              name={el.name}
              price={el.price}
              multiply={el.multiply}
              checked={checked}
              onChangeChecked={setChecked}
            />
          ))}
          <div className={styles.addBtn}>
            <button onClick={onClickPushBasketHandler}>Add To Cart</button>
          </div>
          <div>
            <button onClick={() => onClose(undefined)}>X</button>
          </div>
        </div>
      </div>
    </div>
  );
};
