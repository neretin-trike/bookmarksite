import React, { useState } from 'react';
import  { connect } from "react-redux";

import Field from '../views/Field';
import Button from '../views/Button';
import { doChangeAddFormValue } from '../../actions/changeAddFormValue';
import { doAddTag } from '../../actions/addTag';
import { doAddNewTag } from '../../actions/addNewTag';
import TagsArrayContainer from './TagsArrayContainer';


const TagFieldContainer: React.FunctionComponent<any> = (props) =>{
    const [isDisabled, setDisabled] = useState(true);

    const [autocomplete, setComplete] = useState("");

    let obj = {
      name: "tag",
      message: ""
    };

    const handleChange = (event) => {
      const target = event.target;
      let {value, name} = target;

      if (value.length < 3 || value.length > 32) {
        obj = {
          name: "tag",
          message: "Символов должно быть больше 3 и меньше 32"
        };
      } 

      if (value.search(/^[a-zа-яё0-9]+$/i) === -1) {
        obj = {
          name: "tag",
          message: "Должны быть символы"
        };
      }

      if (  props.tagsAddForm.some( (element) => {
        let tag = props.tags[element].name;
        if (tag.toLowerCase() === value.toLowerCase()) return true;
      }) ) {
        obj = {
          name: "tag",
          message: "Найдены дубликаты"
        };
      }

      if (props.tagsAddForm.length === 8) {
        console.log(name,"cюда зашло");
        obj = {
          name: "tag",
          message: "Не больше 8 штук"
        };
      }
            
      let hasError = false;
      if (obj.message !== "") {
        hasError = true;
      }

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

      props.changeAddFormValue(event);
    }
    
    const handleKeyPress = (event) => {
      if (event.keyCode === 9 || event.keyCode === 39) {
        event.preventDefault();

        let ob = {
          target: {
            value: autocomplete,
            name: "tag"
          }
        }
        handleChange(ob);

        setComplete("");
      }
    }

    const handleClick = (event) => {

      if (props.tagsAddForm.length === 7) {
        console.log(name,"cюда зашло");
        obj = {
          name: "tag",
          message: "Не больше 8 штук"
        };
      }

      let hasError = false;
      if (obj.message !== "") {
        hasError = true;
      }

      if (hasError) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }

      let ob = {
        target: {
          value: "",
          name: "tag"
        }
      }
      handleChange(ob);

      props.addTag(props.tagValue, props.tags);
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
      // dispatch(doChangeAddFormValue({value: "", name: "tag"}));
    }
  }
}

export default connect<IStateProps,IDispatchProps>(mapStateToProps,mapDispatchToProps)(TagFieldContainer);