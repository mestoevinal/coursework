import React, {useContext, useEffect, useState} from 'react';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import styled from "styled-components";
import AppRouter from "./components/AppRouter/appRouter";
import {check} from "./http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "./index";


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #E4EAF6;
`


const Content = styled.div`
  margin: 0 auto;
  flex: 1;
  max-width: 1180px;
  justify-content: center;
  background-color: #E4EAF6;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
`


const App = observer(() => {
    const {user} = useContext(Context)

    useEffect(() => {
        check().then((data)  => {
            if(data){
                user.setUser(data)
                user.setIsAuth(true)
            }
        })
    }, [])

    return (
        <BrowserRouter>
            <AppWrapper>
                <Header/>
                <Content>
                    <AppRouter/>
                </Content>
            </AppWrapper>
        </BrowserRouter>
    )
})

export default App;