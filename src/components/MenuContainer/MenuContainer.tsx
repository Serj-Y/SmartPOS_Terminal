import React, { useState } from "react";
import styles from "./MenuContainer.module.scss"
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { v1 } from "uuid";
import { MenuItem } from "../MenuItem/MenuItem";
import { ModalWindow } from "../ModalWindow/Modal";
import { ModalItem } from "../ModalWindow/ModalItem/ModalItem";
import { actions } from "../../reducer/cartReducer";


export type OptionType = {
    id: string
    name: string,
    weight: number,
    price: number,
}

export type OrderType = {
    id: string,
    name: string,
    weight: number,
    price: number,
    img: string,
    option?: Array<object>
}


const MenuContainer = (props: any) => {
    const menu = props.stateMenu;
    const extraMenu = props.extraMenu
    const stateOptions = props.options
    const [secondMenu, setSecondMenu] = useState(menu)
    const [isOpen, setIsOpen] = useState(false)
    const [pricer, setPricer] = useState(secondMenu.price)
    const [localStateOptions, setSelectedOption] = useState([]) as any
    const [checked, setChecked] = useState([]) as any
    const [totalItemWeight, setTotalItemWeight] = useState(secondMenu.weight)
    const [defaultCheckedOption, setDefaultCheckedOption] = useState(null)

    const dispatch = useDispatch()
    const alert = useAlert()

    function OnOpenExtraOptions(i: OrderType) {
        const defaultCheckedOption = extraMenu?.find(({ id }: any) => id === "default")

        setIsOpen(true)
        setSecondMenu(i)
        setPricer(i.price)
        setTotalItemWeight(i.weight)
        setDefaultCheckedOption(defaultCheckedOption?.id)
        setChecked(defaultCheckedOption?.id)
    }

    function OnCloseExtraOptions() {
        setIsOpen(false)
        setChecked("")
        dispatch(actions.cleanOptionsActionCreator())
    }

    const AddToCart = (order: OrderType) => {
        const orderWithOption = { ...order, id: v1(), weight: totalItemWeight || order.weight, price: FixPriceDecimals(pricer), option: stateOptions || localStateOptions }
        dispatch(actions.addOrderActionCreator(orderWithOption));
        setPricer(secondMenu.price)
        setTotalItemWeight(secondMenu.weight)
        setChecked(defaultCheckedOption)
        setSelectedOption([])
        alert.show(`Is Add: ${order.name}`)
    }

    function FixPriceDecimals(price: number) {
        const fixPrice = Math.round(price * 100) / 100
        return (
            fixPrice
        )
    }

    const Option = (props: any) => {
        const i = props.MenuObject;
        const findCheckedOption = stateOptions?.find(({ id }: any) => id === i.id)

        function OnChangeOptionForCheckBox(i: OptionType) {
            if (findCheckedOption?.id !== i.id) {
                setPricer((prev: any) => prev + i.price)
                setTotalItemWeight((prev: any) => prev + i.weight)
                dispatch(actions.addOptionActionCreator({ ...i }))
            } else {
                const updatedOption = stateOptions.filter((filtredOption: any) => filtredOption.id !== i.id)
                setPricer(secondMenu.price < pricer ? (prev: any) => prev - i.price : secondMenu.price)
                setTotalItemWeight(secondMenu.weight < totalItemWeight ? (prev: any) => prev - i.weight : secondMenu.weight)
                dispatch(actions.deleteItemOfOptionActionCreator(updatedOption))
            }
        }

        function OnChangeOptionForRadio(i: OptionType) {
            if (checked !== i.id) {
                setPricer(secondMenu.price + i.price)
                setTotalItemWeight(secondMenu.weight > i.weight ? secondMenu.weight + i.weight : i.weight)
                setChecked(i.id)
                setSelectedOption([{ ...i }])
            } else {
                setPricer(secondMenu.price)
                setChecked("")
            }
        }

        return (
            <div className={styles.optionsContainer} >
                {i.multiply
                    ? <div onClick={() => OnChangeOptionForCheckBox(i)} className={findCheckedOption?.id === i.id ? styles.check : styles.options}>
                        <div className={styles.imageAndNameContainer} >
                            {i.img ? <img className={styles.img} src={i.img} alt="i.name" /> : <></>}
                            <div>
                                {i.name}
                            </div>
                        </div>
                        <div className={styles.weightAndPriceContainer} >
                            <div className={styles.weight}>
                                +{i.weight}g
                            </div>
                                <div className={styles.price}>
                                    ${i.price}
                            </div>
                        </div>
                    </div>
                    : <div onClick={() => OnChangeOptionForRadio(i)} className={i.id === checked ? styles.check : styles.options}>
                        <div className={styles.imageAndNameContainer} >
                            {i.img ? <img className={styles.img} src={i.img} alt="i.name" /> : <></>}
                            <div>
                                {i.name}
                            </div>
                        </div>
                        <div className={styles.weightAndPriceContainer} >
                            <div className={styles.weight}>
                                {i.weight}g
                            </div>
                                <div className={styles.price}>
                                    ${i.price === "" ? secondMenu.price : i.price + secondMenu.price}
                                </div>
                        </div>
                    </div>
                
                }
         </div>
        )
    }
    return (
        <div className={styles.food}>
            <div className={styles.title}>
                <span>{props.title} {props.icon}</span>
            </div>
            <div className={styles.items}>
                {menu.map((i: OrderType) =>
                    <div key={i.id}>
                        <label form="Btn">
                            <MenuItem
                                name={i.name}
                                weight={i.weight}
                                price={i.price}
                                img={i.img}
                            />
                            <button id="Btn" style={{ display: "none" }} onClick={() => OnOpenExtraOptions(i)} />
                        </label>
                    </div>
                )}
            </div>
            <div className={styles.extraOption} >
                <ModalWindow active={isOpen} setActive={() => OnCloseExtraOptions()} closeBtn={() => OnCloseExtraOptions()} >
                    <ModalItem
                        img={secondMenu.img}
                        name={secondMenu.name}
                        weight={totalItemWeight}
                        price={FixPriceDecimals(pricer)}
                        AddToCartBtn={() => AddToCart(secondMenu)}
                        option={secondMenu.ownOption
                            ? secondMenu.ownOption.map((i: OptionType) => <div key={i.id} > <Option MenuObject={i} /> </div>)
                            : extraMenu
                                ? extraMenu.map((i: OptionType) => <div key={i.id}> <Option MenuObject={i} /></div>)
                                : <></>
                        }
                    />
                </ModalWindow>
            </div>
        </div>
    );
};


export default MenuContainer