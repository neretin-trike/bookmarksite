import React from "react";

interface IProps {
  path: string,
}

const Favicon: React.FunctionComponent<IProps> = (props) => {
    return (
      <figure className="bookmark-item__favicon">
        <img className="bookmark-item__img" src={props.path} alt="иконка сайта"></img>
      </figure>
    )
}

export default Favicon;
