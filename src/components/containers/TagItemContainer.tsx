import React from "react";
import { connect } from "react-redux";

import TagItem from "../views/TagItem";
import { doDeleteTag } from "../../actions/deleteTag";

interface IProps {
  tag: {
    name: string,
    color: {
      red: number,
      green: number,
      blue: number
    },
  },
  id: number,
  deleteTag(id): void,
}

const TagItemContainer: React.FunctionComponent<IProps> = (props) => {
  let { deleteTag, id } = props;
  let { red, green, blue } = props.tag.color;

  let color = `rgb(${red},${green},${blue})`;

  return <TagItem
    name={props.tag.name}
    color={color}
    clickHandle={() => deleteTag(id)} />
}

interface IStateProps {
  tagsAddForm: Array<number>
}
interface IDispatchProps {
  deleteTag(id),
}

const mapStateToProps = (state) => {
  let { tagsAddForm } = state.tagState;
  return {
    tagsAddForm: tagsAddForm as Array<number>
  };
}
const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    deleteTag: function (id) {
      dispatch(doDeleteTag({ id }));
    },
  }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(TagItemContainer);