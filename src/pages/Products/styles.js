import {
    Typography,
    Divider as DividerMU,
    Grid as GridMU,
} from '@material-ui/core';
import styled from 'styled-components';

export const Background = styled(Typography).attrs({
    component: 'div',
})`
    background-color: #fff;
    height: 100%;
    padding: 15px 0;
`;

export const Title = styled(Typography).attrs({
    component: 'h1',
    variant: 'h5',
})`
    color: #526e78;
    margin-bottom: 10px;
`;

export const Divider = styled(DividerMU)`
    background-color: #ebeff0;
    margin-bottom: 40px;
`;

export const Grid = styled(GridMU).attrs({
    container: true,
    spacing: 3,
})`
    padding-bottom: 35px;
`;

export const SelectPlaceholder = styled(Typography).attrs({
    component: 'p',
})`
    opacity: 0.5;
`;
