import React, { useEffect } from 'react';
import { connect } from "react-redux";

import BookmarkList from '../views/BookmarkList';
import { doLoadData } from '../../actions/loadData';
import { loadFromLocalStorage } from '../../localStorage';

const BookmarkListContainer: React.FunctionComponent<any> = (props) => {

    useEffect( () => {
        const bookMarks = loadFromLocalStorage("bookmarkList"); 
        const tags = loadFromLocalStorage("tagList");

        props.loadData( {bookMarks, tags});
    }, []) 

    return <BookmarkList bookMarks={props.bookMarks} />
}

interface IDispatchProps {
    loadData(data)
  }
  
interface IStateProps {
    // bookMarks: Array<any>,
}

function mapStateToProps(state) {
    const {bookMarks, searchFieldValue, tags} = state;

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
      loadData: function (data) {
        dispatch(doLoadData(data));
      }
    }
}

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(BookmarkListContainer);
