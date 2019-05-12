import React from 'react';
import { connect } from "react-redux";

import TagItem from '../views/TagItem';
import { doDeleteTag } from '../../actions/deleteTag';

interface IProps {
    tag: {
        name: string,
        color: string,
    },
    id: number,
    readonly: boolean,
    deleteTag(id): void,
}

class TagItemContainer extends React.Component<IProps> {
  render() {
    return <TagItem name={this.props.tag.name} readonly={this.props.readonly} color={this.props.tag.color} clickHandle={()=>this.props.deleteTag(this.props.id)}/>
  }
}

interface IStateProps {
  tagsAddForm: Array<number>
}
function mapStateToProps(state) {
  return {
      tagsAddForm: state.tagsAddForm as Array<number>
  };
}

interface IDispatchProps {
  deleteTag(id),
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    deleteTag: function (id) {
      dispatch(doDeleteTag({id}));
    },
  }
}

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(TagItemContainer);