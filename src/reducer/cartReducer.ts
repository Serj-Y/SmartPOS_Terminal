import { InferActionsTypes } from "../redux/store";


const initialState = {
    orders: [

    ],
options:[

]
};

type ActionsTypes = InferActionsTypes<typeof actions>

const cartReducer = (state = initialState, action: ActionsTypes) => {
    
    switch (action.type) {
        case "ADD_ORDER": {
            return {
                ...state,
                orders: [action.newOrderForm, ...state.orders,],
                options: []
            };
        }
        case "DELETE_ITEM_OF_CART": {
            return {
                ...state,
                orders: action.deleteItem 
            };
        }
        case "CLEAN_CART": {
            return {
                ...state,
                orders: []
            }
        }
        case "ADD_OPTION": {
            return {
                ...state,
                options: [action.option, ...state.options,]
            };
        }
        case "DELETE_ITEM_OF_OPTION": {
            return {
                ...state,
                options: action.deleteOptionItem 
            };
        }
        case "CLEAN_UP_OPTION": {
            return {
                ...state,
                options: []
            }
        }

        default:
            return state

    }
}

export const actions = {
    addOrderActionCreator: (newOrderForm: any) => ({ type: "ADD_ORDER", newOrderForm } as const),
    deleteItemOfCartActionCreator: (deleteItem: any) => ({ type: "DELETE_ITEM_OF_CART", deleteItem } as const),
    cleanCartActionCreator: () => ({ type: "CLEAN_CART" } as const),
    addOptionActionCreator: (option: any) => ({ type: "ADD_OPTION", option } as const),
    deleteItemOfOptionActionCreator: (deleteOptionItem: any) => ({ type: "DELETE_ITEM_OF_OPTION", deleteOptionItem } as const),
    cleanOptionsActionCreator: () => ({ type: "CLEAN_UP_OPTION"} as const),
}
export default cartReducer
