import React from 'react';

interface IProps {
    clickHandle(): void,
    color: string,
    name: string,
    readonly: boolean
}

class TagItem extends React.PureComponent<IProps> {
    render() {
        return (
            <div>
                <span style={{color: `${this.props.color}`}}>{this.props.name}</span>
                {this.props.readonly || <button onClick={this.props.clickHandle}>x</button>}
            </div>
        )
    }
} 

export default TagItem;