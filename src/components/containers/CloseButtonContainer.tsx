import React from "react";
import { connect } from "react-redux";

import Button from "../views/Button";
import { doSetModalWindowState } from "../../actions/setModalWindowState";

const CloseButtonContainer: React.FunctionComponent<any> = (props) => {
  return <Button
    name="Закрыть"
    theme="button_theme_modal"
    clickHandle={props.closeModalWindow} />
}

interface IDispatchProps {
  closeModalWindow()
}

const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    closeModalWindow: function () {
      dispatch(doSetModalWindowState({
        addFormTitle: "Редактирование записи",
        isModalWindowShow: false
      }));
    }
  }
}

export default connect<any, IDispatchProps>(null, mapDispatchToProps)(CloseButtonContainer);