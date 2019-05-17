import React from "react";
import { connect } from "react-redux";

import Field from "../views/Field";
import { doChangeAddFormValue } from "../../actions/changeAddFormValue";
import { doAccessSaveBookmark } from "../../actions/accessSaveBookmark";
import { doValidateField } from "../../actions/validateField";
import Validate from "../../validator";

const CaptionFieldContainer: React.FunctionComponent<any> = (props) => {
    let captionValid = new Validate("caption", props.validationErrors);

    return <Field
      theme="input_theme_modal"
      label="Название *"
      placeholder="Название закладки"
      value={props.captionValue}
      name="caption"
      changeHandle={(event) => props.changeAddFormValue(captionValid, event)} />
}

interface IStateProps {
  captionValue: string,
  validationErrors: string
}
interface IDispatchProps {
  changeAddFormValue(error, event)
}

const mapStateToProps = (state) => {
  let { addFormValues, validationErrors } = state.modalWindowState;
  return {
    captionValue: addFormValues.caption as string,
    validationErrors: validationErrors as string
  };
}
const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    changeAddFormValue: function (valdator, event) {
      const target = event.target;
      let { value, name } = target;

      function rule() {
        if (value.length < 3 || value.length > 256) {
          return {
            name,
            message: "Название: символов должно быть больше 3 и меньше 256"
          }
        }
      }
      let [items, hasError] = valdator.check([rule]);

      dispatch(doValidateField(items));

      if (hasError) {
        dispatch(doAccessSaveBookmark({ disabled: true }))
      } else {
        dispatch(doAccessSaveBookmark({ disabled: false }))
      }
      
      dispatch(doChangeAddFormValue({ value, name }));
    }
  }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(CaptionFieldContainer);



