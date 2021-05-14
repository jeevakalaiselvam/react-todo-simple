import React from "react";
import styled from "styled-components";

const Button = styled.button`
    font-family: inherit;
    background-color: #dadff1;
    border: none;
    padding: 0.75rem;
    color: white;
    border-radius: 0.25rem;
    background-color: #2e4acc;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: #1f369b;
    }

    &:active {
        cursor: pointer;
        transform: scale(0.95);
        background-color: #253fb4;
    }
`;

export default Button;
