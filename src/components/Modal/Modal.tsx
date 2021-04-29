import React from "react";
import styles from './Modal.module.scss'
import man from "../../store/man";
import Button from "../Button/Button";


export type ModalPropsType = {
    setActive: (e: boolean) => void
    active: boolean
    onClick: () => void;
    children?: any
}

export const Modal = (props: ModalPropsType) => {

    let active = `${styles.modal} ${styles.active}`
    let modal_content = `${styles.modalb_content} ${styles.active}`
    return (
        <div className={props.active ? active : styles.modal}
        >
            <div className={props.active ? modal_content : styles.modal_content}
                 onClick={e => e.stopPropagation()}>
                <div>
                    {"Здравствуйте, " + man.userName.toUpperCase() + "  " + man.surname.toUpperCase()}
                    {props.children}
                </div>
            </div>
            <Button
                onClick={props.onClick}
                title="Закрыть"/>
            </div>
    )
}