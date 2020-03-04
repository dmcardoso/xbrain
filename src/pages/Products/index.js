import React from 'react';
import { useHistory } from 'react-router';

import { Container } from '@material-ui/core';

import ProductCard from '../../components/ProductCard';
import itens from '../../data/itens';
import FormClient from './FormClient';
import { Title, Background, Divider, Grid } from './styles';

export default function Products() {
    const history = useHistory();
    function handleSubmit(values) {
        history.push('/completion');
    }

    return (
        <Container maxWidth="lg">
            <Background>
                <Title>Produtos</Title>
                <Divider />
                <Grid>
                    {itens.map((product) => (
                        <ProductCard
                            key={String(product.id)}
                            product={product}
                        />
                    ))}
                </Grid>

                <Title>Dados do Cliente</Title>
                <Divider />
                <FormClient onSubmit={handleSubmit} />
            </Background>
        </Container>
    );
}
