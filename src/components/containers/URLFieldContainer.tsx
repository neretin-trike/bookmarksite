import React from 'react';
import { connect } from 'react-redux';

import Field from '../views/Field';
import { doChangeAddFormValue } from '../../actions/changeAddFormValue';
import { doAccessSaveBookmark } from '../../actions/accessSaveBookmark';
import { doValidateField } from '../../actions/validateField';
import Validate from '../../validationSetting';

class URLFieldContainer extends React.Component<any> {
  render() {
    let URLValid = new Validate("url", this.props.validationErrors);

    return <Field 
      theme="input_theme_modal"
      label="URL *" 
      placeholder="Адрес сайта"
      value={this.props.urlValue} 
      name="url" 
      changeHandle={(event) => this.props.changeAddFormValue(URLValid, event)} />
  }
}

interface IDispatchProps {
  changeAddFormValue(error, event)
}
interface IStateProps {
  urlValue: string,
  validationErrors: string
}

function mapStateToProps(state) {
  return {
    urlValue: state.addFormValues.url as string,
    validationErrors: state.validationErrors as string
  };
}



const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    changeAddFormValue: function (valdator, event) {
          const target = event.target;
          let {value, name} = target;

          function rule () {
            if (value.length < 3 || value.length > 256) {
              return {
                  name: "url",
                  message: "Символов должно быть больше 3 и меньше 256"
              }
            } 
          }
          function rule2 () {
            if ((value.startsWith("http://") === false ) && (value.startsWith("https://") === false) ) {
              return {
                  name: "url",
                  message: "Адрес должен начинаться с http*"
              }
            } 
          }
          let [items, hasError] = valdator.check([rule,rule2]);

          dispatch(doValidateField(items));

          if (hasError) {
            dispatch(doAccessSaveBookmark({disabled: true}))
          } else {
            dispatch(doAccessSaveBookmark({disabled: false}))
          }

          dispatch(doChangeAddFormValue({value, name}));
      }
  }
}

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(URLFieldContainer);