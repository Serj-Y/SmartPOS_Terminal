import React, { ReactElement, useState } from "react";
import styles from "./MenuContainer.module.scss"
import { useDispatch } from "react-redux";
import { v1 } from "uuid";
import { MenuItem } from "../MenuItem/MenuItem";
import { ModalWindow } from "../ModalWindow/Modal";
import { ModalItem } from "../ModalWindow/ModalItem/ModalItem";
import { actions } from "../../reducer/cartReducer";
import { toast } from "react-toastify";


export type OptionType = {
    id: string
    name: string,
    img: string,
    weight: number,
    price: number,
    multiply: boolean
}

export type OrderType = {
    id: string,
    name: string,
    weight: number,
    price: number,
    img: string,
    option?: Array<OptionType>
    ownOption?: Array<OptionType>
}

type PropsType = {
    stateMenu: any
    extraMenu?: any
    options?: Array<OptionType>
    title: string
    icon: ReactElement
}

const MenuContainer: React.FC<PropsType> = (props) => {
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
        toast.success(`Is Add: ${order.name}`)
    }

    function FixPriceDecimals(price: number) {
        const fixPrice = Math.round(price * 100) / 100
        return (
            fixPrice
        )
    }

    const Option = ({ option }: any) => {
        const findCheckedOption = stateOptions?.find(({ id }: any) => id === option.id)
        function OnChangeOptionCheckBoxType(option: OptionType) {
            if (findCheckedOption?.id !== option.id) {
                setPricer((prev: any) => prev + option.price)
                setTotalItemWeight((prev: any) => prev + option.weight)
                dispatch(actions.addOptionActionCreator({ ...option }))
            } else {
                setPricer(secondMenu.price < pricer ? (prev: any) => prev - option.price : secondMenu.price)
                setTotalItemWeight(secondMenu.weight < totalItemWeight ? (prev: any) => prev - option.weight : secondMenu.weight)
                dispatch(actions.deleteOptionActionCreator(option.id))
            }
        }

        function OnChangeOptionRadioType(option: OptionType) {
            if (checked !== option.id) {
                setPricer(secondMenu.price + option.price)
                setTotalItemWeight(secondMenu.weight > option.weight ? secondMenu.weight + option.weight : option.weight)
                setChecked(option.id)
                setSelectedOption([{ ...option }])
            } else {
                setPricer(secondMenu.price)
                setChecked("")
            }
        }

        return (
            <div className={styles.optionsContainer} >
                {option.multiply
                    ? <div onClick={() => OnChangeOptionCheckBoxType(option)} className={findCheckedOption?.id === option.id ? styles.check : styles.options}>
                        <div className={styles.imageAndNameContainer} >
                            {option.img ? <img className={styles.img} src={option.img} alt="i.name" /> : <></>}
                            <div>
                                {option.name}
                            </div>
                        </div>
                        <div className={styles.weightAndPriceContainer} >
                            <div className={styles.weight}>
                                +{option.weight}g
                            </div>
                            <div className={styles.price}>
                                ${option.price}
                            </div>
                        </div>
                    </div>
                    : <div onClick={() => OnChangeOptionRadioType(option)} className={option.id === checked ? styles.check : styles.options}>
                        <div className={styles.imageAndNameContainer} >
                            {option.img ? <img className={styles.img} src={option.img} alt="i.name" /> : <></>}
                            <div>
                                {option.name}
                            </div>
                        </div>
                        <div className={styles.weightAndPriceContainer} >
                            <div className={styles.weight}>
                                {option.weight}g
                            </div>
                            <div className={styles.price}>
                                ${option.price === 0 ? secondMenu.price : option.price + secondMenu.price}
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
                <ModalWindow isOpen={isOpen} setClose={() => OnCloseExtraOptions()}  >
                    <ModalItem
                        img={secondMenu.img}
                        name={secondMenu.name}
                        weight={totalItemWeight}
                        price={FixPriceDecimals(pricer)}
                        AddToCartBtn={() => AddToCart(secondMenu)}
                        option={secondMenu.ownOption
                            ? secondMenu.ownOption.map((i: OptionType) => <div key={i.id} > <Option option={i} /> </div>)
                            : extraMenu
                                ? extraMenu.map((i: OptionType) => <div key={i.id}> <Option option={i} /></div>)
                                : <></>
                        }
                    />
                </ModalWindow>
            </div>
        </div>
    );
};

export default MenuContainer