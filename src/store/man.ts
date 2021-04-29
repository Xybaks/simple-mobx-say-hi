import {makeAutoObservable} from "mobx";

class Man {
    userName: string =""
    surname: string = ""
    isSetted: boolean=false

    constructor() {
        makeAutoObservable(this)
    }

    setUserName(name: string) {
        this.userName = name
    }

    setSurname(surname: string) {
        this.surname = surname
    }
    setIsSeted(isSeted: boolean) {
        this.isSetted = isSeted
    }
}

export default new Man()