import shallowEqual from './shallowEqual';

export default function(
    dest,
    src,
    previous,
    subscription,
    keys,
    shallowEqualKeys
) {
    let different = false;
    keys.forEach(key => {
        if (subscription[key]) {
            dest[key] = src[key];
            if (!previous ||
                (~shallowEqualKeys.indexOf(key)
                ? !shallowEqual(src[key], previous[key])
                : src[key] !== previous[key])
            ) {
                different = true;
            }
        }
    });
    return different;
}
