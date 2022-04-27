import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import UserStore from "./store/UserStore";
import OtzivStore from "./store/OtzivStore";
import ExurStore from "./store/ExursionStore";
import CityStore from "./store/CityStore";
import OrderStore from "./store/OrderStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        otzivStore: new OtzivStore(),
        exursionStore: new ExurStore(),
        cityStore: new CityStore(),
        orderStore: new OrderStore(),
    }}>
        <App/>
    </Context.Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
