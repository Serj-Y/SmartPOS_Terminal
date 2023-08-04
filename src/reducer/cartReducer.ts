
import { v1 } from "uuid";
import { InferActionsTypes } from "../redux/store";

export type OrderType= {
    orders: {
        order: [
            {
                id: string, name: string, weight: number, price: number, img: string, option: [
                    { id: string, name: string, price: number, isAdd: number },
                ],
            },
        ],
    },
}


let initialState = {
    orders: {
        order: [
            {
                id: "1", name: "test", weight: 1, price: 1, img: "", option: [
                    { id: "1", name: "test", price: 0.20, isAdd: 0 },
                ],
            },
        ],
    },

};

type ActionsTypes = InferActionsTypes<typeof actions>
export  const cartReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-ORDER": {
            let newOrder = {
                id: v1(),
                name: action.newOrderForm,
              
            };
            return {
                ...state,
                order: [newOrder, ...state.orders.order]
            };
        }

        default:
            return state

    }
}

export const actions = {
    addOrderActionCreator: (newOrderForm:  string) => ({ type: "ADD-ORDER", newOrderForm } as const),
}


 