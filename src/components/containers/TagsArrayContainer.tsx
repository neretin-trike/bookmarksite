import React from 'react';
import { connect } from "react-redux";

import TagsArray from '../views/TagsArray';
import { TagsArrayContext } from '../../hooks/useTagsArrayReadonly';

class TagsArrayContainer extends React.Component<any> {
    render() {
        return (
            <TagsArrayContext.Provider value={this.props.readonly}>
                <TagsArray array={this.props.array} tags={this.props.tags} />
            </TagsArrayContext.Provider>
        )
    }
}

interface IStateProps {
    tags: Array<any>,
}
function mapStateToProps(state) {
  let {tags} = state.tagState;
    return {
        tags: tags as Array<any>,
    };
}
export default connect<IStateProps>(mapStateToProps)(TagsArrayContainer);