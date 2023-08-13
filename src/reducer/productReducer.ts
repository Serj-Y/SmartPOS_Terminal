import Cola from "../assets/png/cupCola.png";
import Sprite from "../assets/png/cupSprite.png";
import Fanta from "../assets/png/cupFanta.png";
import Espresso from "../assets/png/mugEspresso.png";
import Cappuccino from "../assets/png/mugCappuccino.png";
import Latte from "../assets/png/cupLatte.png";
import Tea from "../assets/png/mugTea.png";
import Hamburger from "../assets/png/Hamburger.png";
import Cheeseburger from "../assets/png/Cheeseburger.png";
import HamburgerXL from "../assets/png/HamburgerXL.png";
import BigJoh from "../assets/png/BigJoh.png";

export type ItemProductType = {
  id: string;
  name: string;
  weight: number;
  price: number;
  img: string;
  options?: Array<ItemProductOptionsType>;
  category: string;
};

export type ItemProductOptionsType = {
  id: string;
  name: string;
  price: number;
  weight?: number;
  category: Array<string>;
  multiply: boolean;
};

type InitialStateType = {
  items: Array<ItemProductType>;
  options: Array<ItemProductOptionsType>;
};

let initialState: InitialStateType = {
  items: [
    {
      id: "1",
      category: "food",
      name: "Hamburger",
      weight: 250,
      price: 2.45,
      img: Hamburger,
    },
    {
      id: "2",
      category: "food",
      name: "Hamburger XL",
      weight: 350,
      price: 3.45,
      img: HamburgerXL,
    },
    {
      id: "3",
      category: "food",
      name: "Cheeseburger",
      weight: 300,
      price: 3,
      img: Cheeseburger,
    },
    {
      id: "4",
      category: "food",
      name: "Big John",
      weight: 550,
      price: 5.5,
      img: BigJoh,
    },
    {
      id: "5",
      category: "cold",
      name: "CocaCola",
      weight: 500,
      price: 1.5,
      img: Cola,
    },
    {
      id: "6",
      category: "cold",
      name: "Sprite",
      weight: 500,
      price: 1.5,
      img: Sprite,
    },
    {
      id: "7",
      category: "cold",
      name: "Fanta",
      weight: 500,
      price: 1.5,
      img: Fanta,
    },
    {
      id: "8",
      category: "hot",
      name: "Espresso",
      weight: 50,
      price: 1.5,
      img: Espresso,
    },
    {
      id: "9",
      category: "hot",
      name: "Cappuccino",
      weight: 200,
      price: 2,
      img: Cappuccino,
    },
    {
      id: "10",
      category: "hot",
      name: "Latte",
      weight: 300,
      price: 4.3,
      img: Latte,
    },
    {
      id: "11",
      category: "hot",
      name: "Tea",
      weight: 350,
      price: 1.5,
      img: Tea,
    },
  ],
  options: [
    {
      id: "1",
      category: ["food"],
      name: "Cheese",
      price: 0.2,
      multiply: false,
    },
    { id: "2", category: ["food"], name: "Meat", price: 0.5, multiply: false },
    { id: "3", category: ["food"], name: "Bacon", price: 0.3, multiply: false },
    {
      id: "4",
      category: ["cold", "hot"],
      name: "1l",
      weight: 1000,
      price: 0.2,
      multiply: true,
    },
    {
      id: "5",
      category: ["cold", "hot"],
      name: "1.5l",
      weight: 1500,
      price: 0.5,
      multiply: true,
    },
    {
      id: "6",
      category: ["cold", "hot"],
      name: "2l",
      weight: 2000,
      price: 1,
      multiply: true,
    },
  ],
};

export type ProductActionsTypes = {};

export const productReducer = (
  state = initialState,
  action: ProductActionsTypes
) => {
  return state;
};
