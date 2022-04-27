import React, {useState} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import {observer} from "mobx-react-lite";
import {createCity} from "../../http/cityAPI";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import MyButton from "../../UI/MyButton/MyButton";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;  
`


const CreateCity = observer(() => {
    const [file, setFile] = useState(0)

    const name = useInput('', {isEmpty: true, minLength:3, maxLength:15})

    const selectFile = e => setFile(e.target.files[0])

    const addCity = async (e) => {
        try{
            e.preventDefault()
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('img', file)
            createCity(formData)
                .then(data => {
                    setFile(null)
                    alert("Новый город для экскурсий успешно создан")
                    window.location.reload()
                })
        }
        catch (e){
            alert("Вы пропустили обязательное поле")
        }
    }

    return (
        <div>
            <Form>
                <h3>Добавить город экскурсий</h3>
                <div>Напишите название города</div>

                <MyInput
                    value={name.value}
                    onChange={e => name.onChange(e)}
                    onBlur={e=>name.onBlur(e)}
                    placeholder={"Название города"}
                />

                <MyInput
                    style={{marginTop:'5px'}}
                    type={"file"}
                    placeholder={"Выберите файл"}
                    onChange={selectFile}
                />
                <MyButton
                    disabled={!name.inputValid}
                    onClick={addCity}
                >
                    Добавить
                </MyButton>
            </Form>
        </div>
    );
});

export default CreateCity;