import React, { useState } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import  MenuContainer  from "../common/menuContainerConstructor/menuContainer";
import { MenuItemConstructor } from "../common/menuItemConstructor/menuItemConstructor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

// import  styles  from "./food.module.scss";





export const Food = () => {
    const BurgerMenu = useSelector((state: RootState) => state.Menu.foodMenu.burger)
    const Cart = useSelector((state: RootState)=> state.Cart.order)

    return (
        <MenuContainer  cart={Cart} stateMenu={BurgerMenu} title= "Burgers"  icon={<FontAwesomeIcon icon={faBurger}/>} />
    )}

// export const Food = (props:any) => {
//     const menu = useSelector((state: RootState) => state.Menu.foodMenu)

//     function onClickHandler(id: any) {
//         console.log(id)
//     }

//     return (
//         <div className={styles.food} >
//             <h2>{props.title}</h2>
//             <div className={styles.items}>
//                 {menu.burger.map(i => <div key={i.id} >
//                     <label form="Btn">
//                         <MenuItemConstructor name={i.name} weight={i.weight} price={i.price} alt={""} img={""} />
//                         <button id="Btn" style={{ display: "none" }} onClick={() => onClickHandler(i.id)} ></button>
//                     </label>
//                 </div>
//                 )
//                 }
//             </div>
//         </div>
//     )
// }


