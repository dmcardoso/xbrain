import {
    Card,
    Typography,
    TextField,
    Box,
    Grid,
    Button as ButtonMU,
    CardContent as CardContentMU,
} from '@material-ui/core';
import styled, { css } from 'styled-components';

export const StyledCard = styled(Card)``;

export const GridItem = styled(Grid).attrs({
    item: true,
    xs: 12,
    sm: 4,
    md: 3,
})`
    color: #526e78;
    margin-bottom: 10px;
`;

export const ItemName = styled(Typography).attrs({
    gutterBottom: true,
    variant: 'subtitle1',
    component: 'p',
})`
    color: #526e78;
`;

export const ItemValue = styled(Typography).attrs({
    variant: 'h5',
    component: 'p',
})`
    color: #526e78;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const ItemDesc = styled(Typography).attrs({
    variant: 'caption',
    color: 'textSecondary',
    component: 'p',
})`
    color: #526e78;
`;

export const Button = styled('button')`
    width: 56px;
    max-height: 56px;

    border-radius: 50%;
    background-color: #cdd7db;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 24px;
        height: 24px;
        filter: invert(72%) sepia(10%) saturate(544%) hue-rotate(152deg)
            brightness(89%) contrast(80%);
    }
`;
export const ButtonAdd = styled(ButtonMU).attrs({
    variant: 'contained',
    color: 'primary',
})`
    margin-top: 15px;
    background: #008add;
`;

export const Amount = styled(TextField).attrs({
    variant: 'outlined',
})`
    width: 45%;

    input {
        text-align: center;
    }
`;

export const BoxActions = styled(Box).attrs((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: props.elevated > 0 ? 'flex-end' : null,
}))`
    width: 100%;
    height: 200px;
    position: relative;
    padding: 0 16px 16px;
`;

export const CardContent = styled(CardContentMU)`
    ${(props) =>
        props.elevated > 0 &&
        css`
            position: absolute;
            background: rgba(255, 255, 255, 0.8);
            bottom: 100%;
            width: 100%;
        `}
`;
