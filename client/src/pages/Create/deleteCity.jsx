import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {deleteExursion, fetchCity} from "../../http/cityAPI";
import styled from "styled-components";
import 'react-datepicker/dist/react-datepicker.css'
import {Context} from "../../index";
import MyButton from "../../UI/MyButton/MyButton";
import MySelect from "../../UI/select/MySelect";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;  
`

const DeleteCity = observer( () => {
    const {cityStore} = useContext(Context)

    useEffect(() => {
        fetchCity().then(data => cityStore.setCity(data))
    }, [])
    const [cityId, setCityId] = useState(cityStore.ArrayCity[0] ? cityStore.ArrayCity[0].id : 0)
    const delExur = (e) => {
        e.preventDefault()
        deleteExursion(cityId)
        alert("Город успешно удален")
        window.location.reload()
    }

    return (
        <div>
            <Form>
                <h3>Удалить город экскурсий</h3>
                <div>Выберите город</div>
                <MySelect
                    value={cityId}
                    onChange={city => setCityId(city)}
                    defaultValue="В каком городе хотите добавить экскурсию?"
                    options={cityStore.ArrayCity}
                />
                <MyButton
                    onClick={delExur}
                >
                    Удалить город
                </MyButton>
            </Form>
        </div>
    );
});

export default DeleteCity;