import { ItemProductType } from "./productReducer";

type BasketInitialType = Array<ItemProductType>;

const initialState: BasketInitialType = [];

export type BasketActionsTypes = ReturnType<typeof setBasketItem>;

export const basketReducer = (
  state = initialState,
  action: BasketActionsTypes
) => {
  switch (action.type) {
    case "BASKET/SET_ITEM": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export const setBasketItem = (item: ItemProductType) => {
  return { type: "BASKET/SET_ITEM", payload: item } as const;
};
