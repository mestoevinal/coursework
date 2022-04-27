import {makeAutoObservable} from "mobx";

export default class CityStore {
    constructor() {
        this._City = []
        makeAutoObservable(this)
    }

    setCity(city) {
        this._City = city
    }

    get ArrayCity(){
        return this._City
    }

}
