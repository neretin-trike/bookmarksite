import React from "react";
import { connect } from "react-redux";

import TagsArray from "../views/TagsArray";
import { TagsArrayContext } from "../../hooks/useTagsArrayReadonly";

const TagsArrayContainer: React.FunctionComponent<any> = (props) => {
    let { readonly, array, tags } = props;

    return (
        <TagsArrayContext.Provider value={readonly}>
            <TagsArray array={array} tags={tags} />
        </TagsArrayContext.Provider>
    )
}

interface IStateProps {
    tags: Array<any>,
}
const mapStateToProps = (state) => {
    let { tags } = state.tagState;
    return {
        tags: tags as Array<any>,
    };
}
export default connect<IStateProps>(mapStateToProps)(TagsArrayContainer);