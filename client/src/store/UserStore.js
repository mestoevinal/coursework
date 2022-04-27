import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._role=""
        this._id=""
        this._cost=0
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setCost(cost) {
        this._cost = this._cost + cost
    }

    setRole(role) {
        this._role = role
    }

    setId(id) {
        this._id = id
    }

    get isAuth() {
        return this._isAuth
    }
    get Role() {
        return this._role
    }
    get Id() {
        return this._id
    }
    get Cost(){
        return this._cost
    }

    get user() {
        return this._user
    }
}
