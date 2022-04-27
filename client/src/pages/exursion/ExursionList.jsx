import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";
import {fetchExursionCityId} from "../../http/exursionAPI";
import {observer} from "mobx-react-lite";
import moment from 'moment';
import ExursionItem from "./ExursionItem";
import {Context} from "../../index";
import {usePosts} from "../../hooks/usePosts";
import SearchExur from "./SearchExur";

const StyleExur = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1180px;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`

const City = styled.div`
  margin-left: 5px;
  width: 22%;
  margin-top: 10px;
  font-size: 150%;  
  margin-bottom: 10px;


`
const Hr = styled.hr`
  border-width: 1px;
  margin-bottom: 5px;
  border: 0;
  border-top: 3px solid #000000;

`

const H4 = styled.h4`
  margin-bottom: 12px;
`


const ExursionList = observer((props) => {
    const {exursionStore} = useContext(Context)
    const params = useParams()
    const router = useHistory()
    const [filter, setFilter] = useState({sort: '', query: '', price: 0, priceBefore: 0, fio: '', address: ''})
    let ArrayDate
    useEffect(() => {
        fetchExursionCityId(params.id).then(data => exursionStore.setExursion(data))
    }, [ArrayDate])

    const sortedAndSearchedPosts = usePosts(
        exursionStore.ArrayExursion,
        filter.sort,
        filter.query,
        filter.price,
        filter.priceBefore,
        filter.fio,
        filter.address
    );
    ArrayDate = exursionStore.ArrayExursion.map(e => moment(e.date).format('YYYYMMDD')).sort()
    ArrayDate = [...new Set(ArrayDate)]

    return (
        <StyleExur>
            <SearchExur
                filter={filter}
                setFilter={setFilter}
            />
            {ArrayDate.map((date,i) =>
                <City key={i}>
                    <H4>{moment(date).locale('ru').format('DD MMMM,dd')}</H4>
                    <Hr/>
                    <ExursionItem
                        date={date}
                        posts={sortedAndSearchedPosts}
                    />
                </City>
            )}
        </StyleExur>
    );
});

export default ExursionList;