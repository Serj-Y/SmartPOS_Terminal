import React from "react";
import style from "./cartContainer.module.scss"
import { useDispatch } from "react-redux";
import { actions } from "../../../reducer/cartReducer";
import { OrderType } from "../menuContainerConstructor/menuContainer";
import { useAlert } from "react-alert";
import { CartItem } from "./cartItem";

type PropsType = {
    title: string;
    cartItems: Array<OrderType>
    icon: any
}

export const CartContainer: React.FC<PropsType> = ({ cartItems, title, icon }) => {
    const menu = cartItems
    const dispatch = useDispatch()
    const alert = useAlert()

    const DeleteCartItem = (item: { id: string; name: string; weight: number; price?: number | string; }) => {
        const filtredItems = [...menu.filter((i: any) => i.id !== item.id)]
        dispatch(actions.deleteItemOfCartActionCreator(filtredItems))
        alert.show(`Is Deleted: ${item.name}`)
    }

    const CleanUp = () => {
        dispatch(actions.cleanCartActionCreator())
        alert.show("Cart Is Clean Up")
    }

    const Option = (props: any) => {
        const option = props.Option

        return (
            <div>
                <div >
                    {option.price === "" ? "" : <>{option.name} wight: {option.weight}g price: {option.price}$</>}
                </div>
            </div>
        )
    }

    return (
        <div className={style.food}>
            <h2>{title} {icon}</h2>
            {menu.map((i: OrderType) =>
                <div key={i.id} className={style.items} >
                    <CartItem
                        name={i.name}
                        weight={i.weight}
                        price={i.price}
                        options={i.option ? i.option.map((i: any) => <div key={i.id} ><Option Option={i} /></div>) : <></>}
                        CloseBtn={() => DeleteCartItem(i)}
                        img={i.img}
                    />
                </div>
            )}
                {menu[1] ? <div   className={style.cleanCartBtn}  onClick={()=>CleanUp()} >Clean cart</div> : ""}
        </div>)
}