import { v1 } from "uuid";
import { InferActionsTypes } from "../redux/store";


let initialState = {
    foodMenu: {
        burger: [
            {
                id: v1(), name: "Burger", weight: 250, price: 2.45, img: "", option: [
                    { id: v1(), name: "Cheese", price: 0.20, isAdd: 0 },
                    { id: v1(), name: "Meat", price: 0.50, isAdd: 0 },
                    { id: v1(), name: "Bacon", price: 0.30, isAdd: 0 }
                ],
            },
            {
                id: v1(), name: "Burger XL", weight: 350, price: 3.45, img: "", option: [
                    { id: v1(), name: "Cheese", price: 0.25 },
                    { id: v1(), name: "Meat", price: 0.55 },
                    { id: v1(), name: "Bacon", price: 0.35 }
                ],
            },
            {
                id: v1(), name: "Cheeseburger", weight: 300, price: 3, img: "", option: [
                    { id: v1(), name: "Cheese", price: 0.25 },
                    { id: v1(), name: "Meat", price: 0.55 },
                    { id: v1(), name: "Bacon", price: 0.35 }
                ],
            },
            {
                id: v1(), name: "Big John", weight: 550, price: 5.50, img: "", option: [
                    { id: v1(), name: "Cheese", price: 0.25 },
                    { id: v1(), name: "Meat", price: 0.55 },
                    { id: v1(), name: "Bacon", price: 0.35 }
                ],
            },
        ]
    },
    drinksMenu: {
        cold: [
            { id: v1(), name: "CocaCola", weight: 330, price: 0.99, img: "", },
            { id: v1(), name: "Sprite", weight: 330, price: 0.99, img: "", },
            { id: v1(), name: "Fanta", weight: 330, price: 0.99, img: "", },
            { id: v1(), name: "Aypa", weight: 0.5, price: 0.99, img: "", },
        ],

        hot: [
            { id: v1(), name: "Espresso", weight: 50, price: 1.5, img: "", },
            { id: v1(), name: "Cappuccino", weight: 200, price: 2, img: "", },
            { id: v1(), name: "Latte", weight: 300, price: 4.30, img: "", },
            { id: v1(), name: "Tea", weight: 350, price: 1.5, img: "", },
        ]
    },
    orders: {
        order: [
            { id: v1(), name: "", weight: 0, price: 0, img: "", },
        ],
    },

};

type ActionsTypes = InferActionsTypes<typeof actions>
export  const menuReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-ORDER": {
            let newOrder = {
                id: v1(),
                name: action.newOrderForm,
                likesCount: 0,
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


 