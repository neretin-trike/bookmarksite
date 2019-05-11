import React from 'react';

import BookmarkList from '../views/BookmarkList';

import bookMarks from '../../data/bookMarks';

class BookmarkItemContainer extends React.Component<any> {
    render() {
        return <BookmarkList bookMarks={bookMarks} />
    }
}

export default BookmarkItemContainer;
