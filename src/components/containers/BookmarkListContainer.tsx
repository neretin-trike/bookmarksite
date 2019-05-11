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
    return {
        bookMarks: state.bookMarks as Array<any>,
    };
}

export default connect<IStateProps>(mapStateToProps)(BookmarkItemContainer);
