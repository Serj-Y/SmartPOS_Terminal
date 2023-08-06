import React, { useState } from "react";
import styles from "./cartContainer.module.scss"
import { ExtraMenuItemConstructor } from "../extraMenuItemConstructor /extraMenuItemConstructor";
import { RootState } from "../../redux/store";

export type SecondMenuType = {
    id: string, name: string, weight: number, price: number, img: string, option: [
        { id: string, name: string, price: number, isAdd: number },
    ],
}

export const CartContainer = (props: any) => {
    const menu = props.stateMenu

    return (
        <div className={styles.food}>
            <h2>{props.title} {props.icon}</h2>
            {menu.map((i: any) =>
                <div className={styles.extraOption} >
                    <ExtraMenuItemConstructor name={i.name} weight={i.weight} price={i.price}
                        OnClick={() => { }}
                        img={i.img}
                        option1={<Option option={i.option} parentPrice={i.price} />}
                    />
                </div>
            )}
        </div>)
}

const Option = ({ option, parentPrice }: any) => {
    const [isAddOption, setIsAddOption] = useState(0)
    const [pricer, setPricer] = useState(parentPrice)

    function onHandlerAddOption(m: any) {

        console.log(m.isAdd)
        if (isAddOption >= 0) {
            setPricer(((prev: any) => prev + m.price))
            setIsAddOption(m.isAdd + 1)
        }

    }

    function onHandlerRemoveOption(m: any) {
        if (isAddOption >= 1) {
            setPricer(pricer - m.price)
            setIsAddOption((prev: number) => prev - 1)
        }
    }

    return (
        <div>
            {option.map((m: any) => <div key={m.id} >
                {m.name}
                <button onClick={() => onHandlerRemoveOption(m)}>-</button>
                {m.isAdd}
                <button onClick={() => onHandlerAddOption(m)} >+</button>
                ${m.price}
                ____id {m.id}
            </div>
            )}



        </div>
    )
}

