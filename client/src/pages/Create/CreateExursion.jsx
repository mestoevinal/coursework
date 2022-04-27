import React, {useRef, useContext, useEffect, useState} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import {observer} from "mobx-react-lite";
import {createExursion} from "../../http/exursionAPI";
import {fetchCity} from "../../http/cityAPI";
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import {Context} from "../../index";
import {YMaps, Map} from "react-yandex-maps";
import useInput from "../../hooks/useInput";
import MyButton from "../../UI/MyButton/MyButton";
import MySelect from "../../UI/select/MySelect";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`


const CreateEx = observer(() => {

    const [startDate, setStartDate] = useState(new Date())
    const {cityStore} = useContext(Context)
    const addressInput = useRef()
    const name = useInput('', {isEmpty: true, minLength: 3})
    const fio = useInput('', {isEmpty: true, minLength: 3, maxLength: 15})
    const description = useInput('', {isEmpty: true, minLength: 10, maxLength: 120})
    const cost = useInput(0, {numberMin: 200})

    const loadSuggest = ymaps => {
        const suggestView = new ymaps.SuggestView("suggest");
    };

    useEffect(() => {
        fetchCity().then(data => cityStore.setCity(data))
    }, [])
    const [cityId, setCityId] = useState(cityStore.ArrayCity[0] ? cityStore.ArrayCity[0].id : 0)

    const addExur = async (en) => {
        try {
            en.preventDefault()
            await createExursion({
                name: name.value,
                cost: cost.value,
                cityId: cityId,
                fio: fio.value,
                date: startDate,
                description: description.value,
                address: addressInput.current.value
            })
                .then(data => {
                    setStartDate("")
                    setCityId(1)
                    alert("Экскурсия успешно создана")
                    window.location.reload()
                })
        } catch (e) {
            alert("Вы пропустили обязательное поле")

        }

    }


    return (
        <div>
            <Form>
                <h3>Добавить экскурсию</h3>

                <div>Выберите город</div>
                <MySelect
                    value={cityId}
                    onChange={city => setCityId(city)}
                    defaultValue="В каком городе хотите добавить экскурсию?"
                    options={cityStore.ArrayCity}
                />

                <div>Коротко опишите экскурсию</div>
                <textarea
                    value={name.value}
                    onChange={e => name.onChange(e)}
                    onBlur={e => name.onBlur(e)}
                    placeholder={""}
                />

                <div>Опишите экскурсию</div>
                <textarea
                    value={description.value}
                    onChange={e => description.onChange(e)}
                    onBlur={e => description.onBlur(e)}
                    type={"text"}
                    placeholder={""}
                />

                <div>ФИО экскурсовода</div>
                <MyInput
                    value={fio.value}
                    onChange={e => fio.onChange(e)}
                    onBlur={e => fio.onBlur(e)}
                    type={"text"}
                />

                <div>Выберите цену</div>
                {(cost.minNumber) && <div style={{color: "red"}}>{cost.errorMessage}</div>}
                <MyInput
                    type={"number"}
                    value={cost.value}
                    onChange={e => cost.onChange(e)}
                    onBlur={e => cost.onBlur(e)}
                />

                <div>Выберите дату</div>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="LLL"
                />

                <div>Выберите адрес начала экскурсии</div>
                <YMaps>
                    <Map
                        onLoad={ymaps => loadSuggest(ymaps)}
                        defaultState={{center: [55.751574, 37.573856], zoom: 9}}
                        modules={["SuggestView"]}
                    />
                    <input
                        style={{width: "400px"}}
                        id="suggest"
                        ref={addressInput}
                        placeholder="адрес..."/>
                </YMaps>
                <MyButton
                    disabled={!name.inputValid && !cost.inputValid && !description.inputValid}
                    onClick={addExur}>
                    Добавить экскурсию
                </MyButton>
            </Form>
        </div>
    );
});

export default CreateEx;