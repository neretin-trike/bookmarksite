import React from 'react';
import { connect } from "react-redux";

import Button from '../views/Button';
import { doAddBookmark } from '../../actions/addBookmark';

class SaveButtonContainer extends React.Component<any> {
  render() {
    return <Button name="Сохранить" clickHandle={()=>this.props.addBookmark(this.props.addFormValues, this.props.tagsAddForm)}/>
  }
}

interface IStateProps {
  addFormValues: object,
  tagsAddForm: Array<number>
}
interface IDispatchProps {
  addBookmark(formValues, tagsArray)
}

function mapStateToProps(state) {
  return {
    addFormValues: state.addFormValues as object,
    tagsAddForm: state.tagsAddForm as Array<number>
  };
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    addBookmark: function (formValues, tagsArray) {

      let newBookmark = {
        faviconPath: "http://...",
        caption: formValues.caption,
        url: formValues.url,
        createDate: new Date().toString(),
        tagArray: tagsArray
      }

      dispatch(doAddBookmark(newBookmark));
    }
  }
}

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(SaveButtonContainer);