

function createForm(config) {
    if (!config) {
        throw new Error('No config');
    }

    let {
        validate,
        validateOnBlur
    } = config;

    const state = {
        subscribers: {index: 0, entries: {}},
        fields: {},
        formState: {
            invalid: false,
        }
    };

    const api = {
        blur: (name) => {
            const {fields, formState} = state;
            const previous = fields[name];
            if (previous) {
                if (validateOnBlur) {

                }
            }
        },
        change: (name, value) => {
            const {fields, formState} = state;
            const oldValue = '';
            if (value !== oldValue) {

            }
        },
        focus: (name) => {

        },
        getFieldState: name => {
            const field = state.fields[name];
            return field && field.lastFieldState;
        },
        init: (data) => {

        },
        registerField: (name, subscriber) => {

        },
        reset: () => {

        }
    };

    return api;
}

export default createForm;
