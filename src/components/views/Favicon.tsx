import React from 'react';

const Favicon: React.FunctionComponent<any> = function (props) {
    return (
      <figure>
        <img src={props.path} alt="иконка сайта"></img>
      </figure>
    )
}

export default Favicon;
