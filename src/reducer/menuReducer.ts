import { v1 } from "uuid";
import { InferActionsTypes } from "../redux/store";
import Cola from "../common/assets/png/cupCola.png"
import Sprite from "../common/assets/png/cupSprite.png"
import Fanta from "../common/assets/png/cupFanta.png";
import AquaMineral from "../common/assets/png/butleAquaMinerale.png";
import Espresso from "../common/assets/png/mugEspresso.png"
import Cappuccino from "../common/assets/png/mugCappuccino.png"
import Latte from "../common/assets/png/cupLatte.png"
import Tea from "../common/assets/png/mugTea.png"
import Hamburger from "../common/assets/png/Hamburger.png"
import Cheeseburger from "../common/assets/png/Cheeseburger.png"
import HamburgerXL from "../common/assets/png/HamburgerXL.png"
import BigJoh from "../common/assets/png/BigJoh.png"


let initialState = {
    foodMenu: {
        burger: [
            { id: v1(), name: "Hamburger", weight: 250, price: 2.45, img: Hamburger, },
            { id: v1(), name: "Hamburger XL", weight: 350, price: 3.45, img: HamburgerXL,  },
            { id: v1(), name: "Cheeseburger", weight: 300, price: 3, img: Cheeseburger,  },
            { id: v1(), name: "Big John", weight: 550, price: 5.50, img: BigJoh,  },
        ],
        option: [
            { id: 1, name: "Cheese", price: 0.20, isAdd: 0 },
            { id: 2, name: "Meat", price: 0.50, isAdd: 0 },
            { id: 3, name: "Bacon", price: 0.30, isAdd: 0 }
        ],
    },
    drinksMenu: {
        cold: [
            { id: v1(), name: "CocaCola", weight: 500, price: 1.5, img: Cola,  },
            { id: v1(), name: "Sprite", weight: 500, price: 1.5, img: Sprite,  },
            { id: v1(), name: "Fanta", weight: 500, price: 1.5, img: Fanta,  },
            {
                id: v1(), name: "Aypa", weight: 500, price: 1, img: AquaMineral,  ownOption: [
                    { id: 1, name: "1l", price: 0.10, isAdd: 0 },
                    { id: 2, name: "1.5l", price: 0.25, isAdd: 0 },
                    { id: 3, name: "2l", price: 0.50, isAdd: 0 },
                ],
            },
        ],
        coldOption: [
            { id: 1, name: "1l", weight: 1000, price: 0.20, isAdd: 0 },
            { id: 2, name: "1.5l", weight: 1500, price: 0.50, isAdd: 0 },
            { id: 3, name: "2l", price: 2000, isAdd: 0 },],

        hot: [
            { id: v1(), name: "Espresso", weight: 50, price: 1.5, img: Espresso, },
            { id: v1(), name: "Cappuccino", weight: 200, price: 2, img: Cappuccino, },
            { id: v1(), name: "Latte", weight: 300, price: 4.30, img: Latte, },
            { id: v1(), name: "Tea", weight: 350, price: 1.5, img: Tea, },
        ]
    },

    order: [

    ],

};

type ActionsTypes = InferActionsTypes<typeof actions>

const menuReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD_ORDER": {
            debugger
            return {
                ...state,
                order: [action.newOrderForm, ...state.order,]
            };
        }
        case "DELETE_ITEM_OF_CART": {
            return {
                ...state,
                order: [action.deleteItem]
            };
        }
        case "CLEAN_CART": {
            return {
                ...state,
                order: [action.cleanCart]
            };
        }

        default:
            return state

    }
}

export const actions = {
    addOrderActionCreator: (newOrderForm: any) => ({ type: "ADD_ORDER", newOrderForm } as const),
    deleteItemOfCartActionCreator: (deleteItem: any) => ({ type: "DELETE_ITEM_OF_CART", deleteItem } as const),
    cleanCartActionCreator: (cleanCart: any) => ({ type: "CLEAN_CART", cleanCart } as const),
}
export default menuReducer
