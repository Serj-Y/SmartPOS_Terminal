import React, { useState } from "react";
import styles from "./cartContainer.module.scss"
import { ExtraMenuItemConstructor } from "../extraMenuItemConstructor /extraMenuItemConstructor";
;


export type SecondMenuType = {

    id: string, name: string, weight: number, price: number, img: string, option: [
        { id: string, name: string, price: number, isAdd: number },

    ],

}




export const CartContainer = (props: any) => {



const menu = props.stateMenu


const [pricer, setPricer] = useState(menu.price)
const [isAddOption, setIsAddOption] = useState(0)



    // const Option = () => {

    //     function onHandlerAddOption(m: any) {
    //       if (isAddOption <= 2 ) {
    //             setPricer(((prev: any) => prev + m.price))
    //             setIsAddOption(prev => prev + 1)
    //      console.log(m)
    //         }

    //     }

    //     function onHandlerRemoveOption(m: any) {
    //         if (isAddOption >= 1 )   {
    //             setPricer(pricer - m.price)
    //             setIsAddOption((prev: number) => prev - 1)

    //         }

    //     }

    //     return (
    //         menu.map((m: any) => <div key={m.id} >
    //             {m.name}
    //             <button onClick={() => onHandlerRemoveOption(m)}>-</button>
    //             {isAddOption}
    //             <button onClick={() => onHandlerAddOption(m)} >+</button>
    //             ${m.price}
    //         </div>



    //         )
    //     )
    // }
    return (
        <div className={styles.food}>
            <h2>{props.title} {props.icon}</h2>
            {menu.map((i: any) =>
                <div className={styles.extraOption} >
                    <ExtraMenuItemConstructor name={i.name || ""} weight={i.weight || ""} price={i.price || ""}
                        OnClick={() => { }}
                      img={i.img || ""}
                    //   option1={<Option/>}
                    />
                </div>
            )}

        </div>)


}


