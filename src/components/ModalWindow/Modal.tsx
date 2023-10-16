import React, { ReactElement } from "react";
import styles from "./Modal.module.scss";

type ModalWindowType = {
  isOpen: boolean;
  setClose: () => void;
  children: ReactElement;
};

export const ModalWindow = ({
  isOpen,
  setClose,
  children,
}: ModalWindowType) => {
  return (
    <div
      className={isOpen ? styles.isActive : styles.isClose}
      onClick={setClose}
    >
      <div className={styles.closeElement} onClick={setClose}></div>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
