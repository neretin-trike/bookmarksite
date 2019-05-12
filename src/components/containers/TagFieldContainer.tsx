import React from 'react';
import { connect } from "react-redux";

import Field from '../views/Field';
import TagsArray from '../views/TagsArray';
import { doChangeAddFormValue } from '../../actions/changeAddFormValue';

class TagFieldContainer extends React.Component<any> {
  render() {
    return (
        <Field name="tag" value={this.props.tagValue} placeholder="Имя тега" changeHandle={this.props.changeAddFormValue}>
            <TagsArray array={this.props.array} tags={this.props.tags} />
        </Field>
    )
  }
}

interface IStateProps {
  tags: Array<any>,
  tagValue: string
}
function mapStateToProps(state) {
  return {
      tags: state.tags as Array<any>,
      tagValue: state.addFormValues.tag as string
  };
}

interface IDispatchProps {
  changeAddFormValue(any)
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

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(TagFieldContainer);