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
            {
                id: v1(), name: "Hamburger", weight: 250, price: 2.45, img: Hamburger, option: [
                    { id: v1(), name: "Cheese", price: 0.20, isAdd: 0 },
                    { id: v1(), name: "Meat", price: 0.50, isAdd: 0 },
                    { id: v1(), name: "Bacon", price: 0.30, isAdd: 0 }
                ],
            },
            {
                id: v1(), name: "Hamburger XL", weight: 350, price: 3.45, img: HamburgerXL, option: [
                    { id: v1(), name: "Cheese", price: 0.25 },
                    { id: v1(), name: "Meat", price: 0.55 },
                    { id: v1(), name: "Bacon", price: 0.35 }
                ],
            },
            {
                id: v1(), name: "Cheeseburger", weight: 300, price: 3, img: Cheeseburger, option: [
                    { id: v1(), name: "Cheese", price: 0.25 },
                    { id: v1(), name: "Meat", price: 0.55 },
                    { id: v1(), name: "Bacon", price: 0.35 }
                ],
            },
            {
                id: v1(), name: "Big John", weight: 550, price: 5.50, img: BigJoh, option: [
                    { id: v1(), name: "Cheese", price: 0.25 },
                    { id: v1(), name: "Meat", price: 0.55 },
                    { id: v1(), name: "Bacon", price: 0.35 }
                ],
            },
        ]
    },
    drinksMenu: {
        cold: [
            { id: v1(), name: "CocaCola", weight: 500, price: 1.5, img: Cola ,option: [
                { id: v1(), name: "Cheese", price: 0.20, isAdd: 0 },] },
            { id: v1(), name: "Sprite", weight: 500, price: 1.5, img: Sprite, },
            { id: v1(), name: "Fanta", weight: 500, price: 1.5, img: Fanta, },
            { id: v1(), name: "Aypa", weight: 500, price: 1, img: AquaMineral, },
        ],

        hot: [
            { id: v1(), name: "Espresso", weight: 50, price: 1.5, img: Espresso, },
            { id: v1(), name: "Cappuccino", weight: 200, price: 2, img: Cappuccino, },
            { id: v1(), name: "Latte", weight: 300, price: 4.30, img: Latte, },
            { id: v1(), name: "Tea", weight: 350, price: 1.5, img: Tea, },
        ]
    },
   
};


export  const menuReducer = (state = initialState ) => {


        
            return state

    }


