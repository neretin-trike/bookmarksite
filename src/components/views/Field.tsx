import React from 'react';

interface IProps {
    changeHandle(): void,
    placeholder: string,
    name: string,
    value: string
}

class Field extends React.PureComponent<IProps> {
    render() {
        return (
            <form>
                <input name={this.props.name} value={this.props.value} onChange={this.props.changeHandle} placeholder={this.props.placeholder}/>
                {this.props.children}
            </form>
          )
    }
} 

export default Field;
