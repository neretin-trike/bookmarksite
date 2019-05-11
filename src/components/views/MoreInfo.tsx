import React from 'react';
import TagsArrayContainer from '../containers/TagsArrayContainer';

const MoreInfo: React.FunctionComponent<any> = function (props) {
    let {url, createDate, tagArray} = props.data; 
    return (
        <section>
            <div>{url}</div>
            <time>{createDate}</time>
            <TagsArrayContainer array={tagArray}/>
        </section>
    )
}

export default MoreInfo;