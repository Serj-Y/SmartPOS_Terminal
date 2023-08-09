import React, { useState } from "react";
import style from "./cartContainer.module.scss"
import styles from "../extraMenuItemConstructor/extraMenuItemConstructor.module.scss"
import { useDispatch } from "react-redux";
import { actions } from "../../reducer/menuReducer";


type PropsType = {
    option?: any
    CloseBtn?: any
    name: string
    weight: number
    price: any
    img: string
}

export const CartContainer = (props: any) => {
    let menu = props.stateMenu
    const dispatch =useDispatch()



    const cleanUp =()=>{
        dispatch(actions.cleanCartActionCreator(menu))
    }

    const Option = (props: any) => {
        const i = props.MenuObject;

        function onHandlerAddOption(i: any) {
    
        }


        function onHandlerDeleteOption(i: any) {

        
     
        }


        return (
            <div  >
                {i.name}
                <button onClick={() => onHandlerDeleteOption(i)} >-</button> <button onClick={() => onHandlerAddOption(i)} >+</button>
                ${i.price}
            </div>)
    }



    return (
        <div className={style.food}>
            <h2>{props.title} {props.icon}</h2>
            {menu.map((i: any) =>
                <div className={style.extraOption} >
                    <MenuItem name={i.name} weight={i.weight} price={i.price} option={ i.option? i.option.map((i: any) => <Option MenuObject={i}/>): <></>}
                      CloseBtn={cleanUp}
                        img={i.img}
                    />
                </div>
            )}
            {menu[1]?  <button onClick={cleanUp} >clean</button>: ""}
        </div>)
}

const MenuItem = (props: PropsType) => {
    if (props.name) {
            return (
          <div className={styles.itemContainer}>
            <div className={styles.item}>
                <img src={props.img } alt={props.name} />
                <p className={styles.itemName} >{props.name}</p>
                <p className={styles.itemWeight} >{props.weight} g</p>
                <p className={styles.itemPrice} >${props.price}</p>
                <p className={styles.optionItem} >{props.option}</p>
                <button onClick={props.CloseBtn} >X</button>
            </div>
        </div>
    )
    } else {
        return(
                   <></> 
        )

    }


}


