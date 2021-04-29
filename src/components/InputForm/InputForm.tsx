import {NameForm} from "../NameForm/NameForm";
import Button from "../Button/Button";
import man from "../../store/man"
import err from "../../store/err"
import {observer} from "mobx-react-lite"
import {Modal} from "../Modal/Modal";
import {useState} from "react";
import style from "./InputForm.module.scss";


export const InputForm = observer(() => {
        const [active, SetActive] = useState<boolean>(false)
        const onClick = () => {
            if (man.userName && man.surname) {
                SetActive(true)
            }
            if (!man.userName) {
                err.setNameError("пустое поле: Имя")
            }
            if (!man.surname) {
                err.setSurnameError("пустое поле: Фамилия")
            }
            man.setIsSeted(true)
        }
        const mySetActive = (e: boolean) => {
            SetActive(e)
        }
        return (
            <div className={style.container}>
                <Modal
                    onClick={() => SetActive(false)}
                    active={active}
                    setActive={mySetActive}/>
                <NameForm
                    isName={true}
                    placeholder={"Ваше имя"}
                    onClick={onClick}/>
                <NameForm
                    isName={false}
                    placeholder={"Ваша фамилия"}
                    onClick={onClick}/>
                <Button
                    onClick={onClick}
                    title="Готово"/>
            </div>
        )
    }
)