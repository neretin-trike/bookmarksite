import React, { useState } from 'react';
import  { connect } from "react-redux";

import Field from '../views/Field';
import Button from '../views/Button';
import { doChangeAddFormValue } from '../../actions/changeAddFormValue';
import { doAddTag } from '../../actions/addTag';
import { doAddNewTag } from '../../actions/addNewTag';
import TagsArrayContainer from './TagsArrayContainer';
import Validate from '../../validationSetting';
import { doValidateField } from '../../actions/validateField';


const TagFieldContainer: React.FunctionComponent<any> = (props) =>{
    const [isDisabled, setDisabled] = useState(true);

    const [autocomplete, setComplete] = useState("");

    let tagClickValidate = new Validate("tag",props.validationErrors);
    let tagChangeValidate = new Validate("tag",props.validationErrors);

    const handleChange = (event) => {
      const target = event.target;
      let {value, name} = target;

      function rule() {
        if (value.length < 3 || value.length > 32) {
          return {
            name,
            message: "Символов должно быть больше 3 и меньше 32"
          };
        } 
      }
      function rule2() {
        if (value.search(/^[a-zа-яё0-9]+$/i) === -1) {
          return {
            name,
            message: "Должны быть символы"
          };
        }
      }
      function rule3() {
        if (props.tagsAddForm.some( (element) => {
          let tag = props.tags[element].name;
          if (tag.toLowerCase() === value.toLowerCase()) return true;
        }) ) {
          return {
            name,
            message: "Найдены дубликаты"
          };
        }
      }
      function rule4() {
        if (props.tagsAddForm.length === 8) {
          return {
            name,
            message: "Не больше 8 штук"
          };
        }
      }
            
      let [items, hasError] = tagChangeValidate.check([rule, rule2, rule3, rule4], true);

      if (hasError) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }

      let tag = "";
      if ( props.tags.some( (element) => {
        tag = element.name;
        if ( value !== "" && tag.startsWith(value)) return true;
      }) ) {
        setComplete(tag);
      } else {
        setComplete("");
      }

      props.changeAddFormValue(items, event);
    }
    
    const handleKeyPress = (event) => {
      if (event.keyCode === 9 || event.keyCode === 39) {
        event.preventDefault();

        let ob = {
          target: { value: autocomplete, name: "tag" }
        }
        handleChange(ob);
        setComplete("");
      }
    }

    const handleClick = (event) => {

      function rule() {
        if (props.tagsAddForm.length === 7) {
          return {
            name: "tag",
            message: "Не больше 8 штук"
          };
        }
      } 

      let [items, hasError] = tagClickValidate.check([rule], true);

      if (hasError) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }

      let ob = {
        target: { value: "", name: "tag"}
      }
      handleChange(ob);

      props.addTag(items, props.tagValue, props.tags);
    }


    return (
      <Field 
        theme="input_theme_modal"
        label="Тег" 
        placeholder="Имя тега" 
        value={props.tagValue} 
        name="tag" 
        changeHandle={handleChange}
        keypressHandle={handleKeyPress} >
        <Button 
          disabled={isDisabled}
          theme="button_theme_plus" 
          name="+" 
          title="Добавить тег"
          clickHandle={handleClick}/>
        <div className="field__autocomplete">{autocomplete}</div>
        <TagsArrayContainer readonly={false} array={props.tagsAddForm}/>
      </Field>
    )
}

interface IStateProps {
  tags: Array<any>,
  tagValue: string,
  tagsAddForm: Array<number>,
  validationErrors: string
}
function mapStateToProps(state) {
  return {
      tags: state.tags as Array<any>,
      tagValue: state.addFormValues.tag as string,
      tagsAddForm: state.tagsAddForm as Array<number>,
      validationErrors: state.validationErrors as string
  };
}

interface IDispatchProps {
  changeAddFormValue(items, event),
  addTag(items, value, tags)
}

const mapDispatchToProps = function(dispatch, _ownProps) {
  return {
    changeAddFormValue: function (items, event) {
          const target = event.target;
          let {value, name} = target;

          dispatch(doValidateField(items));
          
          dispatch(doChangeAddFormValue({value, name}));
    },
    addTag: function(items, value, tags) {
      
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

      while (flag === false) { // ToDo: поправить способ генерации уникальных цветоd
        getColor = getRandomColor();

        flag = tags.every(item => {
          let entryColor = Object.values(item.color).toString();
          let newColor = Object.values(getColor).toString();
  
          if (entryColor === newColor) {
            return false; 
          } else {
            return true;
          }
        });
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