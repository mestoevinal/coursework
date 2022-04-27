import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {useLocation} from "react-router-dom/cjs/react-router-dom";
import styled from 'styled-components'
import Modal from "../../UI/MyModal/Modal";
import CreateOtziv from "../Create/createOtziv";
import Button from "react-bootstrap/Button";
import OtzivList from "./otzivList";
import {observer} from "mobx-react-lite";
import {fetchOtzivsOneExursion} from "../../http/otziviAPI";




const TouchExursion = observer(() => {
    const {otzivStore} = useContext(Context)
    const location = useLocation()
    // const [modalActiveOtziv, setModalActiveOtziv] = useState(false)
    useEffect(() => {
        fetchOtzivsOneExursion(location.state.id).then(data => otzivStore.setOtzivsOneExursion(data))
    }, [otzivStore.OtzivsOneExursion])

    return (
        <div>
            {/*<Modal active={modalActiveOtziv} setActive={setModalActiveOtziv}>*/}
                <CreateOtziv id={location.state.id}/>
            {/*</Modal>*/}
            {/*<Button onClick={() => setModalActiveOtziv(true)}> Добавить отзыв</Button>*/}
            <OtzivList exursionId={location.state.id}/>
        </div>
    );
});

export default TouchExursion;