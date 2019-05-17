import React from 'react';

import BookmarkItemContainer from '../containers/BookmarkItemContainer';

import '../../styles/bookmark-list.css';

interface IProps {
    bookMarks: Array<any>,
}

const BookMarkList: React.FunctionComponent<IProps> = (props) => {
    if (props.bookMarks.length !== 0) {
        return (
          <section className="bookmark-list">
            {props.bookMarks.map( (item: object, index: number) => {
              return <BookmarkItemContainer key={index} id={index} item={item} />
            })}
          </section>
        )
     } else {
        return <section className="bookmark-list__message">Пока нет ни одной закладки :(</section>
     }
}

export default BookMarkList;
