import { useSelector } from "react-redux";
import { selectItems } from "../../selectors/productSelectors";
import { RootState } from "../../redux/store";
import styles from "./Product.module.scss";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useState } from "react";
import { ProductSelected } from "../../components/ProductSelected/ProductSelected";

type ProductPagePropsType = {
  title: string;
  category: string;
  icon: JSX.Element;
};

export const ProductPage = (props: ProductPagePropsType) => {
  const [selectItem, setSelectItem] = useState<undefined | string>(undefined);

  const items = useSelector((state: RootState) =>
    selectItems(state.product.items, props.category)
  );

  return (
    <>
      <div className={styles.food}>
        <h2>
          {props.title} {props.icon}
        </h2>
        <div className={styles.items}>
          {selectItem === undefined ? (
            items.map((el) => (
              <ProductCard key={el.id} {...el} onClick={setSelectItem} />
            ))
          ) : (
            <ProductSelected onClose={setSelectItem} id={selectItem} />
          )}
        </div>
      </div>
    </>
  );
};
