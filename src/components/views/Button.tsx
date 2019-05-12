import React from 'react';

import '../../styles/button.css'

interface IProps {
    clickHandle(): void,
    name: string,
    theme?: string
}

class Button extends React.PureComponent<IProps> {
    render() {
        return (
            <button className={`button ${this.props.theme}`} onClick={this.props.clickHandle}>
                {this.props.name}
            </button> 
        )
    }
} 

export default Button;