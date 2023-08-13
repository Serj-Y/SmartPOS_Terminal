import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type PropsType = {};

export const BasketPage: React.FC<PropsType> = (props) => {
  const orders = useSelector((state: RootState) => state.basket);

  return (
    <div>
      {orders.map((el) => {
        return (
          <div>
            <span>{el.name}</span>
            {el.options && (
              <>
                <span> - Options: </span>
                <span>
                  {el.options.map((option, key) => (
                    <span key={key}>
                      {option.name} - {option.price}$
                    </span>
                  ))}
                </span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
