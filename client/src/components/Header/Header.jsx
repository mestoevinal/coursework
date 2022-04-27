import React, {useContext} from 'react';
import styled, {css} from 'styled-components'
import logo from "./img/sputnik.png"
import camper from "./img/camper.svg"
import {NavLink, useHistory} from "react-router-dom";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";


const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #ECE8F7;
  border-bottom: 1px solid #ECE8F7;
  box-shadow: 0 20px 20px -20px #333;
  mix-blend-mode: multiply;
`
const NavItem = styled.div`
  display: inline-flex;
  justify-content: ${props => props.justify || "flex-start"};
`

const Nav = styled(NavLink)`
  white-space: nowrap;
  color: black;
  padding: 13px 25px;
  text-decoration: none;
  font-size: 20px;
  margin-left: ${props => props.size || "0px"};
  :hover {
    opacity: 0.6;
    text-decoration: none; 
  }
  
  @media (max-width: 800px) {
    display: none;
  }
`

const Icon = styled.img`
  display: none;
  @media (max-width: 800px) {
    display: inline;
    width: 30px;
    border-radius: 30px;
    margin: 0px 10px 0px 0px;
  }
`

const LogoImg = styled.img`
  margin-right: 40px;
  width: 200px;
  mix-blend-mode: multiply;
`

const Header = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    let logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setRole("")
        history.push('/login')
        localStorage.clear()

    }

    return (
        <HeaderStyle>
            <NavItem>
                <LogoImg src={logo} alt={"logo"}></LogoImg>
                <Nav to="/ExursionCity"> Главная</Nav>
                <Nav to="/InfoProject">О проекте</Nav>
                {user.Role === "ADMIN" ?
                    <Nav to="/AdminPanel">Админ Панель</Nav>
                    :
                    <Nav to="/allOrder">
                        Мои заказы
                    </Nav>
                }
            </NavItem>
            {!user.isAuth ?
                <NavItem justify="flex-end">
                    <Nav to="/login">Вход</Nav>
                    <Nav to="/registration" size="-15px">Регистрация</Nav>
                    <Icon src={camper}></Icon>
                </NavItem>
                :
                <NavItem justify="flex-end">
                    <Nav to="" onClick={() => logOut()}>
                        Выйти
                    </Nav>
                </NavItem>
            }
        </HeaderStyle>
    )
})

export default Header;

