import React from "react";

import '../../styles/hint.css';

interface IProps {
    error: any
}
const Hint: React.FunctionComponent<IProps> = (props) => {
    const items = Array(0);
    for (let key in props.error) {
        if (props.error[key] !== "" && props.error[key] !== "error") {
            items.push(<li className="hint__item" key={key}>{props.error[key]}</li>)
        }
    }

    return (
        <ul className="hint">
            {items}
        </ul>
    )
}

export default Hint;