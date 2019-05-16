import React from 'react';
import { connect } from "react-redux";

import Button from '../views/Button';
import { doSaveBookmark } from '../../actions/saveBookmark';
import { doSetModalWindowState } from '../../actions/setModalWindowState';

class SaveButtonContainer extends React.Component<any> {
  render() {
    return <Button 
              disabled={this.props.addFormSaveButton}
              theme="button_theme_modal" 
              name="Сохранить" 
              clickHandle={()=>this.props.saveBookmark(this.props.addFormValues, this.props.tagsAddForm)}/>
  }
}

interface IStateProps {
  addFormValues: object,
  tagsAddForm: Array<number>,
  addFormSaveButton: boolean
}
interface IDispatchProps {
  saveBookmark(formValues, tagsArray);
}

function mapStateToProps(state) {
  return {
    addFormValues: state.addFormValues as object,
    tagsAddForm: state.tagsAddForm as Array<number>,
    addFormSaveButton: state.addFormSaveButton as boolean
  };
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    saveBookmark: function (formValues, tagsArray) {

      function getFormattedDate() {

        function format(value) {
          return ('0' + value).slice(-2);
        }

        let dateObj = new Date();
      
        let time = `${format(dateObj.getHours())}:${format(dateObj.getMinutes())}`;
        let date = `${format(dateObj.getDate())}.${format(dateObj.getMonth()+1)}.${format(dateObj.getFullYear())}`;
      
        return {time, date};
      }

      let {time, date} = getFormattedDate();

      let newBookmark = {
        faviconPath: `https://www.google.com/s2/favicons?domain=${formValues.url}`, // берёт ссылку на фавиконы из индексированных сайтов
        caption: formValues.caption,
        url: formValues.url,
        createDate: `${time} ${date}`,
        tagArray: tagsArray
      }
    
      dispatch(doSetModalWindowState({
        addFormTitle: "Редактировать запись",
        isModalWindowShow: false
      }));
      dispatch(doSaveBookmark(newBookmark));
    }
  }
}

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(SaveButtonContainer);