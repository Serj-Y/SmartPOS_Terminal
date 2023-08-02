import React, { useState } from "react";
import styles from "./menuContainer.module.scss"
import { MenuItemConstructor } from "../menuItemConstructor/menuItemConstructor";
import { ExtraMenuItemConstructor } from "../extraMenuItemConstructor /extraMenuItemConstructor";


export  const MenuContainer = (props: { stateMenu: any; title: string; }) => {
    const menu = props.stateMenu;

    const [secondMenu, setSecondMenu] = useState(props.stateMenu)

    const [isOpen, setIsOpen] = useState(false)

    const [pricer, setPricer] = useState(secondMenu.price)

    const [isAddOption, setIsAddOption] = useState(false)
    const [isAddOption2, setIsAddOption2] = useState(false)
    const [isAddOption3, setIsAddOption3] = useState(false)


    const [isOnBag, setIsOnBag] = useState(null)


    function onClickHandler(i: any) {
        setIsOpen(true)
        setSecondMenu(i)
        setPricer(i.price)
        
    }


    function onCloseExtraMenu () {
        setIsAddOption(false)
        setIsAddOption2(false)
        setIsAddOption3(false)
        setIsOnBag(null) 
        setIsOpen(false)
    }


    const Option1 = () => {

        function onHandlerAddOption(extra: any) {
            if (!isAddOption) {
                setPricer(((prev: any) => prev + extra.price))
                setIsAddOption(true)
                setIsOnBag(extra)
            } else {
                setPricer(pricer - extra.price)
                setIsAddOption(false)
                setIsOnBag(null)
            }
        }
        return (
            <div key={secondMenu.option[0].id} >
                {secondMenu.option[0].name}
                <input type="checkbox" checked={isAddOption} onChange={() => onHandlerAddOption(secondMenu.option[0])} />
                ${secondMenu.option[0].price}
            </div>
        )

    }
    const Option2 = () => {

        function onHandlerAddOption(extra: any) {
            if (!isAddOption2) {
                setPricer(((prev: any) => prev + extra.price))
                setIsAddOption2(true)
                setIsOnBag(extra)
            } else {
                setPricer(pricer - extra.price)
                setIsAddOption2(false)
                setIsOnBag(null)
            }
          

        }
        return (
            <div key={secondMenu.option[1].id} >
                {secondMenu.option[1].name}
                <input type="checkbox" checked={isAddOption2} onChange={() => onHandlerAddOption(secondMenu.option[1])} />
                ${secondMenu.option[1].price}
            </div>
        )

    }
    const Option3 = () => {

        function onHandlerAddOption(extra: any) {
            if (!isAddOption3) {
                setPricer(((prev: any) => prev + extra.price))
                setIsAddOption3(true)
                setIsOnBag(extra)
            } else {
                setPricer(pricer - extra.price)
                setIsAddOption3(false)
                setIsOnBag(null)
            }
 

        }
        console.log(isOnBag)
        return (
            <div key={secondMenu.option[2].id} >
                {secondMenu.option[2].name}
                <input type="checkbox" checked={isAddOption3} onChange={() => onHandlerAddOption(secondMenu.option[2])} />
                ${secondMenu.option[2].price}
            </div>
        )

    }



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
    //         secondMenu.option.map((m: any) => <div key={m.id} >
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
            <h2>{props.title}</h2>
            {!isOpen
                ? <div className={styles.items}>
                    {menu.map((i: any) => <div key={i.id}>
                        <label form="Btn">
                            <MenuItemConstructor name={i.name} weight={i.weight} price={i.price} img={""} />
                            <button id="Btn" style={{ display: "none" }} onClick={() => onClickHandler(i)}></button>
                        </label>
                    </div>
                    )}
                </div>
                : <div className={styles.extraOption} >
                    <ExtraMenuItemConstructor name={secondMenu.name || ""} weight={secondMenu.weight || ""} price={pricer || ""}
                        OnClick={onCloseExtraMenu}
                        option1={secondMenu.option ? <Option1 /> : ""}
                        option2={secondMenu.option ? <Option2 /> : ""}
                        option3={secondMenu.option ? <Option3 /> : ""} img={""}
                    />
                    <div>
                       <h2>Add to Bag</h2>
                       <button onClick={ () => {}} >+</button> 
                    </div>
                </div>
                
            }
        </div>
    );
};


