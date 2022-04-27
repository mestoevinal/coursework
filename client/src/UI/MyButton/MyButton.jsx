import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  marginTop:5px;
  width:100%;
`
const MyButton = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default MyButton;