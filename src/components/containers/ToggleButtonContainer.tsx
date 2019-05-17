import React from "react";

import Button from "../views/Button";
import MoreInfo from "../views/MoreInfo";
import { useToggleMoreInfo } from "../../hooks/useToggleMoreInfo";

const ToggleButtonContainer: React.FunctionComponent<any> = (props) => {
  let { isShow, name, clickHandle } = useToggleMoreInfo("скрыть", "подробнее");

  return (
    <React.Fragment>
      <Button theme="button_theme_interact" name={name} clickHandle={clickHandle} />
      {!!isShow && <MoreInfo data={props.data} />}
    </React.Fragment>
  )
}

export default ToggleButtonContainer;