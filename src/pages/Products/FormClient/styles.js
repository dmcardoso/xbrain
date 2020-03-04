import { Typography, Button } from '@material-ui/core';
import { darken } from 'polished';
import styled from 'styled-components';

export const SelectPlaceholder = styled(Typography).attrs({
    component: 'p',
})`
    opacity: 0.5;
`;

export const Total = styled(Typography).attrs({
    compoment: 'h2',
    variant: 'h5',
})`
    font-weight: bold;
    color: #58737d;
`;

export const ButtonFinish = styled(Button).attrs({
    variant: 'contained',
})`
    background-color: #ff962f;
    color: white;
    font-weight: bold;
    font-size: 16px;

    &:hover {
        background-color: ${darken(0.2, '#ff962f')};
    }
`;
