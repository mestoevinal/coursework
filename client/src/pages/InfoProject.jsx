import React from 'react';
import styled from "styled-components"
import {observer} from "mobx-react-lite";


const Div = styled.div`
  font-family: 'Museo Sans';
  font-weight: 400;
  font-size: 22px;
  color: #51525f;
  line-height: 1.3em;
  margin: 0 120px;
`
const H1 = styled.h1`
  font-family: 'Museo Sans';
  font-size: 31px;
  color: #2b3a49;
  font-weight: 900;
  text-align: center;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`

const InfoProject = observer(() => {

    return (
        <div>
            <H1>За что нас любят путешественники</H1>
            <Div>
                Мы знаем, как сделать экскурсии классными и качественными.
                С каждым новым гидом мы беседуем лично и вместе разрабатываем экскурсионную программу.
                В результате экскурсии получаются насыщенными, интересными, структурированными, нравятся нам самим и
                нашим путешественникам.
            </Div>
        </div>
    );
});

export default InfoProject;