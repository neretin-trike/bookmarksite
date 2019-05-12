import React from 'react';
import { connect } from "react-redux";

import Button from '../views/Button';
import { doSaveBookmark } from '../../actions/saveBookmark';
import { doSetModalWindowState } from '../../actions/setModalWindowState';

class SaveButtonContainer extends React.Component<any> {
  render() {
    return <Button name="Сохранить" clickHandle={()=>this.props.saveBookmark(this.props.addFormValues, this.props.tagsAddForm)}/>
  }
}

interface IStateProps {
  addFormValues: object,
  tagsAddForm: Array<number>
}
interface IDispatchProps {
  saveBookmark(formValues, tagsArray)
}

function mapStateToProps(state) {
  return {
    addFormValues: state.addFormValues as object,
    tagsAddForm: state.tagsAddForm as Array<number>
  };
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    saveBookmark: function (formValues, tagsArray) {

      let newBookmark = {
        faviconPath: "http://...",
        caption: formValues.caption,
        url: formValues.url,
        createDate: new Date().toString(),
        tagArray: tagsArray
      }

      dispatch(doSaveBookmark(newBookmark));
      dispatch(doSetModalWindowState({
        addFormTitle: "",
        isModalWindowShow: false
      }));
    }
  }
}

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(SaveButtonContainer);