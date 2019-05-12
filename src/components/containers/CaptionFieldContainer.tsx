import React from 'react';
import { connect } from 'react-redux';

import Field from '../views/Field';
import { doChangeAddFormValue } from '../../actions/changeAddFormValue';

class CaptionFieldContainer extends React.Component<any> {
  render() {
    return <Field placeholder="Название закладки" value={this.props.captionValue} name="caption" changeHandle={this.props.changeAddFormValue}/>
  }
}

interface IDispatchProps {
  changeAddFormValue(any)
}
interface IStateProps {
  captionValue: string,
}

function mapStateToProps(state) {
  return {
    captionValue: state.addFormValues.caption as string
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

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(CaptionFieldContainer);