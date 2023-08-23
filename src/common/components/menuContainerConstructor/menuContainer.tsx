import React, { useState } from "react";
import styles from "./menuContainer.module.scss"
import { MenuItemConstructor } from "../menuItemConstructor/menuItemConstructor";
import { ModalItemConstructor } from "../modalWindow/modalItemConstructor/modalItemConstructor";
import { actions } from "../../../reducer/cartReducer";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { v1 } from "uuid";
import { ModalWindow } from "../modalWindow/modal";


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
    const [isChecked, setChecked] = useState([]) as any
    const [isTotalItemWeight, setTotalItemWeight] = useState(secondMenu.weight)
    const [isDefaultCheckedOption, setDefaultCheckedOption] = useState(null)

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
        const orderWithOption = { ...order, id: v1(), weight: isTotalItemWeight || order.weight, price: FixPriceDecimals(pricer), option: stateOptions || localStateOptions }
        dispatch(actions.addOrderActionCreator(orderWithOption));
        setPricer(secondMenu.price)
        setTotalItemWeight(secondMenu.weight)
        setChecked(isDefaultCheckedOption)
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
                setTotalItemWeight(secondMenu.weight < isTotalItemWeight ? (prev: any) => prev - i.weight : secondMenu.weight)
                dispatch(actions.deleteItemOfOptionActionCreator(updatedOption))
            }
        }

        function OnChangeOptionForRadio(i: OptionType) {
            if (isChecked !== i.id) {
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
                    ? <div className={styles.options}>
                        <div className={styles.optionsImgAndName} style={{ display: 'flex', alignItems: "center" }}>
                            {i.img ? <img className={styles.optionImg} src={i.img} alt="i.name" /> : <></>}
                            <div>
                                {i.name}
                            </div>
                        </div>
                        <div className={styles.optionsWeight} >
                            <div className={styles.optionsWeight}>
                                +{i.weight}g
                            </div>
                            <div className={styles.optionsSelectorAndPrice}>
                                <input id={v1()} type="checkBox" checked={findCheckedOption?.id === i.id} onChange={() => OnChangeOptionForCheckBox(i)} />
                                <div className={styles.optionsPrice}>
                                    ${i.price}
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className={styles.options}>
                        <div className={styles.optionsImgAndName} style={{ display: 'flex', alignItems: "center" }}>
                            {i.img ? <img className={styles.optionImg} src={i.img} alt="i.name" /> : <></>}
                            <div>
                                {i.name}
                            </div>
                        </div>
                        <div className={styles.optionsWeight} >
                            <div className={styles.optionsWeight}>
                                {i.weight}g
                            </div>
                            <div className={styles.optionsSelectorAndPrice}>
                                <input id={v1()} type="radio" checked={i.id === isChecked} onChange={() => OnChangeOptionForRadio(i)} />
                                <div className={styles.optionsPrice}>
                                    ${i.price === "" ? secondMenu.price : i.price + secondMenu.price}
                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
        )
    }
    return (
        <div className={styles.food}>
            <h2>{props.title} {props.icon}</h2>
            <div className={styles.items}>
                {menu.map((i: OrderType) =>
                    <div key={i.id}>
                        <label form="Btn">
                            <MenuItemConstructor
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
                    <ModalItemConstructor
                        img={secondMenu.img}
                        name={secondMenu.name}
                        weight={isTotalItemWeight}
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