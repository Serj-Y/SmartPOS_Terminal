import { InferActionsTypes } from "../redux/store";


let initialState = {
    orders: [

    ],

};

type ActionsTypes = InferActionsTypes<typeof actions>

const cartReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD_ORDER": {
            debugger
            return {
                ...state,
                orders: [action.newOrderForm, ...state.orders,]
            };
        }
        case "DELETE_ITEM_OF_CART": {
            return {
                ...state,
                orders: [action.deleteItem ]
            };
        }
        case "CLEAN_CART": {
            return {
                ...state,
                orders: [action.cleanCart]
            }
        }

        default:
            return state

    }
}

export const actions = {
    addOrderActionCreator: (newOrderForm: any) => ({ type: "ADD_ORDER", newOrderForm } as const),
    deleteItemOfCartActionCreator: (deleteItem: any) => ({ type: "DELETE_ITEM_OF_CART", deleteItem } as const),
    cleanCartActionCreator: (cleanCart: () => void) => ({ type: "CLEAN_CART", cleanCart } as const),
}
export default cartReducer
