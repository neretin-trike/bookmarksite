import React from 'react';
import { connect } from 'react-redux';

import Field from '../views/Field';
import { doChangeAddFormValue } from '../../actions/changeAddFormValue';
import { doAccessSaveBookmark } from '../../actions/accessSaveBookmark';
import { doValidateField } from '../../actions/validateField';
import Validate from '../../validationSetting';

class CaptionFieldContainer extends React.Component<any> {
  render() {
    let captionValid = new Validate("caption", this.props.validationErrors);
    
    return <Field 
      theme="input_theme_modal"
      label="Название *" 
      placeholder="Название закладки" 
      value={this.props.captionValue} 
      name="caption" 
      changeHandle={(event) => this.props.changeAddFormValue(captionValid, event)}/>
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
                  name: "caption",
                  message: "Символов должно быть больше 3 и меньше 256"
              }
            } 
          }
          let [items, hasError] = valdator.check([rule]);

          console.log(items);

          dispatch(doValidateField(items));

          if (hasError) {
            dispatch(doAccessSaveBookmark({disabled: true}))
            return;
          } else {
            dispatch(doAccessSaveBookmark({disabled: false}))
          }

          dispatch(doChangeAddFormValue({value, name}));
      }
  }
}

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(CaptionFieldContainer);



