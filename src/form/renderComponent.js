import React from 'react';

export default function renderComponent(props, name) {
    const {render, children, component, ...rest} = props;
    if (component) {
        return React.createElement(component, {...rest, children, render})
    }
    if (render) {
        return render(children === undefined ? rest : {...rest, children})
    }
    if (typeof children !== 'function') {
        throw new Error(`Must specify a render prop to ${name}`)
    }
    return children(rest);
}
