import React, {useContext} from 'react';
import {createOrder} from "../../http/orderAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import useInput from "../../hooks/useInput";
import MyButton from "../../UI/MyButton/MyButton";
import MyInput from "../../UI/MyInput/MyInput";
import styled from "styled-components"

const MailDiv = styled.div`
  color: red;
`

const CreateOrder = observer((props) => {
    const {user} = useContext(Context)

    const email = useInput('', {isEmpty: true, minLength: 3, emailError: true})
    const fio = useInput('', {isEmpty: true, minLength: 6})

    const orderExur = async (e) => {
        e.preventDefault()
        await createOrder({fio: fio.value, email: email.value, userId: user.user.id, exursionId: props.exursionId})
            .then(data => {
                alert("Ваш заказ успешно оформлен")
                window.location.reload()
            })
    }


    return (
        <form>
            <div>Введите ваш email</div>
            {(email.isDirty && email.isEmpty) && <MailDiv>{email.errorMessage}</MailDiv>}
            <MyInput
                type="text"
                value={email.value}
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
            />
            {(fio.isDirty && fio.isEmpty) && <MailDiv style={{color: "red"}}>{fio.errorMessage}</MailDiv>}
            <div>Введите ФИО</div>
            <MyInput
                type="text"
                value={fio.value}
                onChange={e => fio.onChange(e)}
                onBlur={e => fio.onBlur(e)}
            />

            <MyButton
                disabled={!email.inputValid || !fio.inputValid} onClick={orderExur}
            >
                Записаться
            </MyButton>
        </form>
    );
});

export default CreateOrder;