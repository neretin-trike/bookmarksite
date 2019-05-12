import React from 'react';
import TagItemContainer from '../containers/TagItemContainer';

import '../../styles/tags-array.css'

interface IProps {
    array: Array<any>,
    tags: Array<any>,
    readonly: boolean
}

class TagsArray extends React.PureComponent<IProps> {
    render() {
        let {array, tags, readonly} = this.props;
        return (
            <div className="tags-array">
                {array && array.map( (item: number, index: number) => {
                    return <TagItemContainer readonly={readonly} key={index} id={index} tag={tags[item]}/>
                })}
            </div>
        )
    }
}



export default TagsArray;
