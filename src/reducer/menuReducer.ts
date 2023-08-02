import { v1 } from "uuid";


let initialState = {
    foodMenu: {
        burger: [
            {
                id: v1(), name: "Burger", weight: 250, price: 2.45, img: "", option: [
                    { name: "Cheese", price: 0.25 },
                    { name: "Meat", price: 0.55 },
                    { name: "Bacon", price: 0.35 }
                ],
            },
            {
                id: v1(), name: "Burger XL", weight: 350, price: 3.45, img: "", option: [
                    { name: "Cheese", price: 0.25 },
                    { name: "Meat", price: 0.55 },
                    { name: "Bacon", price: 0.35 }
                ],
            },
            {
                id: v1(), name: "Cheeseburger", weight: 300, price: 3, img: "", option: [
                    { name: "Cheese", price: 0.25 },
                    { name: "Meat", price: 0.55 },
                    { name: "Bacon", price: 0.35 }
                ],
            },
            {
                id: v1(), name: "Big John", weight: 550, price: 5.50, img: "", option: [
                    { name: "Cheese", price: 0.25 },
                    { name: "Meat", price: 0.55 },
                    { name: "Bacon", price: 0.35 }
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
    }
};




export const menuReducer = (state = initialState) => {



    return (
        state
    )
}

