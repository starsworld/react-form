import React, {useState} from 'react';

function useField(name) {

    const [state, setState] = useState(() => {
        return {};
    });

    let {blur, change, focus, value, name: ignoreName, ...otherState} = state;
    const meta = {
        active: otherState.active,
        data: otherState.data,
        dirty: otherState.dirty,
    };

    const input = {name, value, };

    return {input, meta};
}

export default useField;
