import React from "react";

import "../../styles/input.css"
import "../../styles/field.css"

interface IProps {
    changeHandle(any?): void,
    keypressHandle?(any?): void,
    placeholder: string,
    name: string,
    value: string,
    theme?: string,
    label?: string
}

const Field: React.FunctionComponent<IProps> = (props) => {
    let { changeHandle, keypressHandle, placeholder, value, name, label, theme } = props;

    return (
        <div className="field">
            <label className="field__label">{label}</label>
            <input name={name}
                value={value}
                onKeyDown={keypressHandle}
                onChange={changeHandle}
                placeholder={placeholder}
                className={`input ${theme}`} />
            {props.children}
        </div>
    )
}

export default Field;
