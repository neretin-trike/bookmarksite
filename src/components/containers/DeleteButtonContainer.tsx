import React from 'react';
import { connect } from 'react-redux';

import Button from '../views/Button';
import { doDeleteBookmark } from '../../actions/deleteBookmark';

class DeleteButtonContainer extends React.Component<any> {
  clickHandle = () => {
    this.props.deleteBookmark(this.props.id);
  }
  render() {
    return <Button name="удалить" clickHandle={this.clickHandle}/>
  }
}

interface IDispatchProps {
  deleteBookmark(any)
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    deleteBookmark: function (id) {
      dispatch(doDeleteBookmark({id}));
    }
  }
}

export default connect<any,IDispatchProps>(null,mapDispatchToProps)(DeleteButtonContainer);
