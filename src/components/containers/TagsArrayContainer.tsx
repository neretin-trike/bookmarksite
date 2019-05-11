import React from 'react';

import TagsArray from '../views/TagsArray';
import tags from '../../data/tags';

class TagsArrayContainer extends React.Component<any> {
    render() {
        return (
            <TagsArray array={this.props.array} tags={tags} />
        )
    }

}

export default TagsArrayContainer;