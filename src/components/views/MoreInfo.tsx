import React from 'react';

import TagsArrayContainer from '../containers/TagsArrayContainer';

import '../../styles/more-info.css'

const MoreInfo: React.FunctionComponent<any> = function (props) {
    let {url, createDate, tagArray} = props.data; 
    return (
        <section className="more-info">
            <div className="more-info__detail" >
                <span className="more-info__caption">URL: </span>{url}
            </div>
            <time className="more-info__detail" >
                <span className="more-info__caption">Дата создания: </span>{createDate}
            </time>
            <TagsArrayContainer array={tagArray}/>
        </section>
    )
}

export default MoreInfo;