import React from "react";
import { connect } from "react-redux";

import Button from "../views/Button";
import { doEditBookmark } from "../../actions/editBookmark";
import { doSetModalWindowState } from "../../actions/setModalWindowState";
import { doAccessSaveBookmark } from "../../actions/accessSaveBookmark";
import { doMapTagArray } from "../../actions/mapTagArray";

const EditButtonContainer: React.FunctionComponent<any> = (props) => {
  let { id, bookMarks } = props;

  return <Button
    theme="button_theme_interact"
    name="редактировать"
    clickHandle={() => props.editBookmark(id, bookMarks[id])} />
}

interface IStateProps {
  bookMarks: any,
}
interface IDispatchProps {
  editBookmark(id, bookmark)
}

const mapStateToProps = (state) => {
  let { bookMarks } = state.bookmarkState;
  return {
    bookMarks: bookMarks,
  };
}
const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    editBookmark: function (id, bookmark) {
      dispatch(doSetModalWindowState({
        addFormTitle: "Редактирование записи",
        isModalWindowShow: true,
      }));
      dispatch(doEditBookmark({ id, bookmark }));
      dispatch(doMapTagArray({ tagArray: bookmark.tagArray }));
      dispatch(doAccessSaveBookmark({ disabled: false }));
    }
  }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(EditButtonContainer);
