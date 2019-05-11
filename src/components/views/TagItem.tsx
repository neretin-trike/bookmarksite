import React from 'react';

interface IProps {
    clickHandle(): void,
    color: string,
    name: string
}

class TagItem extends React.PureComponent<IProps> {
    render() {
        return (
            <div>
                <span style={{color: `${this.props.color}`}}>{this.props.name}</span>
                <button onClick={this.props.clickHandle}>x</button>
            </div>
        )
    }
} 

export default TagItem;