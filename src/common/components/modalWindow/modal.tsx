import React from "react";
import styles from "./modal.module.scss"


 export const ModalWindow = ({active, setActive, children}: any) => {
    return(
<div className={ active? styles.active: styles.modal } onClick={()=> setActive(false)} >
    <div className={styles.modalContent} onClick={e=> e.stopPropagation()} >
{children}
    </div>
</div>
    )
}