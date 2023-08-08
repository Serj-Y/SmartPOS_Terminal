import React, { useState } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import  MenuContainer  from "../common/menuContainerConstructor/menuContainer";
import { MenuItemConstructor } from "../common/menuItemConstructor/menuItemConstructor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";



export const Food = () => {
    const BurgerMenu = useSelector((state: RootState) => state.Menu.foodMenu.burger)
 const OptionMenu = useSelector((state:RootState) => state.Menu.foodMenu.option)
 const options = useSelector((state: RootState) => state.Menu.order) 





    return (
        <MenuContainer cartOfOption={options} extraMenu={OptionMenu}  stateMenu={BurgerMenu} title= "Burgers"  icon={<FontAwesomeIcon icon={faBurger}/>} />
    )}

