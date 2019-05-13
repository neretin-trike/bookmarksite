import React from 'react';
import { connect } from "react-redux";

import BookmarkList from '../views/BookmarkList';

class BookmarkItemContainer extends React.Component<any> {
    render() {
        return <BookmarkList bookMarks={this.props.bookMarks} />
    }
}

interface IStateProps {
    bookMarks: Array<any>,
}
function mapStateToProps(state) {
    const {bookMarks, searchFieldValue, tags} = state;

    let result = bookMarks.filter( (item) => {
        let answer = item.caption.includes(searchFieldValue) || 
                     item.tagArray.some( (elem) => {
                        return tags[elem].name.includes(searchFieldValue)
                     });
        return  answer;
    });

    return {
        bookMarks: result as Array<any>,
    };
}

export default connect<IStateProps>(mapStateToProps)(BookmarkItemContainer);
