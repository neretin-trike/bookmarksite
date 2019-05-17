import React from "react";
import { connect } from "react-redux";

import Button from "../views/Button";
import { doSaveBookmark } from "../../actions/saveBookmark";
import { doSetModalWindowState } from "../../actions/setModalWindowState";

const SaveButtonContainer: React.FunctionComponent<any> = (props) => {
  let { addFormSaveButton, addFormValues, tagsAddForm, saveBookmark } = props;
  return <Button
    disabled={addFormSaveButton}
    theme="button_theme_modal"
    name="Сохранить"
    clickHandle={() => saveBookmark(addFormValues, tagsAddForm)} />
}

const getFormattedDate = () => {
  const format = (value) => {
    return ("0" + value).slice(-2);
  }

  let dateObj = new Date();

  let time = `${format(dateObj.getHours())}:${format(dateObj.getMinutes())}`;
  let date = `${format(dateObj.getDate())}.${format(dateObj.getMonth() + 1)}.${format(dateObj.getFullYear())}`;

  return { time, date };
}

interface IStateProps {
  addFormValues: object,
  tagsAddForm: Array<number>,
  addFormSaveButton: boolean
}
interface IDispatchProps {
  saveBookmark(formValues, tagsArray);
}

const mapStateToProps = (state) => {
  let { addFormValues, addFormSaveButton } = state.modalWindowState;
  let { tagsAddForm } = state.tagState;
  return {
    tagsAddForm: tagsAddForm as Array<number>,
    addFormValues: addFormValues as object,
    addFormSaveButton: addFormSaveButton as boolean
  };
}
const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    saveBookmark: function (formValues, tagsArray) {

      let { time, date } = getFormattedDate();

      let newBookmark = {
        faviconPath: `https://www.google.com/s2/favicons?domain=${formValues.url}`, // берёт ссылку на фавиконы из индексированных гуглом сайтов
        caption: formValues.caption,
        url: formValues.url,
        createDate: `${time} ${date}`,
        tagArray: tagsArray
      }

      dispatch(doSetModalWindowState({
        addFormTitle: "Редактировать запись",
        isModalWindowShow: false
      }));
      dispatch(doSaveBookmark({
        id: formValues.id,
        bookmark: newBookmark
      }));
    }
  }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(SaveButtonContainer);