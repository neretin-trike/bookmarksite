import React from "react";
import { useTagsArrayReadonly } from "../../hooks/useTagsArrayReadonly";

import "../../styles/tag-item.css"

interface IProps {
    clickHandle(): void,
    color: string,
    name: string,
}

const TagItem: React.FunctionComponent<IProps> = (props) => {
    let {color, name, clickHandle} = props;
    let readonly = useTagsArrayReadonly();

    return <div style={{ background: `${color}` }} className="tag-item">
        <span className="tag-item__name">{name}</span>
        {readonly || <button className="tag-item__button" onClick={clickHandle}>✕</button>}
    </div>
}

export default TagItem;