import fieldSubscriptionItems from './fieldSubscriptionItems'
import subscriptionFilter from './subscriptionFilter'

const shallowEqualKeys = ['data'];

export default function(state, previousState, subscription, force) {
    const result = {
        blur: state.blur,
        change: state.change,
        focus: state.focus,
        name: state.name
    };

    const different =
        subscriptionFilter(
            result,
            state,
            previousState,
            subscription,
            fieldSubscriptionItems,
            shallowEqualKeys,
        ) || !previousState;
    return different || force ? result : undefined;
}
