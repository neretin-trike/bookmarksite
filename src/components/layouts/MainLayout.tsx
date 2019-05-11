import React from 'react';

import SearchBarContainer from "../containers/SearchBarContainer";
import BookmarkListContainer from "../containers/BookmarkListContainer";

const MainLayout: React.StatelessComponent<any> = function (props) {
    return (
        <main>
            <SearchBarContainer />
            <BookmarkListContainer />
        </main>
    )
}

export default MainLayout;