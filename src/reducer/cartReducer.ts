
import { v1 } from "uuid";
import { InferActionsTypes, RootState } from "../redux/store";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export type OrderType = {
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
    
        order: [
            {
                id: v1(), name: "test", weight: 1, price: 1, img: "", option: [
                    { id: v1(), name: "test", price: 0.20, isAdd: 1 },
                ],
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

        default:
            return state

    }
}

export const actions = {
    addOrderActionCreator: (newOrderForm: any) => ({ type: "ADD_ORDER", newOrderForm } as const),

}




export default CartReducer





