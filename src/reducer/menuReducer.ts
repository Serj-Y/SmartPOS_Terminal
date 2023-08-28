import { v1 } from "uuid";
import * as Assets from "../assets/images"


let initialState = {
    foodMenu: {
        burger: [
            { id: v1(), name: "Hamburger", weight: 250, price: 2.45, img: Assets.Hamburger, },
            { id: v1(), name: "Hamburger XL", weight: 350, price: 3.45, img: Assets.HamburgerXL, },
            { id: v1(), name: "Cheeseburger", weight: 300, price: 3, img: Assets.Cheeseburger, },
            { id: v1(), name: "Big John", weight: 550, price: 5.50, img: Assets.BigJoh, },
        ],
        burgerOptions: [
            { id: v1(), name: "Cheese", weight: 10, price: 0.10, img: Assets.Cheese, multiply: true },
            { id: v1(), name: "Meat", weight: 60, price: 0.50, img: Assets.Meat, multiply: true },
            { id: v1(), name: "Bacon", weight: 25, price: 0.30, img: Assets.Bacon, multiply: true }
        ],
    },
    drinksMenu: {
        cold: [
            { id: v1(), name: "CocaCola", weight: 500, price: 1.5, img: Assets.Cola, },
            { id: v1(), name: "Sprite", weight: 500, price: 1.5, img: Assets.Sprite, },
            { id: v1(), name: "Fanta", weight: 500, price: 1.5, img: Assets.Fanta, },
            {
                id: v1(), name: "Aqua Minerale", weight: 500, price: 1, img: Assets.AquaMineral, ownOption: [
                    { id: "default", name: "O.5L", weight: 500, price: "", img: Assets.Bottle, multiply: false },
                    { id: v1(), name: "1L", weight: 1000, price: 0.20, img: Assets.Bottle, multiply: false },
                ],
            },
        ],
        coldDrinksOptions: [
            { id: "default", name: "O.5L", weight: 500, price: "", img: Assets.Cup, multiply: false },
            { id: v1(), name: "1L", weight: 1000, price: 0.20, img: Assets.Bottle, multiply: false },
            { id: v1(), name: "1.5L", weight: 1500, price: 0.50, img: Assets.Bottle, multiply: false },
        ],

        hot: [
            {
                id: v1(), name: "Espresso", weight: 50, price: 1.5, img: Assets.Espresso, ownOption: [
                    { id: v1(), name: "Doppio", weight: 10, price: 1, img: Assets.CoffeeBeans, multiply: true },
                    { id: v1(), name: "Milk", weight: 20, price: 0.20, img: Assets.Pitcher, multiply: true },
                ]
            },
            { id: v1(), name: "Cappuccino", weight: 200, price: 2, img: Assets.Cappuccino, },
            { id: v1(), name: "Latte", weight: 300, price: 4.30, img: Assets.Latte, },
            { id: v1(), name: "Tea", weight: 350, price: 1.5, img: Assets.Tea, ownOption: [] },
        ],
        hotDrinksOptions: [
            { id: v1(), name: "Syrup", weight: 10, price: 0.50, img: Assets.Syrup, multiply: true },
        ]
    },
};

const menuReducer = (state = initialState) => {
    return state
}

export default menuReducer
