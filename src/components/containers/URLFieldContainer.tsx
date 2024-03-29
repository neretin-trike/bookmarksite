import React, { useState } from "react";
import { connect } from "react-redux";

import Field from "../views/Field";
import { doChangeAddFormValue } from "../../actions/changeAddFormValue";
import { doAccessSaveBookmark } from "../../actions/accessSaveBookmark";
import { doValidateField } from "../../actions/validateField";
import Validate from "../../validator";
import Button from "../views/Button";

const URLFieldContainer: React.FunctionComponent<any> = (props) => {
  const [isDisabled, setDisabled] = useState(true);

  let URLValid = new Validate("url", props.validationErrors);

  const handleChange = (event) => {
    const target = event.target;
    let { value, name } = target;

    function rule() {
      if (value.length < 3 || value.length > 256) {
        return {
          name,
          message: "URL: Символов должно быть больше 3 и меньше 256"
        }
      }
    }
    function rule2() {
      if ((value.startsWith("http://") === false) && (value.startsWith("https://") === false)) {
        return {
          name,
          message: "URL: Адрес должен начинаться с http:// или https://"
        }
      }
    }

    // сначала идёт проверка для одного поля, чтобы определить доступность кнопки автоматического заполнения
    let [items, hasError] = URLValid.check([rule, rule2], true);
    if (hasError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    [items, hasError] = URLValid.check([rule, rule2]);

    props.changeAddFormValue(items, hasError, event);
  }

  return <Field
    theme="input_theme_modal"
    label="URL *"
    placeholder="Адрес сайта"
    value={props.urlValue}
    name="url"
    changeHandle={handleChange}>
    <Button
      disabled={isDisabled}
      title="Автоматически заполнить название закладки"
      theme="button_theme_plus"
      name="◈"
      clickHandle={() => props.getTitleFromURL(props.urlValue)} />
  </Field>
}

interface IDispatchProps {
  changeAddFormValue(items, hasError, event),
  getTitleFromURL(any)
}
interface IStateProps {
  urlValue: string,
  validationErrors: string
}

const mapStateToProps = (state) => {
  let { addFormValues, validationErrors } = state.modalWindowState;

  return {
    urlValue: addFormValues.url as string,
    validationErrors: validationErrors as string
  };
}
const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    changeAddFormValue: function (items, hasError, event) {
      const target = event.target;
      let { value, name } = target;

      dispatch(doValidateField(items));

      if (hasError) {
        dispatch(doAccessSaveBookmark({ disabled: true }))
      } else {
        dispatch(doAccessSaveBookmark({ disabled: false }))
      }

      dispatch(doChangeAddFormValue({ value, name }));
    },
    getTitleFromURL: function (url) {
      // простым GET запросом заголовок получить нельзя, поскольку ругается на CORS
      // поэтому пришлось воспользоваться сторонним сервисом, который к сожалению иногда медленно работает 
      fetch(`http://textance.herokuapp.com/title/${url}`)
        .then(response => response.text())
        .then(response => {
          if (response !== "") {
            dispatch(doChangeAddFormValue({ value: response, name: "caption" }));
            dispatch(doAccessSaveBookmark({ disabled: false }));
          } else {
            alert("Не удаётся получить имя сайта, пожалуйста введите вручную");
          }
        })
        .catch(error => alert(error));
    }
  }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(URLFieldContainer);