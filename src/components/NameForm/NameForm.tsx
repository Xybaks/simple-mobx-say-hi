import React, {ChangeEvent, useState} from "react";
import {observer} from "mobx-react-lite";
import man from "../../store/man"
import err from "../../store/err"
import style from "./NameForm.module.scss"


type NameFormPropsType = {
    isName: boolean
    placeholder: string
    onClick: () => void
}

export const NameForm: React.FC<NameFormPropsType> = observer(({
                                                                   isName,
                                                                   placeholder,
                                                                   onClick
                                                               }) => {
        const [name, setName] = useState<string>(isName ? man.userName : man.surname)

        const setMan = (name: string) => {
            isName
                ? man.setUserName(name)
                : man.setSurname(name)
        }

        const setErr = (someErr: string) => {
            isName
                ? err.setNameError(someErr)
                : err.setSurnameError(someErr)
        }

        const changeName = () => {
            if (name.trim()) {
                setMan(name)
                onClick()
            } else {
                setErr(isName ? "пустое поле: Имя" : "пустое поле: Фамилия")
                setMan("")
            }
        }

        const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") changeName()
        }

        const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value)
            setMan(e.currentTarget.value)
            setErr("")
        }

        return (
            <div className={style.myInput}>
              <div className={style.myErr}>
                     {man.isSetted
                  ? isName ? err.nameError : err.surnameError
                  : ""}</div>
                <input
                    onBlur={changeNameHandler}
                    autoFocus
                    value={name}
                    onChange={changeNameHandler}
                    onKeyPress={onKeyPressHandler}
                    placeholder={placeholder}
                />
            </div>
        )
    }
)