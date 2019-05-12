import React from 'react';

import SearchBarContainer from "../containers/SearchBarContainer";
import BookmarkListContainer from "../containers/BookmarkListContainer";

import '../../styles/main-layout.css'

const MainLayout: React.StatelessComponent<any> = function (props) {
    return (
        <main className="main-layout">
            <SearchBarContainer />
            <BookmarkListContainer />
        </main>
    )
}

export default MainLayout;