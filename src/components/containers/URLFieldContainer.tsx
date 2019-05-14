import React from 'react';
import { connect } from 'react-redux';

import Field from '../views/Field';
import { doChangeAddFormValue } from '../../actions/changeAddFormValue';
import { doAccessSaveBookmark } from '../../actions/accessSaveBookmark';
import { doValidateField } from '../../actions/validateField';

class URLFieldContainer extends React.Component<any> {
  render() {
    return <Field 
      theme="input_theme_modal"
      label="URL *" 
      placeholder="Адрес сайта"
      value={this.props.urlValue} 
      name="url" 
      changeHandle={ (event) => this.props.changeAddFormValue(this.props.validationErrors, event)} />
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
    changeAddFormValue: function (error, event) {
          const target = event.target;
          let {value, name} = target;

          let obj = {
            name: "url",
            message: "Символов должно быть больше 3 и меньше 256"
          };

          if (value.length < 3 && value.length >= 256) {
            obj = {
              name: "url",
              message: ""
            };
          } 

          let hasError = false;
          for (const key in error) {
            if (error[key] !== "") {
              hasError = true;
            }
          }
          if (obj.message !== "") {
            hasError = true;
          }

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