import React from 'react';

import '../../styles/link.css'

const Caption: React.FunctionComponent<any> = function (props) {
    return (
      <a href={props.url} target="_blank" className="link bookmark-item__link">
        {props.caption}
      </a>
    )
}

export default Caption;
