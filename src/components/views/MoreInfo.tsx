import React from "react";

import TagsArrayContainer from "../containers/TagsArrayContainer";

import "../../styles/more-info.css"

interface IProps {
    data: {
        url: string,
        createDate: string,
        tagArray: number[]
    }
}

const MoreInfo: React.FunctionComponent<IProps> = (props) => {
    let { url, createDate, tagArray } = props.data;

    return <section className="more-info">
        <div className="more-info__detail" >
            <span className="more-info__caption">URL: </span>{url}
        </div>
        <time className="more-info__detail" >
            <span className="more-info__caption">Дата создания: </span>{createDate}
        </time>
        <TagsArrayContainer readonly={true} array={tagArray} />
    </section>
}

export default MoreInfo;