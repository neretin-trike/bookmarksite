import React from 'react';
import { connect } from "react-redux";

import TagsArray from '../views/TagsArray';

class TagsArrayContainer extends React.Component<any> {
    render() {
        return (
            <TagsArray array={this.props.array} readonly={true} tags={this.props.tags} />
        )
    }
}

interface IStateProps {
    tags: Array<any>,
}
function mapStateToProps(state) {
    return {
        tags: state.tags as Array<any>,
    };
}
export default connect<IStateProps>(mapStateToProps)(TagsArrayContainer);