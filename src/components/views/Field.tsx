import React from 'react';

interface IProps {
    changeHandle(): void,
    placeholder: string
}

class Field extends React.PureComponent<IProps> {
    render() {
        return (
            <form>
                <input onChange={this.props.changeHandle} placeholder={this.props.placeholder}/>
                {this.props.children}
            </form>
          )
    }
} 

export default Field;
