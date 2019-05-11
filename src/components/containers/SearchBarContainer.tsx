import React from 'react';
import SearchBar from '../views/SearchBar';

class SearchBarContainer extends React.Component<any> {
    changeHandle() {
        console.log("происходит написание")
    }
    render() {
        return (
            <SearchBar changeHandle={this.changeHandle} />
        )
    }
}

export default SearchBarContainer;