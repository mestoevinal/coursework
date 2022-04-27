import {makeAutoObservable} from "mobx";

export default class orderStore {
    constructor() {
        this._ArrayOrders = []
        makeAutoObservable(this)
    }

    setOrder(otzivs){
        this._ArrayOrders = otzivs
    }

    get ArrayOrder(){
        return this._ArrayOrders
    }

}
