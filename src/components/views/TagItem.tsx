import React, { useContext } from 'react';

import '../../styles/tag-item.css'
import { useTagsArrayReadonly } from '../../hooks/useTagsArrayReadonly';

interface IProps {
    clickHandle(): void,
    color: string,
    name: string,
}

const TagItem: React.FunctionComponent<IProps> = (props) => {
    let readonly = useTagsArrayReadonly();

    return (
        <div style={{background: `${props.color}`}} className="tag-item">
            <span className="tag-item__name">{props.name}</span>
            {readonly || <button className="tag-item__button" onClick={props.clickHandle}>✕</button>}
        </div>
    )
}

export default TagItem;