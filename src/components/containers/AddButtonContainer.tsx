import React from 'react';
import { connect } from "react-redux";

import Button from '../views/Button';
import { doAddBookmark } from '../../actions/addBookmark';

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

      let newBookmark = {
        faviconPath: "http://...",
        caption: "например новая закладка",
        url: "https://google.com",
        createDate: "20.01.2018 15:48",
        tagArray: [0, 1 ,2, 3, 4, 5]
      }

      dispatch(doAddBookmark(newBookmark));
    }
  }
}

export default connect<any,IDispatchProps>(null,mapDispatchToProps)(AddButtonContainer);