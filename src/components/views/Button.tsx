import React from 'react';

import '../../styles/button.css'

interface IProps {
    clickHandle(any?): void,
    name: string,
    disabled?: boolean,
    theme?: string
}

class Button extends React.PureComponent<IProps> {
    render() {
        return (
            <button disabled={this.props.disabled} className={`button ${this.props.theme}`} onClick={this.props.clickHandle}>
                {this.props.name}
            </button> 
        )
    }
} 

export default Button;