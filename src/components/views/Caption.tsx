import React from "react";

import "../../styles/link.css"

interface IProps {
  url: string,
  caption: string,
}

const Caption: React.FunctionComponent<IProps> = (props) => {
  return (
    <a href={props.url} target="_blank" className="link bookmark-item__link">
      {props.caption}
    </a>
  )
}

export default Caption;
