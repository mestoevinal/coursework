import {makeAutoObservable} from "mobx";

export default class otzivStore {
    constructor() {
        this._ArrayOtzivs = []
        this._OtzivsOneExursion = []
        makeAutoObservable(this)
    }

    setOtzivs(otzivs){
        this._ArrayOtzivs = otzivs
    }

    get ArrayOtzivs(){
        return this._ArrayOtzivs
    }

    setOtzivsOneExursion(otziv){
        this._OtzivsOneExursion = otziv
    }

    get OtzivsOneExursion(){
        return this._OtzivsOneExursion
    }
}
