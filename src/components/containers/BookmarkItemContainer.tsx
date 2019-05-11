import React from 'react';
import BookmarkItem from '../views/BookmarkItem';

class BookmarkItemContainer extends React.Component<any> {
  render() {
    return <BookmarkItem item={this.props.item}/>
  }
}

export default BookmarkItemContainer;