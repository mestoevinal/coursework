import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {deleteExursion} from "../../http/exursionAPI";
import {useLocation} from "react-router-dom/cjs/react-router-dom";
import {Context} from "../../index";
import CreateOrder from "../Create/CreateOrder";
import Modal from "../../UI/MyModal/Modal";
import {useHistory} from "react-router-dom";


const ExurStyle = styled.div`
  font-size: 23px;
  display: grid;
  justify-items: center;
`


const Box = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
`

const Text = styled.div`
  position: relative;
  padding: 5px 15.385%;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
  font-size: 24px;
  line-height: 1.38;
  text-align: center;
  color: #000;
`

const Line = styled.div`
  content: " ";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 103px;
  height: 1px;
  border: solid 2px #ff8562;
  background-color: #ff8562;
  transform: translateX(-50%)
`

const TextP = styled.div`
  font-size: 18px;
  border-bottom: 1px solid #e6e8ea;
  line-height: 1.5;
  padding: 20px 60px;
  font-family: PT Serif, Georgia, Times New Roman, Times, serif;
`
const TextPitem = styled.div`
  padding-bottom: 1rem;
  text-align: justify;
`
const P = styled.p`
  white-space: pre-wrap;
`

const BtnThreeButton = styled.div`
  line-height: 30px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  width: 250px;
  cursor: pointer;

`
const ThreeButton = styled.div`
  color: #AD66D5;
  transition: all 0.5s;
  position: relative;
  border: 1px solid #AD66D5;

  :hover {
    filter: brightness(65%);
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
  }

  :hover:before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;

    transform: scale(1.2, 1.2);
  }

  :hover:after {
    opacity: 1;
    transform: scale(1, 1);
  }
`
const Cost = styled.span`
  font-size: 22px;

  :after {
    content: "\\20BD";
  }
`

const MyButton = styled.button`
  border-radius: 2px;
  background-color: #AD66D5;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  width: 250px;
  //font-weight: bold;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 12px 35px;
  border: 0;
  margin: 10px auto 0;
  cursor: pointer;
  filter: brightness(92%);

  :hover {
    filter: brightness(50%);
  }
`


const ClickExursion = observer((props) => {
    const {user} = useContext(Context)
    const location = useLocation()
    const router = useHistory()
    const [modalActive, setModalActive] = useState(false)
    const delExursion = async () => {
        deleteExursion(location.state.id)
        alert("Экскурсия успешно удалена")
        window.location.reload()
    }

    return (
        <ExurStyle>
            <div>
                <Text>
                    <p>{location.state.name}</p>
                    <Line/>
                </Text>
                <TextP>
                    <TextPitem>
                        <P>{location.state.description}</P>
                        <p>Адрес встречи: {location.state.address}</p>
                        <p styled={{whiteSpace: "wrap"}}>Цена: <Cost>{location.state.cost}</Cost></p>
                    </TextPitem>
                </TextP>
            </div>
            <Box>
                {user.Role === "ADMIN" ?
                    <MyButton onClick={delExursion}>Удалить экскурсию</MyButton>
                    :
                    <div>
                        <Modal active={modalActive} setActive={setModalActive}>
                            <CreateOrder exursionId={location.state.id}/>
                        </Modal>
                        <BtnThreeButton onClick={() => setModalActive(true)}>
                            {modalActive == true ?
                                <ThreeButton style={{display: "none"}}>
                                    <span>ЗАБРОНИРОВАТЬ</span>
                                </ThreeButton>
                                :
                                <ThreeButton>
                                    <span>ЗАБРОНИРОВАТЬ</span>
                                </ThreeButton>
                            }
                        </BtnThreeButton>

                        <BtnThreeButton
                            style={{marginTop: "5px", marginBottom: "10px"}}
                            onClick={() => router.push({
                                pathname: `/otzivExur`,
                                state: {
                                    id: location.state.id
                                }
                            })}>
                            <ThreeButton>
                                <span>ПРОСМОТРЕТЬ ОТЗЫВЫ</span>
                            </ThreeButton>
                        </BtnThreeButton>

                    </div>
                }
            </Box>

        </ExurStyle>
    );
});

export default ClickExursion;