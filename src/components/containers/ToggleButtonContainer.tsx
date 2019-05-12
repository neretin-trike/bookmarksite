import React, {useState} from 'react';

import Button from '../views/Button';
import MoreInfo from '../views/MoreInfo';

const ToggleButtonContainer: React.FunctionComponent<any> = function (props) {

  const condition = ["закрыть","подробнее"];

  const [isShow, setShow] = useState(0);
  const [name, setName] = useState(condition[1]);

  const clickHandle = () => {
    setShow(isShow ? 0 : 1);      // переключатель между индексами
    setName(condition[isShow]);   // название кнопки в зависимости от текущего индекса
  }

  return (
    <React.Fragment>
      <Button name={name} clickHandle={(clickHandle)}/>
      {!!isShow && <MoreInfo data={props.data}/>}
    </React.Fragment> 
  )
}

export default ToggleButtonContainer;