import React from 'react';
import {observer} from "mobx-react-lite";
import styled from "styled-components"

const Search = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  font-size: 18px;
  margin: 8px 0px 0px;
`

const SearchItem = styled.div`
  display: flex;
  width: 550px;
  justify-content: space-between;
`

const SearchExur = observer(({filter, setFilter}) => {
    return (
        <Search>
            <SearchItem>
                <div>Поиск по названию</div>
                <input
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder="Поиск..."
                />
            </SearchItem>

            <SearchItem>
                <div>Цена от</div>
                <input
                    type="number"
                    value={filter.price}
                    onChange={e => setFilter({...filter, price: e.target.value})}
                    placeholder="Цена от"
                />
            </SearchItem>

            <SearchItem>
                <div>Цена до</div>
                <input
                    type="number"
                    value={filter.priceBefore}
                    onChange={e => setFilter({...filter, priceBefore: e.target.value})}
                    placeholder="Цена до"
                />
            </SearchItem>

            <SearchItem>
                <div>Поиск по экскурсоводу</div>
                <input
                    value={filter.fio}
                    onChange={e => setFilter({...filter, fio: e.target.value})}
                    placeholder="имя фамилия экскурсовода..."
                />
            </SearchItem>

            <SearchItem>
                <div>Поиск по адресу</div>
                <input
                    value={filter.address}
                    onChange={e => setFilter({...filter, address: e.target.value})}
                    placeholder="адрес..."
                />
            </SearchItem>
        </Search>
    );
});

export default SearchExur;