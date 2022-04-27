import React, {useContext, useEffect} from 'react';
import {fetchExursionId} from "../../http/exursionAPI";
import {Context} from "../../index";
import moment from 'moment';


const OrderExurList = ({exursionId, order}) => {
    const {exursionStore} = useContext(Context)

    useEffect(() => {
        fetchExursionId(exursionId).then(data => exursionStore.setIdExursion(data))
    }, [])

    let OrderIdExursion = exursionStore.IdExursion

    return (
        <div>
            <div> Заказ был оформлен в <strong>{moment(order.createdAt).format("HH:mm,DD-MM-YYYY")} </strong></div>
            <div>Экскурсия которую забронировал пользователь: <strong>{OrderIdExursion.name}</strong></div>
            <div>Цена: <strong>{OrderIdExursion.cost}</strong></div>
            <div>Экскурсовод: <strong>{OrderIdExursion.fio}</strong></div>
            <div>Адрес начала экскурсии: <strong>{OrderIdExursion.address}</strong></div>
        </div>
    );
};

export default OrderExurList;