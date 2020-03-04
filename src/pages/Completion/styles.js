import {
    Typography,
    Container as ContainerMU,
    CardContent as CardContentMU,
    Button,
} from '@material-ui/core';
import { darken } from 'polished';
import styled from 'styled-components';

export const Background = styled(Typography).attrs({
    component: 'div',
})`
    height: 100vh;
    width: 100vw;
    background-color: #ebeff0;
`;

export const Container = styled(ContainerMU)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ClientName = styled(Typography).attrs({
    variant: 'h5',
    gutterBottom: true,
})`
    color: #526e78;
    font-weight: bold;
    text-align: center;
`;

export const CartDescription = styled(Typography).attrs({})`
    color: #526e78;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;

    span {
        color: #009bda;
    }
`;

export const CardContent = styled(CardContentMU)`
    padding: 55px !important;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const StyledLink = styled(Button).attrs({
    variant: 'contained',
})`
    background-color: #ff962f;
    color: white;
    font-weight: bold;
    font-size: 14px;
    margin-top: 40px;
    cursor: pointer;

    &:hover {
        background-color: ${darken(0.2, '#ff962f')};
    }
`;
