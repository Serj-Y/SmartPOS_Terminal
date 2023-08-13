import { ChangeEvent } from "react";

type ProductInputPropsType = {
  id: string;
  name: string;
  price: number;
  multiply: boolean;
  checked: string;
  onChangeChecked: (value: string) => void;
};

export const ProductInput = (props: ProductInputPropsType) => {
  const { id, name, price, multiply, checked, onChangeChecked } = props;

  const onChangeCheckedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    onChangeChecked(event.target.value);
  };

  return (
    <div>
      {multiply ? (
        <>
          <input
            type="radio"
            id={id}
            name="options"
            value={id}
            checked={checked === id}
            onChange={onChangeCheckedHandler}
          />
          <label htmlFor={id}>{`${name} - ${price}$`}</label>
        </>
      ) : (
        <>
          <span>{name}</span>
          <span>
            <button onClick={() => {}}>-</button>
            <button onClick={() => {}}>+</button>
          </span>
          <span>${price}</span>
        </>
      )}
    </div>
  );
};
