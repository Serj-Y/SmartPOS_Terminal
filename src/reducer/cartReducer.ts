
import { v1 } from "uuid";
import { InferActionsTypes } from "../redux/store";


export type OrderType = {
    orders: {
        order: [
            {
                id: string, name: string, weight: number, price: number, img: string, 
            },
        ],
    },
}




let initialState = {
    
        order: [
            {
                // id: v1(), name: "test", weight: 1, price: 1, img: "" 
            },
        ],
    };

type ActionsTypes = InferActionsTypes<typeof actions>
const CartReducer = (state = initialState, action: ActionsTypes) => {
debugger

    switch (action.type) {
        case "ADD_ORDER": {
            return {
              ...state,
              order: [ action.newOrderForm, ...state.order, ]
            };
        } 
        case "ADD_OPTION": {
            return {
              ...state,
              option: [ action.selectedOption , ...state.order ]
            };
        }

        default:
            return state

    }
}

export const actions = {
    addOrderActionCreator: (newOrderForm: any) => ({ type: "ADD_ORDER", newOrderForm } as const),
    addOptionActionCreator: (selectedOption: any) => ({ type: "ADD_OPTION", selectedOption } as const),

}







export default CartReducer





