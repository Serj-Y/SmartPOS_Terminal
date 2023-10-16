import {
  OptionType,
  OrderType,
} from "../components/MenuContainer/MenuContainer";
import { InferActionsTypes } from "../redux/store";

type InitialStateType = {
  orders: Array<OrderType>;
  options: Array<OptionType>;
};

const initialState: InitialStateType = {
  orders: [],
  options: [],
};

type ActionsTypes = InferActionsTypes<typeof actions>;

const cartReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "ADD_ORDER": {
      return {
        ...state,
        orders: [action.newOrderForm, ...state.orders],
        options: [],
      };
    }
    case "DELETE_ITEM_OF_CART": {
      const filtredItems = [
        ...state.orders.filter((item: any) => item.id !== action.id),
      ];
      return {
        ...state,
        orders: filtredItems,
      };
    }
    case "CLEAN_CART": {
      return {
        ...state,
        orders: [],
      };
    }
    case "ADD_OPTION": {
      return {
        ...state,
        options: [action.option, ...state.options],
      };
    }
    case "DELETE_OPTION": {
      const filtredOption = [
        ...state.options.filter((item: any) => item.id !== action.id),
      ];
      return {
        ...state,
        options: filtredOption,
      };
    }
    case "CLEAN_UP_OPTION": {
      return {
        ...state,
        options: [],
      };
    }

    default:
      return state;
  }
};

export const actions = {
  addOrderActionCreator: (newOrderForm: OrderType) =>
    ({ type: "ADD_ORDER", newOrderForm } as const),
  deleteItemOfCartActionCreator: (id: string) =>
    ({ type: "DELETE_ITEM_OF_CART", id } as const),
  cleanCartActionCreator: () => ({ type: "CLEAN_CART" } as const),
  addOptionActionCreator: (option: OptionType) =>
    ({ type: "ADD_OPTION", option } as const),
  deleteOptionActionCreator: (id: any) =>
    ({ type: "DELETE_OPTION", id } as const),
  cleanOptionsActionCreator: () => ({ type: "CLEAN_UP_OPTION" } as const),
};
export default cartReducer;
