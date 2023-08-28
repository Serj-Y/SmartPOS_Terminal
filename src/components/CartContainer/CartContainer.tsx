import React from "react";
import style from "./CartContainer.module.scss"
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { OrderType } from "../MenuContainer/MenuContainer";
import { actions } from "../../reducer/cartReducer";
import { CartItem } from "./CartItem/CartItem";




type PropsType = {
    cartItems: Array<OrderType>
}

export const CartContainer: React.FC<PropsType> = ({ cartItems }) => {
    const menu = cartItems
    const dispatch = useDispatch()
    const alert = useAlert()

    const DeleteCartItem = (id:string, name:string) => {
      
        dispatch(actions.deleteItemOfCartActionCreator(id))
        alert.show(`Is Deleted: ${name}`)
    }

    const CleanUp = () => {
        dispatch(actions.cleanCartActionCreator())
        alert.show("Cart Is Clean Up")
    }

    const Option = (props: any) => {
        const option = props.Option

        return (
            <div>
                {option.multiply === false ? "" : <>{option.name} wight: {option.weight}g price: {option.price}$</>}
            </div>
        )
    }

    return (
        <div className={style.food}>
            {menu.map((i: OrderType) =>
                <div key={i.id} className={style.items} >
                    <CartItem
                        name={i.name}
                        weight={i.weight}
                        price={i.price}
                        options={i.option ? i.option.map((i: any) => <div key={i.id} ><Option Option={i} /></div>) : <></>}
                        CloseBtn={() => DeleteCartItem(i.id, i.name)}
                        img={i.img}
                    />
                </div>
            )}
            {menu[1] ? <div className={style.cleanCartBtn} onClick={() => CleanUp()} >Clean cart</div> : ""}
        </div>
    )
}