import React, {useState} from 'react';
import FormContext from './context';
import renderComponent from './renderComponent';
import createForm from '../createForm';

const all = [
    'active',
    'data',
    'dirty',
    'dirtySinceLastSubmit',
    'error',
    'initial',
    'invalid',
    'length',
    'modified',
    'pristine',
    'submitError',
    'submitFailed',
    'submitSucceeded',
    'submitting',
    'touched',
    'valid',
    'value',
    'visited'
].reduce((result, key) => {
    result[key] = true;
    return result
}, {});

function Form({
    validateOnBlur,
    subscription = all,
    ...rest
}) {
    const config = {
        validateOnBlur
    };

    const form = createForm(config);

    const [state, setState] = useState(() => {
        let initialState = {};
        form.subscribe(state => {
            initialState = state;
        }, subscription)();
        return initialState;
    });

    const renderProps = {
        ...state,
        form: {
            ...form
        }
    };

    return React.createElement(
        FormContext.Provider,
        {value: form},
        renderComponent(
            {
                ...rest,
                ...renderProps
            },
            'ReactForm'
        )
    );
}

export default Form;
