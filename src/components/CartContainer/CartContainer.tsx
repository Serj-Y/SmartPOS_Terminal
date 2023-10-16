import React, { ReactElement } from "react";
import styles from "./CartContainer.module.scss";
import { useDispatch } from "react-redux";
import { OrderType } from "../MenuContainer/MenuContainer";
import { actions } from "../../reducer/cartReducer";
import { CartItem } from "./CartItem/CartItem";
import { toast } from "react-toastify";

type PropsType = {
  cartItems: Array<OrderType>;
  title: string;
  icon: ReactElement;
};

export const CartContainer: React.FC<PropsType> = ({
  cartItems,
  title,
  icon,
}) => {
  const dispatch = useDispatch();

  const DeleteCartItem = (id: string, name: string) => {
    dispatch(actions.deleteItemOfCartActionCreator(id));
    toast.success(`Is Deleted: ${name}`);
  };

  const CleanUp = () => {
    dispatch(actions.cleanCartActionCreator());
    toast.success("Cart Is Clean Up");
  };

  const Option = ({ option }: any) => {
    return (
      <div>
        {option.multiply === false ? (
          ""
        ) : (
          <>
            {option.name} wight: {option.weight}g price: {option.price}$
          </>
        )}
      </div>
    );
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.title}>
        <span>
          {title} {icon}
        </span>
      </div>
      <div className={styles.itemsContainer}>
        {cartItems.map((i: OrderType) => (
          <div key={i.id} className={styles.items}>
            <CartItem
              name={i.name}
              weight={i.weight}
              price={i.price}
              options={
                i.option
                  ? i.option.map((i) => (
                      <div key={i.id}>
                        <Option option={i} />
                      </div>
                    ))
                  : null
              }
              CloseBtn={() => DeleteCartItem(i.id, i.name)}
              img={i.img}
            />
          </div>
        ))}
        {cartItems[1] ? (
          <div className={styles.cleanCartBtn} onClick={() => CleanUp()}>
            Clean cart
          </div>
        ) : null}
      </div>
    </div>
  );
};
