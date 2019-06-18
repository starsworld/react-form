import formSubscriptionItems from './formSubscriptionItems'
import subscriptionFilter from './subscriptionFilter'

const shallowEqualKeys = ['touched', 'visited']

export default function filterFormState(state, previousState, subscription, force) {
    const result = {};
    const different =
        subscriptionFilter(
            result,
            state,
            previousState,
            subscription,
            formSubscriptionItems,
            shallowEqualKeys
        ) || !previousState;
    return different || force ? result : undefined;
}
