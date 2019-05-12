import React from 'react';
import { connect } from "react-redux";

import Button from '../views/Button';
import { doSetModalWindowState, SET_MODALWINDOW_STATE } from '../../actions/setModalWindowState';

class CloseButtonContainer extends React.Component<any> {
  render() {
    return <Button name="Закрыть" clickHandle={this.props.closeModalWindow}/>
  }
}

interface IDispatchProps {
  closeModalWindow(id: number)
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    closeModalWindow: function (id) {
      dispatch(doSetModalWindowState({
        addFormTitle: "",
        isModalWindowShow: false
      }));
    }
  }
}

export default connect<any,IDispatchProps>(null,mapDispatchToProps)(CloseButtonContainer);