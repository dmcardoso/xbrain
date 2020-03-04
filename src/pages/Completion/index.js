import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { Card, CardMedia } from '@material-ui/core';
import { getFormValues } from 'redux-form';

import purchase from '../../assets/img/purchase.png';
import { formatPrice } from '../../util/format';
import {
    Background,
    Container,
    ClientName,
    CardContent,
    CartDescription,
    StyledLink,
} from './styles';

export default function Completion() {
    const history = useHistory();
    const clientName = useSelector((state) => {
        const formState = getFormValues('client')(state);

        if (formState) {
            return formState.nome;
            // eslint-disable-next-line no-else-return
        } else {
            history.push('/');
        }
    });

    const total = useSelector((state) => {
        return formatPrice(
            state.cart.reduce(
                (sumTotal, product) =>
                    sumTotal + product.price * product.amount,
                0
            )
        );
    });

    return (
        <Background>
            <Container style={{ height: '100vh', backgroundColor: '#EBEFF0' }}>
                <Card elevation={0}>
                    <CardContent>
                        <ClientName>{clientName}</ClientName>
                        <CartDescription>
                            Sua compra no valor de <span>{total}</span>
                            <br /> foi finalizada com sucesso
                        </CartDescription>
                        <CardMedia
                            style={{ width: '140px' }}
                            component="img"
                            src={purchase}
                        />
                        <StyledLink
                            onClick={() => {
                                window.location.href = '/';
                            }}
                        >
                            INICIAR NOVA COMPRA
                        </StyledLink>
                    </CardContent>
                </Card>
            </Container>
        </Background>
    );
}
