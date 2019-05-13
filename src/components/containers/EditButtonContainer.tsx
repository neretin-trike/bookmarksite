import React from 'react';
import { connect } from 'react-redux';

import Button from '../views/Button';
import { doEditBookmark } from '../../actions/editBookmark';
import { doSetModalWindowState } from '../../actions/setModalWindowState';

class EditButtonContainer extends React.Component<any> {
  clickHandle() {
    alert();
  }
  render() {
    return <Button theme="button_theme_interact" name="редактировать" clickHandle={() => this.props.editBookmark(this.props.id)}/>
  }
}

interface IDispatchProps {
  editBookmark(id: number)
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    editBookmark: function (id) {
      dispatch(doEditBookmark({id}));
      dispatch(doSetModalWindowState({
        addFormTitle: "Редактирование записи",
        isModalWindowShow: true
      }));
    }
  }
}

export default connect<any,IDispatchProps>(null,mapDispatchToProps)(EditButtonContainer);
