import React from 'react';

import BookmarkItemContainer from '../containers/BookmarkItemContainer';

interface IProps {
    bookMarks: Array<any>,
}

class BookMarkList extends React.PureComponent<IProps> {
    render() {
        return (
            <section>
              {this.props.bookMarks.map( (item: object, index: number) => {
                return <BookmarkItemContainer key={index} item={item} />
              })}
            </section>
          )
    }
}

export default BookMarkList;
