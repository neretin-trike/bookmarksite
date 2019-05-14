import React from 'react';

import BookmarkItemContainer from '../containers/BookmarkItemContainer';

import '../../styles/bookmark-list.css';

interface IProps {
    bookMarks: Array<any>,
}

const BookMarkList: React.FunctionComponent<IProps> = (props) => {
      return (
        <section className="bookmark-list">
          {props.bookMarks.map( (item: object, index: number) => {
            return <BookmarkItemContainer key={index} id={index} item={item} />
          })}
        </section>
      )
}

export default BookMarkList;
