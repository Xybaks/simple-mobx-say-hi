import {makeAutoObservable} from "mobx";

class Err {
    nameError: string = ""
    surnameError: string = ""

    constructor() {
        makeAutoObservable(this)
    }

    setNameError(nameError: string) {
        this.nameError = nameError
    }
    clearNameError() {
        this.nameError = ""
    }
    setSurnameError(surnameError: string) {
        this.surnameError = surnameError
    }
    clearSurnameError() {
        this.surnameError = ""
    }

}

export default new Err()