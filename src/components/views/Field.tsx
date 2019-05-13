import React from 'react';

import '../../styles/input.css'
import '../../styles/field.css'

interface IProps {
    changeHandle(): void,
    placeholder: string,
    name: string,
    value: string,
    theme?: string,
    label?: string
}

class Field extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="field">
                <label className="field__label">{this.props.label}</label>
                <input name={this.props.name} 
                       value={this.props.value} 
                       onChange={this.props.changeHandle}
                       placeholder={this.props.placeholder}
                       className={`input ${this.props.theme}`} />
                {this.props.children}
            </div>
          )
    }
} 

export default Field;
