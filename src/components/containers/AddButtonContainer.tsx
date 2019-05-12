import React from 'react';
import { connect } from "react-redux";

import Button from '../views/Button';
import { doAddBookmark } from '../../actions/addBookmark';
import { doSetModalWindowState } from '../../actions/setModalWindowState';

class AddButtonContainer extends React.Component<any> {
  render() {
    return <Button name="Добавить закладку" clickHandle={this.props.addBookmark}/>
  }
}

interface IDispatchProps {
  addBookmark(any)
}
const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    addBookmark: function () {
      dispatch(doAddBookmark({}));
      dispatch(doSetModalWindowState({
        addFormTitle: "Добавление новой записи",
        isModalWindowShow: true
      }));
    }
  }
}

export default connect<any,IDispatchProps>(null,mapDispatchToProps)(AddButtonContainer);