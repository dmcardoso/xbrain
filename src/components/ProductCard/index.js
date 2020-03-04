import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { CardMedia, Box, Slide } from '@material-ui/core';
import PropTypes from 'prop-types';

import plus from '../../assets/img/baseline-add-24px.svg';
import minus from '../../assets/img/baseline-remove-24px.svg';
import * as CartActions from '../../store/modules/cart/actions';
import {
    StyledCard,
    GridItem,
    ItemName,
    ItemValue,
    ItemDesc,
    Button,
    Amount,
    BoxActions,
    ButtonAdd,
    CardContent,
} from './styles';

export default function ProductCard({ product }) {
    const [elevation, setElevation] = useState(0);
    const [amountRequest, setAmountRequest] = useState(0);

    const dispatch = useDispatch();

    function increment() {
        setAmountRequest(amountRequest + 1);
    }

    function decrement() {
        if (amountRequest > 0) {
            setAmountRequest(amountRequest - 1);
        }
    }

    function add(productToAdd) {
        const productAdd = {
            ...productToAdd,
            amount: amountRequest,
        };
        dispatch(CartActions.addToCart(productAdd));
        setAmountRequest(0);
    }

    return (
        <GridItem>
            <StyledCard
                elevation={elevation}
                onMouseEnter={() => {
                    setElevation(4);
                }}
                onMouseLeave={() => {
                    setElevation(0);
                }}
            >
                <CardMedia component="img" src={product.image} />
                <BoxActions elevated={elevation}>
                    <CardContent elevated={elevation}>
                        <ItemName>{product.name}</ItemName>
                        <ItemValue>{product.formattedPrice}</ItemValue>
                        <ItemDesc>{product.cashText}</ItemDesc>
                        <ItemDesc>{product.termText}</ItemDesc>
                    </CardContent>
                    <Slide in={elevation > 0} direction="right">
                        <Box
                            display="flex"
                            style={{
                                position: 'relative',
                            }}
                            flexDirection="column"
                        >
                            <Box justifyContent="space-between" display="flex">
                                <Button onClick={() => increment(product)}>
                                    <svg
                                        style={{
                                            background: `url(${plus}) no-repeat`,
                                        }}
                                    />
                                </Button>
                                <Amount value={amountRequest} disabled />
                                <Button onClick={() => decrement(product)}>
                                    <svg
                                        style={{
                                            background: `url(${minus}) no-repeat`,
                                        }}
                                    />
                                </Button>
                            </Box>
                            <ButtonAdd onClick={() => add(product)}>
                                Adicionar
                            </ButtonAdd>
                        </Box>
                    </Slide>
                </BoxActions>
            </StyledCard>
        </GridItem>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        amount: PropTypes.number,
        image: PropTypes.string,
        cashText: PropTypes.string,
        termText: PropTypes.string,
        formattedPrice: PropTypes.string,
    }).isRequired,
};
