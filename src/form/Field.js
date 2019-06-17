import React from 'react';
import renderComponent from './renderComponent';
import useField from './useField';

const Field = ({
    afterSubmit,
    allowNull,
    beforeSubmit,
    children,
    component,
    name,
}) => {
    const field = useField(name, {
        afterSubmit,
        allowNull,
    });

    return renderComponent(
        {...field, children, component},
        `Field(${name})`
    );
};

export default Field;
