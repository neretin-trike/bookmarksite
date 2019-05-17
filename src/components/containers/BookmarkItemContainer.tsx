import React from "react";
import BookmarkItem from "../views/BookmarkItem";

const BookmarkItemContainer: React.FunctionComponent<any> = (props) => {
    return <BookmarkItem id={props.id} item={props.item} />
}

export default BookmarkItemContainer;