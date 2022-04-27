import React from 'react';
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import moment from 'moment';

const StyleExurItem = styled.div`
  font-size: 16px;
  color: #ff8562;
  text-decoration: none;
  cursor: pointer;
  font-weight: 300;
  margin-bottom: 10px;
  :hover {
    filter: brightness(79%); 
    text-decoration: none;
  }
`

const Fio = styled.div`
  font-size: 14px;
  color: rgb(119, 134, 176);
`

const Time = styled.strong`
  color: black;
  margin-right: 5px;
`




const ExursionItem = observer(({posts, date}) => {
    const router = useHistory()
    return (
        <div>

            {posts.map(exur_item =>
                <div key={exur_item.id}>
                    {date === moment(exur_item.date).format('YYYYMMDD') ?
                        <StyleExurItem onClick={() => router.push({
                            pathname: `/ClickExursion/${exur_item.id}`,
                            state: {
                                id: exur_item.id,
                                name: exur_item.name,
                                cost: exur_item.cost,
                                description: exur_item.description,
                                fio: exur_item.fio,
                                address: exur_item.address
                            }
                        })}>
                            <strong>

                                <Time>{moment(exur_item.date).add('hour',3).format('HH:mm')}</Time>
                                {exur_item.name}
                                <Fio>{exur_item.fio}</Fio>
                            </strong>
                        </StyleExurItem>
                        :
                        <div key={exur_item.id}>

                        </div>
                    }
                </div>
            )}
        </div>
    );
});

export default ExursionItem;