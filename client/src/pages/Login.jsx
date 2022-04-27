import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import useInput from "../hooks/useInput";
import Button from "react-bootstrap/Button";
import MyInput from "../UI/MyInput/MyInput";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const Login = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const email = useInput('', {isEmpty: true, emailError: true})
    const password = useInput('', {isEmpty: true, minLength: 4})


    const click = async () => {
        try {
            let data;
            if (isLogin)
                data = await login(email.value, password.value)
            else
                data = await registration(email.value, password.value)
            user.setUser(user)
            user.setIsAuth(true)
            history.push('/ExursionCity')
            email.value = ""
            password.value = ""
        } catch (e) {
            alert("Неправильный логин или пароль")
        }
    }


    return (
        <div style={{width: 600}}>
            <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <form>  <div>Введите ваш email</div>
            {(email.isDirty && email.isEmpty) && <div style={{color: "red"}}>{email.errorMessage}</div>}
            <MyInput
                type="text"
                value={email.value}
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
            />

            <div>Введите пароль</div>
            {(password.isDirty && password.isEmpty) && <div style={{color: "red"}}>{password.errorMessage}</div>}
            <MyInput
                type="password"
                value={password.value}
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
            />
            <div>
                {isLogin ?
                    <div>
                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                    </div>
                    :
                    <div>
                        Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                    </div>
                }
                <Button
                    variant={"outline-success"}
                    onClick={click}
                >
                    {isLogin ? 'Войти' : 'Регистрация'}
                </Button>
            </div>
        </form>
        </div>
    )
})

export default Login