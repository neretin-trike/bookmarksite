import React, { useState } from "react";
import { connect } from "react-redux";

import Field from "../views/Field";
import Button from "../views/Button";
import TagsArrayContainer from "./TagsArrayContainer";
import Validate from "../../validator";
import { doChangeAddFormValue } from "../../actions/changeAddFormValue";
import { doAddNewTag } from "../../actions/addNewTag";
import { doAddTag } from "../../actions/addTag";
import { doValidateField } from "../../actions/validateField";


const autosubstitution = (setComplete, tags, value) => {
  // реализация автоподстановки
  let tag = "";
  if (tags.some((element) => {
    tag = element.name;
    // возвращает true, если набранные в поле символы совпадают с началом первого попавшегося тега в списке
    if (value !== "" && tag.startsWith(value)) return true;
  })) {
    setComplete(tag);
  } else {
    setComplete("");
  }
}

const TagFieldContainer: React.FunctionComponent<any> = (props) => {
  const [isDisabled, setDisabled] = useState(true);
  const [autocomplete, setComplete] = useState("");

  let tagClickValidate = new Validate("tag", props.validationErrors);
  let tagChangeValidate = new Validate("tag", props.validationErrors);

  const handleChange = (event) => {
    const target = event.target;
    let { value, name } = target;

    function rule() {
      if (value.length < 3 || value.length > 32) {
        return {
          name,
          message: "Тег: Символов должно быть больше 3 и меньше 32"
        };
      }
    }
    function rule2() {
      if (value.search(/^[a-zа-яё0-9]+$/i) === -1) {
        return {
          name,
          message: "Тег: в теге должны быть только буквы или цифры"
        };
      }
    }
    function rule3() {
      if (props.tagsAddForm.some((element) => {
        let tag = props.tags[element].name;
        if (tag.toLowerCase() === value.toLowerCase()) return true;
      })) {
        return {
          name,
          message: "Тег: такой тег уже добавлен"
        };
      }
    }
    function rule4() {
      if (props.tagsAddForm.length === 8) {
        return {
          name,
          message: "Тег: превышено максимальное количество тегов: 8 штук"
        };
      }
    }

    let [items, hasError] = tagChangeValidate.check([rule, rule2, rule3, rule4], true);

    if (hasError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    autosubstitution(setComplete, props.tags, value);

    props.changeAddFormValue(items, event);
  }

  const handleKeyPress = (event) => {
    // подставляет значение из подсказки с помощью клавиш TAB и Стрелки вправо
    if (event.keyCode === 9 || event.keyCode === 39) {
      event.preventDefault();

      let obj = {
        target: { value: autocomplete, name: "tag" }
      }
      handleChange(obj);
      setComplete("");
    }
  }

  const handleClick = (event) => {

    function rule() {
      if (props.tagsAddForm.length === 7) {
        return {
          name: "tag",
          message: "Тег: превышено максимальное количество тегов: 8 штук"
        };
      }
    }

    let [hasError] = tagClickValidate.check([rule], true);

    if (hasError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    let obj = {
      target: { value: "", name: "tag" }
    }
    handleChange(obj);

    props.addTag(props.tagValue, props.tags);
  }

  return <Field
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
      clickHandle={handleClick} />
    <div className="field__autocomplete">{autocomplete}</div>
    <TagsArrayContainer readonly={false} array={props.tagsAddForm} />
  </Field>

}

const getRandomColor = () => {
  const getRandomArbitrary = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  let red = getRandomArbitrary(65, 125);
  let green = getRandomArbitrary(65, 125);
  let blue = getRandomArbitrary(65, 125);

  return { red, green, blue };;
}

// Наверное не самый опитмальный способ генерации уникальных цветов
const generateUniqueColor = (color, tags) => {
  let flag = false;
  let getColor = color;

  while (flag === false) {
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

  return getColor;
}

interface IStateProps {
  tags: Array<any>,
  tagValue: string,
  tagsAddForm: Array<number>,
  validationErrors: string
}
interface IDispatchProps {
  changeAddFormValue(items, event),
  addTag(items, value, tags)
}

const mapStateToProps = (state) => {
  let { tags, tagsAddForm } = state.tagState;
  let { addFormValues, validationErrors } = state.modalWindowState;

  return {
    tags: tags as Array<any>,
    tagsAddForm: tagsAddForm as Array<number>,
    tagValue: addFormValues.tag as string,
    validationErrors: validationErrors as string
  };
}
const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    changeAddFormValue: function (items, event) {
      const target = event.target;
      let { value, name } = target;

      dispatch(doValidateField(items));

      dispatch(doChangeAddFormValue({ value, name }));
    },
    addTag: function (value, tags) {

      let tagName = tags.map(item => item.name);
      let id = tagName.indexOf(value);

      // если ID тега не найдено, создать новый тег
      if (id === -1) {

        let getColor = getRandomColor();
        getColor = generateUniqueColor(getColor, tags);

        let newTag = {
          name: value,
          color: getColor
        };
        dispatch(doAddNewTag(newTag));
      }

      dispatch(doAddTag({ id }));
    }
  }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(TagFieldContainer);