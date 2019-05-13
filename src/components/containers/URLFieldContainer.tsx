import React from 'react';
import { connect } from 'react-redux';

import Field from '../views/Field';
import { doChangeAddFormValue } from '../../actions/changeAddFormValue';

class URLFieldContainer extends React.Component<any> {
  render() {
    return <Field 
      theme="input_theme_modal"
      label="URL" 
      placeholder="Адрес сайта"
      value={this.props.urlValue} 
      name="url" 
      changeHandle={this.props.changeAddFormValue} />
  }
}

interface IDispatchProps {
  changeAddFormValue(any)
}
interface IStateProps {
  urlValue: string,
}

function mapStateToProps(state) {
  return {
    urlValue: state.addFormValues.url as string
  };
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    changeAddFormValue: function (event) {
          const target = event.target;
          let {value, name} = target;
          dispatch(doChangeAddFormValue({value, name}));
      }
  }
}

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(URLFieldContainer);