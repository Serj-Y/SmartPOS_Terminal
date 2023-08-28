import React from "react";
import styles from "./Modal.module.scss"


 export const ModalWindow = ({active, setActive, children, closeBtn}: any) => {
    return(
<div className={ active? styles.isActive: styles.isClose } onClick={setActive} >
<div className={styles.closeElement} onClick={closeBtn} ></div>
    <div className={styles.modalContent} onClick={e=> e.stopPropagation()} >

{children}
    </div>
</div>
    )
}