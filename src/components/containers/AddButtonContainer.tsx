import React from "react";
import { connect } from "react-redux";

import Button from "../views/Button";
import { doAddBookmark } from "../../actions/addBookmark";
import { doSetModalWindowState } from "../../actions/setModalWindowState";

const AddButtonContainer: React.FunctionComponent<any> = (props) => {
  return <Button
    theme="button_theme_add header-layout__button"
    name="Добавить закладку"
    clickHandle={props.addBookmark} />
}

interface IDispatchProps {
  addBookmark()
}
const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    addBookmark: function () {
      dispatch(doSetModalWindowState({
        addFormTitle: "Добавление новой записи",
        isModalWindowShow: true
      }));
      dispatch(doAddBookmark({}));
    }
  }
}

export default connect<any, IDispatchProps>(null, mapDispatchToProps)(AddButtonContainer);