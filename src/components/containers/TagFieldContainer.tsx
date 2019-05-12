import React from 'react';
import { connect } from "react-redux";

import Field from '../views/Field';
import TagsArray from '../views/TagsArray';
import Button from '../views/Button';
import { doChangeAddFormValue } from '../../actions/changeAddFormValue';
import { doAddTag } from '../../actions/addTag';
import { doAddNewTag } from '../../actions/addNewTag';

class TagFieldContainer extends React.Component<any> {
  render() {
    return (
      <Field name="tag" value={this.props.tagValue} placeholder="Имя тега" changeHandle={this.props.changeAddFormValue}>
        <Button name="+" clickHandle={()=>this.props.addTag(this.props.tagValue, this.props.tags)}/>
        <TagsArray array={this.props.tagsAddForm} tags={this.props.tags} readonly={false}/>
      </Field>
    )
  }
}

interface IStateProps {
  tags: Array<any>,
  tagValue: string,
  tagsAddForm: Array<number>
}
function mapStateToProps(state) {
  return {
      tags: state.tags as Array<any>,
      tagValue: state.addFormValues.tag as string,
      tagsAddForm: state.tagsAddForm as Array<number>
  };
}

interface IDispatchProps {
  changeAddFormValue(event),
  addTag(value, tags)
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    changeAddFormValue: function (event) {
          const target = event.target;
          let {value, name} = target;

          dispatch(doChangeAddFormValue({value, name}));
    },
    addTag: function(value, tags) {
      
      let tagName = tags.map(item => item.name);
      let id = tagName.indexOf(value);

      if (id === -1) {
        let newTag = {
          name: value,
          color: "black"
        };
        dispatch(doAddNewTag(newTag));
      } 

      dispatch(doAddTag({id}));
    }
  }
}

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(TagFieldContainer);