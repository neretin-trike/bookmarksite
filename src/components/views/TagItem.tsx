import React from 'react';

import '../../styles/tag-item.css'

interface IProps {
    clickHandle(): void,
    color: string,
    name: string,
    readonly: boolean
}

class TagItem extends React.PureComponent<IProps> {
    render() {
        return (
            <div style={{background: `${this.props.color}`}} className="tag-item">
                <span className="tag-item__name">{this.props.name}</span>
                {this.props.readonly || <button className="tag-item__button" onClick={this.props.clickHandle}>✕</button>}
            </div>
        )
    }
} 

export default TagItem;