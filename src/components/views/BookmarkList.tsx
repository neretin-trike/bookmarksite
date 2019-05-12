import React from 'react';

import BookmarkItemContainer from '../containers/BookmarkItemContainer';

import '../../styles/bookmark-list.css'

interface IProps {
    bookMarks: Array<any>,
}

class BookMarkList extends React.PureComponent<IProps> {
    render() {
        return (
            <section className="bookmark-list">
              {this.props.bookMarks.map( (item: object, index: number) => {
                return <BookmarkItemContainer key={index} id={index} item={item} />
              })}
            </section>
          )
    }
}

export default BookMarkList;
