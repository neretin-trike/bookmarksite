import React from 'react';

const Favicon: React.FunctionComponent<any> = function (props) {
    return (
      <figure className="bookmark-item__favicon">
        <img className="bookmark-item__img" src={props.path} alt="иконка сайта"></img>
      </figure>
    )
}

export default Favicon;
