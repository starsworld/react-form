import memoize from "./memoize";
import filterFieldState from './filterFieldState'
import filterFormState from './filterFormState'

function calculateNextFormState() {

}

function notifySubscriber() {

}

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

        },
        subscribe: (subscriber, subscription) => {
            if (!subscriber) {
                throw new Error('No callback given.')
            }

            const memoized = memoize(subscriber);
            const {subscribers, lastFormState} = state;
            const index = subscribers.index++;
            subscribers.entries[index] = {
                subscriber: memoized,
                subscription
            };
            const nextFormState = calculateNextFormState();
            if (nextFormState !== lastFormState) {
                state.lastFormState = nextFormState;
            }
            notifySubscriber(
                memoized,
                subscription,
                nextFormState,
                nextFormState,

                true
            );
            return () => {
                delete subscribers.entries[index]
            }
        }
    };

    return api;
}

export default createForm;
