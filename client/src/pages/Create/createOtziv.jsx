import React from 'react';
import {createOtziv} from "../../http/otziviAPI";
import {observer} from "mobx-react-lite";
import styled from "styled-components";
import useInput from "../../hooks/useInput";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  width: 600px;
`

const Button = styled.button`
  margin-top: 5px;
  width: 600px;

`
const TextArea = styled.textarea`
  height: 100px;
  width: 600px;
`

const CreateOtziv = observer((props) => {

    const title = useInput('', {isEmpty: true, minLength: 4, maxLength: 30})
    const description = useInput('', {isEmpty: true, minLength: 10, maxLength: 100})
    const addOtziv = async (en) => {
        try {
            en.preventDefault()
            await createOtziv({title: title.value, description: description.value, exursionId: props.id})
                .then(data => {
                    // setTitle('')
                    // setDescription('')
                })
        } catch (e) {
            alert("Заполните все обязательные поля")
        }
    }

    return (
        <Form>
            <div>Опишите коротко отзыв</div>
            <Input
                value={title.value}
                onChange={e => title.onChange(e)}
                onBlur={e => title.onBlur(e)}
            />

            <div>Распишите отзыв</div>
            <TextArea
                value={description.value}
                onChange={e => description.onChange(e)}
                onBlur={e => description.onBlur(e)}
            />
            <Button
                disabled={!title.inputValid && !description.inputValid}
                onClick={addOtziv}
            >
                Добавить
            </Button>
        </Form>
    );
});

export default CreateOtziv;