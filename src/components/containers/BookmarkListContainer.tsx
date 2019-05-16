import React, { useEffect } from 'react';
import { connect } from "react-redux";

import BookmarkList from '../views/BookmarkList';
import { loadFromLocalStorage } from '../../localStorage';
import { doLoadBookmarks } from '../../actions/loadBookmarks';
import { doLoadTags } from '../../actions/loadTags';

const BookmarkListContainer: React.FunctionComponent<any> = (props) => {

    useEffect( () => {
        const bookMarks = loadFromLocalStorage("bookmarkList"); 
        const tags = loadFromLocalStorage("tagList");

        props.loadData({bookMarks, tags});
    }, []) 

    return <BookmarkList bookMarks={props.bookMarks} />
}

interface IDispatchProps {
    loadData(data)
  }
  
interface IStateProps {
    bookMarks: any,
}

function mapStateToProps(state) {
    const {tags} = state.tagState;
    const {bookMarks, searchFieldValue} = state.bookmarkState;

    let result = undefined;
    try {
        result = bookMarks.filter( (item) => {
            let answer = item.caption.includes(searchFieldValue) || 
                         item.tagArray.some( (elem) => {
                            return tags[elem].name.includes(searchFieldValue)
                         });
            return  answer;
        });
    } catch (e) {}

    return {
        bookMarks: result,
    };
}

const mapDispatchToProps = function(dispatch, _ownProps) {
    return {
      loadData: function ({bookMarks, tags}) {
        dispatch(doLoadBookmarks(bookMarks));
        dispatch(doLoadTags(tags));
      }
    }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(BookmarkListContainer);
