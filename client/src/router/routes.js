import ExursionCity from "../pages/exursion/ExursionCity"
import ExursionList from "../pages/exursion/ExursionList"
import ClickExursion from "../pages/exursion/ClickExursion"
import InfoProject from "../pages/InfoProject"
import AdminPanel from "../pages/AdminPanel"
import AllOrderExur from "../pages/exursion/allOrderExur"
import TouchExursion from "../pages/exursion/touchExursion"
import Login from "../pages/Login";


export const privateRoutes = [
    {path: '/ExursionCity', component: ExursionCity, exact: true},
    {path: '/ExursionCity/:id', component: ExursionList, exact: true},
    {path: '/InfoProject', component: InfoProject, exact: true},
    {path: '/ClickExursion/:id', component: ClickExursion, exact: true},
    {path: '/AdminPanel', component: AdminPanel, exact: true},
    {path: '/allOrder', exact: true, component: AllOrderExur},
    {path: '/otzivExur', exact: true, component: TouchExursion}

]

export const adminPrivateRoutes = [
    {path: '/ExursionCity', component: ExursionCity, exact: true},
    {path: '/ExursionCity/:id', component: ExursionList, exact: true},
    {path: '/InfoProject', component: InfoProject, exact: true},
    {path: '/ClickExursion/:id', component: ClickExursion, exact: true},
    {path: '/AdminPanel', component: AdminPanel, exact: true},
    {path: '/allOrder', exact: true, component: AllOrderExur},
    {path: '/otzivExur', exact: true, component: TouchExursion}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/registration', component: Login, exact: true},
    {path: '/InfoProject', component: InfoProject, exact: true}
]