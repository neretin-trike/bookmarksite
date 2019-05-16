import React from 'react';
import { connect } from 'react-redux';

import Button from '../views/Button';
import { doEditBookmark } from '../../actions/editBookmark';
import { doSetModalWindowState } from '../../actions/setModalWindowState';
import { doAccessSaveBookmark } from '../../actions/accessSaveBookmark';
import { doMapTagArray } from '../../actions/mapTagArray';

class EditButtonContainer extends React.Component<any> {
  clickHandle() {
    alert();
  }
  render() {
    let {id, bookMarks} = this.props;
    console.log(bookMarks);
    return <Button theme="button_theme_interact" name="редактировать" clickHandle={() => this.props.editBookmark(id, bookMarks[id])}/>
  }
}

interface IStateProps {
  bookMarks: any,
}

function mapStateToProps(state) {
  let {bookMarks} = state.bookmarkState;
  return {
    bookMarks: bookMarks ,
  };
}

interface IDispatchProps {
  editBookmark(id, bookmark)
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    editBookmark: function (id,bookmark) {
      dispatch(doSetModalWindowState({
        addFormTitle: "Редактирование записи",
        isModalWindowShow: true,
      }));
      dispatch(doEditBookmark({id, bookmark}));
      dispatch(doMapTagArray({tagArray: bookmark.tagArray}));
      dispatch(doAccessSaveBookmark({disabled:false}));
    }
  }
}

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(EditButtonContainer);
