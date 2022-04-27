import React from 'react';
import styled from "styled-components";
const StyledInput = styled.input`
  margin-top: 5px;
  width: 100%;
`

const MyInput = React.forwardRef((props, ref) => {
    return (
        <StyledInput ref={ref} {...props}>

        </StyledInput>
    );
});

export default MyInput;