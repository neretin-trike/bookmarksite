import React from 'react';
import { connect } from 'react-redux';

import Button from '../views/Button';
import { doEditBookmark } from '../../actions/editBookmark';

class EditButtonContainer extends React.Component<any> {
  clickHandle() {
    alert();
  }
  render() {
    return <Button name="редактировать"  clickHandle={() => this.props.editBookmark(this.props.id)}/>
  }
}

interface IDispatchProps {
  editBookmark(id: number)
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    editBookmark: function (id) {
      dispatch(doEditBookmark({id}));
    }
  }
}

export default connect<any,IDispatchProps>(null,mapDispatchToProps)(EditButtonContainer);
