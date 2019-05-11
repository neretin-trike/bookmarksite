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
    const {bookMarks, searchFieldValue} = state;
    return {
        bookMarks: bookMarks.filter( (item) => {
            return item.caption.includes(searchFieldValue)
        }) as Array<any>,
    };
}

export default connect<IStateProps>(mapStateToProps)(BookmarkItemContainer);
