import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import CreateEx from "./Create/CreateExursion";
import CreateCity from "./Create/CreateCity";
import DeleteCity from "./Create/deleteCity";
import styled from 'styled-components'
import {Yandexmap} from "./yandexmap";
import {useHistory} from "react-router-dom";

const AdminStyle = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr;

`

const AdminPanel = observer( () => {

const router = useHistory()
    return (
        <AdminStyle>
            <h1>Панель Администратора</h1>
            <h3>Просмотр заказов</h3>
            <button
                style={{width:"100%"}}
                onClick={()=>router.push('/allOrder')}
            >
                Открыть список всех заказов
            </button>
            <CreateEx />
            <CreateCity/>
            <DeleteCity />


        </AdminStyle>
    );
});

export default AdminPanel;