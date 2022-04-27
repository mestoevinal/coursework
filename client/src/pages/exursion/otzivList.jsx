import React, {useContext} from 'react';
import {deleteOtziv} from "../../http/otziviAPI";
import {Context} from "../../index";
import styled from "styled-components"


const OtzivStyle = styled.div`
  font-size: 14px;
`

const OtzivList = () => {
    const {otzivStore} = useContext(Context)
    const {user} = useContext(Context)

    return (
        <OtzivStyle>
            <hr/>
            {otzivStore.OtzivsOneExursion.map((otziv, i) =>
                <div key={otziv.id}>
                    <strong>{i + 1}.{otziv.title}</strong>
                    <div>{otziv.description}</div>
                    {user.Role === "ADMIN" ?
                        <button
                            onClick={deleteOtziv(otziv.id)}
                        >
                            Удалить отзыв
                        </button>
                        : <div></div>
                    }

                </div>
            )}
        </OtzivStyle>
    );
};

export default OtzivList;