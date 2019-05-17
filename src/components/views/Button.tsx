import React from "react";

import "../../styles/button.css"

interface IProps {
    clickHandle(any?): void,
    name: string,
    title?: string,
    disabled?: boolean,
    theme?: string
}

const Button: React.FunctionComponent<IProps> = (props) => {
    let {disabled, theme, clickHandle, title, name} = props;

    return (
        <button
            disabled={disabled}
            className={`button ${theme}`}
            onClick={clickHandle}
            title={title}>
                {name}
        </button>
    )
}

export default Button;