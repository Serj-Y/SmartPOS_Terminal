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

type InitialStateType = {
    foodMenu: {
        burger: [
            {
                id: string, name: string, weight: number, price: number, img: string, option?: Array<object>, ownOption?: [
                    { id: string, name: string, price: number, isAdd: number, weight?: number, }
                ]
            }
        ],
        option: [
            { id: string, name: string, price: number, isAdd: number, weight?: number, }
        ]
    },
    drinksMenu: {
        cold: [
            {
                id: string, name: string, weight: number, price: number, img: string, option?: Array<object>, ownOption?: [
                    { id: string, name: string, price: number, isAdd: number, weight?: number, }
                ]
            }
        ],
        coldOption: [
            { id: string, name: string, price: number, isAdd: number, weight?: number, }
        ]
        hot: {
            id: string, name: string, weight: number, price: number, img: string, option?: Array<object>, ownOption?: [
                { id: string, name: string, price: number, isAdd: number, weight?: number, }
            ]
        }
    }
    order: [
        {}
    ]
}

let initialState = {
    foodMenu: {
        burger: [
            { id: v1(), name: "Hamburger", weight: 250, price: 2.45, img: Hamburger, },
            { id: v1(), name: "Hamburger XL", weight: 350, price: 3.45, img: HamburgerXL, },
            { id: v1(), name: "Cheeseburger", weight: 300, price: 3, img: Cheeseburger, },
            { id: v1(), name: "Big John", weight: 550, price: 5.50, img: BigJoh, },
        ],
        option: [
            { id: v1(), name: "Cheese", weight: 20, price: 0.20, isAdd: 0, multiply: true },
            { id: v1(), name: "Meat", price: 0.50, isAdd: 0, multiply: true },
            { id: v1(), name: "Bacon", price: 0.30, isAdd: 0, multiply: true }
        ],
    },
    drinksMenu: {
        cold: [
            { id: v1(), name: "CocaCola", weight: 500, price: 1.5, img: Cola, },
            { id: v1(), name: "Sprite", weight: 500, price: 1.5, img: Sprite, },
            { id: v1(), name: "Fanta", weight: 500, price: 1.5, img: Fanta, },
            {
                id: v1(), name: "Aypa", weight: 500, price: 1, img: AquaMineral, ownOption: [
                    { id: v1(), name: "1l", price: 0.10,multiply: false  },
                    { id: v1(), name: "1.5l", price: 0.25,multiply: false },
                    { id: v1(), name: "2l", price: 0.50, multiply: false },
                ],
            },
        ],
        coldOption: [
            { id: v1(), name: "1l", weight: 1000, price: 0.20, multiply: false},
            { id: v1(), name: "1.5l", weight: 1500, price: 0.50, multiply: false },
            { id: v1(), name: "2l", weight: 2000, price: 1, multiply: false },],

        hot: [
            { id: v1(), name: "Espresso", weight: 50, price: 1.5, img: Espresso, },
            { id: v1(), name: "Cappuccino", weight: 200, price: 2, img: Cappuccino, },
            { id: v1(), name: "Latte", weight: 300, price: 4.30, img: Latte, },
            { id: v1(), name: "Tea", weight: 350, price: 1.5, img: Tea, },
        ]
    },


};

type ActionsTypes = InferActionsTypes<typeof actions>

const menuReducer = (state = initialState, action: ActionsTypes) => {
    return state
}

export const actions = {

}
export default menuReducer
