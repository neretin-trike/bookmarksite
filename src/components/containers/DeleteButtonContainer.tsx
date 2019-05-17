import React from 'react';
import { connect } from 'react-redux';

import Button from '../views/Button';
import { doDeleteBookmark } from '../../actions/deleteBookmark';

const DeleteButtonContainer: React.FunctionComponent<any> = (props) => {
    return <Button
      theme="button_theme_interact"
      name="удалить"
      clickHandle={() => props.deleteBookmark(props.id)} />
}

interface IDispatchProps {
  deleteBookmark(id: number)
}

const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    deleteBookmark: function (id) {
      dispatch(doDeleteBookmark({ id }));
    }
  }
}

export default connect<any, IDispatchProps>(null, mapDispatchToProps)(DeleteButtonContainer);
