import React from 'react';
import TagItemContainer from '../containers/TagItemContainer';

interface IProps {
    array: Array<any>,
    tags: Array<any>
}

class TagsArray extends React.PureComponent<IProps> {
    render() {
        let {array, tags} = this.props;
        return (
            <div>
                {array.map( (item: number, index: number) => {
                    return <TagItemContainer key={index} tag={tags[item]}/>
                })}
            </div>
        )
    }
}



export default TagsArray;
