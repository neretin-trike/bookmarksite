import React from 'react';
import  { connect } from "react-redux";

import Field from '../views/Field';
import TagsArray from '../views/TagsArray';
import Button from '../views/Button';
import { doChangeAddFormValue } from '../../actions/changeAddFormValue';
import { doAddTag } from '../../actions/addTag';
import { doAddNewTag } from '../../actions/addNewTag';
import TagsArrayContainer from './TagsArrayContainer';

class TagFieldContainer extends React.Component<any> {
  render() {
    return (
      <Field 
        theme="input_theme_modal"
        label="Тег" 
        placeholder="Имя тега" 
        value={this.props.tagValue} 
        name="tag" 
        changeHandle={this.props.changeAddFormValue}>
        <Button theme="button_theme_plus" name="+" clickHandle={()=>this.props.addTag(this.props.tagValue, this.props.tags)}/>
        
        <TagsArrayContainer readonly={false} array={this.props.tagsAddForm}/>
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

      function getRandomColor() {

        function getRandomArbitrary(min, max) {
          return Math.ceil(Math.random() * (max - min) + min);
        }

        let red = getRandomArbitrary(65,125);
        let green = getRandomArbitrary(65,125);
        let blue = getRandomArbitrary(65,125);

        return {red, green, blue};;
      }


      let getColor = getRandomColor(); 
      let flag = false;

      while (flag === false) { // ToDo: поправить способ генерации уникальных цвето
        getColor = getRandomColor();

        flag = tags.every(item => {
          let entryColor = Object.values(item.color).toString();
          let newColor = Object.values(getColor).toString();

          console.log("entryColor", entryColor);
          console.log("newColor", newColor);
  
          if (entryColor === newColor) {
            return false; 
          } else {
            return true;
          }
        });

        console.log(flag);

      }

      if (id === -1) {
        let newTag = {
          name: value,
          color: getColor
        };
        dispatch(doAddNewTag(newTag));
      } 

      dispatch(doAddTag({id}));
    }
  }
}

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(TagFieldContainer);