import React, { useState } from 'react';
import styled from 'styled-components';

//Styles:
const StyledTextField = styled.input`
    margin: 0.5em 0.5em;
    border: 1px solid white;
    border-radius: 5em;
    background-color: inherit;
    color: white;
    padding: 0.5em 1em;
    width: 10em;
    font-family: 'Nunito', sans-serif, helvetica;
    font-weight: 900;

    &:hover {
        outline: none;
    }

    &:focus {
        outline: none;
    }
`;

//Render:

const CustomTextField = ({ type, placeholder, existingStat, changeFunc }) => {
    const renderPlaceholder = () => {
        if (existingStat) {
            return (
                <StyledTextField
                    type={type}
                    placeholder={existingStat}
                    onChange={changeFunc}
                />
            );
        } else if (placeholder && !existingStat) {
            return (
                <StyledTextField
                    type={type}
                    placeholder={placeholder}
                    onChange={changeFunc}
                />
            );
        }
    };

    return <>{renderPlaceholder()}</>;
};

export default CustomTextField;
