import React from "react";

import SearchBarContainer from "../containers/SearchBarContainer";
import BookmarkListContainer from "../containers/BookmarkListContainer";

import "../../styles/main-layout.css"

const MainLayout: React.FunctionComponent<any> = (props) => {
    return (
        <main className="main-layout">
            <SearchBarContainer />
            <BookmarkListContainer />
        </main>
    )
}

export default MainLayout;