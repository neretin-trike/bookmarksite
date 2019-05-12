import React from 'react';
import { connect } from 'react-redux';

import Field from '../views/Field';
import { doChangeAddFormValue } from '../../actions/changeAddFormValue';

class URLFieldContainer extends React.Component<any> {
  render() {
    return <Field name="url" value={this.props.urlValue} placeholder="Адрес сайта" changeHandle={this.props.changeAddFormValue} />
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