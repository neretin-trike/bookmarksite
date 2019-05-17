import React from "react";
import { connect } from "react-redux";

import BookmarkList from "../views/BookmarkList";
import { doLoadBookmarks } from "../../actions/loadBookmarks";
import { doLoadTags } from "../../actions/loadTags";
import { useLoadData } from "../../hooks/useLoadData";

const BookmarkListContainer: React.FunctionComponent<any> = (props) => {
    useLoadData(props);

    return <BookmarkList bookMarks={props.bookMarks} />
}

const getFilter = (bookMarks, tags, searchFieldValue) => {
    let result = undefined;
    try {
        result = bookMarks.filter((item) => {
            let answer = item.caption.includes(searchFieldValue) ||
                item.tagArray.some((elem) => {
                    return tags[elem].name.includes(searchFieldValue)
                });
            return answer;
        });
    } catch (e) { }

    return result;
}

interface IStateProps {
    bookMarks: any,
}
interface IDispatchProps {
    loadData(data)
}

const mapStateToProps = (state) => {
    const { tags } = state.tagState;
    const { bookMarks, searchFieldValue } = state.bookmarkState;

    let result = getFilter(bookMarks, tags, searchFieldValue);

    return {
        bookMarks: result,
    };
}
const mapDispatchToProps = (dispatch, _ownProps) => {
    return {
        loadData: function ({ bookMarks, tags }) {
            dispatch(doLoadBookmarks(bookMarks));
            dispatch(doLoadTags(tags));
        }
    }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(BookmarkListContainer);
