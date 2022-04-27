import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._exursion = []
        this._oneExursion = {}
        makeAutoObservable(this)
    }
    setExursion(exur) {
        this._exursion = exur
    }

    get ArrayExursion(){
        return this._exursion
    }


    setIdExursion(exur) {
        this._oneExursion = exur
    }

    get IdExursion(){
        return this._oneExursion
    }
}
