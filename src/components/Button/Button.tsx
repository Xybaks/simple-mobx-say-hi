import React from "react";
import style from "./Button.module.scss"

type ButtonPropsType = {
    onClick: () => void;
    title:string
}

const Button = ({onClick,title}: ButtonPropsType) => {

    return (
        <button className={style.button1}
                onClick={onClick}
        >
            {title}
        </button>
    );
}

export default Button;