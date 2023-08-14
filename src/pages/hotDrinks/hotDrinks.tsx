import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import  MenuContainer  from "../../common/components/menuContainerConstructor/menuContainer";
import {  faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const HotDrinks = () => {

    const HotDrinksMenu = useSelector((state: RootState) => state.Menu.drinksMenu.hot)

    return (
 
            <MenuContainer stateMenu={HotDrinksMenu} title="Hot Drinks" icon={<FontAwesomeIcon icon={faMugHot} /> }/>
  
    )
}
