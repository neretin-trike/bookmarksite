import React from 'react';

interface IProps {
    clickHandle(): void,
    name: string,
}

class Button extends React.PureComponent<IProps> {
    render() {
        return (
            <button onClick={this.props.clickHandle}>
                {this.props.name}
            </button> 
        )
    }
} 

export default Button;