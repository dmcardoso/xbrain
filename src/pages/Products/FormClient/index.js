import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import {
    Grid as GridMU,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    FormHelperText,
} from '@material-ui/core';
import { Form, Field, reduxForm } from 'redux-form';

import { formatPrice } from '../../../util/format';
import { SelectPlaceholder, Total, ButtonFinish } from './styles';

const validate = (values) => {
    const errors = {};
    if (!values.nome) {
        errors.nome = 'Campo obrigatório';
    }

    if (!values.email) {
        errors.email = 'Campo obrigatório';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Email inválido';
    }

    if (!values.sexo) {
        errors.sexo = 'Campo obrigatório';
    }

    return errors;
};

function FormClient({ handleSubmit, pristine, submitting, ...props }) {
    const total = useSelector((state) => {
        return formatPrice(
            state.cart.reduce(
                (sumTotal, product) =>
                    sumTotal + product.price * product.amount,
                0
            )
        );
    });

    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    function renderTextField({ input, meta: { touched, error }, ...custom }) {
        return (
            <TextField
                fullWidth
                error={!!(touched && error)}
                variant="outlined"
                helperText={touched && error ? error : null}
                InputLabelProps={{
                    shrink: true,
                }}
                {...input}
                {...custom}
            />
        );
    }

    function renderSelectField({
        input,
        meta: { touched, error },
        children,
        ...custom
    }) {
        return (
            <FormControl
                style={{ width: '100%' }}
                variant="outlined"
                error={!!(touched && error)}
            >
                <InputLabel shrink ref={inputLabel} id="sexo">
                    Sexo
                </InputLabel>
                <Select
                    displayEmpty
                    style={{ height: 56 }}
                    onChange={(event, index, value) => input.onChange(value)}
                    {...input}
                    {...custom}
                >
                    {children}
                </Select>
                {!!(touched && error) && (
                    <FormHelperText>{error}</FormHelperText>
                )}
            </FormControl>
        );
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column">
                <GridMU container spacing={2}>
                    <GridMU item xs={12} sm={5}>
                        <Field
                            name="nome"
                            id="nome"
                            placeholder="Nome do cliente"
                            label="Nome"
                            component={renderTextField}
                        />
                    </GridMU>
                    <GridMU item xs={12} sm={5}>
                        <Field
                            name="email"
                            id="email"
                            placeholder="Digite seu email aqui"
                            label="Email"
                            component={renderTextField}
                        />
                    </GridMU>
                    <GridMU item xs={12} sm={2}>
                        <Field
                            labelId="sexo"
                            id="sexo"
                            name="sexo"
                            labelWidth={labelWidth}
                            placeholder="Digite seu email aqui"
                            component={renderSelectField}
                        >
                            <MenuItem disabled value="">
                                <SelectPlaceholder>Selecione</SelectPlaceholder>
                            </MenuItem>
                            <MenuItem value="M">Masculino</MenuItem>
                            <MenuItem value="F">Feminino</MenuItem>
                        </Field>
                    </GridMU>
                </GridMU>
                <GridMU
                    container
                    direction="column"
                    justify="flex-end"
                    alignItems="flex-end"
                    style={{ marginTop: 35 }}
                >
                    <Total>Total: {total}</Total>
                    <ButtonFinish type="submit">Finalizar Compra</ButtonFinish>
                </GridMU>
            </Box>
        </Form>
    );
}

export default reduxForm({
    form: 'client',
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(FormClient);
